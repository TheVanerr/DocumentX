# 3.4 Makine kontrolleri

Makinenin operasyonel kontrolü, elektrik panosu üzerindeki **HMI operatör paneli** ve **Siemens S7-1200 PLC** altyapısı üzerinden gerçekleştirilir. Operatör, proses fonksiyonlarını seçer, makineyi hazırlar, start/stop komutlarını verir ve alarm durumlarını HMI üzerinden izler. Tepe lambası makinenin anlık durumunu uzaktan görselleştirir; ayrıntılı güvenlik fonksiyonları **Bölüm 2**'de, arıza giderme **Bölüm 11**'de açıklanmıştır.

Bu bölümde HMI ekranlarının yapısı, menü düzeni ve her sayfanın işlevi anlatılır. Ekran görüntüleri bu projeye ait **SIMATIC HMI KTP700 Basic PN** arayüzünden alınmıştır.

---

## 3.4.1 Kontrol panosu — genel yapı

| Parametre | Değer |
|-----------|-------|
| Ana kontrol panosu konumu | Elektrik panosu üzerinde |
| Pano koruma sınıfı (IP) | IP55 |
| Pano boyutları (G × Y × D) | 800 × 1200 × 300 mm |
| Ana şalter konumu | Elektrik panosu üzerinde |
| HMI ekran boyutu | 7" |
| HMI marka / model | SIMATIC HMI KTP700 Basic PN (6AV2123-2GB03-0AX0) |

Elektrik panosu; güç dağıtımı, motor koruma, PLC, HMI, acil stop reset devresi ve tepe lambası sürücülerini barındırır. Besleme gerilimi, ana şalter değeri ve kurulu güç **Bölüm 3.3.3** — Elektrik özellikleri tablosunda SSOT olarak verilmiştir.

---

## 3.4.2 HMI açılış ekranı ve menü yapısı

HMI açıldığında açılış (splash) ekranı görüntülenir. Bu ekranda makine modeli (**KNV 30 3000**), seri numarası (**1726050**) ve kurulu güç (**50 kW**) bilgileri yer alır. Sağ üst köşedeki bayrak simgeleri ile arayüz dili seçilir: **Türkçe**, **İngilizce**, **Almanca**.

Ana menü yapısı sol kenar çubuğunda beş sayfa düğmesi ile sunulur:

| Menü düğmesi | İşlev |
|--------------|-------|
| **Çalışma Sayfası** | Günlük operasyon, hazırlık, start/stop, proses fonksiyon seçimi |
| **Ayarlar Sayfası** | Sıcaklık set değerleri, yağ sıyırıcı zamanları |
| **Alarm Sayfası** | Aktif ve geçmiş alarm kayıtları |
| **Manuel Sayfası** | Giriş sinyali izleme, manuel fonksiyon tetikleme, hava/su durumu |
| **Üretici Sayfası** | Kalıcı alarm listesi, toplam çalışma süresi (şifre korumalı) |

HMI arayüzünde **bir şifre** bulunmaktadır; üretici sayfası ve mühendislik düzeyindeki parametrelere erişim bu şifre ile sınırlandırılmıştır. Şifre dağıtımı ve yetkilendirme tesis yönetimi sorumluluğundadır.

Sol üst köşede tarih/saat bilgisi sürekli gösterilir; ayar sayfası veya sistem parametreleri üzerinden güncellenmesi gerekebilir (bkz. Bölüm 6.3 — Elektrik ayarları).

<!-- FOTO: HMI açılış ekranı — dil seçimi, model ve seri no -->
![HMI açılış ekranı](../../assets/3.4/1.png)

---

## 3.4.3 Çalışma sayfası

**Çalışma Sayfası**, makinenin normal otomatik operasyonu için birincil operatör arayüzüdür. Bu sayfada proses bölgelerinin sıcaklık durumu, hazırlık/start/stop komutları ve proses fonksiyon seçimleri toplanmıştır.

**Sıcaklık izleme blokları** (üst bölüm):

| Blok | Gösterilen değerler |
|------|---------------------|
| Yıkama | Set değeri ve anlık sıcaklık (°C) |
| Durulama | Set değeri ve anlık sıcaklık (°C) |
| Kurutma | Set değeri 1, anlık değer 1 ve anlık değer 2 (°C) |

**Operasyon düğmeleri** (orta bölüm):

1. **Hazırlık Start** — tank dolumu ve ısıtma prosedürünü başlatır (bkz. Bölüm 7.2 — Başlatma).
2. **Makine Stop** — konveyör, pompalar, fanlar ve tüm fonksiyonları durdurur.
3. **Makine Start** — hazırlık tamamlandıktan sonra otomatik prosesi başlatır.

