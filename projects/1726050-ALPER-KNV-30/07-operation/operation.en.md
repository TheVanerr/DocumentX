# 7. OPERATION

Daily starting, stopping and the automatic process sequence of the **KNV 30 3000 2B** (serial no. **1726050**) machine are defined in this chapter. The machine is designed **fully automatic**; part infeed and outfeed are by **robot**, and the line is integrated for **24/7** operation. There is no continuous shift operator. HMI preparation / start / stop and Error-461 **Product Received Confirm** are given by the line supervisor or maintenance personnel; process monitoring can be performed by the higher-level system (MES/SCADA — customer) or by a periodic maintenance round. Mechanical/electrical fault intervention is performed by **maintenance personnel**.

Process flow: **Wash → Rinse → Dry**. Nominal cycle time **900 seconds** (15 minutes). Start/stop and process selection are made on the **HMI Operating Page** (see **Chapter 3.4.3**). Permanent parameter settings are in **Chapter 6**; installation and first commissioning are in **Chapter 5**.

| Parameter | Value |
|-----------|-------|
| Operating mode | 24/7 automatic — robot infeed/outfeed |
| Line supervisor | HMI start/stop, preparation, Error-461 confirm (no continuous shift) |
| Preparation | HMI **Preparation Start** (tank filling + heating) |
| Start / Stop | HMI digital buttons |
| HMI languages | Turkish, English, German |

| Subsection | Topic |
|-------|--------|
| **7.1** | Operating modes and HMI process options |
| **7.2** | Machine start — preparation, start, pre-checks |
| **7.3** | Machine stop — normal stop, emergency stop, long-term shutdown |
| **7.4** | Automatic operation sequence — cycle, robot, fault behaviour |
| **7.5** | Operation chronology — 24/7 line |
| **7.6** | Other operation topics |

## Tower lamp — operator interpretation

| Lamp | Meaning | Action |
|-------|-------|-------|
| Yellow | Ready for use | Start may be given |
| Green | Running | Normal operation |
| Red | Alarm | HMI alarm page — see **Chapter 11** |

Detailed lamp definitions are given in **Chapter 3.4.10**.

![HMI operating page](../assets/7.0/1.png)

---

For troubleshooting see **Chapter 11**; for cleaning see **Chapter 10**.
