# -*- coding: utf-8 -*-
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "projects" / "1726050-ALPER-KNV-30" / "12-dismantle"


def w(folder, stem, tr, en, de):
    d = ROOT / folder
    d.mkdir(parents=True, exist_ok=True)
    for lang, text in [("tr", tr), ("en", en), ("de", de)]:
        (d / f"{stem}.{lang}.md").write_text(text, encoding="utf-8")
    print("OK", folder)


MAIN_TR = r"""# 12. DEMONTAJ

Demontaj öncesi makine durdurulmalı, tanklar boşaltılmalı ve **LOTO** uygulanmalıdır (bkz. **9.1.2**, **10.1.2**).

| Parametre | Değer |
|-----------|-------|
| Tehlikeli madde | Yok |
| Bertaraf | Kullanıldığı ülkenin çevresel mevzuatı |

---

## Bölüm İçeriği

| Bölüm | Başlık | Konu |
|-------|--------|------|
| **12.1** | Demontaj | Ön koşullar, LOTO, demontaj sırası, bertaraf |
| **12.2** | Devre Dışı Bırakma | Kalıcı / geçici devre dışı |
| **12.3** | Hurda | Hurda değerlendirme, geri dönüşüm |

<!-- FOTO: Demontaj genel görünüm -->
![Demontaj genel görünüm](../assets/FOTO-12-0-dismantle-genel.png)
"""

MAIN_EN = r"""# 12. DISMANTLING

Before dismantling, stop the machine, drain tanks and apply **LOTO** (see **9.1.2**, **10.1.2**).

| Parameter | Value |
|-----------|-------|
| Hazardous substances | None |
| Disposal | Environmental regulations in country of use |

---

## Section Contents

| Section | Title | Topic |
|---------|-------|-------|
| **12.1** | Dismantling | Prerequisites, LOTO, sequence, disposal |
| **12.2** | Decommissioning | Permanent / temporary decommissioning |
| **12.3** | Scrapping | Scrap evaluation, recycling |

<!-- FOTO: Dismantling overview -->
![Dismantling overview](../assets/FOTO-12-0-dismantle-genel.png)
"""

MAIN_DE = r"""# 12. DEMONTAGE

Vor Demontage Maschine anhalten, Tanks entleeren und **LOTO** anwenden (siehe **9.1.2**, **10.1.2**).

| Parameter | Wert |
|-----------|------|
| Gefahrstoffe | Keine |
| Entsorgung | Umweltvorschriften im Einsatzland |

---

## Abschnittsinhalt

| Abschnitt | Titel | Thema |
|-----------|-------|-------|
| **12.1** | Demontage | Voraussetzungen, LOTO, Reihenfolge, Entsorgung |
| **12.2** | Außerbetriebnahme | Dauerhaft / temporär |
| **12.3** | Verschrottung | Schrottbewertung, Recycling |

<!-- FOTO: Demontage Übersicht -->
![Demontage Übersicht](../assets/FOTO-12-0-dismantle-genel.png)
"""

DISM_TR = r"""# 12.1. Demontaj

---

## 12.1.1. Demontaj Ön Koşulları

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Demontaj ön koşulları | Demontaj sırasında makine **elektriği kesilmelidir**. Makine tanklarındaki **su boşaltılmalıdır** |

Uzun süreli durdurma ve tank temizliği için bkz. Bölüm **7.3.4** ve **10.1.5**.

---

## 12.1.2. Enerji İzolasyonu (LOTO)

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Enerji izolasyon prosedürü (LOTO) | **LOTO prosedürü** uygulanmalıdır |

| # | Adım |
|---|------|
| 1 | HMI stop ile makineyi durdur |
| 2 | Ana şalteri kapat |
| 3 | LOTO kilidi/monitor uygula |
| 4 | Tank suyunu boşalt |
| 5 | Pnömatik/hidrolik enerji varsa izole et (6 bar hava hattı) |

---

## 12.1.3. Demontaj Sırası

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Demontaj sırası | Makine elektriği kesilir → tank suyu boşaltılır → makine parçalarının çıkarılması sağlanır |

| # | Adım |
|---|------|
| 1 | Operasyon durdur, LOTO uygula |
| 2 | Tankları boşalt ve temizle (bkz. **10.1.5**) |
| 3 | Tesisat bağlantılarını sök (380V, su, 6 bar hava) |
| 4 | Mekanik parçaları sök — vinç kullanma; forklift profilleri ile taşıma (bkz. **4.1**) |
| 5 | Elektrik panosu ve kablo demontajı |
| 6 | Parçaları geri dönüşüm / bertaraf için ayır |

---

## 12.1.4. Geri Dönüşüm ve Bertaraf

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Geri dönüşüm / bertaraf talimatı | Kullanıldığı ülkenin mevcut **çevresel bertaraf** gereksinimleri uygulanmalıdır |
| Tehlikeli madde (yağ / akü / kimyasal) | **Yok** |
| Çevresel bertaraf gereksinimleri | Kullanıldığı ülkenin mevcut çevresel bertaraf gereksinimleri uygulanmalıdır |

Atık su bertarafı için bkz. Bölüm **10.1.8**.
"""

