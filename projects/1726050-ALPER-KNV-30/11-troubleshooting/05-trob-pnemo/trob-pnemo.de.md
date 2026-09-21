# 11.5 Pneumatische Störungen

Die Maschine verwendet **6 bar** Druckluft für Pneumatikventile und automatische Füllsysteme. Der Wassereingangsdruck muss mindestens **1 bar** betragen. Medienwerte sind in der Tabelle **Abschnitt 3.3.5** angegeben.

---

## 11.5.1 Druckalarme

| Alarm | Thema | Mindestwert |
|-------|------|:-------------:|
| Error-235 | Eingangsluftdruck niedrig | **6 bar** |
| Error-236 | Eingangswasserdruck niedrig | **1 bar** |

### Diagnoseverfahren Druck niedrig

1. Luft- und Wasserdruckanzeigen auf der HMI-**Manuellen Seite** lesen (**Abschnitt 3.4.5**).
2. Verifizieren, dass der Anlagen-Luftregler **6 bar** Ausgang liefert.
3. Prüfen, dass das Luftleitungsventil offen ist.
4. Verifizieren, dass das Wassereingangsventil offen und der Druck über **1 bar** liegt.
5. Nach Druckkorrektur Alarm-Reset; mit **Vorbereitung Start** fortfahren.

**Hinweis:** Wird die Luftleitung im Maschinenbetrieb vorübergehend unterbrochen, kann die Maschine in Situationen ohne momentanen Pneumatikverbrauch kurze Zeit weiterlaufen (siehe **Abschnitt 7.4.4**). Bei dauerhaft niedrigem Druck entsteht Error-235.

| Parameter | Wert |
|-----------|------|
| Druck niedrig (allgemein) | Error-235 — 6 bar Luft zwingend |

---

## 11.5.2 Ventilstörungen

| Alarm | Thema |
|-------|------|
| Error-300 | Waschen Automatik-Füllventil konnte nicht öffnen |
| Error-301 | Waschen Automatik-Füllventil konnte nicht schließen |
| Error-302 | Spülen Automatik-Füllventil konnte nicht öffnen |
| Error-303 | Spülen Automatik-Füllventil konnte nicht schließen |
| Error-304 | Überleitventil konnte nicht öffnen |
| Error-305 | Überleitventil konnte nicht schließen |

Automatische Füllventile arbeiten mit Pneumatikspule; ohne **6 bar** Luft öffnen sie nicht.

### Ventildiagnoseverfahren

1. **6 bar** Luftdruck verifizieren (kein Error-235).
2. Prüfen, dass das automatische Füll-**Wassereingangsventil offen** ist (**Abschnitt 7.2.1**).
3. Bewegungstest durch manuellen Befehl an das betreffende Ventil von der HMI Manuellen Seite (falls vorhanden).
4. Öffnet das Ventil nicht, Spulen-Elektroversorgung unter LOTO prüfen.
5. Bei mechanischem Verklemmen oder Verschmutzung Ventil demontieren, reinigen oder ersetzen.
6. Bei Nichtschließen (Error-301/303/305) Feder-/Hubmechanik prüfen.

| Parameter | Wert |
|-----------|------|
| Zylinder langsam / Hängenbleiben | **Nicht anwendbar** — kein Pneumatikzylinder |
| Ventilspulenfehler | **6 bar** Luft + Wasserventil offen; HMI manuelle Ventilprüfung; Spulenversorgung unter LOTO; mechanisches Verklemmen/Verschmutzung — nachfolgendes Verfahren |

Bei Spulenfehler bewegt sich das Ventil nicht oder es entsteht Error-300–305. Spule kann durchgebrannt sein, SPS-Ausgang fehlen oder mechanisches Verklemmen vorliegen.

**Erwartetes Ergebnis:** Ventil öffnet und schließt; Tankfüllung normal; zugehöriger Error-Code gelöscht.

---

Pneumatikeinstellungen siehe **Abschnitt 6.5**.
