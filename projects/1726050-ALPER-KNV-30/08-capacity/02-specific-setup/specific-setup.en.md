# 8.2. Specific Setup

There is **no format change procedure** on the machine (see Section **6.1.5**). Product/recipe parameters are set by end user via HMI.

---

## 8.2.1. Recipe / Program Parameters

| Parameter | Value / Description |
|-----------|---------------------|
| Recipe storage limit | No recipe limit |
| Temperature setting | HMI settings page (wash/rinse tank temperatures) |
| Process function selection | HMI operating page — wash, rinse, drying 1, drying 2, exhaust on/off |

Recipe parameters (temperature, process times, etc.) must be defined on HMI by end user according to part type and cleanliness target.

<!-- FOTO: HMI recipe / settings page -->
![HMI recipe settings page](../../assets/FOTO-8-2-0-recete.png)

---

## 8.2.2. Product-Based Parameters

| Parameter | Value / Description |
|-----------|---------------------|
| Product A parameters | **Set by end user** |
| Product B parameters | **Set by end user** |
| Product C parameters | **Set by end user** |

A separate recipe can be created for each product type. Parameters (temperature, active process steps, cycle time) must be defined by end user to match robot line cycle.

---

## 8.2.3. Recipe Number List

| Parameter | Value / Description |
|-----------|---------------------|
| Recipe number list | **Set by end user** |

Recipe numbering and product mapping must be defined by end user. If robot PLC / upper system integration exists, recipe selection follows customer automation structure.

---

## 8.2.4. Specific Setup Checklist

| # | Check | Status |
|---|-------|--------|
| 1 | Recipe for product type selected / created | ☐ OK / ☐ NOK |
| 2 | Tank temperatures set to target values | ☐ OK / ☐ NOK |
| 3 | Process functions (wash/rinse/dry) correctly on/off | ☐ OK / ☐ NOK |
| 4 | Compatibility with robot line cycle verified | ☐ OK / ☐ NOK |
| 5 | Test wash with sample part performed | ☐ OK / ☐ NOK |

**Date:** _______________ **Checked by:** _______________

> **Note:** Initial setup and new product commissioning tests must be performed on site with actual parts by end user.
