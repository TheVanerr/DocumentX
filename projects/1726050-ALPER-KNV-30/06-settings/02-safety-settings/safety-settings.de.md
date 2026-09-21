# 6.2 Sicherheitseinstellungen

Die Sicherheitseinstellungen halten die Sicherheitsfunktionen der Maschine (RFID, Not-Halt) im Einklang mit dem Konstruktionszweck. An dieser Maschine gibt es **keine** vom Bediener änderbaren Sicherheitsparameter (Lichtvorhangabstand, Bypass-Zeit usw.). Sicherheitseinrichtungen dürfen nicht überbrückt werden; der Einstellumfang umfasst nur den periodischen **Funktionstest** und die Regeln für den Wartungszugang.

Not-Halt-Positionen und Reset-Verfahren stehen in **Kapitel 2.5**; LOTO ist in **Kapitel 2.4** definiert.

---

## 6.2.1 RFID-Wartungsabdeckung — Bypass-Verbot

| Parameter | Wert / Beschreibung |
|-----------|------------------|
| RFID- / Abdeckungs-Sicherheitssensor | **Wird nicht überbrückt, nicht gebrückt** |
| Wartungszugang | Die Maschine wird gestoppt; **LOTO** wird angewendet; Abdeckungen werden erst danach geöffnet |

Die Anzahl fester Sicherheitstüren / fester Schutzzäune an der Maschine ist null; Wartungsabdeckungen werden durch einen **RFID-Sicherheitssensor** überwacht. RFID kann nicht deaktiviert oder gebrückt werden; Bypass zerstört die Konformität mit Sicherheitskategorie **Cat. 3** (EN ISO 13849-1) und fällt aus Haftung/Garantie (siehe **Kapitel 2.1.3**).

Der Installations- und monatliche **Funktionstest** (Stoppbestätigung beim Öffnen einer Abdeckung) ist in **Kapitel 5.4.2** definiert; dieser Test ist kein Wartungszugang. Für Wartung/Reinigung ist **Kapitel 2.4** LOTO verpflichtend.

**WARNUNG — Außerbetriebnahme einer Sicherheitseinrichtung:** Das Überbrücken des RFID-Sensors kann die Maschine bei offener Abdeckung weiterlaufen lassen und Quetschverletzungen verursachen. Nicht überbrücken.

---

## 6.2.2 Lichtvorhang

| Parameter | Wert / Beschreibung |
|-----------|------------------|
| Einstellabstand Lichtvorhang (mm) | An der Maschine ist **kein** Lichtvorhang vorhanden |

Eine Lichtvorhangeinstellung wird nicht angewendet. In den Förderband-Einlauf-/Auslaufzonen gibt es Roboterintegration; die Zugangskontrolle erfolgt durch RFID-Abdeckungssensoren und Not-Halt.

---

## 6.2.3 Not-Halt-Prüfintervall

| Parameter | Wert |
|-----------|-------|
| Not-Halt-Prüfintervall | **Einmal monatlich** |

Der monatliche Not-Halt-Funktionstest bestätigt, dass Not-Halt-Kreis und Reset-Kette betriebsfähig bleiben. Wird die Prüfung übersprungen, kann das Anhalten im Störungsfall nicht gewährleistet werden.

### Periodische Prüfung — Übersicht

1. Im Prüfkalender einen monatlichen Eintrag öffnen (Wartungsformular oder CMMS).
2. Das Prüfverfahren **Kapitel 5.4.1** anwenden — jeder der 4 Not-Halt-Taster wird einzeln geprüft.
3. Das Reset-Verfahren gemäß **Kapitel 2.5** bestätigen.
4. Das Ergebnis dokumentieren; bei NOK nicht in den Betrieb übergehen.

![Periodische Not-Halt-Prüfung](../../assets/6.2/1.png)

---

## 6.2.4 Checkliste Sicherheitseinstellungen

| # | Prüfung | Status |
|---|---------|:-----:|
| 1 | RFID / Sicherheit nicht überbrückt | ☐ |
| 2 | Wartungszugang erfolgt mit LOTO | ☐ |
| 3 | Monatliche Not-Halt-Prüfung geplant und dokumentiert | ☐ |

**Datum:** _______________ **Kontrolliert durch:** _______________

---

Für den Installation-Sicherheitstest siehe **Kapitel 5.4**; für Not-Halt siehe **Kapitel 2.5**.
