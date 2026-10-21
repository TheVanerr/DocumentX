# 7.2 Makine başlatma

Makine, tek bir start komutu yerine fonksiyon anahtarlarının belirli bir sırayla açılmasıyla devreye alınır. Hazırlık aşaması (tank dolumu ve ısıtma) operatör tarafından yürütülür; sabit bir sıra zorunlu değildir ancak aşağıdaki sıra proses verimini ve ekipman korumasını sağlar. Donanımsal interlock'lar yanlış sırayı kısmen engeller (ör. boş tankta ısıtıcı çalışmaz), ancak her hatayı engellemez (ör. fan kapalıyken kurutma ısıtıcısı açılabilir).

**UYARI — Ezilme:** Tel bant üzerinde veya hücre girişlerinde kalan parça ya da cisim, konveyör çalıştığında el ve parmak ezilmesine ve zincir hasarına yol açabilir. Konveyörü açmadan önce tel bandı ve hücre girişlerini boşaltın.

**UYARI — Sıcak su ve buhar:** Isıtma sırasında açılan tank kapağından buhar yükselir ve +70 °C'ye kadar ısınan su haşlanmaya yol açabilir. Isıtma sırasında tank kapaklarını açmayın.

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
2. Tank kapağını açın.
3. Tesis su vanasını açarak tankı şebeke suyu veya arıtılmış su ile doldurun (su kalitesi: **Bkz. Bölüm 3.3.5**; tank hacimleri: **Bkz. Bölüm 3.3.1**).
4. Kırmızı **TANK 1 / TANK 2 WASHING LEVEL** lambası söndükten sonra, rezistanslar ve emiş filtresi tamamen su altında kalana kadar doldurmaya devam edin.
5. Tesis su vanasını kapatın.
6. Proses kimyasalı kullanılıyorsa üretici onaylı, asit içermeyen maddeyi tedarikçi dozajında ekleyin (**Bkz. Bölüm 3.2.4**).
7. Tank kapağını kapatın.

**Dolum sorunu:** Tank dolu olmasına rağmen kırmızı lamba yanıyorsa seviye sensörünü kontrol edin (**Bkz. Bölüm 11.7.2**). Tankta su yokken ısıtıcı ve pompa interlock nedeniyle çalışmaz.

---

## 7.2.2 Güç açma ve fonksiyon açılış sırası

Aşağıdaki sıra önerilir; her ON adımından sonra ilgili run lambasının yandığını doğrulayın.

1. Ana şalterin **ON** konumunda olduğunu doğrulayın.
2. **RESET** butonuna mavi lamba yanana kadar basın.
3. **TANK 1 HEATER** ve **TANK 2 HEATER** anahtarlarını ON konumuna alın.
4. Termostat ekranlarında sıcaklığın yükseldiğini izleyin.
5. Set sıcaklığa yaklaşıldığında **TANK 1 PUMP** ve **TANK 2 PUMP** anahtarlarını ON konumuna alın.
6. Hücrelerde püskürtmenin başladığını sesten ve PVC perde arkasındaki su hareketinden doğrulayın.
7. Yıkama suyu yüzeyinde yağ varsa **TANK 1 OIL SKIMMER** anahtarını ON konumuna alın.
8. Yağ ayırıcı kullanılacaksa yağ ayırıcı anahtarını (etiketsiz) ON konumuna alın.
9. Parça kurutulacaksa **BLOWER 1**, **BLOWER 2**, **DRYING 1 FAN** ve **DRYING 2 FAN** anahtarlarını ON konumuna alın.
10. Fanlar çalıştıktan sonra **DRYING 1 HEATER** ve **DRYING 2 HEATER** anahtarlarını ON konumuna alın.
11. Konveyör hız potansiyometresini hedef değere (20–60 Hz) ayarlayın.
12. **CONVEYOR** anahtarını ON konumuna alın.
13. Tel bandın düzgün ilerlediğini gözleyin.

**NOT:** Egzoz fanının operatör panelinde ayrı anahtarı yoktur; egzoz fanı **CONVEYOR** anahtarı ile birlikte devreye girer (**Bkz. Bölüm 3.4.3**).

**Isıtma ön ısınma süresi:** Değişkendir — tanktaki su miktarı ve başlangıç sıcaklığına bağlıdır; sabit süre verilemez. Isıtma sırasında pompaların kapalı tutulması ısı kaybını azaltır.

**Beklenen sonuç:** Açılan tüm fonksiyonların run lambaları yanık; RESET lambası yanık; WASHING LEVEL lambaları sönük; termostatlar set değere ulaştığında ısıtıcılar kendiliğinden kesilir.

---

## 7.2.3 Hava, su ve medya

| Medya | Gereksinim |
| :--- | :--- |
| Basınçlı hava | **6 bar** tesisata bağlı — yağ ayırıcı pompası için |
| Su | Tanklara **elle** doldurulur; otomatik dolum yok (**Bkz. Bölüm 3.3.5**) |
| Vakum | **Yoktur** |
| Hidrolik | **Yoktur** |

Vakum veya hidrolik bağlantı/açma prosedürü uygulanmaz (**Bkz. Bölüm 6.4**, **6.6**).

---

## 7.2.4 Parça yükleme — ilk parça

İlk parça (deneme) için ayrı bir prosedür **yoktur**. Yeni parça tipi için proses doğrulaması **Bölüm 8.2.2** adımlarına göre yapılır.

1. Konveyör çalışırken parçayı **sol girişten**, koruma kafesi dışından tel bant üzerine yerleştirin; parça devrilmemeli ve hücre giriş açıklığından perdelere ve nozullara takılmadan geçebilmelidir (**Bkz. Bölüm 3.2.2**).
2. Parçanın PVC perdeyi geçip yıkama hücresine girdiğini gözleyin.
3. Parçayı **sağ çıkıştan**, kurutma hücresini terk ettikten sonra ısıya dayanıklı eldivenle alın.
4. İlk parçada temizlik ve kuruluk sonucunu değerlendirin.
5. Sonuç hedef kriteri karşılamıyorsa konveyör hızını veya termostat set değerlerini düzeltin (**Bkz. Bölüm 6.3**).

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

Durdurma için **Bkz. Bölüm 7.3**; parça akışı için **Bkz. Bölüm 7.4**.
