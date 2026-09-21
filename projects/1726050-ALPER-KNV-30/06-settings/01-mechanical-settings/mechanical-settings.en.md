# 6.1 Mechanical settings

The KNV 30 3000 2B machine is commissioned from the factory so that mechanical adjustment is not required. Conveyor, pump installations and process nozzles are fixed within OEM tolerances; periodic mechanical fine adjustment by the operator or maintenance personnel is not envisaged.

This section explains the reference-position definition and why the mechanical-settings scope is empty. Mechanical maintenance (lubrication, filters) is defined in **Chapter 9**.

---

## 6.1.1 Mechanical adjustment points

| Parameter | Value / Description |
|-----------|------------------|
| List of mechanical adjustment points | No adjustment is required |

The machine has no operator adjustment point for nozzle distance, limit switch, chain tension or format change. For faults that require mechanical intervention, manufacturer service must be called in (see **Chapter 1.3**).

---

## 6.1.2 Reference / home position

| Parameter | Value / Description |
|-----------|------------------|
| Reference / home position setting | The **head of the conveyor** shall be used as the reference |

The conveyor head is accepted as the machine reference point. Part positioning, sensor synchronisation and line integration are planned to this reference. Changing the reference can affect the PLC program; it must not be done by the operator.

![Reference position — conveyor head](../../assets/6.1/1.png)

---

## 6.1.3 Chain / belt and limit settings

| Parameter | Value / Description |
|-----------|------------------|
| Chain / belt tension value | No adjustment is required |
| Distance / limit-switch settings | No adjustment is required |

Conveyor chain/belt tension is set during OEM assembly. Tension is observed under periodic maintenance; wear that requires adjustment is covered in **Chapter 9**.

---

## 6.1.4 Nozzle / filling head

| Parameter | Value / Description |
|-----------|------------------|
| Nozzle / filling-head adjustment range (mm) | No adjustment is required |

Wash and rinse nozzles are fixedly mounted; there is no operator adjustment by part format.

---

## 6.1.5 Format change

| Parameter | Value / Description |
|-----------|------------------|
| Format-change procedure summary | There is no format-change procedure |

Different part geometries are managed with process parameters (HMI temperature, function on/off) (see **Chapter 8.2**); mechanical format change is not applied.

---

## 6.1.6 Mechanical settings checklist

| # | Check | Status |
|---|---------|:-----:|
| 1 | Reference point (conveyor head) verified | ☐ |
| 2 | No mechanical OEM adjustment required — recorded | ☐ |

**Date:** _______________ **Checked by:** _______________
