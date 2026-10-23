# 11.4 Pnömatik arızalar

## 11.4.1 Hava basıncı alarmı

**Error-235 — Giriş Hava Basıncı Düşük**

- **Anlamı:** Makineye gelen basınçlı hava yok veya basınç, hava basınç şalterinin ayar değerinin altında.
- **Makineye etkisi:** Kırmızı lamba yanar. Makine çevrimi kendiliğinden durdurmaz, ancak tahliye vanaları hareket edemez: vananın konum değiştirmesi gerekiyorsa pompa çalışmaz, faz süresi ilerlemez ve 10 saniye sonra vana alarmları (Error-322, 323, 325, 326) da çıkabilir. Kabin kapısı da hareket edemez.
- **Nasıl kalkar:** Hava basıncı normale dönünce kalkar.

1. Kompresörün çalıştığını ve hava hattındaki kapama vanasının açık olduğunu kontrol edin.
2. Hava girişindeki hızlı bağlantının tam takılı olduğunu kontrol edin.
3. Filtre regülatördeki basıncı manometreden okuyun; düşükse ayarlayın (**Bkz. Bölüm 6.4.2**).
4. Filtre elemanının tıkalı olmadığını kontrol edin (**Bkz. Bölüm 9.1.21**).
5. Hortumlarda kaçak veya ezilme olup olmadığına bakın.
6. Manometrede çalışma basıncı okunduğu halde mesaj sürüyorsa basınç şalterinin ayarını ve kablosunu kontrol ettirin (**Bkz. Bölüm 11.5.8**).

## 11.4.2 Tahliye vanası alarmları

Tahliye vanasına komut verildiğinde vana {{KONTROL_SABITLERI:Tahliye vanası konum izleme süresi#1}} içinde istenen konuma (konum sensörü) ulaşmazsa alarm çıkar. Komut, vana konumuna ulaşana kadar verilmeye devam eder; vana konumuna ulaşınca mesaj kendiliğinden kalkar.

Tablo: Tahliye vanası alarmları

| Kod | Ekranda yazan | Gerçek durum | Çalışmayan pompa | Kontrol edilecek lamba |
|---|---|---|---|---|
| Error-322 | Yıkama Tahliye Vanası Açılamadı | Yıkama tahliye vanası açılmadı | Yıkama pompası | **Yıkama Tahliye Açık** |
| Error-323 | Yıkama Tahliye Vanası Kapanamadı | Yıkama tahliye vanası kapanmadı | Durulama pompası | **Yıkama Tahliye Kapalı** |
| Error-325 | Durulama Tahliye Vanası Kapanamadı | Durulama tahliye vanası **açılmadı** | Durulama pompası | **Durulama Tahliye Açık** |
| Error-326 | Hücre Tahliye Vanası Açılamadı | Durulama tahliye vanası **kapanmadı** | Yıkama pompası | **Durulama Tahliye Kapalı** |

**NOT:** Error-325 ve Error-326'nın ekran metinleri gerçek durumu doğru tarif etmez. Arıza ararken tablodaki "Gerçek durum" sütununu esas alın.

Her vana alarmında:

1. Basınçlı havanın olduğunu kontrol edin; Error-235 da varsa önce havayı düzeltin.
2. Manuel Sayfası'nda ilgili vananın **Açık** ve **Kapalı** lambalarına bakın.
3. Vana gerçekte istenen konumdaysa ama lamba yanmıyorsa konum sensörünün ayarını ve kablosunu kontrol edin (**Bkz. Bölüm 6.1.7**).
4. Vana hareket etmiyorsa valf kutusundaki ilgili valfin bobinini ve soketini kontrol ettirin.
5. Valf çalıştığı halde silindir hareket etmiyorsa silindiri ve vana pistonunu mekanik sıkışmaya karşı LOTO altında kontrol edin (**Bkz. Bölüm 9.1.16**).
6. Vanayı Manuel Sayfası'ndan açıp kapatarak çalıştığını doğrulayın.

## 11.4.3 Kapı hareket arızaları

Tablo: Kapı arızaları

| Belirti | Olası neden | Yapılacak |
|---|---|---|
| Kapı açılmıyor veya kapanmıyor | Basınçlı hava yok | Havayı kontrol edin (Error-235) |
| | Acil durdurma basılı veya güvenlik rölesi resetlenmemiş | Butonu bırakın, **RESET**'e basın |
| | Kapı butonlarına doğru basılmıyor | İki aynı adlı butona birlikte basın ve basılı tutun |
| | Kapanırken ışık perdesi kesik (kirli cam, açıklıkta cisim, hiza bozuk) | Açıklığı boşaltın; camları temizleyin (**Bkz. Bölüm 6.2.2**) |
| | Kapı valfi bobini veya soketi arızalı | Valfi kontrol ettirin |
| | Kızakta sıkışma veya yabancı cisim | LOTO altında kızakları kontrol edin |
| Kapı yavaş veya sarsıntılı hareket ediyor | Hava basıncı düşük | Basıncı ayarlayın |
| | Hız ayarı değişmiş; susturucu tıkalı | **Bkz. Bölüm 6.1.5**; susturucuları değiştirin |
| | Kızak aşınmış veya kirli | Kızakları temizleyin veya değiştirin |
| Kapı son konumda vuruntu yapıyor | Yastık ayarı bozuk | **Bkz. Bölüm 6.1.5** |
| Kapı açık konumda kendiliğinden aşağı kayıyor | Pilotlu çek valf veya silindir contası kaçırıyor | Açık kapının altında çalışmayın; kapının konumunu koruma testini yapın (**Bkz. Bölüm 5.4.5**) ve valfleri kontrol ettirin |
| İki silindir eşit hareket etmiyor, kapı yamuk | Hız ayarları farklı; bir silindirde kaçak | Hız ayarlarını eşitleyin; silindirleri kontrol ettirin |

## 11.4.4 Hava kaçakları

Hava kaçağı kompresörün gereksiz çalışmasına ve silindirlerin yavaşlamasına yol açar.

1. Makine çalışırken pnömatik bağlantıları dinleyin; kaçak sesi gelen bölgeyi belirleyin.
2. Şüpheli bağlantılara kaçak spreyi sıkın; kabarcık oluşan yeri işaretleyin.
3. LOTO uygulayın ve hava beslemesini ayırın.
4. Rakor kaçağında hortumu rakordan çıkarın, ucunu dik olarak kesin ve yeniden takın.
5. Hasarlı hortumu veya rakoru değiştirin.
6. Hava beslemesini açın ve kaçağın giderildiğini kontrol edin.
