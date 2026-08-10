<!-- ÇEVİRİ GEREKLİ → EN | kaynak: TR | bu satırı çeviri bitince silin. Başlık/görsel/tablo yapısını koruyun, yalnızca metni çevirin. -->

# 5.3. Mekanik, Pnömatik, Hidrolik ve Elektrik Kurulumu

## 5.3.1. Elektrik Bağlantısı

VDL serisi **3P+1N+1PE** (üç faz + nötr + koruma toprağı) besleme gerektirir. Kurulum öncesinde tesisin elektrik altyapısının makinenin kurulu gücünü karşılayacak kapasitede olduğu doğrulanmalıdır. Model bazında kurulu güç değerleri aşağıda verilmiştir:

| Model | Isıtıcı (kW) | Pompa (kW) | Tambur Motoru (kW) | Toplam Kurulu Güç (kW) |
|---|---|---|---|---|
| VDL 40 2500 1B | [...] | [...] | [...] | [...] |
| VDL 40 3500 2B | 2× [...] | [...] | [...] | [...] |
| VDL 40 4250 2B | 2× [...] | [...] | [...] | [...] |
| VDL 60 5500 2B | 2× [...] | [...] | [...] | [...] |
| VDL 80 6500 2B | 3× [...] | [...] | [...] | [...] |

> **Not:** Tablodaki ısıtıcı güçleri tek banyo başına değerleri ifade etmektedir. İki banyolu modellerde toplam ısıtıcı gücü iki katına çıkmaktadır.

Güç kablosu, kontrol panosunun giriş bornasına bağlanmalı; koruma iletkeni (PE) pano üzerindeki topraklama klemensine eksiksiz biçimde iletilmelidir. Kablo kesiti, hat uzunluğu ve sigorta değeri için yerel elektrik yönetmeliği esas alınmalıdır.

## 5.3.2. Su Bağlantısı

### Standart Konfigürasyon (Manuel Dolum)

Otomatik dolum opsiyonu talep edilmemişse herhangi bir su veya hava bağlantısı yapılmasına gerek yoktur. Tank dolumu operatör tarafından manuel olarak gerçekleştirilir.

### Opsiyonel Otomatik Dolum — Standart (Su + Hava)

Bu opsiyon seçilmişse makineye iki ayrı bağlantı yapılmalıdır:

**Su bağlantısı:** Su girişi, tesisin şebeke hattına bağlanır. Giriş hattında basınç ve akış sensörü mevcuttur; sensör üretici firmanın fabrikasındada uygun değere ayarlanmış olarak teslim edilir. Tesis şebeke basıncının beklenen değerin altında kalması durumunda sensör ayarı aşağıdaki şekilde revize edilmelidir:

1. Sensör kafası yukarı kaldırılır.
2. **( − )** yönünde döndürülerek daha düşük basınç değerinde tetiklenecek biçimde ayarlanır.
3. Sensör kafası yerine oturtulur ve çalışma testi yapılır.

**Hava bağlantısı:** Hava girişi, tesiste minimum **6 bar** basınç sağlayabilen bir pnömatik hatta bağlanmalıdır. Hava basınç sensörü fabrikada 6 bar için ayarlıdır.

> ⚠️ **UYARI**
>
> Makinenin pnömatik sisteminin güvenli çalışabilmesi için hava girişinde sürekli olarak minimum **6 bar** basınç sağlanması zorunludur. Bu gereksinim, operatör güvenliği açısından kritik öneme sahip olup kullanıcı tarafından karşılanması gereken bir yükümlülüktür.
>
> Belirtilen basınç eşiğinin altında gerçekleştirilen operasyonlar hayati tehlike içeren durumlara yol açabilir. Bu nedenle hava basınç sensörü, su basınç sensöründen farklı olarak **hiçbir koşulda düşük basınç değerine yeniden ayarlanmamalı veya devre dışı bırakılmamalıdır.**
>
> Söz konusu uyarının dikkate alınmaması sonucu meydana gelen kişisel yaralanma, ekipman hasarı veya üçüncü şahıslara verilen zararlar üreticinin sorumluluğu dışında olup tüm sorumluluk kullanıcıya aittir.

### Opsiyonel Otomatik Dolum — Solenoid Vanalı

Bu opsiyon seçilmişse yalnızca su bağlantısı yapılmalıdır; hava bağlantısı gerekmez. Su girişi tesisin şebeke hattına bağlandıktan sonra su basınç sensörünün yukarıda tarif edilen prosedüre göre tesis basıncına uygun şekilde ayarlandığı doğrulanmalıdır.

## 5.3.3. Drenaj ve Taşma Bağlantıları

Aşağıdaki bağlantılar kurulumun zorunlu bir parçasını oluşturur ve tüm modeller için uygulanır.

**Tank drenaj hatları:** Her tankın alt seviyesinde birer drenaj vanası bulunmaktadır. Bu vanalar, tesisin atık su tahliye altyapısına bağlanmalıdır. Bağlantı hattı, proses sıcaklığındaki sıvıya uygun malzemeden seçilmeli ve akışın yerçekimiyle serbestçe tahliye edilebileceği eğimde döşenmelidir.

**Taşma hatları:** Makine üst kotlarında her banyo için birer taşma çıkışı mevcuttur. Bu çıkışlar, tank dolumunun kontrolsüz yükselmesi durumunda sıvıyı güvenli biçimde tahliye etmek amacıyla uygun bir gider hattına bağlanmalıdır.

## 5.3.4. Opsiyonel Ekipman Bağlantıları

### Yağ Sıyırıcı

Yağ sıyırıcı opsiyonu talep edilmişse ünitenin tahliye hattı, ayrıştırılan yağın birikmesi için uygun bir gider veya toplama kabına yönlendirilmelidir.

### Hassas Filtre

Hassas filtre opsiyonu talep edilmişse filtre gövdesinin altında yer alan tahliye vanası, uygun bir gider hattına bağlanmalıdır. Filtre temizliği sırasında bu hat üzerinden kontaminan içerikli sıvı tahliye edilecektir.

## 5.3.5. Havalandırma

VDL serisi, yüksek sıcaklıkta çalışan proses sıvısı nedeniyle operasyon sırasında buhar ve ısı açığa çıkarır. Makinenin kapalı veya yetersiz havalandırmalı bir alanda konumlandırılması durumunda çalışma ortamındaki nem ve sıcaklık artışını önlemek amacıyla uygun bir egzoz veya genel havalandırma sistemi tesis edilmelidir.