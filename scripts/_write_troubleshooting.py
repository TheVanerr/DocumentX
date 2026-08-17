# -*- coding: utf-8 -*-
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "projects" / "1726050-ALPER-KNV-30" / "11-troubleshooting"

ALARMS = [
    ("Error-229", "Acil Stop Devrede", "Acil stop butonunu kaldır, tehdidi gider, pano reset butonuna bas (bkz. 7.3.2)"),
    ("Error-410", "Faz Sırası Hatalı", "Faz sıra rölesi kontrolü; gerekirse iki faz değiştir (bkz. 5.1 Adım 7)"),
    ("Error-422", "Kapak Kapalı Değil", "Bakım kapağının kapalı ve RFID sensörün gördüğünü kontrol et"),
    ("Error-100", "Yıkama Pompası Motoru Hata", "Motor koruma, pompa önü vana, elektrik bağlantısı kontrol et"),
    ("Error-101", "Durulama Pompası Motoru Hata", "Motor koruma, pompa önü vana, elektrik bağlantısı kontrol et"),
    ("Error-110", "Egzoz Fan Motoru Hata", "Egzoz fan motoru ve koruma devresi kontrol et"),
    ("Error-111", "Kurutma Fan Motoru Hata", "1. kurutma fan motoru ve koruma devresi kontrol et"),
    ("Error-112", "Kurutma Fan Motoru 2 Hata", "2. kurutma fan motoru ve koruma devresi kontrol et"),
    ("Error-113", "Kurutma Fan Motoru 3 Hata", "3. kurutma fan motoru ve koruma devresi kontrol et"),
    ("Error-114", "Kurutma Fan Motoru 4 Hata", "4. kurutma fan motoru ve koruma devresi kontrol et"),
    ("Error-130", "Yağ Sıyırıcı Motor Hata", "Yağ sıyırıcı motor ve koruma devresi kontrol et"),
    ("Error-150", "Yıkama Tank Sıcaklığı Düşük", "Isıtıcı, reçete sıcaklığı, hazırlık tamamlandı mı kontrol et"),
    ("Error-151", "Durulama Tank Sıcaklığı Düşük", "Isıtıcı, reçete sıcaklığı, hazırlık tamamlandı mı kontrol et"),
    ("Error-170", "Isıtıcı Kaçak Akım F2", "Yıkama tankı ısıtıcı kaçak akım koruma F2 kontrol et"),
    ("Error-171", "Isıtıcı Kaçak Akım F3", "Isıtıcı kaçak akım koruma F3 kontrol et"),
    ("Error-172", "Isıtıcı Kaçak Akım F4", "Isıtıcı kaçak akım koruma F4 kontrol et"),
    ("Error-200", "Yıkama Tankı Su Seviyesi Pompa Seviyesinin Altında", "Yıkama tankı su seviyesi, dolum vanası kontrol et"),
    ("Error-201", "Yıkama Tankı Su Seviyesi Yetersiz", "Yıkama tankı dolumu, otomatik dolum su vanası açık mı kontrol et"),
    ("Error-202", "Durulama Tankı Su Seviyesi Pompa Seviyesinin Altında", "Durulama tankı su seviyesi, dolum vanası kontrol et"),
    ("Error-203", "Durulama Tankı Su Seviyesi Yetersiz", "Durulama tankı dolumu, otomatik dolum su vanası kontrol et"),
    ("Error-235", "Giriş Hava Basıncı Düşük", "**6 bar** hava bağlantısı ve regülatör kontrol et (HMI manuel sayfa)"),
    ("Error-236", "Giriş Su Basıncı Düşük", "**1 bar** su bağlantısı kontrol et (HMI manuel sayfa)"),
    ("Error-300", "Yıkama Otomatik Dolum Vanası Açılamadı", "6 bar hava, vana mekanik/elektrik kontrolü"),
    ("Error-301", "Yıkama Otomatik Dolum Vanası Kapanamadı", "Yıkama dolum vanası mekanik/elektrik kontrolü"),
    ("Error-302", "Durulama Otomatik Dolum Vanası Açılamadı", "6 bar hava, vana mekanik/elektrik kontrolü"),
    ("Error-303", "Durulama Otomatik Dolum Vanası Kapanamadı", "Durulama dolum vanası mekanik/elektrik kontrolü"),
    ("Error-304", "Aktarma Vanası Açılamadı", "Aktarma vanası mekanik/elektrik, 6 bar hava kontrol et"),
    ("Error-305", "Aktarma Vanası Kapanamadı", "Aktarma vanası mekanik/elektrik kontrol et"),
    ("Error-452", "Sızıntı Tavasında Su Tesbit Edildi", "Sızıntı tavası, tank/conta kaçağı kontrol et"),
    ("Error-460", "Servo Motor Hata", "Servo motor ve sürücü kontrol et — servis gerekebilir"),
    ("Error-461", "Çıkış Konveyöründe Ürün Algılandı", "HMI'da ürünün alındığını onayla; robot çıkış prosedürünü kontrol et"),
]


