# 6.2 Güvenlik ayarları

## 6.2.1 Genel kural

Güvenlik donanımlarının işletme tarafından değiştirilebilecek bir ayarı yoktur; aşağıda belirtilenler dışında ayar yapılmaz. Güvenlik donanımları köprülenmez ve etkisiz hale getirilmez (**Bkz. Bölüm 2.1.4**). Bir güvenlik donanımında yapılan her işten sonra ilgili güvenlik testi tekrarlanır (**Bkz. Bölüm 5.4**).

Tablo: Güvenlik donanımlarının ayar durumu

| Donanım | Ayar | Yapan |
|---|---|---|
| Acil durdurma ve güvenlik rölesi | Ayar yok; manuel reset (**RESET** butonu) | — |
| Işık perdesi | Verici–alıcı hizası; çözünürlük ve çalışma modu üretici tarafından ayarlıdır | Bakım (yalnızca hiza) |
| Kapı kapalı sviçi | Montaj konumu (**Bkz. Bölüm 6.1.6**) | Bakım |
| Pilotlu çek valfler | Ayar yok | — |
| Hava basınç şalteri | Anahtarlama basıncı | Bakım |
| Faz koruma rölesi | Üretici tarafından ayarlı | Elektrikçi |
| Kaçak akım röleleri | Ayar yok; test butonu | Elektrikçi |
| Motor koruma şalterleri | Motor etiket akımı (**Bkz. Bölüm 6.3.1**) | Elektrikçi |

## 6.2.2 Işık perdesinin hizalanması

Işık perdesinin verici ve alıcısı kapı açıklığının iki yanındadır. Darbe veya montaj değişikliğinden sonra hiza bozulursa ışık perdesi sürekli kesik sinyali verir ve kapı kapatılamaz.

1. Işık perdesinin ön camlarını yumuşak, nemli bir bezle temizleyin.
2. Verici ve alıcının gövdelerinin birbirine paralel ve aynı yükseklikte olduğunu kontrol edin.
3. Hiza bozuksa LOTO uygulayın, bağlantı civatalarını gevşetin, gövdeleri birbirine bakacak şekilde hizalayın ve civataları sıkın.
4. Enerjiyi verin ve ışık perdesinin durum göstergesini üreticinin kılavuzuna göre kontrol edin.
5. Işık perdesi testini yapın (**Bkz. Bölüm 5.4.3**).

Işık perdesinin modeli: {{SENSORLER:S09#2}}.

## 6.2.3 Hava basınç şalterinin ayarı

Hava basınç şalteri ({{SENSORLER:S10#2}}) giriş basıncı ayar değerinin altına düşünce Error-235 verir. Ayar değeri: {{SIKIŞTIRILMIŞ_HAVA_SU:Hava basınç şalteri ayar değeri (bar)}} bar.

1. Regülatör basıncını çalışma değerine ayarlayın (**Bkz. Bölüm 6.4.2**).
2. Basınç şalterinin ayar vidasını, şalter ayar değerinde anahtarlayacak şekilde çevirin.
3. Regülatör basıncını yavaşça düşürün ve Error-235 mesajının ayar değerinde çıktığını manometreden kontrol edin.
4. Regülatör basıncını çalışma değerine geri getirin; mesajın kalktığını kontrol edin.

## 6.2.4 Güvenlik fonksiyonlarının test periyodu

Acil durdurma testinin periyodu: {{GUVENLIK_AYARLARI:Acil stop test periyodu}}. Diğer güvenlik fonksiyonlarının test aralıkları **Bkz. Bölüm 9.1.3**.
