# -*- coding: utf-8 -*-
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "projects" / "1726050-ALPER-KNV-30" / "09-maintenance"


def w(folder, stem, tr, en, de):
    d = ROOT / folder
    d.mkdir(parents=True, exist_ok=True)
    for lang, text in [("tr", tr), ("en", en), ("de", de)]:
        (d / f"{stem}.{lang}.md").write_text(text, encoding="utf-8")
    print("OK", folder)


MAIN_TR = r"""# 9. BAKIM


Makine **7/24 robot** hattında çalışır; operatör bulunmaz. Arıza durumunda müdahale **bakım personeli** tarafından yapılır (bkz. Bölüm **11**). Tüm bakım işlemleri makine durdurulduktan sonra, enerji izolasyonu (LOTO) uygulanarak gerçekleştirilmelidir.

| Parametre | Değer |
|-----------|-------|
| Bakım felsefesi | Önleyici bakım |
| Lubrication chart | Yok |
| Yağlama noktası | 4 adet (konveyör giriş 2 + çıkış 2) |
| Bakım modu | Yok — elektrik kesilip LOTO uygulanır |

Temizlik prosedürleri için bkz. Bölüm **10**.

---

## Bölüm İçeriği

| Bölüm | Başlık | Konu |
|-------|--------|------|
| **9.1** | Bakım Talimatları | Periyodik bakım, yağlama, yedek parça, güvenlik |

<!-- FOTO: Bakım erişim bölgeleri genel görünüm -->
![Bakım erişim bölgeleri](../assets/FOTO-9-0-maintenance-genel.png)
"""

MAIN_EN = r"""# 9. MAINTENANCE


The machine runs on a **24/7 robot** line; there is no operator. On fault, **maintenance personnel** intervene (see Section **11**). All maintenance must be performed after machine stop with energy isolation (LOTO).

| Parameter | Value |
|-----------|-------|
| Maintenance philosophy | Preventive maintenance |
| Lubrication chart | None |
| Lubrication points | 4 (conveyor infeed 2 + outfeed 2) |
| Maintenance mode | None — power off and apply LOTO |

For cleaning procedures, see Section **10**.

---

## Section Contents

| Section | Title | Topic |
|---------|-------|-------|
| **9.1** | Maintenance Instructions | Periodic maintenance, lubrication, spare parts, safety |

<!-- FOTO: Maintenance access areas overview -->
![Maintenance access areas](../assets/FOTO-9-0-maintenance-genel.png)
"""

MAIN_DE = r"""# 9. WARTUNG


Die Maschine arbeitet in **24/7-Roboter**-Linie; kein Bediener. Bei Störung greift **Wartungspersonal** ein (siehe Abschnitt **11**). Alle Wartung nach Maschinenstopp mit Energieisolierung (LOTO).

| Parameter | Wert |
|-----------|------|
| Wartungsphilosophie | Vorbeugende Wartung |
| Schmierplan | Keiner |
| Schmierstellen | 4 (Förderer Zufuhr 2 + Abfuhr 2) |
| Wartungsmodus | Keiner — Strom abschalten und LOTO |

Reinigungsprozeduren siehe Abschnitt **10**.

---

## Abschnittsinhalt

| Abschnitt | Titel | Thema |
|-----------|-------|-------|
| **9.1** | Wartungsanweisungen | Periodische Wartung, Schmierung, Ersatzteile, Sicherheit |

<!-- FOTO: Wartungszugang Übersicht -->
![Wartungszugang](../assets/FOTO-9-0-maintenance-genel.png)
"""

