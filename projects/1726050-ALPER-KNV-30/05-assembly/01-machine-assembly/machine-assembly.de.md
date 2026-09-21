# 5.1 Maschinenmontage

Die Montage dauert geschätzt **1 Tag** und wird von einem **1-Personen**-Team durchgeführt. Die Maschine wird **montiert** (**1300 kg**) transportiert; während der Installation werden Module nicht demontiert. Transport und Absetzen erfolgen gemäß Gabelstaplerverfahren **Kapitel 4.1**; ein Kran wird nicht verwendet.

Dieser Abschnitt gibt die Haupt-Montageschrittfolge. Positionierungsdetails stehen in **Kapitel 5.2**; Anschlussverfahren in **Kapitel 5.3**; Sicherheits- und Verifikationsprüfungen in **Kapitel 5.4** und **5.5**.

---

## 5.1.1 Montagevorbereitung

Vor Beginn der Montage müssen folgende Bedingungen erfüllt sein:

| Parameter | Anforderung |
|-----------|------------|
| Montagebereich min. Größe | 5 m × 3 m |
| Bodenebenheitstoleranz | 0,5 mm/m |
| Bodenfestigkeit | Harte und ebene Fläche |
| Erforderliche Ausrüstung | Gabelstapler |
| Verpackungstyp | Container |
| Umgebungstemperatur | +10°C – +30°C |
| Umgebung | Keine Feuchtigkeit und keine korrosiven Stoffe |

Freiräume des Aufstellbereichs und Deckenhöhe sind in **Kapitel 3.5.2** angegeben. Anlagenvorbereitung: **6 bar** Druckluft (3/4"), **1 bar** Wasser (1/2"), **380 V / 50 Hz / 3 Phasen** Elektroleitung (50 kW / 100 A — siehe **Kapitel 3.3.3**, **3.3.5**).

**WARNUNG — Elektrizität:** Der 380-V-Dreiphasenanschluss darf nur durch autorisiertes Elektrofachpersonal ausgeführt werden.

---

## 5.1.2 Montageschritte — Übersicht

Die Montage muss in folgender Reihenfolge durchgeführt werden:

| Schritt | Vorgang | Detailabschnitt |
|:----:|-------|-------------|
| 1 | Maschine in den Aufstellbereich gebracht und abgesetzt | Kapitel 4.1.4 |
| 2 | Maschinenverpackung entfernt | Kapitel 4.1.3 |
| 3 | Maschine auf den Boden gesetzt; Füße ausnivelliert | Kapitel 5.2.3 |
| 4 | Druckluftanschluss hergestellt | Kapitel 5.3.1 |
| 5 | Wasseranschluss hergestellt | Kapitel 5.3.2 |
| 6 | Dreiphasen-Elektroversorgung angeschlossen | Kapitel 5.3.3 |
| 7 | Maschinenstrom am Schrank eingeschaltet | Kapitel 5.3.4 |
| 8 | Phasendrehrichtung geprüft und korrigiert | Kapitel 5.3.4 |
| 9 | Installationsprüfungen abgeschlossen; Maschine einsatzbereit | Kapitel 5.4, 5.5 |

---

## 5.1.3 Schritt 3 — Nivellierung

Die Maschine wird auf einem System mit **verstellbaren Füßen** aufgesetzt. Die Füße müssen so eingestellt werden, dass die Maschine **in Waage** steht. Die Ausrichtungstoleranz beträgt **0,5 mm** (siehe **Kapitel 5.2.3**).

**Erwartetes Ergebnis:** Mit der Wasserwaage in beiden Achsen ausgeglichen; die Füße berühren den Boden gleichmäßig.

![Verstellbare Füße](../../assets/5.1/2.png)

---

## 5.1.4 Schritte 4–6 — Medien- und Elektroanschlüsse

Die Anschlussverfahren sind Schritt für Schritt in **Kapitel 5.3** angegeben. Übersicht:

| Medium | Druck / Spannung | Anschluss | Referenz |
|-------|------------------|----------|------|
| Druckluft | 6 bar | 3/4" | Kapitel 3.3.5 |
| Wasser | 1 bar | 1/2" | Kapitel 3.3.5 |
| Elektro | 380 V, 50 Hz, 3 Phasen, 50 kW / 100 A | 3P+N+PE | Kapitel 3.3.3 |

Nach dem Anschluss müssen Luft- und Wasseranzeige auf der HMI-**Handseite** **grün** leuchten (siehe **Kapitel 3.4.5**).

---

## 5.1.5 Schritte 7–8 — Inbetriebnahme und Phasenprüfung

1. Nach Anschluss der Dreiphasenversorgung am Schrank den Maschinenstrom **am Schrank** einschalten.
2. Die Phasendrehrichtung am **Phasenfolge-Relais** prüfen.
3. Ist die Phasendrehrichtung vertauscht, den Hauptschalter auf **OFF** stellen; autorisiertes Elektrofachpersonal tauscht **zwei Phasen**; anschließend den Schalter einschalten und das Relais erneut prüfen. Phasen nicht bei eingeschalteter Energie tauschen.

Die Motoren sind für eine Drehrichtung ausgelegt; falsche Phasenfolge führt zu einem Pumpendrehrichtungsfehler (siehe **Kapitel 6.3** — Motordrehrichtung / Phasenprüfung).

![Phasenfolge-Relais](../../assets/5.1/3.png)

---

## 5.1.6 Schritt 9 — Montageabschluss

Bevor die Maschine in Schritt 9 als **einsatzbereit** gilt, müssen folgende Prüfungen abgeschlossen sein:

| Prüfung | Kapitel |
|------|-------|
| Sicherheitsfunktionstests | 5.4 |
| Installationsprüfung und Leerlauf (15 min) | 5.5 |
| Kommunikationsprüfung (Profinet, E/A) | 5.6 |

Vor dem Betrieb wird eine Durchsicht der OEM-Einstellungen in **Kapitel 6** empfohlen.

![Montage abgeschlossen](../../assets/5.1/4.png)