**Proses fonksiyon seçicileri** (sağ alt): Yıkama, Durulama, Kurutma 1, Kurutma 2 ve Egzoz toggle anahtarları; istenen fonksiyonlar **yeşil** (aktif) konuma getirilerek proses yapılandırılır. Manuel mod bulunmamaktadır; fonksiyon seçimi bu sayfa üzerinden yapılır (bkz. Bölüm 7.1 — Çalışma modları).

<!-- FOTO: HMI çalışma sayfası — sıcaklık, start/stop, proses seçicileri -->
![HMI çalışma sayfası](../../assets/3.4/4.png)

---

## 3.4.4 Ayarlar sayfası

**Ayarlar Sayfası**, proses set değerlerinin operatör tarafından tanımlanması için kullanılır. Bu sayfadaki değişiklikler PLC programına aktarılır; makine durdurulmuş veya hazırlık aşamasında olması önerilir.

| Parametre bloğu | Ayarlanan değer |
|-----------------|-----------------|
| Yıkama sıcaklık | Set değeri (°C) |
| Durulama sıcaklık | Set değeri (°C) |
| Kurutma | Set değeri 1 (°C) |
| Yağ sıyırıcı | Çalışma süresi (dk) ve bekleme süresi (dk) |

Sıcaklık limitleri proses güvenliği ve parça malzemesi uyumluluğu açısından makine tasarım sınırları içinde tutulmalıdır. Tarih/saat ve dil ayarları da HMI ayar altyapısı üzerinden yapılabilir (bkz. Bölüm 6.3).

Encoder / feedback ve analog ölçeklendirme ayarları PLC programına gömülüdür; değişiklik yalnızca üretici yetkili servisi tarafından yapılmalıdır.

<!-- FOTO: HMI ayarlar sayfası — sıcaklık ve yağ sıyırıcı set değerleri -->
![HMI ayarlar sayfası](../../assets/3.4/3.png)

---

## 3.4.5 Manuel sayfası

**Manuel Sayfası** iki bölümden oluşur: **İnput Gözlem** (giriş sinyali izleme) ve **Manuel Kontrol** (bakım/test amaçlı fonksiyon tetikleme).

**İnput Gözlem** panelinde aşağıdaki sinyaller gerçek zamanlı izlenir (kırmızı/yeşil gösterge):

- Acil stop devresi durumu
- Faz sıra rölesi
- RFID kapak switch
- Pompa, fan ve yağ sıyırıcı termik aşırı yük durumları
- Isıtıcı kaçak akım koruma (F2, F3, F4)
- Yıkama ve durulama tankı alt/üst seviye sensörleri
- Sızıntı tavası sensörü
- Dolum vanaları ve aktarma (cascade) vanası konumları
- Ürün kaldı sensörü
- **Su bilgisi** ve **hava bilgisi** (bağlantı durumu — yeşil = OK)

Kurulum testlerinde su ve hava bağlantısı yapıldıktan sonra bu göstergelerin **yeşil** yanması beklenir (bkz. Bölüm 5.5 — Pnömatik dolum testi).

**Manuel Kontrol** düğmeleri yalnızca yetkili bakım personeli tarafından, güvenlik prosedürlerine uyularak kullanılmalıdır. Enerji izolasyonu gerektiren müdahalelerde **LOTO** uygulanmalıdır (bkz. Bölüm 2.4). Manuel düğmeler: yıkama pompası, durulama pompası, kurutma fanları 1–4, egzost, yıkama/durulama dolum vanaları, cascade vanası.

<!-- FOTO: HMI manuel sayfası — input gözlem ve manuel kontrol -->
![HMI manuel sayfası](../../assets/3.4/6.png)

---

## 3.4.6 Alarm sayfası

**Alarm Sayfası**, aktif ve geçmiş alarm kayıtlarını tablo formatında listeler. Tablo sütunları: **No.**, **Zaman**, **Tarih**, **Metin**.

Alarm oluştuğunda HMI bu sayfada kayıt görüntüler; eş zamanlı olarak tepe lambası **kırmızı** yanar. Operatör alarm metnini okuyarak müdahale önceliğini belirler; ayrıntılı hata kodu açıklamaları ve giderme adımları **Bölüm 11** — Arıza giderme tablosunda verilmiştir.

Sayfanın alt köşesinde **Ürün Alındı Onay** düğmesi bulunur. Çıkış konveyöründe parça algılandığında (Error-461) makine durur; parça robot tarafından alındıktan sonra bu düğmeye basılarak operasyon devam ettirilir.

<!-- FOTO: HMI alarm sayfası — alarm kayıt tablosu -->
![HMI alarm sayfası](../../assets/3.4/2.png)

---

## 3.4.7 Üretici sayfası

**Üretici Sayfası** şifre korumalıdır; yalnızca yetkili servis veya mühendislik personeli tarafından erişilmelidir. Bu sayfada:

