# 1.1 Kılavuz hakkında

## 1.1.1 Kılavuzun amacı, kapsamı ve uygulama alanı

Bu kullanım kılavuzu, **KNV 30 3000 2B** makinesinin ayrılmaz ve yasal olarak bağlayıcı bir parçasıdır. Kılavuz; makinenin güvenli, verimli ve amacına uygun kullanımını sağlamak üzere EN ISO 12100 ve EN ISO 20607 ilkelerine uygun hazırlanmıştır. Bu standartlar, makine güvenliği ve kullanım kılavuzu içeriği konusunda uluslararası kabul görmüş minimum gereksinimleri tanımlar; bu nedenle kılavuzdaki talimatlar yalnızca öneri değil, işletme sorumluluğunun parçasıdır.

**Kapsam:** **KNV 30 3000 2B** (model kodu **KNV-30**, seri no **1726050**) ve bu projeye teslim edilen donanım.

**Hedef okuyucu grupları:** Operatör, bakım personeli, kurulum personeli.

Makine; girişten yüklemeli konveyörlü, iki banyolu (yıkama + durulama) endüstriyel parça yıkama sistemidir. Parçalar konveyör üzerinde ilerleyerek yıkama, durulama ve kurutma proseslerini tamamlar. Bu projede parça giriş ve çıkışı robot tarafından gerçekleştirilir; yükleme/boşaltma prosedürleri müşteri hattına aittir (**Bkz. Bölüm 7.4**). Kılavuz bu nedenle robot entegrasyonu ayrıntılarını kapsamaz; yalnızca makinenin kendi proses fonksiyonlarını ve güvenli sınırlarını tanımlar.

Kılavuz aşağıdaki yaşam döngüsü aşamalarını kapsar. Her aşama için ayrıntılı talimatlar ilgili bölümde verilir; bu liste yalnızca kapsam haritasıdır:

1. Taşıma, elleçleme ve depolama (**Bkz. Bölüm 4**)
2. Montaj, kurulum ve devreye alma (**Bkz. Bölüm 5–6**)
3. İşletim ve operasyon (**Bkz. Bölüm 7–8**)
4. Periyodik bakım (**Bkz. Bölüm 9**)
5. Temizlik ve dezenfeksiyon (**Bkz. Bölüm 10**)
6. Arıza teşhisi ve giderme (**Bkz. Bölüm 11**)
7. Demontaj, devre dışı bırakma ve bertaraf (**Bkz. Bölüm 12**)

Bu doküman temel mühendislik, mekanik veya elektrik eğitimi vermez. Personelin, işletme ve bakım personeli eğitimi kapsamında makine kullanımı ve bakımı ile ilgili mesleki eğitime sahip olduğu varsayılır. Eğitim eksikliği, prosedürlerin yanlış uygulanmasına ve makine hasarına yol açabilir.

---

## 1.1.2 Kılavuzun geçerliliği, güncelliği ve doküman kontrolü

Bu kılavuzdaki metinler, teknik veriler, çizimler ve şemalar; makinenin imalat / sevk tarihi (**2026-08-12**) itibarıyla teslim edilen **As-Built** (üretilen) konfigürasyonu yansıtır. Kılavuz ile makine arasında uyumsuzluk fark ederseniz, fiziksel makine durumunu esas alın ve üretici servisi ile doğrulama yapın (**Bkz. Bölüm 1.3**).

| Alan | Değer |
| :--- | :--- |
| **Revizyon** | 00 |
| **Son güncelleme** | 2026-08-12 |
| **Hazırlayan** | Fatih GÜRAL |
| **Üretim yılı** | 2026 |

Üretici, AR-GE ve ürün iyileştirme kapsamında makine tasarımında ve dokümantasyonda önceden haber vermeksizin değişiklik yapma hakkını saklı tutar. Daha önce teslim edilmiş makineler için geriye dönük revizyon yükümlülüğü doğmaz. Bu kural, seri üretimde sürekli iyileştirmeyi mümkün kılar; ancak mevcut makinenizde yapılan değişiklikler yalnızca o seri numarası için geçerlidir.

