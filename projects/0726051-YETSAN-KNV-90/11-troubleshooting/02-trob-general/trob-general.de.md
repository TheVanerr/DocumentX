# 11.2 Allgemeine Störungsbeseitigung

Dieses Unterkapitel beschreibt das Leuchtenverhalten und die Kriterien für die Anforderung des autorisierten Service. Die Störungsszenarien sind in der Tabelle in **Kapitel 11.1.2** aufgeführt.

---

## 11.2.1 Verhalten der Leuchten und Anzeigen

| Parameter | Wert |
| :--- | :--- |
| Alarmbildschirm | Kein HMI — nicht zutreffend |
| Bereitschaftsanzeige | Blaue **RESET**-Leuchte — an: Sicherheitskreis geschlossen; aus: Not-Halt / Klappe / Reset ausstehend |
| Füllstandwarnung | Rote **TANK 1 / TANK 2 WASHING LEVEL** — Wasserstand im Tank unzureichend; zugehörige Heizung und Pumpe gesperrt |
| Funktionsstatus | Weiße **Betriebsleuchte** — Ausgang aktiv; bei Schalterstellung ON aus → Verriegelung oder Schutzauslösung |
| Förderer | Display des Delta-Frequenzumrichters — Alarmcode |
| Im Schaltschrank | MKŞ-Hebelstellung, RCCB-Hebelstellung, Sicherungsstellung, MKR-01-Anzeige — nur Elektrofachkraft, unter LOTO |
| Sprache der Alarmtexte | Nicht zutreffend |
| Alarmhistorie / Log | Keine — Störungen werden von Hand in das Wartungsprotokollformular eingetragen (**Kapitel 9.1.7**) |

Bei offenem Sicherheitskreis (RESET aus) arbeitet kein Ausgang, auch wenn die Funktionsschalter auf ON stehen; damit die Funktionen nach dem Reset nicht unkontrolliert anlaufen, müssen die Schalter vor dem Reset auf OFF gestellt werden (**Siehe Kapitel 7.3.2**).

**Reset:** Für den Sicherheitskreis die RESET-Taste (**Kapitel 2.5**); für MKŞ und RCCB der Hebel-Reset im Schaltschrank (unter LOTO, **Kapitel 11.1.3**); für den Frequenzumrichter Schalter CONVEYOR OFF/ON oder die Reset-Taste des Frequenzumrichters.

---

## 11.2.2 Kriterien für die Serviceanforderung

In den folgenden Fällen ist über die Kontaktkanäle in **Kapitel 1.3** Unterstützung durch den autorisierten Service einzuholen:

| # | Situation | Begründung |
| :---: | :--- | :--- |
| 1 | **Wiederholte Fehlerstrom-Auslösung** (RCCB) — trotz Heizstabwechsel | Isolationsfehler; elektrisches Sicherheitsrisiko |
| 2 | **Wiederholter Phasenfolgefehler** (MKR-01) — trotz Phasenkorrektur | Störung der Versorgungsleitung oder des Relais |
| 3 | **Sicherheitsfunktionstest nicht bestanden** — Not-Halt oder Klappenschalter hält die Maschine nicht an, RESET nicht möglich | Störung von Sicherheitsrelais / Schalterkette; Tests in **Kapitel 5.4** werden nicht bestanden |
| 4 | **Wiederkehrende Motorstörung trotz Austausch von MKŞ/Schütz** | Motorwicklung, Lager oder mechanische Störung |
| 5 | **Alarm des Förderer-Frequenzumrichters** wiederholt sich oder Frequenzumrichter erfordert Parameteränderung | Parameter des Frequenzumrichters nur durch den Herstellerservice |
| 6 | **Schwerer mechanischer Schaden / Leckage** — Tankriss, Kettenbruch, Schaden am Drehmomentbegrenzer | Risiko für Sicherheit und Prozessintegrität |
| 7 | **Elektrische Störung, die das qualifizierte Personal nicht beheben kann** | Vor-Ort-Diagnose und Arbeiten am Schaltplan erforderlich |
| 8 | Problem besteht trotz der Schritte in **Kapitel 11.1.2** fort | Ersatzteilwechsel oder Vor-Ort-Diagnose |

**Vorbereitung vor der Serviceanforderung (Kapitel 1.3.3):**

1. Die Angaben des Typenschilds (Seriennummer 0726051, Modell KNV-90) bereithalten.
2. Den Leuchtenstatus (welche Betriebsleuchten leuchten, WASHING LEVEL, RESET) und das Etikett des ausgelösten Schaltschrankelements (z. B. Q1, K.AKIM F2) notieren.
3. Den Alarmcode auf dem Display des Frequenzumrichters notieren.
4. Den Prozesszustand zum Zeitpunkt der Störung (eingeschaltete Funktionen, Temperaturen, Geschwindigkeit) angeben.
5. Wenn möglich, Fotos des Schaltschrankinneren und des Störungsbereichs beifügen.

**Der Bediener muss hier stoppen:** Eingriffe im Schaltschrank, Arbeiten unter Spannung außerhalb von LOTO, Überbrücken von Klappenschaltern oder Brücken des Sicherheitskreises sind **verboten** — qualifiziertes Personal anfordern.
