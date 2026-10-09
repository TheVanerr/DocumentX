# 6.2 Güvenlik ayarları

Güvenlik ayarları, makinenin emniyet fonksiyonlarının (bakım kapağı manyetik switch'leri, acil stop devresi, emniyet röleleri, seviye interlock'u) tasarım amacına uygun kalmasını sağlar. Bu makinede operatör tarafından değiştirilebilir güvenlik parametresi (ışık perdesi mesafesi, bypass süresi, muting vb.) **bulunmamaktadır**. Güvenlik donanımı donanımsal röle mantığı ile çalışır ve baypas edilemez; ayar kapsamı yalnızca periyodik **fonksiyon testi** ve bakım erişim kurallarını içerir.

Acil stop konumları ve reset prosedürü **Bölüm 2.5**'te verilmiştir; LOTO **Bölüm 2.4**'te tanımlıdır.

---

## 6.2.1 Bakım kapağı switch'leri — bypass yasağı

| Parametre | Değer / Açıklama |
| :--- | :--- |
| Emniyet kapısı bypass (bakım) | **Yok — bypass edilmez, köprülenmez** |
| Bakım erişimi | Makine durdurulur; ana şalter OFF; **LOTO** uygulanır; kapaklar ancak bundan sonra açılır |

Makinede 7 bakım kapağı Omron F3STGRNLPU21M1J8 manyetik switch'leri ile izlenir; switch'ler seri bağlıdır ve Omron G9SB emniyet rölesi tarafından değerlendirilir. Switch'ler mıknatıs veya kapak ile hizalı olmalıdır; bypass, köprüleme, mıknatısla kandırma veya switch üzerine yabancı cisim konulması **kesinlikle yasaktır** — güvenlik fonksiyonu devre dışı kalır ve makine garanti ve sorumluluk kapsamı dışına çıkar (**Bkz. Bölüm 2.1.3**).

Kurulum ve **haftalık** kısa fonksiyon testi (kapak açılınca duruş doğrulama) **Bölüm 5.4.2**'de tanımlanır; bu test bakım erişimi değildir. Bakım/temizlik için **Bölüm 2.4** LOTO zorunludur.

**UYARI — Güvenlik cihazı devre dışı bırakma:** Kapak switch'inin bypass edilmesi, kapak açıkken pompaların +70 °C su püskürtmeye ve konveyörün dönmeye devam etmesine; haşlanma ve ezilme yaralanmasına yol açabilir. Bypass yapmayın.

---

## 6.2.2 Işık perdesi

| Parametre | Değer / Açıklama |
| :--- | :--- |
| Işık perdesi ayar mesafesi (mm) | Makinede ışık perdesi **yoktur** |

Işık perdesi ayarı uygulanmaz. Konveyör giriş/çıkış bölgeleri tel koruma kafesi ile çevrilidir; erişim kontrolü kapak switch'leri ve acil stop ile sağlanır.

---

## 6.2.3 Acil stop test periyodu

| Parametre | Değer |
| :--- | :--- |
| Acil stop test periyodu | **Her ay bir kez** (**Bkz. Bölüm 9.1.3**) |
| Kapak switch kısa testi | **Haftalık** |
| Emniyet fonksiyon test raporu (acil stop, kapak, kaçak akım) | **Yıllık** |

Aylık acil stop fonksiyon testi, 7 butonun her birinin emniyet rölesini açtığını ve RESET zincirinin çalışır durumda kaldığını doğrular. Test atlanırsa arıza anında durdurma garanti edilemez; buton kontak blokları ve röle girişlerindeki gizli arızalar yalnızca testte ortaya çıkar.

**Periyodik test — özet**

1. Test takvimine ayda bir kayıt açın (bakım formu).
2. **Bölüm 5.4.1** test prosedürünü uygulayın — 7 acil stop butonunun her biri ayrı test edilir.
3. Reset prosedürünü **Bölüm 2.5**'e göre doğrulayın.
4. Sonucu **Bölüm 9.1.7** bakım kayıt formuna işleyin; NOK durumunda operasyona geçmeyin ve üretici servisini bilgilendirin.

---

## 6.2.4 Güvenlik ayar kontrol listesi

| # | Kontrol | Durum |
| :---: | :--- | :---: |
| 1 | Kapak switch'leri / emniyet devresi bypass yapılmadı | ☐ |
| 2 | Bakım erişimi LOTO ile yapılıyor | ☐ |
| 3 | Aylık acil stop testi planlandı ve kayıt altında | ☐ |
| 4 | Haftalık kapak switch kısa testi planlandı | ☐ |
| 5 | Seviye sensörü köprülenmedi | ☐ |

**Tarih:** _______________ **Kontrol eden:** _______________

---

Kurulum güvenlik testi için bkz. **Bölüm 5.4**; acil stop için bkz. **Bölüm 2.5**.
