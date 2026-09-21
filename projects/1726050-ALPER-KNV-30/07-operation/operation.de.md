# 7. BETRIEB

Das tägliche Starten, Stoppen und die automatische Prozesssequenz der Maschine **KNV 30 3000 2B** (Seriennr. **1726050**) sind in diesem Kapitel definiert. Die Maschine ist **vollautomatisch** ausgelegt; Teileeinlauf und -auslauf erfolgen durch **Roboter**, die Linie ist für **24/7**-Betrieb integriert. Es gibt keinen durchgehenden Schichtbediener. HMI-Vorbereitung / Start / Stopp und Error-461 **Produkt entnommen Bestätigung** werden vom Linienverantwortlichen oder vom Wartungspersonal gegeben; die Prozessüberwachung kann durch das übergeordnete System (MES/SCADA — Kunde) oder durch eine periodische Wartungsrunde erfolgen. Mechanische/elektrische Störungseingriffe werden vom **Wartungspersonal** durchgeführt.

Prozessfluss: **Waschen → Spülen → Trocknen**. Nominale Zykluszeit **900 Sekunden** (15 Minuten). Start/Stopp und Prozessauswahl erfolgen über die **HMI-Betriebsseite** (siehe **Kapitel 3.4.3**). Dauerhafte Parametereinstellungen stehen in **Kapitel 6**; Installation und erste Inbetriebnahme in **Kapitel 5**.

| Parameter | Wert |
|-----------|-------|
| Betriebsart | 24/7 automatisch — Robotereinlauf/-auslauf |
| Linienverantwortliche(r) | HMI Start/Stopp, Vorbereitung, Error-461-Bestätigung (keine durchgehende Schicht) |
| Vorbereitung | HMI **Vorbereitung Start** (Tankfüllung + Beheizung) |
| Start / Stopp | Digitale HMI-Tasten |
| HMI-Sprachen | Türkisch, Englisch, Deutsch |

| Unterabschnitt | Thema |
|-------|--------|
| **7.1** | Betriebsarten und HMI-Prozessoptionen |
| **7.2** | Maschinenstart — Vorbereitung, Start, Vorprüfungen |
| **7.3** | Maschinenstopp — Normalstopp, Not-Halt, Langzeitstillstand |
| **7.4** | Automatische Betriebssequenz — Zyklus, Roboter, Störungsverhalten |
| **7.5** | Betriebschronologie — 24/7-Linie |
| **7.6** | Sonstige Betriebsthemen |

## Signalleuchte — Interpretation für den Bediener

| Leuchte | Bedeutung | Maßnahme |
|-------|-------|-------|
| Gelb | Einsatzbereit | Start darf gegeben werden |
| Grün | Läuft | Normalbetrieb |
| Rot | Alarm | HMI-Alarmseite — siehe **Kapitel 11** |

Detaillierte Leuchtendefinitionen stehen in **Kapitel 3.4.10**.

![HMI-Betriebsseite](../assets/7.0/1.png)

---

Für Störungsbehebung siehe **Kapitel 11**; für Reinigung siehe **Kapitel 10**.
