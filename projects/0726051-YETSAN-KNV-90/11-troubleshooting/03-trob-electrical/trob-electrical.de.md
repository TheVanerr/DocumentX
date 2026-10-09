# 11.3 Elektrische Störungen

Bei elektrischen Störungen vor jedem Eingriff in den Schaltschrank **LOTO** anwenden (**Kapitel 2.4**). Die Versorgungswerte sind in **Kapitel 3.3.3**, die Liste der Motoren/Heizungen und Schutzelemente in der Tabelle in **Kapitel 3.3.4** angegeben. Alle Arbeiten in diesem Kapitel sind qualifiziertem Elektropersonal vorbehalten.

**GEFAHR — Stromschlag:** Im Schaltschrank liegen 380 V an; bei ausgeschaltetem Hauptschalter bleiben die Eingangsklemmen unter Spannung. Der Zwischenkreis des Frequenzumrichters führt nach dem Ausschalten des Schalters noch mindestens 5 Minuten gefährliche Spannung.

---

## 11.3.1 Phasenausfall und Phasenfolge

| Parameter | Wert |
| :--- | :--- |
| Verhalten bei Phasenausfall / vertauschter Phase | Phasenfolgerelais **MKR-01** gibt keinen Ausgang frei; die Schaltschrankfunktionen schalten nicht ein (RESET-Leuchte leuchtet möglicherweise nicht) |
| Motordrehrichtung | Pumpe, Ventilator, Blower mit Direktanlauf — abhängig von der Phasenfolge; Förderer über Frequenzumrichter — per Parameter fest eingestellt |

**Diagnoseverfahren bei Phasenfehler**

1. Maschine stillsetzen; Hauptschalter auf **OFF**; LOTO anwenden.
2. Am Versorgungsschalter der Anlage das Vorhandensein aller drei Phasen und die Spannungssymmetrie messen.
3. Schaltschranktür öffnen; Anzeige des Relais MKR-01 ablesen (LED für Phasenfolge / Phasenausfall — gemäß Relaisetikett).
4. Bei vertauschter Phasenfolge bei ausgeschalteter und verriegelter Anlagenversorgung **zwei Phasen** in der Versorgungsleitung tauschen (**Kapitel 5.3.6**). Phasen niemals unter Spannung tauschen.
5. Schaltschranktür schließen; LOTO aufheben; Hauptschalter auf ON; prüfen, dass MKR-01 den Ausgang freigibt und die RESET-Leuchte leuchtet.
6. Eine Pumpe oder einen Ventilator kurz laufen lassen und die Drehrichtung mit dem Pfeil am Motor vergleichen.

**Wiederholter Phasenfehler:** Qualität der Anlagenversorgung (lose Verbindung, Phasenunsymmetrie) oder Relaisstörung — Servicekriterium **Kapitel 11.2.2**.

---

## 11.3.2 Motorstörungen — MKŞ und Frequenzumrichter

| Motor | Schutz | Auslösesymptom |
| :--- | :--- | :--- |
| Waschpumpe PE02 (5,5 kW) | Q1 GV2ME16 | Betriebsleuchte TANK 1 PUMP aus |
| Spülpumpe PE04 (3 kW) | Q2 GV2ME14 | Betriebsleuchte TANK 2 PUMP aus |
| Ölskimmer GE06 (0,09 kW) | Q3 GV2ME04 | Betriebsleuchte OIL SKIMMER aus |
| Abluftventilator FE01 (1,1 kW) | Q4 GV2ME07 | Keine Dampfableitung |
| Trocknungsventilatoren FE02, FE03 (1,1 kW) | Q5, Q6 GV2ME07 | Betriebsleuchte DRYING FAN aus |
| Blower FE04–FE07 (4 kW) | Q7–Q10 GV2ME14 | Blowerluft verringert |
| Förderer GE01 (0,25 kW) | Frequenzumrichter Delta VFD004EL21W-1; Sicherung A9F74106 | Betriebsleuchte CONVEYOR aus; Code auf dem Display des Frequenzumrichters |

**Diagnoseverfahren bei Motorstörung (MKŞ-Auslösung)**