def alarm_table(lang):
    if lang == "tr":
        hdr = "| Kod | Alarm metni | Kontrol / çözüm |\n|-----|-------------|-----------------|"
        chk = "Kontrol / çözüm"
    elif lang == "en":
        hdr = "| Code | Alarm text | Check / remedy |\n|------|------------|----------------|"
        chk = "Check / remedy"
    else:
        hdr = "| Code | Alarmtext | Prüfung / Abhilfe |\n|------|-----------|------------------|"
    rows = []
    for code, text, action in ALARMS:
        if lang == "en":
            # keep alarm text as-is (Turkish from PLC); action translated in EN block below
            pass
        rows.append(f"| {code} | {text} | {action} |")
    return hdr + "\n" + "\n".join(rows)


def w(folder, stem, tr, en, de):
    d = ROOT / folder
    d.mkdir(parents=True, exist_ok=True)
    for lang, text in [("tr", tr), ("en", en), ("de", de)]:
        (d / f"{stem}.{lang}.md").write_text(text, encoding="utf-8")
    print("OK", folder)


def build_alarm_table_en():
    en_actions = [
        "Release e-stop, clear hazard, press panel reset (see 7.3.2)",
        "Check phase sequence relay; swap two phases if needed (see 5.1 Step 7)",
        "Verify maintenance cover closed and RFID sensor detects it",
        "Check motor protection, valve in front of pump, electrical connections",
        "Check motor protection, valve in front of pump, electrical connections",
        "Check exhaust fan motor and protection circuit",
        "Check drying fan 1 motor and protection circuit",
        "Check drying fan 2 motor and protection circuit",
        "Check drying fan 3 motor and protection circuit",
        "Check drying fan 4 motor and protection circuit",
        "Check oil skimmer motor and protection circuit",
        "Check heater, recipe temperature, preparation complete",
        "Check heater, recipe temperature, preparation complete",
        "Check wash tank heater earth leakage protection F2",
        "Check heater earth leakage protection F3",
        "Check heater earth leakage protection F4",
        "Check wash tank water level, fill valve",
        "Check wash tank fill, automatic fill water valve open",
        "Check rinse tank water level, fill valve",
        "Check rinse tank fill, automatic fill water valve open",
        "Check **6 bar** air connection and regulator (HMI manual page)",
        "Check **1 bar** water connection (HMI manual page)",
        "Check 6 bar air, valve mechanical/electrical",
        "Check wash fill valve mechanical/electrical",
        "Check 6 bar air, valve mechanical/electrical",
        "Check rinse fill valve mechanical/electrical",
        "Check transfer valve mechanical/electrical, 6 bar air",
        "Check transfer valve mechanical/electrical",
        "Check leak tray, tank/seal leakage",
        "Check servo motor and drive — service may be required",
        "Confirm product removed on HMI; check robot outfeed procedure",
    ]
    hdr = "| Code | Alarm text | Check / remedy |\n|------|------------|----------------|"
    rows = [f"| {c} | {t} | {a} |" for (c, t, _), a in zip(ALARMS, en_actions)]
    return hdr + "\n" + "\n".join(rows)


def build_alarm_table_de():
    de_actions = [
        "Not-Aus lösen, Gefahr beseitigen, Reset-Taste drücken (siehe 7.3.2)",
        "Phasenfolgerelais prüfen; ggf. zwei Phasen tauschen (siehe 5.1 Schritt 7)",
        "Wartungsklappe geschlossen und RFID-Sensor erkennt prüfen",
        "Motorschutz, Ventil vor Pumpe, elektrische Anschlüsse prüfen",
        "Motorschutz, Ventil vor Pumpe, elektrische Anschlüsse prüfen",
        "Abluftventilatormotor und Schutzschaltung prüfen",
        "Trocknungsventilator 1 Motor und Schutzschaltung prüfen",
        "Trocknungsventilator 2 Motor und Schutzschaltung prüfen",
        "Trocknungsventilator 3 Motor und Schutzschaltung prüfen",
        "Trocknungsventilator 4 Motor und Schutzschaltung prüfen",
        "Ölabscheider-Motor und Schutzschaltung prüfen",
        "Heizung, Rezepttemperatur, Vorbereitung abgeschlossen prüfen",
        "Heizung, Rezepttemperatur, Vorbereitung abgeschlossen prüfen",
        "Waschtank-Heizung Fehlerstromschutz F2 prüfen",
        "Heizung Fehlerstromschutz F3 prüfen",
        "Heizung Fehlerstromschutz F4 prüfen",
        "Waschtank Wasserstand, Füllventil prüfen",
        "Waschtankfüllung, automatisches Füllwasser-Ventil offen prüfen",
        "Spültank Wasserstand, Füllventil prüfen",
        "Spültankfüllung, automatisches Füllwasser-Ventil offen prüfen",
        "**6 bar** Luftanschluss und Regler prüfen (HMI Handseite)",
        "**1 bar** Wasseranschluss prüfen (HMI Handseite)",
        "6 bar Luft, Ventil mechanisch/elektrisch prüfen",
        "Waschfüllventil mechanisch/elektrisch prüfen",
        "6 bar Luft, Ventil mechanisch/elektrisch prüfen",
        "Spülfüllventil mechanisch/elektrisch prüfen",
        "Umlaufventil mechanisch/elektrisch, 6 bar Luft prüfen",
        "Umlaufventil mechanisch/elektrisch prüfen",
        "Leckwanne, Tank/Dichtungsleckage prüfen",
        "Servomotor und Antrieb prüfen — Service erforderlich",
        "Produktentnahme am HMI bestätigen; Roboter-Abfuhr prüfen",
    ]
    hdr = "| Code | Alarmtext | Prüfung / Abhilfe |\n|------|-----------|------------------|"
    rows = [f"| {c} | {t} | {a} |" for (c, t, _), a in zip(ALARMS, de_actions)]
    return hdr + "\n" + "\n".join(rows)


