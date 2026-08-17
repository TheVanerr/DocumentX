# -*- coding: utf-8 -*-
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "projects" / "1726050-ALPER-KNV-30" / "14-index"


def w(folder, stem, tr, en, de):
    d = ROOT / folder
    d.mkdir(parents=True, exist_ok=True)
    for lang, text in [("tr", tr), ("en", en), ("de", de)]:
        (d / f"{stem}.{lang}.md").write_text(text, encoding="utf-8")
    print("OK", folder)


MAIN_TR = r"""# 14. EKLER, SÖZLÜK VE İNDEKS

| Bölüm | Başlık | Konu |
|-------|--------|------|
| **14.1** | Ekler | Alarm listesi, parametre, reçete, garanti referansları |
| **14.2** | Sözlük | Terimler ve kısaltmalar |
| **14.3** | Anahtar Kelime İndeksi | LOTO, HMI, acil stop vb. — bölüm referansları |
"""

MAIN_EN = r"""# 14. ANNEXES, GLOSSARY AND INDEX

| Section | Title | Topic |
|---------|-------|-------|
| **14.1** | Annexes | Alarm list, parameters, recipes, warranty references |
| **14.2** | Glossary | Terms and abbreviations |
| **14.3** | Keyword Index | LOTO, HMI, emergency stop, etc. — section references |
"""

MAIN_DE = r"""# 14. ANHÄNGE, GLOSSAR UND INDEX

| Abschnitt | Titel | Thema |
|-----------|-------|-------|
| **14.1** | Anhänge | Alarmliste, Parameter, Rezepte, Garantiereferenzen |
| **14.2** | Glossar | Begriffe und Abkürzungen |
| **14.3** | Stichwortindex | LOTO, HMI, Not-Aus usw. — Abschnittsreferenzen |
"""

ANNEX_TR = r"""# 14.1. Ekler

---

## 14.1.1. Ek Listesi

| Ek | Konu | Referans |
|----|------|----------|
| **Ek A** | Alarm listesi | Bölüm **11.1.2** (kılavuz içi tablo) |
| **Ek B** | Parametre listesi | HMI ayar sayfası — bkz. **6.3**; ayrı evrak (teslim paketi) |
| **Ek C** | Reçete örnekleri | Kullanıcı firma tarafından tanımlanır — bkz. **8.2** |
| **Ek D** | Garanti belgesi | Ayrı evrak olarak teslim edilir — bkz. **13.1.3** |

---

## 14.1.2. Kılavuz İçi Ekler

Aşağıdaki içerikler kılavuz gövdesinde yer alır; ayrı basılı ek gerekmez:

| İçerik | Bölüm |
|--------|-------|
| Alarm kod tablosu (31 kod) | **11.1.2** |
| Tepe lambası durumları | **7** (ana), **11.2** |
| Montaj adımları checklist | **5.1**, **5.5** |
| Temizlik kayıt formu | **10.1.9** |
| Bakım kayıt formu | **9.1.6** |
"""

ANNEX_EN = r"""# 14.1. Annexes

---

## 14.1.1. Annex List

| Annex | Topic | Reference |
|-------|-------|-----------|
| **Annex A** | Alarm list | Section **11.1.2** (in-manual table) |
| **Annex B** | Parameter list | HMI settings page — see **6.3**; separate document (delivery package) |
| **Annex C** | Recipe examples | Defined by end user — see **8.2** |
| **Annex D** | Warranty document | Supplied as separate document — see **13.1.3** |

---

## 14.1.2. In-Manual Annexes

The following content is in the manual body; no separate printed annex required:

| Content | Section |
|---------|---------|
| Alarm code table (31 codes) | **11.1.2** |
| Stack light states | **7** (main), **11.2** |
| Assembly step checklists | **5.1**, **5.5** |
| Cleaning record form | **10.1.9** |
| Maintenance record form | **9.1.6** |
"""

