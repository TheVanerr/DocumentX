# -*- coding: utf-8 -*-
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "projects" / "1726050-ALPER-KNV-30" / "08-capacity"


def w(folder, stem, tr, en, de):
    d = ROOT / folder
    d.mkdir(parents=True, exist_ok=True)
    for lang, text in [("tr", tr), ("en", en), ("de", de)]:
        (d / f"{stem}.{lang}.md").write_text(text, encoding="utf-8")
    print("OK", folder)


CAP_TR = r"""# 8. KAPASİTE


Makine; girişten yüklemeli konveyörlü iki banyolu (yıkama + durulama) endüstriyel parça yıkama makinesidir. Kapasite; parça geometrisi, robot besleme hızı, reçete parametreleri (sıcaklık, proses süreleri) ve HMI'da aktif edilen proses fonksiyonlarına (yıkama, durulama, kurutma 1/2) bağlıdır.

Makine **7/24 robot** hattında çalışacak şekilde tasarlanmıştır.

| Parametre | Değer |
|-----------|-------|
| Minimum kapasite | **730 adet/saat** |
| Nominal döngü süresi | **900 sn** (15 dk) |
| Maksimum sürekli çalışma | **24/7** |
| Nominal / maksimum kapasite | Kullanıcı firma tarafından belirlenir |
| Ürün boyut / ağırlık sınırları | Kullanıcı firma tarafından belirlenir |

Teknik boyut ve proses özeti için bkz. Bölüm **3.3.2**.

---

## Bölüm İçeriği

| Bölüm | Başlık | Konu |
|-------|--------|------|
| **8.1** | Ürün Kapasitesi | Kapasite tablosu, test koşulları, sürekli çalışma sınırı |
| **8.2** | Spesifik Kurulum | Reçete parametreleri, ürün bazlı kurulum |

<!-- FOTO: Konveyör kapasite genel görünüm -->
![Konveyör kapasite genel görünüm](../assets/FOTO-8-0-capacity-genel.png)
"""

CAP_EN = r"""# 8. CAPACITY


The machine is an infeed-loaded conveyor industrial parts washer with two baths (wash + rinse). Capacity depends on part geometry, robot feed rate, recipe parameters (temperature, process times) and process functions activated on HMI (wash, rinse, drying 1/2).

The machine is designed for **24/7 robot** line operation.

| Parameter | Value |
|-----------|-------|
| Minimum capacity | **730 pcs/hour** |
| Nominal cycle time | **900 s** (15 min) |
| Maximum continuous operation | **24/7** |
| Nominal / maximum capacity | Defined by end user |
| Product size / weight limits | Defined by end user |

For technical dimensions and process summary, see Section **3.3.2**.

---

## Section Contents

| Section | Title | Topic |
|---------|-------|-------|
| **8.1** | Product Capacity | Capacity table, test conditions, continuous operation limit |
| **8.2** | Specific Setup | Recipe parameters, product-based setup |

<!-- FOTO: Conveyor capacity overview -->
![Conveyor capacity overview](../assets/FOTO-8-0-capacity-genel.png)
"""

CAP_DE = r"""# 8. KAPAZITÄT


Die Maschine ist eine zufuhrbeladene Förderband-Teilewaschanlage mit zwei Bädern (Waschen + Spülen). Kapazität hängt ab von Teilgeometrie, Roboter-Zufuhrgeschwindigkeit, Rezeptparametern (Temperatur, Prozesszeiten) und am HMI aktivierten Prozessfunktionen (Waschen, Spülen, Trocknung 1/2).

Die Maschine ist für **24/7-Roboter**-Linienbetrieb ausgelegt.

| Parameter | Wert |
|-----------|------|
| Mindestkapazität | **730 Stk./h** |
| Nominale Zykluszeit | **900 s** (15 min) |
| Maximaler Dauerbetrieb | **24/7** |
| Nominale / maximale Kapazität | Vom Anwender festgelegt |
| Produktgrößen- / -gewichtsgrenzen | Vom Anwender festgelegt |

Technische Abmessungen und Prozessübersicht siehe Abschnitt **3.3.2**.

---

## Abschnittsinhalt

| Abschnitt | Titel | Thema |
|-----------|-------|-------|
| **8.1** | Produktkapazität | Kapazitätstabelle, Testbedingungen, Dauerbetriebsgrenze |
| **8.2** | Spezifische Einrichtung | Rezeptparameter, produktbezogene Einrichtung |

<!-- FOTO: Förderer Kapazität Übersicht -->
![Förderer Kapazität Übersicht](../assets/FOTO-8-0-capacity-genel.png)
"""

