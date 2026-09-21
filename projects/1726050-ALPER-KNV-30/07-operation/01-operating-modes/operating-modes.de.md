# 7.1 Betriebsarten

Die KNV 30 3000 2B läuft **vollautomatisch**; es gibt keinen separaten Hand-, Schritt- oder Wartungsmodus. Der/die Linienverantwortliche wählt Prozessfunktionen und gibt Vorbereitungs- und Start-/Stopp-Befehle über die HMI-**Betriebsseite**. Die Funktionsauswahl erfolgt nach Toggle-Logik (ein/aus); nach Maschinenstart werden die gewählten Funktionen gemäß SPS-Programm automatisch koordiniert.

Für Wartungseingriffe gibt es keinen speziellen HMI-Modus; das Öffnen von Abdeckungen sowie mechanische/elektrische Arbeiten erfolgen mit **LOTO** (siehe **Kapitel 2.4**). Die HMI-**Handseite** ist passwortfrei; Einzelfunktionstests werden nur durch autorisiertes Wartungspersonal unter Kontrolle des Arbeitgebers verwendet (siehe **Kapitel 3.4.5**).

---

## 7.1.1 Handbetrieb

| Parameter | Wert |
|-----------|-------|
| Handbetrieb | **Nicht vorhanden** |

Es gibt keinen durchgehenden Handfahrmodus. Die Optionen Waschen, Spülen, Trocknen 1, Trocknen 2 und Abluft auf der HMI-Betriebsseite dienen der Prozesskonfiguration; nach Maschinenstart laufen die gewählten Funktionen in der automatischen Sequenz.

---

## 7.1.2 Automatikbetrieb

Die Maschine läuft standardmäßig automatisch. Ablauf für den/die Linienverantwortliche(n):

1. Die gewünschten Prozessfunktionen auf der HMI-**Betriebsseite** auf **aktiv** (grün) stellen.
2. Mit **Vorbereitung Start** Tankfüllung und Beheizung abschließen (siehe **Kapitel 7.2**).
3. Bei **gelber** Signalleuchte (einsatzbereit) **Machine Start** geben.
4. Förderband und gewählte Pumpen/Lüfter laufen automatisch an; Teile durchlaufen die Prozesszonen entlang der Linie.

Robotereinlauf/-auslauf wird von der übergeordneten Linie synchronisiert; die Maschinen-SPS überwacht die Teilepräsenz mit Sensoren.

![HMI-Prozessoptionen](../../assets/7.1/1.png)

---

## 7.1.3 Wartungs- / Einrichtbetrieb

| Parameter | Wert |
|-----------|-------|
| Wartungs- / Einrichtbetrieb | **Nicht vorhanden** |

Für Wartung muss die Maschine gestoppt, der Hauptschalter ausgeschaltet und das **LOTO-Verfahren** angewendet werden (siehe **Kapitel 2.4**). Abdeckungen dürfen erst nach Energieisolation geöffnet werden. Der RFID-Sicherheitssensor darf nicht überbrückt werden.

---

## 7.1.4 Schritt- / Einzelschrittbetrieb

| Parameter | Wert |
|-----------|-------|
| Schritt- / Einzelschrittbetrieb | **Nicht vorhanden** |

---

## 7.1.5 Bedingungen für Betriebsartwechsel

| Parameter | Wert |
|-----------|-------|
| Bedingungen für Betriebsartwechsel | **Nicht vorhanden** |

Es gibt eine einzige Betriebsart (Automatik); ein Betriebsartwechselverfahren wird nicht angewendet.

---

## 7.1.6 Übersicht HMI-Prozessoptionen

| Option | Funktion | Hinweis für den Bediener |
|---------|-------|---------------|
| Waschen | Ein / Aus | Waschbadpumpe und Heizkreis |
| Spülen | Ein / Aus | Spülbadpumpe und Heizkreis |
| Trocknen 1 | Ein / Aus | Trocknungslüftergruppe 1 |
| Trocknen 2 | Ein / Aus | Trocknungslüftergruppe 2 |
| Abluft | Ein / Aus | Feuchteabfuhr aus der Trocknungszone |

Funktionen können je nach Prozessbedarf unabhängig ein- und ausgeschaltet werden; ob mindestens ein Prozessschritt für die Linienqualität aktiv ist, hängt vom Prozessdesign des Anwenders ab. Temperatur-Sollwerte werden über die in **Kapitel 6.3.3** definierte HMI-Einstellseite vorgenommen.

---

Für das Startverfahren siehe **Kapitel 7.2**.
