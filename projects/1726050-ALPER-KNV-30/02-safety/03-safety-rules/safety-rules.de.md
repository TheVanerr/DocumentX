# 2.3 Allgemeine betriebliche Sicherheitsregeln

Die folgenden Regeln gelten in allen Nutzungsphasen der Maschine. Bei Verletzung die Maschine stillsetzen; nicht wieder in Betrieb nehmen, bis die Sicherheitsbedingungen hergestellt sind.

1. Die Maschine nicht ohne Lesen der Anleitung und ohne Schulung betreiben (**Siehe Kapitel 1.1.3**).
2. Sicherheitseinrichtungen (RFID, Not-Halt) nicht außer Betrieb setzen oder umgehen.
3. Wartungsklappen bei laufender Maschine nicht öffnen; vor dem Öffnen der Klappen LOTO anwenden (**Siehe Kapitel 2.4**).
4. Bei aktivem Fehler auf dem HMI-Alarmbildschirm keinen Start geben (**Siehe Kapitel 11.1**).
5. Bestätigen, dass auf der Förderstrecke keine klemmenden Gegenstände verblieben sind; die Ventile vor den Pumpen müssen offen sein (**Siehe Kapitel 7.2**).
6. In Notfällen den nächstgelegenen Not-Halt-Taster drücken (**Siehe Kapitel 2.5**).

---

# 2.4 Kontrolle gefährlicher Energien — LOTO (Sperren und Kennzeichnen)

**WARNUNG — Energiebedingte Verletzung:** Bei Wartung oder Reinigung ohne LOTO kann die Maschine unbeabsichtigt anlaufen; Quetschen, Stromschlag, Verletzung durch heiße Flüssigkeit und Druckluft können entstehen. Alle Energiequellen isolieren, sperren und kennzeichnen.

Dieses Verfahren wird vor allen Arbeiten an der Maschine angewendet, wie mechanische Wartung, Elektroeingriff, Filter-/Tankreinigung, Klappenausbau und Ähnliches. Andere Kapitel geben nur den Verweis **Kapitel 2.4**; die Schritte werden nicht wiederholt.

## 2.4.1 Umfang und Energiequellen

| Energieart | Quelle | Isolationspunkt |
| :--- | :--- | :--- |
| Elektrisch | 380 V, 3 Phasen | Hauptschalter — am Elektroschrank |
| Pneumatisch | 6 bar Druckluft | Hauptluftventil der Anlage / Maschineneingang |
| Wasser / Prozessflüssigkeit | 1 bar Wassereingang, Tanks | Wassereinlassventile; Tankentleerung (falls erforderlich) |
| Thermisch | Tankheizer | Abkühlzeit nach elektrischer Isolation |
| Mechanisch | Förderband, Lüfter, Pumpe | Elektrische Isolation; Restrisiko der Bewegung beachten |

Es ist kein Hydrauliksystem vorhanden.

## 2.4.2 LOTO-Anwendungsverfahren

**Vorbereitung**

1. Umfang und Dauer der Wartung oder des Eingriffs festlegen.
2. Betroffenes Personal informieren; bekanntgeben, dass an der Maschine gearbeitet wird.

**Stillsetzen der Maschine**

3. Über HMI den Befehl **Stop** geben; warten, bis die Maschine stillsteht.
4. Falls erforderlich den nächstgelegenen **Not-Halt**-Taster drücken (**Siehe Kapitel 2.5**).

**Energieisolation**

5. Den **Hauptschalter** am Elektroschrank in die Stellung OFF (0) bringen.
6. Das persönliche **Vorhängeschloss** am Hebel des Hauptschalters anbringen.
7. Ein **LOTO-Etikett** am Schloss anhängen; auf dem Etikett sollen Name, Datum und der Wortlaut "Nicht betreiben — Wartung" stehen.
8. Das **Druckluft**-Einlassventil schließen; das Ventil nach Möglichkeit sperren.
9. Falls **Restdruck** in der Leitung vorhanden ist, am Regler oder an einem Entlüftungspunkt entleeren. Bei ausgeschaltetem Hauptschalter arbeitet das HMI nicht; den Druck nicht über HMI prüfen, Schrank oder Leitung nicht wieder unter Spannung setzen.
10. Die **Wassereinlass**-Ventile schließen.
11. Falls ein Eingriff im Tank erforderlich ist, die Prozessflüssigkeit nach dem geeigneten Verfahren entleeren (**Siehe Kapitel 10**); wegen heißer Flüssigkeit auf Abkühlung warten.

**Verifizierung**

