# 1.1 Kılavuz Hakkında (About This Manual)

## 1.1.1 Kılavuzun Amacı, Kapsamı ve Uygulama Alanı
Bu kullanım kılavuzu, endüstriyel yıkama makinesinin ayrılmaz, temel ve yasal olarak bağlayıcı bir bileşenidir. Makinenin güvenli, verimli, çevreye duyarlı ve tasarım amacına en uygun şekilde işletilmesini sağlamak üzere, yürürlükteki Makine Emniyeti Yönetmeliği ve ilgili uluslararası standartlar (EN ISO 12100, EN ISO 20607) gözetilerek titizlikle hazırlanmıştır. 

Dokümanın kapsamı, makinenin tüm yaşam döngüsünü (lifecycle) kapsayacak şekilde yapılandırılmıştır. Bu yaşam döngüsü aşağıdaki aşamaları içerir:
* **Taşıma ve Konumlandırma:** Makinenin fabrikadan sevkiyatı, saha içi taşınması, sapanlama/kaldırma noktalarının kullanımı ve zemine sabitlenmesi.
* **Kurulum ve Devreye Alma:** Elektrik, basınçlı hava, su giriş/çıkış ve havalandırma (egzoz) gibi çevresel altyapı bağlantılarının yapılması ve ilk test çalıştırmalarının gerçekleştirilmesi.
* **İşletim:** Günlük üretim rutinleri, yıkama reçetelerinin oluşturulması, makinenin yüklenmesi, çalıştırılması ve boşaltılması.
* **Bakım ve Temizlik:** Günlük, haftalık, aylık ve yıllık periyodik bakım prosedürleri, yağlama noktaları, filtre temizlikleri ve aşınan parçaların kontrolü.
* **Arıza Tespiti ve Giderme:** Olası alarm durumlarında yapılacak ilk müdahaleler ve HMI ekranında beliren hata kodlarının çözümlenmesi.
* **Hizmetten Çıkarma ve Bertaraf:** Makinenin ekonomik ömrünü tamamladığında güvenli bir şekilde enerjiden arındırılması, demonte edilmesi ve geri dönüşüm prosedürlerine uygun bertarafı.

Bu doküman, temel mühendislik, genel mekanik veya temel elektrik eğitimi vermek amacı taşımaz. Makine üzerinde çalışacak tüm personelin, üstlendikleri görev tanımına uygun mesleki ve teknik eğitime halihazırda sahip olduğu, temel endüstriyel güvenlik kültürünü benimsediği varsayılmaktadır.

---

## 1.1.2 Kılavuzun Geçerliliği, Güncelliği ve Doküman Kontrolü
Bu kılavuzda yer alan metinler, teknik veriler, teknik resimler, hidrolik/pnömatik şemalar ve elektrik devre diyagramları, makinenin üretildiği ve son kalite kontrol (QC) testlerinden geçerek fabrikadan sevk edildiği tarihteki fiziksel donanım ve yazılım konfigürasyonunu ("As-Built" durumunu) yansıtmaktadır. 

* **Versiyon Kontrolü:** Kılavuzun her bir sayfası veya kapağı, benzersiz bir doküman revizyon numarası ve yayın tarihi taşır. Makineye özel konfigürasyonlar (özel ölçüler, opsiyonel donanımlar) ekler (Appendix) bölümünde ayrıca belirtilmiştir.
* **Değişiklik Hakkı:** Üretici firma, AR-GE faaliyetleri ve sürekli ürün iyileştirme politikası doğrultusunda, daha önce teslim edilmiş makineler üzerinde geriye dönük herhangi bir revizyon yapma yükümlülüğü olmaksızın, makinenin mekanik/elektronik tasarımında ve bu dokümantasyonun içeriğinde önceden haber vermeksizin değişiklik yapma hakkını tamamen saklı tutar. 

---

## 1.1.3 Hedef Kitle, Personel Kalifikasyonu ve Sorumluluk Dağılımı
Endüstriyel yıkama makineleri; yüksek voltaj, sıcak su, basınçlı sistemler, kimyasal solüsyonlar ve hareketli mekanik parçalar içerdiğinden, makineye müdahale edecek personelin yetkinliği kritik bir iş güvenliği unsurudur. İşveren (makineyi işleten kurum), personelin aşağıdaki yetki matrisine uygun olarak görevlendirilmesinden tek başına sorumludur:

1. **Operatör:** * **Yetkisi:** Makinenin günlük çalıştırılması, parçaların yüklenmesi ve boşaltılması, standart HMI arayüzü üzerinden mevcut yıkama reçetelerinin seçilmesi ve başlatılması/durdurulması.
   * **Gereksinim:** İşveren tarafından makine işleyişi ve acil durdurma prosedürleri hakkında eğitilmiş olmalıdır. Operatörün makine muhafazalarını (kapaklarını) alet kullanarak sökmesi, elektrik panosunu açması veya parametre ayarlarına müdahale etmesi kesinlikle yasaktır.

2. **Bakım Personeli (Mekanik / Pnömatik / Elektrik):**
   * **Yetkisi:** Kılavuzda belirtilen periyodik bakım adımlarının uygulanması, aşınan parçaların (filtreler, contalar vb.) değiştirilmesi, sensör ayarlamaları ve temel arıza tespiti. 
   * **Gereksinim:** İlgili mühendislik veya teknik meslek alanlarında diploma/sertifika sahibi olmalıdır. Tehlikeli enerjinin kontrolü (Ekipman Kilitleme ve Etiketleme - LOTO) prosedürlerine eksiksiz hakim olmalı ve bakım sırasında uygun Kişisel Koruyucu Donanım (KKD) kullanmalıdır. Elektrik personeli, yürürlükteki ulusal elektrik iç tesisleri yönetmeliklerine göre yetkilendirilmiş olmalıdır.

3. **Üretici Yetkili Servis Uzmanı:**
   * **Yetkisi:** PLC yazılım mimarisine, sürücü parametrelerine, HMI gizli (şifreli) mühendislik menülerine erişim, ana motor/pompa değişimleri ve majör konstrüksiyon revizyonları.
   * **Gereksinim:** Yalnızca üretici firma tarafından özel olarak eğitilmiş, sertifikalandırılmış ve güncel yetki belgesine sahip personeldir.

---

## 1.1.4 Kılavuzun Fiziksel Muhafazası ve Erişilebilirliği
Bu doküman, makinenin operasyonel bütünlüğünün bir parçası olarak değerlendirilmelidir. 
* Kılavuzun orijinal basılı nüshası veya endüstriyel ortama dayanıklı kaplanmış bir kopyası, her an erişilebilir olacak şekilde makinenin hemen yakınında, özel bir doküman cebinde veya kontrol panosu civarında muhafaza edilmelidir.
* Doküman; endüstriyel yağlardan, kimyasal sıçramalarından, aşırı nemden ve doğrudan yüksek ısıdan korunmalıdır. 
* Sayfaların eksilmesi, yırtılması veya uyarı işaretlerinin okunamaz hale gelmesi durumunda, iş sağlığı ve güvenliği risklerini önlemek adına işveren, derhal üretici firmadan yeni bir revizyon talep etmelidir.
* Makinenin üçüncü şahıslara satılması, kiralanması veya başka bir üretim tesisine transfer edilmesi durumunda, bu kullanım kılavuzu (ve varsa tüm ekleri) makineyle birlikte devredilmek zorundadır.

---

## 1.1.5 Amacına Uygun Kullanım, Sorumluluk Sınırlandırması ve Garanti İptali
Üretici firma, makinenin tasarımını ve imalatını kabul görmüş iyi mühendislik uygulamalarına ve katı güvenlik normlarına göre gerçekleştirmiştir. Makinenin garantisi ve üreticinin yasal sorumluluğu, sistemin yalnızca tasarlandığı "Amacına Uygun Kullanım" (Intended Use) sınırları içerisinde işletilmesi koşuluna bağlıdır.

Aşağıda detaylandırılan (ancak bunlarla sınırlı olmayan) kullanım hataları, yetkisiz müdahaleler ve işletme kusurlarından kaynaklanabilecek doğrudan veya dolaylı personel yaralanmaları, can kayıpları, tesis hasarları, ürün firesi, çevresel kirlilik veya ticari kâr kayıpları durumunda üretici firma hiçbir hukuki, cezai veya mali sorumluluk kabul etmez; bu durumlarda makine **derhal garanti kapsamı dışında** kalır:

