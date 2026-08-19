<!-- ÇEVİRİ GEREKLİ → EN | kaynak: TR | bu satırı çeviri bitince silin. Başlık/görsel/tablo yapısını koruyun, yalnızca metni çevirin. -->

# 3.4. Makine Kontrolleri

Bu bölüm, Dolfin Industrial Washing Systems kontrol panosu üzerinde yer alan tüm şalter, buton, dijital gösterge ve sinyal lambalarının işlevlerini tanımlar. Operatörün makineyi güvenli ve verimli bir şekilde kullanabilmesi için aşağıdaki donanımların görevlerini eksiksiz bilmesi şarttır.

![Kontrol Panosu Butonları](../assets/vdl/3/3-4-controls.svg)

**1. YIKAMA ISITICI (Washing Heater - Siyah Döner Anahtar + Kırmızı LED Ekran)**
Yıkama haznesi ısıtıcısının devreye alınmasını ve çalışma sıcaklığının izlenmesini sağlar. Döner anahtar saat yönünde çevrilerek ısıtıcı aktif hale getirilir. Yanındaki dijital gösterge, haznedeki anlık su sıcaklığını santigrat derece (°C) cinsinden sürekli olarak görüntüler. Döner anahtar kapalı (0) konumunda iken ısıtıcı devre dışıdır.

**2. YIKAMA POMPASI (Wash Pump - Siyah Döner Anahtar + Pilot Lamba)**
Yıkama sıvısını hazne içinde dolaştıran pompanın çalışma komutunu verir. Döner anahtar açık konuma getirildiğinde pompa devreye girer. Yanındaki gri/beyaz pilot lamba, pompa devresinin aktif olduğunu teyit eder; lamba sönükse pompa çalışmıyor demektir.

**3. KURUTMA ISITICI (Drying Heater - Siyah Döner Anahtar + Kırmızı LED Ekran)**
Kurutma bölümü ısıtıcısını devreye alır. Yanındaki dijital gösterge, kurutma haznesindeki anlık sıcaklığı santigrat derece (°C) cinsinden görüntüler. Hedeflenen sıcaklığa ulaşıldığında sistem rezistansları otomatik olarak kapatır; sıcaklık düştüğünde tekrar devreye alır. Döner anahtar kapalı (0) konumunda iken ısıtıcı devre dışıdır.

**4. KURUTMA FANI (Drying Fan - Siyah Döner Anahtar + Pilot Lamba)**
Kurutma haznesi içinde sıcak havayı sirküle eden fanı çalıştırır. Döner anahtar açık konuma getirildiğinde fan devreye girer. Yanındaki gri/beyaz pilot lamba, fan motorunun enerjili durumda olduğunu gösterir.

**5. TAMBUR (Drum - Siyah Döner Anahtar + Pilot Lamba)**
Yıkama tamburunun dönüş hareketini başlatır. Döner anahtar açık konuma getirildiğinde tambur motoru devreye girer. Yanındaki gri/beyaz pilot lamba, tambur motorunun enerjili olduğunu gösterir. Tamburu döndürmeden önce kapağın tam olarak kapandığından emin olunuz.

**6. YAĞ AYIRICI (Oil Separator - Siyah Döner Anahtar + Pilot Lamba)**
Yıkama sıvısının yüzeyinde biriken endüstriyel yağları ve katı partikülleri mekanik olarak sistemden uzaklaştıran üniteyi kontrol eder. Yanındaki gri/beyaz pilot lamba, ünite çalışırken yanar. Yıkama döngüsü aktif değilken (dinlenme durumunda) çalıştırılması önerilir.

**7. YIKAMA SEVİYESİ (Washing Level - Kırmızı Pilot Lamba)**
Yıkama tankındaki sıvı seviyesini izleyen sinyal göstergesidir. Lamba yandığında sıvı seviyesinin güvenli çalışma sınırlarının üzerinde olduğunu belirtir. Lamba söndüğünde tank sıvı seviyesi kritik minimumun altına düşmüş demektir; bu durumda sisteme sıvı ikmali yapılmalı ve işleme devam edilmemelidir.

> **ÖNEMLİ UYARI:** Yıkama seviyesi lambası sönük olduğunda makine çalıştırılmamalıdır. Susuz çalışan rezistanslar ve pompa telafi edilemez mekanik hasara uğrar. Sıvı seviyesi güvenli sınırlara döndükten sonra operasyona devam edilebilir.

**8. RESET (Donanımsal Onay - Mavi Buton)**
Makinenin yeniden başlama (restart) korumasını onaylayan fiziksel güvenlik butonudur. Acil Stop devreye girdiğinde veya bir arıza nedeniyle sistem kilitlendiğinde, tehlike ortadan kalktıktan sonra Acil Stop kilidi açılsa dahi sistem otomatik olarak yeniden çalışmaz. Operatörün, sistemi kasıtlı ve bilinçli olarak yeniden yetkilendirmek için bu butona basması zorunludur.

**9. ACİL STOP (Emergency Stop - Sarı Zemin/Kırmızı Mantar Başlık)**
Tehlike anında makinenin tüm hareketli parçalarını ve güç tüketen sistemlerini (pompalar, ısıtıcılar, motorlar) anında durdurur. Butona basıldığında mekanik olarak kilitlenir. Sistemi tekrar devreye alabilmek için kilitli butonun ¼ tur saat yönünde döndürülerek serbest bırakılması ve ardından mavi "Reset" butonuna basılarak güvenlik devresinin donanımsal olarak onaylanması gerekir.

> **ÖNEMLİ UYARI:** Acil Stop butonu standart bir makine durdurma mekanizması değildir ve rutin operasyonlar sırasında makineyi kapatmak için kullanılmamalıdır. Bu donanım yalnızca can güvenliğini veya sistem bütünlüğünü tehdit eden acil durumlarda enerjiyi anında kesmek için tasarlanmıştır.