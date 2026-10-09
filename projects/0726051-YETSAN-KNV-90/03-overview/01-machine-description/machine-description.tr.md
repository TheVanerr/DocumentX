# 3.1 Makine tanımı

**KNV 90 7500 2B**, endüstriyel parçaların konveyör üzerinde taşınarak yıkama, durulama, su sıyırma ve kurutma proseslerinden geçirildiği konveyörlü bir parça yıkama makinesidir. Makine; yıkama ve durulama tankları ile bunların püskürtme hücreleri, blower ve sıcak havalı kurutma ünitesi, egzoz fanı ve parça taşıma konveyöründen oluşan entegre bir hat yapısındadır. Ana işlevi, parça yüzeylerindeki proses kirlerinin ve yağ/atıkların ısıtılmış yıkama ve durulama sıvıları ile giderilmesi, ardından parçanın kurutulmuş olarak hattan çıkarılmasıdır.

Konveyör akış yönü **sol besleme / sağ boşaltma** şeklindedir. Elektrik panosu, operatör paneli ve günlük müdahale noktalarına erişim **makinenin sağ tarafındadır**. Bu projede parça giriş ve çıkışı **operatör tarafından elle** yapılır; robot entegrasyonu ve otomatik hat kontrolü yoktur. Makine gövdesi ve tanklar paslanmaz çelikten imal edilmiştir; proses tankları elektrikli rezistanslarla ısıtılır.

Aşağıdaki alt bölümler proses akışını ve her ana modülün işlevini açıklar. Sayısal teknik değerler **Bölüm 3.3**'te, kontrol elemanları **Bölüm 3.4**'te verilir.

![KNV 90 7500 2B — 3D genel görünüm (sol giriş, sağ çıkış)](../../assets/3.1/3d-izometrik.png)

---

## 3.1.1 Genel görünüm ve proses akışı

Makine hat boyunca dört proses adımı uygular. Parçalar konveyör üzerinde sol taraftan hücreye girer, proses bölgelerinden sırayla geçer ve sağ taraftan çıkar. Her adım bağımsız bir fonksiyon grubu tarafından yürütülür ve operatör panelinden ayrı ayrı açılıp kapatılabilir.

| Adım | Proses | Mekanizma | Panel anahtarı |
| :---: | :--- | :--- | :--- |
| 1 | **Yıkama** | Yıkama pompası (PE02) TANK 1'deki ısıtılmış suyu yıkama hücresindeki nozullara basar; hareket hâlindeki parça püskürtülen su ile yıkanır | TANK 1 HEATER, TANK 1 PUMP |
| 2 | **Durulama** | Durulama pompası (PE04) TANK 2'deki durulama suyunu durulama hücresi nozullarına basar; yıkama suyu kalıntıları parçadan alınır | TANK 2 HEATER, TANK 2 PUMP |
| 3 | **Su sıyırma** | Dört blower motoru (FE04–FE07) hava bıçağı borularından yüksek hızlı hava üfler; parça yüzeyindeki su sıyrılır | BLOWER 1, BLOWER 2 |
| 4 | **Kurutma** | İki kurutma fanı (FE02, FE03) 12 kW'lık ısıtıcılardan (R21, R22) geçen sıcak havayı kurutma hücresine verir; parça kurur | DRYING 1 HEATER, DRYING 1 FAN, DRYING 2 HEATER, DRYING 2 FAN |

Yıkama ve durulama hücreleri, buhar ve su sıçramasını içeride tutmak için giriş ve çıkışlarında **PVC şerit perdeler** ile kapatılmıştır. Egzoz fanı (FE01) hücrelerdeki buharı ve nemli havayı bacaya tahliye eder. Döngü süresi konveyör hızına (inverter 20–60 Hz) ve hat uzunluğuna bağlıdır; sabit bir değer tanımlanmamıştır (**Bkz. Bölüm 3.3.2**).

![Yıkama hücresi kesiti — nozul kolektörleri ve tel bant](../../assets/3.1/3d-yikama-kesit.png)

![Kurutma bölgesi kesiti — blower hava bıçağı boruları](../../assets/3.1/3d-kurutma-kesit.png)

---

## 3.1.2 Konveyör ve parça taşıma

