# 11.1 Fault finding

In fault diagnosis, first read the **active alarm code** on the HMI; then apply the check and remedy steps according to the table in this section. If the table has no solution or the fault repeats, see the relevant subsection (**11.3**–**11.7**) and the **Section 11.2.2** service criteria.

---

## 11.1.1 General diagnosis steps

1. If the machine has stopped, check the stack light colour — **red** alarm, **yellow** ready, **green** running (see **Section 3.4.10**).
2. Open the HMI **Alarm Page**; read the active alarm **No.**, **Text** and time information.
3. Find the code in the **11.1.2** PLC alarm table below.
4. Read the **Problem description** and **Possible cause** columns.
5. Apply the **Possible solution** steps; if alarm reset is required, apply the HMI and panel reset procedure.
6. If **Error-229** (emergency stop) is active, first apply the **Section 2.5** reset procedure; then **Section 7.3.2**.
7. If the problem continues, stop the machine, apply **LOTO** (**Section 2.4**) and go to the relevant subsection.

**Fault behaviour:** On safety and process-critical faults the machine stops (RFID cover, emergency stop, level low, motor protection trip). For **Error-235** (air pressure low), the machine may continue for a short time at moments with no instantaneous pneumatic consumption (see **Section 7.4.4**).

**Expected result:** The alarm is cleared; the stack light returns to yellow/green; the machine can be put into service safely.

---

## 11.1.2 PLC alarm list — problem and solution table

The following table is the complete list of **31 alarm** records defined in the PLC/HMI. Order and alarm texts are identical to the PLC definition. The **Problem description**, **Possible cause** and **Possible solution** columns are the manual diagnosis guide — verify on site.

