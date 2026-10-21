# 6.2 Sicherheitseinstellungen

Die Sicherheitseinstellungen stellen sicher, dass die Sicherheitsfunktionen der Maschine (magnetische Schalter der Wartungsklappen, Not-Halt-Kreis, Sicherheitsrelais, Füllstandverriegelung) ihrem Auslegungszweck entsprechend erhalten bleiben. Bei dieser Maschine gibt es **keine** vom Bediener veränderbaren Sicherheitsparameter (Lichtvorhangabstand, Überbrückungsdauer, Muting usw.). Not-Halt- und Klappenkreis arbeiten mit von der PLC unabhängigen Sicherheitsrelais und sind so ausgelegt, dass sie nicht überbrückt werden können; die Füllstandverriegelung ist im PLC-Programm hinterlegt und kann vom Bediener nicht verändert werden; der Einstellumfang beschränkt sich auf die periodische **Funktionsprüfung** und die Regeln für den Wartungszugang.

Positionen der Not-Halt-Taster und Reset-Verfahren: **Siehe Kapitel 2.5**; LOTO: **Siehe Kapitel 2.4**.

---

## 6.2.1 Schalter der Wartungsklappen — Überbrückungsverbot

| Parameter | Wert / Beschreibung |
| :--- | :--- |
| Überbrückung der Schutztür (Wartung) | **Keine — wird nicht überbrückt, nicht gebrückt** |
| Wartungszugang | Maschine wird gestoppt; Hauptschalter OFF; **LOTO** wird angewendet; erst danach werden die Klappen geöffnet |

An der Maschine werden 7 Wartungsklappen mit magnetischen Schaltern Omron F3STGRNLPU21M1J8 überwacht; die Schalter sind in Reihe geschaltet und werden von einem eigens für die Klappenschalterkette vorgesehenen Sicherheitsrelais Omron G9SB-2002-A (10 11531) ausgewertet. Die Not-Halt-Kette wird von einem separaten Relais G9SB-2002-A (10 00220) überwacht (**Siehe Kapitel 2.1.3**). Die Schalter müssen fluchtend zum Magneten bzw. zur Klappe ausgerichtet sein; Überbrücken, Brücken, Täuschen mit einem Magneten oder das Auflegen von Fremdkörpern auf den Schalter ist **strengstens verboten** — die Sicherheitsfunktion fällt aus und die Maschine verlässt den Garantie- und Haftungsrahmen.

Die Prüfung bei der Installation und die **wöchentliche** kurze Funktionsprüfung (Bestätigung des Stopps beim Öffnen der Klappe) sind in **Kapitel 5.4.2** definiert; diese Prüfung ist kein Wartungszugang. Für Wartung und Reinigung ist LOTO zwingend erforderlich (**Siehe Kapitel 2.4**).

**WARNUNG — Außerkraftsetzen einer Sicherheitseinrichtung:** Das Überbrücken eines Klappenschalters kann dazu führen, dass die Pumpen bei geöffneter Klappe weiterhin bis zu +70 °C heißes Wasser sprühen und der Förderer weiterläuft; dies kann zu Verbrühungen und Quetschverletzungen führen. Die Klappenschalter nicht überbrücken.

---

## 6.2.2 Lichtvorhang

| Parameter | Wert / Beschreibung |
| :--- | :--- |
| Einstellabstand des Lichtvorhangs (mm) | An der Maschine ist **kein** Lichtvorhang vorhanden |

Eine Lichtvorhangeinstellung ist nicht zutreffend. Die Eingangs-/Ausgangsbereiche des Förderers sind mit Drahtschutzgittern umgeben; die Zugangskontrolle erfolgt über Klappenschalter und Not-Halt.

---

## 6.2.3 Not-Halt-Prüfintervall

| Parameter | Wert |
| :--- | :--- |
| Not-Halt-Prüfintervall | **Einmal monatlich** (**Siehe Kapitel 9.1.3**) |
| Kurzprüfung der Klappenschalter | **Wöchentlich** |
| Prüfbericht Sicherheitsfunktionen (Not-Halt, Klappen, Fehlerstrom) | **Jährlich** |

Die monatliche Not-Halt-Funktionsprüfung bestätigt, dass jeder der 7 Taster das Sicherheitsrelais der Not-Halt-Kette öffnet und die RESET-Kette funktionsfähig bleibt. Wird die Prüfung ausgelassen, kann das Stoppen im Störfall nicht garantiert werden; verdeckte Fehler in den Kontaktblöcken der Taster und an den Relaiseingängen zeigen sich nur bei der Prüfung.

**Periodische Prüfung — Übersicht**

1. Monatlich einen Eintrag im Prüfkalender anlegen (Wartungsformular).
2. Jeden der 7 Not-Halt-Taster einzeln nach dem Prüfverfahren in **Kapitel 5.4.1** prüfen.
3. Nach jeder Prüfung das Reset-Verfahren gemäß **Kapitel 2.5** durchführen.
4. Das Ergebnis in das Wartungsprotokollformular in **Kapitel 9.1.7** eintragen.
5. Ist das Ergebnis NOK, die Maschine nicht in Betrieb nehmen und den Herstellerservice informieren (**Siehe Kapitel 1.3**).

---

## 6.2.4 Checkliste Sicherheitseinstellungen

| # | Prüfung | Status |
| :---: | :--- | :---: |
| 1 | Klappenschalter / Sicherheitskreis nicht überbrückt | ☐ |
| 2 | Wartungszugang erfolgt mit LOTO | ☐ |
| 3 | Monatliche Not-Halt-Prüfung geplant und dokumentiert | ☐ |
| 4 | Wöchentliche Kurzprüfung der Klappenschalter geplant | ☐ |
| 5 | Füllstandsensor nicht gebrückt | ☐ |

**Datum:** _______________ **Geprüft von:** _______________

---

Sicherheitsprüfung bei der Installation: **Siehe Kapitel 5.4**; Not-Halt: **Siehe Kapitel 2.5**.
