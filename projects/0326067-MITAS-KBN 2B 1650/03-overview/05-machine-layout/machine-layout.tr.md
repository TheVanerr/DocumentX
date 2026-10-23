# 3.5 Makine yerleşimi

## 3.5.1 Ünitelerin yerleşimi

Yönler **Bkz. Bölüm 1.2.4** tanımına göredir.

Tablo: Ünitelerin konumu

| Taraf | Bulunan üniteler |
|---|---|
| Ön | {{LAYOUT:Operatör tarafı (ön / sol / sağ)}}; kabin kapısı, ışık perdeleri, kapı silindirleri, kabin altında proses pompası ve kapı valf grubu, sol ön köşede torba filtre |
| Sağ | {{LAYOUT:Elektrik panosu}} |
| Sol | {{LAYOUT:Tank ünitesi}}; tahliye odası, tank kapakları, taşma ve drenaj bağlantıları, kabin duvarında pnömatik valf kutusu |
| Arka uç (tank ünitesi) | Dikey proses pompası, torba filtre, yağ sıyırıcı, drenaj pompası |
| Çatı | Kurutma fanı, kurutma ısıtıcısı kutusu, egzoz fanı ve bacası |

Makinenin genel yerleşim planı: {{LAYOUT:Genel yerleşim planı dosya adı}}. Dış ölçüler **Bkz. Bölüm 3.3.2**.

## 3.5.2 Çalışma ve bakım alanları

**Operatör çalışma alanı** kumanda panelinin önüdür. Operatör çevrimi buradan başlatır ve izler; yükleme ve boşaltma kapı önünde, yükleme arabasıyla yapılır.

**Yükleme alanı** kapı önündeki alandır. Bu alan, yükleme arabasının kapıya düz olarak yaklaşabileceği ve makineye kilitlenebileceği genişlikte, engelsiz ve düz olmalıdır.

**Bakım alanları:** {{LAYOUT:Bakım erişim bölgeleri}}.

Tablo: Makine çevresinde bırakılacak boşluklar

| Taraf | En az boşluk | Gerekçe |
|---|---|---|
| Ön | {{LAYOUT:Minimum etraf boşluğu — ön (mm)}} mm | Yükleme arabası manevrası, operatör alanı |
| Sağ | {{LAYOUT:Minimum etraf boşluğu — yan (mm)}} mm | Elektrik panosu kapağının tam açılması ve pano önünde çalışma |
| Sol | {{LAYOUT:Minimum etraf boşluğu — yan (mm)}} mm | Tank kapaklarının açılması, filtre ve drenaj işleri |
| Arka | {{LAYOUT:Minimum etraf boşluği — arka (mm)}} mm | Dikey pompa, torba filtre, yağ sıyırıcı ve drenaj pompası bakımı |
| Üst | {{LAYOUT:Minimum tavan yüksekliği (mm)}} mm tavan yüksekliği | Çatıdaki fan ve ısıtıcı bakımı, egzoz kanalı |

Elektrik panosu kapağının önündeki alan, ulusal elektrik tesisat mevzuatının pano önü çalışma alanı kurallarına göre boş tutulur.

## 3.5.3 Tesisat bağlantı noktaları

Tablo: Tesisat bağlantı noktaları

| Bağlantı | Konum | Özellik |
|---|---|---|
| Elektrik beslemesi | Elektrik panosu | {{ELEKTRIK:Besleme gerilimi (V)}} V, {{ELEKTRIK:Besleme frekansı (Hz)}} Hz, {{ELEKTRIK:Besleme konfigürasyonu (3P+N+PE / vb.)}}; toplam kurulu güç {{ELEKTRIK:Toplam kurulu güç (kW)}} kW |
| Basınçlı hava | "AIR INLET / HAVA GİRİŞİ" etiketli bağlantı | {{SIKIŞTIRILMIŞ_HAVA_SU:Hava giriş bağlantısı}} |
| Tank doldurma | Tank kapakları | {{TANKLAR:Tank doldurma}} |
| Drenaj | Drenaj kolektörü ucu ve drenaj pompası basma borusu | {{SIKIŞTIRILMIŞ_HAVA_SU:Drenaj bağlantıları}} |
| Taşma | Her tankın "TAŞMA HATTI" çıkışı | İşletmenin drenaj veya toplama hattına bağlanır |
| Egzoz | Çatıdaki egzoz bacası | {{SIKIŞTIRILMIŞ_HAVA_SU:Egzoz bağlantısı}} |
| Yağ çıkışı | Yağ sıyırıcının yağ çıkışı | Ayrılan yağ toplama kabına alınır |

Bağlantıların yapılışı **Bkz. Bölüm 5.3**.
