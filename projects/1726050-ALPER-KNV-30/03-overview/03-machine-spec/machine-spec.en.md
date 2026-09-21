# 3.3 Technical specifications

This chapter collects dimensions, weight, capacity, electrical, motor, media-connection and environmental conditions of the **KNV 30 3000 2B** (serial no. **1726050**) machine. The same numerical values are not repeated in the installation (Chapter 5), settings (Chapter 6) and operation (Chapter 7) chapters; those chapters cross-refer here.

---

## 3.3.1 Physical dimensions and weight

| Parameter | Unit | Value |
|-----------|:-----:|------:|
| External length (L) | mm | 3770 |
| External width (W) | mm | 1730 |
| External height (H) — normal | mm | 2122 |
| Empty weight — dry | kg | 1300 |
| Operating weight — full | kg | 1500 |
| Chassis type | — | Adjustable feet |

The machine is installed so that levelling and level adjustment can be performed on the adjustable-foot system. The centre of gravity is at the middle of the conveyor line; for transport and forklift planning see **Chapter 3.5.4**. Minimum installation-area size shall be **5 m × 3 m** (see **Chapter 3.5.2**).

![External dimensions](../../assets/3.3/1.png)
![External dimensions](../../assets/3.3/2.png)
![External dimensions](../../assets/3.3/3.png)
![External dimensions](../../assets/3.3/4.png)

---

## 3.3.2 Capacity and process parameters

| Parameter | Value |
|-----------|-------|
| Number of process steps | 3 |
| Process name 1 | Wash |
| Process name 2 | Rinse |
| Process name 3 | Drying |
| Cycle time — nominal | 900 s (15 min) |
| Nominal capacity | Determined by user company |
| Maximum capacity | Determined by user company |
| Minimum capacity | 730 pieces/hour |
| Product format / packaging type | Determined by user company |
| Product size min | Determined by user company |
| Product size max | Determined by user company |
| Product weight min | Determined by user company |
| Product weight max | Determined by user company |

**900 s** is the time for one part to travel the wash → rinse → drying line. **730 pieces/hour** is the line throughput reference while more than one part is on the conveyor at the same time; robot cycle time is not 900 s. Nominal capacity and product size/weight limits are determined by the user company according to process conditions; part geometry must be compatible with conveyor transport capacity and nozzle coverage area. Recipe and capacity management are explained in **Chapter 8**.

![Process zones](../../assets/3.3/5.png)

---

## 3.3.3 Electrical specifications

| Parameter | Value |
|-----------|-------|
| Supply voltage | 380 V |
| Supply frequency | 50 Hz |
| Number of phases | 3 |
| Total installed power | 50 kW |
| Total installed power — including heating | 50 kW |
| Maximum current draw | 100 A |
| Power factor (cos φ) | 0.9 |
| Short-circuit current / ICC requirement | 10 kA |
| Supply configuration | 3P+N+PE |
| Main switch — In | 100 A |
| Main-switch brand | Schneider |
| Total fuse / circuit breaker | 100 A |
| UPS / generator requirement | No |

Electrical supply is provided during installation via the cabinet from a 380 V, 50 Hz, three-phase line. Phase direction shall be checked via the phase-sequence relay; on reverse-phase detection the main switch is set to **OFF**, authorised electrical personnel swap two phases (see **Chapter 5.3.4**). The energy-isolation and LOTO point is the main switch (see **Chapter 2.4**).

![Electrical supply](../../assets/3.3/6.png)

---

## 3.3.4 Motor and drive list

| Motor | Power | Speed | Brand | Model |
|-------|-----|-------|-------|-------|
| Conveyor gearbox motor | 1.5 kW | 2000 rpm | Siemens | SIMOTICS S-1FL6 |
| Wash-pump motor | 3 kW | 2900 rpm | Lowara | ESHE 40-160/30 |
| Rinse-pump motor | 1.85 kW | 2900 rpm | GOULDS | GCEA 370/3 |
| Oil-skimmer gearbox motor | 0.04 kW | 1340 rpm | FINEX | E1610-40-150-17B-C |
| Exhaust-fan motor | 0.37 kW | 2800 rpm | ENA | ENA 2 |
| 1st drying-fan motor | 4 kW | 2940 rpm | Ölçükontrol | OK 710K37 |
| 2nd drying-fan motor | 4 kW | 2940 rpm | Ölçükontrol | OK 710K37 |
| 3rd drying-fan motor | 4 kW | 2940 rpm | Ölçükontrol | OK 710K37 |
| 4th drying-fan motor | 4 kW | 2940 rpm | Ölçükontrol | OK 710K37 |

Total drying-fan power is **16 kW**. Motor protection and thermal-overload states can be monitored from the HMI manual page (see **Chapter 3.4.5**).

---

## 3.3.5 Compressed air and water

| Parameter | Value |
|-----------|-------|
| Compressed-air inlet | 6 bar |
| Water inlet pressure | 1 bar |
| Water temperature min / max | +10°C – +70°C |
| Water quality | Mains water or treated water |
| Compressed-air and water connection data | See layout drawing (**1726050-ALPER-KNV 30 LAYOUT.pdf**) |

During installation, compressed-air **3/4"** and water **1/2"** connections are applied; connection locations and diameter details are given on the layout drawing (see **Chapter 3.5**, **Chapter 13.2**). Pneumatic-regulator pressure setting is **6 bar**. After water and air connections are established, the **water status** and **air status** indicators on the HMI manual page are expected to light green (see **Chapter 5.5** — Pneumatic fill test).

![Media connections](../../assets/3.3/7.png)
![Media connections](../../assets/3.3/8.png)

---

## 3.3.6 Environmental conditions

| Parameter | Min | Max |
|-----------|-----|-----|
| Operating temperature | +10°C | +30°C |
| Storage temperature | +10°C | +30°C |
| Relative humidity | 30% | 50% |

| Parameter | Value |
|-----------|-------|
| Protection rating (IP) | IP55 |
| Noise level | 65 dB(A) |

The machine is designed for use only in an **indoor** environment. Minimum surrounding clearances and ceiling height of the installation area are given in **Chapter 3.5.2**; intended-use limits are summarised in **Chapter 3.2**.

---

For control elements see **Chapter 3.4**; for the layout see **Chapter 3.5**.
