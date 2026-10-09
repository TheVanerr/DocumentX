# 14.2 Sözlük

Bu sözlük kılavuz boyunca kullanılan kısaltmaları, operatör panelindeki İngilizce etiketleri ve makineye özgü terimleri tanımlar. Güvenlik ve prosedür ayrıntıları ilgili ana bölümlerde verilmiştir.

---

## 14.2.1 Kısaltmalar

| Kısaltma | Açıklama |
| :--- | :--- |
| **BOM** | Bill of Materials — yedek parça / malzeme listesi (**13.3.1**) |
| **CIP / COP** | Cleaning in Place / Cleaning out of Place — otomatik temizlik; bu makinede **bulunmaz** |
| **HMI** | Human Machine Interface — operatör ekranı; bu makinede **yok** |
| **ICC** | Kısa devre akımı — besleme hattı gereksinimi [EKSİK] (**3.3.3**) |
| **IP55** | Koruma sınıfı — toz ve su püskürtmesine karşı |
| **KKD** | Kişisel koruyucu donanım (**2.6**) |
| **LOTO** | Lockout/Tagout — enerji izolasyonu ve kilitleme-etiketleme (**2.4**) |
| **MKŞ** | Motor koruma şalteri — Schneider GV2ME; Q1–Q10 (**11.1.3**) |
| **PE** | Protective Earth — koruma topraklaması (3P+N+**PE**) |
| **PLC** | Programmable Logic Controller — otomasyon kontrolörü; bu makinede **yok** |
| **P&ID** | Piping and Instrumentation Diagram — proses/enstrümantasyon şeması |
| **RCCB** | Residual Current Circuit Breaker — kaçak akım rölesi; Schneider A9N19642 / A9N19643 (**11.3.3**) |
| **RFID** | Radio Frequency Identification — kılavuzda kapak emniyet switch zinciri için kullanılan genel ad; bu makinede Omron F3STGRNLPU21M1J8 manyetik switch |
| **SWL** | Safe Working Load — forklift güvenli kaldırma kapasitesi |
| **TMŞ** | Termik manyetik şalter — ana şalter Schneider CVS250F (**2.4**, **3.3.3**) |
| **VFD** | Variable Frequency Drive — konveyör inverteri Delta VFD004EL21W-1 (**3.4.7**) |
| **WEEE** | Waste Electrical and Electronic Equipment — elektronik atık mevzuatı (**12.3**) |

---

## 14.2.2 Operatör paneli etiketleri (İngilizce → Türkçe)

| Etiket | Türkçe | Bölüm |
| :--- | :--- | :--- |
| **TANK 1 HEATER** | Yıkama tankı ısıtıcısı (termostat ile) | 3.4.3 |
| **TANK 1 PUMP** | Yıkama pompası | 3.4.3 |
| **TANK 1 OIL SKIMMER** | Yıkama tankı yağ sıyırıcı | 3.1.5 |
| **TANK 2 HEATER** | Durulama tankı ısıtıcısı | 3.4.3 |
| **TANK 2 PUMP** | Durulama pompası | 3.4.3 |
| **BLOWER 1 / BLOWER 2** | Su sıyırma blower grupları | 3.1.6 |
| **DRYING 1 FAN / DRYING 2 FAN** | Kurutma fanları | 3.1.6 |
| **DRYING 1 HEATER / DRYING 2 HEATER** | Kurutma ısıtıcıları (termostat ile) | 3.1.6 |
| **CONVEYOR** | Konveyör (hız potansiyometresi ile) | 3.4.7 |
| **EMERGENCY STOP** | Acil stop | 2.5 |
| **TANK 1 / TANK 2 WASHING LEVEL** | Tank su seviyesi yetersiz uyarı lambası (kırmızı) | 3.4.5 |
| **RESET** | Emniyet zinciri reset / hazır lambası (mavi) | 2.5 |
| **AIR INLET / HAVA GİRİŞİ** | Basınçlı hava girişi (makine gövdesi) | 3.3.5 |
| **TAHLİYE** | Tank boşaltma vanası | 10.1.5 |

