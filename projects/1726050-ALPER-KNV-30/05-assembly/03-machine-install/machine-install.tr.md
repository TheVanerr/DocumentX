# 5.3 Sistem bağlantıları ve devreye alma

Bağlantı işlemleri, Bölüm 5.1 montaj adımlarının **Adım 4–8** kapsamında gerçekleştirilir.

---

## 5.3.1 Basınçlı hava bağlantısı

| Parametre | Değer |
|-----------|-------|
| Basınçlı hava girişi | 6 bar |
| Bağlantı tipi | 3/4" |
| Pnömatik regülatör ayarı | 6 bar |

### Bağlantı prosedürü

1. Tesisat basınçlı hava hattı makine girişine bağlanır (3/4").
2. Regülatör **6 bar** olacak şekilde ayarlanır.
3. HMI arayüzündeki **manuel sayfa** açılır.
4. Hava bağlantı durumu **yeşil** yanana kadar kontrol edilir.

Pnömatik dolum testi: *Makinede hava bağlantısı yapıldıktan sonra HMI manuel sayfasındaki hava bilgisi yeşil yanıyor mu?*

<!-- FOTO: Basınçlı hava bağlantı noktası — 3/4" ve regülatör -->
![Basınçlı hava bağlantısı](../../assets/FOTO-5-3-0-hava-baglantisi.png)

---

## 5.3.2 Su bağlantısı

| Parametre | Değer |
|-----------|-------|
| Su girişi basıncı | 1 bar |
| Bağlantı tipi | 1/2" |
| Su sıcaklığı | +10°C – +70°C |
| Su kalitesi | Şebeke suyu veya arıtılmış su |

### Bağlantı prosedürü

1. Tesisat su hattı makine girişine bağlanır (1/2").
2. Su basıncının **1 bar** olduğu doğrulanır.
3. HMI arayüzündeki **manuel sayfa** açılır.
4. Su bağlantı durumu **yeşil** yanana kadar kontrol edilir.

Pnömatik/hidrolik dolum testi (su): *Makinede su bağlantısı yapıldıktan sonra HMI manuel sayfasındaki su bilgisi yeşil yanıyor mu?*

<!-- FOTO: Su bağlantı noktası — 1/2" -->
![Su bağlantısı](../../assets/FOTO-5-3-1-su-baglantisi.png)

---

## 5.3.3 Elektrik bağlantısı

| Parametre | Değer |
|-----------|-------|
| Besleme gerilimi | 380 V |
| Besleme frekansı | 50 Hz |
| Faz sayısı | 3 (trifaze) |
| Toplam kurulu güç | 50 kW |
| Maksimum akım çekişi | 100 A |
| Besleme konfigürasyonu | 3P+N+PE |
| Ana şalter | 100 A, Schneider |
| Toplam sigorta / devre kesici | 100 A |
| Kısa devre akımı (ICC) gereksinimi | 10 kA |
| UPS / jeneratör gereksinimi | Hayır |

Elektrik bağlantısı, **50 kW / 100 A** kurulu güce uygun **380 V, 50 Hz** trifaze besleme hattı ile yapılmalıdır. Bağlantı yalnızca yetkili elektrik personeli tarafından gerçekleştirilmelidir.

<!-- FOTO: Elektrik panosu — besleme kablo girişi -->
![Elektrik bağlantısı](../../assets/FOTO-5-3-2-elektrik-baglantisi.png)

---

## 5.3.4 Devreye alma ve faz kontrolü

### Devreye alma prosedürü

| Sıra | İşlem |
|:----:|-------|
| 1 | Trifaze besleme hattı panoya bağlanır |
| 2 | Makine elektriği **pano üzerinden** açılır |
| 3 | **Faz sıra rölesi** üzerinden faz yönü kontrol edilir |
| 4 | Faz yönü ters ise **iki faz değiştirilerek** düzeltilir |

### Elektrik devreye alma test checklist

| Kontrol | Beklenen sonuç |
|---------|----------------|
| Faz koruma rölesi çıkış veriyor mu? | Evet |
| Makinede elektrik var mı? | Evet |
| Acil stop'a basıldığında makine duruyor mu? | Evet |

Motor yönü tek yönde çalıştırılmalıdır; faz yönü doğru ayarlanmalıdır.

<!-- FOTO: Faz sıra rölesi ve faz koruma rölesi — pano içi -->
![Faz kontrolü — pano içi](../../assets/FOTO-5-3-3-faz-kontrol.png)

---

## 5.3.5 Bağlantı tamamlama kontrol listesi

Tüm bağlantılar tamamlandığında aşağıdaki kontroller yapılmalıdır:

| # | Kontrol | Durum |
|---|---------|-------|
| 1 | Basınçlı hava bağlantısı yapıldı (6 bar, 3/4") | ☐ |
| 2 | HMI manuel sayfasında hava bilgisi yeşil | ☐ |
| 3 | Su bağlantısı yapıldı (1 bar, 1/2") | ☐ |
| 4 | HMI manuel sayfasında su bilgisi yeşil | ☐ |
| 5 | Trifaze elektrik bağlantısı yapıldı (380 V, 50 Hz) | ☐ |
| 6 | Faz yönü doğrulandı | ☐ |
| 7 | Pano üzerinden elektrik açıldı | ☐ |
| 8 | Faz koruma rölesi çıkış veriyor | ☐ |

Bağlantılar tamamlandıktan sonra Bölüm **5.4** güvenlik testleri ve Bölüm **5.5** kurulum doğrulama testleri uygulanmalıdır.

<!-- FOTO: HMI manuel sayfa — hava ve su yeşil gösterge -->
![HMI manuel sayfa — bağlantı durumu](../../assets/FOTO-5-3-4-hmi-manuel-durum.png)
