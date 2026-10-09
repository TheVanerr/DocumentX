# 8.1 Ürün kapasitesi

Kapasite değerlendirmesi, konveyör tel bandı üzerinde ilerleyen **endüstriyel parçalar** için yapılır. Makine tambur hacmi veya sepet kapasitesi ile tanımlanmaz; saatlik parça adedi, konveyör hızı, tel bant üzerindeki parça yerleşimi ve operatörün elle yükleme temposu tarafından birlikte belirlenir.

Referans teknik değerler **Bölüm 3.3.2** tablosunda verilmiştir.

---

## 8.1.1 Kapasite parametreleri

| Parametre | Değer | Not |
| :--- | :--- | :--- |
| Nominal kapasite (adet/saat) | Müşteri firma belirler | Bkz. Bölüm 3.3.2 |
| Maksimum kapasite (adet/saat) | Müşteri firma belirler | |
| Minimum kapasite (adet/saat) | Müşteri firma belirler | |
| Döngü süresi — nominal | [EKSİK] | Konveyör 20–60 Hz ve hat uzunluğuna bağlı |
| Proses adımları | Yıkama → Durulama → Su sıyırma → Kurutma (4) | Bkz. Bölüm 3.1.1 |

Gerçek üretim kapasitesi; parça boyutu, kirlilik derecesi, hedef temizlik/kuruluk kriteri ve operatörün yükleme hızına göre değişir ve kullanıcı sahasında doğrulanmalıdır. Konveyör hızı, parça hücre içinde yeterli süre kalacak kadar düşük; hedef adet/saat sağlanacak kadar yüksek seçilir.

---

## 8.1.2 Ürün sınırları

| Parametre | Değer |
| :--- | :--- |
| Ürün formatı / ambalaj tipi | Müşteri firma belirler |
| Ürün boyutu min (mm) | Müşteri firma belirler |
| Ürün boyutu max (mm) | Müşteri firma belirler |
| Ürün ağırlığı min (g) | Müşteri firma belirler |
| Ürün ağırlığı max (g) | Müşteri firma belirler |

Parça boyutu ve ağırlığı; tel bant genişliği, hücre giriş kesiti (PVC perde açıklığı), nozul kapsama alanı ve blower hava bıçağı yüksekliğine uygun olmalıdır. Parça tel bant üzerinde devrilmemeli, hücre tavanına veya nozul kolektörlerine temas etmemelidir. Amaçlanan kullanım sınırları **Bölüm 3.2**'de tanımlıdır.

**DİKKAT — Aşırı yükleme:** Tel bant taşıma kapasitesini aşan parça veya üst üste istiflenmiş yük; konveyör zincirini zorlar, tork sınırlayıcıyı kaydırır ve konveyörü 20 Hz civarında durdurabilir. Parçaları tek kat ve aralıklı yerleştirin.

---

## 8.1.3 Nominal kapasite tablosu

Nominal kapasite tablosu (ürün × adet/saat) **kullanıcı firma tarafından** oluşturulmalıdır. Aşağıdaki şablon örnek yapı içindir; değerler saha testi ile doldurulur:

| Ürün tipi | Adet/saat (hedef) | Konveyör (Hz) | Açık fonksiyonlar | Not |
| :--- | :--- | :--- | :--- | :--- |
| Ürün A | [Kullanıcı firma] | [Kullanıcı firma] | | |
| Ürün B | [Kullanıcı firma] | [Kullanıcı firma] | | |
| Ürün C | [Kullanıcı firma] | [Kullanıcı firma] | | |
| … | … | … | | |

Tablo, **Bölüm 8.2.3** ürün parametre kayıtları ile birlikte tutulmalıdır.

---

## 8.1.4 Test edilen kapasite ve koşulları

| Parametre | Değer |
| :--- | :--- |
| Test edilen kapasite (adet/saat) | Müşteri firma tarafından belirlenir |
| Kapasite test koşulları | Müşteri firma tarafından belirlenir |

Kapasite testi kullanıcı sahasında, **gerçek parça** ve hedef temizlik kriterleri ile yapılmalıdır. Test koşulları en az şunları içermelidir:

1. Parça tipi ve kirlilik derecesi tanımı
2. Termostat set değerleri (TANK 1, TANK 2, DRYING 1, DRYING 2)
3. Konveyör hızı (Hz)
4. Açık proses fonksiyonları (yıkama / durulama / blower / kurutma)
5. Tel bant üzerindeki parça yerleşimi ve yükleme aralığı
6. Kabul edilen temizlik/kuruluk kriteri

Test sonuçları **Bölüm 8.1.3** tablosuna işlenmelidir.

---

## 8.1.5 Maksimum sürekli çalışma

| Parametre | Değer |
| :--- | :--- |
| Maksimum sürekli çalışma süresi (saat/gün) | Müşteri firma tarafından belirlenir |

Makine, müşteri vardiya planına göre çalıştırılır ve çalışırken operatör gerektirir. Sürekli çalışma; periyodik bakım (**Bölüm 9**) ve temizlik (**Bölüm 10**) planlarına uyulduğu sürece geçerlidir. Günlük ön filtre temizliği, tank su kalitesi ve torba filtre durumu kesintisiz çalışmanın sınırlayıcı faktörleridir. Uzun duruşlarda tank boşaltma **Bölüm 7.3.4**'e göre yapılır.

---

## 8.1.6 Kapasiteyi etkileyen faktörler

| Faktör | Etki |
| :--- | :--- |
| Konveyör hızı (20–60 Hz) | Temas süresi ↔ adet/saat dengesini doğrudan belirler (**Bkz. Bölüm 6.3.4**) |
| Operatör yükleme/boşaltma temposu | Elle beslemede fiili üst sınırı belirler |
| Termostat set değerleri | Isıtma süresi ve yıkama etkinliği (**Bkz. Bölüm 6.3.3**) |
| Açık proses fonksiyonları | Blower/kurutma kapalıysa parça ıslak çıkar |
| Parça geometrisi ve kirlilik | Gerekli temas süresi ve nozul kapsama etkinliği |
| Pompa vanaları ve filtre durumu | Kapalı vana veya tıkalı filtre püskürtme basıncını düşürür (**Bkz. Bölüm 9, 10**) |
| Proses suyu kalitesi / yağ yükü | Kirli su temizlik sonucunu düşürür; yağ sıyırıcı ve yağ ayırıcı kullanımı |
| Egzoz etkinliği | Buhar birikimi kurutma verimini düşürür |

Kapasite düşüşü tespit edilirse önce konveyör hızı, set sıcaklıkları, filtre durumu ve su kalitesi kontrol edilmelidir (**Bkz. Bölüm 11**).

---

Ürün bazlı yapılandırma için bkz. **Bölüm 8.2**.
