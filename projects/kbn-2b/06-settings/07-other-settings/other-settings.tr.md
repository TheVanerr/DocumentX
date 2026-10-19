# 6.6 Program ayarları

Yıkama, durulama ve kurutma adımlarının süreleri ve sıcaklıkları HMI'da program olarak kaydedilir. Operatör üretimde yalnızca parça türü için tanımlanmış programı seçer; program parametrelerini değiştirme yetkisi şifre seviyesine bağlıdır (**Bkz. Bölüm 3.4.2**). Parça türüne göre ayar değerlerinin belirlenmesi için **Bkz. Bölüm 8.2**.

HMI'daki menü adları ve ekran düzeni yazılım sürümüne göre farklılık gösterebilir.

---

## 6.6.1 Program parametreleri

Tablo: Program parametreleri

| Parametre | Ayar aralığı | Açıklama |
|---|---|---|
| 1. tank (yıkama) sıcaklığı | En fazla {{GENEL_TEKNIK:Yıkama ve durulama sıvısı sıcaklığı — maks. (°C)}} °C | Kimyasal tedarikçisinin önerdiği çalışma sıcaklığı |
| 2. tank (durulama) sıcaklığı | En fazla {{GENEL_TEKNIK:Yıkama ve durulama sıvısı sıcaklığı — maks. (°C)}} °C | Kurumayı hızlandırmak için yıkama sıcaklığına yakın seçilir |
| Yıkama süresi | {{GENEL_TEKNIK:Yıkama süresi ayar aralığı (dk)}} dk | Parçanın kirlilik derecesine göre |
| Durulama süresi | {{PROGRAM:Durulama süresi ayar aralığı (dk)}} dk | Kimyasal kalıntısı kalmayacak süre |
| Kurutma süresi | {{PROGRAM:Kurutma süresi ayar aralığı (dk)}} dk | Parçanın geometrisine ve kütlesine göre |
| Kurutma sıcaklığı | {{PROGRAM:Kurutma sıcaklığı ayar aralığı (°C)}} °C | Parçanın ısıya dayanımına göre |

---

## 6.6.2 Programın oluşturulması veya değiştirilmesi

1. HMI'da program parametrelerini değiştirme yetkisi olan şifre seviyesiyle oturum açın.
2. Program menüsünü açın ve değiştirilecek programı veya boş bir program numarasını seçin.
3. Programa parça türünü tanımlayan bir ad verin.
4. Tank sıcaklıklarını, yıkama, durulama ve kurutma sürelerini ve kurutma sıcaklığını girin.
5. Programı kaydedin ve oturumu kapatın.
6. Programı ilk parçalarla deneyin; sonucu **Bölüm 8.2**'ye göre değerlendirin ve ayarları kaydedin.

**NOT:** Program parametrelerinde yapılan değişiklikleri **Bölüm 8.2.3**'teki parça bazlı ayar kaydına işleyin. Yanlışlıkla değiştirilen bir programın eski değerlerine bu kayıttan dönülebilir.

---

## 6.6.3 Kimyasal konsantrasyonu

Kimyasal konsantrasyonu, yıkama tankına (1. tank) eklenen kimyasal miktarıyla belirlenir. Tank kapasiteleri **Bölüm 3.3.2**'deki tabloda verilmiştir.

Eklenecek kimyasal miktarını aşağıdaki gibi hesaplayın:

Kimyasal miktarı (L) = Tank kapasitesi (L) × Konsantrasyon (%) / 100

Örneğin 350 L tank ve %3 konsantrasyon için 10,5 L kimyasal eklenir. Konsantrasyon değerini kimyasal tedarikçisinin önerisine göre belirleyin. Çalışma sırasında buharlaşma ve parçalarla taşınan sıvı nedeniyle eksilen sıvıyı tamamlarken kimyasalı da aynı oranda ekleyin (**Bkz. Bölüm 7.6.1**).

Durulama tankına (2. tank) yalnızca kimyasal tedarikçisinin durulama için önerdiği katkı maddesini, önerilen oranda ekleyin.
