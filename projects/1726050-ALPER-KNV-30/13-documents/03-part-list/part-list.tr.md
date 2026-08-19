# 13.3 Parça listesi

Makine **yedek parça listesi (BOM)** bu kılavuza gömülüdür; ayrı evrak olarak teslim edilmez. SSOT: `1726050-ALPER-KNV 30 DATA` — `[PARCA_LISTESI]`.

Operasyonel özet (Kritik + Tüketim) için bkz. Bölüm **9.1.5**.

Parça fotoğrafları (isteğe bağlı) `assets/9.1/{sipariş kodu}.png` olarak eklenir.

---

## 13.3.1 Yedek parça tablosu (22 kalem)

| Sipariş kodu | Parça adı | Kategori | Önerilen stok | Konum / fonksiyon | Gerekçe |
|--------------|-----------|----------|---------------|-------------------|---------|
| 07 10214 | ÖN FİLTRE NS KOMPLESİ | Tüketim | 2 | Yıkama tankı | Günlük temizlik; tüketim |
| 10 02976 | TERMOKUPL ETB30F06-5Ç | Kritik | 1 | Tank ısıtma | Arızada sıcaklık kontrolü/ısıtma devre dışı |
| 07 15142 | REZİSTANS KOMPLESİ 8000W 50CM DÜZ DİKİŞSİZ | Kritik | 2 | Tank ısıtma | Arızada proses sıcaklığı sağlanamaz |
| 07 00670 | EMİŞ FİLTRESİ KOMPLESİ (PYM2,KBN,VDL,ULT,KNV) | Tüketim | 2 | Pompa emiş hattı | Periyodik değişim |
| 07 16791 | SEVİYE SENSÖRÜ ÇAT.TİP VEGASWING 51 DİŞ ÇEKİLMİŞ | Kritik | 0 (siparişle) | Tank seviye | Arızada dolum/seviye kontrolü bozulur |
| 10 19471 | SENSÖR E2BM12KN08M1B1 OMRON END.PROX.M12 8MM | Önerilen | 1 | Proximity sensör | Konum algılama |
| 10 17815 | SENSÖR E3FA-DP23 OMRON END.PROX.M18 1000MM | Önerilen | 1 | Proximity sensör | Konum algılama |
| 10 03088 | NOZZLE 632.724.16.CC | Tüketim | 32 | Yıkama/durulama nozul | Aşınan parça |
| 07 17295 | SALYANGOZLU FAN ENA 2 0,37 KW HAVA SO.SİLİKONLU | Önerilen | 0 (siparişle) | Egzost | Arızada egzoz/havalandırma etkilenir |
| 07 03497 | YAĞ SIYIRICI TEFLONU | Tüketim | 1 | Yağ sıyırıcı | Periyodik değişim |
| 10 00586 | REDÜKTÖR MOTORU 0,09KW 1500D/D B14 SIYIRICI | Kritik | 0 (siparişle) | Yağ sıyırıcı | Arızada yağ sıyırıcı çalışmaz |
| 10 01002 | REDÜKTÖR EN:30 I:80 B:05 | Önerilen | 0 (siparişle) | Yağ sıyırıcı tahrik | Motor ile birlikte |
| 10 02526 | YAĞ KEÇESİ 20*42*7 | Tüketim | 1 | Yağ sıyırıcı redüktör | Bakım tüketimi |
| 10 01017 | RULMAN 6004 2RS ORS | Tüketim | 1 | Yağ sıyırıcı / genel | Bakım tüketimi |
| 10 05378 | TORBA FİLTRE 200 MİKRON (50CM PASL. TEL ÇERÇEVE) | Tüketim | 2 | Pompa çıkışı | Haftalık değişim |
| 10 00296 | PASLANMAZ SEVİYE BEKÇİSİ | Kritik | 0 (siparişle) | Tank seviye | Seviye güvenlik/kontrol |
| 10 19321 | REDÜKTÖR WITTENSTEIN NP035S-MF2-30-1G1-1S | Kritik | 0 (siparişle) | Konveyör tahrik | Arızada konveyör durur |
| 10 19317 | SERVO MOTOR SIEMENS SIMOTICS 1FL6064-1AC61-2AA1 | Kritik | 0 (siparişle) | Konveyör | Arızada parça akışı durur |
| 10 19318 | SERVO SÜRÜCÜ SIEMENS 6SL3210-5FE11-5UF0 | Kritik | 0 (siparişle) | Konveyör | Arızada parça akışı durur |
| 10 07147 | SWITCH F3STGRNLPU21M1J8 OMRON MANYETİK KAPI | Kritik | 1 | RFID / kapak güvenlik | Arızada güvenlik fonksiyonu etkilenir |
| 07 17478 | KNV 30 3000 2B PRO IDE GOULDS POMPA KOMPLESİ | Kritik | 0 (siparişle) | Durulama pompası | Arızada durulama prosesi durur |
| 10 06675 | POMPA LOWARA ESHE 40-160/30 380V/50HZ | Kritik | 0 (siparişle) | Yıkama pompası | Arızada yıkama prosesi durur |

