# -*- coding: utf-8 -*-
"""Uppercase main chapter H1 titles (# N. Title) in TR/EN/DE."""
import re
from pathlib import Path

PROJ = Path(__file__).resolve().parents[1] / "projects" / "1726050-ALPER-KNV-30"

MAIN_STEMS = {
    "overview", "assembly", "settings", "operation", "capacity",
    "maintenance", "cleaning", "troubleshooting", "dismantle", "documents", "index",
}

H1 = re.compile(r"^(# \d+\.)\s*(.+)$", re.UNICODE)


def upper_title(text: str, lang: str) -> str:
    if lang == "tr":
        return text.translate(str.maketrans("iı", "İI")).upper()
    return text.upper()


def main():
    n = 0
    for p in sorted(PROJ.rglob("*.md")):
        rel = p.relative_to(PROJ)
        if len(rel.parts) != 2:
            continue
        parts = p.name.rsplit(".", 2)
        if len(parts) != 3:
            continue
        stem, lang, _ext = parts
        if stem not in MAIN_STEMS:
            continue
        if lang not in ("tr", "en", "de"):
            continue
        lines = p.read_text(encoding="utf-8").splitlines(keepends=True)
        if not lines:
            continue
        m = H1.match(lines[0].rstrip("\n\r"))
        if not m:
            continue
        prefix, title = m.group(1), m.group(2)
        new_line = f"{prefix} {upper_title(title, lang)}\n"
        if lines[0] != new_line:
            lines[0] = new_line
            p.write_text("".join(lines), encoding="utf-8")
            n += 1
            print(p.relative_to(PROJ), "=>", new_line.strip())
    print(f"Updated {n} files")


if __name__ == "__main__":
    main()
