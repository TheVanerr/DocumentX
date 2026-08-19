<!-- ÇEVİRİ GEREKLİ → DE | kaynak: TR | bu satırı çeviri bitince silin. Başlık/görsel/tablo yapısını koruyun, yalnızca metni çevirin. -->

# 2.3 OPERASYONEL GÜVENLİK KURALLARI

Bu bölüm, makinenin çalıştırılması, temizlenmesi ve bakım işlemleri sırasında sahada uygulanması zorunlu olan somut ve yasal bağlayıcılığı en yüksek eylem kurallarını tanımlar. İş kazalarını, ciddi yaralanmaları ve tesis hasarlarını önlemek için tasarlanmış bu kuralların ihlali durumunda, makine derhal durdurulmalı ve operasyon güvenliği tekrar sağlanana kadar devreye alınmamalıdır. Bu kuralların etrafından dolaşılması (bypass edilmesi) durumunda üretici firma tüm hukuki sorumluluktan muaf tutulur.

---

## 2.3.1 Tehlikeli ENerji Kontrolü (LOTO - Kilitleme ve Etiketleme) Prosedürü
Makine üzerinde yapılacak her türlü mekanik bakım, elektrik onarımı veya kabin içini ilgilendiren majör temizlik işlemi öncesinde "Tehlikeli Enerji Kontrolü" (Lockout/Tagout) prosedürünün uygulanması yasal bir zorunluluktur. Amaç, bakım sırasında makinenin başkası tarafından kazara çalıştırılmasını ve birikmiş enerjinin aniden boşalmasını engellemektir.

**LOTO Uygulama Adımları:**
1. **Elektriksel İzolasyon:** Makinenin ana besleme şalteri "0" (OFF) konumuna getirilmeli ve şalterin üzerindeki kilit yuvasına kişisel bir asma kilit takılmalıdır. Kilit üzerine, işlemi yapan teknisyenin adını ve "DİKKAT: BAKIM VAR, ÇALIŞTIRMAYIN" ibaresini içeren standart LOTO etiketi asılmalıdır.
2. **Pnömatik İzolasyon:** Basınçlı hava hattını makineye bağlayan ana giriş vanası kapatılmalı ve kilitlenmelidir. Kapatma işleminden sonra, şartlandırıcı (FRL) üzerindeki veya sistemin içindeki tahliye valfi açılarak borularda kalmış olan artık (rezidüel) basınç tamamen atmosfere boşaltılmalıdır.
3. **Hidrolik ve Su Hatları:** Şebeke suyu veya deiyonize su (DI) besleme vanaları kapatılmalı, sistemde kapalı devre basınçlı su kalmadığından emin olunmalıdır.
4. **Doğrulama (Test):** Kilitler asıldıktan sonra, sistemde gerçekten enerji olmadığını doğrulamak için HMI ekranından veya kontrol panosundaki başlatma (Start) butonlarından makine çalıştırılmaya çalışılmalı, hiçbir tepki alınmadığı teyit edildikten sonra fiziksel müdahaleye başlanmalıdır.

---

## 2.3.2 Acil Durdurma (E-Stop) Prosedürü ve GüvENli Resetleme
Makine, standart olarak kontrol panosu üzerinde (ve konfigürasyona bağlı olarak yükleme/boşaltma istasyonlarında) kırmızı renkli, sarı zeminli Acil Durdurma butonları ile donatılmıştır. 

**Acil Durdurma Butonunun Kullanılacağı Durumlar:**
* Operatörün veya çevredekilerin can güvenliğini tehdit eden (sıkışma, elektrik çarpması vb.) herhangi bir tehlike anında.
* Makine içerisinden anormal bir mekanik çarpma, sürtünme veya kırılma sesi geldiğinde.
* Tesisat borularında, pompa bağlantılarında veya kabin kapaklarında ani ve büyük çaplı bir su/kimyasal sızıntısı yaşandığında.
* Pano veya motorlardan yanık kokusu/duman geldiğinde.

