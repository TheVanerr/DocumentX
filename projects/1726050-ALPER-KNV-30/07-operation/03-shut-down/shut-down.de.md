# 7.3 Maschinenstopp

Maschinenstopp-Befehle werden über die HMI-**Betriebsseite** gegeben. Der **Normalstopp** beendet den täglichen Betrieb; der **Not-Halt** wird nur bei unmittelbarer Gefahr verwendet. Bei Langzeitstillständen erfolgen Tankentleerung und Reinigung gemäß **Kapitel 10**.

---

## 7.3.1 Normalstopp-Verfahren

Für den normalen Produktionsstopp wird die HMI-Taste **Machine Stop** verwendet.

1. Zur HMI-**Betriebsseite** wechseln.
2. Die Taste **Machine Stop** drücken.
3. Prüfen, dass Förderband, Pumpen, Lüfter und alle Prozessfunktionen stillstehen.
4. Den Status der Signalleuchte prüfen (ohne Alarm gelb — nach Stopp bereit). Nach dem Stopp darf die Leuchte nicht grün bleiben.

**Erwartetes Ergebnis:** Alle beweglichen Funktionen still; Prozessflüssigkeit kann in den Tanks verbleiben (Kurzstopp).

Bei Kurzpause-Stopps ist keine Tankentleerung erforderlich. Für Wochenende oder Langzeitstillstand siehe **Kapitel 7.3.4**.

![HMI-Stopp](../../assets/7.3/1.png)

---

## 7.3.2 Neustart nach Not-Halt

Der Not-Halt ist in **Kapitel 2.5** definiert; in diesem Abschnitt wird nur der Betriebsablauf zusammengefasst.

Bei Betätigung des Not-Halt stoppt **jede Funktion** an der Maschine; die Signalleuchte leuchtet **rot**.

Neustart:

1. Die physische Bedrohung beseitigen.
2. Das Reset-Verfahren **Kapitel 2.5** anwenden (Not-Halt lösen → Schrank-Reset → HMI-Alarm-Reset).
3. Mit dem Vorbereitungs- und Startverfahren ab **Kapitel 7.2** fortfahren.

Die periodische Not-Halt-Funktionsprüfung muss **einmal monatlich** durchgeführt werden (siehe **Kapitel 6.2.3**, **5.4.1**).

![Reset-Taste](../../assets/7.3/2.png)

---

## 7.3.3 Ausschaltreihenfolge

Vor geplanter Energieabschaltung oder Wartung:

1. Die Maschine mit HMI **Machine Stop** stoppen.
2. Prüfen, dass die Prozessfunktionen vollständig stillstehen.
3. Den Hauptschalter auf **OFF (0)** stellen.
4. Ist Wartung oder Eingriff erforderlich, **LOTO** anwenden (siehe **Kapitel 2.4**).

Den Hauptschalter nicht bei laufender Maschine ausschalten; plötzliche Unterbrechung von Pumpe und Heizung kann Schäden verursachen.

---

## 7.3.4 Langzeitstillstand

Bei Wochenende, geplanter Wartung oder langem Linienstillstand:

| Parameter | Anforderung |
|-----------|------------|
| Langzeitstillstand | Tanks **müssen entleert und gereinigt werden** |

1. Die Maschine gemäß **Kapitel 7.3.1** oder **7.3.3** stoppen und die Energie trennen.
2. Das Tankentleerungs- und Reinigungsverfahren anwenden (**Siehe Kapitel 10.1.5** — Schritte dort).
3. Bei Bedarf die Maschine gemäß Lagerbedingungen **Kapitel 4.2** schützen.

Werden Tanks voll belassen, steigen Geruch, mikrobielles Wachstum und Korrosionsrisiko; das Betriebsgewicht steigt auf **1500 kg** (siehe **Kapitel 3.3.1**).

---

Für das Reinigungsverfahren siehe **Kapitel 10**.
