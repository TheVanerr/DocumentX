# 9.1 Maintenance instructions

---

## 9.1.1 Maintenance philosophy and personnel

Preventive maintenance is applied for the KNV 30 3000 2B. The purpose is to prevent filter blockage, oil build-up, weakening of safety functions and pump/fan failures by planned intervention, and to reduce unplanned line downtime.

| Parameter | Value |
|-----------|-------|
| Maintenance philosophy | Preventive maintenance |
| Personnel qualification | The maintenance personnel qualification level applicable in the country of use |
| Lubrication table | 4 conveyor grease nipples + WITTENSTEIN gearbox (Section 9.1.4) |

Maintenance personnel must be trained in machine operation, LOTO, emergency stop and basic safety rules (see **Section 3.2.6**). Electrical connection tightness checks are performed only by **authorised electrical personnel**.

---

## 9.1.2 Safety before maintenance

There is **no** dedicated HMI maintenance mode. Comply with the following rules:

1. Stop the machine with HMI **Machine Stop**.
2. Set the main switch to **OFF (0)**.
3. Apply the **LOTO procedure** (**See Section 2.4** — steps are not repeated).
4. Do **not bypass** the RFID / safety sensor.
5. Open covers only after energy isolation and LOTO.

Maintenance access is provided through the **removable covers at the rear** of the machine (see **Section 3.5.3**). The minimum rear clearance must be **1000 mm**.

**WARNING — Injury from energy sources:** If maintenance is performed without LOTO, the machine may start accidentally; crushing, electric shock and hot-liquid injury may occur.

---

## 9.1.3 Periodic maintenance schedule

The following table is the periodic maintenance schedule. Cleaning steps refer to the relevant section; procedure steps are not repeated.

Hour-based intervals are tracked against total machine operating hours; if there is no counter, an approximate calendar equivalent may be used (250 hours ≈ 3–4 weeks of continuous 24/7 operation).

| Interval | Maintenance item | Reference |
|---------|---------------|----------|
| **Daily** | General visual check — leaks, abnormal noise, alarm/stack light | — |
| **Daily** | Wash tank pre-filter cleaning | Section 10.1.3 |
| **Daily** | HMI alarm history; clearing of active alarms | Section 11 |
| **Daily** | Water/air pressure (HMI Manual Page) | Section 7.2 |
| **Daily** | Outfeed conveyor jamming / part accumulation check | — |
| **Weekly** | Tank internal filter cleaning | Section 10.1.4 |
| **Weekly** | Pump outlet bag filter cleaning/replacement | Section 10.1.4 |
| **Weekly** | Oil skimmer and tank surface — excessive oil film | — |
| **Weekly** | Conveyor chain/belt tension and alignment — visual | — |
| **Weekly** | RFID / cover safety short test | Section 5.4.2 |
| **Weekly** | Emergency stop buttons visual check | Section 2.5 |
| **Monthly** | Emergency stop function test | Section 6.2.3, 5.4.1 |
| **Monthly** | Conveyor 4 lubrication point greasing | Section 9.1.4 |
| **Monthly** | Level sensors and leakage tray cleaning/check | — |
| **Monthly** | Panel filter/ventilation dust check | — |
| **Monthly** | Pump and fan abnormal vibration/noise check | — |
| **250 hours** | Automatic fill and transfer valve test | — |
| **250 hours** | Heater thermocouple/heater element connection check (after LOTO) | — |
| **250 hours** | Proximity sensor cleaning and mounting tightness | — |
| **250 hours** | Exhaust and drying fan dust accumulation cleaning | — |
| **500 hours** | Oil skimmer gearbox oil seal/PTFE check/replacement | Section 13.3 |
| **500 hours** | Conveyor gearbox seal / leak visual check (lifetime lubricated) | Section 9.1.4 |
| **500 hours** | Tank and cover gasket check | — |
| **500 hours** | Pneumatic regulator and connection leak check | Section 6.5 |
| **1000 hours** | Pump suction filter check/replacement | Section 13.3 |
| **1000 hours** | Nozzle blockage/wear check | Section 13.3 |
| **1000 hours** | Servo/conveyor drive group mechanical/electrical check | — |
| **1000 hours** | Tank water quality; full drain/cleaning if required | Section 10 |
| **Annual** | Safety function test report (RFID, emergency stop, residual current) | Section 2, 5.4 |
| **Annual** | Heater element and thermocouple function check | — |
| **Annual** | Gearbox leak check (WITTENSTEIN — lifetime lubricated, no change) | Section 9.1.4 |
| **Annual** | Electrical connection tightness check (LOTO, authorised electrician) | — |
| **Annual** | If a long shutdown is planned, tank drain/protective cleaning | Section 7.3.4 |

