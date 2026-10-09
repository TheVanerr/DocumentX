# 5.5 Installationsabnahme und Prüfung

Die Prüfungen der Installationsabnahme werden nach Abschluss der Sicherheitsprüfungen in **Kapitel 5.4** durchgeführt. Bevor nicht alle Prüfungen **OK** sind, darf nicht in Betrieb gegangen werden. Da diese Maschine über kein HMI verfügt, erfolgt die Abnahme über die Leuchten am Schaltschrank, das Manometer, die Motordrehrichtung und physische Beobachtung. Die folgenden Checklisten werden für die Installationsabnahme verwendet.

---

## 5.5.1 Prüfung der mechanischen Installation

| # | Prüfung | Erwartetes Ergebnis | Status |
| :---: | :--- | :--- | :---: |
| 1 | Ist die Maschine nivelliert? | Ja — Stellfüße; in beiden Achsen | ☐ |
| 2 | Haben alle Füße Bodenkontakt? | Ja | ☐ |
| 3 | Schließen Tankdeckel und Kammerklappen ohne Kraftaufwand? | Ja — Schalter fluchtend | ☐ |
| 4 | Läuft der Drahtgurt des Förderers beim Drehen von Hand frei? | Ja — kein seitliches Schleifen | ☐ |
| 5 | Sind Schutzgitter und PVC-Vorhänge an ihrem Platz? | Ja | ☐ |
| 6 | Ist die Ölabscheidereinheit nivelliert und sind ihre Schläuche angeschlossen? | Ja | ☐ |

Die Prüfung erfolgt nach Abschluss der Nivellierung in **Kapitel 5.2.3**. Eine Checkliste für die mechanische Installationsprüfung ist in den DATA nicht definiert ([EKSİK]); die obige Liste enthält die Standardprüfungen des Maschinentyps.

---

## 5.5.2 Elektrische Inbetriebnahmeprüfung

| # | Prüfung | Erwartetes Ergebnis | Status |
| :---: | :--- | :--- | :---: |
| 1 | Gibt das Phasenüberwachungsrelais MKR-01 ein Ausgangssignal? | Ja | ☐ |
| 2 | Liegt an der Maschine Spannung an? (RESET-Leuchte leuchtet) | Ja | ☐ |
| 3 | Stoppt die Maschine bei Betätigung des Not-Halts? | Ja | ☐ |
| 4 | Stimmt die Drehrichtung von Pumpen, Ventilatoren und Blowern mit dem Motorpfeil überein? | Ja | ☐ |
| 5 | Leuchtet die Betriebsleuchte, wenn jeder Funktionsschalter auf ON gestellt wird? | Ja | ☐ |
| 6 | Ändert sich die Geschwindigkeit mit dem Potentiometer des Förderers? (20–60 Hz) | Ja | ☐ |

Die Phasenfolge muss in **Kapitel 5.3.6** geprüft worden sein.

---

## 5.5.3 Prüfung der Pneumatik- und Medienanschlüsse

| # | Prüfung | Erwartetes Ergebnis | Status |
| :---: | :--- | :--- | :---: |
| 1 | Zeigt das Manometer des Druckreglers 6 bar an? | Ja | ☐ |
| 2 | Gibt es Leckagen in der Druckluftleitung? | Nein | ☐ |
| 3 | Ölabscheiderschalter ON — läuft die Membranpumpe? | Ja | ☐ |
| 4 | Tanks gefüllt; sind die WASHING-LEVEL-Leuchten aus? | Ja | ☐ |
| 5 | Gibt es Leckagen an Tankunterseite, Pumpe und Rohranschlüssen? | Nein | ☐ |

Anschlusswerte: **6 bar** Druckluft, **1 bar** Wasser (**Siehe Kapitel 3.3.5**). Eine Definition der pneumatischen Befüllprüfung ist in den DATA nicht vorhanden ([EKSİK]); es werden die obigen Prüfungen angewendet.

---

## 5.5.4 Sicherheitsfunktionsprüfung

| # | Prüfung | Erwartetes Ergebnis | Status |
| :---: | :--- | :--- | :---: |
| 1 | Stoppen die 7 Not-Halt-Taster die Maschine? | Ja | ☐ |
| 2 | Stoppen die 7 Schalter der Wartungsklappen die Maschine? | Ja | ☐ |
| 3 | Sind Heizung/Pumpe bei leerem Tank verriegelt? | Ja | ☐ |
| 4 | Ist die Maschine betriebsbereit? | Ja — RESET-Leuchte leuchtet | ☐ |

Die detaillierten Prüfschritte sind in **Kapitel 5.4** angegeben.

---

## 5.5.5 Leerlauftest

| Parameter | Wert |
| :--- | :--- |
| Dauer des Leerlauftests | [EKSİK] min — in den DATA nicht definiert |

