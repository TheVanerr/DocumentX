# 5.3 Tesisat bağlantıları

Bağlantı noktalarının konumları **Bölüm 3.5.3**'te, bağlantı değerleri **Bölüm 3.3.4** ve **3.3.5**'te verilmiştir.

---

## 5.3.1 Elektrik bağlantısı

Elektrik bağlantısını yalnızca yetkili elektrik personeli, makinenin elektrik devre şemasına göre yapar.

**Tesis tarafındaki gereksinimler**

- Besleme: {{ELEKTRIK:Besleme gerilimi (V)}} V, {{ELEKTRIK:Besleme frekansı (Hz)}} Hz, {{ELEKTRIK:Faz sayısı}} faz. Bağlantı şekli (3P+PE veya 3P+N+PE), önerilen besleme sigortası ve besleme kablosu kesiti, makineyle birlikte verilen elektrik devre şemasında belirtilmiştir (**Bkz. Bölüm 13.1**).
- Besleme hattında, elektrik devre şemasında belirtilen değerde bir sigorta veya devre kesici ile kaçak akım koruma rölesi (RCD) bulunmalıdır.
- Topraklama hattı (PE) yürürlükteki mevzuata uygun olarak yapılmış olmalıdır.

**Bağlantı**

1. Tesis tarafındaki besleme sigortasını kapatın ve kilitleyin.
2. Besleme kablosunda gerilim olmadığını ölçerek doğrulayın.
3. Besleme kablosunu elektrik panosunun kablo girişinden geçirin ve kablo rakorunu sıkın.
4. Faz iletkenlerini ana şalterin giriş klemenslerine, koruma iletkenini (PE) topraklama klemensine bağlayın.
5. Bağlantıların sıkılığını kontrol edin ve elektrik panosunun kapağını kapatın.
6. Tesis tarafındaki sigortayı açın.
7. Motorların dönüş yönünü **Bölüm 6.3.1**'e göre kontrol edin.

---

## 5.3.2 Su dolum ve tank tahliye bağlantısı

- **Su dolumu:** Tank temiz şebeke suyu ile doldurulur; su dolum bağlantısı: {{TESISAT:Su dolum bağlantısı}}. Dolum hattında, hat basıncını kesmek için bir kesme vanası bulunmalıdır.
- **Tank tahliyesi:** **DRENAJ** etiketli tank tahliye vanası makinenin sol tarafında, alt kısımdadır. Tahliye vanasının çıkışını, kullanılmış yıkama sıvısını atık su arıtma sistemine veya bir atık toplama kabına iletecek şekilde bağlayın. Tahliye bağlantısı: {{TESISAT:Tank tahliye bağlantısı}}.

**NOT:** Kullanılmış yıkama sıvısını doğrudan kanalizasyona vermeyin. Sıvı yağ ve kimyasal içerir; yerel çevre mevzuatına göre arıtılmalı veya lisanslı firmaya teslim edilmelidir.

**Otomatik dolum opsiyonu:** Su dolum bağlantısını tesisin şebeke suyu hattına kalıcı olarak bağlayın ve hatta bir kesme vanası takın. Şebeke suyu basıncı {{OPSIYONLAR:Otomatik dolum — su besleme basıncı (bar)}} bar olmalıdır. Kesme vanası, makine çalıştığı sürece açık kalır.

**Otomatik drenaj opsiyonu:** Drenaj pompasının çıkışını, atık su arıtma sistemine veya atık toplama tankına giden sabit bir hatta bağlayın. Tahliye hattını en az {{GENEL_TEKNIK:Yıkama sıvısı sıcaklığı — özel istekle maks. (°C)}} °C sıcaklığa, yıkama kimyasalına ve pompanın basıncına dayanıklı malzemeden yapın.

---

## 5.3.3 Basınçlı hava bağlantısı (P modeller)

1. Tesis basınçlı hava hattını makinenin hava girişine bağlayın. Hava girişinin bağlantı ölçüsü, makineyle birlikte verilen pnömatik şemada belirtilmiştir (**Bkz. Bölüm 13.1**).
2. Hat basıncının, pnömatik şemada belirtilen çalışma basıncını sağladığını kontrol edin.
3. Basınçlı havanın filtrelenmiş ve nemi alınmış olmasını sağlayın. Nemli hava, silindirlerde ve valflerde korozyona yol açar.
4. Regülatördeki çalışma basıncını **Bölüm 6.5.1**'e göre ayarlayın.

---

## 5.3.4 Buhar tahliye bağlantısı

Buhar tahliye fanının çıkışı makinenin tavanındadır. Bu çıkışa, buharı binanın egzoz hattına veya dış ortama ileten bir kanal bağlanır.

- Kanalın çapını fan çıkışının çapından küçük yapmayın. Buhar tahliye bağlantı çapı: {{TESISAT:Buhar tahliye (egzoz) bağlantı çapı (mm)}} mm.
- Kanalı mümkün olduğunca kısa ve az dirsekli tutun.
- Kanalda yoğuşan suyun makineye geri akmaması için yatay bölümleri dış ortama doğru eğimli döşeyin ve en alçak noktaya bir yoğuşma suyu tahliyesi koyun.
- Kanalın ağırlığını makinenin tavanına bindirmeyin; kanalı binaya askılarla sabitleyin.
- Dış ortama açılan kanal ucuna yağmur şapkası takın.
