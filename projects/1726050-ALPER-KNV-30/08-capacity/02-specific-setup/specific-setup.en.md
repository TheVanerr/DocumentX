# 8.2 Specific setup and recipe management

The machine has **no mechanical format-change procedure** (see **Chapter 6.1.5**). Product and process differences are managed via the HMI with **recipe logic**: temperature setpoints, oil-skimmer times and process-function on/off selections.

There is **no** upper limit on the number of recipe records (see **Chapter 3.4.11**). Recipe numbering and product mapping are defined by the **user company**; higher-level system (robot PLC / MES) integration depends on the **customer** automation structure (see **Chapter 5.6.2**).

---

## 8.2.1 Recipe concept and HMI structure

On this machine, parameters are collected on two HMI pages instead of a separate “recipe list” screen:

| Recipe component | HMI page | Chapter |
|-----------------|-------------|-------|
| Wash / rinse / drying temperature | Settings Page | 6.3.3, 3.4.4 |
| Oil-skimmer run / idle time | Settings Page | 6.3.3 |
| Wash, rinse, drying 1/2, exhaust on/off | Operating Page | 7.1.6 |
| Preparation / start | Operating Page | 7.2 |

A consistent set of these parameters for each product type is treated as a “recipe”. If recipe selection is made from a higher-level system, transfer of parameters to the HMI is the customer software’s responsibility.

![HMI recipe / settings page](../../assets/8.2/1.png)

---

## 8.2.2 New-recipe creation procedure

When a new part type is commissioned:

1. Put the machine in the **stop** state.
2. Enter the target temperature setpoints on the HMI **Settings Page** (wash, rinse, drying — see **Chapter 6.3.3**).
3. Set oil-skimmer run and idle times according to the part oil load.
4. Set the required process functions to **active** on the HMI **Operating Page**.
5. Complete fill/heating with **Preparation Start** (see **Chapter 7.2**).
6. Perform a test wash with a sample part; verify the cleanliness/dryness criterion.
7. Record the approved parameter set with a recipe number (user-company documentation).
8. Verify that the robot infeed/outfeed cycle time is compatible with the target **pcs/h** (reference 730). **900 s** is the part transit time; the robot cycle does not have to be this value (see **Chapters 3.3.2**, **7.4.2**).

**Expected result:** The part meets the target cleanliness criterion; line throughput is in the target pcs/h range.

**Abnormal condition:** If heating is insufficient, check setpoints and heater alarm status (see **Chapter 11**).

---

## 8.2.3 Product-based parameters

The following fields are filled **by the user company**:

| Parameter | Value |
|-----------|-------|
| Product A parameters | Set by the user company |
| Product B parameters | Set by the user company |
| Product C parameters | Set by the user company |

Example parameter-set template (filled by the user company):

| Parameter | Product A | Product B | Product C |
|-----------|--------|--------|--------|
| Recipe no. | | | |
| Wash temperature (°C) | | | |
| Rinse temperature (°C) | | | |
| Drying set (°C) | | | |
| Oil-skimmer run (min) | | | |
| Oil-skimmer idle (min) | | | |
| Wash / Rinse / Drying 1/2 / Exhaust | on/off | on/off | on/off |
| Target pcs/h | | | |

---

## 8.2.4 Recipe number list

| Parameter | Value |
|-----------|-------|
| Recipe no. list | Set by the user company |

Recipe numbering and product–recipe mapping must be defined by the user company. If recipe selection is made from the robot or a higher-level system, automatic or operator-confirmed updating of HMI parameters belongs to the customer automation project.

An example recipe list is defined by the user company (see **Chapter 14**).

---

## 8.2.5 Specific-setup checklist

| # | Check | Status |
|---|---------|:-----:|
| 1 | Recipe parameter set defined for the product type | ☐ |
| 2 | Tank temperatures set to target values (Settings Page) | ☐ |
| 3 | Process functions correct on/off (Operating Page) | ☐ |
| 4 | Robot cycle time compatible with target pcs/h | ☐ |
| 5 | Test wash with sample part performed — acceptance criterion OK | ☐ |
| 6 | Capacity test result entered in the table (Chapter 8.1.3) | ☐ |

**Date:** _______________ **Checked by:** _______________

---

For operation see **Chapter 7**; for capacity limits see **Chapter 8.1**.