12. Bei ausgeschaltetem Hauptschalter bestätigen, dass das HMI ausgeschaltet ist und der Startbefehl **ohne Reaktion** bleibt. Wenn das HMI nicht dunkel geworden ist, annehmen, dass die Versorgung nicht unterbrochen ist; nicht in den Schrank gehen, befugtes Elektropersonal rufen.
13. Förderband-, Lüfter- und Pumpenbereiche visuell auf Bewegungsfreiheit prüfen.
14. Klappen nicht ausbauen und nicht in die Verkleidung eintreten, bevor die Verifizierung abgeschlossen ist.

**Nach dem Eingriff**

15. Alle Schutzvorrichtungen, Klappen und Verbindungen wieder anbringen; Werkzeuge und Materialien aus dem Bereich entfernen.
16. Nur die **befugte Person, die das Schloss angebracht hat**, entfernt Schloss und Etikett von LOTO.
17. Wasser- und Luftventile öffnen; warten, bis die Mediendrücke wieder normal sind (**Siehe Kapitel 3.3.5**).
18. Den Hauptschalter einschalten; Reset- und Vorbereitungsverfahren anwenden (**Siehe Kapitel 2.5, 7.2**).

**GEFAHR — Mehrere Personen:** Wenn mehrere Personen an derselben Maschine arbeiten, wird an jeder Energiequelle ein eigenes Schloss angebracht; das Gruppenschloss wird nicht entfernt, bevor die letzte Person den Bereich verlassen hat.

Der RFID-Sicherheitssensor darf nicht umgangen werden. Der Sensor kann nicht überbrückt oder außer Betrieb gesetzt werden.

---

# 2.5 Not-Halt (E-Stop) und Reset

An der Maschine befinden sich insgesamt **4** Not-Halt-Taster:

1. Am Elektroschrank
2. Am Maschineneinlauf rechts vom Förderband
3. Am Maschineneinlauf links vom Förderband
4. Am Maschinenauslauf links vom Förderband

Beim Drücken des Not-Halts stoppt **jede Funktion** an der Maschine. Not-Halt darf nur im Moment einer Notgefahr verwendet werden, nicht anstelle des normalen Stops.

**Situationen, in denen Not-Halt verwendet werden soll**

- Einklemmen, Sturz oder Aufprallrisiko, das die Lebenssicherheit bedroht
- Plötzliches mechanisches Störgeräusch oder starke Leckage
- Lichtbogen, Rauch oder Brandgeruch

Beim Öffnen einer Klappe stoppt RFID die Maschine bereits; dies ist kein Grund für Not-Halt. Nach einem RFID-Halt die Klappe schließen, die Anforderungen in **Kapitel 2.4** anwenden und anschließend resetten.

**Reset-Verfahren**

1. Die physische Bedrohung beseitigen; die Quelle von Einklemmen, Leckage oder Störung sicher machen.
2. Den gedrückten Not-Halt-Taster **lösen** (unlock).
3. Den **Reset-Taster** auf dem Schranketikett **drücken, bis** die Reset-Lampe **leuchtet**.
4. Den Not-Halt- / zugehörigen Alarm auf dem HMI-Alarmbildschirm resetten (**Siehe Kapitel 11.1**).
5. Keinen Start geben, bevor die Gefahr vollständig beseitigt ist.

Das Reset-Verfahren stellt die Sicherheitsfunktion wieder her; Start vor Behebung der Störung kann zu erneutem Halt oder Schaden führen.

---

# 2.6 Persönliche Schutzausrüstung (PSA)

Der Arbeitgeber ist verpflichtet, aufgabenbezogene PSA bereitzustellen und deren Verwendung zu überwachen. Die folgende Matrix definiert Mindestanforderungen; wenn die lokale Gesetzgebung strenger ist, wird ihr gefolgt.

| Aufgabe | Arbeitskleidung | Schuhe mit Stahlkappe | Handschuhe | Schutzbrille | Atemschutz |
| :--- | :---: | :---: | :---: | :---: | :---: |
| HMI-Überwachung / Start-Stop | ✓ | ✓ | — | — | — |
| Rundgang um Förderband / Maschine | ✓ | ✓ | — | ✓ (Spritzrisiko) | — |
| Filter- und Tankreinigung | ✓ | ✓ | ✓ (chemikaliengeeignet) | ✓ | Filtermaske falls erforderlich |
| Mechanische Wartung | ✓ | ✓ | ✓ | ✓ | — |
| Eingriff am Elektroschrank | — | ✓ | Isolierend (bei Bedarf) | ✓ | — |
| Arbeit nahe heißem Tank / Heizer | ✓ | ✓ | ✓ (hitzebeständig) | ✓ | — |

**VORSICHT — Rutschiger Boden:** Bei Leckage oder Rutschen durch Prozesswasser sind rutschfeste Schuhe und vorsichtige Bewegung verpflichtend (**Siehe Kapitel 10**).

Kurzzeitbesucher müssen vom Arbeitgeber informiert werden, bevor sie die aktive Prozesszone betreten, und mit Mindest-PSA (Schuhe, Brille) ausgestattet werden.
