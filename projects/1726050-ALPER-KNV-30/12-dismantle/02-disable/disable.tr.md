# 12.2 Devre dışı bırakma

Makine geçici (planlı duruş, bakım arası) veya kalıcı (hurda, tesis kapatma) olarak devre dışı bırakılabilir. Her iki durumda da enerji izolasyonu ve — süreye bağlı olarak — tank boşaltma gereksinimleri farklıdır.

---

## 12.2.1 Kalıcı devre dışı bırakma

| Parametre | Gereksinim |
|-----------|------------|
| Kalıcı devre dışı bırakma | Tam demontaj ve güvenli körlenme yapılmalıdır |

Kalıcı hizmet dışı bırakma, makinenin bir daha devreye alınmayacağı durumlarda uygulanır.

### Kalıcı devre dışı bırakma prosedürü

1. **Bölüm 12.1** demontaj prosedürünü tam uygulayın.
2. Ana şalteri kapatın ve **LOTO** kilidi bırakın veya hattı fiziksel olarak ayırın.
3. Elektrik, hava ve su tesisat bağlantılarını güvenli şekilde sökün; açık uçları körlayın.
4. Kontrol devrelerini (PLC, HMI, emniyet röleleri) devre dışı bırakın; gerekirse üretici servisi ile koordinasyon (**Bölüm 1.3**).
5. Makineyi veya parçaları **Bölüm 12.3** hurda/geri dönüşüm prosedürüne göre bertaraf edin.
6. Tesis kayıtlarında makine seri numarasını (**1726050**) hizmet dışı olarak işaretleyin.

**Beklenen sonuç:** Enerji hatları körlenmiş; makine yeniden enerjilendirilemez durumda; bertaraf süreci başlatılmış.

---

## 12.2.2 Geçici devre dışı bırakma

| Parametre | Gereksinim |
|-----------|------------|
| Geçici devre dışı bırakma | Stop + (gerekirse) tank boşaltma + ana şalter OFF |

Geçici durdurma; hafta sonu, planlı bakım, hat revizyonu veya kısa süreli üretim duruşu için uygulanır.

### Kısa süreli geçici duruş (birkaç saat — bir vardiya)

1. HMI **Makine Stop** ile makineyi durdurun.
2. Robot hattı koordinasyonunu sağlayın.
3. Tank boşaltma **gerekmez** (bkz. **Bölüm 7.3.1**).
4. Yeniden devreye alma: **Bölüm 7.2** hazırlık ve start prosedürü.

### Uzun süreli geçici duruş (hafta sonu / planlı bakım / >24 saat)

1. HMI stop ile makineyi durdurun.
2. **Tankları boşaltın ve temizleyin** — bkz. **Bölüm 7.3.4**, **10.1.5**.
3. Ana şalteri **OFF** konumuna alın.
4. Bakım personeli müdahalesi varsa **LOTO** uygulayın (**Bölüm 2.4**).
5. Depolama koşullarına uygun koruma sağlayın — bkz. **Bölüm 4.2**.
6. Yeniden devreye alma:
   - Ana şalter ON
   - Tesis hava/su vanaları açık
   - **Bölüm 7.2** hazırlık + start
   - Güvenlik fonksiyon testi periyodik plana göre (**Bölüm 6.2**, **9.1.3**)

**DİKKAT — Korozyon/koku:** Tanklar dolu bırakılırsa koku, mikrobiyel büyüme ve paslanmaz yüzey korozyonu riski artar.

---

**Bölüm 12.2 sonu.**
