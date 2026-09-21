# 11.3 Electrical faults

For electrical faults, apply **LOTO** before intervention inside the panel (**Section 2.4**). Supply values are given in the **Section 3.3.3** table.

---

## 11.3.1 Phase and emergency stop

| Alarm | Topic | Reference |
|-------|------|----------|
| Error-410 | Phase sequence fault | **Section 5.3.4**, **6.3** |
| Error-229 | Emergency stop active | **Section 2.5**, **7.3.2** |

### Error-410 — Phase sequence fault

Reverse phase connection can cause pumps and fans to run in reverse, process faults and motor protection trip.

1. Stop the machine; set the main switch to **OFF**.
2. Check the phase-sequence relay status.
3. If phase direction is reversed, set the main switch to **OFF**; **swap two phases** on the supply line (**Section 5.3.4**). Do not swap phases with power on.
4. Verify that the phase protection relay is giving an output (**Section 5.4.3**).
5. Turn the main switch ON; verify on the HMI that Error-410 is cleared.

| Parameter | Value |
|-----------|-------|
| Phase-loss behaviour | Phase-sequence/protection relay **trip**; the machine stops or cannot be put into service. On the HMI Manual Page the phase-sequence relay is **red**; **Error-410** (phase sequence fault) |

On phase loss or reverse phase connection the phase protection circuit does not give an output; pump/fan supply is cut. Diagnosis: **Section 5.3.4**, **5.4.3**.

### Error-229 — Emergency stop

1. Remove the hazard source.
2. Release all emergency stop buttons (**4** on the machine — see **Section 2.5**).
3. Apply the **Section 2.5** reset procedure.
4. HMI alarm reset; put the machine back into service according to **Section 7.3.2**.

---

## 11.3.2 Motor faults

| Alarm | Motor | Power |
|-------|-------|:------------:|
| Error-100 | Wash pump | 3 kW |
| Error-101 | Rinse pump | 1.85 kW |
| Error-110 | Exhaust fan | 0.37 kW |
| Error-111–114 | Drying fans 1–4 | 4 kW (each) |
| Error-130 | Oil skimmer | 0.04 kW |
| Error-460 | Servo (conveyor) | 1.5 kW gearbox |

The motor list is given in the **Section 3.3.4** table.

### Motor fault diagnosis procedure

1. Verify the HMI alarm code.
2. For pump motors, check that the **valves in front of the pumps are open** (**Section 7.2.5**).
3. Switch off the main switch; apply **LOTO**.
4. Check the motor protection relay/thermal switch status; if there is a trip, reset after the cause is cleared.
5. Visually check motor and cable connections.
6. If mechanical jamming is suspected, check shaft/coupling freedom.
7. Remove LOTO; perform a short test run.

| Parameter | Value |
|-----------|-------|
| Motor protection trip | **Thermal overload** protection (pump, fan, oil skimmer). Trip status is monitored in HMI **Manual Page** input observation (**Section 3.4.5**) |
| Inverter alarm codes | **Pump / fan / oil skimmer:** DOL drive — no inverter, **not applicable**. **Conveyor servo:** Siemens **6SL3210-5FE11-5UF0** — code on the drive display → **Siemens servo drive manual** (**Section 3.3.4**, **13.3**) |

After trip: clear the fault cause (jamming, closed valve, overload); **reset** the thermal switch; clear the HMI alarm.

**Error-460 Servo Motor Fault:** Read the alarm code on the servo drive (**Siemens 6SL3210-5FE11-5UF0**); for meaning see the **Siemens servo drive manual**. Mechanical jamming, encoder or cable fault is possible. **Authorised service** is recommended (see **Section 11.2.2**).

**Expected result:** Motor protection normal; motor running; no HMI alarm.

---

## 11.3.3 Heater faults

| Alarm | Topic |
|-------|------|
| Error-170 | Wash tank heater residual current F2 |
| Error-171 | Heater residual current F3 |
| Error-172 | Heater residual current F4 |
| Error-150 | Wash tank temperature low |
| Error-151 | Rinse tank temperature low |

Temperature setpoints are made from the HMI recipe/settings page (**Section 6.3**, **8**). Start must not be given before preparation is complete (**Section 7.2.2**).

### Temperature low (Error-150/151)

1. Verify that the **Preparation Start** procedure is complete.
2. Compare setpoint/actual temperature values on the HMI.
3. Check whether a heater residual-current alarm (Error-170–172) is active.
4. Is tank level sufficient — check Error-200/201 or Error-202/203.

### Residual-current trip (Error-170/171/172)

1. Stop the machine; apply **LOTO**.
2. Check the relevant residual-current protection relay (F2/F3/F4).
3. Check heater element and in-tank connection insulation.
4. If the trip is temporary due to a wet environment, try reset once after drying.
5. If the trip repeats, **call service** for heater element replacement (**Section 1.3**).

Thermocouple and sensor cable connection colour codes are given on the **electrical schematic** (delivery package — see **Section 13.1.1**).

**WARNING — Electricity:** Intervention on the heater and residual-current protection circuit must be performed only by authorised electrical personnel.

---
