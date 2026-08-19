# -*- coding: utf-8 -*-
"""Scan 1726050 ALPER manual for missing data, assets, EKSIK markers."""
import re
from pathlib import Path
from collections import defaultdict
from urllib.parse import unquote

ROOT = Path(r"c:\Users\fatih.gural\Desktop\FULL DATABASE\PROG\DocumentX\projects\1726050-ALPER-KNV-30")
DATA_FILE = ROOT / "1726050-ALPER-KNV 30 DATA"
OUT_FILE = ROOT / "EKSIK.md"
ASSETS = ROOT / "assets"

SECTION_MAP = {
    "01-introduction": "Bölüm 1 — Giriş",
    "02-safety": "Bölüm 2 — Güvenlik",
    "03-overview": "Bölüm 3 — Genel bakış",
    "04-transport": "Bölüm 4 — Taşıma",
    "05-assembly": "Bölüm 5 — Kurulum",
    "06-settings": "Bölüm 6 — Ayarlar",
    "07-operation": "Bölüm 7 — Operasyon",
    "08-capacity": "Bölüm 8 — Kapasite",
    "09-maintenance": "Bölüm 9 — Bakım",
    "10-cleaning": "Bölüm 10 — Temizlik",
    "11-troubleshooting": "Bölüm 11 — Arıza giderme",
    "12-dismantle": "Bölüm 12 — Demontaj",
    "13-documents": "Bölüm 13 — Dokümanlar",
    "14-index": "Bölüm 14 — Ekler/indeks",
}

# Tamamlanan — EKSIK listesine alınmaz
SKIP_DATA_BLOCKS = {
    "BAKIM_PERIYOT",
    "PARCA_LISTESI",
    "BAKIM_YEDEK_PARCA",
    "BAKIM_YEDEK_PARCA_NOT",
    "DOKUMANLAR",
    "CIZIMLER",
    "URUN_KAPASITE",
    "OZEL_KURULUM",
    "EKLER",
    "SOZLUK",
    "INDEKS",
}

SKIP_DATA_KEY_SUBSTR = (
    "kapasite",
    "reçete",
    "recete",
    "ürün a",
    "ürün b",
    "ürün c",
    "ürün boyut",
    "ürün ağırlık",
    "ürün format",
    "nominal kapasite",
    "maksimum kapasite",
    "test edilen kapasite",
    "ambalaj tipi",
)

SKIP_VAL_PREFIXES = (
    "KD",
    "Kılavuz",
    "Kullanıcı firma",
    "Bkz.",
    "Bkz ",
    "Bu dosya",
    "Ayrı evrak — teslim",
    "P&ID +",
    "Uygulanmaz",
    "Gömülü",
    "Tablo",
)

SKIP_MD_PATH_PARTS = (
    "08-capacity",
    "13-documents",
    "14-index",
)

SKIP_MD_LINE_SUBSTR = (
    "kapasite",
    "Kapasite",
    "reçete",
    "Reçete",
    "ürün a",
    "Ürün A",
)


def section_for(path: str) -> str:
    for k, v in SECTION_MAP.items():
        if k in path.replace("\\", "/"):
            return v
    return "Genel"


def resolve_asset(ref: str, md_path: Path) -> Path | None:
    ref = ref.strip().split("#")[0].split("?")[0]
    ref = unquote(ref.replace("\\", "/"))
    candidates = []
    if ref.startswith("assets/"):
        candidates.append(ROOT / ref)
    elif ref.startswith("../../assets/"):
        candidates.append((md_path.parent / ref).resolve())
    elif ref.startswith("../assets/"):
        candidates.append((md_path.parent / ref).resolve())
    elif ref.startswith("../"):
        candidates.append((md_path.parent / ref).resolve())
    else:
        candidates.append((md_path.parent / ref).resolve())
        candidates.append(ROOT / "assets" / ref)
    for c in candidates:
        try:
            if c.exists():
                return c
        except OSError:
            pass
    return None


def should_skip_data_gap(block: str, key: str, val: str) -> bool:
    if block in SKIP_DATA_BLOCKS:
        return True
    kl = key.lower()
    if any(s in kl for s in SKIP_DATA_KEY_SUBSTR):
        return True
    if block == "KAPASITE_PROSES":
        return True
    for p in SKIP_VAL_PREFIXES:
        if val.startswith(p):
            return True
    if val.startswith("Ayrı evrak") and "teslim paketi" in val:
        return True  # P&ID / elektrik / layout — kılavuz metni tamam
    return False


def parse_data_gaps(text: str) -> list[tuple[str, str, str]]:
    gaps = []
    current_block = ""
    for line in text.splitlines():
        s = line.strip()
        if s.startswith("[") and s.endswith("]") and not s.startswith("[#"):
            current_block = s.strip("[]")
            continue
        if s.startswith("#") or s.startswith("- ") or s.startswith("X:"):
            continue
        if ":" in s:
            key, _, val = s.partition(":")
            key, val = key.strip(), val.strip()
            if should_skip_data_gap(current_block, key, val):
                continue
            if not val or val in ("Bilinmiyor", "Bilinmiyor."):
                gaps.append((current_block, key, val or "(boş)"))
    return gaps


