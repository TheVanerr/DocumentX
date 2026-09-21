# 10.1 Cleaning and disinfection

The machine process tanks operate with **hot water**; there is a risk of hot surfaces and steam during cleaning. Cleaning agents must meet the criteria defined in **Section 10.1.7**; prohibited substances cause permanent damage to the tank and stainless-steel surfaces.

Filter spare-part order codes are given in the **Section 9.1.6** and **13.3.1** tables.

---

## 10.1.1 Cleaning type

| Parameter | Value |
|-----------|-------|
| Cleaning type | **Dry / wet** |
| CIP / COP | Not provided |

Cleaning is applied **manually**. Machine outer surfaces are wiped with a dry cloth; the tank interior requires wet cleaning (water, soapy water). Do **not spray water directly** onto the electrical panel, HMI and RFID sensor areas.

---

## 10.1.2 Safety before cleaning

Tank and filter access requires opening a cover. The RFID cover **does not lock**; opening it stops the machine. Before cleaning:

1. Stop the machine with HMI **Machine Stop**.
2. Set the main switch to **OFF (0)**.
3. Apply the **LOTO procedure** (**See Section 2.4**).
4. Do **not bypass** the RFID safety sensor.
5. **Drain** the tanks before long cleaning or disinfection (see **Section 7.3.4**).

**WARNING — Hot surface and steam:** Before opening the tank cover, wait until the process liquid has cooled to a safe temperature; hot water and steam can cause skin burns. Use protective gloves.

**WARNING — Chemical:** Use only approved cleaning agents. Acid-based substances and substances harmful to stainless steel are **prohibited** (see **Section 10.1.7**).

---

## 10.1.3 Daily cleaning — pre-filters

| Parameter | Value |
|-----------|-------|
| Interval | **Daily** (see **Section 9.1.3**) |
| Scope | Wash tank **pre-filters** |
| Other | No other daily cleaning is required |

Spare part: **07 10214** — ÖN FİLTRE NS KOMPLESİ (recommended stock: 2 — see **Section 9.1.6**).

### Daily cleaning procedure

1. Stop the machine; apply **LOTO** for cover/filter access.
2. Remove the wash tank **pre-filters**.
3. Clean the filters with **mains water** and approved cleaning agents (see **Section 10.1.7**); high-pressure water or a brush may be used; do not use prohibited chemicals.
4. If the filter is damaged (deformation, tear), replace it with a spare part.
5. Fit the filters in the correct orientation and so that they seat tightly.
6. Complete the LOTO removal procedure; check that there is no leak before putting the machine into service.

![Wash tank pre-filters](../../assets/FOTO-10-1-3-on-filtre.png)

**Expected result:** Pre-filters clean and correctly fitted; no abnormal noise/blockage at the pump suction.

**Abnormal condition:** If blockage is frequent, evaluate process-water quality and oil load (see **Section 3.3.5**, **11**).

---

## 10.1.4 Weekly deep cleaning — tank and bag filters

| Parameter | Value |
|-----------|-------|
| Interval | **Weekly** (see **Section 9.1.3**) |
| Scope | Tank internal filters + pump outlet **bag filters** |

Spare part: **10 05378** — TORBA FİLTRE 200 MİKRON (recommended stock: 2).

![Tank filters](../../assets/FOTO-10-1-4-tank-filtre.png)

![Pump outlet bag filter](../../assets/FOTO-10-1-4-torba-filtre.png)

### Weekly cleaning procedure

1. Stop the machine; apply **LOTO**.
2. Remove the **internal filters** from the wash and rinse tanks.
3. Clean the filters; replace worn or damaged filters.
4. Remove the **bag filters** on the pump outlet line.
5. Clean the bag filters or **replace** them if cleaning is not possible.
6. Refit all filters; check gaskets and tightness.
7. Apply **daily** pre-filter cleaning (Section 10.1.3) in the same maintenance round.
8. If there is an excessive oil film on the oil skimmer and tank surface, clean it.

**Expected result:** Filters clean or new; pump flow normal; no leak.

---

## 10.1.5 Disinfection procedure

| Parameter | Value |
|-----------|-------|
| Application | Long-term shutdown, periodic hygiene, or tank odour/contamination build-up |
| Method | Tank drain + internal wash with **soapy water** |

