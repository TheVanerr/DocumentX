# 1.1 About this manual

## 1.1.1 Purpose, scope and field of application of the manual

This user manual is an integral and legally binding part of the **KNV 30 3000 2B** machine. The manual has been prepared in accordance with the principles of EN ISO 12100 and EN ISO 20607 to ensure safe, efficient and intended use of the machine. These standards define internationally recognised minimum requirements for machinery safety and user-manual content; therefore the instructions in the manual are not merely recommendations but part of the operating organisation’s responsibility.

**Scope:** **KNV 30 3000 2B** (model code **KNV-30**, serial no. **1726050**) and the equipment delivered with this project.

**Target reader groups:** Line supervisor, maintenance personnel, installation personnel.

The machine is an industrial parts washing system with infeed loading, conveyor and two baths (wash + rinse). Parts travel on the conveyor and complete washing, rinsing and drying processes. In this project, part infeed and outfeed are performed by robot; loading/unloading procedures belong to the customer line (**See Chapter 7.4**). The manual therefore does not cover robot-integration details; it defines only the machine’s own process functions and safe limits.

The manual covers the following life-cycle stages. Detailed instructions for each stage are given in the relevant chapter; this list is only a scope map:

1. Transport, handling and storage (**See Chapter 4**)
2. Assembly, installation and commissioning (**See Chapter 5–6**)
3. Operation (**See Chapter 7–8**)
4. Periodic maintenance (**See Chapter 9**)
5. Cleaning and disinfection (**See Chapter 10**)
6. Fault diagnosis and troubleshooting (**See Chapter 11**)
7. Dismantling, decommissioning and disposal (**See Chapter 12**)

This document does not provide basic engineering, mechanical or electrical training. Personnel are assumed to have vocational training related to machine use and maintenance as part of operating and maintenance personnel training. Lack of training can lead to incorrect application of procedures and machine damage.

---

## 1.1.2 Validity, currency and document control of the manual

The texts, technical data, drawings and diagrams in this manual reflect the **As-Built** (as manufactured) configuration delivered as of the machine’s manufacture / shipping date (**2026-08-12**). If you notice a mismatch between the manual and the machine, take the physical machine condition as the basis and verify with manufacturer service (**See Chapter 1.3**).

| Field | Value |
| :--- | :--- |
| **Revision** | 00 |
| **Last update** | 2026-08-12 |
| **Prepared by** | Fatih GÜRAL |
| **Year of manufacture** | 2026 |

The manufacturer reserves the right to make changes to the machine design and documentation without prior notice as part of R&D and product improvement. No obligation for retrospective revision arises for previously delivered machines. This rule enables continuous improvement in series production; however, changes made on your existing machine are valid only for that serial number.

HMI operator-panel languages are defined in **Chapter 3.4**.

---

## 1.1.3 Target audience, personnel qualification and allocation of responsibilities

The machine contains electricity, hot fluid, compressed air, chemical solution and moving mechanisms. These energy and process sources can cause serious injury or equipment damage if intervention is incorrect. The employer (the organisation operating the machine) is responsible for personnel assignment, training and authority limits. The following roles clarify the authorities and prohibitions defined in the manual; intervention outside the role adversely affects warranty coverage and occupational safety.

**Operator / line supervisor**

There is no standing physical shift operator on this machine’s line; part loading and unloading are performed by robot. The line-supervisor role covers monitoring the machine via HMI, giving preparation/start/stop commands, **Product Received Confirm** after Error-461, and informing maintenance personnel in an alarm situation. This role does not make mechanical or electrical interventions on the machine; it does not bypass the RFID safety sensor.

The line supervisor gives preparation, start and stop commands via HMI; opens or closes wash, rinse, drying and exhaust functions from the operating page (**See Chapter 7.1**). The line supervisor monitors active alarms via HMI and the tower light; informs maintenance personnel when intervention is required. The line supervisor does not open the electrical cabinet, does not remove protective covers, and does not intervene in parameters or safety settings.

