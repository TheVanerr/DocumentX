# 5.6 Kommunikations- und Automatisierungsschnittstelle

Die Maschine **KNV 90 7500 2B** wird über die **PLC** im Schaltschrank gesteuert; sie verfügt über **kein HMI und keine Anbindung an ein übergeordnetes System (MES / SCADA)**. Der Bediener führt die Maschine über die Schalter des Bedienfelds; die PLC verarbeitet diese Befehle und die Prozessverriegelungen (**Siehe Kapitel 3.4**). Das PLC-Programm wird vom Hersteller aufgespielt und im Werk geprüft ausgeliefert; bei der Installation werden weder ein Programm geladen noch Parameter geändert. Dieses Kapitel beschreibt die Prüfung bei der Installation, dass die PLC-Steuerung korrekt arbeitet und die Automatisierungsdokumente übergeben wurden.

---

## 5.6.1 PLC und Kommunikation

| Parameter | Wert |
| :--- | :--- |
| PLC Hersteller / Modell | [EKSİK] |
| PLC-CPU-Modell | [EKSİK] |
| Feldbus / Protokoll (Profinet / EtherCAT / Modbus usw.) | [EKSİK] |
| HMI | Keines |
| Fernzugriff | Nein |

Die PLC hat keine Sicherheitsfunktion. Die Not-Halt- und Wartungsklappenkreise werden von zwei von der PLC unabhängigen Sicherheitsrelais ausgewertet (**Siehe Kapitel 2.1.3**); das Anschließen eines Computers an die PLC, eine Programmänderung oder das Versetzen der PLC in den STOP-Zustand setzt diese Kreise nicht außer Kraft und ersetzt keine Energietrennung (**Siehe Kapitel 2.4**).

---

## 5.6.2 Anbindung an ein übergeordnetes System

| Parameter | Wert |
| :--- | :--- |
| Anbindung an ein übergeordnetes System (MES / SCADA) | Keine — die Maschine arbeitet autonom |

Soll ein Signal von der Maschine an ein übergeordnetes System übertragen werden (z. B. Betriebszustand, Störmeldekontakt), darf diese Änderung nur mit Freigabe des Herstellers im Schaltschrank und im PLC-Programm vorgenommen werden (**Siehe Kapitel 1.3**).

---

## 5.6.3 I/O-Liste und Dokumentation

| Dokument | Status |
| :--- | :--- |
| Schaltplan | Lieferpaket — Referenz für Schaltschrank, PLC-Ein-/Ausgangsanschlüsse, Motoren, Heizungen und Sicherheitskreis (**Siehe Kapitel 13.1**) |
| I/O-Liste | [EKSİK] |
| PLC-Programmsicherung | [EKSİK] |

---

## 5.6.4 Checkliste

| # | Prüfung | Status |
| :---: | :--- | :---: |
| 1 | Die Schalter des Bedienfelds schalten die zugehörigen Einheiten über die PLC (**Kapitel 5.5.2**) | ☐ |
| 2 | Tank-Füllstandverriegelung funktioniert — bei unzureichendem Tankfüllstand schalten die zugehörige Heizung und Pumpe nicht zu (**Kapitel 3.4.6**, **5.5.4**) | ☐ |
| 3 | Der Abluftventilator schaltet zusammen mit dem Schalter CONVEYOR ein und aus (**Kapitel 3.4.3**) | ☐ |
| 4 | Bestätigt, dass keine Anbindung an ein übergeordnetes System erforderlich ist | ☐ |
| 5 | Schaltplan im Lieferpaket vorhanden; Übergabestatus von I/O-Liste und PLC-Programmsicherung erfasst (**Kapitel 13.1**) | ☐ |

**Datum:** _______________ **Geprüft von:** _______________

---

Aufbau des Bedienfelds siehe **Kapitel 3.4**; Einstellungen siehe **Kapitel 6**.
