# 2.3 Genel operasyonel güvenlik kuralları

Aşağıdaki kurallar makinenin tüm kullanım aşamalarında geçerlidir. İhlal durumunda makineyi durdurun; güvenlik koşulları sağlanmadan yeniden devreye almayın.

1. Kılavuzu okuyun ve eğitim almadan makineyi çalıştırmayın (**Bkz. Bölüm 1.1.3**).
2. Güvenlik cihazlarını (kapak manyetik switch'leri, acil stop, emniyet röleleri, seviye interlock'u) devre dışı bırakmayın veya bypass etmeyin.
3. Makine çalışırken bakım kapaklarını açmayın; kapak açma öncesi LOTO uygulayın (**Bkz. Bölüm 2.4**). Kapak switch'leri mekanik kilit içermez; açıldığında makineyi durdurur ancak sıcak sıvı ve kalıntı hareket riskini ortadan kaldırmaz.
4. **RESET** lambası sönükken (emniyet zinciri açıkken) fonksiyon anahtarı açmayın; önce nedeni giderin (**Bkz. Bölüm 2.5, 11.1.2**).
5. Kırmızı **WASHING LEVEL** lambası yanarken ısıtıcı ve pompa anahtarlarını açmayın; önce ilgili tankı doldurun (**Bkz. Bölüm 7.2.1**).
6. Konveyörü çalıştırmadan önce konveyör hattında sıkışabilecek cisim kalmadığını kontrol edin.
7. Pompaları çalıştırmadan önce pompa emiş/çıkış vanalarının açık olduğunu kontrol edin (**Bkz. Bölüm 7.2.5**).
8. Parçaları yalnızca sol girişten konveyöre yerleştirin ve sağ çıkıştan alın; hücre içine uzanmayın, koruma kafesi içine girmeyin.
9. Elektrik panosu kapağını çalışma sırasında kapalı ve kilitli tutun; pano içine yalnızca yetkili elektrikçi LOTO altında müdahale eder.
10. Makine çevresine su püskürtmeyin; elektrik panosu, inverter ve kapak switch bölgelerine doğrudan su tutmayın.
11. Acil durumlarda en yakın acil stop butonuna basın (**Bkz. Bölüm 2.5**).

![Bakım kapağı — elle kaldırılarak açılır; yalnızca makine durmuşken](../../assets/2.4/bakim-kapagi-acma.jpg)

---

# 2.4 Tehlikeli enerji kontrolü — LOTO (kilitleme ve etiketleme)

**UYARI — Enerji kaynaklı yaralanma:** LOTO uygulanmadan yapılan bakım veya temizlikte makine kazara devreye girebilir; ezilme, elektrik çarpması, sıcak sıvı ve basınçlı hava yaralanması oluşabilir. Tüm enerji kaynaklarını izole edin, kilitleyin ve etiketleyin.

Bu prosedür, makine üzerinde mekanik bakım, elektrik müdahalesi, filtre/tank temizliği, kapak sökme, nozul ve rezistans kontrolü ve benzeri tüm işler öncesinde uygulanır. Diğer bölümlerde yalnızca **Bkz. Bölüm 2.4** referansı verilir; adımlar tekrarlanmaz.

Bu makinede HMI bulunmadığından enerji yokluğu doğrulaması **fiziksel** olarak yapılır: operatör paneli lambalarının tamamen sönmesi, RESET butonuna basıldığında RESET lambasının yanmaması, fonksiyon anahtarı açıldığında hiçbir motorun çalışmaması ve hava regülatörü manometresinin **0 bar** göstermesi.

Fonksiyon anahtarlarının OFF konumuna alınması, acil stop'a basılması veya PLC'nin durması **enerji izolasyonu değildir**: PLC ve kumanda devresi enerjili kalır ve bir arıza ya da yanlış anahtar konumu birimleri yeniden çalıştırabilir. Enerji izolasyonu yalnızca ana şalterin (TMŞ) OFF konumunda kilitlenmesi ve hava hattının kesilmesi ile sağlanır.

## 2.4.1 Kapsam ve enerji kaynakları