Der Leerlauftest bestätigt den Dauerbetrieb der Maschine ohne Werkstücke; er prüft Leckagen, das Auslösen von Schutzorganen, übermäßige Vibrationen, die Wirksamkeit der Abluft und das Zusammenwirken der Prozessfunktionen. Während des Tests bewegen sich Förderer, Pumpen, Blower und Ventilatoren; den Gefahrenbereich nicht betreten, geeignete PSA tragen (**Siehe Kapitel 2.6**).

**Voraussetzungen**

1. Die Prüfungen in Kapitel **5.5.1–5.5.4** müssen mit **OK** abgeschlossen sein.
2. In der Fördererlinie dürfen sich keine Werkstücke oder Gegenstände befinden, die sich verklemmen könnten.
3. Die Saug-/Druckventile der Pumpen müssen **geöffnet** sein.
4. Druckluft **6 bar**; Tanks gefüllt; RESET-Leuchte muss leuchten.
5. Die Thermostat-Sollwerte müssen eingegeben sein (**Siehe Kapitel 6.3.3**).

**Prüfverfahren**

1. Die Schalter **TANK 1 HEATER** und **TANK 2 HEATER** auf ON stellen; an den Thermostatanzeigen den Temperaturanstieg beobachten.
2. Die Schalter **TANK 1 PUMP** und **TANK 2 PUMP** auf ON stellen; prüfen, dass die Pumpen laufen, in den Kammern die Düsenbesprühung beginnt und an den Pumpen-/Filteranschlüssen keine Leckage auftritt.
3. Den Schalter **TANK 1 OIL SKIMMER** auf ON stellen; beobachten, dass sich die Scheibe des Ölskimmers dreht.
4. Die Schalter **BLOWER 1**, **BLOWER 2**, **DRYING 1 FAN**, **DRYING 2 FAN** auf ON stellen; anschließend die Schalter **DRYING 1 HEATER** und **DRYING 2 HEATER** auf ON stellen.
5. Den Schalter **CONVEYOR** auf ON stellen; die Geschwindigkeit mit dem Potentiometer im Bereich 20–60 Hz verändern und prüfen, dass der Drahtgurt gleichmäßig läuft.
6. Prüfen, dass der Abluftventilator läuft, der Dampf über den Kamin abgeführt wird und an den Kammerklappen kein Dampf austritt.
7. Die Maschine **ohne Werkstücke** für die festgelegte Dauer ([EKSİK]) betreiben.
8. Während des Tests die Betriebsleuchten, die WASHING-LEVEL- und die RESET-Leuchte beobachten; auf Leckagen, ungewöhnliche Geräusche, Vibrationen oder Gerüche prüfen.
9. Die Funktionen in der Reihenfolge gemäß **Kapitel 7.3.1** ausschalten.

| # | Abnahmekriterium | Status |
| :---: | :--- | :---: |
| 1 | Unterbrechungsfreier Leerlauf über die festgelegte Dauer abgeschlossen | ☐ OK / ☐ NOK |
| 2 | Kein Motorschutzschalter (MKŞ) und kein Fehlerstrom-Schutzschalter hat ausgelöst; RESET-Leuchte ist nicht erloschen | ☐ OK / ☐ NOK |
| 3 | Tanktemperaturen sind in Richtung Sollwert angestiegen; Thermostate haben beim Sollwert abgeschaltet | ☐ OK / ☐ NOK |
| 4 | Keine sichtbare Leckage und keine ungewöhnlichen Vibrationen | ☐ OK / ☐ NOK |
| 5 | Abluftabführung wirksam; kein Dampfaustritt aus den Kammern | ☐ OK / ☐ NOK |

**Abweichung:** Stoppt eine Funktion oder erlischt die RESET-Leuchte, die Maschine stoppen; siehe **Kapitel 11**. Nicht in Betrieb gehen, bevor der Test wiederholt wurde.

Ist der Leerlauftest erfolgreich, gilt die Maschine als **betriebsbereit** (**Kapitel 5.1 Schritt 10**).

---

## 5.5.6 Zusammenfassende Checkliste Installationsabnahme

| Kapitel | Prüfung | Abgeschlossen |
| :--- | :--- | :---: |
| 5.5.1 | Mechanik — Nivellierung, Klappen, Förderer | ☐ |
| 5.5.2 | Elektrik — Phasenüberwachung, Not-Halt, Drehrichtung, Betriebsleuchten | ☐ |
| 5.5.3 | Medien — 6 bar Druckluft, Tankbefüllung, Leckage | ☐ |
| 5.5.4 | Sicherheit — Not-Halt, Klappenschalter, Füllstandverriegelung | ☐ |
| 5.5.5 | Leerlauf | ☐ |

**Datum:** _______________ **Prüfer:** _______________ **Freigegeben von:** _______________

---

Betriebsverfahren siehe **Kapitel 7**.