MAIN_TR = r"""# 11. ARIZA GİDERME


Makinede **operatör bulunmaz**; arıza müdahalesi **bakım personeli** tarafından yapılır. Müdahale öncesi makine durdurulmalı; elektrik/pano işlemlerinde **LOTO** uygulanmalıdır (bkz. Bölüm **9.1.2**).

| Parametre | Değer |
|-----------|-------|
| Alarm gösterimi | HMI alarm ekranı + tepe lambası kırmızı |
| HMI dilleri | Türkçe, İngilizce, Almanca |
| Uzaktan erişim | Evet — Secomea modül |

---

## Bölüm İçeriği

| Bölüm | Başlık | Konu |
|-------|--------|------|
| **11.1** | Arıza Bulma | Alarm kod listesi, genel teşhis |
| **11.2** | Genel | HMI alarm davranışı, servis kriterleri |
| **11.3** | Elektrik | Faz, motor, ısıtıcı arızaları |
| **11.4** | Hidrolik | Uygulanmaz |
| **11.5** | Pnömatik | Hava basıncı, vana arızaları |
| **11.6** | Vakum | Uygulanmaz |
| **11.7** | Sensörler | RFID, seviye sensörleri |

<!-- FOTO: HMI alarm ekranı -->
![HMI alarm ekranı](../assets/FOTO-11-0-alarm-genel.png)
"""

MAIN_EN = r"""# 11. TROUBLESHOOTING


There is **no operator** on the machine; fault intervention is by **maintenance personnel**. Stop machine before intervention; apply **LOTO** for electrical/panel work (see Section **9.1.2**).

| Parameter | Value |
|-----------|-------|
| Alarm display | HMI alarm screen + stack light red |
| HMI languages | Turkish, English, German |
| Remote access | Yes — Secomea module |

---

## Section Contents

| Section | Title | Topic |
|---------|-------|-------|
| **11.1** | Fault Finding | Alarm code list, general diagnosis |
| **11.2** | General | HMI alarm behaviour, service criteria |
| **11.3** | Electrical | Phase, motor, heater faults |
| **11.4** | Hydraulic | Not applicable |
| **11.5** | Pneumatic | Air pressure, valve faults |
| **11.6** | Vacuum | Not applicable |
| **11.7** | Sensors | RFID, level sensors |

<!-- FOTO: HMI alarm screen -->
![HMI alarm screen](../assets/FOTO-11-0-alarm-genel.png)
"""

MAIN_DE = r"""# 11. STÖRUNGSBEHEBUNG


**Kein Bediener** an der Maschine; Störungseingriff durch **Wartungspersonal**. Maschine vor Eingriff anhalten; **LOTO** bei Elektrik/Schrank (siehe Abschnitt **9.1.2**).

| Parameter | Wert |
|-----------|------|
| Alarmanzeige | HMI-Alarmbildschirm + Signalleuchte rot |
| HMI-Sprachen | Türkisch, Englisch, Deutsch |
| Fernzugriff | Ja — Secomea-Modul |

---

## Abschnittsinhalt

| Abschnitt | Titel | Thema |
|-----------|-------|-------|
| **11.1** | Fehlersuche | Alarmcodeliste, allgemeine Diagnose |
| **11.2** | Allgemein | HMI-Alarmverhalten, Servicekriterien |
| **11.3** | Elektrik | Phase, Motor, Heizung |
| **11.4** | Hydraulik | Nicht anwendbar |
| **11.5** | Pneumatik | Luftdruck, Ventile |
| **11.6** | Vakuum | Nicht anwendbar |
| **11.7** | Sensoren | RFID, Niveausensoren |

<!-- FOTO: HMI Alarmbildschirm -->
![HMI Alarmbildschirm](../assets/FOTO-11-0-alarm-genel.png)
"""

