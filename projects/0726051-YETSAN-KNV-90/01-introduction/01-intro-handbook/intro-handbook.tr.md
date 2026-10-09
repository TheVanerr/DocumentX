# 1.1 Kılavuz hakkında

## 1.1.1 Kılavuzun amacı, kapsamı ve uygulama alanı

Bu kullanım kılavuzu, **KNV 90 7500 2B** makinesinin ayrılmaz ve yasal olarak bağlayıcı bir parçasıdır. Kılavuz; makinenin güvenli, verimli ve amacına uygun kullanımını sağlamak üzere EN ISO 12100 (makine güvenliği — risk değerlendirmesi) ve EN ISO 20607 (kullanım kılavuzu — genel yazım ilkeleri) ilkelerine uygun hazırlanmıştır. Bu standartlar, makine güvenliği ve kılavuz içeriği konusunda uluslararası kabul görmüş asgari gereksinimleri tanımlar; bu nedenle kılavuzdaki talimatlar yalnızca öneri değil, işletme sorumluluğunun parçasıdır.

**Kapsam:** **KNV 90 7500 2B** (model kodu **KNV-90**, seri no **0726051**, müşteri **YETSAN**) ve bu projeye teslim edilen standart donanım. Proje dışı opsiyon bulunmamaktadır; ileride opsiyon eklenirse kılavuz güncellenir.

**Hedef okuyucu grupları:** Operatör, bakım personeli, kurulum personeli.

Makine; redüktör ile tahrik edilen zincirli konveyör üzerinde endüstriyel parçaların yıkama ve durulama banyolarından geçirilip kurutma ünitesinde kurutulduğu, konveyörlü ve iki banyolu bir parça yıkama hattıdır. Bu projede **PLC ve HMI yoktur**; tüm fonksiyonlar operatör panelindeki aç/kapa anahtarları ile yönetilir ve parça yükleme/boşaltma **elle** yapılır. Kılavuz bu nedenle ekran menüsü, alarm listesi veya reçete yönetimi içermez; bunların yerine pano lambaları, termostat ayarları ve anahtar mantığı tanımlanır (**Bkz. Bölüm 3.4**).

Kılavuz aşağıdaki yaşam döngüsü aşamalarını kapsar. Her aşama için ayrıntılı talimatlar ilgili bölümde verilir; bu liste yalnızca kapsam haritasıdır:

1. Taşıma, elleçleme ve depolama (**Bkz. Bölüm 4**)
2. Montaj, kurulum, devreye alma ve ilk ayarlar (**Bkz. Bölüm 5–6**)
3. İşletim ve kapasite (**Bkz. Bölüm 7–8**)
4. Periyodik bakım ve yağlama (**Bkz. Bölüm 9**)
5. Temizlik ve dezenfeksiyon (**Bkz. Bölüm 10**)
6. Arıza teşhisi ve giderme (**Bkz. Bölüm 11**)
7. Demontaj, devre dışı bırakma ve bertaraf (**Bkz. Bölüm 12**)

Bu doküman temel mühendislik, mekanik veya elektrik eğitimi vermez. Personelin, görev tanımına uygun mesleki eğitime ve temel endüstriyel güvenlik kültürüne sahip olduğu varsayılır. Eğitim eksikliği, prosedürlerin yanlış uygulanmasına, güvenlik fonksiyonlarının devre dışı kalmasına ve makine hasarına yol açabilir.

---

## 1.1.2 Kılavuzun geçerliliği, güncelliği ve doküman kontrolü

Bu kılavuzdaki metinler, teknik veriler, fotoğraflar ve şemalar; makinenin fabrikadan sevk edildiği tarih itibarıyla teslim edilen **As-Built** (üretildiği hâliyle) konfigürasyonu yansıtır. Kılavuz ile makine arasında uyumsuzluk fark ederseniz, fiziksel makine durumunu ve makine kimlik etiketini esas alın; üretici servisi ile doğrulama yapın (**Bkz. Bölüm 1.3**).

| Alan | Değer |
| :--- | :--- |
| **Makine** | KNV 90 7500 2B |
| **Model kodu** | KNV-90 |
| **Seri numarası** | 0726051 |
| **Üretim yılı** | 2026 |
| **İmalat / sevk tarihi** | [EKSİK] |
| **Kılavuz revizyonu** | 00 |

Üretici, AR-GE ve ürün iyileştirme kapsamında makine tasarımında ve dokümantasyonda önceden haber vermeksizin değişiklik yapma hakkını saklı tutar. Daha önce teslim edilmiş makineler için geriye dönük revizyon yükümlülüğü doğmaz. Bu kural, seri üretimde sürekli iyileştirmeyi mümkün kılar; ancak mevcut makinenizde yapılan değişiklikler yalnızca bu seri numarası için geçerlidir. Revizyon kontrolü, bir arıza veya kaza incelemesinde hangi talimatın geçerli olduğunun izlenebilmesi için zorunludur; bu nedenle eski revizyon kopyaları kullanımdan kaldırılmalıdır.

