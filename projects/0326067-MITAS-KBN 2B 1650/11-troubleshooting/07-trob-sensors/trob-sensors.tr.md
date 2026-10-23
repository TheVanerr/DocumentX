# 11.5 Sensör arızaları

## 11.5.1 Sensörlerin kontrol yöntemi

Sensörlerin listesi ve PLC adresleri **Bkz. Bölüm 3.3.7**. Çoğu sensörün durumu operatör panelinin Manuel Sayfası'ndaki GİRİŞ GÖZLEM lambalarından izlenir (**Bkz. Bölüm 11.1.3**). Bir sensör arızasından şüphelenildiğinde önce sensörün algıladığı fiziksel durumu (sıvı seviyesi, kapı konumu, vana konumu, sepet konumu) gözle kontrol edin, sonra lambayla karşılaştırın:

- Fiziksel durum ve lamba uyumluysa sensör çalışıyordur; arıza başka yerdedir.
- Fiziksel durum doğru, lamba yanlışsa sensör kirli, ayarı bozuk, kablosu hasarlı veya arızalıdır.

Sensör kablosunu sökmeden veya sensörü değiştirmeden önce LOTO uygulayın. Değiştirilen sensörün tipi aynı olmalıdır (**Bkz. Bölüm 13.3**).

## 11.5.2 Seviye sensörleri

Tablo: Seviye sensörü arızaları

| Belirti | Olası neden | Yapılacak |
|---|---|---|
| Tankta sıvı var ama alt seviye lambası kırmızı | Çatallar kirli, kireçli veya çatallarda yağ birikmiş | Çatalları temizleyin (**Bkz. Bölüm 9.1.19**) |
| | Sıvı seviyesi sensörün hemen üstünde; köpük | Tankı tamamlayın; köpüğü giderin |
| | Kablo veya bağlantı arızası | Elektrikçiye kontrol ettirin |
| | Sensör arızalı | Sensörü değiştirin |
| Tank boş ama lamba yeşil | Çatallar arasında katı birikinti var | Çatalları temizleyin |
| | Sensör arızalı | Sensörü değiştirin; değiştirilene kadar pompayı ve ısıtıcıyı kuru çalışmaya karşı izleyin |

## 11.5.3 Sıcaklık ölçümü (termokupllar)

Tablo: Sıcaklık ölçümü arızaları

| Belirti | Olası neden | Yapılacak |
|---|---|---|
| **Anlık Sıcaklık** değişmiyor, çok yüksek veya anlamsız bir değer gösteriyor | Termokupl kopuk veya kablosu hasarlı | Termokuplu ve kablosunu kontrol ettirin; değiştirin |
| | Termokupl giriş ünitesi arızası | Elektrikçiye ve üreticiye başvurun |
| Panel değeri referans termometreden 3 °C'den fazla farklı | Termokupl yanlış konumda veya kalitesi düşmüş | Termokuplun tank içinde sıvıya daldığını kontrol edin; gerekirse değiştirin |
| Tank set değerinin üzerinde ısınıyor | Kontaktör kontağı yapışmış | **Hazırlık**'ı kapatın; elektrikçiye kontrol ettirin (**Bkz. Bölüm 11.3.7**) |

## 11.5.4 Sepet konum sensörü

Sepet konum sensörü sepetin başlangıç konumunu algılar. Sensör algılamazsa çevrim sonunda sepet yavaş dönmeye devam eder ve çevrim bitmez.

1. Sepet dönerken Manuel Sayfası'nda **Redüktör Pozisyon Sw** lambasının her turda bir kez yeşil olup olmadığını izleyin.
2. Lamba hiç yeşil olmuyorsa **STOP**'a basın ve sepetin durmasını bekleyin; durmuyorsa acil durdurma butonuna basın.
3. LOTO uygulayın.
4. Sensör düzeneğini ve sepet üzerindeki tetik parçasını mekanik hasar, kir ve talaşa karşı kontrol edin.
5. Sensörün mesafesini kontrol edin ve ayarlayın (**Bkz. Bölüm 6.1.2**).
6. Sensör kablosunu ve konnektörünü kontrol edin.
7. Sensör hâlâ algılamıyorsa sensörü değiştirin.
8. LOTO'yu kaldırın ve **Sepet Test** ile sepetin başlangıç konumunda durduğunu kontrol edin.

## 11.5.5 Kapı kapalı sviçi

1. Kapıyı tam kapatın ve Manuel Sayfası'nda **Kapak Kapalı** lambasına bakın.
2. Lamba yeşil olmuyorsa kapının gerçekten tam kapandığını, kapı ile çerçeve arasında cisim olmadığını kontrol edin.
3. LOTO uygulayın.
4. Sviçin ve karşılık sacının yerinde ve sağlam olduğunu kontrol edin.
5. Sviç ayarını yapın (**Bkz. Bölüm 6.1.6**).
6. Sviç kablosunu kontrol edin; arızalı sviçi aynı tiple değiştirin.
7. Değişim veya ayardan sonra kapı kapalı sviçi testini yapın (**Bkz. Bölüm 5.4.4**).

## 11.5.6 Tahliye vanası konum sensörleri

Tablo: Tahliye vanası sensör arızaları

| Belirti | Olası neden | Yapılacak |
|---|---|---|
| Vana konumunda ama lamba yanmıyor | Sensör silindir kanalında kaymış | Sensörü ayarlayın (**Bkz. Bölüm 6.1.7**) |
| | Kablo hasarlı | Kabloyu kontrol edin |
| Açık ve Kapalı lambaları birlikte yeşil | Sensörlerden biri arızalı veya yanlış konumda | Sensörü ayarlayın veya değiştirin |
| Lamba titreşiyor | Sensör kanalın ucunda, sınırda | Sensörü konum yönünde 2 mm kaydırın |

## 11.5.7 Işık perdesi

Tablo: Işık perdesi arızaları

| Belirti | Olası neden | Yapılacak |
|---|---|---|
| Kapı kapatılamıyor; açıklık boş | Ön camlar kirli veya ıslak | Camları temizleyin (**Bkz. Bölüm 10.1.5**) |
| | Verici ve alıcı hizası bozuk | Hizalayın (**Bkz. Bölüm 6.2.2**) |
| | Kablo veya konnektör hasarlı | Elektrikçiye kontrol ettirin |
| | Işık perdesi arızalı (durum göstergesi arıza bildiriyor) | Işık perdesi üreticisinin kılavuzuna göre kontrol ettirin; aynı tiple değiştirin |
| Kapı, açıklıkta cisim varken kapanmaya devam ediyor | Işık perdesi fonksiyonu kaybolmuş | Makineyi hemen kullanım dışı bırakın; kapıyı kullanmayın ve yetkili personele bildirin |

## 11.5.8 Hava basınç şalteri

1. Manometrede çalışma basıncı okunduğu halde Error-235 sürüyorsa basınç şalterinin ayar değerini kontrol edin (**Bkz. Bölüm 6.2.3**).
2. Şalterin kablosunu ve konnektörünü kontrol ettirin.
3. Şalter, basınç ayar değerinde anahtarlamıyorsa şalteri değiştirin.
4. Hava kesildiğinde Error-235 çıkmıyorsa şalter arızalıdır; şalteri değiştirin ve testi tekrarlayın (**Bkz. Bölüm 5.4.8**).