DISM_EN = r"""# 12.1. Dismantling

---

## 12.1.1. Dismantling Prerequisites

| Parameter | Value / Description |
|-----------|---------------------|
| Dismantling prerequisites | Machine **power must be off** during dismantling. Tank **water must be drained** |

For long shutdown and tank cleaning, see Sections **7.3.4** and **10.1.5**.

---

## 12.1.2. Energy Isolation (LOTO)

| Parameter | Value / Description |
|-----------|---------------------|
| Energy isolation procedure (LOTO) | **LOTO procedure** must be applied |

| # | Step |
|---|------|
| 1 | Stop machine via HMI stop |
| 2 | Turn off main switch |
| 3 | Apply LOTO lock/tag |
| 4 | Drain tank water |
| 5 | Isolate pneumatic energy if present (6 bar air line) |

---

## 12.1.3. Dismantling Sequence

| Parameter | Value / Description |
|-----------|---------------------|
| Dismantling sequence | Power off → drain tank water → remove machine parts |

| # | Step |
|---|------|
| 1 | Stop operation, apply LOTO |
| 2 | Drain and clean tanks (see **10.1.5**) |
| 3 | Disconnect utilities (380V, water, 6 bar air) |
| 4 | Remove mechanical parts — no crane; use forklift profiles (see **4.1**) |
| 5 | Dismantle electrical panel and cables |
| 6 | Separate parts for recycling / disposal |

---

## 12.1.4. Recycling and Disposal

| Parameter | Value / Description |
|-----------|---------------------|
| Recycling / disposal instructions | Applicable **environmental disposal** requirements in country of use |
| Hazardous substances (oil / battery / chemical) | **None** |
| Environmental disposal requirements | Applicable environmental disposal requirements in country of use |

For wastewater disposal, see Section **10.1.8**.
"""

DISM_DE = r"""# 12.1. Demontage

---

## 12.1.1. Voraussetzungen

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Demontage-Voraussetzungen | Während Demontage **Strom abschalten**. Tank**wasser entleeren** |

Langzeitstillstand und Tankreinigung siehe Abschnitte **7.3.4** und **10.1.5**.

---

## 12.1.2. Energieisolierung (LOTO)

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Energieisolierung (LOTO) | **LOTO-Prozedur** anwenden |

| # | Schritt |
|---|---------|
| 1 | Maschine über HMI-Stop anhalten |
| 2 | Hauptschalter ausschalten |
| 3 | LOTO-Schloss/Tag anbringen |
| 4 | Tankwasser entleeren |
| 5 | Pneumatische Energie isolieren (6 bar Luftleitung) |

---

## 12.1.3. Demontagereihenfolge

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Demontagereihenfolge | Strom aus → Tankwasser entleeren → Maschinenteile ausbauen |

| # | Schritt |
|---|---------|
| 1 | Betrieb stoppen, LOTO |
| 2 | Tanks entleeren und reinigen (siehe **10.1.5**) |
| 3 | Medien trennen (380V, Wasser, 6 bar Luft) |
| 4 | Mechanische Teile ausbauen — kein Kran; Gabelstapler-Profile (siehe **4.1**) |
| 5 | Schaltschrank und Kabel demontieren |
| 6 | Teile für Recycling/Entsorgung trennen |

---

## 12.1.4. Recycling und Entsorgung

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Recycling-/Entsorgungsanweisung | Geltende **Umweltentsorgungs**vorschriften im Einsatzland |
| Gefahrstoffe (Öl / Batterie / Chemikalie) | **Keine** |
| Umweltentsorgungsanforderungen | Geltende Umweltentsorgungsvorschriften im Einsatzland |

Abwasserentsorgung siehe Abschnitt **10.1.8**.
"""

