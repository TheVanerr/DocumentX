# 5.4 Güvenlik sistemleri testi

Kurulum sonrası güvenlik fonksiyonları, operasyona geçmeden önce doğrulanmalıdır. Makine güvenlik kategorisi **CAT3**'tür. Makinede **RFID güvenlik sensörü** bulunur; **ışık perdesi yoktur**. Emniyet kapısı / sabit bariyer sayısı **0**'dır.

Acil stop konumları, reset prosedürü ve acil stop sonrası davranış **Bölüm 2.5**'te SSOT olarak verilmiştir; bu bölümde yalnızca **kurulum test adımları** tanımlanır. LOTO prosedürü bakım müdahalelerinde **Bölüm 2.4**'e göre uygulanır.

Acil stop fonksiyon testi periyodu: **Her ay bir kez** tekrarlanmalıdır (bkz. **Bölüm 6.2** — Güvenlik ayarları).

---

## 5.4.1 Acil stop testi

Makinede **4 adet** acil stop butonu bulunur (bkz. **Bölüm 2.5**):

| # | Konum |
|---|-------|
| 1 | Elektrik panosu üzerinde |
| 2 | Makine girişinde konveyörün sağında |
| 3 | Makine girişinde konveyörün solunda |
| 4 | Makine çıkışında konveyörün solunda |

### Test prosedürü

Her acil stop butonu için ayrı ayrı:

1. Makine hazır veya çalışır durumda iken ilgili acil stop butonuna basın.
2. Makinedeki **her fonksiyonun durduğunu** doğrulayın.
3. Tepe lambasının **kırmızı** yandığını kontrol edin.
4. Reset prosedürünü uygulayın (**Bkz. Bölüm 2.5**).
5. Bir sonraki buton testine geçmeden makineyi normal hazır duruma getirin.

| Kontrol | Beklenen sonuç |
|---------|----------------|
| Acil stop'a basıldığında makine duruyor mu? | Evet — her fonksiyon durur |

<!-- FOTO: 4 acil stop konumu genel görünüm (EKLENECEK: FOTO-5-4-0-acil-stop.jpg) -->
![Acil stop konumları](../../assets/5.4/1.png)

<!-- FOTO: Pano reset butonu — etiket (EKLENECEK: FOTO-5-4-1-reset-butonu.jpg) -->
![Reset butonu](../../assets/5.4/2.png)

---

## 5.4.2 RFID güvenlik sensörü testi

| Parametre | Değer |
|-----------|-------|
| Sensör tipi | RFID güvenlik sensörü |
| Emniyet kapısı sayısı | 0 |

### Test prosedürü

1. Makine hazır veya çalışır durumda iken RFID korumalı bir bakım kapağını açın.
2. RFID sensörünün makineyi **durdurduğunu** doğrulayın.
3. Kapak kapatıldıktan sonra reset prosedürünü uygulayın (**Bkz. Bölüm 2.5**).

| Kontrol | Beklenen sonuç |
|---------|----------------|
| Kapaklar açıldığında RFID sensörü makineyi durduruyor mu? | Evet |

Emniyet kapısı **kesinlikle bypass edilmemelidir**. Kapak açma öncesi enerji izolasyonu gerekiyorsa **LOTO** uygulayın (**Bkz. Bölüm 2.4**).

<!-- FOTO: RFID sensör — kapak bölgesi (EKLENECEK: FOTO-5-4-2-rfid-sensor.jpg) -->
![RFID güvenlik sensörü](../../assets/5.4/3.png)

---

## 5.4.3 Faz koruma ve elektrik güvenlik testi

| # | Kontrol | Beklenen sonuç |
|---|---------|----------------|
| 1 | Faz koruma rölesi çıkış veriyor mu? | Evet |
| 2 | Makinede elektrik var mı? | Evet |
| 3 | Acil stop'a basıldığında makine duruyor mu? | Evet |

<!-- FOTO: Faz koruma rölesi — pano içi (EKLENECEK: FOTO-5-4-3-faz-koruma.jpg) -->
![Faz koruma rölesi](../../assets/5.4/4.png)

---

## 5.4.4 Makine hazır durumu testi

| Kontrol | Beklenen sonuç |
|---------|----------------|
| Makine kullanıma hazır mı? | Evet |
| Tepe lambası | Sarı — kullanıma hazır |

HMI alarm ekranında aktif alarm bulunmamalıdır. Alarm varsa **Bölüm 11**'e bakın.

<!-- FOTO: Tepe lambası sarı (EKLENECEK: FOTO-5-4-4-tepe-lambasi-sari.jpg) -->
![Tepe lambası — kullanıma hazır](../../assets/5.4/5.png)

---

## 5.4.5 Güvenlik fonksiyon test kontrol listesi

| # | Test | Sonuç | Tarih | Test eden |
|---|------|:-----:|-------|-----------|
| 1 | Acil stop #1 — pano | ☐ OK / ☐ NOK | | |
| 2 | Acil stop #2 — giriş sağ | ☐ OK / ☐ NOK | | |
| 3 | Acil stop #3 — giriş sol | ☐ OK / ☐ NOK | | |
| 4 | Acil stop #4 — çıkış sol | ☐ OK / ☐ NOK | | |
| 5 | Reset prosedürü (Bölüm 2.5) | ☐ OK / ☐ NOK | | |
| 6 | RFID sensör — kapak açık | ☐ OK / ☐ NOK | | |
| 7 | Faz koruma rölesi | ☐ OK / ☐ NOK | | |
| 8 | Makine kullanıma hazır | ☐ OK / ☐ NOK | | |

Tüm maddeler **OK** olmadan **Bölüm 5.5** testlerine ve operasyona geçilmemelidir.
