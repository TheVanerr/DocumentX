# 3.1 Machine description and operating principle

The LYM 1150 is a top-loading, rotating-basket parts washing machine designed to remove oil, grease, swarf, carbon residue and similar process contaminants from the surfaces of industrial parts. The machine is used to prepare parts coming from machining, casting, pressing and maintenance and repair processes for the next operation, such as coating, painting, welding or assembly. The machine covered by this manual is the **LYM 1150 NS** (serial no **0226087**, year of manufacture 2026) manufactured for OBG Automotive; the machine body and control panel carry the OBG Automotive brand, and the manufacturer is CNK Elektronik Makine Sanayi AŞ (**See Chapter 1.3**).

Cleaning is performed by applying heated process water under pressure, through the nozzles on the spray arms, to the parts inside the basket rotating about its own axis. The dissolving effect of the heat, the bond-weakening effect of the process chemical on the contaminants and the mechanical impact of the sprayed water act together to separate the contaminants from the part surface. The rotation of the basket ensures that all surfaces of the part pass through the spray zone in turn and that the washing result is consistent regardless of the position of the part.

![Front view, lid closed](../../assets/3.1/lym-on-gorunus.jpg)

![Front view, lid open](../../assets/3.1/lym-kapak-acik.jpg)

*Figure 3.1 — LYM 1150 NS general view: lid closed (left) and lid open (right)*

The top lid, two lid handles and the lid latch are on the front of the machine; the electrical and control panel is on the right-hand side. The machine stands on four fixed feet. Below the brand plate on the lid is the label strip showing the mandatory PPE and hazard pictograms (**See Chapter 2.2.2**).

## 3.1.1 Main components

The machine consists of the following main components. The technical values of the components are given in **Chapter 3.3** and the control elements in **Chapter 3.4**.

| Component | Location and function |
| :--- | :--- |
| **Washing chamber** | Stainless steel enclosure closed by the top lid, housing the rotating basket, the spray arms and the nozzles. The washing process takes place inside this enclosed volume. |
| **Top lid** | Allows parts to be loaded into and unloaded from the washing chamber. It opens on two hinges at the rear; two gas springs reduce the force required to open the lid and hold it in the open position. The latch at the front centre holds the lid in the closed position; two handles are used to open and close the lid. |
| **Rotating washing basket** | Stainless steel wire mesh disc carrying the parts to be washed. It is driven by the basket gear motor via the gear ring around its circumference and runs on the plastic support rollers on the tank. |
| **Basket gear motor** | Gearbox with electric motor that rotates the basket at a constant speed; located inside the stainless steel housing on the right-hand side surface of the washing chamber. Protected against overload by a thermal overload relay. |
| **Washing pump** | Centrifugal pump with stainless steel body that draws the process water from the tank and delivers it under pressure to the spray arms. Located in the rear compartment of the machine frame. |
| **Spray arms and nozzles** | U-shaped stainless steel pipe frame attached to the inner surface of the lid: a total of 45 nozzles on the upper horizontal arm and the two vertical side arms direct the pressurised process water onto the part surface. |
| **Washing tank and heater** | Tank below the washing chamber in which the process water is stored. The electric heating element inside the tank brings the water to the temperature set on the thermostat. |
| **Filters** | The pre-filter at the front left corner of the chamber floor and the perforated cylindrical suction filter inside the tank prevent coarse particles from reaching the pump and the nozzles. |
| **Level switch** | Monitors the water level in the tank; when the level falls below the safe limit, it switches off the heater and the pump. |
| **Lid-closed switch** | On the upper right edge of the washing chamber, next to the electrical panel. Detects that the top lid is closed; the washing cycle cannot be started unless the lid is closed. |
| **Interlock lock (option)** | On the left-hand side surface of the washing chamber, below the lid edge. Locks the lid for the duration of the washing cycle (**See Chapter 5.4.1**). |
| **Steam vent outlets** | One 3" PVC elbow in the upper part of each of the left and right side surfaces of the washing chamber. Allows the steam generated in the chamber to escape; with the steam extraction fan option, extraction through these outlets is performed by the fan. |
| **Drain valve** | 2" ball valve at the lower right front of the machine, below the electrical panel. Used to empty the tank (**See Chapter 10.1.4**). |
| **Electrical and control panel** | Panel with door, mounted on the right-hand side of the washing chamber. The main switch, emergency stop, control buttons, timer, thermostat and fault lamps are on its front; the protective devices and relays are inside. The machine operates with a relay-based control system without a PLC or HMI. |

![Washing chamber and rotating basket](../../assets/3.1/yikama-hucresi-sepet.jpg)

![Spray arm and nozzles](../../assets/3.1/puskurtme-kollari.jpg)

![Washing tank: suction filter and heating element](../../assets/3.1/yikama-tanki-isitici.jpg)

![Washing pump and connecting pipes](../../assets/3.1/yikama-pompasi.jpg)

*Figure 3.2 — Main components: washing chamber and rotating basket (top left), spray arm and nozzles (top right), suction filter and heating element inside the tank (bottom left), washing pump and connecting pipes in the rear compartment (bottom right)*

The rotating basket is driven via the gear ring around its circumference and runs on the plastic support rollers mounted on the tank. The lid is held in the closed position by the latch at the front centre; the latch must be closed before the washing cycle is started.

![Basket support roller and gear ring](../../assets/3.1/sepet-makara-disli.jpg)

