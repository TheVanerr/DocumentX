# 12.1 Safe dismantling procedure

Energy isolation and draining of liquids are mandatory before the machine is removed from the installation, taken apart or transported. During dismantling the machine **must be electrically isolated**; **water in the tanks must be drained**.

This machine has no hydraulic circuit; isolation of pneumatics (**6 bar** air) and electricity (**380 V**) is sufficient. There is no battery. Wash tanks may contain oily water, the conveyor may contain grease, and detergent residue may remain from cleaning; wastewater disposal is subject to **Section 10.1.8**.

---

## 12.1.1 Dismantling prerequisites

The following conditions must be met before dismantling starts:

| # | Condition |
|---|-------|
| 1 | The machine must have been stopped with **HMI stop** |
| 2 | Coordination with the robot line or upstream/downstream equipment must be in place |
| 3 | There must be no active HMI alarm (clear any alarm — see **Section 11**) |
| 4 | Wash and rinse tanks must have been **drained** |
| 5 | **LOTO** must have been applied (**Section 2.4**) |
| 6 | Handling equipment (forklift, SWL ≥ **1300 kg**) must be ready |

Before a long shutdown or storage, drain and clean the tanks according to the procedures in **Sections 7.3.4** and **10.1.5**. Dismantling/transport with full tanks shifts the centre of gravity; operating weight can rise to **1500 kg** (see **Section 3.3.1**).

**WARNING — Crushing:** During dismantling, verify that no parts or objects remain on the conveyor line.

---

## 12.1.2 Energy isolation (LOTO)

| Parameter | Requirement |
|-----------|------------|
| Energy isolation procedure | The **LOTO procedure** must be applied |

Energy sources:

| Energy | Isolation point | Note |
|--------|-------------------|-----|
| Electrical | Main switch (panel) | **380 V / 50 Hz / 3-phase** — see **3.3.3** |
| Compressed air | Plant air valve | **6 bar** — see **3.3.5** |
| Water | Plant water inlet valve | Automatic fill valve is closed |
| Stored pneumatic energy | Line pressure venting | Regulator/valve dump |

### LOTO application summary

1. Stop the machine with HMI **Machine Stop**.
2. Set the main switch to **OFF (0)**.
3. Close the plant **air** and **water** valves.
4. Apply the **Section 2.4** LOTO procedure in full (lock, tag, verify).
5. Drain the tanks (**Section 10.1.5**).
6. Authorized personnel must verify that there is no voltage at the panel incoming supply.

**DANGER — Electricity:** 380 V three-phase supply. Work inside the panel only by authorized electrical personnel, after LOTO.

---

## 12.1.3 Dismantling sequence

| Parameter | Sequence |
|-----------|------|
| Dismantling sequence | Isolate electricity → drain tanks → disconnect utilities → remove mechanical parts |

### Dismantling procedure

1. **Stop operation** — robot-line coordination; HMI stop.
2. **Apply LOTO** — see **12.1.2**, **2.4**.
3. **Drain and clean the tanks** — see **10.1.5**; dispose of wastewater in accordance with **10.1.8**.
4. **Disconnect utility connections:**
   - Three-phase electrical (**380 V, 3P+N+PE**)
   - Compressed air (**6 bar**, 3/4")
   - Water inlet (**1 bar**, 1/2") and drain line
5. **Mechanical dismantling** — modules and fasteners; parts list **Section 13.3.1**.
6. **Electrical panel and cable dismantling** — under LOTO; separate PLC/HMI into the WEEE class.
7. **Transport** — using the forklift under-profiles; **do not use a crane** (see **4.1**).
8. **Separate parts by material group** — see **12.3**.

**Note:** Within this project, shipment is planned as a **1300 kg** assembled machine; module removal is not required for routine handling. Full dismantling is applied only for scrap or a plant relocation.

**Expected result:** Machine isolated from energy; tanks empty; utilities disconnected; parts ready for transport or disposal.

---

## 12.1.4 Recycling and disposal

| Parameter | Requirement |
|-----------|------------|
| Recycling / disposal | Current environmental disposal requirements of the country of use |
| Hazardous substances | No battery; oily process water, grease, detergent — **10.1.8**, **12.3** |
| Wastewater / cleaning | **Section 10.1.8** |

Dismantling waste must be sorted in accordance with local regulations and sent to licensed facilities. Stainless-steel body, plastic seals, electrical/electronic items (PLC, HMI, cable) and packaging materials are collected separately — details in **Section 12.3**.

Compressed-air, water and drain connection data are given on the layout drawing (see **Section 3.3.5**, **1726050-ALPER-KNV 30 LAYOUT.pdf**).

---

Temporary/permanent decommissioning **12.2**; scrap **12.3**.
