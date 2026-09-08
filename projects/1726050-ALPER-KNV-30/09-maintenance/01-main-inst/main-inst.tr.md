# 9.1 Bakım talimatları

---

## 9.1.1 Bakım felsefesi ve personel

KNV 30 3000 2B için **önleyici bakım** felsefesi uygulanır. Amaç; filtre tıkanması, yağ birikimi, emniyet fonksiyonu zayıflaması ve pompa/fan arızalarını planlı müdahale ile önlemek, plansız hat duruşunu azaltmaktır.

| Parametre | Değer |
|-----------|-------|
| Bakım felsefesi | Önleyici bakım |
| Personel yeterliliği | Makinenin kullanıldığı ülkenin mevcut bakım personeli yeterlilik seviyesi |
| Lubrication chart | Yoktur |

Bakım personeli; makine kullanımı, LOTO, acil stop ve temel güvenlik kuralları konusunda eğitim almış olmalıdır (bkz. **Bölüm 3.2.6**). Elektrik bağlantı sıkılık kontrolü yalnızca **yetkili elektrik personeli** tarafından yapılır.

---

## 9.1.2 Bakım öncesi güvenlik

Bakım için özel HMI modu **bulunmamaktadır**. Aşağıdaki kurallara uyun:

1. Makineyi HMI **Makine Stop** ile durdurun.
2. Ana şalteri **OFF (0)** konumuna alın.
3. **LOTO prosedürünü** uygulayın (**Bkz. Bölüm 2.4** — adımlar tekrarlanmaz).
4. RFID / emniyet sensörünü **bypass etmeyin**.
5. Kapakları yalnızca enerji izolasyonu ve LOTO sonrası açın.

Bakım erişimi makine **arkasındaki sökülebilir kapaklar** üzerinden sağlanır (bkz. **Bölüm 3.5.3**). Minimum arka boşluk **1000 mm** olmalıdır.

**UYARI — Enerji kaynaklı yaralanma:** LOTO uygulanmadan yapılan bakımda makine kazara devreye girebilir; ezilme, elektrik çarpması ve sıcak sıvı yaralanması oluşabilir.

---

## 9.1.3 Periyodik bakım takvimi

Aşağıdaki tablo **tek kaynak (SSOT)** periyodik bakım takvimidir. Temizlik adımları için ilgili bölüme referans verilir; prosedür adımları tekrarlanmaz.

Saat bazlı periyotlar makine toplam çalışma saati üzerinden takip edilir; sayaç yoksa yaklaşık takvim karşılığı kullanılabilir (250 saat ≈ 3–4 hafta sürekli 7/24 çalışma).

| Periyot | Bakım maddesi | Referans |
|---------|---------------|----------|
| **Günlük** | Genel görsel kontrol — sızıntı, anormal ses, alarm/tepe lambası | — |
| **Günlük** | Yıkama tankı ön filtre temizliği | Bölüm 10.1.3 |
| **Günlük** | HMI alarm geçmişi; aktif alarm giderimi | Bölüm 11 |
| **Günlük** | Su/hava basıncı (HMI manuel sayfa) | Bölüm 7.2 |
| **Günlük** | Çıkış konveyörü sıkışma / parça birikintisi kontrolü | — |
| **Haftalık** | Tank iç filtre temizliği | Bölüm 10.1.4 |
| **Haftalık** | Pompa çıkışı torba filtre temizliği/değişimi | Bölüm 10.1.4 |
| **Haftalık** | Yağ sıyırıcı ve tank yüzeyi — aşırı yağ tabakası | — |
| **Haftalık** | Konveyör zincir/kayış gerginliği ve hizası — gözle | — |
| **Haftalık** | RFID / kapak emniyet kısa test | Bölüm 5.4.2 |
| **Haftalık** | Acil stop butonları görsel kontrol | Bölüm 2.5 |
| **Aylık** | Acil stop fonksiyon testi | Bölüm 6.2.3, 5.4.1 |
| **Aylık** | Konveyör 4 yağlama noktası gresleme | Bölüm 9.1.4 |
| **Aylık** | Seviye sensörleri ve sızıntı tavası temizlik/kontrol | — |
| **Aylık** | Pano filtre/ventilasyon toz kontrolü | — |
| **Aylık** | Pompa ve fan anormal titreşim/ses kontrolü | — |
| **250 saat** | Otomatik dolum ve aktarma vanası test | — |
| **250 saat** | Isıtıcı termokupl/rezistans bağlantı kontrolü (LOTO sonrası) | — |
| **250 saat** | Proximity sensör temizlik ve montaj sıkılık | — |
| **250 saat** | Egzost ve kurutma fan toz birikimi temizliği | — |
| **500 saat** | Yağ sıyırıcı redüktör yağ keçesi/teflon kontrol/değişim | Bölüm 13.3 |
| **500 saat** | Konveyör redüktör yağ seviyesi/sızıntı kontrolü | Bölüm 9.1.4 |
| **500 saat** | Tank ve kapak contaları kontrol | — |
| **500 saat** | Pnömatik regülatör ve bağlantı kaçak kontrolü | Bölüm 6.5 |
| **1000 saat** | Pompa emiş filtresi kontrol/değişim | Bölüm 13.3 |
| **1000 saat** | Nozzle tıkanma/aşınma kontrol | Bölüm 13.3 |
| **1000 saat** | Servo/konveyör tahrik grubu mekanik/elektrik kontrol | — |
| **1000 saat** | Tank su kalitesi; gerekirse tam boşaltma/temizlik | Bölüm 10 |
| **Yıllık** | Emniyet fonksiyon test raporu (RFID, acil stop, kaçak akım) | Bölüm 2, 5.4 |
| **Yıllık** | Isıtıcı rezistans ve termokupl fonksiyon kontrolü | — |
| **Yıllık** | Redüktör yağ değişimi | Bölüm 9.1.4 |
| **Yıllık** | Elektrik bağlantı sıkılık kontrolü (LOTO, yetkili elektrikçi) | — |
| **Yıllık** | Uzun duruş planlanıyorsa tank boşaltma/koruyucu temizlik | Bölüm 7.3.4 |

