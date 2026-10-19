# 2.3 Genel operasyonel güvenlik kuralları

Aşağıdaki kurallar makinenin tüm kullanım aşamalarında geçerlidir. İhlal durumunda makineyi durdurun; güvenlik koşulları sağlanmadan yeniden devreye almayın.

1. Kılavuzu okumadan ve eğitim almadan makineyi çalıştırmayın (**Bkz. Bölüm 1.1.3**).
2. Güvenlik donanımlarını (acil stop, kapak kapalı switchi, interlock kilit, seviye bekçisi, termostat sıcaklık sınırı, termik röleler) devre dışı bırakmayın veya köprülemeyin.
3. Kapağı yalnızca yıkama çevrimi bittikten ve sepet tamamen durduktan sonra açın; kapağı açarken yüzünüzü açıklıktan uzak tutun (**Bkz. Bölüm 7.4.3**).
4. Sepet dönerken (çevrim sırasında veya TEST butonu basılıyken) hücre içine el, kol veya alet uzatmayın (**Bkz. Bölüm 3.4.5**).
5. RESET lambası sönükken (emniyet devresi açıkken) START vermeyin; önce nedeni giderin (**Bkz. Bölüm 2.5, 11.1**).
6. Tankta yeterli su yokken ısıtıcı şalterini açmayın ve çevrim başlatmayın; kırmızı düşük su seviyesi lambası (INADEQUATE WATER LEVEL) yanıyorsa tankı doldurun (**Bkz. Bölüm 7.2**).
7. Sepeti azami yükleme kapasitesinin üzerinde yüklemeyin; parçaları sepet dışına taşmayacak ve püskürtme kollarına çarpmayacak şekilde yerleştirin (**Bkz. Bölüm 7.4.1**).
8. Tanka yalnızca onaylı, su bazlı alkali yıkama kimyasalı koyun; asit bazlı, solvent içeren veya yanıcı sıvılar kullanmayın (**Bkz. Bölüm 3.2.2, 10.1.5**).
9. Elektrik panosu kapağını çalışma sırasında kapalı tutun; pano içine yalnızca yetkili elektrik personeli LOTO altında müdahale eder (**Bkz. Bölüm 2.4**).
10. Makine çevresine ve panoya su püskürtmeyin; elektrik panosu, dijital göstergeler, kapak switchi ve interlock kilit kutusu bölgesine doğrudan su tutmayın (**Bkz. Bölüm 10.1.6**).
11. Tank çevresinde biriken suyu ve kaygan zemini derhal temizleyin; kaymaz iş ayakkabısı kullanın (**Bkz. Bölüm 2.6**).
12. Kapağı açık konumda tutmayan amortisörlerle çalışmayın; kapağı açık tutarak altında çalışmanız gerekiyorsa kapağı bir destekle sabitleyin (**Bkz. Bölüm 9.1.7**).
13. Acil durumda panodaki acil stop (EMERGENCY STOP) butonuna basın (**Bkz. Bölüm 2.5**).

---

# 2.4 Tehlikeli enerji kontrolü — LOTO (kilitleme ve etiketleme)

**UYARI — Beklenmedik çalışma ve enerji kaynaklı yaralanma:** LOTO uygulanmadan yapılan bakım veya temizlikte makine kazara devreye girebilir; dönen sepet nedeniyle ezilme, rezistans ve pano nedeniyle elektrik çarpması, sıcak proses suyu nedeniyle haşlanma oluşabilir. Tüm enerji kaynaklarını izole edin, kilitleyin ve etiketleyin.

Bu prosedür; mekanik bakım, elektrik müdahalesi, filtre ve tank temizliği, nozul ve rezistans kontrolü, pompa ve redüktör müdahalesi ve benzeri tüm işler öncesinde uygulanır. Diğer bölümlerde yalnızca **Bkz. Bölüm 2.4** referansı verilir; adımlar tekrarlanmaz.

Bu makinede HMI bulunmadığından enerji yokluğu doğrulaması **fiziksel** olarak yapılır: RESET lambası ve arıza lambaları sönüktür, START ve TEST butonlarına basıldığında hiçbir motor çalışmaz.