Operatör paneli etiketleri **İngilizcedir** (TANK 1 HEATER, CONVEYOR, EMERGENCY STOP vb.); etiket anlamları **Bölüm 3.4**'te Türkçe karşılıklarıyla tanımlanır.

---

## 1.1.3 Hedef kitle, personel kalifikasyonu ve sorumluluk dağılımı

Makine; 380 V elektrik, +70 °C'ye kadar ısıtılan proses sıvısı, 6 bar basınçlı hava, hareketli konveyör ve döner fan/pompa mekanizmaları içerir. Bu enerji ve proses kaynakları, yanlış müdahalede ciddi yaralanma veya ekipman hasarına yol açabilir. Personel görevlendirmesinden, eğitimden ve yetki sınırlarından işveren (makineyi işleten kurum) sorumludur. Aşağıdaki roller, kılavuzda tanımlanan yetki ve yasakları netleştirir; rol dışı müdahale garanti kapsamını ve iş güvenliğini olumsuz etkiler.

**Operatör**

Operatör, makinenin günlük çalıştırılmasından sorumludur: tankların elle doldurulması, operatör panelindeki fonksiyon anahtarlarının (ısıtıcı, pompa, blower, kurutma, konveyör) açılıp kapatılması, konveyör hızının potansiyometre ile ayarlanması, parçaların sol girişten konveyöre yerleştirilmesi ve sağ çıkıştan alınması (**Bkz. Bölüm 7**). Operatör, acil durumda en yakın acil stop butonuna basar ve tehlike giderildikten sonra **RESET** ile makineyi hazır duruma alır (**Bkz. Bölüm 2.5**).

Operatör; elektrik panosunu açmaz, bakım kapaklarını makine çalışırken kaldırmaz, kapak emniyet switch'lerini veya acil stop devresini baypas etmez, termostat dışındaki parametreleri (inverter, emniyet rölesi) değiştirmez. Operatör, işveren tarafından makine işleyişi, güvenli parça yükleme, anahtar mantığı ve acil durdurma prosedürleri konusunda eğitilmiş olmalıdır. Eğitim almadan anahtar açmak; tankta su yokken ısıtıcı çalıştırma girişimi, konveyörde sıkışma ve yanık riski doğurur.

**Bakım personeli (mekanik / elektrik / pnömatik)**

Bakım personeli, periyodik bakım adımlarını uygular (**Bkz. Bölüm 9**), filtreleri temizler ve değiştirir (**Bkz. Bölüm 10**), aşınan parçaları orijinal yedek parça ile yeniler ve temel arıza teşhisi yapar (**Bkz. Bölüm 11**). Arıza oluştuğunda makineye müdahale eden birincil roldür. Enerji izolasyonu gerektiren tüm işlerde LOTO prosedürüne uymak zorunludur; LOTO adımları **Bölüm 2.4**'te tanımlanır ve bu bölümde tekrarlanmaz.

Bakım personeli, ilgili teknik alanda yeterliliğe, LOTO prosedürüne hakimiyete ve uygun KKD kullanımına sahip olmalıdır (**Bkz. Bölüm 2.4, 2.6**). Elektrik panosu içi işler (MKŞ reset, kaçak akım rölesi, kontaktör, rezistans ölçümü) için ulusal mevzuata uygun yetkili elektrikçi gereklidir. Yetkisiz elektrik müdahalesi, elektrik çarpması ve yangın riski doğurur.

**Kurulum personeli**

Kurulum personeli, makinenin forklift ile yerleştirilmesini, teraziye alınmasını ve elektrik, basınçlı hava ve su tesisat bağlantılarını gerçekleştirir (**Bkz. Bölüm 5**). Devreye alma testlerini ve güvenlik fonksiyon testlerini uygular (**Bkz. Bölüm 5.4–5.5**). İlk ayar ve kontrolleri yapar (**Bkz. Bölüm 6**). Alan gereksinimleri ve teknik tesisat değerleri **Bölüm 3**'te tanımlanır; kurulum sırasında bu değerler tekrarlanmaz, ilgili alt bölüme başvurulur.

Kurulum personeli, endüstriyel makine kurulum deneyimine, elektrik/pnömatik/su tesisatı bağlantı bilgisine ve forklift ile taşıma prosedürlerine hakimiyete sahip olmalıdır (**Bkz. Bölüm 4**). Hatalı kurulum; makinenin terazisiz çalışmasına, tank sızıntılarına, ters faz nedeniyle pompa ve fanların ters dönmesine ve güvenlik fonksiyonlarının devreye girmemesine neden olabilir.

**Üretici yetkili servis uzmanı**

Konveyör inverteri (Delta VFD004EL21W-1) parametreleri, emniyet rölesi (Omron G9SB) devresi, majör mekanik revizyonlar (pompa, redüktör, kurutma komplesi değişimi) ve elektrik panosu yapısal değişiklikleri yalnızca üretici tarafından yetkilendirilmiş personel tarafından yapılabilir. Yetkisiz parametre veya devre değişikliği, güvenlik fonksiyonlarını devre dışı bırakabilir ve tüm garanti kapsamını sona erdirir.

