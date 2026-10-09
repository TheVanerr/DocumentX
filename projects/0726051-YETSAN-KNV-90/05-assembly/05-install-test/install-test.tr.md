# 5.5 Kurulum doğrulama ve test

Kurulum doğrulama testleri, **Bölüm 5.4** güvenlik testleri tamamlandıktan sonra uygulanır. Tüm kontroller **OK** olmadan operasyona geçilmemelidir. Bu makinede HMI bulunmadığından doğrulama pano lambaları, manometre, motor dönüş yönü ve fiziksel gözlem ile yapılır. Aşağıdaki kontrol listeleri kurulum doğrulaması için kullanılır.

---

## 5.5.1 Mekanik kurulum testi

| # | Kontrol | Beklenen sonuç | Durum |
| :---: | :--- | :--- | :---: |
| 1 | Makine terazide mi? | Evet — ayarlanabilir ayaklar; her iki eksende | ☐ |
| 2 | Tüm ayaklar zemine temas ediyor mu? | Evet | ☐ |
| 3 | Tank ve hücre kapakları zorlanmadan kapanıyor mu? | Evet — switch hizalı | ☐ |
| 4 | Konveyör tel bandı elle çevrildiğinde serbest mi? | Evet — yanal sürtünme yok | ☐ |
| 5 | Koruma kafesleri ve PVC perdeler yerinde mi? | Evet | ☐ |
| 6 | Yağ ayırıcı ünitesi terazide ve hortumları bağlı mı? | Evet | ☐ |

Test, **Bölüm 5.2.3** seviye ayarı tamamlandıktan sonra yapılır. Mekanik kurulum test checklist DATA'da tanımlı değildir ([EKSİK]); yukarıdaki liste makine tipinin standart kontrollerini içerir.

---

## 5.5.2 Elektrik devreye alma testi

| # | Kontrol | Beklenen sonuç | Durum |
| :---: | :--- | :--- | :---: |
| 1 | Faz koruma rölesi MKR-01 çıkış veriyor mu? | Evet | ☐ |
| 2 | Makinede elektrik var mı? (RESET lambası yanıyor) | Evet | ☐ |
| 3 | Acil stop'a basıldığında makine duruyor mu? | Evet | ☐ |
| 4 | Pompa, fan, blower dönüş yönü motor oku ile uyumlu mu? | Evet | ☐ |
| 5 | Her fonksiyon anahtarı ON alındığında run lambası yanıyor mu? | Evet | ☐ |
| 6 | Konveyör potansiyometresi ile hız değişiyor mu? (20–60 Hz) | Evet | ☐ |

Faz yönü **Bölüm 5.3.6**'da doğrulanmış olmalıdır.

---

## 5.5.3 Pnömatik ve medya bağlantı testi

| # | Kontrol | Beklenen sonuç | Durum |
| :---: | :--- | :--- | :---: |
| 1 | Hava regülatörü manometresi 6 bar gösteriyor mu? | Evet | ☐ |
| 2 | Hava hattında kaçak var mı? | Hayır | ☐ |
| 3 | Yağ ayırıcı anahtarı ON — diyaframlı pompa çalışıyor mu? | Evet | ☐ |
| 4 | Tanklar dolu; WASHING LEVEL lambaları sönük mü? | Evet | ☐ |
| 5 | Tank altı, pompa ve boru bağlantılarında sızıntı var mı? | Hayır | ☐ |

Bağlantı değerleri: **6 bar** hava, **1 bar** su (**Bkz. Bölüm 3.3.5**). Pnömatik dolum test tanımı DATA'da bulunmamaktadır ([EKSİK]); yukarıdaki kontroller uygulanır.

---

## 5.5.4 Güvenlik fonksiyon testi

| # | Kontrol | Beklenen sonuç | Durum |
| :---: | :--- | :--- | :---: |
| 1 | 7 acil stop makineyi durduruyor mu? | Evet | ☐ |
| 2 | 7 bakım kapağı switch'i makineyi durduruyor mu? | Evet | ☐ |
| 3 | Boş tankta ısıtıcı/pompa kilitli mi? | Evet | ☐ |
| 4 | Makine kullanıma hazır mı? | Evet — RESET lambası yanıyor | ☐ |

Detaylı test adımları **Bölüm 5.4**'te verilmiştir.

---

## 5.5.5 Boş koşu testi

| Parametre | Değer |
| :--- | :--- |
| Boş koşu test süresi | [EKSİK] dk — DATA'da tanımlı değil |

