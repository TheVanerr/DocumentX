# 2.1 Einführung in die Sicherheit und Betreiberpflichten

Dieses Kapitel definiert die sicheren Betriebsgrenzen der Maschine KNV 90 7500 2B, die gesetzlichen Pflichten des Betreibers und den für das Personal geltenden Sicherheitsrahmen. Die Maschine arbeitet mit kontinuierlichem Durchlauf über den Förderer, zwei beheizten Prozesstanks (Waschen + Spülen), Blowern und Trocknungsventilatoren, einem Abluftventilator und einem tastengesteuerten Schaltschrank. In jeder Phase sind die Anweisungen dieses Kapitels und seiner Unterkapitel zwingend einzuhalten.

Die die Maschine betreibende Organisation ist dafür verantwortlich, eine Risikobeurteilung durchzuführen, das Personal zu schulen, PSA bereitzustellen und die Sicherheitseinrichtungen in funktionsfähigem Zustand zu halten. Die zivil- und strafrechtliche Verantwortung für Verstöße gegen die Sicherheitsregeln dieser Anleitung liegt beim Betreiber.

---

## 2.1.1 Bestimmungsgemäße Verwendung

Die bestimmungsgemäße Verwendung der Maschine gilt ausschließlich innerhalb der in **Kapitel 3.2** definierten Grenzen. Die Maschine ist dafür ausgelegt, prozessbedingte Verschmutzungen, Öle und Rückstände von der Oberfläche industrieller Werkstücke durch die Prozesse Waschen, Spülen, Abblasen und Trocknen zu entfernen. Die Verarbeitung lebender Organismen, von Lebensmitteln und medizinischen Instrumenten ist strengstens verboten.

Die bestimmungsgemäße Verwendung setzt voraus, dass die folgenden Bedingungen gemeinsam erfüllt sind:

- Die Maschine wird ausschließlich in **geschlossenen, geschützten Innenräumen** bei einer Temperatur von **+10 °C bis +30 °C** und einer relativen Luftfeuchte von **30–50 %** betrieben (**Siehe Kapitel 3.2.5, 3.3.6**).
- Der Betrieb erfolgt mit allen aktiven Sicherheitsfunktionen (magnetische Schalter der Wartungsklappen, Not-Halt-Kreis, Tank-Füllstandverriegelung); keine davon wird überbrückt oder umgangen.
- Es werden keine nicht freigegebenen, säurebasierten oder edelstahlschädigenden Reinigungsmittel verwendet (**Siehe Kapitel 3.2.4**).
- Die Tanks werden vom Bediener manuell befüllt; Heizung und Pumpe werden nicht betrieben, wenn im Tank nicht ausreichend Wasser vorhanden ist (**Siehe Kapitel 7.2**).
- Die Fördergeschwindigkeit wird ausschließlich im Bereich 20–60 Hz genutzt; Beladen und Entnehmen der Werkstücke erfolgen manuell von außerhalb des Ein- und Auslaufbereichs des Förderers (**Siehe Kapitel 7.4**).

Eine nicht bestimmungsgemäße Verwendung erhöht das Risiko von Prozessfehlern, Sachschäden, Gewährleistungsverlust und Personenschäden (**Siehe Kapitel 1.1.5**).

---

## 2.1.2 Vorhersehbare Fehlanwendung

Die folgenden Handlungen gelten als vorhersehbare Fehlanwendung und sind **verboten**:

