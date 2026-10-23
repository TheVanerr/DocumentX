# 11.3 Elektrik arızaları ve alarm kodları

**TEHLİKE — Elektrik çarpması:** Elektrik panosundaki kontrolleri ve koruma elemanlarının resetlenmesini yalnızca yetkili elektrikçi yapar. Atan bir koruma elemanını nedeni bulunmadan tekrar tekrar kurmayın.

## 11.3.1 Alarm listesi

{{TABLO:ALARM_LISTESI}}

Vana ve hava basıncı alarmları **Bkz. Bölüm 11.4**.

## 11.3.2 Güvenlik ve besleme alarmları

**Error-229 — Acil Stop Devrede**

- **Anlamı:** Acil durdurma butonu basılı, güvenlik rölesi resetlenmemiş veya acil durdurma devresi açık.
- **Makineye etkisi:** Makine anında durur ve çalışan çevrim iptal edilir. **Hazırlık**, faz seçimleri, **Yağ Sıyırıcı**, manuel kumanda, drenaj seçimleri ve kabin lambası sıfırlanır.
- **Nasıl kalkar:** Acil durdurma butonu çevrilerek bırakılıp **RESET**'e basılınca kalkar.

1. Acil durdurma butonunun bırakılmış olduğunu kontrol edin.
2. **RESET**'e basın.
3. Manuel Sayfası'nda **Acil Stop** lambasının yeşil olduğunu kontrol edin.
4. Buton bırakılmış ve **RESET**'e basılmış olduğu halde mesaj sürüyorsa acil durdurma devresini (güvenlik rölesi, buton kontakları, kablolar) yetkili elektrikçiye kontrol ettirin.

**Error-410 — Faz Sırası Hatalı**

- **Anlamı:** Şebeke beslemesinde faz eksik veya faz sırası yanlış; faz koruma rölesi uyarıyor.
- **Makineye etkisi:** Kırmızı lamba yanar; makine çevrimi kendiliğinden durdurmaz. Bu mesaj varken makineyi çalıştırmayın; çalışıyorsa **STOP** ile durdurun.
- **Nasıl kalkar:** Besleme düzelince kendiliğinden kalkar.

1. İşletme panosunda makine besleme hattının sigortalarını ve şebekeden üç fazın geldiğini kontrol ettirin.
2. Elektrik panosundaki faz koruma rölesinin göstergelerine bakın.
3. Besleme kablosunda yakın zamanda değişiklik yapıldıysa faz sırası ters bağlanmış olabilir; yetkili elektrikçiye kontrol ettirin (**Bkz. Bölüm 5.3.1**).
4. Manuel Sayfası'nda **Faz Sıra Bilgisi** lambasının yeşil olduğunu kontrol edin.

## 11.3.3 Motor alarmları

**Error-126 — Redüktör Motor Hata**

- **Anlamı:** Sepeti döndüren motorun sürücüsü (frekans invertörü) arıza veriyor.
- **Makineye etkisi:** Sepet dönmez. Makine çevrimi kendiliğinden durdurmaz; sepet başlangıç konumuna gelemezse çevrim bitmez. Çevrimi **STOP** ile, gerekirse acil durdurmayla sonlandırın.
- **Nasıl kalkar:** Sürücü arızası giderilip sürücü hatası kalkınca kalkar.

1. Elektrik panosundaki sepet motoru sürücüsünün ekranındaki hata kodunu okuyun ve not edin.
2. Sepetin sıkışmadığını ve aşırı yüklenmediğini LOTO altında kontrol edin.
3. Motor ve kablo bağlantılarını kontrol ettirin.
4. Sürücü hatasını sürücünün kendi kılavuzuna göre resetletin.
5. Hata tekrar ederse kodla birlikte üreticiye başvurun.
6. Manuel Sayfası'nda **Redüktör Motor Hata** lambasının kırmızı olduğunu kontrol edin.

**Error-100 — Yıkama Pompası Motoru Hata** ve **Error-101 — Durulama Pompası Motoru Hata**

- **Anlamı:** Pompa motorunun motor koruma şalteri (Q1 yıkama, Q2 durulama) atmış.
- **Makineye etkisi:** Pompa çalışmaz. Makine çevrimi kendiliğinden durdurmaz ve faz süresi saymaya devam eder; parçalar yıkanmamış veya durulanmamış olabilir. Çevrimi **STOP** ile durdurun.
- **Nasıl kalkar:** Motor koruma şalteri kurulunca kalkar.

1. Pompanın sıkışmadığını ve serbestçe döndüğünü LOTO altında kontrol edin.
2. Pompa emişinde ve torba filtrede tıkanıklık olmadığını kontrol edin.
3. Elektrikçi motor koruma şalterinin ayarını kontrol eder ve şalteri kurar (**Bkz. Bölüm 6.3.1**).
4. Arıza sık tekrar ediyorsa elektrikçi motor akımını ve faz gerilimlerini ölçer.
5. Manuel Sayfası'nda **Yıkama Pompa Termik** / **Durulama Pompa Termik** lambasının kırmızı olduğunu kontrol edin.

