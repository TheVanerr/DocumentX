# 5.5 Installation verification and test

Installation verification tests are carried out after **Chapter 5.4** safety tests are complete. Do not proceed to operation until all checks are **OK**. The checklist below is used for installation verification.

---

## 5.5.1 Mechanical installation test

| # | Check | Expected result | Status |
|---|---------|-----------------|:-----:|
| 1 | Is the machine level? | Yes — adjustable feet, within 0.5 mm tolerance | ☐ |

The test is performed after **Chapter 5.2.3** levelling is complete. Check both axes with a spirit level or equivalent measuring instrument.

![Level check](../../assets/5.5/1.png)

---

## 5.5.2 Electrical commissioning test

| # | Check | Expected result | Status |
|---|---------|-----------------|:-----:|
| 1 | Does the phase-protection relay provide output? | Yes | ☐ |
| 2 | Is there power on the machine? | Yes | ☐ |
| 3 | Does the machine stop when emergency stop is pressed? | Yes | ☐ |

Phase rotation must have been verified in **Chapter 5.3.4**.

![Electrical commissioning test](../../assets/5.5/2.png)

---

## 5.5.3 Pneumatic and media connection test

| # | Check | Expected result | Status |
|---|---------|-----------------|:-----:|
| 1 | Is air status green on the HMI manual page? | Yes | ☐ |
| 2 | Is water status green on the HMI manual page? | Yes | ☐ |

Connection values: **6 bar / 3/4"** air, **1 bar / 1/2"** water (see **Chapter 3.3.5**).

![Media test — HMI manual](../../assets/5.5/3.png)

---

## 5.5.4 Safety function test

| # | Check | Expected result | Status |
|---|---------|-----------------|:-----:|
| 1 | Does emergency stop stop the machine? | Yes | ☐ |
| 2 | Is the machine ready for use? | Yes — yellow tower lamp | ☐ |
| 3 | Does the RFID sensor stop the machine when a cover is opened? | Yes | ☐ |

Detailed test steps are given in **Chapter 5.4**.

![Safety function test](../../assets/5.5/4.png)

---

## 5.5.5 Dry-run test

| Parameter | Value |
|-----------|-------|
| Dry-run test duration | **15 minutes** |

The dry-run test verifies continuous machine operation without parts; it checks leakage, alarms, excessive vibration and that process functions operate together. During the test the conveyor, pumps and fans move; do not enter the hazard zone; use appropriate PPE (see **Chapter 2.6**).

### Prerequisites

1. **Chapter 5.5.1–5.5.4** checks must be completed **OK**.
2. There must be no part or object on the conveyor line that could cause crushing.
3. Pump inlet valves must be **open**.
4. Air (**6 bar**) and water connections active; air/water **green** on the HMI manual page.

### Test procedure

1. Go to the HMI **Operating Page**.
2. Set wash, rinse, drying 1, drying 2 and exhaust functions to **active** according to the test scope.
3. Press the **Preparation Start** button; wait until tank filling and heating are complete (see **Chapter 7.2**).
4. Verify that the tower lamp is **yellow** (ready for use).
5. Start automatic operation with **Machine Start**; observe that the conveyor, pumps and fans start.
6. Run the machine **without parts** for **15 minutes**.
7. During the test, monitor the HMI alarm screen and the tower lamp; check for leakage, abnormal noise or odour.
8. Stop with **Machine Stop**.

| # | Acceptance criterion | Status |
|---|---------------|:-----:|
| 1 | 15 min uninterrupted dry run completed | ☐ OK / ☐ NOK |
| 2 | No critical alarm during the test | ☐ OK / ☐ NOK |
| 3 | No visible leakage or abnormal vibration | ☐ OK / ☐ NOK |

**Abnormal condition:** If an alarm occurs, stop the machine; see **Chapter 11**. Do not proceed to operation until the test is repeated.

If the dry-run test is successful, the machine is accepted as **ready for use** (**Chapter 5.1 Step 9**).

---

## 5.5.6 Installation verification summary checklist

| Section | Test | Completed |
|-------|------|:----------:|
| 5.5.1 | Mechanical — level | ☐ |
| 5.5.2 | Electrical — phase protection, emergency stop | ☐ |
| 5.5.3 | Media — HMI air/water green | ☐ |
| 5.5.4 | Safety — RFID, ready for use | ☐ |
| 5.5.5 | Dry run — 15 min | ☐ |

**Date:** _______________ **Tested by:** _______________ **Approved by:** _______________

---

For operation procedures see **Chapter 7**.
