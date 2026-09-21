# 5.4 Prüfung der Sicherheitssysteme

Nach der Installation müssen die Sicherheitsfunktionen vor dem Betrieb verifiziert werden. Die Maschinensicherheitskategorie ist **Cat. 3** (EN ISO 13849-1). An der Maschine ist ein **RFID-Sicherheitssensor** vorhanden; es gibt **keinen Lichtvorhang**. Die Anzahl Sicherheitstüren / fester Schutzzäune beträgt **0**.

Not-Halt-Positionen, Reset-Verfahren und Verhalten nach Not-Halt stehen in **Kapitel 2.5**; in diesem Abschnitt werden nur die **Installationsprüfschritte** definiert. Bei Wartungseingriffen das LOTO-Verfahren gemäß **Kapitel 2.4** anwenden.

Prüfintervall der Not-Halt-Funktion: Muss **einmal monatlich** wiederholt werden (siehe **Kapitel 6.2** — Sicherheitseinstellungen).

---

## 5.4.1 Not-Halt-Prüfung

An der Maschine befinden sich **4** Not-Halt-Taster (siehe **Kapitel 2.5**):

| # | Position |
|---|-------|
| 1 | Am Elektroschrank |
| 2 | Am Maschineneinlauf rechts vom Förderband |
| 3 | Am Maschineneinlauf links vom Förderband |
| 4 | Am Maschinenauslauf links vom Förderband |

### Prüfverfahren

Für jeden Not-Halt-Taster einzeln:

1. Prüfen, dass der Gefahrenbereich frei ist; niemand darf in Einlauf/Auslauf des Förderbands eintreten.
2. Bei bereiter oder laufender Maschine den betreffenden Not-Halt-Taster betätigen.
3. Prüfen, dass **jede Funktion** an der Maschine stillsteht.
4. Prüfen, dass die Signalleuchte **rot** leuchtet.
5. Das Reset-Verfahren anwenden (**Siehe Kapitel 2.5**).
6. Die Maschine vor der Prüfung des nächsten Tasters in den normalen Bereitschaftszustand bringen.

| Prüfung | Erwartetes Ergebnis |
|---------|----------------|
| Stoppt die Maschine bei Betätigung des Not-Halt? | Ja — jede Funktion stoppt |

![Not-Halt-Taster](../../assets/5.4/1.png)

![Reset-Taste](../../assets/5.4/2.png)

---

## 5.4.2 Prüfung des RFID-Sicherheitssensors

| Parameter | Wert |
|-----------|-------|
| Sensortyp | RFID-Sicherheitssensor |
| Anzahl Sicherheitstüren | 0 |

Dieser Unterabschnitt ist ein **Funktionstest**; er ist kein Wartungszugang. Vor dem Öffnen von Abdeckungen für Wartung/Reinigung ist **Kapitel 2.4** LOTO verpflichtend.

### Prüfverfahren

1. Prüfen, dass der Gefahrenbereich frei ist; beim Öffnen der Abdeckung nicht zu beweglichen Teilen greifen.
2. Bei bereiter oder laufender Maschine eine RFID-geschützte Wartungsabdeckung **nur zur Erkennung** teilweise öffnen.
3. Prüfen, dass der RFID-Sensor die Maschine **stoppt**.
4. Die Abdeckung schließen; das Reset-Verfahren anwenden (**Siehe Kapitel 2.5**).

| Prüfung | Erwartetes Ergebnis |
|---------|----------------|
| Stoppt der RFID-Sensor die Maschine, wenn Abdeckungen geöffnet werden? | Ja |

Der RFID-Sicherheitssensor wird **nicht überbrückt**. Bei nicht bestandener Prüfung nicht in Betrieb gehen.

![RFID-Sicherheitssensor](../../assets/5.4/3.png)

---

## 5.4.3 Phasenschutz- und elektrische Sicherheitsprüfung

| # | Prüfung | Erwartetes Ergebnis |
|---|---------|----------------|
| 1 | Gibt das Phasenschutzrelais Ausgang? | Ja |
| 2 | Ist Spannung an der Maschine vorhanden? | Ja |
| 3 | Stoppt die Maschine bei Betätigung des Not-Halt? | Ja |

![Phasenschutzrelais](../../assets/5.4/4.png)

---

## 5.4.4 Prüfung des Einsatzbereitschaftszustands

| Prüfung | Erwartetes Ergebnis |
|---------|----------------|
| Ist die Maschine einsatzbereit? | Ja |
| Signalleuchte | Gelb — einsatzbereit |

Auf dem HMI-Alarmbildschirm darf kein aktiver Alarm vorhanden sein. Bei Alarm siehe **Kapitel 11**.

![Signalleuchte — einsatzbereit](../../assets/5.4/5.png)

---

## 5.4.5 Checkliste Sicherheitsfunktionstest

| # | Prüfung | Ergebnis | Datum | Geprüft durch |
|---|------|:-----:|-------|-----------|
| 1 | Not-Halt #1 — Schrank | ☐ OK / ☐ NOK | | |
| 2 | Not-Halt #2 — Einlauf rechts | ☐ OK / ☐ NOK | | |
| 3 | Not-Halt #3 — Einlauf links | ☐ OK / ☐ NOK | | |
| 4 | Not-Halt #4 — Auslauf links | ☐ OK / ☐ NOK | | |
| 5 | Reset-Verfahren (Kapitel 2.5) | ☐ OK / ☐ NOK | | |
| 6 | RFID-Sensor — Abdeckung offen | ☐ OK / ☐ NOK | | |
| 7 | Phasenschutzrelais | ☐ OK / ☐ NOK | | |
| 8 | Maschine einsatzbereit | ☐ OK / ☐ NOK | | |

Ohne alle Punkte **OK** nicht zu den Prüfungen in **Kapitel 5.5** und nicht in den Betrieb übergehen.
