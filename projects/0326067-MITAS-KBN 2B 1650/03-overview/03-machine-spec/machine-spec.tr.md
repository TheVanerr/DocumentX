# 3.3 Teknik özellikler

Bu bölümdeki değerler makinenin tip plakasından, ürün ağacından, referans elektrik şemasından, PLC programının kullanım bilgilerinden ve makine üzerindeki etiketlerden alınmıştır. Kaynaklar arasında fark olan değerler tabloda ayrıca belirtilmiştir.

## 3.3.1 Makine kimliği

{{TABLO:PROJE|Makine ticari adı, Makine model kodu, Marka, Makine seri numarası, Üretim yılı, Makine tipi, Uygunluk işaretleri}}

## 3.3.2 Boyutlar ve ağırlıklar

{{TABLO:BOYUT_AGIRLIK}}

## 3.3.3 Proses değerleri ve kumanda sabitleri

**Proses değerleri**

{{TABLO:KAPASITE_PROSES}}

Aşağıdaki değerler PLC programında sabittir; operatör panelinden değiştirilemez.

**Kumanda sabitleri**

{{TABLO:KONTROL_SABITLERI}}

Operatör panelinden ayarlanabilen sıcaklık ve süre aralıkları **Bkz. Bölüm 6.5.1**.

## 3.3.4 Elektrik beslemesi

{{TABLO:ELEKTRIK}}

Toplam kurulu güç ve {{ELEKTRIK:Besleme gerilimi (V)}} V için hesaplanan nominal hat akımı yaklaşık 75 A'dir (yükün büyük bölümü ısıtıcılar olduğundan cos φ ≈ 1 kabulüyle). Besleme kablosu ve hat koruması, işletmenin elektrik projesine göre yetkili elektrik mühendisi tarafından boyutlandırılır (**Bkz. Bölüm 5.3.1**).

## 3.3.5 Motorlar ve pompalar

**Motorlar**

{{TABLO:MOTOR_SURUCU_LISTESI}}

**Pompalar**

{{TABLO:POMPALAR}}

**NOT:** Kurutma fanının gücü ürün ağacında 0,37 kW, referans elektrik şemasında 0,75 kW olarak verilmiştir; makinedeki fanın etiket değeri esas alınır. Yıkama ve durulama pompası motorlarının gücü referans şemadandır; yatay proses pompasının etiket gücü 3 HP'dir.

## 3.3.6 Isıtıcılar

{{TABLO:ISITICILAR}}

Isıtıcılar yalnızca **Hazırlık** açıkken (tank ısıtıcıları) veya kurutma fazında (kurutma ısıtıcısı) çalışır. Tank ısıtıcısı, tankta sıvı pompa seviyesinin altındayken çalışmaz; kurutma ısıtıcısı, kurutma fanı çalışmıyorsa çalışmaz.

## 3.3.7 Sensörler

{{TABLO:SENSORLER}}

## 3.3.8 Tanklar ve filtreler

{{TABLO:TANKLAR}}

## 3.3.9 Basınçlı hava, su ve drenaj

{{TABLO:SIKIŞTIRILMIŞ_HAVA_SU}}

## 3.3.10 Ortam koşulları ve emisyonlar

{{TABLO:ORTAM_KOSULLARI}}

Makine çalışırken kurutma ve egzoz fanları, pompalar ve püskürtme sesi gürültü oluşturur. Gürültü emisyon değeri ölçülene kadar işletme, makinenin çevresinde çalışma alanı gürültü ölçümü yaparak kulak koruyucu gereksinimini belirler. Egzoz fanı kabindeki su buharı ve kimyasal buharı içeren havayı dışarı atar; egzoz bacası dış ortama bağlanır (**Bkz. Bölüm 5.3.4**).

## 3.3.11 Kumanda sistemi

{{TABLO:KONTROLLER|HMI marka / model, HMI ekran boyutu (inch), Operatör paneli dilleri, PLC marka / model, I/O modül özeti, Sepet motoru sürücüsü, Güvenlik rölesi tipi, Şifre seviyeleri (operatör / bakım / admin)}}

Elektrik panosundaki tüm ekipman **Bkz. Bölüm 3.4.10**; PLC giriş ve çıkış listesi **Bkz. Bölüm 13.2**.
