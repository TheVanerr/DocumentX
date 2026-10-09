# 2.3 Allgemeine betriebliche Sicherheitsregeln

Die folgenden Regeln gelten in allen Nutzungsphasen der Maschine. Bei einem Verstoß die Maschine anhalten; nicht wieder in Betrieb nehmen, bevor die Sicherheitsbedingungen erfüllt sind.

1. Die Anleitung lesen und die Maschine nicht ohne Schulung betreiben (**Siehe Kapitel 1.1.3**).
2. Sicherheitseinrichtungen (magnetische Klappenschalter, Not-Halt, Sicherheitsrelais, Füllstandverriegelung) nicht außer Kraft setzen oder umgehen.
3. Wartungsklappen bei laufender Maschine nicht öffnen; vor dem Öffnen einer Klappe LOTO anwenden (**Siehe Kapitel 2.4**). Die Klappenschalter besitzen keine mechanische Zuhaltung; beim Öffnen stoppen sie die Maschine, beseitigen jedoch nicht die Gefahr durch heiße Flüssigkeit und Restbewegung.
4. Bei erloschener **RESET**-Leuchte (offener Sicherheitskreis) keinen Funktionsschalter einschalten; zuerst die Ursache beseitigen (**Siehe Kapitel 2.5, 11.1**).
5. Heizungs- und Pumpenschalter nicht ohne ausreichend Wasser in den Tanks einschalten; leuchtet die rote **WASHING-LEVEL**-Leuchte, den betreffenden Tank befüllen (**Siehe Kapitel 7.2**).
6. Sicherstellen, dass auf der Fördererstrecke keine Gegenstände verblieben sind, die sich verklemmen könnten; die Saug-/Druckventile der Pumpen müssen geöffnet sein (**Siehe Kapitel 7.2.5**).
7. Werkstücke ausschließlich am linken Einlauf auf den Förderer auflegen und am rechten Auslauf abnehmen; nicht in die Kammer greifen, nicht in das Schutzgitter eintreten.
8. Die Schaltschranktür während des Betriebs geschlossen und verriegelt halten; in den Schaltschrank greift ausschließlich eine Elektrofachkraft unter LOTO ein.
9. Kein Wasser in das Maschinenumfeld spritzen; Schaltschrank, Frequenzumrichter und die Bereiche der Klappenschalter nicht direkt mit Wasser beaufschlagen.
10. Im Notfall den nächstgelegenen Not-Halt-Taster betätigen (**Siehe Kapitel 2.5**).

![Wartungsklappe — wird manuell abgehoben; nur bei stehender Maschine](../../assets/2.4/bakim-kapagi-acma.jpg)

---

# 2.4 Kontrolle gefährlicher Energien — LOTO (Verriegeln und Kennzeichnen)

**WARNUNG — Energiebedingte Verletzung:** Bei Wartung oder Reinigung ohne LOTO kann die Maschine unbeabsichtigt anlaufen; es können Quetschungen, Stromschlag sowie Verletzungen durch heiße Flüssigkeit und Druckluft entstehen. Alle Energiequellen trennen, verriegeln und kennzeichnen.

Dieses Verfahren wird vor allen Arbeiten an der Maschine angewendet: mechanische Wartung, Elektroarbeiten, Filter-/Tankreinigung, Abnehmen von Klappen, Prüfung von Düsen und Heizstäben und vergleichbare Tätigkeiten. In den übrigen Kapiteln wird nur der Verweis **Siehe Kapitel 2.4** gegeben; die Schritte werden nicht wiederholt.

Da diese Maschine kein HMI besitzt, erfolgt der Nachweis der Energiefreiheit **physisch**: vollständiges Erlöschen der Leuchten am Bedienfeld, kein Anlaufen eines Motors beim Einschalten eines Funktionsschalters und Abfall des Manometers der Luftleitung auf null.

## 2.4.1 Umfang und Energiequellen

