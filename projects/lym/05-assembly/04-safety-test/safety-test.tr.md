# 5.4 Güvenlik fonksiyonlarının testi

Makinenin ilk çalıştırılmasından önce, tüm güvenlik fonksiyonlarının doğru çalıştığı test edilmelidir. Bu testler, nakliye veya kurulum sırasında oluşabilecek kablo, switch ve bağlantı hasarlarının makine üretimde kullanılmadan önce tespit edilmesini sağlar. Aynı testler, emniyet devresinde yapılan her onarımdan sonra ve acil stop için yılda bir kez tekrarlanır (**Bkz. Bölüm 9**).

Testleri tanktaki su seviyesi yeterliyken ve sepet boşken yapın. Testlerden herhangi biri başarısız olursa makineyi kullanmayın; arızayı **Bölüm 11**'e göre giderin veya üreticiye başvurun.

## 5.4.1 Interlock kilidin devreye alınması (opsiyon)

Interlock kilit opsiyonu bulunan makinelerde kilit, nakliye ve kurulum sırasında kapağın açılabilmesi için **UNLOCK** konumunda gönderilir. Elektrik bağlantıları tamamlandıktan sonra kilidi devreye alın:

1. Yıkama hücresinin yan yüzeyindeki interlock kilit kutusunu bulun (**Bkz. Şekil 3.4**).
2. Kutu üzerindeki etikette belirtildiği şekilde, kilit seçicisini **UNLOCK** konumundan **LOCK** konumuna getirin.

Kilit **UNLOCK** konumunda bırakılırsa interlock fonksiyonu devre dışı kalır ve kapak çevrim sırasında açılabilir.

## 5.4.2 Test prosedürü

| No | Test | Uygulama | Beklenen sonuç |
| :---: | :--- | :--- | :--- |
| 1 | **Acil stop** | Sepet TEST butonu ile dönerken acil stop butonuna basın. | Sepet redüktörü durur; tüm fonksiyonlar devre dışı kalır. |
| 2 | **Acil stop sonrası reset** | Acil stop butonunun kilidini açın; RESET butonuna basmadan START butonuna basın. | Makine çalışmaz. RESET butonuna lambası yanana kadar basıldıktan sonra makine çalışmaya hazır hâle gelir. |
| 3 | **Kapak kapalı switchi** | Kapak açıkken START butonuna basın. | Yıkama çevrimi başlamaz. |
| 4 | **Interlock kilit (opsiyon)** | Yıkama çevrimi çalışırken kapağı açmayı deneyin. | Kapak kilitli kalır ve açılmaz. |
| 5 | **Düşük su seviyesi** | Yetkili personel gözetiminde tank seviyesini düşük seviye sınırının altına indirin. | Düşük su seviyesi lambası yanar; ısıtıcı ve pompa devre dışı kalır. |

Tüm testlerin sonucunu, tarih ve testi yapan kişinin adıyla birlikte kurulum kaydına işleyin.

**UYARI — Devre dışı bırakılmış güvenlik fonksiyonu:** Başarısız olan bir güvenlik testinden sonra makinenin çalıştırılması, kapak açıkken sıcak su püskürmesine veya dönen sepete temas edilmesine neden olabilir. Testlerin tamamı başarılı olmadan makineyi kullanıma vermeyin.
