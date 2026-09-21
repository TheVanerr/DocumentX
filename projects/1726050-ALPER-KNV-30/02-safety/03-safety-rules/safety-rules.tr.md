# 2.3 Genel operasyonel güvenlik kuralları

Aşağıdaki kurallar makinenin tüm kullanım aşamalarında geçerlidir. İhlal durumunda makineyi durdurun; güvenlik koşulları sağlanmadan yeniden devreye almayın.

1. Kılavuzu okuyun ve eğitim almadan makineyi çalıştırmayın (**Bkz. Bölüm 1.1.3**).
2. Güvenlik cihazlarını (RFID, acil stop) devre dışı bırakmayın veya baypas etmeyin.
3. Makine çalışırken bakım kapaklarını açmayın; kapak açma öncesi LOTO uygulayın (**Bkz. Bölüm 2.4**).
4. HMI alarm ekranında aktif hata varken start vermeyin (**Bkz. Bölüm 11.1**).
5. Konveyör hattında sıkıştıracak cisim kalmadığını doğrulayın; pompa önü vanalar açık olmalıdır (**Bkz. Bölüm 7.2**).
6. Acil durumlarda en yakın acil stop butonuna basın (**Bkz. Bölüm 2.5**).

---

# 2.4 Tehlikeli enerji kontrolü — LOTO (kilitleme ve etiketleme)

**UYARI — Enerji kaynaklı yaralanma:** LOTO uygulanmadan yapılan bakım veya temizlikte makine kazara devreye girebilir; ezilme, elektrik çarpması, sıcak sıvı ve basınçlı hava yaralanması oluşabilir. Tüm enerji kaynaklarını izole edin, kilitleyin ve etiketleyin.

Bu prosedür, makine üzerinde mekanik bakım, elektrik müdahalesi, filtre/tank temizliği, kapak sökme ve benzeri tüm işler öncesinde uygulanır. Diğer bölümlerde yalnızca **Bkz. Bölüm 2.4** referansı verilir; adımlar tekrarlanmaz.

## 2.4.1 Kapsam ve enerji kaynakları

| Enerji türü | Kaynak | İzolasyon noktası |
| :--- | :--- | :--- |
| Elektrik | 380 V, 3 faz | Ana şalter — elektrik panosu üzerinde |
| Pnömatik | 6 bar basınçlı hava | Tesisat ana hava vanası / makine girişi |
| Su / proses sıvısı | 1 bar su girişi, tanklar | Su giriş vanaları; tank boşaltma (gerekirse) |
| Termal | Tank ısıtıcıları | Elektrik izolasyonu sonrası soğuma süresi |
| Mekanik | Konveyör, fan, pompa | Elektrik izolasyonu; kalan hareket riskine dikkat |

Hidrolik sistem bulunmamaktadır.

## 2.4.2 LOTO uygulama prosedürü

**Hazırlık**

1. Bakım veya müdahale kapsamını ve süresini belirleyin.
2. Etkilenecek personeli bilgilendirin; makine üzerinde çalışıldığını duyurun.

**Makineyi durdurma**

3. HMI üzerinden **Stop** komutu verin; makinenin durmasını bekleyin.
4. Gerekirse en yakın **acil stop** butonuna basın (**Bkz. Bölüm 2.5**).

**Enerji izolasyonu**

5. Elektrik panosu üzerindeki **ana şalteri** OFF (0) konumuna getirin.
6. Ana şalter koluna kişisel **asma kilidinizi** takın.
7. Kilide **LOTO etiketi** asın; etikette adınız, tarih ve "Çalıştırmayın — bakım" ifadesi bulunsun.
8. **Basınçlı hava** giriş vanasını kapatın; mümkünse vanayı kilitleyin.
9. Hat içi **kalıntı basıncı** varsa regülatör veya tahliye noktasından boşaltın. Ana şalter kapalıyken HMI çalışmaz; basıncı HMI üzerinden doğrulamayın, pano veya hattı yeniden enerjilendirmeyin.
10. **Su giriş** vanalarını kapatın.
11. Tank içi müdahale gerekiyorsa proses sıvısını uygun prosedürle boşaltın (**Bkz. Bölüm 10**); sıcak sıvı riskine karşı soğumayı bekleyin.

**Doğrulama**

