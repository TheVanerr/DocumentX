# 8.2 Spesifik kurulum

Makinede **format değişim prosedürü yoktur** (bkz. Bölüm **6.1.5**). Ürün/reçete parametreleri HMI üzerinden kullanıcı firma tarafından ayarlanır.

---

## 8.2.1 Reçete / program parametreleri

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Reçete kayıt sınırı | Herhangi bir reçete sınırı bulunmamaktadır |
| Sıcaklık ayarı | HMI ayar sayfasından (yıkama/durulama tank sıcaklıkları) |
| Proses fonksiyon seçimi | HMI çalışma sayfası — yıkama, durulama, kurutma 1, kurutma 2, egzos on/off |

Reçete parametreleri (sıcaklık, proses süreleri vb.) kullanıcı firmanın parça tipine ve temizlik hedefine göre HMI üzerinden tanımlanmalıdır.

<!-- FOTO: HMI reçete / ayar sayfası -->
![HMI reçete ayar sayfası](../../assets/FOTO-8-2-0-recete.png)

---

## 8.2.2 Ürün bazlı parametreler

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Ürün A parametreleri | **Kullanıcı firma tarafından ayarlanır** |
| Ürün B parametreleri | **Kullanıcı firma tarafından ayarlanır** |
| Ürün C parametreleri | **Kullanıcı firma tarafından ayarlanır** |

Her ürün tipi için ayrı reçete oluşturulabilir. Parametreler (sıcaklık, aktif proses adımları, cycle süresi) robot hattı cycle'ı ile uyumlu olacak şekilde kullanıcı firma tarafından belirlenmelidir.

---

## 8.2.3 Reçete numarası listesi

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Reçete no listesi | **Kullanıcı firma tarafından ayarlanır** |

Reçete numaralandırması ve ürün eşleştirmesi kullanıcı firma tarafından tanımlanmalıdır. Robot PLC / üst sistem entegrasyonu varsa reçete seçimi müşteri otomasyon yapısına göre yapılır.

---

## 8.2.4 Spesifik kurulum kontrol listesi

| # | Kontrol | Durum |
|---|---------|-------|
| 1 | Ürün tipine uygun reçete seçildi / oluşturuldu | ☐ OK / ☐ NOK |
| 2 | Tank sıcaklıkları hedef değerlere ayarlandı | ☐ OK / ☐ NOK |
| 3 | Proses fonksiyonları (yıkama/durulama/kurutma) doğru on/off | ☐ OK / ☐ NOK |
| 4 | Robot hattı cycle süresi ile uyum doğrulandı | ☐ OK / ☐ NOK |
| 5 | Örnek parça ile test yıkama yapıldı | ☐ OK / ☐ NOK |

**Tarih:** _______________ **Kontrol eden:** _______________

> **Not:** İlk kurulum ve yeni ürün devreye alma testleri kullanıcı firma sahasında gerçek parça ile yapılmalıdır.
