# 3.4 Machine controls

The machine operates with a relay-based control system without a PLC or operator panel (HMI). All control, setting and signalling elements of the machine are located on the front of the electrical panel on the right-hand side of the washing chamber. The washing time is set with a digital timer and the process water temperature with a digital thermostat; fault conditions are indicated by the red signal lamps on the panel.

The machine has a single operating mode. There is no manual, maintenance or step mode; the basket can be rotated outside the washing cycle only with the TEST button (panel label: BASKET ROTATION) (**See Chapter 3.4.5**).

| Parameter | Value |
| :--- | :--- |
| **Panel location** | Right-hand side of the washing chamber |
| **Panel dimensions (W × H × D)** | 410 × 650 × 160 mm |
| **Panel protection rating** | IP54 |
| **Panel label language** | English |

All labels on the panel are in **English**. This manual refers to the control elements by descriptive names; the label text of each element as printed on the panel is given in the table below.

The control elements on the panel front are arranged from top to bottom in the following order: emergency stop (EMERGENCY STOP); washing start / stop button (WASHING) and timer (TIMER); test button (BASKET ROTATION) and reset button (RESET); heater switch (HEATER) and thermostat (THERMOSTAT); oil skimmer switch (OIL SEPERATOR; option); fault lamps (INADEQUATE WATER LEVEL, REDUCTOR FAILURE, PUMP FAILURE); and at the bottom the main switch (POWER).

![Control panel front](../../assets/3.4/kumanda-panosu.jpg)

*Figure 3.7 — Control panel front*

The table below lists the control elements according to the description numbers in this section.

| No | Element | Panel label | Type | Function summary |
| :---: | :--- | :--- | :--- | :--- |
| 1 | Main switch | POWER | Lockable red-yellow rotary switch | Switches the entire electrical supply of the machine on / off |
| 2 | Emergency stop | EMERGENCY STOP | Latching mushroom-head button | Stops the machine in the event of danger |
| 3 | Washing start / stop | WASHING | Green / red double button | Starts / ends the washing cycle |
| 4 | Timer | TIMER | GEMO DZ482 digital time relay | Sets the washing time |
| 5 | Test | BASKET ROTATION | White button | Rotates the basket outside the cycle |
| 6 | Reset | RESET | Blue illuminated button | Resets the safety circuit |
| 7 | Heater | HEATER | Green cam switch | Switches on the tank heating |
| 8 | Thermostat | THERMOSTAT | GEMO DT481 digital thermostat | Sets and displays the process water temperature |
| 9 | Oil skimmer switch (option) | OIL SEPERATOR | Black cam switch | Operates the oil skimmer |
| 10 | Fault lamps | INADEQUATE WATER LEVEL / REDUCTOR FAILURE / PUMP FAILURE | Red signal lamps | Indicate fault conditions |

## 3.4.1 Main switch

The main switch (POWER) switches on and off the entire electrical supply to the machine from the facility mains. When the switch is in the **0 (OFF)** position, all control and power circuits inside the panel are de-energised; when the switch is turned to the **1 (ON)** position, the machine becomes ready for operation.

The main switch is designed so that it can be locked in the **0** position with a padlock during maintenance and cleaning work. Energy isolation is always carried out via the main switch (**See Chapter 2.4**).

## 3.4.2 Emergency stop

The machine has 1 emergency stop button (EMERGENCY STOP) on the electrical panel. When the button is pressed, all moving and energy-consuming functions of the machine (basket gear motor, washing pump, heater and optional motors if fitted) are stopped and the button latches in the pressed position. The stop is performed as a category 1 stop.

When the emergency stop button is unlatched, the machine does not restart by itself. For the machine to become ready for operation again, the safety circuit must be reset with the RESET button (**See Chapter 3.4.6**). The emergency stop and restart procedure is defined in **Chapter 2.5**.

**CAUTION — Incorrect use:** The emergency stop button must not be used to stop the machine in normal operation. Frequent use causes premature wear of the safety circuit components. To end a washing cycle in progress, use the red STOP button (**See Chapter 3.4.3**).

## 3.4.3 Washing start / stop

This is the double button labelled WASHING on the panel, used to start and stop the washing cycle.

- **START (green):** Starts the washing cycle for the time set on the timer. For the cycle to start, the top lid must be closed, the safety circuit must be reset and the water level in the tank must be sufficient.
- **STOP (red):** Ends the washing cycle in progress before the set time has elapsed; stops the washing pump and the basket gear motor.

At the end of the cycle or after the STOP command, the lid must be opened only after the basket has come to a complete stop.

## 3.4.4 Timer (GEMO DZ482)

