# 7.4. Betriebsablauf

Die Maschine arbeitet **vollautomatisch**. Am HMI-Betriebsbildschirm gibt es **Ein/Aus-Tasten** für Waschen, Spülen, Trocknung 1, Trocknung 2 und Abluft.

Prozessablauf: **Waschen → Spülen → Trocknen**

| Prozess | Bezeichnung |
|---------|-------------|
| 1 | Waschen |
| 2 | Spülen |
| 3 | Trocknen |

---

## 7.4.1. Automatische Zyklusschritte

| Schritt | Beschreibung |
|---------|--------------|
| 1 | Am HMI-Betriebsbildschirm Waschen, Spülen, Trocknung 1, Trocknung 2 nach Bedarf **Ein/Aus** einstellen |
| 2 | Nach abgeschlossener Vorbereitung **Start** drücken; Förderer und gewählte Prozessfunktionen laufen automatisch |
| 3 | Teil passiert **Wasch**bad auf Förderer (wenn Waschen aktiv) |
| 4 | Teil passiert **Spül**bad (wenn Spülen aktiv) |
| 5 | Teil passiert **Trocknungs**zone (wenn Trocknung 1/2 aktiv); erreicht Ausgang |

---

## 7.4.2. Zykluszeit

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Nominale Zykluszeit (s) | **900** |

---

## 7.4.3. Produktzufuhr / -abfuhr

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Zufuhrszenario | An der Zufuhr **kein Bediener**; Teil wird vom **Roboter** auf Förderer gelegt. Zufuhrprozedur liegt beim **Kunden** |
| Abfuhr-Szenario | An der Abfuhr **kein Bediener**; Teil wird vom **Roboter** entnommen. Abfuhrprozedur liegt beim **Kunden** |

Teile durchlaufen Prozesse auf dem Förderer (Zufuhrbeladung).

<!-- FOTO: Förderer Produktfluss -->
![Förderer Produktfluss](../../assets/FOTO-7-4-0-konveyor.png)

---

## 7.4.4. Verhalten bei Störung

| Parameter | Wert / Beschreibung |
|-----------|---------------------|
| Verhalten bei Störung | Maschine stoppt bei **betriebsrelevanten** Störungen (z. B. Wartungsklappe offen, RFID-Schalter nicht erkannt). Bei **keinem unmittelbaren Luftbedarf** (z. B. Luft abgekoppelt während Betrieb) kann Maschine weiterlaufen |

Bei Alarm erscheint Alarmbildschirm am HMI; Signalleuchte **rot**.
