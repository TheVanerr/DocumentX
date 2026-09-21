# 6.5 Pneumatic settings

The machine’s pneumatic consumption is supplied mainly at **6 bar** compressed air for fill valves and process control. Connection values are given in **Chapter 3.3.5**; this section defines the regulator setting procedure.

There is no hydraulic system. Cylinder speed and sensor-delay settings are not open to the operator.

---

## 6.5.1 Regulator pressure setting

| Parameter | Value (Chapter 3.3.5) |
|-----------|----------------------------|
| Regulator pressure setting | **6 bar** |
| Connection | 3/4" |

### Regulator setting procedure

1. Verify that the site main air valve is open.
2. Locate the pneumatic regulator at the machine inlet.
3. Set the regulator to **6 bar**; use the pressure gauge or regulator scale as reference.
4. Open the HMI **Manual Page**; verify that the **air status** indication is **green**.
5. After setting, check with a short test that fill valves and pneumatic functions operate normally.

**Expected result:** Regulator 6 bar; air status green on the HMI manual page.

**Abnormal condition:** If pressure is low, check site-line flow, filter blockage and leaks (see **Chapter 11**).

The first setting during installation is made in **Chapter 5.3.1**; this procedure must be repeated after regulator drift or hose replacement.

![Pneumatic regulator 6 bar](../../assets/6.5/1.png)

---

## 6.5.2 Cylinder speed setting

| Parameter | Value / Description |
|-----------|------------------|
| Cylinder speed setting | There is **no** cylinder speed setting |

---

## 6.5.3 Sensor delays

| Parameter | Value / Description |
|-----------|------------------|
| Sensor ON/OFF delays (ms) | There are **no** sensor ON/OFF delays |

Sensor delays are fixed in the PLC program; there is no operator setting.

---

## 6.5.4 Pneumatic settings checklist

| # | Check | Status |
|---|---------|:-----:|
| 1 | Regulator set to **6 bar** | ☐ |
| 2 | Air status green on HMI manual page | ☐ |

**Date:** _______________ **Checked by:** _______________
