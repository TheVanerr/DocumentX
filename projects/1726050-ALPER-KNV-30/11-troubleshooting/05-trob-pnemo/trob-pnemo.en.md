# 11.5 Pneumatic faults

The machine uses **6 bar** compressed air for pneumatic valves and automatic fill systems. Water inlet pressure must be **1 bar** minimum. Media values are given in the **Section 3.3.5** table.

---

## 11.5.1 Pressure alarms

| Alarm | Topic | Minimum value |
|-------|------|:-------------:|
| Error-235 | Inlet air pressure low | **6 bar** |
| Error-236 | Inlet water pressure low | **1 bar** |

### Low-pressure diagnosis procedure

1. Read the air and water pressure indications on the HMI **Manual Page** (**Section 3.4.5**).
2. Verify that the plant air regulator is delivering **6 bar** outlet.
3. Check that the air line valve is open.
4. Verify that the water inlet valve is open and pressure is above **1 bar**.
5. When pressure is restored, alarm reset; continue with **Preparation Start**.

**Note:** If the air line is interrupted temporarily while the machine is running, the machine may continue for a short time in situations with no instantaneous pneumatic consumption (see **Section 7.4.4**). Persistent low pressure produces Error-235.

| Parameter | Value |
|-----------|-------|
| Pressure low (general) | Error-235 — 6 bar air mandatory |

---

## 11.5.2 Valve faults

| Alarm | Topic |
|-------|------|
| Error-300 | Wash automatic fill valve could not open |
| Error-301 | Wash automatic fill valve could not close |
| Error-302 | Rinse automatic fill valve could not open |
| Error-303 | Rinse automatic fill valve could not close |
| Error-304 | Transfer valve could not open |
| Error-305 | Transfer valve could not close |

Automatic fill valves operate with a pneumatic coil; they do not open without **6 bar** air.

### Valve fault diagnosis procedure

1. Verify **6 bar** air pressure (no Error-235).
2. Check that the automatic fill **water inlet valve is open** (**Section 7.2.1**).
3. Perform a movement test by giving a manual command to the relevant valve from the HMI Manual Page (if available).
4. If the valve does not open, check coil electrical supply under LOTO.
5. If there is mechanical jamming or contamination, remove, clean or replace the valve.
6. In a fail-to-close case (Error-301/303/305), check the spring/stroke mechanism.

| Parameter | Value |
|-----------|-------|
| Cylinder slow / sticking | **Not applicable** — no pneumatic cylinder |
| Valve coil fault | **6 bar** air + water valve open; HMI manual valve test; coil supply under LOTO; mechanical jamming/contamination — procedure below |

On coil fault the valve does not move or Error-300–305 occurs. The coil may be burnt, PLC output missing, or mechanical jamming present.

**Expected result:** Valve opens and closes; tank fill normal; related Error code clear.

---

For pneumatic settings see **Section 6.5**.
