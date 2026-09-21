# 9.1 Wartungsanweisungen

---

## 9.1.1 Wartungsphilosophie und Personal

Für die KNV 30 3000 2B gilt die Philosophie der **vorbeugenden Wartung**. Ziel ist es, Filterverstopfung, Ölansammlung, Schwächung der Sicherheitsfunktion sowie Pumpen-/Ventilatorausfälle durch geplante Eingriffe zu verhindern und ungeplante Linienstillstände zu reduzieren.

| Parameter | Wert |
|-----------|------|
| Wartungsphilosophie | Vorbeugende Wartung |
| Personalqualifikation | Das im Einsatzland der Maschine geltende Qualifikationsniveau des Wartungspersonals |
| Schmiertabelle | 4 Förderer-Schmiernippel + WITTENSTEIN-Getriebe (Abschnitt 9.1.4) |

Das Wartungspersonal muss in Maschinenbedienung, LOTO, Not-Halt und grundlegenden Sicherheitsregeln geschult sein (siehe **Abschnitt 3.2.6**). Die Kontrolle der elektrischen Anschlussfestigkeit erfolgt nur durch **autorisiertes Elektrofachpersonal**.

---

## 9.1.2 Sicherheit vor der Wartung

Ein spezieller HMI-Wartungsmodus **ist nicht vorhanden**. Beachten Sie die folgenden Regeln:

1. Halten Sie die Maschine mit HMI **Maschinenstopp** an.
2. Stellen Sie den Hauptschalter auf **OFF (0)**.
3. Wenden Sie das **LOTO-Verfahren** an (**Siehe Abschnitt 2.4** — die Schritte werden nicht wiederholt).
4. Umgehen (**bypass**) Sie den RFID- / Sicherheitssensor **nicht**.
5. Öffnen Sie Abdeckungen nur nach Energieisolierung und LOTO.

Der Wartungszugang erfolgt über die **abnehmbaren Abdeckungen an der Maschinenrückseite** (siehe **Abschnitt 3.5.3**). Der minimale hintere Freiraum muss **1000 mm** betragen.

**WARNUNG — Verletzung durch Energiequellen:** Bei Wartung ohne LOTO kann die Maschine unbeabsichtigt anlaufen; Quetschungen, Stromschlag und Verletzungen durch heiße Flüssigkeit können auftreten.

---

## 9.1.3 Periodischer Wartungsplan

Die folgende Tabelle ist der periodische Wartungsplan. Für Reinigungsschritte wird auf den jeweiligen Abschnitt verwiesen; Verfahrensschritte werden nicht wiederholt.

Stundenbasierte Intervalle werden über die Gesamtbetriebsstunden der Maschine verfolgt; fehlt ein Zähler, kann ein ungefähres Kalenderäquivalent verwendet werden (250 Stunden ≈ 3–4 Wochen durchgehender 24/7-Betrieb).

