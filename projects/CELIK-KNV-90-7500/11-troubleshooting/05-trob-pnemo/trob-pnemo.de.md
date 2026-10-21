# 11.5 Pneumatische Störungen

Druckluft treibt in der Maschine ausschließlich die **Membranpumpe der Ölabscheidereinheit** an; Pneumatikzylinder, automatische Füllventile oder pneumatische Klappen sind nicht vorhanden. Der Druckluft-Versorgungsdruck beträgt **6 bar** (**Siehe Kapitel 3.3.5**); die Einstellung des Druckreglers ist in **Kapitel 6.5** angegeben. Ein niedriger Luftdruck beeinträchtigt die Funktionen Waschen, Spülen, Trocknen und Förderer nicht; lediglich die Ölabscheiderpumpe läuft nicht.

---

## 11.5.1 Druck niedrig / keine Luft

| Parameter | Wert |
| :--- | :--- |
| Alarm Druck niedrig | Kein HMI — Manometerablesung; Ölabscheiderpumpe läuft nicht oder unregelmäßig |
| Versorgungsdruck | 6 bar |

**Diagnoseverfahren bei niedrigem Druck**

1. Das Manometer des Druckreglers **AIR INLET** am Maschinengehäuse ablesen.
2. Prüfen, dass das Anlagen-Luftventil geöffnet ist und der Anlagenkompressor läuft.
3. Druckregler auf **6 bar** einstellen (**Siehe Kapitel 6.5.1**).
4. Luftschläuche und Verschraubungen auf Leckagen prüfen (Geräusch / Seifenwasser).
5. Bei Leckage die Druckluftleitung mit LOTO trennen und am Reglermanometer 0 bar feststellen (**Siehe Kapitel 2.4**); die Verschraubung nachziehen oder den Schlauch ersetzen.
6. Hat sich im Filter des Druckreglers Wasser oder Öl angesammelt, diesen entleeren; Druckluftqualität der Anlage (trocken, ölfrei) prüfen.
7. Die Luftversorgung wieder öffnen; sobald sich der Druck bei 6 bar stabilisiert hat, den Ölabscheiderschalter auf ON stellen und prüfen, dass die Pumpe läuft.

---

## 11.5.2 Membranpumpe und Magnetventil des Ölabscheiders

| Symptom | Mögliche Ursache | Prüfung | Abhilfe |
| :--- | :--- | :--- | :--- |
| Schalter ON, Pumpe läuft nicht; Betriebsleuchte an | Keine Luft / niedrig; Magnetventil öffnet nicht | Manometer; Klickgeräusch des Magnetventils; Spulenversorgung des Ventils | **Siehe Kapitel 11.5.1**; Spulenspannung durch Elektrofachkraft messen lassen; defekte Spule unter LOTO ersetzen |
| Schalter ON, Betriebsleuchte aus | Kein Ausgang vom Schaltschrank (PLC-Ausgang / Schütz); Sicherheitskreis offen | RESET-Leuchte; Schaltschrankausgang | Ist die RESET-Leuchte aus, **Siehe Kapitel 11.1.2** — Störung 4; andernfalls Elektrofachkraft |
| Pumpe läuft, fördert keine Flüssigkeit | Saugschlauch verstopft / zieht Luft; Filter der Einheit verstopft; Membran beschädigt | Schlauchanschlüsse; rotes Filtergehäuse | Schläuche reinigen/nachziehen; Filterelement reinigen oder ersetzen; Membran durch Service |
| Pumpe läuft dauernd, lässt sich nicht stoppen | Magnetventil klemmt; Schalter nicht auf OFF | Schalterstellung; Ventil | Anlagen-Luftventil schließen; LOTO (**Siehe Kapitel 2.4**); Ventil reinigen/ersetzen |
| Dauerleckage an der Luftleitung | Verschraubung lose; Schlauch gerissen; Dichtung des Druckreglers | Seifenwassertest | Nachziehen / ersetzen |

| Parameter | Wert |
| :--- | :--- |
| Zylinder langsam / hakt | **Nicht zutreffend** — kein Pneumatikzylinder |
| Störung der Ventilspule | Magnetventil des Ölabscheiders — siehe obige Tabelle |

**Erwartetes Ergebnis:** Manometer 6 bar; bei Ölabscheiderschalter ON läuft die Membranpumpe regelmäßig und fördert das ölhaltige Wasser; keine Leckage.

![Ölabscheidereinheit — Membranpumpe, Filter und Magnetventil](../../assets/3.1/yag-ayirici-diyafram-pompa.jpg)

---

Pneumatische Einstellungen: **Siehe Kapitel 6.5**.
