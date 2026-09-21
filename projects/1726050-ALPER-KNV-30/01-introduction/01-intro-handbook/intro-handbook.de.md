# 1.1 Über das Handbuch

## 1.1.1 Zweck, Umfang und Anwendungsbereich des Handbuchs

Diese Bedienungsanleitung ist ein integraler und rechtlich verbindlicher Bestandteil der Maschine **KNV 30 3000 2B**. Die Anleitung wurde gemäß den Grundsätzen von EN ISO 12100 und EN ISO 20607 erstellt, um eine sichere, effiziente und bestimmungsgemäße Verwendung der Maschine zu gewährleisten. Diese Normen definieren international anerkannte Mindestanforderungen an die Maschinensicherheit und den Inhalt der Bedienungsanleitung; daher sind die Anweisungen in der Anleitung nicht nur Empfehlungen, sondern Teil der Verantwortung des Betreibers.

**Umfang:** **KNV 30 3000 2B** (Modellcode **KNV-30**, Seriennr. **1726050**) und die mit diesem Projekt gelieferte Ausrüstung.

**Ziel-Lesergruppen:** Linienverantwortliche(r), Wartungspersonal, Installationspersonal.

Die Maschine ist eine industrielle Teilewaschanlage mit Beschickung vom Einlauf, Förderband und zwei Bädern (Waschen + Spülen). Die Teile laufen auf dem Förderband und durchlaufen Waschen, Spülen und Trocknen. In diesem Projekt erfolgen Teile-Einlauf und -Auslauf durch Roboter; Be- und Entladeverfahren gehören zur Kundenlinie (**Siehe Kapitel 7.4**). Die Anleitung umfasst daher keine Details der Roboterintegration; sie definiert nur die eigenen Prozessfunktionen der Maschine und die sicheren Grenzen.

Die Anleitung umfasst die folgenden Lebenszyklusphasen. Detaillierte Anweisungen für jede Phase stehen im jeweiligen Kapitel; diese Liste ist nur eine Umfangskarte:

1. Transport, Handhabung und Lagerung (**Siehe Kapitel 4**)
2. Montage, Installation und Inbetriebnahme (**Siehe Kapitel 5–6**)
3. Betrieb (**Siehe Kapitel 7–8**)
4. Periodische Wartung (**Siehe Kapitel 9**)
5. Reinigung und Desinfektion (**Siehe Kapitel 10**)
6. Störungsdiagnose und -behebung (**Siehe Kapitel 11**)
7. Demontage, Außerbetriebnahme und Entsorgung (**Siehe Kapitel 12**)

Dieses Dokument vermittelt keine grundlegende Ingenieur-, Mechanik- oder Elektroausbildung. Es wird vorausgesetzt, dass das Personal im Rahmen der Schulung von Betriebs- und Wartungspersonal über eine berufsbezogene Ausbildung zu Maschinenverwendung und -wartung verfügt. Fehlende Schulung kann zu falscher Anwendung der Verfahren und zu Maschinenschäden führen.

---

## 1.1.2 Gültigkeit, Aktualität und Dokumentenlenkung des Handbuchs

Die Texte, technischen Daten, Zeichnungen und Schemata in dieser Anleitung spiegeln die **As-Built**-Konfiguration (wie gefertigt) wider, die zum Fertigungs- / Versanddatum der Maschine (**2026-08-12**) geliefert wurde. Wenn Sie eine Unstimmigkeit zwischen Anleitung und Maschine feststellen, legen Sie den physischen Maschinenzustand zugrunde und prüfen Sie mit dem Herstellerservice (**Siehe Kapitel 1.3**).

| Feld | Wert |
| :--- | :--- |
| **Revision** | 00 |
| **Letzte Aktualisierung** | 2026-08-12 |
| **Erstellt von** | Fatih GÜRAL |
| **Herstellungsjahr** | 2026 |

Der Hersteller behält sich das Recht vor, im Rahmen von F&E und Produktverbesserung Änderungen an Maschinendesign und Dokumentation ohne vorherige Ankündigung vorzunehmen. Für zuvor gelieferte Maschinen entsteht keine Verpflichtung zur rückwirkenden Revision. Diese Regel ermöglicht kontinuierliche Verbesserung in der Serienfertigung; Änderungen an Ihrer vorhandenen Maschine gelten jedoch nur für diese Seriennummer.

