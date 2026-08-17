# -*- coding: utf-8 -*-
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "projects" / "1726050-ALPER-KNV-30" / "13-documents"


def w(folder, stem, tr, en, de):
    d = ROOT / folder
    d.mkdir(parents=True, exist_ok=True)
    for lang, text in [("tr", tr), ("en", en), ("de", de)]:
        (d / f"{stem}.{lang}.md").write_text(text, encoding="utf-8")
    print("OK", folder)


MAIN_TR = r"""# 13. DOKÜMANLAR

Teknik dokümanlar (P&ID, elektrik şeması, pnömatik şema vb.) **ayrı evrak paketi** olarak teslim edilir; bu kılavuzda referans listesi verilir.

| Teslim şekli | Açıklama |
|--------------|----------|
| Ayrı evrak | P&ID, elektrik/pnömatik şemalar, BOM, PLC/HMI yedekleri |
| Kılavuz referansı | Layout ve I/O listesi dosya adları (aşağıda) |

---

## Bölüm İçeriği

| Bölüm | Başlık | Konu |
|-------|--------|------|
| **13.1** | Doküman Listesi | Şema, yedek, sertifika referansları |
| **13.2** | Çizimler | Montaj, kaldırma, layout çizimleri |
| **13.3** | Parça Listesi | Mekanik / elektrik / aşınan parça listeleri |
"""

MAIN_EN = r"""# 13. DOCUMENTS

Technical documents (P&ID, electrical schematic, pneumatic diagram, etc.) are supplied as a **separate document package**; this manual provides the reference list.

| Delivery | Description |
|----------|-------------|
| Separate documents | P&ID, electrical/pneumatic schematics, BOM, PLC/HMI backups |
| Manual reference | Layout and I/O list file names (below) |

---

## Section Contents

| Section | Title | Topic |
|---------|-------|-------|
| **13.1** | Document List | Schematic, backup, certificate references |
| **13.2** | Drawings | Assembly, lifting, layout drawings |
| **13.3** | Parts List | Mechanical / electrical / wear parts lists |
"""

MAIN_DE = r"""# 13. DOKUMENTE

Technische Dokumente (P&ID, Elektrikschema, Pneumatikschema usw.) werden als **separates Dokumentenpaket** geliefert; dieses Handbuch enthält die Referenzliste.

| Lieferung | Beschreibung |
|-----------|--------------|
| Separate Unterlagen | P&ID, Elektrik-/Pneumatikschemata, BOM, PLC/HMI-Backups |
| Handbuchreferenz | Layout- und I/O-Listen-Dateinamen (unten) |

---

## Abschnittsinhalt

| Abschnitt | Titel | Thema |
|-----------|-------|-------|
| **13.1** | Dokumentenliste | Schema-, Backup-, Zertifikatreferenzen |
| **13.2** | Zeichnungen | Montage-, Hebe-, Layout-Zeichnungen |
| **13.3** | Stückliste | Mechanische / elektrische / Verschleißteile |
"""

DOCS_TR = r"""# 13.1. Doküman Listesi

Aşağıdaki dokümanlar **ayrı evrak** olarak teslim edilir. Dosya adı/rev bilgisi teslim paketinde yer alır.

---

## 13.1.1. Şema ve Plan Dokümanları

| Doküman | Dosya adı / rev | Teslim |
|---------|-----------------|--------|
| P&ID | Ayrı evrak olarak teslim edilir | Teslim paketi |
| Elektrik şeması | Ayrı evrak olarak teslim edilir | Teslim paketi |
| Pnömatik şema | Ayrı evrak olarak teslim edilir | Teslim paketi |
| Hidrolik şema | **Uygulanmaz** — hidrolik sistem yok | — |
| Layout çizimi | `1726050-ALPER-KNV 30 LAYOUT.pdf` (bkz. **3.5**) | Teslim paketi / assets |
| I/O listesi | `1726050-ALPER-KNV 30 I/O LISTESI.pdf` (bkz. **5.6**) | Teslim paketi |

---

## 13.1.2. Parça Listesi ve Yedekler

| Doküman | Dosya adı / rev | Teslim |
|---------|-----------------|--------|
| Parça listesi (BOM) | Ayrı evrak olarak teslim edilir | Teslim paketi |
| PLC program yedek | Ayrı evrak olarak teslim edilir | Teslim paketi |
| HMI proje yedek | Ayrı evrak olarak teslim edilir | Teslim paketi |

---

## 13.1.3. Sertifika ve Uygunluk

| Doküman | Dosya adı / rev | Teslim |
|---------|-----------------|--------|
| CE dosyası referansı | Ayrı evrak olarak teslim edilir | Teslim paketi |
| Kalibrasyon sertifikaları | Ayrı evrak olarak teslim edilir (varsa) | Teslim paketi |

---

## 13.1.4. Kılavuz İçi Referanslar

| Konu | Referans |
|------|----------|
| Alarm kod listesi | Bölüm **11.1.2** (kılavuz içi) |
| Lubrication chart | Yok (bkz. **9.1.1**) |
| Uzaktan erişim | Secomea modül (bkz. **3.4**) |
"""

