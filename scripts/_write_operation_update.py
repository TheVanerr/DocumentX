# -*- coding: utf-8 -*-
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "projects" / "1726050-ALPER-KNV-30" / "07-operation"


def w(folder, stem, tr, en, de):
    d = ROOT / folder
    d.mkdir(parents=True, exist_ok=True)
    for lang, text in [("tr", tr), ("en", en), ("de", de)]:
        (d / f"{stem}.{lang}.md").write_text(text, encoding="utf-8")
    print("OK", folder)


START_TR = r"""# 7.2. Makine Başlatma


Makinede HMI ekranında **1 adet hazırlık butonu** bulunur. Start verilmeden önce hazırlık tamamlanmalıdır.

---

## 7.2.1. Devreye Alma Ön Koşulları

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Devreye alma ön koşulları (checklist) | HMI **hazırlık** butonu ile tank dolumu ve ısıtma yapılır. Tankta su yoksa üst seviyeye kadar dolar, ardından reçetede ayarlanan sıcaklığa ısınır. Tankta su varsa doğrudan ısınır. Başka hazırlık gerekmez |

**Dolum sorunu:** Tankta su yoksa ve hazırlığa basıldığında dolum olmuyorsa, **otomatik dolum su giriş vanası kapalıdır** — vanayı açın. Makineye **6 bar** basınçlı hava bağlı olmalıdır.

<!-- FOTO: HMI hazırlık butonu -->
![HMI hazırlık butonu](../../assets/FOTO-7-2-1-hazirlik.png)

---

## 7.2.2. Güç Açma Sırası

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Güç açma sırası | **1.** Ana şalter açık → **2.** HMI hazırlık butonuna bas → **3.** Hazırlık tamamlandıktan sonra start ver |

---

## 7.2.3. Hava / Su / Vakum Açma

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Hava / su / vakum açma | **6 bar** basınçlı hava bağlantısı hazırlık/dolum için gereklidir. Su, otomatik dolum vanası üzerinden tanklara dolar. **Vakum yoktur** |

---

## 7.2.4. Isıtma Ön Isınma

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Isıtma ön ısınma süresi (dk) | **Değişken** — tanktaki mevcut su miktarı ve sıcaklığına bağlıdır (ör. önceki vardiyadan kalan su). Reçetede ayarlanan sıcaklığa ulaşılana kadar ısınır; sabit süre verilemez |

---

## 7.2.5. Start Öncesi Kontrol Listesi

| # | Kontrol | Durum |
|---|---------|-------|
| 1 | Konveyör hattında sıkıştıracak parça/cisim yok | ☐ OK / ☐ NOK |
| 2 | Pompa önündeki vanalar açık (kapalıysa mutlaka aç) | ☐ OK / ☐ NOK |
| 3 | Hazırlık tamamlandı (tank dolumu + ısıtma) | ☐ OK / ☐ NOK |
| 4 | Acil stop resetli, makine kullanıma hazır (sarı lamba) | ☐ OK / ☐ NOK |

**Tarih:** _______________ **Kontrol eden:** _______________

<!-- FOTO: HMI start butonu -->
![HMI start butonu](../../assets/FOTO-7-2-0-start.png)

---

## 7.2.6. İlk Ürün / Kurşun Atma

| Parametre | Değer / Açıklama |
|-----------|------------------|
| İlk ürün / kurşun atma prosedürü | **Yoktur** |
"""

START_EN = r"""# 7.2. Machine Start


The HMI screen has **one preparation button**. Preparation must be completed before start.

---

## 7.2.1. Commissioning Prerequisites

| Parameter | Value / Description |
|-----------|---------------------|
| Commissioning prerequisites (checklist) | Use the HMI **preparation** button for tank filling and heating. If tanks are empty, they fill to upper level, then heat to the recipe setpoint. If water is present, heating starts directly. No other preparation is required |

**Fill issue:** If tanks are empty and no filling occurs after pressing preparation, the **automatic fill water inlet valve is closed** — open the valve. **6 bar** compressed air must be connected.

<!-- FOTO: HMI preparation button -->
![HMI preparation button](../../assets/FOTO-7-2-1-hazirlik.png)

---

## 7.2.2. Power-Up Sequence

| Parameter | Value / Description |
|-----------|---------------------|
| Power-up sequence | **1.** Main switch ON → **2.** Press HMI preparation button → **3.** After preparation complete, press start |

---

## 7.2.3. Air / Water / Vacuum Start-Up

| Parameter | Value / Description |
|-----------|---------------------|
| Air / water / vacuum start-up | **6 bar** compressed air is required for preparation/filling. Water fills tanks via the automatic fill valve. **No vacuum** |

---

## 7.2.4. Heating Pre-Warm

| Parameter | Value / Description |
|-----------|---------------------|
| Heating pre-warm time (min) | **Variable** — depends on existing water volume and temperature in tanks (e.g. water left from previous shift). Heats until recipe setpoint is reached; no fixed duration |

---

## 7.2.5. Pre-Start Checklist

| # | Check | Status |
|---|-------|--------|
| 1 | No parts/objects blocking the conveyor line | ☐ OK / ☐ NOK |
| 2 | Valves in front of pumps are open (must open if closed) | ☐ OK / ☐ NOK |
| 3 | Preparation complete (tank fill + heating) | ☐ OK / ☐ NOK |
| 4 | Emergency stop reset, machine ready (yellow lamp) | ☐ OK / ☐ NOK |

**Date:** _______________ **Checked by:** _______________

<!-- FOTO: HMI start button -->
![HMI start button](../../assets/FOTO-7-2-0-start.png)

---

## 7.2.6. First Product / Run-In

| Parameter | Value / Description |
|-----------|---------------------|
| First product / run-in procedure | **None** |
"""

