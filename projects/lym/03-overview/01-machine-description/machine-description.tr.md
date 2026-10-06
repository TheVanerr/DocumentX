# 3.1 Makine tanımı ve çalışma prensibi

LYM serisi, endüstriyel parça yüzeylerinde bulunan yağ, gres, talaş, karbon kalıntısı ve benzeri işletme kirlerinin giderilmesi amacıyla tasarlanmış, üstten yüklemeli ve döner sepetli bir parça yıkama makinesidir. Makine; talaşlı imalat, döküm, presleme ve bakım-onarım süreçlerinden gelen parçaların kaplama, boyama, kaynak veya montaj gibi bir sonraki işleme hazırlanmasında kullanılır.

Temizleme işlemi; ısıtılmış proses suyunun, kendi ekseni etrafında dönen sepet içindeki parçalara püskürtme kolları üzerindeki nozullar aracılığıyla basınçlı olarak uygulanmasıyla gerçekleştirilir. Isının çözücü etkisi, proses kimyasalının kir bağlarını zayıflatıcı etkisi ve püskürtülen suyun mekanik çarpma etkisi birlikte çalışarak kirlerin parça yüzeyinden ayrılmasını sağlar. Sepetin dönmesi, parçanın tüm yüzeylerinin püskürtme alanından sırayla geçmesini ve yıkama sonucunun parça konumundan bağımsız olarak tutarlı olmasını sağlar.

> **[GÖRSEL EKSİK: LYM makinesi genel görünüş — ana bileşenler numaralı — `assets/3.1/`]**

## 3.1.1 Ana bileşenler

Tüm LYM modelleri aşağıdaki ana bileşenlerden oluşur. Bileşenlerin teknik değerleri **Bölüm 3.3**'te, kumanda elemanları **Bölüm 3.4**'te verilmiştir.

| Bileşen | İşlev |
| :--- | :--- |
| **Yıkama hücresi** | Döner sepetin, püskürtme kollarının ve nozulların bulunduğu, üst kapakla kapatılan paslanmaz çelik kabin. Yıkama işlemi bu kapalı hacim içinde gerçekleştirilir. |
| **Üst kapak** | Yıkama hücresine parça yüklenmesini ve boşaltılmasını sağlar. Kapak, iki adet gazlı amortisör ile desteklenir; amortisörler kapağın açılması için gereken kuvveti azaltır ve kapağı açık konumda tutar. |
| **Döner yıkama sepeti** | Yıkanacak parçaları taşıyan ve yıkama süresince sepet redüktörü tarafından döndürülen yük taşıyıcı. Modele göre galvaniz veya paslanmaz çelik olarak tedarik edilir. |
| **Sepet redüktörü** | Sepeti sabit devirde döndüren elektrik motorlu dişli kutusu. Aşırı yük durumunda termik röle ile korunur. |
| **Yıkama pompası** | Tanktaki proses suyunu emerek püskürtme kollarına basınçlı olarak ileten santrifüj pompa. LYM 1500 modelinde iki adet bağımsız pompa bulunur. |
| **Püskürtme kolları ve nozullar** | Basınçlı proses suyunu parça yüzeyine yönlendiren dağıtım elemanları. |
| **Yıkama tankı ve ısıtıcı** | Proses suyunun depolandığı ve elektrikli ısıtıcı (rezistans) ile ayarlanan sıcaklığa getirildiği tank. |
| **Filtreler** | Tank ön filtresi ve pompa emiş filtresi, kaba partiküllerin pompaya ve nozullara ulaşmasını önler. |
| **Seviye bekçisi** | Tanktaki su seviyesini izler; seviye güvenli sınırın altına düştüğünde ısıtıcıyı ve pompayı devre dışı bırakır. |
| **Kapak kapalı switchi** | Üst kapağın kapalı olduğunu algılar; kapak kapalı değilse yıkama çevrimi başlatılamaz. |
| **Elektrik ve kumanda panosu** | Ana şalteri, koruma elemanlarını, zamanlayıcıyı, termostatı, kumanda butonlarını ve arıza lambalarını barındırır. Makine, PLC veya HMI içermeyen röle tabanlı bir kumanda sistemiyle çalışır. |

## 3.1.2 Çalışma prensibi ve proses akışı

Makine tek bir çalışma moduna sahiptir: zamanlayıcı kontrollü yıkama çevrimi. Standart konfigürasyonda proses yalnızca yıkama adımından oluşur; kurutma fanı opsiyonu bulunan makinelerde yıkamanın ardından kurutma adımı uygulanabilir. Çevrim süresi, zamanlayıcı üzerinden 0–100 dakika aralığında ayarlanır.

