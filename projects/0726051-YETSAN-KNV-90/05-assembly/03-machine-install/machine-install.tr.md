# 5.3 Sistem bağlantıları ve devreye alma

Medya, egzoz, yağ ayırıcı ve elektrik bağlantıları **Bölüm 5.1 Adım 6–11** kapsamında uygulanır. Teknik bağlantı değerleri **Bölüm 3.3.3** (elektrik) ve **Bölüm 3.3.5** (hava/su) tablolarında verilmiştir; bu bölüm kurulum prosedürünü tanımlar.

Hidrolik sistem bulunmamaktadır. Vakum bağlantısı yoktur. Bu makinede HMI olmadığından bağlantı doğrulaması manometre, pano lambaları ve fiziksel gözlem ile yapılır.

---

## 5.3.1 Basınçlı hava bağlantısı

| Parametre | Değer (Bölüm 3.3.5) |
| :--- | :--- |
| Basınçlı hava girişi | 6 bar |
| Bağlantı noktası | Makine gövdesindeki **AIR INLET / HAVA GİRİŞİ** regülatörü (manometreli) |
| Bağlantı çapı | **Bkz. Bölüm 3.3.5** |
| Tüketici | Yağ ayırıcı ünitesi diyaframlı pompası |

Makine üzerinde basınçlı hava kesme vanası yoktur; hava, tesisat hattından hortumla regülatöre gelir. Basınçlı hava izolasyonu, işletmenin tesisat hattına monte ettiği vana ile yapılır.

**Bağlantı prosedürü**

1. Tesisat basınçlı hava hattının kuru ve yağsız hava sağladığını doğrulayın.
2. Hava hortumundan önceki tesisat hattına **kilitlenebilir, tahliyeli küresel vana** monte edin; bu vana basınçlı hava LOTO izolasyon noktasıdır (**Bkz. Bölüm 2.4**).
3. Küresel vana kapalıyken hava hortumunu makine gövdesindeki **AIR INLET / HAVA GİRİŞİ** regülatör girişine bağlayın.
4. Küresel vanayı açın.
5. Regülatörü **6 bar** olacak şekilde ayarlayın; manometreyi referans alın (**Bkz. Bölüm 6.5**).
6. Rakor ve hortum bağlantılarında kaçak kontrolü yapın (ses veya sabunlu su).

**Beklenen sonuç:** Manometre 6 bar; kaçak yok.

**Anormal durum:** Basınç 6 bar'a ulaşmıyorsa tesis kompresör kapasitesini, küresel vananın tam açık olduğunu ve regülatör ayarını kontrol edin.

![Basınçlı hava girişi — AIR INLET regülatörü](../../assets/3.3/hava-girisi-regulator.jpg)

---

## 5.3.2 Su bağlantısı ve tank tahliyesi

| Parametre | Değer (Bölüm 3.3.5) |
| :--- | :--- |
| Su girişi basıncı | 1 bar |
| Su sıcaklığı | +10 °C – +70 °C |
| Su kalitesi | Şebeke suyu veya arıtılmış su |
| Tank dolumu | Elle — otomatik dolum vanası yoktur |
| Tahliye | Tank altı **TAHLİYE** vanaları — bağlantı çapı: **Bkz. Bölüm 3.3.5** |

**Bağlantı prosedürü**

1. Tesis su hattını, tankların elle doldurulacağı noktaya (hortum veya sabit dolum ağzı) ulaşacak şekilde hazırlayın; su basıncının **1 bar** olduğunu doğrulayın.
2. Dolum hattını besleyen tesis su vanasını kapalı tutun; bu vana su izolasyon noktasıdır (**Bkz. Bölüm 2.4**).
3. Tank 1 ve Tank 2 altındaki **TAHLİYE** vanalarının kapalı olduğunu kontrol edin.
4. TAHLİYE vanalarını tesis atık su hattına bağlayın; yağlı proses suyu evsel kanalizasyona verilmez (**Bkz. Bölüm 10.1.8**).

**NOT:** Tankların ilk dolumu, seviye interlock testinin boş tankla yapılabilmesi için **Bölüm 5.4.4**'te yapılır.

