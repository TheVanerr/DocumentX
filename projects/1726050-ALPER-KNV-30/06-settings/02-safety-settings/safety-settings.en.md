# 6.2 Safety settings

Safety settings keep the machine’s safety functions (RFID, emergency stop) consistent with their design intent. This machine has **no** operator-adjustable safety parameters (light-curtain distance, bypass time, etc.). Safety equipment cannot be bypassed; the settings scope covers only the periodic **function test** and maintenance-access rules.

Emergency-stop locations and the reset procedure are given in **Chapter 2.5**; LOTO is defined in **Chapter 2.4**.

---

## 6.2.1 RFID maintenance cover — bypass prohibition

| Parameter | Value / Description |
|-----------|------------------|
| RFID / cover safety sensor | **Not bypassed, not jumpered** |
| Maintenance access | The machine is stopped; **LOTO** is applied; covers are opened only after that |

The number of fixed safety doors / fixed barriers on the machine is zero; maintenance covers are monitored by an **RFID safety sensor**. RFID cannot be disabled or jumpered; bypassing breaks **Cat. 3** (EN ISO 13849-1) compliance and takes the machine outside liability/warranty coverage (see **Chapter 2.1.3**).

The installation and monthly **function test** (stop verification when a cover is opened) is defined in **Chapter 5.4.2**; this test is not maintenance access. For maintenance/cleaning, **Chapter 2.4** LOTO is mandatory.

**WARNING — Disabling a safety device:** Bypassing the RFID sensor can allow the machine to continue running with a cover open and cause crushing injury. Do not bypass.

---

## 6.2.2 Light curtain

| Parameter | Value / Description |
|-----------|------------------|
| Light-curtain setting distance (mm) | There is **no** light curtain on the machine |

Light-curtain adjustment is not applied. There is robot integration in the conveyor infeed/outfeed zones; access control is provided by RFID cover sensors and emergency stop.

---

## 6.2.3 Emergency-stop test interval

| Parameter | Value |
|-----------|-------|
| Emergency-stop test interval | **Once a month** |

The monthly emergency-stop function test verifies that the emergency-stop circuit and the reset chain remain operational. If the test is skipped, stopping in a fault situation cannot be guaranteed.

### Periodic test — summary

1. Open a monthly record in the test calendar (maintenance form or CMMS).
2. Apply the **Chapter 5.4.1** test procedure — each of the 4 emergency-stop buttons is tested separately.
3. Verify the reset procedure according to **Chapter 2.5**.
4. Record the result; if NOK, do not proceed to operation.

![Emergency-stop periodic test](../../assets/6.2/1.png)

---

## 6.2.4 Safety settings checklist

| # | Check | Status |
|---|---------|:-----:|
| 1 | RFID / safety not bypassed | ☐ |
| 2 | Maintenance access is performed with LOTO | ☐ |
| 3 | Monthly emergency-stop test planned and recorded | ☐ |

**Date:** _______________ **Checked by:** _______________

---

For the installation safety test see **Chapter 5.4**; for emergency stop see **Chapter 2.5**.
