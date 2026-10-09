# 5.4 Prüfung der Sicherheitssysteme

Nach der Installation müssen die Sicherheitsfunktionen vor dem Übergang in den Betrieb geprüft werden. Die Maschine verfügt über **7 Not-Halt-Taster**, in Reihe geschaltete magnetische Sicherheitsschalter von Omron an **7 Wartungsklappen** und zwei Sicherheitsrelais Omron G9SB; **ein Lichtvorhang ist nicht vorhanden**. Sicherheitskategorie [EKSİK] — anhand des Typenschilds / der CE-Dokumentation zu verifizieren.

Die Positionen der Not-Halt-Taster, das Reset-Verfahren und das Verhalten nach einem Not-Halt sind in **Kapitel 2.5** angegeben; in diesem Kapitel werden nur die **Prüfschritte bei der Installation** definiert. Das LOTO-Verfahren wird bei Wartungseingriffen gemäß **Kapitel 2.4** angewendet.

Da diese Maschine über kein HMI verfügt, wird das Prüfergebnis durch das **Erlöschen der RESET-Leuchte** und das Stoppen der laufenden Funktion bestätigt. Prüfintervall der Not-Halt-Funktionsprüfung: **einmal monatlich** (**Siehe Kapitel 6.2.3**); Kurzprüfung der Klappenschalter **wöchentlich** (**Siehe Kapitel 9.1.3**).

---

## 5.4.1 Not-Halt-Prüfung

Die Maschine verfügt über **7** Not-Halt-Taster (**Siehe Kapitel 2.5**):

| # | Position |
| :---: | :--- |
| 1 | Bedienfeld (EMERGENCY STOP) |
| 2 | Förderereingang — rechts |
| 3 | Förderereingang — links |
| 4 | Fördererausgang — rechts |
| 5 | Fördererausgang — links |
| 6 | Mittelbereich — rechts |
| 7 | Mittelbereich — links |

**Prüfverfahren**

Für jeden Not-Halt-Taster einzeln:

1. Sicherstellen, dass der Gefahrenbereich frei ist; niemand darf den Eingang/Ausgang des Förderers betreten.
2. Bei leuchtender RESET-Leuchte mindestens eine Funktion (z. B. CONVEYOR oder DRYING 1 FAN) auf ON stellen; das Aufleuchten der Betriebsleuchte beobachten.
3. Den betreffenden Not-Halt-Taster betätigen.
4. Sicherstellen, dass die laufende Funktion **stoppt** und die Betriebsleuchte sowie die **RESET-Leuchte erlöschen**.
5. Sicherstellen, dass die Funktion bei Schalter in Stellung ON **nicht selbsttätig wieder anläuft**.
6. Den Funktionsschalter auf OFF stellen; den Not-Halt-Pilztaster entriegeln; **RESET** drücken, bis die Leuchte aufleuchtet (**Siehe Kapitel 2.5**).
7. Vor der Prüfung des nächsten Tasters die Maschine in den Bereitschaftszustand bringen.

| Prüfung | Erwartetes Ergebnis |
| :--- | :--- |
| Stoppt die Maschine bei Betätigung des Not-Halts? | Ja — alle Ausgänge werden abgeschaltet, RESET-Leuchte erlischt |
| Läuft die Maschine nach dem Entriegeln des Not-Halts selbsttätig an? | Nein — Bereitschaft nur über RESET |

![Not-Halt — Eingangsseite des Förderers](../../assets/2.5/acil-stop-giris.jpg)

---

## 5.4.2 Prüfung der Sicherheitsschalter an den Wartungsklappen

| Parameter | Wert |
| :--- | :--- |
| Schaltertyp | Omron F3STGRNLPU21M1J8 magnetischer Türschalter |
| Anzahl Klappen | 7 — Reihenschaltung |
| Sicherheitsrelais | Omron G9SB2002AACDC241 |

Dieses Unterkapitel ist eine **Funktionsprüfung**, kein Wartungszugang. Vor dem Öffnen einer Klappe zu Wartungs-/Reinigungszwecken ist LOTO gemäß **Kapitel 2.4** zwingend erforderlich.

**Prüfverfahren**

Für jede Wartungsklappe einzeln:

1. Sicherstellen, dass der Gefahrenbereich frei ist; beim Öffnen der Klappe nicht nach beweglichen Teilen greifen.
2. Bei leuchtender RESET-Leuchte eine Funktion (z. B. DRYING 1 FAN) auf ON stellen.
3. Die zu prüfende Wartungsklappe **nur zur Auslösung der Erkennung** teilweise anheben.
4. Sicherstellen, dass die Funktion **stoppt** und die RESET-Leuchte **erlischt**.
5. Die Klappe schließen; die Ausrichtung Schalter–Magnet prüfen; RESET drücken; das Aufleuchten der Leuchte bestätigen.
6. Die Funktion auf OFF stellen; zur nächsten Klappe übergehen.