DISABLE_TR = r"""# 12.2. Devre Dışı Bırakma

---

## 12.2.1. Kalıcı Devre Dışı Bırakma

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Kalıcı devre dışı bırakma | Kalıcı devre dışı bırakma **yapılmalıdır** |

Makinenin kalıcı olarak hizmet dışı bırakılması durumunda:

| # | Adım |
|---|------|
| 1 | Bölüm **12.1** demontaj prosedürünü uygula |
| 2 | Ana şalteri kapat ve LOTO ile kilitle |
| 3 | Tesisat bağlantılarını güvenli şekilde ayır |
| 4 | Kontrol devrelerini devre dışı bırak (servis desteği gerekebilir) |
| 5 | Bertaraf / geri dönüşüm prosedürünü uygula (bkz. **12.1.4**, **12.3**) |

---

## 12.2.2. Geçici Devre Dışı Bırakma

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Geçici devre dışı bırakma | Geçici devre dışı bırakma **yapılmalıdır** |

Geçici durdurma (hafta sonu, bakım arası vb.):

| # | Adım |
|---|------|
| 1 | HMI stop ile makineyi durdur |
| 2 | Uzun süreli durdurma ise tankları boşalt ve temizle (bkz. **7.3.4**, **10**) |
| 3 | Ana şalteri kapat |
| 4 | LOTO uygula (bakım personeli müdahalesi varsa) |
| 5 | Yeniden devreye alma: Bölüm **7.2** hazırlık ve start prosedürü |
"""

DISABLE_EN = r"""# 12.2. Decommissioning

---

## 12.2.1. Permanent Decommissioning

| Parameter | Value / Description |
|-----------|---------------------|
| Permanent decommissioning | Permanent decommissioning **must be performed** |

When permanently taking machine out of service:

| # | Step |
|---|------|
| 1 | Apply Section **12.1** dismantling procedure |
| 2 | Turn off main switch and lock with LOTO |
| 3 | Safely disconnect utilities |
| 4 | Decommission control circuits (service support may be required) |
| 5 | Apply disposal / recycling procedure (see **12.1.4**, **12.3**) |

---

## 12.2.2. Temporary Decommissioning

| Parameter | Value / Description |
|-----------|---------------------|
| Temporary decommissioning | Temporary decommissioning **must be performed** |

Temporary shutdown (weekend, between maintenance, etc.):

| # | Step |
|---|------|
| 1 | Stop machine via HMI stop |
| 2 | For long shutdown, drain and clean tanks (see **7.3.4**, **10**) |
| 3 | Turn off main switch |
| 4 | Apply LOTO (if maintenance personnel intervene) |
| 5 | Recommissioning: Section **7.2** preparation and start procedure |
"""

DISABLE_DE = r"""# 12.2. Außerbetriebnahme

---

## 12.2.1. Dauerhafte Außerbetriebnahme

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Dauerhafte Außerbetriebnahme | Dauerhafte Außerbetriebnahme **durchführen** |

Bei endgültiger Stilllegung:

| # | Schritt |
|---|---------|
| 1 | Abschnitt **12.1** Demontage anwenden |
| 2 | Hauptschalter aus und mit LOTO sichern |
| 3 | Medienanschlüsse sicher trennen |
| 4 | Steuerkreise außer Betrieb (Service ggf. erforderlich) |
| 5 | Entsorgung/Recycling (siehe **12.1.4**, **12.3**) |

---

## 12.2.2. Temporäre Außerbetriebnahme

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Temporäre Außerbetriebnahme | Temporäre Außerbetriebnahme **durchführen** |

Temporärer Stillstand (Wochenende, Wartungspause usw.):

| # | Schritt |
|---|---------|
| 1 | Maschine über HMI-Stop anhalten |
| 2 | Bei Langzeitstillstand Tanks entleeren und reinigen (siehe **7.3.4**, **10**) |
| 3 | Hauptschalter ausschalten |
| 4 | LOTO anwenden (bei Wartungseingriff) |
| 5 | Wiederinbetriebnahme: Abschnitt **7.2** Vorbereitung und Start |
"""