def should_skip_md_eksik(rel: str, line: str) -> bool:
    rp = rel.replace("\\", "/")
    if any(p in rp for p in SKIP_MD_PATH_PARTS):
        return True
    if any(s in line for s in SKIP_MD_LINE_SUBSTR):
        return True
    return False


def main():
    existing_assets = sorted(
        str(p.relative_to(ROOT)).replace("\\", "/")
        for p in ASSETS.rglob("*")
        if p.is_file()
    )

    eksik_md = []
    missing_imgs: dict[str, set[str]] = defaultdict(set)
    img_desc: dict[str, str] = {}
    img_link = re.compile(r"!\[([^\]]*)\]\(([^)]+)\)")

    for md in sorted(ROOT.rglob("*.tr.md")):
        text = md.read_text(encoding="utf-8-sig")
        rel = str(md.relative_to(ROOT)).replace("\\", "/")
        sec = section_for(rel)

        for i, line in enumerate(text.splitlines(), 1):
            if ("EKSİK" in line or "EKSIK" in line) and not should_skip_md_eksik(rel, line):
                eksik_md.append((rel, i, line.strip(), sec))

            for m in img_link.finditer(line):
                alt, ref = m.group(1), m.group(2)
                if not resolve_asset(ref, md):
                    norm = ref.replace("\\", "/")
                    missing_imgs[norm].add(f"{sec} — `{rel}`")
                    if alt and alt not in ("", "Görsel"):
                        img_desc[norm] = alt

    data_gaps = parse_data_gaps(DATA_FILE.read_text(encoding="utf-8-sig"))

    # Split missing images: spare parts 9.1 vs FOTO vs other
    parca_imgs = {k: v for k, v in missing_imgs.items() if "9.1/" in k.replace("\\", "/") or "9.1%2F" in k}
    hmi_imgs = {
        k: v for k, v in missing_imgs.items()
        if k not in parca_imgs
        and any(x in k.lower() for x in ("hmi", "alarm", "calisma", "manuel", "recete", "hazirlik", "start", "sicaklik", "settings", "operation"))
    }
    other_imgs = {k: v for k, v in missing_imgs.items() if k not in parca_imgs and k not in hmi_imgs}

    lines = [
        "# 1726050-ALPER-KNV-30 — KILAVUZ TAMAMLAMA EKSİK LİSTESİ",
        "",
        "> **Son güncelleme:** Bakım periyodu, yedek parça/BOM, Bölüm 13 (dokümanlar/çizimler/parça listesi) tamamlandı.",
        "> **Kaynak:** DATA + `.tr.md` + `assets/` taraması.",
        "> **Yenile:** `python scripts/scan-eksik-alper.py`",
        "",
        "---",
        "",
        "## TAMAMLANAN (EKSIK listesinden çıkarıldı)",
        "",
        "| Konu | Durum | Konum |",
        "|------|--------|-------|",
        "| Yedek parça / BOM (22 kalem) | [x] | DATA `[PARCA_LISTESI]` → **9.1.5**, **13.3** |",
        "| Bakım periyodu (günlük → yıllık) | [x] | DATA `[BAKIM_PERIYOT]` → **9.1.3** |",
        "| Bölüm 13 — Doküman listesi | [x] | **13.1** (P&ID + Elektrik + Layout ayrı evrak) |",
        "| Bölüm 13 — Çizimler / layout | [x] | **13.2** |",
        "| Bölüm 13 — Parça listesi (gömülü) | [x] | **13.3.1** |",
        "| Bölüm 14 — Ekler / sözlük / indeks | [x] | **14** (kılavuz içi referanslar) |",
        "| Kapasite / reçete / ürün parametreleri | KD | **Bölüm 8** — kullanıcı hattı ayarı; kılavuzda doldurulmaz |",
        "",
        "---",
        "",
        "## ÖNCELİK ÖZETİ (kalan işler)",
        "",
        "| Öncelik | Konu | Not |",
        "|---------|------|-----|",
        "| P1 | HMI ekran görüntüleri | Bölüm 3.4, 6, 7, 11 |",
        "| P1 | Makine / modül FOTO-* | Bölüm 3, 5, 7 |",
        "| P1 | Kimlik etiketi fotoğrafı | Bölüm 1.3 |",
        "| P2 | Yedek parça fotoğrafları | `assets/9.1/{sipariş kodu}.png` — 22 adet |",
        "| P2 | Yağlama (gres tipi, redüktör yağı) | Bölüm 9.1.4 |",
        "| P2 | Arıza tablosu + servis kriterleri | Bölüm 11 |",
        "| P3 | Revizyon tablosu (1.1) | Kapak / doküman kontrolü |",
        "",
        "---",
        "",
        f"## A — DATA'DA KALAN BOŞ / BELİRSİZ ALANLAR ({len(data_gaps)} madde)",
        "",
    ]

    if data_gaps:
        lines += ["| Blok | Alan | Mevcut |", "|------|------|--------|"]
        for block, key, val in data_gaps:
            lines.append(f"| {block} | {key} | {val} |")
    else:
        lines.append("_Kapasite/KD ve tamamlanan bloklar hariç DATA boş alan kalmadı._")

    lines += [
        "",
        "---",
        "",
        f"## B — MD'DE [EKSİK] İŞARETLİ SATIRLAR ({len(eksik_md)} satır)",
        "",
        "_Bölüm 8 (kapasite), 13, 14 hariç._",
        "",
    ]
    if eksik_md:
        lines += ["| Bölüm | Dosya | Satır | İçerik |", "|-------|-------|-------|--------|"]
        for rel, ln, content, sec in eksik_md:
            content = content.replace("|", "\\|")[:100]
            lines.append(f"| {sec} | `{rel}` | {ln} | {content} |")
    else:
        lines.append("_Kalan bölümlerde [EKSİK] satırı yok._")

    lines += [
        "",
        "---",
        "",
        f"## C — YEDEK PARÇA FOTOĞRAFLARI — `assets/9.1/` ({len(parca_imgs)} eksik)",
        "",
        "Tablo hazır; fotoğrafları **sipariş kodu.png** adıyla yükleyin (ör. `10 06675.png`).",
        "",
        "| Sipariş kodu | Dosya | Bölüm |",
        "|--------------|-------|-------|",
    ]
    for ref in sorted(parca_imgs.keys()):
        fname = unquote(Path(ref.replace("\\", "/")).name)
        code = fname.replace(".png", "").replace("%20", " ")
        secs = "; ".join(sorted(parca_imgs[ref]))
        sec_short = secs.split(" — ")[0] if secs else ""
        lines.append(f"| `{code}` | `assets/9.1/{fname}` | {sec_short} |")

    if not parca_imgs:
        lines.append("| _Tüm yedek parça görselleri yüklü_ | | |")

    lines += [
        "",
        "---",
        "",
        "## D — HMI EKRAN GÖRÜNTÜLERİ (P1)",
        "",
        "| Dosya adı | Açıklama | Bölüm |",
        "|-----------|----------|-------|",
    ]
    for k in sorted(hmi_imgs.keys()):
        fname = Path(k.replace("\\", "/")).name
        desc = img_desc.get(k, "HMI ekran görüntüsü")
        sec_short = sorted(hmi_imgs[k])[0].split(" — ")[0] if hmi_imgs[k] else ""
        lines.append(f"| `{fname}` | {desc[:60]} | {sec_short} |")

    lines += [
        "",
        "---",
        "",
        f"## E — DİĞER EKSİK GÖRSELLER (FOTO-* vb.) ({len(other_imgs)} referans)",
        "",
        "| # | Hedef yol | Açıklama | Bölüm |",
        "|---|-----------|----------|-------|",
    ]
    for idx, (ref, secs) in enumerate(sorted(other_imgs.items()), 1):
        desc = img_desc.get(ref, "")[:60]
        norm = ref.replace("\\", "/")
        if "FOTO-" in norm:
            norm = "assets/" + Path(norm).name
        elif "/assets/" in norm:
            norm = "assets/" + norm.split("/assets/", 1)[1]
        norm = unquote(norm.replace("../../assets/", "assets/").replace("../assets/", "assets/"))
        sec_str = "; ".join(sorted(secs))
        lines.append(f"| E{idx} | `{norm}` | {desc or '—'} | {sec_str.split(' — ')[0]} |")

    lines += [
        "",
        "---",
        "",
        "## F — AYRI EVRAK TESLİMİ (kılavuz metni tamam)",
        "",
        "Aşağıdaki **3 PDF** müşteriye fiziksel/dijital paket olarak verilir; kılavuz Bölüm **13.1.1** referansları güncel.",
        "",
        "| # | Doküman | Dosya / not |",
        "|---|---------|-------------|",
        "| 1 | P&ID şeması | Teslim paketi PDF |",
        "| 2 | Elektrik şeması | Teslim paketi PDF |",
        "| 3 | Makine layout | `1726050-ALPER-KNV 30 LAYOUT.pdf` |",
        "",
        "**Not:** BOM kılavuza gömülü (**13.3**); ayrı PDF **yok**.",
        "",
        "---",
        "",
        "## G — MEVCUT ASSETS",
        "",
    ]
    for a in existing_assets:
        lines.append(f"- `{a}`")

    lines += [
        "",
        "---",
        "",
        "## TOPLAM",
        "",
        "| Kategori | Adet |",
        "|----------|------|",
        f"| DATA kalan boş alan | {len(data_gaps)} |",
        f"| MD [EKSİK] (8/13/14 hariç) | {len(eksik_md)} |",
        f"| Eksik yedek parça fotoğrafı (9.1) | {len(parca_imgs)} |",
        f"| Eksik HMI / FOTO görsel | {len(hmi_imgs) + len(other_imgs)} |",
        f"| Mevcut asset dosyası | {len(existing_assets)} |",
    ]

    OUT_FILE.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Written: {OUT_FILE}")
    print(f"DATA gaps: {len(data_gaps)}, EKSİK: {len(eksik_md)}, imgs: {len(missing_imgs)} (9.1: {len(parca_imgs)})")


if __name__ == "__main__":
    main()
