# 11.2 Genel arızalar

Bu bölümdeki tablolar belirtiye göre düzenlenmiştir. Bir belirtinin birden fazla olası nedeni varsa nedenleri tablodaki sırayla kontrol edin.

## 11.2.1 Çevrim ve kumanda

Tablo: Çevrim ve kumanda arızaları

| Belirti | Olası neden | Yapılacak |
|---|---|---|
| **START**'a basıldığında çevrim başlamıyor | Kapı tam kapalı değil | Kapıyı kapatın (Error-422) |
| | Tanklar set sıcaklığında değil | **Hazırlık**'ı açın ve ısınmayı bekleyin (Error-150 / Error-151) |
| | Aktif seçili tankta sıvı pompa seviyesinin altında (mesaj çıkmaz) | Manuel Sayfası'nda alt seviye lambalarına bakın; tankı tamamlayın |
| | Acil durdurma butonu basılı veya güvenlik rölesi resetlenmemiş | Butonu bırakın, **RESET**'e basın (Error-229) |
| | Üç faz da Pasif | En az bir fazı Aktif yapın |
| | Makine zaten çevrimde | Kule lambasını kontrol edin |
| | **START** butonu veya kablosu arızalı | Manuel Sayfası'nda **Start Buton** lambası butona basınca yeşil olmalı; olmuyorsa elektrikçiye bildirin |
| **START**'a basınca makine hemen **Sistem Duruyor**'a geçiyor | **STOP** butonu basılı kalmış veya STOP devresi açık | Manuel Sayfası'nda **Stop Buton** lambası normalde yeşil olmalı; kırmızıysa butonu ve kablosunu kontrol ettirin |
| Faz başladı ama pompa çalışmıyor, **Kalan Süre** azalmıyor | Basınçlı hava yok; tahliye vanaları konum alamıyor | Havayı açın (Error-235) |
| | Vana konumuna gelmiyor | Vana alarmlarına bakın (**Bkz. Bölüm 11.4.2**) |
| | Tankta sıvı pompa seviyesinin altında | Tankı tamamlayın (Error-200 / Error-202) |
| **Kalan Süre** azalıyor ama sıvı basılmıyor | Pompa motor koruması atmış | **STOP**'a basın; motor koruma şalterini kontrol ettirin (Error-100 / Error-101) |
| | Pompa emişi tıkalı veya tank çıkış vanası kapalı | Emiş filtresini ve vanayı kontrol edin |
| | Pompa hava emiyor (köpük, düşük seviye) | Seviyeyi ve kimyasalı kontrol edin |
| **STOP**'a basıldı ama makine hemen durmadı | Normal davranış: **STOP** kontrollü duruş yapar | Kule lambası sarı yanana kadar bekleyin; anında durdurmak için acil durdurmayı kullanın |
| **Sepet Test** çalışmıyor | Makine çevrimde | Çevrimin bitmesini bekleyin |
| | Buton basılı tutulmuyor | Butonu basılı tutun |
| | Acil durdurma basılı veya sürücü arızası | Error-229 ve Error-126'yı kontrol edin |
| Manuel butonlar çalışmıyor | **MANUEL KONTROL** anahtarı kapalı | Anahtarı açın |
| | Makine çevrimde | Çevrimin bitmesini bekleyin |
| | Tahliye vanaları için hava yok | Havayı açın |
| Reçetede değiştirilen değerler makinede uygulanmıyor | **Reçete Onay**'a basılmamış | **Reçete Onay**'a basın |
| | Yanlış reçete seçili | Reçete adını kontrol edin |
| Acil durdurma veya enerji kesintisinden sonra seçimler kayboldu | Normal davranış | **Hazırlık**, faz seçimleri ve yağ sıyırıcıyı yeniden yapın |
| Kabin lambası kendiliğinden sönüyor | Normal davranış: lamba 60 saniye sonra söner | **LAMBA**'ya yeniden basın |
| Kurulum Sayfası açılmıyor | Yetkili kullanıcı şifresi gerekir | Şifreyi yetkili kişiden alın |
| Operatör paneli kapalı | Enerji yok, 24 V güç kaynağı veya sigorta arızası | **Bkz. Bölüm 11.3.7** |

## 11.2.2 Yıkama ve durulama sonucu

Tablo: Yıkama kalitesi sorunları

