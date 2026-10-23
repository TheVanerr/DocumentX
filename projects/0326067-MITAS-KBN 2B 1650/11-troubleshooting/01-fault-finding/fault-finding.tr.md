# 11.1 Arıza bulma

## 11.1.1 Arıza bulma yaklaşımı

1. Makine tehlikeli bir durumdaysa acil durdurma butonuna basın; değilse çevrimi **STOP** ile durdurun.
2. Kule lambasının rengini ve durum penceresindeki yazıyı not edin.
3. Alarm Sayfası'nı açın ve aktif alarmların kodunu okuyun.
4. Alarm varsa Bölüm 11.3, 11.4 veya 11.5'teki ilgili açıklamayı uygulayın.
5. Alarm yoksa belirtiyi Bölüm 11.2'deki tablolarda bulun.
6. Manuel Sayfası'ndaki GİRİŞ GÖZLEM lambalarıyla ilgili sinyali kontrol edin (**Bkz. Bölüm 11.1.3**).
7. Makineye müdahale gerekiyorsa işin kimin tarafından yapılacağını belirleyin (**Bkz. Bölüm 11.1.4**) ve LOTO uygulayın.
8. Arızayı giderin; aynı arızanın tekrar etmemesi için kök nedeni bulun.
9. Makineyi bir deneme çevrimiyle kontrol edin.
10. Arızayı, nedenini ve yapılan işi bakım kaydına yazın.

## 11.1.2 Arıza bildirimleri

Bir arıza veya uyarı oluştuğunda kule lambası kırmızı yanar ve mesaj üç yerde görünür:

- Çalışma Sayfası'nın altındaki kırmızı bantta kayan yazı olarak.
- Alarm Sayfası'ndaki aktif alarm listesinde.
- Kurulum Sayfası'ndaki alarm geçmişinde.

Her mesaj **Error-** ile başlayan bir kod taşır. Ayrı bir alarm resetleme butonu yoktur; alarmlar nedeni ortadan kalkınca kendiliğinden kalkar. Error-422, Error-150 ve Error-151 **START**'a basıldığında oluşur; neden giderildikten sonra **START**'a yeniden basılmalıdır. Alarm Sayfası'nda satıra dokunmak alarmı onaylar, nedenini gidermez.

Acil durdurma (Error-229) makineyi anında durdurur. Motor koruma, kaçak akım, faz sırası, sepet sürücüsü ve hava basıncı alarmlarında makine çevrimi kendiliğinden durdurmaz; bu alarmlardan biri çevrim sırasında çıkarsa çevrimi **STOP** ile durdurun.

## 11.1.3 Manuel Sayfası ile giriş sinyallerinin kontrolü

Manuel Sayfası'nın GİRİŞ GÖZLEM bölümündeki her lamba bir giriş sinyalinin anlık durumunu gösterir: yeşil = sinyal var, kırmızı = sinyal yok. Kırmızı her zaman arıza demek değildir: arıza bildiren satırlarda (Termik, Hata, Kaçak Akım) normal durum kırmızıdır, yeşil arıza demektir. Hava basıncı, el koruma sensörü ve kapı butonları bu ekranda gösterilmez.

Tablo: GİRİŞ GÖZLEM lambalarının anlamı

