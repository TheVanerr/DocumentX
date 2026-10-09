# 5.6 Kommunikations- und Automatisierungsschnittstelle

Die Maschine **KNV 90 7500 2B** verfügt über **keine PLC, kein HMI, keinen Feldbus und keine Anbindung an ein übergeordnetes System**. Die Steuerung erfolgt vollständig über Relais-Schütz-Logik mittels der Schalter am Bedienfeld (**Siehe Kapitel 3.4**). Daher werden bei der Installation keine Netzwerkkonfiguration, Adressierung oder Kommunikationsprüfung durchgeführt.

---

## 5.6.1 Feldbus und Protokoll

| Parameter | Wert |
| :--- | :--- |
| Feldbus / Protokoll (Profinet / EtherCAT / Modbus usw.) | Keiner |
| PLC | Keine |
| HMI | Keines |
| Fernzugriff | Nein |

---

## 5.6.2 Anbindung an ein übergeordnetes System

| Parameter | Wert |
| :--- | :--- |
| Anbindung an ein übergeordnetes System (MES / SCADA) | Keine — die Maschine arbeitet autonom |

Soll ein Signal von der Maschine an ein übergeordnetes System übertragen werden (z. B. Betriebszustand, Störmeldekontakt), darf diese Änderung nur mit Freigabe des Herstellers im Schaltschrank vorgenommen werden (**Siehe Kapitel 1.3**).

---

## 5.6.3 I/O-Liste und Dokumentation

| Dokument | Status |
| :--- | :--- |
| I/O-Liste | Nicht zutreffend — keine PLC; Signalanschlüsse im Schaltplan (**Siehe Kapitel 13.1**) |
| Schaltplan | Lieferpaket — Referenz für Schaltschrank, Motoren, Heizungen, Sicherheitskreis |

---

## 5.6.4 Checkliste

| # | Prüfung | Status |
| :---: | :--- | :---: |
| 1 | Bestätigt, dass kein Feldbus / übergeordnetes System erforderlich ist | ☐ |
| 2 | Schaltplan im Lieferpaket vorhanden | ☐ |
| 3 | Schalterfunktionen des Bedienfelds geprüft (**Kapitel 5.5.2**) | ☐ |

**Datum:** _______________ **Geprüft von:** _______________

---

Aufbau des Bedienfelds siehe **Kapitel 3.4**; Einstellungen siehe **Kapitel 6**.