Konveyör, parçaları proses bölgeleri arasında taşıyan **paslanmaz tel bantlı zincirli konveyördür**. Tahrik, konveyör çıkış tarafındaki **redüktör motoru (GE01, 0,25 kW)** ile sağlanır; redüktör üzerinde **tork sınırlayıcı** bulunur ve sıkışma durumunda tahrik kayarak zincir ve redüktörü korur. Motor, pano içindeki **Delta VFD004EL21W-1** inverter ile sürülür; hız operatör panelindeki **potansiyometre** ile 20–60 Hz aralığında ayarlanır (**Bkz. Bölüm 3.4.7**).

Besleme **sol**, boşaltma **sağ** yöndedir. Konveyör giriş ve çıkış bölgeleri **tel koruma kafesi** ile çevrilidir; kafes, operatörün tel bant ile sabit yapı arasına uzanmasını engeller. Operatör parçaları kafes dışından, tel bant üzerine yerleştirir ve çıkışta aynı şekilde alır (**Bkz. Bölüm 7.4**). Konveyör giriş ve çıkışında, tel bantın her iki yanında birer **acil stop** butonu bulunur (**Bkz. Bölüm 2.5**).

Konveyör rulman hatları, giriş ve çıkışta sağ ve sol olmak üzere **4 gres nipeli** ile aylık yağlanır (**Bkz. Bölüm 9.1.4**). Tel bant aşınan parçadır (**Bkz. Bölüm 13.3**).

![Konveyör girişi — tel bant, redüktör motoru ve koruma kafesi](../../assets/3.1/konveyor-giris.jpg)

![Konveyör redüktör motoru (GE01)](../../assets/3.1/konveyor-redaktor.jpg)

---

## 3.1.3 Yıkama tankı (TANK 1) ve yıkama hücresi

Yıkama bölgesi; proses suyunun depolandığı ve ısıtıldığı **TANK 1**, suyu basınçlandıran **yıkama pompası (PE02, 5,5 kW)** ve parçanın püskürtme ile yıkandığı **yıkama hücresinden** oluşur. Tank, gaz amortisörlü iki kapakla ("1" etiketli) örtülüdür; tank içinde **beş adet 8 kW rezistans** (R01–R05), **VEGASWING 51 seviye sensörü**, şamandıralı seviye bekçisi ve filtre bölmeleri bulunur.

Su akış yolu: pompa, tank içindeki **emiş filtresinden** suyu çeker, pompa çıkışındaki **hassas (torba) filtreden** geçirerek yıkama hücresindeki nozul kolektörlerine basar. Nozullardan püskürtülen su hareket hâlindeki parçayı yıkar ve hücre tabanından tanka geri döner; dönüş yolundaki **ön filtre sepetleri** kaba kiri tutar. Bu kapalı devre, su tüketimini azaltır ancak filtrelerin düzenli temizlenmesini zorunlu kılar (**Bkz. Bölüm 10.1.3, 10.1.4**).

Tank sıcaklığı operatör panelindeki **GEMO DTH2** termostatı ile ayarlanır; ısıtıcılar yalnızca tankta yeterli su varken çalışır (**Bkz. Bölüm 3.4.6**). Tank dolumu **elle** yapılır; otomatik dolum yoktur. Tank altında kırmızı kollu **TAHLİYE** vanası bulunur.

![Yıkama hücresi — nozul boruları ve tel bant (kapak açık)](../../assets/3.1/yikama-hucresi-nozul.jpg)

![Tank içi — rezistanslar](../../assets/3.1/tank-ici-rezistans.jpg)

![Pompa ve pompa çıkışı hassas (torba) filtre gövdesi](../../assets/3.1/pompa-hassas-filtre.jpg)

---

## 3.1.4 Durulama tankı (TANK 2) ve durulama hücresi

Durulama bölgesi, yıkama sonrası parça yüzeyinde kalan kirli yıkama suyunun temiz durulama suyu ile giderildiği tank ve hücre sistemidir. **Durulama pompası (PE04, 3 kW)** TANK 2'deki suyu durulama hücresi nozullarına basar. Tank, "2" etiketli gaz amortisörlü kapakla örtülüdür ve **iki adet 8 kW rezistans** (R06, R07) ile ısıtılır; sıcaklık ayrı bir GEMO DTH2 termostatı ile ayarlanır.

