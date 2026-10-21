# 3.3 Technische Daten

Dieses Kapitel fasst Abmessungen, Gewicht, Kapazität, Elektrik, Motoren/Heizungen, Medienanschlüsse und Umgebungsbedingungen der Maschine **KNV 90 12000 2B** (Seriennummer **0726051**) zusammen. In den Kapiteln Installation (Kapitel 5), Einstellung (Kapitel 6), Betrieb (Kapitel 7) und Störungen (Kapitel 11) werden dieselben Zahlenwerte nicht wiederholt; die betreffenden Kapitel verweisen hierher.

---

## 3.3.1 Abmessungen und Gewicht

| Parameter | Einheit | Wert |
| :--- | :---: | ---: |
| Außenlänge (L) — Gestell 11 800 + Schutzgitter am Auslaufende 450 | mm | 12 250 |
| Außenbreite (W) — einschließlich Pumpen und Filter | mm | 2 210 |
| Gestellbreite | mm | 1 400 |
| Außenhöhe (H) — vom Boden bis zur Oberkante des Abluftventilators | mm | 2 290 |
| Beladehöhe (Oberkante Drahtgurt) | mm | 940 |
| Länge des Beladebereichs am Einlauf | mm | 750 |
| Eingangsöffnung der Kammer (Breite × Höhe) | mm | 900 × 300 |
| Leergewicht — trocken | kg | 4 500 |
| Tankvolumen — TANK 1 (Waschtank) | L | 750 |
| Tankvolumen — TANK 2 (Spültank) | L | 500 |
| Werkstücklast auf dem Förderer — geschätzt, abhängig vom Kundenprozess | kg | 200–250 |
| Betriebsgewicht — gefüllt (geschätzt) | kg | ≈ 5 950–6 000 |
| Gestelltyp | — | Stellfüße |

Die Maschine wird auf **Stellfüßen** aufgestellt, die ein Ausrichten und Nivellieren ermöglichen (**Siehe Kapitel 5.2.3**). Das Betriebsgewicht ergibt sich aus dem Leergewicht, rund 1 250 kg Prozesswasser in den Tanks (750 L + 500 L) und der Werkstücklast auf dem Förderer. Die Werkstücklast hängt von den bearbeiteten Teilen und der Beladehäufigkeit ab; sie ist dem Hersteller nicht genau bekannt und wurde mit 200–250 kg angesetzt. Ist eine höhere Werkstücklast auf der Linie zu erwarten, muss die Tragfähigkeit des Bodens mit der tatsächlichen Last berechnet werden (**Siehe Kapitel 3.5.2**). Vor Transport und Lagerung müssen die Tanks entleert werden (**Siehe Kapitel 4.1, 4.2**). Aufstellfläche und Freiräume sind in **Kapitel 3.5.2** angegeben; die Abmessungen stammen aus dem Aufstellungsplan **C057536**, der als separates Dokument geliefert wird (**Siehe Kapitel 13.1**). Der bauseitige Abluftkanal am Ventilatorausgang ist in der Außenhöhe nicht enthalten.

![3D-Seitenansicht — Förderlinie, Kammern und Abluftkamin](../../assets/3.3/3d-yan-gorunus.png)

---

## 3.3.2 Kapazität und Prozessparameter

| Parameter | Wert |
| :--- | :--- |
| Anzahl Prozessschritte | 4 |
| Prozessname 1 | Waschen (Düsensprühung, Werkstück in Bewegung) |
| Prozessname 2 | Spülen (Düsensprühung) |
| Prozessname 3 | Wasserabblasen (Blower) |
| Prozessname 4 | Trocknen (Trocknungsventilatoren — Heißluft) |
| Zykluszeit — nominal | Kein fester Wert — abhängig von der Förderfrequenz (20–60 Hz) und der Linienlänge; wird im Betrieb gemessen (**Siehe Kapitel 8.1**) |
| Nominale Kapazität | Wird vom Kunden festgelegt |
| Maximale Kapazität | Wird vom Kunden festgelegt |
| Minimale Kapazität | Wird vom Kunden festgelegt |
| Produktformat / Verpackungsart | Wird vom Kunden festgelegt |
| Produktabmessung min / max | Wird vom Kunden festgelegt |
| Produktgewicht min / max | Wird vom Kunden festgelegt |

Die Zykluszeit ist die Zeit, die ein Werkstück auf dem Förderer für den Durchlauf der Linie Waschen → Spülen → Wasserabblasen → Trocknen benötigt, und hängt von der Fördergeschwindigkeit ab, die der Bediener mit dem Potentiometer wählt. Mit sinkender Geschwindigkeit nehmen Kontaktzeit und Reinigungswirkung zu, die Stückzahl pro Stunde nimmt ab. Das Messverfahren für die Zykluszeit und die Kapazitätsplanung sind in **Kapitel 8.1** erläutert.

---

## 3.3.3 Elektrische Daten

