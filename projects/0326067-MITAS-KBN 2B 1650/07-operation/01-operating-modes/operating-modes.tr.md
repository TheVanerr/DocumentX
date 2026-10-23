# 7.1 Çalışma modları

## 7.1.1 Çalışma modları ve fonksiyonlar

Makinede ayrı bir mod seçici yoktur. Otomatik çevrim, ısıtma ve bakım fonksiyonları operatör panelinden ve kumanda panelinden başlatılır.

Tablo: Çalışma modları ve fonksiyonlar

| Mod / fonksiyon | Nasıl başlatılır | Koşul | Nasıl durur |
|---|---|---|---|
| Otomatik çevrim | Kumanda panelinde **START** | Başlama şartları sağlanmış (**Bkz. Bölüm 7.4.2**) | Çevrim sonunda kendiliğinden; **STOP** ile kontrollü; acil durdurmayla anında |
| Hazırlık (tank ısıtma) | Çalışma Sayfası'nda **Hazırlık** | Tankta sıvı pompa seviyesinin üzerinde | **Hazırlık** kapatılınca; acil durdurma veya enerji kesintisinde |
| Manuel kumanda | Manuel Sayfası'nda **MANUEL KONTROL** anahtarı | Makine çevrimde değil | Anahtar kapatılınca; çevrim başlayınca |
| Sepet Test | Çalışma Sayfası'nda **Sepet Test** basılı tutulur | Makine çevrimde değil | Buton bırakılınca veya sepet başlangıç konumuna gelince |
| Drenaj | Ayar Sayfası'nda **Yıkama Drenaj** / **Durulama Drenaj** | Makine çevrimde değil | Tank alt seviyenin altına inip drenaj süresi dolunca; butona tekrar basınca |
| Yağ sıyırıcı | Ayar Sayfası'nda **YAĞ SIYIRICI** anahtarı Aktif | Çevrimden bağımsız | Anahtar Pasif yapılınca; acil durdurma veya enerji kesintisinde |
| Kabin lambası | Çalışma Sayfası'nda **LAMBA** | — | 60 saniye sonra kendiliğinden; butona tekrar basınca |
| Kapı kumandası | Kumanda panelinde **KAPI AÇIK** / **KAPI KAPALI** | Kapı hareket alanı boş | Kapı son konuma gelince; buton bırakılınca |

## 7.1.2 Makinenin durumları

Tablo: Makine durumları

| Durum | Kule lambası | Durum penceresi | Açıklama |
|---|---|---|---|
| Enerjisiz | Yanmıyor | — | Ana şalter kapalı |
| Bekliyor, tanklar soğuk | Sarı | Tanklar Hazır Değil | **Hazırlık** kapalı, tanklardan en az biri set sıcaklığında değil |
| Isınıyor | Sarı | Tanklar Hazırlanıyor | **Hazırlık** açık, tanklar ısınıyor |
| Hazır | Sarı | Tanklar Hazır | Tanklar set sıcaklığında; çevrim başlatılabilir |
| Çevrimde | Yeşil | Yıkama, Geçiş 1, Durulama, Geçiş 2, Kurutma, Rezistans Soğutma | Çevrim çalışıyor; kapıyı açmayın |
| Kontrollü duruş | Yeşil | Sistem Duruyor | **STOP**'a basıldı; çalışan adım bitiriliyor |
| Alarm | Kırmızı | Alarm bandında mesaj | En az bir alarm aktif (**Bkz. Bölüm 11**) |
| Acil durdurma | Kırmızı | Error-229 | Acil durdurma butonu basılı veya güvenlik rölesi resetlenmemiş |

## 7.1.3 Enerji verildiğindeki başlangıç durumu

Makineye enerji verildiğinde ve acil durdurmadan sonra seçimler aşağıdaki başlangıç durumuna döner. Bu seçimleri her açılışta kontrol edin.

Tablo: Başlangıç durumu

| Seçim | Başlangıç durumu |
|---|---|
| **Hazırlık** | Kapalı |
| Yıkama, Durulama, Kurutma | Üçü de Aktif |
| **YAĞ SIYIRICI** | Pasif |
| **MANUEL KONTROL** | Kapalı |
| Drenaj seçimleri | Kapalı |
| Kabin lambası | Kapalı |
| Reçeteler | Operatör panelinin hafızasında korunur; makinede geçerli değerleri **Sıcaklık Set Değeri** göstergelerinden kontrol edin, farklıysa **Reçete Onay**'a basın |
| Egzoz, drenaj süresi, yağ sıyırıcı süreleri, geçiş süresi | Ayar ve Kurulum Sayfası'nda kontrol edin |