DOCS_EN = r"""# 13.1. Document List

The following documents are supplied as **separate documents**. File name/rev is included in the delivery package.

---

## 13.1.1. Schematic and Plan Documents

| Document | File name / rev | Delivery |
|----------|-----------------|----------|
| P&ID | Supplied as separate document | Delivery package |
| Electrical schematic | Supplied as separate document | Delivery package |
| Pneumatic schematic | Supplied as separate document | Delivery package |
| Hydraulic schematic | **Not applicable** — no hydraulic system | — |
| Layout drawing | `1726050-ALPER-KNV 30 LAYOUT.pdf` (see **3.5**) | Delivery package / assets |
| I/O list | `1726050-ALPER-KNV 30 I/O LISTESI.pdf` (see **5.6**) | Delivery package |

---

## 13.1.2. Parts List and Backups

| Document | File name / rev | Delivery |
|----------|-----------------|----------|
| Parts list (BOM) | Supplied as separate document | Delivery package |
| PLC program backup | Supplied as separate document | Delivery package |
| HMI project backup | Supplied as separate document | Delivery package |

---

## 13.1.3. Certificates and Compliance

| Document | File name / rev | Delivery |
|----------|-----------------|----------|
| CE file reference | Supplied as separate document | Delivery package |
| Calibration certificates | Supplied as separate document (if applicable) | Delivery package |

---

## 13.1.4. In-Manual References

| Topic | Reference |
|-------|-----------|
| Alarm code list | Section **11.1.2** (in manual) |
| Lubrication chart | None (see **9.1.1**) |
| Remote access | Secomea module (see **3.4**) |
"""

DOCS_DE = r"""# 13.1. Dokumentenliste

Folgende Dokumente werden als **separate Unterlagen** geliefert. Dateiname/Rev im Lieferpaket.

---

## 13.1.1. Schema- und Planunterlagen

| Dokument | Dateiname / Rev | Lieferung |
|----------|-----------------|-----------|
| P&ID | Als separate Unterlage | Lieferpaket |
| Elektrikschema | Als separate Unterlage | Lieferpaket |
| Pneumatikschema | Als separate Unterlage | Lieferpaket |
| Hydraulikschema | **Nicht anwendbar** — kein Hydrauliksystem | — |
| Layout-Zeichnung | `1726050-ALPER-KNV 30 LAYOUT.pdf` (siehe **3.5**) | Lieferpaket / assets |
| I/O-Liste | `1726050-ALPER-KNV 30 I/O LISTESI.pdf` (siehe **5.6**) | Lieferpaket |

---

## 13.1.2. Stückliste und Backups

| Dokument | Dateiname / Rev | Lieferung |
|----------|-----------------|-----------|
| Stückliste (BOM) | Als separate Unterlage | Lieferpaket |
| PLC-Programm-Backup | Als separate Unterlage | Lieferpaket |
| HMI-Projekt-Backup | Als separate Unterlage | Lieferpaket |

---

## 13.1.3. Zertifikate und Konformität

| Dokument | Dateiname / Rev | Lieferung |
|----------|-----------------|-----------|
| CE-Dokumentreferenz | Als separate Unterlage | Lieferpaket |
| Kalibrierzertifikate | Als separate Unterlage (falls vorhanden) | Lieferpaket |

---

## 13.1.4. Referenzen im Handbuch

| Thema | Referenz |
|-------|----------|
| Alarmcodeliste | Abschnitt **11.1.2** (im Handbuch) |
| Schmierplan | Keiner (siehe **9.1.1**) |
| Fernzugriff | Secomea-Modul (siehe **3.4**) |
"""

DRAW_TR = r"""# 13.2. Çizimler

Çizimler **ayrı evrak paketi** içinde teslim edilir.

---

## 13.2.1. Çizim Listesi

| Çizim | Dosya adı / rev | Teslim |
|-------|-----------------|--------|
| Genel montaj çizimi | Ayrı evrak olarak teslim edilir | Teslim paketi |
| Kaldırma noktaları çizimi | Ayrı evrak olarak teslim edilir | Teslim paketi |
| Zemin ankraj çizimi | Ayrı evrak olarak teslim edilir (varsa) | Teslim paketi |
| Müşteriye teslim çizim paketi | Ayrı evrak olarak teslim edilir | Teslim paketi |
| Genel yerleşim planı | `1726050-ALPER-KNV 30 LAYOUT.pdf` | Bkz. **3.5** |

---

## 13.2.2. Kılavuzda Kullanılan Görsel Referansları

Makine görselleri proje `assets/` klasöründedir. Kılavuz metinlerinde `<!-- FOTO: ... -->` ile işaretlenmiş yer tutucular ilgili görsellere bağlanır.
"""