## 2.4.1 Kapsam ve enerji kaynakları

| Enerji türü | Kaynak | İzolasyon noktası |
| :--- | :--- | :--- |
| Elektrik | 380 V, 3 faz şebeke beslemesi (**Bkz. Bölüm 3.3.4**) | Elektrik panosu ön yüzündeki **ana şalter (POWER)** — **0 (OFF)** konumu asma kilit ile kilitlenebilir (**Bkz. Bölüm 3.4.1**) |
| Termal | Yıkama tankı rezistansı; 70 °C'ye kadar proses suyu, sıcak hücre ve tank yüzeyleri | Isıtıcı şalteri **0**, ardından ana şalter OFF; müdahale öncesi soğuma süresi |
| Mekanik | Sepet redüktörü ve döner sepet; yıkama pompası; opsiyonel fan, yağ sıyırıcı ve drenaj pompası motorları | Elektrik izolasyonu; sepetin ve fanların tamamen durmasını bekleyin |
| Su / proses sıvısı | Tanktaki proses suyu (kimyasal içerir) | Tank boşaltma — sağ ön alttaki tahliye vanası veya drenaj pompası (**Bkz. Bölüm 10.1.4**); sabit su girişi bulunmaz, tank elle doldurulur (**Bkz. Bölüm 3.3.5**) |
| Potansiyel (yerçekimi) | Gazlı amortisörlü üst kapak | Kapağı tam açık konumda bırakın; amortisör kuvvetinden emin değilseniz kapağı bir destekle sabitleyin (**Bkz. Bölüm 9.1.7**) |
| Pnömatik | Yok — makine basınçlı hava kullanmaz | Uygulanmaz |
| Hidrolik | Yok | Uygulanmaz |
| Depolanmış elektrik | Pano içi 24 V DC güç kaynağı dışında depolanmış enerji kaynağı yoktur; inverter bulunmaz | Ana şalter OFF sonrası doğrulama (aşağıdaki adımlar) |

## 2.4.2 LOTO uygulama prosedürü

**Hazırlık**

1. Bakım veya müdahale kapsamını ve süresini belirleyin.
2. Etkilenecek personeli bilgilendirin; makine üzerinde çalışıldığını duyurun.

**Makineyi durdurma**

3. Devam eden yıkama çevrimini kırmızı **STOP** butonu ile sonlandırın; sepetin tamamen durmasını bekleyin (**Bkz. Bölüm 7.3**).
4. Isıtıcı şalterini (HEATER) ve varsa yağ sıyırıcı şalterini (OIL SEPERATOR) **0** konumuna alın.
5. Tehlike durumu varsa acil stop butonuna basın (**Bkz. Bölüm 2.5**).

**Enerji izolasyonu**

6. Elektrik panosu ön yüzündeki **ana şalteri (POWER)** 0 (OFF) konumuna çevirin.
7. Şaltere kişisel **asma kilidinizi** takın.
8. Kilide **LOTO etiketi** asın; etikette adınız, tarih ve "Çalıştırmayın — bakım" ifadesi bulunsun.
9. Tank veya hücre içinde çalışılacaksa proses suyunun güvenli sıcaklığa inmesini bekleyin; gerekiyorsa tankı tahliye vanasından boşaltın (**Bkz. Bölüm 10.1.4**).
10. Kapak mandalını açın, kapağı tam açık konuma getirin ve gazlı amortisörlerin kapağı tuttuğunu kontrol edin; kapak altında çalışılacaksa kapağı bir destekle sabitleyin.

**Doğrulama**

11. Pano üzerindeki RESET lambasının ve arıza lambalarının tamamen **sönük** olduğunu doğrulayın.
12. **START** butonuna basın; yıkama pompasının çalışmadığını doğrulayın.
13. **TEST** butonuna basın; sepetin dönmediğini doğrulayın. Herhangi bir motor çalışırsa beslemenin kesilmediğini varsayın; pano içine girmeyin, yetkili elektrik personeli çağırın.
14. Sepet, pompa ve varsa opsiyonel motor bölgelerinde hareket ve ses olmadığını kontrol edin.
15. Doğrulama tamamlanmadan koruyucu sökmeyin ve müdahaleye başlamayın.

