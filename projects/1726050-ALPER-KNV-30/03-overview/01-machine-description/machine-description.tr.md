# 3.1 Makine tanımı ve sistematik yapı

**KNV 30 3000 2B** (seri no **1726050**, müşteri **ALPER ÖZLEM IDEA**, üretim yılı **2026**), girişten yüklemeli konveyörlü, iki banyolu (yıkama + durulama) endüstriyel parça yıkama makinesidir. Makinenin ana işlevi, parça yüzeyinde endüstriyel işlemlerden kalan **yağ ve kirliliğin giderilmesidir**. Parçalar konveyör hattı üzerinde ilerleyerek yıkama, durulama ve kurutma proseslerini ardışık olarak tamamlar; proses sonunda parça, sonraki hat adımlarına (montaj, kaplama vb.) uygun temizlik seviyesinde çıkışa ulaşır.

**2B** tanımı, makinenin **iki bağımsız proses banyosuna** — yıkama ve durulama — sahip olduğunu ifade eder. Her banyo kendi tankı, pompası, filtre devresi ve ısıtma altyapısı ile çalışır; banyolar arasında sıvı karışımı yapısal olarak engellenmiştir. Besleme tarafı **sol**, boşaltma tarafı **sağ**, operatör tarafı **sağ** yöndedir. Bu projede giriş ve çıkış **robot** ile yapılır; makine sürekli otomatik hat operasyonu için tasarlanmıştır.

<!-- FOTO: Makine genel görünüm — operatör tarafı (sağ), besleme sol / boşaltma sağ -->
![KNV-30 3000 2B genel görünüm](../../assets/1726050-ALPER-KNV 30 3000 (1).png)

---

## 3.1.1 Genel tanım ve proses konsepti

KNV 30 3000 2B, endüstriyel üretim hatlarında işlenmiş parçaların yüzey temizliği için kullanılan, konveyör üzerinde ilerleyen parçaların sabit proses bölgelerinden geçirildiği bir yıkama sistemidir. Parçalar sol taraftan konveyöre alınır; sırasıyla yıkama nozulları, durulama nozulları ve kurutma hava ünitelerinin etkisi altında hat boyunca ilerler; sağ taraftan temizlenmiş ve kurutulmuş olarak hattan çıkar.

Proses akışı üç adımdan oluşur. **Yıkama** aşamasında endüstriyel yağ ve kir tabakası proses sıvısı ile uzaklaştırılır. **Durulama** aşamasında yıkama kalıntıları ve kalan kirlilik ikinci, bağımsız bir tank devresinde giderilir. **Kurutma** aşamasında parça yüzeyindeki nem, yönlendirilmiş hava akışı ile alınır; boyama veya montaj gibi nem hassasiyeti olan sonraki operasyonlar için parça kuru olarak çıkışa ulaşır.

Nominal döngü süresi **900 saniye** (15 dakika) olarak tanımlanmıştır. Fiziksel boyutlar, ağırlık değerleri ve kapasite parametreleri **Bölüm 3.3** — Teknik özellikler alt bölümünde SSOT olarak verilmiştir; bu bölümde tekrarlanmaz.

| Proses adımı | Sıra | Açıklama |
|--------------|------|----------|
| Yıkama | 1 | Endüstriyel yağ ve kir tabakasının giderilmesi |
| Durulama | 2 | Yıkama kalıntılarının ve kirliliğin uzaklaştırılması |
| Kurutma | 3 | Parça yüzeyindeki nemin alınması |

<!-- FOTO: Proses akışı — yıkama, durulama, kurutma hat boyunca -->
![Proses akışı — yıkama, durulama, kurutma](../../assets/1726050-ALPER-KNV 30 3000(2).png)

---

## 3.1.2 Ana modüller ve sistem bileşenleri

Makine, birbirine entegre ana modüllerden oluşur. Aşağıdaki liste, sistematik yapının bütünsel görünümünü sağlar; marka, model ve güç değerleri **Bölüm 3.3.4** — Motor ve sürücü listesinde SSOT olarak verilmiştir.

