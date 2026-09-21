# 3.2 Intended use

This chapter defines the **designed scope of use** of the machine, processable and prohibited product types, process-water limits, environmental conditions and target personnel. When the machine is used outside the specified limits it falls within foreseeable misuse; safety and process results may remain outside warranty coverage (see **Chapter 2.1**). Technical table values are given in **Chapter 3.3**, space requirements in **Chapter 3.5**.

---

## 3.2.1 Designed scope of use

KNV 30 3000 2B is an industrial parts washing machine with infeed loading, conveyor and two baths (wash + rinse). Parts travel on the conveyor and complete washing, rinsing and drying processes.

The **intended field of use** of the machine is removal of contamination from industrial parts. The designed primary function is **cleaning of oil and contamination** remaining on part surfaces from industrial processes. The machine processes parts on a continuous-flow principle along the conveyor line; the feed side is **left**, the discharge side is **right**.

This machine is designed for use only in **indoor** industrial plant environments, within the technical and environmental limits specified in this manual.

---

## 3.2.2 Processable product and material types

Product types that can be processed with the machine are as follows:

| Category | Description |
|----------|----------|
| General | Industrial parts |
| Material examples | Metal, plastic, rubber etc. |

Parts pass through wash and rinse processes to remove surface contamination; surface moisture is then removed in the drying zone. Suitability of parts for process fluid, temperature and conveyor transport capacity is the user company’s responsibility.

Nominal process cycle time is defined as **900 seconds** (15 minutes). The minimum capacity reference value is specified as **730 pieces/hour**; nominal and maximum capacity values are determined by the user company according to process conditions.

---

## 3.2.3 Prohibited and unsuitable uses

The following product and use types are **not suitable** for the machine and are **strictly prohibited**:

| Prohibited category | Description |
|----------------|----------|
| Living organisms | Humans, animals, plants or any living organism |

Use of the machine outside the specified purpose is assessed within foreseeable misuse. Washing, cleaning or entry of living organisms into machine process zones is prohibited.

The machine is equipped with an RFID safety sensor; the machine stops when covers are opened. The RFID safety sensor must not be bypassed. For maintenance the machine is stopped, electricity is isolated and the **LOTO procedure** is applied; covers are opened only after that.

![Process zone — industrial part use](../../assets/3.2/2.png)

---

## 3.2.4 Process-water and cleaning-agent limits

Water to be used in the machine’s wash and rinse processes must comply with the following conditions:

| Parameter | Value / Requirement |
|-----------|-------------------|
| Water source | Mains water or treated water |
| Water inlet pressure | 1 bar |
| Water temperature | +10°C – +70°C |

**Prohibited cleaning agents:**
- Acid-based cleaning agents shall not be used.
- Cleaning agents that would damage stainless steel shall not be used.

For disinfection of machine tanks, the tank interior shall be washed with **soapy water** after the water has been emptied. For wastewater and chemical disposal, the current legislation of the country in which the machine is used shall be applied.

Cleaning type: **dry / wet**

![Process-water connection](../../assets/3.2/3.png)

---

## 3.2.5 Environmental and plant conditions

The machine is designed for use only in **indoor** industrial plant environments. Operating and storage environmental conditions must be within the following limits; these values are given in **Chapter 3.3.6** — Environmental conditions table:

| Parameter | Min | Max |
|-----------|-----|-----|
| Ambient / operating temperature | +10°C | +30°C |
| Storage temperature | +10°C | +30°C |
| Relative humidity | 30% | 50% |

| Parameter | Value |
|-----------|-------|
| Protection rating (IP) | IP55 |
| Noise level | 65 dB(A) |

Minimum surrounding clearances, ceiling height, floor-flatness tolerance and installation-area size are given in **Chapter 3.5.2**. Consult that chapter in installation planning; they are not repeated here.

Compressed-air supply must be provided at **6 bar** pressure (3/4" connection — see **Chapter 3.3.5**). During transport and storage there shall be no moisture and corrosive substances (see **Chapter 4.2**).

---

## 3.2.6 Operator, training and target audience

The machine is designed to be used by the following personnel groups:

| Personnel | Role |
|----------|-----|
| Line supervisor | HMI preparation / start / stop, alarm monitoring, Error-461 **Product Received Confirm** |
| Maintenance | Periodic maintenance, filter cleaning, lubrication, fault intervention |
| Installation | Assembly, media connections, commissioning |

Part loading and unloading are performed by **robot**; there is **no** standing shift operator on the line. Intervention personnel who may be around the machine at the same time are **1–2** persons (line supervisor and/or maintenance); this number does not mean an operator standing at the line 24/7.

**Competence / training requirement:** Operating and maintenance personnel training; training related to machine use and maintenance must have been received. Personnel shall be informed about the HMI interface (Turkish, English, German), the emergency-stop procedure and basic safety rules.

The machine is suitable for operation on a **24/7** robot line. HMI commands and fault confirmation are given by a trained line supervisor or maintenance personnel; process monitoring can be performed by the higher-level system (MES/SCADA — customer) or by periodic patrol.

![Operator — HMI panel](../../assets/3.2/4.png)
