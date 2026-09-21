# 3.4 Machine controls

Operational control of the machine is performed via the **HMI operator panel** on the electrical cabinet and the **Siemens S7-1200 PLC** infrastructure. The operator selects process functions, prepares the machine, gives start/stop commands and monitors alarm states via HMI. The tower light visualises the instantaneous status of the machine from a distance; detailed safety functions are explained in **Chapter 2**, troubleshooting in **Chapter 11**.

This chapter describes the structure of the HMI screens, the menu layout and the function of each page. Screen images are taken from the **SIMATIC HMI KTP700 Basic PN** interface belonging to this project.

---

## 3.4.1 Control cabinet — general structure

| Parameter | Value |
|-----------|-------|
| Main control-cabinet location | On the electrical cabinet |
| Cabinet protection rating (IP) | IP55 |
| Cabinet dimensions (W × H × D) | 800 × 1200 × 300 mm |
| Main-switch location | On the electrical cabinet |
| HMI screen size | 7" |
| HMI brand / model | SIMATIC HMI KTP700 Basic PN (6AV2123-2GB03-0AX0) |

The electrical cabinet houses power distribution, motor protection, PLC, HMI, emergency-stop reset circuit and tower-light drivers. Supply voltage, main-switch value and installed power are given in **Chapter 3.3.3** — Electrical specifications table.

---

## 3.4.2 HMI start screen and menu structure

When HMI starts, the splash screen is displayed. This screen contains the machine model (**KNV 30 3000**), serial number (**1726050**) and installed power (**50 kW**). Interface language is selected with the flag icons in the upper-right corner: **Turkish**, **English**, **German**.

The main-menu structure is presented with four page buttons in the left sidebar; all pages are accessible **without password**:

| Menu button | Function |
|--------------|-------|
| **Operating Page** | Daily operation, preparation, start/stop, process-function selection |
| **Settings Page** | Temperature setpoints, oil-skimmer times |
| **Alarm Page** | Active and historical alarm records |
| **Manual Page** | Input-signal monitoring, manual function triggering, air/water status |

There is **no** password level on the HMI. The installation/manufacturer internal page is outside the scope of the operator manual; it is not defined in this manual.

Date/time information is shown continuously in the upper-left corner; it may need to be updated via the settings page or system parameters (see Chapter 6.3 — Electrical settings).

![HMI start screen](../../assets/3.4/tr1.jpg)

---

## 3.4.3 Operating page

The **Operating Page** is the primary operator interface for normal automatic operation of the machine. This page collects temperature status of process zones, preparation/start/stop commands and process-function selections.

**Temperature-monitoring blocks** (upper section):

| Block | Displayed values |
|------|---------------------|
| Wash | Setpoint and actual temperature (°C) |
| Rinse | Setpoint and actual temperature (°C) |
| Drying | Setpoint 1, actual value 1 and actual value 2 (°C) |

**Operation buttons** (middle section):

1. **Preparation Start** — starts the tank-fill and heating procedure (see Chapter 7.2 — Starting).
2. **Machine Stop** — stops conveyor, pumps, fans and all functions.
3. **Machine Start** — starts the automatic process after preparation is complete.

**Process-function selectors** (lower right): Wash, Rinse, Drying 1, Drying 2 and Exhaust toggle switches; the process is configured by setting the required functions to the **green** (active) position. There is no manual mode; function selection is performed via this page (see Chapter 7.1 — Operating modes).

![HMI operating page](../../assets/3.4/tr2.jpg)

---

## 3.4.4 Settings page

The **Settings Page** is used for definition of process setpoints by the operator. Changes on this page are transferred to the PLC program; it is recommended that the machine is stopped or in the preparation stage.

| Parameter block | Set value |
|-----------------|-----------------|
| Wash temperature | Setpoint (°C) |
| Rinse temperature | Setpoint (°C) |
| Drying | Setpoint 1 (°C) |
| Oil skimmer | Running time (min) and waiting time (min) |

Temperature limits shall be kept within machine design limits for process safety and part-material compatibility. Date/time and language settings can also be made via the HMI settings infrastructure (see Chapter 6.3).

Encoder / feedback and analogue-scaling settings are embedded in the PLC program; changes shall be made only by manufacturer authorised service.

![HMI settings page](../../assets/3.4/tr3.jpg)

---

## 3.4.5 Manual page

The **Manual Page** consists of two sections: **Input Observation** (input-signal monitoring) and **Manual Control** (function triggering for maintenance/test).

The following signals are monitored in real time on the **Input Observation** panel (red/green indicator):

