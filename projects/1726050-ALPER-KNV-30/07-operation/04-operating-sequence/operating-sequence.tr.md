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

<!-- FOTO: Konveyör proses akışı — sol giriş / sağ çıkış -->
![Konveyör parça akışı](../../assets/7.4/1.png)

---

## 7.4.2 Cycle süresi ve kapasite

| Parametre | Değer |
|-----------|-------|
| Cycle süresi — nominal | **900 sn** (15 dk) |
| Minimum kapasite referansı | 730 adet/saat (bkz. **Bölüm 3.3.2**) |
| Nominal kapasite | Kullanıcı firma belirler |

Nominal döngü süresi parça geometrisi, robot cycle time ve seçili proses adımlarına bağlı olarak değişebilir. Kapasite ve reçete detayları **Bölüm 8**'de açıklanmıştır.

---

## 7.4.3 Ürün giriş ve çıkış — robot entegrasyonu

| Parametre | Değer |
|-----------|-------|
| Giriş | Robot parçayı **sol** taraftan konveyöre yerleştirir; operatör yok |
| Çıkış | Robot parçayı **sağ** taraftan alır; operatör yok |
| Giriş/çıkış prosedürü | **Müşteri hattına aittir** |

Makine PLC'si **ürün kaldı sensörü** ve ilgili interlock'lar ile çıkış durumunu izler. Çıkış konveyöründe parça algılandığında ve robot almadığında makine durabilir (Error-461); parça alındıktan sonra HMI Alarm Sayfası'ndaki **Ürün Alındı Onay** düğmesine basılarak operasyon devam ettirilir (bkz. **Bölüm 3.4.6**).

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
| Anlık hava kesintisi (çalışırken hava hattı sökülmesi) | Makine **çalışmaya devam edebilir** (anlık hava ihtiyacı olmayan durum) |
| Alarm | HMI Alarm Sayfası + tepe lambası **kırmızı** |

Hata giderme **Bölüm 11**'de tanımlıdır. Alarm varken start vermeyin.

**DİKKAT — Kapak açık:** RFID sensörü tetiklendiğinde makine durur; kapak kapatılıp reset uygulanmadan start vermeyin.

---

Başlatma için bkz. **Bölüm 7.2**; arıza tablosu için bkz. **Bölüm 11.2**.
