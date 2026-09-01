# 10.1 Temizlik ve dezenfeksiyon

Makine proses tankları **sıcak su** ile çalışır; temizlik sırasında sıcak yüzey ve buhar riski vardır. Temizlik maddesi olarak yalnızca bu bölümde onaylanan veya DATA'da belirtilen maddeler kullanılmalıdır; yasak maddeler tank ve paslanmaz yüzeylere kalıcı hasar verir.

Filtre yedek parça sipariş kodları **Bölüm 9.1.6** ve **13.3.1** tablolarında verilmiştir.

---

## 10.1.1 Temizlik tipi

| Parametre | Değer |
|-----------|-------|
| Temizlik tipi | **Kuru / ıslak** |
| CIP / COP | Bulunmamaktadır |

Temizlik **manuel** uygulanır. Makine dış yüzeyleri kuru bez ile silinir; tank içi ıslak temizlik (su, sabunlu su) gerektirir. Elektrik panosu, HMI ve RFID sensör bölgelerine **doğrudan su püskürtmeyin**.

---

## 10.1.2 Temizlik öncesi güvenlik

Tank ve filtre erişimi kapak açma gerektirir; RFID sensör devredeyken kapak açılamaz. Temizlik öncesi:

1. Makineyi HMI **Makine Stop** ile durdurun.
2. Ana şalteri **OFF (0)** konumuna alın.
3. **LOTO prosedürünü** uygulayın (**Bkz. Bölüm 2.4**).
4. Emniyet kapısı / RFID **bypass etmeyin**.
5. Uzun süreli temizlik veya dezenfeksiyon öncesi tankları **boşaltın** (bkz. **Bölüm 7.3.4**).

**UYARI — Sıcak yüzey ve buhar:** Tank kapağı açılmadan önce proses sıvısının güvenli sıcaklığa inmesini bekleyin; sıcak su ve buhar ciltte yanığa yol açabilir. Koruyucu eldiven kullanın.

**UYARI — Kimyasal:** Yalnızca onaylı temizlik maddelerini kullanın. Asit bazlı ve paslanmaz çeliğe zararlı maddeler **yasaktır** (bkz. **Bölüm 10.1.7**).

---

## 10.1.3 Günlük temizlik — ön filtreler

| Parametre | Değer |
|-----------|-------|
| Periyot | **Günlük** (bkz. **Bölüm 9.1.3**) |
| Kapsam | Yıkama tankı **ön filtreleri** |
| Diğer | Günlük başka temizlik gerekmez |

Yedek parça: **07 10214** — ÖN FİLTRE NS KOMPLESİ (önerilen stok: 2 — bkz. **Bölüm 9.1.6**).

### Günlük temizlik prosedürü

1. Makineyi durdurun; kapak/filtre erişimi için **LOTO** uygulayın.
2. Yıkama tankı **ön filtrelerini** sökün.
3. Filtreleri uygun yöntemle temizleyin — yüksek basınçlı su veya fırça ile; yasak kimyasal kullanmayın.
4. Filtre hasarı (deformasyon, yırtık) varsa yedek parça ile değiştirin.
5. Filtreleri doğru yönde ve sıkı oturacak şekilde takın.
6. LOTO kaldırma prosedürünü tamamlayın; makineyi devreye almadan önce sızıntı olmadığını kontrol edin.

**Beklenen sonuç:** Ön filtreler temiz, doğru monte; pompa emişinde anormal gürültü/tıkanma yok.

**Anormal durum:** Sık tıkanma varsa proses suyu kalitesi ve yağ yükünü değerlendirin (bkz. **Bölüm 3.3.5**, **11**).

---

## 10.1.4 Haftalık derin temizlik — tank ve torba filtreler

| Parametre | Değer |
|-----------|-------|
| Periyot | **Haftalık** (bkz. **Bölüm 9.1.3**) |
| Kapsam | Tank iç filtreleri + pompa çıkışı **torba filtreler** |

Yedek parça: **10 05378** — TORBA FİLTRE 200 MİKRON (önerilen stok: 2).

### Haftalık temizlik prosedürü

1. Makineyi durdurun; **LOTO** uygulayın.
2. Yıkama ve durulama tanklarındaki **iç filtreleri** çıkartın.
3. Filtreleri temizleyin; aşınmış veya hasarlı filtreleri değiştirin.
4. Pompa çıkış hattındaki **torba filtreleri** sökün.
5. Torba filtreleri temizleyin veya temizlik mümkün değilse **değiştirin**.
6. Tüm filtreleri yerine takın; contaları ve sızdırmazlığı kontrol edin.
7. **Günlük** ön filtre temizliğini (Bölüm 10.1.3) aynı bakım turunda uygulayın.
8. Yağ sıyırıcı ve tank yüzeyinde aşırı yağ tabakası varsa temizleyin.

