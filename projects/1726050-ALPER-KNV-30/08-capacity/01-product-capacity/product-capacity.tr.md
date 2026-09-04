# 8.1 Ürün kapasitesi

Kapasite değerlendirmesi, konveyör üzerinde ilerleyen **endüstriyel parçalar** için yapılır. Makine tambur hacmi veya toplu yükleme kapasitesi ile tanımlanmaz; hat throughput'u konveyör akış hızı, robot cycle time ve proses süresi birlikte belirler.

Referans teknik değerler **Bölüm 3.3.2** — Kapasite ve proses parametreleri tablosunda SSOT olarak verilmiştir.

---

## 8.1.1 Kapasite parametreleri

| Parametre | Değer | Not |
|-----------|-------|-----|
| Nominal kapasite (adet/saat) | Kullanıcı firma belirler | Bkz. Bölüm 3.3.2 |
| Maksimum kapasite (adet/saat) | Kullanıcı firma belirler | |
| Minimum kapasite (adet/saat) | **730** | Tasarım referans değeri |
| Nominal döngü süresi | **900 sn** (15 dk) | Bkz. Bölüm 3.3.2 |
| Proses adımları | Yıkama → Durulama → Kurutma (3) | Bkz. Bölüm 3.1 |

Minimum kapasite (**730 adet/saat**), makine tasarım referansıdır. Gerçek üretim kapasitesi robot hattı cycle süresi, parça boyutu ve proses parametrelerine göre değişir; kullanıcı sahasında doğrulanmalıdır.

---

## 8.1.2 Ürün sınırları

| Parametre | Değer |
|-----------|-------|
| Ürün formatı / ambalaj tipi | Kullanıcı firma belirler |
| Ürün boyutu min (mm) | Kullanıcı firma belirler |
| Ürün boyutu max (mm) | Kullanıcı firma belirler |
| Ürün ağırlığı min (g) | Kullanıcı firma belirler |
| Ürün ağırlığı max (g) | Kullanıcı firma belirler |

Parça boyutu ve ağırlığı; konveyör genişliği (**1730 mm** dış genişlik — bkz. **Bölüm 3.3.1**), robot tutuş noktası, nozul kapsama alanı ve banyo geometrisine uygun olmalıdır. Amaçlanan kullanım sınırları **Bölüm 3.2**'de tanımlıdır.

**DİKKAT — Aşırı yükleme:** Konveyör taşıma kapasitesini aşan parça veya istiflenmiş yük konveyör mekanizmasına ve proses kalitesine zarar verir.

---

## 8.1.3 Nominal kapasite tablosu

Nominal kapasite tablosu (ürün × adet/saat) **kullanıcı firma tarafından** oluşturulmalıdır. Aşağıdaki şablon örnek yapı içindir; değerler saha testi ile doldurulur:

| Ürün tipi | Adet/saat (hedef) | Döngü süresi (sn) | Not |
|-----------|-------------------|-------------------|-----|
| Ürün A | [Kullanıcı firma] | [Kullanıcı firma] | |
| Ürün B | [Kullanıcı firma] | [Kullanıcı firma] | |
| Ürün C | [Kullanıcı firma] | [Kullanıcı firma] | |
| … | … | … | |

Tablo, robot PLC / üst sistem reçete eşlemesi ile uyumlu tutulmalıdır (bkz. **Bölüm 8.2**).

---

## 8.1.4 Test edilen kapasite ve koşulları

| Parametre | Değer |
|-----------|-------|
| Test edilen kapasite (adet/saat) | Kullanıcı firma tarafından ayarlanır |
| Kapasite test koşulları | Kullanıcı firma tarafından ayarlanır |

Kapasite testi kullanıcı sahasında, **gerçek parça** ve hedef temizlik kriterleri ile yapılmalıdır. Test koşulları en az şunları içermelidir:

1. Parça tipi ve kirlilik derecesi tanımı
2. HMI sıcaklık set değerleri (yıkama, durulama, kurutma)
3. Aktif proses fonksiyonları (yıkama/durulama/kurutma on/off)
4. Robot besleme ve çıkış cycle süreleri
5. Kabul edilen temizlik/kuruluk kriteri

Test sonuçları **Bölüm 8.1.3** tablosuna işlenmelidir.

---

## 8.1.5 Maksimum sürekli çalışma

| Parametre | Değer |
|-----------|-------|
| Maksimum sürekli çalışma | **24/7** |

Makine kesintisiz (**7/24**) robot hattında çalışmaya uygundur. Sürekli çalışma; periyodik bakım (**Bölüm 9**) ve temizlik (**Bölüm 10**) planlarına uyulduğu sürece geçerlidir. Uzun duruşlarda tank boşaltma **Bölüm 7.3.4**'e göre yapılır.

---

## 8.1.6 Kapasiteyi etkileyen faktörler

| Faktör | Etki |
|--------|------|
| Robot besleme / çıkış hızı | Hat cycle süresini doğrudan belirler |
| Nominal makine döngüsü (900 sn) | Konveyör proses süresi referansı |
| HMI sıcaklık set değerleri | Isıtma süresini etkiler (bkz. **Bölüm 6.3.3**) |
| Aktif proses fonksiyonları | Yıkama, durulama, kurutma 1/2, egzoz on/off |
| Parça geometrisi ve kirlilik derecesi | Etkin yıkama kalitesi ve gerekli temas süresi |
| Pompa önü vanalar | Kapalı vanalar proses verimini düşürür |
| Filtre durumu | Tıkalı filtre pompa debisini ve proses kalitesini düşürür (bkz. **Bölüm 9**, **10**) |

Kapasite düşüşü tespit edilirse önce robot cycle, reçete sıcaklıkları ve filtre durumu kontrol edilmelidir (**Bkz. Bölüm 11**).

---

**Bölüm 8.1 sonu.** Reçete yapılandırması için bkz. **Bölüm 8.2**.
