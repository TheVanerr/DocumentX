# 11.5 Pneumatic faults

Machine uses **6 bar** compressed air (see Section **6.5**).

---

## 11.5.1 Pressure alarms

| Alarm | Topic | Check |
|-------|-------|-------|
| Error-235 | Inlet air pressure low | 6 bar air, regulator, HMI manual page |
| Error-236 | Inlet water pressure low | 1 bar water, HMI manual page |

| Parameter | Value / Description |
|-----------|---------------------|
| Low pressure (general) | Error-235 — 6 bar air required |

> **Note:** If air disconnected while running, no immediate air need; machine may continue (see **7.4.4**).

---

## 11.5.2 Valve faults

| Alarm | Topic |
|-------|-------|
| Error-300 | Wash auto-fill valve cannot open |
| Error-301 | Wash auto-fill valve cannot close |
| Error-302 | Rinse auto-fill valve cannot open |
| Error-303 | Rinse auto-fill valve cannot close |
| Error-304 | Transfer valve cannot open |
| Error-305 | Transfer valve cannot close |

**Check:** 6 bar air available. Automatic fill water valve open (7.2.1). Valve coil and mechanical movement.

| Parameter | Value / Description |
|-----------|---------------------|
| Cylinder slow / sticking | [MISSING] |
| Valve coil fault | [MISSING] |