### Periyodik bakım uygulama notları

**Günlük:** Hat duruş penceresinde veya planlı kontrol turunda uygulanır; LOTO gerekmez (kapak açılmıyorsa). Ön filtre temizliği için tank erişimi gerekiyorsa LOTO uygulayın.

**Haftalık / aylık:** Tank ve filtre işlemleri için makine durdurulmalı; kapak açma gerektiren işlerde **LOTO zorunludur**.

**250–1000 saat:** Mekanik/elektrik müdahale gerektiren maddelerde **LOTO** uygulayın. Termokupl, rezistans ve elektrik sıkılık kontrollerinde yetkili personel kullanın.

**Yıllık:** Emniyet test raporunu kayıt altına alın; NOK maddelerde operasyona geçmeyin.

---

## 9.1.4 Yağlama

| Parametre | Değer |
|-----------|-------|
| Yağlama noktası sayısı | **4 adet** |
| Konum | Konveyör **girişinde 2**, **çıkışında 2** |
| Periyot | **Aylık** (bkz. Bölüm 9.1.3) |
| Gres tipi | [EKSİK] |
| Redüktör yağ değişimi | [EKSİK] — yıllık kontrol Bölüm 9.1.3 |

### Konveyör gresleme prosedürü

1. Makineyi durdurun; gerekirse **LOTO** uygulayın.
2. Konveyör giriş ve çıkış tarafındaki **4 yağlama noktasını** tespit edin.
3. Üretici tarafından onaylanmış gres tipini kullanın ([EKSİK] — tesis bakım standardına uygun gres seçin).
4. Her noktaya ölçülü miktarda gres uygulayın; fazla gres konveyör hattına damlamamalıdır.
5. Kısa el ile çevirme veya düşük hızda test sonrası gürültü/azalmayı kontrol edin.

**Yıllık:** Konveyör redüktör yağ seviyesi ve sızıntı kontrolü; gerekirse yağ değişimi — yağ tipi [EKSİK].

---

## 9.1.5 Kritik parça listesi

**Kritik** parçalar; arızada makinenin prosesini, parça akışını veya **güvenlik fonksiyonunu** doğrudan etkiler. Stok **0 (siparişle)** olan kalemler acil durumda üretici/servis üzerinden temin edilir; lead time planlaması kullanıcı firma sorumluluğundadır.

Tam BOM için bkz. **Bölüm 13.3.1**.

| Sipariş kodu | Parça adı | Önerilen stok | Konum / fonksiyon | Gerekçe |
|--------------|-----------|---------------|-------------------|---------|
| 10 02976 | TERMOKUPL ETB30F06-5Ç | 1 | Tank ısıtma | Arızada sıcaklık kontrolü/ısıtma devre dışı |
| 07 15142 | REZİSTANS KOMPLESİ 8000W 50CM DÜZ DİKİŞSİZ | 2 | Tank ısıtma | Arızada proses sıcaklığı sağlanamaz |
| 07 16791 | SEVİYE SENSÖRÜ ÇAT.TİP VEGASWING 51 DİŞ ÇEKİLMİŞ | 0 (siparişle) | Tank seviye | Arızada dolum/seviye kontrolü bozulur |
| 10 00586 | REDÜKTÖR MOTORU 0,09KW 1500D/D B14 SIYIRICI | 0 (siparişle) | Yağ sıyırıcı | Arızada yağ sıyırıcı çalışmaz |
| 10 00296 | PASLANMAZ SEVİYE BEKÇİSİ | 0 (siparişle) | Tank seviye | Seviye güvenlik/kontrol |
| 10 19321 | REDÜKTÖR WITTENSTEIN NP035S-MF2-30-1G1-1S | 0 (siparişle) | Konveyör tahrik | Arızada konveyör durur |
| 10 19317 | SERVO MOTOR SIEMENS SIMOTICS 1FL6064-1AC61-2AA1 | 0 (siparişle) | Konveyör | Arızada parça akışı durur |
| 10 19318 | SERVO SÜRÜCÜ SIEMENS 6SL3210-5FE11-5UF0 | 0 (siparişle) | Konveyör | Arızada parça akışı durur |
| 10 07147 | SWITCH F3STGRNLPU21M1J8 OMRON MANYETİK KAPI | 1 | RFID / kapak güvenlik | Arızada güvenlik fonksiyonu etkilenir |
| 07 17478 | KNV 30 3000 2B PRO IDE GOULDS POMPA KOMPLESİ | 0 (siparişle) | Durulama pompası | Arızada durulama prosesi durur |
| 10 06675 | POMPA LOWARA ESHE 40-160/30 380V/50HZ | 0 (siparişle) | Yıkama pompası | Arızada yıkama prosesi durur |

