# 3.1 Makine tanımı

KNV 30 3000 2B, endüstriyel parçaların otomatik yıkama, durulama ve kurutma proseslerinden geçirildiği konveyörlü bir parça yıkama makinesidir. Makine **sol besleme / sağ boşaltma** konveyör akışına sahiptir; operatör ve HMI erişimi **sağ taraftadır**. Bu projede giriş ve çıkış **robot hattı** ile entegre edilmiştir.

Makine gövdesi paslanmaz çelik malzemeden imal edilmiştir. Proses tankları sıcak su ile çalışır; kurutma bölgesinde **4 adet kurutma fanı** ve **egzost fanı** bulunur. Yağ sıyırıcı ünite yıkama tankı yüzeyindeki yağ tabakasını toplar.

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

Yağ sıyırıcı, yıkama tankı yüzeyinde biriken yağ tabakasını toplayarak proses suyunun yağ yükünü azaltır. Redüktör motoru **0,04 kW** FINEX tahrikli ünitedir.

Aşırı yağ birikimi filtre tıkanmasına ve proses performans düşüşüne yol açabilir. Periyodik bakım **Bölüm 9.1.3** takvimine göre yapılır.

![Yağ sıyırıcı ünite](../../assets/3.1/6.png)

---

## 3.1.6 Kurutma ve egzost

Kurutma bölgesinde **4 adet kurutma fanı** (her biri **4 kW**) parça yüzeyindeki nemi alır. **Egzost fanı** (**0,37 kW**) buhar ve nem tahliyesini destekler (bkz. **Bölüm 3.3.4**).

Kurutma fanları marka/model bilgisi DATA dosyasında `[EKSİK]` olarak bırakılmıştır. Kurutma fonksiyonu HMI'dan proses seçici ile aktif/pasif yapılabilir (bkz. **Bölüm 7.1.6**).

Kurutma fanları ve egzost kanallarında toz birikimi hava performansını düşürür; periyodik bakım takviminde yer alır (bkz. **Bölüm 9.1.3**).

![Kurutma ve egzost bölgesi](../../assets/3.1/7.png)

---

## 3.1.7 Elektrik, kontrol ve otomasyon altyapısı

Makinenin elektrik ve otomasyon altyapısı merkezi **elektrik panosu** üzerinde toplanmıştır. Pano koruma sınıfı **IP55**, boyutları **800 × 1200 × 300 mm** (G × Y × D)'dir.

Besleme gerilimi, kurulu güç, ana şalter değerleri ve motor listesi **Bölüm 3.3** — Teknik özellikler alt bölümlerinde SSOT olarak verilmiştir; bu bölümde tablo tekrarlanmaz. Özet:

- Besleme: **380 V**, **50 Hz**, **3 faz**, **3P+N+PE**
- Toplam kurulu güç: **50 kW** (ısıtma dahil)
- Ana şalter: **100 A**, Schneider

Otomasyon mimarisi **Siemens SIMATIC S7-1200** PLC (CPU 1215C) ve **SIMATIC HMI KTP700 Basic PN** (7") operatör paneli üzerine kuruludur. Start/stop, alarm yönetimi, proses fonksiyon seçimi, dil ayarı ve parametre erişimi HMI arayüzü üzerinden yapılır. Kontrol elemanlarının konumları, sinyal lambası anlamları ve ekran davranışları **Bölüm 3.4** — Makine kontrolleri alt bölümünde detaylandırılmıştır.

Tepe lambası renk kodlaması operatörün makine durumunu uzaktan izlemesini sağlar: **kırmızı** alarm, **sarı** kullanıma hazır, **yeşil** çalışıyor. Alarm durumunda HMI alarm ekranı devreye girer; eş zamanlı olarak tepe lambası kırmızı yanar.

Makine **Profinet** protokolü ile üst sistem entegrasyonuna hazırdır. Uzaktan erişim Secomea modülü ile sağlanır. HMI arayüzü **Türkçe, İngilizce ve Almanca** dil desteğine sahiptir.

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

Üst sistem (MES / SCADA) bağlantısı: **[EKSİK]** — müşteri konfigürasyonuna bağlıdır.

I/O listesi dosya referansı: **1726050-ALPER-KNV 30 I/O LİSTESİ.pdf** — ayrı evrak teslim edilmemiştir (KD).

Fieldbus / protokol: **Profinet**. Uzaktan erişim: **Evet** — Secomea modülü.

---

**Bölüm 3.1 sonu.** Amaçlanan kullanım sınırları için bkz. **Bölüm 3.2**; teknik tablolar için bkz. **Bölüm 3.3**; kontrol elemanları için bkz. **Bölüm 3.4**; yerleşim planı için bkz. **Bölüm 3.5**.
