# 6.2 Güvenlik ayarları

Güvenlik ayarları, makinenin emniyet fonksiyonlarının (bakım kapağı manyetik switch'leri, acil stop devresi, emniyet röleleri, seviye interlock'u) tasarım amacına uygun kalmasını sağlar. Bu makinede operatör tarafından değiştirilebilir güvenlik parametresi (ışık perdesi mesafesi, bypass süresi, muting vb.) **bulunmamaktadır**. Güvenlik donanımı donanımsal röle mantığı ile çalışır ve bypass edilemeyecek şekilde tasarlanmıştır; ayar kapsamı yalnızca periyodik **fonksiyon testi** ve bakım erişim kurallarını içerir.

Acil stop konumları ve reset prosedürü için **Bkz. Bölüm 2.5**; LOTO için **Bkz. Bölüm 2.4**.

---

## 6.2.1 Bakım kapağı switch'leri — bypass yasağı

| Parametre | Değer / Açıklama |
| :--- | :--- |
| Emniyet kapısı bypass (bakım) | **Yok — bypass edilmez, köprülenmez** |
| Bakım erişimi | Makine durdurulur; ana şalter OFF; **LOTO** uygulanır; kapaklar ancak bundan sonra açılır |

Makinede 7 bakım kapağı Omron F3STGRNLPU21M1J8 manyetik switch'leri ile izlenir; switch'ler seri bağlıdır ve kapak switch zincirine ayrılmış Omron G9SB-2002-A emniyet rölesi (10 11531) tarafından değerlendirilir. Acil stop zinciri ayrı bir G9SB-2002-A rölesi (10 00220) ile izlenir (**Bkz. Bölüm 2.1.3**). Switch'ler mıknatıs veya kapak ile hizalı olmalıdır; bypass, köprüleme, mıknatısla kandırma veya switch üzerine yabancı cisim konulması **kesinlikle yasaktır** — güvenlik fonksiyonu devre dışı kalır ve makine garanti ve sorumluluk kapsamı dışına çıkar.

Kurulum testi ve **haftalık** kısa fonksiyon testi (kapak açılınca duruş doğrulama) **Bölüm 5.4.2**'de tanımlanır; bu test bakım erişimi değildir. Bakım ve temizlik için LOTO zorunludur (**Bkz. Bölüm 2.4**).

**UYARI — Güvenlik cihazı devre dışı bırakma:** Kapak switch'inin bypass edilmesi, kapak açıkken pompaların +70 °C'ye kadar sıcak su püskürtmeye ve konveyörün dönmeye devam etmesine; haşlanma ve ezilme yaralanmasına yol açabilir. Kapak switch'lerini bypass etmeyin.

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

Aylık acil stop fonksiyon testi, 7 butonun her birinin acil stop zincirindeki emniyet rölesini açtığını ve RESET zincirinin çalışır durumda kaldığını doğrular. Test atlanırsa arıza anında durdurma garanti edilemez; buton kontak blokları ve röle girişlerindeki gizli arızalar yalnızca testte ortaya çıkar.

**Periyodik test — özet**

1. Test takvimine ayda bir kayıt açın (bakım formu).
2. 7 acil stop butonunun her birini **Bölüm 5.4.1** test prosedürüne göre ayrı ayrı test edin.
3. Her testten sonra reset prosedürünü **Bölüm 2.5**'e göre uygulayın.
4. Sonucu **Bölüm 9.1.7** bakım kayıt formuna işleyin.
5. Sonuç NOK ise makineyi çalıştırmayın ve üretici servisini bilgilendirin (**Bkz. Bölüm 1.3**).

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

Kurulum güvenlik testi için **Bkz. Bölüm 5.4**; acil stop için **Bkz. Bölüm 2.5**.