PROD_TR = r"""# 8.1. Ürün Kapasitesi


Kapasite değerlendirmesi konveyör üzerinde ilerleyen parçalar için yapılır; tambur hacmi veya ağırlık sınırı geçerli değildir.

---

## 8.1.1. Kapasite Parametreleri

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Nominal kapasite (adet/saat) | Kullanıcı firma tarafından belirlenir |
| Maksimum kapasite (adet/saat) | Bilinmiyor — kullanıcı firma tarafından belirlenir |
| Minimum kapasite (adet/saat) | **730** |
| Nominal döngü süresi (sn) | **900** (15 dk) |
| Proses adımları | Yıkama → Durulama → Kurutma (3 adım) |

---

## 8.1.2. Ürün Sınırları

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Ürün formatı / ambalaj tipi | Bilinmiyor — kullanıcı firma tarafından belirlenir |
| Ürün boyutu min (mm) | Bilinmiyor — kullanıcı firma tarafından belirlenir |
| Ürün boyutu max (mm) | Bilinmiyor — kullanıcı firma tarafından belirlenir |
| Ürün ağırlığı min (g) | Bilinmiyor — kullanıcı firma tarafından belirlenir |
| Ürün ağırlığı max (g) | Bilinmiyor — kullanıcı firma tarafından belirlenir |

Parça boyutu ve ağırlığı; konveyör genişliği, robot tutuş noktası ve banyo geometrisine uygun olmalıdır. Uygunluk kullanıcı firma tarafından proses koşullarına göre doğrulanmalıdır.

---

## 8.1.3. Nominal Kapasite Tablosu

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Nominal kapasite tablosu (ürün × adet/saat) | **Kullanıcı firma tarafından ayarlanır** |

Ürün tipine göre adet/saat değerleri kullanıcı firma tarafından HMI reçeteleri ve robot hattı cycle süreleri ile birlikte tanımlanmalıdır.

---

## 8.1.4. Test Edilen Kapasite ve Koşulları

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Test edilen kapasite (adet/saat) | **Kullanıcı firma tarafından ayarlanır** |
| Kapasite test koşulları | **Kullanıcı firma tarafından ayarlanır** |

Kapasite testi; gerçek parça geometrisi, hedef temizlik kriterleri, reçete sıcaklıkları ve robot besleme/çıkış hızları ile kullanıcı sahasında yapılmalıdır.

---

## 8.1.5. Maksimum Sürekli Çalışma

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Maksimum sürekli çalışma süresi (saat/gün) | **24/7 çalışabilir** |

Makine 7/24 robot hattında kesintisiz çalışmaya uygundur. Periyodik bakım ve temizlik prosedürleri için bkz. Bölüm **9** ve **10**.

---

## 8.1.6. Kapasiteyi Etkileyen Faktörler

| Faktör | Etki |
|--------|------|
| Robot besleme / çıkış hızı | Hat cycle süresini belirler |
| HMI reçete sıcaklıkları | Isıtma süresini etkiler (bkz. Bölüm **7.2**) |
| Aktif proses fonksiyonları | Yıkama, durulama, kurutma 1/2 on/off seçimi |
| Parça geometrisi ve kirlilik derecesi | Etkin yıkama süresini etkiler |
| Pompa önü vanalar | Kapalı vanalar proses verimini düşürür |

> **Not:** Minimum kapasite değeri (730 adet/saat) makine tasarım referansıdır. Gerçek üretim kapasitesi müşteri hattı koşullarına göre değişir.
"""

