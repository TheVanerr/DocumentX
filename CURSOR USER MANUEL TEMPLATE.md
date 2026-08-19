# CURSOR AI AGENT İÇİN EN ISO 20607 UYUMLU KULLANIM KILAVUZU YAZIM PROMPTU VE ŞABLONU

Bu doküman, Cursor'da çalışacak AI Agent'ın **sıfırdan EN ISO 20607 (Makine Emniyeti — Kullanım Kılavuzu — Genel Yazım Prensipleri)** standardına tam uyumlu; **tekrarsız, akıcı, derinlikli ve yasal olarak bağlayıcı** bir endüstriyel makine kullanım kılavuzu yazması için tasarlanmış "Meta-Prompt ve Yapısal Şablon" paketidir.

> **Bu revizyonun amacı:** Önceki sürüm, ISO 20607'nin yalnızca *prosedür adımları* için geçerli olan "kısa cümle" kuralını tüm bölümlere uyguladığı için metinler telgraf gibi kısa ve yüzeysel çıkıyordu. Bu sürüm, **içerik tipine göre yazım stilini** ayırır: talimatlar kısa ve emir kipiyle, açıklayıcı/kavramsal/yasal bölümler ise zengin, bağlam veren paragraflarla yazılır. Böylece hem standarda uyum hem de profesyonel kılavuz kalitesi sağlanır.

---

## BÖLÜM A: CURSOR AI AGENT SİSTEM TALİMATLARI (SİSTEM PROMPTU)

### A.0 Temel Felsefe — "Oku → Anla → Uygula" (ISO 20607 §4.1)

Kılavuz, okuyucunun **önce kavramı anlamasını**, sonra **doğru şekilde uygulamasını** sağlamalıdır. Bu nedenle her bölüm iki katmanı barındırır:

1. **Bağlam katmanı (neden/ne):** Okuyucuya konunun amacını, önemini ve makinenin çalışma mantığını açıklayan akıcı metin.
2. **Eylem katmanı (nasıl):** Bağlam anlaşıldıktan sonra uygulanacak, kısa ve numaralı prosedür adımları.

Yalnızca eylem katmanı yazmak (ki eski hata buydu) kılavuzu "anlaşılmaz komut listesine" düşürür. Yalnızca bağlam yazmak ise uygulanabilir talimat vermez. **İkisi birlikte** olmalıdır.

---

### A.1 İÇERİK TİPİNE GÖRE YAZIM STİLİ (EN KRİTİK KURAL)

Her cümleyi yazmadan önce "bu metin hangi tipte?" diye sor ve stili ona göre seç. **Tek bir stili tüm kılavuza dayatma.**

| İçerik tipi | Nerede kullanılır | Stil | ISO dayanağı |
|---|---|---|---|
| **Prosedür / Talimat** | Start/stop, LOTO, bakım, temizlik, montaj adımları | Kısa, emir kipi, numaralı adım; adım başına tek işlem | §6.4 |
| **Açıklayıcı / Kavramsal** | Makine tanımı, çalışma prensibi, mod açıklamaları, teknoloji anlatımı | Akıcı, tam paragraf; bağlam + gerekçe + sonuç | §4.4, §6.3 |
| **Yasal / Sorumluluk** | Garanti, sorumluluk sınırı, fikri mülkiyet, amaçlanan kullanım | Resmi, gerekçelendirilmiş, tam cümleli paragraf | §5.2.1 |
| **Güvenlik uyarısı** | Kalıntı riskler, tehlike bildirimleri | 4 bileşenli yapı (bkz. A.5) | §6.5, §4.10 |
| **Referans / Veri** | Teknik tablolar, hata kodları, KKD matrisi | Tablo; net başlıklı sütunlar | §4.4 b) |

**Altın kural:** Prosedürde kısalık erdemdir; açıklamada eksiklik kusurdur. Bir konuyu "tek cümleyle" geçiştirme — konunun *neden* önemli olduğunu, *hangi koşulda* geçerli olduğunu ve *yapılmazsa ne olacağını* da yaz.

---

### A.2 KALİTE RUBRİĞİ — Her Alt Bölümün Asgari Yapısı

Prosedürel olmayan her alt bölüm (örn. 1.1, 3.1, 7.1) **en az** şu katmanları içermelidir:

1. **Giriş paragrafı (2–4 cümle):** Bu alt bölümün neyi kapsadığı ve neden önemli olduğu.
2. **Ana içerik:** Konuya göre açıklayıcı paragraf(lar), tablo veya numaralı prosedür.
3. **Gerekçe / bağlam:** İlgili yerlerde "çünkü / aksi halde / bu sayede" ile nedensellik.
4. **Uyarı (gerekliyse):** Yalnızca o bölüme özel tehlike varsa (bkz. A.5).
5. **Çapraz referans:** İlgili SSOT bölümüne yönlendirme (bkz. A.4).

Prosedürel alt bölümler (örn. 2.4 LOTO, 7.2 Start) için: **kısa bir hedef/bağlam cümlesi + numaralı adımlar + beklenen sonuç.**