- **Kalıcı alarm listesi** — silinmeyen arşiv alarm kayıtları (No., Zaman, Tarih, Metin sütunları)
- **Toplam makine çalışma süresi** — saat/dakika formatında kümülatif çalışma süresi

Kalıcı alarm geçmişi, tekrarlayan arızaların analizi ve bakım planlaması için kullanılır. Toplam çalışma süresi periyodik bakım periyotlarının takibinde referans alınabilir (bkz. Bölüm 9).

<!-- FOTO: HMI üretici sayfası — kalıcı alarm listesi ve çalışma süresi -->
![HMI üretici sayfası](../../assets/3.4/5.png)

---

## 3.4.8 PLC ve iletişim altyapısı

| Parametre | Değer |
|-----------|-------|
| PLC marka / model | SIEMENS SIMATIC S7-1200 |
| PLC CPU | S7-1200 CPU 1215C DC/DC/DC (6ES7215-1AG40-0XB0) |
| I/O modül özeti | 36 giriş / 24 çıkış |
| Fieldbus / protokol | Profinet |
| Uzaktan erişim | Evet — Secomea modülü |

PLC, proses mantığını, güvenlik interlock'larını (RFID, acil stop, seviye, termik) ve HMI veri alışverişini yönetir. I/O listesi dosya referansı: **1726050-ALPER-KNV 30 I/O LİSTESİ.pdf** — ayrı evrak teslim edilmemiştir (KD).

**DİKKAT — Yetkisiz müdahale:** PLC programı, sürücü parametreleri ve gömülü encoder/feedback ayarları yalnızca üretici yetkili servisi tarafından değiştirilmelidir. Yetkisiz yazılım değişikliği güvenlik fonksiyonlarını devre dışı bırakabilir.

---

## 3.4.9 Çalışma modları ve Start/Stop

| Parametre | Değer |
|-----------|-------|
| Mod seçici | Otomatik / Bakım |
| Manuel mod | Bulunmamaktadır |
| Step / tek adım modu | Bulunmamaktadır |
| Mod geçiş koşulları | Bulunmamaktadır |
| Jog / inching düğmeleri | Bulunmamaktadır |
| Start / Stop konumu | HMI çalışma sayfası — dijital düğmeler |

**Otomatik mod:** HMI çalışma sayfasında proses fonksiyonları seçilir; hazırlık tamamlandıktan sonra **Makine Start** ile makine kendiliğinden çalışır (bkz. Bölüm 7.1).

**Bakım modu:** Bakım için özel bir HMI modu yoktur. Bakım öncesi makine durdurulmalı, ana şalter kapatılmalı ve **LOTO prosedürü** uygulanmalıdır (bkz. Bölüm 2.4). Kapaklar yalnızca enerji izolasyonu sonrası açılmalıdır.

---

## 3.4.10 Acil durdurma

Makinede **4 adet acil stop butonu** bulunur (pano, giriş sağ, giriş sol, çıkış sol). Acil stop'a basıldığında tüm fonksiyonlar durur.

Reset prosedürü, acil stop sonrası yeniden başlatma koşulları ve operatör yükümlülükleri **Bölüm 2.5** — Acil durdurma sistemi alt bölümünde SSOT olarak verilmiştir; bu bölümde adımlar tekrarlanmaz.

---

## 3.4.11 Tepe lambası (sinyal lambaları)

| Renk | Anlam | Operatör yorumu |
|------|-------|-----------------|
| Kırmızı | Alarm | HMI alarm sayfasını kontrol edin; müdahale gerekebilir (bkz. Bölüm 11) |
| Sarı | Makine kullanıma hazır | Hazırlık tamamlandı; start verilebilir |
| Yeşil | Makine çalışıyor | Normal operasyon devam ediyor |

Tepe lambası, operatör tarafının makineye doğrudan bakmadan hat durumunu izlemesini sağlar. Renk kodlaması endüstriyel standart uygulamaları ile uyumludur; alarm durumunda hem lamba hem HMI eş zamanlı bilgi verir.

---

## 3.4.12 Reçete, trend ve uzaktan erişim

| Fonksiyon | Davranış |
|-----------|----------|
| Reçete / program kaydı | Herhangi bir reçete sınırı bulunmamaktadır |
| Trend / log kayıt süresi | [EKSİK] |
| Uzaktan erişim | Evet — Secomea modülü |

Reçete parametreleri (sıcaklık set değerleri, proses on/off adımları) HMI ayarlar ve çalışma sayfaları üzerinden tanımlanır. Kapasite ve ürün bazlı reçete detayları kullanıcı firma tarafından belirlenir (bkz. Bölüm 8.2).

---

**Bölüm 3.4 sonu.** Elektrik besleme değerleri için bkz. **Bölüm 3.3.3**; proses start/stop prosedürleri için bkz. **Bölüm 7**; alarm kodları için bkz. **Bölüm 11**.
