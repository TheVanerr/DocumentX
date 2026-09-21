# 7.4 Betriebssequenz

Die automatische Betriebssequenz definiert den Durchlauf der Teile auf dem Förderband durch die Prozesse **Waschen → Spülen → Trocknen**. Die Maschine läuft **vollautomatisch**; die SPS koordiniert Pumpen, Lüfter und Förderband gemäß den gewählten HMI-Funktionen.

Die Zuführung ist **links**, die Abführung **rechts**. In diesem Projekt erfolgen Einlauf und Auslauf durch **Roboter**; Roboterverfahren gehören zur Kundenlinie.

---

## 7.4.1 Automatikzyklus — allgemeiner Ablauf

| Schritt | Beschreibung |
|------|----------|
| 1 | Auf der HMI-Betriebsseite werden Waschen, Spülen, Trocknen 1, Trocknen 2, Abluft **ein/aus** eingestellt |
| 2 | Nach abgeschlossener Vorbereitung wird **Machine Start** gegeben |
| 3 | Der Roboter legt das Teil auf das Förderband (Einlauf — Kundenlinie) |
| 4 | Das Teil durchläuft das **Waschbad** (wenn Waschen aktiv) |
| 5 | Das Teil durchläuft das **Spülbad** (wenn Spülen aktiv) |
| 6 | Das Teil durchläuft die **Trocknungszone** (wenn Trocknen 1/2 aktiv) |
| 7 | Das Teil erreicht den Auslauf; der Roboter entnimmt das Teil (Auslauf — Kundenlinie) |

Teile laufen nach dem Prinzip des kontinuierlichen Flusses entlang der Förderbandlinie; die Linie ist für **24/7**-Betrieb mit Roboterintegration ausgelegt.

![Förderband-Teilefluss](../../assets/7.4/1.png)

---

## 7.4.2 Zykluszeit und Kapazität

| Parameter | Wert | Bedeutung |
|-----------|-------|--------|
| Teile-Durchlaufzeit — nominal | **900 s** (15 min) | Zeit, die ein Teil für die Strecke Waschen → Spülen → Trocknen benötigt |
| Mindestkapazitätsreferenz | **730 Stk./h** | Linien-Throughput bei **mehreren Teilen gleichzeitig** auf dem Förderband (siehe **Kapitel 3.3.2**) |
| Nominale Kapazität | Wird vom Anwenderunternehmen festgelegt | |

**900 s** ist nicht die Roboter-Zykluszeit. Der Robotereinlauf/-auslauf-Zyklus gehört zur Kundenlinie und muss kurz genug sein, um mit 730 Stk./h kompatibel zu sein. 900 s ist die Verweilzeit eines einzelnen Teils im Prozesstunnel.

Kapazitäts- und Rezeptdetails sind in **Kapitel 8** erläutert.

---

## 7.4.3 Produkteinlauf und -auslauf — Roboterintegration

| Parameter | Wert |
|-----------|-------|
| Einlauf | Der Roboter legt das Teil von **links** auf das Förderband |
| Auslauf | Der Roboter entnimmt das Teil von **rechts** |
| Einlauf-/Auslaufverfahren | **Gehört zur Kundenlinie** |
| Error-461-Bestätigung | Linienverantwortliche(r) oder Wartung — HMI **Produkt entnommen Bestätigung** |

Die Maschinen-SPS überwacht den Auslaufzustand mit dem **Produkt-geblieben-Sensor** und zugehörigen Verriegelungen. Wird am Auslaufförderband ein Teil erkannt und der Roboter entnimmt es nicht, kann die Maschine stoppen (Error-461); nach Entnahme des Teils setzt der/die Linienverantwortliche oder das Wartungspersonal den Betrieb fort, indem die Taste **Produkt entnommen Bestätigung** auf der HMI-Alarmseite gedrückt wird (siehe **Kapitel 3.4.6**).

---

## 7.4.4 Prozessfunktionen — Verhalten in der Sequenz

| Funktion | Rolle in der Sequenz |
|-----------|-------------|
| Waschen | Waschpumpe, Heizung, Ölskimmer (gemäß eingestellten Zeiten) |
| Spülen | Spülpumpe und Heizung |
| Trocknen 1 / 2 | Trocknungslüftergruppen — unabhängig ein/aus |
| Abluft | Feuchteabfuhr aus der Trocknungszone |

Bei ausgeschalteter Funktion wird der betreffende Prozessschritt übersprungen oder bleibt passiv; die linientaugliche Kombination wird durch Bediener-/HMI-Konfiguration festgelegt.

---

## 7.4.5 Maschinenverhalten bei Störung

| Zustand | Maschinenverhalten |
|-------|------------------|
| Betriebsbeeinflussende Störung (RFID-Abdeckung, Not-Halt, kritischer Füllstand usw.) | Die Maschine **stoppt** |
| Error-235 — Eingangsluftdruck niedrig | Besteht kein momentaner Luftbedarf wie ein Füllventil, kann die Maschine kurz **weiterlaufen**; die Luftleitung während des Betriebs **abzubauen ist verboten** |
| Alarm | HMI-Alarmseite + Signalleuchte **rot** |

Die Störungsbehebung ist in **Kapitel 11** definiert. Bei Alarm keinen Start geben.

**VORSICHT — Abdeckung offen:** Bei Auslösung des RFID-Sensors stoppt die Maschine; keinen Start geben, bis die Abdeckung geschlossen und Reset angewendet ist.

---

Für den Start siehe **Kapitel 7.2**; für die Störungstabelle siehe **Kapitel 11.1.2**.
