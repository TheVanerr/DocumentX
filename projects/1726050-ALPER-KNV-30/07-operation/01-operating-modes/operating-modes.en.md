# 7.1 Operating modes

The KNV 30 3000 2B runs **fully automatic**; there is no separate manual drive, step or maintenance mode. The line supervisor selects process functions and gives preparation and start/stop commands on the HMI **Operating Page**. Function selection uses toggle (on/off) logic; when the machine is started, the selected functions are coordinated automatically according to the PLC program.

There is no dedicated HMI mode for maintenance interventions; cover opening and mechanical/electrical work are done with **LOTO** (see **Chapter 2.4**). The HMI **Manual Page** is password-free; single-function testing is used only by authorised maintenance personnel under employer control (see **Chapter 3.4.5**).

---

## 7.1.1 Manual mode

| Parameter | Value |
|-----------|-------|
| Manual mode | **Not provided** |

There is no continuous manual drive mode. Wash, rinse, drying 1, drying 2 and exhaust options on the HMI Operating Page are for process configuration; when the machine is started, the selected functions run in the automatic sequence.

---

## 7.1.2 Automatic mode

The machine runs automatically by default. Line-supervisor flow:

1. Set the required process functions to **active** (green) on the HMI **Operating Page**.
2. Complete tank filling and heating with **Preparation Start** (see **Chapter 7.2**).
3. When the tower lamp is **yellow** (ready for use), give **Machine Start**.
4. The conveyor and selected pumps/fans start automatically; parts pass through the process zones along the line.

Robot infeed/outfeed is synchronised by the higher-level line; the machine PLC monitors part presence with sensors.

![HMI process options](../../assets/7.1/1.png)

---

## 7.1.3 Maintenance / setup mode

| Parameter | Value |
|-----------|-------|
| Maintenance / setup mode | **Not provided** |

For maintenance the machine must be stopped, the main switch switched off and the **LOTO procedure** applied (see **Chapter 2.4**). Covers must be opened only after energy isolation. The RFID safety sensor must not be bypassed.

---

## 7.1.4 Step / single-step mode

| Parameter | Value |
|-----------|-------|
| Step / single-step mode | **Not provided** |

---

## 7.1.5 Mode change conditions

| Parameter | Value |
|-----------|-------|
| Mode change conditions | **Not provided** |

There is a single mode (automatic); a mode-change procedure is not applied.

---

## 7.1.6 HMI process options summary

| Option | Function | Operator note |
|---------|-------|---------------|
| Wash | On / Off | Wash-bath pump and heating circuit |
| Rinse | On / Off | Rinse-bath pump and heating circuit |
| Drying 1 | On / Off | Drying fan group 1 |
| Drying 2 | On / Off | Drying fan group 2 |
| Exhaust | On / Off | Moisture extraction from the drying zone |

Functions can be switched independently according to process need; whether at least one process step is active for line quality depends on the user’s process design. Temperature setpoints are made from the HMI Settings Page defined in **Chapter 6.3.3**.

---

For the start procedure see **Chapter 7.2**.
