# 11.7 Sensor faults

The machine has safety (RFID), process (level, temperature) and line-integration (outfeed product detection, leakage tray) sensors. For sensor faults, first match the HMI alarm code from the **Section 11.1.2** table.

---

## 11.7.1 Related sensors from the alarm table

| Alarm | Sensor / topic | Check |
|-------|---------------|---------|
| Error-422 | Cover / **RFID** safety sensor | Cover fully closed; RFID tag alignment; no bypass |
| Error-200/201 | Wash tank **water level** | Level probe; fill valve; leak |
| Error-202/203 | Rinse tank **water level** | Level probe; fill valve; leak |
| Error-452 | **Leakage tray** water detection | Tray water accumulation; tank/gasket leak; drain |
| Error-461 | **Outfeed conveyor** product detection | Sensor alignment; robot part take-off; HMI confirm |

### Error-422 — Cover / RFID

The RFID sensor confirms that the maintenance cover is safely closed. When the cover is open or the sensor does not see it, the machine does not start and stops if running.

1. Verify that the maintenance cover is fully closed.
2. Check RFID tag and sensor alignment (dirt, metal-part obstruction).
3. Visually check the sensor cable connection.
4. **Do not bypass RFID** — the safety function is disabled (see **Section 2.4**, **5.4.2**).

### Error-200/201 and Error-202/203 — Tank level

1. Check the tank visual level.
2. Verify the automatic fill valve and water/air pressure (**Section 11.5**).
3. Check the level probe connection.
4. If level remains low, investigate a leak (Error-452).

### Error-452 — Leakage tray

1. Check water accumulation in the leakage tray.
2. Look for leaks at tank-gasket joints and pipe connections.
3. Verify that the tray drain line is not blocked.
4. If the sensor gives a false alarm, clean the probe; if the fault continues, replace the sensor.

### Error-461 — Outfeed conveyor product detection

The machine runs on a 24/7 robot line; when a part is detected at outfeed the machine stops.

1. Check for a remaining part on the outfeed conveyor.
2. Verify that the robot program has taken the part.
3. After the part is taken, press the HMI **Product Received Confirm** button (**Section 3.4.6**).
4. If the sensor detects continuously, check alignment and dirt.

---

## 11.7.2 Sensor parameters

Critical sensors are monitored in real time in HMI **Manual Page** input observation (**Section 3.4.5**). Status **green** = signal OK, **red** = alarm/trigger. If there is an LED on the physical sensor, its meaning is given in the relevant manufacturer datasheet.

### Critical sensor list

| Function | Type / model | Location | Related alarm |
|-----------|-------------|-------|:------------:|
| Cover safety (RFID) | Omron **F3STGRNLPU21M1J8** | Maintenance cover (rear) | Error-422 |
| Tank water level | **VEGASWING 51** + stainless level guard | Wash / rinse tank (lower/upper) | Error-200–203 |
| Leakage tray | Water detection sensor | Leakage tray under the machine | Error-452 |
| Outfeed product detection | Omron proximity (**E2BM12KN08M1B1** / **E3FA-DP23**) | Outfeed conveyor | Error-461 |

Spare-part order codes are given in the **Section 13.3** BOM table. Cable colour code and connection details are on the **electrical schematic** (delivery package — see **Section 13.1.1**).

**RFID safety sensor:** When the cover is opened the machine stops; the periodic function test is defined in **Section 5.4.2** and **6.2.2**.

---
