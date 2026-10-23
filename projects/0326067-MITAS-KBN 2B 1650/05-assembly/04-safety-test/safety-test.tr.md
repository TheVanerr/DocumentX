# 5.4 Güvenlik testleri

Güvenlik fonksiyonları aşağıdaki durumlarda test edilir:

- Makine ilk kez çalıştırılmadan önce (devreye alma).
- Bir güvenlik donanımı onarıldıktan, değiştirildikten veya ayarlandıktan sonra.
- Bölüm 9.1.3'teki bakım planında belirtilen aralıklarla.

Testi geçemeyen güvenlik fonksiyonu varsa makine kullanılmaz; arıza giderilip test tekrarlanana kadar makineye "ARIZALI — KULLANMAYIN" etiketi asılır. Test sonuçları güvenlik fonksiyonları test formuna yazılır (**Bkz. Bölüm 14.1**).

Tablo: Güvenlik testleri özeti

| No | Fonksiyon | Test yöntemi | Beklenen sonuç |
|---|---|---|---|
| 1 | Acil durdurma | Çevrim sırasında butona basma | Her şey anında durur, Error-229, kırmızı lamba |
| 2 | Güvenlik rölesi reset | Buton bırakıldıktan sonra **RESET** öncesi ve sonrası | **RESET**'e basılmadan makine çalışmaz |
| 3 | Kapı kapalı sviçi | Kapı açıkken **START** | Çevrim başlamaz, Error-422 |
| 4 | Işık perdesi | Kapı kapanırken ışınları kesme | Kapı kapanmaya devam etmez |
| 5 | Kapının konumunu koruması | Kapı açıkken hava kesme | Kapı bulunduğu konumda kalır |
| 6 | Kaçak akım röleleri | Test butonları | Röle atar; F2–F4 için Error-170, 171, 172 |
| 7 | Seviye koruması | Sensör kuru iken lamba ve çevrim davranışı | Pompa ve ısıtıcı çalışmaz |
| 8 | Hava basıncı izleme | Hava beslemesini kesme | Error-235 |
| 9 | Faz sırası izleme | Röle göstergesi ve panel lambası | **Faz Sıra Bilgisi** yeşil, Error-410 yok |
| 10 | Kule lambası | Bekleme, çevrim ve alarm durumları | Sarı, yeşil, kırmızı doğru yanar |

## 5.4.1 Acil durdurma testi

1. Tanklar hazırken (durum penceresinde Tanklar Hazır) sepete parça koymadan kapıyı kapatın ve **START** ile bir çevrim başlatın.
2. Kule lambasının yeşil yandığını ve sepetin döndüğünü kontrol edin.
3. Acil durdurma butonuna basın.
4. Sepetin, pompanın ve fanların anında durduğunu kontrol edin.
5. Operatör panelinde Error-229 Acil Stop Devrede mesajının çıktığını ve kule lambasının kırmızı yandığını kontrol edin.
6. Manuel Sayfası'nda **Acil Stop** lambasının kırmızı olduğunu kontrol edin.
7. Butonu basılıyken **START**'a basın; makinenin çalışmadığını kontrol edin.

## 5.4.2 Güvenlik rölesi reset testi

1. Acil durdurma butonunu çevirerek bırakın.
2. **RESET**'e basmadan **START**'a basın ve makinenin çalışmadığını kontrol edin.
3. **RESET**'e basın.
4. Error-229 mesajının kalktığını ve **Acil Stop** lambasının yeşil olduğunu kontrol edin.
5. **Hazırlık** ve faz seçimlerinin başlangıç durumuna döndüğünü kontrol edin.

## 5.4.3 Işık perdesi testi

**UYARI — Ezilme:** Testi elle değil, test çubuğuyla yapın. Işık perdesi çalışmıyorsa kapı kapanmaya devam eder.

1. Kapıyı tam açın.
2. Işık perdesinin verici ve alıcı yüzeylerinin temiz olduğunu kontrol edin.
3. Kapıyı kapatmak için iki **KAPI KAPALI** butonuna basın.
4. Kapı kapanırken, çapı ışık perdesi etiketindeki algılama çözünürlüğüne eşit bir test çubuğunu ışık perdesi alanına dik tutarak ışınları kesin.
5. Kapının kapanmaya devam etmediğini kontrol edin.
6. Testi kapı açıklığının alt, orta ve üst bölgelerinde tekrarlayın.
7. Kapı kapanmaya devam ederse makineyi kullanmayın ve yetkili personele bildirin.

