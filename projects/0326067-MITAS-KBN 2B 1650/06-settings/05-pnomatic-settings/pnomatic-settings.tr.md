# 6.4 Pnömatik ayarlar

## 6.4.1 Pnömatik devre

Pnömatik devre şu elemanlardan oluşur (**Bkz. Bölüm 3.1.9**):

Tablo: Pnömatik devre elemanları

| Eleman | Tip | Görevi |
|---|---|---|
| Hava girişi | {{SIKIŞTIRILMIŞ_HAVA_SU:Hava giriş bağlantısı}} | İşletme hattının bağlandığı nokta |
| Filtre regülatör | {{SIKIŞTIRILMIŞ_HAVA_SU:Hava şartlandırıcı}} | Havayı süzer, basıncı ayarlar, yoğuşma suyunu toplar |
| Hava basınç şalteri | {{SENSORLER:S10#2}} | Düşük giriş basıncını bildirir (Error-235) |
| Kapı valfi | 4V230E-08, 5/3, çift bobin, 24 V DC | Kapı silindirlerini kumanda eder; orta konumda hatları kapatır |
| Pilotlu çek valfler | 1/4", 4 adet | Kapı silindirlerinde havayı tutar |
| Hız ayarlı dirsekler | 1/4" – Ø8, 2 adet | Kapı hızını ayarlar |
| Kapı silindirleri | Ø50 × 1200 mm, manyetik, yastıklı, 2 adet | Kapıyı kaldırır ve indirir |
| Tahliye vanası valfleri | 4V220-08, 5/2, çift bobin, 24 V DC, 2 adet | Tahliye vanası silindirlerini kumanda eder; son konumu korur |
| Tahliye vanası silindirleri | Ø80 × 100 mm, manyetik, yastıklı, 2 adet | Tahliye vanalarını açar ve kapatır |
| Susturucular | 1/4" ve 1/8" sinter | Valf egzoz sesini azaltır |

## 6.4.2 Çalışma basıncının ayarı

Çalışma basıncı: {{SIKIŞTIRILMIŞ_HAVA_SU:Basınçlı hava girişi (bar)}} bar. Basınç, valflerin çalışma aralığını ({{SIKIŞTIRILMIŞ_HAVA_SU:Valf çalışma basıncı aralığı (bar)}} bar) aşmayacak şekilde ayarlanır.

1. Filtre regülatörün ayar topuzunu yukarı çekerek kilidini açın.
2. Basıncı artırmak için topuzu saat yönünde, azaltmak için saat yönünün tersine çevirin.
3. Basıncı manometreden okuyun; azaltırken değerin altına inin ve son ayarı artırarak yapın.
4. Topuzu aşağı bastırarak kilitleyin.
5. Kapıyı bir kez açıp kapatarak kapının iki yönde de son konuma ulaştığını kontrol edin.
6. Ayar değerini bakım kaydına yazın.

## 6.4.3 Kapı hızı

Kapı hızının ve son konum yastıklarının ayarı **Bkz. Bölüm 6.1.5**.

## 6.4.4 Filtre regülatörün yoğuşma suyunun boşaltılması

Filtre regülatörün şeffaf kabında biriken yoğuşma suyu, valflere ve silindirlere ulaşırsa contaları bozar. Kabı günlük olarak kontrol edin (**Bkz. Bölüm 9.1.3**).

1. Kaptaki su seviyesini kontrol edin.
2. Kabın altındaki boşaltma valfini açarak suyu boşaltın.
3. Boşaltma valfini kapatın.
4. Kapta yağ veya pas görülürse işletmenin basınçlı hava hattının kurutucusunu ve filtrelerini kontrol ettirin.

## 6.4.5 Tahliye vanaları

Tahliye vanası silindirlerinin hızı için ayar elemanı yoktur. Vanaların konum sensörlerinin ayarı **Bkz. Bölüm 6.1.7**; vanaların elle kumandası **Bkz. Bölüm 7.6.1**.
