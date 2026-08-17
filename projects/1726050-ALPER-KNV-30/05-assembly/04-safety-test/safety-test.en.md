# 5.4. Safety System Tests

Machine stop category: **Cat. 3**. An **RFID safety sensor** is installed on the machine. **No light curtain** is provided. Number of safety doors / barriers: **0**.

---

## 5.4.1. Emergency Stop Test

The machine has a total of **4** emergency stop buttons:

| # | Location |
|---|----------|
| 1 | On electrical panel |
| 2 | On the right of the conveyor at machine infeed |
| 3 | On the left of the conveyor at machine infeed |
| 4 | On the left of the conveyor at machine outfeed |

### Test procedure

For each emergency stop button individually:

1. With the machine running or in ready state, press the emergency stop button.
2. Verify that **every function on the machine stops**.
3. Verify stack light illuminates **red**.
4. Release the emergency stop button; confirm the physical hazard is cleared.
5. Press the **reset button** on the panel label until the lamp illuminates.
6. Return the machine to normal state.

| Check | Expected result |
|-------|-------------------|
| Does the machine stop when emergency stop is activated? | Yes — every function stops |

Emergency stop test period: shall be repeated **once per month**.

<!-- PHOTO: Emergency stop buttons — 4 locations -->
![Emergency stop locations](../../assets/FOTO-5-4-0-acil-stop.png)

<!-- PHOTO: Panel reset button — on label -->
![Reset button — panel label](../../assets/FOTO-5-4-1-reset-butonu.png)

---

## 5.4.2. RFID Safety Sensor Test

| Parameter | Value |
|-----------|-------|
| Sensor type | RFID safety sensor |
| Number of safety doors | 0 |

### Test procedure

1. With the machine running or in ready state, open one of the machine covers.
2. Verify the RFID sensor **stops the machine**.
3. Close the cover and apply reset procedure.

| Check | Expected result |
|-------|-------------------|
| Does the RFID sensor stop the machine when covers are opened? | Yes |

Safety door bypass shall **not** be performed under any circumstances. For maintenance, covers shall be opened only after machine power is isolated; **LOTO procedure** shall be applied.

<!-- PHOTO: RFID safety sensor — cover area -->
![RFID safety sensor](../../assets/FOTO-5-4-2-rfid-sensor.png)

---

## 5.4.3. Phase Protection and Electrical Safety Test

Electrical commissioning test checklist:

| # | Check | Expected result |
|---|-------|-------------------|
| 1 | Is phase protection relay output active? | Yes |
| 2 | Is there power on the machine? | Yes |
| 3 | Does the machine stop when emergency stop is activated? | Yes |

<!-- PHOTO: Phase protection relay — inside panel -->
![Phase protection relay](../../assets/FOTO-5-4-3-faz-koruma.png)

---

## 5.4.4. Machine Ready State Test

| Check | Expected result |
|-------|-----------------|
| Is the machine ready for operation? | Yes |
| Stack light yellow (ready for operation) | Yes |

No alarm shall be present on the HMI interface. If the machine is not ready, the alarm screen and red stack light are activated.

<!-- PHOTO: Stack light — yellow (ready for operation) -->
![Stack light — ready](../../assets/FOTO-5-4-4-tepe-lambasi-sari.png)

---

## 5.4.5. Safety Function Test Checklist

When all safety tests are complete, complete the following list:

| # | Test | Result | Date | Tested by |
|---|------|--------|------|-----------|
| 1 | Emergency stop #1 — panel | ☐ OK / ☐ NOK | | |
| 2 | Emergency stop #2 — infeed right | ☐ OK / ☐ NOK | | |
| 3 | Emergency stop #3 — infeed left | ☐ OK / ☐ NOK | | |
| 4 | Emergency stop #4 — outfeed left | ☐ OK / ☐ NOK | | |
| 5 | Reset procedure | ☐ OK / ☐ NOK | | |
| 6 | RFID sensor — cover open | ☐ OK / ☐ NOK | | |
| 7 | Phase protection relay | ☐ OK / ☐ NOK | | |
| 8 | Machine ready for operation | ☐ OK / ☐ NOK | | |

Do not proceed to Section 5.5 installation verification tests or operation until all items are **OK**.