### Disinfection procedure

1. Stop the machine; apply **LOTO**.
2. **Fully drain** the process water from the wash and rinse tanks.
3. Wash the tank inner surfaces with **soapy water**; use a soft brush or cloth suitable for stainless-steel surfaces.
4. Drain the soapy water to the tank drain line.
5. Rinse the tank interior with **clean water**.
6. After draining is complete, leave the tank interior to dry or dry it by a suitable method.
7. Wipe the machine outer surface according to **Section 10.1.6**.
8. Dispose of wastewater in accordance with **Section 10.1.8**.

**CAUTION — Prohibited chemical:** Acid-based cleaning/disinfection agents and agents harmful to stainless steel **must not be used** (see **Section 10.1.7**). For tank interior disinfection the **soapy water** method applies.

**Expected result:** Tank interior clean, odour reduced; ready for process water refill.

---

## 10.1.6 Drying after cleaning

| Parameter | Value |
|-----------|-------|
| Machine exterior | Must be wiped with a **dry cloth** |
| Tank interior | Natural drying after drain, or suitable drying |
| Electrical panel / HMI | **Not washed with water** — dry or slightly damp cloth only |

Do not leave water puddles on the machine outer surface; do not perform wet cleaning near the electrical panel. After drying is complete, LOTO is removed and commissioning is performed according to the **Section 7.2** procedure.

---

## 10.1.7 Cleaning agents

**Mains water** may be used for machine cleaning. Cleaning chemicals must be **stainless-steel compatible neutral or mildly alkaline** detergents. The table below gives the manufacturer recommendation; the customer may also use equivalent products that are not acid-based and do not damage the machine.

| Parameter | Value |
|-----------|-------|
| Cleaning water | **Mains water** |
| General criterion | Stainless-steel compatible **neutral** or **mildly alkaline** detergents |
| Disinfection (tank interior) | **Soapy water** |
| Customer equivalent product | Products that are not acid-based and do not damage the machine may be used |

### Manufacturer recommended cleaning agents

| Product | Use |
|------|----------|
| **VEIDEC 89 SUPER FOAM 750** | General cleaning |
| **VEIDEC BIO CLEANING 3** | Stubborn stains that will not come off — rub with a **sponge** moistened with a small amount |
| **VEIDEC 34 INOX** | Polishing |

Follow the product instructions (dosage, dwell time, rinsing). Do not apply chemical directly to the electrical panel, HMI and RFID sensor areas.

### Prohibited cleaning agents

| Prohibited | Rationale |
|-------|---------|
| **Acid-based** cleaning agents | Corrosion of tank/gasket and stainless-steel surfaces |
| Substances that **damage stainless steel** | Damage to machine body and tank material |

Process water source (production): mains or treated water (see **Section 3.3.5**). For machine **cleaning**, mains water is sufficient.

---

## 10.1.8 Wastewater and chemical disposal

| Parameter | Requirement |
|-----------|------------|
| Wastewater / chemical disposal | Current legislation of the country of use of the machine |

Tank drain water is **oily process water**; do not discharge it to domestic sewage. Tank drain water, soapy wash water and filter cleaning waste must be collected and treated in accordance with local **wastewater and chemical disposal** rules. The disposal procedure must be defined within the plant environmental permits.

Compressed air, water and drain connection data are given on the layout drawing (see **Section 3.3.5**, **1726050-ALPER-KNV 30 LAYOUT.pdf**).

---

## 10.1.9 Cleaning record form

| # | Operation | Interval | Date | Performed by | OK/NOK |
|---|-------|---------|-------|-------|:------:|
| 1 | Wash tank pre-filter cleaning | Daily | | | ☐ |
| 2 | Tank internal filter cleaning | Weekly | | | ☐ |
| 3 | Pump outlet bag filter cleaning/replacement | Weekly | | | ☐ |
| 4 | Disinfection (soapy water) | As required | | | ☐ |
| 5 | Outer surface drying | After each cleaning | | | ☐ |

**Approved by:** _______________ **Date:** _______________

---

Liquid drain reference before dismantling **Section 12.1** → Section 10.1.5.