**Tehlike Sonrası Güvenli Resetleme (Acknowledge) Prosedürü:**
Acil durdurma butonuna basıldığında donanımsal güvenlik röleleri enerjiyi anında keser. Tehlike geçtiğinde sistemi yeniden başlatmak için sadece butonu serbest bırakmak yeterli değildir:
1. Acil duruma sebep olan tehlike kaynağının tamamen ortadan kaldırıldığını fiziksel olarak denetleyin.
2. Basılı olan kırmızı E-Stop butonunu üzerindeki ok yönünde (genellikle sağa doğru) hafifçe çevirerek serbest (kurulu) konuma getirin.
3. HMI paneli üzerinden beliren "Emergency Stop / Acil Durdurma" alarmını **"Reset" (veya Acknowledge)** butonuna basarak silin. Güvenlik röleleri ve PLC (örn. S7-1214C) doğrulama sinyalini aldıktan sonra sistem yeniden çalışmaya hazır hale gelecektir.

---

## 2.3.3 Mekanik ve Termal GüvENlik Kuralları
Makinenin iç kabinindeki yıkama mekaniği ve termal dinamikler, doğrudan insan temasına uygun değildir. Operasyonel aşamada aşağıdaki kurallara harfiyen uyulmalıdır:

* **Basınçlı Su Jeti Tehlikesi:** Makinenin sepet ve nozul konfigürasyonu, suyu yüksek basınçla parça yüzeyine çarptırmak üzere tasarlanmıştır. Standart konfigürasyonda yer alan **ince ve düz atışlı (noktasal) nozullar** ile opsiyonel olarak sunulan **açılı yelpaze nozulların** her ikisi de, sistem çalışırken doğrudan cilt ile temas etmesi halinde ciddi kesiklere ve doku hasarlarına yol açabilecek kinetik enerjiye sahiptir. Bu nedenle yıkama pompaları devredeyken makine içine asla uzanılmamalıdır.
* **Termal Şok ve Buhar Yanığı:** Yıkama döngüsü (cycle) aktifken ve iç kabin soğuma fazına (genellikle < 40°C) geçmeden, kapakların güvenlik kilitleri zorlanarak açılmaya çalışılmamalıdır. Erken açılan kapaklar, operatörün yüzüne ve solunum yollarına yoğun ve sıcak kimyasal buharın (buhar şoku) çarpmasına neden olur.
* **Hareketli Mekanizmalar:** Otomatik pnömatik kapakların kapanma alanında veya döner tablanın/sepetin hareket yörüngesinde yabancı cisim veya el bulundurulmamalıdır.

---

## 2.3.4 Elektrik GüvENliği ve İzolasyon
Endüstriyel yıkama makineleri su ve elektrik gibi birbiriyle temas etmemesi gereken iki ana unsuru yüksek kapasitelerde barındırır. 

* **Pano Güvenliği:** Makine çalışır durumdayken ana elektrik panosu ile motor/rezistans klemens kutularının kapakları daima kapalı ve mekanik olarak kilitli tutulmalıdır. 
* **Su Temasından Kaçınma:** Temizlik işlemleri (hortumla yıkama vb.) sırasında elektrik panosuna, HMI ekranına, kablo giriş rakorlarına, invertör (sürücü) havalandırmalarına ve dışarıda bulunan valf bobinlerine doğrudan basınçlı su tutulması kesinlikle yasaktır.
* **Topraklama:** Makinenin şasi topraklaması hayati önem taşır. İşletme, topraklama hattının (PE) direncini ilgili yasal mevzuatlara uygun olarak periyodik şekilde (en az yılda bir kez) ölçtürmeli ve raporlamalıdır. Topraklama bağlantısı zarar görmüş bir makine asla çalıştırılmamalıdır.

---

## 2.3.5 GüvENlik Donanımlarının IPtal Edilmemesi (Bypass Yasağı)
Makinenin üzerindeki donanımsal ve yazılımsal iş güvenliği mimarisi bir bütündür ve "sıfır tolerans" prensibiyle çalışır.

* Manyetik veya mekanik kapı kilitlerinin (interlock),
* Güvenlik rölelerinin ve siviçlerin,
* Tank seviye sensörlerinin (rezistansın susuz çalışmasını önleyen) veya termostat limitörlerinin,

Herhangi bir arıza veya üretimi hızlandırma bahanesiyle sökülmesi, bantlanarak "sürekli kapalı" konuma getirilmesi, elektrik panosu içinden köprülenmesi (kısa devre yapılması) veya PLC yazılımı üzerinden parametre değiştirilerek devre dışı bırakılması **kesinlikle yasaktır.** Bu güvenlik zincirindeki herhangi bir manipülasyon (bypass işlemi), operatörü doğrudan ölümcül risklerle baş başa bırakır. Tespit edildiği an makinenin kullanımı derhal durdurulur ve makine süresiz olarak üretici garantisi dışına çıkarılır.
