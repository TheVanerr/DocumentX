# 11.1. Fehlersuche

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

| Code | Alarmtext | Prüfung / Abhilfe |
|------|-----------|------------------|
| Error-229 | Acil Stop Devrede | Not-Aus lösen, Gefahr beseitigen, Reset-Taste drücken (siehe 7.3.2) |
| Error-410 | Faz Sırası Hatalı | Phasenfolgerelais prüfen; ggf. zwei Phasen tauschen (siehe 5.1 Schritt 7) |
| Error-422 | Kapak Kapalı Değil | Wartungsklappe geschlossen und RFID-Sensor erkennt prüfen |
| Error-100 | Yıkama Pompası Motoru Hata | Motorschutz, Ventil vor Pumpe, elektrische Anschlüsse prüfen |
| Error-101 | Durulama Pompası Motoru Hata | Motorschutz, Ventil vor Pumpe, elektrische Anschlüsse prüfen |
| Error-110 | Egzoz Fan Motoru Hata | Abluftventilatormotor und Schutzschaltung prüfen |
| Error-111 | Kurutma Fan Motoru Hata | Trocknungsventilator 1 Motor und Schutzschaltung prüfen |
| Error-112 | Kurutma Fan Motoru 2 Hata | Trocknungsventilator 2 Motor und Schutzschaltung prüfen |
| Error-113 | Kurutma Fan Motoru 3 Hata | Trocknungsventilator 3 Motor und Schutzschaltung prüfen |
| Error-114 | Kurutma Fan Motoru 4 Hata | Trocknungsventilator 4 Motor und Schutzschaltung prüfen |
| Error-130 | Yağ Sıyırıcı Motor Hata | Ölabscheider-Motor und Schutzschaltung prüfen |
| Error-150 | Yıkama Tank Sıcaklığı Düşük | Heizung, Rezepttemperatur, Vorbereitung abgeschlossen prüfen |
| Error-151 | Durulama Tank Sıcaklığı Düşük | Heizung, Rezepttemperatur, Vorbereitung abgeschlossen prüfen |
| Error-170 | Isıtıcı Kaçak Akım F2 | Waschtank-Heizung Fehlerstromschutz F2 prüfen |
| Error-171 | Isıtıcı Kaçak Akım F3 | Heizung Fehlerstromschutz F3 prüfen |
| Error-172 | Isıtıcı Kaçak Akım F4 | Heizung Fehlerstromschutz F4 prüfen |
| Error-200 | Yıkama Tankı Su Seviyesi Pompa Seviyesinin Altında | Waschtank Wasserstand, Füllventil prüfen |
| Error-201 | Yıkama Tankı Su Seviyesi Yetersiz | Waschtankfüllung, automatisches Füllwasser-Ventil offen prüfen |
| Error-202 | Durulama Tankı Su Seviyesi Pompa Seviyesinin Altında | Spültank Wasserstand, Füllventil prüfen |
| Error-203 | Durulama Tankı Su Seviyesi Yetersiz | Spültankfüllung, automatisches Füllwasser-Ventil offen prüfen |
| Error-235 | Giriş Hava Basıncı Düşük | **6 bar** Luftanschluss und Regler prüfen (HMI Handseite) |
| Error-236 | Giriş Su Basıncı Düşük | **1 bar** Wasseranschluss prüfen (HMI Handseite) |
| Error-300 | Yıkama Otomatik Dolum Vanası Açılamadı | 6 bar Luft, Ventil mechanisch/elektrisch prüfen |
| Error-301 | Yıkama Otomatik Dolum Vanası Kapanamadı | Waschfüllventil mechanisch/elektrisch prüfen |
| Error-302 | Durulama Otomatik Dolum Vanası Açılamadı | 6 bar Luft, Ventil mechanisch/elektrisch prüfen |
| Error-303 | Durulama Otomatik Dolum Vanası Kapanamadı | Spülfüllventil mechanisch/elektrisch prüfen |
| Error-304 | Aktarma Vanası Açılamadı | Umlaufventil mechanisch/elektrisch, 6 bar Luft prüfen |
| Error-305 | Aktarma Vanası Kapanamadı | Umlaufventil mechanisch/elektrisch prüfen |
| Error-452 | Sızıntı Tavasında Su Tesbit Edildi | Leckwanne, Tank/Dichtungsleckage prüfen |
| Error-460 | Servo Motor Hata | Servomotor und Antrieb prüfen — Service erforderlich |
| Error-461 | Çıkış Konveyöründe Ürün Algılandı | Produktentnahme am HMI bestätigen; Roboter-Abfuhr prüfen |

---

## 11.1.3. Allgemeine Störungstabelle

| Symptom | Mögliche Ursache | Prüfung | Abhilfe |
|---------|------------------|---------|---------|
| Störung 1 | [FEHLEND] | [FEHLEND] | [FEHLEND] |
| Störung 2 | [FEHLEND] | [FEHLEND] | [FEHLEND] |
| Störung 3 | [FEHLEND] | [FEHLEND] | [FEHLEND] |

> **Hinweis:** Allgemeine Störungstabelle in DATA-Datei noch nicht definiert.