| Parameter | Wert |
| :--- | :--- |
| Versorgungsspannung | 380 V |
| Versorgungsfrequenz | 50 Hz |
| Phasenzahl | 3 |
| Versorgungskonfiguration | 3P+N+PE |
| Gesamte installierte Leistung (einschließlich Heizung) | 110 kW |
| Maximale Stromaufnahme | 220 A |
| Gesamtstrom Schaltschrank | 220 A |
| Kurzschlussstrom / ICC-Anforderung | Am Anschlusspunkt ≤ 36 kA (Bemessungsgrenzschaltvermögen des Hauptschalters Icu = 36 kA, 380/415 V AC) |
| Hauptschalter | Schneider **EasyPact CVS250F — LV521091** (Leistungsschalter (TMŞ), 250 A); Türgriff LV521101 |
| Steuerkreisspannung | 220 V AC (Schützspulen) |
| Steuerversorgung | 24 V DC — LRS-350-24 (14,6 A) |
| Phasenüberwachung | Phasenfolgerelais MKR-01 |
| Gesamtsicherung / Leistungsschalter | Gemäß Motor- und Heizungszeilen (**Siehe Kapitel 3.3.4**); Schaltschrank-Leistungsschalter (TMŞ) 250 A |
| USV-/Generatoranforderung | Nein |

Die elektrische Versorgung wird bei der Installation mit einer 380-V-/50-Hz-Leitung 3P+N+PE an die Eingangsklemmen des Schaltschranks angeschlossen (**Siehe Kapitel 5.3.3**). Das Bemessungsgrenzschaltvermögen des Hauptschalters Schneider EasyPact CVS250F beträgt Icu = 36 kA (380/415 V AC); der zu erwartende Kurzschlussstrom am Anschlusspunkt darf 36 kA nicht überschreiten. Die Phasenfolge wird vom **Phasenfolgerelais MKR-01** überwacht; bei falscher Phasenfolge oder fehlender Phase gibt das Relais kein Ausgangssignal und die Funktionen werden nicht freigegeben (**Siehe Kapitel 5.3.6, 11.3.1**). Energietrennung und LOTO-Punkt ist der Hauptschaltergriff an der Schaltschranktür (**Siehe Kapitel 2.4**). Motor- und Heizungsgruppen sind mit Fehlerstrom-Schutzschaltern geschützt: A9N19642 (Motorgruppe, Trocknung 1/2) und A9N19643 (Heizstäbe TANK 1 und TANK 2) (**Siehe Kapitel 3.4.8**).

---

## 3.3.4 Motor-, Antriebs- und Heizungsliste

**Motoren und Schutzelemente** (Schneider, sofern nicht anders angegeben)

| Code | Motor | Leistung | Strom | Motorschutzschalter (MKŞ) / Antrieb | Schütz |
| :--- | :--- | ---: | ---: | :--- | :--- |
| GE01 | Getriebemotor Förderer | 0,25 kW | 0,50 A | Frequenzumrichter Delta VFD004EL21W-1 (0,4 kW); Sicherung A9F74106 1×6 | — |
| PE02 | Motor Waschpumpe | 5,50 kW | 11,10 A | MKŞ GV2ME16 (9–14 A) + GVAE11 | LC1K1610M7 (16 A) |
| PE04 | Motor Spülpumpe | 3,00 kW | 6,10 A | MKŞ GV2ME14 (6–10 A) + GVAE11 | LC1K1610M7 (16 A) |
| FE01 | Motor Abluftventilator | 1,10 kW | 2,30 A | MKŞ GV2ME07 (1,6–2,5 A) + GVAE11 | LC1K0610M7 (6 A) |
| GE06 | Getriebemotor Ölskimmer | 0,09 kW | 0,46 A | MKŞ GV2ME04 (0,4–0,63 A) + GVAE11 | LC1K0610M7 (6 A) |
| FE02 | Motor Trocknungsventilator 1 | 1,10 kW | 2,30 A | MKŞ GV2ME07 + GVAE11 | LC1K0610M7 |
| FE03 | Motor Trocknungsventilator 2 | 1,10 kW | 2,30 A | MKŞ GV2ME07 + GVAE11 | LC1K0610M7 |
| FE04 | Blower-Motor 1 | 4,00 kW | 8,00 A | MKŞ GV2ME14 (6–10 A) + GVAE11 | LC1K1610M7 (16 A) |
| FE05 | Blower-Motor 2 | 4,00 kW | 8,00 A | MKŞ GV2ME14 + GVAE11 | LC1K1610M7 |
| FE06 | Blower-Motor 3 | 4,00 kW | 8,00 A | MKŞ GV2ME14 + GVAE11 | LC1K1610M7 |
| FE07 | Blower-Motor 4 | 4,00 kW | 8,00 A | MKŞ GV2ME14 + GVAE11 | LC1K1610M7 |