PROD_EN = r"""# 8.1. Product Capacity


Capacity assessment applies to parts advancing on the conveyor; drum volume or weight limits do not apply.

---

## 8.1.1. Capacity Parameters

| Parameter | Value / Description |
|-----------|---------------------|
| Nominal capacity (pcs/hour) | Defined by end user |
| Maximum capacity (pcs/hour) | Unknown — defined by end user |
| Minimum capacity (pcs/hour) | **730** |
| Nominal cycle time (s) | **900** (15 min) |
| Process steps | Wash → Rinse → Dry (3 steps) |

---

## 8.1.2. Product Limits

| Parameter | Value / Description |
|-----------|---------------------|
| Product format / packaging type | Unknown — defined by end user |
| Product size min (mm) | Unknown — defined by end user |
| Product size max (mm) | Unknown — defined by end user |
| Product weight min (g) | Unknown — defined by end user |
| Product weight max (g) | Unknown — defined by end user |

Part size and weight must suit conveyor width, robot grip point and bath geometry. Suitability must be verified by end user under process conditions.

---

## 8.1.3. Nominal Capacity Table

| Parameter | Value / Description |
|-----------|---------------------|
| Nominal capacity table (product × pcs/hour) | **Set by end user** |

Pcs/hour values per product type must be defined by end user together with HMI recipes and robot line cycle times.

---

## 8.1.4. Tested Capacity and Conditions

| Parameter | Value / Description |
|-----------|---------------------|
| Tested capacity (pcs/hour) | **Set by end user** |
| Capacity test conditions | **Set by end user** |

Capacity testing must be performed on site with actual part geometry, target cleanliness criteria, recipe temperatures and robot feed/outfeed rates.

---

## 8.1.5. Maximum Continuous Operation

| Parameter | Value / Description |
|-----------|---------------------|
| Maximum continuous operation (hours/day) | **Can run 24/7** |

Machine is suitable for uninterrupted operation on 24/7 robot line. For periodic maintenance and cleaning, see Sections **9** and **10**.

---

## 8.1.6. Factors Affecting Capacity

| Factor | Effect |
|--------|--------|
| Robot feed / outfeed rate | Defines line cycle time |
| HMI recipe temperatures | Affects heating time (see Section **7.2**) |
| Active process functions | Wash, rinse, drying 1/2 on/off selection |
| Part geometry and contamination level | Affects effective wash time |
| Valves in front of pumps | Closed valves reduce process efficiency |

> **Note:** Minimum capacity value (730 pcs/hour) is a machine design reference. Actual production capacity varies with customer line conditions.
"""

PROD_DE = r"""# 8.1. Produktkapazität


Kapazitätsbewertung gilt für Teile auf dem Förderer; Trommelvolumen- oder Gewichtsgrenzen gelten nicht.

---

## 8.1.1. Kapazitätsparameter

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Nominale Kapazität (Stk./h) | Vom Anwender festgelegt |
| Maximale Kapazität (Stk./h) | Unbekannt — vom Anwender festgelegt |
| Mindestkapazität (Stk./h) | **730** |
| Nominale Zykluszeit (s) | **900** (15 min) |
| Prozessschritte | Waschen → Spülen → Trocknen (3 Schritte) |

---

## 8.1.2. Produktgrenzen

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Produktformat / Verpackungstyp | Unbekannt — vom Anwender festgelegt |
| Produktgröße min (mm) | Unbekannt — vom Anwender festgelegt |
| Produktgröße max (mm) | Unbekannt — vom Anwender festgelegt |
| Produktgewicht min (g) | Unbekannt — vom Anwender festgelegt |
| Produktgewicht max (g) | Unbekannt — vom Anwender festgelegt |

Teilgröße und -gewicht müssen zu Fördererbreite, Roboter-Greifpunkt und Badgeometrie passen. Eignung vom Anwender unter Prozessbedingungen prüfen.

---

## 8.1.3. Nominale Kapazitätstabelle

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Nominale Kapazitätstabelle (Produkt × Stk./h) | **Vom Anwender eingestellt** |

Stk./h-Werte pro Produkttyp müssen vom Anwender zusammen mit HMI-Rezepten und Roboterlinien-Zykluszeiten definiert werden.

---

## 8.1.4. Getestete Kapazität und Bedingungen

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Getestete Kapazität (Stk./h) | **Vom Anwender eingestellt** |
| Kapazitätstest-Bedingungen | **Vom Anwender eingestellt** |

Kapazitätstest muss vor Ort mit tatsächlicher Teilgeometrie, Ziel-Reinigungskriterien, Rezepttemperaturen und Roboter-Zufuhr-/Abfuhrgeschwindigkeiten erfolgen.

---

## 8.1.5. Maximaler Dauerbetrieb

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Maximaler Dauerbetrieb (Std./Tag) | **24/7 betreibbar** |

Maschine ist für ununterbrochenen Betrieb in 24/7-Roboterlinie geeignet. Periodische Wartung und Reinigung siehe Abschnitte **9** und **10**.

---

## 8.1.6. Kapazitätsbeeinflussende Faktoren

| Faktor | Einfluss |
|--------|----------|
| Roboter Zufuhr / Abfuhr | Bestimmt Linien-Zykluszeit |
| HMI-Rezepttemperaturen | Beeinflusst Erwärmungszeit (siehe Abschnitt **7.2**) |
| Aktive Prozessfunktionen | Waschen, Spülen, Trocknung 1/2 Ein/Aus |
| Teilgeometrie und Verschmutzungsgrad | Beeinflusst effektive Waschzeit |
| Ventile vor Pumpen | Geschlossene Ventile reduzieren Prozesseffizienz |

> **Hinweis:** Mindestkapazität (730 Stk./h) ist Maschinen-Designreferenz. Tatsächliche Produktionskapazität variiert mit Kundenlinienbedingungen.
"""

