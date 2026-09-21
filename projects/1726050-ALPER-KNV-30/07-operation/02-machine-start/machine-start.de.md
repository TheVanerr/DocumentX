# 7.2 Maschinenstart

Vor Machine Start muss das Verfahren **Vorbereitung Start** abgeschlossen sein. Die Vorbereitung bringt Tankfüllung, Beheizung und Prozesskreise in den betriebsbereiten Zustand. Der Startbefehl wird mit der Taste **Machine Start** auf der HMI-**Betriebsseite** gegeben.

**WARNUNG — Quetschen:** Vor dem Start prüfen, dass kein Teil oder Gegenstand auf der Förderbandlinie verblieben ist; andernfalls entsteht Quetschgefahr.

---

## 7.2.1 Inbetriebnahme-Voraussetzungen

Mit der Vorbereitungstaste werden folgende Vorgänge automatisch ausgeführt:

- Ist **kein** Wasser im Tank → automatische Füllung bis zum oberen Füllstandssensor, anschließend Beheizung auf die Rezepttemperatur.
- Ist Wasser im Tank **vorhanden** → direkt Beheizung.

Kein weiterer Vorbereitungsschritt ist erforderlich. Voraussetzungen:

| # | Bedingung |
|---|-------|
| 1 | Hauptschalter **ON** — Spannung an der Maschine vorhanden |
| 2 | Druckluft **6 bar** angeschlossen (siehe **Kapitel 3.3.5**) |
| 3 | Wassereinlass und automatisches Füllventil **offen** |
| 4 | Luft-/Wasserinformation auf der HMI-Handseite **grün** (siehe **Kapitel 5.5.3**) |
| 5 | Kein aktiver Alarm (HMI-Alarmseite) |

**Füllproblem:** Ist kein Wasser im Tank und erfolgt während der Vorbereitung keine Füllung, ist das **automatische Füll-Wassereinlassventil geschlossen** — das Ventil öffnen. Den **6-bar**-Luftanschluss prüfen.

---

## 7.2.2 Einschalt- und Vorbereitungsreihenfolge

1. Prüfen, dass der Hauptschalter auf **ON** steht.
2. Zur HMI-**Betriebsseite** wechseln.
3. Prozessfunktionen (Waschen, Spülen, Trocknen 1/2, Abluft) wie gewünscht auf **aktiv** stellen (siehe **Kapitel 7.1.6**).
4. Die Taste **Vorbereitung Start** drücken.
5. Warten, bis Tankfüllung und Beheizung abgeschlossen sind; Soll-/Ist-Temperaturwerte auf der Betriebsseite überwachen.
6. Prüfen, dass die Signalleuchte **gelb** (einsatzbereit) leuchtet.

**Beheizungszeit:** Variabel — abhängig von vorhandener Wassermenge und -temperatur im Tank; eine feste Zeit kann nicht angegeben werden.

![HMI-Vorbereitungstaste](../../assets/7.2/1.png)

---

## 7.2.3 Luft, Wasser und Medien

| Medium | Anforderung |
|-------|------------|
| Druckluft | **6 bar** — für Vorbereitung/Füllung verpflichtend |
| Wasser | Füllt die Tanks über das automatische Füllventil |
| Vakuum | **Nicht vorhanden** |

Ein Vakuumanschluss oder Öffnungsverfahren wird nicht angewendet (siehe **Kapitel 6.6**).

---

## 7.2.4 Startverfahren

Vor dem Start die Checkliste **Kapitel 7.2.5** abschließen.

1. Prüfen, dass die Vorbereitung abgeschlossen ist und die Signalleuchte **gelb** leuchtet.
2. Prüfen, dass auf der Förderbandlinie kein Teil/Gegenstand zum Quetschen vorhanden ist.
3. Prüfen, dass die Ventile vor den Pumpen **offen** sind; falls geschlossen, öffnen.
4. Die HMI-Taste **Machine Start** drücken.
5. Prüfen, dass die Signalleuchte **grün** leuchtet und Förderband sowie gewählte Prozessfunktionen laufen.

**Erwartetes Ergebnis:** Maschine im Automatikzyklus; grüne Signalleuchte; kein aktiver Alarm am HMI.

**Abweichender Zustand:** Wird der Start nicht angenommen, die HMI-Alarmseite prüfen (siehe **Kapitel 11**). RFID-Abdeckung, Not-Halt oder Füllstandsalarm kann aktiv sein.

---

## 7.2.5 Checkliste vor Start

| # | Prüfung | Status |
|---|---------|:-----:|
| 1 | Kein Teil/Gegenstand auf der Förderbandlinie, der quetschen könnte | ☐ |
| 2 | Ventile vor den Pumpen offen | ☐ |
| 3 | Vorbereitung abgeschlossen (Füllung + Beheizung) | ☐ |
| 4 | Luft 6 bar; Luft/Wasser auf HMI-Handseite grün | ☐ |
| 5 | Not-Halt rückgesetzt; Signalleuchte gelb (bereit) | ☐ |
| 6 | Kein blockierender Alarm auf dem HMI-Alarmbildschirm | ☐ |

**Datum:** _______________ **Kontrolliert durch:** _______________

---

## 7.2.6 Erste-Teil-Versuch

| Parameter | Wert |
|-----------|-------|
| Separates Erste-Teil- / Probewaschverfahren | **Nicht vorhanden** |

Ein separates Erste-Teil-Verfahren ist nicht definiert. Die Probewäsche für einen neuen Produkttyp folgt den Rezeptschritten in **Kapitel 8.2.2**.

---

Für das Stoppen siehe **Kapitel 7.3**; für die automatische Sequenz siehe **Kapitel 7.4**.