---

## 9.1.6 Yedek parça listesi (tüketim ve önerilen)

**Tüketim** parçaları planlı bakımda düzenli değiştirilir veya temizlenir. **Önerilen** parçalar stoklanması duruş süresini kısaltır. Önerilen stok miktarları tesis stok politikasına göre güncellenebilir; zorunlu sipariş taahhüdü değildir. Tam BOM için bkz. **Bölüm 13.3.1**.

| Sipariş kodu | Parça adı | Kategori | Önerilen stok | Konum / fonksiyon | Gerekçe |
|--------------|-----------|----------|---------------|-------------------|---------|
| 07 10214 | ÖN FİLTRE NS KOMPLESİ | Tüketim | 2 | Yıkama tankı | Günlük temizlik; tüketim |
| 07 00670 | EMİŞ FİLTRESİ KOMPLESİ (PYM2,KBN,VDL,ULT,KNV) | Tüketim | 2 | Pompa emiş hattı | Periyodik değişim (1000 saat) |
| 10 03088 | NOZZLE 632.724.16.CC | Tüketim | 32 | Yıkama/durulama nozul | Aşınan parça |
| 07 03497 | YAĞ SIYIRICI TEFLONU | Tüketim | 1 | Yağ sıyırıcı | 500 saat bakım tüketimi |
| 10 02526 | YAĞ KEÇESİ 20*42*7 | Tüketim | 1 | Yağ sıyırıcı redüktör | Bakım tüketimi |
| 10 01017 | RULMAN 6004 2RS ORS | Tüketim | 1 | Yağ sıyırıcı / genel | Bakım tüketimi |
| 10 05378 | TORBA FİLTRE 200 MİKRON (50CM PASL. TEL ÇERÇEVE) | Tüketim | 2 | Pompa çıkışı | Haftalık değişim |
| 10 19471 | SENSÖR E2BM12KN08M1B1 OMRON END.PROX.M12 8MM | Önerilen | 1 | Proximity sensör | Konum algılama |
| 10 17815 | SENSÖR E3FA-DP23 OMRON END.PROX.M18 1000MM | Önerilen | 1 | Proximity sensör | Konum algılama |
| 07 17295 | SALYANGOZLU FAN ENA 2 0,37 KW HAVA SO.SİLİKONLU | Önerilen | 0 (siparişle) | Egzost | Arızada egzoz/havalandırma etkilenir |
| 10 01002 | REDÜKTÖR EN:30 I:80 B:05 | Önerilen | 0 (siparişle) | Yağ sıyırıcı tahrik | Motor ile birlikte |

**Sipariş:** Sipariş kodu ile üretici/servis kanalından temin edin. Kritik parçalar için bkz. **Bölüm 9.1.5**. Tüm kalemler (22 adet) **Bölüm 13.3.1**.

---

## 9.1.7 Bakım kayıt formu

Periyodik bakım ve test sonuçlarını kayıt altına alın. NOK maddeler giderilmeden operasyona dönülmemelidir.

| # | İşlem | Periyot | Tarih | Yapan | OK/NOK |
|---|-------|---------|-------|-------|:------:|
| 1 | Günlük kontrol maddeleri | Günlük | | | ☐ |
| 2 | Haftalık filtre / emniyet maddeleri | Haftalık | | | ☐ |
| 3 | Aylık acil stop testi | Aylık | | | ☐ |
| 4 | Konveyör yağlama (4 nokta) | Aylık | | | ☐ |
| 5 | 250 / 500 / 1000 saat bakım (ilgili madde) | Saat | | | ☐ |
| 6 | Yıllık emniyet test raporu | Yıllık | | | ☐ |
| 7 | Filtre/tank temizliği | Bkz. Bölüm 10 | | | ☐ |

**Onaylayan:** _______________ **Tarih:** _______________

---

Tam parça listesi ve görseller için bkz. **Bölüm 13.3**.
