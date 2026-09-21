# 7.6 Other operation topics

This section summarises operational topics outside the standard start/stop and cycle sequence. There is **no continuous shift operator** at the machine; loading/unloading does not require human intervention in normal running. HMI commands and Error-461 confirm are given by the line supervisor or maintenance.

---

## 7.6.1 Format / product change

| Parameter | Value |
|-----------|-------|
| Format / product change time | **Not provided** |
| Format-change procedure | **Not provided** |

Mechanical format change is not applied (see **Chapter 6.1.5**). Different part types are managed with HMI temperature setpoints and process-function on/off configuration (see **Chapter 8.2**).

---

## 7.6.2 Scrap / reject management

| Parameter | Value |
|-----------|-------|
| Scrap / reject management | **Not applied** — the machine has no scrap bin; customer line |

Scrap collection and reject recording are the customer line’s responsibility. A separate scrap bin or reject procedure is not defined in the machine scope.

---

## 7.6.3 Intervention points and responsibility

| Personnel | Role |
|----------|-----|
| Operator (at the machine) | **Not provided** |
| Maintenance personnel | Fault/alarm intervention, periodic maintenance, cleaning |
| Manufacturer service | PLC, encoder, major fault |

When a fault occurs:

1. The tower lamp is **red**; the HMI Alarm Page shows the active alarm.
2. The higher-level line may receive a stop signal (customer configuration).
3. Intervention is performed by **maintenance personnel** — follow the **Chapter 11** diagnosis flow.
4. For repairs that require energy isolation, apply **LOTO** (**See Chapter 2.4**).

Intervention that would disable safety functions must be performed only by authorised service.

---

For fault codes see **Chapter 11.2**; for capacity/recipe see **Chapter 8**.
