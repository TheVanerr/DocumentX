# 11.2 Allgemeine Störungsbeseitigung

Dieser Unterabschnitt definiert das HMI-Alarmverhalten und die Kriterien für den Ruf des autorisierten Service. Alarmcodes sind in der Tabelle **Abschnitt 11.1.2** angegeben.

---

## 11.2.1 HMI-Alarmverhalten

| Parameter | Wert |
|-----------|------|
| Alarmbildschirm | HMI-**Alarmseite** — aktive und historische Einträge |
| Signalleuchte | Alarm → **rot**; bereit → **gelb**; in Betrieb → **grün** |
| HMI-Alarmsprache | Türkisch, Englisch, Deutsch |

Bei einem aktiven Alarm erscheint ein Eintrag auf der HMI-Alarmseite; gleichzeitig leuchtet die Signalleuchte **rot**. Bediener/Linienverantwortliche(r) liest den Alarmtext und bestimmt die Eingriffspriorität.

**Alarmhistorie:** Die historischen Einträge auf der HMI-Alarmseite dienen der Analyse wiederkehrender Störungen (siehe **Abschnitt 3.4.6**).

**Reset:** Nach Beseitigung des Alarms wird HMI-Reset und ggf. Schrank-Reset angewendet. Nach Not-Halt ist das Verfahren **Abschnitt 2.5** zwingend.

---

## 11.2.2 Service-Rufkriterien

In den folgenden Situationen muss autorisierter Service über die Kontaktkanäle **Abschnitt 1.3** angefordert werden:

| # | Situation | Begründung |
|---|-------|---------|
| 1 | **Error-460** Servomotor Fehler | Servoantrieb und mechanischer Eingriff erfordern Fachkompetenz |
| 2 | Wiederholter Heizung-Fehlerstrom-Trip (**Error-170/171/172**) | Isolationsfehler; elektrische Sicherheitsgefahr |
| 3 | Wiederholter Alarm trotz Korrektur der **Error-410**-Phasenfolge | Versorgungsleitung oder Relaisfehler |
| 4 | Verdacht auf SPS-/HMI-Hardwarefehler | Software-/Hardwareeingriff erfordert Herstellerbefugnis |
| 5 | Problem besteht trotz der Schritte in der Tabelle **11.1.2** fort | Felddiagnose und Ersatzteilwechsel können erforderlich sein |
| 6 | Mechanischer Schaden, Dichtungsbruch, schwere Leckage | Risiko für Sicherheit und Prozessintegrität |
| 7 | Sicherheitsfunktion (RFID, Not-Halt, Kat. 3) Verifizierung fehlgeschlagen | Tests **Abschnitt 5.4** werden erneut nicht bestanden |

**Vorbereitung vor dem Service (Abschnitt 1.3.3):**

1. Daten des Maschinenidentifikationsschilds (Seriennr., Modell) bereithalten.
2. Aktive HMI-Alarmcodes und -texte aufzeichnen.
3. Die Prozessphase im Störungsfall angeben (Waschen/Spülen/Trocknung).
4. Wenn möglich ein Foto des HMI-Alarmbildschirms beifügen.

**Bediener/Linienverantwortliche(r) muss anhalten:** Eingriff im Elektroschrank, Arbeiten unter Spannung ohne LOTO, RFID-Bypass oder Überbrückung des Sicherheitskreises sind **verboten** — autorisiertes Personal rufen.

---
