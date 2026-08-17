# -*- coding: utf-8 -*-
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "projects" / "1726050-ALPER-KNV-30" / "10-cleaning"


def w(folder, stem, tr, en, de):
    d = ROOT / folder
    d.mkdir(parents=True, exist_ok=True)
    for lang, text in [("tr", tr), ("en", en), ("de", de)]:
        (d / f"{stem}.{lang}.md").write_text(text, encoding="utf-8")
    print("OK", folder)


MAIN_TR = r"""# 10. TEMİZLİK


Makine **kuru/ıslak** temizlik yöntemlerine uygundur. CIP veya COP sistemi **bulunmamaktadır**. Temizlik işlemleri bakım personeli tarafından, makine durdurulduktan ve **LOTO** uygulandıktan sonra yapılmalıdır.

| Parametre | Değer |
|-----------|-------|
| Temizlik tipi | Kuru / ıslak |
| Günlük temizlik | Yıkama tankı ön filtreleri |
| Haftalık temizlik | Tank filtreleri + pompa çıkışı torba filtreler |
| Onaylı temizlik maddeleri | [EKSİK] |

Periyodik bakım referansı için bkz. Bölüm **9.1.3**.

---

## Bölüm İçeriği

| Bölüm | Başlık | Konu |
|-------|--------|------|
| **10.1** | Temizlik ve Dezenfeksiyon | Günlük/haftalık prosedürler, yasak maddeler, bertaraf |

<!-- FOTO: Tank ve filtre temizlik genel görünüm -->
![Tank ve filtre temizlik genel görünüm](../assets/FOTO-10-0-cleaning-genel.png)
"""

MAIN_EN = r"""# 10. CLEANING


The machine supports **dry/wet** cleaning methods. There is **no CIP or COP system**. Cleaning must be performed by maintenance personnel after machine stop and **LOTO** application.

| Parameter | Value |
|-----------|-------|
| Cleaning type | Dry / wet |
| Daily cleaning | Wash tank pre-filters |
| Weekly cleaning | Tank filters + pump outlet bag filters |
| Approved cleaning agents | [MISSING] |

For periodic maintenance reference, see Section **9.1.3**.

---

## Section Contents

| Section | Title | Topic |
|---------|-------|-------|
| **10.1** | Cleaning and Sanitizing | Daily/weekly procedures, prohibited agents, disposal |

<!-- FOTO: Tank and filter cleaning overview -->
![Tank and filter cleaning overview](../assets/FOTO-10-0-cleaning-genel.png)
"""

MAIN_DE = r"""# 10. REINIGUNG


Die Maschine eignet sich für **trockene/feuchte** Reinigung. **Kein CIP- oder COP-System**. Reinigung durch Wartungspersonal nach Maschinenstopp und **LOTO**.

| Parameter | Wert |
|-----------|------|
| Reinigungstyp | Trocken / feucht |
| Tägliche Reinigung | Vorfilter Waschtank |
| Wöchentliche Reinigung | Tankfilter + Beutelfilter Pumpenausgang |
| Zugelassene Reinigungsmittel | [FEHLEND] |

Periodische Wartung siehe Abschnitt **9.1.3**.

---

## Abschnittsinhalt

| Abschnitt | Titel | Thema |
|-----------|-------|-------|
| **10.1** | Reinigung und Desinfektion | Tägliche/wöchentliche Prozeduren, verbotene Mittel, Entsorgung |

<!-- FOTO: Tank- und Filterreinigung Übersicht -->
![Tank- und Filterreinigung](../assets/FOTO-10-0-cleaning-genel.png)
"""