FAULT_TR = f"""# 11.1. Arıza Bulma

Bu bölüm, KNV 30 3000 2B makinesinde arıza teşhisi için sistematik yaklaşım ve **HMI alarm kod listesini** tanımlar.

---

## 11.1.1. Genel Teşhis Adımları

| # | Adım |
|---|------|
| 1 | HMI **alarm ekranını** aç — aktif alarm kodunu ve metnini oku |
| 2 | Tepe lambası **kırmızı** mı kontrol et |
| 3 | Aşağıdaki alarm tablosunda kodu bul |
| 4 | Önerilen kontrol/çözüm adımlarını uygula |
| 5 | Acil stop aktifse önce reset prosedürünü uygula (bkz. **7.3.2**) |
| 6 | Sorun devam ederse LOTO uygulayıp ilgili alt bölüme bak (11.3–11.7) |

**Hata davranışı:** Çalışmayı etkileyen hatalarda makine durur (ör. bakım kapağı açık, RFID görmedi). Anlık hava ihtiyacı olmayan durumlarda (ör. çalışırken hava sökülmesi) makine devam edebilir (bkz. **7.4.4**).

---

## 11.1.2. Alarm Kod Listesi

{alarm_table("tr")}

---

## 11.1.3. Genel Arıza Tablosu

| Belirti | Olası neden | Kontrol | Çözüm |
|---------|-------------|---------|-------|
| Arıza 1 | [EKSİK] | [EKSİK] | [EKSİK] |
| Arıza 2 | [EKSİK] | [EKSİK] | [EKSİK] |
| Arıza 3 | [EKSİK] | [EKSİK] | [EKSİK] |

> **Not:** Genel arıza tablosu DATA dosyasında henüz tanımlanmamıştır.
"""

FAULT_EN = f"""# 11.1. Fault Finding


---

## 11.1.1. General Diagnosis Steps

| # | Step |
|---|------|
| 1 | Open HMI **alarm screen** — read active alarm code and text |
| 2 | Check stack light is **red** |
| 3 | Find code in alarm table below |
| 4 | Apply recommended check/remedy steps |
| 5 | If emergency stop active, apply reset procedure first (see **7.3.2**) |
| 6 | If problem persists, apply LOTO and see relevant subsection (11.3–11.7) |

**Fault behaviour:** Machine stops on operation-affecting faults (e.g. cover open, RFID not detected). May continue if no immediate air need (e.g. air disconnected while running) (see **7.4.4**).

---

## 11.1.2. Alarm Code List

{build_alarm_table_en()}

---

## 11.1.3. General Fault Table

| Symptom | Possible cause | Check | Remedy |
|---------|----------------|-------|--------|
| Fault 1 | [MISSING] | [MISSING] | [MISSING] |
| Fault 2 | [MISSING] | [MISSING] | [MISSING] |
| Fault 3 | [MISSING] | [MISSING] | [MISSING] |

> **Note:** General fault table is not yet defined in DATA file.
"""

FAULT_DE = f"""# 11.1. Fehlersuche


---

## 11.1.1. Allgemeine Diagnoseschritte

| # | Schritt |
|---|---------|
| 1 | HMI-**Alarmbildschirm** öffnen — aktiven Alarmcode und -text lesen |
| 2 | Signalleuchte **rot** prüfen |
| 3 | Code in Alarmtabelle unten finden |
| 4 | Empfohlene Prüf-/Abhilfeschritte anwenden |
| 5 | Bei aktivem Not-Aus zuerst Reset-Prozedur (siehe **7.3.2**) |
| 6 | Bei anhaltender Störung LOTO und Unterabschnitt 11.3–11.7 |

**Störverhalten:** Maschine stoppt bei betriebsrelevanten Störungen (z. B. Klappe offen, RFID nicht erkannt). Kann weiterlaufen ohne unmittelbaren Luftbedarf (siehe **7.4.4**).

---

## 11.1.2. Alarmcodeliste

{build_alarm_table_de()}

---

## 11.1.3. Allgemeine Störungstabelle

| Symptom | Mögliche Ursache | Prüfung | Abhilfe |
|---------|------------------|---------|---------|
| Störung 1 | [FEHLEND] | [FEHLEND] | [FEHLEND] |
| Störung 2 | [FEHLEND] | [FEHLEND] | [FEHLEND] |
| Störung 3 | [FEHLEND] | [FEHLEND] | [FEHLEND] |

> **Hinweis:** Allgemeine Störungstabelle in DATA-Datei noch nicht definiert.
"""