| Intervall | Wartungspunkt | Referenz |
|---------|---------------|----------|
| **Täglich** | Allgemeine Sichtprüfung — Leckage, ungewöhnliche Geräusche, Alarm/Signalleuchte | — |
| **Täglich** | Reinigung der Waschtank-Vorfilter | Abschnitt 10.1.3 |
| **Täglich** | HMI-Alarmhistorie; Beseitigung aktiver Alarme | Abschnitt 11 |
| **Täglich** | Wasser-/Luftdruck (HMI Manuelle Seite) | Abschnitt 7.2 |
| **Täglich** | Prüfung auf Verklemmen / Teileansammlung am Ausgangsförderer | — |
| **Wöchentlich** | Reinigung der Tankinnenfilter | Abschnitt 10.1.4 |
| **Wöchentlich** | Reinigung/Wechsel der Beutelfilter am Pumpenausgang | Abschnitt 10.1.4 |
| **Wöchentlich** | Ölskimmer und Tankoberfläche — übermäßiger Ölfilm | — |
| **Wöchentlich** | Förderkette/-riemen Spannung und Ausrichtung — visuell | — |
| **Wöchentlich** | RFID- / Abdeckungssicherheit Kurztest | Abschnitt 5.4.2 |
| **Wöchentlich** | Not-Halt-Taster Sichtprüfung | Abschnitt 2.5 |
| **Monatlich** | Not-Halt-Funktionstest | Abschnitt 6.2.3, 5.4.1 |
| **Monatlich** | Schmierung der 4 Förderer-Schmierstellen | Abschnitt 9.1.4 |
| **Monatlich** | Niveausensoren und Leckagewanne Reinigung/Prüfung | — |
| **Monatlich** | Schrankfilter/Belüftung Staubprüfung | — |
| **Monatlich** | Pumpe und Ventilator ungewöhnliche Schwingung/Geräusch | — |
| **250 Stunden** | Test automatisches Füll- und Überleitventil | — |
| **250 Stunden** | Prüfung der Heizungs-Thermoelement-/Heizelementanschlüsse (nach LOTO) | — |
| **250 Stunden** | Näherungssensor Reinigung und Befestigungsfestigkeit | — |
| **250 Stunden** | Abluft- und Trocknungsventilator Staubansammlung reinigen | — |
| **500 Stunden** | Ölskimmer-Getriebe Öldichtung/PTFE Prüfung/Wechsel | Abschnitt 13.3 |
| **500 Stunden** | Fördergetriebe Dichtung / Leckage Sichtprüfung (lebensdauergeschmiert) | Abschnitt 9.1.4 |
| **500 Stunden** | Tank- und Abdeckungsdichtungen prüfen | — |
| **500 Stunden** | Pneumatikregler und Anschlüsse Dichtheitsprüfung | Abschnitt 6.5 |
| **1000 Stunden** | Pumpenansaugfilter Prüfung/Wechsel | Abschnitt 13.3 |
| **1000 Stunden** | Düsen Verstopfung/Verschleiß prüfen | Abschnitt 13.3 |
| **1000 Stunden** | Servo-/Förderantriebsgruppe mechanisch/elektrisch prüfen | — |
| **1000 Stunden** | Tankwasserqualität; ggf. vollständige Entleerung/Reinigung | Abschnitt 10 |
| **Jährlich** | Sicherheitsfunktionstestbericht (RFID, Not-Halt, Fehlerstrom) | Abschnitt 2, 5.4 |
| **Jährlich** | Heizelement und Thermoelement Funktionsprüfung | — |
| **Jährlich** | Getriebe-Leckageprüfung (WITTENSTEIN — lebensdauergeschmiert, kein Wechsel) | Abschnitt 9.1.4 |
| **Jährlich** | Elektrische Anschlussfestigkeit (LOTO, autorisierter Elektriker) | — |
| **Jährlich** | Bei geplantem Langzeitstillstand Tankentleerung/Schutzreinigung | Abschnitt 7.3.4 |

### Hinweise zur Durchführung der periodischen Wartung

**Täglich:** Für Sichtprüfung, HMI-Alarm und Druckanzeige ist kein LOTO erforderlich, wenn keine Abdeckung geöffnet wird. **Die Vorfilterreinigung erfordert das Öffnen einer Abdeckung** — **Abschnitt 10.1.3** und **LOTO (Abschnitt 2.4)** anwenden.

**Wöchentlich / monatlich:** Für Tank- und Filterarbeiten muss die Maschine stillgesetzt werden; bei Arbeiten mit Abdeckungsöffnung ist **LOTO zwingend**.

**250–1000 Stunden:** Wenden Sie **LOTO** bei Punkten an, die mechanische/elektrische Eingriffe erfordern. Setzen Sie autorisiertes Personal für Thermoelement-, Heizelement- und elektrische Festigkeitsprüfungen ein.

**Jährlich:** Den Sicherheitsprüfbericht dokumentieren; bei NOK-Punkten nicht in den Betrieb gehen.

---

## 9.1.4 Schmierung

| Parameter | Wert |
|-----------|------|
| Anzahl der Schmierstellen | **4 Stück** Förderer-Schmiernippel |
| Lage | Am Förderer **Eingang 2**, **Ausgang 2** |
| Intervall | **Monatlich** (siehe Abschnitt 9.1.3) |
| Fettsorte | **Castrol Tribol GR 100-1 PD** (NLGI 1, Lithiumseife) |
| Fördergetriebe | **WITTENSTEIN NP035S-MF2-30-1G1-1S** — Hersteller **lebensdauergeschmiert**; Füllung **Castrol Tribol GR 100-1 PD**. Periodischer Ölwechsel **entfällt**. |

