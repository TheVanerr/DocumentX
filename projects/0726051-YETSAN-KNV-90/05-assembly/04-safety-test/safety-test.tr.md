# 5.4 Güvenlik sistemleri testi

Kurulum sonrası güvenlik fonksiyonları, operasyona geçmeden önce doğrulanmalıdır. Makinede **7 acil stop butonu**, **7 bakım kapağında** seri bağlı Omron manyetik emniyet switch'i ve iki Omron G9SB emniyet rölesi bulunur; **ışık perdesi yoktur**. Güvenlik kategorisi [EKSİK] — tip etiketi / CE dosyasından doğrulanacaktır.

Acil stop konumları, reset prosedürü ve acil stop sonrası davranış **Bölüm 2.5**'te verilmiştir; bu bölümde yalnızca **kurulum test adımları** tanımlanır. LOTO prosedürü bakım müdahalelerinde **Bölüm 2.4**'e göre uygulanır.

Bu makinede HMI bulunmadığından test sonucu **RESET lambasının sönmesi** ve çalışan fonksiyonun durması ile doğrulanır. Acil stop fonksiyon testi periyodu: **her ay bir kez** (**Bkz. Bölüm 6.2.3**); kapak switch kısa testi **haftalık** (**Bkz. Bölüm 9.1.3**).

---

## 5.4.1 Acil stop testi

Makinede **7 adet** acil stop butonu bulunur (**Bkz. Bölüm 2.5**):

| # | Konum |
| :---: | :--- |
| 1 | Operatör paneli (EMERGENCY STOP) |
| 2 | Konveyör girişi — sağ |
| 3 | Konveyör girişi — sol |
| 4 | Konveyör çıkışı — sağ |
| 5 | Konveyör çıkışı — sol |
| 6 | Orta bölge — sağ |
| 7 | Orta bölge — sol |

**Test prosedürü**

Her acil stop butonu için ayrı ayrı:

1. Tehlike bölgesinin boş olduğunu doğrulayın; konveyör giriş/çıkışına kimse girmesin.
2. RESET lambası yanıkken en az bir fonksiyonu (ör. CONVEYOR veya DRYING 1 FAN) ON konumuna alın; run lambasının yandığını görün.
3. İlgili acil stop butonuna basın.
4. Çalışan fonksiyonun **durduğunu**, run lambasının ve **RESET lambasının söndüğünü** doğrulayın.
5. Anahtar ON konumunda iken fonksiyonun **kendiliğinden yeniden başlamadığını** doğrulayın.
6. Fonksiyon anahtarını OFF alın; acil stop mantarını serbest bırakın; **RESET**'e lamba yanana kadar basın (**Bkz. Bölüm 2.5**).
7. Bir sonraki buton testine geçmeden makineyi hazır duruma getirin.

| Kontrol | Beklenen sonuç |
| :--- | :--- |
| Acil stop'a basıldığında makine duruyor mu? | Evet — tüm çıkışlar kesilir, RESET lambası söner |
| Acil stop serbest bırakılınca makine kendiliğinden başlıyor mu? | Hayır — yalnızca RESET ile hazır olur |

![Acil stop — konveyör giriş tarafı](../../assets/2.5/acil-stop-giris.jpg)

---

## 5.4.2 Bakım kapağı emniyet switch testi

| Parametre | Değer |
| :--- | :--- |
| Switch tipi | Omron F3STGRNLPU21M1J8 manyetik kapı switch'i |
| Kapak sayısı | 7 — seri zincir |
| Emniyet rölesi | Omron G9SB2002AACDC241 |

Bu alt bölüm **fonksiyon testidir**; bakım erişimi değildir. Bakım/temizlik için kapak açmadan önce **Bölüm 2.4** LOTO zorunludur.

**Test prosedürü**

Her bakım kapağı için ayrı ayrı:

1. Tehlike bölgesinin boş olduğunu doğrulayın; kapağı açarken hareketli parçalara uzanmayın.
2. RESET lambası yanıkken bir fonksiyonu (ör. DRYING 1 FAN) ON konumuna alın.
3. Test edilecek bakım kapağını **yalnızca algılama için** kısmen kaldırın.
4. Fonksiyonun **durduğunu** ve RESET lambasının **söndüğünü** doğrulayın.
5. Kapağı kapatın; switch–mıknatıs hizasını kontrol edin; RESET'e basın; lambanın yandığını doğrulayın.
6. Fonksiyonu OFF alın; bir sonraki kapağa geçin.

