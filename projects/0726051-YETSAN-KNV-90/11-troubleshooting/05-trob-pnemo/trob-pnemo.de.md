# 11.5 Pneumatische Störungen

Druckluft treibt in der Maschine ausschließlich die **Membranpumpe der Ölabscheidereinheit** an; Pneumatikzylinder, automatische Füllventile oder pneumatische Klappen sind nicht vorhanden. Die Druckluft muss **6 bar** betragen; die Medienwerte sind in **Kapitel 3.3.5**, die Einstellung des Druckreglers in **Kapitel 6.5** angegeben. Ein niedriger Luftdruck beeinträchtigt die Funktionen Waschen, Spülen, Trocknen und Förderer nicht; lediglich die Ölabscheiderpumpe läuft nicht.

---

## 11.5.1 Druck niedrig / keine Luft

| Parameter | Wert |
| :--- | :--- |
| Alarm Druck niedrig | Kein HMI — Manometerablesung; Ölabscheiderpumpe läuft nicht oder unregelmäßig |
| Mindestwert | 6 bar |

**Diagnoseverfahren bei niedrigem Druck**

1. Das Manometer des Druckreglers **AIR INLET** am Maschinengehäuse ablesen.
2. Prüfen, dass das Anlagen-Luftventil geöffnet ist und der Anlagenkompressor läuft.
3. Druckregler auf **6 bar** einstellen (**Kapitel 6.5.1**).
4. Luftschläuche und Verschraubungen auf Leckagen prüfen (Geräusch / Seifenwasser); bei Leckage das Anlagen-Luftventil schließen und die Verschraubung nachziehen oder den Schlauch ersetzen.
5. Hat sich im Filter des Druckreglers Wasser oder Öl angesammelt, diesen entleeren; Druckluftqualität der Anlage (trocken, ölfrei) prüfen.
6. Sobald sich der Druck bei 6 bar stabilisiert hat, den Ölabscheiderschalter auf ON stellen und prüfen, dass die Pumpe läuft.

---

## 11.5.2 Membranpumpe und Magnetventil des Ölabscheiders

| Symptom | Mögliche Ursache | Prüfung | Abhilfe |
| :--- | :--- | :--- | :--- |
| Schalter ON, Pumpe läuft nicht; Betriebsleuchte an | Keine Luft / niedrig; Magnetventil öffnet nicht | Manometer; Klickgeräusch des Magnetventils; Spulenversorgung des Ventils | 11.5.1; unter LOTO Spulenspannung und Ventil prüfen — bei defekter Spule ersetzen |
| Schalter ON, Betriebsleuchte aus | Kein Ausgang vom Schaltschrank (Relais/Schütz) | Logik gemäß **Kapitel 11.1.2 — Störung 1**; Sicherheitskreis (RESET) | Elektrofachkraft |
| Pumpe läuft, fördert keine Flüssigkeit | Saugschlauch verstopft / zieht Luft; Filter der Einheit verstopft; Membran beschädigt | Schlauchanschlüsse; rotes Filtergehäuse | Schläuche reinigen/nachziehen; Filterelement reinigen oder ersetzen; Membran durch Service |
| Pumpe läuft dauernd, lässt sich nicht stoppen | Magnetventil klemmt; Schalter nicht auf OFF | Schalterstellung; Ventil | Anlagen-Luftventil schließen; LOTO; Ventil reinigen/ersetzen |
| Dauerleckage an der Luftleitung | Verschraubung lose; Schlauch gerissen; Dichtung des Druckreglers | Seifenwassertest | Nachziehen / ersetzen |

| Parameter | Wert |
| :--- | :--- |
| Zylinder langsam / hakt | **Nicht zutreffend** — kein Pneumatikzylinder |
| Störung der Ventilspule | Magnetventil des Ölabscheiders — siehe obige Tabelle |

**Erwartetes Ergebnis:** Manometer 6 bar; bei Ölabscheiderschalter ON läuft die Membranpumpe regelmäßig und fördert das ölhaltige Wasser; keine Leckage.

![Ölabscheidereinheit — Membranpumpe, Filter und Magnetventil](../../assets/3.1/yag-ayirici-diyafram-pompa.jpg)

---

Für die pneumatischen Einstellungen siehe **Kapitel 6.5**.
