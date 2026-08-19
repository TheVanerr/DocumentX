<!-- ÇEVİRİ GEREKLİ → DE | kaynak: TR | bu satırı çeviri bitince silin. Başlık/görsel/tablo yapısını koruyun, yalnızca metni çevirin. -->

# 3.4. Makine Kontrolleri

Bu bölüm, LYM serisi makinenin kontrol panosu üzerinde yer alan tüm şalter, buton, dijital gösterge ve sinyal lambalarının işlevlerini tanımlar. Operatörün makineyi güvenli ve verimli bir şekilde kullanabilmesi için aşağıdaki donanımların görevlerini eksiksiz bilmesi şarttır.

![Kontrol Panosu Butonları](../assets/lym/3/3-4-controls.svg)

**1. ANA ŞALTER (Main Isolator - Sarı/Kırmızı)**
Makineye gelen tesis ana enerjisini fiziksel olarak açıp kapatır. Şalter "0" (Kapalı) konumundayken pano içerisindeki tüm güç kesilir. Şalterin üzerinde, bakım ve onarım çalışmaları sırasında yetkisiz açılışları engellemek amacıyla asma kilit takılabilecek emniyet yuvaları bulunur.

**2. ACİL STOP (Emergency Stop - Sarı Zemin/Kırmızı Buton)**
Acil durumlarda veya tehlike anında makinenin tüm hareketli parçalarını ve güç tüketen sistemlerini (pompalar, ısıtıcılar, motorlar) anında durdurur. Butona basıldığında kilitlenir. Sistemi tekrar devreye alabilmek için kilitli butonun ok yönünde çevrilerek serbest bırakılması ve ardından emniyet devresinin "RESET" butonu ile donanımsal olarak onaylanması gerekir.

> **ÖNEMLİ UYARI:** Acil Stop butonu, standart bir makine durdurma mekanizması değildir ve rutin operasyonlar sırasında makineyi kapatmak için kullanılmamalıdır. Bu donanım yalnızca can güvenliğini veya sistem bütünlüğünü tehdit eden acil durumlarda enerjiyi anında kesmek için tasarlanmıştır. Devam eden normal bir yıkama döngüsünü veya makine çalışmasını sonlandırmak için her zaman kontrol panosundaki kırmızı "Stop" butonu kullanılmalıdır.

**3. YIKAMA (Start / Stop - Çiftli Yeşil/Kırmızı Buton)**
Standart yıkama döngüsünü başlatmak ve manuel olarak durdurmak için kullanılır. 
*   **Yeşil (Start):** Kabin kapağı kapalı ve su sıcaklığı istenen değere ulaşmışsa, ayarlanan süre boyunca yıkama prosesini başlatır.
*   **Kırmızı (Stop):** Devam eden yıkama döngüsünü süre bitimini beklemeden manuel olarak iptal eder ve pompayı durdurur.

**4. ZAMANLAYICI (GEMO DZ482 - Dijital Ekran)**
Yıkama döngüsünün ne kadar süreceğini belirleyen dijital zaman rölesidir. Operatör, yıkanacak parçanın kirlilik durumuna göre proses süresini (dakika cinsinden) bu ekran üzerinden ayarlar. "Yıkama Start" butonuna basıldığında ekrandaki süre geriye doğru saymaya başlar ve sıfıra ulaştığında sistem otomatik olarak durur.

**5. TEST (Sepet Döndürme - Beyaz Buton)**
Yıkama prosesi devrede değilken, içerideki parça sepetini manuel olarak döndürmek (jog işlevi) için kullanılır. Ağır parçaların vinçle yüklenmesi veya indirilmesi sırasında sepeti doğru açıya getirmek ve yıkama öncesi mekanik dönüş kontrolünü sağlamak amacıyla tasarlanmıştır.

**6. RESET (Donanımsal Onay - Mavi Buton)**
Makinenin iş güvenliği standartları gereği yeniden başlama (restart) koruması sağlayan fiziksel onay butonudur. Herhangi bir tehlike anında "Acil Stop" butonuna basılarak makine durdurulduğunda sistem gücü kesilir ve kilitlenir. Tehlike durumu ortadan kalktıktan sonra Acil Stop butonu serbest bırakılsa (kaldırılsa) dahi, makinenin aniden ve kontrolsüz bir şekilde yeniden çalışmasını engellemek için bu güvenlik mekanizması tasarlanmıştır. Sistemin tekrar güç alabilmesi ve normal operasyonlarına dönebilmesi için operatörün, Acil Stop kilit mekanizmasını açtıktan sonra bilinçli olarak bu "Reset" butonuna basması zorunludur.

