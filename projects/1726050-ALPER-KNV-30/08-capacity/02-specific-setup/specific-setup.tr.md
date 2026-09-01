# 8.2 Spesifik kurulum ve reçete yönetimi

Makinede **mekanik format değişim prosedürü yoktur** (bkz. **Bölüm 6.1.5**). Ürün ve proses farklılıkları HMI üzerinden **reçete mantığıyla** yönetilir: sıcaklık set değerleri, yağ sıyırıcı zamanları ve proses fonksiyon on/off seçimleri.

Reçete kayıt sayısında üst sınır **bulunmamaktadır** (bkz. **Bölüm 3.4.12**). Reçete numaralandırması ve ürün eşleştirmesi **kullanıcı firma** tarafından tanımlanır; üst sistem (robot PLC / MES) entegrasyonu müşteri otomasyon yapısına bağlıdır (**Bilinmiyor** — bkz. **Bölüm 5.6.2**).

---

## 8.2.1 Reçete kavramı ve HMI yapısı

Bu makinede ayrı bir "reçete listesi" ekranı yerine parametreler iki HMI sayfasında toplanır:

| Reçete bileşeni | HMI sayfası | Bölüm |
|-----------------|-------------|-------|
| Yıkama / durulama / kurutma sıcaklığı | Ayarlar Sayfası | 6.3.3, 3.4.4 |
| Yağ sıyırıcı çalışma / bekleme süresi | Ayarlar Sayfası | 6.3.3 |
| Yıkama, durulama, kurutma 1/2, egzoz on/off | Çalışma Sayfası | 7.1.6 |
| Hazırlık / start | Çalışma Sayfası | 7.2 |

Her ürün tipi için bu parametrelerin tutarlı bir seti "reçete" olarak kabul edilir. Üst sistemden reçete seçimi yapılıyorsa parametrelerin HMI'ya aktarılması müşteri yazılım sorumluluğundadır.

<!-- FOTO: HMI Ayarlar Sayfası — reçete sıcaklıkları -->
![HMI reçete / ayar sayfası](../../assets/8.2/1.png)

---

## 8.2.2 Yeni reçete oluşturma prosedürü

Yeni parça tipi devreye alınırken:

1. Makineyi **stop** durumuna getirin.
2. HMI **Ayarlar Sayfası**'nda hedef sıcaklık set değerlerini girin (yıkama, durulama, kurutma — bkz. **Bölüm 6.3.3**).
3. Yağ sıyırıcı çalışma ve bekleme sürelerini parça yağ yüküne göre ayarlayın.
4. HMI **Çalışma Sayfası**'nda gerekli proses fonksiyonlarını **aktif** konuma getirin.
5. **Hazırlık Start** ile dolum/ısıtmayı tamamlayın (bkz. **Bölüm 7.2**).
6. Örnek parça ile test yıkaması yapın; temizlik/kuruluk kriterini doğrulayın.
7. Onaylanan parametre setini reçete numarası ile kayıt altına alın (kullanıcı firma dokümantasyonu).
8. Robot hattı cycle süresinin makine döngüsü (**900 sn** nominal — bkz. **Bölüm 3.3.2**) ile uyumunu doğrulayın.

**Beklenen sonuç:** Parça hedef temizlik kriterini karşılar; hat cycle süresi içinde proses tamamlanır.

**Anormal durum:** Isıtma yetersizse set değerlerini ve ısıtıcı alarm durumunu kontrol edin (bkz. **Bölüm 11**).

---

## 8.2.3 Ürün bazlı parametreler

Aşağıdaki alanlar **kullanıcı firma tarafından** doldurulur:

| Parametre | Değer |
|-----------|-------|
| Ürün A parametreleri | Kullanıcı firma tarafından ayarlanır |
| Ürün B parametreleri | Kullanıcı firma tarafından ayarlanır |
| Ürün C parametreleri | Kullanıcı firma tarafından ayarlanır |

Örnek parametre seti şablonu (kullanıcı firma doldurur):

| Parametre | Ürün A | Ürün B | Ürün C |
|-----------|--------|--------|--------|
| Reçete no | | | |
| Yıkama sıcaklık (°C) | | | |
| Durulama sıcaklık (°C) | | | |
| Kurutma set (°C) | | | |
| Yağ sıyırıcı çalışma (dk) | | | |
| Yağ sıyırıcı bekleme (dk) | | | |
| Yıkama / Durulama / Kurutma 1/2 / Egzoz | on/off | on/off | on/off |
| Hedef adet/saat | | | |

---

## 8.2.4 Reçete numarası listesi

| Parametre | Değer |
|-----------|-------|
| Reçete no listesi | Kullanıcı firma tarafından ayarlanır |

Reçete numaralandırması ve ürün–reçete eşlemesi kullanıcı firma tarafından tanımlanmalıdır. Robot veya üst sistemden reçete seçimi yapılıyorsa HMI parametrelerinin otomatik veya operatör onaylı güncellenmesi müşteri otomasyon projesine aittir.

Örnek reçete listesi **Ek C**'de yer alabilir (bkz. **Bölüm 14** — DATA: Ek C — Reçete örnekleri, kullanıcı firma).

---

## 8.2.5 Spesifik kurulum kontrol listesi

| # | Kontrol | Durum |
|---|---------|:-----:|
| 1 | Ürün tipine uygun reçete parametre seti tanımlandı | ☐ |
| 2 | Tank sıcaklıkları hedef değerlere ayarlandı (Ayarlar Sayfası) | ☐ |
| 3 | Proses fonksiyonları doğru on/off (Çalışma Sayfası) | ☐ |
| 4 | Robot hattı cycle süresi ile makine döngüsü uyumu doğrulandı | ☐ |
| 5 | Örnek parça ile test yıkama yapıldı — kabul kriteri OK | ☐ |
| 6 | Kapasite test sonucu tabloya işlendi (Bölüm 8.1.3) | ☐ |

**Tarih:** _______________ **Kontrol eden:** _______________

---

**Bölüm 8.2 sonu.** Operasyon için bkz. **Bölüm 7**; kapasite limitleri için bkz. **Bölüm 8.1**.
