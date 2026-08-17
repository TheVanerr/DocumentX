# 5.5. Kurulum Doğrulama ve Test

Bu bölüm, KNV 30 3000 2B makinesinin kurulum sonrası mekanik, elektrik, pnömatik/medya ve güvenlik fonksiyonlarının doğrulanması ile **15 dakikalık boş koşu testi** prosedürlerini tanımlar.

Testler, Bölüm **5.4** güvenlik testleri tamamlandıktan sonra uygulanmalıdır. Tüm kontroller **OK** olmadan operasyona geçilmemelidir.

---

## 5.5.1. Mekanik Kurulum Testi

| # | Kontrol | Beklenen sonuç | Durum |
|---|---------|-----------------|-------|
| 1 | Makine terzide mi? | Evet — ayarlanabilir ayaklar ile 0,5 mm tolerans içinde | ☐ |

Mekanik kurulum testi, Bölüm 5.2 konumlandırma ve seviye ayarı tamamlandıktan sonra yapılır. Su terazisi veya eşdeğer ölçüm aleti ile her iki eksende kontrol edilmelidir.

<!-- FOTO: Su terazisi ile terazi kontrolü -->
![Mekanik test — terazi kontrolü](../../assets/FOTO-5-5-0-terazi-test.png)

---

## 5.5.2. Elektrik Devreye Alma Testi

| # | Kontrol | Beklenen sonuç | Durum |
|---|---------|-----------------|-------|
| 1 | Faz koruma rölesi çıkış veriyor mu? | Evet | ☐ |
| 2 | Makinede elektrik var mı? | Evet | ☐ |
| 3 | Acil stop'a basıldığında makine duruyor mu? | Evet | ☐ |

Elektrik testleri pano üzerinden devreye alma sonrasında gerçekleştirilir. Faz yönü faz sıra rölesi ile doğrulanmış olmalıdır.

<!-- FOTO: Pano açık — devreye alma testi -->
![Elektrik devreye alma testi](../../assets/FOTO-5-5-1-elektrik-test.png)

---

## 5.5.3. Pnömatik ve Medya Bağlantı Testi

| # | Kontrol | Beklenen sonuç | Durum |
|---|---------|-----------------|-------|
| 1 | Hava bağlantısı yapıldıktan sonra HMI manuel sayfasında hava bilgisi yeşil yanıyor mu? | Evet | ☐ |
| 2 | Su bağlantısı yapıldıktan sonra HMI manuel sayfasında su bilgisi yeşil yanıyor mu? | Evet | ☐ |

Bağlantı parametreleri:

| Medya | Değer |
|-------|-------|
| Basınçlı hava | 6 bar — 3/4" |
| Su | 1 bar — 1/2" |

<!-- FOTO: HMI manuel sayfa — hava ve su yeşil -->
![Pnömatik/medya test — HMI manuel](../../assets/FOTO-5-5-2-medya-test.png)

---

## 5.5.4. Güvenlik Fonksiyon Testi

| # | Kontrol | Beklenen sonuç | Durum |
|---|---------|-----------------|-------|
| 1 | Acil stop'a basıldığında makine duruyor mu? | Evet — her fonksiyon durur | ☐ |
| 2 | Makine kullanıma hazır mı? | Evet — sarı tepe lambası | ☐ |
| 3 | Kapaklar açıldığında RFID sensörü makineyi durduruyor mu? | Evet | ☐ |

Detaylı acil stop test prosedürü için bkz. Bölüm **5.4**.

<!-- FOTO: Güvenlik test — RFID sensör tetikleme -->
![Güvenlik fonksiyon testi](../../assets/FOTO-5-5-3-guvenlik-test.png)

---

## 5.5.5. Boş Koşu Testi

| Parametre | Değer |
|-----------|-------|
| Boş koşu test süresi | **15 dakika** |

### Test prosedürü

1. Tüm Bölüm 5.5.1–5.5.4 kontrolleri **OK** olarak tamamlanmış olmalıdır.
2. Makine **parça olmadan** (boş) **15 dakika** çalıştırılır.
3. Test süresi tamamlandığında makine durdurulur.

| # | Kontrol | Durum |
|---|---------|-------|
| 1 | 15 dk boş koşu testi tamamlandı | ☐ OK / ☐ NOK |

Boş koşu testi başarılı ise makine **kullanıma hazır** kabul edilir (Bölüm 5.1 Adım 9).

<!-- FOTO: Boş koşu testi — makine çalışır durumda -->
![Boş koşu testi — 15 dk](../../assets/FOTO-5-5-4-bos-kosu.png)

---

## 5.5.6. Kurulum Doğrulama Özet Kontrol Listesi

| Bölüm | Test | Tamamlandı |
|-------|------|:----------:|
| 5.5.1 | Mekanik — terazi | ☐ |
| 5.5.2 | Elektrik — faz koruma, acil stop | ☐ |
| 5.5.3 | Medya — HMI hava/su yeşil | ☐ |
| 5.5.4 | Güvenlik — RFID, kullanıma hazır | ☐ |
| 5.5.5 | Boş koşu — 15 dk | ☐ |

**Tarih:** _______________ **Test eden:** _______________ **Onaylayan:** _______________
