# 11.2 GENEL SORUN GİDERME (GENERAL TROUBLESHOOTING)

Bu bölüm, makinenin belirli bir donanım veya alt sistem arızasından ziyade; işletim sırasında karşılaşılan genel performans düşüklükleri, yıkama kalitesizlikleri, operasyonel kilitlenmeler ve sistemik sorunların teşhis ve çözüm süreçlerini kapsar.

---

## 11.2.1 Makine Çalışmıyor / Sisteme Enerji Gelmiyor

Makineye "START" komutu verildiğinde hiçbir tepki alınamıyor veya HMI ekranı yanmıyorsa.

**Belirti:** Ana şalter açılmasına rağmen HMI ekranı boot etmiyor, ışıklar yanmıyor.

**Olası Nedenler:**

- Tesisat ana sigortaları atmış veya faz eksikliği var.
- Makinenin ana güç şalteri (Kompakt şalter) "0" konumunda veya tripping yapmış (açmış).
- Kontrol paneline giden güç kaynağı (24V DC) arızalanmış.

**Yapılacak Kontrol ve Çözüm:**

1. Tesisattaki faz ve nötr hatlarının sağlam olduğunu, sigortaların atmadığını kontrol edin.
2. Makine ana şalterini "0" konumuna alın, 10 saniye bekleyin ve tekrar "1" konumuna getirin.
3. Elektrik panosu içinden HMI ve PLC'ye giden güç kaynağının (SMPS) çıkış voltajlarını *(24V DC)* multimetre ile ölçün. Çıkış yoksa güç kaynağını değiştirin.

---

## 11.2.2 Yıkama Kalitesinde Düşüklük (Kötü Yıkama Performansı)

Makine mekanik olarak sorunsuz çalışıyor ancak parçalar istenen temizlikte yıkanmıyor.

**Belirti:** Parçaların üzerinde yağ/kir kalıntıları veya lekeler kalıyor.

**Olası Nedenler:**

- Su sıcaklığı yeterli seviyeye ulaşmıyor (ısıtma arızası).
- Kimyasal dozaj ayarı yanlış (çok az veya yanlış kimyasal).
- Tambur aşırı yüklü (parçalar birbirine sürtünmüyor).
- Tambur devir sayısı (RPM) çok düşük ayarlanmış.

**Yapılacak Kontrol ve Çözüm:**

1. Makinenin yıkama aşamasında suyun sıcaklığını termometre veya HMI üzerinden kontrol edin. Isınmıyorsa bkz. **Bölüm 11.1.3.**
2. Dozaj pompalarının strok ayarlarını ve kimyasal tanklarındaki seviyeyi kontrol edin.
3. Yükleme miktarını ve tambur içindeki malzeme dağılımını kontrol edin; makineyi eksik veya optimum kapasitede test edin.
4. HMI üzerinden reçete parametrelerinden tambur RPM değerini artırın.

---

## 11.2.3 Aşırı Köpük Oluşumu ve Su Taşması

Makine içinde normalden fazla köpük oluşması, köpüğün tambur dışına taşması veya tahliye hattına zarar vermesi durumu.

**Belirti:** Tambur kapak contalarından köpük dışarı sızıyor, makine içine köpük doluyor.

**Olası Nedenler:**

- Yanlış tip kimyasal kullanımı (endüstriyel tip olmayan, çok köpüren deterjan).
- Aşırı kimyasal dozajı.
- Su seviyesinin çok yüksek ayarlanması.
- Parçalarda önceden kalıntı olarak bulunan yağın çok fazla olması.

**Yapılacak Kontrol ve Çözüm:**

1. Kullanılan kimyasalın düşük köpüren (Low-Foam) endüstriyel yıkama kimyasalı olduğundan emin olun.
2. Dozaj miktarını düşürün ve su seviyesini standart seviyeye getirin.
3. Eğer parçalarda çok fazla yağ varsa ön temizlik yapın veya programa ek bir durulama adımı ekleyin. Gerekirse sisteme uygun miktarda **"Köpük Kesici (Antifoam)"** ekleyin.

---

## 11.2.4 Programın Uzun Sürmesi veya Takılması

Makine otomatik döngüde bir sonraki adıma geçmiyor, belirli bir fazda takılı kalıyor.