**Beklenen sonuç:** Su hattı dolum noktasına hazır; TAHLİYE vanaları kapalı ve atık su hattına bağlı; bağlantılarda sızıntı yok.

---

## 5.3.3 Elektrik bağlantısı ve topraklama

Elektrik besleme değerleri **Bölüm 3.3.3** tablosunda verilmiştir. Kurulum hattı: **380 V, 50 Hz, 3 faz, 3P+N+PE, 110 kW / 220 A**; ana şalter **Schneider CVS250F (250 A)**.

**TEHLİKE — Elektrik çarpması:** Canlı hat üzerinde çalışma yasaktır. Bağlantı öncesi tesis besleme şalteri kapatılıp kilitlenmeli, makine ana şalteri **OFF** konumunda olmalıdır. Bağlantı yalnızca yetkili elektrik personeli tarafından yapılır.

**Bağlantı prosedürü**

1. Tesis besleme kablosunun kesitini 220 A akım ve tesis kablo uzunluğuna göre doğrulayın.
2. Bağlantı noktasındaki beklenen kısa devre akımının ana şalter kesme kapasitesini aşmadığını doğrulayın (**Bkz. Bölüm 3.3.3**).
3. Pano kapağını açın; besleme kablosunu pano giriş rakorundan geçirerek ana şalter (TMŞ) giriş terminallerine **L1-L2-L3-N** sırasıyla bağlayın.
4. **PE** iletkenini pano topraklama barasına bağlayın; pano kapağı ile gövde arasındaki sarı-yeşil topraklama köprüsünün yerinde olduğunu kontrol edin.
5. Terminal bağlantılarını, ana şalter üreticisinin belirttiği sıkma torkuyla tork anahtarı kullanarak sıkın; gevşek bağlantı ısınma ve yangın riski oluşturur.
6. Pano kapağını kapatın ve kilitleyin.
7. Tesis besleme şalterini açın; makine ana şalterini henüz açmayın — **Bölüm 5.3.6** faz kontrolüne geçin.

![Pano kapağı topraklama bağlantısı](../../assets/5.3/pano-topraklama.jpg)

![Ana şalter (TMŞ) giriş terminalleri](../../assets/5.3/tms-ana-salter.jpg)

---

## 5.3.4 Egzoz bacası bağlantısı

Egzoz fanı (FE01) makine üstündeki bacaya monte edilmiştir ve hücrelerdeki buharı tahliye eder. Baca, tesis havalandırma kanalına veya doğrudan dış ortama bağlanmalıdır; aksi hâlde buhar işletme içine yayılır, görüş azalır ve pano içinde yoğuşma oluşur.

1. Egzoz bacası / fan grubu demonte sevk edildiyse önce üretici servisinin talimatına göre makine üstündeki yerine monte edin (**Bkz. Bölüm 5.1**).
2. Baca çıkış çapındaki (**Bkz. Bölüm 3.3.5**) kanalı tesis havalandırmasına veya dış ortama kadar döşeyin.
3. Kanalda yoğuşan suyun makineye geri akmaması için kanala eğim ve en alt noktaya yoğuşma tahliyesi verin.
4. Dış ortam çıkışında yağmur ve geri hava akışına karşı başlık kullanın.
5. Kanal bağlantılarını sızdırmaz yapın; egzoz fanı çalıştığında bağlantılardan buhar kaçmadığını kontrol edin (**Bkz. Bölüm 5.5.5**).

---

## 5.3.5 Yağ ayırıcı ünitesi bağlantısı

Yağ ayırıcı ünitesi, ayrı bir paslanmaz kabindir ve altındaki diyaframlı pompa basınçlı hava ile çalışır.

1. Üniteyi makinenin yanına, yerleşim planında (**Bkz. Bölüm 13.1**) belirtilen konuma yerleştirin ve ayaklarını teraziye alın.
2. Tank ile ünite arasındaki yağlı su emiş ve dönüş hortumlarını bağlayın; hortum güzergâhı yürüyüş yolunu kesmemeli ve ezilmemelidir.
3. Ünitenin hava hattını (solenoid valf girişi) makine hava hattına bağlayın.
4. Ünitenin elektrik (solenoid valf) bağlantısının panodan yapıldığını doğrulayın; bağlantı elektrik şemasına göredir (**Bkz. Bölüm 13.1**).

