# 11.2 Arıza tablosu

Bu alt bölümde, LYM serisi makinelerde karşılaşılabilecek arızalar belirti, olası neden ve çözüm adımlarıyla birlikte verilmiştir. Arıza numaraları, kılavuzun diğer bölümlerindeki atıflarla aynıdır.

| No | Belirti | Arıza lambası | Uygulayan |
| :---: | :--- | :---: | :--- |
| 1 | Sepet dönmüyor veya yıkama başlamıyor | Redüktör arızası | Operatör / bakım personeli |
| 2 | Yıkama pompası çalışmıyor | Pompa arızası | Operatör / bakım personeli |
| 3 | Isıtıcı ve / veya pompa devreye girmiyor | Düşük su seviyesi | Operatör |
| 4 | Opsiyonel donanım çalışmıyor | Yok | Bakım / elektrik personeli |
| 5 | Kaçak akım koruma cihazı atıyor | Yok | Elektrik personeli |
| 6 | Kapak kapalı olduğu hâlde yıkama başlamıyor | Yok | Bakım / elektrik personeli |
| 7 | Su ısınmıyor | Yok | Operatör / elektrik personeli |

## 11.2.1 Arıza 1 — Redüktör arızası

**Belirti:** Redüktör arıza lambası yanıyor; sepet dönmüyor veya yıkama başlamıyor.

**Olası neden:** Sepet redüktörü termik rölesi aşırı akım nedeniyle atmıştır. Aşırı akımın nedeni; sepetin gereğinden fazla yüklenmesi, sepetin veya tahrik mekanizmasının takılması ya da redüktör motorunun iç hasarı olabilir.

**Çözüm**

1. Makineyi durdurun.
2. Sepetteki yükü azaltın; sepetin dönüşünü engelleyen parça veya mekanik takılma varsa giderin.
3. Termik röleyi resetleyin (elektrik personeli).
4. Sepeti boşaltın ve TEST butonu ile boşta döndürün; motorun takılıp takılmadığını gözlemleyin.
5. Ampermetre ile motor akımını ölçün (elektrik personeli). Akım normal aralıktaysa arıza giderilmiştir.

Arıza tekrarlıyorsa motor ve redüktörün servis tarafından kontrol edilmesi gerekir (**Bkz. Bölüm 13.3**).

## 11.2.2 Arıza 2 — Pompa arızası

**Belirti:** Pompa arıza lambası yanıyor; yıkama pompası çalışmıyor.

**Olası neden:** Yıkama pompası termik rölesi aşırı akım nedeniyle atmıştır. Aşırı akımın nedeni; tıkalı filtre veya emiş hattı nedeniyle pompanın zorlanması ya da pompa salmastrasının veya mekanik kısmının hasarlı olması olabilir.

**Çözüm**

1. Makineyi durdurun ve LOTO uygulayın.
2. Ön filtreyi ve emiş filtresini kontrol edin; tıkanıklığı giderin (**Bkz. Bölüm 10**).
3. Hassas filtre bulunan makinelerde, pompa çıkış hattını ve torba filtreyi tıkanıklık açısından kontrol edin.
4. Pompa salmastrasında sızıntı olup olmadığını kontrol edin.
5. Termik röleyi resetleyin (elektrik personeli).
6. LOTO'yu kaldırın ve kısa süreli bir deneme çalıştırması yapın; pompada anormal ses olup olmadığını dinleyin.
7. Pompa akımını ölçün (elektrik personeli). Akım normal aralıktaysa arıza giderilmiştir.

Arıza tekrarlıyorsa pompanın servis tarafından kontrol edilmesi gerekir (**Bkz. Bölüm 13.3**).

## 11.2.3 Arıza 3 — Düşük su seviyesi

**Belirti:** Düşük su seviyesi lambası yanıyor; ısıtıcı ve / veya pompa devreye girmiyor.

**Olası neden:** Tanktaki su seviyesi güvenli çalışma sınırının altına düşmüş ve seviye bekçisi düşük seviye sinyali vermiştir. Su seviyesi; buharlaşma, parçalarla taşınan su ve tahliye vanasındaki sızıntı nedeniyle zamanla azalır.

**Çözüm**

1. Tanktaki su seviyesini kontrol edin.
2. Tanka gerekli miktarda su ekleyin.
3. Seviye güvenli sınıra ulaştıktan sonra mavi RESET butonuna basarak emniyet devresini onaylayın.
4. Isıtıcıyı ve yıkama çevrimini yeniden başlatın.

Tank dolu olduğu hâlde lamba yanmaya devam ediyorsa seviye bekçisi arızalı olabilir (**Bkz. Bölüm 11.7**).

## 11.2.4 Arıza 4 — Opsiyonel donanım çalışmıyor

**Belirti:** Kurutma fanı, drenaj pompası, yağ sıyırıcı, buhar tahliye fanı veya başka bir opsiyonel donanım çalışmıyor; panoda ilgili arıza lambası yok.

**Olası neden:** İlgili motorun termik rölesi atmıştır. Bu devrelerde arıza lambası bulunmaz.

**Çözüm** (bakım veya elektrik personeli)

