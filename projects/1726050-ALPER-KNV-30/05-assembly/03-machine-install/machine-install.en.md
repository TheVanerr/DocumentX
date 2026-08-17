# 5.3. System Connections and Commissioning

Connection operations are performed within **Steps 4–8** of Section 5.1 assembly steps.

---

## 5.3.1. Compressed Air Connection

| Parameter | Value |
|-----------|-------|
| Compressed air inlet | 6 bar |
| Connection type | 3/4" |
| Pneumatic regulator setting | 6 bar |

### Connection procedure

1. Plant compressed air line is connected to the machine inlet (3/4").
2. Regulator is set to **6 bar**.
3. Open the **manual page** on the HMI interface.
4. Verify air connection status indicates **green**.

Pneumatic fill test: *After air connection, does air status on the HMI manual page indicate green?*

<!-- PHOTO: Compressed air connection point — 3/4" and regulator -->
![Compressed air connection](../../assets/FOTO-5-3-0-hava-baglantisi.png)

---

## 5.3.2. Water Connection

| Parameter | Value |
|-----------|-------|
| Water inlet pressure | 1 bar |
| Connection type | 1/2" |
| Water temperature | +10°C – +70°C |
| Water quality | Mains water or purified water |

### Connection procedure

1. Plant water line is connected to the machine inlet (1/2").
2. Verify water pressure is **1 bar**.
3. Open the **manual page** on the HMI interface.
4. Verify water connection status indicates **green**.

Pneumatic/hydraulic fill test (water): *After water connection, does water status on the HMI manual page indicate green?*

<!-- PHOTO: Water connection point — 1/2" -->
![Water connection](../../assets/FOTO-5-3-1-su-baglantisi.png)

---

## 5.3.3. Electrical Connection

| Parameter | Value |
|-----------|-------|
| Supply voltage | 380 V |
| Supply frequency | 50 Hz |
| Number of phases | 3 (three-phase) |
| Total installed power | 50 kW |
| Maximum current draw | 100 A |
| Supply configuration | 3P+N+PE |
| Main switch | 100 A, Schneider |
| Total fuse / circuit breaker | 100 A |
| Short-circuit current (ICC) requirement | 10 kA |
| UPS / generator requirement | No |

Electrical connection shall be made with a **380 V, 50 Hz** three-phase supply line suitable for **50 kW / 100 A** installed power. Connection shall be performed by authorised electrical personnel only.

<!-- PHOTO: Electrical panel — supply cable inlet -->
![Electrical connection](../../assets/FOTO-5-3-2-elektrik-baglantisi.png)

---

## 5.3.4. Energisation and Phase Check

### Commissioning procedure

| Step | Operation |
|:----:|-----------|
| 1 | Three-phase supply line connected to panel |
| 2 | Machine power switched on **via panel** |
| 3 | Phase rotation checked via **phase sequence relay** |
| 4 | If reversed, **swap two phases** to correct |

### Electrical commissioning test checklist

| Check | Expected result |
|-------|-----------------|
| Is phase protection relay output active? | Yes |
| Is there power on the machine? | Yes |
| Does the machine stop when emergency stop is activated? | Yes |

Motor shall run in one direction only; phase rotation shall be set correctly.

<!-- PHOTO: Phase sequence relay and phase protection relay — inside panel -->
![Phase check — inside panel](../../assets/FOTO-5-3-3-faz-kontrol.png)

---

## 5.3.5. Connection Completion Checklist

When all connections are complete, perform the following checks:

| # | Check | Status |
|---|-------|--------|
| 1 | Compressed air connected (6 bar, 3/4") | ☐ |
| 2 | Air status green on HMI manual page | ☐ |
| 3 | Water connected (1 bar, 1/2") | ☐ |
| 4 | Water status green on HMI manual page | ☐ |
| 5 | Three-phase electrical connected (380 V, 50 Hz) | ☐ |
| 6 | Phase rotation verified | ☐ |
| 7 | Power switched on via panel | ☐ |
| 8 | Phase protection relay output active | ☐ |

After connections are complete, apply Section **5.4** safety tests and Section **5.5** installation verification tests.

<!-- PHOTO: HMI manual page — air and water green indication -->
![HMI manual page — connection status](../../assets/FOTO-5-3-4-hmi-manuel-durum.png)