START_DE = r"""# 7.2. Maschinenstart


Am HMI-Bildschirm gibt es **eine Vorbereitungstaste**. Die Vorbereitung muss vor dem Start abgeschlossen sein.

---

## 7.2.1. Inbetriebnahme-Voraussetzungen

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Inbetriebnahme-Voraussetzungen (Checkliste) | Über die HMI-**Vorbereitungstaste** erfolgen Tankfüllung und Erwärmung. Sind die Tanks leer, füllen sie bis Oberstand, danach Erwärmung auf Rezept-Sollwert. Ist Wasser vorhanden, erfolgt direkte Erwärmung. Keine weitere Vorbereitung erforderlich |

**Füllproblem:** Ist kein Wasser im Tank und erfolgt nach Vorbereitung keine Füllung, ist das **automatische Füllwasser-Einlassventil geschlossen** — Ventil öffnen. **6 bar** Druckluft muss angeschlossen sein.

<!-- FOTO: HMI Vorbereitungstaste -->
![HMI Vorbereitungstaste](../../assets/FOTO-7-2-1-hazirlik.png)

---

## 7.2.2. Einschaltreihenfolge

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Einschaltreihenfolge | **1.** Hauptschalter EIN → **2.** HMI-Vorbereitungstaste drücken → **3.** Nach abgeschlossener Vorbereitung Start drücken |

---

## 7.2.3. Luft / Wasser / Vakuum

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Luft / Wasser / Vakuum | **6 bar** Druckluft für Vorbereitung/Füllung erforderlich. Wasser füllt Tanks über automatisches Füllventil. **Kein Vakuum** |

---

## 7.2.4. Vorwärmen

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Vorwärmzeit Erwärmung (min) | **Variabel** — abhängig von vorhandener Wassermenge und -temperatur (z. B. Restwasser aus vorheriger Schicht). Erwärmung bis Rezept-Sollwert; keine feste Dauer |

---

## 7.2.5. Checkliste vor Start

| # | Prüfung | Status |
|---|---------|--------|
| 1 | Keine Teile/Objekte blockieren das Förderband | ☐ OK / ☐ NOK |
| 2 | Ventile vor Pumpen offen (bei geschlossen unbedingt öffnen) | ☐ OK / ☐ NOK |
| 3 | Vorbereitung abgeschlossen (Tankfüllung + Erwärmung) | ☐ OK / ☐ NOK |
| 4 | Not-Aus zurückgesetzt, Maschine bereit (gelbe Lampe) | ☐ OK / ☐ NOK |

**Datum:** _______________ **Geprüft von:** _______________

<!-- FOTO: HMI Starttaste -->
![HMI Starttaste](../../assets/FOTO-7-2-0-start.png)

---

## 7.2.6. Erstes Produkt / Einlauf

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Erstes Produkt / Einlaufprozedur | **Keine** |
"""

