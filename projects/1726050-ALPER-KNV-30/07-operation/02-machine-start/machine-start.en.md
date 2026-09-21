# 7.2 Machine start

The **Preparation Start** procedure must be completed before Machine Start is given. Preparation brings tank filling, heating and process circuits to a ready-to-run state. The start command is given with the **Machine Start** button on the HMI **Operating Page**.

**WARNING — Crushing:** Before start, verify that no part or object remains on the conveyor line; otherwise a crushing hazard arises.

---

## 7.2.1 Commissioning prerequisites

The following operations are executed automatically with the preparation button:

- If there is **no** water in the tank → automatic fill up to the upper level sensor, then heating to the recipe temperature.
- If there **is** water in the tank → heating directly.

No other preparation step is required. Prerequisites:

| # | Condition |
|---|-------|
| 1 | Main switch **ON** — power on the machine |
| 2 | Compressed air **6 bar** connected (see **Chapter 3.3.5**) |
| 3 | Water inlet and automatic-fill valve **open** |
| 4 | Air/water status **green** on the HMI manual page (see **Chapter 5.5.3**) |
| 5 | No active alarm (HMI Alarm Page) |

**Fill problem:** If there is no water in the tank and filling does not occur during preparation, the **automatic-fill water inlet valve is closed** — open the valve. Verify the **6 bar** air connection.

---

## 7.2.2 Power-on and preparation sequence

1. Verify that the main switch is **ON**.
2. Go to the HMI **Operating Page**.
3. Set process functions (wash, rinse, drying 1/2, exhaust) to **active** as required (see **Chapter 7.1.6**).
4. Press the **Preparation Start** button.
5. Wait until tank filling and heating are complete; monitor setpoint/actual temperatures on the operating page.
6. Verify that the tower lamp is **yellow** (ready for use).

**Heating time:** Variable — depends on the amount and temperature of water already in the tank; a fixed time cannot be given.

![HMI preparation button](../../assets/7.2/1.png)

---

## 7.2.3 Air, water and media

| Media | Requirement |
|-------|------------|
| Compressed air | **6 bar** — mandatory for preparation/fill |
| Water | Fills the tanks via the automatic-fill valve |
| Vacuum | **Not provided** |

A vacuum connection or opening procedure is not applied (see **Chapter 6.6**).

---

## 7.2.4 Start procedure

Complete the **Chapter 7.2.5** checklist before start.

1. Verify that preparation is complete and the tower lamp is **yellow**.
2. Check that there is no part/object on the conveyor line that could cause crushing.
3. Verify that pump inlet valves are **open**; open them if closed.
4. Press the HMI **Machine Start** button.
5. Verify that the tower lamp is **green** and that the conveyor and selected process functions are running.

**Expected result:** Machine in automatic cycle; green tower lamp; no active alarm on the HMI.

**Abnormal condition:** If start is not accepted, check the HMI alarm page (see **Chapter 11**). RFID cover, emergency stop or level alarm may be active.

---

## 7.2.5 Pre-start checklist

| # | Check | Status |
|---|---------|:-----:|
| 1 | No part/object on the conveyor line that could cause crushing | ☐ |
| 2 | Pump inlet valves open | ☐ |
| 3 | Preparation complete (fill + heating) | ☐ |
| 4 | Air 6 bar; air/water green on HMI manual page | ☐ |
| 5 | Emergency stop reset; tower lamp yellow (ready) | ☐ |
| 6 | No blocking alarm on the HMI alarm screen | ☐ |

**Date:** _______________ **Checked by:** _______________

---

## 7.2.6 First-part trial

| Parameter | Value |
|-----------|-------|
| Separate first-part / trial-wash procedure | **Not provided** |

A separate first-part trial procedure is not defined. Test washing for a new product type follows **Chapter 8.2.2** recipe steps.

---

For stopping see **Chapter 7.3**; for the automatic sequence see **Chapter 7.4**.
