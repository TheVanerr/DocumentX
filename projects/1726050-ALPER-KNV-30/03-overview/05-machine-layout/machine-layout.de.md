# 3.5 Maschinenlayout

Dieses Kapitel definiert die Positionierung der Maschine in der Anlage, Richtungsdefinitionen, minimale Umgebungsabstände, Wartungszugang und Transportbeschränkungen. Die Kapitel Installation (Kapitel 5) und Transport (Kapitel 4) beziehen Flächenanforderungen von hier; dieselben Werte werden nicht wiederholt.

**Referenzzeichnung:** Maschinen-Layout-PDF im Lieferpaket (`1726050-ALPER-KNV 30 LAYOUT.pdf`).

![Allgemeines Layout](../../assets/3.5/1.png)

---

## 3.5.1 Richtungsdefinitionen und Bedienerseite

Maschinenrichtungen, Förderflussrichtung und Bedienerzugangsseite werden bei Installations-, Betriebs- und Wartungsplanung als gemeinsame Referenz verwendet. In allen Anleitungstexten gelten die folgenden Definitionen:

| Definition | Richtung / Lage |
|-------|-------------|
| Bedienerseite | Rechts |
| Beschickungsseite (Einlauf) | Links |
| Entnahmeseite (Auslauf) | Rechts |
| Förderflussrichtung | Links → Rechts |

Teile werden von links auf das Förderband genommen, durchlaufen die Prozesszonen Waschen → Spülen → Trocknen und verlassen die Linie rechts. In diesem Projekt erfolgen Einlauf und Auslauf durch **Roboter**; beim Planen des Roboterzugangsbereichs ist auf Beschickungs- und Entnahmeseite ausreichender Manövrierzuschlag zu belassen.

Der Bediener greift von der **rechten Seite** auf HMI-Bedienfeld, Hauptschalter und Elektroschrank zu. Die Signalleuchte befindet sich an der Maschine in einer für den Bediener sichtbaren Lage; Farbbedeutungen sind in **Kapitel 3.4.10** erläutert.

---

## 3.5.2 Minimale Umgebungsabstände und Deckenhöhe

Bei der Planung des Installationsbereichs sind die folgenden Mindestabstände bereitzustellen. Diese Werte sind für das Öffnen von Wartungsklappen, Filterzugang und sichere Personalbewegung erforderlich; in engeren Bereichen darf nicht installiert werden.

| Zone | Mindestabstand |
|-------|----------------|
| Vorderseite | 1000 mm |
| Rückseite | 1000 mm |
| Seite (beide Seiten) | 1000 mm |
| Deckenhöhe | 2500 mm |

| Zusätzliche Anforderung | Wert |
|---------------|-------|
| Minimale Größe der Montagefläche | 5 m × 3 m |
| Bodenebenheitstoleranz | 0,5 mm/m |
| Bodenoberfläche | Hart und eben |

Die Bodenfestigkeit muss das Betriebsgewicht der Maschine (**1500 kg** — siehe **Kapitel 3.3.1**) und dynamische Lasten tragen können. Der Niveauausgleich erfolgt mit verstellbaren Füßen; die Ausrichtungstoleranz beträgt **0,5 mm** (siehe **Kapitel 5** — Positionierung).

---

## 3.5.3 Wartungszugangszonen

| Zone | Zugang |
|-------|--------|
| Maschinenrückseite | Alle Klappen sind abnehmbar und zugänglich |

Für periodische Wartung, Filterreinigung, Pumpenprüfung und mechanische Eingriffe wird auf Innenkomponenten zugegriffen, indem die **Klappen an der Rückseite der Maschine** abgenommen werden. Klappen werden durch einen **RFID-Sicherheitssensor** überwacht; beim Öffnen einer Klappe stoppt die Maschine. Vor der Wartung ist die Maschine stillzusetzen, der Hauptschalter auszuschalten und das **LOTO-Verfahren** anzuwenden (siehe **Kapitel 2.4**). Der RFID-Sicherheitssensor darf nicht umgangen werden.

Tägliche Vorfilterreinigung und wöchentliche Tank-/Beutelfilterwartung erfolgen über diese Zugangszonen (siehe **Kapitel 9** und **Kapitel 10**).

![Wartungszugangsklappen](../../assets/3.5/2.png)

---

## 3.5.4 Transport, Gabelstapler und Schwerpunkt

| Parameter | Wert / Hinweis |
|-----------|-------------|
| Kranverwendung beim Transport | Darf unter keinen Umständen verwendet werden |
| Gabelstaplertransport | Profile unter der Maschine sind zu verwenden |
| Gabelstapler-Gabeleinfahrt | Ja |
| Schwerpunkt | Mitte des Maschinenförderbands |

Ein Kran **darf unter keinen Umständen** für den Maschinentransport verwendet werden; es gibt keinen Hebepunkt und keine Anschlagausrüstung. Beim Gabelstaplertransport sind die **Transportprofile** unter der Maschine zu verwenden; die Gabelspitzen sind vollständig in die Profilkanäle zu setzen. Während des Transports dürfen in der Umgebung keine Feuchtigkeit und korrosiven Stoffe vorhanden sein (siehe **Kapitel 4** — Lagerbedingungen).

Der Schwerpunkt liegt in der Mitte der Förderstrecke; ungleichmäßige Belastung der Maschine beim Gabelstapler-Manöver erzeugt Kippgefahr. Das Leergewicht beträgt **1300 kg** (siehe **Kapitel 3.3.1**).

---

## 3.5.5 Anordnung der Sicherheitselemente

Die Anordnung der Not-Halt-Taster, RFID-überwachten Klappen und der Signalleuchte ist in der Layoutzeichnung dargestellt. Not-Halt-Lagen:

| Nr. | Lage |
|-----|-------|
| 1 | Am Elektroschrank |
| 2 | Am Maschineneinlauf rechts vom Förderband |
| 3 | Am Maschineneinlauf links vom Förderband |
| 4 | Am Maschinenauslauf links vom Förderband |

Beim Drücken des Not-Halts stoppen alle Funktionen. Reset-Verfahren und Wiederinbetriebnahmebedingungen stehen in **Kapitel 2.5**; die Schritte werden in diesem Kapitel nicht wiederholt.

Die Anzahl der Sicherheitstüren / festen Barrieren ist null; die Sicherheitskategorie der Maschine ist **Cat. 3** (EN ISO 13849-1). Es ist kein Lichtvorhang vorhanden (siehe **Kapitel 2.1.3**).

---

Für technische Abmessungs- und Gewichtswerte siehe **Kapitel 3.3**; für Transportverfahren siehe **Kapitel 4**.