GEN_TR = r"""# 11.2. Genel Arıza Giderme

Bu bölüm, HMI alarm davranışı ve servis çağrısı kriterlerini tanımlar.

---

## 11.2.1. HMI Alarm Davranışı

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Alarm ekranı | HMI arayüzünde alarm ekranı bulunmaktadır |
| Tepe lambası | Alarm durumunda **kırmızı** yanar |
| HMI alarm metinleri dili | Türkçe, İngilizce, Almanca |

Aktif ve geçmiş alarmlar HMI alarm ekranından görüntülenir. Alarm kodları Bölüm **11.1.2** tablosunda listelenmiştir.

---

## 11.2.2. Servis Çağrısı Kriterleri

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Servis çağrısı kriterleri | [EKSİK] |

Aşağıdaki durumlarda yetkili servis desteği önerilir:

- Error-460 Servo Motor Hata
- Isıtıcı kaçak akım (Error-170/171/172) tekrarlayan trip
- PLC/HMI donanım arızası şüphesi
- Bölüm 11.1.2 tablosundaki adımlara rağmen sorun devam ediyorsa

Uzaktan erişim: **Secomea modül** (bkz. Bölüm **3.4**).
"""

GEN_EN = r"""# 11.2. General Troubleshooting

This section defines HMI alarm behaviour and service call criteria.

---

## 11.2.1. HMI Alarm Behaviour

| Parameter | Value / Description |
|-----------|---------------------|
| Alarm screen | Available on HMI interface |
| Stack light | Turns **red** on alarm |
| HMI alarm text languages | Turkish, English, German |

Active and historical alarms are shown on HMI alarm screen. Alarm codes are listed in Section **11.1.2**.

---

## 11.2.2. Service Call Criteria

| Parameter | Value / Description |
|-----------|---------------------|
| Service call criteria | [MISSING] |

Authorized service support is recommended when:

- Error-460 Servo Motor Fault
- Recurring heater earth leakage trip (Error-170/171/172)
- Suspected PLC/HMI hardware fault
- Problem persists despite steps in Section 11.1.2

Remote access: **Secomea module** (see Section **3.4**).
"""

GEN_DE = r"""# 11.2. Allgemeine Störungsbehebung

Dieser Abschnitt beschreibt HMI-Alarmverhalten und Service-Anfragekriterien.

---

## 11.2.1. HMI-Alarmverhalten

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Alarmbildschirm | Am HMI verfügbar |
| Signalleuchte | Bei Alarm **rot** |
| HMI-Alarmtext-Sprachen | Türkisch, Englisch, Deutsch |

Aktive und historische Alarme am HMI-Alarmbildschirm. Alarmcodes in Abschnitt **11.1.2**.

---

## 11.2.2. Service-Anfragekriterien

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Service-Anfragekriterien | [FEHLEND] |

Autorisierter Service empfohlen bei:

- Error-460 Servomotor-Fehler
- Wiederholter Heizungs-Fehlerstrom-Trip (Error-170/171/172)
- Verdacht auf PLC/HMI-Hardwarefehler
- Problem trotz Schritte in Abschnitt 11.1.2

Fernzugriff: **Secomea-Modul** (siehe Abschnitt **3.4**).
"""

ELEC_TR = r"""# 11.3. Elektrik Arızaları

Bu bölüm, elektrik kaynaklı arızaların teşhis ve giderme yöntemlerini tanımlar.

---

## 11.3.1. Faz ve Acil Stop

| Alarm | Konu | Referans |
|-------|------|----------|
| Error-410 | Faz sırası hatalı | Faz sıra rölesi; iki faz değiştir (5.1 Adım 7) |
| Error-229 | Acil stop devrede | Reset prosedürü (7.3.2) |

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Faz kaybı davranışı | [EKSİK] |

---

## 11.3.2. Motor Arızaları

| Alarm | Motor |
|-------|-------|
| Error-100 | Yıkama pompası |
| Error-101 | Durulama pompası |
| Error-110 | Egzoz fanı |
| Error-111–114 | Kurutma fanları 1–4 |
| Error-130 | Yağ sıyırıcı |
| Error-460 | Servo motor |

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Motor koruma trip | [EKSİK] |
| Inverter alarm kodları özeti | [EKSİK] |

**Kontrol:** Pompa önü vanalar açık mı (7.2.5). Motor koruma rölesi/şalter durumu. Elektrik panosu sigortaları.

---

## 11.3.3. Isıtıcı Arızaları

| Alarm | Konu |
|-------|------|
| Error-170 | Isıtıcı kaçak akım F2 |
| Error-171 | Isıtıcı kaçak akım F3 |
| Error-172 | Isıtıcı kaçak akım F4 |
| Error-150 | Yıkama tank sıcaklığı düşük |
| Error-151 | Durulama tank sıcaklığı düşük |

Sıcaklık ayarı HMI ayar sayfasından yapılır (bkz. **6.3**). Hazırlık butonu ile ısıtma tamamlandı mı kontrol et (bkz. **7.2**).

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Sensör kablo renk kodu | [EKSİK] |
"""

