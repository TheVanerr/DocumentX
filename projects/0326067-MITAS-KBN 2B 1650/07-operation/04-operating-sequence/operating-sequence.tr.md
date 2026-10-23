# 7.4 Çalışma sırası (otomatik çevrim)

## 7.4.1 Çevrimin akışı

Bir çevrim en fazla üç işlem fazından oluşur: yıkama, durulama ve kurutma. Fazların sırası değişmez; Çalışma Sayfası'nda Pasif seçilen faz atlanır ve çevrim Aktif olan ilk fazla başlar. Sepet çevrim boyunca döner. Yıkamadan ve durulamadan sonra pompa durur ve geçiş süresi kadar parçaların süzülmesi beklenir. Kurutmadan sonra ısıtıcı fanla soğutulur. Son olarak sepet yavaşça başlangıç konumuna getirilir ve çevrim tamamlanır.

Çevrimin akışı: {{MAKINE_TANIMI:Proses akışı özeti (adım adım)}}.

Tablo: Çevrim adımları

| Adım | Durum penceresi | Ne olur | Süre |
|---|---|---|---|
| Hazırlık | Tanklar Hazırlanıyor / Tanklar Hazır | Tank ısıtıcıları sıvıyı set sıcaklığına ısıtır | Isınma süresi |
| START | — | Başlama şartları kontrol edilir; sepet normal hızda dönmeye başlar; kule lambası yeşil yanar; Aktif/Pasif anahtarları gizlenir, manuel kumanda kapanır | — |
| Yıkama | Yıkama | Tahliye vanaları yıkama konumuna alınır; vanalar konumuna gelince yıkama pompası sıvıyı parçalara basar | Yıkama süresi (yalnızca pompa çalışırken sayılır) |
| Geçiş 1 | Geçiş 1 | Pompa durur, sepet döner, parçalar süzülür | Geçiş süresi |
| Durulama | Durulama | Tahliye vanaları durulama konumuna alınır; durulama pompası sıvıyı parçalara basar | Durulama süresi (yalnızca pompa çalışırken sayılır) |
| Geçiş 2 | Geçiş 2 | Pompa durur, sepet döner, parçalar süzülür | Geçiş süresi |
| Kurutma | Kurutma | Kurutma fanı ve ısıtıcısı sıcak hava verir; egzoz fanı aralıklı çalışır | Kurutma süresi |
| Rezistans soğutma | Rezistans Soğutma | Kurutma ısıtıcısı kapanır, fan ısıtıcıyı soğutur | {{KONTROL_SABITLERI:Rezistans soğutma süresi#1}} |
| Sepet konumlama | — | Sepet yavaş hızda döner ve başlangıç konumunda durur; kule lambası sarıya döner | Sepetin konuma gelme süresi |

Yıkama Pasif seçildiyse Geçiş 1, durulama Pasif seçildiyse Geçiş 2, kurutma Pasif seçildiyse rezistans soğutma adımı yapılmaz.

## 7.4.2 Başlama şartları

**START**'a basıldığında aşağıdaki şartların hepsi kontrol edilir.

Tablo: Başlama şartları

| Şart | Sağlanmazsa |
|---|---|
| **START** butonuna basıldı | Çevrim yalnızca kumanda panelindeki **START** ile başlar |
| Kapı kapalı | Çevrim başlamaz; Error-422 Kapak Kapalı Değil. Kapı kapanınca mesaj kalkar; **START**'a yeniden basın. |
| Yıkama tankında sıvı pompa seviyesinin üzerinde (yıkama Aktif ise) | Çevrim başlamaz, mesaj çıkmaz. Manuel Sayfası'nda **Yıkama Tank Alt Seviye** lambasına bakın. |
| Durulama tankında sıvı pompa seviyesinin üzerinde (durulama Aktif ise) | Çevrim başlamaz, mesaj çıkmaz. Manuel Sayfası'nda **Durulama Tank Alt Seviye** lambasına bakın. |
| Yıkama tankı set sıcaklığında (yıkama Aktif ise) | Çevrim başlamaz; Error-150 Yıkama Tank Sıcaklığı Düşük. Tank ısınınca mesaj kalkar. |
| Durulama tankı set sıcaklığında (durulama Aktif ise) | Çevrim başlamaz; Error-151 Durulama Tank Sıcaklığı Düşük. Tank ısınınca mesaj kalkar. |
| En az bir faz Aktif | Üç faz da Pasif ise **START** bir şey yapmaz |
| Makine çevrimde değil | Çevrim çalışırken **START** çevrimi etkilemez |
| Acil durdurma butonu basılı değil | Makine çalıştırılamaz; Error-229 |
| **STOP** butonu bırakılmış | STOP basılı kalmışsa veya STOP devresi açıksa çevrim başlar başlamaz kontrollü duruşa geçer ve **Sistem Duruyor** yazar |

**ÖNEMLİ:** Başlarken basınçlı hava kontrol edilmez. Hava yoksa tahliye vanaları konum alamaz ve pompa çalışmaz; çevrimden önce havanın açık olduğundan emin olun.

## 7.4.3 Durum penceresi mesajları

Tablo: Durum penceresi mesajları

| Ekranda yazan | Anlamı |
|---|---|
| Tanklar Hazır Değil | **Hazırlık** kapalı ve tanklardan en az biri set sıcaklığında değil; ısıtma yapılmıyor |
| Tanklar Hazırlanıyor | **Hazırlık** açık; tanklar set sıcaklığına ısıtılıyor |
| Tanklar Hazır | Yıkama ve durulama tankları set sıcaklığında; çevrim başlatılabilir |
| Yıkama | Yıkama fazı çalışıyor |
| Geçiş 1 | Yıkamadan sonraki süzülme |
| Durulama | Durulama fazı çalışıyor |
| Geçiş 2 | Durulamadan sonraki süzülme |
| Kurutma | Kurutma fazı çalışıyor: fan ve ısıtıcı sıcak hava veriyor, egzoz aralıklı çalışıyor |
| Rezistans Soğutma | Kurutma süresi doldu; ısıtıcı kapalı, fan ısıtıcıyı soğutuyor |
| Sistem Duruyor | Çevrim sırasında **STOP**'a basıldı; makine kontrollü duruyor; çevrim bitince yazı kaybolur |

## 7.4.4 Tank ısıtma mantığı

- Isıtıcı, tank sıcaklığı **Sıcaklık Set Değeri**'nin {{KONTROL_SABITLERI:Tank ısıtıcısı devreye girme farkı#1}} altına düştüğünde devreye girer ve set değerine ulaşınca kapanır. Tank sıcaklığı set değeri ile set − 3 °C arasında tutulur. Sıcaklık set değerine 3 °C'den yakınsa ısıtıcı hemen çalışmaz.
- Tankta sıvı pompa seviyesinin altındaysa o tankın ısıtıcısı çalışmaz.
- Tank set sıcaklığına ulaşınca "hazır" sayılır. Makine çevrimde değilken sıcaklık set − 3 °C'nin altına düşerse hazır durumu kalkar ve tankın yeniden ısınması beklenir. Çevrim sırasında sıcaklık düşse de çevrim durmaz.
- **Hazırlık** kapatılırsa ısıtma hemen durur; çevrim çalışırken de.
- **Hazırlık** kapatıldıktan sonra tanklar henüz sıcakken durum penceresi **Tanklar Hazır** göstermeye devam edebilir.
- Durum penceresi her iki tankı da dikkate alır. Bir faz Pasif seçiliyse **START** o tankın sıcaklığını ve seviyesini beklemez; pencere **Tanklar Hazırlanıyor** gösterse de çevrim başlatılabilir.

## 7.4.5 Yıkama ve durulama fazları

İki pnömatik tahliye vanası, kabinden dönen sıvıyı o anki fazın tankına yönlendirir.

- Yıkamada yıkama tahliye vanası açılır, durulama tahliye vanası kapanır. Durulamada tersi yapılır.
- Pompa, iki vana da doğru konumdayken (konum sensörleri algılarken) ve tankta sıvı pompa seviyesinin üzerindeyken çalışır. Bu şartlardan biri kaybolursa pompa hemen durur; şart düzelince kendiliğinden yeniden çalışır.
- Faz süresi dakika olarak ve yalnızca pompa çalışırken sayılır. Pompa durduğu sürece **Kalan Süre** azalmaz ve faz bitmez.
- Vana {{KONTROL_SABITLERI:Tahliye vanası konum izleme süresi#1}} içinde istenen konuma gelmezse vana alarmı çıkar (Error-322, 323, 325 veya 326).
- Faz boyunca tank ısıtıcısı, **Hazırlık** açıksa sıcaklığı korumaya devam eder.
- Süre dolunca pompa durur ve geçiş başlar.

## 7.4.6 Geçiş (süzülme)

Yıkama ile durulama arasında ve durulama ile kurutma arasında, Kurulum Sayfası'ndaki **Geçiş Süresi** ({{RECETE_PARAMETRELERI:P09 Geçiş süresi#3}} saniye) kadar beklenir. Bu sürede pompalar durur, sepet dönmeye devam eder ve parçalar üzerindeki sıvı süzülür. Böylece yıkama sıvısının durulama tankına taşınması azalır. Geçiş süresi reçeteye bağlı değildir.

## 7.4.7 Kurutma ve rezistans soğutma

- Kurutma başlayınca kurutma fanı çalışır. Fan çalışırken kurutma ısıtıcısı, hava sıcaklığı **Kurutma Sıcaklık Set Değeri**'nin altındayken çalışır ve set değerine ulaşınca kapanır.
- Kurutma fanının motor koruması atmışsa (Error-111) kurutma ısıtıcısı çalışmaz.
- Kurutma süresi faz başladığı andan itibaren sayılır.
- Egzoz fanı yalnızca kurutma fazında çalışır: önce **Çalışma Süresi** kadar çalışır, sonra **Bekleme Süresi** kadar durur; bu döngü kurutma bitene kadar tekrarlanır. Çalışma süresi 0 ise egzoz çalışmaz; bekleme süresi 0 ise kurutma boyunca sürekli çalışır.
- Kurutma süresi dolunca ısıtıcı kapanır ve fan, ısıtıcıyı soğutmak için {{KONTROL_SABITLERI:Rezistans soğutma süresi#1}} daha çalışır. Ardından fan durur.

## 7.4.8 Çevrim sonu ve sepet konumlama

Son Aktif faz bitince sepet yavaş hıza geçer ve başlangıç konumuna (sepet konum sensörü) gelince durur. Bu anda çevrim tamamlanır: kule lambası yeşilden sarıya döner ve durum penceresi yeniden tankların durumunu gösterir.

- Sepet konum sensörüne gelmezse çevrim bitmez; sepet yavaş dönmeye devam eder (**Bkz. Bölüm 11.5.4**).
- Tahliye vanaları son fazdaki konumunda kalır; bir sonraki çevrimde istenen konuma kendiliğinden alınır.

## 7.4.9 Kilitlemeler ve korumalar

Tablo: Çevrim içi kilitlemeler

| Eleman | Çalışma şartı |
|---|---|
| Yıkama pompası | Yıkama fazı; yıkama tahliye vanası açık ve durulama tahliye vanası kapalı; yıkama tankında sıvı pompa seviyesinin üzerinde; motor koruma şalteri atmamış |
| Durulama pompası | Durulama fazı; durulama tahliye vanası açık ve yıkama tahliye vanası kapalı; durulama tankında sıvı pompa seviyesinin üzerinde; motor koruma şalteri atmamış |
| Tank ısıtıcıları | **Hazırlık** açık; tankta sıvı pompa seviyesinin üzerinde; sıcaklık set − 3 °C'nin altında; kaçak akım rölesi atmamış |
| Kurutma ısıtıcısı | Kurutma fazı; kurutma fanı çalışıyor ve motor koruması atmamış; hava sıcaklığı set değerinin altında |
| Egzoz fanı | Kurutma fazı; çalışma/bekleme döngüsünün çalışma bölümü |
| Sepet motoru | Çevrim, **Sepet Test** veya konumlama; sürücü arızasız |
| Manuel kumanda | Makine çevrimde değil; **MANUEL KONTROL** açık |
| Drenaj pompası | Makine çevrimde değil; drenaj butonu seçili |

**ÖNEMLİ:** Motor koruma şalteri, kaçak akım rölesi, faz sırası ve sepet sürücüsü arızalarında makine kırmızı lambayı yakar ve mesaj verir, ancak çevrimi kendiliğinden durdurmaz. Örneğin yıkama pompasının motor koruması atarsa PLC pompaya çalışma komutu vermeye devam ettiği için yıkama süresi saymaya devam eder ve parçalar yıkanmadan çevrim ilerleyebilir. Bu mesajlardan biri çevrim sırasında çıkarsa çevrimi **STOP** ile durdurun.
