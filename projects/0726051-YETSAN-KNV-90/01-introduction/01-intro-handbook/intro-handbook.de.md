# 1.1 Über diese Anleitung

## 1.1.1 Zweck, Umfang und Geltungsbereich der Anleitung

Diese Betriebsanleitung ist ein untrennbarer und rechtlich verbindlicher Bestandteil der Maschine **KNV 90 7500 2B**. Sie wurde nach den Grundsätzen von EN ISO 12100 (Sicherheit von Maschinen — Risikobeurteilung) und EN ISO 20607 (Betriebsanleitung — allgemeine Gestaltungsgrundsätze) erstellt, um die sichere, effiziente und bestimmungsgemäße Verwendung der Maschine zu gewährleisten. Diese Normen definieren international anerkannte Mindestanforderungen an Maschinensicherheit und Anleitungsinhalt; die Anweisungen in dieser Anleitung sind daher nicht nur Empfehlungen, sondern Teil der Betreiberverantwortung.

**Umfang:** **KNV 90 7500 2B** (Modellcode **KNV-90**, Seriennummer **0726051**, Kunde **YETSAN**) und die mit diesem Projekt gelieferte Standardausstattung. Projektfremde Optionen sind nicht vorhanden; werden künftig Optionen ergänzt, wird die Anleitung aktualisiert.

**Zielgruppen:** Bediener, Wartungspersonal, Installationspersonal.

Die Maschine ist eine Teilewaschlinie mit Förderer und zwei Bädern, in der industrielle Werkstücke auf einem von einem Getriebemotor angetriebenen Kettenförderer durch die Wasch- und Spülbäder geführt und in der Trocknungseinheit getrocknet werden. In diesem Projekt sind **keine PLC und kein HMI** vorhanden; alle Funktionen werden über die EIN/AUS-Schalter am Bedienfeld geführt, und das Beladen/Entnehmen der Werkstücke erfolgt **manuell**. Die Anleitung enthält daher keine Bildschirmmenüs, Alarmlisten oder Rezeptverwaltung; stattdessen werden die Leuchten am Bedienfeld, die Thermostateinstellungen und die Schalterlogik beschrieben (**Siehe Kapitel 3.4**).

Die Anleitung deckt die folgenden Lebenszyklusphasen ab. Die ausführlichen Anweisungen zu jeder Phase stehen im jeweiligen Kapitel; diese Liste dient nur als Übersicht des Umfangs:

1. Transport, Handhabung und Lagerung (**Siehe Kapitel 4**)
2. Montage, Installation, Inbetriebnahme und Ersteinstellungen (**Siehe Kapitel 5–6**)
3. Betrieb und Kapazität (**Siehe Kapitel 7–8**)
4. Periodische Wartung und Schmierung (**Siehe Kapitel 9**)
5. Reinigung und Desinfektion (**Siehe Kapitel 10**)
6. Fehlerdiagnose und -behebung (**Siehe Kapitel 11**)
7. Demontage, Außerbetriebnahme und Entsorgung (**Siehe Kapitel 12**)

Dieses Dokument vermittelt keine ingenieurtechnische, mechanische oder elektrotechnische Grundausbildung. Es wird vorausgesetzt, dass das Personal über die seiner Aufgabenbeschreibung entsprechende Berufsausbildung und über eine grundlegende industrielle Sicherheitskultur verfügt. Fehlende Schulung kann zur fehlerhaften Anwendung der Verfahren, zum Ausfall von Sicherheitsfunktionen und zu Maschinenschäden führen.

---

## 1.1.2 Gültigkeit, Aktualität und Dokumentenkontrolle der Anleitung

Die Texte, technischen Daten, Fotos und Schemata in dieser Anleitung geben die zum Zeitpunkt des Werksversands gelieferte **As-Built**-Konfiguration (Zustand bei Herstellung) der Maschine wieder. Stellen Sie eine Abweichung zwischen Anleitung und Maschine fest, sind der physische Maschinenzustand und das Typenschild maßgeblich; klären Sie den Sachverhalt mit dem Herstellerservice (**Siehe Kapitel 1.3**).