| Modül | İşlev |
|-------|-------|
| Konveyör | Parçaların proses bölgeleri arasında sürekli taşınması |
| Yıkama pompası | Yıkama tankı sıvısının nozullara basılması |
| Durulama pompası | Durulama tankı sıvısının nozullara basılması |
| Yağ sıyırıcı | Yıkama tankı yüzeyindeki yağ tabakasının uzaklaştırılması |
| Kurutma fanları | Parça yüzeyindeki nemin kurutma bölgesinde alınması |
| Egzost fanı | Kurutma bölgesindeki nemli havanın tahliyesi |
| Elektrik panosu | Güç dağıtımı, koruma ve otomasyon altyapısının barındırılması |
| HMI / PLC | Proses kontrolü, alarm yönetimi ve operatör arayüzü |
| Ana şalter / sigorta | Makine beslemesinin açılıp kapatılması ve aşırı akım koruması |

Makine **ayarlanabilir ayak** sistemi üzerine monte edilmiştir; ağırlık merkezi konveyör hattının ortasındadır (bkz. Bölüm 3.5 — Makine yerleşim planı).

---

## 3.1.3 Konveyör taşıma sistemi

Konveyör, makinenin omurgasını oluşturan taşıma sistemidir. Parçaların yıkama, durulama ve kurutma bölgeleri arasında kontrollü ve sürekli ilerlemesini sağlar; referans / home pozisyonu olarak **konveyörün başı** kullanılmalıdır.

Konveyör tahriki redüktörlü elektrik motoru ile gerçekleştirilir (**Bkz. Bölüm 3.3.4** — Konveyör redüktörü motoru: 1,5 kW, Siemens SIMOTICS S-1FL6). Konveyör hattı, parçaların yıkama ve durulama nozulları altından geçmesini sağlayacak şekilde proses bölgeleri boyunca konumlandırılmıştır.

Konveyör üzerinde toplam **4 adet yağlama noktası** bulunur: giriş tarafında 2 adet, çıkış tarafında 2 adet. Periyodik gresleme, zincir/kayışın aşınmasını ve gürültüyü önlemek için gereklidir (bkz. Bölüm 9 — Aylık bakım maddeleri).

**UYARI — Ezilme tehlikesi:** Konveyör çalışırken giriş veya çıkış bölgelerine el veya cisim sokmayın. Acil durumlarda en yakın acil stop butonuna basın (bkz. Bölüm 2.5).

<!-- FOTO: Konveyör giriş-çıkış — besleme (sol) / boşaltma (sağ) -->
![Konveyör giriş-çıkış görünümü](../../assets/1726050-ALPER-KNV 30 3000(3).png)

---

## 3.1.4 Yıkama banyosu ve sirkülasyon sistemi

Yıkama banyosu, parça yüzeyindeki endüstriyel yağ ve kir tabakasının giderildiği birinci proses bölgesidir. Tank içerisindeki proses sıvısı yıkama pompası tarafından emilerek püskürtme sistemine basılır; parçalar konveyör üzerinde ilerlerken nozullardan gelen basınçlı sıvı ile temas eder.

Yıkama pompası (**Lowara ESHE 40-160/30**, 3 kW — bkz. Bölüm 3.3.4) bağımsız sirkülasyon devresini tahrik eder. Yıkama tankında **ön filtreler** bulunur; günlük bakımda sökülüp temizlenmeleri gerekir (bkz. Bölüm 10.1.3). Pompa çıkış hattında **torba filtreler** yer alır; haftalık derin temizlikte sökülüp temizlenmelidir (bkz. Bölüm 10.1.4).

Proses suyu için **şebeke suyu** veya **arıtılmış su** kullanılmalıdır. Su giriş basıncı, sıcaklık aralığı ve diğer medya bağlantı değerleri **Bölüm 3.3.5** — Sıkıştırılmış hava ve su tablosunda verilmiştir.

Tank yüzeyinde biriken yağ tabakası proses etkinliğini düşürür; bu nedenle yıkama tankına entegre **yağ sıyırıcı** ünite bulunur (bkz. Bölüm 3.1.6).