**Belirti:** Makine su alıyor veya ısıtıyor ancak bir türlü yıkama veya durulama aşamasına geçmiyor, sürekli bekliyor.

**Olası Nedenler:**

- Su basıncının düşmesi nedeniyle su seviyesi hedefe ulaşamıyor (su seviye sensörü tetiklenmiyor).
- Isıtma sistemi yavaş çalıştığı için hedef sıcaklığa ulaşılamıyor (PT100 sinyali gelmiyor).
- Buhar hattı basıncı düşmüş *(buharlı makinelerde).*
- PLC'de yazılımsal bir takılma.

**Yapılacak Kontrol ve Çözüm:**

1. Makinenin su alımını fiziksel olarak (ses veya vanaya dokunarak) kontrol edin. Giriş basıncını ve valfi kontrol edin *(bkz. Bölüm 11.1.2).*
2. Isıtmanın devrede olup olmadığını (ampermetre veya kontaktör kontrolü ile) kontrol edin.
3. Buhar giriş basıncını ve kondens tahliyesini kontrol edin. Kondens tahliye edilemezse ısıtma verimsiz olur.
4. Makineyi durdurup **"RESET"** yapın ve programı tekrar başlatın. Sorun yazılımsalsa PLC reseti çoğu zaman çözer.

---

## 11.2.5 Sıkma (Santrifüj) Aşamasında Makinenin Durması

Yıkama ve durulama işlemleri sorunsuz tamamlanıyor ancak yüksek devirli sıkma (spin) aşamasında makine kendini korumaya alıp duruyor.

**Belirti:** Sıkma devri yükselmeye başlarken makine aniden duruyor, **"Unbalance"** (Dengesiz Yük) veya **"Inverter Overload"** hatası veriyor.

**Olası Nedenler:**

- Tambur içindeki malzemenin tek tarafa yığılması (asimetrik kütle).
- Malzemenin sıkma esnasında suyunu alamayıp ağırlaşması.
- Tambur yataklarında boşluk veya milde eğrilik.

**Yapılacak Kontrol ve Çözüm:**

1. Makineyi durdurun, kapağı açın ve malzemeyi tambur içine homojen (dengeli) olarak yeniden yerleştirin.
2. Yükleme kapasitesini kontrol edin; çok az malzeme de sıkma esnasında dağılarak dengeyi bozabilir.
3. Makineyi boş çalıştırın; sıkma aşamasında titreşim ve anormal ses varsa yatak/mil grubunda mekanik yorgunluk olabilir, teknik servis talep edin.

---

## 11.2.6 Kapak Kilidi Açılmıyor

Program bittikten veya "STOP" verildikten sonra makine kapağı açılmıyor.

**Belirti:** Operatör kapağı açmak istiyor ancak mekanik kilit veya pnömatik silindir kapağı serbest bırakmıyor.

**Olası Nedenler:**

- Tambur tamamen durmadığı için (0 RPM değil) güvenlik rölesi kilit çözme sinyalini vermiyor.
- Pnömatik hava basıncı düştüğü için kilit silindiri geri çekilemiyor.
- Kapak limit switch'inde kontak yapışması var.

**Yapılacak Kontrol ve Çözüm:**

1. HMI üzerinden tamburun tamamen durduğundan *(0 rpm)* ve **"DÖNGÜ TAMAMLANDI"** yazısından emin olun. Tambur dönerken kilit açılamaz.
2. Pnömatik ünite basıncını kontrol edin; yetersizse kompresörü çalıştırın.
3. Manuel olarak kapak silindirinin hava hattını kontrol edin. Elektriksel bir sorun yoksa pnömatik valfe manuel olarak müdahale edip kapağı açabilirsiniz *(yetkili personel tarafından).*

---

> ⚠️ **DİKKAT:** Genel sorun giderme adımlarını uygularken HMI (Dokunmatik Panel) üzerindeki **"Alarm Geçmişi (Alarm Log)"** sekmesini mutlaka kontrol edin. PLC, durma nedenini çoğu zaman bir hata kodu ile bu ekrana yansıtır. Arıza kodlarının anlamları için makineyi teslim eden **CNK ELEKTRONİK / DOLFIN MAKİNE** firmasının sağladığı **"Alarm Kodları Listesi"**ne bakınız. Çözülemeyen kronikleşmiş genel sorunlarda ana elektrik panosuna müdahale etmeden önce yetkili servise danışın.