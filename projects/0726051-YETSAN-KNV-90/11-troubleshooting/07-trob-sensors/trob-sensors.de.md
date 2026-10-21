# 11.7 Sensorstörungen

Die Maschine verfügt über Sicherheitssensoren (magnetische Schalter der Wartungsklappen) und Prozesssensoren (Tank-Füllstandsensoren, Schwimmer-Füllstandswächter, Thermoelemente). Da kein HMI vorhanden ist, wird der Sensorstatus nicht direkt überwacht; eine Sensorstörung zeigt sich am Verhalten der betroffenen Funktion (RESET nicht möglich, Füllstandleuchte falsch, Temperaturanzeige unplausibel).

---

## 11.7.1 Magnetische Schalter der Wartungsklappen — RESET nicht möglich

| Parameter | Wert |
| :--- | :--- |
| Schalter | Omron **F3STGRNLPU21M1J8** magnetischer Türschalter — 7 Wartungsklappen, Reihenschaltung |
| Sicherheitsrelais | Omron **G9SB2002AACDC241** (Klappenkette) |
| Symptom | RESET-Leuchte leuchtet nicht, obwohl alle Klappen geschlossen erscheinen; Maschine läuft nicht |

Der Schalter reagiert empfindlich auf die Ausrichtung zwischen dem Magneten an der Klappe und dem Sensor. Sitzt die Klappe nicht vollständig, ist der Magnet verrutscht oder befinden sich Schmutz/Metallspäne auf der Schalterfläche, bleibt die Kette offen. Da die Schalter in Reihe geschaltet sind, sperrt eine einzelne Klappe die gesamte Maschine.

**WARNUNG — Unwirksame Sicherheitsfunktion:** Ein überbrückter oder mit einem Magneten getäuschter Klappenschalter lässt den Betrieb der Maschine bei offener Klappe zu; Verletzungen durch Erfassen am laufenden Förderer und durch heißen Sprühstrahl sind möglich. Schalter nicht überbrücken und nicht mit einem Magneten täuschen (**Siehe Kapitel 6.2.1**).

**Diagnoseverfahren**

1. Prüfen, dass alle 7 Not-Halt-Taster entriegelt sind (**Siehe Kapitel 2.5**).
2. Jede der 7 Wartungsklappen öffnen und ausgerichtet wieder schließen; nach jedem Schließen RESET versuchen.
3. Flächen von Klappenschalter und Magnet mit einem trockenen Tuch reinigen; auf mechanische Beschädigung oder lose Befestigung prüfen.
4. Ist RESET weiterhin nicht möglich, liest die Elektrofachkraft die Eingangs-LEDs des Sicherheitsrelais G9SB ab (gemäß Relaisetikett) und ermittelt, welcher Eingang offen ist. Die LEDs werden unter Spannung abgelesen.
5. LOTO anwenden (**Siehe Kapitel 2.4**); Schaltschranktür öffnen.
6. Kabelanschlüsse und Klemmen der Schalterkette prüfen; defekten Schalter durch den Originaltyp ersetzen (10 07147 — **Siehe Kapitel 13.3**).
7. Schaltschranktür schließen und LOTO aufheben.
8. Den Klappentest durchführen (**Siehe Kapitel 5.4.2**).

---

## 11.7.2 Tank-Füllstandsensoren und Schwimmer-Füllstandswächter

| Parameter | Wert |
| :--- | :--- |
| Füllstandsensor | **VEGASWING 51** Schwinggabel (2 Stück — Tank 1, Tank 2) |
| Schwimmer-Füllstandswächter | Edelstahl-Schwimmer-Füllstandswächter (10 00296) |
| Symptom | WASHING-LEVEL-Leuchte leuchtet bei vollem Tank; oder leuchtet bei leerem Tank nicht |