SHUT_TR = r"""# 7.3. Makine Durdurma


Stop düğmesi **HMI arayüzünde dijital buton** olarak bulunur.

---

## 7.3.1. Normal Stop Prosedürü

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Normal stop prosedürü | HMI **stop** butonuna basıldığında konveyör, pompalar, fanlar ve tüm fonksiyonlar durur |

---

## 7.3.2. Acil Stop Sonrası Yeniden Başlatma

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Acil stop sonrası yeniden başlatma | Fiziksel tehdit giderildikten sonra acil stop butonu kaldırılır; pano etiketi üzerindeki reset butonuna lambası yanana kadar basılır |

Acil stop'a basıldığında makinedeki **her fonksiyon durur**. Tepe lambası **kırmızı** yanar.

Detaylı acil stop test prosedürü için bkz. Bölüm **5.4.1**.

<!-- FOTO: Pano reset butonu — acil stop sonrası -->
![Reset butonu — acil stop sonrası](../../assets/FOTO-7-3-0-reset.png)

---

## 7.3.3. Güç Kapatma Sırası

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Güç kapatma sırası | **1.** HMI stop ile makineyi durdur → **2.** Ana şalteri kapat |

---

## 7.3.4. Uzun Süreli Durdurma

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Uzun süreli durdurma (hafta sonu) prosedürü | Tanklar **mutlaka boşaltılıp temizlenmelidir** (bkz. Bölüm **10**) |
"""

SHUT_EN = r"""# 7.3. Machine Shutdown


The stop button is a **digital button on the HMI interface**.

---

## 7.3.1. Normal Stop Procedure

| Parameter | Value / Description |
|-----------|---------------------|
| Normal stop procedure | When the HMI **stop** button is pressed, conveyor, pumps, fans and all functions stop |

---

## 7.3.2. Restart After Emergency Stop

| Parameter | Value / Description |
|-----------|---------------------|
| Restart after emergency stop | After the physical hazard is cleared, release the emergency stop button; press the panel reset button until its lamp lights |

When emergency stop is pressed, **all machine functions stop**. Stack light turns **red**.

For detailed emergency stop test procedure, see Section **5.4.1**.

<!-- FOTO: Panel reset button after emergency stop -->
![Reset button after emergency stop](../../assets/FOTO-7-3-0-reset.png)

---

## 7.3.3. Power-Off Sequence

| Parameter | Value / Description |
|-----------|---------------------|
| Power-off sequence | **1.** Stop machine via HMI stop → **2.** Turn off main switch |

---

## 7.3.4. Long-Term Shutdown

| Parameter | Value / Description |
|-----------|---------------------|
| Long-term shutdown (weekend) procedure | Tanks **must be drained and cleaned** (see Section **10**) |
"""

SHUT_DE = r"""# 7.3. Maschinenstillstand


Die Stopptaste ist eine **digitale Taste am HMI**.

---

## 7.3.1. Normales Stoppen

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Normales Stoppen | Bei Betätigung der HMI-**Stopptaste** stoppen Förderer, Pumpen, Ventilatoren und alle Funktionen |

---

## 7.3.2. Neustart nach Not-Aus

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Neustart nach Not-Aus | Nach Beseitigung der Gefahr Not-Aus-Taste lösen; Reset-Taste am Schaltschrank bis Lampe leuchtet drücken |

Bei Not-Aus stoppen **alle Funktionen**. Signalleuchte **rot**.

Detaillierte Not-Aus-Testprozedur siehe Abschnitt **5.4.1**.

<!-- FOTO: Reset-Taste nach Not-Aus -->
![Reset-Taste nach Not-Aus](../../assets/FOTO-7-3-0-reset.png)

---

## 7.3.3. Abschaltreihenfolge

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Abschaltreihenfolge | **1.** Maschine über HMI-Stop anhalten → **2.** Hauptschalter ausschalten |

---

## 7.3.4. Langzeitstillstand

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Langzeitstillstand (Wochenende) | Tanks **müssen entleert und gereinigt werden** (siehe Abschnitt **10**) |
"""

