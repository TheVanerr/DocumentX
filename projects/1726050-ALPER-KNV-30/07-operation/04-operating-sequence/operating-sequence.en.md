# 7.4 Operating sequence

The machine runs **fully automatic**. The HMI operating page has **on/off buttons** for wash, rinse, drying 1, drying 2 and exhaust.

Process flow summary: **Wash → Rinse → Dry**

| Process | Name |
|---------|------|
| 1 | Wash |
| 2 | Rinse |
| 3 | Dry |

---

## 7.4.1 Automatic Cycle steps

| Step | Description |
|------|-------------|
| 1 | On HMI operating page, set wash, rinse, drying 1, drying 2 options **on/off** as required |
| 2 | After preparation complete, press **start**; conveyor and selected process functions run automatically |
| 3 | Part passes through **wash** bath on conveyor (if wash active) |
| 4 | Part passes through **rinse** bath (if rinse active) |
| 5 | Part passes through **drying** zone (if drying 1/2 active); reaches exit |

---

## 7.4.2 Cycle time

| Parameter | Value / Description |
|-----------|---------------------|
| Nominal cycle time (s) | **900** |

---

## 7.4.3 Product infeed / outfeed

| Parameter | Value / Description |
|-----------|---------------------|
| Product infeed scenario | At infeed **no operator**; part is placed on conveyor by **robot**. Infeed procedure is **customer responsibility** |
| Product outfeed scenario | At outfeed **no operator**; part is removed by **robot**. Outfeed procedure is **customer responsibility** |

Parts complete processes while advancing on the conveyor (infeed loading).

<!-- FOTO: Conveyor product flow -->
![Conveyor product flow](../../assets/FOTO-7-4-0-konveyor.png)

---

## 7.4.4 Machine behaviour on fault

| Parameter | Value / Description |
|-----------|---------------------|
| Machine behaviour on fault | Machine stops on faults that **affect operation** (e.g. maintenance cover opened, RFID switch not detected). In situations with **no immediate air requirement** (e.g. air disconnected while running), machine may continue |

On alarm, alarm screen is shown on HMI; stack light turns **red**.