| Enerji türü | Kaynak | İzolasyon noktası |
| :--- | :--- | :--- |
| Elektrik | 380 V, 3 faz, 110 kW / 220 A | Ana şalter — **TMŞ Schneider CVS250F (LV521091)**, pano kapağı üzerindeki döner kol; **OFF (O)** konumu kilitlenebilir |
| Pnömatik | 6 bar basınçlı hava | Tesisat hattındaki **kilitlenebilir, tahliyeli küresel vana** — KAPALI + kilit + etiket; kalıntı basınç vananın tahliye ağzından boşaltılır; doğrulama: **AIR INLET / HAVA GİRİŞİ** regülatörü manometresinde **0 bar** |
| Su / proses sıvısı | 1 bar şebeke su girişi; tanklarda +70 °C'ye kadar sıvı | Tank dolum hattını besleyen **tesis su vanası** — KAPALI + etiket; tank sıvısı için **TAHLİYE** vanaları (**Bkz. Bölüm 10.1.5**) |
| Termal | Tank rezistansları (7 × 8 kW), kurutma ısıtıcıları (2 × 12 kW) | Elektrik izolasyonu sonrası soğuma süresi — tank sıvısı ve kurutma hücresi yüzeyleri |
| Mekanik | Konveyör, blower, fan, pompa, yağ sıyırıcı | Elektrik izolasyonu; durma sonrası fan ve blower kanatları ataletle dönmeye devam eder — tam durmayı bekleyin |
| Elektriksel depolanmış | Konveyör inverteri DC bara kondansatörü | Ana şalter OFF sonrası inverter göstergesi tamamen sönene ve Delta inverter kılavuzunda belirtilen deşarj süresi dolana kadar bekleme |

**NOT:** Makine üzerinde basınçlı hava kesme vanası yoktur; hava, gövdedeki **AIR INLET / HAVA GİRİŞİ** regülatörüne hortumla bağlanır. İşletme, hava hortumundan önceki tesisat hattına **kilitlenebilir, tahliyeli küresel vana** monte etmelidir; bu vana pnömatik LOTO izolasyon noktasıdır (**Bkz. Bölüm 5.3.1**). Tanklar elle doldurulur; su izolasyon noktası, dolum hattını besleyen tesis su vanasıdır.

Makinede hidrolik ve vakum sistemi yoktur.

## 2.4.2 LOTO uygulama prosedürü

**Hazırlık**

1. Bakım veya müdahale kapsamını ve süresini belirleyin.
2. Etkilenecek personele makine üzerinde çalışılacağını bildirin.

**Makineyi durdurma**

3. Operatör panelindeki tüm fonksiyon anahtarlarını **OFF** konumuna alın; önce CONVEYOR, ardından pompalar, blower/fan ve ısıtıcılar (**Bkz. Bölüm 7.3.1**).
4. Bir hareket, anahtarı OFF konumundayken durmuyorsa en yakın **acil stop** butonuna basın (**Bkz. Bölüm 2.5**).

**Elektrik izolasyonu**

5. Elektrik panosu kapağındaki **ana şalter kolunu** OFF (O) konumuna çevirin.
6. Şalter koluna kişisel **asma kilidinizi** takın.
7. Kilide **LOTO etiketi** asın; etikette adınız, tarih ve "Çalıştırmayın — bakım" ifadesi bulunsun.

**Basınçlı hava izolasyonu**

8. Tesisat hattındaki kilitlenebilir küresel **hava vanasını** kapatın.
9. Hava vanasına kişisel asma kilidinizi ve LOTO etiketini takın.
10. Hat içindeki kalıntı basıncı vananın tahliye ağzından boşaltın.

**Su izolasyonu**

11. Tank dolum hattını besleyen **tesis su vanasını** kapatın.
12. Su vanasına LOTO etiketi asın.

**UYARI — Sıcak sıvı:** Tank sıvısı +70 °C'ye kadar sıcak olabilir; boşaltma sırasında sıçrayan sıvı haşlanma yanığına yol açar. Sıvıyı soğumadan boşaltmayın; ısıya dayanıklı eldiven ve koruyucu gözlük takın.

13. Tank içinde çalışılacaksa proses sıvısını **TAHLİYE** vanalarından boşaltın (**Bkz. Bölüm 10.1.5**).

**Doğrulama**

14. Hava regülatörü manometresinde **0 bar** okunduğunu doğrulayın.
15. Operatör paneli lambalarının (run lambaları, WASHING LEVEL, RESET) tamamen **sönük** olduğunu doğrulayın.
16. Basılı acil stop butonu varsa serbest bırakın.

**NOT:** Acil stop basılıyken RESET lambası ve motorlar, besleme kesilmemiş olsa bile devreye girmez; bu nedenle 17–19. adımlardaki test yalnızca acil stoplar serbestken anlamlıdır.

**UYARI — Beklenmeyen hareket:** Besleme kesilmemişse test sırasında konveyör hareket eder; sıkışma yaralanması oluşabilir. Testten önce konveyör çevresinde kimsenin bulunmadığını kontrol edin.

17. **RESET** butonuna basın; RESET lambasının yanmadığını doğrulayın.
18. **CONVEYOR** anahtarını ON konumuna alın; konveyörün hareket etmediğini ve run lambasının yanmadığını doğrulayın.
19. CONVEYOR anahtarını OFF konumuna geri alın.
20. 17. veya 18. adımda bir lamba yandıysa ya da motor çalıştıysa besleme kesilmemiştir: pano içine girmeyin; yetkili elektrikçiyi çağırın.

