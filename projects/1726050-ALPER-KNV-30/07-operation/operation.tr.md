# 7. OPERASYON

**KNV 30 3000 2B** (seri no **1726050**) makinesinin günlük çalıştırılması, durdurulması ve otomatik proses sekansı bu bölümde tanımlanır. Makine **tam otomatik** tasarlanmıştır; parça giriş ve çıkış **robot** ile yapılır, hat **7/24** çalışacak şekilde entegre edilmiştir. Sürekli operatör bulunmaz; izleme üst sistem (MES/SCADA — müşteri) veya periyodik bakım turu ile yapılabilir, hata müdahalesi **bakım personeli** tarafından gerçekleştirilir.

Proses akışı: **Yıkama → Durulama → Kurutma**. Nominal döngü süresi **900 saniye** (15 dakika). Start/stop ve proses seçimi **HMI Çalışma Sayfası** üzerinden yapılır (bkz. **Bölüm 3.4.3**). Kalıcı parametre ayarları **Bölüm 6**'da; kurulum ve ilk devreye alma **Bölüm 5**'te anlatılmıştır.

| Parametre | Değer |
|-----------|-------|
| Operasyon modu | 7/24 otomatik — robot giriş/çıkış |
| Operatör | Bulunmaz (hata → bakım personeli) |
| Hazırlık | HMI **Hazırlık Start** (tank dolumu + ısıtma) |
| Start / Stop | HMI dijital düğmeler |
| HMI dilleri | Türkçe, İngilizce, Almanca |

| Alt bölüm | Konu |
|-------|--------|
| **7.1** | Çalışma modları ve HMI proses seçenekleri |
| **7.2** | Makine başlatma — hazırlık, start, ön kontroller |
| **7.3** | Makine durdurma — normal stop, acil stop, uzun süreli duruş |
| **7.4** | Otomatik operasyon sekansı — cycle, robot, hata davranışı |
| **7.5** | Operasyon kronolojisi — 7/24 hat |
| **7.6** | Diğer operasyon konuları |

## Tepe lambası — operatör yorumu

| Lamba | Anlam | Eylem |
|-------|-------|-------|
| Sarı | Kullanıma hazır | Start verilebilir |
| Yeşil | Çalışıyor | Normal operasyon |
| Kırmızı | Alarm | HMI alarm sayfası — bkz. **Bölüm 11** |

Detaylı lamba tanımları **Bölüm 3.4.10**'da SSOT olarak verilmiştir.

<!-- FOTO: HMI Çalışma Sayfası -->
![HMI çalışma sayfası](../assets/7.0/1.png)

---

Arıza giderme için bkz. **Bölüm 11**; temizlik için bkz. **Bölüm 10**.