The line supervisor must be trained by the employer on machine operation, HMI use and emergency-stop procedures (**See Chapter 2.5**). Giving start via HMI without training carries the risk of starting the process without preparation and of equipment damage.

**Maintenance personnel (mechanical / electrical / pneumatic)**

Maintenance personnel apply periodic maintenance steps (**See Chapter 9**), replace wearing parts and perform basic fault diagnosis (**See Chapter 11**). This is the primary role that intervenes on the machine when a fault occurs. Compliance with the LOTO procedure is mandatory for all work requiring energy isolation; LOTO steps are defined in **Chapter 2.4** and are not repeated in this chapter.

Maintenance personnel must have competence in the relevant technical field, command of the LOTO procedure and use of appropriate PPE (**See Chapter 2.4, 2.6**). Electrical work requires authorisation in accordance with national legislation. Unauthorised electrical intervention creates the risk of electric shock and fire.

**Installation personnel**

Installation personnel perform assembly, positioning and utility connections of the machine (**See Chapter 5**). They apply commissioning tests and safety-function tests (**See Chapter 5.4–5.5**). They perform initial setting and parameter checks (**See Chapter 6**). Space requirements and technical utility values are defined in **Chapter 3**; these values are not repeated during installation — the relevant subsection is consulted.

Installation personnel must have industrial machine-installation experience, knowledge of electrical/pneumatic/water utility connections and command of forklift transport procedures (**See Chapter 4**). Incorrect installation can cause the machine to run out of level, leaks and safety functions not engaging.

**Manufacturer authorised service specialist**

PLC/HMI engineering menus, drive parameters, major mechanical revisions and software updates may be performed only by personnel authorised by the manufacturer. Unauthorised software or parameter changes can disable safety functions and terminate all warranty coverage.

---

## 1.1.4 Storage and accessibility of the manual

This manual is an integral part of the operational integrity of the machine. Keeping it separate from the machine or making it inaccessible can prevent personnel from reaching current instructions and can lead to incorrect interventions.

Access the current digital copy of the manual via the information label on the machine (QR code etc.) or the manufacturer’s digital channels (**See Chapter 1.3**).

Providing uninterrupted access to the manual in the working area of operator and maintenance personnel is an obligation of the employer (the organisation operating the machine). At sites that use a printed copy, preserving page integrity and integrating new revisions into the physical copy is the employer’s responsibility. If the machine is sold, transferred or leased, delivery of the manual and access information to the new user is also the employer’s obligation.

---

## 1.1.5 Intended use, limitation of liability and warranty voidance

The manufacturer has manufactured the machine in accordance with accepted engineering practice and safety norms. Warranty and legal liability depend on operation of the machine within the limits of **intended use** (**See Chapter 3.2**). Operation outside intended use increases the risk of process error, equipment damage and personal injury.

In the following cases the manufacturer accepts no liability; the machine remains **outside warranty coverage**:

1. Removal, bypass or disabling of safety devices (emergency stop, RFID sensor, interlock etc.) (**See Chapter 2**).
2. Mechanical, electrical or software changes made without the manufacturer’s written approval.
3. Operation of the machine with unapproved chemicals or materials other than intended use (**See Chapter 3.2**); processing of living organisms (humans, animals, plants etc.).
4. Overloading the machine by exceeding the limits defined on the rating plate and in **Chapter 3**.
5. Use of non-original spare parts (**See Chapter 1.3.4**).

---

## 1.1.6 Intellectual property and confidentiality

This manual, machine diagrams, HMI/PLC interface documentation and technical drawings are the manufacturer’s intellectual property. These materials contain the manufacturer’s design knowledge; unauthorised sharing harms competitive advantage and is legally protected.

Copying, reproducing, sharing with unauthorised third parties (especially competitor companies) or using the manual for reverse-engineering purposes without the manufacturer’s written permission constitutes an intellectual-property infringement. In case of infringement the manufacturer reserves the right to take legal action.
