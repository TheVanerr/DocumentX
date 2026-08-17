# 8.2. Spezifische Einrichtung

Es gibt **keine Formatwechselprozedur** an der Maschine (siehe Abschnitt **6.1.5**). Produkt-/Rezeptparameter werden vom Anwender über HMI eingestellt.

---

## 8.2.1. Rezept / Programmparameter

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Rezeptspeichergrenze | Keine Rezeptbegrenzung |
| Temperatureinstellung | HMI-Einstellseite (Wasch-/Spültanktemperaturen) |
| Prozessfunktionsauswahl | HMI-Betriebsbildschirm — Waschen, Spülen, Trocknung 1, Trocknung 2, Abluft Ein/Aus |

Rezeptparameter (Temperatur, Prozesszeiten usw.) müssen vom Anwender am HMI nach Teiltyp und Reinigungsziel definiert werden.

<!-- FOTO: HMI Rezept / Einstellseite -->
![HMI Rezept-Einstellseite](../../assets/FOTO-8-2-0-recete.png)

---

## 8.2.2. Produktbezogene Parameter

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Produkt A Parameter | **Vom Anwender eingestellt** |
| Produkt B Parameter | **Vom Anwender eingestellt** |
| Produkt C Parameter | **Vom Anwender eingestellt** |

Für jeden Produkttyp kann ein separates Rezept erstellt werden. Parameter (Temperatur, aktive Prozessschritte, Zykluszeit) müssen vom Anwender an Roboterlinien-Zyklus angepasst werden.

---

## 8.2.3. Rezeptnummernliste

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Rezeptnummernliste | **Vom Anwender eingestellt** |

Rezeptnummerierung und Produktzuordnung müssen vom Anwender definiert werden. Bei Roboter-PLC-/Leitsystem-Integration erfolgt Rezeptauswahl nach Kundenautomatisierungsstruktur.

---

## 8.2.4. Checkliste spezifische Einrichtung

| # | Prüfung | Status |
|---|---------|--------|
| 1 | Rezept für Produkttyp ausgewählt / erstellt | ☐ OK / ☐ NOK |
| 2 | Tanktemperaturen auf Sollwerte eingestellt | ☐ OK / ☐ NOK |
| 3 | Prozessfunktionen (Waschen/Spülen/Trocknen) korrekt Ein/Aus | ☐ OK / ☐ NOK |
| 4 | Übereinstimmung mit Roboterlinien-Zyklus geprüft | ☐ OK / ☐ NOK |
| 5 | Testwäsche mit Musterstück durchgeführt | ☐ OK / ☐ NOK |

**Datum:** _______________ **Geprüft von:** _______________

> **Hinweis:** Ersteinrichtung und Inbetriebnahme neuer Produkte müssen vom Anwender vor Ort mit echten Teilen getestet werden.
