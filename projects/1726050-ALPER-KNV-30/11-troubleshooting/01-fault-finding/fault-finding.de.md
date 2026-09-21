# 11.1 Störungssuche

Bei der Störungsdiagnose wird zuerst der **aktive Alarmcode** am HMI gelesen; anschließend werden Prüf- und Lösungsschritte gemäß der Tabelle in diesem Abschnitt angewendet. Findet die Tabelle keine Lösung oder wiederholt sich die Störung, siehe den jeweiligen Unterabschnitt (**11.3**–**11.7**) und die Servicekriterien **Abschnitt 11.2.2**.

---

## 11.1.1 Allgemeine Diagnoseschritte

1. Ist die Maschine stillgesetzt, Signalleuchtenfarbe prüfen — **rot** Alarm, **gelb** bereit, **grün** in Betrieb (siehe **Abschnitt 3.4.10**).
2. HMI-**Alarmseite** öffnen; aktiven Alarm **Nr.**, **Text** und Zeitinformation lesen.
3. Den Code in der nachfolgenden SPS-Alarmtabelle **11.1.2** suchen.
4. Die Spalten **Problembeschreibung** und **Mögliche Ursache** lesen.
5. Die Schritte **Mögliche Lösung** anwenden; ist Alarm-Reset erforderlich, HMI- und Schrank-Resetverfahren anwenden.
6. Ist **Error-229** (Not-Halt) aktiv, zuerst das Resetverfahren **Abschnitt 2.5** anwenden; anschließend **Abschnitt 7.3.2**.
7. Besteht das Problem fort, Maschine stillsetzen, **LOTO** anwenden (**Abschnitt 2.4**) und zum jeweiligen Unterabschnitt wechseln.

**Fehlerverhalten:** Bei sicherheits- und prozesskritischen Fehlern bleibt die Maschine stehen (RFID-Abdeckung, Not-Halt, Niveau niedrig, Motorschutz-Trip). Bei **Error-235** (Luftdruck niedrig) kann die Maschine in Momenten ohne momentanen Pneumatikverbrauch kurze Zeit weiterlaufen (siehe **Abschnitt 7.4.4**).

**Erwartetes Ergebnis:** Der Alarm ist gelöscht; die Signalleuchte wechselt auf gelb/grün; die Maschine kann sicher in Betrieb genommen werden.

---

## 11.1.2 SPS-Alarmliste — Problem- und Lösungstabelle

Die folgende Tabelle ist die vollständige Liste der im SPS/HMI definierten **31 Alarm**-Einträge. Reihenfolge und Alarmtexte entsprechen der SPS-Definition. Die Spalten **Problembeschreibung**, **Mögliche Ursache** und **Mögliche Lösung** sind der Diagnoseleitfaden des Handbuchs — vor Ort verifizieren.

