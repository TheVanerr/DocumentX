# 5.1 Makine montajı

Makine, ana gövde (konveyör, tanklar, hücreler, kurutma, egzoz bacası, elektrik panosu) ve ayrı **yağ ayırıcı ünitesi** olarak teslim edilir; ana gövde üzerinde kurulumda modül sökülmez. Montaj, makinenin forklift ile nihai konumuna indirilmesi, teraziye alınması, yağ ayırıcı ünitesinin bağlanması ve tesisat bağlantılarının yapılmasını kapsar. Taşıma ve indirme **Bölüm 4.1** forklift prosedürüne göre yapılır.

Bu bölüm montajın ana adım sırasını verir. Konumlandırma ayrıntıları **Bölüm 5.2**'de; bağlantı prosedürleri **Bölüm 5.3**'te; güvenlik ve doğrulama testleri **Bölüm 5.4** ve **5.5**'te detaylandırılmıştır.

---

## 5.1.1 Montaj ön hazırlık

Montaja başlamadan önce aşağıdaki koşullar sağlanmalıdır:

| Parametre | Gereksinim |
| :--- | :--- |
| Montaj süresi tahmini | [EKSİK] |
| Montaj ekip sayısı | [EKSİK] |
| Gerekli vinç / ekipman | [EKSİK] — forklift (**Bkz. Bölüm 4.1**) |
| Montaj alanı min. boyut | [EKSİK] (**Bkz. Bölüm 3.5.2**) |
| Zemin düzgünlük toleransı | [EKSİK] |
| Zemin mukavemet gereksinimi | [EKSİK] |
| Ortam sıcaklığı | +10 °C – +30 °C |
| Ortam | Kapalı iç mekân; nem ve korozif madde olmamalı |

Tesisat hazırlığı: **6 bar** basınçlı hava, **1 bar** su, **380 V / 50 Hz / 3 faz / 3P+N+PE** elektrik hattı (110 kW / 220 A — **Bkz. Bölüm 3.3.3**, **3.3.5**), egzoz bacası için havalandırma kanalı veya dış ortam çıkışı, tank tahliyesi için atık su hattı.

**UYARI — Elektrik:** 380 V trifaze besleme bağlantısı yalnızca yetkili elektrik personeli tarafından yapılmalıdır.

---

## 5.1.2 Montaj adımları — özet

Montaj aşağıdaki sırayla gerçekleştirilmelidir. DATA'da proje için adım bazlı tork/tolerans değeri tanımlı değildir ([EKSİK]); adımlar makine tipinin standart kurulum sırasıdır.

| Adım | İşlem | Detay bölüm |
| :---: | :--- | :--- |
| 1 | Makine kurulacağı bölgeye forklift ile getirildi ve indirildi | Bölüm 4.1.4 |
| 2 | Koruyucu örtü ve bağlama elemanları söküldü; hasar kontrolü yapıldı | Bölüm 4.1.3, 4.1.5 |
| 3 | Makine zemine oturtuldu; ayarlanabilir ayaklar ile teraziye alındı | Bölüm 5.2.3 |
| 4 | Yağ ayırıcı ünitesi makine yanına yerleştirildi; hortum ve hava hattı bağlandı | Bölüm 5.3.5 |
| 5 | Basınçlı hava bağlantısı yapıldı; regülatör 6 bar | Bölüm 5.3.1 |
| 6 | Su bağlantısı ve tank tahliye / atık su hattı yapıldı | Bölüm 5.3.2 |
| 7 | Egzoz bacası tesis havalandırmasına / dış ortama bağlandı | Bölüm 5.3.4 |
| 8 | Trifaze elektrik beslemesi ve topraklama bağlandı | Bölüm 5.3.3 |
| 9 | Ana şalter açıldı; faz sırası doğrulandı ve gerekirse düzeltildi | Bölüm 5.3.6 |
| 10 | Güvenlik fonksiyon testleri ve kurulum doğrulama tamamlandı; makine kullanıma hazır | Bölüm 5.4, 5.5 |

---

## 5.1.3 Adım 3 — Teraziye alma

Makine **ayarlanabilir ayak** sistemi üzerine oturtulur. Uzun hat yapısında teraziye alma, konveyör zincirinin her iki yanda eşit gerilmesi, tank sıvı seviyesinin seviye sensörüne göre doğru okunması ve hücre kapaklarının switch'lerle hizalı kapanması için kritiktir. Hizalama toleransı DATA'da tanımlı değildir ([EKSİK]); **Bölüm 5.2.3** prosedürü uygulanır.

**Beklenen sonuç:** Su terazisi ile her iki eksende makine dengeli; tüm ayaklar zemine eşit temas eder; tank ve hücre kapakları zorlanmadan kapanır.

---

## 5.1.4 Adım 4–8 — Yağ ayırıcı, medya, egzoz ve elektrik bağlantıları

Bağlantı prosedürleri **Bölüm 5.3**'te adım adım verilmiştir. Özet:

| Bağlantı | Değer | Referans |
| :--- | :--- | :--- |
| Basınçlı hava | 6 bar — makine gövdesindeki AIR INLET regülatörü | Bölüm 3.3.5 |
| Su | 1 bar — tank elle dolum; TAHLİYE vanaları atık su hattına | Bölüm 3.3.5 |
| Egzoz | Baca → tesis havalandırması / dış ortam | Bölüm 5.3.4 |
| Yağ ayırıcı ünitesi | Hortum + hava hattı (solenoid valf) | Bölüm 5.3.5 |
| Elektrik | 380 V, 50 Hz, 3 faz, 3P+N+PE, 110 kW / 220 A | Bölüm 3.3.3 |

Bağlantı sonrası hava regülatöründe **6 bar** okunmalı; ana şalter açıldığında RESET butonuna basıldığında mavi lamba yanmalıdır (**Bkz. Bölüm 5.5**).

---

## 5.1.5 Adım 9 — Devreye alma ve faz kontrolü

1. Trifaze besleme panoya bağlandıktan sonra makine ana şalteri **ON** konumuna alınır.
2. Faz sıra rölesi **MKR-01** çıkış durumu kontrol edilir; röle çıkış vermiyorsa faz sırası ters veya faz eksiktir.
3. Faz yönü ters ise ana şalteri **OFF** alın; yetkili elektrik personeli besleme hattında **iki fazı** değiştirir; ardından şalteri açıp röleyi yeniden doğrular. Enerji açıkken faz değiştirmeyin.

Pompalar, fanlar ve blowerlar tek yönde çalışacak şekilde tasarlanmıştır; yanlış faz sırası pompa basıncının düşmesine, fan debisinin azalmasına ve motorların zorlanmasına yol açar (**Bkz. Bölüm 5.3.6, 6.3.1**).

---

## 5.1.6 Adım 10 — Montaj tamamlama

Makine **kullanıma hazır** kabul edilmeden önce aşağıdaki testler tamamlanmalıdır:

| Test | Bölüm |
| :--- | :--- |
| Güvenlik fonksiyon testleri — 7 acil stop, 7 kapak switch'i, faz koruma, RESET | 5.4 |
| Kurulum doğrulama ve boş koşu | 5.5 |
| İletişim doğrulama | 5.6 — uygulanmaz (fieldbus yok) |

Operasyona geçmeden önce **Bölüm 6** ayarlarının (termostat set değerleri, regülatör basıncı, konveyör hız aralığı) gözden geçirilmesi önerilir.