ELEC_EN = r"""# 11.3. Electrical Faults

This section defines diagnosis and remedy for electrical faults.

---

## 11.3.1. Phase and Emergency Stop

| Alarm | Topic | Reference |
|-------|-------|-----------|
| Error-410 | Phase sequence fault | Phase relay; swap two phases (5.1 Step 7) |
| Error-229 | Emergency stop active | Reset procedure (7.3.2) |

| Parameter | Value / Description |
|-----------|---------------------|
| Phase loss behaviour | [MISSING] |

---

## 11.3.2. Motor Faults

| Alarm | Motor |
|-------|-------|
| Error-100 | Wash pump |
| Error-101 | Rinse pump |
| Error-110 | Exhaust fan |
| Error-111–114 | Drying fans 1–4 |
| Error-130 | Oil skimmer |
| Error-460 | Servo motor |

| Parameter | Value / Description |
|-----------|---------------------|
| Motor protection trip | [MISSING] |
| Inverter alarm code summary | [MISSING] |

**Check:** Valves in front of pumps open (7.2.5). Motor protection relay/switch. Panel fuses.

---

## 11.3.3. Heater Faults

| Alarm | Topic |
|-------|-------|
| Error-170 | Heater earth leakage F2 |
| Error-171 | Heater earth leakage F3 |
| Error-172 | Heater earth leakage F4 |
| Error-150 | Wash tank temperature low |
| Error-151 | Rinse tank temperature low |

Temperature via HMI settings (see **6.3**). Verify heating complete via preparation button (see **7.2**).

| Parameter | Value / Description |
|-----------|---------------------|
| Sensor cable colour code | [MISSING] |
"""

ELEC_DE = r"""# 11.3. Elektrische Störungen

Dieser Abschnitt beschreibt Diagnose und Behebung elektrischer Störungen.

---

## 11.3.1. Phase und Not-Aus

| Alarm | Thema | Referenz |
|-------|-------|----------|
| Error-410 | Phasenfolge fehlerhaft | Phasenfolgerelais; Phasen tauschen (5.1 Schritt 7) |
| Error-229 | Not-Aus aktiv | Reset-Prozedur (7.3.2) |

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Verhalten bei Phasenausfall | [FEHLEND] |

---

## 11.3.2. Motorstörungen

| Alarm | Motor |
|-------|-------|
| Error-100 | Waschpumpe |
| Error-101 | Spülpumpe |
| Error-110 | Abluftventilator |
| Error-111–114 | Trocknungsventilatoren 1–4 |
| Error-130 | Ölabscheider |
| Error-460 | Servomotor |

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Motorschutz-Trip | [FEHLEND] |
| Wechselrichter-Alarmcodes | [FEHLEND] |

**Prüfung:** Ventile vor Pumpen offen (7.2.5). Motorschutz. Sicherungen im Schrank.

---

## 11.3.3. Heizungsstörungen

| Alarm | Thema |
|-------|-------|
| Error-170 | Heizung Fehlerstrom F2 |
| Error-171 | Heizung Fehlerstrom F3 |
| Error-172 | Heizung Fehlerstrom F4 |
| Error-150 | Waschtanktemperatur niedrig |
| Error-151 | Spültanktemperatur niedrig |

Temperatur über HMI-Einstellungen (siehe **6.3**). Erwärmung über Vorbereitungstaste prüfen (siehe **7.2**).

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Sensorkabel-Farbcode | [FEHLEND] |
"""

HYDRO_TR = r"""# 11.4. Hidrolik Arızaları

KNV 30 3000 2B makinesinde **hidrolik sistem bulunmamaktadır**. Bu bölüm uygulanmaz.

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Basınç düşük alarm | Uygulanmaz |
| Yağ kaçağı noktaları | Uygulanmaz |
| Pompa sesi anormal | Uygulanmaz |
"""

HYDRO_EN = r"""# 11.4. Hydraulic Faults

The KNV 30 3000 2B machine has **no hydraulic system**. This section does not apply.

| Parameter | Value / Description |
|-----------|---------------------|
| Low pressure alarm | Not applicable |
| Oil leak points | Not applicable |
| Abnormal pump noise | Not applicable |
"""

HYDRO_DE = r"""# 11.4. Hydraulische Störungen

Die KNV 30 3000 2B Maschine hat **kein Hydrauliksystem**. Dieser Abschnitt entfällt.

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Niederdruckalarm | Nicht anwendbar |
| Ölleckstellen | Nicht anwendbar |
| Abnormale Pumpengeräusche | Nicht anwendbar |
"""

