# 5.1 Machine assembly

Assembly takes an estimated **1 day** and is performed by a **1-person** team. The machine is transported **assembled** (**1300 kg**); modules are not dismantled during installation. Transport and lowering are carried out according to the **Chapter 4.1** forklift procedure; a crane is not used.

This section gives the main assembly step sequence. Positioning details are in **Chapter 5.2**; connection procedures in **Chapter 5.3**; safety and verification tests in **Chapters 5.4** and **5.5**.

---

## 5.1.1 Pre-assembly preparation

The following conditions must be met before assembly starts:

| Parameter | Requirement |
|-----------|------------|
| Assembly area min. size | 5 m × 3 m |
| Floor flatness tolerance | 0.5 mm/m |
| Floor strength | Hard and level surface |
| Required equipment | Forklift |
| Packaging type | Container |
| Ambient temperature | +10°C – +30°C |
| Environment | No moisture or corrosive substances |

Installation-area clearances and ceiling height are given in **Chapter 3.5.2**. Site utilities: **6 bar** compressed air (3/4"), **1 bar** water (1/2"), **380 V / 50 Hz / 3-phase** electrical supply (50 kW / 100 A — see **Chapter 3.3.3**, **3.3.5**).

**WARNING — Electricity:** The 380 V three-phase supply connection must be made only by authorised electrical personnel.

---

## 5.1.2 Assembly steps — summary

Assembly must be carried out in the following order:

| Step | Action | Detail section |
|:----:|-------|-------------|
| 1 | Machine brought to the installation area and lowered | Chapter 4.1.4 |
| 2 | Machine packaging removed | Chapter 4.1.3 |
| 3 | Machine set on the floor; feet levelled | Chapter 5.2.3 |
| 4 | Compressed-air connection made | Chapter 5.3.1 |
| 5 | Water connection made | Chapter 5.3.2 |
| 6 | Three-phase electrical supply connected | Chapter 5.3.3 |
| 7 | Machine power switched on at the panel | Chapter 5.3.4 |
| 8 | Phase rotation checked and corrected | Chapter 5.3.4 |
| 9 | Installation tests completed; machine ready for use | Chapters 5.4, 5.5 |

---

## 5.1.3 Step 3 — Levelling

The machine is set on an **adjustable-foot** system. The feet must be adjusted so that the machine is **level**. Alignment tolerance is **0.5 mm** (see **Chapter 5.2.3**).

**Expected result:** The machine is balanced on both axes with a spirit level; the feet contact the floor evenly.

![Adjustable feet](../../assets/5.1/2.png)

---

## 5.1.4 Steps 4–6 — Media and electrical connections

Connection procedures are given step by step in **Chapter 5.3**. Summary:

| Media | Pressure / voltage | Connection | Reference |
|-------|------------------|----------|------|
| Compressed air | 6 bar | 3/4" | Chapter 3.3.5 |
| Water | 1 bar | 1/2" | Chapter 3.3.5 |
| Electrical | 380 V, 50 Hz, 3-phase, 50 kW / 100 A | 3P+N+PE | Chapter 3.3.3 |

After connection, air and water indications on the HMI **Manual Page** must be **green** (see **Chapter 3.4.5**).

---

## 5.1.5 Steps 7–8 — Commissioning and phase check

1. After the three-phase supply is connected to the panel, switch machine power **on at the panel**.
2. Check phase rotation on the **phase-sequence relay**.
3. If phase rotation is reversed, set the main switch to **OFF**; authorised electrical personnel swap **two phases**; then switch on and re-verify the relay. Do not swap phases while power is on.

Motors are designed to run in one direction only; incorrect phase sequence causes pump direction error (see **Chapter 6.3** — Motor direction / phase check).

![Phase-sequence relay](../../assets/5.1/3.png)

---

## 5.1.6 Step 9 — Assembly completion

Before the machine is accepted as **ready for use** in step 9, the following tests must be completed:

| Test | Chapter |
|------|-------|
| Safety function tests | 5.4 |
| Installation verification and dry run (15 min) | 5.5 |
| Communication verification (Profinet, I/O) | 5.6 |

Review of **Chapter 6** OEM settings is recommended before operation.

![Assembly completed](../../assets/5.1/4.png)
