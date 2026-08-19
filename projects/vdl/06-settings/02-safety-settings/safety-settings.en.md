<!-- ÇEVİRİ GEREKLİ → EN | kaynak: TR | bu satırı çeviri bitince silin. Başlık/görsel/tablo yapısını koruyun, yalnızca metni çevirin. -->

# 6.2. Güvenlikle İlgili Ayar Parametreleri

Bu bölümde yer alan parametreler doğrudan güvenlik fonksiyonlarını etkiler. Belirtilen değerlerin ve ayar prosedürlerinin dışına çıkılması güvenlik sistemlerinin kısmen veya tamamen işlevsiz kalmasına yol açabilir. Bu parametreler üzerinde yalnızca yetkili teknik personel tarafından ve zorunlu hallerde değişiklik yapılmalıdır.

## 6.2.1. Alt Seviye Sensörü

Her tankta bulunan alt seviye sensörü, pompaların ve ısıtıcıların kuru çalışmasını önlemek amacıyla tank su seviyesini sürekli izler. Sensör, fabrikada güvenli çalışma için gerekli minimum su seviyesine ayarlanmış olarak teslim edilir.

Sensörün takılı olduğu konum, pompanın su çekebileceği ve ısıtıcıların su altında kalabileceği minimum seviyeyi temsil eder. Bu seviyenin altına düşüldüğünde sistem otomatik olarak pompayı ve ısıtıcıları devre dışı bırakır, pano üzerindeki reset butonu devreye girer ve kullanıcı reset prosedürünü tamamlamadan sisteme start verilemez.

> ⚠️ **UYARI**
>
> Sensörün konumunun aşağı alınması veya devre dışı bırakılması; pompaların ve ısıtıcıların susuz çalışmasına, geri dönüşü olmayan mekanik hasara ve yangın riskine yol açabilir. Bu sensörün fabrika ayarı hiçbir koşulda değiştirilmemelidir.

## 6.2.2. Hava Basınç Sensörü

Standart otomatik dolum opsiyonunda hava girişine entegre edilmiş basınç sensörü, pnömatik sistemin güvenli çalışması için gerekli minimum basıncın sağlanıp sağlanmadığını denetler. Sensör fabrikada **6 bar** için ayarlanmış olarak teslim edilir; bu değerin altında sistem devreye girmez.

> ⚠️ **UYARI**
>
> Hava basınç sensörü, su basınç sensöründen farklı olarak hiçbir koşulda daha düşük bir basınç değerine yeniden ayarlanmamalı veya devre dışı bırakılmamalıdır. Pnömatik sistemin yetersiz basınçla çalıştırılması hayati tehlike içeren senaryolara yol açabilir. Tesisin 6 bar hava basıncı sağlayamaması durumunda bu sensörün ayarı değiştirilmek yerine tesis altyapısı iyileştirilmelidir. Bu uyarının dikkate alınmaması sonucu meydana gelen hasarlar ve kişisel yaralanmalar üreticinin sorumluluğu dışındadır.

## 6.2.3. Su Basınç Sensörü

Otomatik dolum konfigürasyonlarında (standart ve solenoid vanalı) su girişine entegre edilmiş basınç sensörü, şebeke su basıncını izleyerek dolum sisteminin doğru çalışmasını denetler. Sensör fabrikada standart şebeke basıncı değerlerine göre ayarlanmış olarak teslim edilir.

Tesisin şebeke basıncının fabrika ayar değerinin altında kalması durumunda sensör aşağıdaki prosedüre göre revize edilebilir:

1. Sensör kafası yukarı kaldırılır.
2. **(−)** yönünde döndürülerek tesisin mevcut şebeke basıncında tetiklenecek değere getirilir.
3. Sensör kafası yerine oturtulur.
4. Sistem devreye alınarak dolumun doğru biçimde gerçekleştiği doğrulanır.

> **NOT:** Su basınç sensörü yalnızca dolum sisteminin işlevselliğini etkiler. Bununla birlikte ayar değerinin gereğinden düşük yapılması sensörün denetim işlevini zayıflatacağından mevcut şebeke basıncını karşılayacak en yüksek değerde ayarlanması tavsiye edilir.

## 6.2.4. RFID Güvenlik Kilidi (Opsiyonel — Açılabilir Kapak Konfigürasyonu)

Açılabilir kapak konfigürasyonu talep edilmiş makinelerde her kapağa entegre edilmiş RFID güvenlik switchleri bir emniyet rölesine bağlıdır. Bu sistem, herhangi bir kapak açık konumdayken makinenin start almasını donanım seviyesinde engeller.

Emniyet rölesi fabrikada doğru eşik değerine ayarlanmış olarak teslim edilir. Röle üzerinde hiçbir ayar değişikliği yapılmamalıdır. Kapak açıkken sistemin start aldığının tespit edilmesi durumunda makine derhal durdurulmalı ve yetkili servis ile iletişime geçilmelidir.

> ⚠️ **UYARI**
>
> Emniyet rölesinin devre dışı bırakılması, bypass edilmesi veya ayarlarının değiştirilmesi güvenlik sistemini tamamen işlevsiz kılar ve operatörü dönen mekanik elemanlara doğrudan maruz bırakır. Bu müdahaleler kesinlikle yasaktır; gerçekleştirilmesi durumunda makine garanti kapsamından çıkar ve tüm sorumluluk kullanıcıya aittir.