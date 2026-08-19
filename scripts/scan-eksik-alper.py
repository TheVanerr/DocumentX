# -*- coding: utf-8 -*-
"""Scan 1726050 ALPER manual for missing data, assets, EKSIK markers."""
import re
from pathlib import Path
from collections import defaultdict

ROOT = Path(r"c:\Users\fatih.gural\Desktop\FULL DATABASE\PROG\DocumentX\projects\1726050-ALPER-KNV-30")
DATA_FILE = ROOT / "1726050-ALPER-KNV 30 DATA"
OUT_FILE = ROOT / "EKSIK.md"
ASSETS = ROOT / "assets"

# Section map from folder prefix
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


def section_for(path: str) -> str:
    for k, v in SECTION_MAP.items():
        if k in path.replace("\\", "/"):
            return v
    return "Genel"


def resolve_asset(ref: str, md_path: Path) -> Path | None:
    ref = ref.strip().split("#")[0].split("?")[0]
    ref = ref.replace("\\", "/")
    candidates = []
    if ref.startswith("assets/"):
        candidates.append(ROOT / ref)
    elif ref.startswith("../../assets/"):
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


def parse_data_gaps(text: str) -> list[tuple[str, str, str]]:
    gaps = []
    current_block = ""
    for line in text.splitlines():
        s = line.strip()
        if s.startswith("# ---") or s.startswith("[") and s.endswith("]"):
            if s.startswith("[") and not s.startswith("[#"):
                current_block = s.strip("[]")
            continue
        if ":" in s and not s.startswith("#"):
            key, _, val = s.partition(":")
            key, val = key.strip(), val.strip()
            if not val or val in ("Bilinmiyor", "Bilinmiyor.", ""):
                gaps.append((current_block, key, val or "(boş)"))
            elif val.startswith("Kullanıcı firma"):
                gaps.append((current_block, key, val))
            elif val.startswith("Ayrı evrak"):
                gaps.append((current_block, key, val))
    return gaps


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
            if "EKSİK" in line or "EKSIK" in line:
                eksik_md.append((rel, i, line.strip(), sec))

            for m in img_link.finditer(line):
                alt, ref = m.group(1), m.group(2)
                if not resolve_asset(ref, md):
                    norm = ref.replace("\\", "/")
                    missing_imgs[norm].add(f"{sec} — `{rel}`")
                    if alt and alt not in ("", "Görsel"):
                        img_desc[norm] = alt

    data_text = DATA_FILE.read_text(encoding="utf-8-sig")
    data_gaps = parse_data_gaps(data_text)

    # Build markdown
    lines = [
        "# 1726050-ALPER-KNV-30 — KILAVUZ TAMAMLAMA EKSİK LİSTESİ",
        "",
        "> **Amaç:** Kılavuzun tamamlanması için sizden beklenen bilgi, fotoğraf, çizim ve dokümanlar.",
        "> **Kaynak:** DATA dosyası + tüm `.tr.md` dosyaları + `assets/` taraması.",
        "> **Klasör:** Fotoğrafları belirtilen dosya adıyla `projects/1726050-ALPER-KNV-30/assets/` altına koyun.",
        "",
        "---",
        "",
        "## ÖNCELİK ÖZETİ",
        "",
        "| Öncelik | Konu | Neden |",
        "|---------|------|-------|",
        "| P1 | HMI ekran görüntüleri | Bölüm 3.4, 6, 7, 11 tamamlanamaz |",
        "| P1 | Makine / modül fotoğrafları | Bölüm 3.1–3.5, 5 görselleri boş |",
        "| P1 | Kimlik etiketi gerçek fotoğrafı | Bölüm 1.3 placeholder SVG |",
        "| P2 | Bakım periyodu tablosu | Bölüm 9.1.3 DATA'da tamamen boş |",
        "| P2 | Kapasite / ürün limitleri | Bölüm 3.3, 8 tabloları |",
        "| P3 | Harici evraklar (şema, BOM, CE) | Bölüm 13 referansları |",
        "",
        "---",
        "",
        f"## A — DATA DOSYASINDA EKSİK / BELİRSİZ ALANLAR ({len(data_gaps)} madde)",
        "",
        "| Blok | Alan | Mevcut |",
        "|------|------|--------|",
    ]
    for block, key, val in data_gaps:
        lines.append(f"| {block} | {key} | {val} |")

    lines += [
        "",
        "---",
        "",
        f"## B — MD DOSYALARINDA [EKSİK] İŞARETLİ SATIRLAR ({len(eksik_md)} satır)",
        "",
    ]
    if eksik_md:
        lines += ["| Bölüm | Dosya | Satır | İçerik |", "|-------|-------|-------|--------|"]
        for rel, ln, content, sec in eksik_md:
            content = content.replace("|", "\\|")[:100]
            lines.append(f"| {sec} | `{rel}` | {ln} | {content} |")
    else:
        lines.append("_MD dosyalarında [EKSİK] işareti bulunamadı; eksikler DATA ve görsellerde._")

    # HMI-critical subset for quick reference
    hmi_keys = [
        k for k in missing_imgs
        if any(x in k.lower() for x in ("hmi", "alarm", "calisma", "manuel", "recete", "hazirlik", "start", "sicaklik", "settings", "operation"))
    ]

    lines += [
        "",
        "---",
        "",
        "## B.1 — KRİTİK: HMI EKRAN GÖRÜNTÜLERİ (P1)",
        "",
        "Kontrol panosu ve operasyon bölümleri bu fotoğraflar olmadan tamamlanamaz. Hepsini `assets/` köküne aşağıdaki **dosya adlarıyla** kaydedin.",
        "",
        "| Dosya adı | Ne çekilecek | Bölüm |",
        "|-----------|--------------|-------|",
    ]
    for k in sorted(hmi_keys):
        fname = Path(k.replace("\\", "/")).name
        desc = img_desc.get(k, "HMI ekran görüntüsü")
        secs = "; ".join(sorted(missing_imgs[k]))
        sec_short = secs.split(" — ")[0] if secs else ""
        lines.append(f"| `{fname}` | {desc} | {sec_short} |")

    lines += [
        "",
        "**Ek DATA bilgisi (HMI ile birlikte verin):**",
        "- Ana ekran menü yapısı (ekran görüntüsü veya madde listesi)",
        "- Trend / log kayıt süresi",
        "- Şifre seviyeleri (operatör / bakım / admin) ayrımı varsa",
        "",
        "**Kurutma fan motorları:** DATA'da 4 kurutma fanı için marka/model boş — motor etiketi fotoğrafı veya teknik bilgi gerekli (Bölüm 3.3.4).",
        "",
        "---",
        "",
        f"## C — EKSİK FOTOĞRAF / GÖRSEL DOSYALARI ({len(missing_imgs)} referans)",
        "",
        "Her satırda: hedef dosya yolu, açıklama (varsa alt metin), kullanıldığı bölüm.",
        "",
        "| # | Hedef dosya / yol | Açıklama (çekilecek fotoğraf) | Kullanıldığı bölüm |",
        "|---|-------------------|-------------------------------|-------------------|",
    ]

    for idx, (ref, secs) in enumerate(sorted(missing_imgs.items()), 1):
        desc = img_desc.get(ref, "")
        sec_str = "; ".join(sorted(secs))
        norm_ref = ref.replace("\\", "/")
        if "FOTO-" in norm_ref:
            norm_ref = "assets/" + Path(norm_ref).name
        elif norm_ref.startswith("../../assets/"):
            norm_ref = norm_ref.replace("../../assets/", "assets/")
        elif norm_ref.startswith("../assets/"):
            norm_ref = norm_ref.replace("../assets/", "assets/")
        ref_esc = norm_ref.replace("|", "\\|")
        desc_esc = desc.replace("|", "\\|")[:80]
        lines.append(f"| C{idx} | `{ref_esc}` | {desc_esc or '_(alt metin yok — bölüm metnine bakın)_'} | {sec_str} |")

    lines += [
        "",
        "---",
        "",
        "## D — MEVCUT ASSETS KLASÖRÜ",
        "",
        "Şu an projede yüklü dosyalar:",
        "",
    ]
    for a in existing_assets:
        lines.append(f"- `{a}`")

    lines += [
        "",
        "**Not:** Kök dizinde adlandırılmamış genel makine PNG/PDF dosyaları varsa bunları yukarıdaki FOTO-* isimlerine eşleştirin.",
        "",
        "---",
        "",
        "## E — SAHA ZİYARETİ HIZLI FOTOĞRAF LİSTESİ",
        "",
        "Tek seferde çekilebilecek minimum set:",
        "",
        "1. Makine genel — 4 açı (ön, arka, sol, sağ)",
        "2. Elektrik panosu — kapak kapalı + açık (PLC, şalter, reset, faz rölesi)",
        "3. **HMI ekran serisi** — çalışma, manuel, alarm, ayar, hazırlık, start, reçete, sıcaklık",
        "4. Acil stop — 4 konum",
        "5. Medya bağlantıları — hava regülatör 6 bar, su 1 bar, elektrik 380V",
        "6. Tank bölgeleri — yıkama, durulama, yağ sıyırıcı, kurutma fanları",
        "7. Filtreler — ön filtre, tank filtresi, torba filtre",
        "8. Yağlama noktaları — konveyör giriş/çıkış (4 nokta işaretli)",
        "9. Kimlik etiketi — okunaklı close-up",
        "10. Tepe lambası — sarı (hazır) ve kırmızı (alarm)",
        "11. RFID sensör + bakım kapakları",
        "12. Forklift noktaları — makine alt profil",
        "",
        "---",
        "",
        "## F — HARİCİ DOKÜMANLAR (ayrı teslim)",
        "",
        "| Doküman | DATA durumu | Bölüm |",
        "|---------|-------------|-------|",
        "| Elektrik şeması | Ayrı evrak | 13.1 |",
        "| Pnömatik şema | Ayrı evrak | 13.1 |",
        "| Layout PDF | `1726050-ALPER-KNV 30 LAYOUT.pdf` | 3.5, 13.1 |",
        "| I/O listesi PDF | `1726050-ALPER-KNV 30 I/O LISTESI.pdf` | 5.6, 13.1 |",
        "| BOM / parça listesi | Ayrı evrak | 13.3 |",
        "| PLC program yedek | Ayrı evrak | 13.1 |",
        "| HMI proje yedek (.fw7) | Ayrı evrak | 13.1 |",
        "| CE dosyası | Ayrı evrak | 13.1, Ek D |",
        "| Kalibrasyon sertifikaları | Varsa | 13.1 |",
        "| P&ID | Ayrı evrak | 13.1 |",
        "| Montaj / kaldırma / ankraj çizimleri | Ayrı evrak | 13.2 |",
        "| Garanti belgesi | Ayrı evrak | Ek D |",
        "",
        "---",
        "",
        "## TOPLAM",
        "",
        f"| Kategori | Adet |",
        f"|----------|------|",
        f"| DATA boş / belirsiz alan | {len(data_gaps)} |",
        f"| MD [EKSİK] satırı | {len(eksik_md)} |",
        f"| Eksik görsel referansı | {len(missing_imgs)} |",
        f"| Mevcut asset dosyası | {len(existing_assets)} |",
        "",
        "*Tamamlanan maddeleri işaretleyin; liste güncellendiğinde script yeniden çalıştırılabilir: `python scripts/scan-eksik-alper.py`*",
    ]

    OUT_FILE.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Written: {OUT_FILE}")
    print(f"DATA gaps: {len(data_gaps)}, EKSİK lines: {len(eksik_md)}, Missing imgs: {len(missing_imgs)}")


if __name__ == "__main__":
    main()
