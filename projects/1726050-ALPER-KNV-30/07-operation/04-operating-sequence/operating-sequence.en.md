<!-- ÇEVİRİ GEREKLİ → EN | kaynak: TR | bu satırı çeviri bitince silin. Başlık/görsel/tablo yapısını koruyun, yalnızca metni çevirin. -->

# 7.4 İŞLETİM SIRASI (OPERATING SEQUENCE)

Bu bölüm, VDL serisi tamburlu endüstriyel yıkama makinesinin güvenli, verimli ve doğru bir şekilde çalıştırılması için izlenmesi gereken adım adım işletim sırasını tanımlar. Makinenin optimum performansla çalışması ve iş sağlığı/güvenliği kurallarının korunması için aşağıdaki sıralama aşılmamalıdır.

---

## 7.4.1 İşletme Öncesi Hazırlık Kontrolleri (Pre-Operation Checks)

Makineye enerji vermeden önce aşağıdaki kontroller operatör tarafından titizlikle yapılmalıdır:

1. **Makine İçi ve Tambur Kontrolü:** Tambur içinde bir önceki işlemden kalan parça, yabancı cisim veya su kalmadığından emin olun. Tambur filtrelerinin temiz olduğunu kontrol edin.

2. **Kapak ve Emniyet Sistemleri:** Tambur yüklenme kapağının ve makine servis kapaklarının sağlam bir şekilde kapanıp kilitlendiğini kontrol edin. Emniyet anahtarlarının (limit switch) sağlıklı çalıştığından emin olun.

3. **Enerji ve Hava Bağlantıları:**
   - Makinenin ana elektrik şalterinin "0" (Kapalı) konumda olduğunu teyit edin.
   - Sisteme giden basınçlı hava (pnömatik) hattının açık ve basıncın makine etiketinde belirtilen değerlerde (örn. 6-8 bar) olduğunu kontrol edin.

4. **Su ve Kimyasal Girişleri:**
   - Ana su giriş vanalarının açık olduğunu kontrol edin.
   - Kimyasal dozajlama tanklarında yeterli miktarda yıkama kimyasalı (deterjan, pasivizör vb.) olduğunu ve dozaj pompalarının çalışmaya hazır olduğunu teyit edin.

5. **Buhar Sistemi** *(Eğer Mevcutsa):* Buhar giriş vanasının açık ve kondens tahliye hattının açık olduğunu kontrol edin.

---

## 7.4.2 Sistemin Devreye Alınması (System Startup)

Hazırlık kontrolleri tamamlandıktan sonra makine aşağıdaki sırayla devreye alınır:

1. **Ana Güç Verme:** Makinenin ana elektrik şalterini "1" (Açık) konuma getirin.

2. **Kontrol Paneli (HMI) Başlangıcı:** HMI (Dokunmatik Panel) ekranının açılmasını ve sistemin otomatik self-test (kendini test etme) prosedürünü tamamlamasını bekleyin. Ekranda herhangi bir arıza/alarm uyarısı bulunmadığından emin olun. Varsa alarmı teyit edip sıfırlayın.

3. **Pnömatik Basınç Kontrolü:** Panel üzerinden veya pnömatik ünite üzerinden hava basıncının oluştuğunu ve kapak pnömatik silindirlerinin sorunsuz çalıştığını test edin.

4. **Manuel Test** *(Gerekliyse):* Tam otomatik programa geçmeden önce, bakım veya test amaçlı olarak tambur dönüşü, su alımı ve ısıtma fonksiyonlarını panel üzerinden "Manuel Mod"da kısa süreli test edin. *(Kuru çalıştırma yapmayın, su seviyesine dikkat edin.)*

---

## 7.4.3 Malzeme Yükleme ve Program Seçimi (Loading & Program Selection)

1. **Malzeme Yükleme:** Tambur kapağını açın. Yıkanacak parçaları tambur içine dengeli bir şekilde dağıtın. Tamburun kapasitesini aşmayın; aşırı yükleme tambur miline ve rulmanlara zarar verir.

2. **Kapağın Kapatılması:** Yükleme işlemi bittikten sonra kapağı kapatın. Kilit mekanizmasının tam oturduğunu ve panel üzerinden **"KAPAK KAPALI"** bilgisinin geldiğini teyit edin. Makine kapağı açık hiçbir koşulda çalıştırılmamalıdır.

3. **Program Seçimi:** HMI ekranı üzerinden yıkanacak malzemenin cinsine ve kirlilik derecesine uygun olan reçeteyi (program) seçin. *(Örn: 90°C Yağ Giderici Yıkama, 60°C Durulama, vb.)*

