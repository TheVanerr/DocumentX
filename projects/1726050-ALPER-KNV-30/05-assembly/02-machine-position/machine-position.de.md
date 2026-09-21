# 5.2 Maschinenpositionierung

Die Positionierung legt den endgültigen Standort, die Ausrichtung und das Niveau der Maschine im Aufstellbereich fest. Die Arbeiten werden im Rahmen von **Kapitel 5.1 Schritt 3** ausgeführt; in diesem Abschnitt werden sie detailliert. Falsche Positionierung beeinträchtigt Roboterzugang, das Öffnen von Wartungsabdeckungen und die Förderbandausrichtung.

Flächenanforderungen (Freiräume, Deckenhöhe, Ausrichtungsdefinitionen) sind in **Kapitel 3.5** angegeben; hier wird das Installationsverfahren beschrieben.

---

## 5.2.1 Anforderungen an den Aufstellbereich

Bevor die Maschine platziert wird, muss der Aufstellbereich folgende Bedingungen erfüllen:

| Parameter | Anforderung | Referenz |
|-----------|------------|------|
| Montagebereich min. Größe | 5 m × 3 m | Kapitel 3.5 |
| Bodenebenheitstoleranz | 0,5 mm/m | Kapitel 3.5 |
| Bodenfestigkeit | Harte und ebene Fläche | Kapitel 3.5.2 |
| Mindestfreiraum | Vorne, hinten, seitlich: 1000 mm | Kapitel 3.5.2 |
| Mindestdeckenhöhe | 2500 mm | Kapitel 3.5.2 |

Der Referenz-Aufstellungsplan ist das Maschinen-Layout-PDF im Lieferpaket (siehe **Kapitel 3.5**).

![Aufstellbereich](../../assets/5.2/1.png)

---

## 5.2.2 Ausrichtungsdefinitionen und Aufstellung

Die Maschine muss gemäß folgender Ausrichtungen positioniert werden (siehe **Kapitel 3.5.1**):

| Definition | Richtung |
|-------|-----|
| Bedienerseite | Rechts |
| Zuführseite (Einlauf) | Links |
| Abführseite (Auslauf) | Rechts |
| Förderband-Flussrichtung | Links → Rechts |

Teile werden von links beladen und von rechts entnommen. HMI-Bedienfeld und Elektroschrank sind auf der Bedienerseite (rechts) zugänglich. In diesem Projekt erfolgen Einlauf/Auslauf durch **Roboter**; beim Planen des Robotermanövrierbereichs ausreichenden Freiraum auf Zuführ- und Abführseite lassen.

Die Platzierung mit Gabelstapler erfolgt gemäß Verfahren **Kapitel 4.1.4**; der Schwerpunkt liegt in der Förderbandmitte (siehe **Kapitel 3.5.4**).

![Ausrichtungsdefinitionen](../../assets/5.2/2.png)

---

## 5.2.3 Niveaueinstellung und Ausrichtung

| Parameter | Wert |
|-----------|-------|
| Niveaueinstellmechanismus | Verstellbare Füße |
| Ausrichtungstoleranz | 0,5 mm |

### Positionierungsverfahren

1. Die Maschine mit dem Gabelstapler in die endgültige Position bringen und auf den Boden setzen (siehe **Kapitel 4.1.4**).
2. Mit den **verstellbaren Füßen** die Maschine so einstellen, dass sie **in Waage** steht.
3. Mit Wasserwaage oder gleichwertigem Messgerät beide Achsen prüfen.
4. Die Ausrichtungstoleranz darf **0,5 mm** nicht überschreiten; bei Abweichung Fußhöhen einstellen und die Messung wiederholen.
5. Prüfen, dass alle Füße den Boden gleichmäßig berühren.

**Erwartetes Ergebnis:** Maschine in Waage; Förderbandlinie mit der Ziellinie ausgerichtet.

**Abweichender Zustand:** Wird die Bodentoleranz überschritten, nicht in Betrieb gehen, bevor der Boden korrigiert ist.

Frage der mechanischen Installationsprüfung: *Steht die Maschine in Waage?* (siehe **Kapitel 5.5.1**)

![Niveaueinstellung](../../assets/5.2/3.png)

---

## 5.2.4 Wartungszugang

Während der Positionierung dürfen die Wartungszugangsbereiche nicht versperrt werden (siehe **Kapitel 3.5.3**):

| Bereich | Anforderung |
|-------|------------|
| Maschinenrückseite | Alle Abdeckungen demontierbar und zugänglich |
| Hinterer Mindestfreiraum | 1000 mm |

Wird die Maschine zu nah an einer Wand oder Anlage aufgestellt, können Filterwartung und Tankzugriff nicht sicher ausgeführt werden.

![Wartungszugangsbereich](../../assets/5.2/4.png)
