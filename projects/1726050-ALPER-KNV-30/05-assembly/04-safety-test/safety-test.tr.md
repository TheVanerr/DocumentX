# 5.4 Güvenlik sistemleri testi

Makine stop kategorisi: **Cat.3**. Makinede **RFID güvenlik sensörü** bulunmaktadır. **Işık perdesi bulunmamaktadır**. Emniyet kapısı / bariyer sayısı: **0**.

---

## 5.4.1 Acil Stop testi

Makinede toplam **4 adet** acil stop butonu bulunur:

| # | Konum |
|---|-------|
| 1 | Elektrik panosu üzerinde |
| 2 | Makine girişinde konveyörün sağında |
| 3 | Makine girişinde konveyörün solunda |
| 4 | Makine çıkışında konveyörün solunda |

### Test prosedürü

Her acil stop butonu için ayrı ayrı:

1. Makine çalışır durumda veya hazır durumda iken acil stop butonuna basılır.
2. Makinedeki **her fonksiyonun durduğu** doğrulanır.
3. Tepe lambasının **kırmızı** yandığı kontrol edilir.
4. Acil stop butonu kaldırılır; fiziksel tehdidin giderildiği kesinleştirilir.
5. Pano etiketi üzerindeki **reset butonuna** lambası yanana kadar basılır.
6. Makine normal duruma döndürülür.

| Kontrol | Beklenen sonuç |
|---------|----------------|
| Acil stop'a basıldığında makine duruyor mu? | Evet — her fonksiyon durur |

Acil stop test periyodu: **Her ay bir kez** tekrarlanmalıdır.

<!-- FOTO: Acil stop butonları — 4 konum -->
![Acil stop konumları](../../assets/FOTO-5-4-0-acil-stop.png)

<!-- FOTO: Pano reset butonu — etiket üzerinde -->
![Reset butonu — pano etiketi](../../assets/FOTO-5-4-1-reset-butonu.png)

---

## 5.4.2 RFID güvenlik sensörü testi

| Parametre | Değer |
|-----------|-------|
| Sensör tipi | RFID güvenlik sensörü |
| Emniyet kapısı sayısı | 0 |

### Test prosedürü

1. Makine çalışır veya hazır durumda iken makine kapaklarından biri açılır.
2. RFID sensörünün makineyi **durdurduğu** doğrulanır.
3. Kapak kapatılır ve reset prosedürü uygulanır.

| Kontrol | Beklenen sonuç |
|---------|----------------|
| Kapaklar açıldığında RFID sensörü makineyi durduruyor mu? | Evet |

Emniyet kapısı **kesinlikle bypass edilmemelidir**. Bakım için makine elektriği kesildikten sonra kapaklar açılmalı; **LOTO prosedürü** uygulanmalıdır.

<!-- FOTO: RFID güvenlik sensörü — kapak bölgesi -->
![RFID güvenlik sensörü](../../assets/FOTO-5-4-2-rfid-sensor.png)

---

## 5.4.3 Faz koruma ve elektrik güvenlik testi

Elektrik devreye alma test checklist:

| # | Kontrol | Beklenen sonuç |
|---|---------|----------------|
| 1 | Faz koruma rölesi çıkış veriyor mu? | Evet |
| 2 | Makinede elektrik var mı? | Evet |
| 3 | Acil stop'a basıldığında makine duruyor mu? | Evet |

<!-- FOTO: Faz koruma rölesi — pano içi -->
![Faz koruma rölesi](../../assets/FOTO-5-4-3-faz-koruma.png)

---

## 5.4.4 Makine hazır durumu testi

| Kontrol | Beklenen sonuç |
|---------|----------------|
| Makine kullanıma hazır mı? | Evet |
| Tepe lambası sarı (kullanıma hazır) | Evet |

HMI arayüzünde alarm bulunmamalıdır. Makine kullanıma hazır değilse alarm ekranı ve kırmızı tepe lambası devreye girer.

<!-- FOTO: Tepe lambası — sarı (kullanıma hazır) -->
![Tepe lambası — kullanıma hazır](../../assets/FOTO-5-4-4-tepe-lambasi-sari.png)

---

## 5.4.5 Güvenlik fonksiyon test kontrol listesi

Tüm güvenlik testleri tamamlandığında aşağıdaki liste doldurulmalıdır:

| # | Test | Sonuç | Tarih | Test eden |
|---|------|-------|-------|-----------|
| 1 | Acil stop #1 — pano | ☐ OK / ☐ NOK | | |
| 2 | Acil stop #2 — giriş sağ | ☐ OK / ☐ NOK | | |
| 3 | Acil stop #3 — giriş sol | ☐ OK / ☐ NOK | | |
| 4 | Acil stop #4 — çıkış sol | ☐ OK / ☐ NOK | | |
| 5 | Reset prosedürü | ☐ OK / ☐ NOK | | |
| 6 | RFID sensör — kapak açık | ☐ OK / ☐ NOK | | |
| 7 | Faz koruma rölesi | ☐ OK / ☐ NOK | | |
| 8 | Makine kullanıma hazır | ☐ OK / ☐ NOK | | |

Tüm maddeler **OK** olmadan Bölüm 5.5 kurulum doğrulama testlerine ve operasyona geçilmemelidir.
