# 3.1 Machine description

**KNV 30 3000 2B** is an automatic parts washing machine in which industrial parts are conveyed on a conveyor through wash, rinse and drying processes. The machine has an integrated line structure consisting of wash and rinse baths, a drying zone and a parts-transport conveyor.

Conveyor flow direction is **left feed / right discharge**. Access to the operator panel (HMI) and daily intervention points is on the **right side of the machine**. In this project, part infeed and outfeed are integrated with a **robot line**; loading and unloading procedures belong to the customer line (**See Chapter 3.1.9**).

The machine body is manufactured from stainless steel. Process tanks operate with hot water; the drying zone has air-knife units and exhaust equipment, and the wash tank has an oil-skimmer unit. Component arrangements and process flow are detailed in the subsections below.

---

## 3.1.1 General view and process flow

The machine consists of three main process zones along the line: **wash**, **rinse** and **drying**. Parts are taken onto the conveyor from the left, pass through the process zones in sequence and exit from the right.

![KNV-30 3000 2B general view](../../assets/3.1/1.png)

Nominal process cycle time is defined as **900 seconds** (15 minutes) (see **Chapter 3.3.2**). Conveyor drive is by **servo motor**; part flow operates in synchronisation with the robot line.

![Process flow — wash, rinse, drying](../../assets/3.1/2.png)

---

## 3.1.2 Conveyor and part transport

The conveyor line transports parts between process zones. Feed is **left**, discharge is **right**. The conveyor gearbox motor is a **1.5 kW** Siemens SIMOTICS servo-driven system (see **Chapter 3.3.4**).

In robot integration, part infeed and outfeed are subject to the customer-line procedure. When a part is detected on the outfeed conveyor the machine stops; after the robot has taken the part, operation continues with HMI **Product Received Confirm** (see **Chapter 3.4.6**, **11.1.2** Error-461).

![Conveyor infeed-outfeed view](../../assets/3.1/3.png)

---

## 3.1.3 Wash bath

The wash zone is the tank system in which parts are washed with hot process water and nozzles. The wash pump is **Lowara ESHE 40-160/30**, **3 kW**, **380 V** (see **Chapter 3.3.4**).

Inside the tank there are a **pre-filter**, an **internal filter** and an **oil skimmer**. Daily pre-filter cleaning is defined in **Chapter 10.1.3**. The manual valve ahead of the pump must be **open** before start (see **Chapter 7.2.5**).

![Wash bath general view](../../assets/3.1/4.png)

---

## 3.1.4 Rinse bath

The rinse zone is the tank system in which process water remaining on the part surface after wash is removed with rinse water. The rinse pump is **Goulds GCEA 370/3**, **1.85 kW** (see **Chapter 3.3.4**).

Rinse-tank level control, automatic fill valve and heating system operate with similar logic to the wash tank. Weekly filter cleaning is subject to **Chapter 10.1.4**.

![Rinse bath general view](../../assets/3.1/5.png)

---

## 3.1.5 Oil skimmer

The oil skimmer collects the oil layer accumulated on the wash-tank surface and reduces the oil load of the process water. The gearbox motor is a **0.04 kW**, **1340 rpm** FINEX-driven unit (see **Chapter 3.3.4**).

Excessive oil accumulation can lead to filter blockage and a drop in process performance. Periodic maintenance is performed according to the **Chapter 9.1.3** calendar.

![Oil-skimmer unit](../../assets/3.1/6.png)

---

## 3.1.6 Drying and exhaust

In the drying zone, **4 drying air knives** (drying-fan units, each **4 kW**) remove moisture from the part surface. The **exhaust fan** (**0.37 kW**) supports steam and moisture extraction (see **Chapter 3.3.4**).

Because conveyor flow direction is **left infeed → right outfeed**, the layout of the drying equipment is as follows:

| Component | Location (along the conveyor) |
|---------|---------------------------|
| **Exhaust fan** | **Conveyor infeed** side (left) |
| **Drying air knives** (4 units) | **Conveyor outfeed** side (right) |

After rinsing, the part first passes through the exhaust zone on the infeed side; the drying air knives apply final drying on the outfeed side.

The drying fans are model **Ölçükontrol OK 710K37** (4 × **4 kW**, **2940 rpm**). The drying function can be made active/passive from HMI with the process selector (see **Chapter 7.1.6**).

Dust accumulation in drying fans and exhaust ducts reduces air performance; it is included in the periodic maintenance calendar (see **Chapter 9.1.3**).

![Drying and exhaust zone](../../assets/3.1/7.jpg)

---

## 3.1.7 Electrical, control and automation infrastructure

The electrical and automation infrastructure of the machine is collected on the central **electrical cabinet**. Cabinet protection rating is **IP55**, dimensions **800 × 1200 × 300 mm** (W × H × D).

Supply voltage, installed power, main-switch values and the motor list are given in **Chapter 3.3** — Technical specifications subsections; tables are not repeated in this chapter. Summary:

- Supply: **380 V**, **50 Hz**, **3-phase**, **3P+N+PE**
- Total installed power: **50 kW** (including heating)
- Main switch: **100 A**, Schneider

The automation architecture is built on a **Siemens SIMATIC S7-1200** PLC (CPU 1215C) and a **SIMATIC HMI KTP700 Basic PN** (7") operator panel. Start/stop, alarm management, process-function selection, language setting and parameter access are performed via the HMI interface. Locations of control elements, signal-lamp meanings and screen behaviour are detailed in **Chapter 3.4** — Machine controls.

Tower-light colour coding enables the operator to monitor machine status from a distance: **red** alarm, **yellow** ready for use, **green** running. In an alarm situation the HMI alarm screen is activated; simultaneously the tower light lights red.

The machine is ready for higher-level system integration via the **Profinet** protocol. The HMI interface has **Turkish, English and German** language support.

---

## 3.1.8 Emergency stop and safety equipment

The machine has **4 emergency-stop buttons**:

1. On the electrical cabinet
2. On the right of the conveyor at machine infeed
3. On the left of the conveyor at machine infeed
4. On the left of the conveyor at machine outfeed

When emergency stop is pressed, **every function** on the machine stops. The recommissioning procedure, reset steps and machine behaviour after emergency stop are given in **Chapter 2.5** — Emergency-stop system; steps are not repeated in this chapter.

The number of safety doors / fixed barriers is zero; maintenance covers are monitored by an **RFID safety sensor**. When a cover is opened the RFID switch stops the machine. The machine safety category is **Cat. 3** (EN ISO 13849-1; see **Chapter 2.1.3**). There is no light curtain.

During maintenance the RFID safety sensor must not be bypassed; energy isolation and the **LOTO** procedure must be applied before a cover is opened (see **Chapter 2.4**).

---

## 3.1.9 Line integration and communication

Within this project, part **infeed** and **outfeed** operations are performed by robot; infeed/outfeed procedures belong to the customer line. There is no standing operator on the machine; in a fault situation intervention is performed by maintenance personnel (see **Chapter 11**).

Higher-level system (MES / SCADA) connection is made **by the customer**. The machine is ready for integration with **Profinet** infrastructure; protocol, I/O summary and documentation are defined in **Chapter 5.6**. The list of delivered external documents is in **Chapter 13.1**.
---

For intended-use limits see **Chapter 3.2**; for technical tables see **Chapter 3.3**; for control elements see **Chapter 3.4**; for the layout see **Chapter 3.5**.
