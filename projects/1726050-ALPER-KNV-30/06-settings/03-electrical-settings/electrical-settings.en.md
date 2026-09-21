# 6.3 Electrical and HMI settings

Electrical settings consist of two layers: **operator-accessible HMI parameters** (temperature, oil-skimmer times, date/time/language) and **manufacturer-protected embedded settings** (encoder/feedback, PLC program). The operator intervenes only in the first group; if the second group is changed without authorisation, safety interlocks and motor control can be impaired.

HMI screen structure is described in **Chapter 3.4.4**; this section gives the setting procedures.

---

## 6.3.1 Motor direction / phase check

| Parameter | Value / Description |
|-----------|------------------|
| Motor direction / phase check | The motor must run in one direction only; operator adjustment is **not required** |

Pumps and fans are designed for unidirectional drive. Phase rotation is verified at installation with the phase-sequence relay (see **Chapter 5.3.4**). There is no setting to change motor direction during operation; reverse rotation is a fault indication (**See Chapter 11**).

---

## 6.3.2 Encoder / feedback

| Parameter | Value / Description |
|-----------|------------------|
| Encoder / feedback setting | Embedded in the PLC program; adjustment must be made by the **manufacturer** |

Encoder and feedback parameters are not opened to the operator via the HMI. Calibration or change is performed only by manufacturer authorised service.

**CAUTION — Unauthorised intervention:** Operator modification of the PLC program and embedded encoder settings can impair conveyor synchronisation and safety functions.

---

## 6.3.3 Process temperature and oil-skimmer settings (HMI)

| Parameter | Setting location |
|-----------|-----------|
| Temperature setpoints | HMI **Settings Page** |
| Oil-skimmer run / idle times | HMI **Settings Page** |
| Pressure setting | Not provided |

Analog pressure scaling is not performed by the operator. Temperature settings are made via the HMI.

### HMI temperature and oil-skimmer setting procedure

1. Put the machine in the **stop** state or be in the preparation phase.
2. Open the HMI **Settings Page**.
3. Enter the following setpoints according to process need:

| Parameter block | Set value |
|-----------------|-----------------|
| Wash temperature | Setpoint (°C) |
| Rinse temperature | Setpoint (°C) |
| Drying | Setpoint 1 (°C) |
| Oil skimmer | Run time (min) and idle time (min) |

4. Confirm the values; to verify transfer to the PLC, check setpoint/actual temperature indications on the **Operating Page**.
5. Keep temperature limits within machine design limits for part material and process safety.

**Expected result:** Setpoint and actual temperatures on the operating page are consistent; the oil skimmer runs periodically.

**Abnormal condition:** If the heater does not start, check level sensor, thermal and residual-current protection status from the HMI Manual Page (see **Chapter 3.4.5**, **Chapter 11**).

![HMI temperature setting](../../assets/6.3/1.png)

---

## 6.3.4 Date, time and language setting (HMI)

| Parameter | Value / Description |
|-----------|------------------|
| Date / time / language setting | Must be made from the HMI interface |

### Language selection

Language is selected with the flag icons in the top-right corner of the HMI start screen: **Turkish**, **English**, **German** (see **Chapter 3.4.2**).

### Date / time

1. Open the HMI **Settings Page** or the system-parameter menu.
2. Update date and time to the plant standard.
3. Verify that alarm records and trend timestamps are correct.

Correct date/time is required for traceability of alarm history and maintenance records.

![HMI language setting](../../assets/6.3/2.png)

---

## 6.3.5 Electrical settings checklist

| # | Check | Status |
|---|---------|:-----:|
| 1 | Phase rotation verified at installation (Chapter 5.3.4) | ☐ |
| 2 | Encoder/feedback setting made / verified by the manufacturer | ☐ |
| 3 | HMI temperature setpoints defined | ☐ |
| 4 | Oil-skimmer run/idle times defined | ☐ |
| 5 | HMI date / time / language set | ☐ |

**Date:** _______________ **Checked by:** _______________

---

For HMI menu structure see **Chapter 3.4**; for recipe management see **Chapter 8.2**.