## 5.4.4 Kapı kapalı sviçi testi

1. Kapıyı tam açın.
2. Manuel Sayfası'nda **Kapak Kapalı** lambasının kırmızı olduğunu kontrol edin.
3. Tanklar hazırken **START**'a basın.
4. Çevrimin başlamadığını ve Error-422 Kapak Kapalı Değil mesajının çıktığını kontrol edin.
5. Kapıyı tam kapatın; **Kapak Kapalı** lambasının yeşil olduğunu ve Error-422 mesajının kalktığını kontrol edin.
6. Kapıyı tam kapanmadan, aralık kalacak şekilde durdurun; **Kapak Kapalı** lambasının kırmızı kaldığını kontrol edin.

## 5.4.5 Kapının konumunu koruma testi (pilotlu çek valfler)

**UYARI — Düşen kapı:** Test sırasında kapının altında kimse bulunmasın.

1. Kapıyı tam açın.
2. Kapı açıklığının altını boşaltın ve alanı şeritle ayırın.
3. İşletmenin hava hattındaki kapama vanasını kapatın ve hızlı bağlantıyı sökün.
4. Kapının konumunu kapı çerçevesine bir işaretle belirleyin.
5. 5 dakika bekleyin.
6. Kapının işaretten aşağı kaymadığını kontrol edin.
7. Hava bağlantısını takın ve vanayı açın.
8. Kapı aşağı kaydıysa pilotlu çek valfleri ve kapı silindirlerinin contalarını kontrol ettirin; arıza giderilene kadar açık kapının altında çalışmayın.

## 5.4.6 Kaçak akım rölelerinin testi

Bu testi yetkili elektrikçi yapar.

1. Makine enerjili ve çevrim dışındayken F1 kaçak akım rölesinin test butonuna basın; rölenin attığını kontrol edin.
2. F1'i yeniden kurun.
3. F2'nin test butonuna basın; rölenin attığını ve operatör panelinde Error-170 mesajının çıktığını kontrol edin.
4. F2'yi yeniden kurun; Error-170 mesajının kalktığını kontrol edin.
5. Aynı testi F3 için yapın; Error-171 mesajının çıktığını kontrol edin.
6. Aynı testi F4 için yapın; Error-172 mesajının çıktığını kontrol edin.
7. Test butonuna basıldığında atmayan röleyi değiştirin.

## 5.4.7 Seviye korumasının testi

1. Tankların ilk dolumu sırasında, tank boşken Manuel Sayfası'nda **Yıkama Tank Alt Seviye** ve **Durulama Tank Alt Seviye** lambalarının kırmızı olduğunu kontrol edin.
2. Tanka sıvı doldurun; sıvı seviye sensörünün çatalını örttüğünde ilgili lambanın yeşile döndüğünü kontrol edin.
3. Tank boşken **Hazırlık**'ı açın; o tankın ısıtıcısının çalışmadığını tank sıcaklığının yükselmemesinden kontrol edin.

## 5.4.8 Hava basıncı izleme testi

1. Makine enerjili ve çevrim dışındayken işletmenin hava hattındaki kapama vanasını kapatın.
2. Hızlı bağlantıyı sökerek makinedeki basıncı boşaltın.
3. Operatör panelinde Error-235 Giriş Hava Basıncı Düşük mesajının çıktığını kontrol edin.
4. Hava bağlantısını takın ve vanayı açın; mesajın kalktığını kontrol edin.

## 5.4.9 Faz sırası izleme ve kule lambası kontrolü

1. Manuel Sayfası'nda **Faz Sıra Bilgisi** lambasının yeşil olduğunu kontrol edin.
2. Makine beklerken kule lambasının sarı yandığını kontrol edin.
3. Bir çevrim başlatın ve kule lambasının yeşil yandığını kontrol edin.
4. Kapı açıkken **START**'a basarak bir alarm oluşturun ve kule lambasının kırmızı yandığını kontrol edin.