ANNEX_DE = r"""# 14.1. Anhänge

---

## 14.1.1. Anlagenverzeichnis

| Anlage | Thema | Referenz |
|--------|-------|----------|
| **Anlage A** | Alarmliste | Abschnitt **11.1.2** (Tabelle im Handbuch) |
| **Anlage B** | Parameterliste | HMI-Einstellseite — siehe **6.3**; separate Unterlage (Lieferpaket) |
| **Anlage C** | Rezeptbeispiele | Vom Anwender definiert — siehe **8.2** |
| **Anlage D** | Garantiedokument | Separate Unterlage — siehe **13.1.3** |

---

## 14.1.2. Anhänge im Handbuch

Folgende Inhalte sind im Handbuch enthalten; kein separates Anhangsdokument erforderlich:

| Inhalt | Abschnitt |
|--------|-----------|
| Alarmcodetabelle (31 Codes) | **11.1.2** |
| Signalleuchten-Zustände | **7** (Haupt), **11.2** |
| Montage-Checklisten | **5.1**, **5.5** |
| Reinigungsprotokoll | **10.1.9** |
| Wartungsprotokoll | **9.1.6** |
"""

GLOSS_TR = r"""# 14.2. Sözlük

---

## 14.2.1. Kısaltmalar

| Kısaltma | Açıklama |
|----------|----------|
| **BOM** | Bill of Materials — parça listesi |
| **Cat.** | Makine emniyet kategorisi (Cat.3) |
| **CIP** | Cleaning in Place — makinede uygulanmaz |
| **COP** | Cleaning out of Place — makinede uygulanmaz |
| **HMI** | Human Machine Interface — dokunmatik operatör paneli (SIMATIC KTP700 Basic PN) |
| **LOTO** | Lockout/Tagout — enerji izolasyonu ve kilitleme |
| **MES** | Manufacturing Execution System — üst sistem (müşteri hattı) |
| **PE** | Protective Earth — koruma topraklaması |
| **PLC** | Programmable Logic Controller — SIMATIC S7-1200 |
| **P&ID** | Piping and Instrumentation Diagram — proses/enstrümantasyon şeması |
| **RFID** | Radio Frequency Identification — güvenlik sensörü (kapak izleme) |
| **RPM** | Devir/dakika |
| **SCADA** | Supervisory Control and Data Acquisition |
| **SSOT** | Single Source of Truth — tek kaynak veri dosyası (DATA) |

---

## 14.2.2. Terimler

| Terim | Açıklama |
|-------|----------|
| **Acil stop** | Fiziksel acil durdurma butonu; tüm fonksiyonları durdurur |
| **Aktarma vanası** | Tanklar arası su aktarım vanası |
| **Hazırlık butonu** | HMI'da tank dolumu ve ısıtma prosedürünü başlatan buton |
| **Konveyör** | Parçaların yıkama/durulama/kurutma proseslerinden geçtiği taşıma hattı |
| **Otomatik dolum vanası** | Tank su seviyesi için su giriş vanası |
| **Reçete** | HMI'da tanımlı proses parametreleri (sıcaklık, proses seçimi vb.) |
| **Tepe lambası** | Sarı (hazır), yeşil (çalışıyor), kırmızı (alarm) |
| **Torba filtre** | Pompa çıkışı hassas filtrelerdeki sökülebilir filtre |
| **Yağ sıyırıcı** | Yıkama tankı yüzey yağını toplayan ünite |
"""