Motordrehzahl sowie Marke/Modell sind auf dem Typenschild am Gehäuse jedes Motors angegeben. Beschriftungen der Motorschutzschalter im Schaltschrank: Q1 YIKAMA POM. (Waschpumpe), Q2 DURULAMA POM. (Spülpumpe), Q3 SIYIRICI (Skimmer), Q4 EGZOZ (Abluft), Q5 KURUTMA FAN 1, Q6 KURUTMA FAN 2 (Trocknungsventilator 1/2), Q7–Q10 BLOWER 1–4 (**Siehe Kapitel 11.1.3**).

**Heizungen (Heizstäbe)**

| Code | Heizung | Leistung | Strom | Schütz | Sicherung |
| :--- | :--- | ---: | ---: | :--- | :--- |
| R01–R05 | TANK 1 (Waschen) 1.–5. Heizung | 5 × 8 kW | 16 A (je) | LC1K1610M7 | A9F74316 (16 A) |
| R06–R07 | TANK 2 (Spülen) 1.–2. Heizung | 2 × 8 kW | 16 A (je) | LC1K1610M7 | A9F74316 (16 A) |
| R21 | Heizung Trocknungsventilator 1 | 12 kW | 24 A | LC1D25M7 (25 A) | A9F74325 (25 A) |
| R22 | Heizung Trocknungsventilator 2 | 12 kW | 24 A | LC1D25M7 (25 A) | A9F74325 (25 A) |

Die Tankheizstäbe sind vom Typ **REZİSTANS KOMPLESİ 8000 W 50 cm düz dikişsiz** (Heizstab-Komplettsatz 8000 W, 50 cm, gerade, nahtlos) (07 15142). Die Heizungsgruppen sind mit Fehlerstrom-Schutzschaltern geschützt; bei einem Isolationsfehler löst der betreffende RCCB aus (**Siehe Kapitel 11.3.3**). Die Temperaturregelung erfolgt mit GEMO-DTH2-Thermostaten und Thermoelementen (ETB30F06-5Ç / -4Ç) (**Siehe Kapitel 3.4.4**).

---

## 3.3.5 Druckluft und Wasser

| Parameter | Wert |
| :--- | :--- |
| Drucklufteingang | 6 bar |
| Luftanschlussstelle | Regler **AIR INLET / HAVA GİRİŞİ** (mit Manometer) am Maschinengehäuse — Anschluss per Schlauch |
| Druckluftverbraucher | Membranpumpe der Ölabscheidereinheit (über Magnetventil gesteuert) — einziger Verbraucher |
| Wassereingangsdruck | 1 bar |
| Wassertemperatur min / max | +10 °C – +70 °C |
| Wasserqualität | Leitungswasser oder aufbereitetes Wasser |
| Tankbefüllung | Von Hand — kein automatisches Füllventil |
| Druckluftanschluss | Schnellkupplung — per Schlauch zum Druckregler **AIR INLET / HAVA GİRİŞİ** |
| Anschlussdurchmesser Wasser | 1" |
| Durchmesser Ablass-/Abwasserleitung | 2" |
| Austrittsdurchmesser Abluftkamin | Ø 125 mm |

Die Druckluft versorgt über den Regler am Maschinengehäuse die Membranpumpe der Ölabscheidereinheit; ein Hydraulik- oder Vakuumsystem ist nicht vorhanden. An der Maschine ist kein Druckluft-Absperrventil vorhanden; zum abschließbaren Ventil, das in der bauseitigen Leitung zu installieren ist, **Siehe Kapitel 2.4**. Die Schritte zum Luftanschluss sind in **Kapitel 5.3.1**, die Reglereinstellung in **Kapitel 6.5.1** und der Anschluss des Abluftkamins in **Kapitel 5.3.4** angegeben. Das Wasser wird von Hand in die Tanks gefüllt; die Tanks werden über die Ablassventile (**TAHLİYE**) unter den Tanks entleert (**Siehe Kapitel 10.1.5**), und das Abwasser wird gemäß den örtlichen Vorschriften entsorgt (**Siehe Kapitel 10.1.8**).

![Drucklufteingang (AIR INLET / HAVA GİRİŞİ) — Regler und Manometer](../../assets/3.3/hava-girisi-regulator.jpg)

---

## 3.3.6 Umgebungsbedingungen

| Parameter | Min | Max |
| :--- | :---: | :---: |
| Betriebstemperatur | +10 °C | +30 °C |
| Lagertemperatur | +10 °C | +30 °C |
| Relative Luftfeuchte | 30 % | 50 % |

| Parameter | Wert |
| :--- | :--- |
| Schutzart (IP) — Maschine | IP55 |
| Schallpegel | 65 dB(A) |
| Schutzart Schaltschrank | **Siehe Kapitel 3.4.1** |

Die Maschine ist ausschließlich für den Einsatz in **geschlossenen, geschützten Innenräumen** ausgelegt. Die minimalen Freiräume und die Deckenhöhe der Aufstellfläche sind in **Kapitel 3.5.2** angegeben; die Grenzen der bestimmungsgemäßen Verwendung sind in **Kapitel 3.2** zusammengefasst.

---

Bedienelemente: **Siehe Kapitel 3.4**; Aufstellungsplan: **Siehe Kapitel 3.5**.
