# 8.2 Spezifische Einrichtung und produktspezifische Konfiguration

Die Maschine besitzt **kein mechanisches Formatwechselverfahren** (**Siehe Kapitel 6.1.5**) und **keinen Rezeptspeicher** (kein HMI/keine SPS). Produkt- und Prozessunterschiede werden über drei Einstellungen geführt: **Förderergeschwindigkeit** (Potentiometer), **Thermostat-Sollwerte** (vier GEMO DTH2) und **Kombination der eingeschalteten Funktionen** (Schalter am Bedienfeld). Für jeden Produkttyp wird der konsistente Satz dieser drei Einstellungen vom Anwender schriftlich aufgezeichnet und als „Rezept" verwendet.

Die Rezeptnummerierung und die Zuordnung zu den Produkten werden **vom Anwender** festgelegt.

---

## 8.2.1 Konzept der Produktparameter

| Parameterbestandteil | Einstellort | Kapitel |
| :--- | :--- | :--- |
| Wasch-/Spülwassertemperatur | Thermostate TANK 1 / TANK 2 HEATER | 6.3.3, 3.4.4 |
| Trocknungslufttemperatur | Thermostate DRYING 1 / DRYING 2 HEATER | 6.3.3 |
| Förderergeschwindigkeit (Kontaktzeit) | Potentiometer — 20–60 Hz | 6.3.4 |
| Waschen, Spülen, Blower, Trocknen on/off | Schalter am Bedienfeld | 7.1.6 |
| Einsatz von Ölskimmer / Ölabscheider | Schalter am Bedienfeld | 3.1.5 |

Da die Einstellungen nicht in der Maschine gespeichert werden, werden die Werte beim Schichtwechsel oder beim Produktwechsel aus der Aufzeichnung abgelesen und manuell eingegeben; daher muss das Protokollformular zwingend an der Maschine verfügbar sein.

---

## 8.2.2 Verfahren zur Erstellung neuer Produktparameter

Bei der Inbetriebnahme eines neuen Werkstücktyps:

1. Die Linie leerfahren; den Schalter **CONVEYOR** auf OFF stellen (**Siehe Kapitel 7.3.1**).
2. An den Thermostaten die Ziel-Sollwerte eingeben (TANK 1, TANK 2, DRYING 1, DRYING 2 — **Siehe Kapitel 6.3.3**); die Wassertemperatur darf +70 °C nicht überschreiten.
3. Die für das Werkstück erforderlichen Prozessfunktionen festlegen (Waschen, Spülen, Blower, Trocknen); nicht benötigte Funktionen ausgeschaltet lassen.
4. Die Förderergeschwindigkeit als Startwert im mittleren Bereich (z. B. 40 Hz) einstellen.
5. Warten, bis die Tanks die Solltemperatur erreicht haben; die Funktionen in der Reihenfolge nach **Kapitel 7.2.2** einschalten.
6. Mit einem Musterwerkstück eine Testwäsche durchführen; am Ausgang das Kriterium für Reinigung und Trocknung beurteilen.
7. Ist das Ergebnis unzureichend, die Geschwindigkeit verringern oder die Temperatur erhöhen; tritt das Werkstück nass aus, prüfen, ob Blower/Trocknung eingeschaltet sind und die Trocknungstemperatur ausreicht. Den Test wiederholen.
8. Die freigegebene Geschwindigkeit (Hz), die Sollwerte und die Funktionskombination mit Produktname/-nummer in das Formular nach **Kapitel 8.2.3** eintragen.
9. Den Beladeabstand und die Zielstückzahl pro Stunde in die Tabelle nach **Kapitel 8.1.3** eintragen.

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
| Förderergeschwindigkeit (Hz) | | | |
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
| 3 | Förderergeschwindigkeit im Bereich 20–60 Hz auf den aufgezeichneten Wert eingestellt | ☐ |
| 4 | Prozessfunktionen korrekt on/off | ☐ |
| 5 | Testwäsche mit Musterwerkstück durchgeführt — Abnahmekriterium OK | ☐ |
| 6 | Ergebnis des Kapazitätstests in die Tabelle eingetragen (Kapitel 8.1.3) | ☐ |

**Datum:** _______________ **Geprüft von:** _______________

---

Zum Betrieb siehe **Kapitel 7**; zu den Kapazitätsgrenzen siehe **Kapitel 8.1**.
