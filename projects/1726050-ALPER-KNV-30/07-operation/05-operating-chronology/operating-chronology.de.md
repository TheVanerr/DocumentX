# 7.5 Betriebschronologie

Im Rahmen dieses Projekts ist die Maschine für den durchgehenden Linienbetrieb mit **24/7-Roboter** ausgelegt. Ein traditionelles Schichtbedienermodell wird nicht angewendet; am Maschinenplatz ist kein durchgehender Schichtbediener vorhanden. Wenn HMI Start/Stopp und Error-461-Bestätigung erforderlich sind, greift der/die Linienverantwortliche oder das Wartungspersonal ein.

---

## 7.5.1 Täglicher Betriebszeitplan

| Parameter | Wert |
|-----------|-------|
| Täglicher Betrieb | **24/7** Dauerbetrieb mit Roboter |
| Schichtbasierter Betriebsplan | **Wird nicht angewendet** |

Die Maschine läuft synchron mit der übergeordneten Linie (Roboter + MES/SCADA — Definition beim Kunden). Geplante Stillstände (Wartung, Reinigung) erfolgen gemäß Werksproduktionsplan; vor dem Stillstand das Stoppverfahren **Kapitel 7.3** anwenden.

---

## 7.5.2 Schichtübergabe

| Parameter | Wert |
|-----------|-------|
| Schichtübergabepunkte | **Nicht vorhanden** |

Ein Bediener-/Schichtübergabeformular wird nicht verwendet. Die Zustandsüberwachung erfolgt durch das übergeordnete System (Kunden-MES/SCADA) oder durch eine periodische Wartungsrunde.

---

## 7.5.3 Schichtstart-Checkliste

| Parameter | Wert |
|-----------|-------|
| Schichtstart-Checkliste | **Nicht vorhanden** |

Da die Maschine durchgehend automatisch läuft, ist keine Schichtstart-Checkliste definiert. Stattdessen gelten folgende periodische Kontrollen:

| Intervall | Prüfung | Kapitel |
|---------|---------|-------|
| Täglich | Vorfilterreinigung | 10 |
| Wöchentlich | Tank-/Beutelfilterreinigung | 10 |
| Monatlich | Not-Halt-Funktionsprüfung | 6.2.3, 5.4.1 |
| Periodisch | Punkte des Wartungskalenders | 9 |

Bei geplantem Wartungs- oder Reinigungsstillstand muss die Maschine gestoppt werden; bei Arbeiten, die Energieisolation erfordern, **LOTO** anwenden (siehe **Kapitel 2.4**).

---

Für den Wartungskalender siehe **Kapitel 9**.
