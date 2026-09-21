# 7.4 Operating sequence

The automatic operating sequence defines parts passing through **wash → rinse → dry** processes on the conveyor. The machine runs **fully automatic**; the PLC coordinates pumps, fans and conveyor according to the selected HMI functions.

Infeed is **left**, outfeed is **right**. In this project, infeed and outfeed are by **robot**; robot procedures belong to the customer line.

---

## 7.4.1 Automatic cycle — general flow

| Step | Description |
|------|----------|
| 1 | Wash, rinse, drying 1, drying 2, exhaust are set **on/off** on the HMI Operating Page |
| 2 | After preparation is complete, **Machine Start** is given |
| 3 | The robot places the part on the conveyor (infeed — customer line) |
| 4 | The part passes through the **wash** bath (if wash is active) |
| 5 | The part passes through the **rinse** bath (if rinse is active) |
| 6 | The part passes through the **drying** zone (if drying 1/2 is active) |
| 7 | The part reaches outfeed; the robot takes the part (outfeed — customer line) |

Parts advance along the conveyor line on a continuous-flow principle; the line is designed to run **24/7** with robot integration.

![Conveyor part flow](../../assets/7.4/1.png)

---

## 7.4.2 Cycle time and capacity

| Parameter | Value | Meaning |
|-----------|-------|--------|
| Part transit time — nominal | **900 s** (15 min) | Time for one part to travel the wash → rinse → dry line |
| Minimum capacity reference | **730 pcs/h** | Line throughput with **more than one part at a time** on the conveyor (see **Chapter 3.3.2**) |
| Nominal capacity | Defined by the user company | |

**900 s** is not the robot cycle time. The robot infeed/outfeed cycle belongs to the customer line and must be short enough to be compatible with 730 pcs/h. 900 s is the dwell of a single part in the process tunnel.

Capacity and recipe details are explained in **Chapter 8**.

---

## 7.4.3 Product infeed and outfeed — robot integration

| Parameter | Value |
|-----------|-------|
| Infeed | The robot places the part on the conveyor from the **left** |
| Outfeed | The robot takes the part from the **right** |
| Infeed/outfeed procedure | **Belongs to the customer line** |
| Error-461 confirm | Line supervisor or maintenance — HMI **Product Received Confirm** |

The machine PLC monitors outfeed status with the **product remaining sensor** and related interlocks. When a part is detected on the outfeed conveyor and the robot does not take it, the machine may stop (Error-461); after the part is taken, the line supervisor or maintenance personnel press the **Product Received Confirm** button on the HMI Alarm Page to continue operation (see **Chapter 3.4.6**).

---

## 7.4.4 Process functions — in-sequence behaviour

| Function | Sequence role |
|-----------|-------------|
| Wash | Wash pump, heater, oil skimmer (according to set times) |
| Rinse | Rinse pump and heater |
| Drying 1 / 2 | Drying fan groups — independent on/off |
| Exhaust | Moisture extraction from the drying zone |

When a function is off, the related process step is skipped or remains passive; the combination appropriate to the line design is determined by operator/HMI configuration.

---

## 7.4.5 Machine behaviour in a fault

| Condition | Machine behaviour |
|-------|------------------|
| Fault affecting operation (RFID cover, emergency stop, critical level, etc.) | The machine **stops** |
| Error-235 — inlet air pressure low | If there is no instantaneous air demand such as a fill valve, the machine **may continue** for a short time; **removing** the air line during operation **is prohibited** |
| Alarm | HMI Alarm Page + tower lamp **red** |

Fault clearing is defined in **Chapter 11**. Do not give start while an alarm is present.

**CAUTION — Cover open:** When the RFID sensor is triggered the machine stops; do not give start until the cover is closed and reset is applied.

---

For starting see **Chapter 7.2**; for the fault table see **Chapter 11.1.2**.
