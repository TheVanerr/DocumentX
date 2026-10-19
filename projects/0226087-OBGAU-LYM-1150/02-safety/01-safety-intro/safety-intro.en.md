# 2.1 Introduction to safety and operating company responsibilities

This section defines the safe operating framework of the LYM 1150 machine, the obligations of the organisation operating the machine (the employer) and the safety limits that apply to personnel. The machine operates with a top-loading washing chamber, a washing basket driven by the basket gear motor, a washing tank heated by an electric heating element, a washing pump and a relay-based electrical panel (**See Chapter 3.1**). Compliance with the instructions in this chapter and its sections is mandatory at every stage.

The organisation operating the machine is obliged to carry out a risk assessment, train personnel, provide PPE and keep the safety equipment in working order. Legal and criminal liability arising from violation of the safety rules in the manual rests with the operating company.

---

## 2.1.1 Intended use

The intended use of the machine applies only within the limits defined in **Chapter 3.2**. The machine is designed to remove oil, grease, swarf and similar operating contaminants from the surfaces of metal and plastic industrial parts by spraying heated process water containing a water-based alkaline washing chemical onto the parts inside the rotating basket. Processing living organisms, food products and medical instruments is strictly prohibited.

Intended use depends on all of the following conditions being met together:

- The machine is operated only in an enclosed, sheltered indoor space and within the ambient temperature and humidity limits given in **Chapter 3.3.6**.
- The machine is operated with all safety functions (emergency stop, lid-closed switch, level switch and, where fitted, interlock lock) active; none of them is bridged or disabled.
- Only mains water and a water-based alkaline washing chemical compatible with the stainless steel, seal and pump materials are used in the tank; acid-based or flammable liquids are not used (**See Chapter 3.2.2**).
- The process water temperature is not set to exceed the 70 °C limit (**See Chapter 3.4.8**).
- The tank is filled manually by the operator; the heater and the pump are not run when there is insufficient water in the tank (**See Chapter 7.2**).
- The basket is not loaded above the maximum loading capacity of the model (**See Chapter 3.3.2**); parts are loaded and unloaded only with the lid open and the basket stationary (**See Chapter 7.4**).

Use other than the intended use increases the risk of process errors, equipment damage, voiding of the warranty and personal injury (**See Chapter 1.1.5, 3.2.5**).

---

## 2.1.2 Reasonably foreseeable misuse

The following actions constitute reasonably foreseeable misuse and are **prohibited**. The full list and the reasons are given in **Chapter 3.2.4**.

1. Washing living organisms (humans, animals, plants), food, food packaging or medical instruments; entering the washing chamber.
2. Bridging, removing or disabling the lid-closed switch, the interlock lock, the level switch or the emergency stop circuit.
3. Making mechanical, electrical or plumbing changes to the machine without the manufacturer's approval; changing the thermostat temperature limit.
4. Opening the lid while the washing cycle is running and the basket is rotating; reaching into the rotating basket or the chamber with a hand, arm or tool.
5. Forcing the heater or the pump to run when there is no water in the tank or while the low water level lamp is lit.
6. Putting flammable liquids such as solvents, thinners or petrol, or acid-based chemicals, into the tank; washing parts wet with such liquids.
7. Exceeding the maximum loading capacity of the basket; loading parts that protrude beyond the basket or may strike the spray arms.
8. Lifting the machine by slinging it from a crane; using lifting methods other than a forklift (**See Chapter 4.1**).
9. Leaving the electrical panel door open; working inside the panel without applying LOTO.
10. Continuing to use the machine with gas springs that have lost their force and cannot hold the lid in the open position (**See Chapter 9.1.7**).

If any of these is detected, stop the machine with the STOP button; resume work only after the hazard has been eliminated and, where necessary, LOTO has been applied (**See Chapter 2.4**).

---

## 2.1.3 Obligations of the operating company

The organisation operating the machine is obliged to provide the following physical and administrative conditions so that the machine can be used safely.