Das Fördergetriebe ist eine WITTENSTEIN-alpha-NP-Serie. Laut Herstellerhandbuch wird das Gehäuse werksseitig mit synthetischem Hochleistungsfett gefüllt und ist **lebensdauergeschmiert**; das Etikettenbeispiel zeigt **Castrol Tribol GR 100-1 PD**. Das Gehäuse wird nicht geöffnet, es wird kein Öl nachgefüllt, ein jährlicher Ölwechsel wird nicht durchgeführt. Bei Leckage oder Dichtungsschaden den Herstellerservice rufen.

Die vier Schmiernippel sitzen nicht am Getriebegehäuse, sondern an den Förderer-Eingangs-/Ausgangslagerstrecken. Es wird dieselbe Fettfamilie (**Castrol Tribol GR 100-1 PD**) verwendet.

### Schmierverfahren Förderer

1. Halten Sie die Maschine mit HMI **Maschinenstopp** an.
2. Wenden Sie **LOTO** an (**Abschnitt 2.4**).
3. Identifizieren Sie die **4 Schmierstellen** an der Eingangs- und Ausgangsseite des Förderers.
4. Tragen Sie an jedem Nippel **Castrol Tribol GR 100-1 PD** auf; überschüssiges Fett darf nicht auf die Förderstrecke und ins Prozesswasser tropfen.
5. Öffnen Sie das WITTENSTEIN-Getriebegehäuse nicht; drehen Sie den Förderer nicht von Hand.
6. Schließen Sie die Abdeckungen; heben Sie LOTO auf; führen Sie bei montierten Schutzeinrichtungen einen kurzen Testlauf durch.

**Jährlich:** **Visuelle** Prüfung von WITTENSTEIN-Getriebegehäuse, Dichtungen und Leckage. Es gibt keinen Ölwechsel. Bei Leckage die Maschine stillsetzen und den Herstellerservice rufen.

---

## 9.1.5 Liste der kritischen Teile

**Kritische** Teile beeinflussen bei Ausfall direkt den Prozess, den Teilefluss oder die **Sicherheitsfunktion** der Maschine. Positionen mit Bestand **0 (auf Bestellung)** werden im Notfall über Hersteller/Service beschafft; die Planung der Lieferzeit liegt in der Verantwortung des Betreibers.

Vollständige Stückliste siehe **Abschnitt 13.3.1**.

| Bestellcode | Teilename | Empfohlener Bestand | Lage / Funktion | Begründung |
|--------------|-----------|---------------|-------------------|---------|
| 10 02976 | TERMOKUPL ETB30F06-5Ç | 1 | Tankheizung | Bei Ausfall Temperaturregelung/Heizung außer Betrieb |
| 07 15142 | REZİSTANS KOMPLESİ 8000W 50CM DÜZ DİKİŞSİZ | 2 | Tankheizung | Bei Ausfall Prozesstemperatur nicht erreichbar |
| 07 16791 | SEVİYE SENSÖRÜ ÇAT.TİP VEGASWING 51 DİŞ ÇEKİLMİŞ | 0 (auf Bestellung) | Tankniveau | Bei Ausfall Füll-/Niveauregelung gestört |
| 10 00586 | REDÜKTÖR MOTORU 0,09KW 1500D/D B14 SIYIRICI | 0 (auf Bestellung) | Ölskimmer | Bei Ausfall Ölskimmer außer Betrieb |
| 10 00296 | PASLANMAZ SEVİYE BEKÇİSİ | 0 (auf Bestellung) | Tankniveau | Niveausicherheit/-regelung |
| 10 19321 | REDÜKTÖR WITTENSTEIN NP035S-MF2-30-1G1-1S | 0 (auf Bestellung) | Förderantrieb | Bei Ausfall Förderer still |
| 10 19317 | SERVO MOTOR SIEMENS SIMOTICS 1FL6064-1AC61-2AA1 | 0 (auf Bestellung) | Förderer | Bei Ausfall Teilefluss still |
| 10 19318 | SERVO SÜRÜCÜ SIEMENS 6SL3210-5FE11-5UF0 | 0 (auf Bestellung) | Förderer | Bei Ausfall Teilefluss still |
| 10 07147 | SWITCH F3STGRNLPU21M1J8 OMRON MANYETİK KAPI | 1 | RFID-Abdeckung Sicherheitssensor | Bei Ausfall Sicherheitsfunktion betroffen |
| 07 17478 | KNV 30 3000 2B PRO IDE GOULDS POMPA KOMPLESİ | 0 (auf Bestellung) | Spülpumpe | Bei Ausfall Spülprozess still |
| 10 06675 | POMPA LOWARA ESHE 40-160/30 380V/50HZ | 0 (auf Bestellung) | Waschpumpe | Bei Ausfall Waschprozess still |