**Error-111 — Kurutma Fan Motoru Hata**

- **Anlamı:** Kurutma fanının motor koruma şalteri (Q3) atmış.
- **Makineye etkisi:** Kurutma fanı ve kurutma ısıtıcısı çalışmaz; makine çevrimi kendiliğinden durdurmaz; parçalar kurumayabilir.
- **Nasıl kalkar:** Motor koruma şalteri kurulunca kalkar.

1. Fan pervanesinin serbest döndüğünü ve emiş ağzının tıkalı olmadığını LOTO altında kontrol edin (**Bkz. Bölüm 9.1.20**).
2. Elektrikçi motor koruma şalterini kontrol eder ve kurar.
3. Manuel Sayfası'nda **Kurutma Fan Termik** lambasının kırmızı olduğunu kontrol edin.

**Error-110 — Egzoz Fan Motoru Hata**

- **Anlamı:** Egzoz fanının motor koruma şalteri (Q4) atmış.
- **Makineye etkisi:** Egzoz fanı çalışmaz; makine çevrimi kendiliğinden durdurmaz.
- **Nasıl kalkar:** Motor koruma şalteri kurulunca kalkar.

1. Fan pervanesinin ve egzoz kanalının serbest olduğunu kontrol edin.
2. Elektrikçi motor koruma şalterini kontrol eder ve kurar.
3. Manuel Sayfası'nda **Egzoz Termik** lambasının kırmızı olduğunu kontrol edin.

**Error-130 — Yağ Sıyırıcı Motor Hata**

- **Anlamı:** Yağ sıyırıcının motor koruma şalteri atmış.
- **Makineye etkisi:** Yağ sıyırıcı çalışmaz; makine çevrimi kendiliğinden durdurmaz.
- **Nasıl kalkar:** Motor koruma şalteri kurulunca kalkar.

1. Yağ sıyırıcının diskinin sıkışmadığını LOTO altında kontrol edin (**Bkz. Bölüm 9.1.10**).
2. Elektrikçi motor koruma şalterini kontrol eder ve kurar.
3. Manuel Sayfası'nda **Sıyırıcı Termik** lambasının kırmızı olduğunu kontrol edin.

**Error-106 — Drenaj Pompası Motoru Hata**

- **Anlamı:** Drenaj pompasının motor koruma şalteri atmış.
- **Makineye etkisi:** Drenaj pompası çalışmaz; tank pompayla boşaltılamaz.
- **Nasıl kalkar:** Motor koruma şalteri kurulunca kalkar.

1. Pompanın katı parça veya tortu nedeniyle sıkışmadığını LOTO altında kontrol edin.
2. Elektrikçi motor koruma şalterini kontrol eder ve kurar.
3. Manuel Sayfası'nda **Drenaj Pompa Termik** lambasının kırmızı olduğunu kontrol edin.

## 11.3.4 Isıtıcı kaçak akım alarmları

**Error-170 — Isıtıcı Kaçak Akım F2**, **Error-171 — Isıtıcı Kaçak Akım F3**, **Error-172 — Isıtıcı Kaçak Akım F4**

- **Anlamı:** Isıtıcı devresindeki kaçak akım rölesi kaçak akım algıladı: F2 yıkama ısıtıcıları, F3 durulama ısıtıcıları, F4 kurutma ısıtıcısı. Neden çoğunlukla bir ısıtıcı elemanının izolasyon arızası veya bağlantı kutusuna su girmesidir.
- **Makineye etkisi:** İlgili ısıtıcı grubu çalışmaz; tank veya kurutma havası ısınmaz. Makine çevrimi kendiliğinden durdurmaz.
- **Nasıl kalkar:** Arıza giderilip kaçak akım rölesi kurulunca kalkar.

**UYARI — Elektrik çarpması:** Kaçak akım rölesi, insan hayatını koruyan bir donanımdır. Röleyi nedeni bulunmadan tekrar tekrar kurmayın ve köprülemeyin.

1. Elektrikçi LOTO uygular.
2. Isıtıcı bağlantı kapaklarında ve klemenslerde ıslaklık veya oksitlenme olup olmadığını kontrol eder.
3. İlgili ısıtıcıların izolasyon direncini ölçer (**Bkz. Bölüm 9.1.18**).
4. Arızalı ısıtıcıyı değiştirir veya bağlantıyı kurutup onarır.
5. Kaçak akım rölesini kurar ve test butonuyla test eder.
6. Manuel Sayfası'nda ilgili **Isıtıcı Kaçak Akım** lambasının kırmızı olduğunu kontrol edin.

## 11.3.5 Seviye ve sıcaklık alarmları

**Error-200 — Yıkama Tankı Su Seviyesi Pompa Seviyesinin Altında** ve **Error-202 — Durulama Tankı Su Seviyesi Pompa Seviyesinin Altında**