| Feld | Wert |
| :--- | :--- |
| **Maschine** | KNV 90 7500 2B |
| **Modellcode** | KNV-90 |
| **Seriennummer** | 0726051 |
| **Baujahr** | 2026 |
| **Herstellungs-/Versanddatum** | [EKSİK] |
| **Revision der Anleitung** | 00 |

Der Hersteller behält sich das Recht vor, im Rahmen von Forschung, Entwicklung und Produktverbesserung Änderungen an Maschinenkonstruktion und Dokumentation ohne vorherige Ankündigung vorzunehmen. Für bereits ausgelieferte Maschinen entsteht keine Verpflichtung zur rückwirkenden Revision. Diese Regel ermöglicht die kontinuierliche Verbesserung in der Serienfertigung; Änderungen an Ihrer Maschine gelten jedoch ausschließlich für diese Seriennummer. Die Revisionskontrolle ist zwingend, damit bei einer Störungs- oder Unfalluntersuchung nachvollziehbar bleibt, welche Anweisung gültig war; ältere Revisionsexemplare sind daher aus dem Verkehr zu ziehen.

Die Beschriftungen am Bedienfeld sind in **Englisch** (TANK 1 HEATER, CONVEYOR, EMERGENCY STOP usw.); die Bedeutung der Beschriftungen wird in **Kapitel 3.4** mit ihren Übersetzungen erläutert.

---

## 1.1.3 Zielgruppe, Personalqualifikation und Verantwortungsverteilung

Die Maschine enthält 380 V Elektrik, bis +70 °C erhitzte Prozessflüssigkeit, Druckluft mit 6 bar, einen laufenden Förderer sowie rotierende Ventilator- und Pumpenmechanismen. Diese Energie- und Prozessquellen können bei falschem Eingriff zu schweren Verletzungen oder Sachschäden führen. Für den Personaleinsatz, die Schulung und die Befugnisgrenzen ist der Betreiber (die die Maschine betreibende Organisation) verantwortlich. Die folgenden Rollen präzisieren die in der Anleitung definierten Befugnisse und Verbote; rollenfremde Eingriffe beeinträchtigen den Gewährleistungsumfang und die Arbeitssicherheit.

**Bediener**

Der Bediener ist für den täglichen Betrieb der Maschine verantwortlich: manuelles Befüllen der Tanks, Ein- und Ausschalten der Funktionsschalter am Bedienfeld (Heizung, Pumpe, Blower, Trocknung, Förderer), Einstellen der Fördergeschwindigkeit über das Potentiometer, Auflegen der Werkstücke am linken Einlauf auf den Förderer und Abnehmen am rechten Auslauf (**Siehe Kapitel 7**). Im Notfall betätigt der Bediener den nächstgelegenen Not-Halt-Taster und versetzt die Maschine nach Beseitigung der Gefahr mit **RESET** wieder in den Bereitschaftszustand (**Siehe Kapitel 2.5**).

Der Bediener öffnet nicht den Schaltschrank, hebt die Wartungsklappen nicht bei laufender Maschine ab, überbrückt nicht die Klappen-Sicherheitsschalter oder den Not-Halt-Kreis und verändert keine Parameter außer dem Thermostat (Frequenzumrichter, Sicherheitsrelais). Der Bediener muss vom Betreiber in Maschinenfunktion, sicherem Beladen, Schalterlogik und Not-Halt-Verfahren geschult sein. Das Einschalten eines Schalters ohne Schulung birgt die Gefahr, die Heizung bei leerem Tank zu betreiben, sowie Einklemm- und Verbrennungsgefahr am Förderer.

**Wartungspersonal (Mechanik / Elektrik / Pneumatik)**

