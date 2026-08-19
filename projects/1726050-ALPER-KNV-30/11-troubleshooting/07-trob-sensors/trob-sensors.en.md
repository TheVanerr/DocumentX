# 11.7 Sensor faults

---

## 11.7.1 Related sensors from alarm table

| Alarm | Sensor / topic | Check |
|-------|----------------|-------|
| Error-422 | Cover / RFID safety sensor | Cover closed, RFID detects; no bypass |
| Error-200/201 | Wash tank water level | Level sensor, fill valve |
| Error-202/203 | Rinse tank water level | Level sensor, fill valve |
| Error-452 | Leak tray | Water detection sensor, leak check |
| Error-461 | Outfeed conveyor product detection | Sensor, robot outfeed confirm on HMI |

---

## 11.7.2 Sensor parameters

| Parameter | Value / Description |
|-----------|---------------------|
| Critical sensor list (type / location) | [MISSING] |
| Sensor LED / status indicator | [MISSING] |

RFID safety sensor: machine stops when cover opened (see **5.4**, **7.4.4**).
