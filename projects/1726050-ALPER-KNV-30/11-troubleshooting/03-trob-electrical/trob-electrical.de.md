# 11.3 Elektrische Störungen

Bei elektrischen Störungen vor dem Eingriff im Schrank **LOTO** anwenden (**Abschnitt 2.4**). Versorgungswerte sind in der Tabelle **Abschnitt 3.3.3** angegeben.

---

## 11.3.1 Phase und Not-Halt

| Alarm | Thema | Referenz |
|-------|------|----------|
| Error-410 | Phasenfolge fehlerhaft | **Abschnitt 5.3.4**, **6.3** |
| Error-229 | Not-Halt aktiv | **Abschnitt 2.5**, **7.3.2** |

### Error-410 — Phasenfolge fehlerhaft

Vertauschte Phasenanschlüsse können dazu führen, dass Pumpen und Ventilatoren rückwärts laufen, Prozessstörungen und Motorschutz-Trip auftreten.

1. Halten Sie die Maschine still; stellen Sie den Hauptschalter auf **OFF**.
2. Prüfen Sie den Zustand des Phasenfolgerelais.
3. Ist die Phasendrehrichtung vertauscht, Hauptschalter auf **OFF** stellen; in der Versorgungsleitung **zwei Phasen tauschen** (**Abschnitt 5.3.4**). Phasen nicht bei eingeschalteter Energie tauschen.
4. Verifizieren Sie, dass das Phasenschutzrelais Ausgang gibt (**Abschnitt 5.4.3**).
5. Hauptschalter einschalten; am HMI verifizieren, dass Error-410 gelöscht ist.

| Parameter | Wert |
|-----------|------|
| Phasenausfallverhalten | Phasenfolge-/Schutzrelais **Trip**; die Maschine bleibt stehen oder kann nicht in Betrieb genommen werden. Auf der HMI Manuellen Seite Phasenfolgerelais **rot**; **Error-410** (Phasenfolge fehlerhaft) |

Bei Phasenausfall oder vertauschtem Phasenanschluss gibt der Phasenschutzkreis keinen Ausgang; Pumpen-/Ventilatorversorgung wird unterbrochen. Diagnose: **Abschnitt 5.3.4**, **5.4.3**.

### Error-229 — Not-Halt

1. Die Gefahrenquelle beseitigen.
2. Alle Not-Halt-Taster lösen (**4 Stück** an der Maschine — siehe **Abschnitt 2.5**).
3. Das Resetverfahren **Abschnitt 2.5** anwenden.
4. HMI-Alarm-Reset; Maschine gemäß **Abschnitt 7.3.2** wieder in Betrieb nehmen.

---

## 11.3.2 Motorstörungen

| Alarm | Motor | Leistung |
|-------|-------|:------------:|
| Error-100 | Waschpumpe | 3 kW |
| Error-101 | Spülpumpe | 1,85 kW |
| Error-110 | Abluftventilator | 0,37 kW |
| Error-111–114 | Trocknungsventilatoren 1–4 | 4 kW (jeweils) |
| Error-130 | Ölskimmer | 0,04 kW |
| Error-460 | Servo (Förderer) | 1,5 kW Getriebe |

Die Motorliste ist in der Tabelle **Abschnitt 3.3.4** angegeben.

### Motordiagnoseverfahren

1. HMI-Alarmcode verifizieren.
2. Bei Pumpenmotoren prüfen, dass die **Ventile vor den Pumpen offen** sind (**Abschnitt 7.2.5**).
3. Hauptschalter ausschalten; **LOTO** anwenden.
4. Motorschutzrelais-/Thermikschalterzustand prüfen; bei Trip nach Beseitigung der Ursache rücksetzen.
5. Motor- und Kabelanschlüsse visuell prüfen.
6. Bei Verdacht auf mechanisches Verklemmen Wellen-/Kupplungsfreiheit prüfen.
7. LOTO aufheben; kurzen Testlauf durchführen.

| Parameter | Wert |
|-----------|------|
| Motorschutz-Trip | **Thermischer Überlastschutz** (Pumpe, Ventilator, Ölskimmer). Trip-Status wird in der HMI-**Manuellen Seite** Input-Beobachtung überwacht (**Abschnitt 3.4.5**) |
| Wechselrichter-Alarmcodes | **Pumpe / Ventilator / Ölskimmer:** DOL-Antrieb — kein Wechselrichter, **nicht anwendbar**. **Förderer-Servo:** Siemens **6SL3210-5FE11-5UF0** — Code auf der Antriebsanzeige → **Siemens-Servoantrieb-Handbuch** (**Abschnitt 3.3.4**, **13.3**) |

Nach Trip: Störungsursache beseitigen (Verklemmen, geschlossenes Ventil, Überlast); Thermikschalter **reset**ten; HMI-Alarm löschen.

**Error-460 Servomotor Fehler:** Alarmcode auf dem Servoantrieb (**Siemens 6SL3210-5FE11-5UF0**) lesen; Bedeutung im **Siemens-Servoantrieb-Handbuch**. Mechanisches Verklemmen, Encoder- oder Kabelfehler möglich. **Autorisierter Service** wird empfohlen (siehe **Abschnitt 11.2.2**).

**Erwartetes Ergebnis:** Motorschutz normal; Motor läuft; kein HMI-Alarm.

---

## 11.3.3 Heizungsstörungen

| Alarm | Thema |
|-------|------|
| Error-170 | Waschtank-Heizung Fehlerstrom F2 |
| Error-171 | Heizung Fehlerstrom F3 |
| Error-172 | Heizung Fehlerstrom F4 |
| Error-150 | Waschtank Temperatur niedrig |
| Error-151 | Spültank Temperatur niedrig |

Temperatursollwerte werden über die HMI-Rezept-/Einstellseite vorgenommen (**Abschnitt 6.3**, **8**). Vor abgeschlossener Vorbereitung darf kein Start gegeben werden (**Abschnitt 7.2.2**).

### Temperatur niedrig (Error-150/151)

1. Verifizieren, dass das Verfahren **Vorbereitung Start** abgeschlossen ist.
2. Soll-/Isttemperaturwerte am HMI vergleichen.
3. Prüfen, ob ein Heizung-Fehlerstromalarm (Error-170–172) aktiv ist.
4. Ist das Tankniveau ausreichend — Error-200/201 oder Error-202/203 prüfen.

### Fehlerstrom-Trip (Error-170/171/172)

1. Maschine stillsetzen; **LOTO** anwenden.
2. Das betreffende Fehlerstromschutzrelais (F2/F3/F4) prüfen.
3. Heizelement und Isolierung der Tankinnenanschlüsse prüfen.
4. Ist der Trip vorübergehend durch nasse Umgebung, nach Trocknung einmal Reset versuchen.
5. Wiederholt sich der Trip, für Heizelementwechsel **Service rufen** (**Abschnitt 1.3**).

Thermoelement- und Sensorkabel-Anschlussfarbcodes sind im **Elektroschaltplan** angegeben (Lieferpaket — siehe **Abschnitt 13.1.1**).

**WARNUNG — Elektrizität:** Eingriffe am Heizungs- und Fehlerstromschutzkreis dürfen nur durch autorisiertes Elektrofachpersonal erfolgen.

---
