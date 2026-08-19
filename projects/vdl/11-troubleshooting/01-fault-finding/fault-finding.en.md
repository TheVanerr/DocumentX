<!-- ÇEVİRİ GEREKLİ → EN | kaynak: TR | bu satırı çeviri bitince silin. Başlık/görsel/tablo yapısını koruyun, yalnızca metni çevirin. -->

# 11.1 ARIZA BULMA (FAULT FINDING)

Bu bölüm, makinede meydana gelen arızaların veya operasyonel sapmaların kök nedenlerini (root cause) belirlemek için sistematik bir teşhis sürecini tanımlar. Makine herhangi bir nedenle durduğunda veya beklenmedik bir davranış sergilediğinde, izlenecek adımlar aşağıda **"Belirti → Olası Neden → Yapılacak Kontrol ve Çözüm"** formatında sınıflandırılmıştır.

---

## 11.1.1 Mekanik ve Tahrik Arızaları

Bu alt grup, tamburun dönmemesi, anormal ses çıkarması veya titreşim üretmesi gibi durumlarda izlenecek adımları kapsar.

---

**Belirti: Tambur dönmüyor veya dönüş zayıf/güçsüz gerçekleşiyor.**

**Olası Nedenler:**

- Tambur aşırı yükleme veya dengesiz yükleme (Unbalance) nedeniyle sıkışmış.
- Tahrik kayışları (V-Kayış) kopmuş, gevşemiş veya zamanlama dişlisi atlamış.
- Redüktör veya tambur milinde mekanik tıkanıklık/kilitlenme.
- Motor veya invertör (sürücü) aşırı akım korumasına geçmiş.

**Yapılacak Kontrol ve Çözüm:**

1. Makineyi durdurun ve tambur içindeki malzemeyi hafifleterek dağılımını kontrol edin.
2. Makinenin arka/yan kapağını açıp tahrik kayışlarının ve kasnaklarının durumunu görsel olarak inceleyin. Kopuk veya gevşek kayış varsa değiştirin/gerginliğini ayarlayın.
3. Tamburu elinizle çevirmeyi deneyin. Serbestçe dönmüyorsa mil veya redüktörde mekanik bir kilitlenme olabilir; bu durumda servisi arayın.
4. HMI ekranında **"Motor Overload"** veya **"Inverter Fault"** alarmı varsa yükü azaltın ve enerjiyi kesip tekrar vererek invertörü resetleyin.

---

**Belirti: Makinede yüksek ses veya şiddetli titreşim var.**

**Olası Nedenler:**

- Tambur yatakları (rulmanlar) aşınmış veya hasar görmüş.
- Makinenin montaj ayakları düzgün zemine oturmamış veya ayak seviyeleri bozuk.
- Sıkma (spin) aşamasında aşırı asimetrik (tek taraflı) malzeme yüklemesi.

**Yapılacak Kontrol ve Çözüm:**

1. Makineyi boş ve düşük devirde çalıştırın. Titreşim devam ediyorsa yataklarda veya milden kaynaklı bir sorun olabilir.
2. Ayak bağlantı civatalarının sıkılığını ve zemine tam oturduğunu kontrol edin; gerekirse ayak krankları ile makineyi teraziye alın.
3. Sıkma devrinde titreşim oluşuyorsa malzeme dağılımını tambur içinde dengeleyin.

---

## 11.1.2 Su ve Tahliye Sistemi Arızaları

Su alımı, drenaj ve seviye kontrolü ile ilgili sorunların teşhis edilmesini kapsar.

---

**Belirti: Makine su almıyor veya su seviyesi yeterli miktara ulaşmıyor.**

**Olası Nedenler:**

- Ana su giriş vanası kapalı veya tesisat su basıncı çok düşük.
- Giriş elektrovalfi elektrik sinyali almıyor veya mekanik olarak arızalı/kireçlenmiş.
- Su seviye sensörü (basınç şalteri veya elektrot) kirlenmiş veya arızalı.

**Yapılacak Kontrol ve Çözüm:**

1. Tesisattan makineye giden hattın vanasının tam açık olduğundan ve yeterli su basıncının *(min. 2-3 bar)* mevcut olduğundan emin olun.
2. Giriş hattındaki yalancı (filtre) tıkanmış mı kontrol edin, gerekirse temizleyin.
3. Makine su alırken giriş valfine giden elektrik sinyalini (LED ışığı veya multimetre) kontrol edin. Sinyal geliyorsa valf mekanik arızalıdır; gelmiyorsa PLC çıkışını veya kabloyu kontrol edin.

---

**Belirti: Kirli su tahliye edilmiyor veya tahliye çok yavaş.**

**Olası Nedenler:**

- Tahliye vanası/filtresi üretim talaşı veya çapakla tıkanmış.
- Tahliye pompası *(eğer mevcutsa)* çalışmıyor veya pervanesi dolmuş.
- Tahliye hattında (kanalizasyon tarafında) geri basınç (ters akış) var.

**Yapılacak Kontrol ve Çözüm:**