---

## 1.1.4 Kılavuzun muhafazası ve erişilebilirliği

Bu kılavuz makinenin operasyonel bütünlüğünün ayrılmaz parçasıdır. Makineden ayrı tutulması veya erişilemez hâle getirilmesi, personelin güncel talimatlara ulaşamamasına ve yanlış müdahalelere yol açabilir.

Kılavuzun güncel dijital kopyasına makine üzerindeki bilgi etiketi (QR kod vb.) veya üretici dijital kanalları üzerinden erişin (**Bkz. Bölüm 1.3**).

Operatör ve bakım personelinin çalışma alanında kılavuza kesintisiz erişim sağlamak, işverenin yükümlülüğüdür. Basılı kopya kullanılan tesislerde sayfa bütünlüğünün korunması, kopyanın yağ, kimyasal ve nemden korunması ve yeni revizyonların fiziksel kopyaya entegre edilmesi işverenin sorumluluğundadır. Makinenin satılması, devredilmesi veya kiralanması hâlinde kılavuzun ve erişim bilgilerinin yeni kullanıcıya teslim edilmesi de işverenin yükümlülüğüdür.

---

## 1.1.5 Amacına uygun kullanım, sorumluluk sınırlaması ve garanti iptali

Üretici, makineyi kabul görmüş mühendislik uygulamalarına ve güvenlik normlarına uygun imal etmiştir. Garanti ve yasal sorumluluk, makinenin **amaçlanan kullanım** sınırları içinde işletilmesine bağlıdır (**Bkz. Bölüm 3.2**). Amaçlanan kullanım dışında işletim; proses hatası, ekipman hasarı ve kişisel yaralanma riskini artırır.

Aşağıdaki durumlarda üretici sorumluluk kabul etmez; makine **garanti kapsamı dışında** kalır:

1. **Güvenlik cihazlarının devre dışı bırakılması:** Acil stop butonlarının, bakım kapağı manyetik switch'lerinin, emniyet rölelerinin veya tank seviye interlock'unun sökülmesi, köprülenmesi, mıknatıs ile kandırılması veya devre dışı bırakılması (**Bkz. Bölüm 2**). Bu müdahale, kapak açıkken pompa ve konveyörün çalışmaya devam etmesine ve ezilme/sıcak sıvı yaralanmasına yol açar.
2. **Onaysız değişiklik:** Üretici yazılı onayı olmadan yapılan mekanik, elektrik (pano, inverter parametresi, röle devresi) veya tesisat değişiklikleri. Bu değişiklikler koruma elemanlarının (MKŞ, kaçak akım, sigorta) seçim değerlerini geçersiz kılabilir.
3. **Amaç dışı malzeme ve kimyasal:** Onaylanmamış, asit bazlı veya paslanmaz çeliğe zarar veren temizlik maddeleri ile makinenin çalıştırılması (**Bkz. Bölüm 3.2.4, 10.1.7**); canlı organizmaların, gıda ve gıda ile temas eden yüzeylerin, medikal aletlerin işlenmesi (**Bkz. Bölüm 3.2.3**).
4. **Limit aşımı:** Teknik plakada ve **Bölüm 3.3**'te tanımlanan elektrik, basınç, sıcaklık ve ortam limitlerinin aşılması; konveyör hızının 20–60 Hz aralığı dışına çıkarılması; tankta su yokken ısıtıcıların zorlanması.
5. **Orijinal olmayan yedek parça kullanımı** (**Bkz. Bölüm 1.3.4**); özellikle nozul, rezistans, seviye sensörü, emniyet switch'i ve emniyet rölesi muadilleri.
6. **Bakım ihmali:** **Bölüm 9** takvimine ve **Bölüm 10** temizlik periyotlarına uyulmaması sonucu oluşan filtre tıkanması, pompa kuru çalışması, rezistans arızası ve korozyon.

---

## 1.1.6 Fikri mülkiyet ve gizlilik

Bu kılavuz, makine fotoğrafları, 3D görünüşler, elektrik şeması ve teknik çizimler üreticinin fikri mülkiyetindedir. Bu materyaller, üreticinin tasarım bilgisini içerir; yetkisiz paylaşım rekabet avantajını zedeler ve yasal koruma altındadır.

Üreticinin yazılı izni olmadan kılavuzun kopyalanması, çoğaltılması, yetkisiz üçüncü taraflarla (özellikle rakip firmalarla) paylaşılması veya tersine mühendislik amacıyla kullanılması fikri mülkiyet ihlali sayılır. İhlal durumunda üretici yasal yollara başvurma hakkını saklı tutar. Kılavuzun işletme içinde operatör ve bakım personeline çoğaltılması bu yasağın dışındadır.
