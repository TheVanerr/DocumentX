# 6. AYARLAR

Bu bölüm, **KNV 30 3000 2B** makinesinin devreye alma sonrası (**Bkz. Bölüm 5**) operatör ve bakım personelinin yapabileceği **OEM (üretici) ayar parametrelerini** tanımlar. Ayarlar; proses kalitesi, güvenlik fonksiyonlarının sürekliliği ve HMI üzerinden makine davranışının yapılandırılması için gereklidir.

**Hedef kitle:** Operatör (HMI set değerleri), bakım personeli (pnömatik regülatör, periyodik güvenlik testi), üretici servisi (PLC/encoder). PLC programı, encoder/feedback ve gömülü sürücü parametreleri yalnızca **üretici yetkili servisi** tarafından değiştirilmelidir.

| Alt bölüm | Konu |
|-------|--------|
| **6.1** | Mekanik ayarlar — referans pozisyon; ayar gereksinimi yok |
| **6.2** | Güvenlik ayarları — bypass yasağı, acil stop test periyodu |
| **6.3** | Elektrik / HMI ayarları — sıcaklık, yağ sıyırıcı, tarih/saat/dil |
| **6.4** | Hidrolik ayarlar — sistem yok |
| **6.5** | Pnömatik ayarlar — regülatör 6 bar |
| **6.6** | Vakum ayarları — sistem yok |
| **6.7** | Diğer ayarlar — ek nokta yok |

## Genel kurallar

| Konu | Kural | Referans |
|------|-------|----------|
| Encoder / feedback | Üretici servisi ayarlar | Bölüm 6.3.2 |
| Sıcaklık / yağ sıyırıcı | HMI Ayarlar Sayfası | Bölüm 6.3.3, 3.4.4 |
| Basınçlı hava | Regülatör **6 bar** | Bölüm 6.5 — SSOT: 3.3.5 |
| Acil stop testi | **Her ay bir kez** | Bölüm 6.2.3 → 5.4.1 |
| Bakım kapakları | Bypass yasak; LOTO zorunlu | Bölüm 2.4 |

Parametre değişikliği öncesi makineyi durdurun; mümkünse hazırlık aşamasında veya stop durumunda ayar yapın. Günlük start/stop ve proses seçimi **Bölüm 7**'de anlatılır; bu bölüm kalıcı/kurulum ayarlarına odaklanır.

<!-- FOTO: HMI Ayarlar Sayfası genel görünüm -->
![HMI ayar sayfası](../assets/6.0/1.png)

---

Operasyon prosedürleri için bkz. **Bölüm 7**; periyodik bakım için bkz. **Bölüm 9**.
