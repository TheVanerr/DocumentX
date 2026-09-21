# 7.3 Machine shutdown

Machine stop commands are given on the HMI **Operating Page**. **Normal stop** ends daily operation; **emergency stop** is used only in an imminent hazard. For long-term shutdowns, tank emptying and cleaning are done according to **Chapter 10**.

---

## 7.3.1 Normal stop procedure

The HMI **Machine Stop** button is used for a normal production stop.

1. Go to the HMI **Operating Page**.
2. Press the **Machine Stop** button.
3. Verify that the conveyor, pumps, fans and all process functions have stopped.
4. Check the tower-lamp status (yellow if no alarm — ready after stop). After stop the lamp must not remain green.

**Expected result:** All moving functions stopped; process fluid may remain in the tanks (short stop).

Tank emptying is not required for short-break stops. For weekend or long-term shutdown see **Chapter 7.3.4**.

![HMI stop](../../assets/7.3/1.png)

---

## 7.3.2 Restart after emergency stop

Emergency stop is defined in **Chapter 2.5**; this section summarises only the operation flow.

When emergency stop is pressed, **every function** on the machine stops; the tower lamp is **red**.

Restart:

1. Remove the physical threat.
2. Apply the **Chapter 2.5** reset procedure (release emergency stop → panel reset → HMI alarm reset).
3. Continue with the preparation and start procedure from **Chapter 7.2**.

The periodic emergency-stop function test must be performed **once a month** (see **Chapters 6.2.3**, **5.4.1**).

![Reset button](../../assets/7.3/2.png)

---

## 7.3.3 Power-off sequence

Before planned power isolation or maintenance:

1. Stop the machine with HMI **Machine Stop**.
2. Verify that process functions have fully stopped.
3. Set the main switch to **OFF (0)**.
4. If maintenance or intervention is required, apply **LOTO** (see **Chapter 2.4**).

Do not switch the main switch off on a running machine; sudden interruption of pumps and heaters can cause damage.

---

## 7.3.4 Long-term shutdown

For weekend, planned maintenance or long line stops:

| Parameter | Requirement |
|-----------|------------|
| Long-term shutdown | Tanks **must be emptied and cleaned** |

1. Stop the machine and isolate energy with **Chapter 7.3.1** or **7.3.3**.
2. Apply the tank emptying and cleaning procedure (**See Chapter 10.1.5** — steps are there).
3. If required, protect the machine according to **Chapter 4.2** storage conditions.

If tanks are left full, odour, microbial growth and corrosion risk increase; operating weight rises to **1500 kg** (see **Chapter 3.3.1**).

---

For the cleaning procedure see **Chapter 10**.
