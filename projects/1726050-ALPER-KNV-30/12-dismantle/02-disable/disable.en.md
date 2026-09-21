# 12.2 Decommissioning

The machine can be decommissioned temporarily (planned downtime, between maintenance) or permanently (scrap, plant closure). In both cases energy isolation and — depending on duration — tank-draining requirements differ.

---

## 12.2.1 Permanent decommissioning

| Parameter | Requirement |
|-----------|------------|
| Permanent decommissioning | Full dismantling and safe blanking must be performed |

Permanent decommissioning is applied when the machine will not be put back into service.

### Permanent decommissioning procedure

1. Apply the **Section 12.1** dismantling procedure in full.
2. Switch off the main switch and leave the **LOTO** lock in place, or physically disconnect the line.
3. Disconnect electrical, air and water utility connections safely; blank the open ends.
4. Disable the control circuits (PLC, HMI, safety relays); coordinate with manufacturer service if required (**Section 1.3**).
5. Dispose of the machine or parts according to the **Section 12.3** scrap/recycling procedure.
6. Mark the machine serial number (**1726050**) as out of service in the plant records.

**Expected result:** Energy lines blanked; machine cannot be re-energized; disposal process started.

---

## 12.2.2 Temporary decommissioning

| Parameter | Requirement |
|-----------|------------|
| Temporary decommissioning | Stop + (if required) tank drain + main switch OFF |

Temporary shutdown is applied for weekends, planned maintenance, line revision or a short production stop.

### Short temporary shutdown (a few hours — one shift)

1. Stop the machine with HMI **Machine Stop**.
2. Coordinate with the robot line.
3. Tank draining is **not required** (see **Section 7.3.1**).
4. Recommissioning: **Section 7.2** preparation and start procedure.

### Long temporary shutdown (weekend / planned maintenance / >24 h)

1. Stop the machine with HMI stop.
2. **Drain and clean the tanks** — see **Sections 7.3.4**, **10.1.5**.
3. Set the main switch to **OFF**.
4. If maintenance personnel intervene, apply **LOTO** (**Section 2.4**).
5. Provide protection appropriate to storage conditions — see **Section 4.2**.
6. Recommissioning:
   - Main switch ON
   - Plant air/water valves open
   - **Section 7.2** preparation + start
   - Safety-function test according to the periodic plan (**Sections 6.2**, **9.1.3**)

**CAUTION — Corrosion/odour:** If tanks are left filled, the risk of odour, microbial growth and stainless-surface corrosion increases.

---
