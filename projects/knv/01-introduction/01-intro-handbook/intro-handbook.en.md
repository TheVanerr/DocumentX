# 1.1 About the Manual

## 1.1.1 Purpose, Scope, and Field of Application of the Manual

This user manual is an integral, essential, and legally binding component of the industrial washing machine. It has been meticulously prepared in accordance with the applicable Machinery Safety Directive and relevant international standards (EN ISO 12100, EN ISO 20607) to ensure safe, efficient, environmentally friendly operation of the machine in optimum alignment with its intended design. 

The scope of the document is structured to cover the complete lifecycle of the machine. This lifecycle includes the following stages:
* **Transport and Positioning:** Factory dispatch of the machine, on-site transport, use of slinging/lifting points, and anchoring to the floor.
* **Installation and Commissioning:** Making utility infrastructure connections such as electrical power, compressed air, water inlet/outlet, and ventilation (exhaust), and performing initial test runs.
* **Operation:** Daily production routines, creation of washing recipes, loading, running, and unloading the machine.
* **Maintenance and Cleaning:** Daily, weekly, monthly, and annual periodic maintenance procedures, lubrication points, filter cleaning, and inspection of wear parts.
* **Troubleshooting and Fault Rectification:** Initial responses in case of potential alarm conditions and resolution of error codes appearing on the HMI screen.
* **Decommissioning and Disposal:** Safe de-energization, dismantling, and disposal of the machine in compliance with recycling procedures upon reaching the end of its economic life.

This document is not intended to provide fundamental engineering, general mechanical, or basic electrical training. It is assumed that all personnel working on the machine already possess the professional and technical qualification appropriate to their assigned job descriptions and adopt a basic industrial safety culture.

---

## 1.1.2 Validity, Currency, and Document Control of the Manual

The texts, technical data, engineering drawings, hydraulic/pneumatic diagrams, and electrical circuit diagrams contained in this manual reflect the physical hardware and software configuration ("As-Built" condition) at the date the machine was manufactured, passed final quality control (QC) testing, and was dispatched from the factory. 

* **Version Control:** Each page or cover of the manual bears a unique document revision number and publication date. Machine-specific configurations (custom dimensions, optional equipment) are additionally specified in the Appendices section.
* **Right to Modify:** The manufacturer fully reserves the right to make changes to the mechanical/electronic design of the machine and the content of this documentation without prior notice, in accordance with R&D activities and continuous product improvement policy, without any obligation to perform retroactive revisions on previously delivered machines. 

---

## 1.1.3 Target Audience, Personnel Qualification, and Allocation of Responsibilities

Since industrial washing machines involve high voltage, hot water, pressurized systems, chemical solutions, and moving mechanical parts, the competence of personnel intervening on the machine is a critical occupational safety factor. The employer (the operating organization) is solely responsible for assigning personnel in accordance with the following authorization matrix:

1. **Operator:**

   * **Authority:** Daily operation of the machine, loading and unloading of parts, selecting and starting/stopping existing wash recipes via the standard HMI interface.
   * **Requirement:** Must be trained by the employer on machine operation and emergency stop procedures. It is strictly prohibited for the operator to dismantle machine guards (covers) using tools, open the electrical cabinet, or interfere with parameter settings.

2. **Maintenance Personnel (Mechanical / Pneumatic / Electrical):**
   * **Authority:** Executing periodic maintenance steps specified in the manual, replacing wear parts (filters, seals, etc.), sensor adjustments, and basic troubleshooting. 
   * **Requirement:** Must hold a diploma/certificate in relevant engineering or technical trades. Must have complete command of hazardous energy control procedures (Lockout/Tagout - LOTO) and use appropriate Personal Protective Equipment (PPE) during maintenance. Electrical personnel must be authorized according to applicable national electrical installation regulations.

3. **Manufacturer Authorized Service Specialist:**
   * **Authority:** Access to PLC software architecture, drive parameters, hidden (password-protected) HMI engineering menus, main motor/pump replacements, and major structural revisions.
   * **Requirement:** Personnel who are specifically trained, certified, and hold a valid certificate of authorization issued solely by the manufacturer.

---

## 1.1.4 Storage and Accessibility of the Manual

This digital document must be considered an integral part of the machine's operational integrity. Pursuant to environmental sustainability principles and current documentation standards, this user manual is provided in digital format (Soft Copy).

