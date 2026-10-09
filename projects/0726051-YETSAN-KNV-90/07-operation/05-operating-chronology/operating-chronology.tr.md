# 7.5 Operasyon kronolojisi

Makine, müşteri vardiya planına göre çalıştırılır; **sürekli otomatik hat değildir** ve çalışırken operatör gerektirir. Günlük akış; vardiya başı hazırlık ve kontroller, üretim, vardiya sonu durdurma ve günlük bakım/temizlik adımlarından oluşur.

---

## 7.5.1 Günlük operasyon zaman çizelgesi

| Parametre | Değer |
| :--- | :--- |
| Günlük operasyon | Müşteri vardiya planına göre |
| Sürekli (7/24) otomatik çalışma | Uygulanmaz |

Tipik günlük akış:

| Aşama | İçerik | Bölüm |
| :--- | :--- | :--- |
| Vardiya başı | Vardiya başlangıç kontrol listesi; tank dolumu; ısıtıcıların açılması (ön ısınma) | 7.5.3, 7.2 |
| Üretim | Pompalar, blower/kurutma ve konveyör açık; elle yükleme/boşaltma | 7.4 |
| Vardiya sonu | Normal stop; günlük ön filtre temizliği | 7.3.1, 10.1.3 |
| Hafta sonu / uzun duruş | Tank boşaltma ve temizlik; ana şalter OFF | 7.3.4, 10.1.5 |

Ön ısınma süresi su miktarına ve başlangıç sıcaklığına bağlıdır; vardiya başında ısıtıcıların erken açılması üretim başlangıcını hızlandırır.

---

## 7.5.2 Vardiya devir teslim

| Parametre | Değer |
| :--- | :--- |
| Vardiya devir teslim maddeleri | Tank seviyesi, sıcaklık, filtre durumu, acil stop/reset durumu — [EKSİK] müşteri prosedürü |

Devir teslimde en az aşağıdaki bilgiler aktarılmalıdır; müşteri kendi formunu bu maddelerle oluşturur:

1. Tank 1 ve Tank 2 su seviyesi ve WASHING LEVEL lamba durumu.
2. Termostat anlık ve set sıcaklıkları.
3. Ön filtre ve torba filtre son temizlik zamanı; tıkanma belirtisi.
4. Vardiya içinde oluşan duruşlar (acil stop, kapak, MKŞ trip) ve alınan aksiyon.
5. Konveyör hızı (potansiyometre konumu / Hz) ve işlenen parça tipi.
6. Sızıntı, anormal ses veya koku gözlemi.

---

## 7.5.3 Vardiya başlangıç kontrol listesi

| # | Kontrol | Durum |
| :---: | :--- | :---: |
| 1 | Tank 1 ve Tank 2 su seviyesi yeterli; WASHING LEVEL lambaları sönük (elle dolum sonrası) | ☐ |
| 2 | Basınçlı hava 6 bar — manometre | ☐ |
| 3 | RESET lambası yanık — acil stoplar serbest, kapaklar kapalı | ☐ |
| 4 | Konveyör hattı boş; giriş-çıkış alanı temiz | ☐ |
| 5 | Pompa vanaları açık | ☐ |
| 6 | Ön filtreler önceki vardiyada temizlenmiş | ☐ |
| 7 | Görünür sızıntı yok | ☐ |

Bu liste **Bölüm 7.2** başlatma ön koşullarının özetidir. Planlı bakım veya temizlik duruşunda makine durdurulmalı; enerji izolasyonu gerektiren işlerde **LOTO** uygulanmalıdır (**Bkz. Bölüm 2.4**). Periyodik bakım maddeleri **Bölüm 9.1.3**'te verilmiştir.

---

Bakım takvimi için bkz. **Bölüm 9**.