PNEMO_TR = r"""# 11.5. Pnömatik Arızalar

Bu bölüm, pnömatik kaynaklı arızaların teşhis ve giderme yöntemlerini tanımlar.

Makine **6 bar** basınçlı hava kullanır (bkz. Bölüm **6.5**).

---

## 11.5.1. Basınç Alarmları

| Alarm | Konu | Kontrol |
|-------|------|---------|
| Error-235 | Giriş hava basıncı düşük | 6 bar hava bağlantısı, regülatör, HMI manuel sayfa |
| Error-236 | Giriş su basıncı düşük | 1 bar su bağlantısı, HMI manuel sayfa |

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Basınç düşük (genel) | Error-235 — 6 bar hava gerekli |

> **Not:** Makine çalışırken hava sökülürse anlık hava ihtiyacı olmayabilir; makine devam edebilir (bkz. **7.4.4**).

---

## 11.5.2. Vana Arızaları

| Alarm | Konu |
|-------|------|
| Error-300 | Yıkama otomatik dolum vanası açılamadı |
| Error-301 | Yıkama otomatik dolum vanası kapanamadı |
| Error-302 | Durulama otomatik dolum vanası açılamadı |
| Error-303 | Durulama otomatik dolum vanası kapanamadı |
| Error-304 | Aktarma vanası açılamadı |
| Error-305 | Aktarma vanası kapanamadı |

**Kontrol:** 6 bar hava mevcut mu. Otomatik dolum su giriş vanası açık mı (7.2.1). Vana bobini ve mekanik hareket.

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Silindir yavaş / takılma | [EKSİK] |
| Valf bobini arıza | [EKSİK] |
"""

PNEMO_EN = r"""# 11.5. Pneumatic Faults

This section defines diagnosis and remedy for pneumatic faults.

Machine uses **6 bar** compressed air (see Section **6.5**).

---

## 11.5.1. Pressure Alarms

| Alarm | Topic | Check |
|-------|-------|-------|
| Error-235 | Inlet air pressure low | 6 bar air, regulator, HMI manual page |
| Error-236 | Inlet water pressure low | 1 bar water, HMI manual page |

| Parameter | Value / Description |
|-----------|---------------------|
| Low pressure (general) | Error-235 — 6 bar air required |

> **Note:** If air disconnected while running, no immediate air need; machine may continue (see **7.4.4**).

---

## 11.5.2. Valve Faults

| Alarm | Topic |
|-------|-------|
| Error-300 | Wash auto-fill valve cannot open |
| Error-301 | Wash auto-fill valve cannot close |
| Error-302 | Rinse auto-fill valve cannot open |
| Error-303 | Rinse auto-fill valve cannot close |
| Error-304 | Transfer valve cannot open |
| Error-305 | Transfer valve cannot close |

**Check:** 6 bar air available. Automatic fill water valve open (7.2.1). Valve coil and mechanical movement.

| Parameter | Value / Description |
|-----------|---------------------|
| Cylinder slow / sticking | [MISSING] |
| Valve coil fault | [MISSING] |
"""

PNEMO_DE = r"""# 11.5. Pneumatische Störungen

Dieser Abschnitt beschreibt Diagnose und Behebung pneumatischer Störungen.

Maschine nutzt **6 bar** Druckluft (siehe Abschnitt **6.5**).

---

## 11.5.1. Druckalarme

| Alarm | Thema | Prüfung |
|-------|-------|---------|
| Error-235 | Eingangs-Luftdruck niedrig | 6 bar Luft, Regler, HMI-Handseite |
| Error-236 | Eingangs-Wasserdruck niedrig | 1 bar Wasser, HMI-Handseite |

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Niederdruck (allgemein) | Error-235 — 6 bar Luft erforderlich |

> **Hinweis:** Bei Lufttrennung im Betrieb kann Maschine weiterlaufen (siehe **7.4.4**).

---

## 11.5.2. Ventilstörungen

| Alarm | Thema |
|-------|-------|
| Error-300 | Wasch-Füllventil öffnet nicht |
| Error-301 | Wasch-Füllventil schließt nicht |
| Error-302 | Spül-Füllventil öffnet nicht |
| Error-303 | Spül-Füllventil schließt nicht |
| Error-304 | Umlaufventil öffnet nicht |
| Error-305 | Umlaufventil schließt nicht |

**Prüfung:** 6 bar Luft. Automatisches Füllwasser-Ventil offen (7.2.1). Ventilspule und Mechanik.

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Langsamer / klemmender Zylinder | [FEHLEND] |
| Ventilspulenfehler | [FEHLEND] |
"""

VAC_TR = r"""# 11.6. Vakum Arızaları

KNV 30 3000 2B makinesinde **vakum sistemi bulunmamaktadır**. Bu bölüm uygulanmaz (bkz. Bölüm **6.6**).
"""