| Prüfung | Erwartetes Ergebnis |
| :--- | :--- |
| Stoppt die Maschine beim Öffnen der Klappe? | Ja — für jede der 7 Klappen |
| Wird die Maschine nach dem Schließen der Klappe mit RESET bereit? | Ja |

Die Klappenschalter werden **nicht überbrückt**; auf den Schalter dürfen kein Magnet und kein Fremdkörper gelegt werden. Bei nicht bestandener Prüfung nicht in Betrieb gehen.

![Wartungsklappe — wird zur Prüfung teilweise angehoben](../../assets/2.4/bakim-kapagi-acma.jpg)

---

## 5.4.3 Phasenüberwachung und elektrische Sicherheitsprüfung

| # | Prüfung | Erwartetes Ergebnis |
| :---: | :--- | :--- |
| 1 | Gibt das Phasenüberwachungsrelais MKR-01 ein Ausgangssignal? | Ja |
| 2 | Liegt an der Maschine Spannung an? (RESET-Leuchte leuchtet) | Ja |
| 3 | Stoppt die Maschine bei Betätigung des Not-Halts? | Ja |
| 4 | Sind die Drehrichtungen von Pumpen, Ventilatoren und Blowern korrekt? | Ja |
| 5 | Wurde das Auslösen der Fehlerstrom-Schutzschalter über den TEST-Taster bestätigt? (Elektrofachkraft, Reset unter LOTO) | Ja |

---

## 5.4.4 Prüfung der Tank-Füllstandverriegelung

Die Füllstandverriegelung verhindert den Betrieb der Heizstäbe ohne Wasser und den Trockenlauf der Pumpen.

1. Bei leerem Tank 1, Hauptschalter ON und leuchtender RESET-Leuchte sicherstellen, dass die rote Leuchte **TANK 1 WASHING LEVEL** leuchtet.
2. Die Schalter **TANK 1 HEATER** und **TANK 1 PUMP** auf ON stellen; sicherstellen, dass die Betriebsleuchten **nicht aufleuchten** und Heizung/Pumpe nicht laufen; die Schalter auf OFF stellen.
3. Tank 1 befüllen; sicherstellen, dass die rote Leuchte erlischt.
4. Dieselbe Prüfung für Tank 2 wiederholen.

| Prüfung | Erwartetes Ergebnis |
| :--- | :--- |
| Laufen Heizung und Pumpe bei leerem Tank? | Nein — WASHING-LEVEL-Leuchte leuchtet |

---

## 5.4.5 Prüfung des Bereitschaftszustands der Maschine

| Prüfung | Erwartetes Ergebnis |
| :--- | :--- |
| Ist die Maschine betriebsbereit? | Ja — RESET-Leuchte leuchtet blau |
| WASHING-LEVEL-Leuchten | Aus (Tanks gefüllt) |
| Alle Funktionsschalter | OFF |

---

## 5.4.6 Checkliste Sicherheitsfunktionsprüfung

| # | Prüfung | Ergebnis | Datum | Prüfer |
| :---: | :--- | :---: | :--- | :--- |
| 1 | Not-Halt #1 — Bedienfeld | ☐ OK / ☐ NOK | | |
| 2 | Not-Halt #2 — Eingang rechts | ☐ OK / ☐ NOK | | |
| 3 | Not-Halt #3 — Eingang links | ☐ OK / ☐ NOK | | |
| 4 | Not-Halt #4 — Ausgang rechts | ☐ OK / ☐ NOK | | |
| 5 | Not-Halt #5 — Ausgang links | ☐ OK / ☐ NOK | | |
| 6 | Not-Halt #6 — Mitte rechts | ☐ OK / ☐ NOK | | |
| 7 | Not-Halt #7 — Mitte links | ☐ OK / ☐ NOK | | |
| 8 | Reset-Verfahren (Kapitel 2.5) | ☐ OK / ☐ NOK | | |
| 9 | Schalter der Wartungsklappen — 7 Klappen | ☐ OK / ☐ NOK | | |
| 10 | Phasenüberwachungsrelais | ☐ OK / ☐ NOK | | |
| 11 | Fehlerstrom-Schutzschalter TEST | ☐ OK / ☐ NOK | | |
| 12 | Tank-Füllstandverriegelung — Tank 1 / Tank 2 | ☐ OK / ☐ NOK | | |
| 13 | Maschine betriebsbereit (RESET-Leuchte) | ☐ OK / ☐ NOK | | |

Bevor nicht alle Punkte **OK** sind, darf weder mit den Prüfungen in **Kapitel 5.5** noch mit dem Betrieb begonnen werden.