GLOSS_EN = r"""# 14.2. Glossary

---

## 14.2.1. Abbreviations

| Abbrev. | Description |
|---------|-------------|
| **BOM** | Bill of Materials — parts list |
| **Cat.** | Machine safety category (Cat.3) |
| **CIP** | Cleaning in Place — not applicable on this machine |
| **COP** | Cleaning out of Place — not applicable on this machine |
| **HMI** | Human Machine Interface — touch operator panel (SIMATIC KTP700 Basic PN) |
| **LOTO** | Lockout/Tagout — energy isolation and lockout |
| **MES** | Manufacturing Execution System — upper system (customer line) |
| **PE** | Protective Earth — protective grounding |
| **PLC** | Programmable Logic Controller — SIMATIC S7-1200 |
| **P&ID** | Piping and Instrumentation Diagram |
| **RFID** | Radio Frequency Identification — safety sensor (cover monitoring) |
| **RPM** | Revolutions per minute |
| **SCADA** | Supervisory Control and Data Acquisition |
| **SSOT** | Single Source of Truth — master data file (DATA) |

---

## 14.2.2. Terms

| Term | Description |
|------|-------------|
| **Emergency stop** | Physical e-stop button; stops all functions |
| **Transfer valve** | Valve for water transfer between tanks |
| **Preparation button** | HMI button starting tank fill and heating |
| **Conveyor** | Transport line for wash/rinse/dry processes |
| **Automatic fill valve** | Water inlet valve for tank level |
| **Recipe** | Process parameters on HMI (temperature, process selection, etc.) |
| **Stack light** | Yellow (ready), green (running), red (alarm) |
| **Bag filter** | Removable filter in fine filters at pump outlet |
| **Oil skimmer** | Unit collecting surface oil in wash tank |
"""

GLOSS_DE = r"""# 14.2. Glossar

---

## 14.2.1. Abkürzungen

| Kürzel | Beschreibung |
|--------|--------------|
| **BOM** | Bill of Materials — Stückliste |
| **Cat.** | Maschinensicherheitskategorie (Cat.3) |
| **CIP** | Cleaning in Place — an dieser Maschine nicht anwendbar |
| **COP** | Cleaning out of Place — an dieser Maschine nicht anwendbar |
| **HMI** | Human Machine Interface — Bedienpanel (SIMATIC KTP700 Basic PN) |
| **LOTO** | Lockout/Tagout — Energieisolierung und Verriegelung |
| **MES** | Manufacturing Execution System — Leitsystem (Kundenlinie) |
| **PE** | Protective Earth — Schutzleiter |
| **PLC** | Programmable Logic Controller — SIMATIC S7-1200 |
| **P&ID** | Piping and Instrumentation Diagram — Rohrleitungs-/Instrumentierungsfließbild |
| **RFID** | Radio Frequency Identification — Sicherheitssensor (Klappenüberwachung) |
| **RPM** | U/min |
| **SCADA** | Supervisory Control and Data Acquisition |
| **SSOT** | Single Source of Truth — Master-Datendatei (DATA) |

---

## 14.2.2. Begriffe

| Begriff | Beschreibung |
|---------|--------------|
| **Not-Aus** | Physische Not-Aus-Taste; stoppt alle Funktionen |
| **Umlaufventil** | Ventil für Wassertransfer zwischen Tanks |
| **Vorbereitungstaste** | HMI-Taste für Tankfüllung und Erwärmung |
| **Förderer** | Transport für Wasch-/Spül-/Trocknungsprozesse |
| **Automatisches Füllventil** | Wassereinlassventil für Tankniveau |
| **Rezept** | Prozessparameter am HMI (Temperatur, Prozessauswahl usw.) |
| **Signalleuchte** | Gelb (bereit), grün (läuft), rot (Alarm) |
| **Beutelfilter** | Wechselfilter in Feinfiltern am Pumpenausgang |
| **Ölabscheider** | Einheit zum Abscheiden von Oberflächenöl im Waschtank |
"""