Yağ ayırıcı ünitesinin çalışma testi (panelde etiketsiz yağ ayırıcı anahtarı ile), ana şalter açıldıktan ve tanklar doldurulduktan sonra **Bölüm 5.5.3**'te yapılır.

---

## 5.3.6 Devreye alma ve faz kontrolü

Faz sırası pompa, fan ve blower yönü için kritiktir; ters faz motorların ters dönmesine, pompa basıncının düşmesine ve kurutma debisinin azalmasına yol açar. Faz sıra rölesi **MKR-01** ters veya eksik fazda çıkış vermez; bu durumda fonksiyonlar devreye girmez (**Bkz. Bölüm 11.3.1**).

**TEHLİKE — Elektrik çarpması:** Ana şalter **OFF** konumundayken de ana şalter giriş terminalleri gerilim altındadır; temas ölümle sonuçlanabilir. Faz değiştirmeden önce tesis besleme şalterini kapatın ve kilitleyin.

**Devreye alma prosedürü**

1. Trifaze besleme hattının panoya bağlandığını doğrulayın (**Bkz. Bölüm 5.3.3**).
2. Tüm bakım kapaklarının kapalı ve tüm acil stop butonlarının serbest olduğunu kontrol edin.
3. Ana şalter kolunu **ON (I)** konumuna alın.
4. Faz sıra rölesi MKR-01'in çıkış durumunu röle göstergesinden kontrol edin.
5. Röle çıkış vermiyorsa ana şalteri **OFF** konumuna alın; tesis besleme şalterini kapatıp kilitleyin.
6. Besleme hattında **iki fazın** yerini değiştirin (yalnız yetkili elektrik personeli).
7. Tesis besleme şalterini ve ana şalteri yeniden açın; 4. adımı tekrarlayın.
8. **RESET** butonuna basın; mavi lambanın yandığını doğrulayın.
9. Bir blower'ı (ör. **BLOWER 1**) kısa süre çalıştırın; dönüş yönünü motor üzerindeki okla karşılaştırın.
10. Anahtarı **OFF** konumuna alın.

**NOT:** Seviye interlock'u nedeniyle pompalar boş tankta çalışmaz. Pompaların dönüş yönü, tanklar doldurulduktan sonra **Bölüm 5.5.2**'de kontrol edilir.

**Elektrik devreye alma test checklist**

| Kontrol | Beklenen sonuç |
| :--- | :--- |
| Faz koruma rölesi çıkış veriyor mu? | Evet |
| Makinede elektrik var mı? (RESET lambası yanıyor) | Evet |
| Acil stop'a basıldığında RESET lambası sönüyor ve makine duruyor mu? | Evet |
| Blower dönüş yönü doğru mu? | Evet |

Acil stop test adımları **Bölüm 5.4.1**'de; reset prosedürü **Bölüm 2.5**'te verilmiştir.

---

## 5.3.7 Bağlantı tamamlama kontrol listesi

| # | Kontrol | Durum |
| :---: | :--- | :---: |
| 1 | Basınçlı hava bağlantısı yapıldı; regülatör 6 bar | ☐ |
| 2 | Hava hattında kaçak yok | ☐ |
| 3 | Su hattı tank dolum noktasına hazır (1 bar); tesis su vanası kapalı | ☐ |
| 4 | TAHLİYE vanaları kapalı ve atık su hattına bağlı | ☐ |
| 5 | Egzoz bacası havalandırmaya / dış ortama bağlı | ☐ |
| 6 | Yağ ayırıcı ünitesi hortum, hava ve elektrik bağlantıları yapıldı | ☐ |
| 7 | Trifaze elektrik ve PE bağlantısı yapıldı (380 V, 50 Hz) | ☐ |
| 8 | Faz yönü doğrulandı; MKR-01 çıkış veriyor | ☐ |
| 9 | Ana şalter açıldı; RESET lambası yanıyor | ☐ |

Bağlantılar tamamlandıktan sonra **Bölüm 5.4** ve **5.5** testlerine geçin.