HMI operatör paneli dilleri **Bkz. Bölüm 3.4**'te tanımlanır.

---

## 1.1.3 Hedef kitle, personel kalifikasyonu ve sorumluluk dağılımı

Makine; elektrik, sıcak sıvı, basınçlı hava, kimyasal solüsyon ve hareketli mekanizmalar içerir. Bu enerji ve proses kaynakları, yanlış müdahalede ciddi yaralanma veya ekipman hasarına yol açabilir. Personel görevlendirmesinden, eğitimden ve yetki sınırlarından işveren (makineyi işleten kurum) sorumludur. Aşağıdaki roller, kılavuzda tanımlanan yetki ve yasakları netleştirir; rol dışı müdahale garanti kapsamını ve iş güvenliğini olumsuz etkiler.

**Operatör**

Bu makinede hatta sürekli fiziksel operatör bulunmaz; parça yükleme ve boşaltma robot tarafından yapılır. Operatör rolü; HMI üzerinden makineyi izleme, hazırlık/start/stop komutları verme ve alarm durumunda bakım personelini bilgilendirme kapsamındadır. Operatör, makineye mekanik veya elektriksel müdahale etmez; bu sınır, güvenlik fonksiyonlarının (RFID sensör, acil stop vb.) devre dışı kalmasını önler.

Operatör, HMI üzerinden hazırlık, start ve stop komutlarını verir; yıkama, durulama, kurutma ve egzoz fonksiyonlarını çalışma sayfasından açar veya kapatır (**Bkz. Bölüm 7.1**). Aktif alarmları HMI ve tepe lambası üzerinden izler; müdahale gerektiren durumlarda bakım personelini bilgilendirir. Elektrik panosunu açmaz, koruyucu kapakları sökmez, parametre veya güvenlik ayarlarına müdahale etmez, RFID güvenlik sensörünü baypas etmez.

Operatör, işveren tarafından makine işleyişi, HMI kullanımı ve acil durdurma prosedürleri konusunda eğitilmiş olmalıdır (**Bkz. Bölüm 2.5**). Eğitim almadan HMI üzerinden start vermek, hazırlıksız proses başlatma ve ekipman hasarı riski taşır.

**Bakım Personeli (Mekanik / Elektrik / Pnömatik)**

Bakım personeli, periyodik bakım adımlarını uygular (**Bkz. Bölüm 9**), aşınan parçaları değiştirir ve temel arıza teşhisi yapar (**Bkz. Bölüm 11**). Hata oluştuğunda makineye müdahale eden birincil roldür. Enerji izolasyonu gerektiren tüm işlerde LOTO prosedürüne uymak zorunludur; LOTO adımları **Bölüm 2.4**'te tanımlanır ve bu bölümde tekrarlanmaz.

Bakım personeli, ilgili teknik alanda yeterliliğe, LOTO prosedürüne hakimiyete ve uygun KKD kullanımına sahip olmalıdır (**Bkz. Bölüm 2.4, 2.6**). Elektrik işleri için ulusal mevzuata uygun yetkilendirme gereklidir. Yetkisiz elektrik müdahalesi, elektrik çarpması ve yangın riski doğurur.

**Kurulum Personeli**

Kurulum personeli, makinenin montajını, konumlandırılmasını ve tesisat bağlantılarını gerçekleştirir (**Bkz. Bölüm 5**). Devreye alma testlerini ve güvenlik fonksiyon testlerini uygular (**Bkz. Bölüm 5.4–5.5**). İlk ayar ve parametre kontrollerini yapar (**Bkz. Bölüm 6**). Alan gereksinimleri ve teknik tesisat değerleri **Bölüm 3**'te tanımlanır; kurulum sırasında bu değerler tekrarlanmaz, ilgili alt bölüme başvurulur.

