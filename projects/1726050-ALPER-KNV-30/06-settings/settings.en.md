# 6. SETTINGS

This chapter defines the **OEM (manufacturer) setting parameters** that operators and maintenance personnel may change after commissioning of the **KNV 30 3000 2B** machine (**See Chapter 5**). Settings are required for process quality, continuity of safety functions and configuration of machine behaviour via the HMI.

**Intended audience:** Line supervisor (HMI setpoints), maintenance personnel (pneumatic regulator, periodic safety test), manufacturer service (PLC/encoder). The PLC program, encoder/feedback and embedded drive parameters must be changed only by **manufacturer authorised service**.

| Subsection | Topic |
|-------|--------|
| **6.1** | Mechanical settings — reference position; no adjustment required |
| **6.2** | Safety settings — bypass prohibition, emergency-stop test interval |
| **6.3** | Electrical / HMI settings — temperature, oil skimmer, date/time/language |
| **6.4** | Hydraulic settings — no system |
| **6.5** | Pneumatic settings — regulator 6 bar |
| **6.6** | Vacuum settings — no system |
| **6.7** | Other settings — no additional points |

## General rules

| Topic | Rule | Reference |
|------|-------|----------|
| Encoder / feedback | Set by manufacturer service | Chapter 6.3.2 |
| Temperature / oil skimmer | HMI Settings Page | Chapters 6.3.3, 3.4.4 |
| Compressed air | Regulator **6 bar** | Chapters 6.5, 3.3.5 |
| Emergency-stop test | **Once a month** | Chapter 6.2.3 → 5.4.1 |
| Maintenance covers | Bypass prohibited; LOTO mandatory | Chapter 2.4 |

Stop the machine before changing parameters; make settings in the preparation phase or in the stop state if possible. Daily start/stop and process selection are described in **Chapter 7**; this chapter focuses on permanent/installation settings.

![HMI settings page](../assets/6.0/1.png)

---

For operation procedures see **Chapter 7**; for periodic maintenance see **Chapter 9**.