1. Den betreffenden Funktionsschalter auf **OFF** stellen.
2. Bei Pumpen prüfen, dass Saug-/Druckventile geöffnet sind (**Kapitel 7.2.5**); ein geschlossenes Ventil überlastet die Pumpe.
3. Hauptschalter ausschalten; **LOTO** anwenden.
4. Schaltschranktür öffnen; ausgelösten MKŞ anhand der Tabelle in **Kapitel 11.1.3** ermitteln (Hebel in Stellung "0").
5. Motor- und Kabelanschlüsse per Sichtprüfung kontrollieren; Wicklungswiderstand und Isolation des Motors messen.
6. Bei Verdacht auf mechanisches Blockieren die Freigängigkeit von Welle/Kupplung von Hand prüfen (Ventilatorflügel, Pumpenlaufrad, Skimmerscheibe).
7. Ursache beseitigen; MKŞ-Hebel in Stellung ON bringen.
8. Schaltschranktür schließen; LOTO aufheben; RESET; Funktion kurz testen und den Motorstrom mit dem Zangenamperemeter gegen den Einstellbereich des MKŞ prüfen.

**Alarm des Förderer-Frequenzumrichters**

| Parameter | Wert |
| :--- | :--- |
| Frequenzumrichter | Delta **VFD004EL21W-1** (0,4 kW) — im Schaltschrank |
| Alarmcodes | Gemäß dem Code auf dem Display des Antriebs **Betriebsanleitung Delta VFD-EL** (**Siehe Kapitel 13.1**) |
| Reset | Schalter CONVEYOR OFF → ON oder Taste STOP/RESET am Frequenzumrichter |

1. Schalter CONVEYOR auf OFF stellen; Alarmcode auf dem Display des Frequenzumrichters notieren.
2. Liegt eine Blockierung oder ein Werkstückstau auf der Linie vor, diesen unter LOTO beseitigen.
3. Prüfen, dass das Potentiometer nicht unter 20 Hz steht (Überlastalarm).
4. Bedeutung des Alarmcodes im Delta-Handbuch nachlesen; bei Überstrom/Überlast die mechanische Last, bei Versorgungsfehler die Sicherung A9F74106 und die Anschlüsse prüfen.
5. Frequenzumrichter zurücksetzen; CONVEYOR ON; prüfen, dass der Drahtgurt sich vorwärts bewegt.

**VORSICHT — Parameter:** Die Parameter des Frequenzumrichters nicht ändern; Drehrichtung, Min.-/Max.-Frequenz und Rampe sind Werkseinstellungen. Bei Störungen, die eine Parameteränderung erfordern, den Herstellerservice anfordern (**Kapitel 11.2.2**).

![Schütze im Schaltschrank — Waschpumpe, Spülpumpe, Skimmer, Abluft](../../assets/11.3/kontaktorler.jpg)

**Erwartetes Ergebnis:** MKŞ normal; Motor läuft; Betriebsleuchte an; Motorstrom im MKŞ-Bereich.

---

## 11.3.3 Heizungsstörungen — Fehlerstrom, Sicherung, Thermostat, Schütz

| Heizungsgruppe | Schutz | Prüfung |
| :--- | :--- | :--- |
| Heizstäbe TANK 1 R01–R05 (5 × 8 kW) | RCCB A9N19643; Sicherung A9F74316 (16 A) ×5; Schütz LC1K1610M7 ×5 | Thermostat + Schalter TANK 1 HEATER |
| Heizstäbe TANK 2 R06–R07 (2 × 8 kW) | RCCB A9N19643; Sicherung A9F74316 ×2; Schütz LC1K1610M7 ×2 | Thermostat + Schalter TANK 2 HEATER |
| Trocknungsheizungen R21, R22 (2 × 12 kW) | RCCB A9N19642; Sicherung A9F74325 (25 A) ×2; Schütz LC1D25M7 ×2 | Thermostat + Schalter DRYING 1/2 HEATER |

Die Fehlerstrom-Schutzschalter im Schaltschrank sind mit den Etiketten **K.AKIM F1…F5** (Fehlerstrom F1…F5), die Heizungssicherungen mit den Etiketten **YIKAMA ISI 1…5** (Waschheizung 1…5), **DURULAMA ISI 1–2** (Spülheizung 1–2) und **KURUTMA ISI 1–2** (Trocknungsheizung 1–2) gekennzeichnet.

![Fehlerstrom-Schutzschalter — K.AKIM F3, F4, F5](../../assets/11.3/kacak-akim-roleleri.jpg)

