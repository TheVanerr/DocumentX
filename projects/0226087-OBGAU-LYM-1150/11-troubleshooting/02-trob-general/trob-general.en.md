# 11.2 Fault table

This section lists the faults that can be encountered on the machine, together with their symptoms, possible causes and remedial steps. The fault numbers are the same as those referenced in the other chapters of the manual.

| No | Symptom | Fault lamp | Carried out by |
| :---: | :--- | :---: | :--- |
| 1 | Basket does not rotate or washing does not start | Gear motor fault | Operator / maintenance personnel |
| 2 | Washing pump does not run | Pump fault | Operator / maintenance personnel |
| 3 | Heater and / or pump do not switch on | Low water level | Operator |
| 4 | Optional equipment does not operate | None | Maintenance / electrical personnel |
| 5 | Residual current device trips | None | Electrical personnel |
| 6 | Washing does not start although the lid is closed | None | Maintenance / electrical personnel |
| 7 | Water does not heat up | None | Operator / electrical personnel |

## 11.2.1 Fault 1 — Gear motor fault

**Symptom:** The gear motor fault lamp is lit; the basket does not rotate or washing does not start.

**Possible cause:** The thermal overload relay of the basket gear motor has tripped due to overcurrent. The overcurrent may be caused by overloading of the basket, jamming of the basket or the drive mechanism, or internal damage to the gear motor.

**Remedy**

1. Stop the machine.
2. Reduce the load in the basket; remove any part or mechanical obstruction preventing the basket from rotating.
3. Reset the thermal overload relay (electrical personnel).
4. Empty the basket and rotate it without load using the TEST button; observe whether the motor binds.
5. Measure the motor current with an ammeter (electrical personnel). If the current is within the normal range, the fault has been rectified.

If the fault recurs, the motor and the gear motor must be checked by the service (**See Chapter 13.3**).

## 11.2.2 Fault 2 — Pump fault

**Symptom:** The pump fault lamp is lit; the washing pump does not run.

**Possible cause:** The thermal overload relay of the washing pump has tripped due to overcurrent. The overcurrent may be caused by the pump straining due to a clogged filter or suction line, or by damage to the pump mechanical seal or its mechanical parts.

**Remedy**

1. Stop the machine and apply LOTO.
2. Check the pre-filter and the suction filter; clear any clogging (**See Chapter 10**).
3. On machines with the fine filter, check the pump outlet line and the bag filter for clogging.
4. Check the pump mechanical seal for leakage.
5. Reset the thermal overload relay (electrical personnel).
6. Remove the LOTO and carry out a short test run; listen for abnormal noise from the pump.
7. Measure the pump current (electrical personnel). If the current is within the normal range, the fault has been rectified.

If the fault recurs, the pump must be checked by the service (**See Chapter 13.3**).

## 11.2.3 Fault 3 — Low water level

**Symptom:** The low water level lamp is lit; the heater and / or the pump do not switch on.

**Possible cause:** The water level in the tank has fallen below the safe operating limit and the level switch has given the low level signal. The water level decreases over time due to evaporation, water carried out with the parts and leakage at the drain valve.

**Remedy**

1. Check the water level in the tank.
2. Add the required amount of water to the tank.
3. Once the level has reached the safe limit, press the blue RESET button to acknowledge the safety circuit.
4. Restart the heater and the washing cycle.

If the lamp remains lit although the tank is full, the level switch may be faulty (**See Chapter 11.7**).

## 11.2.4 Fault 4 — Optional equipment does not operate

**Symptom:** The drying fan, drain pump, oil skimmer, steam extraction fan or another item of optional equipment does not operate; there is no corresponding fault lamp on the panel.

**Possible cause:** The thermal overload relay of the motor concerned has tripped. These circuits have no fault lamp. Possible causes: blockage (fan intake, drain line), overload, mechanical jamming (hardened oil on the oil skimmer disc) or motor failure.