<!-- FOTO: Yıkama banyosu — tank ve pompa genel görünüm -->
![Yıkama banyosu genel görünüm](../../assets/1726050-ALPER-KNV 30 3000(4).png)

---

## 3.1.5 Durulama banyosu ve sirkülasyon sistemi

Durulama banyosu, yıkama prosesinden geçen parçalar üzerinde kalan deterjan, yağ kalıntısı ve kirliliğin uzaklaştırıldığı ikinci proses bölgesidir. Yıkama banyosundan bağımsız tank ve pompa devresine sahiptir; iki banyo arasında sıvı karışımı yapısal olarak engellenmiştir.

Durulama pompası (**GOULDS GCEA 370/3**, 1,85 kW — bkz. Bölüm 3.3.4) durulama sirkülasyon devresini tahrik eder. Durulama tankında da filtreler bulunur; haftalık derin temizlik prosedürü kapsamında tank filtreleri ve pompa çıkışındaki torba filtreler sökülüp temizlenmelidir (bkz. Bölüm 10.1.4).

Temizlik maddesi olarak **asit bazlı** veya **paslanmaz çeliğe zarar verecek** maddeler kullanılmamalıdır; aksi halde tank iç yüzeyleri ve contalar zarar görür (bkz. Bölüm 10 — Yasak temizlik maddeleri).

<!-- FOTO: Durulama banyosu — tank ve pompa genel görünüm -->
![Durulama banyosu genel görünüm](../../assets/1726050-ALPER-KNV 30 3000(5).png)

---

## 3.1.6 Yağ sıyırıcı ünitesi

Yıkama tankında biriken yüzen yağ tabakasının sürekli uzaklaştırılması için yağ sıyırıcı ünite entegre edilmiştir. Endüstriyel parça yıkamada yağ birikimi proses sıvısının etkinliğini düşürür, filtre tıkanmasını hızlandırır ve bakım ihtiyacını artırır; yağ sıyırıcı bu birikimi önleyerek tank içi proses kalitesini korur.

Yağ sıyırıcı redüktör motoru (**FINEX E1610-40-150-17B-C**, 0,04 kW — bkz. Bölüm 3.3.4) düşük güçlü sürekli tahrik prensibiyle çalışır. Redüktör yağ keçesi / teflon kontrol ve gerekirse değişim, 500 saat bakım kapsamındadır (bkz. Bölüm 9). Yağ sıyırıcı teflon parçası tüketim kategorisinde yedek parça olarak bulundurulmalıdır (bkz. Bölüm 13.3 — Sipariş kodu X:07 03497).

<!-- FOTO: Yağ sıyırıcı ünite — yıkama tankı üzerinde konum -->
![Yağ sıyırıcı ünite](../../assets/1726050-ALPER-KNV 30 3000(6).png)

---

## 3.1.7 Kurutma ve egzost sistemi

Kurutma bölgesi, durulama prosesinden çıkan parçalar üzerindeki yüzey neminin güçlü ve yönlendirilmiş hava akışı ile uzaklaştırıldığı üçüncü ve son proses adımıdır. Makinede **4 adet kurutma fanı** (her biri 4 kW) bulunur; toplam kurutma fan gücü **16 kW**'dır (bkz. Bölüm 3.3.4).

Kurutma bölgesinde biriken nemli havanın makine dışına tahliyesi **egzost fanı** (ENA 2, 0,37 kW) ile sağlanır. HMI çalışma sayfasında yıkama, durulama, **kurutma 1**, **kurutma 2** ve **egzoz** seçenekleri bağımsız olarak açılıp kapatılabilir; hat operatörü proses ihtiyacına göre bu fonksiyonları yapılandırır (bkz. Bölüm 7.1 — Çalışma modları).

Kurutma fanları ve egzost kanallarında toz birikimi hava performansını düşürür; periyodik temizlik bakım takviminde yer alır (bkz. Bölüm 9 — 250 saat bakım maddeleri).

---

## 3.1.8 Elektrik, kontrol ve otomasyon altyapısı