---

## 13.3.2 Parça görselleri

Fotoğraflar yüklendikçe aşağıdaki tabloda görünür. Dosya adı = sipariş kodu (ör. `10 06675.png`).

| Görsel | Sipariş kodu | Parça adı | Kategori | Önerilen stok | Konum / fonksiyon | Gerekçe |
|--------|--------------|-----------|----------|---------------|-------------------|---------|
| ![ÖN FİLTRE NS KOMPLESİ](../../assets/9.1/07%2010214.png) | 07 10214 | ÖN FİLTRE NS KOMPLESİ | Tüketim | 2 | Yıkama tankı | Günlük temizlik; tüketim |
| ![TERMOKUPL ETB30F06-5Ç](../../assets/9.1/10%2002976.png) | 10 02976 | TERMOKUPL ETB30F06-5Ç | Kritik | 1 | Tank ısıtma | Arızada sıcaklık kontrolü/ısıtma devre dışı |
| ![REZİSTANS KOMPLESİ 8000W 50CM DÜZ DİKİŞSİZ](../../assets/9.1/07%2015142.png) | 07 15142 | REZİSTANS KOMPLESİ 8000W 50CM DÜZ DİKİŞSİZ | Kritik | 2 | Tank ısıtma | Arızada proses sıcaklığı sağlanamaz |
| ![EMİŞ FİLTRESİ KOMPLESİ (PYM2,KBN,VDL,ULT,KNV)](../../assets/9.1/07%2000670.png) | 07 00670 | EMİŞ FİLTRESİ KOMPLESİ (PYM2,KBN,VDL,ULT,KNV) | Tüketim | 2 | Pompa emiş hattı | Periyodik değişim |
| ![SEVİYE SENSÖRÜ ÇAT.TİP VEGASWING 51 DİŞ ÇEKİLMİŞ](../../assets/9.1/07%2016791.png) | 07 16791 | SEVİYE SENSÖRÜ ÇAT.TİP VEGASWING 51 DİŞ ÇEKİLMİŞ | Kritik | 0 (siparişle) | Tank seviye | Arızada dolum/seviye kontrolü bozulur |
| ![SENSÖR E2BM12KN08M1B1 OMRON END.PROX.M12 8MM](../../assets/9.1/10%2019471.png) | 10 19471 | SENSÖR E2BM12KN08M1B1 OMRON END.PROX.M12 8MM | Önerilen | 1 | Proximity sensör | Konum algılama |
| ![SENSÖR E3FA-DP23 OMRON END.PROX.M18 1000MM](../../assets/9.1/10%2017815.png) | 10 17815 | SENSÖR E3FA-DP23 OMRON END.PROX.M18 1000MM | Önerilen | 1 | Proximity sensör | Konum algılama |
| ![NOZZLE 632.724.16.CC](../../assets/9.1/10%2003088.png) | 10 03088 | NOZZLE 632.724.16.CC | Tüketim | 32 | Yıkama/durulama nozul | Aşınan parça |
| ![SALYANGOZLU FAN ENA 2 0,37 KW HAVA SO.SİLİKONLU](../../assets/9.1/07%2017295.png) | 07 17295 | SALYANGOZLU FAN ENA 2 0,37 KW HAVA SO.SİLİKONLU | Önerilen | 0 (siparişle) | Egzost | Arızada egzoz/havalandırma etkilenir |
| ![YAĞ SIYIRICI TEFLONU](../../assets/9.1/07%2003497.png) | 07 03497 | YAĞ SIYIRICI TEFLONU | Tüketim | 1 | Yağ sıyırıcı | Periyodik değişim |
| ![REDÜKTÖR MOTORU 0,09KW 1500D/D B14 SIYIRICI](../../assets/9.1/10%2000586.png) | 10 00586 | REDÜKTÖR MOTORU 0,09KW 1500D/D B14 SIYIRICI | Kritik | 0 (siparişle) | Yağ sıyırıcı | Arızada yağ sıyırıcı çalışmaz |
| ![REDÜKTÖR EN:30 I:80 B:05](../../assets/9.1/10%2001002.png) | 10 01002 | REDÜKTÖR EN:30 I:80 B:05 | Önerilen | 0 (siparişle) | Yağ sıyırıcı tahrik | Motor ile birlikte |
| ![YAĞ KEÇESİ 20*42*7](../../assets/9.1/10%2002526.png) | 10 02526 | YAĞ KEÇESİ 20*42*7 | Tüketim | 1 | Yağ sıyırıcı redüktör | Bakım tüketimi |
| ![RULMAN 6004 2RS ORS](../../assets/9.1/10%2001017.png) | 10 01017 | RULMAN 6004 2RS ORS | Tüketim | 1 | Yağ sıyırıcı / genel | Bakım tüketimi |
| ![TORBA FİLTRE 200 MİKRON (50CM PASL. TEL ÇERÇEVE)](../../assets/9.1/10%2005378.png) | 10 05378 | TORBA FİLTRE 200 MİKRON (50CM PASL. TEL ÇERÇEVE) | Tüketim | 2 | Pompa çıkışı | Haftalık değişim |
| ![PASLANMAZ SEVİYE BEKÇİSİ](../../assets/9.1/10%2000296.png) | 10 00296 | PASLANMAZ SEVİYE BEKÇİSİ | Kritik | 0 (siparişle) | Tank seviye | Seviye güvenlik/kontrol |
| ![REDÜKTÖR WITTENSTEIN NP035S-MF2-30-1G1-1S](../../assets/9.1/10%2019321.png) | 10 19321 | REDÜKTÖR WITTENSTEIN NP035S-MF2-30-1G1-1S | Kritik | 0 (siparişle) | Konveyör tahrik | Arızada konveyör durur |
| ![SERVO MOTOR SIEMENS SIMOTICS 1FL6064-1AC61-2AA1](../../assets/9.1/10%2019317.png) | 10 19317 | SERVO MOTOR SIEMENS SIMOTICS 1FL6064-1AC61-2AA1 | Kritik | 0 (siparişle) | Konveyör | Arızada parça akışı durur |
| ![SERVO SÜRÜCÜ SIEMENS 6SL3210-5FE11-5UF0](../../assets/9.1/10%2019318.png) | 10 19318 | SERVO SÜRÜCÜ SIEMENS 6SL3210-5FE11-5UF0 | Kritik | 0 (siparişle) | Konveyör | Arızada parça akışı durur |
| ![SWITCH F3STGRNLPU21M1J8 OMRON MANYETİK KAPI](../../assets/9.1/10%2007147.png) | 10 07147 | SWITCH F3STGRNLPU21M1J8 OMRON MANYETİK KAPI | Kritik | 1 | RFID / kapak güvenlik | Arızada güvenlik fonksiyonu etkilenir |
| ![KNV 30 3000 2B PRO IDE GOULDS POMPA KOMPLESİ](../../assets/9.1/07%2017478.png) | 07 17478 | KNV 30 3000 2B PRO IDE GOULDS POMPA KOMPLESİ | Kritik | 0 (siparişle) | Durulama pompası | Arızada durulama prosesi durur |
| ![POMPA LOWARA ESHE 40-160/30 380V/50HZ](../../assets/9.1/10%2006675.png) | 10 06675 | POMPA LOWARA ESHE 40-160/30 380V/50HZ | Kritik | 0 (siparişle) | Yıkama pompası | Arızada yıkama prosesi durur |

---

## 13.3.3 Kılavuz ilişkisi

| Konu | Referans |
|------|----------|
| Kritik ve tüketim parçaları (özet) | Bölüm **9.1.5** |
| Tam parça listesi | Bu bölüm — **13.3.1** |
| Periyodik bakım | Bölüm **9.1.3**, **10.1** |

