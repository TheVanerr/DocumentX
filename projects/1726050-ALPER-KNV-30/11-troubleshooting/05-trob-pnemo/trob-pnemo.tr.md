# 11.5 Pnömatik arızalar

Makine pnömatik vanalar ve otomatik dolum sistemleri için **6 bar** basınçlı hava kullanır. Su giriş basıncı **1 bar** minimum olmalıdır. Medya değerleri **Bölüm 3.3.5** tablosunda SSOT olarak verilmiştir.

---

## 11.5.1 Basınç alarmları

| Alarm | Konu | Minimum değer |
|-------|------|:-------------:|
| Error-235 | Giriş hava basıncı düşük | **6 bar** |
| Error-236 | Giriş su basıncı düşük | **1 bar** |

### Basınç düşük teşhis prosedürü

1. HMI **Manuel Sayfa**'da hava ve su basınç göstergelerini okuyun (**Bölüm 3.4.5**).
2. Tesis hava regülatörünün **6 bar** çıkış verdiğini doğrulayın.
3. Hava hattı vanasının açık olduğunu kontrol edin.
4. Su giriş vanasının açık ve basıncın **1 bar** üzerinde olduğunu doğrulayın.
5. Basınç düzelince alarm reset; **Hazırlık Start** ile devam edin.

**Not:** Makine çalışırken hava hattı geçici kesilirse anlık pnömatik tüketim olmayan durumlarda makine kısa süre devam edebilir (bkz. **Bölüm 7.4.4**). Kalıcı düşük basınçta Error-235 oluşur.

| Parametre | Değer |
|-----------|-------|
| Basınç düşük (genel) | Error-235 — 6 bar hava zorunlu |

---

## 11.5.2 Vana arızaları

| Alarm | Konu |
|-------|------|
| Error-300 | Yıkama otomatik dolum vanası açılamadı |
| Error-301 | Yıkama otomatik dolum vanası kapanamadı |
| Error-302 | Durulama otomatik dolum vanası açılamadı |
| Error-303 | Durulama otomatik dolum vanası kapanamadı |
| Error-304 | Aktarma vanası açılamadı |
| Error-305 | Aktarma vanası kapanamadı |

Otomatik dolum vanaları pnömatik bobin ile çalışır; **6 bar** hava olmadan açılmazlar.

### Vana arıza teşhis prosedürü

1. **6 bar** hava basıncını doğrulayın (Error-235 yok).
2. Otomatik dolum **su giriş vanasının açık** olduğunu kontrol edin (**Bölüm 7.2.1**).
3. HMI manuel sayfadan ilgili vanaya manuel komut vererek hareket testi yapın (varsa).
4. Vana açılmıyorsa bobin elektrik beslemesini LOTO altında kontrol edin.
5. Mekanik sıkışma veya kontaminasyon varsa vanayı sökün, temizleyin veya değiştirin.
6. Kapanamama (Error-301/303/305) durumunda yay/stroke mekanizmasını kontrol edin.

| Parametre | Değer |
|-----------|-------|
| Silindir yavaş / takılma | [EKSİK] |
| Valf bobini arıza | [EKSİK] |

**Beklenen sonuç:** Vana açılıp kapanıyor; tank dolumu normal; ilgili Error kodu temiz.

---

**Bölüm 11.5 sonu.** Pnömatik ayarlar için bkz. **Bölüm 6.5**.