| Energieart | Quelle | Trennstelle |
| :--- | :--- | :--- |
| Elektrisch | 380 V, 3-phasig, 110 kW / 220 A | Hauptschalter — **Leistungsschalter (TMŞ) Schneider CVS250F (LV521091)**, Drehhebel auf der Schaltschranktür; Stellung **OFF (O)** abschließbar |
| Pneumatisch | Druckluft 6 bar | Luftventil der Anlage GESCHLOSSEN + Verriegelung; Ablassen des Restdrucks am Regler **AIR INLET / HAVA GİRİŞİ** am Maschinenkörper ([EKSİK] — physische Position des Ventils im Layout/Schema) |
| Wasser / Prozessflüssigkeit | Netzwassereingang 1 bar; Flüssigkeit in den Tanks bis +70 °C | Wasserabsperrventil der Anlage ([EKSİK] — falls vorhanden, aus dem Layout zu ergänzen); Tank-Ablassventil **TAHLİYE** (**Siehe Kapitel 10.1.5**) |
| Thermisch | Tank-Heizstäbe (7 × 8 kW), Trocknungsheizungen (2 × 12 kW) | Abkühlzeit nach der elektrischen Trennung — Tankflüssigkeit und Oberflächen der Trocknungskammer |
| Mechanisch | Förderer, Blower, Ventilator, Pumpe, Ölskimmer | Elektrische Trennung; auf Restbewegung nach dem Stillstand achten (Trägheit der Ventilatorflügel) |
| Elektrisch gespeichert | Zwischenkreiskondensator des Förderer-Frequenzumrichters | Nach Hauptschalter OFF mindestens **5 Minuten** warten |

Ein Hydraulik- oder Vakuumsystem ist nicht vorhanden.

## 2.4.2 LOTO-Durchführungsverfahren

**Vorbereitung**

1. Umfang und Dauer der Wartung oder des Eingriffs festlegen.
2. Das betroffene Personal informieren; bekannt geben, dass an der Maschine gearbeitet wird.

**Maschine anhalten**

3. Alle Funktionsschalter am Bedienfeld in Stellung **OFF** bringen; zuerst CONVEYOR, dann Pumpen, Blower/Ventilatoren und Heizungen (**Siehe Kapitel 7.3**).
4. Erforderlichenfalls den nächstgelegenen **Not-Halt**-Taster betätigen (**Siehe Kapitel 2.5**).

**Energietrennung**

5. Den **Hauptschalterhebel** auf der Schaltschranktür in Stellung OFF (O) drehen.
6. Das persönliche **Vorhängeschloss** am Schalterhebel anbringen.
7. Das **LOTO-Anhängeschild** am Schloss befestigen; das Schild muss Name, Datum und den Hinweis „Nicht einschalten — Wartung" tragen.
8. Das **Druckluft**ventil der Anlage schließen; das Ventil nach Möglichkeit verriegeln.
9. Prüfen, dass das Manometer des Luftreglers am Maschinenkörper **0 bar** anzeigt; den Restdruck in der Leitung am Regler oder an der Ablassstelle entspannen.
10. Das **Wassereingangs**ventil der Anlage schließen (falls vorhanden).
11. Ist ein Eingriff im Tank erforderlich, die Prozessflüssigkeit über das Ablassventil **TAHLİYE** ablassen (**Siehe Kapitel 10.1.5**); wegen der Gefahr durch heiße Flüssigkeit das Abkühlen abwarten.

**Nachweis**

12. Prüfen, dass die Leuchten am Bedienfeld (Betriebsleuchten, WASHING LEVEL, RESET) vollständig **erloschen** sind.
13. Einen Funktionsschalter (z. B. TANK 1 PUMP) kurz in Stellung ON bringen; prüfen, dass kein Motor anläuft und die Betriebsleuchte nicht aufleuchtet; den Schalter in Stellung OFF zurückstellen. Leuchtet die Leuchte auf, davon ausgehen, dass die Versorgung nicht getrennt ist; nicht in den Schaltschrank greifen, Elektrofachpersonal rufen.
14. In den Bereichen Förderer, Ventilatoren, Blower und Pumpen durch Sehen und Hören prüfen, dass keine Bewegung vorhanden ist.
15. Vor Abschluss des Nachweises keine Klappe abnehmen und keinen Eingriff hinter Abdeckungen beginnen.

**Nach dem Eingriff**