1. Verarbeitung lebender Organismen (Mensch, Tier, Pflanze), von Lebensmitteln, Lebensmittelverpackungen, lebensmittelberührenden Oberflächen oder medizinischen Instrumenten; Einbringen von Lebewesen in den Prozessbereich.
2. Manipulation der magnetischen Schalter der Wartungsklappen mit Magneten oder Fremdkörpern, Überbrücken, Ausbau; Umgehen des Not-Halt-Kreises oder der Sicherheitsrelais.
3. Mechanische, elektrische (Frequenzumrichterparameter, Schaltschrankverdrahtung) oder anschlusstechnische Änderungen ohne Freigabe des Herstellers.
4. Abheben der Wartungsklappen bei laufender Maschine; Hineingreifen mit Hand, Arm oder Werkzeug in den Förderer-Ein-/Auslauf oder in die Kammer.
5. Versuch, den Heizungsschalter bei leerem Tank einzuschalten; Prozessstart bei leuchtender roter Leuchte TANK 1/2 WASHING LEVEL.
6. Verwendung säurebasierter, lösungsmittelhaltiger oder edelstahlschädigender Reinigungsmittel; Einbringen brennbarer Flüssigkeiten in die Tanks.
7. Absenken des Potentiometers der Fördergeschwindigkeit unter 20 Hz (der Förderer kann unter Last stehen bleiben) oder Erzwingen von über 60 Hz.
8. Transport der Maschine durch Anschlagen mit Kran; Anwendung anderer Hebeverfahren als mit Gabelstapler (**Siehe Kapitel 4.1**).
9. Offenlassen der Schaltschranktür, Eingriff in den Schaltschrank ohne LOTO.

Bei Feststellung die Maschine sicher anhalten; den Eingriff erst fortsetzen, nachdem die Gefahr beseitigt und erforderlichenfalls LOTO angewendet wurde (**Siehe Kapitel 2.4**).

---

## 2.1.3 Übersicht der Sicherheitsausrüstung

Die Sicherheitsarchitektur der Maschine besteht aus den folgenden Komponenten. Alle Funktionen arbeiten mit hardwarebasierter Relaislogik; eine Softwareebene ist nicht vorhanden.

| Komponente | Zustand |
| :--- | :--- |
| Not-Halt-Taster | **7 Stück** — 1 am Bedienfeld + 6 im Feld (**Siehe Kapitel 2.5**) |
| Wartungsklappe | **7 Stück** manuell abzuhebende Klappen (keine mechanische Zuhaltung) |
| Klappen-Sicherheitsschalter | Magnetischer Türschalter Omron **F3STGRNLPU21M1J8** — an allen Klappen, in **Reihe** geschaltet |
| Sicherheitsrelais — Klappenkreis | Omron **G9SB2002AACDC241** (Serie G9SX) — nicht umgehbare Ausführung |
| Sicherheitsrelais — Not-Halt-Kreis | Omron **G9SB2002AACDC241** (Serie G9SX) |
| Lichtvorhang | Nicht vorhanden |
| Sicherheitskategorie (EN ISO 13849-1) | [EKSİK] — anhand Typenschild / CE-Unterlagen zu bestätigen |
| Reset / Bereitschaftsanzeige | Blauer **RESET**-Leuchttaster (BL901M) — Bedienfeld |
| Tank-Füllstandverriegelung | Bei unzureichendem Wasserstand im Tank lassen sich die Heizungen und die Pumpe des betreffenden Tanks nicht einschalten; die rote **WASHING-LEVEL**-Leuchte leuchtet |
| Phasenüberwachung | Phasenfolgerelais MKR-01 — bei Phasenfehler oder Phasenausfall kein Schaltschrankausgang |

Wird eine Wartungsklappe geöffnet, stoppt der Sicherheitskreis **alle Maschinenbewegungen und Prozesse**; das Betätigen eines Not-Halt führt zum gleichen Ergebnis. In beiden Fällen erlischt die RESET-Leuchte, und die Maschine kann nicht wieder gestartet werden, bis der Bediener den sicheren Zustand mit RESET bestätigt. Die Klappenschalter müssen mit Magnet/Klappe ausgerichtet sein; eine nicht ausgerichtete Klappe stoppt die Maschine, auch wenn sie geschlossen erscheint (**Siehe Kapitel 11.7**).

![Sicherheitsrelais Omron G9SB — Schaltschrank](../../assets/2.4/emniyet-rolesi-g9sb.jpg)