Kurulum personeli, endüstriyel makine kurulum deneyimine, elektrik/pnömatik/su tesisatı bağlantı bilgisine ve forklift ile taşıma prosedürlerine hakimiyete sahip olmalıdır (**Bkz. Bölüm 4**). Hatalı kurulum, makinenin terazisiz çalışmasına, sızıntılara ve güvenlik fonksiyonlarının devreye girmemesine neden olabilir.

**Üretici Yetkili Servis Uzmanı**

PLC/HMI mühendislik menüleri, sürücü parametreleri, majör mekanik revizyonlar ve yazılım güncellemeleri yalnızca üretici tarafından yetkilendirilmiş personel tarafından yapılabilir. Yetkisiz yazılım veya parametre değişikliği, güvenlik fonksiyonlarını devre dışı bırakabilir ve tüm garanti kapsamını sona erdirir.

---

## 1.1.4 Kılavuzun muhafazası ve erişilebilirliği

Bu kılavuz makinenin operasyonel bütünlüğünün ayrılmaz parçasıdır. Makineden ayrı tutulması veya erişilemez hale getirilmesi, personelin güncel talimatlara ulaşamamasına ve yanlış müdahalelere yol açabilir.

Kılavuzun güncel dijital kopyasına makine üzerindeki bilgi etiketi (QR kod vb.) veya üretici dijital kanalları üzerinden erişin (**Bkz. Bölüm 1.3**). Operatör ve bakım personelinin çalışma alanında kılavuza kesintisiz erişimini işveren sağlasın. Basılı kopya kullanıyorsanız sayfa bütünlüğünü koruyun; yeni revizyonları fiziksel kopyaya işveren entegre etsin. Makine satıldığında, devredildiğinde veya kiralandığında kılavuz ve erişim bilgilerini yeni kullanıcıya birlikte teslim edin.

---

## 1.1.5 Amacına uygun kullanım, sorumluluk sınırlaması ve garanti iptali

Üretici, makineyi kabul görmüş mühendislik uygulamalarına ve güvenlik normlarına uygun imal etmiştir. Garanti ve yasal sorumluluk, makinenin **amaçlanan kullanım** sınırları içinde işletilmesine bağlıdır (**Bkz. Bölüm 3.2**). Amaçlanan kullanım dışında işletim; proses hatası, ekipman hasarı ve kişisel yaralanma riskini artırır.

Aşağıdaki durumlarda üretici sorumluluk kabul etmez; makine **garanti kapsamı dışında** kalır:

1. Güvenlik cihazlarını (acil stop, RFID sensör, interlock vb.) sökün, baypas edin veya devre dışı bırakmayın (**Bkz. Bölüm 2**).
2. Üretici yazılı onayı olmadan mekanik, elektrik veya yazılım değişikliği yapmayın.
3. Onaylanmamış kimyasallar veya amaç dışı malzemelerle makineyi çalıştırmayın (**Bkz. Bölüm 3.2**). Canlı organizmalar (insan, hayvan, bitki vb.) işlenemez.
4. Teknik plakada ve **Bölüm 3**'te tanımlanan limitlerin üzerinde makineyi zorlamayın.
5. Orijinal olmayan yedek parça kullanmayın (**Bkz. Bölüm 1.3.4**).

---

## 1.1.6 Fikri mülkiyet ve gizlilik

Bu kılavuz, makine şemaları, HMI/PLC arayüz dokümantasyonu ve teknik çizimler üreticinin fikri mülkiyetindedir. Bu materyaller, üreticinin tasarım bilgisini içerir; yetkisiz paylaşım rekabet avantajını zedeler ve yasal koruma altındadır.

Üreticinin yazılı izni olmadan kılavuzu kopyalamayın veya çoğaltmayın, yetkisiz üçüncü taraflarla (özellikle rakip firmalarla) paylaşmayın, tersine mühendislik amacıyla kullanmayın. İhlal durumunda üretici yasal yollara başvurma hakkını saklı tutar.
