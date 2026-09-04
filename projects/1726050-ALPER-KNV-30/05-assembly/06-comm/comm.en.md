# 5.6 Communication and automation interface

---

## 5.6.1 Fieldbus and protocol

| Parameter | Value |
|-----------|-------|
| Fieldbus / protocol | **Profinet** |

The machine automation infrastructure communicates via the Profinet protocol. PLC and HMI are integrated on this infrastructure.

| Component | Brand / Model |
|-----------|---------------|
| PLC | SIEMENS SIMATIC S7-1200 — CPU 1215C DC/DC/DC (6ES7215-1AG40-0XB0) |
| HMI | SIMATIC HMI KTP700 Basic PN (6AV2123-2GB03-0AX0) |
| I/O summary | 36 inputs / 24 outputs |

Encoder / feedback settings are embedded in the PLC program; adjustment shall be performed by the **manufacturer**.

<!-- PHOTO: PLC and HMI — Profinet connection points -->
![Profinet infrastructure — PLC/HMI](../../assets/FOTO-5-6-0-profinet.png)

---

## 5.6.2 Upper system connection

| Parameter | Value |
|-----------|-------|
| Upper system (MES / SCADA) connection | Unknown |

MES or SCADA integration is not defined within the scope of this project. Upper system connection shall be evaluated with the user company if required.

---

## 5.6.3 I/O list and documentation

| Document | File name |
|----------|-----------|
| I/O list | **1726050-ALPER-KNV 30 I/O LISTESI.pdf** |

The I/O list is the reference document for input/output addresses and sensor/actuator definitions. Electrical connections shall be verified against this list during installation and commissioning.

<!-- PHOTO: I/O list sample page — PDF reference -->
![I/O list reference](../../assets/FOTO-5-6-2-io-listesi.png)

---

## 5.6.4 Communication checklist

| # | Check | Status |
|---|-------|--------|
| 1 | Profinet network configured | ☐ |
| 2 | PLC — HMI communication verified | ☐ |
| 3 | I/O list referenced | ☐ |
| 4 | Encoder/feedback adjusted by manufacturer | ☐ |

**Date:** _______________ **Checked by:** _______________
