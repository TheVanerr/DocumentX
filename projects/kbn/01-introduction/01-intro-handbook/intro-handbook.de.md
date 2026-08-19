# 1.1 Über dieses Handbuch

## 1.1.1 Zweck, Umfang und Anwendungsbereich des Handbuchs

Diese Betriebsanleitung ist ein integraler, grundlegender und rechtlich bindender Bestandteil der industriellen Waschmaschine. Sie wurde unter Berücksichtigung der geltenden Maschinenrichtlinie und der relevanten internationalen Normen (EN ISO 12100, EN ISO 20607) sorgfältig erstellt, um einen sicheren, effizienten, umweltgerechten und bestimmungsgemäßen Betrieb der Maschine zu gewährleisten. 

Der Umfang dieses Dokuments ist so strukturiert, dass er den gesamten Lebenszyklus (Lifecycle) der Maschine abdeckt. Dieser Lebenszyklus umfasst die folgenden Phasen:
* **Transport und Positionierung:** Versand der Maschine ab Werk, Transport vor Ort, Nutzung der Anschlag-/Hebebänder und Befestigung am Boden.
* **Installation und Inbetriebnahme:** Herstellen der externen Infrastrukturanschlüsse wie Elektrik, Druckluft, Wasserein-/-auslass und Entlüftung (Abluft) sowie Durchführung der ersten Testläufe.
* **Betrieb:** Tägliche Produktionsroutinen, Erstellung von Waschrezepten, Beladen, Betreiben und Entladen der Maschine.
* **Wartung und Reinigung:** Tägliche, wöchentliche, monatliche und jährliche periodische Wartungsverfahren, Schmierstellen, Filterreinigungen und Kontrolle von Verschleißteilen.
* **Fehlersuche und -behebung:** Erstmaßnahmen bei möglichen Alarmzuständen und Behebung von Fehlercodes auf dem HMI-Bildschirm.
* **Außerbetriebnahme und Entsorgung:** Sicheres Freischalten (Spannungsfreischalten), Demontieren und ordnungsgemäße Entsorgung der Maschine gemäß den Recyclingverfahren nach Ablauf ihrer wirtschaftlichen Lebensdauer.

Dieses Dokument dient nicht der Vermittlung von Grundlagen der Ingenieurwissenschaften, allgemeinen Mechanik oder Elektrotechnik. Es wird davon ausgegangen, dass alle an der Maschine arbeitenden Personen bereits über die ihrer Aufgabenstellung entsprechende fachliche und technische Ausbildung verfügen und eine grundlegende industrielle Sicherheitskultur verinnerlicht haben.

---

## 1.1.2 Gültigkeit, Aktualität und Dokumentensteuerung des Handbuchs

Die in diesem Handbuch enthaltenen Texte, technischen Daten, technischen Zeichnungen, hydraulischen/pneumatischen Schaltpläne und elektrischen Schaltpläne spiegeln die physische Hardware- und Softwarekonfiguration (den "As-Built"-Zustand) zum Zeitpunkt der Herstellung der Maschine und deren Versand ab Werk nach Bestehen der finalen Qualitätskontrolltests (QC) wider. 

* **Versionskontrolle:** Jede Seite oder das Deckblatt des Handbuchs trägt eine eindeutige Dokumenten-Revisionsnummer und ein Veröffentlichungsdatum. Maschinenspezifische Konfigurationen (Sonderabmessungen, optionale Ausstattungen) sind im Anhang (Appendix) gesondert aufgeführt.
* **Änderungsrecht:** Der Hersteller behält sich das Recht vor, im Rahmen von F&E-Aktivitäten und der Politik der kontinuierlichen Produktverbesserung ohne vorherige Ankündigung Änderungen am mechanischen/elektronischen Design der Maschine und am Inhalt dieser Dokumentation vorzunehmen, ohne verpflichtet zu sein, rückwirkende Revisionen an bereits gelieferten Maschinen durchzuführen. 

---

## 1.1.3 Zielgruppe, Personalqualifikation und Aufgabenverteilung

Da industrielle Waschmaschinen Hochspannung, Heißwasser, Drucksysteme, chemische Lösungen und bewegliche mechanische Teile enthalten, ist die Kompetenz des Personals, das an der Maschine arbeitet, ein kritischer Faktor für die Arbeitssicherheit. Der Arbeitgeber (das die Maschine betreibende Unternehmen) ist allein dafür verantwortlich, das Personal gemäß der folgenden Berechtigungsmatrix einzusetzen:

1. **Bediener:**

   * **Befugnis:** Täglicher Betrieb der Maschine, Be- und Entladen von Teilen, Auswahl vorhandener Waschrezepte über die Standard-HMI-Benutzeroberfläche sowie Starten/Stoppen.
   * **Anforderung:** Muss vom Arbeitgeber über den Maschinenbetrieb und Not-Halt-Prozeduren geschult worden sein. Dem Bediener ist es strengstens untersagt, Maschinenabdeckungen (Schutzverkleidungen) mit Werkzeugen zu demontieren, den Schaltschrank zu öffnen oder Parametereinstellungen zu verändern.

2. **Wartungspersonal (Mechanik / Pneumatik / Elektrik):**
   * **Befugnis:** Durchführung der im Handbuch angegebenen periodischen Wartungsschritte, Austausch von Verschleißteilen (Filter, Dichtungen usw.), Sensoreinstellungen und grundlegende Fehlersuche. 
   * **Anforderung:** Muss über ein Diplom/Zertifikat in den entsprechenden ingenieurwissenschaftlichen oder technischen Berufsfeldern verfügen. Muss die Verfahren zur Kontrolle gefährlicher Energien (Lockout/Tagout - LOTO) vollständig beherrschen und während der Wartung geeignete persönliche Schutzausrüstung (PSA) tragen. Elektrofachkräfte müssen gemäß den geltenden nationalen Vorschriften für elektrische Anlagen autorisiert sein.

3. **Autorisierter Servicetechniker des Herstellers:**
   * **Befugnis:** Zugriff auf PLC-Softwarearchitektur, Antriebsparameter, geheime (passwortgeschützte) HMI-Ingenieurmenüs, Austausch von Hauptmotoren/Pumpen und größere Konstruktionsrevisionen.
   * **Anforderung:** Ausschließlich Personal, das speziell vom Hersteller geschult, zertifiziert und mit einem aktuellen Autorisierungsnachweis ausgestattet wurde.

---

## 1.1.4 Aufbewahrung und Zugänglichkeit des Handbuchs

Dieses digitale Dokument ist als integraler Bestandteil der operationalen Integrität der Maschine zu betrachten. Aufgrund von Grundsätzen der ökologischen Nachhaltigkeit und aktuellen Dokumentationsstandards wird diese Betriebsanleitung in digitaler Form (Softcopy) bereitgestellt.

* **Zugänglichkeit:** Die aktuelle digitale Kopie des Handbuchs ist jederzeit über die Anweisungen auf dem Informationsschild an der Maschine (z. B. QR-Code) oder über die vom Hersteller bereitgestellten digitalen Kanäle zugänglich.
* **Verantwortung des Arbeitgebers:** Der Betreiber/das Anlagenmanagement ist verpflichtet, den unterbrechungsfreien Zugriff des Bedien- und Wartungspersonals auf dieses digitale Dokument im Arbeitsbereich der Maschine (über industrielle Tablets, Computerterminals oder den HMI-Bildschirm) sicherzustellen.
* **Bevorzugung einer gedruckten Version:** Falls das Anlagenmanagement aufgrund eigener interner Verfahren das Handbuch in gedruckter Form (Hardcopy) vorhalten möchte, liegt die Wahrung der Vollständigkeit der Seiten, der Schutz vor industrieller Verschmutzung (Öl, Chemikalien, Feuchtigkeit) und die Integration neuer digitaler Revisionen in die physische Kopie vollständig in der Verantwortung des Betreibers.
* **Übertragung der Maschine:** Bei Verkauf, Vermietung oder Verlegung der Ausrüstung an ein anderes Werk müssen die Zugangsdaten oder aktuellen digitalen Dateien der Maschinendokumentation zusammen mit der Maschine an den neuen Benutzer übergeben werden.

---

## 1.1.5 Bestimmungsgemäße Verwendung, Haftungsbeschränkung und Erlöschen der Garantie

Der Hersteller hat das Design und die Fertigung der Maschine nach den anerkannten Regeln der Technik (Good Engineering Practices) und strengen Sicherheitsnormen ausgeführt. Die Garantie der Maschine und die gesetzliche Haftung des Herstellers gelten ausschließlich unter der Bedingung, dass das System innerhalb der Grenzen der "bestimmungsgemäßen Verwendung" (Intended Use) betrieben wird.

Bei allen direkten oder indirekten Personenschäden, Todesfällen, Sachschäden an der Anlage, Ausschluss/Ausschuss von Produkten, Umweltverschmutzung oder kommerziellen Gewinnausfällen, die durch die unten aufgeführten (jedoch nicht darauf beschränkten) Bedienungsfehler, unbefugten Eingriffe und Betriebsfehler entstehen, übernimmt der Hersteller keinerlei rechtliche, strafrechtliche oder finanzielle Haftung; in diesen Fällen erlischt die Garantie der Maschine **mit sofortiger Wirkung**:

* **Nutzung außerhalb der Kapazität und des Verwendungszwecks:** Überlastung der Maschine über die auf dem Typenschild und im Handbuch angegebenen Grenzen für maximale Last, Druck, Temperatur und Zykluskapazität hinaus. Waschen von anderen als den spezifischen Industrieteilen, für die die Maschine ausgelegt ist (z. B. explosive, brennbare oder hochreaktive Materialien).
* **Sicherheitsverletzungen:** Demontage, Überbrückung (Bypassing), softwareseitiges Deaktivieren oder Außerkraftsetzen lebenswichtiger Arbeitssicherheitskomponenten wie Not-Halt-Tastern, Türsicherheitsschaltern (Interlocks), Dichtungsschaltern, Sicherheitsrelais, Lichtschranken oder Druck-/Temperaturgrenzsensoren.
* **Unbefugte Modifikationen:** Jegliche Änderungen an der Maschinenkonstruktion, dem Rohrsystem, dem Schaltschrank oder den PLC/HMI-Softwarecodes ohne schriftliche und gestempelte Genehmigung des Herstellers.
* **Chemische und Material-Unverträglichkeit:** Verwendung von stark sauren, hochalkalischen (kaustischen) oder lösungsmittelbasierten Chemikalien, die vom Hersteller nicht getestet und freigegeben wurden und während des Waschvorgangs zu Korrosion an den Maschinenteilen oder Körben führen können. (Insbesondere die in der Maschine verwendeten Körbe und Trägerprodukte wurden verzinkt, und die Oberflächenbeständigkeit dieser Teile unterscheidet sich von lackierten Teilen; die Verwendung von Mitteln, die die Zinkschicht auflösen, führt zum Erlöschen der gesamten mechanischen Garantie).
* **Komponentenaustausch:** Mechanische Ermüdungen, Pumpenausfälle und Verluste der Waschleistung, die durch den eigenmächtigen Austausch von Standarddüsen, die Wasser als feinen Flachstrahl sprühen, oder optional angebotenen Fächerdüsen durch Düsen mit unterschiedlichen Durchfluss- (Liter/Minute) und Spritzwinkelcharakteristiken ohne Genehmigung der Konstruktionsabteilung des Herstellers entstehen. Verwendung von nicht originalen Ersatz- und Verbrauchsmaterialien.
* **Infrastruktur- und Versorgungsfehler:** Komponentenausfälle aufgrund unzureichender oder fehlerhafter anlagenseitiger Infrastrukturanschlüsse; nicht standardmäßige Erdungsleitung, Netzspannungsschwankungen außerhalb der tolerierbaren Grenzen (Phasenausfall/-verlust), übermäßige Feuchtigkeit/Ölpartikel in der zugeführten Druckluft oder unzureichender Durchfluss/Druck am Wassereinlass.
* **Wartungsversäumnisse:** Nichtbeachtung des im Handbuch angegebenen täglichen, wöchentlichen und monatlichen periodischen Wartungsplans, Durchführung von Schmier- und Reinigungsverfahren durch unqualifiziertes Personal und mit falschen Werkzeugen/Geräten.

---

## 1.1.6 Rechte an geistigem und gewerblichem Eigentum sowie Vertraulichkeit
Diese Betriebsanleitung und alle darin enthaltenen redaktionellen Texte, 3D/2D-technischen Zeichnungen, hydraulischen/pneumatischen/elektrischen Schaltpläne, Systemalgorithmen, Flussdiagramme, Tabellen und HMI-Software-Schnittstellendesigns sind durch nationale und internationale Urheberrechtsgesetze (und entsprechende Gesetzgebungen zum gewerblichen Rechtsschutz) streng geschützt. 

Das Eigentum an diesem Dokument steht ausschließlich dem Hersteller zu. Ohne die vorherige, handschriftlich unterzeichnete und offizielle schriftliche Genehmigung des Herstellers darf:
* dieses Handbuch weder ganz noch teilweise durch Fotokopieren, Scannen oder ähnliche Verfahren kopiert oder vervielfältigt werden;
* es nicht in digitale Formate umgewandelt und in öffentlichen Netzwerken oder Datenbanken außerhalb des Unternehmens-Intranets gespeichert werden;
* es weder teilweise noch vollständig ohne Genehmigung in andere Sprachen übersetzt werden;
* es insbesondere nicht mit konkurrierenden Maschinenherstellern, Lieferanten oder unbefugten Dritten geteilt werden;
* dürfen die im Handbuch enthaltenen Schaltpläne und Funktionsprinzipien nicht als Referenz- oder Quelldokument für Reverse-Engineering-Aktivitäten verwendet werden.

Im Falle einer Verletzung der oben genannten Rechte an geistigem Eigentum behält sich der Hersteller das Recht vor, im Voraus alle rechtlichen, zivil- und strafrechtlichen Schritte einzuleiten, um materiellen und immateriellen Schadensersatz zu fordern.