INDEX_TR = r"""# 14.3. Anahtar Kelime İndeksi

Aşağıdaki tablo, kılavuz içinde sık aranan konuların bölüm referanslarını listeler.

---

## 14.3.1. A–H

| Anahtar kelime | Bölüm(ler) |
|----------------|------------|
| Acil stop | **2**, **5.4**, **6.2**, **7.3.2**, **11.1.2** (Error-229) |
| Alarm / arıza | **11**, **7.4.4** |
| Ayarlar | **6** |
| Bakım | **9**, **10** |
| Basınçlı hava (6 bar) | **3.3**, **5.3**, **6.5**, **7.2**, **11.5** (Error-235) |
| Besleme (380V) | **3.3**, **5.3** |
| Capacity / kapasite | **8**, **3.3.2** |
| Demontaj | **12** |
| Dezenfeksiyon | **10.1.5** |
| Dokümanlar | **13** |
| Dolum vanası | **7.2**, **11.5** (Error-300–303) |
| Durdurma (stop) | **7.3** |
| Elektrik şeması | **13.1** |
| Emniyet / güvenlik | **2**, **5.4**, **6.2** |
| Fan (kurutma / egzos) | **3.1**, **11.3** (Error-110–114) |
| Filtre temizliği | **10.1.3**, **10.1.4** |
| Forklift taşıma | **4**, **5.1** |
| HMI | **3.4**, **6.3**, **7**, **8.2**, **11.2** |
| Hazırlık butonu | **7.2** |
| Hurda | **12.3** |

---

## 14.3.2. I–R

| Anahtar kelime | Bölüm(ler) |
|----------------|------------|
| I/O listesi | **5.6**, **13.1** |
| Isıtıcı | **7.2**, **11.3** (Error-150/151/170–172) |
| Kapak / RFID | **2**, **5.4**, **6.2**, **7.4.4**, **11.7** (Error-422) |
| Kapasite | **8** |
| Konveyör | **3.1**, **3.5**, **7.4**, **9.1.4** (yağlama) |
| Kurulum / montaj | **5** |
| Kurutma | **7.1**, **7.4** |
| LOTO | **5.4**, **6.2**, **9.1.2**, **10.1.2**, **11**, **12.1.2** |
| Layout | **3.5**, **13.2** |
| Operasyon | **7** |
| P&ID | **13.1** |
| PLC | **3.4**, **5.6**, **13.1** |
| Pompa | **3.1**, **7.2.5**, **11.3** (Error-100/101) |
| Profinet | **5.6** |
| Reçete | **6.3**, **8.2** |
| Reset (acil stop) | **7.3.2** |
| Robot (giriş/çıkış) | **7.4**, **7.5**, **8** |

---

## 14.3.3. S–Z

| Anahtar kelime | Bölüm(ler) |
|----------------|------------|
| Secomea (uzaktan erişim) | **3.4**, **11.2** |
| Servo motor | **11.3** (Error-460) |
| Sıcaklık ayarı | **6.3**, **7.2**, **8.2** |
| Sızıntı tavası | **11.1.2** (Error-452) |
| Start | **7.2** |
| Su basıncı (1 bar) | **3.3**, **5.3**, **11.5** (Error-236) |
| Su seviyesi | **7.2**, **11.1.2** (Error-200–203) |
| Tank boşaltma | **7.3.4**, **10**, **12** |
| Tepe lambası | **7**, **11.2** |
| Temizlik | **10** |
| Uzun süreli durdurma | **7.3.4**, **12.2.2** |
| Vana (pompa önü) | **7.2.5** |
| Vinç (yasak) | **4**, **5.1** |
| Yağlama | **9.1.4** |
| Yağ sıyırıcı | **3.1**, **11.3** (Error-130) |
| Yedek parça | **9.1.5**, **13.3** |
| Yıkama / durulama | **7.1**, **7.4** |
| 7/24 çalışma | **7.5**, **8.1.5** |
"""