**Derinlik ölçütü:** Bir alt bölüm, o konuda makineyi hiç görmemiş nitelikli bir teknisyenin kafasındaki "neden, ne zaman, nasıl, ya olmazsa" sorularını yanıtlıyorsa yeterlidir. Yanıtlamıyorsa eksiktir.

---

### A.3 DERİNLİK VE BAĞLAM KURALLARI

- **Gerekçe ekle:** Bir kural veya adım verirken mümkünse kısa gerekçesini de belirt. Örnek — yetersiz: "Ana şalteri kapatın." Yeterli: "Ana şalteri '0' konumuna alın; bu, tüm güç devrelerini keserek bakım sırasında beklenmedik hareket riskini ortadan kaldırır."
- **Beklenen sonucu yaz (ISO §6.4 d):** Bir işlemin ardından makinenin/prosesin hangi duruma geçtiğini belirt. Örnek: "Hazırlık tamamlandığında sarı tepe lambası yanar."
- **Anormal durumu belirt:** Bir adım beklendiği gibi gitmezse ne yapılacağını kısaca yaz.
- **Koşulları netleştir:** "Hangi modda, hangi sıcaklıkta, hangi personel tarafından" bilgisini eksik bırakma.
- **Somut ol:** Genel ifadelerden kaçın. "Uygun aralıkla temizleyin" yerine SSOT'taki gerçek periyodu ver; bilinmiyorsa `[EKSİK]` bırak, uydurma.
- **Okuyucuyu yönlendir:** Konu başka bölümde detaylıysa oraya çapraz referans ver; içeriği kopyalama.

---

### A.4 SIFIR TEKRAR VE ÇAPRAZ REFERANS (SSOT) İLKESİ

Bir veriyi veya prosedürü kılavuzun birden fazla yerinde tekrarlama. Tekrar, "uyarı körlüğüne" ve güncelleme sırasında tutarsızlığa yol açar. Aşağıdaki konular **tek kaynakta** yazılır; diğer bölümler yalnızca referans verir:

- **LOTO (enerji izolasyonu):** Yalnızca **Bölüm 2.4**. Bakım (9), Temizlik (10), Demontaj (12) → "Bkz. Bölüm 2.4".
- **Alan / tesis gereksinimleri:** Yalnızca **Bölüm 3.4**. Kurulum (5) → "Bkz. Bölüm 3.4".
- **Elektrik / güç / teknik değerler:** Yalnızca **Bölüm 3.5** tablosunda. Diğer bölümlerde tablo tekrarlanmaz.
- **Acil stop / reset:** Yalnızca **Bölüm 2.5**. Arıza tablosu (11) → referans.
- **Periyodik bakım takvimi:** Yalnızca **Bölüm 9.2**. Temizlik filtre periyotları → referans.

**Not:** Çapraz referans, derinlikten ödün vermek değildir. Referans verdiğin bölüm zengin ve eksiksiz olmalıdır; sadece *tekrarı* önlersin, *içeriği* değil.

---

### A.5 UYARILAR VE KALINTI RİSKLER (ISO 20607 §6.5 & §4.10)

**Sinyal kelimeleri (ISO 3864-2):**
- **TEHLİKE:** Kaçınılmazsa ölüm/ağır yaralanma.
- **UYARI:** Kaçınılmazsa ağır yaralanma olasılığı.
- **DİKKAT:** Hafif yaralanma veya makine/ekipman hasarı.

**Her uyarı 4 bileşeni içerir:**
1. Sinyal kelimesi
2. Tehlikenin türü/kaynağı
3. Olası yaralanma veya hasar
4. Nasıl önleneceği

Örnek (tam):
> **UYARI — Sıcak yüzey.** Yıkama tankı kapağı açıldığında 50–80 °C sıcaklıkta buhar ve yüzeyler açığa çıkar; ciltte yanığa yol açabilir. Kapağı açmadan önce sistemin soğumasını bekleyin ve koruyucu eldiven kullanın.

**Kalıntı riskler (§4.10):** Genel ifade yasak; her riski **spesifik** yaz (kaynağı, koşulu, sonucu). "Makinede tehlike vardır" değil; "Nozullardan çıkan yüksek basınçlı su ciltte kesik riski oluşturur."

**Uyarı enflasyonunu önle:** Genel uyarıları Bölüm 2'de topla. Prosedür adımında yalnızca o adıma özel tehlike varsa uyarı ekle; her sayfaya kopyalama.

---

### A.6 DİL, TERMİNOLOJİ VE BİÇİM (ISO 20607 §4.4)

#### A.6.1 Bölüm başlığı büyük/küçük harf (ZORUNLU — unutma)

Kılavuz .md dosyalarında numaralandırılmış başlıklar **seviyeye göre** farklı yazılır. Yeni yazım ve güncellemede bu kuralı **her zaman** uygula:

| Seviye | Numara | Yazım kuralı | Doğru örnek | Yanlış örnek |
|--------|--------|--------------|-------------|--------------|
| **Ana bölüm** | X. (1–14) | Başlık metninin **tüm harfleri BÜYÜK** | # 1. GİRİŞ, # 3. GENEL BAKIŞ, # 5. KURULUM | # 1. Giriş, # 3. Genel bakış |
| **Alt bölüm** | X.Y | **Yalnızca ilk harf(ler) büyük** (cümle başı) | ## 1.1 Kılavuz hakkında, ## 2.4 Tehlikeli enerji kontrolü | ## 1.1 KILAVUZ HAKKINDA |
| **Alt alt bölüm** | X.Y.Z | Alt bölümle aynı (cümle başı) | ## 3.3.1 Boyut ve ağırlık | ## 3.3.1 BOYUT VE AĞIRLIK |

