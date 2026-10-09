# 5.3 Sistem bağlantıları ve devreye alma

Medya, egzoz, yağ ayırıcı ve elektrik bağlantıları **Bölüm 5.1 Adım 4–9** kapsamında uygulanır. Teknik bağlantı değerleri **Bölüm 3.3.3** (elektrik) ve **Bölüm 3.3.5** (hava/su) tablolarında verilmiştir; bu bölüm kurulum prosedürünü tanımlar.

Hidrolik sistem bulunmamaktadır. Vakum bağlantısı yoktur. Bu makinede HMI olmadığından bağlantı doğrulaması manometre, pano lambaları ve fiziksel gözlem ile yapılır.

---

## 5.3.1 Basınçlı hava bağlantısı

| Parametre | Değer (Bölüm 3.3.5) |
| :--- | :--- |
| Basınçlı hava girişi | 6 bar |
| Bağlantı noktası | Makine gövdesindeki **AIR INLET / HAVA GİRİŞİ** regülatörü (manometreli) |
| Bağlantı çapı | [EKSİK] — layout çizimi |
| Tüketici | Yağ ayırıcı ünitesi diyaframlı pompası |

**Bağlantı prosedürü**

1. Tesisat basınçlı hava hattının kuru ve yağsız hava sağladığını doğrulayın; hat üzerinde kilitlenebilir kesme vanası bulunmalıdır (LOTO noktası — **Bkz. Bölüm 2.4**).
2. Tesisat hava hattını makine gövdesindeki **AIR INLET** regülatör girişine bağlayın.
3. Tesis hava vanasını açın.
4. Regülatörü **6 bar** olacak şekilde ayarlayın; manometreyi referans alın (**Bkz. Bölüm 6.5**).
5. Rakor ve hortum bağlantılarında kaçak kontrolü yapın (ses veya sabunlu su).

**Beklenen sonuç:** Manometre 6 bar; kaçak yok.

**Anormal durum:** Basınç 6 bar'a ulaşmıyorsa tesis kompresör kapasitesi, hat vanası ve regülatör ayarını kontrol edin.

![Basınçlı hava girişi — AIR INLET regülatörü](../../assets/3.3/hava-girisi-regulator.jpg)

---

## 5.3.2 Su bağlantısı ve tank tahliyesi

| Parametre | Değer (Bölüm 3.3.5) |
| :--- | :--- |
| Su girişi basıncı | 1 bar |
| Su sıcaklığı | +10 °C – +70 °C |
| Su kalitesi | Şebeke suyu veya arıtılmış su |
| Tank dolumu | Elle — otomatik dolum vanası yoktur |
| Tahliye | Tank altı **TAHLİYE** vanaları — çap [EKSİK] |

**Bağlantı prosedürü**

1. Tesis su hattını, tankların elle doldurulacağı noktaya (hortum veya sabit dolum ağzı) ulaşacak şekilde hazırlayın; su basıncının **1 bar** olduğunu doğrulayın.
2. Tank 1 ve Tank 2 altındaki **TAHLİYE** vanalarının kapalı olduğunu kontrol edin.
3. TAHLİYE vanalarını tesis atık su hattına bağlayın; yağlı proses suyu evsel kanalizasyona verilmez (**Bkz. Bölüm 10.1.8**).
4. Tankları **Bölüm 7.2.1**'e göre elle doldurun; dolum sırasında tank altı, boru bağlantıları ve pompa gövdesinde sızıntı kontrolü yapın.
5. Dolum tamamlandığında kırmızı **TANK 1 / TANK 2 WASHING LEVEL** lambalarının söndüğünü doğrulayın (ana şalter ON iken).

**Beklenen sonuç:** Tanklar dolu; WASHING LEVEL lambaları sönük; sızıntı yok.

**Anormal durum:** Tank dolu olmasına rağmen seviye lambası yanıyorsa seviye sensörünü kontrol edin (**Bkz. Bölüm 11.7**).

---

## 5.3.3 Elektrik bağlantısı ve topraklama

Elektrik besleme değerleri **Bölüm 3.3.3** tablosunda verilmiştir. Kurulum hattı: **380 V, 50 Hz, 3 faz, 3P+N+PE, 110 kW / 220 A**; ana şalter **Schneider CVS250F (250 A)**.

**TEHLİKE — Elektrik çarpması:** Canlı hat üzerinde çalışma yasaktır. Bağlantı öncesi tesis besleme şalteri kapatılıp kilitlenmeli, makine ana şalteri **OFF** konumunda olmalıdır. Bağlantı yalnızca yetkili elektrik personeli tarafından yapılır.

**Bağlantı prosedürü**

1. Tesis besleme kablosunun kesitini 220 A akım ve tesis kablo uzunluğuna göre doğrulayın.
2. Pano kapağını açın; besleme kablosunu pano giriş rakorundan geçirerek ana şalter (TMŞ) giriş terminallerine **L1-L2-L3-N** sırasına uygun bağlayın.
3. **PE** iletkenini pano topraklama barasına bağlayın; pano kapağı ile gövde arasındaki sarı-yeşil topraklama köprüsünün yerinde olduğunu kontrol edin.
4. Bağlantı sıkılığını tork anahtarı ile kontrol edin; gevşek bağlantı ısınma ve yangın riski oluşturur.
5. Pano kapağını kapatın ve kilitleyin.
6. Tesis besleme şalterini açın; makine ana şalterini henüz açmayın — **Bölüm 5.3.6** faz kontrolüne geçin.