SCRAP_TR = r"""# 12.3. Hurda

---

## 12.3.1. Hurda Değerlendirme

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Hurda değerlendirme | Hurda değerlendirme **yapılmalıdır** |

Demontaj sonrası parçalar; malzeme tipine (metal, plastik, elektronik, kablo vb.) göre sınıflandırılmalı ve yerel mevzuata uygun şekilde değerlendirilmelidir.

---

## 12.3.2. Parça Geri Dönüşüm Malzemeleri

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Parça geri dönüşüm malzemeleri | Kullanıldığı ülkenin mevcut **parça geri dönüşüm malzemeleri** uygulanmalıdır |

| Malzeme grubu | Bertaraf yöntemi |
|---------------|------------------|
| Paslanmaz çelik / metal | Geri dönüşüm tesisine |
| Plastik / kauçuk contalar | Yerel plastik/atık geri dönüşümü |
| Elektrik / elektronik (PLC, HMI, kablo) | WEEE / elektronik atık mevzuatı |
| Su / temizlik atıkları | Bölüm **10.1.8** |
"""

SCRAP_EN = r"""# 12.3. Scrapping

---

## 12.3.1. Scrap Evaluation

| Parameter | Value / Description |
|-----------|---------------------|
| Scrap evaluation | Scrap evaluation **must be performed** |

After dismantling, parts must be classified by material type (metal, plastic, electronics, cables, etc.) and processed according to local regulations.

---

## 12.3.2. Part Recycling Materials

| Parameter | Value / Description |
|-----------|---------------------|
| Part recycling materials | Applicable **part recycling materials** requirements in country of use |

| Material group | Disposal method |
|----------------|-----------------|
| Stainless steel / metal | Recycling facility |
| Plastic / rubber seals | Local plastic/waste recycling |
| Electrical / electronics (PLC, HMI, cables) | WEEE / e-waste regulations |
| Water / cleaning waste | Section **10.1.8** |
"""

SCRAP_DE = r"""# 12.3. Verschrottung

---

## 12.3.1. Schrottbewertung

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Schrottbewertung | Schrottbewertung **durchführen** |

Nach Demontage Teile nach Materialtyp (Metall, Kunststoff, Elektronik, Kabel usw.) klassifizieren und nach lokaler Vorschrift verwerten.

---

## 12.3.2. Teil-Recyclingmaterialien

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Teil-Recyclingmaterialien | Geltende **Teil-Recyclingmaterialien** im Einsatzland |

| Materialgruppe | Entsorgungsmethode |
|----------------|-------------------|
| Edelstahl / Metall | Recyclinganlage |
| Kunststoff / Gummidichtungen | Lokales Kunststoff-/Abfallrecycling |
| Elektrik / Elektronik (PLC, HMI, Kabel) | WEEE / E-Abfall |
| Wasser / Reinigungsabfälle | Abschnitt **10.1.8** |
"""


if __name__ == "__main__":
    w("01-dismantle", "dismantle", DISM_TR, DISM_EN, DISM_DE)
    w("02-disable", "disable", DISABLE_TR, DISABLE_EN, DISABLE_DE)
    w("03-scrapping", "scrapping", SCRAP_TR, SCRAP_EN, SCRAP_DE)
    for lang, text in [("tr", MAIN_TR), ("en", MAIN_EN), ("de", MAIN_DE)]:
        (ROOT / f"dismantle.{lang}.md").write_text(text, encoding="utf-8")
    print("OK dismantle main")