CLEAN_TR = r"""# 10.1. Temizlik ve Dezenfeksiyon


---

## 10.1.1. Temizlik Tipi

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Temizlik tipi | **Kuru / ıslak** |

Makinede otomatik CIP (Cleaning in Place) veya COP (Cleaning out of Place) sistemi **bulunmamaktadır**. Temizlik manuel olarak uygulanır.

---

## 10.1.2. Temizlik Öncesi Güvenlik

| # | Kural |
|---|-------|
| 1 | Makine **HMI stop** ile durdurulmalıdır |
| 2 | Gerekirse ana şalter kapatılmalıdır |
| 3 | Filtre/tank erişimi için **LOTO prosedürü** uygulanmalıdır (bkz. Bölüm **9.1.2**) |
| 4 | Emniyet kapısı bypass **edilmemelidir** |
| 5 | Uzun süreli durdurma/temizlik öncesi tanklar **boşaltılmalıdır** (bkz. Bölüm **7.3.4**) |

---

## 10.1.3. Günlük Temizlik

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Günlük temizlik prosedürü | Yıkama tankı içerisindeki **ön filtreler** sökülüp temizlenmelidir. Bunun dışında günlük herhangi bir temizliğe gerek yoktur |

### Günlük temizlik adımları

| # | Adım |
|---|------|
| 1 | Makineyi durdur, gerekli güvenlik önlemlerini al (LOTO) |
| 2 | Yıkama tankı ön filtrelerini sök |
| 3 | Filtreleri temizle (uygun yöntemle — bkz. 10.1.7) |
| 4 | Filtreleri yerine tak |
| 5 | Makineyi devreye almadan önce filtrelerin doğru oturduğunu kontrol et |

<!-- FOTO: Yıkama tankı ön filtreleri -->
![Yıkama tankı ön filtreleri](../../assets/FOTO-10-1-3-on-filtre.png)

---

## 10.1.4. Haftalık Derin Temizlik

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Haftalık derin temizlik | Tanklarda bulunan **filtreler** çıkartılıp temizlenmelidir. Pompa çıkışındaki hassas filtrelerdeki **torba filtreler** sökülüp temizlenmelidir |

### Haftalık temizlik adımları

| # | Adım |
|---|------|
| 1 | Makineyi durdur, LOTO uygula |
| 2 | Yıkama ve durulama tanklarındaki filtreleri çıkart |
| 3 | Filtreleri temizle |
| 4 | Pompa çıkışı hassas filtrelerdeki torba filtreleri sök |
| 5 | Torba filtreleri temizle veya gerekirse değiştir |
| 6 | Tüm filtreleri yerine tak, contaları kontrol et |
| 7 | Günlük prosedürdeki ön filtre temizliğini de uygula |

<!-- FOTO: Tank filtreleri -->
![Tank filtreleri](../../assets/FOTO-10-1-4-tank-filtre.png)

<!-- FOTO: Pompa çıkışı torba filtre -->
![Pompa çıkışı torba filtre](../../assets/FOTO-10-1-4-torba-filtre.png)

---

## 10.1.5. Dezenfeksiyon Prosedürü

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Dezenfeksiyon prosedürü | Makine tanklarındaki su **boşaltılıp** tank içerisi **sabunlu su** ile yıkanmalıdır |

### Dezenfeksiyon adımları

| # | Adım |
|---|------|
| 1 | Makineyi durdur, LOTO uygula |
| 2 | Tanklardaki suyu boşalt |
| 3 | Tank içerisini sabunlu su ile yıka |
| 4 | Sabunlu suyu boşalt |
| 5 | Tank içerisini temiz su ile durula |
| 6 | Bkz. 10.1.6 — dış yüzey kurutma |

> **Not:** Dezenfeksiyon, uzun süreli durdurma veya derin temizlik ihtiyacında uygulanmalıdır.

---

## 10.1.6. Temizlik Sonrası Kurutma

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Temizlik sonrası kurutma | Makine **dışı** kuru bir bez ile silinmelidir |

Tank içi kurutma için tank suyu boşaltıldıktan sonra doğal kurumaya bırakılabilir veya uygun yöntemle kurulanır. HMI ve elektrik panosu **su ile yıkanmamalıdır**.

---

## 10.1.7. Temizlik Maddeleri

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Kullanılan temizlik maddeleri (onaylı liste) | [EKSİK] |
| Yasak temizlik maddeleri | **Asit bazlı** temizlik maddeleri kullanılmamalıdır. **Paslanmaz çeliğe zarar verecek** temizlik maddeleri kullanılmamalıdır |

Dezenfeksiyon için **sabunlu su** kullanılabilir. Onaylı kimyasal listesi tanımlandığında bu bölüm güncellenecektir.

---

## 10.1.8. Atık Su / Kimyasal Bertaraf

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Atık su / kimyasal bertaraf | Makinenin kullanıldığı ülkenin mevcut atık su / kimyasal bertaraf gereksinimleri uygulanmalıdır |

Tank boşaltma suyu ve temizlik atıkları yerel mevzuata uygun şekilde bertaraf edilmelidir.

---

## 10.1.9. Temizlik Kayıt Formu

| # | İşlem | Periyot | Tarih | Yapan | OK/NOK |
|---|-------|---------|-------|-------|--------|
| 1 | Yıkama tankı ön filtre temizliği | Günlük | | | |
| 2 | Tank filtre temizliği | Haftalık | | | |
| 3 | Pompa çıkışı torba filtre temizliği | Haftalık | | | |
| 4 | Dezenfeksiyon (sabunlu su) | Gerektiğinde | | | |
| 5 | Dış yüzey kurutma | Her temizlik sonrası | | | |

**Onay:** _______________
"""

