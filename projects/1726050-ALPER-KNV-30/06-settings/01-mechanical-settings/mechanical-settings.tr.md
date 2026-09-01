# 6.1 Mekanik ayarlar

KNV 30 3000 2B makinesi fabrika çıkışında mekanik ayar gerektirmeyecek şekilde devreye alınmıştır. Konveyör, pompa montajları ve proses nozulları OEM toleransları içinde sabitlenmiştir; operatör veya bakım personelinin periyodik mekanik ince ayar yapması öngörülmemiştir.

Bu bölüm, referans pozisyon tanımını ve mekanik ayar kapsamının neden boş olduğunu açıklar. Mekanik bakım (yağlama, filtre) **Bölüm 9**'da tanımlıdır.

---

## 6.1.1 Mekanik ayar noktaları

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Mekanik ayar noktaları listesi | Herhangi bir ayara gerek yoktur |

Makinede nozzle mesafesi, limit switch, zincir gerginliği veya format değişimi için operatör ayar noktası bulunmaz. Mekanik müdahale gerektiren arızalarda üretici servisi devreye alınmalıdır (bkz. **Bölüm 1.3**).

---

## 6.1.2 Referans / home pozisyonu

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Referans / home pozisyon ayarı | Referans olarak **konveyörün başı** kullanılmalıdır |

Konveyör başı, makine referans noktası olarak kabul edilir. Parça konumlandırma, sensör senkronizasyonu ve hat entegrasyonu bu referansa göre planlanır. Referans değişikliği PLC programını etkileyebilir; operatör tarafından yapılmamalıdır.

<!-- FOTO: Konveyör başı — referans noktası (besleme tarafı, sol) -->
![Referans pozisyon — konveyör başı](../../assets/6.1/1.png)

---

## 6.1.3 Zincir / kayış ve limit ayarları

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Zincir / kayış gerginlik değeri | Herhangi bir ayara gerek yoktur |
| Mesafe / limit switch ayarları | Herhangi bir ayara gerek yoktur |

Konveyör zincir/kayış gerginliği OEM montajında ayarlanmıştır. Gerginlik kontrolü periyodik bakım kapsamında gözlemlenir; ayar gerektiren aşınma **Bölüm 9**'da ele alınır.

---

## 6.1.4 Nozzle / doldurma kafası

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Nozzle / doldurma kafası ayar aralığı (mm) | Herhangi bir ayara gerek yoktur |

Yıkama ve durulama nozulları sabit montajlıdır; parça formatına göre operatör ayarı yoktur.

---

## 6.1.5 Format değişimi

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Format değişim prosedürü özeti | Format değişim prosedürü yoktur |

Farklı parça geometrileri proses parametreleri (HMI sıcaklık, fonksiyon on/off) ile yönetilir (bkz. **Bölüm 8.2**); mekanik format değişimi uygulanmaz.

---

## 6.1.6 Mekanik ayar kontrol listesi

| # | Kontrol | Durum |
|---|---------|:-----:|
| 1 | Referans noktası (konveyör başı) doğrulandı | ☐ |
| 2 | Mekanik OEM ayar gereksinimi yok — kayıt altına alındı | ☐ |

**Tarih:** _______________ **Kontrol eden:** _______________
