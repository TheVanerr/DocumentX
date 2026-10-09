# 7.2 Makine başlatma

Makine, tek bir start komutu yerine fonksiyon anahtarlarının belirli bir sırayla açılmasıyla devreye alınır. Hazırlık aşaması (tank dolumu ve ısıtma) operatör tarafından yürütülür; sabit bir sıra zorunlu değildir ancak aşağıdaki sıra proses verimini ve ekipman korumasını sağlar. Donanımsal interlock'lar yanlış sırayı kısmen engeller (ör. boş tankta ısıtıcı çalışmaz), ancak her hatayı engellemez (ör. fan kapalıyken kurutma ısıtıcısı açılabilir).

**UYARI — Sıkıştırma:** Konveyörü açmadan önce tel bant üzerinde ve hücre girişlerinde parça veya cisim kalmadığını doğrulayın; aksi hâlde ezilme ve zincir hasarı riski oluşur.

**UYARI — Sıcak su ve buhar:** Tank kapaklarını ısıtma sırasında açmayın; su +70 °C'ye kadar ısınır ve açılan kapaktan buhar yükselir.

---

## 7.2.1 Devreye alma ön koşulları ve tank dolumu

| # | Koşul |
| :---: | :--- |
| 1 | Ana şalter **ON** — makinede elektrik var |
| 2 | Mavi **RESET** lambası yanıyor — acil stoplar serbest, tüm bakım kapakları kapalı (**Bkz. Bölüm 2.5**) |
| 3 | Basınçlı hava **6 bar** bağlı (**Bkz. Bölüm 3.3.5**) |
| 4 | Tank 1 ve Tank 2 **elle doldurulmuş**; kırmızı WASHING LEVEL lambaları sönük |
| 5 | Pompa emiş/çıkış vanaları **açık** |
| 6 | Konveyör hattında sıkıştıracak parça/cisim yok; parça giriş/çıkış alanı güvenli |
| 7 | Termostat set değerleri girilmiş (**Bkz. Bölüm 6.3.3**) |

**Tank dolum prosedürü (elle)**

1. İlgili tankın **TAHLİYE** vanasının kapalı olduğunu kontrol edin.
2. Tank kapağını açın; tankı şebeke suyu veya arıtılmış su ile (**Bkz. Bölüm 3.3.5**) doldurun.
3. Kırmızı **TANK 1 / TANK 2 WASHING LEVEL** lambası sönene kadar dolumu sürdürün; lamba söndükten sonra rezistansların ve emiş filtresinin tamamen su altında kaldığı seviyeye kadar doldurmaya devam edin.
4. Tank kapağını kapatın.
5. Proses kimyasalı kullanılıyorsa üretici onaylı, asit içermeyen maddeyi tedarikçi dozajında ekleyin (**Bkz. Bölüm 3.2.4**).

**Dolum sorunu:** Tank dolu olmasına rağmen kırmızı lamba yanıyorsa seviye sensörünü kontrol edin (**Bkz. Bölüm 11.7**). Tankta su yokken ısıtıcı ve pompa interlock nedeniyle çalışmaz.

---

## 7.2.2 Güç açma ve fonksiyon açılış sırası

Aşağıdaki sıra önerilir; her adımda ilgili run lambasının yandığını doğrulayın.

1. Ana şalterin **ON** konumunda olduğunu doğrulayın.
2. **RESET** butonuna mavi lamba yanana kadar basın.
3. **TANK 1 HEATER** ve **TANK 2 HEATER** anahtarlarını ON alın; termostat ekranlarında sıcaklığın yükseldiğini izleyin.
4. Set sıcaklığa yaklaşıldığında **TANK 1 PUMP** ve **TANK 2 PUMP** anahtarlarını ON alın; hücrelerde püskürtmenin başladığını sesten ve PVC perde arkasındaki su hareketinden doğrulayın.
5. Yıkama suyu yüzeyinde yağ varsa **TANK 1 OIL SKIMMER** anahtarını ON alın; gerekiyorsa yağ ayırıcı anahtarını (etiketsiz) ON alın.
6. Parça kurutulacaksa **BLOWER 1**, **BLOWER 2**, **DRYING 1 FAN**, **DRYING 2 FAN** anahtarlarını ON alın.
7. Fanlar çalıştıktan sonra **DRYING 1 HEATER** ve **DRYING 2 HEATER** anahtarlarını ON alın.
8. Konveyör hız potansiyometresini hedef değere (20–60 Hz) ayarlayın.
9. **CONVEYOR** anahtarını ON alın; tel bandın düzgün ilerlediğini gözleyin.

**Isıtma ön ısınma süresi:** Değişkendir — tanktaki su miktarı ve başlangıç sıcaklığına bağlıdır; sabit süre verilemez. Isıtma sırasında pompaların kapalı tutulması ısı kaybını azaltır.

**Beklenen sonuç:** Açılan tüm fonksiyonların run lambaları yanık; RESET lambası yanık; WASHING LEVEL lambaları sönük; termostatlar set değere ulaştığında ısıtıcılar kendiliğinden kesilir.

---

## 7.2.3 Hava, su ve medya

| Medya | Gereksinim |
| :--- | :--- |
| Basınçlı hava | **6 bar** tesisata bağlı — yağ ayırıcı pompası için |
| Su | Tanklara **elle** doldurulur; otomatik dolum yok |
| Vakum | **Yoktur** |
| Hidrolik | **Yoktur** |

Vakum veya hidrolik bağlantı/açma prosedürü uygulanmaz (**Bkz. Bölüm 6.4, 6.6**).

---

## 7.2.4 Parça yükleme — ilk parça

Ayrı bir ilk parça / deneme prosedürü **tanımlanmamıştır**. Yeni parça tipi için proses doğrulaması **Bölüm 8.2.2** adımlarına göre yapılır.

1. Konveyör çalışırken parçayı **sol girişten**, koruma kafesi dışından tel bant üzerine yerleştirin; parça devrilmeyecek ve hücre giriş kesitini aşmayacak konumda olmalıdır.
2. Parçanın PVC perdeyi geçip yıkama hücresine girdiğini gözleyin.
3. Parçayı **sağ çıkıştan**, kurutma hücresini terk ettikten sonra ısıya dayanıklı eldivenle alın.
4. İlk parçada temizlik ve kuruluk sonucunu değerlendirin; gerekirse konveyör hızını veya termostat set değerlerini düzeltin (**Bkz. Bölüm 6.3**).

---

## 7.2.5 Start öncesi kontrol listesi

| # | Kontrol | Durum |
| :---: | :--- | :---: |
| 1 | Ana şalter ON; RESET lambası yanık | ☐ |
| 2 | Tank 1 ve Tank 2 dolu; WASHING LEVEL lambaları sönük | ☐ |
| 3 | Pompa emiş/çıkış vanaları açık | ☐ |
| 4 | Hava 6 bar; tesis hava vanası açık | ☐ |
| 5 | Konveyör hattında sıkıştıracak parça/cisim yok; giriş-çıkış alanı güvenli | ☐ |
| 6 | Tüm bakım kapakları ve tank kapakları kapalı | ☐ |
| 7 | Termostat set değerleri doğru; konveyör hızı 20–60 Hz aralığında | ☐ |
| 8 | İstenen proses anahtarları belirlendi | ☐ |

**Tarih:** _______________ **Kontrol eden:** _______________

---

Durdurma için bkz. **Bölüm 7.3**; parça akışı için bkz. **Bölüm 7.4**.