1. Makineyi durdurun. Tahliye hattındaki filtre sepetini söküp temizleyin.
2. Tahliye vanasının tam açıldığından (pnömatik veya elektrikli) mekanik olarak emin olun.
3. Kanalizasyon borusunun eğimini ve herhangi bir tıkanıklık olup olmadığını kontrol edin.

---

## 11.1.3 Isıtma Sistemi Arızaları

Suyun ısınamaması veya aşırı ısınması gibi durumların teşhis edilmesini kapsar.

---

**Belirti: Su istenen sıcaklığa ulaşmıyor veya hiç ısınmıyor.**

**Olası Nedenler:**

- Isıtıcı rezistans grubu açık (kopuk) durumda.
- Buhar valfi çalışmıyor veya buhar basıncı yetersiz.
- Isıtma kontaktörleri (termik) atmış.
- Sıcaklık sensörü (PT100) arızalı, düşük sıcaklık okuyor.

**Yapılacak Kontrol ve Çözüm:**

1. HMI üzerinden sıcaklık değerini kontrol edin. Sensör sapıyorsa *(-50°C veya +200°C gösteriyorsa)* sensör değiştirilmelidir.
2. Elektrik panosundaki ısıtıcı kontaktörlerinin çekip çekmediğini kontrol edin.
3. Rezistansların uçlarını multimetre ile ölçerek direnç (ohm) değerlerini kontrol edin; açık (sonsuz ohm) ise rezistans değiştirilmelidir.

---

**Belirti: Makine aşırı ısınıyor (Overheat) veya güvenlik limiti açıyor.**

**Olası Nedenler:**

- Isıtma kontaktörü yapışmış (sürekli ısıtmaya devam ediyor).
- PT100 sensörü arızalı (gerçek değerden düşük sıcaklık okuyor).

**Yapılacak Kontrol ve Çözüm:**

1. Isıtma işlemi bittiğinde rezistanslara giden gücün kesilip kesilmediğini multimetre veya ampermetre ile kontrol edin. Güç kesilmiyorsa kontaktör değiştirilmelidir.

---

## 11.1.4 Pnömatik ve Kapak Emniyet Arızaları

Kapak kilitlerinin çalışmaması ve valflerin hareket etmemesi durumlarını kapsar.

---

**Belirti: Tambur kapağı kapanmıyor veya kilitlenmiyor.**

**Olası Nedenler:**

- Sisteme gelen basınçlı hava yetersiz veya pnömatik hatta kaçak var.
- Kapak silindiri mekanik olarak sıkışmış.
- Kapak emniyet limit switch'leri (mikro switch) konumundan kaymış veya arızalı.

**Yapılacak Kontrol ve Çözüm:**

1. Hava haznesindeki basınç göstergesini kontrol edin *(genellikle 6 bar olmalı).*
2. Kapak silindirinin hava giriş/çıkışını manuel olarak test edin (el valfinden).
3. Kapak kapanmadan limit switch'in plastiğe değip değmediğini kontrol edin, konumunu ayarlayın.

---

## 11.1.5 Kontrol (PLC/HMI) ve İletişim Arızaları

Yazılımsal hatalar, sensör okuma kopuklukları ve panel arızalarını kapsar.

---

**Belirti: HMI ekranı donuyor, geç açılıyor veya hiç açılmıyor.**

**Olası Nedenler:**

- HMI ve PLC arasındaki iletişim kablosu (Ethernet/RS485) gevşek veya kopmuş.
- Panel arka aydınlatması ömrünü doldurmuş.
- PLC'de yazılımsal takılma (Watchdog hatası) var.

**Yapılacak Kontrol ve Çözüm:**

1. Makinenin ana elektrik şalterini kapatın, 1 dakika bekleyip tekrar açarak sistemi yeniden başlatın (Reboot).
2. Panel arkasındaki kablo bağlantılarını kontrol edin.
3. Sorun devam ediyorsa PLC programında veya donanımında arıza olabilir; **CNK ELEKTRONİK / DOLFIN MAKİNE** teknik servisi ile iletişime geçin.

---

**Belirti: Makine sürekli "Kapak Açık" veya "Düşük Su" alarmı veriyor (sensör tetiklenmiyor).**

**Olası Nedenler:**

- İlgili sensörün kablosu kopmuş veya oksitlenmiş.
- Sensör fiziksel olarak ıslanmış/kirlenmiş ve yanlış sinyal üretiyor.

**Yapılacak Kontrol ve Çözüm:**

1. İlgili sensörün bağlantı uçlarını multimetre ile kontrol edin.
2. Su seviye sensörü (elektrot) ise temizliğini yapın.

---

> ⚠️ **DİKKAT:** Arıza bulma (Fault Finding) süreçlerinde elektriksel ölçümler yapılırken makinenin tamamen enerjili olması gerekebilir. Bu durumda elektrik panosu içine müdahale ederken iletken aletlerin kullanımına dikkat edilmeli, mutlaka **yalıtımlı eldiven** giyilmeli ve yetkisiz personelin pano içine müdahalesi kesinlikle yasaklanmalıdır. Karşılaştığınız arıza bu listede yer almayan kompleks bir hasarsa, sorunu zorla çözmeye çalışmak makineyi daha büyük hasarlara uğratabilir; bu durumda derhal **profesyonel teknik destek** talep edin.