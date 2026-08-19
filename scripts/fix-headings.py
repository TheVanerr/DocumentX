# -*- coding: utf-8 -*-
"""Fix manual heading capitalization per DocumentX rules."""
import re
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "projects" / "1726050-ALPER-KNV-30"

ACRONYMS = [
    "As-Built", "E-Stop", "PROFINET", "Profinet", "Fieldbus",
    "LOTO", "KKD", "HMI", "PLC", "RFID", "KNV", "ISO", "OPC",
    "I/O", "G/Ç", "G/O", "PDF", "QR", "USB", "IP", "VFD", "EN", "TS",
    "Start", "Stop", "Cycle", "Setup", "Home", "Step",
]

EN_LOWER = {"and", "or", "the", "a", "an", "of", "for", "to", "in", "on", "with"}
DE_LOWER = {"und", "oder", "für", "von", "mit", "zu", "im", "in", "am", "an", "des", "der", "die", "das", "den", "dem"}


def tr_upper(text: str) -> str:
    return text.translate(str.maketrans("iışğüöç", "İIŞĞÜÖÇ")).upper()


def restore_acronyms(text: str) -> str:
    for acr in ACRONYMS:
        text = re.sub(rf"\b{re.escape(acr)}\b", acr, text, flags=re.IGNORECASE)
    return text


def tr_lower(text: str) -> str:
    return text.translate(str.maketrans("Iİ", "ıi")).lower()


def tr_sentence(text: str) -> str:
    if not text:
        return text
    lower = tr_lower(text)
    if not lower:
        return lower
    first = lower[0]
    if first == "i":
        head = "İ"
    elif first == "ı":
        head = "I"
    else:
        head = first.upper()
    result = head + lower[1:]
    return restore_acronyms(result)


def en_sentence(text: str) -> str:
    if not text:
        return text
    words = text.split()
    out = []
    for i, word in enumerate(words):
        bare = re.sub(r"^[\(\[]|[\)\],;:\.]$", "", word)
        if bare.upper() in {a.upper() for a in ACRONYMS}:
            out.append(re.sub(re.escape(bare), bare.upper() if bare.isupper() else bare, word, count=1, flags=re.IGNORECASE))
            continue
        if i == 0:
            out.append(word.capitalize())
        elif word.lower() in EN_LOWER:
            out.append(word.lower())
        else:
            out.append(word.lower())
    return restore_acronyms(" ".join(out))


def de_sentence(text: str) -> str:
    if not text:
        return text
    words = text.split()
    out = []
    for i, word in enumerate(words):
        core = word.strip("(),")
        if i > 0 and core.lower() in DE_LOWER:
            prefix = "(" if word.startswith("(") else ""
            suffix = ")" if word.endswith(")") else ""
            out.append(f"{prefix}{core.lower()}{suffix}")
        else:
            out.append(word)
    return restore_acronyms(" ".join(out))


UPPER = {"tr": tr_upper, "en": lambda t: t.upper(), "de": tr_upper}
SENTENCE = {"tr": tr_sentence, "en": en_sentence, "de": de_sentence}

HEADING_RE = re.compile(r"^(#{1,2})\s+(.+?)\s*$")
BOLUM_RE = re.compile(r"(?i)^bölüm\s+(\d+)\s*[-–—:\u2013\u2014]\s*(.+)$")
CHAPTER_RE = re.compile(r"(?i)^chapter\s+(\d+)\s*[-–—:\u2013\u2014]\s*(.+)$")
KAPITEL_RE = re.compile(r"(?i)^kapitel\s+(\d+)\s*[-–—:\u2013\u2014]\s*(.+)$")
MAIN_RE = re.compile(r"^#\s+(\d{1,2})\.\s+(.+)$")
SUB_RE = re.compile(r"^(#{1,2})\s+(\d+\.\d+(?:\.\d+)*)\.?\s+(.+)$")
BROKEN_SUB_RE = re.compile(r"^(#{1,2})\s+(\d+\.\d+)\s+(\d+)\s+(.+)$")
BROKEN_MAIN_SUB_RE = re.compile(r"^#\s+(\d+)\.\s+(\d+)\s+(.+)$")
BROKEN_RANGE_RE = re.compile(r"^(#{1,2})\s+(\d+)\s+(\d+(?:\.\d+)*)\s*[-–]\s*(\d+(?:\.\d+)*)\s+(.+)$")