| Belirti | Olası neden | Yapılacak |
|---|---|---|
| Parçalar kirli çıkıyor | Yıkama süresi veya sıcaklığı yetersiz | Reçeteyi kontrol edin; **Reçete Onay**'ı unutmayın (**Bkz. Bölüm 8.2.1**) |
| | Kimyasal derişimi düşük veya sıvı kirli | Derişimi ölçün; sıvıyı değiştirin (**Bkz. Bölüm 7.6.9 ve 9.1.9**) |
| | Parçalar üst üste yığılmış; püskürtme ulaşmıyor | Yerleştirmeyi düzeltin (**Bkz. Bölüm 8.2.3**) |
| | Memeler tıkalı | Memeleri temizleyin (**Bkz. Bölüm 9.1.11**) |
| | Torba filtre tıkalı; basınç düşük | Torbayı temizleyin veya değiştirin (**Bkz. Bölüm 9.1.8**) |
| | Pompa motor koruması atmış; faz pompasız geçmiş | Alarm geçmişine bakın (Error-100 / Error-101) |
| Parçalarda yağlı film kalıyor | Tank yüzeyinde yağ tabakası | Yağ sıyırıcıyı çalıştırın; diski temizleyin (**Bkz. Bölüm 9.1.10**) |
| Parçalarda leke veya kimyasal kalıntısı | Durulama yetersiz veya durulama tankı kirli | Durulama süresini artırın; durulama sıvısını değiştirin |
| | Yıkama sıvısı durulama tankına geçiyor | Geçiş süresini artırın; tahliye vanası sızdırmazlığını kontrol edin (**Bkz. Bölüm 9.1.16**) |
| Kabinde ve tankta köpük | Kimyasal derişimi yüksek veya kimyasal köpüklü | Derişimi düşürün; düşük köpüklü kimyasal kullanın |
| | Parçalardan gelen yağ ve kir köpürüyor | Sıvıyı değiştirin; köpük önleyici için tedarikçiye danışın |
| Parçalarda talaş kalıyor | Ön filtre sepetleri dolu veya yırtık | Sepetleri temizleyin veya değiştirin |
| | Parçaların cepleri yukarı bakıyor | Yerleştirmeyi düzeltin |

## 11.2.3 Kurutma

Tablo: Kurutma sorunları

| Belirti | Olası neden | Yapılacak |
|---|---|---|
| Parçalar ıslak çıkıyor | Kurutma Pasif, süre veya sıcaklık yetersiz | Reçeteyi kontrol edin |
| | Kurutma fanı çalışmıyor; motor koruması atmış | Error-111'i kontrol edin; fan çalışmazsa ısıtıcı da çalışmaz |
| | Kurutma ısıtıcısı çalışmıyor | Kurutma sırasında KURUTMA panelindeki **Anlık Sıcaklık** yükselmiyorsa F14, K9 ve F4'ü kontrol ettirin (Error-172) |
| | Egzoz çalışmıyor; nem kabinde kalıyor | Egzoz çalışma süresini kontrol edin; Error-110 |
| | Parçaların cepleri sıvı tutuyor | Yerleştirmeyi düzeltin; geçiş süresini artırın |
| Egzoz fanı çalışmıyor | Kurutma fazı değil | Normal: egzoz yalnızca kurutmada çalışır |
| | Egzoz çalışma süresi 0 | Ayar Sayfası'nda süreyi girin |
| | Bekleme süresinde | Bekleme süresi kadar bekleyin |
| | Motor koruması atmış | Error-110 |

## 11.2.4 Sepet ve tahrik

Tablo: Sepet ve tahrik arızaları

| Belirti | Olası neden | Yapılacak |
|---|---|---|
| Çevrim sonunda sepet durmuyor, çevrim bitmiyor | Sepet konum sensörü algılamıyor | **Bkz. Bölüm 11.5.4** |
| | Sepet motoru sürücüsü arızası | Error-126 (**Bkz. Bölüm 11.3.3**) |
| Sepet dönmüyor | Sürücü arızası | Error-126 |
| | Sepet sıkışmış veya aşırı yüklü | **STOP**'a basın; LOTO altında sepeti ve yükü kontrol edin |
| | Pinyon kırık, kama çıkmış | **Bkz. Bölüm 9.1.14** |
| Sepet takırtılı veya sarsıntılı dönüyor | Yataklama tekeri aşınmış veya kırık | **Bkz. Bölüm 9.1.12** |
| | Sepet göbeğinde boşluk | Göbek yatağını kontrol ettirin |
| | Pinyon–kremayer kavraması bozuk | **Bkz. Bölüm 6.1.3** |
| | Makine terazide değil | **Bkz. Bölüm 5.2.2** |
| Kabin tabanında POM tozu | Teker veya göbek aşınması | Tekerleri ve göbeği kontrol edin |
| Redüktörde yağ izi | Redüktör keçe kaçağı | Redüktörü kontrol ettirin; yağ seviyesini kontrol edin |