![Heizungssicherungen — Heizstäbe Waschen, Spülen, Trocknung](../../assets/11.3/isitici-sigortalari.jpg)

**Temperatur steigt nicht (Heizungsschalter ON)**

1. Prüfen, dass die zugehörige **WASHING-LEVEL**-Leuchte aus ist; leuchtet sie rot, sperrt die Füllstandverriegelung die Heizung — Tank befüllen (**Kapitel 7.2.1**).
2. Prüfen, dass der Sollwert des Thermostats über der aktuellen Temperatur liegt (**Kapitel 6.3.3**).
3. Hauptschalter ausschalten; LOTO anwenden.
4. Stellung des zugehörigen RCCB-Hebels (K.AKIM) und der Heizungssicherungen prüfen; bei Auslösung zum nachstehenden Fehlerstromverfahren übergehen.
5. Prüfen, ob das Heizungsschütz anzieht (Spule 220 V AC), und den Thermostatausgang prüfen.
6. Anschluss des Thermoelements (ETB30F06) und die Anzeige auf dem Thermostatdisplay prüfen; bei unplausibler Anzeige Störung des Thermoelements — **Kapitel 11.7.3**.

**Fehlerstrom-Auslösung (RCCB)**

1. Heizungsschalter auf OFF; Hauptschalter ausschalten; **LOTO** anwenden.
2. Die vom ausgelösten RCCB versorgte Gruppe anhand des Schaltplans bestimmen (Tank 1, Tank 2 oder Trocknung).
3. Jeden Heizstab der Gruppe nacheinander abklemmen; Isolationswiderstand Gehäuse–Anschluss des Heizstabs mit dem Isolationsmessgerät messen; den Heizstab mit niedriger Isolation (geplatzt/nass) ermitteln.
4. Den defekten Heizstab durch **REZİSTANS KOMPLESİ 8000 W 50 cm** (07 15142) bzw. die Trocknungsheizung ersetzen (**Kapitel 13.3**); beim Wechsel eines Tankheizstabs wird der Tank entleert (**Kapitel 10.1.5**).
5. Die Heizstab-Anschlusskästen unter dem Tank auf Feuchtigkeit und Leckagespuren prüfen; Feuchtigkeitsquelle beseitigen.
6. RCCB einschalten; LOTO aufheben; Heizung testen.
7. Wiederholt sich die Auslösung, **Service** anfordern (**Kapitel 11.2.2**).

![Unter dem Tank — Heizstab-Anschlussleitung](../../assets/11.3/tank-alti-rezistans-baglanti.jpg)

**Thermostat hat den Sollwert erreicht, Heizen geht weiter (Störung 5)**

1. Heizungsschalter auf OFF stellen. Steigt die Temperatur weiter, ist das Schütz verschweißt: Hauptschalter auf **OFF**.
2. LOTO; verschweißtes Schütz (LC1K1610M7 oder LC1D25M7) ersetzen.
3. Stoppt das Heizen bei Schalter OFF, überschreitet aber bei ON den Sollwert, ist der Thermostatausgang oder das Thermoelement defekt; Thermostat (GEMO DTH2) oder Thermoelement ersetzen.

**WARNUNG — Elektrik:** Eingriffe an Heizstäben und am Fehlerstrom-Schutzkreis dürfen nur von qualifiziertem Elektropersonal vorgenommen werden. Das Überbrücken oder Außerkraftsetzen des Fehlerstrom-Schutzschalters birgt die Gefahr eines tödlichen Stromschlags und ist verboten.

---

## 11.3.4 Allgemeine Prüfungen im Schaltschrank

| Prüfung | Intervall / Anlass | Kapitel |
| :--- | :--- | :--- |
| Festigkeit der Anschlüsse (TMŞ, Schütz, Klemme) | Jährlich — LOTO | 9.1.3 |
| Schaltschranklüftung und Staub | Monatlich | 9.1.3 |
| Ausgang des 24-V-DC-Netzteils LRS-350-24 | Diagnose Störung 6 | 11.1.2 |
| Steuersicherungen A9F74160 / A9F74110 | Diagnose Störung 6 | 11.1.2 |
| Sicherheitsrelais G9SB — LED-Status | Wenn RESET nicht möglich | 11.7.1 |

Kabelfarbcode, Klemmennummern und Schaltungsdetails sind im **Schaltplan** angegeben (Lieferpaket — **Siehe Kapitel 13.1**).