SEQ_TR = r"""# 7.4. Operasyon Sekansı


Makine **tam otomatik** çalışır. HMI çalışma sayfasında yıkama, durulama, kurutma 1, kurutma 2 ve egzos için **açma/kapama (on/off) butonları** bulunur.

Proses akışı özeti: **Yıkama → Durulama → Kurutma**

| Proses | Ad |
|--------|-----|
| 1 | Yıkama |
| 2 | Durulama |
| 3 | Kurutma |

---

## 7.4.1. Otomatik Cycle Adımları

| Adım | Açıklama |
|------|----------|
| 1 | HMI çalışma sayfasında yıkama, durulama, kurutma 1, kurutma 2 seçenekleri istenen şekilde **on/off** ayarlanır |
| 2 | Hazırlık tamamlandıktan sonra **start** verilir; konveyör ve seçili proses fonksiyonları otomatik çalışır |
| 3 | Parça konveyör üzerinde **yıkama** banyosundan geçer (yıkama aktifse) |
| 4 | Parça **durulama** banyosundan geçer (durulama aktifse) |
| 5 | Parça **kurutma** bölgesinden geçer (kurutma 1/2 aktifse); çıkışa ulaşır |

---

## 7.4.2. Cycle Süresi

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Cycle süresi nominal (sn) | **900** |

---

## 7.4.3. Ürün Giriş / Çıkış

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Ürün giriş senaryosu | Girişte **operatör çalışmaz**; parça **robot** tarafından konveyöre yerleştirilir. Giriş prosedürü **müşteriye aittir** |
| Ürün çıkış senaryosu | Çıkışta **operatör çalışmaz**; parça **robot** tarafından alınır. Çıkış prosedürü **müşteriye aittir** |

Parçalar konveyör üzerinde ilerleyerek prosesleri tamamlar (girişten yüklemeli).

<!-- FOTO: Konveyör — parça giriş/çıkış -->
![Konveyör parça akışı](../../assets/FOTO-7-4-0-konveyor.png)

---

## 7.4.4. Hata Durumunda Makine Davranışı

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Hata durumunda makine davranışı | **Çalışmayı etkileyen** hatalarda makine durur (ör. bakım kapağı açıldı, RFID switch görmedi). **Anlık hava ihtiyacı olmayan** durumlarda (ör. çalışırken hava sökülmesi) makine çalışmaya devam edebilir |

Alarm durumunda HMI arayüzünde alarm ekranı görüntülenir; tepe lambası **kırmızı** yanar.
"""

SEQ_EN = r"""# 7.4. Operating Sequence


The machine runs **fully automatic**. The HMI operating page has **on/off buttons** for wash, rinse, drying 1, drying 2 and exhaust.

Process flow summary: **Wash → Rinse → Dry**

| Process | Name |
|---------|------|
| 1 | Wash |
| 2 | Rinse |
| 3 | Dry |

---

## 7.4.1. Automatic Cycle Steps

| Step | Description |
|------|-------------|
| 1 | On HMI operating page, set wash, rinse, drying 1, drying 2 options **on/off** as required |
| 2 | After preparation complete, press **start**; conveyor and selected process functions run automatically |
| 3 | Part passes through **wash** bath on conveyor (if wash active) |
| 4 | Part passes through **rinse** bath (if rinse active) |
| 5 | Part passes through **drying** zone (if drying 1/2 active); reaches exit |

---

## 7.4.2. Cycle Time

| Parameter | Value / Description |
|-----------|---------------------|
| Nominal cycle time (s) | **900** |

---

## 7.4.3. Product Infeed / Outfeed

| Parameter | Value / Description |
|-----------|---------------------|
| Product infeed scenario | At infeed **no operator**; part is placed on conveyor by **robot**. Infeed procedure is **customer responsibility** |
| Product outfeed scenario | At outfeed **no operator**; part is removed by **robot**. Outfeed procedure is **customer responsibility** |

Parts complete processes while advancing on the conveyor (infeed loading).

<!-- FOTO: Conveyor product flow -->
![Conveyor product flow](../../assets/FOTO-7-4-0-konveyor.png)

---

## 7.4.4. Machine Behaviour on Fault

| Parameter | Value / Description |
|-----------|---------------------|
| Machine behaviour on fault | Machine stops on faults that **affect operation** (e.g. maintenance cover opened, RFID switch not detected). In situations with **no immediate air requirement** (e.g. air disconnected while running), machine may continue |

On alarm, alarm screen is shown on HMI; stack light turns **red**.
"""

