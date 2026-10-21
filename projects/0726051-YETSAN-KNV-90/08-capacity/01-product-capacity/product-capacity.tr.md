# 8.1 Ürün kapasitesi

Kapasite değerlendirmesi, konveyör tel bandı üzerinde ilerleyen **endüstriyel parçalar** için yapılır. Makine tambur hacmi veya sepet kapasitesi ile tanımlanmaz; saatlik parça adedi, konveyör hızı, tel bant üzerindeki parça yerleşimi ve operatörün elle yükleme temposu tarafından birlikte belirlenir.

Referans teknik değerler için **Bkz. Bölüm 3.3.2**.

---

## 8.1.1 Kapasite parametreleri

| Parametre | Değer | Not |
| :--- | :--- | :--- |
| Nominal kapasite (adet/saat) | Müşteri firma belirler | Bkz. Bölüm 3.3.2 |
| Maksimum kapasite (adet/saat) | Müşteri firma belirler | |
| Minimum kapasite (adet/saat) | Müşteri firma belirler | |
| Döngü süresi | Sabit değer yok — işletmede ölçülür | Konveyör frekansına (20–60 Hz) ve hat uzunluğuna bağlı; ölçüm yöntemi aşağıda |
| Proses adımları | Yıkama → Durulama → Su sıyırma → Kurutma (4) | Bkz. Bölüm 3.1.1 |

Gerçek üretim kapasitesi; parça boyutu, kirlilik derecesi, hedef temizlik/kuruluk kriteri ve operatörün yükleme hızına göre değişir ve kullanıcı sahasında doğrulanmalıdır. Konveyör hızı, hedef temizlik/kuruluk kriterini sağlayacak kadar düşük; hedef adet/saati sağlayacak kadar yüksek seçilir.

Döngü süresi, bir parçanın konveyör girişinden çıkış ucuna kadar geçen süredir. Makine için sabit bir döngü süresi verilmez; süre, konveyör frekansına ve hat uzunluğuna bağlıdır ve her kullanılan frekans için işletmede aşağıdaki yöntemle ölçülür.

**Döngü süresi ölçüm yöntemi**

1. Konveyörü, ölçüm yapılacak frekansta (potansiyometre konumu) çalıştırın (**Bkz. Bölüm 6.3.4**).
2. İşaretli bir parçayı girişte, koruma kafesi dışından konveyöre koyun.
3. Parça tel banda bırakıldığı anda kronometreyi başlatın.
4. Parça çıkış ucuna ulaştığında kronometreyi durdurun.
5. Frekansı (potansiyometre konumu) ve ölçülen süreyi **Bölüm 8.1.3** tablosuna kaydedin.

---

## 8.1.2 Ürün sınırları

| Parametre | Değer |
| :--- | :--- |
| Ürün formatı / ambalaj tipi | Müşteri firma belirler |
| Ürün boyutu min (mm) | Müşteri firma belirler |
| Ürün boyutu max (mm) | Müşteri firma belirler |
| Ürün ağırlığı min (g) | Müşteri firma belirler |
| Ürün ağırlığı max (g) | Müşteri firma belirler |
| Parça genişliği ve geçiş açıklığı sınırı | **Bkz. Bölüm 3.2.2** |
| Maks. parça ağırlığı | **Bkz. Bölüm 3.2.2** |

Ürün değerleri müşteri prosesine göre belirlenir; ancak makinenin fiziksel sınırları aşılamaz: parça genişliği tel bant genişliğinden küçük olmalı ve parça, hücre giriş açıklığından perdelere ve nozullara takılmadan geçmelidir (**Bkz. Bölüm 3.2.2**). Parça tel bant üzerinde devrilmemeli, hücre tavanına veya nozul kolektörlerine temas etmemelidir. Amaçlanan kullanım sınırları için **Bkz. Bölüm 3.2**.

**DİKKAT — Aşırı yükleme:** Maks. parça ağırlığını (**Bkz. Bölüm 3.2.2**) aşan parça veya üst üste istiflenmiş yük; konveyör zincirini zorlar, tork sınırlayıcıyı kaydırır ve konveyörü 20 Hz civarında durdurabilir. Parçaları tek kat ve aralıklı yerleştirin.

---

## 8.1.3 Nominal kapasite tablosu

Nominal kapasite tablosu (ürün × adet/saat) **kullanıcı firma tarafından** oluşturulmalıdır. Aşağıdaki şablon örnek yapı içindir; değerler saha testi ile doldurulur:

| Ürün tipi | Adet/saat (hedef) | Konveyör (Hz / potansiyometre konumu) | Ölçülen döngü süresi (s) | Açık fonksiyonlar | Not |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Ürün A | [Kullanıcı firma] | [Kullanıcı firma] | [Kullanıcı firma] | | |
| Ürün B | [Kullanıcı firma] | [Kullanıcı firma] | [Kullanıcı firma] | | |
| Ürün C | [Kullanıcı firma] | [Kullanıcı firma] | [Kullanıcı firma] | | |
| … | … | … | … | | |

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
3. Konveyör hızı (Hz / potansiyometre konumu) ve ölçülen döngü süresi (**Bkz. Bölüm 8.1.1**)
4. Açık proses fonksiyonları (yıkama / durulama / blower / kurutma)
5. Tel bant üzerindeki parça yerleşimi ve yükleme aralığı
6. Kabul edilen temizlik/kuruluk kriteri

Test sonuçları **Bölüm 8.1.3** tablosuna işlenmelidir.

---

## 8.1.5 Maksimum sürekli çalışma

| Parametre | Değer |
| :--- | :--- |
| Maksimum sürekli çalışma süresi (saat/gün) | Müşteri firma tarafından belirlenir |

Makine, müşteri vardiya planına göre çalıştırılır ve çalışırken operatör gerektirir. Sürekli çalışma; periyodik bakım (**Bölüm 9**) ve temizlik (**Bölüm 10**) planlarına uyulduğu sürece geçerlidir. Günlük ön filtre temizliği, tank su kalitesi ve torba filtre durumu kesintisiz çalışmanın sınırlayıcı faktörleridir. Uzun duruşlarda tank boşaltma için **Bkz. Bölüm 7.3.4**.

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
| Egzoz etkinliği | Buhar birikimi kurutma verimini düşürür (**Bkz. Bölüm 3.1.7**) |

Kapasite düşüşü tespit edilirse önce konveyör hızını, set sıcaklıklarını, filtre durumunu ve su kalitesini kontrol edin (**Bkz. Bölüm 11**).

---

Ürün bazlı yapılandırma için **Bkz. Bölüm 8.2**.
