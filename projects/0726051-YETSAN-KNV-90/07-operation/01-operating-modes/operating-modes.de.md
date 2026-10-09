# 7.1 Betriebsarten

Die KNV 90 7500 2B besitzt **eine einzige Betriebsweise**: Jede Prozesseinheit wird über die Funktionsschalter am Bedienfeld unabhängig ein- und ausgeschaltet. Ein separater Wahlschalter für Automatik-, Hand-, Schritt- oder Wartungsbetrieb ist **nicht vorhanden**; Bedingungen für einen Betriebsartenwechsel sind nicht definiert. In diesem Kapitel werden die Betriebsarten-Überschriften der Handbuchvorlage auf die Maschine bezogen erläutert.

Daraus folgt: Die Maschine bereitet sich nicht mit einem einzelnen Startbefehl selbsttätig vor und läuft nicht von selbst an. Der Bediener befüllt die Tanks, schaltet die Heizungen ein, schaltet nach dem Aufheizen des Wassers die Pumpen, die benötigten Blower-/Trocknungsfunktionen und zuletzt den Förderer ein (**Siehe Kapitel 7.2**). Die Verriegelungen (Tankfüllstand, Klappensicherheit, Not-Halt, Phasenüberwachung) sind hardwareseitig immer aktiv und unterbrechen den Ausgang unabhängig von der Schalterstellung (**Siehe Kapitel 3.4.6**).

---

## 7.1.1 Handbetrieb — die einzige Betriebsweise der Maschine

| Parameter | Wert |
| :--- | :--- |
| Handbetrieb | **Einzige Betriebsweise der Maschine** — keine zentrale Automatiksequenz |

Jede Funktion am Bedienfeld wird über einen eigenen Ein-/Aus-Schalter geführt. Wird der Schalter in Stellung ON gebracht, zieht das zugehörige Schütz an und die Betriebsleuchte leuchtet; in Stellung OFF wird der Ausgang unterbrochen. Die Funktionen sind voneinander unabhängig; aus Gründen der Prozesslogik und des Anlagenschutzes wird jedoch die Einschaltreihenfolge nach **Kapitel 7.2.2** empfohlen.

---

## 7.1.2 Automatikbetrieb

| Parameter | Wert |
| :--- | :--- |
| Automatikbetrieb | **Nicht vorhanden** — die Linie läuft nicht mit einem einzelnen Start automatisch |

Da die Maschine keine SPS besitzt, gibt es weder eine automatische Vorbereitung (Befüllung + Aufheizen) noch eine Automatiksequenz. Die Tankbefüllung erfolgt manuell; das Aufheizen beginnt, wenn der Bediener den Heizungsschalter einschaltet, und wird beim Thermostat-Sollwert selbsttätig unterbrochen. Dieses „halbautomatische" Verhalten gilt ausschließlich für die Temperaturregelung.

---

## 7.1.3 Wartungs-/Einrichtbetrieb

| Parameter | Wert |
| :--- | :--- |
| Wartungs-/Einrichtbetrieb | **Nicht vorhanden** — zur Wartung wird der Hauptschalter ausgeschaltet und LOTO angewendet (**Siehe Kapitel 2.4**) |

Die Wartungsklappen werden nur im sicheren Zustand (Hauptschalter OFF, LOTO angewendet) geöffnet. Die Klappenschalter werden für Wartungsarbeiten nicht überbrückt. Für den Testlauf einer einzelnen Funktion (z. B. nur Pumpe) ist keine eigene Betriebsart erforderlich; der betreffende Schalter wird bei leuchtender RESET-Leuchte eingeschaltet.

---

## 7.1.4 Schritt-/Einzelschrittbetrieb

| Parameter | Wert |
| :--- | :--- |
| Schritt-/Einzelschrittbetrieb | **Nicht vorhanden** |

---

## 7.1.5 Bedingungen für den Betriebsartenwechsel

| Parameter | Wert |
| :--- | :--- |
| Bedingungen für den Betriebsartenwechsel | **Nicht anwendbar** — der Bediener schaltet die gewünschten Funktionen unter Beachtung der Verriegelungen unabhängig ein/aus |

---

## 7.1.6 Übersicht der Funktionsschalter

| Schalter | Funktion | Hinweis für den Bediener |
| :--- | :--- | :--- |
| TANK 1 HEATER | Heizung Waschtank (thermostatgeregelt) | Tank muss Wasser enthalten; Aufheizzeit abhängig von der Wassermenge |
| TANK 1 PUMP | Waschpumpe — Düsen der Waschkammer | Tank muss Wasser enthalten; Pumpenventile offen |
| TANK 1 OIL SKIMMER | Ölskimmer | Ölabnahme während oder nach dem Waschen |
| TANK 2 HEATER | Heizung Spültank | Tank muss Wasser enthalten |
| TANK 2 PUMP | Spülpumpe — Düsen der Spülkammer | Tank muss Wasser enthalten |
| BLOWER 1 / BLOWER 2 | Blower-Gruppen zum Wasserabblasen | Einschalten, wenn das Werkstück getrocknet werden soll |
| DRYING 1 FAN / DRYING 2 FAN | Trocknungsventilatoren | Vor den Trocknungsheizungen einschalten |
| DRYING 1 HEATER / DRYING 2 HEATER | Trocknungsheizungen (thermostatgeregelt) | Nur bei eingeschaltetem zugehörigem Ventilator einschalten |
| Schalter ohne Beschriftung | Ölabscheidereinheit (Membranpumpe) | Druckluft 6 bar muss angeschlossen sein |
| CONVEYOR | Förderer — Geschwindigkeit über Potentiometer (20–60 Hz) | Zuletzt einschalten; Linie leer und RESET-Leuchte leuchtet |

Die Funktionen können je nach Prozessbedarf unabhängig ein- und ausgeschaltet werden; welche Kombination verwendet wird, hängt von der Prozessauslegung des Anwenders ab (**Siehe Kapitel 8.2**). Die Thermostat-Sollwerte sind in **Kapitel 6.3.3** festgelegt.

---

Zum Einschaltverfahren siehe **Kapitel 7.2**.