Makinenin elektrik ve otomasyon altyapısı merkezi **elektrik panosu** üzerinde toplanmıştır. Pano koruma sınıfı **IP55**, boyutları **800 × 1200 × 300 mm** (G × Y × D)'dir.

Besleme gerilimi, kurulu güç, ana şalter değerleri ve motor listesi **Bölüm 3.3** — Teknik özellikler alt bölümlerinde SSOT olarak verilmiştir; bu bölümde tablo tekrarlanmaz. Özet:

- Besleme: **380 V**, **50 Hz**, **3 faz**, **3P+N+PE**
- Toplam kurulu güç: **50 kW** (ısıtma dahil)
- Ana şalter: **100 A**, Schneider

Otomasyon mimarisi **Siemens SIMATIC S7-1200** PLC (CPU 1215C) ve **SIMATIC HMI KTP700 Basic PN** (7") operatör paneli üzerine kuruludur. Start/stop, alarm yönetimi, proses fonksiyon seçimi, dil ayarı ve parametre erişimi HMI arayüzü üzerinden yapılır. Kontrol elemanlarının konumları, sinyal lambası anlamları ve ekran davranışları **Bölüm 3.4** — Makine kontrolleri alt bölümünde detaylandırılmıştır.

Tepe lambası renk kodlaması operatörün makine durumunu uzaktan izlemesini sağlar: **kırmızı** alarm, **sarı** kullanıma hazır, **yeşil** çalışıyor. Alarm durumunda HMI alarm ekranı devreye girer; eş zamanlı olarak tepe lambası kırmızı yanar.

Makine **Profinet** protokolü ile üst sistem entegrasyonuna hazırdır. Uzaktan erişim Secomea modülü ile sağlanır. HMI arayüzü **Türkçe, İngilizce ve Almanca** dil desteğine sahiptir.

---

## 3.1.9 Acil durdurma ve güvenlik donanımı

Makinede **4 adet acil stop butonu** bulunur:

1. Elektrik panosu üzerinde
2. Makine girişinde konveyörün sağında
3. Makine girişinde konveyörün solunda
4. Makine çıkışında konveyörün solunda

Acil stop'a basıldığında makinedeki **her fonksiyon durur**. Yeniden devreye alma prosedürü, reset adımları ve acil stop sonrası makine davranışı **Bölüm 2.5** — Acil durdurma sistemi alt bölümünde SSOT olarak verilmiştir; bu bölümde adımlar tekrarlanmaz.

Emniyet kapısı / sabit bariyer sayısı sıfırdır; bakım kapakları **RFID güvenlik sensörü** ile izlenir. Kapak açıldığında RFID switch makineyi durdurur. Makinenin güvenlik kategorisi **CAT3**'tür (bkz. Bölüm 2.3). Işık perdesi bulunmamaktadır.

Bakım sırasında emniyet kapısı bypass edilmemelidir; kapak açılmadan önce enerji izolasyonu ve **LOTO** prosedürü uygulanmalıdır (bkz. Bölüm 2.4).

---

## 3.1.10 Hat entegrasyonu ve iletişim

Bu proje kapsamında parça **giriş** ve **çıkış** operasyonları robot ile gerçekleştirilir; giriş/çıkış prosedürleri müşteri hattına aittir. Makinede sürekli operatör bulunmaz; hata durumunda müdahale bakım personeli tarafından yapılır (bkz. Bölüm 11).

Üst sistem (MES / SCADA) bağlantısı: **[EKSİK]** — müşteri konfigürasyonuna bağlıdır.

I/O listesi dosya referansı: **1726050-ALPER-KNV 30 I/O LİSTESİ.pdf** — ayrı evrak teslim edilmemiştir (KD).

Fieldbus / protokol: **Profinet**. Uzaktan erişim: **Evet** — Secomea modülü.

---

**Bölüm 3.1 sonu.** Amaçlanan kullanım sınırları için bkz. **Bölüm 3.2**; teknik tablolar için bkz. **Bölüm 3.3**; kontrol elemanları için bkz. **Bölüm 3.4**; yerleşim planı için bkz. **Bölüm 3.5**.
