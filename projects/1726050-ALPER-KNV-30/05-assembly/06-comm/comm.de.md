# 5.6. Kommunikation und Automatisierungsschnittstelle

Dieser Abschnitt beschreibt Feldbus-Kommunikation, Profinet-Infrastruktur, SPS/HMI-Integration und E/A-Dokumentationsreferenzen der Maschine KNV 30 3000 2B.

---

## 5.6.1. Feldbus und Protokoll

| Parameter | Wert |
|-----------|------|
| Fieldbus / Protokoll | **Profinet** |

Die Automatisierungsinfrastruktur der Maschine kommuniziert über das Profinet-Protokoll. SPS und HMI sind in dieser Infrastruktur integriert.

| Komponente | Marke / Modell |
|------------|----------------|
| SPS | SIEMENS SIMATIC S7-1200 — CPU 1215C DC/DC/DC (6ES7215-1AG40-0XB0) |
| HMI | SIMATIC HMI KTP700 Basic PN (6AV2123-2GB03-0AX0) |
| E/A-Übersicht | 36 Eingänge / 24 Ausgänge |

Encoder-/Feedback-Einstellungen sind im SPS-Programm integriert; die Einstellung ist durch den **Hersteller** vorzunehmen.

<!-- FOTO: SPS und HMI — Profinet-Anschlussstellen -->
![Profinet-Infrastruktur — SPS/HMI](../../assets/FOTO-5-6-0-profinet.png)

---

## 5.6.2. Anbindung Leitsystem

| Parameter | Wert |
|-----------|------|
| Leitsystem (MES / SCADA) — Anbindung | Unbekannt |

MES- oder SCADA-Integration ist im Projektumfang nicht definiert. Leitsystemanbindung ist bei Bedarf mit dem Anwenderunternehmen zu bewerten.

---

## 5.6.3. Fernzugriff

| Parameter | Wert |
|-----------|------|
| Fernzugriff | Ja |
| Modul | Secomea |

Fernzugriff wird über das Secomea-Modul bereitgestellt. Modulinstallation und -konfiguration sind nach der Montage in Betrieb zu nehmen.

<!-- FOTO: Secomea-Fernzugriffsmodul — im Schrank -->
![Secomea-Modul](../../assets/FOTO-5-6-1-secomea.png)

---

## 5.6.4. E/A-Liste und Dokumentation

| Dokument | Dateiname |
|----------|-----------|
| E/A-Liste | **1726050-ALPER-KNV 30 I/O LISTESI.pdf** |

Die E/A-Liste ist das Referenzdokument für Ein-/Ausgangsadressen und Sensor-/Aktuatordefinitionen. Elektrische Anschlüsse sind bei Installation und Inbetriebnahme anhand dieser Liste zu verifizieren.

<!-- FOTO: E/A-Liste Beispielseite — PDF-Referenz -->
![E/A-Listenreferenz](../../assets/FOTO-5-6-2-io-listesi.png)

---

## 5.6.5. Kommunikations-Checkliste

| # | Prüfung | Status |
|---|---------|--------|
| 1 | Profinet-Netzwerk konfiguriert | ☐ |
| 2 | SPS — HMI-Kommunikation verifiziert | ☐ |
| 3 | E/A-Liste referenziert | ☐ |
| 4 | Secomea-Modul installiert (falls zutreffend) | ☐ |
| 5 | Encoder/Feedback durch Hersteller eingestellt | ☐ |

**Datum:** _______________ **Geprüft von:** _______________
