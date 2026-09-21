# 11.2 General troubleshooting

This subsection defines HMI alarm behaviour and authorised service call criteria. Alarm codes are given in the **Section 11.1.2** table.

---

## 11.2.1 HMI alarm behaviour

| Parameter | Value |
|-----------|-------|
| Alarm screen | HMI **Alarm Page** — active and history records |
| Stack light | Alarm → **red**; ready → **yellow**; running → **green** |
| HMI alarm language | Turkish, English, German |

When an active alarm occurs, a record appears on the HMI Alarm Page; at the same time the stack light turns **red**. The operator/line supervisor reads the alarm text and determines intervention priority.

**Alarm history:** History records on the HMI Alarm Page are used to analyse repeating faults (see **Section 3.4.6**).

**Reset:** After the alarm is cleared, HMI reset and, if required, panel reset are applied. After emergency stop, the **Section 2.5** procedure is mandatory.

---

## 11.2.2 Service call criteria

In the following situations authorised service support must be obtained through the **Section 1.3** contact channels:

| # | Situation | Rationale |
|---|-------|---------|
| 1 | **Error-460** Servo Motor Fault | Servo drive and mechanical intervention require specialist skill |
| 2 | Repeating heater residual-current (**Error-170/171/172**) trip | Insulation fault; electrical safety risk |
| 3 | Repeating alarm despite **Error-410** phase-sequence correction | Supply line or relay fault |
| 4 | Suspected PLC/HMI hardware fault | Software/hardware intervention requires manufacturer authority |
| 5 | Problem continues despite the steps in the **11.1.2** table | Site diagnosis and spare-part replacement may be required |
| 6 | Mechanical damage, gasket burst, severe leak | Safety and process integrity risk |
| 7 | Safety function (RFID, emergency stop, Cat. 3) verification failed | **Section 5.4** tests are not passed again |

**Preparation before service (Section 1.3.3):**

1. Prepare the machine identity plate data (serial no., model).
2. Record the active HMI alarm codes and texts.
3. State the process phase at the time of the fault (wash/rinse/drying).
4. If possible, attach a photograph of the HMI alarm screen.

**Operator/line supervisor must stop:** Intervention inside the electrical panel, live work without LOTO, RFID bypass or bridging of the safety circuit is **prohibited** — call authorised personnel.

---
