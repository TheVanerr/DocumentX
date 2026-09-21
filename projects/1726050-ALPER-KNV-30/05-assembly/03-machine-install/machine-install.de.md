# 5.3 Systemanschlüsse und Inbetriebnahme

Medien- und Elektroanschlüsse werden im Rahmen von **Kapitel 5.1 Schritte 4–8** ausgeführt. Technische Anschlusswerte stehen in den Tabellen **Kapitel 3.3.3** (Elektro) und **Kapitel 3.3.5** (Luft/Wasser); dieser Abschnitt definiert das Installationsverfahren.

Es ist kein Hydrauliksystem vorhanden. Es gibt keinen Vakuumanschluss.

---

## 5.3.1 Druckluftanschluss

| Parameter | Wert (Kapitel 3.3.5) |
|-----------|---------------------------|
| Drucklufteingang | 6 bar |
| Anschluss | 3/4" |
| Reglereinstellung | 6 bar |

### Anschlussverfahren

1. Die Anlagendruckluftleitung an den Maschineneingang anschließen (3/4").
2. Den Pneumatikregler auf **6 bar** einstellen (siehe **Kapitel 6.5**).
3. Die HMI-**Handseite** öffnen.
4. Warten, bis die Anzeige **Luftinformation** **grün** leuchtet.

**Erwartetes Ergebnis:** Luftinformation auf der HMI-Handseite grün.

**Abweichender Zustand:** Bleibt die Anzeige rot, Druck, Anschlussdichtung und Reglereinstellung prüfen.

![Druckluftanschluss](../../assets/5.3/1.png)

---

## 5.3.2 Wasseranschluss

| Parameter | Wert (Kapitel 3.3.5) |
|-----------|---------------------------|
| Wassereingangsdruck | 1 bar |
| Anschluss | 1/2" |
| Wassertemperatur | +10°C – +70°C |
| Wasserqualität | Leitungswasser oder aufbereitetes Wasser |

### Anschlussverfahren

1. Die Anlagenwasserleitung an den Maschineneingang anschließen (1/2").
2. Prüfen, dass der Wasserdruck **1 bar** beträgt.
3. Die HMI-**Handseite** öffnen.
4. Warten, bis die Anzeige **Wasserinformation** **grün** leuchtet.

**Erwartetes Ergebnis:** Wasserinformation auf der HMI-Handseite grün.

**Abweichender Zustand:** Erfolgt keine Füllung, prüfen, dass das automatische Füll-Wassereinlassventil offen ist (siehe **Kapitel 7.2** — Inbetriebnahme-Voraussetzungen).

![Wasseranschluss](../../assets/5.3/2.png)

---

## 5.3.3 Elektroanschluss

Elektroversorgungswerte stehen in **Kapitel 3.3.3** — Tabelle Elektrische Eigenschaften. Mindestinstallationsleitung: **380 V, 50 Hz, 3 Phasen, 3P+N+PE, 50 kW / 100 A, ICC 10 kA**.

**GEFAHR — Elektrischer Schlag:** Arbeiten an spannungsführenden Leitungen nur durch autorisiertes Personal und mit Verriegelungsverfahren. Vor dem Anschluss muss der Hauptschalter auf **OFF** stehen.

### Anschlussverfahren

1. Die Dreiphasenversorgungsleitung an die Schrankeingangsklemmen in Konfiguration **3P+N+PE** anschließen.
2. Prüfen, dass der Erdungsanschluss vollständig ist.
3. Prüfen, dass Hauptschalter (**100 A**, Schneider) und Schutzelemente mit den Werten in **Kapitel 3.3.3** übereinstimmen.
4. Autorisiertes Elektrofachpersonal führt Festigkeits- und Isolationsprüfung der Anschlüsse durch.

![Elektroanschluss](../../assets/5.3/3.png)

---

## 5.3.4 Inbetriebnahme und Phasenprüfung

Die Phasenfolge ist für Pumpen- und Lüfterdrehrichtung kritisch; vertauschte Phase kann Gegenlauf der Motoren und Prozessstörung verursachen.

### Inbetriebnahmeverfahren

| Nr. | Vorgang |
|:----:|-------|
| 1 | Dreiphasenversorgungsleitung am Schrank angeschlossen |
| 2 | Hauptschalter auf **ON** — Maschinenstrom am Schrank eingeschaltet |
| 3 | Phasendrehrichtung am **Phasenfolge-Relais** geprüft |
| 4 | Bei vertauschter Phasendrehrichtung Hauptschalter **OFF**; autorisiertes Elektrofachpersonal hat **zwei Phasen** getauscht; Schalter wieder eingeschaltet |

### Checkliste elektrische Inbetriebnahmeprüfung

| Prüfung | Erwartetes Ergebnis |
|---------|----------------|
| Gibt das Phasenschutzrelais Ausgang? | Ja |
| Ist Spannung an der Maschine vorhanden? | Ja |
| Stoppt die Maschine bei Betätigung des Not-Halt? | Ja |

Not-Halt-Prüfschritte stehen in **Kapitel 5.4.1**; das Reset-Verfahren in **Kapitel 2.5**.

![Phasenprüfung](../../assets/5.3/4.png)

---

## 5.3.5 Abschluss-Checkliste Anschlüsse

| # | Prüfung | Status |
|---|---------|:-----:|
| 1 | Druckluftanschluss hergestellt (6 bar, 3/4") | ☐ |
| 2 | Luftinformation auf HMI-Handseite grün | ☐ |
| 3 | Wasseranschluss hergestellt (1 bar, 1/2") | ☐ |
| 4 | Wasserinformation auf HMI-Handseite grün | ☐ |
| 5 | Dreiphasen-Elektroanschluss hergestellt (380 V, 50 Hz) | ☐ |
| 6 | Phasendrehrichtung bestätigt | ☐ |
| 7 | Strom am Schrank eingeschaltet | ☐ |
| 8 | Phasenschutzrelais gibt Ausgang | ☐ |

Nach Abschluss der Anschlüsse zu den Prüfungen in **Kapitel 5.4** und **5.5** übergehen.

![HMI-Anschlussstatus](../../assets/5.3/5.png)