1. Ana şalteri **0** konumuna getirin ve LOTO uygulayın (**Bkz. Bölüm 2.4**).
2. Elektrik panosunun kapağını açın.
3. İlgili motor devresindeki termik röleyi bulun; atmışsa resetleyin.
4. Atmanın nedenini araştırın: tıkanıklık, aşırı yük veya mekanik sıkışma.
5. Pano kapağını kapatın ve LOTO'yu kaldırın.
6. Donanımı tek başına çalıştırarak test edin.

## 11.2.5 Arıza 5 — Kaçak akım koruma cihazı atıyor

**Belirti:** Kaçak akım koruma cihazı atıyor; makine veya bir fonksiyon devreye girmiyor.

**Olası neden:** Devrelerden birinde yalıtım hatası veya kaçak akım vardır. Arızalı devre, hangi yük devreye girdiğinde cihazın attığı izlenerek bulunur.

**Çözüm** (elektrik personeli)

1. Tüm fonksiyonları kapalı konuma getirin.
2. Kaçak akım koruma cihazını resetleyin.
3. Fonksiyonları tek tek devreye alın: yalnız sepet (TEST), yalnız pompa, yalnız ısıtıcı.
4. Cihazın hangi fonksiyon devreye girdiğinde attığını belirleyin ve o devreyi ayırın.
5. Arızalı devredeki motoru, rezistansı, kabloları ve bağlantıları kontrol edin.
6. Gerekirse yalıtım direnci ölçümü yapın.

Kaçak akım koruma cihazı tekrar tekrar atıyorsa servise başvurun (**Bkz. Bölüm 11.1.3**).

## 11.2.6 Arıza 6 — Kapak kapalı, yıkama başlamıyor

**Belirti:** Kapak kapalı olmasına rağmen START butonuna basıldığında yıkama çevrimi başlamıyor.

**Olası neden:** Kapak kapalı switchi arızalıdır veya kapak kapalı sinyali emniyet devresine ulaşmıyordur.

**Çözüm**

1. Kapağın tam olarak kapandığını ve kapak kilidinin oturduğunu kontrol edin (operatör).
2. Makineyi durdurun ve LOTO uygulayın.
3. Switch kapağını açın; multimetre ile direnç modunda, kapak açık ve kapalı konumdayken kontak geçişini ölçün (elektrik personeli). Kapak kapalıyken kontak geçişi yoksa switch arızalıdır.
4. Switch ve kablo bağlantılarını kontrol edin.
5. Arızalı switchi yetkili bakım personeline değiştirtin (**Bkz. Bölüm 13.3**).
6. Onarımdan sonra güvenlik fonksiyon testini yapın (**Bkz. Bölüm 5.4**).

| Model | Kapak kapalı switchi |
| :--- | :--- |
| **LYM 950 / LYM 1150** | 10 00261 — EMAS L5K13MUM331 1NO 1NC |
| **LYM 1350 / LYM 1500** | 10 03262 — EMAS L5K13MEP123 1NO 1NC ve 10 00260 — EMAS L5K27MUM331 2NO 1NC |

## 11.2.7 Arıza 7 — Su ısınmıyor

**Belirti:** Termostat ekranında ölçülen sıcaklık (PV) yükselmiyor veya hedef sıcaklığa (SV) ulaşılamıyor.

**Olası neden:** Isıtıcı devresi devreye girmiyor veya devreye girdiği hâlde rezistans ısıtmıyor. Nedenler; su sıcaklığının zaten hedef değere veya üst sınıra ulaşmış olması (normal durum), düşük su seviyesi, ısıtıcı şalterinin kapalı olması, termostat arızası veya rezistans arızası olabilir.

**Çözüm — operatör**

1. Düşük su seviyesi lambasını kontrol edin. Lamba yanıyorsa önce Arıza 3 adımlarını uygulayın.
2. Termostat ekranından ölçülen sıcaklığı (PV) ve hedef sıcaklığı (SV) okuyun.
3. PV, SV'ye eşit veya büyükse su hedef sıcaklığa ulaşmıştır; ısıtıcının çalışmaması normaldir.
4. PV, 70 °C üst sınırına ulaştıysa ısıtıcı devreye girmez; bu da normaldir.
5. PV, SV'den düşükse ısıtıcı şalterinin **1** konumunda olduğunu kontrol edin; kapalıysa açın.

**Çözüm — elektrik personeli**

6. Şalter açık ve PV, SV'den düşükken pano içinde ısıtıcı kontaktörünün çekip çekmediğini gözlemleyin.
7. Kontaktör çekiyor ancak su ısınmıyorsa rezistans arızalıdır. LOTO uygulayın ve rezistans komplesini değiştirin (07 00309; **Bkz. Bölüm 13.3**).
8. Kontaktör çekmiyorsa termostat çıkış sinyalini ölçü aleti ile kontrol edin. Termostat çıkış vermiyorsa termostat arızalıdır; değiştirin veya servise başvurun.
9. Termostat çıkış verdiği, şalter açık olduğu hâlde kontaktör çekmiyorsa kontaktörü, termik koruyucuyu ve kablolamayı kontrol edin.
