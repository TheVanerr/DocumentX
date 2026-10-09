# 14.2 Glossar

Dieses Glossar definiert die in der gesamten Anleitung verwendeten Abkürzungen, die englischen Etiketten auf dem Bedienfeld und die maschinenspezifischen Begriffe. Sicherheits- und Verfahrensdetails sind in den jeweiligen Hauptkapiteln angegeben.

---

## 14.2.1 Abkürzungen

| Abkürzung | Erklärung |
| :--- | :--- |
| **BOM** | Bill of Materials — Ersatzteil-/Materialliste (**13.3.1**) |
| **CIP / COP** | Cleaning in Place / Cleaning out of Place — automatische Reinigung; an dieser Maschine **nicht vorhanden** |
| **HMI** | Human Machine Interface — Bedienerbildschirm; an dieser Maschine **nicht vorhanden** |
| **ICC** | Kurzschlussstrom — Anforderung an die Versorgungsleitung [EKSİK] (**3.3.3**) |
| **IP55** | Schutzart — gegen Staub und Spritzwasser |
| **KKD** | Persönliche Schutzausrüstung (PSA) (**2.6**) |
| **LOTO** | Lockout/Tagout — Energieisolierung sowie Verriegelung und Kennzeichnung (**2.4**) |
| **MKŞ** | Motorschutzschalter (türk. Abk.) — Schneider GV2ME; Q1–Q10 (**11.1.3**) |
| **PE** | Protective Earth — Schutzerdung (3P+N+**PE**) |
| **PLC** | Programmable Logic Controller — Automatisierungssteuerung; an dieser Maschine **nicht vorhanden** |
| **P&ID** | Piping and Instrumentation Diagram — Rohrleitungs- und Instrumentenfließschema |
| **RCCB** | Residual Current Circuit Breaker — Fehlerstrom-Schutzschalter; Schneider A9N19642 / A9N19643 (**11.3.3**) |
| **RFID** | Radio Frequency Identification — in der Anleitung verwendete allgemeine Bezeichnung für die Sicherheitsschalterkette der Klappen; an dieser Maschine magnetischer Schalter Omron F3STGRNLPU21M1J8 |
| **SWL** | Safe Working Load — sichere Tragfähigkeit des Gabelstaplers |
| **TMŞ** | Leistungsschalter (thermisch-magnetisch, türk. Abk.) — Hauptschalter Schneider CVS250F (**2.4**, **3.3.3**) |
| **VFD** | Variable Frequency Drive — Förderer-Frequenzumrichter Delta VFD004EL21W-1 (**3.4.7**) |
| **WEEE** | Waste Electrical and Electronic Equipment — Elektronikabfallvorschriften (**12.3**) |

---

## 14.2.2 Bedienfeld-Etiketten (Englisch → Deutsch)

| Etikett | Deutsch | Kapitel |
| :--- | :--- | :--- |
| **TANK 1 HEATER** | Heizung Waschtank (mit Thermostat) | 3.4.3 |
| **TANK 1 PUMP** | Waschpumpe | 3.4.3 |
| **TANK 1 OIL SKIMMER** | Ölskimmer Waschtank | 3.1.5 |
| **TANK 2 HEATER** | Heizung Spültank | 3.4.3 |
| **TANK 2 PUMP** | Spülpumpe | 3.4.3 |
| **BLOWER 1 / BLOWER 2** | Blowergruppen zum Abblasen des Wassers | 3.1.6 |
| **DRYING 1 FAN / DRYING 2 FAN** | Trocknungsventilatoren | 3.1.6 |
| **DRYING 1 HEATER / DRYING 2 HEATER** | Trocknungsheizungen (mit Thermostat) | 3.1.6 |
| **CONVEYOR** | Förderer (mit Geschwindigkeitspotentiometer) | 3.4.7 |
| **EMERGENCY STOP** | Not-Halt | 2.5 |
| **TANK 1 / TANK 2 WASHING LEVEL** | Warnleuchte Wasserstand im Tank unzureichend (rot) | 3.4.5 |
| **RESET** | Reset des Sicherheitskreises / Bereitschaftsleuchte (blau) | 2.5 |
| **AIR INLET / HAVA GİRİŞİ** | Druckluftanschluss (Maschinengehäuse) | 3.3.5 |
| **TAHLİYE** | Tank-Ablassventil | 10.1.5 |

---

## 14.2.3 Begriffe

