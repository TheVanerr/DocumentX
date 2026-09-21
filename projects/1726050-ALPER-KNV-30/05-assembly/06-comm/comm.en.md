# 5.6 Communication and automation interface

The machine automation infrastructure must be verified after installation. PLC, HMI and Profinet specifications are summarised in **Chapter 3.4.7**; this section gives the installation and commissioning checklist.

---

## 5.6.1 Fieldbus and protocol

| Parameter | Value |
|-----------|-------|
| Fieldbus / protocol | **Profinet** |

| Component | Brand / Model |
|---------|---------------|
| PLC | SIEMENS SIMATIC S7-1200 — CPU 1215C DC/DC/DC (6ES7215-1AG40-0XB0) |
| HMI | SIMATIC HMI KTP700 Basic PN (6AV2123-2GB03-0AX0) |
| I/O summary | 36 inputs / 24 outputs |

PLC–HMI communication must be established over the Profinet network. Encoder / feedback settings are embedded in the PLC program; changes must be made only by **manufacturer authorised service** (see **Chapter 6.3**).

**CAUTION — Unauthorised intervention:** Unauthorised modification of the PLC program and embedded parameters can disable safety functions.

![Profinet infrastructure](../../assets/5.6/1.png)

---

## 5.6.2 Higher-level system connection

| Parameter | Value |
|-----------|-------|
| Higher-level system (MES / SCADA) connection | Performed by the customer |

MES or SCADA integration is the **customer’s** responsibility. The machine is ready to connect to a higher-level system via **Profinet** infrastructure; protocol, addressing and signal mapping are configured according to the customer automation project.

---

## 5.6.3 I/O list and documentation

| Document | File name | Status |
|---------|-----------|-------|
| I/O list | Not delivered as a separate document | On request from the manufacturer (see **13.1.3**) |

The I/O list is the reference document for input/output addresses and sensor and actuator designations. It is not delivered as a separate document; installation electrical connections are verified against the electrical schematic (**Chapter 13.1.1**) and site wiring. The list is requested from the manufacturer when needed.

---

## 5.6.4 Communication checklist

| # | Check | Status |
|---|---------|:-----:|
| 1 | Profinet network configured | ☐ |
| 2 | PLC — HMI communication verified | ☐ |
| 3 | HMI start screen and language selection tested | ☐ |
| 4 | Electrical schematic used as reference | ☐ |
| 5 | Encoder/feedback setting verified by the manufacturer | ☐ |

**Date:** _______________ **Checked by:** _______________

---

For HMI screen structure see **Chapter 3.4**; for parameter settings see **Chapter 6**.