**WARNUNG — Überhitzung und Verbrennung:** Leuchtet die WASHING-LEVEL-Leuchte bei leerem Tank nicht, ist die Füllstandverriegelung unwirksam; ein im leeren Tank betriebener Heizstab überhitzt, es besteht Brand- und Verbrennungsgefahr. In diesem Fall den HEATER-Schalter des betreffenden Tanks sofort auf OFF stellen; die Heizung bis zur Behebung der Störung nicht betreiben.

**Diagnoseverfahren**

1. Die Schalter HEATER und PUMP des betreffenden Tanks auf OFF stellen.
2. LOTO anwenden (**Siehe Kapitel 2.4**).
3. Tankdeckel öffnen; den tatsächlichen Wasserstand per Sichtprüfung kontrollieren.
4. **Tank voll, Leuchte an:** Auf der Gabel des Sensors kann sich eine Öl-/Schmutzschicht oder ein Fremdkörper befinden; Sensorgabel reinigen (monatlicher Wartungspunkt — **Siehe Kapitel 9.1.3**). Prüfen, dass sich der Schwimmer frei bewegt.
5. **Tank leer, Leuchte aus:** Sensor- oder Schaltkreisstörung; Sensorausgang und Kabel prüfen; defekten Sensor ersetzen (07 16791).
6. Sensorkabelanschluss und Klemme im Schaltschrank prüfen (Schaltplan — **Siehe Kapitel 13.1**).
7. Tankdeckel schließen und LOTO aufheben.
8. Den Test der Füllstandverriegelung durchführen (**Siehe Kapitel 5.4.4**).

![Tankinneres — Schwimmer-Füllstandswächter](../../assets/11.7/seviye-samandira.jpg)

---

## 11.7.3 Thermoelemente und Thermostate

| Parameter | Wert |
| :--- | :--- |
| Thermoelement | ETB30F06-5Ç / ETB30F06-4Ç (2 + 2) |
| Thermostat | GEMO DTH2 (4 Stück) |
| Symptom | Unplausible/feststehende Anzeige auf dem Thermostatdisplay, Sensorfehleranzeige, Temperaturregelung gestört |

1. Die Anzeige auf dem Thermostatdisplay mit der mit einem externen Thermometer gemessenen Tankwassertemperatur vergleichen.
2. Bei fehlender Anzeige oder Fehlercode LOTO anwenden (**Siehe Kapitel 2.4**) und den Anschluss des Thermoelements (Polarität, Leitungsbruch) prüfen.
3. Defektes Thermoelement ersetzen (10 02976 / 10 02634); für die Montage ist gegebenenfalls der Thermostatadapter-Komplettsatz (07 00669) erforderlich.
4. Bei Verdacht auf Thermostatstörung (kein Ausgang / schaltet nicht ab) das Verfahren für Störung 5 durchführen (**Siehe Kapitel 11.3.3**).

---

## 11.7.4 Liste der kritischen Sensoren

| Funktion | Typ / Modell | Einbauort | Symptom |
| :--- | :--- | :--- | :--- |
| Klappensicherheit | Omron F3STGRNLPU21M1J8 (7 Stk.) | Wartungsklappen | RESET nicht möglich |
| Tankfüllstand | VEGASWING 51 Schwinggabel (2 Stk.) + Edelstahl-Schwimmer-Füllstandswächter | Tank 1, Tank 2 | WASHING-LEVEL-Leuchte |
| Temperatur | Thermoelement ETB30F06-5Ç / -4Ç (2+2) | Tank 1, Tank 2, Trocknung 1, Trocknung 2 | Thermostatanzeige |

Sensor-LED / Statusanzeige: kein HMI; der Füllstandstatus wird über die roten Leuchten TANK 1/2 WASHING LEVEL, der Status des Sicherheitskreises über die RESET-Leuchte überwacht. Bestellnummern der Ersatzteile: **Siehe Kapitel 13.3**. Kabelfarbcode und Anschlussdetails sind im **Schaltplan** angegeben (**Siehe Kapitel 13.1**).
