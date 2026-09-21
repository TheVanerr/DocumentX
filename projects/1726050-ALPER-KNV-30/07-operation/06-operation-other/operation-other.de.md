# 7.6 Sonstige Betriebsthemen

Dieser Abschnitt fasst betriebliche Themen außerhalb der Standard-Start-/Stopp- und Zyklussequenz zusammen. An der Maschine gibt es **keinen durchgehenden Schichtbediener**; im Normalbetrieb ist für Beladen/Entladen kein menschlicher Eingriff erforderlich. HMI-Befehle und Error-461-Bestätigung werden vom Linienverantwortlichen oder von der Wartung gegeben.

---

## 7.6.1 Format- / Produktwechsel

| Parameter | Wert |
|-----------|-------|
| Format- / Produktwechselzeit | **Nicht vorhanden** |
| Formatwechselverfahren | **Nicht vorhanden** |

Ein mechanischer Formatwechsel wird nicht angewendet (siehe **Kapitel 6.1.5**). Unterschiedliche Teiletypen werden über HMI-Temperatur-Sollwerte und Prozessfunktion ein/aus geführt (siehe **Kapitel 8.2**).

---

## 7.6.2 Ausschuss- / Schrottverwaltung

| Parameter | Wert |
|-----------|-------|
| Ausschuss- / Schrottverwaltung | **Wird nicht angewendet** — die Maschine hat keinen Schrottkasten; Kundenlinie |

Schrottsammlung und Ausschusserfassung liegen in der Verantwortung der Kundenlinie. Im Maschinenumfang ist kein separater Schrottkasten oder kein Ausschussverfahren definiert.

---

## 7.6.3 Eingriffspunkte und Verantwortung

| Personal | Rolle |
|----------|-----|
| Bediener (am Maschinenplatz) | **Nicht vorhanden** |
| Wartungspersonal | Störungs-/Alarmeingriff, periodische Wartung, Reinigung |
| Herstellerservice | SPS, Encoder, größere Störung |

Bei Störung:

1. Die Signalleuchte leuchtet **rot**; die HMI-Alarmseite zeigt den aktiven Alarm.
2. Die übergeordnete Linie kann ein Stillstandssignal empfangen (Kundenkonfiguration).
3. Der Eingriff erfolgt durch das **Wartungspersonal** — den Diagnosefluss **Kapitel 11** befolgen.
4. Bei Reparaturen, die Energieisolation erfordern, **LOTO** anwenden (**Siehe Kapitel 2.4**).

Eingriffe, die Sicherheitsfunktionen außer Kraft setzen würden, dürfen nur durch autorisierten Service erfolgen.

---

Für Fehlercodes siehe **Kapitel 11.2**; für Kapazität/Rezept siehe **Kapitel 8**.