INST_TR = r"""# 9.1. Bakım Talimatları


---

## 9.1.1. Bakım Felsefesi ve Personel

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Bakım felsefesi | **Önleyici bakım** felsefesi uygulanır |
| Bakım personeli yeterlilik seviyesi | Makinenin kullanıldığı ülkenin mevcut bakım personeli yeterlilik seviyesi uygulanmalıdır |
| Lubrication chart dosya referansı | **Yoktur** |

Bakım personeli; makine kullanımı ve bakımı ile ilgili eğitim almış olmalıdır (bkz. Bölüm **3.2**).

---

## 9.1.2. Bakım Öncesi Güvenlik

Bakım için **özel bir mod yoktur**. Aşağıdaki kurallara uyulmalıdır:

| # | Kural |
|---|-------|
| 1 | Makine **HMI stop** ile durdurulmalıdır |
| 2 | Ana şalter kapatılmalıdır |
| 3 | **LOTO prosedürü** uygulanmalıdır (bkz. Bölüm **5.4**, **12.1**) |
| 4 | Emniyet kapısı / RFID sensör **bypass edilmemelidir** |
| 5 | Kapaklar yalnızca enerji kesildikten ve LOTO uygulandıktan sonra açılmalıdır |

Makine arkasındaki kapakların tamamı sökülebilir ve bakım erişimi için kullanılabilir (bkz. Bölüm **3.5**).

---

## 9.1.3. Periyodik Bakım

| Periyot | Bakım maddeleri |
|---------|-----------------|
| Günlük | [EKSİK] |
| Haftalık | [EKSİK] |
| Aylık | [EKSİK] |
| 250 saat | [EKSİK] |
| 500 saat | [EKSİK] |
| 1000 saat | [EKSİK] |
| Yıllık | [EKSİK] |

### İlgili periyodik kontroller (diğer bölümlerden)

| Periyot | Kontrol | Referans |
|---------|---------|----------|
| Aylık | Acil stop testi | Bölüm **6.2** — her ay bir kez |
| Günlük | Yıkama tankı ön filtre temizliği | Bölüm **10.1** |
| Haftalık | Tank filtreleri ve pompa çıkışı torba filtre temizliği | Bölüm **10.1** |

> **Not:** Periyodik bakım maddeleri (günlük–yıllık) DATA dosyasında henüz tanımlanmamıştır. Tamamlanınca bu tablo güncellenecektir.

---

## 9.1.4. Yağlama

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Yağlama noktası sayısı | **4 adet** |
| Konum | Konveyör **girişinde 2 adet**, **çıkışında 2 adet** |
| Gres tipi | [EKSİK] |
| Redüktör yağ değişimi | [EKSİK] |
| Periyot | [EKSİK] |

<!-- FOTO: Konveyör giriş yağlama noktaları -->
![Konveyör giriş yağlama noktaları](../../assets/FOTO-9-1-4-yaglama-giris.png)

<!-- FOTO: Konveyör çıkış yağlama noktaları -->
![Konveyör çıkış yağlama noktaları](../../assets/FOTO-9-1-4-yaglama-cikis.png)

---

## 9.1.5. Yedek Parça

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Kritik yedek parça listesi | [EKSİK] |
| Önerilen stok miktarları | [EKSİK] |
| Yedek parça sipariş kodu referansı | [EKSİK] |

Yedek parça listesi ve stok önerileri tanımlandığında bu bölüm güncellenecektir. Parça listesi referansı için bkz. Bölüm **13.3**.

---

## 9.1.6. Bakım Kayıt Formu

| # | İşlem | Periyot | Tarih | Yapan | OK/NOK |
|---|-------|---------|-------|-------|--------|
| 1 | Periyodik bakım (ilgili madde) | | | | |
| 2 | Yağlama (4 nokta) | | | | |
| 3 | Acil stop testi | Aylık | | | |
| 4 | Filtre temizliği | Bkz. Bölüm 10 | | | |

**Onay:** _______________
"""

INST_EN = r"""# 9.1. Maintenance Instructions


---

## 9.1.1. Maintenance Philosophy and Personnel

| Parameter | Value / Description |
|-----------|---------------------|
| Maintenance philosophy | **Preventive maintenance** is applied |
| Maintenance personnel qualification | Qualification level applicable in the country of use must be met |
| Lubrication chart file reference | **None** |

Maintenance personnel must be trained in machine operation and maintenance (see Section **3.2**).

---

## 9.1.2. Safety Before Maintenance

There is **no dedicated maintenance mode**. The following rules apply:

| # | Rule |
|---|------|
| 1 | Machine must be stopped via **HMI stop** |
| 2 | Main switch must be turned off |
| 3 | **LOTO procedure** must be applied (see Sections **5.4**, **12.1**) |
| 4 | Safety door / RFID sensor must **not be bypassed** |
| 5 | Covers may only be opened after power is off and LOTO is applied |

All rear covers are removable for maintenance access (see Section **3.5**).

---

## 9.1.3. Periodic Maintenance

| Period | Maintenance items |
|--------|-------------------|
| Daily | [MISSING] |
| Weekly | [MISSING] |
| Monthly | [MISSING] |
| 250 hours | [MISSING] |
| 500 hours | [MISSING] |
| 1000 hours | [MISSING] |
| Annual | [MISSING] |

### Related periodic checks (from other sections)

| Period | Check | Reference |
|--------|-------|-----------|
| Monthly | Emergency stop test | Section **6.2** — once per month |
| Daily | Wash tank pre-filter cleaning | Section **10.1** |
| Weekly | Tank filters and pump outlet bag filter cleaning | Section **10.1** |

> **Note:** Periodic maintenance items (daily–annual) are not yet defined in the DATA file. This table will be updated when completed.

---

## 9.1.4. Lubrication

| Parameter | Value / Description |
|-----------|---------------------|
| Number of lubrication points | **4** |
| Location | **2 at conveyor infeed**, **2 at conveyor outfeed** |
| Grease type | [MISSING] |
| Reducer oil change | [MISSING] |
| Interval | [MISSING] |

<!-- FOTO: Conveyor infeed lubrication points -->
![Conveyor infeed lubrication points](../../assets/FOTO-9-1-4-yaglama-giris.png)

<!-- FOTO: Conveyor outfeed lubrication points -->
![Conveyor outfeed lubrication points](../../assets/FOTO-9-1-4-yaglama-cikis.png)

---

## 9.1.5. Spare Parts

| Parameter | Value / Description |
|-----------|---------------------|
| Critical spare parts list | [MISSING] |
| Recommended stock quantities | [MISSING] |
| Spare part order code reference | [MISSING] |

This section will be updated when spare parts list and stock recommendations are defined. For parts list reference, see Section **13.3**.

---

## 9.1.6. Maintenance Record Form

| # | Task | Period | Date | Performed by | OK/NOK |
|---|------|--------|------|--------------|--------|
| 1 | Periodic maintenance (relevant item) | | | | |
| 2 | Lubrication (4 points) | | | | |
| 3 | Emergency stop test | Monthly | | | |
| 4 | Filter cleaning | See Section 10 | | | |

**Approved by:** _______________
"""