- Emergency-stop circuit status
- Phase-sequence relay
- RFID cover switch
- Pump, fan and oil-skimmer thermal-overload states
- Heater residual-current protection (F2, F3, F4)
- Wash- and rinse-tank low/high level sensors
- Drip-tray sensor
- Fill-valve and transfer (cascade) valve positions
- Product remaining sensor
- **Water status** and **air status** (connection status — green = OK)

In installation tests, these indicators are expected to light **green** after water and air connections are made (see Chapter 5.5 — Pneumatic fill test).

There is **no** password level on the HMI; Operating, Settings, Alarm and Manual pages are accessed without password. **Manual Control** buttons can run pumps, fans and valves individually. The employer limits HMI access to authorised maintenance personnel; unauthorised use is prohibited. **LOTO** shall be applied for interventions requiring energy isolation (see Chapter 2.4). Manual buttons: wash pump, rinse pump, drying fans 1–4, exhaust, wash/rinse fill valves, cascade valve.

![HMI manual page](../../assets/3.4/tr4.jpg)

---

## 3.4.6 Alarm page

The **Alarm Page** lists active and historical alarm records in table format. Table columns: **No.**, **Time**, **Date**, **Text**.

When an alarm occurs, HMI displays a record on this page; simultaneously the tower light lights **red**. The line supervisor or maintenance personnel reads the alarm text and determines intervention priority; detailed error-code explanations and troubleshooting steps are given in **Chapter 11** — Troubleshooting table.

The **Product Received Confirm** button is at the bottom corner of the page. When a part is detected on the outfeed conveyor (Error-461) the machine stops; after the part has been taken by the robot, the line supervisor or maintenance personnel presses this button to continue operation.

![HMI alarm page](../../assets/3.4/tr5.jpg)

---

## 3.4.7 PLC and communication infrastructure

| Parameter | Value |
|-----------|-------|
| PLC brand / model | SIEMENS SIMATIC S7-1200 |
| PLC CPU | S7-1200 CPU 1215C DC/DC/DC (6ES7215-1AG40-0XB0) |
| I/O module summary | 36 inputs / 24 outputs |
| Fieldbus / protocol | Profinet |

The PLC manages process logic, safety interlocks (RFID, emergency stop, level, thermal) and HMI data exchange. The I/O list is not delivered as a separate document; it can be requested from the manufacturer if required (see **Chapter 13.1.3**).

**CAUTION — Unauthorised intervention:** PLC program, drive parameters and embedded encoder/feedback settings shall be changed only by manufacturer authorised service. Unauthorised software changes can disable safety functions.

---

## 3.4.8 Operating modes and Start/Stop

| Parameter | Value |
|-----------|-------|
| Mode selector | None — single automatic operation |
| Manual drive mode | None (HMI **Manual Page** is for maintenance/test; no password, unauthorised use prohibited) |
| Step / single-step mode | Not provided |
| Mode-change conditions | Not applicable |
| Jog / inching buttons | Not provided |
| Start / Stop location | HMI operating page — digital buttons |

**Automatic operation:** Process functions are selected on the HMI operating page; after preparation is complete the machine runs by itself with **Machine Start** (see Chapter 7.1).

**Maintenance:** There is no dedicated HMI mode for maintenance. Before maintenance the machine shall be stopped, the main switch shall be turned off and the **LOTO procedure** shall be applied (see Chapter 2.4). Covers shall be opened only after energy isolation.

---

## 3.4.9 Emergency stop

The machine has **4 emergency-stop buttons** (cabinet, infeed right, infeed left, outfeed left). When emergency stop is pressed, all functions stop.

The reset procedure, restart conditions after emergency stop and operator obligations are given in **Chapter 2.5** — Emergency-stop system; steps are not repeated in this chapter.

---

## 3.4.10 Tower light (signal lamps)

| Colour | Meaning | Operator interpretation |
|------|-------|-----------------|
| Red | Alarm | Check the HMI alarm page; intervention may be required (see Chapter 11) |
| Yellow | Machine ready for use | Preparation complete; start can be given |
| Green | Machine running | Normal operation continues |

The tower light enables the operator side to monitor line status without looking directly at the machine. Colour coding is compatible with industrial standard practice; in an alarm situation both lamp and HMI give information simultaneously.

---

## 3.4.11 Recipe

| Function | Behaviour |
|-----------|----------|
| Recipe / program record | There is no recipe limit |

Recipe parameters (temperature setpoints, process on/off steps) are defined via the HMI settings and operating pages. Capacity and product-based recipe details are determined by the user company (see Chapter 8.2).

---

For electrical supply values see **Chapter 3.3.3**; for process start/stop procedures see **Chapter 7**; for alarm codes see **Chapter 11**.