Bir yıkama çevrimi genel olarak aşağıdaki sırayla gerçekleşir. İşletme talimatları ve ayrıntılı adımlar **Bölüm 7**'de verilmiştir.

1. Tanktaki proses suyu, termostatta ayarlanan sıcaklığa kadar ısıtılır. Isıtma süresi, başlangıç su sıcaklığına bağlı olarak yaklaşık 1 saattir. Su sıcaklığı en fazla 70 °C'ye ayarlanabilir.
2. Yıkanacak parçalar sepete yerleştirilir ve üst kapak kapatılır.
3. Zamanlayıcıda yıkama süresi ayarlanır ve yıkama çevrimi başlatılır.
4. Çevrim süresince sepet döner; yıkama pompası proses suyunu nozullar üzerinden parçalara püskürtür. Püskürtülen su yıkama hücresinden tanka geri döner ve filtrelerden geçerek yeniden pompaya emilir.
5. Ayarlanan süre dolduğunda pompa ve sepet redüktörü otomatik olarak durur.
6. Sepet tamamen durduktan sonra kapak açılır ve parçalar boşaltılır.

Proses suyu kapalı devrede dolaştığından, parçalardan ayrılan kir ve yağ tankta birikir. Proses suyunun temizliği ve filtrelerin düzenli bakımı yıkama kalitesini doğrudan etkiler (**Bkz. Bölüm 10**).

## 3.1.3 Model varyantları

LYM serisi iki ana gövde ailesinde dört modelden oluşur. Modeller temel olarak yıkama hücresi boyutu, pompa sayısı, ısıtma gücü ve sepet tahrik gücü bakımından farklılık gösterir.

| Model | Stok kodu | Gövde ailesi | Yıkama pompası | Isıtıcı | Nozul adedi |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **LYM 950** | 02 01 22 | LYM 1 | 1 × 1,5 kW | 1 × 8,25 kW | 28 |
| **LYM 1150** | 02 01 21 | LYM 1 | 1 × 2,2 kW | 1 × 8,25 kW | 45 |
| **LYM 1350** | 02 01 23 | LYM 2 | 1 × 2,2 kW | 1 × 8,25 kW | 51 |
| **LYM 1500** | 02 01 14 | LYM 2 | 2 × 2,2 kW | 2 × 8,25 kW | 53 |

Nozullar, standart konfigürasyonda püskürtmeyi doğrudan parça yüzeyine dik olarak yönlendiren 0° paslanmaz nozullardır. Bu yapı, yağ, talaş ve yapışkan kirlerin yüksek çarpma etkisiyle sökülmesine uygundur. Geniş yüzeyli veya karmaşık geometrili parçalar için alternatif olarak yassı püskürtme nozulları tedarik edilebilir; bu nozullar suyu daha geniş bir alana dağıtarak yüzeyin homojen biçimde taranmasını sağlar.

## 3.1.4 Opsiyonel donanımlar

Aşağıdaki donanımlar sipariş aşamasında talep edilmesi hâlinde makineye eklenir. Makinenizde bulunan opsiyonlar sipariş ve teslim dokümanlarında belirtilmiştir (**Bkz. Bölüm 13.1**). Opsiyonların kurulu güce etkisi **Bölüm 3.3.4**'te verilmiştir.

| Opsiyon | İşlev |
| :--- | :--- |
| **Yağ sıyırıcı** | Tank yüzeyinde biriken yüzer yağı döner disk ile mekanik olarak tanktan uzaklaştırır; proses suyunun kullanım ömrünü uzatır. |
| **Hassas filtre** | Pompa çıkış hattına yerleştirilen 200 mikron torba filtre ile ince partikülleri tutar. |
| **İnterlock kilit** | Üst kapağı yıkama çevrimi süresince kilitleyerek çalışma sırasında açılmasını engeller. |
| **Buhar tahliye fanı** | Yıkama hücresinde oluşan buharı ve sıcak havayı hücre dışına tahliye eder; kapak açıldığında operatöre yönelen buhar miktarını azaltır. |
| **Buhar tahliye fanı (yoğuşturmalı tip)** | Tahliye edilen buharı yoğuşturarak ortam havasına nem ve yağ buharı yayılmasını azaltır. |
| **Kurutma fanı (fan tipi)** | Yıkama sonrasında parçalar üzerindeki suyun hava akışı ile uzaklaştırılmasını sağlar. |
| **Kurutma fanı (blower tipi)** | Yüksek basınçlı hava akışı ile kör delik ve girintilerde kalan suyun daha etkin biçimde uzaklaştırılmasını sağlar. |
| **Drenaj pompası** | Tankın boşaltılmasında proses suyunu tahliye hattına pompalar. |