**Remedy** (maintenance or electrical personnel)

1. Set the main switch to position **0** and apply LOTO (**See Chapter 2.4**).
2. Open the door of the electrical panel.
3. Locate the thermal overload relay in the motor circuit concerned; reset it if it has tripped.
4. Investigate the cause of the trip: blockage, overload or mechanical jamming; on the oil skimmer, clean the disc and the oil flow path (**See Chapter 10.1.3**).
5. Close the panel door and remove the LOTO.
6. Test the equipment by operating it on its own; if the thermal overload relay trips again, measure the motor current and contact the service (**See Chapter 11.1.3**).

## 11.2.5 Fault 5 — Residual current device trips

**Symptom:** The residual current device trips; the machine or one of its functions does not switch on.

**Possible cause:** There is an insulation fault or leakage current in one of the circuits. The faulty circuit is found by observing which load causes the device to trip when it is switched on.

**Remedy** (electrical personnel)

1. Switch all functions off.
2. Reset the residual current device.
3. Switch the functions on one at a time: basket only (TEST), pump only, heater only.
4. Determine which function causes the device to trip when switched on and isolate that circuit.
5. Check the motor, heating element, cables and connections in the faulty circuit.
6. Carry out an insulation resistance measurement if necessary.

If the residual current device trips repeatedly, contact the service (**See Chapter 11.1.3**).

## 11.2.6 Fault 6 — Lid closed, washing does not start

**Symptom:** The washing cycle does not start when the START button is pressed although the lid is closed.

**Possible cause:** The lid-closed switch is faulty or the lid-closed signal is not reaching the safety circuit.

**Remedy**

1. Check that the lid is fully closed and that the lid latch is engaged (operator).
2. Stop the machine and apply LOTO.
3. Open the switch cover; using a multimeter in resistance mode, measure the contact continuity with the lid in the open and in the closed position (electrical personnel). If there is no contact continuity with the lid closed, the switch is faulty.
4. Check the switch and the cable connections.
5. Have the faulty switch replaced by authorised maintenance personnel (**See Chapter 13.3**).
6. Carry out the safety function test after the repair (**See Chapter 5.4**).

| Part | Order code |
| :--- | :--- |
| **Lid-closed switch** — EMAS L5K13MUM331 1NO 1NC (upper right edge of the washing chamber, next to the panel) | 10 00261 |
| **Interlock lock** — OMRON D4NL4AFAB (left side surface) | 10 03336 |

## 11.2.7 Fault 7 — Water does not heat up

**Symptom:** The measured temperature (PV) on the thermostat display does not rise or the target temperature (SV) is not reached.

**Possible cause:** The heater circuit does not switch on, or the heating element does not heat although the circuit has switched on. The causes may be: the water temperature has already reached the set value or the upper limit (normal condition), low water level, the heater switch being off, thermostat failure or heating element failure.

**Remedy — operator**

1. Check the low water level lamp. If the lamp is lit, first carry out the steps of Fault 3.
2. Read the measured temperature (PV) and the target temperature (SV) on the thermostat display.
3. If PV is equal to or higher than SV, the water has reached the target temperature; it is normal for the heater not to operate.
4. If PV has reached the upper limit of 70 °C, the heater does not switch on; this is also normal.
5. If PV is lower than SV, check that the heater switch is in position **1**; if it is off, switch it on.

**Remedy — electrical personnel**

6. With the switch on and PV lower than SV, observe whether the heater contactor inside the panel pulls in.
7. If the contactor pulls in but the water does not heat up, the heating element is faulty. Apply LOTO and replace the heating element assembly (07 00309; **See Chapter 13.3**).
8. If the contactor does not pull in, check the thermostat output signal with a test instrument. If the thermostat gives no output, the thermostat is faulty; replace it or contact the service.
9. If the contactor does not pull in although the thermostat gives an output and the switch is on, check the contactor, the thermal protection device and the wiring.
