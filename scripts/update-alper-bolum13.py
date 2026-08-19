# -*- coding: utf-8 -*-
"""Update ALPER section 13 docs: only P&ID, electrical, layout as separate; BOM embedded."""
from pathlib import Path

ROOT = Path(r"c:\Users\fatih.gural\Desktop\FULL DATABASE\PROG\DocumentX\projects\1726050-ALPER-KNV-30")

FILES = {
    ROOT / "13-documents/documents.tr.md": """# 13. DOKÜMANLAR

Bu makine için müşteriye **ayrı evrak** olarak yalnızca **üç teknik doküman** teslim edilir: **P&ID şeması**, **elektrik şeması** ve **makine layout** çizimi.

**Yedek parça listesi (BOM)** ayrı evrak değildir; kılavuz **Bölüm 13.3** içinde gömülüdür.

| Teslim şekli | Açıklama |
|--------------|----------|
| **Ayrı evrak (3 adet)** | P&ID, elektrik şeması, makine layout PDF |
| **Kılavuza gömülü** | Yedek parça / BOM tablosu (Bölüm **13.3**) |

---

## Bölüm içeriği

| Bölüm | Başlık | Konu |
|-------|--------|------|
| **13.1** | Doküman listesi | Ayrı evrak teslim listesi |
| **13.2** | Çizimler | Layout referansı ve kılavuz görselleri |
| **13.3** | Parça listesi | Gömülü yedek parça / BOM tablosu |
""",
    ROOT / "13-documents/01-documents/documents.tr.md": """# 13.1 Doküman listesi

Aşağıdaki **üç doküman** makine ile birlikte **ayrı evrak** (PDF) olarak teslim edilir. Dosya adı ve revizyon bilgisi teslim paketindeki etiket veya kapak sayfasından okunmalıdır.

---

## 13.1.1 Ayrı evrak olarak teslim edilenler

| # | Doküman | Dosya adı / rev | Kılavuz referansı |
|---|---------|-----------------|-------------------|
| 1 | **P&ID şeması** | Ayrı evrak — teslim paketi | Proses ve medya hatları |
| 2 | **Elektrik şeması** | Ayrı evrak — teslim paketi | Bölüm **3.4**, **5.3**, **11.3** |
| 3 | **Makine layout çizimi** | `1726050-ALPER-KNV 30 LAYOUT.pdf` | Bölüm **3.5**, **13.2** |

**UYARI:** Elektrik şeması üzerinde çalışmadan önce makine enerjisini kesin ve **LOTO** uygulayın (bkz. Bölüm **2.4**).

---

## 13.1.2 Kılavuza gömülü dokümanlar

| Doküman | Konum | Not |
|---------|-------|-----|
| Yedek parça listesi (BOM) | Bölüm **13.3** | Ayrı evrak **değildir**; sipariş kodu, kategori ve stok önerileri tabloda |
| Operasyonel yedek parça özeti | Bölüm **9.1.5** | Kritik + tüketim kalemleri — tam liste için bkz. **13.3** |
| Alarm kod listesi | Bölüm **11.1.2** | Kılavuz içi |

---

## 13.1.3 Bu proje teslim paketine dahil olmayanlar

Aşağıdaki dokümanlar **ayrı evrak olarak teslim edilmez** (kılavuz kapsamı dışı veya uygulanmaz):

| Doküman | Durum |
|---------|--------|
| Pnömatik şema | Elektrik şeması / saha tesisatı ile yönetilir |
| Hidrolik şema | **Uygulanmaz** — hidrolik sistem yok |
| Parça listesi (BOM) — ayrı PDF | **Uygulanmaz** — Bölüm **13.3** (gömülü) |
| I/O listesi | Kılavuz kapsamı dışı |
| PLC / HMI proje yedekleri | Kılavuz kapsamı dışı |
| CE dosyası / kalibrasyon sertifikaları | Kılavuz kapsamı dışı — talep halinde imalatçı |

---

## 13.1.4 Kılavuz içi referanslar

| Konu | Referans |
|------|----------|
| Layout ve yerleşim | Bölüm **3.5**, **13.2** |
| Kontrol / HMI | Bölüm **3.4**, **6**, **7** |
| LOTO | Bölüm **2.4** |
| Yedek parça | Bölüm **9.1.5**, **13.3** |
""",
    ROOT / "13-documents/02-drawings/drawings.tr.md": """# 13.2 Çizimler

---

## 13.2.1 Ayrı evrak — makine layout

Makine **layout çizimi** ayrı evrak olarak teslim edilir.

| Parametre | Değer |
|-----------|--------|
| Doküman | Makine layout çizimi |
| Dosya adı | `1726050-ALPER-KNV 30 LAYOUT.pdf` |
| Teslim | Ayrı evrak (PDF) — teslim paketi |
| Kılavuzda kullanım | Bölüm **3.5** (yerleşim planı) |

Layout üzerinde besleme yönü (sol), boşaltma yönü (sağ), operatör tarafı (sağ) ve minimum etraf boşlukları gösterilir. Kurulum ve taşıma prosedürleri için bkz. Bölüm **4**, **5**.

---

## 13.2.2 Kılavuza gömülü görseller

Makine fotoğrafları ve parça görselleri proje `assets/` klasöründedir. Kılavuz metinlerinde referans verilen görseller ilgili bölümlerde yer alır; ayrı çizim paketi **oluşturulmaz**.

| Görsel tipi | Konum | Örnek |
|-------------|-------|--------|
| Makine / modül fotoğrafları | `assets/FOTO-*` | Bölüm **3**, **5**, **7** |
| Yedek parça fotoğrafları | `assets/9.1/{sipariş kodu}.png` | Bölüm **9.1.5**, **13.3** |
| Sembol / uyarı ikonları | `assets/1.2.2/` | Bölüm **1.2**, **2** |
""",
}