INDEX_EN = r"""# 14.3. Keyword Index

The table below lists section references for frequently searched topics.

---

## 14.3.1. A–H

| Keyword | Section(s) |
|---------|------------|
| Emergency stop | **2**, **5.4**, **6.2**, **7.3.2**, **11.1.2** (Error-229) |
| Alarm / fault | **11**, **7.4.4** |
| Settings | **6** |
| Maintenance | **9**, **10** |
| Compressed air (6 bar) | **3.3**, **5.3**, **6.5**, **7.2**, **11.5** (Error-235) |
| Power supply (380V) | **3.3**, **5.3** |
| Capacity | **8**, **3.3.2** |
| Dismantling | **12** |
| Disinfection | **10.1.5** |
| Documents | **13** |
| Fill valve | **7.2**, **11.5** (Error-300–303) |
| Shutdown (stop) | **7.3** |
| Electrical schematic | **13.1** |
| Safety | **2**, **5.4**, **6.2** |
| Fan (drying / exhaust) | **3.1**, **11.3** (Error-110–114) |
| Filter cleaning | **10.1.3**, **10.1.4** |
| Forklift transport | **4**, **5.1** |
| HMI | **3.4**, **6.3**, **7**, **8.2**, **11.2** |
| Preparation button | **7.2** |
| Scrapping | **12.3** |

---

## 14.3.2. I–R

| Keyword | Section(s) |
|---------|------------|
| I/O list | **5.6**, **13.1** |
| Heater | **7.2**, **11.3** (Error-150/151/170–172) |
| Cover / RFID | **2**, **5.4**, **6.2**, **7.4.4**, **11.7** (Error-422) |
| Capacity | **8** |
| Conveyor | **3.1**, **3.5**, **7.4**, **9.1.4** (lubrication) |
| Installation / assembly | **5** |
| Drying | **7.1**, **7.4** |
| LOTO | **5.4**, **6.2**, **9.1.2**, **10.1.2**, **11**, **12.1.2** |
| Layout | **3.5**, **13.2** |
| Operation | **7** |
| P&ID | **13.1** |
| PLC | **3.4**, **5.6**, **13.1** |
| Pump | **3.1**, **7.2.5**, **11.3** (Error-100/101) |
| Profinet | **5.6** |
| Recipe | **6.3**, **8.2** |
| Reset (emergency stop) | **7.3.2** |
| Robot (infeed/outfeed) | **7.4**, **7.5**, **8** |

---

## 14.3.3. S–Z

| Keyword | Section(s) |
|---------|------------|
| Secomea (remote access) | **3.4**, **11.2** |
| Servo motor | **11.3** (Error-460) |
| Temperature setting | **6.3**, **7.2**, **8.2** |
| Leak tray | **11.1.2** (Error-452) |
| Start | **7.2** |
| Water pressure (1 bar) | **3.3**, **5.3**, **11.5** (Error-236) |
| Water level | **7.2**, **11.1.2** (Error-200–203) |
| Tank draining | **7.3.4**, **10**, **12** |
| Stack light | **7**, **11.2** |
| Cleaning | **10** |
| Long-term shutdown | **7.3.4**, **12.2.2** |
| Valve (in front of pump) | **7.2.5** |
| Crane (prohibited) | **4**, **5.1** |
| Lubrication | **9.1.4** |
| Oil skimmer | **3.1**, **11.3** (Error-130) |
| Spare parts | **9.1.5**, **13.3** |
| Wash / rinse | **7.1**, **7.4** |
| 24/7 operation | **7.5**, **8.1.5** |
"""

