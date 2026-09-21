# 5.4 Safety systems test

After installation, safety functions must be verified before operation. The machine safety category is **Cat. 3** (EN ISO 13849-1). The machine has an **RFID safety sensor**; there is **no light curtain**. The number of safety doors / fixed barriers is **0**.

Emergency-stop locations, reset procedure and behaviour after emergency stop are given in **Chapter 2.5**; this section defines only the **installation test steps**. For maintenance interventions, apply the LOTO procedure according to **Chapter 2.4**.

Emergency-stop function test interval: Must be repeated **once a month** (see **Chapter 6.2** — Safety settings).

---

## 5.4.1 Emergency-stop test

The machine has **4** emergency-stop buttons (see **Chapter 2.5**):

| # | Location |
|---|-------|
| 1 | On the electrical cabinet |
| 2 | At machine infeed, to the right of the conveyor |
| 3 | At machine infeed, to the left of the conveyor |
| 4 | At machine outfeed, to the left of the conveyor |

### Test procedure

For each emergency-stop button separately:

1. Verify that the hazard zone is clear; no one shall enter the conveyor infeed/outfeed.
2. While the machine is ready or running, press the relevant emergency-stop button.
3. Verify that **every function** on the machine has stopped.
4. Check that the tower lamp is **red**.
5. Apply the reset procedure (**See Chapter 2.5**).
6. Return the machine to the normal ready state before testing the next button.

| Check | Expected result |
|---------|----------------|
| Does the machine stop when emergency stop is pressed? | Yes — every function stops |

![Emergency-stop button](../../assets/5.4/1.png)

![Reset button](../../assets/5.4/2.png)

---

## 5.4.2 RFID safety sensor test

| Parameter | Value |
|-----------|-------|
| Sensor type | RFID safety sensor |
| Number of safety doors | 0 |

This subsection is a **function test**; it is not maintenance access. Before opening covers for maintenance/cleaning, **Chapter 2.4** LOTO is mandatory.

### Test procedure

1. Verify that the hazard zone is clear; do not reach towards moving parts when opening the cover.
2. While the machine is ready or running, partially open an RFID-protected maintenance cover **for detection only**.
3. Verify that the RFID sensor **stops** the machine.
4. Close the cover; apply the reset procedure (**See Chapter 2.5**).

| Check | Expected result |
|---------|----------------|
| Does the RFID sensor stop the machine when covers are opened? | Yes |

The RFID safety sensor is **not bypassed**. If the test fails, do not proceed to operation.

![RFID safety sensor](../../assets/5.4/3.png)

---

## 5.4.3 Phase protection and electrical safety test

| # | Check | Expected result |
|---|---------|----------------|
| 1 | Does the phase-protection relay provide output? | Yes |
| 2 | Is there power on the machine? | Yes |
| 3 | Does the machine stop when emergency stop is pressed? | Yes |

![Phase-protection relay](../../assets/5.4/4.png)

---

## 5.4.4 Machine ready-state test

| Check | Expected result |
|---------|----------------|
| Is the machine ready for use? | Yes |
| Tower lamp | Yellow — ready for use |

There must be no active alarm on the HMI alarm screen. If there is an alarm, see **Chapter 11**.

![Tower lamp — ready for use](../../assets/5.4/5.png)

---

## 5.4.5 Safety function test checklist

| # | Test | Result | Date | Tested by |
|---|------|:-----:|-------|-----------|
| 1 | Emergency stop #1 — cabinet | ☐ OK / ☐ NOK | | |
| 2 | Emergency stop #2 — infeed right | ☐ OK / ☐ NOK | | |
| 3 | Emergency stop #3 — infeed left | ☐ OK / ☐ NOK | | |
| 4 | Emergency stop #4 — outfeed left | ☐ OK / ☐ NOK | | |
| 5 | Reset procedure (Chapter 2.5) | ☐ OK / ☐ NOK | | |
| 6 | RFID sensor — cover open | ☐ OK / ☐ NOK | | |
| 7 | Phase-protection relay | ☐ OK / ☐ NOK | | |
| 8 | Machine ready for use | ☐ OK / ☐ NOK | | |

Do not proceed to **Chapter 5.5** tests or to operation until all items are **OK**.
