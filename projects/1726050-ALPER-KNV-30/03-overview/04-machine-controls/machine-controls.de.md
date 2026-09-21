# 3.4 Maschinensteuerungen

Die betriebliche Steuerung der Maschine erfolgt über das **HMI-Bedienfeld** am Elektroschrank und die **Siemens S7-1200-SPS**-Infrastruktur. Der Bediener wählt Prozessfunktionen, bereitet die Maschine vor, gibt Start-/Stop-Befehle und überwacht Alarmzustände über HMI. Die Signalleuchte visualisiert den Momentanzustand der Maschine aus der Ferne; detaillierte Sicherheitsfunktionen sind in **Kapitel 2** erläutert, Störungsbehebung in **Kapitel 11**.

Dieses Kapitel beschreibt die Struktur der HMI-Bildschirme, die Menüanordnung und die Funktion jeder Seite. Bildschirmaufnahmen stammen von der **SIMATIC HMI KTP700 Basic PN**-Schnittstelle dieses Projekts.

---

## 3.4.1 Steuerschrank — allgemeiner Aufbau

| Parameter | Wert |
|-----------|-------|
| Lage des Hauptsteuerschranks | Am Elektroschrank |
| Schutzart des Schranks (IP) | IP55 |
| Schrankabmessungen (B × H × T) | 800 × 1200 × 300 mm |
| Lage des Hauptschalters | Am Elektroschrank |
| HMI-Bildschirmgröße | 7" |
| HMI-Marke / Modell | SIMATIC HMI KTP700 Basic PN (6AV2123-2GB03-0AX0) |

Der Elektroschrank beherbergt Leistungsverteilung, Motorschutz, SPS, HMI, Not-Halt-Reset-Kreis und Treiber der Signalleuchte. Versorgungsspannung, Hauptschalterwert und installierte Leistung stehen in **Kapitel 3.3.3** — Tabelle Elektrische Daten.

---

## 3.4.2 HMI-Startbildschirm und Menüstruktur

Beim Start des HMI wird der Startbildschirm (Splash) angezeigt. Auf diesem Bildschirm stehen Maschinenmodell (**KNV 30 3000**), Seriennummer (**1726050**) und installierte Leistung (**50 kW**). Die Schnittstellensprache wird mit den Flaggensymbolen in der oberen rechten Ecke gewählt: **Türkisch**, **Englisch**, **Deutsch**.

Die Hauptmenüstruktur wird mit vier Seiten-Schaltflächen in der linken Seitenleiste dargestellt; alle Seiten sind **ohne Passwort** zugänglich:

| Menü-Schaltfläche | Funktion |
|--------------|-------|
| **Betriebsseite** | Täglicher Betrieb, Vorbereitung, Start/Stop, Prozessfunktionsauswahl |
| **Einstellungsseite** | Temperatursollwerte, Ölskimmer-Zeiten |
| **Alarmseite** | Aktive und historische Alarmaufzeichnungen |
| **Manuelle Seite** | Eingangssignalüberwachung, manuelles Auslösen von Funktionen, Luft-/Wasserstatus |

Am HMI ist **keine** Passwortstufe vorhanden. Die interne Installations-/Herstellerseite liegt außerhalb des Umfangs der Bedieneranleitung; sie wird in dieser Anleitung nicht definiert.

Datum/Uhrzeit werden durchgehend in der oberen linken Ecke angezeigt; eine Aktualisierung über die Einstellungsseite oder Systemparameter kann erforderlich sein (siehe Kapitel 6.3 — Elektrische Einstellungen).

![HMI-Startbildschirm](../../assets/3.4/tr1.jpg)

---

## 3.4.3 Betriebsseite

Die **Betriebsseite** ist die primäre Bedienerschnittstelle für den normalen automatischen Betrieb der Maschine. Auf dieser Seite sind Temperaturstatus der Prozesszonen, Vorbereitungs-/Start-/Stop-Befehle und Prozessfunktionsauswahlen zusammengefasst.

**Temperaturüberwachungsblöcke** (oberer Abschnitt):

| Block | Angezeigte Werte |
|------|---------------------|
| Waschen | Sollwert und Isttemperatur (°C) |
| Spülen | Sollwert und Isttemperatur (°C) |
| Trocknen | Sollwert 1, Istwert 1 und Istwert 2 (°C) |

**Betriebsschaltflächen** (mittlerer Abschnitt):

1. **Vorbereitung Start** — startet das Tankfüll- und Heizverfahren (siehe Kapitel 7.2 — Starten).
2. **Maschine Stop** — stoppt Förderband, Pumpen, Ventilatoren und alle Funktionen.
3. **Maschine Start** — startet den automatischen Prozess, nachdem die Vorbereitung abgeschlossen ist.