Das Wartungspersonal führt die periodischen Wartungsschritte aus (**Siehe Kapitel 9**), reinigt und wechselt die Filter (**Siehe Kapitel 10**), ersetzt Verschleißteile durch Originalersatzteile und führt die grundlegende Fehlerdiagnose durch (**Siehe Kapitel 11**). Bei einer Störung ist es die primäre Rolle, die an der Maschine eingreift. Bei allen Arbeiten, die eine Energietrennung erfordern, ist das LOTO-Verfahren zwingend einzuhalten; die LOTO-Schritte sind in **Kapitel 2.4** definiert und werden in diesem Kapitel nicht wiederholt.

Das Wartungspersonal muss über die Qualifikation im jeweiligen Fachgebiet, Beherrschung des LOTO-Verfahrens und den korrekten Einsatz der PSA verfügen (**Siehe Kapitel 2.4, 2.6**). Für Arbeiten im Schaltschrank (MKŞ-Rückstellung, Fehlerstrom-Schutzschalter, Schütze, Heizstabmessung) ist eine Elektrofachkraft gemäß nationalen Vorschriften erforderlich. Unbefugte Elektroarbeiten bergen Stromschlag- und Brandgefahr.

**Installationspersonal**

Das Installationspersonal führt das Aufstellen der Maschine mit dem Gabelstapler, das Nivellieren sowie die Elektro-, Druckluft- und Wasseranschlüsse aus (**Siehe Kapitel 5**). Es führt die Inbetriebnahmetests und die Prüfungen der Sicherheitsfunktionen durch (**Siehe Kapitel 5.4–5.5**). Es nimmt die Ersteinstellungen und -kontrollen vor (**Siehe Kapitel 6**). Platzbedarf und technische Anschlusswerte sind in **Kapitel 3** definiert; bei der Installation werden diese Werte nicht wiederholt, sondern es wird auf das jeweilige Unterkapitel verwiesen.

Das Installationspersonal muss über Erfahrung in der Installation von Industriemaschinen, Kenntnisse der Elektro-/Pneumatik-/Wasseranschlüsse und Beherrschung der Transportverfahren mit Gabelstapler verfügen (**Siehe Kapitel 4**). Eine fehlerhafte Installation kann dazu führen, dass die Maschine nicht nivelliert läuft, Tanks undicht werden, Pumpen und Ventilatoren infolge vertauschter Phasen rückwärts drehen und Sicherheitsfunktionen nicht auslösen.

**Autorisierter Servicetechniker des Herstellers**

Die Parameter des Förderer-Frequenzumrichters (Delta VFD004EL21W-1), der Sicherheitsrelais-Kreis (Omron G9SB), größere mechanische Überholungen (Austausch von Pumpe, Getriebemotor, Trocknungsbaugruppe) und strukturelle Änderungen am Schaltschrank dürfen ausschließlich von durch den Hersteller autorisiertem Personal vorgenommen werden. Unbefugte Parameter- oder Schaltungsänderungen können Sicherheitsfunktionen außer Kraft setzen und beenden den gesamten Gewährleistungsumfang.

---

## 1.1.4 Aufbewahrung und Verfügbarkeit der Anleitung

Diese Anleitung ist ein untrennbarer Bestandteil der betrieblichen Integrität der Maschine. Wird sie von der Maschine getrennt oder unzugänglich gemacht, kann das Personal nicht auf die aktuellen Anweisungen zugreifen, was zu fehlerhaften Eingriffen führen kann.

Greifen Sie auf die aktuelle digitale Fassung der Anleitung über das Informationsetikett an der Maschine (QR-Code o. Ä.) oder über die digitalen Kanäle des Herstellers zu (**Siehe Kapitel 1.3**).

Der Betreiber ist verpflichtet, dem Bedien- und Wartungspersonal im Arbeitsbereich jederzeit Zugang zur Anleitung zu gewährleisten. In Anlagen, in denen eine gedruckte Fassung verwendet wird, liegt es in der Verantwortung des Betreibers, die Vollständigkeit der Seiten zu wahren, das Exemplar vor Öl, Chemikalien und Feuchtigkeit zu schützen und neue Revisionen in die gedruckte Fassung einzuarbeiten. Bei Verkauf, Übertragung oder Vermietung der Maschine ist der Betreiber ebenfalls verpflichtet, die Anleitung und die Zugangsinformationen an den neuen Nutzer zu übergeben.