**TEHLİKE — Elektrik çarpması:** Ana şalterin giriş klemensleri ve tesis besleme kablosu, ana şalter OFF konumundayken de gerilim altındadır; temas ölümle sonuçlanabilir. Giriş tarafında çalışmadan önce tesis dağıtım panosundaki besleme şalterini kapatın ve kilitleyin.

21. Pano içinde çalışılacaksa ana şalter çıkış klemenslerinde gerilim olmadığını multimetre ile ölçün (yalnızca yetkili elektrikçi).
22. Konveyör, fan, blower ve pompa bölgelerinde hareket olmadığını gözle ve sesle kontrol edin.
23. Doğrulama tamamlanmadan kapak veya muhafaza sökmeyin ve müdahaleye başlamayın.

**Müdahale sonrası**

24. Tüm koruyucuları, kapakları ve bağlantıları yerine takın.
25. Araç ve malzemeleri alandan kaldırın.
26. Bakım kapaklarının manyetik switch'lerle hizalı kapandığını kontrol edin.
27. Kendi LOTO kilidinizi ve etiketinizi sökün; başkasının kilidini sökmeyin.
28. Tesis su vanasını açın.
29. Tesisat hava vanasını açın.
30. Hava regülatörü manometresinde besleme basıncının okunduğunu kontrol edin (**Bkz. Bölüm 3.3.5**).
31. Ana şalteri ON konumuna alın.
32. **RESET** butonuna mavi lamba yanana kadar basın (**Bkz. Bölüm 2.5**).
33. Makineyi başlatma prosedürüne göre çalıştırın (**Bkz. Bölüm 7.2**).

**TEHLİKE — Çoklu personel:** Bir çalışan işini bitirmeden başka biri enerjiyi geri verirse ezilme veya elektrik çarpması sonucu ölüm ya da ağır yaralanma oluşabilir. Her çalışan her izolasyon noktasına kendi kişisel kilidini takar; son çalışan kilidini sökmeden enerji verilmez.

Bakım kapağı manyetik switch'lerini köprülemeyin, mıknatısla kandırmayın ve devre dışı bırakmayın. Bakım kapağını yalnızca LOTO tamamlandıktan sonra açın.

![Ana şalter (TMŞ Schneider CVS250F) — pano içi görünüm](../../assets/5.3/tms-ana-salter.jpg)

---

# 2.5 Acil durdurma (E-Stop) ve reset

Makinede toplam **7 adet** acil stop butonu bulunur:

| No. | Konum |
| :---: | :--- |
| 1 | Operatör paneli — **EMERGENCY STOP** |
| 2 | Konveyör girişi (sol uç) — ön kenar |
| 3 | Konveyör girişi (sol uç) — arka kenar |
| 4 | Konveyör çıkışı (sağ uç) — ön kenar |
| 5 | Konveyör çıkışı (sağ uç) — arka kenar |
| 6 | Makine orta bölgesi — ön kenar |
| 7 | Makine orta bölgesi — arka kenar |

Acil stop'a basıldığında makinedeki **tüm hareket ve proses çıkışları** (konveyör, pompalar, ısıtıcılar, blower, kurutma ve egzoz fanları, yağ sıyırıcı) güvenli şekilde durur; mavi **RESET** lambası söner; reset onayı olmadan hiçbir fonksiyon yeniden çalıştırılamaz.

Acil stop durdurma kategorisi **Stop kategorisi 0**'dır (EN 60204-1): acil stop zincirini izleyen Omron G9SB-2002-A emniyet rölesinin çıkışları gecikmesizdir; acil stop basılınca motor ve ısıtıcı kontaktörlerinin enerjisi derhal kesilir. Fan ve blower kanatları ataletle dönerek durur.

Acil stopu normal durdurma için kullanmayın; yalnızca acil tehlike anında basın. Sık acil stop kullanımı kontaktörleri ve rezistans kontrol devresini zorlar. Normal durdurma için **Bkz. Bölüm 7.3.1**.

![Acil stop — konveyör giriş tarafı](../../assets/2.5/acil-stop-giris.jpg)

![Acil stop — konveyör çıkış tarafı](../../assets/2.5/acil-stop-cikis.jpg)

![Acil stop — makine orta bölge](../../assets/2.5/acil-stop-orta.jpg)

**Acil stop kullanılacak durumlar**

- Can güvenliğini tehdit eden sıkışma, düşme veya çarpma riski
- Ani mekanik arıza sesi, pompa veya fan kaynaklı şiddetli titreşim, tank veya boru hattında büyük sızıntı
- Elektrik arkı, duman, yanık kokusu veya rezistans kaynaklı anormal ısınma
- Konveyör üzerinde parça sıkışması veya tel bant hasarı

