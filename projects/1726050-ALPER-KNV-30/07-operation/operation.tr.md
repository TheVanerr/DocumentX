# 7. Operasyon

Bu bölüm, **KNV 30 3000 2B** makinesinin (proje no: **1726050**) günlük çalıştırılması, durdurulması ve operasyon prosedürlerini tanımlar. Operasyon, Bölüm **5** kurulum/devreye alma ve Bölüm **6** ayarlar tamamlandıktan sonra başlatılmalıdır.

Makine; girişten yüklemeli konveyörlü iki banyolu (yıkama + durulama) endüstriyel parça yıkama makinesidir. Proses akışı: **Yıkama → Durulama → Kurutma**.

| Parametre | Değer |
|-----------|-------|
| Operatör sayısı (min / max) | 1–2 |
| Start / Stop | HMI arayüzünde dijital buton |
| Operatör paneli dilleri | Türkçe, İngilizce, Almanca |

---

## Bölüm İçeriği

| Bölüm | Başlık | Konu |
|-------|--------|------|
| **7.1** | Çalışma Modları | HMI çalışma sayfası, proses seçenekleri, bakım erişimi |
| **7.2** | Makine Başlatma | Devreye alma ön koşulları, güç/hava/su açma, start öncesi kontrol |
| **7.3** | Makine Durdurma | Normal stop, acil stop sonrası yeniden başlatma, güç kapatma |
| **7.4** | Operasyon Sekansı | Otomatik cycle adımları, ürün giriş/çıkış, hata davranışı |
| **7.5** | Operasyon Kronolojisi | Günlük zaman çizelgesi, vardiya devir teslim |
| **7.6** | Diğer Operasyon Konuları | Format değişimi, fire/hurda, operatör müdahale noktaları |

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
