# 5.3 Sistem bağlantıları ve devreye alma

Medya ve elektrik bağlantıları **Bölüm 5.1 Adım 4–8** kapsamında uygulanır. Teknik bağlantı değerleri **Bölüm 3.3.3** (elektrik) ve **Bölüm 3.3.5** (hava/su) tablolarında SSOT olarak verilmiştir; bu bölüm kurulum prosedürünü tanımlar.

Hidrolik sistem bulunmamaktadır. Vakum bağlantısı yoktur.

---

## 5.3.1 Basınçlı hava bağlantısı

| Parametre | Değer (SSOT: Bölüm 3.3.5) |
|-----------|---------------------------|
| Basınçlı hava girişi | 6 bar |
| Bağlantı | 3/4" |
| Regülatör ayarı | 6 bar |

### Bağlantı prosedürü

1. Tesisat basınçlı hava hattını makine girişine bağlayın (3/4").
2. Pnömatik regülatörü **6 bar** olacak şekilde ayarlayın (bkz. **Bölüm 6.4**).
3. HMI **Manuel Sayfası**'nı açın.
4. **Hava bilgisi** göstergesinin **yeşil** yanmasını bekleyin.

**Beklenen sonuç:** HMI manuel sayfasında hava bilgisi yeşil.

**Anormal durum:** Gösterge kırmızı kalıyorsa basınç, bağlantı contası ve regülatör ayarını kontrol edin.

<!-- FOTO: Hava bağlantısı — 3/4" ve regülatör (EKLENECEK: FOTO-5-3-0-hava-baglantisi.jpg) -->
![Basınçlı hava bağlantısı](../../assets/5.3/1.png)

---

## 5.3.2 Su bağlantısı

| Parametre | Değer (SSOT: Bölüm 3.3.5) |
|-----------|---------------------------|
| Su girişi basıncı | 1 bar |
| Bağlantı | 1/2" |
| Su sıcaklığı | +10°C – +70°C |
| Su kalitesi | Şebeke suyu veya arıtılmış su |

### Bağlantı prosedürü

1. Tesisat su hattını makine girişine bağlayın (1/2").
2. Su basıncının **1 bar** olduğunu doğrulayın.
3. HMI **Manuel Sayfası**'nı açın.
4. **Su bilgisi** göstergesinin **yeşil** yanmasını bekleyin.

**Beklenen sonuç:** HMI manuel sayfasında su bilgisi yeşil.

**Anormal durum:** Dolum olmuyorsa otomatik dolum su giriş vanasının açık olduğunu kontrol edin (bkz. **Bölüm 7.2** — Devreye alma ön koşulları).

<!-- FOTO: Su bağlantısı — 1/2" (EKLENECEK: FOTO-5-3-1-su-baglantisi.jpg) -->
![Su bağlantısı](../../assets/5.3/2.png)

---

## 5.3.3 Elektrik bağlantısı

Elektrik besleme değerleri **Bölüm 3.3.3** — Elektrik özellikleri tablosunda SSOT olarak verilmiştir. Kurulum hattı minimum: **380 V, 50 Hz, 3 faz, 3P+N+PE, 50 kW / 100 A, ICC 10 kA**.

**TEHLİKE — Elektrik çarpması:** Canlı hat üzerinde çalışma yalnızca yetkili ve kilitlemeli prosedürle yapılır. Bağlantı öncesi ana şalter **OFF** konumunda olmalıdır.

### Bağlantı prosedürü

1. Trifaze besleme hattını pano giriş terminallerine **3P+N+PE** konfigürasyonuna uygun bağlayın.
2. Topraklama bağlantısının eksiksiz olduğunu doğrulayın.
3. Ana şalter (**100 A**, Schneider) ve koruma elemanlarının DATA değerleriyle uyumlu olduğunu kontrol edin.
4. Bağlantıları yetkili elektrik personeli sıkılık ve izolasyon testinden geçirsin.

<!-- FOTO: Pano besleme kablo girişi (EKLENECEK: FOTO-5-3-2-elektrik-baglantisi.jpg) -->
![Elektrik bağlantısı](../../assets/5.3/3.png)

---

## 5.3.4 Devreye alma ve faz kontrolü

Faz sırası pompa ve fan yönü için kritiktir; ters faz motorların ters dönmesine ve proses arızasına yol açabilir.

### Devreye alma prosedürü

| Sıra | İşlem |
|:----:|-------|
| 1 | Trifaze besleme hattı panoya bağlandı |
| 2 | Ana şalter **ON** konumuna alındı — makine elektriği pano üzerinden açıldı |
| 3 | **Faz sıra rölesi** üzerinden faz yönü kontrol edildi |
| 4 | Faz yönü ters ise **iki faz değiştirilerek** düzeltildi |

### Elektrik devreye alma test checklist

| Kontrol | Beklenen sonuç |
|---------|----------------|
| Faz koruma rölesi çıkış veriyor mu? | Evet |
| Makinede elektrik var mı? | Evet |
| Acil stop'a basıldığında makine duruyor mu? | Evet |

Acil stop test adımları **Bölüm 5.4.1**'de; reset prosedürü **Bölüm 2.5**'te SSOT olarak verilmiştir.

<!-- FOTO: Faz sıra rölesi ve faz koruma rölesi (EKLENECEK: FOTO-5-3-3-faz-kontrol.jpg) -->
![Faz kontrolü](../../assets/5.3/4.png)

---

## 5.3.5 Bağlantı tamamlama kontrol listesi

| # | Kontrol | Durum |
|---|---------|:-----:|
| 1 | Basınçlı hava bağlantısı yapıldı (6 bar, 3/4") | ☐ |
| 2 | HMI manuel sayfasında hava bilgisi yeşil | ☐ |
| 3 | Su bağlantısı yapıldı (1 bar, 1/2") | ☐ |
| 4 | HMI manuel sayfasında su bilgisi yeşil | ☐ |
| 5 | Trifaze elektrik bağlantısı yapıldı (380 V, 50 Hz) | ☐ |
| 6 | Faz yönü doğrulandı | ☐ |
| 7 | Pano üzerinden elektrik açıldı | ☐ |
| 8 | Faz koruma rölesi çıkış veriyor | ☐ |

Bağlantılar tamamlandıktan sonra **Bölüm 5.4** ve **5.5** testlerine geçin.

<!-- FOTO: HMI manuel sayfa — hava/su yeşil -->
![HMI bağlantı durumu](../../assets/5.3/5.png)