* **Accessibility:** The up-to-date digital copy of the manual is accessible at all times via the directions on the information plate on the machine (e.g., QR code) or through digital channels provided by the manufacturer.
* **Employer's Responsibility:** The operator/plant management is obliged to ensure uninterrupted access to this digital document for operators and maintenance personnel in the work area where the machine is located (via industrial tablets, computer terminals, or the HMI screen).
* **Preference for Printed Use:** Should plant management wish to maintain the manual as a printed copy (Hard Copy) per its own internal procedures, preserving page integrity, protecting it from industrial contamination (oil, chemicals, moisture), and integrating new digital revisions into the physical copy are entirely the responsibility of the operator.
* **Transfer of the Machine:** In the event that the equipment is sold, leased, or transferred to another facility to third parties, the access credentials for the machine's digital documentation or the current digital files must be transferred to the new user along with the machine.

---

## 1.1.5 Intended Use, Limitation of Liability, and Voiding of Warranty

The manufacturer has designed and manufactured the machine in accordance with recognized good engineering practices and strict safety norms. The machine warranty and the manufacturer's legal liability are conditional upon the system being operated solely within the limits of its "Intended Use".

The manufacturer assumes no legal, criminal, or financial liability for direct or indirect personal injuries, loss of life, facility damage, product scrap, environmental pollution, or commercial loss of profit resulting from usage errors, unauthorized interventions, and operating defects detailed below (but not limited to); in such cases, the machine **immediately becomes void of warranty**:

* **Use Beyond Capacity and Purpose:** Operating the machine by overloading beyond the maximum load, pressure, temperature, and cycle capacity limits specified on the rating plate and in the manual. Washing materials other than the specific industrial parts for which the machine was designed (e.g., explosive, flammable, or highly reactive materials).
* **Safety Violations:** Dismantling, bypassing (bridging), disabling via software, or rendering non-functional vital occupational safety components such as emergency stop buttons, door safety switches (interlocks), sealing switches, safety relays, light curtains, or pressure/temperature limit sensors.
* **Unauthorized Modifications:** Making any modifications to the machine structure, piping system, electrical cabinet, or PLC/HMI software codes without the written, stamped approval of the manufacturer.
* **Chemical and Material Incompatibility:** Using heavy acidic, highly caustic (alkaline), or solvent-based chemicals not tested and approved by the manufacturer that could cause corrosion on machine equipment or baskets during the washing process. (In particular, baskets and carrier products used inside the machine undergo a galvanization process, and the surface resistance of these parts differs from painted parts; the use of agents that dissolve the zinc coating invalidates the entire mechanical warranty).
* **Component Replacements:** Mechanical fatigue, pump failures, and loss of washing performance resulting from the random replacement of nozzles—which standardly spray water in a fine-straight line, or optional angled fan nozzles—with nozzles having different flow rate (liters/minute) and spray angle characteristics without the approval of the manufacturer's engineering department. Use of any non-original spare parts and consumables.
* **Infrastructure and Supply Faults:** Inadequate or faulty facility infrastructure connections; component failures caused by non-standard grounding lines, mains voltage fluctuations exceeding tolerable limits (phase drop/loss), excessive moisture/oil particles in the compressed air supplied to the system, or insufficient flow rate/pressure at the water inlet.
* **Maintenance Neglect:** Failure to comply with the daily, weekly, and monthly periodic maintenance schedules specified in the manual, or carrying out lubrication and cleaning procedures by unqualified personnel using improper equipment.

---

## 1.1.6 Intellectual and Industrial Property Rights and Confidentiality
This user manual and all editorial texts, 3D/2D engineering drawings, hydraulic/pneumatic/electrical circuit diagrams, system algorithms, flowcharts, tables, and HMI software interface designs contained herein are strictly protected under national and international copyright laws (and relevant industrial property legislation). 

Ownership of this document belongs exclusively to the manufacturer. Without the prior, wet-signed, and official written consent of the manufacturer:
* This manual or any part thereof may not be copied or reproduced by photocopying, scanning, or similar methods.
* It may not be converted into digital formats and stored on public networks or databases outside the corporate intranet.
* It may not be translated into other languages in whole or in part without authorization.
* It may not be shared, particularly with competitor machine manufacturers, suppliers, or unauthorized third parties.
* Diagrams and operating principles in the manual may not be used as a reference or source document for reverse engineering activities.

In the event of a breach of the intellectual property rights specified above, the manufacturer reserves in advance all rights to initiate any legal, judicial, and criminal proceedings with claims for pecuniary and non-pecuniary damages.
