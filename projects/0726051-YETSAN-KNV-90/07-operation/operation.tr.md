# 7. OPERASYON

**KNV 90 7500 2B** (seri no **0726051**) makinesinin günlük çalıştırılması, durdurulması ve proses akışı bu bölümde tanımlanır. Makine **merkezi otomatik sekans içermez**: operatör panelindeki her fonksiyon (tank ısıtıcıları, pompalar, yağ sıyırıcı, yağ ayırıcı, blowerlar, kurutma fanları ve ısıtıcıları, konveyör) ayrı bir aç/kapa anahtarı ile yönetilir. Parça yükleme ve boşaltma **operatör tarafından elle** yapılır; makine çalışırken hat başında en az bir operatör bulunur.

Bu yapı, operatöre proses adımlarını ihtiyaca göre seçme esnekliği verir (ör. yalnızca yıkama, ya da yıkama + kurutma). Buna karşılık doğru başlatma sırasına ve donanımsal interlock'lara (tank seviyesi, kapak emniyeti, acil stop) uymak operatör sorumluluğundadır; yanlış sıra proses verimini düşürür ve ekipmanı zorlar. Operatör paneli yapısı **Bölüm 3.4**'te, ayarlar **Bölüm 6**'da, kurulum ve ilk devreye alma **Bölüm 5**'te anlatılmıştır.

Proses akışı: **Yıkama → Durulama → Su sıyırma (blower) → Kurutma (sıcak hava)**. Döngü süresi konveyör hızına (20–60 Hz) ve açık olan proseslere bağlıdır.

| Parametre | Değer |
| :--- | :--- |
| Operasyon modu | Manuel — fonksiyon bazlı aç/kapa; otomatik sekans yok |
| Operatör | 1–2 kişi — elle yükleme/boşaltma, panel kumandası |
| Tank dolumu | Elle — otomatik dolum yok |
| Start / Stop | Her fonksiyon için ayrı anahtar; genel START/STOP yok |
| Hazır göstergesi | Mavi RESET lambası |
| Panel dili | İngilizce etiketler (**Bkz. Bölüm 3.4.3** Türkçe karşılıklar) |

| Alt bölüm | Konu |
| :--- | :--- |
| **7.1** | Çalışma modları ve fonksiyon anahtarları |
| **7.2** | Makine başlatma — ön koşullar, tank dolumu, açılış sırası, ön kontroller |
| **7.3** | Makine durdurma — normal stop, acil stop sonrası, güç kapatma, uzun duruş |
| **7.4** | Operasyon sekansı — parça akışı, elle yükleme/boşaltma, hata davranışı |
| **7.5** | Operasyon kronolojisi — vardiya, devir teslim, vardiya başı kontrolleri |
| **7.6** | Diğer operasyon konuları — format, fire, müdahale noktaları |

## Lamba durumu — operatör yorumu

| Lamba | Anlam | Eylem |
| :--- | :--- | :--- |
| RESET (mavi) yanık | Emniyet zinciri kapalı, makine hazır | Fonksiyon anahtarları açılabilir |
| RESET (mavi) sönük | Acil stop basılı, kapak açık veya reset bekleniyor | Nedeni giderin; RESET'e basın — **Bkz. Bölüm 2.5** |
| Run lambası (beyaz) yanık | İlgili fonksiyon çalışıyor | Normal |
| Run lambası sönük, anahtar ON | Interlock veya koruma elemanı devrede | **Bkz. Bölüm 11.1** |
| TANK 1 / TANK 2 WASHING LEVEL (kırmızı) | Tank su seviyesi yetersiz | Tankı elle doldurun — **Bkz. Bölüm 7.2.1** |

Detaylı lamba tanımları **Bölüm 3.4.5**'te verilmiştir.

![Operatör paneli](../assets/3.4/operator-paneli.jpg)

---

Arıza giderme için bkz. **Bölüm 11**; temizlik için bkz. **Bölüm 10**.