### Periodic maintenance application notes

**Daily:** LOTO is not required for visual check, HMI alarm and pressure indication if covers are not opened. **Pre-filter cleaning requires opening a cover** — apply **Section 10.1.3** and **LOTO (Section 2.4)**.

**Weekly / monthly:** Stop the machine for tank and filter work; **LOTO is mandatory** for work that requires opening covers.

**250–1000 hours:** Apply **LOTO** for items that require mechanical/electrical intervention. Use authorised personnel for thermocouple, heater element and electrical tightness checks.

**Annual:** Record the safety test report; do not return to operation while items are NOK.

---

## 9.1.4 Lubrication

| Parameter | Value |
|-----------|-------|
| Number of lubrication points | **4** conveyor grease nipples |
| Location | **2** at conveyor **infeed**, **2** at **outfeed** |
| Interval | **Monthly** (see Section 9.1.3) |
| Grease type | **Castrol Tribol GR 100-1 PD** (NLGI 1, lithium soap) |
| Conveyor gearbox | **WITTENSTEIN NP035S-MF2-30-1G1-1S** — manufacturer **lifetime lubricated**; fill **Castrol Tribol GR 100-1 PD**. There is **no** periodic oil change. |

The conveyor gearbox is a WITTENSTEIN alpha NP series unit. According to the manufacturer manual, the housing is factory-filled with synthetic high-performance grease and is **lifetime lubricated**; the label example shows **Castrol Tribol GR 100-1 PD**. Do not open the housing, do not add oil, and do not apply an annual oil change. If there is a leak or seal damage, call manufacturer service.

The four grease nipples are conveyor infeed/outfeed bearing lines, not the gearbox housing. The same grease family (**Castrol Tribol GR 100-1 PD**) is used.

### Conveyor greasing procedure

1. Stop the machine with HMI **Machine Stop**.
2. Apply **LOTO** (**Section 2.4**).
3. Identify the **4 lubrication points** on the conveyor infeed and outfeed sides.
4. Apply **Castrol Tribol GR 100-1 PD** to each grease nipple; excess grease must not drip onto the conveyor line or into process water.
5. Do not open the WITTENSTEIN gearbox housing; do not turn the conveyor by hand.
6. Close the covers; remove LOTO; perform a short test run with guards in place.

**Annual:** **Visual** check of the WITTENSTEIN gearbox housing, seals and leakage. There is no oil change. If there is a leak, stop the machine and call manufacturer service.

---

## 9.1.5 Critical parts list

**Critical** parts directly affect the machine process, part flow or **safety function** in the event of failure. Items with stock **0 (on order)** are obtained from the manufacturer/service in an emergency; lead-time planning is the user's responsibility.

For the full BOM see **Section 13.3.1**.

| Order code | Part name | Recommended stock | Location / function | Rationale |
|--------------|-----------|---------------|-------------------|---------|
| 10 02976 | TERMOKUPL ETB30F06-5Ç | 1 | Tank heating | Temperature control/heating is disabled on failure |
| 07 15142 | REZİSTANS KOMPLESİ 8000W 50CM DÜZ DİKİŞSİZ | 2 | Tank heating | Process temperature cannot be maintained on failure |
| 07 16791 | SEVİYE SENSÖRÜ ÇAT.TİP VEGASWING 51 DİŞ ÇEKİLMİŞ | 0 (on order) | Tank level | Fill/level control is disrupted on failure |
| 10 00586 | REDÜKTÖR MOTORU 0,09KW 1500D/D B14 SIYIRICI | 0 (on order) | Oil skimmer | Oil skimmer does not run on failure |
| 10 00296 | PASLANMAZ SEVİYE BEKÇİSİ | 0 (on order) | Tank level | Level safety/control |
| 10 19321 | REDÜKTÖR WITTENSTEIN NP035S-MF2-30-1G1-1S | 0 (on order) | Conveyor drive | Conveyor stops on failure |
| 10 19317 | SERVO MOTOR SIEMENS SIMOTICS 1FL6064-1AC61-2AA1 | 0 (on order) | Conveyor | Part flow stops on failure |
| 10 19318 | SERVO SÜRÜCÜ SIEMENS 6SL3210-5FE11-5UF0 | 0 (on order) | Conveyor | Part flow stops on failure |
| 10 07147 | SWITCH F3STGRNLPU21M1J8 OMRON MANYETİK KAPI | 1 | RFID cover safety sensor | Safety function is affected on failure |
| 07 17478 | KNV 30 3000 2B PRO IDE GOULDS POMPA KOMPLESİ | 0 (on order) | Rinse pump | Rinse process stops on failure |
| 10 06675 | POMPA LOWARA ESHE 40-160/30 380V/50HZ | 0 (on order) | Wash pump | Wash process stops on failure |

