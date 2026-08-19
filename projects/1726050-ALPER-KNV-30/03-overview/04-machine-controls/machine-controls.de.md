# 3.4 Maschinenbedienung und Steuerung

---

## 3.4.1 Steuerschrank — Allgemeiner Aufbau

| Parameter | Wert |
|-----------|------|
| Hauptsteuerschrank — Position | Am Elektroschrank |
| Schrank-Schutzart (IP) | IP55 |
| Schrankabmessungen (B × H × T) | 800 × 1200 × 300 mm |
| Hauptschalter — Position | Am Elektroschrank |
| Hauptschalter | 100 A, Schneider |

Der Elektroschrank enthält Stromverteilung, Motorschutz, Automatisierungskomponenten (SPS, HMI) und Signalleuchten.

<!-- FOTO: Elektroschrank — Gesamtansicht, Tür geöffnet -->
![Steuerschrank Gesamtansicht](../../assets/FOTO-3-4-0-kontrol-panosu.png)

---

## 3.4.2 HMI-Bedienoberfläche

| Parameter | Wert |
|-----------|------|
| HMI-Bildschirmgröße | 7" |
| HMI Marke / Modell | SIMATIC HMI KTP700 Basic PN (6AV2123-2GB03-0AX0) |
| Start / Stopp — Position | Digitale Taste auf HMI-Oberfläche |
| Bedienpanel-Sprachen | Türkisch, Englisch, Deutsch |
| Passwortschutz | Auf der HMI-Oberfläche ist ein Passwort vorhanden |

Auf der HMI-**Betriebsseite** stehen Waschen, Spülen, Trocknen 1, Trocknen 2 und Abluft zur Verfügung; der Bediener kann diese Funktionen nach Bedarf ein-/ausschalten und die Maschine starten. **Handbetrieb** ist nicht vorhanden.

Auf der HMI-**Handseite** werden Luft- und Wasseranschlussstatus überwacht; nach Herstellung der Verbindung leuchtet die entsprechende Anzeige **grün**.

Über die HMI-**Einstellseite** können Temperatur, Datum/Uhrzeit und Sprache eingestellt werden.

<!-- FOTO: HMI-Bildschirm — Betriebsseite -->
![HMI Betriebsseite](../../assets/FOTO-3-4-1-hmi-calisma.png)

<!-- FOTO: HMI-Bildschirm — Handseite (Luft/Wasser-Status) -->
![HMI Handseite](../../assets/FOTO-3-4-2-hmi-manuel.png)

---

## 3.4.3 SPS und E/A-Infrastruktur

| Parameter | Wert |
|-----------|------|
| SPS Marke / Modell | SIEMENS SIMATIC S7-1200 |
| SPS-CPU-Modell | S7-1200 CPU 1215C DC/DC/DC (6ES7215-1AG40-0XB0) |
| E/A-Modul — Übersicht | 36 Eingänge / 24 Ausgänge |
| Fieldbus / Protokoll | Profinet |

Encoder-/Feedback-Einstellungen sind im SPS-Programm integriert; die Einstellung ist durch den Hersteller vorzunehmen.

<!-- FOTO: SPS-Module — Schrankinnenseite -->
![SPS-Module](../../assets/FOTO-3-4-3-plc-modul.png)

---

## 3.4.4 Betriebsarten, Start/Stopp und Not-Halt

| Parameter | Wert |
|-----------|------|
| Betriebsartwahlschalter | Automatik / Wartung |
| Handbetrieb | Nicht vorhanden |
| Schritt-/Tippbetrieb | Nicht vorhanden |
| Bedingungen für Betriebsartwechsel | Nicht vorhanden |
| Jog-/Tipp-Tasten | Nicht vorhanden |

**Wartungsbetrieb:** Es gibt keinen separaten Wartungsmodus. Für Wartungsarbeiten dürfen Abdeckungen erst nach Abschaltung der Maschine geöffnet werden; bei abgeschalteter Spannung ist das **LOTO-Verfahren** anzuwenden.

**Not-Halt-Stellen (4 Stück):**
1. Am Elektroschrank
2. Rechts am Förderband am Maschineneinlauf
3. Links am Förderband am Maschineneinlauf
4. Links am Förderband am Maschinenauslauf

Bei Betätigung des Not-Halt stoppt **jede Funktion der Maschine**. Reset: Nach Freigabe des Not-Halt-Tasters und Bestätigung, dass die Gefahr behoben ist, Reset-Taste am Schranketikett drücken, bis die Leuchte aufleuchtet.

<!-- FOTO: Not-Halt-Taster — Ein- und Auslaufstellen -->
![Not-Halt-Stellen](../../assets/FOTO-3-4-4-acil-stop.png)

---

## 3.4.5 Signalleuchten (Signalelement)

| Farbe | Bedeutung |
|-------|-----------|
| Rot | Alarm |
| Gelb | Maschine betriebsbereit |
| Grün | Maschine in Betrieb |

Das Signalelement zeigt dem Bediener den aktuellen Maschinenstatus visuell an. Bei Alarm leuchtet die rote Lampe.

<!-- FOTO: Signalelement — Maschinenoberseite -->
![Signalelement](../../assets/FOTO-3-4-5-tepe-lambasi.png)

---

## 3.4.6 Alarm, Rezept und Fernzugriff

| Funktion | Verhalten |
|----------|-----------|
| Alarmbildschirm | Alarmbildschirm ist auf der HMI-Oberfläche vorhanden; bei Alarm leuchtet das Signalelement rot |
| Rezept- / Programmspeicher | Keine Rezeptbegrenzung |
| Trend- / Log-Speicherdauer | [EKSİK] |
| Fernzugriff | Ja — Secomea-Modul |

<!-- FOTO: HMI-Alarmbildschirm -->
![HMI-Alarmbildschirm](../../assets/FOTO-3-4-6-hmi-alarm.png)
