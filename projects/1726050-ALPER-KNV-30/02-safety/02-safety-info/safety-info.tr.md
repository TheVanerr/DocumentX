# 2.2 Kalıntı riskler ve makine etiketleri

Tasarım aşamasında EN ISO 12100 risk değerlendirmesi uygulanmış; mümkün olan riskler tasarımla azaltılmıştır. Buna rağmen makinenin doğası gereği tamamen ortadan kaldırılamayan **kalıntı riskler** bulunur. Personel bu risklerin bilincinde olmalı; ilgili KKD'yi kullanmalı ve **Bölüm 2.6** matrisine uymalıdır.

Makine üzerindeki uyarı etiketleri **Bölüm 1.2**'de genel sembol kuralları ile açıklanmıştır; bu bölüm makineye özel kalıntı riskleri ve etiket konumlarını tanımlar.

---

## 2.2.1 Kalıntı riskler

**Termal risk — sıcak proses sıvısı ve yüzeyler**

Yıkama ve durulama tanklarındaki proses sıvısı ısıtılır; su giriş sıcaklığı **+10°C ile +70°C** aralığında olabilir (**Bkz. Bölüm 3.3.5**). Tank, boru, ısıtıcı ve parça yüzeyleri proses sonrasında da sıcak kalabilir. Çıplak elle temas birinci veya ikinci derece yanık riski doğurur. Bakım veya temizlik öncesinde sistemin soğuması için yeterli süre tanıyın.

**Mekanik risk — konveyör ve hareketli parçalar**

Konveyör sürekli veya start komutu ile hareket eder; parça giriş/çıkış bölgesinde sıkışma ve ezilme riski vardır. Makine çalışırken konveyör hattına, pompa/fan muhafazalarına veya hareketli mekanizmaya el, ayak veya alet uzatmayın. Robot entegrasyonlu hatta dahi acil stop ve RFID fonksiyonları devrededir.

**Kimyasal ve sıvı maruziyeti**

Yıkama ve durulama proseslerinde yağ, kir ve proses sıvısı bulunur. Filtre temizliği, tank bakımı ve sızıntı durumlarında cilde veya göze sıçrama riski vardır. Sızıntı tavasında su tespiti (HMI alarm Error-452) kaygan zemin ve kayma riski oluşturur.

**Elektriksel risk**

Elektrik panosunda **380 V**, **50 Hz**, **3 faz** besleme bulunur (**Bkz. Bölüm 3.3.3**). Pano kapağını yalnızca yetkili elektrik personeli açabilir; müdahale öncesi **Bölüm 2.4** LOTO prosedürü zorunludur. Ana şalter kapalı olsa bile sürücü/kondansatör devrelerinde kısa süreli tehlikeli gerilim kalabilir.

**Pnömatik risk**

Basınçlı hava beslemesi **6 bar**'dır (**Bkz. Bölüm 3.3.5**). Hat basıncı ani boşaltıldığında veya bağlantı kopması durumunda yaralanma riski oluşabilir. Pnömatik müdahalelerde basıncı izole edin ve kalıntı basıncı tahliye edin (**Bkz. Bölüm 2.4**).

**Gürültü**

Makine gürültü seviyesi **65 dB(A)** olarak tanımlanmıştır (**Bkz. Bölüm 3.3.6**). Uzun süreli yakın mesafe çalışmada işverenin işyeri gürültü mevzuatına göre ek işitme koruması değerlendirmesi gerekebilir.

---

## 2.2.2 Makine üzerindeki uyarı etiketleri

Makine gövdesi ve elektrik panosundaki piktogramlar ISO 7010 ile uyumludur. Etiket sökme, boyama veya okunamaz hale getirme yasaktır.

| Etiket / sembol | Tipik konum | Gerekli eylem |
| :--- | :--- | :--- |
| Genel tehlike | Makine gövdesi, proses bölgeleri | **Bkz. Bölüm 2** |
| Sıcak yüzey | Tank ve ısıtıcı yakını | Soğumadan dokunmayın; ısıya dayanıklı eldiven |
| Korozif / kimyasal | Tank ve dozaj yakını | KKD kullanın; doğrudan temas etmeyin |
| Ezilme / sıkışma | Konveyör giriş/çıkış | Çalışırken bölgeye girmeyin |
| Kaygan zemin | Makine tabanı, sızıntı tavası | Sızıntıyı giderin; dikkatli yürüyün |
| Elektrik tehlikesi | Elektrik panosu | Yalnızca yetkili personel; LOTO uygulayın |
| KKD sembolleri | Operatör ve bakım bölgeleri | **Bkz. Bölüm 2.6** |

Yıpranan etiketleri derhal yenileyin (**Bkz. Bölüm 1.3**). Etiketsiz makineyi çalıştırmayın.
