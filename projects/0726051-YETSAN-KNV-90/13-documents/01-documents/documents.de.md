# 13.1 Liste der gelieferten Dokumente

Die mit der Maschine gelieferten technischen Dokumente gliedern sich in drei Gruppen: **separate Dokumente** (PDF-Dateien), **in der Anleitung enthaltene** Referenzen und **Fremddokumentation der Komponentenhersteller**. Dateiname und Revisionsstand sind dem Deckblatt oder dem Dateietikett im Lieferpaket zu entnehmen; in den DATA ist für dieses Projekt kein Dateiname/Revisionsstand hinterlegt ([EKSİK]).

Bei Bestell- und Serviceanfragen sind die Angaben des Typenschilds (**Seriennummer 0726051**, Modell **KNV-90**) zwingend — siehe **Kapitel 1.3.2**.

---

## 13.1.1 Zeichnungspaket für den Kunden (separates Dokument)

| # | Dokument | Dateiname / Rev. | Anwendungsbereich |
| :---: | :--- | :--- | :--- |
| 1 | **Schaltplan** | [EKSİK] — Lieferpaket (PDF) | Schaltschrank, Motoren, Heizungen, Sicherheitskreis, Zuordnung MKŞ/RCCB/Schütz–Last, BLOWER-Schaltergruppen — siehe **3.4**, **5.3**, **11.3** |
| 2 | **Aufstellungsplan (Layout) der Maschine** | [EKSİK] — Lieferpaket (PDF) | Abmessungen, Aufstellfläche, Anschlusspunkte (Luft, Wasser, Ablauf, Abluft), Hebepunkte — siehe **3.5**, **13.2** |
| 3 | **P&ID-Schema** | [EKSİK] — Lieferung noch zu bestätigen | Leitungen von Tank, Pumpe, Filter, Düsen und Ölabscheider |

**WARNUNG — Elektrik:** Vor Arbeiten anhand des Schaltplans die Maschine spannungsfrei schalten und **LOTO** anwenden (**Kapitel 2.4**).

Der vollständige Dateiname/Revisionsstand des Schaltplans wird bei der Lieferung auf dem Paket angegeben; in der Anleitung ist kein fester Dateiname definiert.

---

## 13.1.2 In der Anleitung enthaltene Dokumente

Die folgenden Inhalte werden **nicht** als separates PDF geliefert; sie befinden sich im jeweiligen Kapitel der Anleitung.

| Dokument | Kapitel | Beschreibung |
| :--- | :--- | :--- |
| Ersatzteilliste (BOM) | **13.3.1** | 40 Positionen; Bestellnummer, Kategorie, Lagerempfehlung — zusätzlich im Projektstammverzeichnis **0726051-YETSAN-KNV 90 PARCA LISTESI** |
| Übersicht kritischer Teile | **9.1.5** | Betrieblich kritische Positionen — vollständige Liste **13.3** |
| Verschleiß-/empfohlene Ersatzteile | **9.1.6** | Verbrauchspositionen für Wartung/Reinigung |
| Störungstabelle (Symptom–Ursache–Abhilfe) | **11.1.2** | 13 Störungsszenarien |
| MKŞ-Zuordnungstabelle | **11.1.3** | Schaltschrank-Etiketten Q1–Q10 und Motorzuordnung |
| Plan der periodischen Wartung | **9.1.3** | Wartungsintervalle |
| Tabelle der technischen Daten | **3.3** | Elektrik, Motoren, Heizungen, Medienwerte |
| Anordnung des Bedienfelds | **3.4.2** | Definition von Schaltern, Thermostaten und Leuchten |
| Prüfliste Sicherheitsfunktionstest | **5.4.6** | 7 Not-Halt, 7 Klappenschalter, Verriegelung |

---

## 13.1.3 Fremddokumentation der Komponentenhersteller

| Komponente | Dokument | Verwendung |
| :--- | :--- | :--- |
| Frequenzumrichter Delta VFD004EL21W-1 | Betriebsanleitung Delta Serie VFD-EL | Alarmcodes (**11.3.2**); Parameter nur durch den Herstellerservice |
| Thermostat GEMO DTH2 | Betriebsanleitung GEMO DTH2 | Sollwerteingabe, Tastenbelegung (**6.3.3**) |
| Sicherheitsrelais Omron G9SB2002AACDC241 | Datenblatt Omron G9SB | LED-Zustände, Reset-Logik (**11.7.1**) |
| Klappenschalter Omron F3STGRNLPU21M1J8 | Datenblatt Omron | Montageabstand, Ausrichtung (**11.7.1**) |
| Füllstandsensor VEGASWING 51 | Betriebsanleitung VEGA | Reinigung, Montage (**11.7.2**) |
| Castrol Tribol GR 100-1 PD | Sicherheitsdatenblatt (SDS) des Produkts | Abschmieren, PSA (**9.1.4**) |
| VEIDEC-Reinigungsprodukte | SDS und Gebrauchsanweisung des Produkts | Reinigung (**10.1.7**) |

Diese Dokumente sind bei den Komponentenherstellern erhältlich; ob sie im Lieferpaket enthalten sind, ist [EKSİK].

---

## 13.1.4 Nicht im Lieferpaket enthaltene Dokumente

| Dokument | Status | Hinweis |
| :--- | :--- | :--- |
| Pneumatikplan | [EKSİK] | Einziger Verbraucher (Ölabscheiderpumpe); die Leitung wird über den Schaltplan und die Anlageninstallation verwaltet |
| Hydraulikplan | **Nicht zutreffend** | Hydrauliksystem nicht vorhanden |
| Ersatzteilliste (BOM) — separates PDF | **Nicht zutreffend** | Enthalten — **13.3**; Quelle Stückliste (Produktbaum) **KNV 90 7500 ÜRÜN AĞACI.xlsm** |
| I/O-Liste | **Nicht zutreffend** | Keine PLC |
| PLC-Programmsicherung | **Nicht zutreffend** | Keine PLC |
| HMI-Projektsicherung | **Nicht zutreffend** | Kein HMI |
| CE-Dokumentation | [EKSİK] | Erforderlich zur Verifizierung der Sicherheitskategorie — auf Anfrage beim Hersteller |
| Kalibrierzertifikate | [EKSİK] | Auf Anfrage beim Hersteller |
| Gesamtmontagezeichnung | [EKSİK] | Layout wird als separates Dokument geliefert |
| Hebezeichnung | [EKSİK] | Für den Transport zwingend — **4.1**; falls nicht vorhanden, Rücksprache mit dem Herstellerservice |
| Bodenverankerungszeichnung | [EKSİK] | Verstellbare Füße — **5.2** |

---

## 13.1.5 Leitfaden zur Dokumentenverwendung

| Bedarf | Zu konsultierendes Dokument / Kapitel |
| :--- | :--- |
| Aufstellfläche und Anordnung | Layout-PDF + **3.5** |
| Elektrischer Anschluss | Schaltplan + **3.3.3**, **5.3.3** |
| Welcher MKŞ / RCCB versorgt welche Last | Schaltplan + **11.1.3**, **11.3.3** |
| Zuordnung Schalter BLOWER 1/2–Motor | Schaltplan |
| Betriebsbedingung des Abluftventilators | Schaltplan |
| Störungsdiagnose | **11.1.2** + Schaltplan |
| Alarmcode des Frequenzumrichters | Delta-Handbuch + **11.3.2** |
| Sollwert des Thermostats | GEMO-Handbuch + **6.3.3** |
| Ersatzteilbestellung | **13.3.1** + **1.3.4** |
| Energieisolierung | **2.4** (LOTO — einzige Quelle) |
