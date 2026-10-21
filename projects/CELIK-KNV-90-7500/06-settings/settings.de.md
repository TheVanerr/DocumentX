# 6. EINSTELLUNGEN

Dieses Kapitel definiert die **Einstellparameter**, die Bediener und Wartungspersonal an der Maschine **KNV 90 7500 2B** nach der Inbetriebnahme (**Siehe Kapitel 5**) vornehmen können. Da die Maschine kein HMI besitzt und der Bediener keinen Zugriff auf das PLC-Programm hat, sind die Einstellpunkte begrenzt und sämtlich physisch: die Sollwerte der vier **Thermostate GEMO DTH2**, das **Potentiometer für die Fördergeschwindigkeit** und der **Druckluft-Druckregler**. Diese drei Einstellungen bestimmen die Prozesstemperatur, die Verweilzeit des Werkstücks in der Kammer und den Betrieb der Ölabscheiderpumpe.

**Zielgruppe:** Bediener (Thermostat-Sollwerte, Fördergeschwindigkeit), Wartungspersonal (Druckregler, periodische Sicherheitsprüfung), Herstellerservice (Frequenzumrichter-Parameter, Sicherheitsrelaiskreis). Die Parameter des Förderer-Frequenzumrichters und der Sicherheitsrelaiskreis dürfen nur vom **autorisierten Herstellerservice** geändert werden.

| Unterkapitel | Thema |
| :--- | :--- |
| **6.1** | Mechanische Einstellungen — kein Bediener-Einstellpunkt; Sichtprüfung der Drahtgurtspannung |
| **6.2** | Sicherheitseinstellungen — Überbrückungsverbot, Not-Halt-Prüfintervall |
| **6.3** | Elektrische Einstellungen — Motordrehrichtung, Thermostat-Sollwerte, Fördergeschwindigkeit |
| **6.4** | Hydraulikeinstellungen — kein System |
| **6.5** | Pneumatikeinstellungen — Druckregler 6 bar |
| **6.6** | Vakuumeinstellungen — kein System |
| **6.7** | Sonstige Einstellungen — keine weiteren Punkte |

## Allgemeine Regeln

| Thema | Regel | Referenz |
| :--- | :--- | :--- |
| Thermostat-Sollwerte | GEMO DTH2 — Bedienfeld; kein werkseitiger Sollwert, der Betreiber legt ihn fest; Badwasser darf +70 °C nicht überschreiten | Kapitel 6.3.3, 3.3.5 |
| Fördergeschwindigkeit | Potentiometer — ausschließlich im Bereich **20–60 Hz** | Kapitel 6.3.4, 3.4.7 |
| Druckluft | Druckregler **6 bar** | Kapitel 6.5, 3.3.5 |
| Frequenzumrichter-Parameter | Werkseinstellung — der Bediener ändert sie nicht | Kapitel 6.3.1 |
| Not-Halt-Prüfung | **Einmal monatlich** | Kapitel 6.2.3 → 5.4.1 |
| Wartungsklappen | Überbrückung verboten; LOTO zwingend | Kapitel 2.4 |

Vor einer Änderung des Thermostat-Sollwerts den zugehörigen Heizungsschalter in Stellung OFF bringen (**Siehe Kapitel 6.3.3**); die Fördergeschwindigkeit wird dagegen bei laufendem Förderer eingestellt (**Siehe Kapitel 6.3.4**). Die festgelegten Sollwerte und die Fördergeschwindigkeit in das Wartungsformular eintragen; im Problemfall wird anhand dieser Aufzeichnung zu den zuletzt freigegebenen Einstellungen zurückgekehrt. Tägliches Starten/Stoppen und die Funktionsauswahl werden in **Kapitel 7** beschrieben; dieses Kapitel konzentriert sich auf dauerhafte/installationsbezogene Einstellungen.

**WARNUNG — Betrieb außerhalb der Parameter:** Das Verlassen der definierten Bereiche (Förderer unter 20 Hz, Wassertemperatur über +70 °C, Druckluft außerhalb 6 bar) führt zu unzureichender Reinigung, Stillstand des Förderers unter Last sowie Schäden an Heizstäben und Dichtungen; diese Schäden sind von der Garantie ausgeschlossen.

---

Betriebsverfahren: **Siehe Kapitel 7**; periodische Wartung: **Siehe Kapitel 9**.
