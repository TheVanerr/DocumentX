# 11.7 Sensor faults

Four sensing elements are used on the machine for safety and process control. The sensors are checked and replaced by authorised maintenance or electrical personnel with LOTO applied (**See Chapter 2.4**).

| Sensor | Model / code | Location and function | Check method | Related fault |
| :--- | :--- | :--- | :--- | :--- |
| **Lid-closed switch** | EMAS L5K13MUM331 (10 00261) | Upper right edge of the washing chamber, next to the electrical panel; transmits the lid-closed signal to the safety circuit | Measurement of the contact state with a multimeter in resistance mode, with the lid open and closed | **Chapter 11.2**, Fault 6 |
| **Interlock lock** | OMRON D4NL4AFAB (10 03336) | Left side surface of the washing chamber; locks the lid during the cycle | Check that the lid cannot be opened while the cycle is running (**See Chapter 5.4.2**, test 4) | **Chapter 5.4** |
| **Level switch** | 10 00296 Stainless steel level switch | Washing tank; disables the heater and the pump at low water level | Physical check of the tank water level; the lamp goes out when the tank is full | **Chapter 11.2**, Fault 3 |
| **Thermocouple** | ETB30F06-2Ç (10 01343) | Washing tank; transmits the water temperature to the thermostat | Reading of the PV value on the thermostat display; checking the thermostat output with a test instrument | **Chapter 11.2**, Fault 7 |

The sensors have no status indicator LED. If the PV value on the thermostat display clearly does not match the actual water temperature (for example a high value with a cold tank), the thermocouple or its connecting cable may be faulty; have the thermocouple checked by authorised electrical personnel.

After replacing a sensor, test the safety or process function associated with the replaced sensor (**See Chapter 5.4**).
