# 3.1 Makine tanımı

**KNV 30 3000 2B**, endüstriyel parçaların konveyör üzerinde taşınarak yıkama, durulama ve kurutma proseslerinden geçirildiği otomatik bir parça yıkama makinesidir. Makine; yıkama ve durulama banyoları, kurutma bölgesi ile parça taşıma konveyöründen oluşan entegre bir hat yapısındadır.

Konveyör akış yönü **sol besleme / sağ boşaltma** şeklindedir. Operatör paneli (HMI) ve günlük müdahale noktalarına erişim **makinenin sağ tarafındadır**. Bu projede parça giriş ve çıkışı **robot hattı** ile entegre edilmiştir; yükleme ve boşaltma prosedürleri müşteri hattına aittir (**Bkz. Bölüm 3.1.9**).

Makine gövdesi paslanmaz çelikten imal edilmiştir. Proses tankları sıcak su ile çalışır; kurutma bölgesinde hava bıçağı üniteleri ve egzost donanımı, yıkama tankında yağ sıyırıcı ünite bulunur. Bileşen düzenleri ve proses akışı aşağıdaki alt bölümlerde ayrıntılandırılmıştır.

---

## 3.1.1 Genel görünüm ve proses akışı

Makine hat boyunca üç ana proses bölgesinden oluşur: **yıkama**, **durulama** ve **kurutma**. Parçalar konveyör üzerinde sol taraftan alınır, proses bölgelerinden sırayla geçer ve sağ taraftan çıkar.

![KNV-30 3000 2B genel görünüm](../../assets/3.1/1.png)

Nominal proses döngü süresi **900 saniye** (15 dakika) olarak tanımlanmıştır (bkz. **Bölüm 3.3.2**). Konveyör tahriki **servo motor** ile yapılır; parça akışı robot hattı ile senkronize çalışır.

![Proses akışı — yıkama, durulama, kurutma](../../assets/3.1/2.png)

---

## 3.1.2 Konveyör ve parça taşıma

Konveyör hattı parçaların proses bölgeleri arasında taşınmasını sağlar. Besleme **sol**, boşaltma **sağ** yöndedir. Konveyör redüktörü motoru **1,5 kW** Siemens SIMOTICS servo tahrikli sistemdir (bkz. **Bölüm 3.3.4**).

Robot entegrasyonunda parça giriş ve çıkış müşteri hattı prosedürüne tabidir. Çıkış konveyöründe parça algılandığında makine durur; robot parçayı aldıktan sonra HMI onayı ile devam edilir (bkz. **Bölüm 3.4.3**, **11.1.2** Error-461).

![Konveyör giriş-çıkış görünümü](../../assets/3.1/3.png)

---

## 3.1.3 Yıkama banyosu

Yıkama bölgesi, parçaların sıcak proses suyu ve nozullar ile yıkandığı tank sistemidir. Yıkama pompası **Lowara ESHE 40-160/30**, **3 kW**, **380 V** (bkz. **Bölüm 3.3.4**).

Tank içinde **ön filtre**, **iç filtre** ve **yağ sıyırıcı** bulunur. Günlük ön filtre temizliği **Bölüm 10.1.3**'te tanımlanmıştır. Pompa önü manuel vana start öncesi **açık** olmalıdır (bkz. **Bölüm 7.2.5**).

![Yıkama banyosu genel görünüm](../../assets/3.1/4.png)

---

## 3.1.4 Durulama banyosu

Durulama bölgesi, yıkama sonrası parça yüzeyindeki proses suyunun durulama suyu ile giderildiği tank sistemidir. Durulama pompası **Goulds GCEA 370/3**, **1,85 kW** (bkz. **Bölüm 3.3.4**).

Durulama tankı seviye kontrolü, otomatik dolum vanası ve ısıtma sistemi yıkama tankı ile benzer mantıkta çalışır. Haftalık filtre temizliği **Bölüm 10.1.4**'e tabidir.

![Durulama banyosu genel görünüm](../../assets/3.1/5.png)

---

## 3.1.5 Yağ sıyırıcı

Yağ sıyırıcı, yıkama tankı yüzeyinde biriken yağ tabakasını toplayarak proses suyunun yağ yükünü azaltır. Redüktör motoru **0,04 kW**, **1340 rpm** FINEX tahrikli ünitedir (bkz. **Bölüm 3.3.4**).

Aşırı yağ birikimi filtre tıkanmasına ve proses performans düşüşüne yol açabilir. Periyodik bakım **Bölüm 9.1.3** takvimine göre yapılır.

![Yağ sıyırıcı ünite](../../assets/3.1/6.png)

---

## 3.1.6 Kurutma ve egzost

Kurutma bölgesinde **4 adet kurutma air knife** (kurutma fanı ünitesi, her biri **4 kW**) parça yüzeyindeki nemi alır. **Egzost fanı** (**0,37 kW**) buhar ve nem tahliyesini destekler (bkz. **Bölüm 3.3.4**).

Konveyör akış yönü **sol giriş → sağ çıkış** olduğundan kurutma donanımının yerleşimi şöyledir:

| Bileşen | Konum (konveyör boyunca) |
|---------|---------------------------|
| **Egzost fanı** | **Konveyör giriş** tarafı (sol) |
| **Kurutma air knifeları** (4 adet) | **Konveyör çıkış** tarafı (sağ) |

Parça durulama sonrası önce giriş tarafındaki egzost bölgesinden geçer; kurutma air knifeları çıkış tarafında son kurutmayı uygular.

Kurutma fanları **Ölçükontrol OK 710K37** (4 × **4 kW**, **2940 rpm**) modeldir. Kurutma fonksiyonu HMI'dan proses seçici ile aktif/pasif yapılabilir (bkz. **Bölüm 7.1.6**).

Kurutma fanları ve egzost kanallarında toz birikimi hava performansını düşürür; periyodik bakım takviminde yer alır (bkz. **Bölüm 9.1.3**).

![Kurutma ve egzost bölgesi](../../assets/3.1/7.jpg)

---

## 3.1.7 Elektrik, kontrol ve otomasyon altyapısı

Makinenin elektrik ve otomasyon altyapısı merkezi **elektrik panosu** üzerinde toplanmıştır. Pano koruma sınıfı **IP55**, boyutları **800 × 1200 × 300 mm** (G × Y × D)'dir.

Besleme gerilimi, kurulu güç, ana şalter değerleri ve motor listesi **Bölüm 3.3** — Teknik özellikler alt bölümlerinde SSOT olarak verilmiştir; bu bölümde tablo tekrarlanmaz. Özet:

- Besleme: **380 V**, **50 Hz**, **3 faz**, **3P+N+PE**
- Toplam kurulu güç: **50 kW** (ısıtma dahil)
- Ana şalter: **100 A**, Schneider

Otomasyon mimarisi **Siemens SIMATIC S7-1200** PLC (CPU 1215C) ve **SIMATIC HMI KTP700 Basic PN** (7") operatör paneli üzerine kuruludur. Start/stop, alarm yönetimi, proses fonksiyon seçimi, dil ayarı ve parametre erişimi HMI arayüzü üzerinden yapılır. Kontrol elemanlarının konumları, sinyal lambası anlamları ve ekran davranışları **Bölüm 3.4** — Makine kontrolleri alt bölümünde detaylandırılmıştır.

Tepe lambası renk kodlaması operatörün makine durumunu uzaktan izlemesini sağlar: **kırmızı** alarm, **sarı** kullanıma hazır, **yeşil** çalışıyor. Alarm durumunda HMI alarm ekranı devreye girer; eş zamanlı olarak tepe lambası kırmızı yanar.

Makine **Profinet** protokolü ile üst sistem entegrasyonuna hazırdır. HMI arayüzü **Türkçe, İngilizce ve Almanca** dil desteğine sahiptir.

---

## 3.1.8 Acil durdurma ve güvenlik donanımı

Makinede **4 adet acil stop butonu** bulunur:

1. Elektrik panosu üzerinde
2. Makine girişinde konveyörün sağında
3. Makine girişinde konveyörün solunda
4. Makine çıkışında konveyörün solunda

Acil stop'a basıldığında makinedeki **her fonksiyon durur**. Yeniden devreye alma prosedürü, reset adımları ve acil stop sonrası makine davranışı **Bölüm 2.5** — Acil durdurma sistemi alt bölümünde SSOT olarak verilmiştir; bu bölümde adımlar tekrarlanmaz.

Emniyet kapısı / sabit bariyer sayısı sıfırdır; bakım kapakları **RFID güvenlik sensörü** ile izlenir. Kapak açıldığında RFID switch makineyi durdurur. Makinenin güvenlik kategorisi **CAT3**'tür (bkz. **Bölüm 2.3**). Işık perdesi bulunmamaktadır.

Bakım sırasında emniyet kapısı bypass edilmemelidir; kapak açılmadan önce enerji izolasyonu ve **LOTO** prosedürü uygulanmalıdır (bkz. **Bölüm 2.4**).

---

## 3.1.9 Hat entegrasyonu ve iletişim

Bu proje kapsamında parça **giriş** ve **çıkış** operasyonları robot ile gerçekleştirilir; giriş/çıkış prosedürleri müşteri hattına aittir. Makinede sürekli operatör bulunmaz; hata durumunda müdahale bakım personeli tarafından yapılır (bkz. **Bölüm 11**).

Üst sistem (MES / SCADA) bağlantısı **müşteri tarafından** yapılır. Makine **Profinet** altyapısı ile entegrasyona hazırdır; protokol, I/O özeti ve dokümantasyon **Bölüm 5.6**'da tanımlanmıştır. Teslim edilen harici dokümanların listesi **Bölüm 13.1**'dedir.
---

Amaçlanan kullanım sınırları için bkz. **Bölüm 3.2**; teknik tablolar için bkz. **Bölüm 3.3**; kontrol elemanları için bkz. **Bölüm 3.4**; yerleşim planı için bkz. **Bölüm 3.5**.