---

## 1.1.5 Bestimmungsgemäße Verwendung, Haftungsbeschränkung und Gewährleistungsausschluss

Der Hersteller hat die Maschine nach anerkannten Regeln der Technik und Sicherheitsnormen gefertigt. Gewährleistung und gesetzliche Haftung setzen voraus, dass die Maschine innerhalb der Grenzen der **bestimmungsgemäßen Verwendung** betrieben wird (**Siehe Kapitel 3.2**). Ein Betrieb außerhalb der bestimmungsgemäßen Verwendung erhöht das Risiko von Prozessfehlern, Sachschäden und Personenschäden.

In den folgenden Fällen übernimmt der Hersteller keine Haftung; die Maschine fällt **aus der Gewährleistung**:

1. **Außerkraftsetzen von Sicherheitseinrichtungen:** Ausbau, Überbrücken, Manipulation mit Magneten oder Deaktivieren der Not-Halt-Taster, der magnetischen Schalter der Wartungsklappen, der Sicherheitsrelais oder der Tank-Füllstandverriegelung (**Siehe Kapitel 2**). Dieser Eingriff führt dazu, dass Pumpe und Förderer bei geöffneter Klappe weiterlaufen, mit der Folge von Quetschungen und Verletzungen durch heiße Flüssigkeit.
2. **Nicht genehmigte Änderungen:** Mechanische, elektrische (Schaltschrank, Frequenzumrichterparameter, Relaisschaltung) oder anschlusstechnische Änderungen ohne schriftliche Genehmigung des Herstellers. Diese Änderungen können die Auslegungswerte der Schutzelemente (MKŞ, Fehlerstromschutz, Sicherung) ungültig machen.
3. **Nicht bestimmungsgemäße Materialien und Chemikalien:** Betrieb der Maschine mit nicht freigegebenen, säurebasierten oder edelstahlschädigenden Reinigungsmitteln (**Siehe Kapitel 3.2.4, 10.1.7**); Verarbeitung lebender Organismen, von Lebensmitteln und lebensmittelberührenden Oberflächen sowie medizinischer Instrumente (**Siehe Kapitel 3.2.3**).
4. **Grenzwertüberschreitung:** Überschreitung der auf dem Typenschild und in **Kapitel 3.3** definierten Grenzwerte für Elektrik, Druck, Temperatur und Umgebung; Betrieb der Fördergeschwindigkeit außerhalb des Bereichs 20–60 Hz; Erzwingen des Heizungsbetriebs bei leerem Tank.
5. **Verwendung nicht originaler Ersatzteile** (**Siehe Kapitel 1.3.4**); insbesondere Nachbauten von Düsen, Heizstäben, Füllstandsensoren, Sicherheitsschaltern und Sicherheitsrelais.
6. **Wartungsversäumnis:** Filterverstopfung, Trockenlauf der Pumpe, Heizstabausfall und Korrosion infolge Nichteinhaltung des Wartungsplans in **Kapitel 9** und der Reinigungsintervalle in **Kapitel 10**.

---

## 1.1.6 Geistiges Eigentum und Vertraulichkeit

Diese Anleitung, die Maschinenfotos, 3D-Ansichten, der Schaltplan und die technischen Zeichnungen sind geistiges Eigentum des Herstellers. Diese Materialien enthalten das Konstruktionswissen des Herstellers; unbefugte Weitergabe beeinträchtigt den Wettbewerbsvorteil und steht unter rechtlichem Schutz.

Das Kopieren, Vervielfältigen, die Weitergabe an unbefugte Dritte (insbesondere Wettbewerber) oder die Verwendung der Anleitung zum Zweck des Reverse Engineering ohne schriftliche Genehmigung des Herstellers gilt als Verletzung des geistigen Eigentums. Im Verletzungsfall behält sich der Hersteller rechtliche Schritte vor. Die Vervielfältigung der Anleitung innerhalb des Betriebs für Bedien- und Wartungspersonal ist von diesem Verbot ausgenommen.
