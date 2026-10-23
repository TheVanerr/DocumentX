# 8.1 Ürün kapasitesi

## 8.1.1 Kapasiteyi belirleyen etkenler

Makine kesikli (parti) çalışır: her çevrimde bir sepet dolusu parça işlenir. Saatlik kapasite şu etkenlere bağlıdır:

- Bir sepete yerleştirilebilen parça sayısı (parça boyutu, ağırlığı ve yerleştirme kuralları).
- Reçetedeki yıkama, durulama ve kurutma süreleri ve Aktif faz sayısı.
- Geçiş süresi, rezistans soğutma ve sepet konumlama süreleri.
- Yükleme ve boşaltma süresi (yükleme arabası kullanımı, kapı açılıp kapanması).
- Tankların çevrimler arasında yeniden set sıcaklığına ulaşma süresi.

Nominal kapasite: {{URUN_KAPASITE:Nominal kapasite tablosu (ürün × adet/saat)}}.

## 8.1.2 Çevrim süresinin hesaplanması

Bir çevrimin süresi aşağıdaki gibi hesaplanır. Pasif seçilen fazın ve o faza ait geçişin süresi sıfır alınır.

**T(çevrim) = t(yıkama) + t(geçiş) + t(durulama) + t(geçiş) + t(kurutma) + t(rezistans soğutma) + t(konumlama)**

- t(yıkama), t(durulama): reçetedeki süreler. Bu süreler yalnızca pompa çalışma şartları sağlanırken sayılır; vana hareketi ve seviye düşmesi süreyi uzatır.
- t(geçiş): Kurulum Sayfası'ndaki geçiş süresi.
- t(kurutma): reçetedeki kurutma süresi.
- t(rezistans soğutma): {{KONTROL_SABITLERI:Rezistans soğutma süresi#1}}.
- t(konumlama): sepetin yavaş hızda başlangıç konumuna gelme süresi; sepetin çevrim sonundaki konumuna göre değişir, en fazla bir tur sürer.

Bir partinin toplam süresi, çevrim süresine yükleme ve boşaltma süresinin eklenmesiyle bulunur:

**T(parti) = T(çevrim) + t(yükleme) + t(boşaltma)**

## 8.1.3 Örnek hesap

Operatör paneli ekran görüntülerindeki STANDART reçete değerleriyle (yıkama {{OZEL_KURULUM:STANDART reçete — yıkama}}, durulama {{OZEL_KURULUM:STANDART reçete — durulama}}, kurutma {{OZEL_KURULUM:STANDART reçete — kurutma}}; geçiş süresi 30 Sn) çevrim süresi:

Tablo: Örnek çevrim süresi hesabı

| Adım | Süre |
|---|---:|
| Yıkama | 15 dk |
| Geçiş 1 | 0,5 dk |
| Durulama | 10 dk |
| Geçiş 2 | 0,5 dk |
| Kurutma | 20 dk |
| Rezistans soğutma | 1 dk |
| Sepet konumlama (en fazla) | 1 tur |
| **Toplam (konumlama hariç)** | **47 dk** |

Yükleme ve boşaltma için toplam 5 dakika kabul edilirse bir parti yaklaşık 52 dakika sürer; bu durumda saatte yaklaşık 1,15 parti işlenir. Gerçek yükleme süresini kendi işletmenizde ölçün.

## 8.1.4 Saatlik kapasite

**Kapasite (parça/saat) = 60 / T(parti, dk) × parça sayısı (parça/sepet)**

Kapasite, makinenin kendisinden çok reçete sürelerine bağlıdır. Kapasiteyi artırmak için:

- Parçaların temizlik ve kuruluk şartını karşılayan en kısa süreleri deneme çevrimleriyle belirleyin.
- Gerekmeyen fazları Pasif seçin.
- Bir sonraki partiyi, çevrim sürerken ikinci bir üst sepete hazırlayın (ikinci üst sepet varsa).
- **Hazırlık**'ı vardiya başında, tanklar ilk çevrimden önce hazır olacak şekilde açın.

## 8.1.5 Sepet yükleme sınırları

Tablo: Sepet yükleme sınırları

| Sınır | Değer |
|---|---|
| Sepet nominal çapı | {{BOYUT_AGIRLIK:Sepet nominal çapı (mm)}} mm |
| Sepet azami yükü (parçalar dahil) | {{BOYUT_AGIRLIK:Sepet azami yükü (kg)}} kg |
| Parça yüksekliği (sepet tabanından) | {{BOYUT_AGIRLIK:Azami parça yüksekliği (mm)}} mm — parçalar kabin tavanındaki püskürtme borularına ve sıcak hava kanalına çarpmamalıdır |

## 8.1.6 Kapasite kayıt tablosu

İşletmede yıkanan her ürün için ölçülen değerleri aşağıdaki tabloya kaydedin. Bu tablo üretim planlamasında ve reçete seçiminde kullanılır.

Tablo: Ürün kapasite kaydı

| Ürün / parça no | Reçete adı | Parça / sepet | T(çevrim) dk | T(parti) dk | Kapasite parça/saat |
|---|---|---:|---:|---:|---:|
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