SEQ_DE = r"""# 7.4. Betriebsablauf


Die Maschine arbeitet **vollautomatisch**. Am HMI-Betriebsbildschirm gibt es **Ein/Aus-Tasten** für Waschen, Spülen, Trocknung 1, Trocknung 2 und Abluft.

Prozessablauf: **Waschen → Spülen → Trocknen**

| Prozess | Bezeichnung |
|---------|-------------|
| 1 | Waschen |
| 2 | Spülen |
| 3 | Trocknen |

---

## 7.4.1. Automatische Zyklusschritte

| Schritt | Beschreibung |
|---------|--------------|
| 1 | Am HMI-Betriebsbildschirm Waschen, Spülen, Trocknung 1, Trocknung 2 nach Bedarf **Ein/Aus** einstellen |
| 2 | Nach abgeschlossener Vorbereitung **Start** drücken; Förderer und gewählte Prozessfunktionen laufen automatisch |
| 3 | Teil passiert **Wasch**bad auf Förderer (wenn Waschen aktiv) |
| 4 | Teil passiert **Spül**bad (wenn Spülen aktiv) |
| 5 | Teil passiert **Trocknungs**zone (wenn Trocknung 1/2 aktiv); erreicht Ausgang |

---

## 7.4.2. Zykluszeit

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Nominale Zykluszeit (s) | **900** |

---

## 7.4.3. Produktzufuhr / -abfuhr

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Zufuhrszenario | An der Zufuhr **kein Bediener**; Teil wird vom **Roboter** auf Förderer gelegt. Zufuhrprozedur liegt beim **Kunden** |
| Abfuhr-Szenario | An der Abfuhr **kein Bediener**; Teil wird vom **Roboter** entnommen. Abfuhrprozedur liegt beim **Kunden** |

Teile durchlaufen Prozesse auf dem Förderer (Zufuhrbeladung).

<!-- FOTO: Förderer Produktfluss -->
![Förderer Produktfluss](../../assets/FOTO-7-4-0-konveyor.png)

---

## 7.4.4. Verhalten bei Störung

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Verhalten bei Störung | Maschine stoppt bei **betriebsrelevanten** Störungen (z. B. Wartungsklappe offen, RFID-Schalter nicht erkannt). Bei **keinem unmittelbaren Luftbedarf** (z. B. Luft abgekoppelt während Betrieb) kann Maschine weiterlaufen |

Bei Alarm erscheint Alarmbildschirm am HMI; Signalleuchte **rot**.
"""

MODES_TR = r"""# 7.1. Çalışma Modları


Makine **tam otomatik** çalışır. Start / Stop düğmeleri **HMI arayüzünde dijital buton** olarak bulunur.

---

## 7.1.1. Manuel Mod

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Manuel mod | Manuel mod yoktur |

HMI arayüzündeki **çalışma sayfasında** yıkama, durulama, kurutma 1, kurutma 2, egzos seçenekleri vardır. Bunları müşteri istediği gibi on/off ayarlayıp makineyi çalıştırabilir.

<!-- FOTO: HMI çalışma sayfası — proses seçenekleri -->
![HMI proses seçenekleri](../../assets/FOTO-7-1-0-calisma-sayfasi.png)

---

## 7.1.2. Otomatik Mod

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Otomatik mod | Makine tam otomatiktir. HMI çalışma sayfasında yıkama, durulama, kurutma 1, kurutma 2, egzos için açma/kapama butonları vardır. İstenen fonksiyonlar aktif edilip start verildiğinde makine kendiliğinden çalışır |

---

## 7.1.3. Bakım / Setup Modu

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Bakım / setup modu | Bakım için özel bir mod yoktur. Bakım için makine elektriği kesildikten sonra kapakları açılmalıdır. Elektrik kesildiğinde mutlaka LOTO prosedürü uygulanmalıdır |

---

## 7.1.4. Step / Tek Adım Modu

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Step / tek adım modu | Step / tek adım modu yoktur |

---

## 7.1.5. Mod Geçiş Koşulları

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Mod geçiş koşulları | Mod geçiş koşulları yoktur |

---

## 7.1.6. HMI Proses Seçenekleri Özeti

| Seçenek | Açıklama |
|---------|----------|
| Yıkama | On / Off |
| Durulama | On / Off |
| Kurutma 1 | On / Off |
| Kurutma 2 | On / Off |
| Egzos | On / Off |
"""

MODES_EN = r"""# 7.1. Operating Modes


The machine runs **fully automatic**. Start / Stop buttons are **digital buttons on the HMI interface**.

---

## 7.1.1. Manual Mode

| Parameter | Value / Description |
|-----------|---------------------|
| Manual mode | No manual mode |

The HMI **operating page** has wash, rinse, drying 1, drying 2 and exhaust options. The customer can set them on/off as required and run the machine.

<!-- FOTO: HMI operating page process options -->
![HMI process options](../../assets/FOTO-7-1-0-calisma-sayfasi.png)

---

## 7.1.2. Automatic Mode

| Parameter | Value / Description |
|-----------|---------------------|
| Automatic mode | Machine is fully automatic. HMI operating page has on/off buttons for wash, rinse, drying 1, drying 2 and exhaust. After activating desired functions and pressing start, the machine runs automatically |

---

## 7.1.3. Maintenance / Setup Mode

| Parameter | Value / Description |
|-----------|---------------------|
| Maintenance / setup mode | No dedicated maintenance mode. For maintenance, open covers after power is off. LOTO procedure must be applied when power is off |

---

## 7.1.4. Step / Single-Step Mode

| Parameter | Value / Description |
|-----------|---------------------|
| Step / single-step mode | No step / single-step mode |

---

## 7.1.5. Mode Change Conditions

| Parameter | Value / Description |
|-----------|---------------------|
| Mode change conditions | No mode change conditions |

---

## 7.1.6. HMI Process Options Summary

| Option | Description |
|--------|-------------|
| Wash | On / Off |
| Rinse | On / Off |
| Drying 1 | On / Off |
| Drying 2 | On / Off |
| Exhaust | On / Off |
"""