| # | Code | SPS-Alarmtext | Problembeschreibung | Mögliche Ursache | Mögliche Lösung | Qualifikation |
|:-:|-----|-----------------|------------------|-------------|-------------|:---------:|
| 1 | Error-410 | Phasenfolge fehlerhaft | Dreiphasenversorgung Phasenfolge falsch; Phasenfolgerelais hat ausgelöst. Motordrehrichtung kann falsch sein. | Vertauschte Phasenanschlüsse; Phasenausfall; Relaisfehler | Hauptschalter **OFF**; Phasenfolgerelais prüfen; ggf. **zwei Phasen tauschen** — siehe **5.3.4**, **11.3.1**. Phasen nicht bei eingeschalteter Energie tauschen. | Elektrik |
| 2 | Error-422 | Abdeckung nicht geschlossen | Wartungs-/Sicherheitsabdeckung wird nicht als geschlossen erkannt; RFID-Sensor bestätigt den Kreis nicht. Maschine startet nicht oder bleibt stehen. | Abdeckung offen; RFID-Tag-Ausrichtung fehlerhaft; Sensor-/Kabelfehler | Abdeckung vollständig schließen; RFID-Ausrichtung prüfen; **nicht** umgehen — siehe **2.4**, **11.7** | Wartung |
| 3 | Error-229 | Not-Halt aktiv | Not-Halt-Sicherheitskreis aktiv; Maschine aus Sicherheitsgründen verriegelt. | Not-Halt-Taster gedrückt; Sicherheitsrelais offen | Gefahr beseitigen; alle Not-Halt-Taster lösen; **2.5** Reset → **7.3.2** | Wartung |
| 4 | Error-100 | Waschpumpenmotor Fehler | Waschpumpe Motorschutzkreis Trip oder Antriebsfehler. Waschschritt läuft nicht. | Ventil vor der Pumpe geschlossen; Motorüberlast; Verklemmen; Thermik-Trip | Ventil vor der Pumpe öffnen (**7.2.5**); Motor-/Schutzprüfung mit LOTO — siehe **11.3.2** | Wartung / Elektrik |
| 5 | Error-101 | Spülpumpenmotor Fehler | Spülpumpe Motorschutz-Trip. Spülschritt läuft nicht. | Ventil vor der Pumpe geschlossen; Motorüberlast; Verklemmen; Thermik-Trip | Ventil vor der Pumpe öffnen; Motor-/Schutzprüfung mit LOTO — siehe **11.3.2** | Wartung / Elektrik |
| 6 | Error-111 | Trocknungsventilator Motor Fehler | 1. Trocknungsventilator Motorschutz-Trip. Trocknungsleistung sinkt. | Ventilator Verklemmen; Motorschutz-Trip; elektrischer Fehler | LOTO; Ventilatorfreiheit und Schutzkreis — siehe **11.3.2** | Wartung / Elektrik |
| 7 | Error-112 | Trocknungsventilator Motor 2 Fehler | 2. Trocknungsventilator Motorschutz-Trip. | Ventilator Verklemmen; Motorschutz-Trip | LOTO; Ventilator und Schutzkreis — siehe **11.3.2** | Wartung / Elektrik |
| 8 | Error-113 | Trocknungsventilator Motor 3 Fehler | 3. Trocknungsventilator Motorschutz-Trip. | Ventilator Verklemmen; Motorschutz-Trip | LOTO; Ventilator und Schutzkreis — siehe **11.3.2** | Wartung / Elektrik |
| 9 | Error-114 | Trocknungsventilator Motor 4 Fehler | 4. Trocknungsventilator Motorschutz-Trip. | Ventilator Verklemmen; Motorschutz-Trip | LOTO; Ventilator und Schutzkreis — siehe **11.3.2** | Wartung / Elektrik |
| 10 | Error-110 | Abluftventilator Motor Fehler | Abluftventilator Motorschutz-Trip. Dampf-/Feuchteabfuhr kann unzureichend sein. | Ventilator Verklemmen; Motorschutz-Trip | LOTO; Abluftventilatorprüfung — siehe **11.3.2** | Wartung / Elektrik |
| 11 | Error-130 | Ölskimmer Motor Fehler | Ölskimmer Motorschutz-Trip. Ölansammlung auf der Tankoberfläche kann zunehmen. | Motor Verklemmen; übermäßige Ölbelastung; Schutz-Trip | LOTO; Motor-/Getriebeprüfung; Ölfilmreinigung — siehe **10.1.4**, **11.3.2** | Wartung / Elektrik |
| 12 | Error-170 | Heizung Fehlerstrom F2 | Fehlerstromschutz F2 im Waschtank-Heizkreis ausgelöst. Heizung bleibt stehen. | Heizungsisolationsfehler; Feuchte; Heizungsschaden | LOTO; F2-Relais und Heizungsisolation — siehe **11.3.3**; wiederholter Trip → Service | Elektrik |
| 13 | Error-171 | Heizung Fehlerstrom F3 | Heizung Fehlerstromschutz F3 ausgelöst. | Heizungsisolationsfehler; Feuchte | LOTO; F3-Schutzkreis — siehe **11.3.3** | Elektrik |
| 14 | Error-172 | Heizung Fehlerstrom F4 | Heizung Fehlerstromschutz F4 ausgelöst. | Heizungsisolationsfehler; Feuchte | LOTO; F4-Schutzkreis — siehe **11.3.3** | Elektrik |
| 15 | Error-200 | Waschtank Wasserstand unter Pumpenniveau | Waschtank-Wasserstand unter Pumpenansaugniveau gefallen; Trockenlaufgefahr. | Leckage; unzureichende Füllung; Niveausensorfehler | Wasser-/Luftdruck; Füllventil; Niveausensor — siehe **11.5**, **11.7** | Wartung |
| 16 | Error-201 | Waschtank Wasserstand unzureichend | Waschtank unter Mindestniveau; Prozess kann nicht fortgesetzt werden. | Füllventil geschlossen; Luft-/Wasserdruck niedrig; Ventilfehler | Automatisches Füllwasserventil öffnen; **6 bar** Luft + **1 bar** Wasser verifizieren; Error-300/301 — **11.5.2** | Wartung |
| 17 | Error-150 | Waschtank Temperatur niedrig | Waschtank hat Solltemperatur nicht erreicht; Vorbereitung möglicherweise unvollständig. | Vorbereitung läuft noch; Heizung-Trip; Rezepttemperatur zu hoch | **Vorbereitung Start** abwarten (**7.2.2**); falls Error-170-Trip vorhanden, beseitigen; Rezeptprüfung (**6.3**) | Wartung |
| 18 | Error-202 | Spültank Wasserstand unter Pumpenniveau | Spültank-Wasserstand unter Pumpenansaugniveau. | Leckage; unzureichende Füllung; Niveausensorfehler | Wasser-/Luftdruck; Füllventil; Niveausensor — siehe **11.7** | Wartung |
| 19 | Error-203 | Spültank Wasserstand unzureichend | Spültank unter Mindestniveau. | Füllventil geschlossen; Druck niedrig; Ventilfehler | Automatisches Füllventil öffnen; Druckprüfung; Error-302/303 — **11.5.2** | Wartung |
| 20 | Error-151 | Spültank Temperatur niedrig | Spültank hat Solltemperatur nicht erreicht. | Vorbereitung läuft noch; Heizung-Trip; Rezepteinstellung | **Vorbereitung Start** abwarten; falls Error-171/172-Trip vorhanden, beseitigen; Rezeptprüfung | Wartung |
| 21 | Error-452 | Wasser in der Leckagewanne erkannt | Leckagewannensensor hat Wasser erkannt; Tank-/Dichtungsleckage oder Drainproblem möglich. | Tank-/Dichtungsleckage; Rohranschlussleckage; Wannendrain verstopft | Leckagequelle finden; Dichtungsprüfung; Wannendrain reinigen — siehe **11.7** | Wartung |
| 22 | Error-300 | Waschen Automatik-Füllventil konnte nicht öffnen | Automatisches Füllventil des Waschtanks hat nicht geöffnet; Tank füllt nicht. | Kein Luftdruck (**6 bar**); Spulenfehler; mechanisches Verklemmen | Luftdruck verifizieren; Ventilspule/-leitung — siehe **11.5.2** | Wartung |
| 23 | Error-301 | Waschen Automatik-Füllventil konnte nicht schließen | Waschfüllventil hat nicht geschlossen; Dauerfüllung oder Niveauregelung kann gestört sein. | Spulenfehler; mechanisches Verklemmen; Schmutz/Dichtung | LOTO; Ventilreinigung oder Wechsel — siehe **11.5.2** | Wartung |
| 24 | Error-302 | Spülen Automatik-Füllventil konnte nicht öffnen | Automatisches Füllventil des Spültanks hat nicht geöffnet. | Kein Luftdruck; Spulen-/mechanischer Fehler | **6 bar** Luft; Ventilprüfung — siehe **11.5.2** | Wartung |
| 25 | Error-303 | Spülen Automatik-Füllventil konnte nicht schließen | Spülfüllventil hat nicht geschlossen. | Spulenfehler; mechanisches Verklemmen | LOTO; Ventilprüfung — siehe **11.5.2** | Wartung |
| 26 | Error-461 | Produkt am Ausgangsförderer erkannt. Bestätigen Sie die Entnahme des Produkts, um den Betrieb fortzusetzen! | Teil am Ausgangsförderer erkannt; die Maschine setzt nicht fort, bis der Roboter es entnimmt. | Roboter hat das Teil nicht entnommen; Sensorerkennung; Teil auf dem Förderer verblieben | Roboter-Ausgangsverfahren prüfen; Teil entnehmen lassen; HMI **Produkt entnommen Bestätigung** (**3.4.6**) — Linienverantwortliche(r) / Wartung | Linienverantwortliche(r) / Wartung |
| 27 | Error-305 | Überleitventil konnte nicht schließen | Überleitventil zwischen den Tanks hat nicht geschlossen. | Spulenfehler; mechanisches Verklemmen | LOTO; Überleitventilprüfung — siehe **11.5.2** | Wartung |
| 28 | Error-236 | Eingangswasserdruck niedrig | Anlagen-Wassereingangsdruck unter Minimum (**1 bar**). Füllung und Prozess betroffen. | Wasserventil geschlossen; Anlagendruck niedrig | Wasserventil öffnen; Druck über **1 bar** bereitstellen; HMI Manuelle Seite (**3.4.5**) | Wartung |
| 29 | Error-235 | Eingangsluftdruck niedrig | Anlagen-Luftdruck unter Minimum (**6 bar**). Pneumatikventile arbeiten nicht. | Luftleitung geschlossen; Regler niedrig; Kompressor unzureichend | **6 bar** Luftanschluss; Regler; HMI Manuelle Seite (**6.5**) | Wartung |
| 30 | Error-460 | Servomotor Fehler | Förderer-Servomotor/-antrieb hat Fehler gemeldet; die Linie bleibt stehen. | Antriebsalarm; mechanisches Verklemmen; Encoder-/Kabelfehler | LOTO; Antriebsalarmcode lesen; mechanische Freiheit — **Service** (**11.2.2**) | Elektrik / Service |
| 31 | Error-304 | Überleitventil konnte nicht öffnen | Überleitventil zwischen den Tanks hat nicht geöffnet. | Luftdruck niedrig; Spulen-/mechanischer Fehler | **6 bar** Luft; Überleitventil — siehe **11.5.2** | Wartung |