INDEX_DE = r"""# 14.3. Stichwortindex

Die Tabelle listet Abschnittsreferenzen für häufig gesuchte Themen.

---

## 14.3.1. A–H

| Stichwort | Abschnitt(e) |
|-----------|--------------|
| Not-Aus | **2**, **5.4**, **6.2**, **7.3.2**, **11.1.2** (Error-229) |
| Alarm / Störung | **11**, **7.4.4** |
| Einstellungen | **6** |
| Wartung | **9**, **10** |
| Druckluft (6 bar) | **3.3**, **5.3**, **6.5**, **7.2**, **11.5** (Error-235) |
| Stromversorgung (380V) | **3.3**, **5.3** |
| Kapazität | **8**, **3.3.2** |
| Demontage | **12** |
| Desinfektion | **10.1.5** |
| Dokumente | **13** |
| Füllventil | **7.2**, **11.5** (Error-300–303) |
| Stillstand (Stop) | **7.3** |
| Elektrikschema | **13.1** |
| Sicherheit | **2**, **5.4**, **6.2** |
| Ventilator (Trocknung / Abluft) | **3.1**, **11.3** (Error-110–114) |
| Filterreinigung | **10.1.3**, **10.1.4** |
| Gabelstapler-Transport | **4**, **5.1** |
| HMI | **3.4**, **6.3**, **7**, **8.2**, **11.2** |
| Vorbereitungstaste | **7.2** |
| Verschrottung | **12.3** |

---

## 14.3.2. I–R

| Stichwort | Abschnitt(e) |
|-----------|--------------|
| I/O-Liste | **5.6**, **13.1** |
| Heizung | **7.2**, **11.3** (Error-150/151/170–172) |
| Klappe / RFID | **2**, **5.4**, **6.2**, **7.4.4**, **11.7** (Error-422) |
| Kapazität | **8** |
| Förderer | **3.1**, **3.5**, **7.4**, **9.1.4** (Schmierung) |
| Installation / Montage | **5** |
| Trocknung | **7.1**, **7.4** |
| LOTO | **5.4**, **6.2**, **9.1.2**, **10.1.2**, **11**, **12.1.2** |
| Layout | **3.5**, **13.2** |
| Betrieb | **7** |
| P&ID | **13.1** |
| PLC | **3.4**, **5.6**, **13.1** |
| Pumpe | **3.1**, **7.2.5**, **11.3** (Error-100/101) |
| Profinet | **5.6** |
| Rezept | **6.3**, **8.2** |
| Reset (Not-Aus) | **7.3.2** |
| Roboter (Zufuhr/Abfuhr) | **7.4**, **7.5**, **8** |

---

## 14.3.3. S–Z

| Stichwort | Abschnitt(e) |
|-----------|--------------|
| Secomea (Fernzugriff) | **3.4**, **11.2** |
| Servomotor | **11.3** (Error-460) |
| Temperatureinstellung | **6.3**, **7.2**, **8.2** |
| Leckwanne | **11.1.2** (Error-452) |
| Start | **7.2** |
| Wasserdruck (1 bar) | **3.3**, **5.3**, **11.5** (Error-236) |
| Wasserstand | **7.2**, **11.1.2** (Error-200–203) |
| Tankentleerung | **7.3.4**, **10**, **12** |
| Signalleuchte | **7**, **11.2** |
| Reinigung | **10** |
| Langzeitstillstand | **7.3.4**, **12.2.2** |
| Ventil (vor Pumpe) | **7.2.5** |
| Kran (verboten) | **4**, **5.1** |
| Schmierung | **9.1.4** |
| Ölabscheider | **3.1**, **11.3** (Error-130) |
| Ersatzteile | **9.1.5**, **13.3** |
| Waschen / Spülen | **7.1**, **7.4** |
| 24/7-Betrieb | **7.5**, **8.1.5** |
"""


if __name__ == "__main__":
    w("01-annexes", "annexes", ANNEX_TR, ANNEX_EN, ANNEX_DE)
    w("02-glossary", "glossary", GLOSS_TR, GLOSS_EN, GLOSS_DE)
    w("03-indexes", "indexes", INDEX_TR, INDEX_EN, INDEX_DE)
    for lang, text in [("tr", MAIN_TR), ("en", MAIN_EN), ("de", MAIN_DE)]:
        (ROOT / f"index.{lang}.md").write_text(text, encoding="utf-8")
    print("OK index main")