TANK 2 de seviye sensörü, emiş filtresi, pompa çıkışı hassas filtre ve TAHLİYE vanası ile donatılmıştır; dolum elle yapılır. Durulama suyunun kalitesi doğrudan parça yüzey temizliğini belirler; su yağlandığında veya kirlendiğinde tank boşaltılıp yeniden doldurulmalıdır (**Bkz. Bölüm 10.1.5**).

---

## 3.1.5 Yağ sıyırıcı ve yağ ayırıcı ünitesi

**Yağ sıyırıcı** (TANK 1 OIL SKIMMER), yıkama tankı yüzeyinde biriken yağ tabakasını toplayan, **0,09 kW redüktör motoru (GE06)** ile döndürülen disk tipi bir ünitedir. Yüzeydeki yağ diske yapışır, sıyrılarak toplama kanalına alınır ve tanktan uzaklaştırılır. Yağ sıyırıcı, yıkama suyunun yağ yükünü azaltarak nozul ve filtre tıkanmasını geciktirir ve proses suyunun ömrünü uzatır.

**Yağ ayırıcı ünitesi**, makinenin yanında duran ayrı bir paslanmaz kabindir. Tanktan alınan yağlı su, kabinin altındaki **basınçlı hava tahrikli diyaframlı pompa** ile ünitenin içine aktarılır; yağ ve su yoğunluk farkıyla ayrılır. Pompanın hava beslemesi bir solenoid valf ile açılır; panelde etiketsiz olan anahtar yağ ayırıcıyı çalıştırır ve çalışma lambası yanar (**Bkz. Bölüm 3.4.3**). Ünite, makinenin basınçlı hava tüketicisidir (**Bkz. Bölüm 3.3.5**).

![Yağ sıyırıcı — TANK 1](../../assets/3.1/yag-siyirici.jpg)

![Yağ ayırıcı ünitesi — ayrı paslanmaz kabin](../../assets/3.1/yag-ayirici-unitesi.jpg)

![Yağ ayırıcı ünitesi — diyaframlı pompa ve filtre](../../assets/3.1/yag-ayirici-diyafram-pompa.jpg)

---

## 3.1.6 Kurutma ünitesi — blower ve sıcak hava

Kurutma ünitesi iki aşamalıdır. **Su sıyırma** aşamasında **dört blower motoru (FE04–FE07, her biri 4 kW)** hücre içindeki hava bıçağı borularından yüksek hızlı hava üfleyerek parça yüzeyindeki suyu mekanik olarak sıyırır; bu aşama kurutma için gereken ısı enerjisini azaltır. **Kurutma** aşamasında **iki kurutma fanı (FE02, FE03, her biri 1,1 kW)**, **12 kW'lık iki ısıtıcıdan (R21, R22)** geçen sıcak havayı kurutma hücresine verir; kalan nem buharlaşır.

Kurutma hava sıcaklığı, operatör panelindeki **DRYING 1 HEATER** ve **DRYING 2 HEATER** GEMO DTH2 termostatları ile ayarlanır. Kurutma ısıtıcıları fan çalışmadan açılmamalıdır; aksi hâlde hücre içinde ısı birikir (**Bkz. Bölüm 7.2**). Blower ve kurutma fanı kanatlarında toz birikimi hava debisini düşürür; 250 saatlik bakım maddesidir (**Bkz. Bölüm 9.1.3**).

| Bileşen | Adet | Güç | Panel anahtarı |
| :--- | :---: | :---: | :--- |
| Blower motoru (FE04–FE07) | 4 | 4 kW | BLOWER 1, BLOWER 2 (iki grup — anahtar/motor eşlemesi için elektrik şeması, **Bkz. Bölüm 13.1**) |
| Kurutma fanı motoru (FE02, FE03) | 2 | 1,1 kW | DRYING 1 FAN, DRYING 2 FAN |
| Kurutma fanı ısıtıcısı (R21, R22) | 2 | 12 kW | DRYING 1 HEATER, DRYING 2 HEATER |

![Kurutma hücresi — blower hava bıçağı boruları (kapak açık)](../../assets/3.1/kurutma-blower-borulari.jpg)

