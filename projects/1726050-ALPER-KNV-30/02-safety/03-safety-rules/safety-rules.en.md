# 2.3 General operational safety rules

The following rules apply at all stages of machine use. In case of violation, stop the machine; do not recommission until safety conditions are established.

1. Do not operate the machine without reading the manual and receiving training (**See Chapter 1.1.3**).
2. Do not disable or bypass safety devices (RFID, emergency stop).
3. Do not open maintenance covers while the machine is running; apply LOTO before opening covers (**See Chapter 2.4**).
4. Do not give start while there is an active fault on the HMI alarm screen (**See Chapter 11.1**).
5. Verify that no objects that could jam remain on the conveyor line; pump-inlet valves must be open (**See Chapter 7.2**).
6. In emergencies, press the nearest emergency-stop button (**See Chapter 2.5**).

---

# 2.4 Hazardous energy control — LOTO (lockout and tagout)

**WARNING — Energy-related injury:** During maintenance or cleaning performed without LOTO the machine can start accidentally; crushing, electric shock, hot-fluid and compressed-air injury can occur. Isolate, lock and tag all energy sources.

This procedure is applied before all work on the machine such as mechanical maintenance, electrical intervention, filter/tank cleaning, cover removal and similar. Other chapters give only the **Chapter 2.4** reference; steps are not repeated.

## 2.4.1 Scope and energy sources

| Energy type | Source | Isolation point |
| :--- | :--- | :--- |
| Electrical | 380 V, 3-phase | Main switch — on the electrical cabinet |
| Pneumatic | 6 bar compressed air | Plant main air valve / machine inlet |
| Water / process fluid | 1 bar water inlet, tanks | Water-inlet valves; tank emptying (if required) |
| Thermal | Tank heaters | Cooling time after electrical isolation |
| Mechanical | Conveyor, fan, pump | Electrical isolation; heed remaining motion risk |

There is no hydraulic system.

## 2.4.2 LOTO application procedure

**Preparation**

1. Determine the scope and duration of the maintenance or intervention.
2. Inform affected personnel; announce that work is being performed on the machine.

**Stopping the machine**

3. Give the **Stop** command via HMI; wait for the machine to stop.
4. If required, press the nearest **emergency stop** button (**See Chapter 2.5**).

**Energy isolation**

5. Set the **main switch** on the electrical cabinet to the OFF (0) position.
6. Fit your personal **padlock** to the main-switch handle.
7. Hang a **LOTO tag** on the lock; the tag shall include your name, the date and the statement "Do not operate — maintenance".
8. Close the **compressed-air** inlet valve; lock the valve if possible.
9. If there is **residual pressure** in the line, vent it at the regulator or a vent point. HMI does not operate while the main switch is off; do not verify pressure via HMI, do not re-energise the cabinet or the line.
10. Close the **water-inlet** valves.
11. If in-tank intervention is required, empty the process fluid by the appropriate procedure (**See Chapter 10**); wait for cooling against hot-fluid risk.

**Verification**

12. With the main switch off, verify that the HMI has shut down and that the start command remains **unresponsive**. If the HMI has not gone dark, assume supply has not been cut; do not enter the cabinet, call authorised electrical personnel.
13. Visually check that there is no motion in conveyor, fan and pump zones.
14. Do not remove covers or start intervention inside the enclosure until verification is complete.

**After intervention**

15. Refit all guards, covers and connections; remove tools and materials from the area.
16. Only the **authorised person who fitted the lock** removes the LOTO lock and tag.
17. Open the water and air valves; wait for utility pressures to return to normal (**See Chapter 3.3.5**).
18. Open the main switch; apply the reset and preparation procedure (**See Chapter 2.5, 7.2**).

**DANGER — Multiple personnel:** If more than one person is working on the same machine, a separate lock is fitted to each energy source; the group lock is not removed until the last person has left.

The RFID safety sensor must not be bypassed. The sensor cannot be bridged or disabled.

---

# 2.5 Emergency stop (E-Stop) and reset

The machine has a total of **4** emergency-stop buttons:

1. On the electrical cabinet
2. On the right of the conveyor at machine infeed
3. On the left of the conveyor at machine infeed
4. On the left of the conveyor at machine outfeed

When emergency stop is pressed, **every function** on the machine stops. Emergency stop shall be used only at the moment of emergency hazard, not in place of normal stop.

**Situations in which emergency stop shall be used**

- Trapping, falling or impact risk that threatens life safety
- Sudden mechanical-fault noise or severe leakage
- Electrical arcing, smoke or burning smell

When a cover is opened, RFID already stops the machine; this is not a reason for emergency stop. After an RFID stop, close the cover, apply the **Chapter 2.4** requirements and then reset.

**Reset procedure**

1. Remove the physical threat; make the source of trapping, leakage or fault safe.
2. **Release** (unlock) the pressed emergency-stop button.
3. Press the **reset button** on the cabinet label **until** the reset lamp **lights**.
4. Reset the emergency-stop / related alarm on the HMI alarm screen (**See Chapter 11.1**).
5. Do not give start until the hazard has been completely removed.

The reset procedure restores the safety function; giving start before the fault is cleared can cause a further stop or damage.

---

# 2.6 Personal protective equipment (PPE)

The employer is obliged to provide task-based PPE and to supervise its use. The following matrix defines minimum requirements; if local legislation is stricter, it is followed.

| Task | Work clothing | Steel-toe footwear | Gloves | Protective goggles | Respiratory protection |
| :--- | :---: | :---: | :---: | :---: | :---: |
| HMI monitoring / start-stop | ✓ | ✓ | — | — | — |
| Patrol around conveyor / machine | ✓ | ✓ | — | ✓ (splash risk) | — |
| Filter and tank cleaning | ✓ | ✓ | ✓ (chemical-suitable) | ✓ | Filtered mask if required |
| Mechanical maintenance | ✓ | ✓ | ✓ | ✓ | — |
| Electrical-cabinet intervention | — | ✓ | Insulating (when required) | ✓ | — |
| Work near hot tank / heater | ✓ | ✓ | ✓ (heat-resistant) | ✓ | — |

**CAUTION — Slippery floor:** In case of leakage or process-water slip, non-slip footwear and careful movement are mandatory (**See Chapter 10**).

Short-duration visitors shall be informed by the employer before entering the active process zone and shall be equipped with minimum PPE (footwear, goggles).