---

## 9.1.6 Ersatzteilliste (Verbrauch und empfohlen)

**Verbrauchsteile** werden in der geplanten Wartung regelmäßig gewechselt oder gereinigt. **Empfohlene** Teile verkürzen die Stillstandszeit, wenn sie bevorratet werden. Empfohlene Bestandsmengen können gemäß der Anlagenlagerpolitik aktualisiert werden; sie sind keine verbindliche Bestellverpflichtung. Vollständige Stückliste siehe **Abschnitt 13.3.1**.

| Bestellcode | Teilename | Kategorie | Empfohlener Bestand | Lage / Funktion | Begründung |
|--------------|-----------|----------|---------------|-------------------|---------|
| 07 10214 | ÖN FİLTRE NS KOMPLESİ | Verbrauch | 2 | Waschtank | Tägliche Reinigung; Verbrauch |
| 07 00670 | EMİŞ FİLTRESİ KOMPLESİ (PYM2,KBN,VDL,ULT,KNV) | Verbrauch | 2 | Pumpenansaugleitung | Periodischer Wechsel (1000 Stunden) |
| 10 03088 | NOZZLE 632.724.16.CC | Verbrauch | 32 | Wasch-/Spüldüse | Verschleißteil |
| 07 03497 | YAĞ SIYIRICI TEFLONU | Verbrauch | 1 | Ölskimmer | 500-Stunden-Wartungsverbrauch |
| 10 02526 | YAĞ KEÇESİ 20*42*7 | Verbrauch | 1 | Ölskimmer-Getriebe | Wartungsverbrauch |
| 10 01017 | RULMAN 6004 2RS ORS | Verbrauch | 1 | Ölskimmer / allgemein | Wartungsverbrauch |
| 10 05378 | TORBA FİLTRE 200 MİKRON (50CM PASL. TEL ÇERÇEVE) | Verbrauch | 2 | Pumpenausgang | Wöchentliche Reinigung; Wechsel falls erforderlich |
| 10 19471 | SENSÖR E2BM12KN08M1B1 OMRON END.PROX.M12 8MM | Empfohlen | 1 | Näherungssensor | Positionserfassung |
| 10 17815 | SENSÖR E3FA-DP23 OMRON END.PROX.M18 1000MM | Empfohlen | 1 | Näherungssensor | Positionserfassung |
| 07 17295 | SALYANGOZLU FAN ENA 2 0,37 KW HAVA SO.SİLİKONLU | Empfohlen | 0 (auf Bestellung) | Abluft | Bei Ausfall Abluft/Belüftung betroffen |
| 10 01002 | REDÜKTÖR EN:30 I:80 B:05 | Empfohlen | 0 (auf Bestellung) | Ölskimmerantrieb | Zusammen mit dem Motor |

**Bestellung:** Über den Hersteller-/Servicekanal mit Bestellcode beschaffen. Kritische Teile siehe **Abschnitt 9.1.5**. Alle Positionen (22 Stück) in **Abschnitt 13.3.1**.

---

## 9.1.7 Wartungsprotokollformular

Dokumentieren Sie periodische Wartung und Prüfergebnisse. Der Betrieb darf nicht aufgenommen werden, solange NOK-Punkte nicht beseitigt sind.

| # | Vorgang | Intervall | Datum | Ausgeführt von | OK/NOK |
|---|-------|---------|-------|-------|:------:|
| 1 | Tägliche Prüfpunkte | Täglich | | | ☐ |
| 2 | Wöchentliche Filter- / Sicherheitspunkte | Wöchentlich | | | ☐ |
| 3 | Monatlicher Not-Halt-Test | Monatlich | | | ☐ |
| 4 | Fördererschmierung (4 Punkte) | Monatlich | | | ☐ |
| 5 | 250- / 500- / 1000-Stunden-Wartung (jeweiliger Punkt) | Stunden | | | ☐ |
| 6 | Jährlicher Sicherheitsprüfbericht | Jährlich | | | ☐ |
| 7 | Filter-/Tankreinigung | Siehe Abschnitt 10 | | | ☐ |

**Freigegeben von:** _______________ **Datum:** _______________

---

Vollständige Teileliste und Abbildungen siehe **Abschnitt 13.3**.