INST_DE = r"""# 9.1. Wartungsanweisungen


---

## 9.1.1. Wartungsphilosophie und Personal

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Wartungsphilosophie | **Vorbeugende Wartung** wird angewendet |
| Qualifikation Wartungspersonal | Qualifikationsniveau des Einsatzlandes muss erfüllt sein |
| Schmierplan-Dateireferenz | **Keine** |

Wartungspersonal muss in Maschinenbetrieb und -wartung geschult sein (siehe Abschnitt **3.2**).

---

## 9.1.2. Sicherheit vor Wartung

Es gibt **keinen speziellen Wartungsmodus**. Folgende Regeln gelten:

| # | Regel |
|---|-------|
| 1 | Maschine über **HMI-Stop** anhalten |
| 2 | Hauptschalter ausschalten |
| 3 | **LOTO-Prozedur** anwenden (siehe Abschnitte **5.4**, **12.1**) |
| 4 | Sicherheitstür / RFID-Sensor **nicht überbrücken** |
| 5 | Klappen nur nach Stromabschaltung und LOTO öffnen |

Alle Heckklappen sind für Wartungszugang abnehmbar (siehe Abschnitt **3.5**).

---

## 9.1.3. Periodische Wartung

| Periode | Wartungspunkte |
|---------|----------------|
| Täglich | [FEHLEND] |
| Wöchentlich | [FEHLEND] |
| Monatlich | [FEHLEND] |
| 250 Stunden | [FEHLEND] |
| 500 Stunden | [FEHLEND] |
| 1000 Stunden | [FEHLEND] |
| Jährlich | [FEHLEND] |

### Zugehörige periodische Prüfungen (aus anderen Abschnitten)

| Periode | Prüfung | Referenz |
|---------|---------|----------|
| Monatlich | Not-Aus-Test | Abschnitt **6.2** — einmal monatlich |
| Täglich | Vorfilter Waschtank reinigen | Abschnitt **10.1** |
| Wöchentlich | Tankfilter und Beutelfilter Pumpenausgang reinigen | Abschnitt **10.1** |

> **Hinweis:** Periodische Wartungspunkte (täglich–jährlich) sind in der DATA-Datei noch nicht definiert. Tabelle wird bei Vervollständigung aktualisiert.

---

## 9.1.4. Schmierung

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Anzahl Schmierstellen | **4** |
| Lage | **2 an Förderer-Zufuhr**, **2 an Förderer-Abfuhr** |
| Fetttyp | [FEHLEND] |
| Getriebeölwechsel | [FEHLEND] |
| Intervall | [FEHLEND] |

<!-- FOTO: Schmierstellen Förderer Zufuhr -->
![Schmierstellen Förderer Zufuhr](../../assets/FOTO-9-1-4-yaglama-giris.png)

<!-- FOTO: Schmierstellen Förderer Abfuhr -->
![Schmierstellen Förderer Abfuhr](../../assets/FOTO-9-1-4-yaglama-cikis.png)

---

## 9.1.5. Ersatzteile

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Kritische Ersatzteilliste | [FEHLEND] |
| Empfohlene Lagerbestände | [FEHLEND] |
| Ersatzteil-Bestellcode-Referenz | [FEHLEND] |

Dieser Abschnitt wird aktualisiert, sobald Ersatzteilliste und Lagerempfehlungen definiert sind. Teilelistenreferenz siehe Abschnitt **13.3**.

---

## 9.1.6. Wartungsprotokoll

| # | Tätigkeit | Periode | Datum | Ausgeführt von | OK/NOK |
|---|-----------|---------|-------|----------------|--------|
| 1 | Periodische Wartung (zugehöriger Punkt) | | | | |
| 2 | Schmierung (4 Stellen) | | | | |
| 3 | Not-Aus-Test | Monatlich | | | |
| 4 | Filterreinigung | Siehe Abschnitt 10 | | | |

**Freigabe:** _______________
"""


if __name__ == "__main__":
    w("01-main-inst", "main-inst", INST_TR, INST_EN, INST_DE)
    for lang, text in [("tr", MAIN_TR), ("en", MAIN_EN), ("de", MAIN_DE)]:
        (ROOT / f"maintenance.{lang}.md").write_text(text, encoding="utf-8")
    print("OK maintenance main")