16. Alle Schutzeinrichtungen, Klappen und Anschlüsse wieder anbringen; Werkzeuge und Materialien aus dem Bereich entfernen.
17. Prüfen, dass die Wartungsklappen mit den magnetischen Schaltern ausgerichtet geschlossen sind.
18. LOTO-Schloss und -Anhängeschild entfernt **ausschließlich die befugte Person, die das Schloss angebracht hat**.
19. Wasser- und Luftventile öffnen; warten, bis am Luftregler **6 bar** abgelesen werden (**Siehe Kapitel 3.3.5**).
20. Den Hauptschalter in Stellung ON bringen; den **RESET**-Taster drücken, bis die blaue Leuchte aufleuchtet, und das Startverfahren anwenden (**Siehe Kapitel 2.5, 7.2**).

**GEFAHR — Mehrere Personen:** Arbeiten mehrere Personen an derselben Maschine, wird an jeder Energiequelle ein eigenes Schloss angebracht; das Gruppenschloss wird nicht entfernt, bevor die letzte Person den Bereich verlassen hat.

Die magnetischen Schalter der Wartungsklappen dürfen nicht umgangen werden. Ein Schalter darf nicht überbrückt, mit einem Magneten manipuliert oder außer Kraft gesetzt werden; die Klappe wird erst nach LOTO geöffnet.

![Hauptschalter (Leistungsschalter TMŞ Schneider CVS250F) — Ansicht im Schaltschrank](../../assets/5.3/tms-ana-salter.jpg)

---

# 2.5 Not-Halt (E-Stop) und Reset

An der Maschine befinden sich insgesamt **7** Not-Halt-Taster:

| Nr. | Position |
| :---: | :--- |
| 1 | Bedienfeld — **EMERGENCY STOP** |
| 2 | Förderereinlauf — rechts |
| 3 | Förderereinlauf — links |
| 4 | Fördererauslauf — rechts |
| 5 | Fördererauslauf — links |
| 6 | Mittlerer Bereich der Maschinenlängsachse — rechts |
| 7 | Mittlerer Bereich der Maschinenlängsachse — links |

Beim Betätigen eines Not-Halt werden **alle Bewegungs- und Prozessausgänge** der Maschine (Förderer, Pumpen, Heizungen, Blower, Trocknungs- und Abluftventilatoren, Ölskimmer) sicher gestoppt; die blaue **RESET**-Leuchte erlischt; ohne Reset-Bestätigung kann keine Funktion wieder gestartet werden. Der Not-Halt darf nur im Fall einer akuten Gefahr und nicht anstelle des normalen Stopps verwendet werden; häufige Not-Halt-Betätigung belastet die Schütze und den Steuerkreis der Heizstäbe.

![Not-Halt — Einlaufseite des Förderers](../../assets/2.5/acil-stop-giris.jpg)

![Not-Halt — Auslaufseite des Förderers](../../assets/2.5/acil-stop-cikis.jpg)

![Not-Halt — mittlerer Maschinenbereich](../../assets/2.5/acil-stop-orta.jpg)

**Situationen, in denen der Not-Halt zu verwenden ist**

- Lebensbedrohliche Gefahr durch Einklemmen, Sturz oder Anstoßen
- Plötzliches mechanisches Störgeräusch, starke Vibration durch Pumpe oder Ventilator, große Leckage am Tank oder an der Rohrleitung
- Lichtbogen, Rauch, Brandgeruch oder anormale Erwärmung durch die Heizstäbe
- Verklemmen eines Werkstücks auf dem Förderer oder Beschädigung des Drahtgurts

Beim Öffnen einer Wartungsklappe stoppt der Sicherheitskreis die Maschine bereits; dies ist kein Grund für einen Not-Halt. Nach einem Klappenstopp die Klappe mit dem Schalter ausgerichtet schließen, die Anforderungen von **Kapitel 2.4** anwenden und anschließend den Reset durchführen.

**Reset-Verfahren**