**7. ISITICI (Heater - Yeşil Pako Şalter)**
Yıkama tankı içerisindeki suyun ısıtılma sürecini başlatır. Şalter açık (1) konumuna getirildiğinde, rezistanslar dijital termostatta ayarlanan hedef sıcaklığa ulaşana kadar devreye girer. Şalter kapalı (0) konumundayken makine suyu ısıtmaz.

**8. TERMOSTAT (GEMO DT481 - Dijital Ekran)**
Yıkama suyunun sıcaklığını kontrol eden ve izleyen dijital ünitedir. Ekran üzerinde anlık su sıcaklığı (PV) ve hedeflenen sıcaklık değeri (SV) görülür. Etkili bir endüstriyel temizlik için su sıcaklığı bu ekran üzerinden belirlenir. Hedeflenen sıcaklığa ulaşıldığında sistem rezistansları otomatik olarak kapatır ve sıcaklık düştüğünde tekrar devreye alır.

> **ÖNEMLİ UYARI VE LİMİTASYON BİLDİRİMİ:** İş sağlığı ve güvenliği (İSG) gereksinimlerini sağlamak ve makinenin operasyonel ömrünü korumak amacıyla, yıkama tankı su sıcaklık ayarı maksimum **70 °C** ile sınırlandırılmıştır. Bu emniyet limitinin kullanıcı tarafından değiştirilmesi veya manipüle edilmesi kesinlikle yasaktır. Parametrelere müdahale edilerek çalışma sıcaklığının belirlenen sınırın üzerine çıkarılması makineyi derhal garanti kapsamı dışına çıkaracak olup; bu ihlalden kaynaklanabilecek mekanik deformasyonlardan, donanım arızalarından ve olası iş kazalarından üretici firma hiçbir yasal/teknik sorumluluk kabul etmeyecektir. Herhangi bir sistemsel arıza neticesinde söz konusu limitasyonun devre dışı kaldığı veya sınır değerinin değiştiği tespit edilirse, makine operasyonu derhal durdurulmalı ve kalibrasyon/parametre ayarı için doğrudan yetkili teknik servisimiz ile iletişime geçilmelidir.

**9. YAĞ SIYIRICI (Oil Separator - Siyah Pako Şalter)**
Yıkama sonrası tankın yüzeyinde biriken endüstriyel yağları mekanik olarak sistemden uzaklaştıran opsiyonel donanımı kontrol eder. Makine yıkama yapmıyorken (dinlenme durumundayken) çalıştırılması önerilir.

**10. UYARI VE ARIZA LAMBALARI (Sinyalizasyon)**
Makinede oluşabilecek donanımsal veya operasyonel hataları operatöre bildiren kırmızı LED göstergelerdir.
*   **Düşük Su Seviyesi (Low Water Level):** Yıkama tankındaki suyun güvenli çalışma seviyesinin altına düştüğünü gösterir. Bu durum meydana geldiğinde sistem, rezistansları (susuz çalışıp hasar görmemesi için) ve pompayı otomatik olarak korumaya alır ve makinenin donanımsal emniyet onayı (reset durumu) düşer. Tanka gerekli miktarda su ilave edilip sıvı seviyesi güvenli sınırlara döndükten sonra, operasyonlara devam edilebilmesi için mavi "Reset" butonuna basılarak sistemin yeniden yetkilendirilmesi zorunludur. 
*   **Redüktör Arızası (Gearbox Failure):** Sepeti döndüren motor-redüktör grubunda aşırı akım veya termik atması durumunda yanar. Sepet dönüş yolunda mekanik bir sıkışma veya aşırı yükleme olduğunu belirtir.
*   **Pompa Arızası (Pump Failure):** Yıkama pompasının termik rölesinin attığını gösterir. Pompaya yabancı cisim sıkışması veya elektriksel bir faz kaybı/aşırı akım durumunda devreye girer.