**Kural özeti:** 1., 2., … 14. gibi genel bölüm başlıkları → **GİRİŞ**, **GÜVENLİK** gibi tamamı büyük. 1.1, 1.2, 2.4.1 gibi alt başlıklar → yalnızca cümle başı büyük harf.

- Türkçe karakterler korunur: GİRİŞ, GÜVENLİK, BAKIM.
- İçindekiler tablosu, çapraz referans ve özet listelerde de aynı yazım kullanılır.
- Mevcut dosyayı güncellerken ana bölüm başlığını küçük harfe **dönüştürme**; tersine alt bölümü tamamen büyük harfe çevirme.

- **Aktif ses**, hedef kitleye uygun terim.
- Aynı parça/eylem için kılavuz boyunca **tek terim** kullan (eş anlamlı karıştırma yasak).
- SI birimleri; tutarlı yazım ve büyük/küçük harf.
- Prosedürlerde kronolojiyi bozan "önce/sonra/ardından" yerine **numaralı adım** kullan.
- Numaralandırma **1'den** başlar (0'dan değil).
- Görselleri metni desteklemek için kullan; her görsele açıklayıcı alt yazı ver.

---

### A.7 YASAKLAR (ANTI-PATTERN)

- ❌ Her konuyu tek cümlelik maddeye indirgemek (açıklayıcı bölümlerde).
- ❌ Prosedür adımlarını gereksiz paragrafa boğmak.
- ❌ Temel mühendislik/elektrik eğitimi vermek (kapsam dışı).
- ❌ Bilinmeyen teknik değeri uydurmak (→ `[EKSİK]`).
- ❌ LOTO / teknik tablo / alan verisini birden çok bölümde tekrarlamak.
- ❌ "Uygun", "gerekli", "yeterli" gibi ölçülemeyen belirsiz ifadeler (somut değer ver).
- ❌ Genel/soyut kalıntı risk ifadeleri.
- ❌ Ana bölüm başlığını küçük harfle yazmak (# 1. Giriş) veya alt bölüm başlığını tamamen büyük harfe çevirmek (## 1.1 KILAVUZ HAKKINDA) — bkz. A.6.1.

---

## BÖLÜM B: YAPISAL KILAVUZ ŞABLONU

Aşağıdaki iskelet üretilecektir. Her alt başlıktaki **"Yazılacak içerik"** ne anlatılacağını, **"Derinlik"** ise hangi katmanların bulunması gerektiğini belirtir. Makineye özel sayısal değerler örnek olup gerçek proje DATA dosyasından alınır.

---

### BÖLÜM 1: GİRİŞ VE DOKÜMAN KONTROLÜ
*(Okuyucuyu dokümanın yasal çerçevesi, geçerliliği ve muhafazası hakkında bilgilendirir. Ağırlıklı olarak açıklayıcı/yasal metin — zengin paragraf.)*

#### 1.1 Kılavuz Hakkında, Amaç ve Kapsam
- **Yazılacak içerik:** Kılavuzun makinenin ayrılmaz ve yasal bağlayıcı bir parçası olduğu; kapsadığı yaşam döngüsü aşamaları (nakliye, kurulum, işletim, bakım, bertaraf).
- **Derinlik:** Her yaşam döngüsü aşamasını 1–2 cümleyle tanıt; kılavuzun temel mühendislik/elektrik eğitimi vermediğini ve personelin ön yeterliliği varsaydığını gerekçesiyle belirt.

#### 1.2 Doküman Geçerliliği ve Güncelleme Politikası
- **Yazılacak içerik:** Çizim ve şemaların sevk tarihindeki "As-Built" durumu yansıttığı; üreticinin önceden haber vermeksizin değişiklik hakkını sakladığı.
- **Derinlik:** Versiyon/revizyon kontrolünün neden önemli olduğunu (güvenlik ve izlenebilirlik) açıkla.

#### 1.3 Hedef Kitle ve Personel Kalifikasyonu (Yetki Matrisi)
- **Yazılacak içerik:** Operatör / Bakım Personeli / Üretici Servis Uzmanı rolleri ve yetki sınırları.
- **Derinlik:** Her rol için yetki + kısıt + gereken eğitim üçlüsünü yaz. Neden bu ayrımın iş güvenliği açısından kritik olduğunu belirt. KKD için Bölüm 2.6'ya referans.

#### 1.4 Muhafaza, Erişilebilirlik ve Makine Devri
- **Yazılacak içerik:** Dijital muhafaza (QR, tablet erişimi); satış/devir halinde kılavuzun da teslim zorunluluğu.
- **Derinlik:** İşverenin erişilebilirlik sorumluluğunu ve basılı kopya kullanım koşullarını açıkla.

#### 1.5 Fikri Mülkiyet ve Gizlilik
- **Yazılacak içerik:** Telif koruması; kopyalama, paylaşım ve tersine mühendislik yasağı.
- **Derinlik:** Yasal uyarı tonunda, gerekçeli tam paragraf.

---

### BÖLÜM 2: GÜVENLİK (TS EN ISO 12100 & EN ISO 20607 UYUMLU)
*(Kılavuzun en kritik bölümü. Genel güvenlik burada merkezileşir. Açıklayıcı bağlam + prosedür karışık.)*

#### 2.1 Güvenlik Taahhüdü ve Sorumluluk Sınırlaması
- **Derinlik:** Güvenlik cihazı baypası, yetkisiz modifikasyon, uygunsuz kimyasal kullanımının sonuçlarını (garanti + sorumluluk iptali) gerekçeli maddelerle yaz.

#### 2.2 Kalıntı Riskler
- **Yazılacak içerik:** Termal, yüksek basınçlı sıvı, sıkışma/ezilme, elektriksel riskler.
- **Derinlik:** Her riski kaynak + koşul + sonuç + korunma ile spesifik yaz (bkz. A.5). Genel ifade yasak.

#### 2.3 Makine Üzerindeki Güvenlik Etiketleri (Piktogramlar)
- **Derinlik:** ISO 7010 piktogramları; görsel + anlam + konum tablosu. Yıpranan etiketin yenilenmesi talimatı.

#### 2.4 Tehlikeli Enerji Kontrolü (LOTO) Prosedürü
- **ÖNEMLİ (Tek Kaynak):** Tüm LOTO adımları yalnızca burada, eksiksiz.
- **Derinlik:** Her izolasyon tipi (elektrik, pnömatik, hidrolik/su) için: neden gerekli olduğu + numaralı adım + doğrulama. Bakım/temizlik/demontaj yalnızca buraya referans verir.

#### 2.5 Acil Durdurma (E-Stop) ve Güvenli Resetleme
- **Yazılacak içerik:** E-stop konumları, basıldığında olan, reset adımları.
- **Derinlik:** Reset öncesi tehlikenin giderilmesinin neden şart olduğunu vurgula. Periyodik test için Bölüm 6.2/9.2'ye referans.

#### 2.6 Kişisel Koruyucu Donanım (KKD) Matrisi
- **Derinlik:** Faaliyet (operasyon, kimyasal ikmali, temizlik, elektrik/mekanik bakım) × zorunlu KKD tablosu; EN standardı belirt.

---

### BÖLÜM 3: MAKİNE GENEL BAKIŞI VE TEKNİK ÖZELLİKLER
*(Makine kimliği, çalışma mantığı ve tüm teknik parametreler burada toplanır.)*

#### 3.1 Makine Tanımı ve Çalışma Prensibi
- **Derinlik:** Banyo sayısı, proses akışı (Yıkama → Durulama → Kurutma), parça akış yönü ve ana modüllerin işlevini **akıcı paragrafla** anlat — sadece liste değil.

#### 3.2 Amaçlanan Kullanım (Intended Use)
- **Derinlik:** Hangi parçalar, hangi sıcaklık/döngü sınırlarında yıkanır; tasarım amacını net çiz.

#### 3.3 Öngörülebilir Hatalı ve Yasak Kullanımlar
- **Derinlik:** Yasak durumlar (canlı organizma, parlama noktası düşük solvent, aşırı yükleme). Galvaniz sepet/şasinin asidik/alkali kimyasalla korozyonu uyarısını vurgulu yaz.

#### 3.4 Çevresel ve Alan Gereksinimleri
- **ÖNEMLİ (Tek Kaynak):** Ortam sınırları (sıcaklık, nem, IP, gürültü), zemin terazi toleransı, minimum boşluklar.
- **Kural:** Kurulum (5) buraya referans verir.

#### 3.5 Teknik Parametreler ve Tesisat Bağlantı Değerleri
- **ÖNEMLİ (Tek Kaynak):** Fiziksel + elektriksel + akışkan verilerinin tümü tek ana tabloda.

#### 3.6 Motor, Fan ve Aktüatör Listesi
- **Derinlik:** Güç (kW), devir (rpm), marka, model tablosu.

#### 3.7 Kontrol Elemanları, Otomasyon Altyapısı ve HMI
- **Derinlik:** PLC/HMI marka-model, pano özellikleri, tepe lambası renk anlamları (Kırmızı: Alarm, Sarı: Hazır, Yeşil: Çalışıyor) ve neden bu kodlamanın kullanıldığı.

---

### BÖLÜM 4: NAKLİYE, TAŞIMA VE DEPOLAMA

#### 4.1 Kaldırma ve Taşıma Kuralları
- **Derinlik:** Vinç kullanımının durumu, forklift ile taşıma prosedürü, çatal profili konumu, ağırlık merkezi uyarısı. Ağırlık verisi için Bölüm 3.5'e referans.

#### 4.2 Depolama Koşulları
- **Derinlik:** Sıcaklık/nem sınırları, uzun süreli depolamada korozyon/koruma önlemleri.

---

### BÖLÜM 5: MONTAJ, KURULUM VE DEVREYE ALMA

#### 5.1 Montaj / Yerleştirme
- **Derinlik:** Alan gereksinimi için Bölüm 3.4'e referans; yerleştirme ve terazileme adımları.

#### 5.2 Mekanik, Pnömatik, Hidrolik ve Elektrik Kurulumu
- **Derinlik:** Bağlantı prosedürleri; teknik değerler için Bölüm 3.5'e referans, tabloyu tekrarlama.

#### 5.3 Güvenlik Sistemlerinin Kontrolü ve Testi
- **Derinlik:** E-stop, RFID/interlock testleri. Prosedür için Bölüm 2'ye referans.

#### 5.4 Kurulum Kontrolü ve Faz Sırası
- **Derinlik:** Faz sırası kontrolü ve neden kritik olduğu (pompa yönü).

#### 5.5 Devreye Alma ve 15 Dakikalık Boş Koşu Testi
- **Derinlik:** İlk çalıştırma öncesi kontroller + boş koşu test adımları + kabul kriterleri.

---

### BÖLÜM 6: ÜRETİCİ (OEM) AYARLARI

#### 6.1 Mekanik Ayarlar ve Senkronizasyon
#### 6.2 Güvenlik İlişkili Ayar Parametreleri
- **Derinlik:** Güvenlik testi sıklığı; Bölüm 5.5/2.5'e referans.
#### 6.3 Elektriksel ve Parametrik Ayarlar
- **Derinlik:** HMI'dan sıcaklık limiti, tarih/saat, dil ayarı. Gömülü sürücü parametrelerinin yalnızca üretici tarafından değiştirilebileceği uyarısı.
#### 6.4 Pnömatik Ayarlar
- **Derinlik:** Regülatörden ana hava basıncının sabitlenmesi (SSOT değeri Bölüm 3.5).

---

### BÖLÜM 7: OPERASYON VE ÇALIŞTIRMA
*(Günlük çalışma ve otomasyon süreçleri. Açıklama + prosedür dengeli.)*

#### 7.1 Çalışma Modları
- **Derinlik:** Otomatik mod çalışma prensibini paragrafla açıkla; bağımsız açılıp kapanabilen prosesleri belirt. Ayrı bakım modu yoksa LOTO gereğini vurgula (Bölüm 2.4 referans).

#### 7.2 Makine Başlatma (Start) Sıralaması
- **Derinlik:** Hazırlık (pre-start) mantığını açıkla + numaralı adım + beklenen sonuç (lamba durumu) + anormal durum çözümü.

#### 7.3 Makine Durdurma (Stop) Sıralaması
- **Derinlik:** Normal stop ve uzun süreli durdurma ayrımı; temizlik için Bölüm 10'a referans.

#### 7.4 Otomatik Operasyon Çevrimi (Sequence of Operations)
- **Derinlik:** Robotik yükleme senaryosu, nominal döngü süresi; çevrimi adım adım anlat.

#### 7.5 Hata Durumunda Makine Davranışı
- **Derinlik:** Kritik hatada duruş, lamba, HMI alarmı. Giderme için Bölüm 11'e referans.

---

### BÖLÜM 8: KAPASİTE VE REÇETE YÖNETİMİ

#### 8.1 Ürün Kapasitesi ve Limitleri
- **Derinlik:** Minimum kapasite ve nominal/maks değerlerin neye bağlı olduğu.
#### 8.2 Reçete Ayarları ve Program Oluşturma
- **Derinlik:** HMI reçete sayfasında parça kaydı, sıcaklık set değeri, proses on/off adımları.

---

### BÖLÜM 9: PERİYODİK BAKIM

#### 9.1 Bakım Güvenliği
- **Derinlik:** Bakım öncesi durdurma + LOTO gereği; adımları tekrarlama, Bölüm 2.4'e referans.
#### 9.2 Periyodik Bakım Tablosu
- **ÖNEMLİ (Tek Kaynak):** Günlük/haftalık/aylık/250 saat/yıllık doldurulabilir takvim tablosu. Filtre için Bölüm 10'a referans.
#### 9.3 Yağlama Planı
- **Derinlik:** Yağlama noktalarının konumu, sıklığı, önerilen gres tipi.

---

### BÖLÜM 10: MANUEL TEMİZLİK VE DEZENFEKSİYON

#### 10.1 Temizlik Öncesi Güvenlik
- **Derinlik:** LOTO gereği; Bölüm 2.4'e referans.
#### 10.2 Günlük Temizlik (Ön Filtreler)
- **Derinlik:** Ön filtre sökme/temizleme/takma adımları.
#### 10.3 Haftalık Derin Temizlik (Tank & Torba Filtreler)
- **Derinlik:** Tank ana filtreleri ve torba filtre prosedürü.
#### 10.4 Tank Dezenfeksiyon Prosedürü
- **Derinlik:** Boşaltma → yıkama → durulama adımları; aşındırıcı kimyasal yasağı uyarısı.
#### 10.5 Atık Su ve Kimyasal Bertarafı
- **Derinlik:** Yerel çevre mevzuatına uygun arıtma/bertaraf gereği.

---

### BÖLÜM 11: ARIZA TEŞHİS VE GİDERME

#### 11.1 İlk Müdahale ve Genel Teşhis Adımları
- **Derinlik:** Alarm ekranı → lamba rengi → kod → çözüm akışı.
#### 11.2 HMI Alarm ve Hata Kodları Tablosu
- **Derinlik:** Kod | Anlam | Olası neden | Çözüm | Yetkinlik sütunlu tablo; her çözüm ilgili bölüme referanslı (örn. Error-229 → 2.5, Error-422 → 2.4).
#### 11.3 Yetkili Servis Çağırma Kriterleri
- **Derinlik:** Operatörün/bakımcının durması gereken durumlar; Bölüm 1.3'e referans.

---

### BÖLÜM 12: DEMONTAJ VE HİZMET DIŞI BIRAKMA

#### 12.1 Güvenli Demontaj Prosedürü
- **Derinlik:** LOTO (2.4) → sıvı tahliye (10.4) → mekanik söküm (4.1) sıralı referanslı adımlar.
#### 12.2 Kalıcı ve Geçici Devre Dışı Bırakma
- **Derinlik:** Geçici/kalıcı ayrımı; elektrik/hava/su hatlarının güvenli körlenmesi.
#### 12.3 Çevresel Bertaraf ve Geri Dönüşüm
- **Derinlik:** Malzeme grubuna göre ayrıştırma (paslanmaz, plastik/kauçuk, WEEE) ve lisanslı geri dönüşüm.

---

### BÖLÜM 13: TEKNİK DOKÜMANLAR, SÖZLÜK VE EKLER

#### 13.1 Teslim Edilen Harici Dokümanlar Listesi
- **Derinlik:** P&ID, elektrik projesi, pnömatik şema, layout, HMI/PLC yedekleri dosya adları.
#### 13.2 Kısaltmalar ve Sözlük
- **Derinlik:** LOTO, HMI, PLC, RFID, P&ID, BOM, CIP, COP vb. tanımları.
#### 13.3 Anahtar Kelime İndeksi
- **Derinlik:** Önemli terimlerin geçtiği bölümleri gösteren dizin.

---

## BÖLÜM C: CURSOR AI AGENT İÇİN ADIM ADIM ÇALIŞTIRMA TALİMATI

Her görevden önce AI Agent'a şu çerçeveyi hatırlat: *"İçerik tipine göre stil seç (A.1), kalite rubriğini uygula (A.2), SSOT'ta tekrar etme (A.4), bilinmeyeni `[EKSİK]` bırak. Prosedür kısa/emir kipi; açıklama zengin/gerekçeli paragraf olacak."*

1. **GÖREV 1:** *"EN ISO 20607 uyumlu bu şablonu ve A.1–A.7 kurallarını incele. DATA dosyasını analiz et ve Bölüm 1 ile Bölüm 2'yi yaz. Giriş/yasal metni akıcı paragraflarla, LOTO'yu (2.4) tek kaynak olarak numaralı ve gerekçeli adımlarla detaylandır."*
2. **GÖREV 2:** *"Bölüm 3 ve 4'ü yaz. 3.4 (alan) ve 3.5 (teknik tablo) SSOT olacak; sayıları başka yerde tekrarlama. Makine tanımını (3.1) çalışma prensibini anlatan akıcı paragrafla yaz."*
3. **GÖREV 3:** *"Bölüm 5 ve 6'yı yaz. Altyapı için Bölüm 3'e, güvenlik testi için Bölüm 2'ye referans ver. 15 dakikalık boş koşu testini net adımlar + kabul kriteriyle ekle."*
4. **GÖREV 4:** *"Bölüm 7 ve 8'i yaz. Operasyon sekansını robotik entegrasyon ve nominal döngü süresini vurgulayarak anlat. Hazırlık butonu mantığını ve ön ısıtmayı gerekçeleriyle detaylandır."*
5. **GÖREV 5:** *"Bölüm 9 ve 10'u yaz. LOTO adımlarını tekrarlama → Bölüm 2.4'e referans. Yağlama noktalarını, günlük ön filtre ve haftalık torba filtre temizliğini adım adım yaz."*
6. **GÖREV 6:** *"Bölüm 11, 12 ve 13'ü yaz. Hata kodlarını 5 sütunlu tabloda birleştir; her çözümü ilgili reset/kurma bölümüne referansla. Dokümanı tamamla."*

---

## BÖLÜM D: TESLİM ÖNCESİ KALİTE KONTROL LİSTESİ

Her bölüm yazıldıktan sonra kontrol et:

- [ ] **Stil doğru mu?** Açıklayıcı bölümler zengin paragraf, prosedürler kısa/numaralı adım (A.1).
- [ ] **Derinlik yeterli mi?** Her alt bölüm "neden / ne zaman / nasıl / ya olmazsa" sorularını yanıtlıyor mu (A.2)?
- [ ] **Gerekçe var mı?** Kritik adımların nedeni ve beklenen sonucu yazılmış mı (A.3)?
- [ ] **SSOT korundu mu?** LOTO, teknik tablo, alan verisi tek yerde; diğerleri referans (A.4)?
- [ ] **Uyarılar tam mı?** 4 bileşenli, spesifik, doğru sinyal kelimeli (A.5)?
- [ ] **Terim tutarlı mı?** Aynı parça için tek terim; SI birimleri (A.6)?
- [ ] **Bilinmeyen veri?** `[EKSİK]` bırakıldı, uydurulmadı.
- [ ] **Hedef kitle net mi?** Bölümün kime hitap ettiği (operatör/bakım/kurulum) belli mi?
- [ ] **Anti-pattern yok mu?** Tek cümlelik geçiştirme, belirsiz ifade, gereksiz tekrar (A.7)?


---

## BÖLÜM E: SOMUT DERİNLİK ÇAPALARI (ZORUNLU MİNİMUMLAR)

Kurallar "zengin yaz" der; bu bölüm **ne kadar** zengin olacağını ölçülebilir hale getirir. AI Agent aşağıdaki minimumları sağlamadan bölümü "bitti" sayamaz.

### E.1 Alt bölüm kırılımı (ISO 20607 §4.4 — mantıksal yapı)

- Prosedürel olmayan her ana başlığı **3–6 numaralı alt bölüme** böl. Tek bir blok metin yazma.
- Örnek kırılım (Bölüm 1.1 "Kılavuz Hakkında" için hedef):
  - `1.1.1` Amaç, Kapsam ve Uygulama Alanı
  - `1.1.2` Geçerlilik, Güncellik ve Doküman Kontrolü
  - `1.1.3` Hedef Kitle, Personel Kalifikasyonu ve Sorumluluk Dağılımı
  - `1.1.4` Muhafaza ve Erişilebilirlik
  - `1.1.5` Amacına Uygun Kullanım, Sorumluluk Sınırı ve Garanti İptali
  - `1.1.6` Fikri/Sınai Mülkiyet ve Gizlilik
- Aynı mantığı diğer açıklayıcı bölümlere (3.1 çalışma prensibi, 7.1 modlar vb.) uygula.

### E.2 Yoğunluk minimumları (içerik tipine göre)

| İçerik tipi | Asgari yoğunluk |
|---|---|
| **Açıklayıcı / kavramsal** alt bölüm | ≥ 2 tam paragraf **veya** 1 giriş paragrafı + gerekçelendirilmiş liste (her madde ≥ 2 cümle) |
| **Yasal / sorumluluk** alt bölüm | 1 giriş paragrafı + **maddelenmiş** kapsam; her madde neyin neden geçersiz/geçerli olduğunu tam cümleyle açıklar |
| **Prosedür** | Hedef/bağlam cümlesi + numaralı adımlar + beklenen sonuç; adımlar kısa kalır (yoğunluk artırma yok) |
| **Uyarı** | 4 bileşen (sinyal + tehlike + sonuç + önlem) — bkz. A.5 |
| **Tablo/veri** | Başlıklı sütunlar; her satır eksiksiz doldurulur, `[EKSİK]` işaretlenir |

**Kural:** Bir açıklayıcı maddeyi **tek cümleyle** geçiştirmek anti-pattern'dir (A.7). Her madde en az "ne + neden + koşul/sonuç" taşımalı.

### E.3 Zenginleştirme sorusu

Her açıklayıcı alt bölümü yazdıktan sonra şunu kontrol et: *"Konuyu hiç bilmeyen nitelikli bir teknisyen bunu okuyunca 'neden, ne zaman, nasıl, ya olmazsa' sorularının hepsine cevap alıyor mu?"* Cevap "hayır" ise bölüm eksiktir; paragrafı derinleştir.

---

## BÖLÜM F: ALTIN STANDART ÖRNEK (HEDEF YOĞUNLUK — BİREBİR BU SEVİYEDE YAZ)

Aşağıdaki metin, üretilecek açıklayıcı/yasal bölümler için **referans kalite seviyesidir.** Cümle uzunluğu, paragraf yoğunluğu, gerekçe derinliği ve maddeleme üslubu bu örnekle **aynı düzeyde** olmalıdır. Kısa/telgraf üslubu bu örnekle kıyaslandığında yetersiz sayılır. (Not: Bu bir *kalite kalıbıdır*; içindeki makineye özel değerleri kopyalama, ilgili projenin DATA dosyasından türet.)

```markdown
# 1.1 Kılavuz Hakkında

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

## 1.1.2 Kılavuzun Geçerliliği, Güncelliği ve Doküman Kontrolü

Bu kılavuzda yer alan metinler, teknik veriler, teknik resimler, hidrolik/pnömatik şemalar ve elektrik devre diyagramları, makinenin üretildiği ve son kalite kontrol (QC) testlerinden geçerek fabrikadan sevk edildiği tarihteki fiziksel donanım ve yazılım konfigürasyonunu ("As-Built" durumunu) yansıtmaktadır.

* **Versiyon Kontrolü:** Kılavuzun her bir sayfası veya kapağı, benzersiz bir doküman revizyon numarası ve yayın tarihi taşır. Makineye özel konfigürasyonlar (özel ölçüler, opsiyonel donanımlar) ekler (Appendix) bölümünde ayrıca belirtilmiştir.
* **Değişiklik Hakkı:** Üretici firma, AR-GE faaliyetleri ve sürekli ürün iyileştirme politikası doğrultusunda, daha önce teslim edilmiş makineler üzerinde geriye dönük herhangi bir revizyon yapma yükümlülüğü olmaksızın, makinenin mekanik/elektronik tasarımında ve bu dokümantasyonun içeriğinde önceden haber vermeksizin değişiklik yapma hakkını tamamen saklı tutar.

## 1.1.3 Hedef Kitle, Personel Kalifikasyonu ve Sorumluluk Dağılımı

Endüstriyel yıkama makineleri; yüksek voltaj, sıcak su, basınçlı sistemler, kimyasal solüsyonlar ve hareketli mekanik parçalar içerdiğinden, makineye müdahale edecek personelin yetkinliği kritik bir iş güvenliği unsurudur. İşveren (makineyi işleten kurum), personelin aşağıdaki yetki matrisine uygun olarak görevlendirilmesinden tek başına sorumludur:

1. **Operatör:**
   * **Yetkisi:** Makinenin günlük çalıştırılması, parçaların yüklenmesi ve boşaltılması, standart HMI arayüzü üzerinden mevcut yıkama reçetelerinin seçilmesi ve başlatılması/durdurulması.
   * **Gereksinim:** İşveren tarafından makine işleyişi ve acil durdurma prosedürleri hakkında eğitilmiş olmalıdır. Operatörün makine muhafazalarını (kapaklarını) alet kullanarak sökmesi, elektrik panosunu açması veya parametre ayarlarına müdahale etmesi kesinlikle yasaktır.
2. **Bakım Personeli (Mekanik / Pnömatik / Elektrik):**
   * **Yetkisi:** Kılavuzda belirtilen periyodik bakım adımlarının uygulanması, aşınan parçaların (filtreler, contalar vb.) değiştirilmesi, sensör ayarlamaları ve temel arıza tespiti.
   * **Gereksinim:** İlgili mühendislik veya teknik meslek alanlarında diploma/sertifika sahibi olmalıdır. Tehlikeli enerjinin kontrolü (LOTO) prosedürlerine eksiksiz hakim olmalı ve bakım sırasında uygun KKD kullanmalıdır. Elektrik personeli, yürürlükteki ulusal elektrik iç tesisleri yönetmeliklerine göre yetkilendirilmiş olmalıdır.
3. **Üretici Yetkili Servis Uzmanı:**
   * **Yetkisi:** PLC yazılım mimarisine, sürücü parametrelerine, HMI gizli (şifreli) mühendislik menülerine erişim, ana motor/pompa değişimleri ve majör konstrüksiyon revizyonları.
   * **Gereksinim:** Yalnızca üretici firma tarafından özel olarak eğitilmiş, sertifikalandırılmış ve güncel yetki belgesine sahip personeldir.

## 1.1.5 Amacına Uygun Kullanım, Sorumluluk Sınırlandırması ve Garanti İptali

Üretici firma, makinenin tasarımını ve imalatını kabul görmüş iyi mühendislik uygulamalarına ve katı güvenlik normlarına göre gerçekleştirmiştir. Makinenin garantisi ve üreticinin yasal sorumluluğu, sistemin yalnızca tasarlandığı "Amacına Uygun Kullanım" (Intended Use) sınırları içerisinde işletilmesi koşuluna bağlıdır.

Aşağıda detaylandırılan (ancak bunlarla sınırlı olmayan) kullanım hataları, yetkisiz müdahaleler ve işletme kusurlarından kaynaklanabilecek doğrudan veya dolaylı personel yaralanmaları, can kayıpları, tesis hasarları, ürün firesi, çevresel kirlilik veya ticari kâr kayıpları durumunda üretici firma hiçbir hukuki, cezai veya mali sorumluluk kabul etmez; bu durumlarda makine **derhal garanti kapsamı dışında** kalır:

* **Kapasite ve Amacı Dışında Kullanım:** Makinenin, teknik plakada ve kılavuzda belirtilen maksimum yük, basınç, sıcaklık ve döngü kapasitesi sınırlarının üzerinde zorlanarak çalıştırılması.
* **Güvenlik İhlalleri:** Acil durdurma butonları, kapı emniyet şalterleri (interlock), güvenlik röleleri veya limit sensörleri gibi hayati komponentlerin sökülmesi, baypas edilmesi veya işlevsiz hale getirilmesi.
* **Yetkisiz Modifikasyonlar:** Üretici firmanın yazılı onayı olmaksızın makine konstrüksiyonu, borulama, elektrik panosu veya PLC/HMI yazılımı üzerinde değişiklik yapılması.
* **Kimyasal ve Malzeme Uyumsuzluğu:** Üretici tarafından onaylanmamış ağır asidik, yüksek kostik veya solvent bazlı kimyasalların kullanılması (galvaniz tabakasını çözecek ajanlar mekanik garantiyi geçersiz kılar).
```

**Bu örnekten çıkarılacak kalite dersleri:**
1. Her alt bölüm bir **bağlam paragrafıyla** açılır, sonra maddelere iner.
2. Her madde **etiket + tam açıklama** taşır (sadece anahtar kelime değil).
3. Yasal metinde **gerekçe ve sonuç** (neyin neden geçersiz olduğu) tam cümleyle verilir.
4. Kısaltmalar ilk geçişte açılır (LOTO, HMI, QC, As-Built).
5. Makineye özel değerler somuttur; bilinmiyorsa `[EKSİK]`.

