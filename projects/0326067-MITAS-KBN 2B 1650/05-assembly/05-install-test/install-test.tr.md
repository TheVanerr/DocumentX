# 5.5 Kurulum ve devreye alma testleri

Devreye alma, montaj ve tesisat bağlantıları tamamlandıktan sonra aşağıdaki sırayla yapılır. Her adımın sonucu devreye alma tutanağına yazılır (**Bkz. Bölüm 14.1**).

## 5.5.1 Mekanik kontroller

Tablo: Mekanik kontrol listesi

| No | Kontrol | Sonuç |
|---|---|---|
| 1 | Montaj sonrası kontrol listesi tamam (**Bkz. Bölüm 5.1.4**) | ☐ |
| 2 | Sepet elle (LOTO altında) çevrildiğinde sıkışmadan dönüyor; tüm yataklama tekerleri kremayer halkasına temas ediyor | ☐ |
| 3 | Pinyon kremayeri tüm tur boyunca tam diş boyunda kavrıyor | ☐ |
| 4 | Püskürtme borularının ve memelerin sepete değmediği kontrol edildi | ☐ |
| 5 | Kapı kızakları yerinde; kapı çerçevesinde engel yok | ☐ |
| 6 | Tank kapakları ve amortisörler çalışıyor | ☐ |
| 7 | Tank drenaj vanaları kapalı, tank çıkış vanaları açık | ☐ |
| 8 | Torba filtre kapakları kapalı ve mapaları sıkılı; boşaltma vanaları kapalı | ☐ |

## 5.5.2 Elektrik kontrolleri

Bu kontrolleri yetkili elektrikçi yapar.

Tablo: Elektrik kontrol listesi

| No | Kontrol | Sonuç |
|---|---|---|
| 1 | Besleme gerilimi ve frekansı tip plakasıyla aynı | ☐ |
| 2 | Topraklama sürekliliği ölçüldü ve kaydedildi | ☐ |
| 3 | Isıtıcıların izolasyon direnci ölçüldü ve kaydedildi | ☐ |
| 4 | Motor koruma şalterleri motor etiket akımlarına ayarlı (**Bkz. Bölüm 6.3.1**) | ☐ |
| 5 | Faz sırası doğru; **Faz Sıra Bilgisi** yeşil | ☐ |
| 6 | Pano içinde taşıma sırasında gevşemiş bağlantı yok; klemensler kontrol edildi | ☐ |
| 7 | Pano kapağı kilitli; anahtar yetkili kişide | ☐ |

## 5.5.3 Pnömatik kontroller

1. Basınçlı havayı açın ve regülatör basıncını ayarlayın (**Bkz. Bölüm 6.4.2**).
2. Hava bağlantılarında kaçak olmadığını dinleyerek ve kaçak spreyiyle kontrol edin.
3. Filtre regülatörün kabında yoğuşma suyu varsa boşaltın.
4. Operatör panelinde Error-235 olmadığını kontrol edin.

## 5.5.4 İlk enerji verme

1. Makinenin çevresinde ve kabinde kimse olmadığını kontrol edin.
2. Ana şalteri I konumuna getirin.
3. Acil durdurma butonunun bırakılmış olduğunu kontrol edin ve **RESET**'e basın.
4. Operatör panelinin açıldığını ve açılış ekranının geldiğini kontrol edin.
5. Dil bayrağını seçin ve ekrana dokunarak Çalışma Sayfası'na geçin.
6. Kurulum Sayfası'nda saat ve tarihi kontrol edin; yanlışsa ayarlayın (**Bkz. Bölüm 6.3.4**).
7. Alarm Sayfası'nda aktif alarm olmadığını kontrol edin.
8. Manuel Sayfası'nda GİRİŞ GÖZLEM lambalarının normal durumda olduğunu kontrol edin (**Bkz. Bölüm 11.1.3**).

## 5.5.5 Fonksiyon testleri

**UYARI — Sıkışma:** Fonksiyon testleri sırasında elinizi kabinden, sepetten ve fanlardan uzak tutun.

**Kapı**

1. İki **KAPI AÇIK** butonuna basın; kapının yumuşakça ve vuruntusuz açıldığını kontrol edin.
2. İki **KAPI KAPALI** butonuna basın; kapının tam kapandığını ve **Kapak Kapalı** lambasının yeşil olduğunu kontrol edin.
3. Kapı hızı veya son konum vuruntusu ayar istiyorsa **Bkz. Bölüm 6.1.5**.

**Sepet**

4. Kapı kapalıyken Çalışma Sayfası'nda **Sepet Test**'i basılı tutun; sepetin yavaş döndüğünü kontrol edin.
5. Sepetin başlangıç konumunda kendiliğinden durduğunu ve **Redüktör Pozisyon Sw** lambasının yeşil olduğunu kontrol edin.

**Manuel kumanda**