| Kontrol | Beklenen sonuç |
| :--- | :--- |
| Kapak açıldığında makine duruyor mu? | Evet — 7 kapağın her biri için |
| Kapak kapatılınca RESET ile hazır oluyor mu? | Evet |

Kapak switch'leri **baypas edilmez**; switch üzerine mıknatıs veya yabancı cisim konulmaz. Test başarısızsa operasyona geçmeyin.

![Bakım kapağı — test için kısmen kaldırılır](../../assets/2.4/bakim-kapagi-acma.jpg)

---

## 5.4.3 Faz koruma ve elektrik güvenlik testi

| # | Kontrol | Beklenen sonuç |
| :---: | :--- | :--- |
| 1 | Faz koruma rölesi MKR-01 çıkış veriyor mu? | Evet |
| 2 | Makinede elektrik var mı? (RESET lambası yanıyor) | Evet |
| 3 | Acil stop'a basıldığında makine duruyor mu? | Evet |
| 4 | Pompa, fan ve blower dönüş yönleri doğru mu? | Evet |
| 5 | Kaçak akım rölelerinin TEST butonu ile trip ettiği doğrulandı mı? (yetkili elektrikçi, LOTO altında reset) | Evet |

---

## 5.4.4 Tank seviye interlock testi

Seviye interlock'u, rezistansların susuz ve pompaların kuru çalışmasını önler.

1. Tank 1 boş iken ana şalter ON ve RESET lambası yanıkken **TANK 1 WASHING LEVEL** kırmızı lambasının yandığını doğrulayın.
2. **TANK 1 HEATER** ve **TANK 1 PUMP** anahtarlarını ON alın; run lambalarının **yanmadığını** ve ısıtıcı/pompanın çalışmadığını doğrulayın; anahtarları OFF alın.
3. Tank 1'i doldurun; kırmızı lambanın söndüğünü doğrulayın.
4. Aynı testi Tank 2 için tekrarlayın.

| Kontrol | Beklenen sonuç |
| :--- | :--- |
| Boş tankta ısıtıcı ve pompa çalışıyor mu? | Hayır — WASHING LEVEL lambası yanık |

---

## 5.4.5 Makine hazır durumu testi

| Kontrol | Beklenen sonuç |
| :--- | :--- |
| Makine kullanıma hazır mı? | Evet — RESET lambası mavi yanıyor |
| WASHING LEVEL lambaları | Sönük (tanklar dolu) |
| Tüm fonksiyon anahtarları | OFF |

---

## 5.4.6 Güvenlik fonksiyon test kontrol listesi

| # | Test | Sonuç | Tarih | Test eden |
| :---: | :--- | :---: | :--- | :--- |
| 1 | Acil stop #1 — operatör paneli | ☐ OK / ☐ NOK | | |
| 2 | Acil stop #2 — giriş sağ | ☐ OK / ☐ NOK | | |
| 3 | Acil stop #3 — giriş sol | ☐ OK / ☐ NOK | | |
| 4 | Acil stop #4 — çıkış sağ | ☐ OK / ☐ NOK | | |
| 5 | Acil stop #5 — çıkış sol | ☐ OK / ☐ NOK | | |
| 6 | Acil stop #6 — orta sağ | ☐ OK / ☐ NOK | | |
| 7 | Acil stop #7 — orta sol | ☐ OK / ☐ NOK | | |
| 8 | Reset prosedürü (Bölüm 2.5) | ☐ OK / ☐ NOK | | |
| 9 | Bakım kapağı switch'leri — 7 kapak | ☐ OK / ☐ NOK | | |
| 10 | Faz koruma rölesi | ☐ OK / ☐ NOK | | |
| 11 | Kaçak akım röleleri TEST | ☐ OK / ☐ NOK | | |
| 12 | Tank seviye interlock'u — Tank 1 / Tank 2 | ☐ OK / ☐ NOK | | |
| 13 | Makine kullanıma hazır (RESET lambası) | ☐ OK / ☐ NOK | | |

Tüm maddeler **OK** olmadan **Bölüm 5.5** testlerine ve operasyona geçilmemelidir.