CLEAN_EN = r"""# 10.1. Cleaning and Sanitizing


---

## 10.1.1. Cleaning Type

| Parameter | Value / Description |
|-----------|---------------------|
| Cleaning type | **Dry / wet** |

There is **no automatic CIP (Cleaning in Place) or COP (Cleaning out of Place) system**. Cleaning is applied manually.

---

## 10.1.2. Safety Before Cleaning

| # | Rule |
|---|------|
| 1 | Machine must be stopped via **HMI stop** |
| 2 | Main switch must be turned off if required |
| 3 | **LOTO procedure** must be applied for filter/tank access (see Section **9.1.2**) |
| 4 | Safety door must **not be bypassed** |
| 5 | Tanks must be **drained** before long shutdown/cleaning (see Section **7.3.4**) |

---

## 10.1.3. Daily Cleaning

| Parameter | Value / Description |
|-----------|---------------------|
| Daily cleaning procedure | **Pre-filters** in wash tank must be removed and cleaned. No other daily cleaning is required |

### Daily cleaning steps

| # | Step |
|---|------|
| 1 | Stop machine, apply safety measures (LOTO) |
| 2 | Remove wash tank pre-filters |
| 3 | Clean filters (appropriate method — see 10.1.7) |
| 4 | Reinstall filters |
| 5 | Before restart, verify filters are seated correctly |

<!-- FOTO: Wash tank pre-filters -->
![Wash tank pre-filters](../../assets/FOTO-10-1-3-on-filtre.png)

---

## 10.1.4. Weekly Deep Cleaning

| Parameter | Value / Description |
|-----------|---------------------|
| Weekly deep cleaning | **Filters** in tanks must be removed and cleaned. **Bag filters** in fine filters at pump outlet must be removed and cleaned |

### Weekly cleaning steps

| # | Step |
|---|------|
| 1 | Stop machine, apply LOTO |
| 2 | Remove filters from wash and rinse tanks |
| 3 | Clean filters |
| 4 | Remove bag filters from fine filters at pump outlet |
| 5 | Clean or replace bag filters as needed |
| 6 | Reinstall all filters, check seals |
| 7 | Also perform daily pre-filter cleaning |

<!-- FOTO: Tank filters -->
![Tank filters](../../assets/FOTO-10-1-4-tank-filtre.png)

<!-- FOTO: Pump outlet bag filter -->
![Pump outlet bag filter](../../assets/FOTO-10-1-4-torba-filtre.png)

---

## 10.1.5. Disinfection Procedure

| Parameter | Value / Description |
|-----------|---------------------|
| Disinfection procedure | Tank water must be **drained** and tank interior washed with **soapy water** |

### Disinfection steps

| # | Step |
|---|------|
| 1 | Stop machine, apply LOTO |
| 2 | Drain tank water |
| 3 | Wash tank interior with soapy water |
| 4 | Drain soapy water |
| 5 | Rinse tank interior with clean water |
| 6 | See 10.1.6 — exterior drying |

> **Note:** Disinfection should be applied for long shutdown or deep cleaning needs.

---

## 10.1.6. Drying After Cleaning

| Parameter | Value / Description |
|-----------|---------------------|
| Drying after cleaning | Machine **exterior** must be wiped with a **dry cloth** |

Tank interior may air-dry after draining or be dried by appropriate method. HMI and electrical panel must **not be washed with water**.

---

## 10.1.7. Cleaning Agents

| Parameter | Value / Description |
|-----------|---------------------|
| Approved cleaning agents | [MISSING] |
| Prohibited cleaning agents | **Acid-based** cleaners must not be used. Cleaners that **damage stainless steel** must not be used |

**Soapy water** may be used for disinfection. This section will be updated when approved chemical list is defined.

---

## 10.1.8. Wastewater / Chemical Disposal

| Parameter | Value / Description |
|-----------|---------------------|
| Wastewater / chemical disposal | Applicable wastewater / chemical disposal requirements in country of use must be followed |

Tank drain water and cleaning waste must be disposed of according to local regulations.

---

## 10.1.9. Cleaning Record Form

| # | Task | Period | Date | Performed by | OK/NOK |
|---|------|--------|------|--------------|--------|
| 1 | Wash tank pre-filter cleaning | Daily | | | |
| 2 | Tank filter cleaning | Weekly | | | |
| 3 | Pump outlet bag filter cleaning | Weekly | | | |
| 4 | Disinfection (soapy water) | As required | | | |
| 5 | Exterior drying | After each cleaning | | | |

**Approved by:** _______________
"""