Die Sprachen des HMI-Bedienfelds sind in **Kapitel 3.4** definiert.

---

## 1.1.3 Zielgruppe, Personalqualifikation und Verantwortungsverteilung

Die Maschine enthält Elektrizität, heiße Flüssigkeit, Druckluft, chemische Lösung und bewegte Mechanismen. Diese Energie- und Prozessquellen können bei falschem Eingriff schwere Verletzungen oder Geräteschäden verursachen. Der Arbeitgeber (die die Maschine betreibende Organisation) ist für Personalzuweisung, Schulung und Befugnisgrenzen verantwortlich. Die folgenden Rollen klären die in der Anleitung definierten Befugnisse und Verbote; ein Eingriff außerhalb der Rolle beeinträchtigt den Garantieumfang und die Arbeitssicherheit.

**Bediener / Linienverantwortliche(r)**

An dieser Maschinenlinie gibt es keinen ständig anwesenden physischen Schichtbediener; Be- und Entladen der Teile erfolgen durch Roboter. Die Rolle des/der Linienverantwortlichen umfasst die Überwachung der Maschine über HMI, das Geben von Vorbereitungs-/Start-/Stop-Befehlen, **Produkt entnommen Bestätigung** nach Error-461 und das Informieren des Wartungspersonals bei Alarm. Diese Rolle nimmt keine mechanischen oder elektrischen Eingriffe an der Maschine vor; sie umgeht den RFID-Sicherheitssensor nicht.

Der/die Linienverantwortliche(r) gibt über HMI Vorbereitungs-, Start- und Stop-Befehle; schaltet Waschen, Spülen, Trocknen und Abluft von der Betriebsseite ein oder aus (**Siehe Kapitel 7.1**). Der/die Linienverantwortliche(r) überwacht aktive Alarme über HMI und Signalleuchte; informiert das Wartungspersonal, wenn ein Eingriff erforderlich ist. Der/die Linienverantwortliche(r) öffnet den Elektroschrank nicht, entfernt keine Schutzabdeckungen und greift nicht in Parameter oder Sicherheitseinstellungen ein.

Der/die Linienverantwortliche(r) muss vom Arbeitgeber zu Maschinenablauf, HMI-Nutzung und Not-Halt-Verfahren geschult sein (**Siehe Kapitel 2.5**). Start über HMI ohne Schulung birgt das Risiko eines unvorbereiteten Prozessstarts und von Geräteschäden.

**Wartungspersonal (Mechanik / Elektrik / Pneumatik)**

Das Wartungspersonal führt periodische Wartungsschritte aus (**Siehe Kapitel 9**), tauscht Verschleißteile und führt eine grundlegende Störungsdiagnose durch (**Siehe Kapitel 11**). Dies ist die primäre Rolle, die bei einem Fehler an der Maschine eingreift. Die Einhaltung des LOTO-Verfahrens ist bei allen Arbeiten mit Energieisolation verpflichtend; die LOTO-Schritte sind in **Kapitel 2.4** definiert und werden in diesem Kapitel nicht wiederholt.

Das Wartungspersonal muss über Kompetenz im jeweiligen technischen Bereich, Beherrschung des LOTO-Verfahrens und Verwendung geeigneter PSA verfügen (**Siehe Kapitel 2.4, 2.6**). Elektroarbeiten erfordern eine Bevollmächtigung gemäß nationaler Gesetzgebung. Unbefugter Elektroeingriff erzeugt das Risiko von Stromschlag und Brand.

**Installationspersonal**

Das Installationspersonal führt Montage, Positionierung und Medienanschlüsse der Maschine aus (**Siehe Kapitel 5**). Es führt Inbetriebnahmetests und Sicherheitsfunktionstests durch (**Siehe Kapitel 5.4–5.5**). Es führt Erst-Einstellungen und Parameterprüfungen durch (**Siehe Kapitel 6**). Flächenanforderungen und technische Medienwerte sind in **Kapitel 3** definiert; diese Werte werden bei der Installation nicht wiederholt — es wird der jeweilige Unterabschnitt herangezogen.