4. **Parametre Kontrolü:** Seçilen programın su sıcaklığı, devir sayısı, dönüş yönü ve süresi gibi parametrelerini kontrol edin. Gerekirse yetkili kişiler tarafından parametre ayarları güncellensin.

---

## 7.4.4 Yıkama Programının İşletilmesi (Cycle Execution)

**"START / BAŞLAT"** butonuna basıldığında makine seçilen programa göre aşağıdaki otomatik sırayı izler:

1. **Su Alma ve Isıtma:** Makine belirlenen seviyeye kadar su alır. Isıtma sistemi devreye girer ve suyu hedeflenen sıcaklığa ulaşana kadar ısıtır *(buhar veya elektrikli rezistans ile).*

2. **Kimyasal Dozajlama:** Sıcaklık ve su seviyesi uygun hale geldiğinde, belirlenen miktarlarda kimyasallar otomatik pompalarla tambur içine enjekte edilir.

3. **Tambur Dönüşü (Yıkama Aşaması):** Tambur, programlanmış devir sayısında, belirli aralıklarla sağa-sola dönerek parçaların çalkalanıp etkili bir şekilde yıkanmasını sağlar.

4. **Drenaj (Boşaltma):** Yıkama süresi dolduğunda tambur dönüşü durur (veya yavaşlar) ve kirli su tahliye valfi açılarak su tahliye edilir.

5. **Durulama Aşaması:** Sistem temiz su alır ve parçalardaki kimyasal kalıntılarının gitmesi için kısa süreli dönerek durulama yapar. Bu adım programlanan durulama sayısına (1., 2., 3. durulama) göre tekrarlanabilir.

6. **Nötralizasyon / Pasivizasyon** *(Opsiyonel):* Seçilen reçetede varsa, son durulama suyunun içine pasivizör/koruyucu kimyasal eklenerek parçaların kuruduktan sonra oksitlenmesi engellenir.

7. **Sıkma / Kurutma (Spin Drying):** Tambur yüksek devirde dönerek (santrifüj etkisi) parçaların üzerindeki suyu uzaklaştırır. Bu işlem genellikle ısıtmalı hava üfleme (fırın) sistemiyle desteklenebilir.

---

## 7.4.5 İşlem Sonu ve Malzeme Tahliyesi (End of Cycle & Unloading)

1. **Döngü Sonu Bildirimi:** Program tamamlandığında makine sinyal verir (Buzzer/HMI uyarısı) ve tambur hareketleri tamamen durur.

2. **Güvenlik Beklemesi:** Tamburun tamamen durması ve makine içindeki basıncın/ısının güvenli seviyelere düşmesi için panelin verdiği **"Kapak Açılabilir"** onayını bekleyin.

3. **Kapak Açma ve Tahliye:** Kapağı açın. Temizlenen parçaları dikkatlice boşaltın. Keskin veya ağır parçalar söz konusuysa iş eldiveni kullanın.

4. **Sonraki Döngüye Hazırlık:** Makine içinde su kalmadığını kontrol edin. Makineye hemen yeni bir yıkama yüklemeyecekseniz **"7.3 Kapatma Prosedürü"**ne geçin.

---

## 7.4.6 İşletim Sırası Esnasında Güvenlik Uyarıları

- **Kapak Açık Çalıştırma Yasaktır:** Makine döngü halindeyken veya tambur dönüyorken kapak kilidini zorla açmaya çalışmayın. Pnömatik kilitler güvenlik için devreye kilitlenir.

- **Sıcaklık Riski:** Makine durduktan hemen sonra iç hacim, su veya parçalar yüksek sıcaklığa sahip olabilir. Tahliye sırasında yanık riskine karşı gerekli kişisel koruyucu ekipmanları (korumalı eldiven, gözlük) kullanın.

- **Müdahale Yasağı:** Su alımı, ısıtma veya dönüş sırasında makinenin mekanik aksamlarına veya elektrik panosuna müdahale etmeyin.

- **Acil Durum:** İşletim sırasında anormal bir ses, titreşim, duman veya su/kimyasal kaçağı fark ederseniz beklemeksizin **ACİL STOP** butonuna basarak prosedürü kesintiye uğratın ve yetkililere bildirin.

---

> ℹ️ **NOT:** Makinenin HMI (Dokunmatik Kontrol Paneli) üzerinden seçtiğiniz reçeteye göre yukarıdaki adımların bazıları atlanabilir veya sıraları değişebilir. Operatör, HMI üzerindeki görsel takip ekranından makinenin anlık hangi aşamada olduğunu *(Örn: Su Alıyor / Isıtıyor / Yıkıyor / Duruluyor)* takip etmelidir.