1. Die physische Gefahr beseitigen; die Ursache des Einklemmens, der Leckage oder der Störung in einen sicheren Zustand bringen.
2. Den gedrückten Not-Halt-Pilztaster **entriegeln** (durch Ziehen oder Drehen in Pfeilrichtung die Verriegelung lösen). Es können mehrere Taster gedrückt sein; alle 7 Taster prüfen.
3. Prüfen, dass alle Wartungsklappen geschlossen und mit dem Schalter ausgerichtet sind.
4. Den blauen **RESET**-Taster am Bedienfeld drücken, **bis die Leuchte aufleuchtet**. Das Entriegeln des Not-Halt allein genügt nicht; der Bediener bestätigt mit dem Reset, dass die Maschine in den sicheren Zustand versetzt wurde.
5. Leuchtet die RESET-Leuchte nicht, die Diagnoseschritte in **Kapitel 11.1.2 — Störung 4** anwenden; keinen Funktionsschalter einschalten, bevor die Leuchte leuchtet.
6. Die Funktionen nicht neu starten, bevor die Gefahr vollständig beseitigt ist; die Startreihenfolge richtet sich nach **Kapitel 7.2**.

Das Reset-Verfahren stellt die Sicherheitsfunktion wieder her; ein Start ohne Beseitigung der Störung kann zu erneutem Stillstand oder Schaden führen. Der Funktionstest des Not-Halt wird **monatlich** wiederholt (**Siehe Kapitel 6.2.3, 5.4.1**).

---

# 2.6 Persönliche Schutzausrüstung (PSA)

Der Betreiber ist verpflichtet, aufgabenbezogene PSA bereitzustellen und deren Verwendung zu überwachen. Die folgende Matrix definiert die Mindestanforderungen; sind die örtlichen Vorschriften strenger, gelten diese. Das Etikett „KKD KULLAN" (PSA tragen) an der Maschine verweist auf diese Matrix.

| Tätigkeit | Arbeitskleidung | Sicherheitsschuhe mit Stahlkappe | Handschuhe | Schutzbrille | Atemschutz |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Bedienung des Bedienfelds (Schalter / Reset) | ✓ | ✓ | — | — | — |
| Beladen / Entnehmen der Werkstücke (Förderer-Ein-/Auslauf) | ✓ | ✓ | ✓ (hitzebeständig — austretende Werkstücke sind heiß) | ✓ (Spritzgefahr) | — |
| Manuelles Befüllen der Tanks, Füllstandkontrolle | ✓ | ✓ (rutschfest) | ✓ | ✓ | — |
| Reinigung von Vorfilter, Saugfilter und Beutelfilter | ✓ | ✓ (rutschfest) | ✓ (flüssigkeitsdicht, chemikalienbeständig) | ✓ | Bei Bedarf Filtermaske |
| Tankentleerung, Desinfektion, Reinigungschemikalien | ✓ (flüssigkeitsdichte Schürze) | ✓ (rutschfest) | ✓ (chemikalienbeständig, mit langer Stulpe) | ✓ (vollständig geschlossen) | Bei Bedarf Filtermaske |
| Mechanische Wartung (Förderer, Pumpe, Ventilator, Düsen) | ✓ | ✓ | ✓ (schnittfest) | ✓ | — |
| Eingriff im Schaltschrank (mit LOTO) | ✓ (Baumwolle, schwer entflammbar) | ✓ (isolierende Sohle) | Isolierend (während der Messung) | ✓ | — |
| Arbeiten in der Nähe von heißem Tank / Heizstäben / Trocknungskammer | ✓ | ✓ | ✓ (hitzebeständig) | ✓ | — |

**VORSICHT — Rutschiger Boden:** Bei Leckage oder Überlauf im Tankumfeld sind rutschfeste Schuhe und vorsichtiges Bewegen zwingend (**Siehe Kapitel 10**).

**VORSICHT — Heiße Werkstücke:** Die aus der Trocknungskammer austretenden Werkstücke wurden mit Heißluft getrocknet und bergen Verbrennungsgefahr; beim Entnehmen hitzebeständige Handschuhe tragen.

Kurzzeitige Besucher müssen vor dem Betreten des aktiven Prozessbereichs vom Betreiber eingewiesen und mit der Mindest-PSA (Schuhe, Schutzbrille) ausgestattet werden.
