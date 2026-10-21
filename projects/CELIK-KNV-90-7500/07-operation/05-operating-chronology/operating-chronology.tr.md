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
| Vardiya devir teslim maddeleri | Aşağıdaki standart liste — müşteri vardiya formunu bu maddelere göre hazırlar |

Devir teslimde en az aşağıdaki bilgiler aktarılır:

1. TANK 1 / TANK 2 WASHING LEVEL lamba durumu ve tank seviyesi.
2. Tank ve kurutma termostatlarının set ve gerçek sıcaklıkları (TANK 1, TANK 2, DRYING 1, DRYING 2).
3. Günlük ön filtre temizliğinin yapılıp yapılmadığı.
4. Vardiyada oluşan MKŞ / kaçak akım trip'leri ve acil stop kullanımları.
5. RESET / hazır durumu.
6. Yağ sıyırıcı ve yağ ayırıcı durumu.
7. Sızıntı veya anormal ses gözlemi.
8. Konveyör hızı (potansiyometre konumu).
9. Bekleyen bakım işleri.

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

Bu liste, başlatma ön koşullarının özetidir (**Bkz. Bölüm 7.2.1**). Planlı bakım veya temizlik duruşunda makineyi durdurun; enerji izolasyonu gerektiren işlerde **LOTO** uygulayın (**Bkz. Bölüm 2.4**). Periyodik bakım maddeleri için **Bkz. Bölüm 9.1.3**.

---

Bakım takvimi için **Bkz. Bölüm 9**.