Bakım kapağı açıldığında emniyet zinciri makineyi zaten durdurur; bu bir acil stop nedeni değildir. Kapak açılarak makine durduysa, kapak altında iş yapılacaksa önce LOTO uygulayın (**Bkz. Bölüm 2.4**). İş bitince kapağı switch ile hizalı kapatın, LOTO'yu kaldırın ve aşağıdaki reset prosedürünü uygulayın.

**Reset prosedürü**

1. Fiziksel tehdidi giderin; sıkışma, sızıntı veya arıza kaynağına müdahale gerekiyorsa önce LOTO uygulayın (**Bkz. Bölüm 2.4**).
2. 7 acil stop butonunun tamamını kontrol edin; birden fazla buton basılmış olabilir.
3. Basılı acil stop mantarını **serbest bırakın** (çekerek veya ok yönünde çevirerek kilidi kaldırın).
4. Tüm bakım kapaklarının kapalı ve switch ile hizalı olduğunu doğrulayın.
5. Operatör panelindeki mavi **RESET** butonuna, lamba **yanana kadar** basın.

**NOT:** Acil stopu serbest bırakmak makineyi hazır duruma getirmez; makinenin güvenli duruma alındığını operatör RESET ile onaylar.

6. RESET lambası yanmıyorsa Arıza 4 teşhis adımlarını uygulayın (**Bkz. Bölüm 11.1.2**); lamba yanmadan fonksiyon anahtarı açmayın.
7. Fonksiyonları açılış sırasına göre yeniden çalıştırın (**Bkz. Bölüm 7.2.2**).

RESET, emniyet zincirini yeniden devreye alır; arıza giderilmeden fonksiyonların yeniden açılması tekrar durmaya veya hasara yol açabilir. Acil stop fonksiyon testini **her ay** yapın (**Bkz. Bölüm 6.2.3, 5.4.1**).

---

# 2.6 Kişisel koruyucu donanım (KKD)

İşveren, görev bazlı KKD sağlamak ve kullanımını denetlemekle yükümlüdür. Aşağıdaki matris minimum gereksinimleri tanımlar; yerel mevzuat daha sıkı ise ona uyulur. Makine üzerindeki "KKD KULLAN" etiketi bu matrise işaret eder.

| Görev | İş elbisesi | Çelik burunlu ayakkabı | Eldiven | Koruyucu gözlük | Solunum koruması |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Operatör paneli kullanımı (anahtar / reset) | ✓ | ✓ | — | — | — |
| Parça yükleme / boşaltma (konveyör giriş-çıkış) | ✓ | ✓ | ✓ (ısıya dayanıklı — çıkan parça sıcaktır) | ✓ (sıçrama riski) | — |
| Tank elle doldurma, seviye kontrolü | ✓ | ✓ (kaymaz) | ✓ | ✓ | — |
| Ön filtre, iç filtre ve torba filtre temizliği | ✓ | ✓ (kaymaz) | ✓ (sıvı geçirmez, kimyasala dayanıklı) | ✓ | Kimyasal buharı varsa filtreli maske |
| Tank boşaltma, dezenfeksiyon, temizlik kimyasalı | ✓ (sıvı geçirmez önlük) | ✓ (kaymaz) | ✓ (kimyasala dayanıklı, uzun konçlu) | ✓ (tam kapalı) | Kimyasal buharı varsa filtreli maske |
| Mekanik bakım (konveyör, pompa, fan, nozul) | ✓ | ✓ | ✓ (kesilmeye dirençli) | ✓ | — |
| Elektrik panosu müdahalesi (LOTO ile) | ✓ (pamuklu, alev almaz) | ✓ (yalıtkan taban) | Yalıtkan (ölçüm sırasında) | ✓ | — |
| Sıcak tank / rezistans / kurutma hücresi yakını çalışma | ✓ | ✓ | ✓ (ısıya dayanıklı) | ✓ | — |

**DİKKAT — Kaygan zemin:** Tank çevresinde sızan veya taşan su kayma ve düşmeye yol açabilir. Kaymaz tabanlı ayakkabı giyin; sızıntıyı ve taşan suyu derhal temizleyin (**Bkz. Bölüm 10**).

**DİKKAT — Sıcak parça:** Kurutma hücresinden çıkan parçalar sıcak hava ile kurutulmuştur; çıplak elle temas yanığa yol açabilir. Parçaları ısıya dayanıklı eldivenle alın.

İşveren, kısa süreli ziyaretçileri aktif proses bölgesine girmeden önce bilgilendirir ve asgari KKD (emniyet ayakkabısı, koruyucu gözlük) ile donatır.