- **Anlamı:** Çevrim çalışırken (ilgili faz Aktif ise) tanktaki sıvı pompa seviyesinin altına düştü.
- **Makineye etkisi:** O tankın pompası ve ısıtıcısı durur; faz süresi sayılmaz. Seviye geri gelince pompa (kendi fazındaysa) kendiliğinden yeniden çalışır.
- **Nasıl kalkar:** Tank seviyesi pompa seviyesinin üzerine çıkınca kalkar.

1. Tanka sıvı ekleyin (**Bkz. Bölüm 7.6.4**).
2. Tankta ve bağlantılarda sızıntı olup olmadığını kontrol edin.
3. Tahliye vanalarının tam açılıp kapandığını kontrol edin; vana doğru konumda değilse sıvı diğer tanka geçer.
4. Aşırı köpük seviye ölçümünü yanıltabilir; kimyasal derişimini kontrol edin.
5. Seviye sensörünün çatallarının temiz olduğunu kontrol edin (**Bkz. Bölüm 11.5.2**).

**Error-150 — Yıkama Tank Sıcaklığı Düşük** ve **Error-151 — Durulama Tank Sıcaklığı Düşük**

- **Anlamı:** **START**'a basıldığında tank henüz set sıcaklığına ulaşmamıştı (ilgili faz Aktif).
- **Makineye etkisi:** Çevrim başlamaz.
- **Nasıl kalkar:** Tank set sıcaklığına ulaşınca veya ilgili faz Pasif seçilince kalkar; ardından **START**'a yeniden basın.

1. **Hazırlık**'ın açık (yeşil) olduğunu kontrol edin.
2. Durum penceresinde **Tanklar Hazırlanıyor** yazıyorsa ısınmayı bekleyin.
3. Tankta sıvının pompa seviyesinin üzerinde olduğunu kontrol edin.
4. **Sıcaklık Set Değeri**'nin doğru olduğunu kontrol edin; değilse reçeteyi seçip **Reçete Onay**'a basın.
5. **Anlık Sıcaklık**'ın yükseldiğini kontrol edin; değişmiyorsa termokuplu kontrol ettirin (**Bkz. Bölüm 11.5.3**).
6. Isıtıcı sigortalarını, kontaktörlerini ve kaçak akım rölelerini elektrikçiye kontrol ettirin.

## 11.3.6 Kapı alarmı

**Error-422 — Kapak Kapalı Değil**

- **Anlamı:** **START**'a basıldığında kabin kapısı kapalı değildi (kapı kapalı sviçi algılamıyor).
- **Makineye etkisi:** Çevrim başlamaz.
- **Nasıl kalkar:** Kapı kapatılınca kalkar; ardından **START**'a yeniden basın.

1. Kapının tam kapalı olduğunu kontrol edin.
2. Manuel Sayfası'nda **Kapak Kapalı** lambasının kapı kapalıyken yeşil olduğunu kontrol edin.
3. Lamba yeşil olmuyorsa kapı kapalı sviçinin ayarını ve kablosunu kontrol edin (**Bkz. Bölüm 11.5.5**).

## 11.3.7 Elektrik arızalarında genel kontroller

Tablo: Genel elektrik arızaları

| Belirti | Olası neden | Yapılacak (elektrikçi) |
|---|---|---|
| Makinede hiç enerji yok; operatör paneli ve kule lambası kapalı | Ana şalter kapalı veya atmış; işletme besleme hattı kapalı | Ana şalteri ve işletme panosunu kontrol edin |
| Operatör paneli kapalı, motorlar enerjili | 24 V DC güç kaynağı veya F7 sigortası | Güç kaynağının çıkışını ölçün; sigortayı kontrol edin |
| Kule lambası ve kontaktörler çalışmıyor | Kontaktör bobin devresi sigortası (F8) | Sigortayı kontrol edin; kısa devre nedenini bulun |
| Sepet dönmüyor, Error-126 yok | Sürücü beslemesi (F5) veya çalıştırma sinyali | F5'i ve sürücü ekranını kontrol edin |
| F1 kaçak akım rölesi atıyor | Motor devrelerinden birinde izolasyon arızası | Motorların ve kabloların izolasyonunu ölçün |
| Operatör panelinde değerler güncellenmiyor | PLC ile haberleşme kesik | PLC'nin RUN ve ERR ışıklarını kontrol edin; haberleşme kablosunu kontrol edin; üreticiye başvurun |
| Sepet hızı değişmiyor veya sepet yanlış hızda dönüyor | Operatör paneli ile sürücü arasındaki haberleşme | Haberleşme kablosunu kontrol edin; üreticiye başvurun |
| PLC'de ERR ışığı yanıyor | PLC program veya donanım hatası | Üreticiye başvurun |
| Isıtıcı çalışıyor ama tank aşırı ısınıyor | Kontaktör kontakları yapışmış veya termokupl arızalı | Kontaktörü değiştirin; termokuplu kontrol edin |
