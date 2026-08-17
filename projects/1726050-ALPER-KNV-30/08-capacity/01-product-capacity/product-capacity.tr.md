# 8.1. Ürün Kapasitesi

Kapasite değerlendirmesi konveyör üzerinde ilerleyen parçalar için yapılır; tambur hacmi veya ağırlık sınırı geçerli değildir.

---

## 8.1.1. Kapasite Parametreleri

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Nominal kapasite (adet/saat) | Kullanıcı firma tarafından belirlenir |
| Maksimum kapasite (adet/saat) | Bilinmiyor — kullanıcı firma tarafından belirlenir |
| Minimum kapasite (adet/saat) | **730** |
| Nominal döngü süresi (sn) | **900** (15 dk) |
| Proses adımları | Yıkama → Durulama → Kurutma (3 adım) |

---

## 8.1.2. Ürün Sınırları

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Ürün formatı / ambalaj tipi | Bilinmiyor — kullanıcı firma tarafından belirlenir |
| Ürün boyutu min (mm) | Bilinmiyor — kullanıcı firma tarafından belirlenir |
| Ürün boyutu max (mm) | Bilinmiyor — kullanıcı firma tarafından belirlenir |
| Ürün ağırlığı min (g) | Bilinmiyor — kullanıcı firma tarafından belirlenir |
| Ürün ağırlığı max (g) | Bilinmiyor — kullanıcı firma tarafından belirlenir |

Parça boyutu ve ağırlığı; konveyör genişliği, robot tutuş noktası ve banyo geometrisine uygun olmalıdır. Uygunluk kullanıcı firma tarafından proses koşullarına göre doğrulanmalıdır.

---

## 8.1.3. Nominal Kapasite Tablosu

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Nominal kapasite tablosu (ürün × adet/saat) | **Kullanıcı firma tarafından ayarlanır** |

Ürün tipine göre adet/saat değerleri kullanıcı firma tarafından HMI reçeteleri ve robot hattı cycle süreleri ile birlikte tanımlanmalıdır.

---

## 8.1.4. Test Edilen Kapasite ve Koşulları

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Test edilen kapasite (adet/saat) | **Kullanıcı firma tarafından ayarlanır** |
| Kapasite test koşulları | **Kullanıcı firma tarafından ayarlanır** |

Kapasite testi; gerçek parça geometrisi, hedef temizlik kriterleri, reçete sıcaklıkları ve robot besleme/çıkış hızları ile kullanıcı sahasında yapılmalıdır.

---

## 8.1.5. Maksimum Sürekli Çalışma

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Maksimum sürekli çalışma süresi (saat/gün) | **24/7 çalışabilir** |

Makine 7/24 robot hattında kesintisiz çalışmaya uygundur. Periyodik bakım ve temizlik prosedürleri için bkz. Bölüm **9** ve **10**.

---

## 8.1.6. Kapasiteyi Etkileyen Faktörler

| Faktör | Etki |
|--------|------|
| Robot besleme / çıkış hızı | Hat cycle süresini belirler |
| HMI reçete sıcaklıkları | Isıtma süresini etkiler (bkz. Bölüm **7.2**) |
| Aktif proses fonksiyonları | Yıkama, durulama, kurutma 1/2 on/off seçimi |
| Parça geometrisi ve kirlilik derecesi | Etkin yıkama süresini etkiler |
| Pompa önü vanalar | Kapalı vanalar proses verimini düşürür |

> **Not:** Minimum kapasite değeri (730 adet/saat) makine tasarım referansıdır. Gerçek üretim kapasitesi müşteri hattı koşullarına göre değişir.
