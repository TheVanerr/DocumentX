# -*- coding: utf-8 -*-
"""Generate spare parts tables from DATA — 9.1.5, 13.3, section 13 intro."""
from pathlib import Path
from urllib.parse import quote

ROOT = Path(r"c:\Users\fatih.gural\Desktop\FULL DATABASE\PROG\DocumentX\projects\1726050-ALPER-KNV-30")
DATA = ROOT / "1726050-ALPER-KNV 30 DATA"
MAIN = ROOT / "09-maintenance/01-main-inst/main-inst.tr.md"
PART = ROOT / "13-documents/03-part-list/part-list.tr.md"
DOC13 = ROOT / "13-documents/documents.tr.md"

IMG_PREFIX = "../../assets/9.1/"


def parse_parts(text: str) -> list[dict]:
    rows = []
    in_block = False
    for line in text.splitlines():
        if line.strip() == "[PARCA_LISTESI]":
            in_block = True
            continue
        if in_block and line.startswith("[") and line.endswith("]"):
            break
        if not in_block or line.startswith("#") or not line.strip():
            continue
        raw = line.strip()
        if raw.startswith("X:"):
            raw = raw[2:]
        elif raw.startswith(("Parça", "Mekanik", "Elektrik", "Wear")):
            continue
        if "|" not in raw:
            continue
        parts = [p.strip() for p in raw.split("|")]
        if len(parts) < 6:
            continue
        code, name, cat, stock, loc, reason = parts[:6]
        rows.append({"code": code, "name": name, "cat": cat, "stock": stock, "loc": loc, "reason": reason})
    return rows


def stock_text(stock: str, lang: str = "tr") -> str:
    if stock == "0":
        if lang == "en":
            return "0 (on order)"
        if lang == "de":
            return "0 (auf Bestellung)"
        return "0 (siparişle)"
    return stock


def table_header(with_image: bool = False, lang: str = "tr") -> str:
    if with_image:
        if lang == "en":
            return (
                "| Image | Order code | Part name | Category | Recommended stock | Location / function | Rationale |\n"
                "|-------|------------|-----------|----------|-------------------|---------------------|-----------|"
            )
        return (
            "| Görsel | Sipariş kodu | Parça adı | Kategori | Önerilen stok | Konum / fonksiyon | Gerekçe |\n"
            "|--------|--------------|-----------|----------|---------------|-------------------|---------|"
        )
    if lang == "en":
        return (
            "| Order code | Part name | Category | Recommended stock | Location / function | Rationale |\n"
            "|------------|-----------|----------|-------------------|---------------------|-----------|"
        )
    if lang == "de":
        return (
            "| Bestellcode | Bezeichnung | Kategorie | Empf. Bestand | Ort / Funktion | Begründung |\n"
            "|-------------|-------------|-----------|---------------|------------------|------------|"
        )
    return (
        "| Sipariş kodu | Parça adı | Kategori | Önerilen stok | Konum / fonksiyon | Gerekçe |\n"
        "|--------------|-----------|----------|---------------|-------------------|---------|"
    )


def table_rows(rows: list[dict], with_image: bool = False, lang: str = "tr") -> str:
    lines = [table_header(with_image, lang)]
    for r in rows:
        if with_image:
            fn = quote(f"{r['code']}.png", safe="")
            img = f"![{r['name']}]({IMG_PREFIX}{fn})"
            lines.append(
                f"| {img} | {r['code']} | {r['name']} | {r['cat']} | {stock_text(r['stock'], lang)} "
                f"| {r['loc']} | {r['reason']} |"
            )
        else:
            lines.append(
                f"| {r['code']} | {r['name']} | {r['cat']} | {stock_text(r['stock'], lang)} "
                f"| {r['loc']} | {r['reason']} |"
            )
    return "\n".join(lines)


