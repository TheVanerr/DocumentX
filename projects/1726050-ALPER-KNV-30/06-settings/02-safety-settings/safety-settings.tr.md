# 6.2 Güvenlik ayarları

Güvenlik ayarları, makinenin emniyet fonksiyonlarının (RFID, acil stop) tasarım amacına uygun kalmasını sağlar. Bu makinede operatör tarafından değiştirilebilir güvenlik parametresi (ışık perdesi mesafesi, bypass süresi vb.) **bulunmamaktadır**. Güvenlik donanımı bypass edilemez; ayar kapsamı yalnızca periyodik **fonksiyon testi** ve bakım erişim kurallarını içerir.

Acil stop konumları ve reset prosedürü **Bölüm 2.5**'te verilmiştir; LOTO **Bölüm 2.4**'te tanımlıdır.

---

## 6.2.1 RFID bakım kapağı — bypass yasağı

| Parametre | Değer / Açıklama |
|-----------|------------------|
| RFID / kapak güvenlik sensörü | **Bypass edilmez, köprülenmez** |
| Bakım erişimi | Makine durdurulur; **LOTO** uygulanır; kapaklar ancak bundan sonra açılır |

Makinede sabit emniyet kapısı / sabit bariyer sayısı sıfırdır; bakım kapakları **RFID güvenlik sensörü** ile izlenir. RFID devre dışı bırakılamaz veya köprülenemez; bypass güvenlik kategorisi **Cat. 3** (EN ISO 13849-1) uyumunu bozar ve sorumluluk/garanti kapsamı dışına çıkarır (bkz. **Bölüm 2.1.3**).

Kurulum ve aylık **fonksiyon testi** (kapak açılınca duruş doğrulama) **Bölüm 5.4.2**'de tanımlanır; bu test bakım erişimi değildir. Bakım/temizlik için **Bölüm 2.4** LOTO zorunludur.

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

Kurulum güvenlik testi için bkz. **Bölüm 5.4**; acil stop için bkz. **Bölüm 2.5**.