* **Kapasite ve Amacı Dışında Kullanım:** Makinenin, teknik plakada ve kılavuzda belirtilen maksimum yük, basınç, sıcaklık ve döngü kapasitesi sınırlarının üzerinde zorlanarak çalıştırılması. Makinenin tasarlandığı spesifik endüstriyel parçalar haricinde (örneğin patlayıcı, yanıcı veya aşırı reaktif materyallerin) yıkanması.
* **Güvenlik İhlalleri:** Acil durdurma butonları, kapı emniyet şalterleri (interlock), sızdırmazlık switchleri, güvenlik röleleri, ışık bariyerleri veya basınç/sıcaklık limit sensörleri gibi hayati iş güvenliği komponentlerinin sökülmesi, baypas edilmesi (köprülenmesi), yazılımsal olarak devre dışı bırakılması veya işlevsiz hale getirilmesi.
* **Yetkisiz Modifikasyonlar:** Üretici firmanın yazılı kaşeli onayı olmaksızın makine konstrüksiyonu, borulama sistemi, elektrik panosu veya PLC/HMI yazılım kodları üzerinde herhangi bir değişiklik yapılması.
* **Kimyasal ve Malzeme Uyumsuzluğu:** Yıkama işlemi sırasında makine donanımları veya sepetler üzerinde korozyona yol açabilecek nitelikte, üretici tarafından test edilip onaylanmamış ağır asidik, yüksek kostik (alkali) veya solvent bazlı kimyasalların kullanılması. (Özellikle makine içerisinde kullanılan sepetler ve taşıyıcı ürünler galvanizyon işlemine tabi tutulmuş olup, bu parçaların yüzey dayanımı boyalı parçalardan farklıdır; galvaniz tabakasını çözecek ajanların kullanımı tüm mekanik garantiyi geçersiz kılar).
* **Parça Değişimleri:** Standart olarak suyu ince-düz bir hat şeklinde püskürten nozulların veya opsiyonel olarak sunulan açılı yelpaze nozulların, üretici mühendislik departmanının onayı olmaksızın farklı debi (litre/dakika) ve atış açısı karakteristiğine sahip nozullar ile rastgele değiştirilmesi sonucu oluşan mekanik yorulmalar, pompa arızaları ve yıkama performansı kayıpları. Orijinal olmayan tüm yedek parça ve sarf malzeme kullanımı.
* **Altyapı ve Besleme Hataları:** Tesis kaynaklı yetersiz veya hatalı altyapı bağlantıları; standart dışı topraklama hattı, tolere edilebilir limitleri aşan şebeke voltaj dalgalanmaları (faz çökmesi/kaybı), sisteme verilen basınçlı havadaki aşırı nem/yağ partikülleri veya su girişindeki yetersiz debi/basınç nedeniyle oluşan kompanent arızaları.
* **Bakım İhmalleri:** Kılavuzda belirtilen günlük, haftalık ve aylık periyodik bakım takvimine uyulmaması, yağlama ve temizlik prosedürlerinin yetkin olmayan personelce ve yanlış ekipmanlarla yapılması.

---

## 1.1.6 Fikri ve Sınai Mülkiyet Hakları ile Gizlilik
Bu kullanım kılavuzu ve içeriğinde yer alan tüm editoryal metinler, 3D/2D teknik resimler, hidrolik/pnömatik/elektrik devre şemaları, sistem algoritmaları, akış diyagramları, tablolar ve HMI yazılım arayüzü tasarımları ulusal ve uluslararası telif hakkı yasaları (ve ilgili sınai mülkiyet mevzuatları) ile katı bir şekilde korunmaktadır. 

Bu dokümanın mülkiyeti münhasıran üretici firmaya aittir. Üretici firmanın önceden verilmiş, ıslak imzalı ve resmi yazılı izni olmaksızın;
* Bu kılavuzun tamamı veya herhangi bir bölümü fotokopi, tarama vb. yöntemlerle kopyalanamaz, çoğaltılamaz.
* Dijital formatlara çevrilerek kamuya açık ağlarda veya kurumsal intranet dışındaki veri tabanlarında saklanamaz.
* Kısmen veya tamamen başka dillere izinsiz tercüme edilemez.
* Özellikle rakip makine üreticileri, tedarikçiler veya yetkisiz üçüncü şahıslar ile paylaşılamaz.
* Kılavuz içerisindeki şemalar ve çalışma prensipleri, tersine mühendislik (reverse engineering) faaliyetleri için bir referans veya kaynak doküman olarak kullanılamaz.

Yukarıda belirtilen fikri mülkiyet haklarının ihlali durumunda, üretici firma maddi ve manevi tazminat talebiyle her türlü yasal, hukuki ve cezai işlemi başlatma hakkını peşinen saklı tutar.