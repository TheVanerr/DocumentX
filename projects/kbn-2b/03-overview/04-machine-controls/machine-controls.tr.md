# 3.4 Kumanda elemanları

## 3.4.1 Kumanda paneli

Makine PLC ile kumanda edilir; operatör makineyi kumanda panelindeki dokunmatik ekranlı operatör paneli (HMI) ve butonlarla kullanır. Kumanda paneli {{KONTROLLER:Kumanda paneli konumu}} üzerindedir.

![Kumanda paneli](../../assets/3.4/kumanda-paneli.png)

Tablo: Kumanda paneli elemanları

| Eleman | İşlev |
|---|---|
| HMI dokunmatik ekran | Program seçimi ve başlatma, parametre ayarları, makine durumu, sıcaklıklar ve alarmlar (**Bkz. Bölüm 3.4.2**). |
| Butonlar ve sinyal lambaları (7 adet) | {{KONTROLLER:Kumanda paneli butonları ve lambaları (7 adet) işlevleri}} |
| **EMERGENCY STOP** — acil durdurma butonu | Makinenin hareketli ve ısıtıcı devrelerinin enerjisini keser (**Bkz. Bölüm 2.3.2**). |

Panelde gösterilmeyen kumanda elemanları:

Tablo: Diğer kumanda elemanları

| Eleman | Konum | İşlev |
|---|---|---|
| **Ana şalter** | {{KONTROLLER:Ana şalter konumu}} | Makinenin tüm elektrik beslemesini açar ve keser; "0" konumunda kilitlenir (**Bkz. Bölüm 2.3.3**). |
| Kapak kumandası | {{KONTROLLER:Kapak açma / kapama kumandası}} | Pnömatik kapağı açar ve kapatır (**Bkz. Bölüm 3.4.4**). |
| Programı başlatma | {{KONTROLLER:Programı başlatma kumandası}} | Seçilen programı başlatır (**Bkz. Bölüm 7.4**). |
| Programı durdurma | {{KONTROLLER:Programı durdurma kumandası}} | Çalışan programı durdurur (**Bkz. Bölüm 7.3.2**). |
| Alarm onaylama | {{KONTROLLER:Alarm onaylama (reset) kumandası}} | Nedeni giderilen alarmı onaylar (**Bkz. Bölüm 3.4.3**). |

---

## 3.4.2 HMI (operatör paneli)

HMI, makinenin tüm işletim fonksiyonlarına erişim sağlar. HMI'da aşağıdaki işlemler yapılır:

- **Program seçimi:** Kayıtlı programlardan parça türü için tanımlanmış olan seçilir. Kayıtlı program sayısı: {{KONTROLLER:Kayıtlı program (reçete) sayısı}}.
- **Durum izleme:** 1. ve 2. tankın sıcaklıkları, programın çalışan adımı (yıkama, durulama, kurutma) ve kalan süre görüntülenir.
- **Parametre ayarları:** Yıkama, durulama ve kurutma süreleri ile tank ve kurutma sıcaklıkları ayarlanır (**Bkz. Bölüm 6.6**).
- **Alarmlar:** Arızalar alarm mesajıyla görüntülenir (**Bkz. Bölüm 3.4.3**).
- **Dil seçimi:** HMI dil seçenekleri: {{KONTROLLER:HMI dil seçenekleri}}.

Parametre ve program ayarlarına erişim şifreyle korunur. Şifre seviyeleri: {{KONTROLLER:Şifre seviyeleri}}. Operatör, kendisine verilen şifre seviyesinin dışındaki menülere girmez.

HMI: {{KONTROLLER:HMI marka / model}}, ekran boyutu {{KONTROLLER:HMI ekran boyutu (inç)}} inç. PLC: {{KONTROLLER:PLC marka / model}}.

**NOT:** HMI ekranına sivri veya sert cisimlerle basmayın; ekranı yalnızca parmakla veya HMI için üretilmiş kalemle kullanın. Ekranı ıslak bezle silmeyin (**Bkz. Bölüm 10.1.5**).

---

## 3.4.3 Alarmlar ve alarm onaylama

PLC, makinenin çalışmasını engelleyen veya operatörün müdahalesini gerektiren durumları HMI'da alarm mesajı olarak gösterir. Tipik alarm nedenleri şunlardır:

- Tanklardan birinde sıvı seviyesinin düşük olması
- Pompa, döndürme veya fan motorunun koruma şalterinin atması
- Program sırasında kapağın açılması
- Acil durdurma butonuna basılması
- Sıcaklık sensörü arızası veya aşırı sıcaklık

Alarm görüntülendiğinde:

1. Alarm mesajını okuyun ve not edin.
2. Alarmın nedenini **Bölüm 11**'e göre belirleyin ve giderin. Operatör yetkisi dışındaki işleri bakım veya elektrik personeline bildirin.
3. Neden giderildikten sonra alarmı onaylayın: {{KONTROLLER:Alarm onaylama (reset) kumandası}}.

**NOT:** Nedenini gidermeden alarmı sürekli onaylayarak makineyi çalıştırmayın. Tekrarlanan motor koruma alarmları motorun veya tahrikin hasar gördüğünü gösterir.

---

## 3.4.4 Kapak kumandası

Kapak, kapı açıklığının iki yanındaki iki pnömatik silindirle yukarı doğru açılır ve aşağı doğru kapanır. Kapağın çalışması için basınçlı hava bağlantısının yapılmış ve hava basıncının **Bölüm 6.5**'teki değerde olması gerekir.

**UYARI — Kapanan kapak:** Kapak kapanırken el, kol veya baş kapak ile gövde arasında sıkışabilir. Basınçlı hava kesildiğinde açık kapak kendi ağırlığıyla aşağı inebilir. Kapağın altına girmeyin ve kapak hareket ederken elinizi kapak kenarına koymayın.

Kapak emniyet şalteri, kapak tam kapanmadan programın başlamasını engeller; program sırasında kapak açılırsa pompalar, döndürme ve kurutma durur.
