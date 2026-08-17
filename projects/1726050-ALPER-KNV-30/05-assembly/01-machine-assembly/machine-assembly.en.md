# 5.1. Machine Assembly

Assembly is estimated to take **1 day** and is performed by a **1-person** team. A **forklift** shall be used for transport and placement; a **crane shall not be used under any circumstances** when transporting the machine. Transport shall be performed with forklift forks; the profiles under the machine are used for fork entry. Transport weight (assembled): **1300 kg** — the machine shall be transported without disassembly of any parts.

---

## 5.1.1. Pre-Assembly Preparation

The following conditions shall be met before starting assembly:

| Parameter | Requirement |
|-----------|-------------|
| Minimum assembly area size | 5 m × 3 m |
| Floor flatness tolerance | 0.5 mm/m |
| Floor strength | Floor surface shall be hard and level |
| Required equipment | Forklift |
| Packaging type | Container |
| Transport temperature | +10°C – +30°C |
| Transport environment | No moisture or corrosive substances |

The machine is shipped in container packaging. Forklift fork entry (profiles under the machine) shall be used when transporting to the installation area.

<!-- PHOTO: Machine transport with forklift — fork entry via lower profiles -->
![Forklift transport](../../assets/FOTO-5-1-0-forklift-tasima.png)

---

## 5.1.2. Assembly Steps

Assembly shall be performed in the following sequence:

| Step | Operation | Detail |
|:----:|-----------|--------|
| 1 | Machine delivered to installation area and unloaded | Transport to final position with forklift |
| 2 | Machine packaging removed | Removal of container packaging |
| 3 | Machine placed on floor; adjustable feet levelled | Alignment tolerance: **0.5 mm** |
| 4 | Compressed air connection made | **6 bar**, **3/4"** connection |
| 5 | Water connection made | **1 bar**, **1/2"** connection |
| 6 | Three-phase electrical supply connected | **380 V**, **50 Hz** line suitable for **50 kW / 100 A** installed power |
| 7 | Machine power switched on via panel | Main switch — electrical panel |
| 8 | Phase rotation checked | Phase sequence relay; if reversed, correct by swapping two phases |
| 9 | Machine ready for operation | Section 5.5 installation tests shall be completed |

> **Note:** In the DATA file, water and electrical connections are listed under the same step number (Step 5). In this manual, the connection sequence is preserved with steps numbered 5 (water) and 6 (electrical) separately.

### Step 3 — Levelling

The machine is placed on the **adjustable foot** system. Feet shall be adjusted so the machine is **level**. Alignment tolerance is **0.5 mm**. Mechanical installation test check: *Is the machine level?*

<!-- PHOTO: Adjustable feet — levelling -->
![Adjustable feet — levelling](../../assets/FOTO-5-1-1-ayarlanabilir-ayak.png)

### Step 4 — Compressed Air Connection

| Parameter | Value |
|-----------|-------|
| Pressure | 6 bar |
| Connection | 3/4" |
| Regulator setting | 6 bar |

After connection, air status on the HMI manual page shall indicate **green**.

<!-- PHOTO: Compressed air connection point — 3/4" -->
![Compressed air connection](../../assets/FOTO-5-1-2-hava-baglantisi.png)

### Step 5 — Water Connection

| Parameter | Value |
|-----------|-------|
| Pressure | 1 bar |
| Connection | 1/2" |
| Water quality | Mains water or purified water |
| Water temperature | +10°C – +70°C |

After connection, water status on the HMI manual page shall indicate **green**.

<!-- PHOTO: Water connection point — 1/2" -->
![Water connection](../../assets/FOTO-5-1-3-su-baglantisi.png)

### Step 6 — Electrical Connection

| Parameter | Value |
|-----------|-------|
| Voltage | 380 V |
| Frequency | 50 Hz |
| Phases | 3 (three-phase) |
| Installed power | 50 kW |
| Maximum current | 100 A |
| Configuration | 3P+N+PE |
| Main switch | 100 A, Schneider |

Electrical connection shall be performed by authorised electrical personnel only.

<!-- PHOTO: Electrical supply connection — panel inlet -->
![Electrical supply connection](../../assets/FOTO-5-1-4-elektrik-baglantisi.png)

### Steps 7–8 — Energisation and Phase Check

1. Machine power is switched on **via the panel**.
2. Phase rotation is checked via the **phase sequence relay**.
3. If phase rotation is reversed, **swap two phases** to correct.

Electrical commissioning test checklist:
- Is the phase protection relay output active?
- Is there power on the machine?
- Does the machine stop when emergency stop is activated?

<!-- PHOTO: Phase sequence relay — inside panel -->
![Phase sequence relay](../../assets/FOTO-5-1-5-faz-sira-role.png)

---

## 5.1.3. Assembly Completion

In Step 9, the machine is brought to **ready for operation** status. Before starting operation, tests in the following sections shall be completed:

| Test | Section |
|------|---------|
| Safety function tests | 5.4 |
| Installation verification and empty run (15 min) | 5.5 |

Safety function test list:
- Does the machine stop when emergency stop is activated?
- Is the machine ready for operation?
- Does the RFID sensor stop the machine when covers are opened?

<!-- PHOTO: Assembly complete — machine ready for operation -->
![Assembly complete](../../assets/FOTO-5-1-6-montaj-tamamlandi.png)
