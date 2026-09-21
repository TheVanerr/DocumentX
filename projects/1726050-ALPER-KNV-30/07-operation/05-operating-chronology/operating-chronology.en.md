# 7.5 Operation chronology

Under this project the machine is designed for continuous line operation with a **24/7 robot**. A traditional shift-operator model is not applied; there is no continuous shift operator at the machine. When HMI start/stop and Error-461 confirm are required, the line supervisor or maintenance personnel intervene.

---

## 7.5.1 Daily operation timeline

| Parameter | Value |
|-----------|-------|
| Daily operation | **24/7** continuous running with robot |
| Shift-based operation schedule | **Not applied** |

The machine runs synchronised with the higher-level line (robot + MES/SCADA — definition belongs to the customer). Planned stops (maintenance, cleaning) are made according to the plant production plan; the **Chapter 7.3** stop procedure is applied before a stop.

---

## 7.5.2 Shift handover

| Parameter | Value |
|-----------|-------|
| Shift-handover items | **Not provided** |

An operator/shift handover form is not used. Status monitoring is performed by the higher-level system (customer MES/SCADA) or by a periodic maintenance round.

---

## 7.5.3 Shift start checklist

| Parameter | Value |
|-----------|-------|
| Shift start checklist | **Not provided** |

Because the machine runs continuously automatically, a shift-start checklist is not defined. Instead the following periodic checks apply:

| Interval | Check | Chapter |
|---------|---------|-------|
| Daily | Pre-filter cleaning | 10 |
| Weekly | Tank/bag filter cleaning | 10 |
| Monthly | Emergency-stop function test | 6.2.3, 5.4.1 |
| Periodic | Maintenance-schedule items | 9 |

During a planned maintenance or cleaning stop the machine must be stopped; **LOTO** must be applied for work that requires energy isolation (see **Chapter 2.4**).

---

For the maintenance schedule see **Chapter 9**.