![Pano kapağı topraklama bağlantısı](../../assets/5.3/pano-topraklama.jpg)

![Ana şalter (TMŞ) giriş terminalleri](../../assets/5.3/tms-ana-salter.jpg)

---

## 5.3.4 Egzoz bacası bağlantısı

Egzoz fanı (FE01) makine üstündeki bacaya monte edilmiştir ve hücrelerdeki buharı tahliye eder. Baca, tesis havalandırma kanalına veya doğrudan dış ortama bağlanmalıdır; aksi hâlde buhar işletme içine yayılır, görüş azalır ve pano içinde yoğuşma oluşur.

1. Baca çıkış çapına uygun kanalı ([EKSİK] — layout çizimi) tesis havalandırmasına veya dış ortama kadar döşeyin.
2. Kanalda yoğuşan suyun makineye geri akmaması için kanala eğim ve en alt noktaya yoğuşma tahliyesi verin.
3. Dış ortam çıkışında yağmur ve geri hava akışına karşı başlık kullanın.
4. Kanal bağlantılarını sızdırmaz yapın; egzoz fanı çalıştığında bağlantılardan buhar kaçmadığını kontrol edin (**Bkz. Bölüm 5.5.5**).

---

## 5.3.5 Yağ ayırıcı ünitesi bağlantısı

Yağ ayırıcı ünitesi, ayrı bir paslanmaz kabindir ve altındaki diyaframlı pompa basınçlı hava ile çalışır.

1. Üniteyi makinenin yanına, layout'ta belirtilen konuma yerleştirin ve ayaklarını teraziye alın.
2. Tank ile ünite arasındaki yağlı su emiş ve dönüş hortumlarını bağlayın; hortum güzergâhı yürüyüş yolunu kesmemeli ve ezilmemelidir.
3. Ünitenin hava hattını (solenoid valf girişi) makine hava hattına bağlayın.
4. Ünitenin elektrik (solenoid valf) bağlantısının panodan yapıldığını doğrulayın; bağlantı elektrik şemasına göredir (**Bkz. Bölüm 13.1**).
5. Devreye almada panelde etiketsiz yağ ayırıcı anahtarını açın; diyaframlı pompanın çalıştığını ve hortumlarda kaçak olmadığını kontrol edin.

---

## 5.3.6 Devreye alma ve faz kontrolü

Faz sırası pompa, fan ve blower yönü için kritiktir; ters faz motorların ters dönmesine, pompa basıncının düşmesine ve kurutma debisinin azalmasına yol açar. Faz sıra rölesi **MKR-01** ters veya eksik fazda çıkış vermez.

**Devreye alma prosedürü**

| Sıra | İşlem |
| :---: | :--- |
| 1 | Trifaze besleme hattı panoya bağlandı (**Bölüm 5.3.3**) |
| 2 | Ana şalter kolu **ON (I)** konumuna alındı |
| 3 | **RESET** butonuna basıldı; mavi lambanın yandığı doğrulandı |
| 4 | Faz sıra rölesi MKR-01 çıkış durumu kontrol edildi (röle göstergesi) |
| 5 | Faz yönü ters ise ana şalter **OFF**; yetkili elektrik personeli **iki fazı** değiştirdi; şalter yeniden açıldı |
| 6 | Pompa veya fan kısa süre çalıştırılarak dönüş yönü motor üzerindeki ok ile karşılaştırıldı |

**Elektrik devreye alma test checklist**

| Kontrol | Beklenen sonuç |
| :--- | :--- |
| Faz koruma rölesi çıkış veriyor mu? | Evet |
| Makinede elektrik var mı? (RESET lambası yanıyor) | Evet |
| Acil stop'a basıldığında RESET lambası sönüyor ve makine duruyor mu? | Evet |
| Motor dönüş yönleri doğru mu? | Evet |

Acil stop test adımları **Bölüm 5.4.1**'de; reset prosedürü **Bölüm 2.5**'te verilmiştir.

---

## 5.3.7 Bağlantı tamamlama kontrol listesi

| # | Kontrol | Durum |
| :---: | :--- | :---: |
| 1 | Basınçlı hava bağlantısı yapıldı; regülatör 6 bar | ☐ |
| 2 | Hava hattında kaçak yok | ☐ |
| 3 | Su hazırlandı; tanklar elle dolduruldu; WASHING LEVEL lambaları sönük | ☐ |
| 4 | TAHLİYE vanaları kapalı ve atık su hattına bağlı | ☐ |
| 5 | Egzoz bacası havalandırmaya / dış ortama bağlı | ☐ |
| 6 | Yağ ayırıcı ünitesi hortum, hava ve elektrik bağlantıları yapıldı | ☐ |
| 7 | Trifaze elektrik ve PE bağlantısı yapıldı (380 V, 50 Hz) | ☐ |
| 8 | Faz yönü doğrulandı; MKR-01 çıkış veriyor | ☐ |
| 9 | Ana şalter açıldı; RESET lambası yanıyor | ☐ |

Bağlantılar tamamlandıktan sonra **Bölüm 5.4** ve **5.5** testlerine geçin.
