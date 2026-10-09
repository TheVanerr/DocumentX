# 8.2 Spesifik kurulum ve ürün bazlı yapılandırma

Makinede **mekanik format değişim prosedürü yoktur** (**Bkz. Bölüm 6.1.5**) ve **reçete hafızası bulunmaz** (HMI/PLC yok). Ürün ve proses farklılıkları üç ayar ile yönetilir: **konveyör hızı** (potansiyometre), **termostat set değerleri** (dört GEMO DTH2) ve **açık fonksiyon kombinasyonu** (panel anahtarları). Her ürün tipi için bu üç ayarın tutarlı seti kullanıcı firma tarafından yazılı olarak kaydedilir ve "reçete" olarak kullanılır.

Reçete numaralandırması ve ürün eşleştirmesi **kullanıcı firma** tarafından tanımlanır.

---

## 8.2.1 Ürün parametresi kavramı

| Parametre bileşeni | Ayar yeri | Bölüm |
| :--- | :--- | :--- |
| Yıkama / durulama su sıcaklığı | TANK 1 / TANK 2 HEATER termostatları | 6.3.3, 3.4.4 |
| Kurutma hava sıcaklığı | DRYING 1 / DRYING 2 HEATER termostatları | 6.3.3 |
| Konveyör hızı (temas süresi) | Potansiyometre — 20–60 Hz | 6.3.4 |
| Yıkama, durulama, blower, kurutma on/off | Panel anahtarları | 7.1.6 |
| Yağ sıyırıcı / yağ ayırıcı kullanımı | Panel anahtarları | 3.1.5 |

Ayarlar makinede saklanmadığından vardiya değişiminde veya ürün geçişinde değerler kayıttan okunarak elle girilir; bu nedenle kayıt formunun makine yanında bulunması zorunludur.

---

## 8.2.2 Yeni ürün parametresi oluşturma prosedürü

Yeni parça tipi devreye alınırken:

1. Hattı boşaltın; **CONVEYOR** anahtarını OFF alın (**Bkz. Bölüm 7.3.1**).
2. Termostatlarda hedef set değerlerini girin (TANK 1, TANK 2, DRYING 1, DRYING 2 — **Bkz. Bölüm 6.3.3**); su sıcaklığı +70 °C'yi aşmamalıdır.
3. Parça için gerekli proses fonksiyonlarını belirleyin (yıkama, durulama, blower, kurutma); gereksiz fonksiyonları kapalı tutun.
4. Konveyör hızını başlangıç değeri olarak orta aralıkta (ör. 40 Hz) ayarlayın.
5. Tankların set sıcaklığa ulaşmasını bekleyin; fonksiyonları **Bölüm 7.2.2** sırasına göre açın.
6. Örnek parça ile test yıkaması yapın; çıkışta temizlik ve kuruluk kriterini değerlendirin.
7. Sonuç yetersizse hızı düşürün veya sıcaklığı artırın; parça ıslak çıkıyorsa blower/kurutma açık mı ve kurutma sıcaklığı yeterli mi kontrol edin. Testi tekrarlayın.
8. Onaylanan hız (Hz), set değerleri ve fonksiyon kombinasyonunu **Bölüm 8.2.3** formuna ürün adı/numarası ile kaydedin.
9. Yükleme aralığını ve hedef adet/saati **Bölüm 8.1.3** tablosuna işleyin.

**Beklenen sonuç:** Parça hedef temizlik ve kuruluk kriterini karşılar; hedef adet/saat sağlanır.

**Anormal durum:** Isıtma set değere ulaşmıyorsa seviye, kaçak akım rölesi ve sigorta durumunu kontrol edin (**Bkz. Bölüm 11.3.3**); püskürtme zayıfsa filtre ve vana kontrolü yapın (**Bkz. Bölüm 10**).

---

## 8.2.3 Ürün bazlı parametreler

Aşağıdaki alanlar **kullanıcı firma tarafından** doldurulur:

| Parametre | Değer |
| :--- | :--- |
| Ürün A parametreleri | Müşteri firma tarafından ayarlanır |
| Ürün B parametreleri | Müşteri firma tarafından ayarlanır |
| Ürün C parametreleri | Müşteri firma tarafından ayarlanır |

Örnek parametre seti şablonu (kullanıcı firma doldurur):

| Parametre | Ürün A | Ürün B | Ürün C |
| :--- | :--- | :--- | :--- |
| Ürün / reçete no | | | |
| TANK 1 set sıcaklığı (°C) | | | |
| TANK 2 set sıcaklığı (°C) | | | |
| DRYING 1 set sıcaklığı (°C) | | | |
| DRYING 2 set sıcaklığı (°C) | | | |
| Konveyör hızı (Hz) | | | |
| Yıkama / Durulama / Blower 1-2 / Kurutma 1-2 | on/off | on/off | on/off |
| Yağ sıyırıcı / yağ ayırıcı | on/off | on/off | on/off |
| Yükleme aralığı (parça/dk) | | | |
| Hedef adet/saat | | | |

---

## 8.2.4 Reçete numarası listesi

| Parametre | Değer |
| :--- | :--- |
| Reçete no listesi | Müşteri firma tarafından ayarlanır (HMI/reçete yok — proses anahtarları ve termostat set değerleri) |

Reçete numaralandırması ve ürün–parametre eşlemesi kullanıcı firma tarafından tanımlanmalı ve makine yanında basılı olarak bulundurulmalıdır.

---

## 8.2.5 Spesifik kurulum kontrol listesi

| # | Kontrol | Durum |
| :---: | :--- | :---: |
| 1 | Ürün tipine uygun parametre seti tanımlandı ve kaydedildi | ☐ |
| 2 | Termostat set değerleri hedef değerlere girildi | ☐ |
| 3 | Konveyör hızı 20–60 Hz aralığında kaydedilen değere ayarlandı | ☐ |
| 4 | Proses fonksiyonları doğru on/off | ☐ |
| 5 | Örnek parça ile test yıkama yapıldı — kabul kriteri OK | ☐ |
| 6 | Kapasite test sonucu tabloya işlendi (Bölüm 8.1.3) | ☐ |

**Tarih:** _______________ **Kontrol eden:** _______________

---

Operasyon için bkz. **Bölüm 7**; kapasite limitleri için bkz. **Bölüm 8.1**.