Das Installationspersonal muss über Erfahrung in der Installation industrieller Maschinen, Kenntnisse zu Elektro-/Pneumatik-/Wasseranschlüssen und Beherrschung der Gabelstapler-Transportverfahren verfügen (**Siehe Kapitel 4**). Fehlerhafte Installation kann dazu führen, dass die Maschine nicht im Lot läuft, Undichtigkeiten entstehen und Sicherheitsfunktionen nicht greifen.

**Autorisierter Servicespezialist des Herstellers**

SPS-/HMI-Engineering-Menüs, Antriebsparameter, größere mechanische Revisionen und Software-Updates dürfen nur von vom Hersteller bevollmächtigtem Personal durchgeführt werden. Unbefugte Software- oder Parameteränderungen können Sicherheitsfunktionen außer Kraft setzen und den gesamten Garantieumfang beenden.

---

## 1.1.4 Aufbewahrung und Zugänglichkeit des Handbuchs

Diese Anleitung ist ein integraler Bestandteil der betrieblichen Integrität der Maschine. Eine Trennung von der Maschine oder Unzugänglichkeit kann verhindern, dass das Personal aktuelle Anweisungen erreicht, und zu falschen Eingriffen führen.

Greifen Sie auf die aktuelle digitale Kopie der Anleitung über das Informationsetikett an der Maschine (QR-Code usw.) oder die digitalen Kanäle des Herstellers zu (**Siehe Kapitel 1.3**).

Die unterbrechungsfreie Zugänglichkeit der Anleitung im Arbeitsbereich von Bediener und Wartungspersonal ist eine Verpflichtung des Arbeitgebers (der die Maschine betreibenden Organisation). An Standorten mit gedruckter Kopie liegt die Erhaltung der Seitenintegrität und die Integration neuer Revisionen in die physische Kopie in der Verantwortung des Arbeitgebers. Bei Verkauf, Übertragung oder Vermietung der Maschine ist die Übergabe der Anleitung und der Zugangsinformationen an den neuen Nutzer ebenfalls Verpflichtung des Arbeitgebers.

---

## 1.1.5 Bestimmungsgemäße Verwendung, Haftungsbegrenzung und Garantieverlust

Der Hersteller hat die Maschine gemäß anerkannten Ingenieurpraktiken und Sicherheitsnormen gefertigt. Garantie und rechtliche Haftung hängen vom Betrieb der Maschine innerhalb der Grenzen der **bestimmungsgemäßen Verwendung** ab (**Siehe Kapitel 3.2**). Betrieb außerhalb der bestimmungsgemäßen Verwendung erhöht das Risiko von Prozessfehlern, Geräteschäden und Personenschäden.

In den folgenden Fällen übernimmt der Hersteller keine Haftung; die Maschine bleibt **außerhalb des Garantieumfangs**:

1. Ausbau, Umgehung oder Außerbetriebnahme von Sicherheitseinrichtungen (Not-Halt, RFID-Sensor, Verriegelung usw.) (**Siehe Kapitel 2**).
2. Mechanische, elektrische oder Softwareänderungen ohne schriftliche Freigabe des Herstellers.
3. Betrieb der Maschine mit nicht freigegebenen Chemikalien oder Materialien außerhalb der bestimmungsgemäßen Verwendung (**Siehe Kapitel 3.2**); Verarbeitung lebender Organismen (Mensch, Tier, Pflanze usw.).
4. Überlastung der Maschine durch Überschreiten der auf dem Typenschild und in **Kapitel 3** definierten Grenzwerte.
5. Verwendung nicht originaler Ersatzteile (**Siehe Kapitel 1.3.4**).

---

## 1.1.6 Geistiges Eigentum und Vertraulichkeit

Diese Anleitung, Maschinenschemata, HMI-/SPS-Schnittstellendokumentation und technische Zeichnungen sind geistiges Eigentum des Herstellers. Diese Materialien enthalten das Konstruktionswissen des Herstellers; unbefugte Weitergabe schadet dem Wettbewerbsvorteil und steht unter rechtlichem Schutz.

Das Kopieren, Vervielfältigen, Teilen mit unbefugten Dritten (insbesondere Wettbewerbern) oder die Verwendung der Anleitung zum Reverse Engineering ohne schriftliche Genehmigung des Herstellers gilt als Verletzung des geistigen Eigentums. Im Verletzungsfall behält sich der Hersteller das Recht vor, rechtliche Schritte einzuleiten.