12. Ana şalter kapalıyken HMI'nın kapandığını ve start komutunun **yanıtsız** kaldığını doğrulayın. HMI kararmadıysa beslemenin kesilmediğini varsayın; pano içine girmeyin, yetkili elektrik personeli çağırın.
13. Konveyör, fan ve pompa bölgelerinde hareket olmadığını gözle kontrol edin.
14. Doğrulama tamamlanmadan kapak sökmeyin veya muhafaza içine girmeden müdahaleye başlamayın.

**Müdahale sonrası**

15. Tüm koruyucuları, kapakları ve bağlantıları yerine takın; araç ve malzemeleri alandan kaldırın.
16. LOTO kilidi ve etiketini **yalnızca kilidi takan yetkili personel** söker.
17. Su ve hava vanalarını açın; tesisat basınçlarının normale gelmesini bekleyin (**Bkz. Bölüm 3.3.5**).
18. Ana şalteri açın; reset ve hazırlık prosedürünü uygulayın (**Bkz. Bölüm 2.5, 7.2**).

**TEHLİKE — Çoklu personel:** Birden fazla kişi aynı makinede çalışıyorsa her enerji kaynağına ayrı kilit takılır; son personel çıkmadan grup kilidi sökülmez.

RFID güvenlik sensörü bypass edilmemelidir. Sensör köprülenemez veya devre dışı bırakılamaz.

---

# 2.5 Acil durdurma (E-Stop) ve reset

Makinede toplam **4 adet** acil stop butonu bulunur:

1. Elektrik panosu üzerinde
2. Makine girişinde konveyörün sağında
3. Makine girişinde konveyörün solunda
4. Makine çıkışında konveyörün solunda

Acil stop'a basıldığında makinedeki **her fonksiyon durur**. Acil stop, normal stop yerine yalnızca acil tehlike anında kullanılmalıdır.

**Acil stop kullanılacak durumlar**

- Can güvenliğini tehdit eden sıkışma, düşme veya çarpma riski
- Ani mekanik arıza sesi veya şiddetli sızıntı
- Elektrik arkı, duman veya yanma kokusu

Kapak açıldığında RFID zaten makineyi durdurur; bu bir acil stop nedeni değildir. RFID duruşundan sonra kapağı kapatın, **Bölüm 2.4** gereklerini uygulayın ve ardından resetleyin.

**Reset prosedürü**

1. Fiziksel tehdidi giderin; sıkışma, sızıntı veya arıza kaynağını güvenli hale getirin.
2. Basılı acil stop butonunu **kaldırın** (unlock).
3. Pano etiketi üzerindeki **reset butonuna**, reset lambası **yanana kadar** basın.
4. HMI alarm ekranındaki acil stop / ilgili alarmı resetleyin (**Bkz. Bölüm 11.1**).
5. Tehlike tamamen giderilmeden start vermeyin.

Reset prosedürü güvenlik fonksiyonunu geri kazandırır; arıza giderilmeden start vermek tekrar durma veya hasara yol açabilir.

---

# 2.6 Kişisel koruyucu donanım (KKD)

İşveren, görev bazlı KKD sağlamak ve kullanımını denetlemekle yükümlüdür. Aşağıdaki matris minimum gereksinimleri tanımlar; yerel mevzuat daha sıkı ise ona uyulur.

| Görev | İş elbisesi | Çelik burunlu ayakkabı | Eldiven | Koruyucu gözlük | Solunum koruması |
| :--- | :---: | :---: | :---: | :---: | :---: |
| HMI izleme / start-stop | ✓ | ✓ | — | — | — |
| Konveyör / makine çevresi devriye | ✓ | ✓ | — | ✓ (sıçrama riski) | — |
| Filtre ve tank temizliği | ✓ | ✓ | ✓ (kimyasala uygun) | ✓ | Gerekirse filtreli maske |
| Mekanik bakım | ✓ | ✓ | ✓ | ✓ | — |
| Elektrik panosu müdahalesi | — | ✓ | Yalıtkan (gerektiğinde) | ✓ | — |
| Sıcak tank / ısıtıcı yakını çalışma | ✓ | ✓ | ✓ (ısıya dayanıklı) | ✓ | — |

**DİKKAT — Kaygan zemin:** Sızıntı veya proses suyu kayması durumunda kaymaz ayakkabı ve dikkatli hareket zorunludur (**Bkz. Bölüm 10**).

Kısa süreli ziyaretçiler; aktif proses bölgesine girmeden önce işveren tarafından bilgilendirilmeli ve asgari KKD (ayakkabı, gözlük) ile donatılmalıdır.
