<!-- ÇEVİRİ GEREKLİ → DE | kaynak: TR | bu satırı çeviri bitince silin. Başlık/görsel/tablo yapısını koruyun, yalnızca metni çevirin. -->

# 11.3 ELEKTRİKSEL SORUN GİDERME (ELECTRICAL TROUBLESHOOTING)

Bu bölüm, VDL serisi tamburlu endüstriyel yıkama makinesinde karşılaşılabilecek elektriksel arızaların; güç kaynağı, kontrol devresi, sensörler, sürücüler (invertör), kontaktörler ve kablo hatları bazında sistematik olarak teşhis edilmesi ve giderilmesi süreçlerini kapsar. Elektriksel müdahaleler yalnızca yetkili ve ehliyetli elektrik personeli tarafından yapılmalıdır.

---

## 11.3.1 Güç Kaynağı ve Besleme Hattı Sorunları

Makinenin hiç enerji almaması veya aralıklı enerji kesilmesi durumlarını kapsar.

---

**Belirti:** Makineye enerji verilmesine rağmen hiçbir sistem devreye girmiyor.

**Olası Nedenler:**

- Tesis panosundaki ana sigorta atmış veya faz hattı kopmuş.
- Makineye gelen 3 fazlı besleme hatlarından biri veya birkaçı yok (Faz asimetrisi).
- Makine ana kompakt şalteri (MCB/MCCB) tripping yapmış.
- Toprak (PE) hattı kopmuş veya oksitlenmiş, kaçak akım rölesi (RCD/RCCB) açmış.

**Yapılacak Kontrol ve Çözüm:**

1. Tesis ana panosundan makineye giden sigorta/şalterlerin durumunu kontrol edin; atmış olanları resetleyin.
2. Makine giriş bornesinde L1, L2, L3 fazlarının varlığını ve gerilim dengesini multimetre ile ölçün *(380V ±%10 tolerans).*
3. Makine ana kompakt şalterini "0" konumuna getirip 30 saniye bekleyin, ardından tekrar "1"e alın.
4. Kaçak akım rölesi (RCD) atıyorsa, yük devrelerini tek tek izole ederek kaçak akımın hangi hattan kaynaklandığını tespit edin.

---

**Belirti:** Makine çalışırken rastgele enerji kesintisi yaşanıyor, şalter kendiliğinden açıyor.

**Olası Nedenler:**

- Ana kompakt şalterin termal koruma eşiği aşılıyor (Aşırı akım).
- Besleme kablosunun kesiti yetersiz veya bağlantı noktaları oksitlenmiş/gevşemiş.
- Motor veya invertörde kısa devre.

**Yapılacak Kontrol ve Çözüm:**

1. Makine çalışırken çekilen toplam akımı ampermetre (pensampermetre) ile ölçün. Şalter anma akımını aşıyorsa aşırı yük veya kısa devre araştırın.
2. Tüm kablo bağlantı noktalarını (terminal vidaları) kontrol edip sıkın; oksitlenmiş uçları zımparalayın.
3. Motor sargılarının direncini (Ω) ve izolasyon direncini (MΩ) megger cihazı ile ölçün. Faz-toprak arasında düşük izolasyon direnci kısa devreye işaret eder.

---

## 11.3.2 Kontrol Devresi ve 24V DC Güç Kaynağı Sorunları

PLC, HMI ve çevre birimlerine besleme sağlayan kontrol devresinin arızalarını kapsar.

---

