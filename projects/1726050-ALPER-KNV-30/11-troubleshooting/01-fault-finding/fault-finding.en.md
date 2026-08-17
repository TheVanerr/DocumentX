# 11.1. Fault Finding

---

## 11.1.1. General Diagnosis Steps

| # | Step |
|---|------|
| 1 | Open HMI **alarm screen** — read active alarm code and text |
| 2 | Check stack light is **red** |
| 3 | Find code in alarm table below |
| 4 | Apply recommended check/remedy steps |
| 5 | If emergency stop active, apply reset procedure first (see **7.3.2**) |
| 6 | If problem persists, apply LOTO and see relevant subsection (11.3–11.7) |

**Fault behaviour:** Machine stops on operation-affecting faults (e.g. cover open, RFID not detected). May continue if no immediate air need (e.g. air disconnected while running) (see **7.4.4**).

---

## 11.1.2. Alarm Code List

| Code | Alarm text | Check / remedy |
|------|------------|----------------|
| Error-229 | Acil Stop Devrede | Release e-stop, clear hazard, press panel reset (see 7.3.2) |
| Error-410 | Faz Sırası Hatalı | Check phase sequence relay; swap two phases if needed (see 5.1 Step 7) |
| Error-422 | Kapak Kapalı Değil | Verify maintenance cover closed and RFID sensor detects it |
| Error-100 | Yıkama Pompası Motoru Hata | Check motor protection, valve in front of pump, electrical connections |
| Error-101 | Durulama Pompası Motoru Hata | Check motor protection, valve in front of pump, electrical connections |
| Error-110 | Egzoz Fan Motoru Hata | Check exhaust fan motor and protection circuit |
| Error-111 | Kurutma Fan Motoru Hata | Check drying fan 1 motor and protection circuit |
| Error-112 | Kurutma Fan Motoru 2 Hata | Check drying fan 2 motor and protection circuit |
| Error-113 | Kurutma Fan Motoru 3 Hata | Check drying fan 3 motor and protection circuit |
| Error-114 | Kurutma Fan Motoru 4 Hata | Check drying fan 4 motor and protection circuit |
| Error-130 | Yağ Sıyırıcı Motor Hata | Check oil skimmer motor and protection circuit |
| Error-150 | Yıkama Tank Sıcaklığı Düşük | Check heater, recipe temperature, preparation complete |
| Error-151 | Durulama Tank Sıcaklığı Düşük | Check heater, recipe temperature, preparation complete |
| Error-170 | Isıtıcı Kaçak Akım F2 | Check wash tank heater earth leakage protection F2 |
| Error-171 | Isıtıcı Kaçak Akım F3 | Check heater earth leakage protection F3 |
| Error-172 | Isıtıcı Kaçak Akım F4 | Check heater earth leakage protection F4 |
| Error-200 | Yıkama Tankı Su Seviyesi Pompa Seviyesinin Altında | Check wash tank water level, fill valve |
| Error-201 | Yıkama Tankı Su Seviyesi Yetersiz | Check wash tank fill, automatic fill water valve open |
| Error-202 | Durulama Tankı Su Seviyesi Pompa Seviyesinin Altında | Check rinse tank water level, fill valve |
| Error-203 | Durulama Tankı Su Seviyesi Yetersiz | Check rinse tank fill, automatic fill water valve open |
| Error-235 | Giriş Hava Basıncı Düşük | Check **6 bar** air connection and regulator (HMI manual page) |
| Error-236 | Giriş Su Basıncı Düşük | Check **1 bar** water connection (HMI manual page) |
| Error-300 | Yıkama Otomatik Dolum Vanası Açılamadı | Check 6 bar air, valve mechanical/electrical |
| Error-301 | Yıkama Otomatik Dolum Vanası Kapanamadı | Check wash fill valve mechanical/electrical |
| Error-302 | Durulama Otomatik Dolum Vanası Açılamadı | Check 6 bar air, valve mechanical/electrical |
| Error-303 | Durulama Otomatik Dolum Vanası Kapanamadı | Check rinse fill valve mechanical/electrical |
| Error-304 | Aktarma Vanası Açılamadı | Check transfer valve mechanical/electrical, 6 bar air |
| Error-305 | Aktarma Vanası Kapanamadı | Check transfer valve mechanical/electrical |
| Error-452 | Sızıntı Tavasında Su Tesbit Edildi | Check leak tray, tank/seal leakage |
| Error-460 | Servo Motor Hata | Check servo motor and drive — service may be required |
| Error-461 | Çıkış Konveyöründe Ürün Algılandı | Confirm product removed on HMI; check robot outfeed procedure |

---

## 11.1.3. General Fault Table

| Symptom | Possible cause | Check | Remedy |
|---------|----------------|-------|--------|
| Fault 1 | [MISSING] | [MISSING] | [MISSING] |
| Fault 2 | [MISSING] | [MISSING] | [MISSING] |
| Fault 3 | [MISSING] | [MISSING] | [MISSING] |

> **Note:** General fault table is not yet defined in DATA file.
