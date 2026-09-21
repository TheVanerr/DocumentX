# 11.7 Sensorstörungen

An der Maschine sind Sicherheits- (RFID), Prozess- (Niveau, Temperatur) und Linienintegrationssensoren (Ausgang-Produkterkennung, Leckagewanne) vorhanden. Bei Sensorstörungen zuerst den HMI-Alarmcode mit der Tabelle **Abschnitt 11.1.2** abgleichen.

---

## 11.7.1 Zugehörige Sensoren aus der Alarmtabelle

| Alarm | Sensor / Thema | Prüfung |
|-------|---------------|---------|
| Error-422 | Abdeckung / **RFID**-Sicherheitssensor | Abdeckung vollständig geschlossen; RFID-Tag-Ausrichtung; kein Bypass |
| Error-200/201 | Waschtank-**Wasserniveau** | Niveausonde; Füllventil; Leckage |
| Error-202/203 | Spültank-**Wasserniveau** | Niveausonde; Füllventil; Leckage |
| Error-452 | **Leckagewanne** Wassererkennung | Wasseransammlung in der Wanne; Tank-/Dichtungsleckage; Drain |
| Error-461 | **Ausgangsförderer** Produkterkennung | Sensorausrichtung; Roboter-Teileentnahme; HMI-Bestätigung |

### Error-422 — Abdeckung / RFID

Der RFID-Sensor bestätigt, dass die Wartungsabdeckung sicher geschlossen ist. Bei offener Abdeckung oder wenn der Sensor sie nicht sieht, startet die Maschine nicht und bleibt im Betrieb stehen.

1. Verifizieren, dass die Wartungsabdeckung vollständig geschlossen ist.
2. RFID-Tag- und Sensorausrichtung prüfen (Schmutz, Metallteilhindernis).
3. Sensorkabelanschluss visuell prüfen.
4. **RFID nicht umgehen (bypass)** — die Sicherheitsfunktion wird deaktiviert (siehe **Abschnitt 2.4**, **5.4.2**).

### Error-200/201 und Error-202/203 — Tankniveau

1. Visuelles Tankniveau prüfen.
2. Automatisches Füllventil und Wasser-/Luftdruck verifizieren (**Abschnitt 11.5**).
3. Niveausondenanschluss prüfen.
4. Bei dauerhaft niedrigem Niveau Leckage untersuchen (Error-452).

### Error-452 — Leckagewanne

1. Wasseransammlung in der Leckagewanne prüfen.
2. An Tank-Dichtungsfugen und Rohranschlüssen nach Leckage suchen.
3. Verifizieren, dass die Wannendrainleitung nicht verstopft ist.
4. Gibt der Sensor Fehlalarm, Sonde reinigen; besteht der Fehler fort, Sensor ersetzen.

### Error-461 — Ausgangsförderer Produkterkennung

Die Maschine läuft in einer 24/7-Roboterlinie; bei erkanntem Teil am Ausgang bleibt die Maschine stehen.

1. Verbliebenes Teil auf dem Ausgangsförderer prüfen.
2. Verifizieren, dass das Roboterprogramm das Teil entnommen hat.
3. Nach Entnahme des Teils die HMI-Taste **Produkt entnommen Bestätigung** drücken (**Abschnitt 3.4.6**).
4. Erkennt der Sensor dauerhaft, Ausrichtung und Schmutz prüfen.

---

## 11.7.2 Sensorparameter

Kritische Sensoren werden in Echtzeit in der HMI-**Manuellen Seite** Input-Beobachtung überwacht (**Abschnitt 3.4.5**). Status **grün** = Signal OK, **rot** = Alarm/Auslösung. Ist eine LED am physischen Sensor vorhanden, ist die Bedeutung im jeweiligen Hersteller-Datenblatt angegeben.

### Liste der kritischen Sensoren

| Funktion | Typ / Modell | Lage | Zugehöriger Alarm |
|-----------|-------------|-------|:------------:|
| Abdeckungssicherheit (RFID) | Omron **F3STGRNLPU21M1J8** | Wartungsabdeckung (hinten) | Error-422 |
| Tank-Wasserniveau | **VEGASWING 51** + Edelstahl-Niveauwächter | Wasch- / Spültank (unten/oben) | Error-200–203 |
| Leckagewanne | Wassererkennungssensor | Leckagewanne unter der Maschine | Error-452 |
| Ausgang-Produkterkennung | Omron-Näherung (**E2BM12KN08M1B1** / **E3FA-DP23**) | Ausgangsförderer | Error-461 |

Ersatzteil-Bestellcodes sind in der Stücklistentabelle **Abschnitt 13.3** angegeben. Kabelfarbcode und Anschlussdetails stehen im **Elektroschaltplan** (Lieferpaket — siehe **Abschnitt 13.1.1**).

**RFID-Sicherheitssensor:** Beim Öffnen der Abdeckung bleibt die Maschine stehen; der periodische Funktionstest ist in **Abschnitt 5.4.2** und **6.2.2** definiert.

---
