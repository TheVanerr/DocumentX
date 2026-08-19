<!-- ÇEVİRİ GEREKLİ → EN | kaynak: TR | bu satırı çeviri bitince silin. Başlık/görsel/tablo yapısını koruyun, yalnızca metni çevirin. -->

# 5.4. Güvenlik Sistemlerinin Kontrolü ve Testi

Kurulum tamamlandıktan ve elektrik bağlantıları yapıldıktan sonra, makineye ilk kez start verilmeden önce aşağıdaki güvenlik sistemlerinin her biri ayrı ayrı test edilmeli ve kabul kriterleri sağlanmadan bir sonraki adıma geçilmemelidir.

## 5.4.1. Acil Stop Butonları

**Kapsam:** Tüm modellerde kontrol panosu üzerinde bir adet acil stop butonu bulunur. Toplam uzunluğu 4 metreyi aşan modellerde ek olarak makinenin her köşesine birer adet acil stop butonu yerleştirilir.

**Test prosedürü:**
1. Makine çalışır durumdayken pano üzerindeki acil stop butonuna basılır.
2. Tüm hareketli ve elektrikli elemanların (tambur motoru, pompalar, ısıtıcılar) derhal durduğu gözlemlenir.
3. Butonu serbest bırakmadan makineye start komutu verilmeye çalışılır.
4. Köşe butonları mevcut ise aynı test her bir buton için ayrı ayrı tekrarlanır.

**Kabul kriteri:** Her acil stop butonuna basıldığında tüm sistem anında durmalı ve buton serbest bırakılıp reset yapılmadan makine yeniden start alamamalıdır. Aksi durumda makine devreye alınmamalı ve yetkili servis ile iletişime geçilmelidir.

---

## 5.4.2. Alt Seviye (Kuru Çalışma Koruma) Sensörü

**Kapsam:** Her tankta, pompalar ve ısıtıcıların kuru çalışmasını engellemek amacıyla alt seviye sensörü bulunur. Tank su seviyesi bu sensörün altına düştüğünde pompalar ve ısıtıcılar otomatik olarak devre dışı kalır; aynı zamanda pano üzerindeki reset butonu aktive olur. Operatör suyu yeterli seviyeye tamamlamadan ve reset butonuna basmadan sisteme start verilemez.

**Test prosedürü:**
1. Tank kasıtlı olarak düşük seviyede bırakılır ya da sensörün bağlantı kablosu geçici olarak çıkarılarak düşük seviye koşulu simüle edilir.
2. Makineye start komutu verilir.
3. Pompalar ve ısıtıcıların devreye girmediği, pano üzerinde reset uyarısının aktive olduğu doğrulanır.
4. Tank uygun seviyeye doldurulur (veya sensör bağlantısı yeniden yapılır).
5. Reset butonuna basılmadan start komutu verilir; sistemin start almadığı doğrulanır.
6. Reset butonuna basılır ve ardından start komutu verilir; sistemin normal biçimde devreye girdiği gözlemlenir.

**Kabul kriteri:** Düşük seviye koşulunda pompalar ve ısıtıcılar kesinlikle çalışmamalıdır. Tank doldurulduktan sonra sistem yalnızca reset butonuna basılmasının ardından start alabilmelidir. Bu sıralamadan herhangi bir sapma tespit edilmesi durumunda makine devreye alınmamalı ve yetkili servis ile iletişime geçilmelidir.

---

## 5.4.3. Üst Kapak Güvenlik Sistemi

VDL serisinde üst kapaklar standart konfigürasyonda cıvatalı bağlantı sistemiyle sabitlenmiş olup yalnızca bilinçli bir teknik müdahaleyle açılabilir. Bu yapı, operasyon sırasında kapakların istem dışı açılmasını yapısal olarak engellediğinden ek elektriksel bir kilit sistemi gerektirmez. Cıvatalı kapak konfigürasyonuna sahip makinelerde bu bölüm kapsamında yapılacak ek bir test bulunmamaktadır.

### Opsiyonel: Açılabilir Kapak + Güvenlik Kilidi Sistemi

Açılabilir kapak konfigürasyonu talep edilmişse her kapağa manipüle edilemeyen güvenlik tipi (RFID) switch entegre edilir ve bu switchler bir emniyet rölesine bağlanır. Bu konfigürasyonda herhangi bir kapak açık konumdayken sistem start alamamaktadır.

**Test prosedürü:**
1. Tüm kapaklar kapalıyken makineye start komutu verilir ve sistemin normal biçimde devreye girdiği doğrulanır.
2. Makine çalışır durumdayken herhangi bir kapak açılır.
3. Sistemin derhal durduğu ve kapak tekrar kapatılmadan start alınamadığı doğrulanır.
4. Test, mevcut her kapak için ayrı ayrı tekrarlanır.

**Kabul kriteri:** Herhangi bir kapak açık konumdayken sistem hiçbir koşulda start alamamalıdır. Kapak kapatıldıktan sonra sistem normal biçimde devreye girebilmelidir. Bu davranıştan herhangi bir sapma tespit edilmesi durumunda makine devreye alınmamalı ve yetkili servis ile iletişime geçilmelidir.