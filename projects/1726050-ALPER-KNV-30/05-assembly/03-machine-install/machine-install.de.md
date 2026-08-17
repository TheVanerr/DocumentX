# 5.3. Systemanschlüsse und Inbetriebnahme

Anschlussarbeiten werden im Rahmen von **Schritt 4–8** der Montageschritte in Abschnitt 5.1 durchgeführt.

---

## 5.3.1. Druckluftanschluss

| Parameter | Wert |
|-----------|------|
| Drucklufteinlass | 6 bar |
| Anschlusstyp | 3/4" |
| Pneumatikregler-Einstellung | 6 bar |

### Anschlussverfahren

1. Werks-Druckluftleitung an Maschineneingang anschließen (3/4").
2. Regler auf **6 bar** einstellen.
3. **Handseite** auf der HMI-Oberfläche öffnen.
4. Prüfen, dass Luftanschlussstatus **grün** anzeigt.

Pneumatik-Fülltest: *Leuchtet die Luftanzeige auf der HMI-Handseite nach dem Luftanschluss grün?*

<!-- FOTO: Druckluftanschlussstelle — 3/4" und Regler -->
![Druckluftanschluss](../../assets/FOTO-5-3-0-hava-baglantisi.png)

---

## 5.3.2. Wasseranschluss

| Parameter | Wert |
|-----------|------|
| Wassereinlassdruck | 1 bar |
| Anschlusstyp | 1/2" |
| Wassertemperatur | +10°C – +70°C |
| Wasserqualität | Leitungswasser oder aufbereitetes Wasser |

### Anschlussverfahren

1. Werks-Wasserleitung an Maschineneingang anschließen (1/2").
2. Wasserdruck **1 bar** verifizieren.
3. **Handseite** auf der HMI-Oberfläche öffnen.
4. Prüfen, dass Wasseranschlussstatus **grün** anzeigt.

Pneumatik-/Hydraulik-Fülltest (Wasser): *Leuchtet die Wasseranzeige auf der HMI-Handseite nach dem Wasseranschluss grün?*

<!-- FOTO: Wasseranschlussstelle — 1/2" -->
![Wasseranschluss](../../assets/FOTO-5-3-1-su-baglantisi.png)

---

## 5.3.3. Elektroanschluss

| Parameter | Wert |
|-----------|------|
| Versorgungsspannung | 380 V |
| Versorgungsfrequenz | 50 Hz |
| Phasenzahl | 3 (Drehstrom) |
| Installierte Gesamtleistung | 50 kW |
| Maximaler Strombezug | 100 A |
| Versorgungskonfiguration | 3P+N+PE |
| Hauptschalter | 100 A, Schneider |
| Gesamtsicherung / Leistungsschalter | 100 A |
| Kurzschlussstrom (ICC) — Anforderung | 10 kA |
| USV / Generator — Anforderung | Nein |

Der Elektroanschluss ist mit einer **380 V, 50 Hz** Drehstromleitung für **50 kW / 100 A** installierte Leistung herzustellen. Anschluss nur durch autorisiertes Elektrofachpersonal.

<!-- FOTO: Elektroschrank — Versorgungskabel-Eingang -->
![Elektroanschluss](../../assets/FOTO-5-3-2-elektrik-baglantisi.png)

---

## 5.3.4. Einschalten und Phasenprüfung

### Inbetriebnahmeverfahren

| Schritt | Vorgang |
|:-------:|---------|
| 1 | Drehstromleitung an Schrank anschließen |
| 2 | Maschinenstrom **am Schrank** einschalten |
| 3 | Phasenfolge über **Phasenfolgerelais** prüfen |
| 4 | Bei falscher Folge **zwei Phasen tauschen** |

### Checkliste elektrische Inbetriebnahme

| Prüfung | Erwartetes Ergebnis |
|---------|---------------------|
| Gibt das Phasenschutzrelais einen Ausgang? | Ja |
| Liegt Spannung an der Maschine an? | Ja |
| Stoppt die Maschine bei Not-Halt? | Ja |

Motor nur in einer Richtung betreiben; Phasenfolge korrekt einstellen.

<!-- FOTO: Phasenfolgerelais und Phasenschutzrelais — im Schrank -->
![Phasenprüfung — Schrankinnenseite](../../assets/FOTO-5-3-3-faz-kontrol.png)

---

## 5.3.5. Checkliste Anschlussabschluss

Nach Abschluss aller Anschlüsse folgende Prüfungen durchführen:

| # | Prüfung | Status |
|---|---------|--------|
| 1 | Druckluft angeschlossen (6 bar, 3/4") | ☐ |
| 2 | Luftanzeige grün auf HMI-Handseite | ☐ |
| 3 | Wasser angeschlossen (1 bar, 1/2") | ☐ |
| 4 | Wasseranzeige grün auf HMI-Handseite | ☐ |
| 5 | Drehstrom angeschlossen (380 V, 50 Hz) | ☐ |
| 6 | Phasenfolge verifiziert | ☐ |
| 7 | Strom am Schrank eingeschaltet | ☐ |
| 8 | Phasenschutzrelais gibt Ausgang | ☐ |

Nach Abschluss der Anschlüsse Abschnitt **5.4** Sicherheitstests und Abschnitt **5.5** Installationsprüfungen durchführen.

<!-- FOTO: HMI-Handseite — Luft- und Wasseranzeige grün -->
![HMI-Handseite — Anschlussstatus](../../assets/FOTO-5-3-4-hmi-manuel-durum.png)
