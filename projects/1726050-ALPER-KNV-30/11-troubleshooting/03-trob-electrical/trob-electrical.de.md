# 11.3 Elektrische Störungen

---

## 11.3.1 Phase und Not-Aus

| Alarm | Thema | Referenz |
|-------|-------|----------|
| Error-410 | Phasenfolge fehlerhaft | Phasenfolgerelais; Phasen tauschen (5.1 Schritt 7) |
| Error-229 | Not-Aus aktiv | Reset-Prozedur (7.3.2) |

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Verhalten bei Phasenausfall | [FEHLEND] |

---

## 11.3.2 Motorstörungen

| Alarm | Motor |
|-------|-------|
| Error-100 | Waschpumpe |
| Error-101 | Spülpumpe |
| Error-110 | Abluftventilator |
| Error-111–114 | Trocknungsventilatoren 1–4 |
| Error-130 | Ölabscheider |
| Error-460 | Servomotor |

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Motorschutz-Trip | [FEHLEND] |
| Wechselrichter-Alarmcodes | [FEHLEND] |

**Prüfung:** Ventile vor Pumpen offen (7.2.5). Motorschutz. Sicherungen im Schrank.

---

## 11.3.3 Heizungsstörungen

| Alarm | Thema |
|-------|-------|
| Error-170 | Heizung Fehlerstrom F2 |
| Error-171 | Heizung Fehlerstrom F3 |
| Error-172 | Heizung Fehlerstrom F4 |
| Error-150 | Waschtanktemperatur niedrig |
| Error-151 | Spültanktemperatur niedrig |

Temperatur über HMI-Einstellungen (siehe **6.3**). Erwärmung über Vorbereitungstaste prüfen (siehe **7.2**).

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Sensorkabel-Farbcode | [FEHLEND] |
