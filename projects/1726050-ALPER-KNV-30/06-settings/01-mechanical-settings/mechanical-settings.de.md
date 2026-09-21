# 6.1 Mechanische Einstellungen

Die Maschine KNV 30 3000 2B wird werksseitig so in Betrieb genommen, dass keine mechanische Einstellung erforderlich ist. Förderband, Pumpenmontagen und Prozessdüsen sind innerhalb der OEM-Toleranzen fixiert; eine periodische mechanische Feineinstellung durch Bediener oder Wartungspersonal ist nicht vorgesehen.

Dieser Abschnitt erläutert die Definition der Referenzposition und warum der Umfang der mechanischen Einstellungen leer ist. Mechanische Wartung (Schmierung, Filter) ist in **Kapitel 9** definiert.

---

## 6.1.1 Mechanische Einstellpunkte

| Parameter | Wert / Beschreibung |
|-----------|------------------|
| Liste der mechanischen Einstellpunkte | Es ist keine Einstellung erforderlich |

An der Maschine gibt es keinen Bediener-Einstellpunkt für Düsenabstand, Endschalter, Kettenspannung oder Formatwechsel. Bei Störungen, die einen mechanischen Eingriff erfordern, den Herstellerservice hinzuziehen (siehe **Kapitel 1.3**).

---

## 6.1.2 Referenz- / Home-Position

| Parameter | Wert / Beschreibung |
|-----------|------------------|
| Einstellung Referenz- / Home-Position | Als Referenz ist der **Förderbandanfang** zu verwenden |

Der Förderbandanfang gilt als Maschinenreferenzpunkt. Teilepositionierung, Sensorsynchronisation und Linienintegration werden nach dieser Referenz geplant. Eine Änderung der Referenz kann das SPS-Programm beeinflussen; sie darf nicht durch den Bediener erfolgen.

![Referenzposition — Förderbandanfang](../../assets/6.1/1.png)

---

## 6.1.3 Ketten- / Riemen- und Endschaltereinstellungen

| Parameter | Wert / Beschreibung |
|-----------|------------------|
| Ketten- / Riemenspannungswert | Es ist keine Einstellung erforderlich |
| Distanz- / Endschaltereinstellungen | Es ist keine Einstellung erforderlich |

Die Förderband-Ketten-/Riemenspannung ist bei der OEM-Montage eingestellt. Die Spannungskontrolle erfolgt im Rahmen der periodischen Wartung; verschleißbedingte Einstellung wird in **Kapitel 9** behandelt.

---

## 6.1.4 Düse / Füllkopf

| Parameter | Wert / Beschreibung |
|-----------|------------------|
| Einstellbereich Düse / Füllkopf (mm) | Es ist keine Einstellung erforderlich |

Wasch- und Spüldüsen sind fest montiert; es gibt keine Bedieneinstellung nach Teileformat.

---

## 6.1.5 Formatwechsel

| Parameter | Wert / Beschreibung |
|-----------|------------------|
| Zusammenfassung Formatwechselverfahren | Es gibt kein Formatwechselverfahren |

Unterschiedliche Teilegeometrien werden über Prozessparameter (HMI-Temperatur, Funktion ein/aus) geführt (siehe **Kapitel 8.2**); ein mechanischer Formatwechsel wird nicht angewendet.

---

## 6.1.6 Checkliste mechanische Einstellungen

| # | Prüfung | Status |
|---|---------|:-----:|
| 1 | Referenzpunkt (Förderbandanfang) bestätigt | ☐ |
| 2 | Keine mechanische OEM-Einstellung erforderlich — dokumentiert | ☐ |

**Datum:** _______________ **Kontrolliert durch:** _______________