CLEAN_DE = r"""# 10.1. Reinigung und Desinfektion


---

## 10.1.1. Reinigungstyp

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Reinigungstyp | **Trocken / feucht** |

Es gibt **kein automatisches CIP- (Cleaning in Place) oder COP-System (Cleaning out of Place)**. Reinigung erfolgt manuell.

---

## 10.1.2. Sicherheit vor Reinigung

| # | Regel |
|---|-------|
| 1 | Maschine über **HMI-Stop** anhalten |
| 2 | Bei Bedarf Hauptschalter ausschalten |
| 3 | **LOTO-Prozedur** für Filter-/Tankzugang (siehe Abschnitt **9.1.2**) |
| 4 | Sicherheitstür **nicht überbrücken** |
| 5 | Tanks vor Langzeitstillstand/Reinigung **entleeren** (siehe Abschnitt **7.3.4**) |

---

## 10.1.3. Tägliche Reinigung

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Tägliche Reinigung | **Vorfilter** im Waschtank müssen entfernt und gereinigt werden. Keine weitere tägliche Reinigung erforderlich |

### Tägliche Reinigungsschritte

| # | Schritt |
|---|---------|
| 1 | Maschine anhalten, Sicherheitsmaßnahmen (LOTO) |
| 2 | Vorfilter Waschtank entfernen |
| 3 | Filter reinigen (geeignete Methode — siehe 10.1.7) |
| 4 | Filter wieder einbauen |
| 5 | Vor Wiederinbetriebnahme korrekten Sitz prüfen |

<!-- FOTO: Vorfilter Waschtank -->
![Vorfilter Waschtank](../../assets/FOTO-10-1-3-on-filtre.png)

---

## 10.1.4. Wöchentliche Tiefenreinigung

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Wöchentliche Tiefenreinigung | **Filter** in Tanks entfernen und reinigen. **Beutelfilter** in Feinfiltern am Pumpenausgang entfernen und reinigen |

### Wöchentliche Reinigungsschritte

| # | Schritt |
|---|---------|
| 1 | Maschine anhalten, LOTO |
| 2 | Filter aus Wasch- und Spültanks entfernen |
| 3 | Filter reinigen |
| 4 | Beutelfilter aus Feinfiltern am Pumpenausgang entfernen |
| 5 | Beutelfilter reinigen oder bei Bedarf ersetzen |
| 6 | Alle Filter einbauen, Dichtungen prüfen |
| 7 | Tägliche Vorfilterreinigung ebenfalls durchführen |

<!-- FOTO: Tankfilter -->
![Tankfilter](../../assets/FOTO-10-1-4-tank-filtre.png)

<!-- FOTO: Beutelfilter Pumpenausgang -->
![Beutelfilter Pumpenausgang](../../assets/FOTO-10-1-4-torba-filtre.png)

---

## 10.1.5. Desinfektionsprozedur

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Desinfektion | Tankwasser **entleeren**, Tankinnenseite mit **Seifenwasser** waschen |

### Desinfektionsschritte

| # | Schritt |
|---|---------|
| 1 | Maschine anhalten, LOTO |
| 2 | Tankwasser entleeren |
| 3 | Tankinnenseite mit Seifenwasser waschen |
| 4 | Seifenwasser entleeren |
| 5 | Tankinnenseite mit sauberem Wasser spülen |
| 6 | Siehe 10.1.6 — Außenfläche trocknen |

> **Hinweis:** Desinfektion bei Langzeitstillstand oder Tiefenreinigungsbedarf anwenden.

---

## 10.1.6. Trocknung nach Reinigung

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Trocknung nach Reinigung | Maschinen**außenseite** mit **trockenem Tuch** abwischen |

Tankinnenseite kann nach Entleeren an der Luft trocknen. HMI und Schaltschrank **nicht mit Wasser waschen**.

---

## 10.1.7. Reinigungsmittel

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Zugelassene Reinigungsmittel | [FEHLEND] |
| Verbotene Reinigungsmittel | **Säurebasierte** Reiniger nicht verwenden. Reiniger, die **Edelstahl schädigen**, nicht verwenden |

**Seifenwasser** für Desinfektion verwendbar. Abschnitt wird bei definierter Chemikalienliste aktualisiert.

---

## 10.1.8. Abwasser / Chemikalienentsorgung

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Abwasser / Chemikalienentsorgung | Geltende Abwasser-/Chemikalienentsorgungsvorschriften im Einsatzland beachten |

Tankabwasser und Reinigungsabfälle gemäß lokaler Vorschriften entsorgen.

---

## 10.1.9. Reinigungsprotokoll

| # | Tätigkeit | Periode | Datum | Ausgeführt von | OK/NOK |
|---|-----------|---------|-------|----------------|--------|
| 1 | Vorfilter Waschtank reinigen | Täglich | | | |
| 2 | Tankfilter reinigen | Wöchentlich | | | |
| 3 | Beutelfilter Pumpenausgang reinigen | Wöchentlich | | | |
| 4 | Desinfektion (Seifenwasser) | Bei Bedarf | | | |
| 5 | Außenfläche trocknen | Nach jeder Reinigung | | | |

**Freigabe:** _______________
"""


if __name__ == "__main__":
    w("01-clean-sanitize", "clean-sanitize", CLEAN_TR, CLEAN_EN, CLEAN_DE)
    for lang, text in [("tr", MAIN_TR), ("en", MAIN_EN), ("de", MAIN_DE)]:
        (ROOT / f"cleaning.{lang}.md").write_text(text, encoding="utf-8")
    print("OK cleaning main")