PART_LIST_INTRO = """# 13.3 Parça listesi

Makine **yedek parça listesi (BOM)** bu kılavuzda gömülüdür; **ayrı evrak olarak teslim edilmez**. SSOT: `1726050-ALPER-KNV 30 DATA` — `[PARCA_LISTESI]`.

Operasyonel özet (Kritik + Tüketim) için bkz. Bölüm **9.1.5**.

Parça fotoğrafları `assets/9.1/` klasöründe sipariş kodu ile adlandırılır (ör. `10 06675.png`).

Ayrı evrak teslim listesi (P&ID, elektrik şeması, layout) için bkz. Bölüm **13.1.1**.

---

"""


def patch_part_list():
    path = ROOT / "13-documents/03-part-list/part-list.tr.md"
    text = path.read_text(encoding="utf-8-sig")
    # Replace intro up to first ## 13.3.1
    marker = "## 13.3.1"
    idx = text.find(marker)
    if idx < 0:
        raise SystemExit("13.3.1 marker not found")
    path.write_text(PART_LIST_INTRO + text[idx:], encoding="utf-8")


def patch_data():
    path = ROOT / "1726050-ALPER-KNV 30 DATA"
    text = path.read_text(encoding="utf-8-sig")
    replacements = [
        (
            "Elektrik şeması dosya adı / rev:Ayrı evrak olarak teslim edilir",
            "Elektrik şeması dosya adı / rev:Ayrı evrak — teslim paketi (PDF)",
        ),
        (
            "Pnömatik şema dosya adı / rev:Ayrı evrak olarak teslim edilir",
            "Pnömatik şema dosya adı / rev:KD — ayrı evrak teslim edilmez",
        ),
        (
            "P&ID dosya adı / rev:Ayrı evrak olarak teslim edilir",
            "P&ID dosya adı / rev:Ayrı evrak — teslim paketi (PDF)",
        ),
        (
            "Layout çizimi dosya adı / rev:1726050-ALPER-KNV 30 LAYOUT.pdf",
            "Layout çizimi dosya adı / rev:1726050-ALPER-KNV 30 LAYOUT.pdf — ayrı evrak (PDF)",
        ),
        (
            "I/O listesi dosya adı / rev:1726050-ALPER-KNV 30 I/O LISTESI.pdf",
            "I/O listesi dosya adı / rev:KD — ayrı evrak teslim edilmez",
        ),
        (
            "PLC program yedek dosya adı:Ayrı evrak olarak teslim edilir",
            "PLC program yedek dosya adı:KD — ayrı evrak teslim edilmez",
        ),
        (
            "HMI proje yedek dosya adı:Ayrı evrak olarak teslim edilir",
            "HMI proje yedek dosya adı:KD — ayrı evrak teslim edilmez",
        ),
        (
            "CE dosyası referansı:Ayrı evrak olarak teslim edilir",
            "CE dosyası referansı:KD — ayrı evrak teslim edilmez",
        ),
        (
            "Kalibrasyon sertifikaları:Ayrı evrak olarak teslim edilir (varsa)",
            "Kalibrasyon sertifikaları:KD — ayrı evrak teslim edilmez",
        ),
        (
            "Genel montaj çizimi:Ayrı evrak olarak teslim edilir",
            "Genel montaj çizimi:KD — layout ayrı evrak; montaj çizimi teslim edilmez",
        ),
        (
            "Kaldırma noktaları çizimi:Ayrı evrak olarak teslim edilir",
            "Kaldırma noktaları çizimi:KD — layout içinde; ayrı evrak teslim edilmez",
        ),
        (
            "Zemin ankraj çizimi:Ayrı evrak olarak teslim edilir (varsa)",
            "Zemin ankraj çizimi:KD — ayrı evrak teslim edilmez",
        ),
        (
            "Müşteriye teslim çizim paketi:Ayrı evrak olarak teslim edilir",
            "Müşteriye teslim çizim paketi:P&ID + Elektrik şeması + Layout (3 PDF)",
        ),
    ]
    for old, new in replacements:
        if old not in text:
            print("WARN missing:", old[:50])
        else:
            text = text.replace(old, new, 1)
    path.write_text(text, encoding="utf-8")


def main():
    for path, content in FILES.items():
        path.write_text(content + "\n", encoding="utf-8")
        print("Wrote", path.name)
    patch_part_list()
    print("Patched part-list.tr.md intro")
    patch_data()
    print("Patched DATA")


if __name__ == "__main__":
    main()
