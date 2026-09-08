# 6.2 Güvenlik ayarları

Güvenlik ayarları, makinenin emniyet fonksiyonlarının (RFID, acil stop) tasarım amacına uygun kalmasını sağlar. Bu makinede operatör tarafından değiştirilebilir güvenlik parametresi (ışık perdesi mesafesi, bypass süresi vb.) **bulunmamaktadır**. Güvenlik donanımı bypass edilemez; ayar kapsamı yalnızca periyodik **fonksiyon testi** ve bakım erişim kurallarını içerir.

Acil stop konumları ve reset prosedürü **Bölüm 2.5**'te SSOT olarak verilmiştir; LOTO **Bölüm 2.4**'te tanımlıdır.

---

## 6.2.1 Emniyet kapısı ve RFID — bypass yasağı

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Emniyet kapısı bypass | **Kesinlikle bypass edilmemelidir** |
| Bakım erişimi | Elektrik kesildikten sonra kapaklar açılmalı; **LOTO** uygulanmalıdır |

Makinede sabit emniyet kapısı sayısı sıfırdır; bakım kapakları **RFID güvenlik sensörü** ile izlenir. RFID devre dışı bırakılamaz veya köprülenemez; bypass güvenlik kategorisi **CAT3** uyumunu bozar ve sorumluluk/garanti kapsamı dışına çıkarır (bkz. **Bölüm 2.1**).

**UYARI — Güvenlik cihazı devre dışı bırakma:** RFID sensörünün bypass edilmesi, kapak açıkken makinenin çalışmaya devam etmesine ve ezilme yaralanmasına yol açabilir. Bypass yapmayın.

---

## 6.2.2 Işık perdesi

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Işık perdesi ayar mesafesi (mm) | Makinede ışık perdesi **yoktur** |

Işık perdesi ayarı uygulanmaz. Konveyör giriş/çıkış bölgelerinde robot entegrasyonu vardır; erişim kontrolü RFID kapak sensörleri ve acil stop ile sağlanır.

---

## 6.2.3 Acil stop test periyodu

| Parametre | Değer |
|-----------|-------|
| Acil stop test periyodu | **Her ay bir kez** |

Aylık acil stop fonksiyon testi, acil stop devresinin ve reset zincirinin çalışır durumda kaldığını doğrular. Test atlanırsa arıza anında durdurma garanti edilemez.

### Periyodik test — özet

1. Test takvimine ayda bir kayıt açın (bakım formu veya CMMS).
2. **Bölüm 5.4.1** test prosedürünü uygulayın — 4 acil stop butonunun her biri ayrı test edilir.
3. Reset prosedürünü **Bölüm 2.5**'e göre doğrulayın.
4. Sonucu kayıt altına alın; NOK durumunda operasyona geçmeyin.

<!-- FOTO: Acil stop test kayıt formu veya pano reset (EKLENECEK: FOTO-6-2-0-acil-stop-periyot.jpg) -->
![Acil stop periyodik test](../../assets/6.2/1.png)

---

## 6.2.4 Güvenlik ayar kontrol listesi

| # | Kontrol | Durum |
|---|---------|:-----:|
| 1 | RFID / emniyet bypass yapılmadı | ☐ |
| 2 | Bakım erişimi LOTO ile yapılıyor | ☐ |
| 3 | Aylık acil stop testi planlandı ve kayıt altında | ☐ |

**Tarih:** _______________ **Kontrol eden:** _______________

---

Kurulum güvenlik testi için bkz. **Bölüm 5.4**; acil stop SSOT için bkz. **Bölüm 2.5**.