**Belirti:** HMI ekranı açılmıyor, PLC çıkış göstergeleri (LED'ler) yanmıyor.

**Olası Nedenler:**

- Kontrol transformatörü veya SMPS (Anahtarlamalı Güç Kaynağı) arızalanmış.
- 24V DC besleme hattındaki sigorta atmış.
- PLC güç modülü arızalı.

**Yapılacak Kontrol ve Çözüm:**

1. Elektrik panosu içindeki SMPS'nin giriş (230V AC) ve çıkış (24V DC) gerilimlerini multimetre ile ölçün. Çıkış yoksa SMPS'yi değiştirin.
2. 24V DC hattındaki mini sigortayı (genellikle 2A veya 4A) kontrol edin; atmışsa yenisiyle değiştirin.
3. PLC'nin güç modülü üzerindeki "PWR" veya "RUN" LED'inin yandığını doğrulayın. LED yanmıyorsa modül değiştirilmelidir.

---

**Belirti:** PLC çalışıyor ancak bazı çıkışlar (output) tetiklenmiyor.

**Olası Nedenler:**

- İlgili PLC çıkış modülünün veya rölesinin arızalanması.
- Çıkış hattındaki sigorta veya sigorta otomatı atmış.
- PLC programında söz konusu çıkışa ait koşullar sağlanmıyor (Yazılımsal engel).

**Yapılacak Kontrol ve Çözüm:**

1. PLC üzerinde ilgili çıkış kanalının LED'inin yanıp yanmadığını kontrol edin. LED yanıyorsa sorun PLC sonrasındadır; yanmıyorsa PLC programı veya modül arızasıdır.
2. İlgili çıkışa ait sigorta veya otomatı kontrol edin.
3. HMI üzerinden "Zorla Aktifleştir (Force Output)" fonksiyonu ile ilgili çıkışı test edin *(yalnızca yetkili personel tarafından yapılmalıdır).*

---

## 11.3.3 İnvertör (Sürücü / VFD) Arızaları

Tambur motorunun hız kontrolünü sağlayan frekans dönüştürücüsüne ait arızaları kapsar.

---

**Belirti:** İnvertör ekranında hata kodu görünüyor ve motor çalışmıyor.

**Olası Nedenler:**

- **OC (Overcurrent / Aşırı Akım):** Motor sargısında kısa devre, yük çok ağır veya ivmelenme süresi çok kısa ayarlanmış.
- **OL (Overload / Aşırı Yük):** Tambur mekanik olarak sıkışmış veya motor nominal akımının üzerinde sürekli yük çekiyor.
- **OV (Overvoltage / Aşırı Gerilim):** Frenleme sırasında DC bara gerilimi yükseliyor; fren direnci eksik veya yetersiz.
- **OH (Overheat / Aşırı Isınma):** İnvertör soğutma fanı arızalı veya pano havalandırması yetersiz.
- **GF (Ground Fault / Toprak Kaçağı):** Motor veya kablo izolasyonu bozulmuş.

**Yapılacak Kontrol ve Çözüm:**

1. İnvertör ekranındaki hata kodunu not edin ve makine ile birlikte teslim edilen invertör kullanım kılavuzundaki kod açıklamasını inceleyin.
2. Makineyi kapatıp 5 dakika bekleyin (DC bara geriliminin düşmesi için); ardından invertörü resetleyin.
3. OC/OL hatalarında tambur yükünü azaltın ve invertör parametrelerinden ivmelenme süresini *(Accel Time)* artırın.
4. OH hatasında pano kapağını açarak invertör fanının döndüğünü kontrol edin; fan dönmüyorsa değiştirin.
5. GF hatasında motor kablolarını invertörden söküp megger ile izolasyon ölçümü yapın.

---

**Belirti:** Motor çalışıyor ancak hız istenen değere ulaşmıyor veya düzensiz değişiyor.

**Olası Nedenler:**

- İnvertör referans sinyal girişi (Analog 0-10V veya 4-20mA) arızalı veya kablo kopmuş.
- PLC'den gelen hız referansı yanlış parametrelenmiş.
- İnvertör iç PID parametreleri bozulmuş.

**Yapılacak Kontrol ve Çözüm:**

1. İnvertör analog giriş terminalindeki sinyal gerilimini multimetre ile ölçün *(0 rpm = 0V, maksimum rpm = 10V olmalı).*
2. İnvertör parametre listesinden maksimum/minimum frekans, ivmelenme/yavaşlama süreleri ve referans sinyal kaynağı ayarlarını kontrol edin.
3. Parametreler bozulmuşsa fabrika değerlerine sıfırlayıp yeniden devreye alın *(parametre yedeği alınmışsa yedeği yükleyin).*

---

## 11.3.4 Kontaktör ve Röle Arızaları

Isıtıcı, pompa ve valf devrelerini anahtarlayan kontaktör ve rölelerin arızalarını kapsar.

---

**Belirti:** Isıtma devreye girmiyor; kontaktör çekmemiş.

**Olası Nedenler:**

- Kontaktör bobin gerilimi gelmiyor (PLC çıkışı veya kablo arızası).
- Kontaktör bobini açık devre (kopmuş).
- Termik röle atmış.

**Yapılacak Kontrol ve Çözüm:**

1. Kontaktör bobin uçlarındaki gerilimi multimetre ile ölçün *(24V DC veya 230V AC olmalı).* Gerilim geliyorsa kontaktör bobini arızalıdır; değiştirin.
2. Termik rölenin "Reset" butonunun fırlamadığını kontrol edin; fırlamışsa resetleyin ve aşırı akım nedenini araştırın.
3. Kontaktörün ana kontaklarında yanma veya erozyon olup olmadığını görsel olarak kontrol edin; kontaklar ciddi şekilde aşınmışsa kontaktörü değiştirin.

---

**Belirti:** Isıtma sürekli çalışıyor, sıcaklık limitin üzerine çıkıyor.

**Olası Nedenler:**

- Kontaktör ana kontakları yapışmış (kaynak yemiş), bobin deaktif olmasına rağmen güç kesmiyor.
- Termostat veya PT100 sıcaklık sensörü arızalı, PLC'ye hatalı "düşük sıcaklık" sinyali gönderiyor.

**Yapılacak Kontrol ve Çözüm:**

1. PLC ısıtma çıkışını deaktif ettikten sonra kontaktörün bırakıp bırakmadığını gözlemleyin. Bırakmıyorsa kontaktörü acilen değiştirin.
2. PT100 sensör direncini ohmmetre ile ölçün ve sıcaklık-direnç tablosuna göre doğru okuduğunu teyit edin *(0°C = 100Ω, 100°C ≈ 138.5Ω).*

---

## 11.3.5 Sensör ve Geri Besleme Hattı Arızaları

Su seviyesi, sıcaklık, konum ve akış sensörlerinin arızalarını kapsar.

---

**Belirti:** Su seviye sensörü (elektrot/basınç şalteri) doğru sinyal vermiyor.

**Olası Nedenler:**

- Elektrot ucu kireç veya yağ filmiyle kaplanmış, iletkenliği bozulmuş.
- Basınç şalteri ayar noktası kaymış veya diyaframı yırtılmış.
- Sensör bağlantı kablosu oksitlenmiş veya kopmuş.

**Yapılacak Kontrol ve Çözüm:**

1. Elektrot uçlarını söküp zımpara veya asidik temizleyici ile temizleyin; kirlenme kronikleşmişse elektrot grubunu değiştirin.
2. Basınç şalteri set değerini teknik veri sayfasına göre kontrol edin ve gerekirse yeniden ayarlayın.
3. PLC giriş modülündeki ilgili kanalın LED'inin sensör tetiklendiğinde yandığını doğrulayın; yanmıyorsa kabloyu ve bağlantı ucunu kontrol edin.

---

**Belirti:** PT100 sıcaklık sensörü "-50°C" veya "200°C+" gibi uç değerler gösteriyor.

**Olası Nedenler:**

- Sensör kablosu kopmuş veya kısa devre yapmış.
- PLC analog giriş modülündeki PT100 kanalı arızalı.
- Sensörün kendisi fiziksel olarak hasar görmüş.

**Yapılacak Kontrol ve Çözüm:**

1. Sensörü devreden çıkarıp uçları arasındaki direnci oda sıcaklığında ölçün *(yaklaşık 108-112Ω olmalıdır, ~20°C için).* Farklı bir değer geliyorsa sensör arızalıdır.
2. Sensör kablosunu PLC modülünden söküp yerine bilinen değerde bir referans direnç bağlayarak modülün doğru okuyup okumadığını test edin.
3. Sorun modüldeyse PLC analog giriş kartını değiştirin.

---

**Belirti:** Limit switch (konum sensörü / kapak emniyeti) sinyal vermiyor.

**Olası Nedenler:**

- Switch mekanik olarak ezilmiş veya konum kaymış; baskı parmağı temas etmiyor.
- Switch iç kontakları yanmış veya oksitlenmiş.
- Bağlantı kablosu kopmuş.

**Yapılacak Kontrol ve Çözüm:**

1. Kapak kapalıyken limit switch'in mekanik olarak tetiklendiğini (tık sesi) gözlemleyin; tetiklenmiyorsa konumunu ayarlayın.
2. Switch uçlarında sürekli direnç (NC kontak) veya sürekli açık (NO kontak) ölçüp çalıştığını doğrulayın.
3. Hasar görmüş veya doğru çalışmayan switch'i aynı tip ve anma değerinde yenisiyle değiştirin.

---

## 11.3.6 Elektriksel Sorun Gidermede Genel Güvenlik Kuralları

Tüm elektriksel müdahalelerde aşağıdaki güvenlik kuralları eksiksiz uygulanmalıdır:

- **LOTO (Lockout/Tagout):** Her elektriksel müdahaleden önce makineyi enerjisizleştirin, ana şaltere kilit takın ve **"Bakımda – Enerji Verme"** etiketi asın.
- **Gerilim Altında Ölçüm:** Yalnızca zorunlu hallerde ve yalıtımlı eldiven ile yalıtımlı problu multimetre kullanılarak gerilim altında ölçüm yapılabilir.
- **Kapasitör Deşarjı:** İnvertör veya güç elektroniği üzerinde çalışmadan önce DC bara kapasitörlerinin tamamen deşarj olması için güç kesildikten sonra en az **5 dakika** bekleyin.
- **Tek Elle Çalışma:** Elektriksel ölçümlerde mümkün olduğunca tek el kullanın; diğer eli cihaz gövdesine veya iletken yüzeylere değdirmeyin.
- **Yetkisiz Müdahale Yasağı:** Elektrik panosu içine yalnızca yetkili ve ehliyetli elektrik teknisyenleri müdahale edebilir.

---

> ⚠️ **DİKKAT:** Bu bölümde tanımlanmayan veya müdahale sonrası tekrarlayan elektriksel arızalarda makineyi zorla çalıştırmaya çalışmayın. Yangın, elektrik çarpması veya makine hasarı riski oluşabilir. Derhal **CNK ELEKTRONİK / DOLFIN MAKİNE** teknik servisini arayarak arıza kodunu, belirtileri ve yapılan kontrolleri bildirin.