![Lid latch](../../assets/3.1/kapak-mandali.jpg)

*Figure 3.3 — Basket support roller and gear ring (left), lid latch (right)*

The gas springs are on both sides of the lid. The interlock lock box is on the left-hand side surface; the lid-closed switch, basket gear motor housing, electrical panel, drain valve, supply cable and type plate are on the right-hand side surface. The steam vent outlets are in the upper part of both side surfaces. The frame compartment housing the washing pump and connecting pipes is accessed from the rear of the machine.

![Left side view](../../assets/3.1/sol-yan-gorunus.jpg)

![Right side view](../../assets/3.1/sag-yan-gorunus.jpg)

*Figure 3.4 — Left side view: gas spring, interlock lock box and steam vent outlet (left); right side view: electrical panel, basket gear motor housing, drain valve, supply cable coiled around the steam vent outlet and type plate (right)*

![Rear view](../../assets/3.1/arka-gorunus.jpg)

*Figure 3.5 — Rear view: lid hinges and the pump compartment at the rear of the frame*

## 3.1.2 Operating principle and process flow

The machine has a single operating mode: the timer-controlled washing cycle. In the standard configuration the process consists of the washing step only; on machines fitted with the drying fan option, a drying step can be applied after washing. The cycle time is set on the timer within the range 0–100 minutes.

A washing cycle generally takes place in the following sequence. Operating instructions and detailed steps are given in **Chapter 7**.

1. The process water in the tank is heated to the temperature set on the thermostat. The heating time is approximately 1 hour, depending on the initial water temperature. The water temperature can be set to a maximum of 70 °C.
2. The parts to be washed are placed in the basket, the top lid is closed and the lid latch is closed.
3. The washing time is set on the timer and the washing cycle is started; on machines fitted with the interlock lock option, the lid is locked for the duration of the cycle.
4. During the cycle the basket rotates; the washing pump sprays the process water onto the parts through the nozzles. The sprayed water returns from the washing chamber to the tank and, after passing through the filters, is drawn into the pump again.
5. When the set time has elapsed, the pump and the basket gear motor stop automatically; on machines fitted with the interlock lock, the lock is released.
6. After the basket has come to a complete stop, the lid is opened and the parts are unloaded.

Because the process water circulates in a closed circuit, the dirt and oil removed from the parts accumulate in the tank. The cleanliness of the process water and regular maintenance of the filters directly affect the washing quality (**See Chapter 10**).

## 3.1.3 Model and variant

The LYM 1150 is the model in the LYM 1 body family of the LYM series. The model name on the type plate is **LYM 1150 NS** (**See Chapter 3.3**).

| Feature | Value |
| :--- | :--- |
| **Model** | LYM 1150 NS |
| **Stock code** | 02 01 21 |
| **Body family** | LYM 1 |
| **Washing pump** | 1 × 2.2 kW |
| **Heater** | 1 × 8.25 kW |
| **Number of nozzles** | 45 |

In the standard configuration the nozzles are 0° stainless steel nozzles that direct the spray perpendicularly onto the part surface. This arrangement is suited to removing oil, swarf and adhering contaminants by high impact. For parts with large surfaces or complex geometry, flat-spray nozzles can be supplied as an alternative; these nozzles distribute the water over a wider area so that the surface is swept uniformly.

## 3.1.4 Optional equipment

The following equipment is added to the machine if requested at the time of ordering. The options fitted to your machine are specified in the order and delivery documents (**See Chapter 13.1**); option parts are marked "Option" in **Chapter 13.3**. The effect of the options on the installed power is given in **Chapter 3.3.4**. The use and maintenance of each option are described in the chapters indicated in the table below.

| Option | Function | Use and maintenance |
| :--- | :--- | :--- |
| **Oil skimmer** | Mechanically removes the floating oil that accumulates on the tank surface from the tank by means of a rotating disc; extends the service life of the process water. | **Chapter 3.4.9, 7.6.2, 10.1.3** |
| **Fine filter** | Retains fine particles with a 200 micron bag filter fitted in the pump outlet line. | **Chapter 9.1.6, 10.1.3** |
| **Interlock lock** | Locks the top lid for the duration of the washing cycle, preventing it from being opened during operation. | **Chapter 5.4.1, 5.4.2** |
| **Steam extraction fan** | Extracts the steam and hot air generated in the washing chamber out of the chamber; reduces the amount of steam directed at the operator when the lid is opened. | **Chapter 3.3.6, 7.4.3** |
| **Steam extraction fan (condensing type)** | Condenses the extracted steam, reducing the release of moisture and oil vapour into the ambient air. | **Chapter 3.3.6, 7.4.3** |
| **Drying fan (fan type)** | Removes the water remaining on the parts after washing by means of an air flow. | **Chapter 7.4.3** |
| **Drying fan (blower type)** | Removes the water remaining in blind holes and recesses more effectively by means of a high-pressure air flow. | **Chapter 7.4.3** |
| **Drain pump** | Pumps the process water to the drain line when the tank is emptied. | **Chapter 5.3.3, 10.1.4** |
| **Transport trolley** | Wheeled trolley that allows the basket to be loaded outside the machine and the loaded basket to be rolled into the machine. | **Chapter 5.1.2, 7.4.1** |

The optional motors (oil skimmer, fans, drain pump) are protected by separate thermal overload relays inside the panel; there is no fault lamp on the panel front for these motors (**See Chapter 11.2**, Fault 4).