**Beklenen sonuç:** Filtreler temiz veya yeni; pompa debisi normal; sızıntı yok.

---

## 10.1.5 Dezenfeksiyon prosedürü

| Parametre | Değer |
|-----------|-------|
| Uygulama | Uzun süreli duruş, periyodik hijyen veya tank koku/kirlilik birikiminde |
| Yöntem | Tank boşaltma + **sabunlu su** ile iç yıkama |

### Dezenfeksiyon prosedürü

1. Makineyi durdurun; **LOTO** uygulayın.
2. Yıkama ve durulama tanklarındaki proses suyunu **tamamen boşaltın**.
3. Tank iç yüzeylerini **sabunlu su** ile yıkayın; paslanmaz yüzeylere uygun yumuşak fırça veya bez kullanın.
4. Sabunlu suyu tank drenaj hattına boşaltın.
5. Tank içerisini **temiz su** ile durulayın.
6. Drenaj tamamlandıktan sonra tank içini kurumaya bırakın veya uygun yöntemle kurutun.
7. Makine dış yüzeyini **Bölüm 10.1.6**'ya göre silin.
8. Atık suyu **Bölüm 10.1.8**'e uygun bertaraf edin.

**DİKKAT — Yasak kimyasal:** Asit bazlı ve paslanmaz çeliğe zararlı temizlik/dezenfeksiyon maddeleri **kullanılmamalıdır**. Onaylı kimyasal listesi tanımlanana kadar **sabunlu su** yöntemi geçerlidir.

**Beklenen sonuç:** Tank içi temiz, koku azalmış; proses suyu yeniden doldurulmaya hazır.

---

## 10.1.6 Temizlik sonrası kurutma

| Parametre | Değer |
|-----------|-------|
| Makine dışı | **Kuru bez** ile silinmelidir |
| Tank içi | Boşaltma sonrası doğal kuruma veya uygun kurutma |
| Elektrik panosu / HMI | **Su ile yıkanmaz** — yalnızca kuru veya hafif nemli bez |

Makine dış yüzeyinde su birikintisi bırakmayın; elektrik panosu yakınında ıslak temizlik yapmayın. Kurutma tamamlandıktan sonra LOTO kaldırılır ve devreye alma **Bölüm 7.2** prosedürüne göre yapılır.

---

## 10.1.7 Temizlik maddeleri

| Parametre | Değer |
|-----------|-------|
| Onaylı temizlik maddeleri | [EKSİK] |
| Dezenfeksiyon (onaylı) | **Sabunlu su** (DATA) |

### Yasak temizlik maddeleri

| Yasak | Gerekçe |
|-------|---------|
| **Asit bazlı** temizlik maddeleri | Tank/conta ve paslanmaz yüzey korozyonu |
| **Paslanmaz çeliğe zarar verecek** maddeler | Makine gövdesi ve tank malzemesi hasarı |

Onaylı kimyasal listesi tesis tarafından tanımlandığında bu bölüm güncellenmelidir. Tanımlanana kadar **sabunlu su** ve **temiz su** kullanın.

Proses suyu kaynağı: şebeke veya arıtılmış su (bkz. **Bölüm 3.3.5**).

---

## 10.1.8 Atık su ve kimyasal bertaraf

| Parametre | Gereksinim |
|-----------|------------|
| Atık su / kimyasal bertaraf | Makinenin kullanıldığı ülkenin mevcut mevzuatı |

Tank boşaltma suyu, sabunlu yıkama suyu ve filtre temizlik atıkları yerel **atık su ve kimyasal bertaraf** kurallarına uygun şekilde toplanmalı ve arıtılmalıdır. Bertaraf prosedürü tesis çevre izinleri kapsamında tanımlanmalıdır.

Drain / atık su hattı çapı: **[EKSİK]** (bkz. **Bölüm 3.3.5**).

---

## 10.1.9 Temizlik kayıt formu

| # | İşlem | Periyot | Tarih | Yapan | OK/NOK |
|---|-------|---------|-------|-------|:------:|
| 1 | Yıkama tankı ön filtre temizliği | Günlük | | | ☐ |
| 2 | Tank iç filtre temizliği | Haftalık | | | ☐ |
| 3 | Pompa çıkışı torba filtre temizliği/değişimi | Haftalık | | | ☐ |
| 4 | Dezenfeksiyon (sabunlu su) | Gerektiğinde | | | ☐ |
| 5 | Dış yüzey kurutma | Her temizlik sonrası | | | ☐ |

**Onaylayan:** _______________ **Tarih:** _______________

---

**Bölüm 10.1 sonu.** Demontaj öncesi sıvı tahliye referansı **Bölüm 12.1** → Bölüm 10.1.5.