![Kurutma hücresi çıkışı — PVC şerit perde](../../assets/3.1/kurutma-hucresi-perde.jpg)

---

## 3.1.7 Egzoz fanı

**Egzoz fanı (FE01, 1,1 kW)**, makine üstündeki bacaya monte edilmiş salyangoz fandır. Yıkama, durulama ve kurutma hücrelerinde oluşan buharı ve nemli havayı toplayarak bacadan tahliye eder. Egzoz çalışmazsa buhar hücre kapaklarından ve PVC perdelerden işletmeye yayılır; pano içinde yoğuşma ve zemin kayganlığı oluşur. Egzoz bacası kurulumda tesis havalandırmasına veya dış ortama bağlanmalıdır (**Bkz. Bölüm 5.3**).

Egzoz fanının operatör panelinde ayrı bir anahtarı yoktur; çalışma koşulu elektrik şemasında tanımlıdır ([EKSİK] — hangi fonksiyonla birlikte devreye girdiği şemadan doğrulanacak). Pano içinde ayrı motor koruma şalteri (Q4 EGZOZ) ve kontaktörü (K4) bulunur (**Bkz. Bölüm 11.1.3**).

![Egzoz fanı ve baca — konveyör giriş tarafı](../../assets/3.1/egzoz-fani-baca.jpg)

---

## 3.1.8 Elektrik panosu ve kontrol altyapısı

Makinenin elektrik ve kontrol altyapısı, makinenin sağ tarafında duran **elektrik panosunda** (1000 × 1600 × 300 mm) toplanmıştır. Panoda PLC veya HMI **yoktur**; kumanda, röle ve kontaktörlerle, operatör paneli üzerindeki aç/kapa anahtarları aracılığıyla yapılır. Pano kapağının dış yüzünde **ana şalter kolu** (Schneider TMŞ CVS250F, 250 A) ve **operatör paneli** bulunur.

Besleme gerilimi, kurulu güç, ana şalter değerleri, motor ve ısıtıcı listesi **Bölüm 3.3**'te verilmiştir; bu bölümde tablo tekrarlanmaz. Özet:

- Besleme: **380 V**, **50 Hz**, **3 faz**, **3P+N+PE**
- Toplam kurulu güç: **110 kW** (ısıtma dahil); pano akımı **220 A**
- Ana şalter: **Schneider CVS250F — LV521091** (TMŞ, 250 A)
- Kumanda gerilimi: **220 V AC** (kontaktör bobinleri); **24 V DC** kontrol beslemesi (LRS-350-24)

Operatör paneli anahtarları, termostatlar, lambalar ve pano içi koruma elemanları **Bölüm 3.4**'te detaylandırılmıştır.

![Elektrik panosu — makinenin sağ tarafı](../../assets/3.1/elektrik-panosu-dis.jpg)

---

## 3.1.9 Acil durdurma ve güvenlik donanımı

Makinede **7 adet acil stop butonu** (operatör paneli, konveyör giriş sağ/sol, konveyör çıkış sağ/sol, orta bölge sağ/sol) ve **7 adet bakım kapağı** bulunur. Her bakım kapağı Omron **F3STGRNLPU21M1J8** manyetik emniyet switch'i ile izlenir; switch'ler seri bağlıdır ve iki Omron **G9SB2002AACDC241** emniyet rölesi (acil stop zinciri ve kapak zinciri) tarafından değerlendirilir. Herhangi bir kapak açıldığında veya acil stop basıldığında tüm hareket ve proses çıkışları durur; makine yalnızca operatör panelindeki **RESET** ile yeniden hazır duruma alınır.

Reset prosedürü, acil stop konumları ve kapak açıldıktan sonraki davranış **Bölüm 2.5**'te; güvenlik donanımı özeti **Bölüm 2.1.3**'te verilmiştir; bu bölümde adımlar tekrarlanmaz. Bakım sırasında kapak switch'leri baypas edilmemelidir; kapak açılmadan önce **LOTO** uygulanır (**Bkz. Bölüm 2.4**).

---

Amaçlanan kullanım sınırları için bkz. **Bölüm 3.2**; teknik tablolar için bkz. **Bölüm 3.3**; kontrol elemanları için bkz. **Bölüm 3.4**; yerleşim planı için bkz. **Bölüm 3.5**.
