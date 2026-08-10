<!-- ÇEVİRİ GEREKLİ → DE | kaynak: TR | bu satırı çeviri bitince silin. Başlık/görsel/tablo yapısını koruyun, yalnızca metni çevirin. -->

# 3.1. Makine Tanımı ve Sistematik Yapı

LYM serisi; endüstriyel parça yıkama, yağ alma ve yüzey hazırlama operasyonları için yüksek mühendislik standartlarında tasarlanmış, üstten yüklemeli kabin tipi bir endüstriyel yıkama makinesidir. Ağır sanayi koşullarında kesintisiz çalışabilmesi amacıyla makinenin ana konstrüksiyonu, ayarlanabilir mafsallı ayaklar yerine doğrudan zemine basan, titreşim sönümleme kapasitesi yüksek sabit çelik ayaklar üzerine inşa edilmiştir. Paslanmaz çelik kabin içerisindeki tüm kaynak dikişleri, korozyon direncini ve akışkan dinamiğini maksimize etmek amacıyla taşlama gibi manuel mekanik aşındırıcılar yerine homojen elektropolisaj işlemi ile temizlenmiştir. Bu yapı, partikül tutulumunu en aza indirerek kabin içi hijyeni ve uzun ömürlü kullanımı garanti eder.

## 3.1.1. Hidrolik Sistem ve Püskürtme Dinamikleri
Makinenin temel temizleme gücü, kendi ekseni etrafında dönen bir parça sepeti ile yüksek debili basınçlı sıcak su püskürtme sisteminin eşzamanlı çalışmasına dayanır. Sistemdeki hidrolik sirkülasyon, ağır hizmet tipi endüstriyel santrifüj pompalar ve bu pompalara entegre edilmiş nozul dizilimli püskürtme kolları aracılığıyla sağlanır. 

Kapasite ihtiyaçları ve hücre hacimlerine göre hidrolik güç ve püskürtme kolu konfigürasyonları şu şekilde tasarlanmıştır:

* **LYM 950:** 1,5 kW gücündeki tek pompa, basınçlı suyu hücre içerisindeki tek bir püskürtme koluna ileterek yıkama yapar.

![Nozul Seçeneği](../assets/lym/3/3-1-1-1-nozzle.png)

* **LYM 1150 ve LYM 1350:** Daha geniş yıkama alanını desteklemek için 2,2 kW gücünde tek pompa kullanılır. Bu tek pompa, suyu hücre içindeki 2 ayrı püskürtme koluna aynı anda dağıtır. Her iki kolda da tam kapsamlı yüzey taraması yapan nozul dizilimleri mevcuttur.
* **LYM 1500:** Serinin en büyük hacimli modelinde hidrolik kayıpları önlemek ve debiyi maksimize etmek için 2 adet 2,2 kW gücünde bağımsız pompa görev yapar. Hücre içerisinde 2 adet püskürtme kolu bulunur ve her bir kol, doğrudan kendi bağımsız pompasından beslenerek parçalara maksimum basınçla su ulaştırır.

![Nozul Seçeneği](../assets/lym/3/3-1-1-2-nozzle.jpeg)

Püskürtme kollarındaki nozul mimarisi, standart konfigürasyonda ağır yağları, talaşları ve inatçı kirleri yüksek mekanik darbe etkisiyle (impact force) yüzeyden kazıyarak sökmek üzere tasarlanmış, doğrudan yüzeye nüfuz eden **dik atan delik** yapısına sahiptir. İşlenecek parçaların geometrik hassasiyetine, kör delik yoğunluğuna ve yüzey genişliğine bağlı olarak; sistem opsiyonel donanım olarak **açılı geniş ağız** yapısına sahip yassı püskürtme (flat spray) nozulları ile de konfigüre edilebilmektedir. Bu opsiyon, suyun kinetik enerjisini daha geniş bir alana homojen bir perde şeklinde dağıtarak karmaşık yüzeylerde hassas ve bütüncül bir tarama sağlar.

## 3.1.2. Termal Yönetim ve Tahrik Sistemi
Yıkama prosesinin bel kemiği olan su sıcaklığı, makine gövdesine entegre edilmiş ve model bazında hacmi optimize edilmiş dahili su tankı üzerinden yönetilir. Tank içerisindeki su, endüstriyel tip 8,25 kW (380V) gücündeki elektrikli ısıtıcılar (rezistanslar) ile hedeflenen proses sıcaklığına hızla ulaştırılır. Termal kapasitenin yüksek tutulması ve ısı kayıplarının tolere edilmesi gereken 1500 modelinde ise toplam 16,5 kW ısıtma gücü sağlayan çift rezistans sistemi standart olarak mevcuttur. 

Yıkanacak parçaların yerleştirildiği sepetin dönüş hareketi, yüksek torklu, redüktörlü tahrik mekanizması (dişli motor) vasıtasıyla sağlanır. 950 modelinde 0,18 kW redüktör ile tahrik sağlanan sepet, daha geniş çapa ve statik yük kapasitesine sahip 1150, 1350 ve 1500 modellerinde 0,37 kW gücündeki redüktörlerle sürekli, sarsıntısız ve stabil bir devirde döndürülerek püskürtme konilerinin her parçaya eşit temas etmesi sağlanır.

## 3.1.3. İş Sağlığı, Güvenliği (İSG) ve Kontrol Otomasyonu
Ergonomik kullanım göz önünde bulundurularak, ağır endüstriyel üst kapak yüksek basınçlı gazlı amortisörler ile desteklenmiş olup minimum operatör gücü ile açılıp kapanabilmektedir. Kapak ebatlarına ve statik ağırlığına göre kalibre edilen amortisör kapasiteleri; **LYM 950** modelinde 2 adet 175 N, **LYM 1150** modelinde 2 adet 350 N, **LYM 1350** modelinde 2 adet 1000 N ve serinin en büyük kapağına sahip olan **LYM 1500** modelinde ise 2 adet 1400 N olarak ölçeklendirilmiştir. 

Operasyon yönetimi, standart olarak Schneider marka şalt malzemeleri ve otomasyon bileşenleri gibi endüstri standartlarını belirleyen donanımların kullanıldığı bir kontrol panosu üzerinden gerçekleştirilir.