## 11.2.5 Kabin kapısı

Kapı hareket arızaları **Bkz. Bölüm 11.4.3**.

## 11.2.6 Tanklar, pompalar ve sızıntılar

Tablo: Tank, pompa ve sızıntı arızaları

| Belirti | Olası neden | Yapılacak |
|---|---|---|
| Tanklar ısınmıyor; hep **Tanklar Hazırlanıyor** yazıyor | **Hazırlık** kapalı | **Hazırlık**'ı açın |
| | Set değeri 0 veya yanlış | Reçeteyi seçip **Reçete Onay**'a basın |
| | Tankta sıvı pompa seviyesinin altında | Tankı tamamlayın |
| | Sıcaklık set değerine 3 °C'den yakın | Normal: sıcaklık biraz düşünce ısıtma başlar |
| | **Anlık Sıcaklık** değişmiyor veya anlamsız | Termokuplu kontrol ettirin (**Bkz. Bölüm 11.5.3**) |
| | Isıtıcı sigortası, kontaktörü veya kaçak akım rölesi | Elektrikçiye kontrol ettirin (Error-170, 171, 172) |
| | Bir tank Pasif ve boş | Pasif tankın sıcaklığı **START** için beklenmez; çevrimi başlatabilirsiniz |
| Isınma süresi zamanla uzuyor | Isıtıcılarda kireç veya tortu | Isıtıcıları temizleyin (**Bkz. Bölüm 9.1.18**) |
| | Bir ısıtıcı elemanı arızalı | Isıtıcı akımını ölçtürün |
| Tank seviyesi hızlı düşüyor | Sızıntı | Tank, bağlantı ve pompaları kontrol edin |
| | Parçalarla taşınan sıvı fazla | Geçiş süresini artırın; cepli parçaların yerleşimini düzeltin |
| | Taşma hattından taşıyor | Diğer tankın seviyesini kontrol edin |
| Bir tankın seviyesi yükselirken diğerininki düşüyor | Tahliye vanası sızdırıyor | **Bkz. Bölüm 9.1.16** |
| Pompa çakıl sesi veriyor | Pompa hava veya buhar emiyor (düşük seviye, köpük, tıkalı emiş) | Seviye, köpük ve emiş filtresini kontrol edin |
| Pompa altında damlama | Mekanik salmastra aşınmış | Salmastrayı değiştirtin (**Bkz. Bölüm 9.1.17**) |
| Torba filtre kapağından sızıntı | Mapalar gevşek veya conta hasarlı | Mapaları eşit sıkın; contayı değiştirin |
| Kabin altında sıvı | Boru bağlantısı, vana veya pompa sızıntısı | Kaynağı bulun; bağlantıyı sıkın veya contayı değiştirin |

## 11.2.7 Drenaj ve yağ sıyırıcı

Tablo: Drenaj ve yağ sıyırıcı arızaları

| Belirti | Olası neden | Yapılacak |
|---|---|---|
| Drenaj pompası çalışmıyor veya hemen duruyor | Makine çevrimde | Drenaj yalnızca çevrim dışında başlar |
| | Tank zaten alt seviyenin altında | Pompa yalnızca drenaj süresi kadar çalışır; süre 0 ise hemen durur |
| | Drenaj pompası motor koruması atmış | Error-106 |
| Pompa çalışıyor ama tank boşalmıyor | Tankın DRENAJ vanası kapalı | Vanayı açın (**Bkz. Bölüm 7.6.3**) |
| | Kolektör veya pompa girişi tıkalı | LOTO altında kolektörü temizleyin |
| | Basma hattı kapalı veya hortum bükülmüş | Basma hattını kontrol edin |
| Yanlış tank boşalıyor | Diğer tankın DRENAJ vanası açık | Vanaları kontrol edin |
| Yağ sıyırıcı çalışmıyor | **YAĞ SIYIRICI** anahtarı Pasif (acil durdurma ve enerji kesintisinden sonra Pasif'e döner) | Anahtarı Aktif yapın |
| | Çalışma süresi 0 | Süreyi girin |
| | Bekleme süresinde | Bekleyin |
| | Motor koruması atmış | Error-130 |
| Yağ sıyırıcı çalışıyor ama yağ toplamıyor | Disk kirli veya sıyırıcı saclar diske değmiyor | **Bkz. Bölüm 9.1.10** |
| | Tank seviyesi diske ulaşmıyor | Tank seviyesini tamamlayın |