SETUP_TR = r"""# 8.2. Spesifik Kurulum


Makinede **format değişim prosedürü yoktur** (bkz. Bölüm **6.1.5**). Ürün/reçete parametreleri HMI üzerinden kullanıcı firma tarafından ayarlanır.

---

## 8.2.1. Reçete / Program Parametreleri

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Reçete kayıt sınırı | Herhangi bir reçete sınırı bulunmamaktadır |
| Sıcaklık ayarı | HMI ayar sayfasından (yıkama/durulama tank sıcaklıkları) |
| Proses fonksiyon seçimi | HMI çalışma sayfası — yıkama, durulama, kurutma 1, kurutma 2, egzos on/off |

Reçete parametreleri (sıcaklık, proses süreleri vb.) kullanıcı firmanın parça tipine ve temizlik hedefine göre HMI üzerinden tanımlanmalıdır.

<!-- FOTO: HMI reçete / ayar sayfası -->
![HMI reçete ayar sayfası](../../assets/FOTO-8-2-0-recete.png)

---

## 8.2.2. Ürün Bazlı Parametreler

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Ürün A parametreleri | **Kullanıcı firma tarafından ayarlanır** |
| Ürün B parametreleri | **Kullanıcı firma tarafından ayarlanır** |
| Ürün C parametreleri | **Kullanıcı firma tarafından ayarlanır** |

Her ürün tipi için ayrı reçete oluşturulabilir. Parametreler (sıcaklık, aktif proses adımları, cycle süresi) robot hattı cycle'ı ile uyumlu olacak şekilde kullanıcı firma tarafından belirlenmelidir.

---

## 8.2.3. Reçete Numarası Listesi

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Reçete no listesi | **Kullanıcı firma tarafından ayarlanır** |

Reçete numaralandırması ve ürün eşleştirmesi kullanıcı firma tarafından tanımlanmalıdır. Robot PLC / üst sistem entegrasyonu varsa reçete seçimi müşteri otomasyon yapısına göre yapılır.

---

## 8.2.4. Spesifik Kurulum Kontrol Listesi

| # | Kontrol | Durum |
|---|---------|-------|
| 1 | Ürün tipine uygun reçete seçildi / oluşturuldu | ☐ OK / ☐ NOK |
| 2 | Tank sıcaklıkları hedef değerlere ayarlandı | ☐ OK / ☐ NOK |
| 3 | Proses fonksiyonları (yıkama/durulama/kurutma) doğru on/off | ☐ OK / ☐ NOK |
| 4 | Robot hattı cycle süresi ile uyum doğrulandı | ☐ OK / ☐ NOK |
| 5 | Örnek parça ile test yıkama yapıldı | ☐ OK / ☐ NOK |

**Tarih:** _______________ **Kontrol eden:** _______________

> **Not:** İlk kurulum ve yeni ürün devreye alma testleri kullanıcı firma sahasında gerçek parça ile yapılmalıdır.
"""

