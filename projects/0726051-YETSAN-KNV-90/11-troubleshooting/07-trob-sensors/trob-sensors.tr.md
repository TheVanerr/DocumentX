# 11.7 Sensör arızaları

Makinede güvenlik (bakım kapağı manyetik switch'leri), proses (tank seviye sensörleri, seviye bekçisi, termokupllar) ve sızıntı tavası sensörü bulunur. HMI olmadığından sensör durumu doğrudan izlenmez; sensör arızası, ilgili fonksiyonun davranışından (RESET alınamıyor, seviye lambası yanlış, sıcaklık okuması anlamsız) anlaşılır.

---

## 11.7.1 Bakım kapağı manyetik switch'leri — RESET alınamıyor

| Parametre | Değer |
| :--- | :--- |
| Switch | Omron **F3STGRNLPU21M1J8** manyetik kapı switch'i — 7 bakım kapağı, seri zincir |
| Emniyet rölesi | Omron **G9SB2002AACDC241** (kapak zinciri) |
| Belirti | Tüm kapaklar kapalı görünmesine rağmen RESET lambası yanmıyor; makine çalışmıyor |

Switch, kapaktaki mıknatıs ile sensör arasındaki hizaya duyarlıdır. Kapak tam oturmamış, mıknatıs kaymış veya switch yüzeyinde kir/metal talaş varsa zincir açık kalır. Switch'ler seri bağlı olduğundan tek bir kapak tüm makineyi kilitler.

**Teşhis prosedürü**

1. 7 acil stop butonunun tamamının serbest olduğunu doğrulayın (**Bölüm 2.5**).
2. 7 bakım kapağının her birini açıp hizalı şekilde yeniden kapatın; her kapatmadan sonra RESET deneyin.
3. Kapak switch'i ve mıknatıs yüzeylerini kuru bezle temizleyin; mekanik hasar veya gevşek montaj kontrolü yapın.
4. RESET hâlâ alınamıyorsa ana şalteri kapatın; **LOTO** uygulayın; pano kapağını açın.
5. G9SB emniyet rölesinin giriş LED'lerini okuyun (röle etiketine göre); hangi girişin açık olduğunu belirleyin.
6. Switch zincirinin kablo bağlantılarını ve klemenslerini kontrol edin; arızalı switch'i orijinal tip ile değiştirin (10 07147 — **Bölüm 13.3**).
7. Değişim sonrası **Bölüm 5.4.2** kapak testini uygulayın.

**Switch'leri köprülemeyin, mıknatısla kandırmayın** — güvenlik fonksiyonu devre dışı kalır (**Bölüm 2.4, 6.2.1**).

---

## 11.7.2 Tank seviye sensörleri ve seviye bekçisi

| Parametre | Değer |
| :--- | :--- |
| Seviye sensörü | **VEGASWING 51** çatal tip (2 adet — Tank 1, Tank 2) |
| Seviye bekçisi | Paslanmaz şamandıralı seviye bekçisi (10 00296) |
| Belirti | WASHING LEVEL lambası tank doluyken yanıyor; veya tank boşken yanmıyor |

**Teşhis prosedürü**

1. Tank kapağını açarak (LOTO) gerçek su seviyesini gözle kontrol edin.
2. **Tank dolu, lamba yanıyor:** Çatal sensör yüzeyinde yağ/kir tabakası veya yabancı cisim olabilir; sensör çatalını temizleyin (aylık bakım maddesi — **Bölüm 9.1.3**). Şamandıranın serbest hareket ettiğini kontrol edin.
3. **Tank boş, lamba yanmıyor (ısıtıcı/pompa çalışabiliyor):** Tehlikeli durum — ısıtıcıları hemen OFF alın; sensör veya devre arızası; LOTO altında sensör çıkışını ve kabloyu kontrol edin; sensörü değiştirin (07 16791).
4. Sensör kablo bağlantısını ve pano klemensini kontrol edin (elektrik şeması — **Bölüm 13.1**).
5. Değişim sonrası **Bölüm 5.4.4** seviye interlock testini uygulayın.

![Tank içi — şamandıralı seviye bekçisi](../../assets/11.7/seviye-samandira.jpg)

---

## 11.7.3 Termokupllar ve termostatlar

| Parametre | Değer |
| :--- | :--- |
| Termokupl | ETB30F06-5Ç / ETB30F06-4Ç (2 + 2) |
| Termostat | GEMO DTH2 (4 adet) |
| Belirti | Termostat ekranında anlamsız/sabit okuma, sensör hatası göstergesi, sıcaklık kontrolü bozuk |

1. Termostat ekranındaki okumayı gözle tank suyu sıcaklığı ile karşılaştırın (harici termometre).
2. Okuma yoksa veya hata kodu varsa LOTO altında termokupl bağlantısını (polarite, kopukluk) kontrol edin.
3. Termokuplu değiştirin (10 02976 / 10 02634); termostat adaptörü komplesi (07 00669) gerekebilir.
4. Termostat arızası şüphesinde (çıkış vermiyor / kesmiyor) **Bölüm 11.3.3 — Arıza 5** prosedürünü uygulayın.

---

## 11.7.4 Sızıntı tavası

| Parametre | Değer |
| :--- | :--- |
| Sızıntı tavası | SIZINTI TAVASI MONTAJ KOMPLESİ (07 17687) — makine altı |
| Sensör tipi | [EKSİK] |
| Belirti | Tavada su birikmesi; makine altında ıslaklık |

1. Tavadaki su birikimini kontrol edin; su yağlı ise tank/pompa hattından, temiz ise dolum taşmasından kaynaklanıyor olabilir.
2. Tank conta birleşimleri, TAHLİYE vanası, hassas filtre gövdesi kapağı, pompa salmastrası ve hortum bağlantılarında kaçak arayın.
3. Kaçağı giderin; tavayı boşaltıp temizleyin (aylık bakım maddesi).
4. Tavada sensör varsa ([EKSİK]) probu temizleyin ve bağlantısını kontrol edin.

![Makine altı — sızıntı tavası bölgesi](../../assets/11.7/sizinti-tavasi.jpg)

---

## 11.7.5 Kritik sensör listesi

| Fonksiyon | Tip / model | Konum | Belirti |
| :--- | :--- | :--- | :--- |
| Kapak güvenlik | Omron F3STGRNLPU21M1J8 (7 ad) | Bakım kapakları | RESET alınamıyor |
| Tank seviye | VEGASWING 51 çatal tip (2 ad) + paslanmaz seviye bekçisi | Tank 1, Tank 2 | WASHING LEVEL lambası |
| Sıcaklık | Termokupl ETB30F06-5Ç / -4Ç (2+2) | Tank 1, Tank 2, kurutma 1, kurutma 2 | Termostat okuması |
| Sızıntı tavası | [EKSİK] sensör tipi (07 17687 montaj komplesi) | Makine altı | Su birikimi |

Sensör LED / durum göstergesi: HMI yok; seviye durumu TANK 1/2 WASHING LEVEL kırmızı lambaları, emniyet zinciri durumu RESET lambası ile izlenir. Yedek parça sipariş kodları **Bölüm 13.3** BOM tablosunda; kablo renk kodu ve bağlantı detayları **elektrik şemasında** (**Bkz. Bölüm 13.1**).