VAC_EN = r"""# 11.6. Vacuum Faults

The KNV 30 3000 2B machine has **no vacuum system**. This section does not apply (see Section **6.6**).
"""

VAC_DE = r"""# 11.6. Vakuumstörungen

Die KNV 30 3000 2B Maschine hat **kein Vakuumsystem**. Dieser Abschnitt entfällt (siehe Abschnitt **6.6**).
"""

SENS_TR = r"""# 11.7. Sensör Arızaları

Bu bölüm, sensör kaynaklı arızaların teşhis yöntemlerini tanımlar.

---

## 11.7.1. Alarm Tablosundan İlgili Sensörler

| Alarm | Sensör / konu | Kontrol |
|-------|---------------|---------|
| Error-422 | Kapak / RFID güvenlik sensörü | Kapak kapalı, RFID görüyor mu; bypass yok |
| Error-200/201 | Yıkama tankı su seviyesi | Seviye sensörü, dolum vanası |
| Error-202/203 | Durulama tankı su seviyesi | Seviye sensörü, dolum vanası |
| Error-452 | Sızıntı tavası | Su algılama sensörü, kaçak kontrolü |
| Error-461 | Çıkış konveyörü ürün algılama | Sensör, robot çıkış onayı HMI |

---

## 11.7.2. Sensör Parametreleri

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Kritik sensör listesi (tip / konum) | [EKSİK] |
| Sensör LED / durum göstergesi | [EKSİK] |

RFID güvenlik sensörü: kapak açıldığında makine durur (bkz. **5.4**, **7.4.4**).
"""

SENS_EN = r"""# 11.7. Sensor Faults

This section defines diagnosis for sensor-related faults.

---

## 11.7.1. Related Sensors from Alarm Table

| Alarm | Sensor / topic | Check |
|-------|----------------|-------|
| Error-422 | Cover / RFID safety sensor | Cover closed, RFID detects; no bypass |
| Error-200/201 | Wash tank water level | Level sensor, fill valve |
| Error-202/203 | Rinse tank water level | Level sensor, fill valve |
| Error-452 | Leak tray | Water detection sensor, leak check |
| Error-461 | Outfeed conveyor product detection | Sensor, robot outfeed confirm on HMI |

---

## 11.7.2. Sensor Parameters

| Parameter | Value / Description |
|-----------|---------------------|
| Critical sensor list (type / location) | [MISSING] |
| Sensor LED / status indicator | [MISSING] |

RFID safety sensor: machine stops when cover opened (see **5.4**, **7.4.4**).
"""

SENS_DE = r"""# 11.7. Sensorstörungen

Dieser Abschnitt beschreibt Diagnose sensorbezogener Störungen.

---

## 11.7.1. Zugehörige Sensoren aus Alarmtabelle

| Alarm | Sensor / Thema | Prüfung |
|-------|----------------|---------|
| Error-422 | Klappe / RFID-Sicherheitssensor | Klappe zu, RFID erkennt; kein Bypass |
| Error-200/201 | Waschtank Wasserstand | Niveausensor, Füllventil |
| Error-202/203 | Spültank Wasserstand | Niveausensor, Füllventil |
| Error-452 | Leckwanne | Wassererkennungssensor, Leckprüfung |
| Error-461 | Abfuhr-Förderer Produkt erkannt | Sensor, Roboter-Abfuhr am HMI bestätigen |

---

## 11.7.2. Sensorparameter

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Kritische Sensorliste (Typ / Ort) | [FEHLEND] |
| Sensor-LED / Statusanzeige | [FEHLEND] |

RFID-Sicherheitssensor: Maschine stoppt bei geöffneter Klappe (siehe **5.4**, **7.4.4**).
"""


if __name__ == "__main__":
    w("01-fault-finding", "fault-finding", FAULT_TR, FAULT_EN, FAULT_DE)
    w("02-trob-general", "trob-general", GEN_TR, GEN_EN, GEN_DE)
    w("03-trob-electrical", "trob-electrical", ELEC_TR, ELEC_EN, ELEC_DE)
    w("04-trob-hydro", "trob-hydro", HYDRO_TR, HYDRO_EN, HYDRO_DE)
    w("05-trob-pnemo", "trob-pnemo", PNEMO_TR, PNEMO_EN, PNEMO_DE)
    w("06-trob-vacuum", "trob-vacuum", VAC_TR, VAC_EN, VAC_DE)
    w("07-trob-sensors", "trob-sensors", SENS_TR, SENS_EN, SENS_DE)
    for lang, text in [("tr", MAIN_TR), ("en", MAIN_EN), ("de", MAIN_DE)]:
        (ROOT / f"troubleshooting.{lang}.md").write_text(text, encoding="utf-8")
    print("OK troubleshooting main")
