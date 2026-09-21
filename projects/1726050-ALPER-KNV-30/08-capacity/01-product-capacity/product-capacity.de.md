# 8.1 Produktkapazität

Die Kapazitätsbewertung erfolgt für **industrielle Teile**, die auf dem Förderband laufen. Die Maschine wird nicht über Trommelvolumen oder Chargenbeladungskapazität definiert; der Linien-Throughput ergibt sich gemeinsam aus Förderbandgeschwindigkeit, Roboter-Zykluszeit und Prozesszeit.

Technische Referenzwerte stehen in **Kapitel 3.3.2** — Tabelle Kapazität und Prozessparameter.

---

## 8.1.1 Kapazitätsparameter

| Parameter | Wert | Hinweis |
|-----------|-------|-----|
| Nominale Kapazität (Stk./h) | Wird vom Anwenderunternehmen festgelegt | Siehe Kapitel 3.3.2 |
| Maximale Kapazität (Stk./h) | Wird vom Anwenderunternehmen festgelegt | |
| Mindestkapazität (Stk./h) | **730** | Konstruktionsreferenzwert |
| Nominale Zykluszeit | **900 s** (15 min) | Teile-Durchlaufzeit — nicht Roboterzyklus |
| Prozessschritte | Waschen → Spülen → Trocknen (3) | Siehe Kapitel 3.1 |

**730 Stk./h** ist die Linien-Throughput-Referenz bei mehreren Teilen gleichzeitig auf dem Förderband. **900 s** ist die Verweilzeit eines einzelnen Teils im Prozesstunnel. Der Robotereinlauf/-auslauf-Zyklus gehört zur Kundenlinie und muss kurz genug sein, um mit 730 Stk./h kompatibel zu sein. Die tatsächliche Produktionskapazität variiert je nach Roboterlinie, Teilegröße und Prozessparametern; sie muss am Anwenderstandort verifiziert werden.

---

## 8.1.2 Produktgrenzen

| Parameter | Wert |
|-----------|-------|
| Produktformat / Verpackungstyp | Wird vom Anwenderunternehmen festgelegt |
| Produktgröße min (mm) | Wird vom Anwenderunternehmen festgelegt |
| Produktgröße max (mm) | Wird vom Anwenderunternehmen festgelegt |
| Produktgewicht min (g) | Wird vom Anwenderunternehmen festgelegt |
| Produktgewicht max (g) | Wird vom Anwenderunternehmen festgelegt |

Teilegröße und -gewicht müssen zur Förderbandbreite (**1730 mm** Außenbreite — siehe **Kapitel 3.3.1**), zum Robotergriffpunkt, zum Düsenabdeckungsbereich und zur Badegeometrie passen. Die Grenzen der bestimmungsgemäßen Verwendung sind in **Kapitel 3.2** definiert.

**VORSICHT — Überlastung:** Ein Teil oder eine gestapelte Last über der Förderbandtragfähigkeit schädigt den Fördermechanismus und die Prozessqualität.

---

## 8.1.3 Nominale Kapazitätstabelle

Die nominale Kapazitätstabelle (Produkt × Stk./h) muss **vom Anwenderunternehmen** erstellt werden. Die folgende Vorlage ist eine Beispielstruktur; Werte werden aus der Standortprüfung ausgefüllt:

| Produkttyp | Stk./h (Ziel) | Zykluszeit (s) | Hinweis |
|-----------|-------------------|-------------------|-----|
| Produkt A | [Anwenderunternehmen] | [Anwenderunternehmen] | |
| Produkt B | [Anwenderunternehmen] | [Anwenderunternehmen] | |
| Produkt C | [Anwenderunternehmen] | [Anwenderunternehmen] | |
| … | … | … | |

Die Tabelle muss mit der Rezeptzuordnung von Roboter-SPS / übergeordnetem System konsistent gehalten werden (siehe **Kapitel 8.2**).

---

## 8.1.4 Geprüfte Kapazität und Bedingungen

| Parameter | Wert |
|-----------|-------|
| Geprüfte Kapazität (Stk./h) | Wird vom Anwenderunternehmen eingestellt |
| Kapazitätsprüfbedingungen | Wird vom Anwenderunternehmen eingestellt |

Die Kapazitätsprüfung muss am Anwenderstandort mit **echten Teilen** und den Ziel-Reinheitskriterien durchgeführt werden. Die Prüfbedingungen müssen mindestens umfassen:

1. Definition von Teiletyp und Verschmutzungsgrad
2. HMI-Temperatur-Sollwerte (Waschen, Spülen, Trocknen)
3. Aktive Prozessfunktionen (Waschen/Spülen/Trocknen ein/aus)
4. Robotereinlauf- und -auslauf-Zykluszeiten
5. Akzeptiertes Reinheits-/Trockenheitskriterium

Prüfergebnisse müssen in die Tabelle **Kapitel 8.1.3** eingetragen werden.

---

## 8.1.5 Maximaler Dauerbetrieb

| Parameter | Wert |
|-----------|-------|
| Maximaler Dauerbetrieb | **24/7** |

Die Maschine ist für ununterbrochenen (**24/7**) Betrieb auf einer Roboterlinie geeignet. Der Dauerbetrieb gilt, solange die Pläne für periodische Wartung (**Kapitel 9**) und Reinigung (**Kapitel 10**) eingehalten werden. Bei langem Stillstand erfolgt die Tankentleerung gemäß **Kapitel 7.3.4**.

---

## 8.1.6 Kapazitätsbeeinflussende Faktoren

| Faktor | Auswirkung |
|--------|------|
| Robotereinlauf- / -auslaufgeschwindigkeit | Bestimmt die Linienzykluszeit direkt |
| Nominaler Maschinenzyklus (900 s) | Durchlaufzeit eines einzelnen Teils durch den Prozesstunnel; nicht der Roboterzyklus |
| HMI-Temperatur-Sollwerte | Beeinflussen die Beheizungszeit (siehe **Kapitel 6.3.3**) |
| Aktive Prozessfunktionen | Waschen, Spülen, Trocknen 1/2, Abluft ein/aus |
| Teilegeometrie und Verschmutzungsgrad | Effektive Waschqualität und erforderliche Kontaktzeit |
| Ventile vor den Pumpen | Geschlossene Ventile senken den Prozessertrag |
| Filterzustand | Ein verstopfter Filter senkt Pumpendurchfluss und Prozessqualität (siehe **Kapitel 9**, **10**) |

Wird ein Kapazitätsrückgang festgestellt, zuerst Roboterzyklus, Rezepttemperaturen und Filterzustand prüfen (**Siehe Kapitel 11**).

---

Für die Rezeptkonfiguration siehe **Kapitel 8.2**.