| Begriff | Erklärung |
| :--- | :--- |
| **Not-Halt** | Physischer Sicherheitstaster; an der Maschine **7 Stück**; öffnet den Sicherheitskreis (**2.5**) |
| **Hauptschalter** | Drehgriff an der Schaltschranktür — TMŞ; Punkt für Energietrennung und LOTO (**2.4**) |
| **Wartungsklappe** | 7 Kammerklappen, die von Hand angehoben werden; mit magnetischem Sicherheitsschalter (**2.1.3**) |
| **Zuführrichtung** | Werkstückeinlauf — an dieser Maschine **linke** Seite |
| **Blower** | Motor, der Luft mit hoher Geschwindigkeit zum Abblasen des Wassers bläst (4 Stück, 4 kW); speist die Luftmesser-Rohre (**3.1.6**) |
| **Abführrichtung** | Werkstückauslauf — an dieser Maschine **rechte** Seite |
| **Zykluszeit** | Durchlaufzeit eines Werkstücks vom Einlauf bis zum Auslauf entlang der Linie; abhängig von der Fördergeschwindigkeit [EKSİK] (**3.3.2**) |
| **Saugfilter** | Gelochter Zylinder am Ende der Pumpensaugleitung im Tank; wöchentliche Reinigung (**10.1.4**) |
| **Sicherheitsrelais** | Omron G9SB — Relais, das die Not-Halt- und Klappenketten auswertet (**2.1.3**) |
| **Feinfilter (Beutelfilter)** | Feiner Filter im Gehäuse am Pumpenausgang; wöchentliche Reinigung/Wechsel (**10.1.4**) |
| **Kammer** | Geschlossener Bereich, in dem die Prozesse Waschen, Spülen und Trocknen stattfinden; mit PVC-Vorhang |
| **Interlock (Verriegelung)** | Hardwareseitige Verriegelung — Füllstand, Klappe, Not-Halt, Phase (**3.4.6**) |
| **Endgültige Außerbetriebnahme** | Außerbetriebsetzung, bei der die Maschine nicht wieder in Betrieb genommen wird (**12.2.1**) |
| **KNV 90 7500 2B** | Handelsbezeichnung / Modellvariante der Maschine (KNV-90) |
| **Förderer** | Getriebemotorisch angetriebener, frequenzumrichtergesteuerter Drahtgurtförderer mit Kette (**3.1.2**) |
| **Düse** | Sprühmundstück in der Kammer; 160 Stück (**13.3**) |
| **Bedienerseite** | Schaltschrank und Bedienfeld — an dieser Maschine **rechte** Seite (**3.5**) |
| **Vorfilter** | Filterkörbe in der Tankrücklaufleitung; **tägliche** Reinigung (**10.1.3**) |
| **Potentiometer** | Drehknopf zur Einstellung der Fördergeschwindigkeit — 20–60 Hz (**3.4.7**) |
| **Betriebsleuchte** | Weiße Betriebsanzeige neben dem Schalter — Ausgang aktiv (**3.4.3**) |
| **Reset** | Wiedereinschalten des Sicherheitskreises nach Not-Halt oder Klappenöffnung (**2.5**) |
| **Heizstab** | Elektrische Heizung — Tank 7 × 8 kW, Trocknung 2 × 12 kW (**3.3.4**) |
| **Schwimmer-Füllstandswächter** | Edelstahl-Füllstandselement mit Schwimmer im Tank (**11.7.2**) |
| **Füllstandsensor** | VEGASWING 51 Schwinggabel; speist die Füllstandverriegelung (**11.7.2**) |
| **Leckagewanne** | Auffangbereich für Wasserleckagen unter der Maschine (**11.7.4**) |
| **TANK 1 / TANK 2** | Waschtank / Spültank |
| **Drahtgurt** | Transportfläche des Förderers; Edelstahl, Verschleißteil (**13.3**) |
| **Thermostat** | GEMO DTH2 — Temperatursollwert und Abschaltung der Heizung (**3.4.4**) |
| **Drehmomentbegrenzer** | Rutschkupplung am Förderergetriebe, die bei Überlast durchrutscht (**3.1.2**) |
| **Ölabscheidereinheit** | Separater Schrank; trennt ölhaltiges Wasser mit einer druckluftbetriebenen Membranpumpe (**3.1.5**) |
| **Ölskimmer** | Scheibeneinheit, die das Oberflächenöl von TANK 1 aufnimmt (**3.1.5**) |
