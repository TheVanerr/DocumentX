# 8.1 Product capacity

Capacity assessment is made for **industrial parts** travelling on the conveyor. The machine is not defined by drum volume or batch-loading capacity; line throughput is determined together by conveyor flow speed, robot cycle time and process time.

Reference technical values are given in **Chapter 3.3.2** — Capacity and process parameters table.

---

## 8.1.1 Capacity parameters

| Parameter | Value | Note |
|-----------|-------|-----|
| Nominal capacity (pcs/h) | Defined by the user company | See Chapter 3.3.2 |
| Maximum capacity (pcs/h) | Defined by the user company | |
| Minimum capacity (pcs/h) | **730** | Design reference value |
| Nominal cycle time | **900 s** (15 min) | Part transit time — not robot cycle |
| Process steps | Wash → Rinse → Dry (3) | See Chapter 3.1 |

**730 pcs/h** is the line-throughput reference with more than one part at a time on the conveyor. **900 s** is the dwell of a single part in the process tunnel. The robot infeed/outfeed cycle belongs to the customer line and must be short enough to be compatible with 730 pcs/h. Actual production capacity varies with the robot line, part size and process parameters; it must be verified on the user site.

---

## 8.1.2 Product limits

| Parameter | Value |
|-----------|-------|
| Product format / packaging type | Defined by the user company |
| Product size min (mm) | Defined by the user company |
| Product size max (mm) | Defined by the user company |
| Product weight min (g) | Defined by the user company |
| Product weight max (g) | Defined by the user company |

Part size and weight must be compatible with conveyor width (**1730 mm** external width — see **Chapter 3.3.1**), robot grip point, nozzle coverage and bath geometry. Intended-use limits are defined in **Chapter 3.2**.

**CAUTION — Overloading:** A part or stacked load that exceeds conveyor carrying capacity damages the conveyor mechanism and process quality.

---

## 8.1.3 Nominal capacity table

The nominal capacity table (product × pcs/h) must be created **by the user company**. The template below is an example structure; values are filled from site testing:

| Product type | Pcs/h (target) | Cycle time (s) | Note |
|-----------|-------------------|-------------------|-----|
| Product A | [User company] | [User company] | |
| Product B | [User company] | [User company] | |
| Product C | [User company] | [User company] | |
| … | … | … | |

The table must be kept consistent with robot PLC / higher-level system recipe mapping (see **Chapter 8.2**).

---

## 8.1.4 Tested capacity and conditions

| Parameter | Value |
|-----------|-------|
| Tested capacity (pcs/h) | Set by the user company |
| Capacity test conditions | Set by the user company |

The capacity test must be performed on the user site with **real parts** and the target cleanliness criteria. Test conditions must include at least:

1. Definition of part type and soiling degree
2. HMI temperature setpoints (wash, rinse, drying)
3. Active process functions (wash/rinse/drying on/off)
4. Robot infeed and outfeed cycle times
5. Accepted cleanliness/dryness criterion

Test results must be entered in the **Chapter 8.1.3** table.

---

## 8.1.5 Maximum continuous running

| Parameter | Value |
|-----------|-------|
| Maximum continuous running | **24/7** |

The machine is suitable for uninterrupted (**24/7**) running on a robot line. Continuous running remains valid as long as periodic maintenance (**Chapter 9**) and cleaning (**Chapter 10**) plans are followed. For long stops, tank emptying is done according to **Chapter 7.3.4**.

---

## 8.1.6 Factors affecting capacity

| Factor | Effect |
|--------|------|
| Robot infeed / outfeed speed | Directly determines line cycle time |
| Nominal machine cycle (900 s) | Transit time of a single part through the process tunnel; not the robot cycle |
| HMI temperature setpoints | Affect heating time (see **Chapter 6.3.3**) |
| Active process functions | Wash, rinse, drying 1/2, exhaust on/off |
| Part geometry and soiling degree | Effective wash quality and required contact time |
| Pump inlet valves | Closed valves reduce process yield |
| Filter condition | A clogged filter reduces pump flow and process quality (see **Chapters 9**, **10**) |

If a capacity drop is detected, first check robot cycle, recipe temperatures and filter condition (**See Chapter 11**).

---

For recipe configuration see **Chapter 8.2**.
