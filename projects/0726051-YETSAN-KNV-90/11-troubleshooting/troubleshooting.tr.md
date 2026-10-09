# 11. ARIZA GİDERME

Bu bölüm, **KNV 90 7500 2B** makinesinde oluşabilecek arızaların teşhis ve giderme yöntemlerini tanımlar. Makinede **HMI ve alarm listesi yoktur**; belirtiler operatör paneli lambaları (run lambaları, TANK 1/2 WASHING LEVEL, RESET), pano içindeki koruma elemanlarının konumu (motor koruma şalterleri, kaçak akım röleleri, sigortalar, faz sıra rölesi) ve konveyör inverterinin ekranı üzerinden teşhis edilir.

Arıza müdahalesi iki katmanlıdır: operatör, panel lambalarına bakarak **ilk teşhisi** yapar ve tank dolumu, acil stop/kapak kontrolü, RESET gibi dış müdahaleleri uygular; pano içi müdahale (MKŞ reset, kaçak akım rölesi, kontaktör, rezistans ölçümü) yalnızca **yetkili elektrikçi** tarafından **LOTO altında** yapılır (**Bkz. Bölüm 2.4**). Acil stop reset **Bölüm 2.5**'e göre yapılır.

| Parametre | Değer |
| :--- | :--- |
| Alarm gösterimi | HMI yok — run lambaları, WASHING LEVEL (kırmızı), RESET (mavi), MKŞ/RCCB konumu, inverter ekranı |
| Hidrolik / vakum | Uygulanmaz |
| Pnömatik | Yalnızca yağ ayırıcı diyaframlı pompası — 6 bar |

| Alt bölüm | Konu |
| :--- | :--- |
| **11.1** | Arıza bulma — teşhis akışı, arıza tablosu, MKŞ tespit tablosu |
| **11.2** | Genel — lamba davranışı, servis çağrısı kriterleri |
| **11.3** | Elektrik — faz, motor/MKŞ, ısıtıcı/kaçak akım, inverter |
| **11.4** | Hidrolik — uygulanmaz |
| **11.5** | Pnömatik — hava basıncı, yağ ayırıcı pompası |
| **11.6** | Vakum — uygulanmaz |
| **11.7** | Sensörler — kapak switch'leri, seviye sensörleri, termokupl, sızıntı tavası |

---

Servis talebi için bkz. **Bölüm 1.3**; yedek parça için bkz. **Bölüm 13.3**.
