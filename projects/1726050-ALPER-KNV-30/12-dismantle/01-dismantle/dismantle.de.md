# 12.1 Sicheres Demontageverfahren

Vor dem Ausbau aus der Anlage, dem Zerlegen oder dem Transport der Maschine sind Energieisolierung und Flüssigkeitsentleerung zwingend. Während der Demontage **muss die Elektrik der Maschine abgeschaltet sein**; das **Wasser in den Tanks muss entleert werden**.

An dieser Maschine gibt es keinen Hydraulikkreis; die Isolierung von Pneumatik (**6 bar** Luft) und Elektrik (**380 V**) reicht aus. Es ist keine Batterie vorhanden. In den Prozesstanks kann öliges Wasser, am Förderer Fett und von der Reinigung Reinigungsmittelrückstand vorhanden sein; die Abwasserentsorgung unterliegt **Abschnitt 10.1.8**.

---

## 12.1.1 Demontage-Voraussetzungen

Vor Beginn der Demontage müssen folgende Bedingungen erfüllt sein:

| # | Bedingung |
|---|-------|
| 1 | Die Maschine muss mit **HMI-Stopp** stillgesetzt sein |
| 2 | Die Koordination mit der Roboterlinie oder Upstream-/Downstream-Einrichtungen muss sichergestellt sein |
| 3 | Es darf kein aktiver HMI-Alarm vorliegen (vorhandene Alarme beheben — siehe **Abschnitt 11**) |
| 4 | Wasch- und Spültank müssen **entleert** sein |
| 5 | **LOTO** muss angewendet sein (**Abschnitt 2.4**) |
| 6 | Handlinggerät (Gabelstapler, SWL ≥ **1300 kg**) muss bereitstehen |

Vor längerem Stillstand oder Einlagerung sind Tankentleerung/Reinigung gemäß den Verfahren in **Abschnitten 7.3.4** und **10.1.5** durchzuführen. Demontage/Transport mit vollen Tanks verschiebt den Schwerpunkt; das Betriebsgewicht kann auf **1500 kg** steigen (siehe **Abschnitt 3.3.1**).

**WARNUNG — Quetschung:** Stellen Sie während der Demontage sicher, dass sich keine Teile oder Gegenstände auf der Förderstrecke befinden.

---

## 12.1.2 Energieisolierung (LOTO)

| Parameter | Anforderung |
|-----------|------------|
| Energieisolierungsverfahren | Das **LOTO-Verfahren** muss angewendet werden |

Energiequellen:

| Energie | Isolationspunkt | Hinweis |
|--------|-------------------|-----|
| Elektrik | Hauptschalter (Schrank) | **380 V / 50 Hz / 3 Phasen** — siehe **3.3.3** |
| Druckluft | Anlagen-Luftventil | **6 bar** — siehe **3.3.5** |
| Wasser | Anlagen-Wassereinlassventil | Automatisches Füllventil wird geschlossen |
| Gespeicherte pneumatische Energie | Leitungsdruckablass | Regler-/Ventilentleerung |

### LOTO-Anwendung — Kurzfassung

1. Setzen Sie die Maschine mit HMI **Maschinenstopp** still.
2. Stellen Sie den Hauptschalter auf **OFF (0)**.
3. Schließen Sie die Anlagenventile für **Luft** und **Wasser**.
4. Wenden Sie das LOTO-Verfahren nach **Abschnitt 2.4** vollständig an (Schloss, Schild, Prüfung).
5. Entleeren Sie die Tanks (**Abschnitt 10.1.5**).
6. Autorisiertes Personal muss prüfen, dass am Schrankeingang keine Spannung anliegt.

**GEFAHR — Elektrik:** 380-V-Drehstromversorgung. Eingriffe im Schrank nur durch autorisiertes Elektropersonal, nach LOTO.

---

## 12.1.3 Demontagereihenfolge

| Parameter | Reihenfolge |
|-----------|------|
| Demontagereihenfolge | Elektrik trennen → Tanks entleeren → Installationen lösen → mechanische Teile ausbauen |

### Demontageverfahren

1. **Betrieb stillsetzen** — Koordination der Roboterlinie; HMI-Stopp.
2. **LOTO anwenden** — siehe **12.1.2**, **2.4**.
3. **Tanks entleeren und reinigen** — siehe **10.1.5**; Abwasser gemäß **10.1.8** entsorgen.
4. **Versorgungsanschlüsse lösen:**
   - Drehstrom (**380 V, 3P+N+PE**)
   - Druckluft (**6 bar**, 3/4")
   - Wassereinlass (**1 bar**, 1/2") und Drainleitung
5. **Mechanische Demontage** — Module und Verbindungselemente; Teileliste **Abschnitt 13.3.1**.
6. **Demontage von Elektroschrank und Leitungen** — unter LOTO; PLC/HMI der Klasse WEEE zuordnen.
7. **Transport** — über die Gabelstapler-Unterprofile; **keinen Kran verwenden** (siehe **4.1**).
8. **Teile nach Materialgruppe trennen** — siehe **12.3**.

**Hinweis:** Im Rahmen dieses Projekts ist der Versand als montierte Maschine mit **1300 kg** geplant; für den Routine-Transport ist kein Modulausbau erforderlich. Die vollständige Demontage wird nur bei Schrott oder Standortwechsel angewendet.

**Erwartetes Ergebnis:** Maschine energieisoliert; Tanks leer; Installationen gelöst; Teile bereit für Transport oder Entsorgung.

---

## 12.1.4 Recycling und Entsorgung

| Parameter | Anforderung |
|-----------|------------|
| Recycling / Entsorgung | Geltende umweltrechtliche Entsorgungsanforderungen des Einsatzlandes |
| Gefahrstoffe | Keine Batterie; öliges Prozesswasser, Fett, Reinigungsmittel — **10.1.8**, **12.3** |
| Abwasser / Reinigung | **Abschnitt 10.1.8** |

Demontageabfälle müssen nach örtlichem Recht getrennt und an lizenzierte Anlagen übergeben werden. Edelstahlgehäuse, Kunststoffdichtungen, Elektro-/Elektronikteile (PLC, HMI, Kabel) und Verpackungsmaterialien werden getrennt erfasst — Einzelheiten in **Abschnitt 12.3**.

Anschlussdaten für Druckluft, Wasser und Drain stehen in der Layoutzeichnung (siehe **Abschnitt 3.3.5**, **1726050-ALPER-KNV 30 LAYOUT.pdf**).

---

Temporäre/dauerhafte Außerbetriebnahme **12.2**; Schrott **12.3**.