MODES_DE = r"""# 7.1. Betriebsarten


Die Maschine arbeitet **vollautomatisch**. Start-/Stopptasten sind **digitale Tasten am HMI**.

---

## 7.1.1. Handbetrieb

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Handbetrieb | Kein Handbetrieb |

Am HMI-**Betriebsbildschirm** gibt es Optionen Waschen, Spülen, Trocknung 1, Trocknung 2, Abluft. Der Kunde kann sie nach Bedarf Ein/Aus stellen und die Maschine betreiben.

<!-- FOTO: HMI Betriebsbildschirm Prozessoptionen -->
![HMI Prozessoptionen](../../assets/FOTO-7-1-0-calisma-sayfasi.png)

---

## 7.1.2. Automatikbetrieb

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Automatikbetrieb | Maschine ist vollautomatisch. Am HMI-Betriebsbildschirm Ein/Aus-Tasten für Waschen, Spülen, Trocknung 1, Trocknung 2, Abluft. Nach Aktivierung gewünschter Funktionen und Start läuft die Maschine selbstständig |

---

## 7.1.3. Wartung / Setup

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Wartung / Setup | Kein spezieller Wartungsmodus. Für Wartung Klappen nach Stromabschaltung öffnen. Bei Stromabschaltung LOTO-Prozedur anwenden |

---

## 7.1.4. Schritt / Einzelschritt

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Schritt / Einzelschritt | Kein Schritt-/Einzelschrittmodus |

---

## 7.1.5. Moduswechsel-Bedingungen

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Moduswechsel-Bedingungen | Keine Moduswechsel-Bedingungen |

---

## 7.1.6. HMI-Prozessoptionen Übersicht

| Option | Beschreibung |
|--------|--------------|
| Waschen | Ein / Aus |
| Spülen | Ein / Aus |
| Trocknung 1 | Ein / Aus |
| Trocknung 2 | Ein / Aus |
| Abluft | Ein / Aus |
"""

OP_TR = r"""# 7. OPERASYON


Makine; girişten yüklemeli konveyörlü iki banyolu (yıkama + durulama) endüstriyel parça yıkama makinesidir. Proses akışı: **Yıkama → Durulama → Kurutma**. Makine **tam otomatik** çalışır ve **7/24 robot** ile beslenir; operatör/vardiya teslimi bulunmaz.

| Parametre | Değer |
|-----------|-------|
| Operasyon modu | 7/24 otomatik — robot giriş/çıkış |
| Operatör | Bulunmaz (hata durumunda bakım personeli müdahale eder) |
| Hazırlık | HMI hazırlık butonu (tank dolumu + ısıtma) |
| Start / Stop | HMI arayüzünde dijital buton |
| Operatör paneli dilleri | Türkçe, İngilizce, Almanca |

---

## Bölüm İçeriği

| Bölüm | Başlık | Konu |
|-------|--------|------|
| **7.1** | Çalışma Modları | HMI çalışma sayfası, proses seçenekleri, bakım erişimi |
| **7.2** | Makine Başlatma | Hazırlık butonu, tank dolumu/ısıtma, start öncesi kontrol |
| **7.3** | Makine Durdurma | Normal stop, acil stop sonrası yeniden başlatma, güç kapatma |
| **7.4** | Operasyon Sekansı | Otomatik cycle adımları, robot giriş/çıkış, hata davranışı |
| **7.5** | Operasyon Kronolojisi | 7/24 robot çalışması — vardiya teslimi yok |
| **7.6** | Diğer Operasyon Konuları | Format değişimi yok; operatör yok — hata durumunda bakım müdahalesi |

---

## Tepe Lambası Durumları

| Lamba | Anlam |
|-------|-------|
| Sarı | Makine kullanıma hazır |
| Yeşil | Makine çalışıyor |
| Kırmızı | Alarm |

Detaylı prosedürler ilgili alt bölümlerde açıklanmıştır.

<!-- FOTO: HMI çalışma sayfası genel görünüm -->
![HMI çalışma sayfası](../assets/FOTO-7-0-operation-genel.png)
"""

