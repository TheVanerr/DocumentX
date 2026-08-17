# 5.1. Maschinenmontage

Die Montage dauert schätzungsweise **1 Tag** und wird von einem **1-köpfigen** Team durchgeführt. Für Transport und Aufstellung ist ein **Gabelstapler** zu verwenden; beim Transport der Maschine darf ein **Kran unter keinen Umständen** eingesetzt werden. Der Transport erfolgt mit Gabelstaplerm-Gabeln; die Profile unter der Maschine dienen als Gabelzugang. Transportgewicht (montiert): **1300 kg** — die Maschine ist ohne Demontage einzelner Teile zu transportieren.

---

## 5.1.1. Montagevorbereitung

Vor Beginn der Montage müssen folgende Bedingungen erfüllt sein:

| Parameter | Anforderung |
|-----------|-------------|
| Mindestgröße Montagefläche | 5 m × 3 m |
| Bodenebenheit-Toleranz | 0,5 mm/m |
| Bodenfestigkeit | Bodenoberfläche muss hart und eben sein |
| Erforderliche Ausrüstung | Gabelstapler |
| Verpackungsart | Container |
| Transporttemperatur | +10°C – +30°C |
| Transportumgebung | Keine Feuchtigkeit oder korrosive Stoffe |

Die Maschine wird in Containerverpackung geliefert. Beim Transport zum Aufstellungsort ist der Gabelstapler-Gabelzugang (Profile unter der Maschine) zu verwenden.

<!-- FOTO: Maschinentransport mit Gabelstapler — Gabelzugang über Unterprofile -->
![Gabelstapler-Transport](../../assets/FOTO-5-1-0-forklift-tasima.png)

---

## 5.1.2. Montageschritte

Die Montage ist in folgender Reihenfolge durchzuführen:

| Schritt | Vorgang | Detail |
|:-------:|---------|--------|
| 1 | Maschine zum Aufstellungsort gebracht und abgeladen | Transport zur Endposition mit Gabelstapler |
| 2 | Maschinenverpackung entfernt | Entfernung der Containerverpackung |
| 3 | Maschine aufgestellt; verstellbare Füße nivelliert | Ausrichtungstoleranz: **0,5 mm** |
| 4 | Druckluftanschluss hergestellt | **6 bar**, **3/4"**-Anschluss |
| 5 | Wasseranschluss hergestellt | **1 bar**, **1/2"**-Anschluss |
| 6 | Drehstromversorgung angeschlossen | **380 V**, **50 Hz** Leitung für **50 kW / 100 A** installierte Leistung |
| 7 | Maschinenstrom am Schrank eingeschaltet | Hauptschalter — Elektroschrank |
| 8 | Phasenfolge geprüft | Phasenfolgerelais; bei falscher Folge zwei Phasen tauschen |
| 9 | Maschine betriebsbereit | Abschnitt 5.5 Installationsprüfungen abschließen |

> **Hinweis:** In der DATA-Datei sind Wasser- und Elektroanschluss unter derselben Schrittnummer (Schritt 5) aufgeführt. In dieser Anleitung wird die Anschlussreihenfolge beibehalten und in Schritt 5 (Wasser) und Schritt 6 (Elektrik) getrennt nummeriert.

### Schritt 3 — Nivellierung

Die Maschine wird auf dem System mit **verstellbaren Füßen** aufgestellt. Die Füße sind so einzustellen, dass die Maschine **waagerecht** steht. Ausrichtungstoleranz: **0,5 mm**. Prüffrage mechanische Installation: *Ist die Maschine waagerecht?*

<!-- FOTO: Verstellbare Füße — Nivellierung -->
![Verstellbare Füße — Nivellierung](../../assets/FOTO-5-1-1-ayarlanabilir-ayak.png)

### Schritt 4 — Druckluftanschluss

| Parameter | Wert |
|-----------|------|
| Druck | 6 bar |
| Anschluss | 3/4" |
| Regler-Einstellung | 6 bar |

Nach dem Anschluss muss die Luftanzeige auf der HMI-Handseite **grün** leuchten.

<!-- FOTO: Druckluftanschlussstelle — 3/4" -->
![Druckluftanschluss](../../assets/FOTO-5-1-2-hava-baglantisi.png)

### Schritt 5 — Wasseranschluss

| Parameter | Wert |
|-----------|------|
| Druck | 1 bar |
| Anschluss | 1/2" |
| Wasserqualität | Leitungswasser oder aufbereitetes Wasser |
| Wassertemperatur | +10°C – +70°C |

Nach dem Anschluss muss die Wasseranzeige auf der HMI-Handseite **grün** leuchten.

<!-- FOTO: Wasseranschlussstelle — 1/2" -->
![Wasseranschluss](../../assets/FOTO-5-1-3-su-baglantisi.png)

### Schritt 6 — Elektroanschluss

| Parameter | Wert |
|-----------|------|
| Spannung | 380 V |
| Frequenz | 50 Hz |
| Phasen | 3 (Drehstrom) |
| Installierte Leistung | 50 kW |
| Maximaler Strom | 100 A |
| Konfiguration | 3P+N+PE |
| Hauptschalter | 100 A, Schneider |

Der Elektroanschluss darf ausschließlich durch autorisiertes Elektrofachpersonal erfolgen.

<!-- FOTO: Stromversorgungsanschluss — Schrankeingang -->
![Stromversorgungsanschluss](../../assets/FOTO-5-1-4-elektrik-baglantisi.png)

### Schritte 7–8 — Einschalten und Phasenprüfung

1. Maschinenstrom wird **am Schrank** eingeschaltet.
2. Phasenfolge wird über das **Phasenfolgerelais** geprüft.
3. Ist die Phasenfolge falsch, **zwei Phasen tauschen** zur Korrektur.

Checkliste elektrische Inbetriebnahme:
- Gibt das Phasenschutzrelais einen Ausgang?
- Liegt Spannung an der Maschine an?
- Stoppt die Maschine bei Betätigung des Not-Halt?

<!-- FOTO: Phasenfolgerelais — im Schrank -->
![Phasenfolgerelais](../../assets/FOTO-5-1-5-faz-sira-role.png)

---

## 5.1.3. Montageabschluss

In Schritt 9 wird die Maschine **betriebsbereit** gesetzt. Vor Inbetriebnahme sind die Prüfungen in folgenden Abschnitten abzuschließen:

| Prüfung | Abschnitt |
|---------|-----------|
| Sicherheitsfunktionsprüfungen | 5.4 |
| Installationsprüfung und Leerlauflauf (15 Min.) | 5.5 |

Liste Sicherheitsfunktionsprüfung:
- Stoppt die Maschine bei Betätigung des Not-Halt?
- Ist die Maschine betriebsbereit?
- Stoppt der RFID-Sensor die Maschine beim Öffnen der Abdeckungen?

<!-- FOTO: Montage abgeschlossen — Maschine betriebsbereit -->
![Montage abgeschlossen](../../assets/FOTO-5-1-6-montaj-tamamlandi.png)