---

## 14.2.3 Terimler

| Terim | Açıklama |
| :--- | :--- |
| **Acil stop** | Fiziksel emniyet butonu; makinede **7 adet**; emniyet devresini açar (**2.5**) |
| **Ana şalter** | Pano kapağındaki döner kol — TMŞ; enerji kesme ve LOTO noktası (**2.4**) |
| **Bakım kapağı** | Elle kaldırılarak açılan 7 hücre kapağı; manyetik emniyet switch'li (**2.1.3**) |
| **Besleme yönü** | Parça girişi — bu makinede **sol** taraf |
| **Blower** | Su sıyırma için yüksek hızlı hava üfleyen motor (4 adet, 4 kW); hava bıçağı borularını besler (**3.1.6**) |
| **Boşaltma yönü** | Parça çıkışı — bu makinede **sağ** taraf |
| **Döngü süresi** | Bir parçanın girişten çıkışa hat boyunca geçiş süresi; konveyör hızına bağlı [EKSİK] (**3.3.2**) |
| **Emiş filtresi** | Tank içinde pompa emiş hattı ucundaki delikli silindir; haftalık temizlik (**10.1.4**) |
| **Emniyet rölesi** | Omron G9SB — acil stop ve kapak zincirlerini değerlendiren röle (**2.1.3**) |
| **Hassas (torba) filtre** | Pompa çıkışındaki gövde içindeki ince filtre; haftalık temizlik/değişim (**10.1.4**) |
| **Hücre** | Yıkama, durulama ve kurutma proseslerinin yapıldığı kapalı bölge; PVC perdeli |
| **Interlock** | Donanımsal kilitleme — seviye, kapak, acil stop, faz (**3.4.6**) |
| **Kalıcı devre dışı** | Makinenin bir daha devreye alınmayacağı hizmet dışı bırakma (**12.2.1**) |
| **KNV 90 7500 2B** | Makine ticari tanımı / model varyantı (KNV-90) |
| **Konveyör** | Redüktör tahrikli, inverter kontrollü zincirli tel bant konveyör (**3.1.2**) |
| **Nozul** | Hücre içindeki püskürtme ucu; 160 adet (**13.3**) |
| **Operatör tarafı** | Pano ve operatör paneli — bu makinede **sağ** taraf (**3.5**) |
| **Ön filtre** | Tank dönüş hattındaki filtre sepetleri; **günlük** temizlik (**10.1.3**) |
| **Potansiyometre** | Konveyör hız ayar düğmesi — 20–60 Hz (**3.4.7**) |
| **Run lambası** | Anahtar yanındaki beyaz çalışma lambası — çıkış devrede (**3.4.3**) |
| **Reset** | Acil stop veya kapak sonrası emniyet devresini yeniden devreye alma (**2.5**) |
| **Rezistans** | Elektrikli ısıtıcı — tank 7 × 8 kW, kurutma 2 × 12 kW (**3.3.4**) |
| **Seviye bekçisi** | Tank içindeki şamandıralı paslanmaz seviye elemanı (**11.7.2**) |
| **Seviye sensörü** | VEGASWING 51 çatal tip; seviye interlock'unu besler (**11.7.2**) |
| **Sızıntı tavası** | Makine altı su kaçağı toplama bölgesi (**11.7.4**) |
| **TANK 1 / TANK 2** | Yıkama tankı / durulama tankı |
| **Tel bant** | Konveyör taşıma yüzeyi; paslanmaz, aşınan parça (**13.3**) |
| **Termostat** | GEMO DTH2 — sıcaklık set değeri ve ısıtıcı kesme (**3.4.4**) |
| **Tork sınırlayıcı** | Konveyör redüktöründe aşırı yükte kayan kavrama (**3.1.2**) |
| **Yağ ayırıcı ünitesi** | Ayrı kabin; basınçlı hava tahrikli diyaframlı pompa ile yağlı suyu ayırır (**3.1.5**) |
| **Yağ sıyırıcı** | TANK 1 yüzey yağını toplayan disk tipi ünite (**3.1.5**) |