6. Manuel Sayfası'nda **MANUEL KONTROL** anahtarını açın.
7. **Kurutma Fan** butonuyla kurutma fanını çalıştırın; fanın ok yönünde döndüğünü kontrol edin ve fanı durdurun.
8. **Egzoz** butonuyla egzoz fanını çalıştırın; dönüş yönünü kontrol edin ve fanı durdurun.
9. **Yıkama Tahliye Aç** ve **Yıkama Tahliye Kapat** butonlarıyla yıkama tahliye vanasını açıp kapatın; **Yıkama Tahliye Açık** ve **Yıkama Tahliye Kapalı** lambalarının sırayla yeşil olduğunu kontrol edin.
10. Durulama tahliye vanasını aynı yöntemle test edin.
11. **MANUEL KONTROL** anahtarını kapatın.

**Diğer üniteler**

12. Çalışma Sayfası'nda **LAMBA** butonuna basın; kabin lambasının yandığını ve 60 saniye sonra söndüğünü kontrol edin.
13. Ayar Sayfası'nda **YAĞ SIYIRICI** anahtarını Aktif yapın; sıyırıcı diskinin döndüğünü kontrol edin.
14. Drenaj pompasının dönüş yönünü, tanklar doluyken çok kısa bir **Drenaj** çalıştırmasıyla ve pompa üzerindeki ok yönüyle kontrol edin; kontrolden sonra butona tekrar basarak drenajı durdurun.

**NOT:** Proses pompaları elle çalıştırılamaz; dönüş yönleri ilk deneme çevriminde, pompa motorlarının fan kapağı üzerindeki ok yönüyle karşılaştırılarak kontrol edilir (**Bkz. Bölüm 5.5.7**).

## 5.5.6 Isıtma testi

1. Tankların dolu olduğunu kontrol edin (**Bkz. Bölüm 5.3.5**).
2. Çalışma Sayfası'nda bir reçete seçin ve **Reçete Onay**'a basın.
3. **Hazırlık** butonuna basın; durum penceresinde **Tanklar Hazırlanıyor** yazdığını kontrol edin.
4. Yıkama ve durulama panellerindeki **Anlık Sıcaklık** değerlerinin yükseldiğini 10 dakika arayla kontrol edin.
5. Tankların set sıcaklığına ulaşma süresini ölçün ve tutanağa yazın; bu süre günlük çalışma planında ısınma süresi olarak kullanılır.
6. Durum penceresinde **Tanklar Hazır** yazdığını kontrol edin.
7. Tank sıcaklığını bağımsız bir termometreyle ölçün ve panel değeriyle karşılaştırın; farkı tutanağa yazın.

## 5.5.7 Deneme çevrimi

1. Üst sepete üretimdeki parçalardan örnek parçalar yerleştirin (**Bkz. Bölüm 8.2.3**).
2. Üst sepeti kabine alın ve kapıyı kapatın (**Bkz. Bölüm 7.2.5 ve 7.2.6**).
3. **START**'a basın.
4. Yıkama fazında yatay ve dikey proses pompasının dönüş yönünü motor üzerindeki okla karşılaştırın.
5. Gözetleme penceresinden püskürtmenin sepetin tamamına ulaştığını kontrol edin.
6. Çevrim boyunca kabin altında, tank ünitesinde, torba filtrelerde ve boru bağlantılarında sızıntı olmadığını kontrol edin.
7. Geçiş adımlarında pompanın durduğunu ve sepetin dönmeye devam ettiğini kontrol edin.
8. Kurutma fazında **Anlık Sıcaklık** değerinin yükseldiğini ve egzoz fanının ayarlanan sürelerle çalıştığını kontrol edin.
9. Çevrim sonunda sepetin başlangıç konumunda durduğunu ve kule lambasının sarıya döndüğünü kontrol edin.
10. Parçaları çıkarın ve temizlik ile kuruma sonucunu kontrol edin.
11. Sonuç beklenen kalitede değilse reçete değerlerini düzenleyin ve deneme çevrimini tekrarlayın (**Bkz. Bölüm 8.2.1**).

## 5.5.8 Devir teslim

1. Operatörlere Bölüm 2, 3.4, 7 ve 10'u makine üzerinde uygulamalı olarak gösterin.
2. Bakım personeline Bölüm 2.4, 9 ve 11'i makine üzerinde uygulamalı olarak gösterin.
3. Kurulum Sayfası şifresini işletmenin yetkili kişisine teslim edin.
4. Elektrik panosu ve pnömatik valf kutusu anahtarlarını işletmenin yetkili kişisine teslim edin.
5. Kılavuzu, bileşen kılavuzlarını ve elektrik şemasını teslim edin (**Bkz. Bölüm 13.1**).
6. Devreye alma ve eğitim tutanağını üretici ve işletme temsilcilerine imzalatın.