def section_915(rows: list[dict]) -> str:
    subset = [r for r in rows if r["cat"] in ("Kritik", "Tüketim")]
    return f"""## 9.1.5 Yedek parça

Sahada bulundurulması önerilen yedek parçalar aşağıdadır. **Kritik** parçalar arızada makinenin çalışmasını veya güvenliğini doğrudan etkiler; **Tüketim** parçaları planlı bakımda değiştirilir. Önerilen stok miktarları duruş süresini kısaltmak içindir; zorunlu sipariş taahhüdü değildir.

Tam parça listesi (tüm kalemler) için bkz. Bölüm **13.3**.

Parça fotoğrafları `assets/9.1/` klasöründe **sipariş kodu** ile adlandırılır (ör. `10 06675.png`).

{table_rows(subset, with_image=False)}
"""


def section_133(rows: list[dict]) -> str:
    n = len(rows)
    return f"""# 13.3 Parça listesi

Makine **yedek parça listesi (BOM)** bu kılavuza gömülüdür; ayrı evrak olarak teslim edilmez. SSOT: `1726050-ALPER-KNV 30 DATA` — `[PARCA_LISTESI]`.

Operasyonel özet (Kritik + Tüketim) için bkz. Bölüm **9.1.5**.

Parça fotoğrafları (isteğe bağlı) `assets/9.1/{{sipariş kodu}}.png` olarak eklenir.

---

## 13.3.1 Yedek parça tablosu ({n} kalem)

{table_rows(rows, with_image=False)}

---

## 13.3.2 Parça görselleri

Fotoğraflar yüklendikçe aşağıdaki tabloda görünür. Dosya adı = sipariş kodu (ör. `10 06675.png`).

{table_rows(rows, with_image=True)}

---

## 13.3.3 Kılavuz ilişkisi

| Konu | Referans |
|------|----------|
| Kritik ve tüketim parçaları (özet) | Bölüm **9.1.5** |
| Tam parça listesi | Bu bölüm — **13.3.1** |
| Periyodik bakım | Bölüm **9.1.3**, **10.1** |
"""


def section_13_intro_table(rows: list[dict]) -> str:
    n = len(rows)
    return f"""
---

## Yedek parça listesi (BOM) — {n} kalem

Aşağıdaki tablo makineye ait yedek parça listesidir. Ayrıntılı bölüm: **13.3.1**.

{table_rows(rows, with_image=False)}
"""


def replace_section(content: str, start_marker: str, end_marker: str, new_body: str) -> str:
    i = content.find(start_marker)
    if i < 0:
        raise SystemExit(f"Marker not found: {start_marker}")
    j = content.find(end_marker, i + 1)
    if j < 0:
        raise SystemExit(f"End marker not found: {end_marker}")
    return content[:i] + new_body + content[j:]


def patch_doc13_intro(rows: list[dict], path: Path, block_fn) -> None:
    text = path.read_text(encoding="utf-8-sig")
    for marker in (
        "\n---\n\n## Yedek parça listesi (BOM)",
        "\n---\n\n## Spare parts list (BOM)",
        "\n---\n\n## Ersatzteilliste (Stückliste)",
    ):
        i = text.find(marker)
        if i >= 0:
            text = text[:i].rstrip() + "\n"
            break
    text = text.rstrip() + block_fn(rows) + "\n"
    path.write_text(text, encoding="utf-8")


def section_133_en(rows: list[dict]) -> str:
    n = len(rows)
    cat_map = {"Kritik": "Critical", "Tüketim": "Consumable", "Önerilen": "Recommended"}
    en_rows = [{**r, "cat": cat_map.get(r["cat"], r["cat"])} for r in rows]
    return f"""# 13.3 Parts list

The machine **spare parts list (BOM)** is embedded in this manual; it is not supplied as a separate document. SSOT: `1726050-ALPER-KNV 30 DATA` — `[PARCA_LISTESI]`.

Operational summary (Critical + Consumable): Section **9.1.5**.

Optional part photos: `assets/9.1/{{order code}}.png`.

---

## 13.3.1 Spare parts table ({n} items)

{table_rows(en_rows, with_image=False, lang='en')}

---

## 13.3.2 Part images

When photos are added, they appear below. File name = order code (e.g. `10 06675.png`).

{table_rows(en_rows, with_image=True, lang='en')}

---

## 13.3.3 Manual cross-reference

| Topic | Reference |
|-------|-----------|
| Critical and consumable parts (summary) | Section **9.1.5** |
| Full parts list | This section — **13.3.1** |
| Periodic maintenance | Sections **9.1.3**, **10.1** |
"""