| Lamba | Normal durum | Anormal durumun anlamı | İlgili alarm |
|---|---|---|---|
| Acil Stop | Yeşil | Kırmızı: acil durdurma butonu basılı, güvenlik rölesi resetlenmemiş veya devre açık | Error-229 |
| Faz Sıra Bilgisi | Yeşil | Kırmızı: faz eksik veya faz sırası yanlış | Error-410 |
| Start Buton | Kırmızı; **START**'a basınca yeşil | Basınca yeşil olmuyor: buton veya kablo arızası | — |
| Stop Buton | Yeşil; **STOP**'a basınca kırmızı | Basılmadan kırmızı: STOP devresi arızası | — |
| Redüktör Motor Hata | Kırmızı | Yeşil: sepet motoru sürücüsü arızada | Error-126 |
| Yıkama Pompa Termik | Kırmızı | Yeşil: yıkama pompası motor koruması atmış | Error-100 |
| Durulama Pompa Termik | Kırmızı | Yeşil: durulama pompası motor koruması atmış | Error-101 |
| Kurutma Fan Termik | Kırmızı | Yeşil: kurutma fanı motor koruması atmış | Error-111 |
| Egzoz Termik | Kırmızı | Yeşil: egzoz fanı motor koruması atmış | Error-110 |
| Sıyırıcı Termik | Kırmızı | Yeşil: yağ sıyırıcı motor koruması atmış | Error-130 |
| Isıtıcı Kaçak Akım F2 | Kırmızı | Yeşil: F2 kaçak akım rölesi atmış | Error-170 |
| Isıtıcı Kaçak Akım F3 | Kırmızı | Yeşil: F3 kaçak akım rölesi atmış | Error-171 |
| Isıtıcı Kaçak Akım F4 | Kırmızı | Yeşil: F4 kaçak akım rölesi atmış | Error-172 |
| Yıkama Tank Alt Seviye | Yeşil (sıvı var) | Kırmızı: yıkama tankında seviye düşük | Error-200 |
| Durulama Tank Alt Seviye | Yeşil (sıvı var) | Kırmızı: durulama tankında seviye düşük | Error-202 |
| Yıkama Tahliye Açık | Vana açıkken yeşil | Açık ve Kapalı lambalarının ikisi de kırmızı: vana arada kalmış veya sensör arızası | Error-322, 323 |
| Yıkama Tahliye Kapalı | Vana kapalıyken yeşil | Açık ve Kapalı lambalarının ikisi de yeşil: sensör arızası | Error-322, 323 |
| Durulama Tahliye Açık | Vana açıkken yeşil | Yıkama tahliye vanasındaki gibi | Error-325, 326 |
| Durulama Tahliye Kapalı | Vana kapalıyken yeşil | Yıkama tahliye vanasındaki gibi | Error-325, 326 |
| Kapak Kapalı | Kapı kapalıyken yeşil | Kapı kapalıyken kırmızı: sviç ayarı veya arızası | Error-422 |
| Redüktör Pozisyon Sw | Sepet başlangıç konumunda yeşil; sepet dönerken her turda bir kez yeşil | Hiç yeşil olmuyor: sepet konum sensörü arızası | Çevrim bitmez |
| Drenaj Pompa Termik | Kırmızı | Yeşil: drenaj pompası motor koruması atmış | Error-106 |

## 11.1.4 Arızaya kim müdahale eder

Tablo: Arıza türüne göre yetki

| Arıza türü | Operatör | Mekanik bakım | Elektrikçi | Üretici servisi |
|---|---|---|---|---|
| Kapı açık, tank sıcaklığı düşük, seviye düşük, hava kapalı | ✓ | ✓ | | |
| Filtre tıkanması, meme tıkanması, köpük | ✓ (filtre temizliği) | ✓ | | |
| Mekanik arıza (teker, pinyon, kapı, vana, pompa) | | ✓ | | ✓ |
| Pnömatik arıza (kaçak, valf, silindir) | | ✓ | | ✓ |
| Motor koruma şalteri, kaçak akım rölesi, sigorta atması | | | ✓ | ✓ |
| Sensör arızası | | ✓ (temizlik, ayar) | ✓ (bağlantı, değişim) | ✓ |
| Sepet motoru sürücüsü hata kodu | | | ✓ | ✓ |
| PLC, operatör paneli, program | | | | ✓ |

## 11.1.5 Servis çağırma ölçütleri

Aşağıdaki durumlarda makineyi kullanmayı bırakın ve üretici servisine başvurun:

- Bir güvenlik fonksiyonu testi geçemiyorsa ve neden bu kılavuzla giderilemiyorsa.
- Kaçak akım rölesi, nedeni bulunduktan ve giderildikten sonra yine atıyorsa.
- Sepet motoru sürücüsü aynı hata kodunu tekrar veriyorsa.
- PLC'de hata ışığı yanıyorsa veya operatör paneli PLC ile haberleşmiyorsa.
- Yapısal hasar (çatlak, kırık kaynak, deforme sepet) varsa.
- Aynı alarm bir vardiyada üç kezden fazla tekrarlanıyorsa.

Servis talebinde verilecek bilgiler **Bkz. Bölüm 1.3.2**.