**Müdahale sonrası**

16. Sökülen tüm koruyucuları, kapakları ve bağlantıları yerine takın; araç ve malzemeleri hücre ve tank içinden alın.
17. Kapağı kapatın ve mandalı kapatın; kapak kapalı switchinin kapak ile hizalı olduğunu kontrol edin.
18. LOTO kilidi ve etiketini **yalnızca kilidi takan yetkili personel** söker.
19. Ana şalteri 1 (ON) konumuna alın; **RESET** butonuna lambası yanana kadar basın (**Bkz. Bölüm 2.5**).
20. Emniyet devresinde (acil stop, kapak switchi, interlock, seviye bekçisi) çalışma yapıldıysa güvenlik fonksiyon testlerini tekrarlayın (**Bkz. Bölüm 5.4.2**); ardından başlatma prosedürünü uygulayın (**Bkz. Bölüm 7.2**).

**TEHLİKE — Çoklu personel:** Birden fazla kişi aynı makinede çalışıyorsa her kişi ana şaltere kendi kilidini takar; son kişi çıkmadan hiçbir kilit sökülmez.

Kapak kapalı switchi ve interlock kilit baypas edilmez; switch köprülenemez veya sökülemez. Kapak, bakım amacıyla yalnızca LOTO uygulandıktan sonra açılır. Ana şalter, pano ön yüzünün en altındaki kırmızı-sarı döner şalterdir (**POWER**; **Bkz. Şekil 3.7**).

---

# 2.5 Acil durdurma (E-Stop) ve reset

Makinede **1 adet** acil stop butonu bulunur: elektrik panosu ön yüzünün en üstünde, **EMERGENCY STOP** etiketli, kırmızı mantar başlı ve kilitlemeli tip (**Bkz. Bölüm 3.4.2**). Pano, yıkama hücresinin sağ tarafında, operatör bölgesinden erişilebilir konumdadır.

Acil stop butonuna basıldığında makinenin tüm fonksiyonları (sepet redüktörü, yıkama pompası, ısıtıcı ve varsa opsiyonel motorlar) kategori 1 durdurma ile durur; buton basılı konumda kilitlenir ve mavi **RESET** lambası söner. Reset onayı olmadan hiçbir fonksiyon yeniden çalıştırılamaz. Acil stop yalnızca acil tehlike anında kullanılır; normal işletmede çevrimi sonlandırmak için kırmızı STOP butonunu kullanın. Sık acil stop kullanımı emniyet devresi elemanlarını erken yıpratır.

![Elektrik panosu — EMERGENCY STOP ve RESET butonları](../../assets/2.5/acil-stop-reset.jpg)

*Şekil 2.2 — Elektrik panosu ön yüzü: EMERGENCY STOP butonu (üstte) ve mavi RESET butonu; pano kapağında HIGH VOLTAGE etiketi*

**Acil stop kullanılacak durumlar**

- Can güvenliğini tehdit eden sıkışma, düşme veya çarpma riski; dönen sepete temas tehlikesi
- Yıkama çevrimi sırasında kapağın açılması veya hücreden sıcak su püskürmesi
- Ani mekanik arıza sesi, pompa veya redüktör kaynaklı şiddetli titreşim, tank veya boru hattında büyük sızıntı
- Elektrik arkı, duman, yanık kokusu veya rezistans kaynaklı anormal ısınma

Düşük su seviyesi veya termik röle açması makineyi zaten durdurur; bunlar acil stop nedeni değildir. Bu durumlarda **Bölüm 11** teşhis adımlarını uygulayın.

**Reset prosedürü**

