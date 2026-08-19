# 8.1 Produktkapazität

Kapazitätsbewertung gilt für Teile auf dem Förderer; Trommelvolumen- oder Gewichtsgrenzen gelten nicht.

---

## 8.1.1 Kapazitätsparameter

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Nominale Kapazität (Stk./h) | Vom Anwender festgelegt |
| Maximale Kapazität (Stk./h) | Unbekannt — vom Anwender festgelegt |
| Mindestkapazität (Stk./h) | **730** |
| Nominale Zykluszeit (s) | **900** (15 min) |
| Prozessschritte | Waschen → Spülen → Trocknen (3 Schritte) |

---

## 8.1.2 Produktgrenzen

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Produktformat / Verpackungstyp | Unbekannt — vom Anwender festgelegt |
| Produktgröße min (mm) | Unbekannt — vom Anwender festgelegt |
| Produktgröße max (mm) | Unbekannt — vom Anwender festgelegt |
| Produktgewicht min (g) | Unbekannt — vom Anwender festgelegt |
| Produktgewicht max (g) | Unbekannt — vom Anwender festgelegt |

Teilgröße und -gewicht müssen zu Fördererbreite, Roboter-Greifpunkt und Badgeometrie passen. Eignung vom Anwender unter Prozessbedingungen prüfen.

---

## 8.1.3 Nominale Kapazitätstabelle

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Nominale Kapazitätstabelle (Produkt × Stk./h) | **Vom Anwender eingestellt** |

Stk./h-Werte pro Produkttyp müssen vom Anwender zusammen mit HMI-Rezepten und Roboterlinien-Zykluszeiten definiert werden.

---

## 8.1.4 Getestete Kapazität und Bedingungen

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Getestete Kapazität (Stk./h) | **Vom Anwender eingestellt** |
| Kapazitätstest-Bedingungen | **Vom Anwender eingestellt** |

Kapazitätstest muss vor Ort mit tatsächlicher Teilgeometrie, Ziel-Reinigungskriterien, Rezepttemperaturen und Roboter-Zufuhr-/Abfuhrgeschwindigkeiten erfolgen.

---

## 8.1.5 Maximaler Dauerbetrieb

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Maximaler Dauerbetrieb (Std./Tag) | **24/7 betreibbar** |

Maschine ist für ununterbrochenen Betrieb in 24/7-Roboterlinie geeignet. Periodische Wartung und Reinigung siehe Abschnitte **9** und **10**.

---

## 8.1.6 Kapazitätsbeeinflussende Faktoren

| Faktor | Einfluss |
|--------|----------|
| Roboter Zufuhr / Abfuhr | Bestimmt Linien-Zykluszeit |
| HMI-Rezepttemperaturen | Beeinflusst Erwärmungszeit (siehe Abschnitt **7.2**) |
| Aktive Prozessfunktionen | Waschen, Spülen, Trocknung 1/2 Ein/Aus |
| Teilgeometrie und Verschmutzungsgrad | Beeinflusst effektive Waschzeit |
| Ventile vor Pumpen | Geschlossene Ventile reduzieren Prozesseffizienz |

> **Hinweis:** Mindestkapazität (730 Stk./h) ist Maschinen-Designreferenz. Tatsächliche Produktionskapazität variiert mit Kundenlinienbedingungen.