> **Hinweis:** Diese Tabelle basiert auf der SPS-Definition. Lösungsschritte sind ein allgemeiner Diagnoseleitfaden; vor Eingriffen am Elektroschrank ist **LOTO** (**2.4**) zwingend.

---

## 11.1.3 Allgemeine Störungstabelle

Die folgende Tabelle ist der erste Diagnoseleitfaden für Symptome ohne Alarmcode oder mit unklaren Angaben.

| Symptom | Mögliche Ursache | Prüfung | Lösung |
|---------|-------------|---------|-------|
| Maschine startet nicht | Aktiver Alarm; Vorbereitung unvollständig; RFID-Abdeckung; Not-Halt | HMI-Alarmseite; Signalleuchte; Checkliste **7.2.5** | Aktiven Alarm beseitigen; Vorbereitung abschließen; Resetverfahren (**2.5**, **7.3.2**) |
| Vorbereitung schließt nicht ab / Wasser füllt nicht | Automatisches Füllventil geschlossen; Luft-/Wasserdruck niedrig; Ventilfehler | Wasserventil; **6 bar** Luft; HMI Manuelle Seite | Ventil öffnen; Druck korrigieren; Error-300/302 — siehe **11.5.2** |
| Temperatur steigt nicht | Heizung-Trip; Rezepttemperatur; Phasenfehler | Error-150/151/170–172; Vorbereitungsstatus | Fehlerstrom-Trip beseitigen; Rezeptprüfung (**6.3**, **8**); Phasenprüfung (**5.3.4**) |
| Pumpe läuft nicht, kein Alarm | Ventil vor der Pumpe geschlossen; Phasendrehrichtung vertauscht | Ventilstellung; Pumpendrehrichtung | Ventil öffnen; Phasenfolge — **5.3.4** |
| Wiederholte Filterverstopfung | Öl/Verschmutzung hoch; Filterintervall überschritten | Filterzustand; Prozesswasser | **10.1.3**, **10.1.4** Reinigung; Ölskimmerprüfung |
| Roboterlinie bleibt stehen, Maschine grün | Error-461; Roboterschnittstelle | Ausgangsförderer-Sensor; Roboterprogramm | Teil entnehmen lassen; HMI-Bestätigung — **3.4.6** |

---

Elektrikdetails **11.3**; Pneumatik **11.5**; Sensor **11.7**.