def main_title(title: str, lang: str) -> str:
    if lang == "tr" and any(c.islower() for c in title):
        return tr_upper(tr_sentence(title))
    return UPPER[lang](title)


def clean_turkish_text(text: str) -> str:
    text = unicodedata.normalize("NFC", text)
    text = text.replace("i\u0307", "i").replace("I\u0307", "İ").replace("İ\u0307", "İ").replace("\u0307", "")
    fixes = {
        "kurallari": "kuralları",
        "sorumluluklari": "sorumlulukları",
        "donanim": "donanım",
        "Taşima": "Taşıma",
        "taşima": "taşıma",
        "Kalinti": "Kalıntı",
        "nakliye": "nakliye",
    }
    for old, new in fixes.items():
        text = text.replace(old, new)
    return text


def normalize_line(line: str) -> str:
    line = line.lstrip("\ufeff")
    line = unicodedata.normalize("NFC", line)
    if line.startswith("#"):
        prefix = line.split(" ", 1)[0]
        body = line[len(prefix) :].lstrip()
        return f"{prefix} {clean_turkish_text(body)}"
    return line


def process_line(line: str, lang: str) -> str:
    line = normalize_line(line)
    if not line.startswith("#"):
        return line

    broken_range = BROKEN_RANGE_RE.match(line)
    if broken_range:
        line = (
            f"{broken_range.group(1)} {broken_range.group(2)}.{broken_range.group(3)} "
            f"- {broken_range.group(4)} {broken_range.group(5)}"
        )

    broken_main = BROKEN_MAIN_SUB_RE.match(line)
    if broken_main:
        line = f"# {broken_main.group(1)}.{broken_main.group(2)} {broken_main.group(3)}"

    broken = BROKEN_SUB_RE.match(line)
    if broken:
        line = f"{broken.group(1)} {broken.group(2)}.{broken.group(3)} {broken.group(4)}"

    m = HEADING_RE.match(line)
    if not m:
        return line

    hashes, rest = m.group(1), m.group(2)

    for pattern in (BOLUM_RE, CHAPTER_RE, KAPITEL_RE):
        bm = pattern.match(rest)
        if bm:
            num, title = bm.group(1), bm.group(2).strip()
            return f"# {num}. {main_title(title, lang)}"

    main = MAIN_RE.match(line)
    if main:
        num, title = main.group(1), main.group(2).strip()
        return f"# {num}. {main_title(title, lang)}"

    sub = SUB_RE.match(line)
    if sub:
        hashes, section_num, title = sub.group(1), sub.group(2), sub.group(3).strip()
        return f"{hashes} {section_num} {SENTENCE[lang](title)}"

    return f"{hashes} {SENTENCE[lang](rest)}"


def get_lang(path: Path) -> str:
    if path.name.endswith(".en.md"):
        return "en"
    if path.name.endswith(".de.md"):
        return "de"
    return "tr"


def main() -> None:
    changes = 0
    files = 0
    for path in sorted(ROOT.rglob("*.md")):
        if not path.name.endswith((".tr.md", ".en.md", ".de.md")):
            continue
        lang = get_lang(path)
        text = path.read_text(encoding="utf-8-sig")
        lines = text.splitlines()
        new_lines = []
        file_changes = 0
        for line in lines:
            if line.startswith("#"):
                new_line = process_line(line, lang)
                if new_line != line:
                    file_changes += 1
                new_lines.append(new_line)
            else:
                new_lines.append(line)
        if file_changes:
            path.write_text(
                "\n".join(new_lines) + ("\n" if text.endswith("\n") else ""),
                encoding="utf-8",
            )
            files += 1
            changes += file_changes

    print(f"Updated {files} files, {changes} heading changes")


if __name__ == "__main__":
    main()
