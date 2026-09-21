# 7.5 Operasyon kronolojisi

Bu proje kapsamında makine **7/24 robot** ile entegre sürekli hat operasyonu için tasarlanmıştır. Geleneksel vardiyalı operatör modeli uygulanmaz; makine başında sürekli vardiya operatörü bulunmaz. HMI start/stop ve Error-461 onayı gerektiğinde hat sorumlusu veya bakım personeli müdahale eder.

---

## 7.5.1 Günlük operasyon zaman çizelgesi

| Parametre | Değer |
|-----------|-------|
| Günlük operasyon | **7/24** robot ile sürekli çalışma |
| Vardiya bazlı operasyon çizelgesi | **Uygulanmaz** |

Makine, üst hat (robot + MES/SCADA — tanım müşteriye ait) ile senkronize çalışır. Planlı duruşlar (bakım, temizlik) tesis üretim planına göre yapılır; duruş öncesi **Bölüm 7.3** stop prosedürü uygulanır.

---

## 7.5.2 Vardiya devir teslim

| Parametre | Değer |
|-----------|-------|
| Vardiya devir teslim maddeleri | **Yoktur** |

Operatör/vardiya teslim formu kullanılmaz. Durum izleme üst sistem (müşteri MES/SCADA) veya periyodik bakım turu ile yapılır.

---

## 7.5.3 Shift başlangıç kontrol listesi

| Parametre | Değer |
|-----------|-------|
| Shift başlangıç kontrol listesi | **Yoktur** |

Makine sürekli otomatik çalıştığından vardiya başlangıç kontrol listesi tanımlanmamıştır. Bunun yerine aşağıdaki periyodik kontroller geçerlidir:

| Periyot | Kontrol | Bölüm |
|---------|---------|-------|
| Günlük | Ön filtre temizliği | 10 |
| Haftalık | Tank/torba filtre temizliği | 10 |
| Aylık | Acil stop fonksiyon testi | 6.2.3, 5.4.1 |
| Periyodik | Bakım takvimi maddeleri | 9 |

Planlı bakım veya temizlik duruşunda makine stop edilmeli; enerji izolasyonu gerektiren işlerde **LOTO** uygulanmalıdır (bkz. **Bölüm 2.4**).

---

Bakım takvimi için bkz. **Bölüm 9**.