SETUP_EN = r"""# 8.2. Specific Setup


There is **no format change procedure** on the machine (see Section **6.1.5**). Product/recipe parameters are set by end user via HMI.

---

## 8.2.1. Recipe / Program Parameters

| Parameter | Value / Description |
|-----------|---------------------|
| Recipe storage limit | No recipe limit |
| Temperature setting | HMI settings page (wash/rinse tank temperatures) |
| Process function selection | HMI operating page — wash, rinse, drying 1, drying 2, exhaust on/off |

Recipe parameters (temperature, process times, etc.) must be defined on HMI by end user according to part type and cleanliness target.

<!-- FOTO: HMI recipe / settings page -->
![HMI recipe settings page](../../assets/FOTO-8-2-0-recete.png)

---

## 8.2.2. Product-Based Parameters

| Parameter | Value / Description |
|-----------|---------------------|
| Product A parameters | **Set by end user** |
| Product B parameters | **Set by end user** |
| Product C parameters | **Set by end user** |

A separate recipe can be created for each product type. Parameters (temperature, active process steps, cycle time) must be defined by end user to match robot line cycle.

---

## 8.2.3. Recipe Number List

| Parameter | Value / Description |
|-----------|---------------------|
| Recipe number list | **Set by end user** |

Recipe numbering and product mapping must be defined by end user. If robot PLC / upper system integration exists, recipe selection follows customer automation structure.

---

## 8.2.4. Specific Setup Checklist

| # | Check | Status |
|---|-------|--------|
| 1 | Recipe for product type selected / created | ☐ OK / ☐ NOK |
| 2 | Tank temperatures set to target values | ☐ OK / ☐ NOK |
| 3 | Process functions (wash/rinse/dry) correctly on/off | ☐ OK / ☐ NOK |
| 4 | Compatibility with robot line cycle verified | ☐ OK / ☐ NOK |
| 5 | Test wash with sample part performed | ☐ OK / ☐ NOK |

**Date:** _______________ **Checked by:** _______________

> **Note:** Initial setup and new product commissioning tests must be performed on site with actual parts by end user.
"""

SETUP_DE = r"""# 8.2. Spezifische Einrichtung


Es gibt **keine Formatwechselprozedur** an der Maschine (siehe Abschnitt **6.1.5**). Produkt-/Rezeptparameter werden vom Anwender über HMI eingestellt.

---

## 8.2.1. Rezept / Programmparameter

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Rezeptspeichergrenze | Keine Rezeptbegrenzung |
| Temperatureinstellung | HMI-Einstellseite (Wasch-/Spültanktemperaturen) |
| Prozessfunktionsauswahl | HMI-Betriebsbildschirm — Waschen, Spülen, Trocknung 1, Trocknung 2, Abluft Ein/Aus |

Rezeptparameter (Temperatur, Prozesszeiten usw.) müssen vom Anwender am HMI nach Teiltyp und Reinigungsziel definiert werden.

<!-- FOTO: HMI Rezept / Einstellseite -->
![HMI Rezept-Einstellseite](../../assets/FOTO-8-2-0-recete.png)

---

## 8.2.2. Produktbezogene Parameter

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Produkt A Parameter | **Vom Anwender eingestellt** |
| Produkt B Parameter | **Vom Anwender eingestellt** |
| Produkt C Parameter | **Vom Anwender eingestellt** |

Für jeden Produkttyp kann ein separates Rezept erstellt werden. Parameter (Temperatur, aktive Prozessschritte, Zykluszeit) müssen vom Anwender an Roboterlinien-Zyklus angepasst werden.

---

## 8.2.3. Rezeptnummernliste

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Rezeptnummernliste | **Vom Anwender eingestellt** |

Rezeptnummerierung und Produktzuordnung müssen vom Anwender definiert werden. Bei Roboter-PLC-/Leitsystem-Integration erfolgt Rezeptauswahl nach Kundenautomatisierungsstruktur.

---

## 8.2.4. Checkliste spezifische Einrichtung

| # | Prüfung | Status |
|---|---------|--------|
| 1 | Rezept für Produkttyp ausgewählt / erstellt | ☐ OK / ☐ NOK |
| 2 | Tanktemperaturen auf Sollwerte eingestellt | ☐ OK / ☐ NOK |
| 3 | Prozessfunktionen (Waschen/Spülen/Trocknen) korrekt Ein/Aus | ☐ OK / ☐ NOK |
| 4 | Übereinstimmung mit Roboterlinien-Zyklus geprüft | ☐ OK / ☐ NOK |
| 5 | Testwäsche mit Musterstück durchgeführt | ☐ OK / ☐ NOK |

**Datum:** _______________ **Geprüft von:** _______________

> **Hinweis:** Ersteinrichtung und Inbetriebnahme neuer Produkte müssen vom Anwender vor Ort mit echten Teilen getestet werden.
"""


if __name__ == "__main__":
    w("01-product-capacity", "product-capacity", PROD_TR, PROD_EN, PROD_DE)
    w("02-specific-setup", "specific-setup", SETUP_TR, SETUP_EN, SETUP_DE)
    for lang, text in [("tr", CAP_TR), ("en", CAP_EN), ("de", CAP_DE)]:
        (ROOT / f"capacity.{lang}.md").write_text(text, encoding="utf-8")
    print("OK capacity main")