The timer (TIMER) is the digital time relay that determines the duration of the washing cycle. The washing time is set within the range 0–100 minutes according to the degree of contamination and the structure of the part. When the START button is pressed, the time on the display starts counting down; when the time reaches zero, the washing pump and the basket gear motor stop automatically.

The appropriate washing time is determined by the operating company according to the part type. Setting the time is described in **Chapter 6**, and selection of the time according to part type in **Chapter 8**.

## 3.4.5 Test button

The TEST button (panel label: BASKET ROTATION, white) allows the basket to be rotated by the gear motor while the washing cycle is not running. The basket rotates only as long as the button is held down; it stops when the button is released. This function is used to bring the basket into a suitable position during part loading and unloading and to check basket rotation before washing.

**WARNING — Rotating basket:** While the basket is rotating, hands, arms or clothing can become trapped between the basket and the chamber wall. Keep your hands away from the basket when using the TEST button; touch the basket only after it has come to a complete stop.

## 3.4.6 Reset button

The RESET button is the blue illuminated button that allows the operator to deliberately reset the safety circuit. When the emergency stop button is pressed or the water level in the tank falls below the safe limit, the safety circuit opens and the machine stops. Even after the cause of the fault has been remedied and the emergency stop button has been unlatched, the machine does not restart by itself.

To reset the safety circuit, hold the RESET button down until the button lamp lights up. The lighting of the button lamp indicates that the safety circuit has closed and the machine is ready for operation. This arrangement prevents the machine from starting unexpectedly when power or the safety condition is restored.

## 3.4.7 Heater switch

The heater switch (HEATER) is the green cam switch that switches on the heating of the process water in the washing tank. When the switch is in the **1** position, the heater runs until the target temperature set on the thermostat is reached; when the target temperature is reached, the thermostat switches the heater off and switches it on again when the temperature drops. When the switch is in the **0** position, no heating takes place.

When the water level in the tank is insufficient, the heater is switched off automatically by the level switch. This protection prevents the heater from being damaged by running without water.

## 3.4.8 Thermostat (GEMO DT481)

The thermostat (THERMOSTAT) is the digital unit that measures and displays the process water temperature and controls the heater. The display shows the current water temperature (**PV**, process value) and the target temperature (**SV**, set value). The temperature is measured by the thermocouple inside the tank.

The target temperature can be set to a maximum of **70 °C**. This limit has been set by the manufacturer to protect the operator against the risk of scalding and steam burns and to keep the pump, seal and tank components within their design limits.

**WARNING — Hot water and steam:** Process water above the 70 °C limit can cause serious scalding and steam burns and also causes permanent damage to the pump and seals. Do not change or disable the thermostat temperature limit. If a value above 70 °C is shown on the display, stop the machine with the STOP button, turn the heater switch to the **0** position and contact the authorised service (**See Chapter 1.3**).

Changing the temperature limit by the user excludes the machine from the warranty (**See Chapter 3.2.5**).

## 3.4.9 Oil skimmer switch (option)

On machines fitted with the oil skimmer option, the cam switch in the OIL SEPERATOR position on the panel operates the oil skimmer; on machines without the option, this position is blank. The oil skimmer mechanically removes the floating oil that accumulates on the tank surface from the tank by means of a rotating disc and extends the service life of the process water.

Because the oil is mixed into the process water during washing, it cannot collect on the surface. For this reason the oil skimmer is operated while the washing cycle is not running and the process water is still (for example during the heating period or at the end of the shift). The skimmed oil is collected in the oily waste container designated by the operating company and disposed of as oily waste (**See Chapter 10.1.7**). Weekly cleaning of the oil skimmer disc and the oil flow path is defined in **Chapter 10.1.3**.

## 3.4.10 Fault lamps

The three red signal lamps on the electrical panel indicate the following fault conditions to the operator. The machine has no display showing alarm codes; faults are indicated only by these lamps.

| Lamp | Panel label | Meaning | Machine behaviour | Diagnosis |
| :--- | :--- | :--- | :--- | :---: |
| **Low water level** | INADEQUATE WATER LEVEL | The water level in the tank has fallen below the safe operating limit. | The heater and washing pump are switched off; the safety circuit opens. RESET is required after water has been added. | **Chapter 11**, Fault 3 |
| **Gear motor fault** | REDUCTOR FAILURE | The basket gear motor thermal overload relay has tripped due to overcurrent. | The basket does not rotate; the washing cycle may not start. | **Chapter 11**, Fault 1 |
| **Pump fault** | PUMP FAILURE | The washing pump thermal overload relay has tripped due to overcurrent. | The washing pump does not run. | **Chapter 11**, Fault 2 |

There are no separate fault lamps for optional equipment such as the drying fan, drain pump, oil skimmer and steam extraction fan. The thermal protection of this equipment is checked inside the panel (**See Chapter 11**).
