# 7.6 DİĞER OPERASYONLAR (OPERATION OTHER)

Bu bölüm, VDL serisi tamburlu endüstriyel yıkama makinesinin standart otomatik işletim sırası (7.4 ve 7.5) dışında kalan; manuel kontroller, arıza durumları, acil müdahaleler ve makine ömrünü uzatmaya yönelik ek operasyonel prosedürleri kapsar.

---

## 7.6.1 Manuel Operasyon Modu (Manual Mode)

Otomatik reçete dışında, makineyi bakım, test veya özel tahliye durumları için manuel olarak çalıştırma gerekebilir.

**Kullanım Amacı:** Tamburun belirli bir açıya getirilmesi (malzeme boşaltma ağzı hizalaması), sistem testleri, sıkışmış suyun manuel tahliyesi.

**İşlem Adımları:**

1. HMI ana ekranından **"Manuel Mod"** (Manual Mode) sekmesine geçiş yapın.
2. Otomatik programın tamamen durduğundan ve hiçbir adımda beklemede olmadığından emin olun.
3. Ekrandaki butonları kullanarak tamburu saat yönünde (CW) veya saat yönünün tersine (CCW) çevirin.
4. Su alma, tahliye veya ısıtma fonksiyonlarını tek tek manuel olarak aktive edebilirsiniz.

> ⚠️ **UYARI:** Manuel modda makine güvenlik sensörlerinin bir kısmı devre dışı kalabilir. Operasyon sırasında tambur içine el veya cisim sokmaktan kaçının. Manuel mod kullanıldıktan sonra mutlaka **"Otomatik Mod"**a geri dönülmelidir.

---

## 7.6.2 Arıza ve Alarm Durumları (Fault & Alarm Management)

Makine çalışırken sensör veya sistem arızaları meydana geldiğinde, PLC kronolojiyi durdurur ve HMI ekranında alarm gösterir.

**Alarm Tipleri:**

- **Düşük Su Seviyesi:** Su giriş basıncının yetersiz olması veya valf arızası.
- **Aşırı Isınma:** PT100 sensör arızası veya kontaktör yapışması.
- **Kapak Açık Emniyeti:** Tambur dönerken kilit sensöründen sinyal kaybı.
- **İnvertör (Sürücü) Arızası:** Motor aşırı akımı veya aşırı ısınma.

**Müdahale Prosedürü:**

1. Makine duracak ve HMI ekranında kırmızı renkli uyarı belirecektir.
2. Alarm metnini okuyun. Sorun basit bir hataysa *(örn: su kesintisi)* sorun giderildikten sonra ekrandan **"RESET"** butonuna basın.
3. Hatanın tekrar etmesi halinde makineyi **"7.3 Kapatma Prosedürü"**ne göre kapatın ve bakım servisine haber verin. Arızalı bir makine zorla çalıştırılmamalıdır.

---

## 7.6.3 Elektrik Kesintisi ve Sistem Kurtarma (Power Failure & Recovery)

Operasyon sırasında tesis elektrik enerjisinin kesilmesi durumunda makine aşağıdaki durumu sergiler:

**Makine Davranışı:** Tüm valfler kapanır (Fail-Safe), tambur frenleme yapmadan mekanik sürtünme ile durur. Isıtma sistemleri deaktif olur.

**Kurtarma Prosedürü:**

1. Elektrik geldiğinde makine ana şalteri açık kalsa bile HMI yeniden boot ederek (açılış testi yaparak) ana ekrana dönecektir.
2. Makine, enerji kesintisi anındaki adımı *(örn: 2. Durulama)* hafızasında tutacaktır.
3. Eğer tambur içinde su varsa ve program ortasında kalındıysa, **"START"** butonuna basarak programı kaldığı yerden devam ettirebilirsiniz.
4. Eğer içeride sıcak su varken uzun süre elektrik kesintisi olduysa, soğuyan suyu tahliye edip yeni su alarak programı baştan başlatmak hijyen ve yıkama kalitesi açısından tavsiye edilir.
5. Tambur içindeki suyu manuel tahliye etmek için **"Manuel Mod"**dan tahliye vanasını açın.

---

## 7.6.4 Operasyon Esnasında Filtre Temizliği (Filter Cleaning)

Yıkama kirleri ve parça artıkları, makine tahliye hattındaki filtreleri tıkayarak pompa zarar görmesine veya suyun boşalmamasına neden olabilir.

**Ne Zaman Yapılmalı?**

- Yoğun ve kirli operasyonlarda her vardiya sonunda.
- Normal operasyonlarda günde 1 kez.
- Parçalarda fazla talaş/cips varsa her yıkama sonrası.

**İşlem Adımları:**

1. Makinenin tamamen durduğundan ve tahliye vanasının kapalı olduğundan emin olun.
2. Makinenin alt kısmında veya tahliye hattında bulunan filtre kapağını (kir tutucu) sökün.
3. Filtre sepetini çıkarıp içindeki talaş, kir ve çapakları temizleyin.
4. Filtreyi yerine takın ve contalarının tam oturduğundan emin olun.

> ⚠️ **UYARI:** Filtre temizliği sırasında eldiven kullanın. İçeride kesici çapaklar veya kimyasal kalıntıları bulunabilir.

---

## 7.6.5 Kimyasal Madde İlavesi (Chemical Refilling)

Makinenin dozajlama tanklarındaki kimyasal (deterjan, pasivizör vb.) seviyesi düştüğünde operasyon sırasında ilave yapılabilir.

**Güvenlik Kuralları:**

- Kimyasal ilavesini yaparken mutlaka kimyasal dayanımlı koruyucu gözlük, kimyasal eldiven ve önlük kullanın.
- Kimyasalları asla birbiriyle doğrudan karıştırmayın (her kimyasal için ayrı dozaj tankı kullanılmalıdır).
- Dozaj tankına ilave yaparken makinenin dozaj pompası çalışmıyorsa dahi tank basınçlı olabilir; kapağı yavaşça açın.
- Dökme sırasında etrafa sıçrayan kimyasalı derhal bol su ile temizleyin.

---

## 7.6.6 Uzun Süreli Beklemelerde Anti-Korozyon Önlemleri (Anti-Corrosion Idle)

Makine 2-3 günden fazla çalıştırılmayacaksa, özellikle klorür veya asidik kimyasal kullanılmışsa korozyon riskine karşı:

1. Tambur ve tank içindeki tüm suyu tahliye edin.
2. Sisteme temiz su alarak 5 dakikalık kısa bir "Durulama" programı çalıştırın.
3. Su tahliyesini tekrar yapın ve tambur içini nemli bir bez ile silerek kurulayın.
4. Kapakları hafif aralık bırakarak iç hacmin havalanmasını sağlayın.