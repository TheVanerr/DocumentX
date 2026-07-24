# 6.3. Elektrik Ayarları

Bu bölüm; makinenin elektriksel bileşenlerine ait operatör veya yetkili teknik personel tarafından yapılabilecek ayarları kapsamaktadır. Aşağıdaki prosedürlerin tamamı yalnızca ilgili elektrik yönetmelikleri kapsamında yetkinliğe sahip elektrik teknisyeni veya mühendisi tarafından uygulanmalıdır. Herhangi bir ayar işlemi öncesinde makinenin enerjisiz hale getirildiği ve yetkisiz kişilerce enerji verilmesinin engellendiği doğrulanmalıdır.

## 6.3.1. Termostat Ayarı

Her tankın proses sıcaklığı, tank üzerindeki termostat aracılığıyla bağımsız olarak ayarlanır. Termostat; hedef sıcaklığa ulaşıldığında ısıtıcıları devre dışı bırakır, sıcaklık belirlenen eşiğin altına düştüğünde yeniden devreye alır.

**Ayar prosedürü:**
1. Termostat ayar kadranı veya düğmesi, istenen proses sıcaklığına getirilir.
2. Makine devreye alınarak sıcaklığın hedefe ulaşıp ulaşmadığı izlenir.
3. Hedef sıcaklığa ulaşıldığında ısıtıcıların devre dışı kaldığı, sıcaklık düştüğünde yeniden devreye girdiği doğrulanır.

| Parametre | Değer |
|---|---|
| Minimum ayar sıcaklığı | [...] °C |
| Maksimum ayar sıcaklığı | [...] °C |
| Önerilen başlangıç değeri | [...] °C |

> ⚠️ **UYARI**
>
> Termostat, makinenin tasarlandığı maksimum proses sıcaklığının üzerine ayarlanmamalıdır. Aşırı sıcaklık; proses sıvısının hızla bozulmasına, contaların ve hidrolik bileşenlerin zarar görmesine ve buhar yoğunluğunun artmasına bağlı olarak çalışma ortamında güvenlik risklerine yol açabilir.

## 6.3.2. Frekans Sürücüsü Parametreleri

Tambur dönüş hızı, kontrol panosu bünyesindeki frekans sürücüsü aracılığıyla ayarlanır. Frekans sürücüsü; minimum ve maksimum frekans sınırları, hızlanma (rampa-up) ve yavaşlama (rampa-down) süreleri gibi temel parametrelerle yapılandırılmıştır. Bu parametreler fabrikada optimum çalışma koşulları için ayarlanmış olarak teslim edilir.

**Operatör tarafından ayarlanabilecek parametre:**

Tambur çalışma frekansı (dolayısıyla devir hızı) kontrol panosu üzerinden aşağıdaki sınırlar içinde değiştirilebilir:

| Parametre | Değer |
|---|---|
| Minimum çalışma frekansı | [...] Hz |
| Maksimum çalışma frekansı | [...] Hz |
| Fabrika çıkış değeri | [...] Hz |
| Hızlanma süresi (rampa-up) | [...] s |
| Yavaşlama süresi (rampa-down) | [...] s |

> ⚠️ **UYARI**
>
> Hızlanma ve yavaşlama süreleri ile minimum/maksimum frekans sınırları yalnızca yetkili teknik personel tarafından ve yalnızca zorunlu hallerde değiştirilebilir. Rampa sürelerinin çok kısa ayarlanması tambur tahrik motoruna aşırı akım yükü bindirerek termik koruma sistemini devreye sokabilir veya motora kalıcı hasar verebilir. Maksimum frekans sınırının aşılması tambur mekanik bileşenlerinin tasarım hızı üzerinde çalışmasına neden olur.

## 6.3.3. Motor Koruma Rölesi (Termik Röle) Ayarı

Tambur tahrik motoru ve pompa motorları, aşırı akım durumlarında motorları korumak amacıyla termik koruma röleleriyle donatılmıştır. Bu röleler fabrikada motor nominal akım değerlerine göre ayarlanmış olarak teslim edilir.

**Nominal akım değerleri:**

| Bileşen | Nominal Akım (A) |
|---|:---:|
| Tambur tahrik motoru | 1,00 A |
| Yıkama pompası | [...] A |
| Durulama pompası (2B modellerde) | [...] A |
| Kurutma ünitesi motoru (opsiyonel) | [...] A |

Termik röle ayarı yalnızca motor değişimi veya yetkili teknik servis müdahalesi sonrasında, motor etiket değerleri esas alınarak yeniden yapılmalıdır.

> ⚠️ **UYARI**
>
> Termik röle ayar değerinin motor nominal akımının üzerine çıkarılması aşırı ısınmaya bağlı motor sargı hasarına ve yangın riskine yol açabilir. Termik röle sık sık devreye giriyorsa ayar değeri yükseltilmek yerine motorun elektriksel ve mekanik durumu yetkili teknik personel tarafından incelenmelidir.

## 6.3.4. Opsiyonel PLC Parametreleri

Opsiyonel PLC donanımı talep edilmiş makinelerde proses parametreleri; çevrim süreleri, sıcaklık setpoint değerleri ve dolum sekansları PLC üzerinden merkezi olarak yönetilebilir. PLC parametrelerine erişim yetki seviyelerine göre kısıtlanmış olup operatör seviyesinde yalnızca proses sıcaklığı ve çevrim süresi gibi temel parametreler değiştirilebilir; sistem konfigürasyon parametreleri yalnızca yetkili teknik personel erişimine açıktır.

PLC parametre listesi ve programlama kılavuzu, PLC opsiyonu talep edilmiş makinelerle birlikte ayrıca teslim edilmektedir.

> **NOT:** PLC yazılımında yetkisiz değişiklik yapılması proses güvenliğini ve makine performansını olumsuz etkileyebilir. PLC yazılımına müdahale edilmesi gerektiğinde üretici firma teknik desteği ile iletişime geçilmesi tavsiye edilir.