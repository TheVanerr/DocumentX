# -*- coding: utf-8 -*-
import re
from pathlib import Path

scripts = Path(__file__).resolve().parent
for p in scripts.glob("_write_*.py"):
    if p.name == "_patch_write_scripts.py":
        continue
    t = p.read_text(encoding="utf-8")
    orig = t
    patterns = [
        r"\nBu bölüm, \*\*KNV 30 3000 2B\*\* makinesinin \(proje no: \*\*1726050\*\*\) [^\n]+\n",
        r"\nBu bölüm, \*\*KNV 30 3000 2B\*\* [^\n]+\n",
        r"\nBu bölüm, KNV 30 3000 2B makinesinin [^\n]+\n",
        r"\nThis section defines [^\n]+KNV 30 3000 2B[^\n]+\n",
        r"\nDieser Abschnitt beschreibt [^\n]+KNV 30 3000 2B[^\n]+\n",
    ]
    for pat in patterns:
        t = re.sub(pat, "\n", t)
    if t != orig:
        p.write_text(t, encoding="utf-8")
        print("patched", p.name)