OP_EN = r"""# 7. OPERATION


The machine is an infeed-loaded conveyor industrial parts washer with two baths (wash + rinse). Process flow: **Wash → Rinse → Dry**. The machine runs **fully automatic** and operates **24/7 with robot** infeed/outfeed; no operator or shift handover.

| Parameter | Value |
|-----------|-------|
| Operation mode | 24/7 automatic — robot infeed/outfeed |
| Operator | None (maintenance personnel intervene on fault) |
| Preparation | HMI preparation button (tank fill + heating) |
| Start / Stop | Digital buttons on HMI interface |
| Operator panel languages | Turkish, English, German |

---

## Section Contents

| Section | Title | Topic |
|---------|-------|-------|
| **7.1** | Operating Modes | HMI operating page, process options, maintenance access |
| **7.2** | Machine Start | Preparation button, tank fill/heating, pre-start checks |
| **7.3** | Machine Shutdown | Normal stop, restart after emergency stop, power-off |
| **7.4** | Operating Sequence | Automatic cycle steps, robot infeed/outfeed, fault behaviour |
| **7.5** | Operating Chronology | 24/7 robot operation — no shift handover |
| **7.6** | Other Operation Topics | No format change; no operator — maintenance on fault |

---

## Stack Light States

| Lamp | Meaning |
|------|---------|
| Yellow | Machine ready |
| Green | Machine running |
| Red | Alarm |

Detailed procedures are described in the relevant subsections.

<!-- FOTO: HMI operating page overview -->
![HMI operating page](../assets/FOTO-7-0-operation-genel.png)
"""

OP_DE = r"""# 7. BETRIEB


Die Maschine ist eine zufuhrbeladene Förderband-Teilewaschanlage mit zwei Bädern (Waschen + Spülen). Prozessablauf: **Waschen → Spülen → Trocknen**. Die Maschine arbeitet **vollautomatisch** und **24/7 mit Roboter** Zufuhr/Abfuhr; kein Bediener oder Schichtübergabe.

| Parameter | Wert |
|-----------|------|
| Betriebsmodus | 24/7 automatisch — Roboter Zufuhr/Abfuhr |
| Bediener | Keiner (bei Störung greift Wartungspersonal ein) |
| Vorbereitung | HMI-Vorbereitungstaste (Tankfüllung + Erwärmung) |
| Start / Stop | Digitale Tasten am HMI |
| Bedienfeld-Sprachen | Türkisch, Englisch, Deutsch |

---

## Abschnittsinhalt

| Abschnitt | Titel | Thema |
|-----------|-------|-------|
| **7.1** | Betriebsarten | HMI-Betriebsbildschirm, Prozessoptionen, Wartungszugang |
| **7.2** | Maschinenstart | Vorbereitungstaste, Tankfüllung/Erwärmung, Prüfungen vor Start |
| **7.3** | Maschinenstillstand | Normales Stoppen, Neustart nach Not-Aus, Abschalten |
| **7.4** | Betriebsablauf | Automatische Zyklusschritte, Roboter-Zufuhr/Abfuhr, Störverhalten |
| **7.5** | Betriebschronologie | 24/7-Roboterbetrieb — kein Schichtübergabe |
| **7.6** | Sonstige Betriebsthemen | Kein Formatwechsel; kein Bediener — Wartung bei Störung |

---

## Signalleuchten-Zustände

| Lampe | Bedeutung |
|-------|-----------|
| Gelb | Maschine betriebsbereit |
| Grün | Maschine läuft |
| Rot | Alarm |

Detaillierte Prozeduren in den jeweiligen Unterabschnitten.

<!-- FOTO: HMI Betriebsbildschirm Übersicht -->
![HMI Betriebsbildschirm](../assets/FOTO-7-0-operation-genel.png)
"""


CHRON_TR = r"""# 7.5. Operasyon Kronolojisi


Makine **7/24 robot** ile çalışır. Operatör veya vardiya teslimi **bulunmaz**.

---

## 7.5.1. Günlük Operasyon Zaman Çizelgesi

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Günlük operasyon zaman çizelgesi | Makine **7/24** robot ile çalışır; vardiya bazlı günlük operasyon çizelgesi **uygulanmaz** |

---

## 7.5.2. Vardiya Devir Teslim

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Vardiya devir teslim maddeleri | **Yoktur** — operatör/vardiya teslimi bulunmamaktadır |

---

## 7.5.3. Shift Başlangıç Kontrol Listesi

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Shift başlangıç kontrol listesi | **Yoktur** — makine sürekli otomatik çalışır |
"""