**Prozessfunktionswähler** (unten rechts): Umschalter Waschen, Spülen, Trocknen 1, Trocknen 2 und Abluft; der Prozess wird konfiguriert, indem die gewünschten Funktionen in die Stellung **grün** (aktiv) gebracht werden. Es gibt keinen manuellen Modus; die Funktionsauswahl erfolgt über diese Seite (siehe Kapitel 7.1 — Betriebsarten).

![HMI-Betriebsseite](../../assets/3.4/tr2.jpg)

---

## 3.4.4 Einstellungsseite

Die **Einstellungsseite** dient der Definition von Prozesssollwerten durch den Bediener. Änderungen auf dieser Seite werden ins SPS-Programm übertragen; es wird empfohlen, dass die Maschine stillgesetzt oder in der Vorbereitungsphase ist.

| Parameterblock | Eingestellter Wert |
|-----------------|-----------------|
| Waschtemperatur | Sollwert (°C) |
| Spültemperatur | Sollwert (°C) |
| Trocknen | Sollwert 1 (°C) |
| Ölskimmer | Laufzeit (min) und Wartezeit (min) |

Temperaturgrenzen sind aus Gründen der Prozesssicherheit und der Materialverträglichkeit der Teile innerhalb der Konstruktionsgrenzen der Maschine zu halten. Datum/Uhrzeit und Spracheinstellungen können ebenfalls über die HMI-Einstellungsinfrastruktur vorgenommen werden (siehe Kapitel 6.3).

Encoder-/Feedback- und Analogskalierungseinstellungen sind im SPS-Programm eingebettet; Änderungen dürfen nur durch den autorisierten Herstellerservice vorgenommen werden.

![HMI-Einstellungsseite](../../assets/3.4/tr3.jpg)

---

## 3.4.5 Manuelle Seite

Die **Manuelle Seite** besteht aus zwei Abschnitten: **Input-Beobachtung** (Eingangssignalüberwachung) und **Manuelle Steuerung** (Funktionsauslösung für Wartung/Test).

Auf dem Panel **Input-Beobachtung** werden die folgenden Signale in Echtzeit überwacht (rot/grüne Anzeige):

- Status des Not-Halt-Stromkreises
- Phasenfolgerelais
- RFID-Klappen-Switch
- Thermische Überlastzustände von Pumpe, Ventilator und Ölskimmer
- Fehlerstromschutz der Heizer (F2, F3, F4)
- Unter-/Ober-Füllstandssensoren von Wasch- und Spültank
- Auffangwannen-Sensor
- Stellungen der Füllventile und des Transfer- (Kaskade-) Ventils
- Produkt-verblieben-Sensor
- **Wasserstatus** und **Luftstatus** (Anschlussstatus — grün = OK)

Bei Installationstests wird erwartet, dass diese Anzeigen **grün** leuchten, nachdem Wasser- und Luftanschluss hergestellt sind (siehe Kapitel 5.5 — Pneumatischer Fülltest).

Am HMI ist **keine** Passwortstufe vorhanden; Betriebs-, Einstellungs-, Alarm- und Manuelle Seite sind ohne Passwort zugänglich. Schaltflächen der **Manuellen Steuerung** können Pumpen, Ventilatoren und Ventile einzeln betreiben. Der Arbeitgeber begrenzt den HMI-Zugang auf befugtes Wartungspersonal; unbefugte Nutzung ist verboten. Bei Eingriffen, die Energieisolation erfordern, ist **LOTO** anzuwenden (siehe Kapitel 2.4). Manuelle Schaltflächen: Waschpumpe, Spülpumpe, Trocknungsventilatoren 1–4, Abluft, Wasch-/Spülfüllventile, Kaskadenventil.

![HMI-Manuelle Seite](../../assets/3.4/tr4.jpg)

---

## 3.4.6 Alarmseite

Die **Alarmseite** listet aktive und historische Alarmaufzeichnungen im Tabellenformat. Tabellenspalten: **No.**, **Zeit**, **Datum**, **Text**.

Bei Entstehung eines Alarms zeigt das HMI auf dieser Seite einen Eintrag; gleichzeitig leuchtet die Signalleuchte **rot**. Der/die Linienverantwortliche(r) oder das Wartungspersonal liest den Alarmtext und bestimmt die Eingriffspriorität; detaillierte Fehlercode-Erläuterungen und Behebungsschritte stehen in **Kapitel 11** — Störungsbehebungstabelle.

