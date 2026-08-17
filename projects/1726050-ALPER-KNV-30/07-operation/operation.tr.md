# 7. OPERASYON

Makine; girişten yüklemeli konveyörlü iki banyolu (yıkama + durulama) endüstriyel parça yıkama makinesidir. Proses akışı: **Yıkama → Durulama → Kurutma**. Makine **tam otomatik** çalışır ve **7/24 robot** ile beslenir; operatör/vardiya teslimi bulunmaz.

| Parametre | Değer |
|-----------|-------|
| Operasyon modu | 7/24 otomatik — robot giriş/çıkış |
| Operatör | Bulunmaz (hata durumunda bakım personeli müdahale eder) |
| Hazırlık | HMI hazırlık butonu (tank dolumu + ısıtma) |
| Start / Stop | HMI arayüzünde dijital buton |
| Operatör paneli dilleri | Türkçe, İngilizce, Almanca |

---

## Bölüm İçeriği

| Bölüm | Başlık | Konu |
|-------|--------|------|
| **7.1** | Çalışma Modları | HMI çalışma sayfası, proses seçenekleri, bakım erişimi |
| **7.2** | Makine Başlatma | Hazırlık butonu, tank dolumu/ısıtma, start öncesi kontrol |
| **7.3** | Makine Durdurma | Normal stop, acil stop sonrası yeniden başlatma, güç kapatma |
| **7.4** | Operasyon Sekansı | Otomatik cycle adımları, robot giriş/çıkış, hata davranışı |
| **7.5** | Operasyon Kronolojisi | 7/24 robot çalışması — vardiya teslimi yok |
| **7.6** | Diğer Operasyon Konuları | Format değişimi yok; operatör yok — hata durumunda bakım müdahalesi |

---

## Tepe Lambası Durumları

| Lamba | Anlam |
|-------|-------|
| Sarı | Makine kullanıma hazır |
| Yeşil | Makine çalışıyor |
| Kırmızı | Alarm |

Detaylı prosedürler ilgili alt bölümlerde açıklanmıştır.

<!-- FOTO: HMI çalışma sayfası genel görünüm -->
![HMI çalışma sayfası](../assets/FOTO-7-0-operation-genel.png)