def section_133_de(rows: list[dict]) -> str:
    n = len(rows)
    cat_map = {"Kritik": "Kritisch", "Tüketim": "Verbrauch", "Önerilen": "Empfohlen"}
    de_rows = [{**r, "cat": cat_map.get(r["cat"], r["cat"])} for r in rows]
    return f"""# 13.3 Teileliste

Die **Ersatzteilliste (Stückliste)** ist in diese Anleitung eingebettet; kein separates Dokument. SSOT: `1726050-ALPER-KNV 30 DATA` — `[PARCA_LISTESI]`.

Betriebsübersicht (Kritisch + Verbrauch): Abschnitt **9.1.5**.

Optionale Teilefotos: `assets/9.1/{{Bestellcode}}.png`.

---

## 13.3.1 Ersatzteiltabelle ({n} Positionen)

{table_rows(de_rows, with_image=False, lang='de')}

---

## 13.3.2 Querverweise

| Thema | Referenz |
|-------|----------|
| Kritische und Verbrauchsteile (Übersicht) | Abschnitt **9.1.5** |
| Vollständige Teileliste | Dieser Abschnitt — **13.3.1** |
| Periodische Wartung | Abschnitt **9.1.3**, **10.1** |
"""


def section_13_intro_table_en(rows: list[dict]) -> str:
    n = len(rows)
    cat_map = {"Kritik": "Critical", "Tüketim": "Consumable", "Önerilen": "Recommended"}
    en_rows = [{**r, "cat": cat_map.get(r["cat"], r["cat"])} for r in rows]
    return f"""
---

## Spare parts list (BOM) — {n} items

The table below is the machine spare parts list. Details: **13.3.1**.

{table_rows(en_rows, with_image=False, lang='en')}
"""


def section_13_intro_table_de(rows: list[dict]) -> str:
    n = len(rows)
    cat_map = {"Kritik": "Kritisch", "Tüketim": "Verbrauch", "Önerilen": "Empfohlen"}
    de_rows = [{**r, "cat": cat_map.get(r["cat"], r["cat"])} for r in rows]
    return f"""
---

## Ersatzteilliste (Stückliste) — {n} Positionen

Die folgende Tabelle ist die Ersatzteilliste der Maschine. Details: **13.3.1**.

{table_rows(de_rows, with_image=False, lang='de')}
"""


def main():
    rows = parse_parts(DATA.read_text(encoding="utf-8-sig"))
    if len(rows) != 22:
        raise SystemExit(f"Expected 22 parts, got {len(rows)}")

    main_text = MAIN.read_text(encoding="utf-8-sig")
    main_text = replace_section(
        main_text, "## 9.1.5 Yedek parça", "## 9.1.6 Bakım kayıt formu",
        section_915(rows) + "\n---\n\n",
    )
    MAIN.write_text(main_text, encoding="utf-8")

    PART.write_text(section_133(rows) + "\n", encoding="utf-8")
    (ROOT / "13-documents/03-part-list/part-list.en.md").write_text(section_133_en(rows) + "\n", encoding="utf-8")
    (ROOT / "13-documents/03-part-list/part-list.de.md").write_text(section_133_de(rows) + "\n", encoding="utf-8")

    patch_doc13_intro(rows, DOC13, section_13_intro_table)
    patch_doc13_intro(rows, ROOT / "13-documents/documents.en.md", section_13_intro_table_en)
    patch_doc13_intro(rows, ROOT / "13-documents/documents.de.md", section_13_intro_table_de)

    print(f"Updated 9.1.5 ({len([r for r in rows if r['cat'] in ('Kritik','Tüketim')])} rows)")
    print(f"Updated 13.3 TR/EN/DE ({len(rows)} rows)")
    print("Updated 13 Dokümanlar intro (TR + EN + DE)")


if __name__ == "__main__":
    main()
