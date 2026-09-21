# 12.2 Außerbetriebnahme

Die Maschine kann temporär (geplanter Stillstand, zwischen Wartungen) oder dauerhaft (Schrott, Anlagenstilllegung) außer Betrieb genommen werden. In beiden Fällen unterscheiden sich die Anforderungen an die Energieisolierung und — abhängig von der Dauer — an die Tankentleerung.

---

## 12.2.1 Dauerhafte Außerbetriebnahme

| Parameter | Anforderung |
|-----------|------------|
| Dauerhafte Außerbetriebnahme | Vollständige Demontage und sicheres Verschließen (Blindsetzen) müssen durchgeführt werden |

Die dauerhafte Außerbetriebnahme wird angewendet, wenn die Maschine nicht wieder in Betrieb genommen wird.

### Verfahren zur dauerhaften Außerbetriebnahme

1. Wenden Sie das Demontageverfahren nach **Abschnitt 12.1** vollständig an.
2. Schalten Sie den Hauptschalter aus und belassen Sie das **LOTO**-Schloss, oder trennen Sie die Leitung physisch.
3. Lösen Sie Elektro-, Luft- und Wasseranschlüsse sicher; verschließen Sie offene Enden (blind).
4. Setzen Sie die Steuerkreise (PLC, HMI, Sicherheitsrelais) außer Funktion; bei Bedarf Abstimmung mit dem Herstellerservice (**Abschnitt 1.3**).
5. Entsorgen Sie Maschine oder Teile gemäß dem Schrott-/Recyclingverfahren in **Abschnitt 12.3**.
6. Kennzeichnen Sie die Maschinenseriennummer (**1726050**) in den Anlagenakten als außer Betrieb.

**Erwartetes Ergebnis:** Energieleitungen verschlossen; Maschine nicht wieder einschaltbar; Entsorgungsprozess eingeleitet.

---

## 12.2.2 Temporäre Außerbetriebnahme

| Parameter | Anforderung |
|-----------|------------|
| Temporäre Außerbetriebnahme | Stopp + (falls erforderlich) Tankentleerung + Hauptschalter OFF |

Der temporäre Stillstand wird für Wochenende, geplante Wartung, Linienrevision oder kurzen Produktionsstopp angewendet.

### Kurzzeitiger temporärer Stillstand (einige Stunden — eine Schicht)

1. Setzen Sie die Maschine mit HMI **Maschinenstopp** still.
2. Stellen Sie die Koordination mit der Roboterlinie sicher.
3. Tankentleerung ist **nicht erforderlich** (siehe **Abschnitt 7.3.1**).
4. Wiederinbetriebnahme: Vorbereitungs- und Startverfahren **Abschnitt 7.2**.

### Längerfristiger temporärer Stillstand (Wochenende / geplante Wartung / >24 h)

1. Setzen Sie die Maschine mit HMI-Stopp still.
2. **Entleeren und reinigen Sie die Tanks** — siehe **Abschnitte 7.3.4**, **10.1.5**.
3. Stellen Sie den Hauptschalter auf **OFF**.
4. Bei Eingriff durch Wartungspersonal **LOTO** anwenden (**Abschnitt 2.4**).
5. Schutz entsprechend den Lagerbedingungen vorsehen — siehe **Abschnitt 4.2**.
6. Wiederinbetriebnahme:
   - Hauptschalter ON
   - Anlagenventile Luft/Wasser offen
   - **Abschnitt 7.2** Vorbereitung + Start
   - Prüfung der Sicherheitsfunktionen gemäß periodischem Plan (**Abschnitte 6.2**, **9.1.3**)

**VORSICHT — Korrosion/Geruch:** Verbleiben die Tanks gefüllt, steigen Geruch, mikrobielles Wachstum und Korrosionsrisiko an Edelstahlflächen.

---
