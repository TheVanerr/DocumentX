# 6.3 Elektrische und HMI-Einstellungen

Die elektrischen Einstellungen bestehen aus zwei Ebenen: **bedienerzugängliche HMI-Parameter** (Temperatur, Ölskimmer-Zeiten, Datum/Uhrzeit/Sprache) und **herstellergeschützte eingebettete Einstellungen** (Encoder/Feedback, SPS-Programm). Der Bediener greift nur in die erste Gruppe ein; wird die zweite Gruppe unbefugt geändert, können Sicherheitsverriegelungen und Motorsteuerung gestört werden.

Die HMI-Bildschirmstruktur ist in **Kapitel 3.4.4** beschrieben; dieser Abschnitt gibt die Einstellverfahren.

---

## 6.3.1 Motordrehrichtung / Phasenprüfung

| Parameter | Wert / Beschreibung |
|-----------|------------------|
| Motordrehrichtung / Phasenprüfung | Der Motor muss in einer Richtung laufen; Bedieneinstellung ist **nicht erforderlich** |

Pumpen und Lüfter sind für unidirektionalen Antrieb ausgelegt. Die Phasendrehrichtung wird bei der Installation mit dem Phasenfolge-Relais bestätigt (siehe **Kapitel 5.3.4**). Während des Betriebs gibt es keine Einstellung zum Ändern der Motordrehrichtung; Gegenlauf ist ein Störungszeichen (**Siehe Kapitel 11**).

---

## 6.3.2 Encoder / Feedback

| Parameter | Wert / Beschreibung |
|-----------|------------------|
| Encoder- / Feedback-Einstellung | Im SPS-Programm eingebettet; die Einstellung muss durch die **Herstellerfirma** erfolgen |

Encoder- und Feedback-Parameter werden dem Bediener über das HMI nicht geöffnet. Kalibrierung oder Änderung erfolgt nur durch den autorisierten Herstellerservice.

**VORSICHT — Unbefugter Eingriff:** Änderung des SPS-Programms und eingebetteter Encoder-Einstellungen durch den Bediener kann Förderbandsynchronisation und Sicherheitsfunktionen stören.

---

## 6.3.3 Prozesstemperatur- und Ölskimmer-Einstellungen (HMI)

| Parameter | Einstellort |
|-----------|-----------|
| Temperatur-Sollwerte | HMI-**Einstellseite** |
| Ölskimmer-Lauf- / Wartezeiten | HMI-**Einstellseite** |
| Druckeinstellung | Nicht vorhanden |

Eine analoge Druckskalierung wird vom Bediener nicht vorgenommen. Temperatureinstellungen erfolgen über das HMI.

### HMI-Temperatur- und Ölskimmer-Einstellverfahren

1. Die Maschine in den **Stopp**-Zustand bringen oder sich in der Vorbereitungsphase befinden.
2. Die HMI-**Einstellseite** öffnen.
3. Die folgenden Sollwerte je nach Prozessbedarf eingeben:

| Parameterblock | Eingestellter Wert |
|-----------------|-----------------|
| Waschtemperatur | Sollwert (°C) |
| Spültemperatur | Sollwert (°C) |
| Trocknen | Sollwert 1 (°C) |
| Ölskimmer | Laufzeit (min) und Wartezeit (min) |

4. Die Werte bestätigen; zur Prüfung der Übertragung an die SPS Soll-/Ist-Temperaturanzeigen auf der **Betriebsseite** kontrollieren.
5. Temperaturgrenzen im Hinblick auf Teilewerkstoff und Prozesssicherheit innerhalb der Maschinenkonstruktionsgrenzen halten.

**Erwartetes Ergebnis:** Soll- und Ist-Temperaturwerte auf der Betriebsseite konsistent; der Ölskimmer läuft periodisch.

**Abweichender Zustand:** Schaltet die Heizung nicht ein, Füllstandssensor, Thermik- und Fehlerstromschutzstatus auf der HMI-Handseite prüfen (siehe **Kapitel 3.4.5**, **Kapitel 11**).

![HMI-Temperatureinstellung](../../assets/6.3/1.png)

---

## 6.3.4 Datum-, Uhrzeit- und Spracheinstellung (HMI)

| Parameter | Wert / Beschreibung |
|-----------|------------------|
| Datum- / Uhrzeit- / Spracheinstellung | Muss über die HMI-Oberfläche erfolgen |

### Sprachauswahl

Die Sprache wird mit den Flaggensymbolen in der oberen rechten Ecke des HMI-Startbildschirms gewählt: **Türkisch**, **Englisch**, **Deutsch** (siehe **Kapitel 3.4.2**).

### Datum / Uhrzeit

1. Die HMI-**Einstellseite** oder das Systemparametermenü öffnen.
2. Datum und Uhrzeit gemäß Werksstandard aktualisieren.
3. Prüfen, dass Alarmaufzeichnungen und Trend-Zeitstempel korrekt sind.

Korrektes Datum/Uhrzeit ist für die Rückverfolgbarkeit von Alarmhistorie und Wartungsaufzeichnungen erforderlich.

![HMI-Spracheinstellung](../../assets/6.3/2.png)

---

## 6.3.5 Checkliste elektrische Einstellungen

| # | Prüfung | Status |
|---|---------|:-----:|
| 1 | Phasendrehrichtung bei der Installation bestätigt (Kapitel 5.3.4) | ☐ |
| 2 | Encoder-/Feedback-Einstellung durch den Hersteller vorgenommen / bestätigt | ☐ |
| 3 | HMI-Temperatur-Sollwerte definiert | ☐ |
| 4 | Ölskimmer-Lauf-/Wartezeiten definiert | ☐ |
| 5 | HMI Datum / Uhrzeit / Sprache eingestellt | ☐ |

**Datum:** _______________ **Kontrolliert durch:** _______________

---

Für die HMI-Menüstruktur siehe **Kapitel 3.4**; für Rezeptverwaltung siehe **Kapitel 8.2**.