Die Schaltfläche **Produkt entnommen Bestätigung** befindet sich in der unteren Ecke der Seite. Wenn am Auslaufförderband ein Teil erkannt wird (Error-461), stoppt die Maschine; nachdem das Teil vom Roboter entnommen wurde, drückt der/die Linienverantwortliche(r) oder das Wartungspersonal diese Schaltfläche, um den Betrieb fortzusetzen.

![HMI-Alarmseite](../../assets/3.4/tr5.jpg)

---

## 3.4.7 SPS- und Kommunikationsinfrastruktur

| Parameter | Wert |
|-----------|-------|
| SPS-Marke / Modell | SIEMENS SIMATIC S7-1200 |
| SPS-CPU | S7-1200 CPU 1215C DC/DC/DC (6ES7215-1AG40-0XB0) |
| I/O-Modul-Kurzfassung | 36 Eingänge / 24 Ausgänge |
| Feldbus / Protokoll | Profinet |

Die SPS verwaltet Prozesslogik, Sicherheitsverriegelungen (RFID, Not-Halt, Füllstand, thermisch) und den HMI-Datenaustausch. Die I/O-Liste wird nicht als separates Dokument geliefert; sie kann bei Bedarf beim Hersteller angefordert werden (siehe **Kapitel 13.1.3**).

**VORSICHT — Unbefugter Eingriff:** SPS-Programm, Antriebsparameter und eingebettete Encoder-/Feedback-Einstellungen dürfen nur durch den autorisierten Herstellerservice geändert werden. Unbefugte Softwareänderungen können Sicherheitsfunktionen außer Kraft setzen.

---

## 3.4.8 Betriebsarten und Start/Stop

| Parameter | Wert |
|-----------|-------|
| Moduswähler | Keiner — einziger automatischer Betrieb |
| Manueller Fahrmodus | Keiner (HMI-**Manuelle Seite** ist für Wartung/Test; ohne Passwort, unbefugte Nutzung verboten) |
| Step- / Einzelschrittmodus | Nicht vorhanden |
| Moduswechselbedingungen | Nicht anwendbar |
| Tipp- / Inching-Taster | Nicht vorhanden |
| Lage Start / Stop | HMI-Betriebsseite — digitale Schaltflächen |

**Automatischer Betrieb:** Auf der HMI-Betriebsseite werden Prozessfunktionen gewählt; nach Abschluss der Vorbereitung läuft die Maschine mit **Maschine Start** von selbst (siehe Kapitel 7.1).

**Wartung:** Es gibt keinen speziellen HMI-Modus für die Wartung. Vor der Wartung ist die Maschine stillzusetzen, der Hauptschalter auszuschalten und das **LOTO-Verfahren** anzuwenden (siehe Kapitel 2.4). Klappen dürfen nur nach Energieisolation geöffnet werden.

---

## 3.4.9 Not-Halt

An der Maschine befinden sich **4 Not-Halt-Taster** (Schrank, Einlauf rechts, Einlauf links, Auslauf links). Beim Drücken des Not-Halts stoppen alle Funktionen.

Reset-Verfahren, Wiederstartbedingungen nach Not-Halt und Bedienerpflichten stehen in **Kapitel 2.5** — Not-Halt-System; die Schritte werden in diesem Kapitel nicht wiederholt.

---

## 3.4.10 Signalleuchte (Signallampen)

| Farbe | Bedeutung | Interpretation durch den Bediener |
|------|-------|-----------------|
| Rot | Alarm | HMI-Alarmseite prüfen; Eingriff kann erforderlich sein (siehe Kapitel 11) |
| Gelb | Maschine betriebsbereit | Vorbereitung abgeschlossen; Start kann gegeben werden |
| Grün | Maschine läuft | Normalbetrieb läuft weiter |

Die Signalleuchte ermöglicht der Bedienerseite, den Linienstatus zu überwachen, ohne direkt auf die Maschine zu blicken. Die Farbcodierung ist mit industrieller Standardpraxis konform; im Alarmfall geben Leuchte und HMI gleichzeitig Information.

---

## 3.4.11 Rezept

| Funktion | Verhalten |
|-----------|----------|
| Rezept- / Programmaufzeichnung | Es gibt keine Rezeptgrenze |

Rezeptparameter (Temperatursollwerte, Prozess-Ein/Aus-Schritte) werden über die HMI-Einstellungs- und Betriebsseiten definiert. Kapazitäts- und produktbezogene Rezeptdetails werden vom Anwenderunternehmen festgelegt (siehe Kapitel 8.2).

---

Für elektrische Versorgungswerte siehe **Kapitel 3.3.3**; für Prozess-Start/Stop-Verfahren siehe **Kapitel 7**; für Alarmcodes siehe **Kapitel 11**.
