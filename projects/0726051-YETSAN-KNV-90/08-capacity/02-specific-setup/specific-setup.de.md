# 8.2 Spezifische Einrichtung und produktspezifische Konfiguration

Die Maschine besitzt **kein mechanisches Formatwechselverfahren** (**Siehe Kapitel 6.1.5**) und **keinen Rezeptspeicher** (kein HMI/keine SPS). Produkt- und Prozessunterschiede werden über drei Einstellungen geführt: **Fördergeschwindigkeit** (Potentiometer), **Thermostat-Sollwerte** (vier GEMO DTH2) und **Kombination der eingeschalteten Funktionen** (Schalter am Bedienfeld). Für jeden Produkttyp wird der konsistente Satz dieser drei Einstellungen vom Anwender schriftlich aufgezeichnet und als „Rezept" verwendet.

Die Rezeptnummerierung und die Zuordnung zu den Produkten werden **vom Anwender** festgelegt.

---

## 8.2.1 Konzept der Produktparameter

| Parameterbestandteil | Einstellort | Kapitel |
| :--- | :--- | :--- |
| Wasch-/Spülwassertemperatur | Thermostate TANK 1 / TANK 2 HEATER | 6.3.3, 3.4.4 |
| Trocknungslufttemperatur | Thermostate DRYING 1 / DRYING 2 HEATER | 6.3.3 |
| Fördergeschwindigkeit (Kontaktzeit) | Potentiometer — 20–60 Hz | 6.3.4 |
| Waschen, Spülen, Blower, Trocknen on/off | Schalter am Bedienfeld | 7.1.6 |
| Einsatz von Ölskimmer / Ölabscheider | Schalter am Bedienfeld | 3.1.5 |

Da die Einstellungen nicht in der Maschine gespeichert werden, werden die Werte beim Schichtwechsel oder beim Produktwechsel aus der Aufzeichnung abgelesen und manuell eingegeben; daher muss das Protokollformular zwingend an der Maschine verfügbar sein.

---

## 8.2.2 Verfahren zur Erstellung neuer Produktparameter

Bei der Inbetriebnahme eines neuen Werkstücktyps:

1. Die Linie leerfahren.
2. Den Schalter **CONVEYOR** auf OFF stellen (**Siehe Kapitel 7.3.1**).
3. An den Thermostaten die Ziel-Sollwerte eingeben (TANK 1, TANK 2, DRYING 1, DRYING 2 — **Siehe Kapitel 6.3.3**); das Badwasser darf +70 °C und die Trocknungsluft die Temperaturbeständigkeit des Werkstückmaterials nicht überschreiten.
4. Die für das Werkstück erforderlichen Prozessfunktionen (Waschen, Spülen, Blower, Trocknen) festlegen; nicht benötigte Funktionen bleiben ausgeschaltet.
5. Die Fördergeschwindigkeit als Startwert im mittleren Bereich (z. B. 40 Hz) einstellen.
6. Warten, bis die Tanks die Solltemperatur erreicht haben.
7. Die Funktionen in der Einschaltreihenfolge einschalten (**Siehe Kapitel 7.2.2**).
8. Mit einem Musterwerkstück eine Testwäsche durchführen.
9. Am Ausgang das Kriterium für Reinigung und Trocknung beurteilen.
10. Ist das Reinigungsergebnis unzureichend, die Fördergeschwindigkeit verringern oder die Tank-Solltemperatur innerhalb der Grenze von +70 °C erhöhen.
11. Tritt das Werkstück nass aus, prüfen, ob Blower- und Trocknungsfunktionen eingeschaltet sind, und die Trocknungs-Sollwerte prüfen.
12. Die Schritte 8–11 wiederholen, bis das Kriterium erfüllt ist.
13. Die Zykluszeit bei der freigegebenen Geschwindigkeit messen (**Siehe Kapitel 8.1.1**).
14. Die freigegebene Geschwindigkeit (Hz / Potentiometerstellung), die Sollwerte und die Funktionskombination mit Produktname/-nummer in das Formular nach **Kapitel 8.2.3** eintragen.
15. Den Beladeabstand, die gemessene Zykluszeit und die Zielstückzahl pro Stunde in die Tabelle nach **Kapitel 8.1.3** eintragen.

**Erwartetes Ergebnis:** Das Werkstück erfüllt das Zielkriterium für Reinigung und Trocknung; die Zielstückzahl pro Stunde wird erreicht.

**Abweichung:** Erreicht die Heizung den Sollwert nicht, Füllstand, Fehlerstrom-Schutzschalter und Sicherungen prüfen (**Siehe Kapitel 11.3.3**); ist das Sprühen schwach, Filter und Ventile prüfen (**Siehe Kapitel 10**).

---

## 8.2.3 Produktspezifische Parameter

Die folgenden Felder werden **vom Anwender** ausgefüllt:

| Parameter | Wert |
| :--- | :--- |
| Parameter Produkt A | Wird vom Kunden eingestellt |
| Parameter Produkt B | Wird vom Kunden eingestellt |
| Parameter Produkt C | Wird vom Kunden eingestellt |

Vorlage für einen Beispiel-Parametersatz (vom Anwender auszufüllen):

| Parameter | Produkt A | Produkt B | Produkt C |
| :--- | :--- | :--- | :--- |
| Produkt-/Rezeptnr. | | | |
| TANK 1 Solltemperatur (°C) | | | |
| TANK 2 Solltemperatur (°C) | | | |
| DRYING 1 Solltemperatur (°C) | | | |
| DRYING 2 Solltemperatur (°C) | | | |
| Fördergeschwindigkeit (Hz / Potentiometerstellung) | | | |
| Gemessene Zykluszeit (s) | | | |
| Waschen / Spülen / Blower 1-2 / Trocknen 1-2 | on/off | on/off | on/off |
| Ölskimmer / Ölabscheider | on/off | on/off | on/off |
| Beladeabstand (Werkstücke/min) | | | |
| Zielstückzahl pro Stunde | | | |

---

## 8.2.4 Liste der Rezeptnummern

| Parameter | Wert |
| :--- | :--- |
| Liste der Rezeptnummern | Wird vom Kunden eingestellt (kein HMI/Rezept — Prozessschalter und Thermostat-Sollwerte) |

Die Rezeptnummerierung und die Zuordnung Produkt–Parameter sind vom Anwender festzulegen und in gedruckter Form an der Maschine bereitzuhalten.

---

## 8.2.5 Checkliste für die spezifische Einrichtung

| # | Kontrolle | Status |
| :---: | :--- | :---: |
| 1 | Zum Produkttyp passender Parametersatz definiert und aufgezeichnet | ☐ |
| 2 | Thermostat-Sollwerte auf die Zielwerte eingegeben | ☐ |
| 3 | Fördergeschwindigkeit im Bereich 20–60 Hz auf den aufgezeichneten Wert eingestellt | ☐ |
| 4 | Prozessfunktionen korrekt on/off | ☐ |
| 5 | Testwäsche mit Musterwerkstück durchgeführt — Abnahmekriterium OK | ☐ |
| 6 | Ergebnis des Kapazitätstests in die Tabelle eingetragen (Kapitel 8.1.3) | ☐ |

**Datum:** _______________ **Geprüft von:** _______________

---

Betrieb: **Siehe Kapitel 7**; Kapazitätsgrenzen: **Siehe Kapitel 8.1**.
