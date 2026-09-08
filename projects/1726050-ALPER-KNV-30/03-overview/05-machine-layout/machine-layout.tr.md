# 3.5 Makine yerleşim planı

Bu bölüm, makinenin tesis içindeki konumlandırılması, yön tanımları, minimum etraf boşlukları, bakım erişimi ve taşıma kısıtları için **tek kaynak (SSOT)** olarak kullanılır. Kurulum (Bölüm 5) ve nakliye (Bölüm 4) bölümleri alan gereksinimlerini buradan referans alır; aynı değerler tekrarlanmaz.

**Referans çizim:** `1726050-ALPER-KNV 30 3000 2B PRO IDE LAYOUT.PDF` — proje assets klasöründe (`assets/1726050-ALPER-KNV 30 3000 2B PRO IDE LAYOUT.PDF`).

<!-- FOTO: Layout çiziminden export veya makine üstten görünüm (EKLENECEK: FOTO-3-5-0-layout-genel.png) -->
![Genel yerleşim planı](../../assets/3.5/1.png)

---

## 3.5.1 Yön tanımları ve operatör tarafı

Makine yönleri, konveyör akış yönü ve operatör erişim tarafı kurulum, operasyon ve bakım planlamasında ortak referans olarak kullanılır. Tüm kılavuz metinlerinde aşağıdaki tanımlar geçerlidir:

| Tanım | Yön / Konum |
|-------|-------------|
| Operatör tarafı | Sağ |
| Besleme tarafı (giriş) | Sol |
| Boşaltma tarafı (çıkış) | Sağ |
| Konveyör akış yönü | Sol → Sağ |

Parçalar sol taraftan konveyöre alınır, yıkama → durulama → kurutma proses bölgelerinden geçer ve sağ taraftan hattan çıkar. Bu projede giriş ve çıkış **robot** ile gerçekleştirilir; robot erişim alanı planlanırken besleme ve boşaltma taraflarında yeterli manevra payı bırakılmalıdır.

Operatör, HMI paneli, ana şalter ve elektrik panosuna **sağ taraftan** erişir. Tepe lambası makine üzerinde operatör tarafından görülebilir konumdadır; renk anlamları **Bölüm 3.4.10**'da açıklanmıştır.

---

## 3.5.2 Minimum etraf boşlukları ve tavan yüksekliği

Kurulum alanı planlamasında aşağıdaki minimum boşluklar sağlanmalıdır. Bu değerler bakım kapaklarının açılması, filtre erişimi ve güvenli personel hareketi için gereklidir; daha dar alanlarda kurulum yapılmamalıdır.

| Bölge | Minimum boşluk |
|-------|----------------|
| Ön | 1000 mm |
| Arka | 1000 mm |
| Yan (her iki taraf) | 1000 mm |
| Tavan yüksekliği | 2500 mm |

| Ek gereksinim | Değer |
|---------------|-------|
| Montaj alanı minimum boyutu | 5 m × 3 m |
| Zemin düzgünlük toleransı | 0,5 mm/m |
| Zemin yüzeyi | Sert ve düz |

Zemin mukavemeti, makinenin çalışma ağırlığı (**1500 kg** — bkz. **Bölüm 3.3.1**) ve dinamik yükleri taşıyacak düzeyde olmalıdır. Seviye ayarı ayarlanabilir ayaklar ile yapılır; hizalama toleransı **0,5 mm**'dir (bkz. **Bölüm 5** — Konumlandırma).

---

## 3.5.3 Bakım erişim bölgeleri

| Bölge | Erişim |
|-------|--------|
| Makine arkası | Kapakların tamamı sökülebilir ve erişilebilir |

Periyodik bakım, filtre temizliği, pompa kontrolü ve mekanik müdahaleler için makine **arkasındaki kapaklar** sökülerek iç bileşenlere erişilir. Kapaklar **RFID güvenlik sensörü** ile izlenir; kapak açıldığında makine durur. Bakım öncesi makine durdurulmalı, ana şalter kapatılmalı ve **LOTO prosedürü** uygulanmalıdır (bkz. **Bölüm 2.4**). Emniyet kapısı bypass edilmemelidir.

Günlük ön filtre temizliği ve haftalık tank/torba filtre bakımı bu erişim bölgeleri üzerinden yapılır (bkz. **Bölüm 9** ve **Bölüm 10**).

<!-- FOTO: Makine arka taraf — sökülebilir bakım kapakları (EKLENECEK: FOTO-3-5-3-bakim-kapaklari.jpg) -->
![Bakım erişim kapakları](../../assets/3.5/2.png)

---

## 3.5.4 Taşıma, forklift ve ağırlık merkezi

| Parametre | Değer / Not |
|-----------|-------------|
| Taşımada vinç kullanımı | Kesinlikle kullanılmamalıdır |
| Forklift taşıma | Makine altındaki profiller kullanılmalıdır |
| Forklift çatal girişi | Evet |
| Ağırlık merkezi | Makine konveyörünün ortası |

Makine taşınmasında vinç **kesinlikle kullanılmamalıdır**; kaldırma noktası veya sapanlama donanımı bulunmamaktadır. Forklift ile taşımada makine altındaki **taşıma profilleri** kullanılmalı; çatal uçları profil kanallarına tam oturtulmalıdır. Taşıma sırasında ortamda nem ve korozif madde bulunmamalıdır (bkz. **Bölüm 4** — Depolama koşulları).

Ağırlık merkezi konveyör hattının ortasındadır; forklift manevrasında makinenin dengesiz yüklenmesi devrilme riski oluşturur. Boş ağırlık **1300 kg**'dır (bkz. **Bölüm 3.3.1**).

---

## 3.5.5 Güvenlik elemanlarının yerleşimi

Acil stop butonları, RFID sensörlü kapaklar ve tepe lambası yerleşimi layout çiziminde gösterilmiştir. Acil stop konumları:

| No. | Konum |
|-----|-------|
| 1 | Elektrik panosu üzerinde |
| 2 | Makine girişinde konveyörün sağında |
| 3 | Makine girişinde konveyörün solunda |
| 4 | Makine çıkışında konveyörün solunda |

Acil stop'a basıldığında tüm fonksiyonlar durur. Reset prosedürü ve yeniden devreye alma koşulları **Bölüm 2.5**'te SSOT olarak verilmiştir; bu bölümde adımlar tekrarlanmaz.

Emniyet kapısı / sabit bariyer sayısı sıfırdır; makine güvenlik kategorisi **CAT3**'tür. Işık perdesi bulunmamaktadır (bkz. **Bölüm 2.3**).

---

Teknik boyut ve ağırlık değerleri için bkz. **Bölüm 3.3**; nakliye prosedürleri için bkz. **Bölüm 4**.