| # | Code | PLC alarm text | Problem description | Possible cause | Possible solution | Competence |
|:-:|-----|-----------------|------------------|-------------|-------------|:---------:|
| 1 | Error-410 | Phase Sequence Fault | Three-phase supply phase sequence is wrong; phase-sequence relay has tripped. Motor direction may be wrong. | Reverse phase connection; phase loss; relay fault | Main switch **OFF**; check the phase-sequence relay; if required **swap two phases** — see **5.3.4**, **11.3.1**. Do not swap phases with power on. | Electrical |
| 2 | Error-422 | Cover Not Closed | Maintenance/safety cover is not detected closed; RFID sensor does not confirm the circuit. Machine does not start or stops. | Cover open; RFID tag alignment wrong; sensor/cable fault | Close the cover fully; check RFID alignment; do **not** bypass — see **2.4**, **11.7** | Maintenance |
| 3 | Error-229 | Emergency Stop Active | Emergency stop safety circuit is active; machine is locked for safety. | Emergency stop button pressed; safety relay open | Remove the hazard; release all emergency stops; **2.5** reset → **7.3.2** | Maintenance |
| 4 | Error-100 | Wash Pump Motor Fault | Wash pump motor protection circuit trip or drive fault. Wash step does not run. | Valve in front of pump closed; motor overload; jamming; thermal trip | Open the valve in front of the pump (**7.2.5**); motor/protection check with LOTO — see **11.3.2** | Maintenance / Electrical |
| 5 | Error-101 | Rinse Pump Motor Fault | Rinse pump motor protection trip. Rinse step does not run. | Valve in front of pump closed; motor overload; jamming; thermal trip | Open the valve in front of the pump; motor/protection check with LOTO — see **11.3.2** | Maintenance / Electrical |
| 6 | Error-111 | Drying Fan Motor Fault | 1st drying fan motor protection trip. Drying performance drops. | Fan jamming; motor protection trip; electrical fault | LOTO; fan freedom and protection circuit — see **11.3.2** | Maintenance / Electrical |
| 7 | Error-112 | Drying Fan Motor 2 Fault | 2nd drying fan motor protection trip. | Fan jamming; motor protection trip | LOTO; fan and protection circuit — see **11.3.2** | Maintenance / Electrical |
| 8 | Error-113 | Drying Fan Motor 3 Fault | 3rd drying fan motor protection trip. | Fan jamming; motor protection trip | LOTO; fan and protection circuit — see **11.3.2** | Maintenance / Electrical |
| 9 | Error-114 | Drying Fan Motor 4 Fault | 4th drying fan motor protection trip. | Fan jamming; motor protection trip | LOTO; fan and protection circuit — see **11.3.2** | Maintenance / Electrical |
| 10 | Error-110 | Exhaust Fan Motor Fault | Exhaust fan motor protection trip. Steam/moisture extraction may be insufficient. | Fan jamming; motor protection trip | LOTO; exhaust fan check — see **11.3.2** | Maintenance / Electrical |
| 11 | Error-130 | Oil Skimmer Motor Fault | Oil skimmer motor protection trip. Oil build-up on the tank surface may increase. | Motor jamming; excessive oil load; protection trip | LOTO; motor/gearbox check; oil film cleaning — see **10.1.4**, **11.3.2** | Maintenance / Electrical |
| 12 | Error-170 | Heater Residual Current F2 | Residual-current protection F2 trip on the wash tank heater circuit. Heating stops. | Heater insulation fault; moisture; heater damage | LOTO; F2 relay and heater insulation — see **11.3.3**; repeating trip → service | Electrical |
| 13 | Error-171 | Heater Residual Current F3 | Heater residual-current protection F3 trip. | Heater insulation fault; moisture | LOTO; F3 protection circuit — see **11.3.3** | Electrical |
| 14 | Error-172 | Heater Residual Current F4 | Heater residual-current protection F4 trip. | Heater insulation fault; moisture | LOTO; F4 protection circuit — see **11.3.3** | Electrical |
| 15 | Error-200 | Wash Tank Water Level Below Pump Level | Wash tank water level has fallen below pump suction level; dry-run risk. | Leak; insufficient fill; level sensor fault | Water/air pressure; fill valve; level sensor — see **11.5**, **11.7** | Maintenance |
| 16 | Error-201 | Wash Tank Water Level Insufficient | Wash tank below minimum level; process cannot continue. | Fill valve closed; air/water pressure low; valve fault | Open the automatic fill water valve; verify **6 bar** air + **1 bar** water; Error-300/301 — **11.5.2** | Maintenance |
| 17 | Error-150 | Wash Tank Temperature Low | Wash tank has not reached setpoint temperature; preparation may be incomplete. | Preparation still running; heater trip; recipe temperature too high | Wait for **Preparation Start** (**7.2.2**); if Error-170 trip is present, clear it; recipe check (**6.3**) | Maintenance |
| 18 | Error-202 | Rinse Tank Water Level Below Pump Level | Rinse tank water level is below pump suction level. | Leak; insufficient fill; level sensor fault | Water/air pressure; fill valve; level sensor — see **11.7** | Maintenance |
| 19 | Error-203 | Rinse Tank Water Level Insufficient | Rinse tank below minimum level. | Fill valve closed; pressure low; valve fault | Open the automatic fill valve; pressure check; Error-302/303 — **11.5.2** | Maintenance |
| 20 | Error-151 | Rinse Tank Temperature Low | Rinse tank has not reached setpoint temperature. | Preparation still running; heater trip; recipe setting | Wait for **Preparation Start**; if Error-171/172 trip is present, clear it; recipe check | Maintenance |
| 21 | Error-452 | Water Detected in Leakage Tray | Leakage tray sensor has detected water; tank/gasket leak or drain problem possible. | Tank/gasket leak; pipe connection leak; tray drain blocked | Find the leak source; gasket check; clean the tray drain — see **11.7** | Maintenance |
| 22 | Error-300 | Wash Automatic Fill Valve Could Not Open | Wash tank automatic fill valve did not open; tank does not fill. | No air pressure (**6 bar**); coil fault; mechanical jamming | Verify air pressure; valve coil/line — see **11.5.2** | Maintenance |
| 23 | Error-301 | Wash Automatic Fill Valve Could Not Close | Wash fill valve did not close; continuous fill or level control may be disrupted. | Coil fault; mechanical jamming; dirt/gasket | LOTO; valve cleaning or replacement — see **11.5.2** | Maintenance |
| 24 | Error-302 | Rinse Automatic Fill Valve Could Not Open | Rinse tank automatic fill valve did not open. | No air pressure; coil/mechanical fault | **6 bar** air; valve check — see **11.5.2** | Maintenance |
| 25 | Error-303 | Rinse Automatic Fill Valve Could Not Close | Rinse fill valve did not close. | Coil fault; mechanical jamming | LOTO; valve check — see **11.5.2** | Maintenance |
| 26 | Error-461 | Product Detected on Outfeed Conveyor. Confirm that the product has been removed to continue operation! | A part was detected on the outfeed conveyor; the machine does not continue until the robot takes it. | Robot did not take the part; sensor detection; part remained on the conveyor | Check the robot outfeed procedure; have the part taken; HMI **Product Received Confirm** (**3.4.6**) — line supervisor / maintenance | Line supervisor / Maintenance |
| 27 | Error-305 | Transfer Valve Could Not Close | Inter-tank transfer valve did not close. | Coil fault; mechanical jamming | LOTO; transfer valve check — see **11.5.2** | Maintenance |
| 28 | Error-236 | Inlet Water Pressure Low | Plant water inlet pressure below minimum (**1 bar**). Fill and process are affected. | Water valve closed; plant pressure low | Open the water valve; provide pressure above **1 bar**; HMI Manual Page (**3.4.5**) | Maintenance |
| 29 | Error-235 | Inlet Air Pressure Low | Plant air pressure below minimum (**6 bar**). Pneumatic valves do not operate. | Air line closed; regulator low; compressor insufficient | **6 bar** air connection; regulator; HMI Manual Page (**6.5**) | Maintenance |
| 30 | Error-460 | Servo Motor Fault | Conveyor servo motor/drive has reported a fault; the line stops. | Drive alarm; mechanical jamming; encoder/cable fault | LOTO; read the drive alarm code; mechanical freedom — **service** (**11.2.2**) | Electrical / Service |
| 31 | Error-304 | Transfer Valve Could Not Open | Inter-tank transfer valve did not open. | Air pressure low; coil/mechanical fault | **6 bar** air; transfer valve — see **11.5.2** | Maintenance |