DRAW_EN = r"""# 13.2. Drawings

Drawings are supplied in a **separate document package**.

---

## 13.2.1. Drawing List

| Drawing | File name / rev | Delivery |
|---------|-----------------|----------|
| General assembly drawing | Supplied as separate document | Delivery package |
| Lifting point drawing | Supplied as separate document | Delivery package |
| Floor anchor drawing | Supplied as separate document (if applicable) | Delivery package |
| Customer delivery drawing package | Supplied as separate document | Delivery package |
| General layout plan | `1726050-ALPER-KNV 30 LAYOUT.pdf` | See **3.5** |

---

## 13.2.2. Image References Used in Manual

Machine images are in project `assets/` folder. Placeholders marked `<!-- FOTO: ... -->` in manual text link to relevant images.
"""

DRAW_DE = r"""# 13.2. Zeichnungen

Zeichnungen werden im **separaten Dokumentenpaket** geliefert.

---

## 13.2.1. Zeichnungsliste

| Zeichnung | Dateiname / Rev | Lieferung |
|-----------|-----------------|-----------|
| Allgemeine Montagezeichnung | Als separate Unterlage | Lieferpaket |
| Hebepunkte-Zeichnung | Als separate Unterlage | Lieferpaket |
| Bodenverankerung-Zeichnung | Als separate Unterlage (falls vorhanden) | Lieferpaket |
| Kunden-Lieferzeichnungspaket | Als separate Unterlage | Lieferpaket |
| Allgemeiner Layout-Plan | `1726050-ALPER-KNV 30 LAYOUT.pdf` | Siehe **3.5** |

---

## 13.2.2. Bildreferenzen im Handbuch

Maschinenbilder im Projektordner `assets/`. Platzhalter `<!-- FOTO: ... -->` im Handbuch verweisen auf zugehörige Bilder.
"""

PART_TR = r"""# 13.3. Parça Listesi

Parça listeleri **ayrı evrak** olarak teslim edilir.

---

## 13.3.1. Parça Listesi Referansları

| Liste | Referans | Teslim |
|-------|----------|--------|
| Mekanik parça listesi | Ayrı evrak olarak teslim edilir | Teslim paketi |
| Elektrik parça listesi | Ayrı evrak olarak teslim edilir | Teslim paketi |
| Wear part / aşınan parça listesi | Ayrı evrak olarak teslim edilir | Teslim paketi |
| Parça listesi (BOM) | Ayrı evrak — bkz. **13.1.2** | Teslim paketi |

---

## 13.3.2. Kılavuz İlişkisi

| Konu | Referans |
|------|----------|
| Kritik yedek parça (operasyonel) | Bölüm **9.1.5** — `[EKSİK]` |
| Yedek parça sipariş kodları | Bölüm **9.1.5** — `[EKSİK]` |
"""

PART_EN = r"""# 13.3. Parts List

Parts lists are supplied as **separate documents**.

---

## 13.3.1. Parts List References

| List | Reference | Delivery |
|------|-----------|----------|
| Mechanical parts list | Supplied as separate document | Delivery package |
| Electrical parts list | Supplied as separate document | Delivery package |
| Wear parts list | Supplied as separate document | Delivery package |
| Parts list (BOM) | Separate document — see **13.1.2** | Delivery package |

---

## 13.3.2. Manual Cross-Reference

| Topic | Reference |
|-------|-----------|
| Critical spare parts (operational) | Section **9.1.5** — `[MISSING]` |
| Spare part order codes | Section **9.1.5** — `[MISSING]` |
"""

PART_DE = r"""# 13.3. Stückliste

Stücklisten werden als **separate Unterlagen** geliefert.

---

## 13.3.1. Stücklisten-Referenzen

| Liste | Referenz | Lieferung |
|-------|----------|-----------|
| Mechanische Stückliste | Als separate Unterlage | Lieferpaket |
| Elektrische Stückliste | Als separate Unterlage | Lieferpaket |
| Verschleißteileliste | Als separate Unterlage | Lieferpaket |
| Stückliste (BOM) | Separate Unterlage — siehe **13.1.2** | Lieferpaket |

---

## 13.3.2. Handbuch-Querverweis

| Thema | Referenz |
|-------|----------|
| Kritische Ersatzteile (Betrieb) | Abschnitt **9.1.5** — `[FEHLEND]` |
| Ersatzteil-Bestellcodes | Abschnitt **9.1.5** — `[FEHLEND]` |
"""


if __name__ == "__main__":
    w("01-documents", "documents", DOCS_TR, DOCS_EN, DOCS_DE)
    w("02-drawings", "drawings", DRAW_TR, DRAW_EN, DRAW_DE)
    w("03-part-list", "part-list", PART_TR, PART_EN, PART_DE)
    for lang, text in [("tr", MAIN_TR), ("en", MAIN_EN), ("de", MAIN_DE)]:
        (ROOT / f"documents.{lang}.md").write_text(text, encoding="utf-8")
    print("OK documents main")
