# 5.5 Installation verification and testing

Tests shall be performed after Section **5.4** safety tests are completed. Do not proceed to operation until all checks are **OK**.

---

## 5.5.1 Mechanical installation test

| # | Check | Expected result | Status |
|---|-------|-----------------|--------|
| 1 | Is the machine level? | Yes — within 0.5 mm tolerance via adjustable feet | ☐ |

The mechanical installation test is performed after Section 5.2 positioning and levelling is complete. Check both axes with a spirit level or equivalent measuring tool.

<!-- PHOTO: Level check with spirit level -->
![Mechanical test — level check](../../assets/FOTO-5-5-0-terazi-test.png)

---

## 5.5.2 Electrical commissioning test

| # | Check | Expected result | Status |
|---|-------|-----------------|--------|
| 1 | Is phase protection relay output active? | Yes | ☐ |
| 2 | Is there power on the machine? | Yes | ☐ |
| 3 | Does the machine stop when emergency stop is activated? | Yes | ☐ |

Electrical tests are performed after energisation via the panel. Phase rotation shall have been verified via the phase sequence relay.

<!-- PHOTO: Panel open — commissioning test -->
![Electrical commissioning test](../../assets/FOTO-5-5-1-elektrik-test.png)

---

## 5.5.3 Pneumatic and media connection test

| # | Check | Expected result | Status |
|---|-------|-----------------|--------|
| 1 | After air connection, does air status on HMI manual page indicate green? | Yes | ☐ |
| 2 | After water connection, does water status on HMI manual page indicate green? | Yes | ☐ |

Connection parameters:

| Medium | Value |
|--------|-------|
| Compressed air | 6 bar — 3/4" |
| Water | 1 bar — 1/2" |

<!-- PHOTO: HMI manual page — air and water green -->
![Pneumatic/media test — HMI manual](../../assets/FOTO-5-5-2-medya-test.png)

---

## 5.5.4 Safety function test

| # | Check | Expected result | Status |
|---|-------|-----------------|--------|
| 1 | Does the machine stop when emergency stop is activated? | Yes — every function stops | ☐ |
| 2 | Is the machine ready for operation? | Yes — yellow stack light | ☐ |
| 3 | Does the RFID sensor stop the machine when covers are opened? | Yes | ☐ |

For detailed emergency stop test procedure, see Section **5.4**.

<!-- PHOTO: Safety test — RFID sensor trigger -->
![Safety function test](../../assets/FOTO-5-5-3-guvenlik-test.png)

---

## 5.5.5 Empty run test

| Parameter | Value |
|-----------|-------|
| Empty run test duration | **15 minutes** |

### Test procedure

1. All Section 5.5.1–5.5.4 checks shall be completed as **OK**.
2. Run the machine **without parts** (empty) for **15 minutes**.
3. Stop the machine when the test duration is complete.

| # | Check | Status |
|---|-------|--------|
| 1 | 15 min empty run test completed | ☐ OK / ☐ NOK |

If the empty run test is successful, the machine is accepted as **ready for operation** (Section 5.1 Step 9).

<!-- PHOTO: Empty run test — machine running -->
![Empty run test — 15 min](../../assets/FOTO-5-5-4-bos-kosu.png)

---

## 5.5.6 Installation verification summary checklist

| Section | Test | Completed |
|---------|------|:---------:|
| 5.5.1 | Mechanical — level | ☐ |
| 5.5.2 | Electrical — phase protection, e-stop | ☐ |
| 5.5.3 | Media — HMI air/water green | ☐ |
| 5.5.4 | Safety — RFID, ready for operation | ☐ |
| 5.5.5 | Empty run — 15 min | ☐ |

**Date:** _______________ **Tested by:** _______________ **Approved by:** _______________