CHRON_EN = r"""# 7.5. Operating Chronology


The machine runs **24/7 with robot**. There is **no operator or shift handover**.

---

## 7.5.1. Daily Operating Schedule

| Parameter | Value / Description |
|-----------|---------------------|
| Daily operating schedule | Machine runs **24/7** with robot; shift-based daily schedule **does not apply** |

---

## 7.5.2. Shift Handover

| Parameter | Value / Description |
|-----------|---------------------|
| Shift handover items | **None** — no operator/shift handover |

---

## 7.5.3. Shift Start Checklist

| Parameter | Value / Description |
|-----------|---------------------|
| Shift start checklist | **None** — machine runs continuously automatic |
"""

CHRON_DE = r"""# 7.5. Betriebschronologie


Die Maschine arbeitet **24/7 mit Roboter**. Es gibt **keinen Bediener oder Schichtübergabe**.

---

## 7.5.1. Täglicher Betriebsplan

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Täglicher Betriebsplan | Maschine arbeitet **24/7** mit Roboter; schichtbasierter Tagesplan **entfällt** |

---

## 7.5.2. Schichtübergabe

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Schichtübergabe-Punkte | **Keine** — kein Bediener/Schichtübergabe |

---

## 7.5.3. Schichtstart-Checkliste

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Schichtstart-Checkliste | **Keine** — Maschine läuft durchgehend automatisch |
"""

OTHER_TR = r"""# 7.6. Diğer Operasyon Konuları


Makinede **operatör bulunmaz**. Normal çalışmada insan müdahalesi gerekmez.

---

## 7.6.1. Format / Ürün Değişimi

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Format / ürün değişim süresi (dk) | **Yoktur** |

Format değişim prosedürü yoktur (bkz. Bölüm **6.1.5**).

---

## 7.6.2. Fire / Hurda Yönetimi

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Fire / hurda yönetimi | **Uygulanmaz** — makinede operatör bulunmaz; hurda yönetimi müşteri hattına aittir |

---

## 7.6.3. Müdahale Noktaları

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Operatör müdahale noktaları | **Yoktur** — makinede operatör bulunmaz |

Hata oluştuğunda müdahale **bakım personeli** tarafından yapılır. Arıza giderme prosedürleri için bkz. Bölüm **11**.
"""

OTHER_EN = r"""# 7.6. Other Operation Topics


There is **no operator** on the machine. No human intervention is required during normal operation.

---

## 7.6.1. Format / Product Change

| Parameter | Value / Description |
|-----------|---------------------|
| Format / product change time (min) | **None** |

No format change procedure (see Section **6.1.5**).

---

## 7.6.2. Scrap Management

| Parameter | Value / Description |
|-----------|---------------------|
| Scrap management | **Not applicable** — no operator on machine; scrap management is customer line responsibility |

---

## 7.6.3. Intervention Points

| Parameter | Value / Description |
|-----------|---------------------|
| Operator intervention points | **None** — no operator on machine |

On fault, intervention is performed by **maintenance personnel**. For troubleshooting procedures, see Section **11**.
"""

OTHER_DE = r"""# 7.6. Sonstige Betriebsthemen


An der Maschine gibt es **keinen Bediener**. Im Normalbetrieb ist kein menschlicher Eingriff erforderlich.

---

## 7.6.1. Format / Produktwechsel

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Format / Produktwechselzeit (min) | **Keine** |

Keine Formatwechselprozedur (siehe Abschnitt **6.1.5**).

---

## 7.6.2. Ausschussmanagement

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Ausschussmanagement | **Nicht anwendbar** — kein Bediener an Maschine; Ausschuss liegt in Kundenlinie |

---

## 7.6.3. Eingriffspunkte

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Bediener-Eingriffspunkte | **Keine** — kein Bediener an Maschine |

Bei Störung erfolgt Eingriff durch **Wartungspersonal**. Störungsbehebung siehe Abschnitt **11**.
"""


if __name__ == "__main__":
    w("02-machine-start", "machine-start", START_TR, START_EN, START_DE)
    w("03-shut-down", "shut-down", SHUT_TR, SHUT_EN, SHUT_DE)
    w("04-operating-sequence", "operating-sequence", SEQ_TR, SEQ_EN, SEQ_DE)
    w("01-operating-modes", "operating-modes", MODES_TR, MODES_EN, MODES_DE)
    w("05-operating-chronology", "operating-chronology", CHRON_TR, CHRON_EN, CHRON_DE)
    w("06-operation-other", "operation-other", OTHER_TR, OTHER_EN, OTHER_DE)
    for lang, text in [("tr", OP_TR), ("en", OP_EN), ("de", OP_DE)]:
        (ROOT / f"operation.{lang}.md").write_text(text, encoding="utf-8")
    print("OK operation main")
