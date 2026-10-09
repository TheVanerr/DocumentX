# 6.1 Mekanik ayarlar

KNV 90 7500 2B makinesi fabrika çıkışında mekanik ayar gerektirmeyecek şekilde devreye alınmıştır. Konveyör zinciri ve tel bant, redüktör–tork sınırlayıcı bağlantısı, pompa montajları, nozul kolektörleri ve blower hava bıçağı boruları üretici toleransları içinde sabitlenmiştir; operatör veya bakım personelinin periyodik mekanik ince ayar yapması öngörülmemiştir. DATA'da bu proje için mekanik ayar noktası tanımlanmamıştır.

Bu bölüm, mekanik ayar kapsamının neden boş olduğunu ve hangi mekanik kontrollerin bakım kapsamında gözlemle yapıldığını açıklar. Mekanik bakım (yağlama, filtre, zincir gözlemi) **Bölüm 9**'da tanımlıdır.

---

## 6.1.1 Mekanik ayar noktaları

| Parametre | Değer / Açıklama |
| :--- | :--- |
| Mekanik ayar noktaları listesi | [EKSİK] — DATA'da tanımlı değil; operatör ayar noktası yok |

Makinede nozul mesafesi, limit switch, blower borusu konumu veya format değişimi için operatör ayar noktası bulunmaz. Mekanik müdahale gerektiren arızalarda (zincir atlaması, tel bant deformasyonu, nozul kolektörü hizası) üretici servisi devreye alınmalıdır (**Bkz. Bölüm 1.3**).

---

## 6.1.2 Referans / home pozisyonu

| Parametre | Değer / Açıklama |
| :--- | :--- |
| Referans / home pozisyon ayarı | [EKSİK] — uygulanmaz; konveyör sürekli hareketli, pozisyon kontrolü yok |

Makinede servo veya encoder bulunmadığından referans pozisyon kavramı yoktur. Konveyör, CONVEYOR anahtarı açıkken potansiyometre hızında sürekli döner.

---

## 6.1.3 Zincir / tel bant gerginliği ve limit ayarları

| Parametre | Değer / Açıklama |
| :--- | :--- |
| Zincir / tel bant gerginlik değeri | [EKSİK] — fabrika ayarı; sayısal değer tanımlı değil |
| Mesafe / limit switch ayarları | Uygulanmaz — limit switch yok |

Konveyör zincir ve tel bant gerginliği üretici montajında ayarlanmıştır. Gerginlik ve hiza, **haftalık** gözle kontrol maddesidir (**Bkz. Bölüm 9.1.3**): tel bant her iki kenarda eşit ilerlemeli, sarkma veya kenara sürtme olmamalıdır. Redüktör üzerindeki tork sınırlayıcı, sıkışmada kayarak zinciri korur; tork sınırlayıcının sık kayması (konveyör dururken motor çalışıyor) gerginlik veya sıkışma arızası belirtisidir ve üretici servisine bildirilir.

---

## 6.1.4 Nozul ve blower boruları

| Parametre | Değer / Açıklama |
| :--- | :--- |
| Nozul ayar aralığı (mm) | Uygulanmaz — nozullar sabit montajlı |
| Blower hava bıçağı borusu konumu | Uygulanmaz — sabit montajlı |

Yıkama ve durulama nozulları (160 adet, 650.724.1C.CC) kolektör borular üzerinde sabittir; parça formatına göre operatör ayarı yoktur. Tıkanan veya aşınan nozul 1000 saatlik bakımda kontrol edilir ve aynı tip ile değiştirilir (**Bkz. Bölüm 9.1.3, 13.3**).

---

## 6.1.5 Format değişimi

| Parametre | Değer / Açıklama |
| :--- | :--- |
| Format değişim prosedürü özeti | Yok — format değişim prosedürü tanımlı değil |

Farklı parça geometrileri mekanik değişiklik gerektirmez; proses sonucu konveyör hızı (**Bölüm 6.3.4**) ve termostat set değerleri (**Bölüm 6.3.3**) ile yönetilir (**Bkz. Bölüm 8.2**).

---

## 6.1.6 Mekanik ayar kontrol listesi

| # | Kontrol | Durum |
| :---: | :--- | :---: |
| 1 | Konveyör tel bandı her iki kenarda eşit ilerliyor; sürtme yok | ☐ |
| 2 | Tork sınırlayıcı kayma belirtisi yok | ☐ |
| 3 | Mekanik ayar gereksinimi yok — kayıt altına alındı | ☐ |

**Tarih:** _______________ **Kontrol eden:** _______________
