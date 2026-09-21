# 7.4 Operasyon sekansı

Otomatik operasyon sekansı, parçaların konveyör üzerinde **yıkama → durulama → kurutma** proseslerinden geçmesini tanımlar. Makine **tam otomatik** çalışır; PLC, seçili HMI fonksiyonlarına göre pompaları, fanları ve konveyörü koordine eder.

Besleme **sol**, boşaltma **sağ** yöndedir. Bu projede giriş ve çıkış **robot** ile yapılır; robot prosedürleri müşteri hattına aittir.

---

## 7.4.1 Otomatik cycle — genel akış

| Adım | Açıklama |
|------|----------|
| 1 | HMI Çalışma Sayfası'nda yıkama, durulama, kurutma 1, kurutma 2, egzoz **on/off** ayarlanır |
| 2 | Hazırlık tamamlandıktan sonra **Makine Start** verilir |
| 3 | Robot parçayı konveyöre yerleştirir (giriş — müşteri hattı) |
| 4 | Parça **yıkama** banyosundan geçer (yıkama aktifse) |
| 5 | Parça **durulama** banyosundan geçer (durulama aktifse) |
| 6 | Parça **kurutma** bölgesinden geçer (kurutma 1/2 aktifse) |
| 7 | Parça çıkışa ulaşır; robot parçayı alır (çıkış — müşteri hattı) |

Parçalar konveyör hattı boyunca sürekli akış prensibiyle ilerler; hat **7/24** robot entegrasyonu ile çalışacak şekilde tasarlanmıştır.

![Konveyör parça akışı](../../assets/7.4/1.png)

---

## 7.4.2 Döngü süresi ve kapasite

| Parametre | Değer | Anlam |
|-----------|-------|--------|
| Parça geçiş süresi — nominal | **900 sn** (15 dk) | Bir parçanın yıkama → durulama → kurutma hattını katetme süresi |
| Minimum kapasite referansı | **730 adet/saat** | Konveyör üzerinde **aynı anda birden fazla parça** varken hat throughput'u (bkz. **Bölüm 3.3.2**) |
| Nominal kapasite | Kullanıcı firma belirler | |

**900 sn** robot cycle süresi değildir. Robot giriş/çıkış cycle'ı müşteri hattına aittir ve 730 adet/saat ile uyumlu olacak kadar kısa olmalıdır. 900 sn, tek parçanın proses tünelindeki kalışıdır.

Kapasite ve reçete detayları **Bölüm 8**'de açıklanmıştır.

---

## 7.4.3 Ürün giriş ve çıkış — robot entegrasyonu

| Parametre | Değer |
|-----------|-------|
| Giriş | Robot parçayı **sol** taraftan konveyöre yerleştirir |
| Çıkış | Robot parçayı **sağ** taraftan alır |
| Giriş/çıkış prosedürü | **Müşteri hattına aittir** |
| Error-461 onayı | Hat sorumlusu veya bakım — HMI **Ürün Alındı Onay** |

Makine PLC'si **ürün kaldı sensörü** ve ilgili interlock'lar ile çıkış durumunu izler. Çıkış konveyöründe parça algılandığında ve robot almadığında makine durabilir (Error-461); parça alındıktan sonra HMI Alarm Sayfası'ndaki **Ürün Alındı Onay** düğmesine hat sorumlusu veya bakım personeli basarak operasyonu devam ettirir (bkz. **Bölüm 3.4.6**).

---

## 7.4.4 Proses fonksiyonları — sekans içi davranış

| Fonksiyon | Sekans rolü |
|-----------|-------------|
| Yıkama | Yıkama pompası, ısıtıcı, yağ sıyırıcı (ayar sürelerine göre) |
| Durulama | Durulama pompası ve ısıtıcı |
| Kurutma 1 / 2 | Kurutma fan grupları — bağımsız on/off |
| Egzoz | Kurutma bölgesi nem tahliyesi |

Fonksiyon off konumdayken ilgili proses adımı atlanır veya pasif kalır; hat tasarımına uygun kombinasyon operatör/HMI yapılandırması ile belirlenir.

---

## 7.4.5 Hata durumunda makine davranışı

| Durum | Makine davranışı |
|-------|------------------|
| Çalışmayı etkileyen hata (RFID kapak, acil stop, kritik seviye vb.) | Makine **durur** |
| Error-235 — giriş hava basıncı düşük | Dolum vanası gibi anlık hava ihtiyacı yoksa makine kısa süre **devam edebilir**; hava hattını çalışma sırasında **sökmek yasaktır** |
| Alarm | HMI Alarm Sayfası + tepe lambası **kırmızı** |

Hata giderme **Bölüm 11**'de tanımlıdır. Alarm varken start vermeyin.

**DİKKAT — Kapak açık:** RFID sensörü tetiklendiğinde makine durur; kapak kapatılıp reset uygulanmadan start vermeyin.

---

Başlatma için bkz. **Bölüm 7.2**; arıza tablosu için bkz. **Bölüm 11.1.2**.