Boş koşu testi, makinenin parça olmadan sürekli çalışmasını doğrular; sızıntı, koruma elemanı trip'i, aşırı titreşim, egzoz etkinliği ve proses fonksiyonlarının birlikte çalışmasını kontrol eder. Test sırasında konveyör, pompalar, blowerlar ve fanlar hareket eder; tehlike bölgesine girmeyin, uygun KKD kullanın (**Bkz. Bölüm 2.6**).

**Ön koşullar**

1. Bölüm **5.5.1–5.5.4** kontrolleri **OK** tamamlanmış olmalıdır.
2. Konveyör hattında sıkıştıracak parça veya cisim olmamalıdır.
3. Pompa emiş/çıkış vanaları **açık** olmalıdır.
4. Hava **6 bar**; tanklar dolu; RESET lambası yanık olmalıdır.
5. Termostat set değerleri girilmiş olmalıdır (**Bkz. Bölüm 6.3.3**).

**Test prosedürü**

1. **TANK 1 HEATER** ve **TANK 2 HEATER** anahtarlarını ON alın; termostat ekranlarında sıcaklığın yükseldiğini izleyin.
2. **TANK 1 PUMP** ve **TANK 2 PUMP** anahtarlarını ON alın; pompaların çalıştığını, hücrelerde nozul püskürtmesinin başladığını ve pompa/filtre bağlantılarında sızıntı olmadığını kontrol edin.
3. **TANK 1 OIL SKIMMER** anahtarını ON alın; yağ sıyırıcı diskinin döndüğünü gözleyin.
4. **BLOWER 1**, **BLOWER 2**, **DRYING 1 FAN**, **DRYING 2 FAN** anahtarlarını ON alın; ardından **DRYING 1 HEATER** ve **DRYING 2 HEATER** anahtarlarını ON alın.
5. **CONVEYOR** anahtarını ON alın; potansiyometre ile hızı 20–60 Hz aralığında değiştirip tel bandın düzgün ilerlediğini kontrol edin.
6. Egzoz fanının çalıştığını ve bacadan buhar tahliyesinin yapıldığını, hücre kapaklarından buhar kaçmadığını kontrol edin.
7. Makineyi **parça olmadan** belirlenen süre boyunca ([EKSİK]) çalıştırın.
8. Test süresince run lambalarını, WASHING LEVEL ve RESET lambalarını izleyin; sızıntı, anormal ses, titreşim veya koku olup olmadığını kontrol edin.
9. Fonksiyonları **Bölüm 7.3.1** sırasına göre kapatın.

| # | Kabul kriteri | Durum |
| :---: | :--- | :---: |
| 1 | Belirlenen süre boyunca kesintisiz boş koşu tamamlandı | ☐ OK / ☐ NOK |
| 2 | Hiçbir MKŞ veya kaçak akım rölesi trip etmedi; RESET lambası sönmedi | ☐ OK / ☐ NOK |
| 3 | Tank sıcaklıkları set değere doğru yükseldi; termostatlar set değerde kesti | ☐ OK / ☐ NOK |
| 4 | Gözle görülür sızıntı veya anormal titreşim yok | ☐ OK / ☐ NOK |
| 5 | Egzoz tahliyesi etkin; hücrelerden buhar kaçağı yok | ☐ OK / ☐ NOK |

**Anormal durum:** Bir fonksiyon durur veya RESET lambası sönerse makineyi durdurun; **Bölüm 11**'e bakın. Test tekrarlanmadan operasyona geçmeyin.

Boş koşu testi başarılı ise makine **kullanıma hazır** kabul edilir (**Bölüm 5.1 Adım 10**).

---

## 5.5.6 Kurulum doğrulama özet kontrol listesi

| Bölüm | Test | Tamamlandı |
| :--- | :--- | :---: |
| 5.5.1 | Mekanik — terazi, kapaklar, konveyör | ☐ |
| 5.5.2 | Elektrik — faz koruma, acil stop, dönüş yönü, run lambaları | ☐ |
| 5.5.3 | Medya — 6 bar hava, tank dolumu, sızıntı | ☐ |
| 5.5.4 | Güvenlik — acil stop, kapak switch'leri, seviye interlock'u | ☐ |
| 5.5.5 | Boş koşu | ☐ |

**Tarih:** _______________ **Test eden:** _______________ **Onaylayan:** _______________

---

Operasyon prosedürleri için bkz. **Bölüm 7**.
