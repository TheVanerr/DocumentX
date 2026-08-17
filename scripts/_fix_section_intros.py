# -*- coding: utf-8 -*-
"""Remove repetitive section opener paragraphs (model / project no boilerplate)."""
import re
from pathlib import Path

PROJ = Path(__file__).resolve().parents[1] / "projects" / "1726050-ALPER-KNV-30"

# Full-line openers to remove (after first heading)
REMOVE_LINE = re.compile(
    r"^("
    r"Bu bölüm, .+|"
    r"This section defines .+|"
    r"This section covers .+|"
    r"This section contains .+|"
    r"Dieser Abschnitt (?:beschreibt|umfasst|definiert|enthält) .+"
    r")\s*\n",
    re.MULTILINE | re.IGNORECASE,
)

# Shorten redundant model prefix in body (optional cleanup)
SHORTEN = [
    (re.compile(r"KNV 30 3000 2B makinesinde "), ""),
    (re.compile(r"KNV 30 3000 2B makinesinin "), ""),
    (re.compile(r"for the \*\*KNV 30 3000 2B\*\* machine"), ""),
    (re.compile(r"for the KNV 30 3000 2B machine"), ""),
    (re.compile(r"der \*\*KNV 30 3000 2B\*\* Maschine"), ""),
    (re.compile(r"der KNV 30 3000 2B Maschine"), ""),
]

# Keep identity block in machine-description only
KEEP_IDENTITY = "03-overview/01-machine-description"


def fix_content(text: str, rel: str) -> str:
    if KEEP_IDENTITY in rel.replace("\\", "/"):
        # Only remove generic "Bu bölüm," if present; keep identity paragraph
        lines = text.splitlines(keepends=True)
        if len(lines) > 2:
            out = [lines[0]]
            i = 1
            while i < len(lines) and lines[i].strip() == "":
                out.append(lines[i])
                i += 1
            if i < len(lines) and lines[i].startswith("Bu bölüm,"):
                i += 1
                if i < len(lines) and lines[i].strip() == "":
                    i += 1
            out.extend(lines[i:])
            text = "".join(out)
        return text

    text = REMOVE_LINE.sub("", text)

    for pat, repl in SHORTEN:
        text = pat.sub(repl, text)

    # Collapse triple+ newlines after title
    text = re.sub(r"(# .+\n)\n{3,}", r"\1\n\n", text)
    return text


def main():
    n = 0
    for p in sorted(PROJ.rglob("*.md")):
        rel = str(p.relative_to(PROJ))
        orig = p.read_text(encoding="utf-8")
        new = fix_content(orig, rel)
        if new != orig:
            p.write_text(new, encoding="utf-8")
            n += 1
    print(f"Fixed {n} files")


if __name__ == "__main__":
    main()