**Working environment**

- Leave the minimum clearances defined in **Chapter 3.5** around the machine; keep the operator area, the space in front of the electrical panel and the escape route clear.
- Provide lighting in the operator area and at the maintenance points that leaves no blind spots and complies with workplace legislation.
- Make the electrical supply in accordance with the values given in **Chapter 3.3.4** and **Chapter 5.3**, with residual current protection and protective earthing.
- Provide ventilation that prevents the accumulation of steam escaping from the washing chamber (**See Chapter 3.3.6**).
- Dispose of the tank drain water, filter waste and used chemical in accordance with local environmental legislation (**See Chapter 10.1.7**).

**Personnel and administrative responsibilities**

- Train the personnel who will work on the machine according to their role (operator / maintenance / electrical) and document the training (**See Chapter 1.1.3**).
- Check that this manual has been read and understood by the relevant personnel; keep the manual accessible at the machine.
- Carry out a risk assessment for chemical use, maintenance and operation; provide the PPE in **Chapter 2.6** and make its use mandatory.
- Ensure that the **Chapter 2.4** LOTO procedure is applied during maintenance and repair work.
- Have the emergency stop and safety functions tested periodically and record the results (**See Chapter 5.4, 6.2**).
- Have the annual electrical safety tests of the electrical equipment (protective conductor continuity, insulation resistance, residual current device and safety circuit function test) carried out by authorised electrical personnel and record the results (**See Chapter 9.1.8**).
- Have the lid gas springs checked monthly; have gas springs that have lost their force replaced (**See Chapter 9.1.7**).

---

## 2.1.4 Summary of safety equipment

The safety architecture of the machine consists of the following components. All functions operate on relay-based hardware logic; there is no software layer.

| Component | Status |
| :--- | :--- |
| Emergency stop button | **1 unit** — front of the electrical panel, latching mushroom-head button (**See Chapter 2.5**) |
| Stop category (EN 60204-1) | Category 1 |
| Lid-closed switch | **1 unit** — EMAS **L5K13MUM331** (1NO 1NC), right-hand upper edge of the washing chamber; the washing cycle cannot be started unless the lid is closed |
| Interlock lock (option) | OMRON **D4NL4AFAB** — locks the top lid for the duration of the washing cycle; set to the **LOCK** position during installation (**See Chapter 5.4.1**) |
| Safety gate / barrier | None |
| Light curtain | None |
| Safety category (EN ISO 13849-1) | [EKSİK] |
| Reset / ready indicator | Blue illuminated **RESET** button — front of the electrical panel (**See Chapter 3.4.6**) |
| Tank level protection | Stainless steel level switch — the heater and the pump are disabled while the water level is below the safe limit; the red **low water level** lamp lights; RESET is required |
| Temperature limitation | GEMO DT481 thermostat — target temperature not more than 70 °C (**See Chapter 3.4.8**) |
| Motor protection | Thermal overload relays of the basket gear motor, the washing pump and the optional motors — red fault lamps for the gear motor and the pump (**See Chapter 3.4.10**) |
| Phase protection | Phase sequence relay — no control output is given in the event of a phase fault (**See Chapter 5.5.2**) |
| Residual current protection | Residual current device — inside the panel (**See Chapter 11.2.5**) |
| Main switch | Lockable rotary switch — LOTO isolation point (**See Chapter 3.4.1**) |
| Lid gas springs | 2 units — hold the lid in the open position; monthly check and replacement on loss of force (**See Chapter 9.1.7**) |

When the emergency stop button is pressed, all functions of the machine stop; when the tank water level falls below the safe limit, the heater and the washing pump stop; in both cases the safety circuit opens and the RESET lamp goes out. The machine cannot be restarted until the operator acknowledges the safe state with the RESET button. On machines without an interlock lock, the lid can be opened mechanically during the cycle; open the lid only after the cycle has ended and the basket has come to a complete stop (**See Chapter 7.4.3**).