1. Fiziksel tehdidi giderin; sıkışma, sızıntı veya arıza kaynağını güvenli hâle getirin.
2. Basılı acil stop mantarını (EMERGENCY STOP) ok yönünde çevirerek **serbest bırakın**.
3. Kapağın kapalı ve kapak kapalı switchi ile hizalı olduğunu, tankta yeterli su bulunduğunu doğrulayın.
4. Panodaki mavi **RESET** butonuna, lamba **yanana kadar** basılı tutun. Yalnızca acil stopu serbest bırakmak yeterli değildir; makinenin güvenli duruma alındığı reset ile operatör tarafından onaylanır.
5. RESET lambası yanmıyorsa düşük su seviyesi lambasını kontrol edin ve **Bölüm 11.1** teşhis sırasını uygulayın; lamba yanmadan START vermeyin.
6. Tehlike tamamen giderilmeden çevrimi yeniden başlatmayın; başlatma sırası **Bölüm 7.2**'ye göredir.

Reset prosedürü güvenlik fonksiyonunu geri kazandırır; arıza giderilmeden start vermek tekrar durma veya hasara yol açar. Acil stop fonksiyon testi kurulumda, emniyet devresindeki her onarımdan sonra ve yıllık elektriksel güvenlik testleriyle birlikte **yılda bir kez** tekrarlanır (**Bkz. Bölüm 5.4.2, 6.2, 9.1.8**).

---

# 2.6 Kişisel koruyucu donanım (KKD)

İşveren, görev bazlı KKD sağlamak ve kullanımını denetlemekle yükümlüdür. Aşağıdaki matris asgari gereksinimleri tanımlar; yerel mevzuat veya kimyasal üreticisinin güvenlik bilgi formu (SDS) daha sıkı gereksinim getiriyorsa ona uyulur. Sembollerin anlamı **Bölüm 1.2**'de verilmiştir; makine kapağındaki piktogram şeridi koruyucu gözlük, eldiven ve giysi kullanımını zorunlu kılar (**Bkz. Bölüm 2.2.2**).

| Görev | İş elbisesi | Çelik burunlu ayakkabı | Eldiven | Koruyucu gözlük | Solunum koruması |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Pano kumandası (start / stop / reset / ayar) | ✓ | ✓ | — | — | — |
| Parça yükleme ve boşaltma (kapak açıkken, sepete veya taşıma arabasına) | ✓ | ✓ | ✓ (ısıya dayanıklı — parça ve sepet sıcaktır) | ✓ (buhar ve sıçrama riski) | — |
| Tank elle doldurma, su ve kimyasal ilavesi | ✓ | ✓ (kaymaz) | ✓ (kimyasala uygun) | ✓ | — |
| Ön filtre, emiş filtresi ve torba filtre temizliği; yağ sıyırıcı temizliği | ✓ | ✓ (kaymaz) | ✓ (sıvı geçirmez, kimyasala uygun) | ✓ | Gerekirse filtreli maske |
| Tank boşaltma, dezenfeksiyon ve temizlik kimyasalı kullanımı | ✓ (sıvı geçirmez önlük) | ✓ (kaymaz) | ✓ (kimyasala uygun, uzun konçlu) | ✓ (tam kapalı) | Gerekirse filtreli maske |
| Mekanik bakım (pompa, redüktör, nozul, amortisör) | ✓ | ✓ | ✓ (kesilmeye dirençli) | ✓ | — |
| Elektrik panosu müdahalesi ve elektriksel güvenlik testleri (LOTO ile) | ✓ (pamuklu, alev almaz) | ✓ (yalıtkan taban) | Yalıtkan (ölçüm sırasında) | ✓ | — |
| Sıcak tank ve rezistans yakınında çalışma | ✓ | ✓ | ✓ (ısıya dayanıklı) | ✓ | — |

**DİKKAT — Kaygan zemin:** Tank çevresinde sızıntı veya taşma durumunda kaymaz ayakkabı ve dikkatli hareket zorunludur (**Bkz. Bölüm 10**).

**DİKKAT — Sıcak parça ve buhar:** Çevrim sonunda sepet, parçalar ve kapak iç yüzeyi sıcaktır; kapak açıldığında buhar yükselir. Boşaltmada ısıya dayanıklı eldiven ve koruyucu gözlük kullanın; yüzünüzü kapak açıklığından uzak tutun.

Kısa süreli ziyaretçiler, operatör bölgesine girmeden önce işveren tarafından bilgilendirilmeli ve asgari KKD (iş ayakkabısı, gözlük) ile donatılmalıdır.
