# 5.1. Makine Montajı

Montaj tahmini **1 gün** sürer ve **1 kişilik** ekip ile gerçekleştirilir. Taşıma ve yerleştirme için **forklift** kullanılmalıdır; makine taşınmasında **vinç kesinlikle kullanılmamalıdır**. Forklift çatalı ile taşıma yapılmalıdır; makine altındaki profiller forklift girişi için kullanılır. Taşıma ağırlığı (montajlı): **1300 kg** — taşıma sırasında herhangi bir parça ayrılmayacak şekilde taşınmalıdır.

---

## 5.1.1. Montaj Ön Hazırlık

Montaja başlamadan önce aşağıdaki koşullar sağlanmalıdır:

| Parametre | Gereksinim |
|-----------|------------|
| Montaj alanı min. boyut | 5 m × 3 m |
| Zemin düzgünlük toleransı | 0,5 mm/m |
| Zemin mukavemeti | Zemin yüzeyi sert ve düz olmalıdır |
| Gerekli ekipman | Forklift |
| Ambalaj tipi | Konteyner |
| Taşıma sıcaklığı | +10°C – +30°C |
| Taşıma ortamı | Nem ve korozif maddeler bulunmamalıdır |

Makine, konteyner ambalajı ile sevk edilir. Kurulum alanına taşınırken forklift çatal girişi (makine alt profilleri) kullanılmalıdır.

<!-- FOTO: Forklift ile makine taşıma — alt profil çatal girişi -->
![Forklift taşıma](../../assets/FOTO-5-1-0-forklift-tasima.png)

---

## 5.1.2. Montaj Adımları

Montaj aşağıdaki sırayla gerçekleştirilmelidir:

| Adım | İşlem | Detay |
|:----:|-------|-------|
| 1 | Makine kurulacağı bölgeye getirildi ve indirildi | Forklift ile nihai konuma taşıma |
| 2 | Makine ambalajı soyuldu | Konteyner ambalajının sökülmesi |
| 3 | Makine zemine oturtuldu; ayarlanabilir ayaklar teraziye alındı | Hizalama toleransı: **0,5 mm** |
| 4 | Basınçlı hava bağlantısı yapıldı | **6 bar**, **3/4"** bağlantı |
| 5 | Su bağlantısı yapıldı | **1 bar**, **1/2"** bağlantı |
| 6 | Trifaze elektrik beslemesi bağlandı | **380 V**, **50 Hz**, **50 kW / 100 A** kurulu güce uygun hat |
| 7 | Makine elektriği pano üzerinden açıldı | Ana şalter — elektrik panosu |
| 8 | Faz yönü kontrol edildi | Faz sıra rölesi; ters ise iki faz değiştirilerek düzeltilir |
| 9 | Makine kullanıma hazır | Bölüm 5.5 kurulum testleri tamamlanmalıdır |

> **Not:** DATA dosyasında su ve elektrik bağlantıları aynı adım numarası (Adım 5) altında listelenmiştir. Bu kılavuzda bağlantı sırası korunarak adımlar 5 (su) ve 6 (elektrik) olarak ayrılmıştır.

### Adım 3 — Teraziye Alma

Makine **ayarlanabilir ayak** sistemi üzerine oturtulur. Ayaklar, makinenin **terazide** olacak şekilde ayarlanmalıdır. Hizalama toleransı **0,5 mm**'dir. Mekanik kurulum testinde kontrol sorusu: *Makine terzide mi?*

<!-- FOTO: Ayarlanabilir ayaklar — seviye ayarı -->
![Ayarlanabilir ayaklar — terazi](../../assets/FOTO-5-1-1-ayarlanabilir-ayak.png)

### Adım 4 — Basınçlı Hava Bağlantısı

| Parametre | Değer |
|-----------|-------|
| Basınç | 6 bar |
| Bağlantı | 3/4" |
| Regülatör ayarı | 6 bar |

Bağlantı sonrası HMI manuel sayfasında hava bilgisi **yeşil** yanmalıdır.

<!-- FOTO: Basınçlı hava bağlantı noktası — 3/4" -->
![Basınçlı hava bağlantısı](../../assets/FOTO-5-1-2-hava-baglantisi.png)

### Adım 5 — Su Bağlantısı

| Parametre | Değer |
|-----------|-------|
| Basınç | 1 bar |
| Bağlantı | 1/2" |
| Su kalitesi | Şebeke suyu veya arıtılmış su |
| Su sıcaklığı | +10°C – +70°C |

Bağlantı sonrası HMI manuel sayfasında su bilgisi **yeşil** yanmalıdır.

<!-- FOTO: Su bağlantı noktası — 1/2" -->
![Su bağlantısı](../../assets/FOTO-5-1-3-su-baglantisi.png)

### Adım 6 — Elektrik Bağlantısı

| Parametre | Değer |
|-----------|-------|
| Gerilim | 380 V |
| Frekans | 50 Hz |
| Faz | 3 (trifaze) |
| Kurulu güç | 50 kW |
| Maksimum akım | 100 A |
| Konfigürasyon | 3P+N+PE |
| Ana şalter | 100 A, Schneider |

Elektrik bağlantısı yalnızca yetkili elektrik personeli tarafından yapılmalıdır.

<!-- FOTO: Elektrik besleme bağlantısı — pano girişi -->
![Elektrik besleme bağlantısı](../../assets/FOTO-5-1-4-elektrik-baglantisi.png)

### Adım 7–8 — Devreye Alma ve Faz Kontrolü

1. Makine elektriği **pano üzerinden** açılır.
2. **Faz sıra rölesi** üzerinden faz yönü kontrol edilir.
3. Faz yönü ters ise **iki faz değiştirilerek** düzeltilir.

Elektrik devreye alma testi kontrol listesi:
- Faz koruma rölesi çıkış veriyor mu?
- Makinede elektrik var mı?
- Acil stop'a basıldığında makine duruyor mu?

<!-- FOTO: Faz sıra rölesi — pano içi -->
![Faz sıra rölesi](../../assets/FOTO-5-1-5-faz-sira-role.png)

---

## 5.1.3. Montaj Tamamlama

Adım 9'da makine **kullanıma hazır** duruma getirilir. Operasyona geçmeden önce aşağıdaki bölümlerdeki testler tamamlanmalıdır:

| Test | Bölüm |
|------|-------|
| Güvenlik fonksiyon testleri | 5.4 |
| Kurulum doğrulama ve boş koşu (15 dk) | 5.5 |

Güvenlik fonksiyon test listesi:
- Acil stop'a basıldığında makine duruyor mu?
- Makine kullanıma hazır mı?
- Kapaklar açıldığında RFID sensörü makineyi durduruyor mu?

<!-- FOTO: Montaj tamamlandı — makine kullanıma hazır -->
![Montaj tamamlandı](../../assets/FOTO-5-1-6-montaj-tamamlandi.png)