> **Note:** This table is based on the PLC definition. Solution steps are a general diagnosis guide; **LOTO** (**2.4**) is mandatory before electrical panel intervention.

---

## 11.1.3 General fault table

The following table is a first diagnosis guide for symptoms that have no alarm code or are unclear.

| Symptom | Possible cause | Check | Solution |
|---------|-------------|---------|-------|
| Machine does not start | Active alarm; preparation incomplete; RFID cover; emergency stop | HMI Alarm Page; stack light; **7.2.5** checklist | Clear the active alarm; complete preparation; reset procedure (**2.5**, **7.3.2**) |
| Preparation does not complete / water does not fill | Automatic fill valve closed; air/water pressure low; valve fault | Water valve; **6 bar** air; HMI Manual Page | Open the valve; correct the pressure; Error-300/302 — see **11.5.2** |
| Temperature does not rise | Heater trip; recipe temperature; phase fault | Error-150/151/170–172; preparation status | Clear residual-current trip; recipe check (**6.3**, **8**); phase check (**5.3.4**) |
| Pump does not run, no alarm | Valve in front of pump closed; phase direction reversed | Valve position; pump direction | Open the valve; phase sequence — **5.3.4** |
| Repeating filter blockage | Oil/contamination high; filter interval exceeded | Filter condition; process water | **10.1.3**, **10.1.4** cleaning; oil skimmer check |
| Robot line stopping, machine green | Error-461; robot interface | Outfeed conveyor sensor; robot program | Have the part taken; HMI confirm — **3.4.6** |

---

Electrical details **11.3**; pneumatic **11.5**; sensor **11.7**.
