# 6.5 Pneumatikeinstellungen

Der Pneumatikverbrauch der Maschine wird hauptsächlich mit **6 bar** Druckluft für Füllventile und Prozesssteuerung versorgt. Anschlusswerte stehen in **Kapitel 3.3.5**; dieser Abschnitt definiert das Reglereinstellverfahren.

Es gibt kein Hydrauliksystem. Zylindergeschwindigkeit und Sensorverzögerung sind für den Bediener nicht zugänglich.

---

## 6.5.1 Reglerdruckeinstellung

| Parameter | Wert (Kapitel 3.3.5) |
|-----------|----------------------------|
| Reglerdruckeinstellung | **6 bar** |
| Anschluss | 3/4" |

### Reglereinstellverfahren

1. Prüfen, dass das Anlagen-Hauptluftventil offen ist.
2. Den Pneumatikregler am Maschineneingang lokalisieren.
3. Den Regler auf **6 bar** einstellen; Manometer oder Reglerskala als Referenz nehmen.
4. Die HMI-**Handseite** öffnen; prüfen, dass die Anzeige **Luftinformation** **grün** leuchtet.
5. Nach der Einstellung mit einem Kurztest prüfen, dass Füllventile und Pneumatikfunktionen normal arbeiten.

**Erwartetes Ergebnis:** Regler 6 bar; Luftinformation auf der HMI-Handseite grün.

**Abweichender Zustand:** Bei niedrigem Druck Anlagendurchfluss, Filterverstopfung und Leckagen prüfen (siehe **Kapitel 11**).

Die Ersteinstellung bei der Installation erfolgt in **Kapitel 5.3.1**; dieses Verfahren muss nach Reglerdrift oder Schlauchwechsel wiederholt werden.

![Pneumatikregler 6 bar](../../assets/6.5/1.png)

---

## 6.5.2 Zylindergeschwindigkeitseinstellung

| Parameter | Wert / Beschreibung |
|-----------|------------------|
| Zylindergeschwindigkeitseinstellung | Es gibt **keine** Zylindergeschwindigkeitseinstellung |

---

## 6.5.3 Sensorverzögerungen

| Parameter | Wert / Beschreibung |
|-----------|------------------|
| Sensor-EIN/AUS-Verzögerungen (ms) | Es gibt **keine** Sensor-EIN/AUS-Verzögerungen |

Sensorverzögerungen sind im SPS-Programm fest; es gibt keine Bedieneinstellung.

---

## 6.5.4 Checkliste Pneumatikeinstellungen

| # | Prüfung | Status |
|---|---------|:-----:|
| 1 | Regler auf **6 bar** eingestellt | ☐ |
| 2 | Luftinformation auf HMI-Handseite grün | ☐ |

**Datum:** _______________ **Kontrolliert durch:** _______________