---

## 9.1.6 Spare parts list (consumable and recommended)

**Consumable** parts are replaced or cleaned regularly during planned maintenance. **Recommended** parts shorten downtime when stocked. Recommended stock quantities may be updated according to the plant stock policy; they are not a mandatory order commitment. For the full BOM see **Section 13.3.1**.

| Order code | Part name | Category | Recommended stock | Location / function | Rationale |
|--------------|-----------|----------|---------------|-------------------|---------|
| 07 10214 | ÖN FİLTRE NS KOMPLESİ | Consumable | 2 | Wash tank | Daily cleaning; consumable |
| 07 00670 | EMİŞ FİLTRESİ KOMPLESİ (PYM2,KBN,VDL,ULT,KNV) | Consumable | 2 | Pump suction line | Periodic replacement (1000 hours) |
| 10 03088 | NOZZLE 632.724.16.CC | Consumable | 32 | Wash/rinse nozzle | Wear part |
| 07 03497 | YAĞ SIYIRICI TEFLONU | Consumable | 1 | Oil skimmer | 500-hour maintenance consumable |
| 10 02526 | YAĞ KEÇESİ 20*42*7 | Consumable | 1 | Oil skimmer gearbox | Maintenance consumable |
| 10 01017 | RULMAN 6004 2RS ORS | Consumable | 1 | Oil skimmer / general | Maintenance consumable |
| 10 05378 | TORBA FİLTRE 200 MİKRON (50CM PASL. TEL ÇERÇEVE) | Consumable | 2 | Pump outlet | Weekly cleaning; replace if required |
| 10 19471 | SENSÖR E2BM12KN08M1B1 OMRON END.PROX.M12 8MM | Recommended | 1 | Proximity sensor | Position detection |
| 10 17815 | SENSÖR E3FA-DP23 OMRON END.PROX.M18 1000MM | Recommended | 1 | Proximity sensor | Position detection |
| 07 17295 | SALYANGOZLU FAN ENA 2 0,37 KW HAVA SO.SİLİKONLU | Recommended | 0 (on order) | Exhaust | Exhaust/ventilation is affected on failure |
| 10 01002 | REDÜKTÖR EN:30 I:80 B:05 | Recommended | 0 (on order) | Oil skimmer drive | Together with the motor |

**Ordering:** Obtain from the manufacturer/service channel using the order code. For critical parts see **Section 9.1.5**. All items (22) are in **Section 13.3.1**.

---

## 9.1.7 Maintenance record form

Record periodic maintenance and test results. Do not return to operation until NOK items are cleared.

| # | Operation | Interval | Date | Performed by | OK/NOK |
|---|-------|---------|-------|-------|:------:|
| 1 | Daily check items | Daily | | | ☐ |
| 2 | Weekly filter / safety items | Weekly | | | ☐ |
| 3 | Monthly emergency stop test | Monthly | | | ☐ |
| 4 | Conveyor lubrication (4 points) | Monthly | | | ☐ |
| 5 | 250 / 500 / 1000 hour maintenance (relevant item) | Hours | | | ☐ |
| 6 | Annual safety test report | Annual | | | ☐ |
| 7 | Filter/tank cleaning | See Section 10 | | | ☐ |

**Approved by:** _______________ **Date:** _______________

---

For the full parts list and illustrations see **Section 13.3**.
