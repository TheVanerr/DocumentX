# 2. SICHERHEIT

Die industrielle Teilewaschmaschine mit Förderer **KNV 90 7500 2B** (Seriennummer **[EKSİK]**) birgt Risiken durch bis +70 °C erhitzte Prozessflüssigkeit, elektrische Heizstäbe mit 8 kW und 12 kW, einen laufenden Kettenförderer, rotierende Pumpen- und Ventilatormechanismen, Druckluft mit 6 bar, Elektrik mit 380 V / 110 kW sowie Chemikalienexposition. Dieses Kapitel definiert die Sicherheitsregeln, die bei Installation, Inbetriebnahme, Betrieb, Wartung und Service der Maschine einzuhalten sind. Die Anweisungen wurden nach den Grundsätzen von EN ISO 12100 und EN ISO 20607 erstellt.

Die Verletzung der Sicherheitsanforderungen birgt die Gefahr von Personenschäden, Sachschäden, Umweltauswirkungen und des Erlöschens der Gewährleistung. Die die Maschine betreibende Organisation (Betreiber) ist für den Personaleinsatz, die Schulung und die Verfügbarkeit der Anleitung verantwortlich (**Siehe Kapitel 1.1.3**).

Die Maschine wird über eine PLC gesteuert; die Sicherheitsfunktionen sind jedoch unabhängig vom PLC-Programm und vollständig **hardwarebasiert**: 7 Not-Halt-Taster, in Reihe geschaltete magnetische Sicherheitsschalter an 7 Wartungsklappen und zwei separate Sicherheitsrelais Omron G9SB-2002-A (eines für den Not-Halt-Kreis, eines für den Wartungsklappenkreis — **Siehe Kapitel 2.1.3**). Die Rückkehr in den sicheren Zustand wird ausschließlich mit dem **RESET**-Taster am Bedienfeld bestätigt. Ein Fehler in der PLC oder eine Programmänderung kann diese Funktionen nicht außer Kraft setzen; diese Architektur lässt keine softwareseitige Umgehung zu; physische Eingriffe wie das Überbrücken von Schaltern oder die Manipulation mit Magneten setzen die Sicherheitsfunktion jedoch vollständig außer Kraft und sind **strengstens verboten**.

| Unterkapitel | Thema |
| :--- | :--- |
| **2.1** | Einführung in die Sicherheit, Verantwortlichkeiten, Rahmen der bestimmungsgemäßen Verwendung, Übersicht der Sicherheitsausrüstung |
| **2.2** | Restrisiken, Maschinenetiketten |
| **2.3** | Betriebliche Sicherheitsregeln |
| **2.4** | Kontrolle gefährlicher Energien — LOTO (Verriegeln und Kennzeichnen) |
| **2.5** | Not-Halt (E-Stop) und Reset |
| **2.6** | Matrix der persönlichen Schutzausrüstung (PSA) |

Die Grenzen der bestimmungsgemäßen Verwendung werden in **Kapitel 3.2** definiert. Die technischen Anschlusswerte stehen in **Kapitel 3.3**, die Bedienelemente in **Kapitel 3.4**; sie werden in diesem Kapitel nicht wiederholt.
