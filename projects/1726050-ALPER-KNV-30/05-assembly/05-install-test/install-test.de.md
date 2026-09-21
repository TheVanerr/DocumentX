# 5.5 Installationsprüfung und Test

Die Installationsprüfungen werden nach Abschluss der Sicherheitsprüfungen in **Kapitel 5.4** durchgeführt. Ohne alle Kontrollen **OK** nicht in den Betrieb übergehen. Die folgende Checkliste wird für die Installationsprüfung verwendet.

---

## 5.5.1 Mechanische Installationsprüfung

| # | Prüfung | Erwartetes Ergebnis | Status |
|---|---------|-----------------|:-----:|
| 1 | Steht die Maschine in Waage? | Ja — verstellbare Füße, innerhalb 0,5 mm Toleranz | ☐ |

Die Prüfung erfolgt nach Abschluss der Niveaueinstellung in **Kapitel 5.2.3**. Mit Wasserwaage oder gleichwertigem Messgerät beide Achsen prüfen.

![Waagenkontrolle](../../assets/5.5/1.png)

---

## 5.5.2 Elektrische Inbetriebnahmeprüfung

| # | Prüfung | Erwartetes Ergebnis | Status |
|---|---------|-----------------|:-----:|
| 1 | Gibt das Phasenschutzrelais Ausgang? | Ja | ☐ |
| 2 | Ist Spannung an der Maschine vorhanden? | Ja | ☐ |
| 3 | Stoppt die Maschine bei Betätigung des Not-Halt? | Ja | ☐ |

Die Phasendrehrichtung muss in **Kapitel 5.3.4** bestätigt worden sein.

![Elektrische Inbetriebnahmeprüfung](../../assets/5.5/2.png)

---

## 5.5.3 Pneumatik- und Medienanschlussprüfung

| # | Prüfung | Erwartetes Ergebnis | Status |
|---|---------|-----------------|:-----:|
| 1 | Ist die Luftinformation auf der HMI-Handseite grün? | Ja | ☐ |
| 2 | Ist die Wasserinformation auf der HMI-Handseite grün? | Ja | ☐ |

Anschlusswerte: **6 bar / 3/4"** Luft, **1 bar / 1/2"** Wasser (siehe **Kapitel 3.3.5**).

![Medientest — HMI Handseite](../../assets/5.5/3.png)

---

## 5.5.4 Sicherheitsfunktionsprüfung

| # | Prüfung | Erwartetes Ergebnis | Status |
|---|---------|-----------------|:-----:|
| 1 | Stoppt der Not-Halt die Maschine? | Ja | ☐ |
| 2 | Ist die Maschine einsatzbereit? | Ja — gelbe Signalleuchte | ☐ |
| 3 | Stoppt der RFID-Sensor beim Öffnen einer Abdeckung? | Ja | ☐ |

Detaillierte Prüfschritte stehen in **Kapitel 5.4**.

![Sicherheitsfunktionsprüfung](../../assets/5.5/4.png)

---

## 5.5.5 Leerlaufprüfung

| Parameter | Wert |
|-----------|-------|
| Dauer der Leerlaufprüfung | **15 Minuten** |

Die Leerlaufprüfung bestätigt den Dauerbetrieb der Maschine ohne Teile; sie prüft Leckage, Alarm, übermäßige Vibration und das Zusammenwirken der Prozessfunktionen. Während der Prüfung bewegen sich Förderband, Pumpen und Lüfter; den Gefahrenbereich nicht betreten, geeignete PSA verwenden (siehe **Kapitel 2.6**).

### Voraussetzungen

1. Die Kontrollen **5.5.1–5.5.4** müssen **OK** abgeschlossen sein.
2. Auf der Förderbandlinie darf kein Teil oder Gegenstand zum Quetschen vorhanden sein.
3. Ventile vor den Pumpen müssen **offen** sein.
4. Luft- (**6 bar**) und Wasseranschlüsse aktiv; auf der HMI-Handseite Luft/Wasser **grün**.

### Prüfverfahren

1. Zur HMI-**Betriebsseite** wechseln.
2. Waschen, Spülen, Trocknen 1, Trocknen 2 und Abluft je nach Prüfumfang auf **aktiv** stellen.
3. Die Taste **Vorbereitung Start** drücken; warten, bis Tankfüllung und Beheizung abgeschlossen sind (siehe **Kapitel 7.2**).
4. Prüfen, dass die Signalleuchte **gelb** (einsatzbereit) leuchtet.
5. Mit **Machine Start** den Automatikbetrieb starten; beobachten, dass Förderband, Pumpen und Lüfter anlaufen.
6. Die Maschine **ohne Teile** **15 Minuten** laufen lassen.
7. Während der Prüfung HMI-Alarmbildschirm und Signalleuchte überwachen; auf Leckage, ungewöhnliche Geräusche oder Geruch prüfen.
8. Mit **Machine Stop** stoppen.

| # | Abnahmekriterium | Status |
|---|---------------|:-----:|
| 1 | 15 min ununterbrochener Leerlauf abgeschlossen | ☐ OK / ☐ NOK |
| 2 | Kein kritischer Alarm während der Prüfung | ☐ OK / ☐ NOK |
| 3 | Keine sichtbare Leckage oder ungewöhnliche Vibration | ☐ OK / ☐ NOK |

**Abweichender Zustand:** Bei Alarm die Maschine stoppen; siehe **Kapitel 11**. Ohne Wiederholung der Prüfung nicht in den Betrieb übergehen.

Ist die Leerlaufprüfung erfolgreich, gilt die Maschine als **einsatzbereit** (**Kapitel 5.1 Schritt 9**).

---

## 5.5.6 Zusammenfassende Checkliste Installationsprüfung

| Abschnitt | Prüfung | Abgeschlossen |
|-------|------|:----------:|
| 5.5.1 | Mechanisch — Waage | ☐ |
| 5.5.2 | Elektro — Phasenschutz, Not-Halt | ☐ |
| 5.5.3 | Medien — HMI Luft/Wasser grün | ☐ |
| 5.5.4 | Sicherheit — RFID, einsatzbereit | ☐ |
| 5.5.5 | Leerlauf — 15 min | ☐ |

**Datum:** _______________ **Geprüft durch:** _______________ **Freigegeben durch:** _______________

---

Für Betriebsverfahren siehe **Kapitel 7**.
