# 11.5 Pnömatik arızalar

Makine **6 bar** basınçlı hava kullanır (bkz. Bölüm **6.5**).

---

## 11.5.1 Basınç alarmları

| Alarm | Konu | Kontrol |
|-------|------|---------|
| Error-235 | Giriş hava basıncı düşük | 6 bar hava bağlantısı, regülatör, HMI manuel sayfa |
| Error-236 | Giriş su basıncı düşük | 1 bar su bağlantısı, HMI manuel sayfa |

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Basınç düşük (genel) | Error-235 — 6 bar hava gerekli |

> **Not:** Makine çalışırken hava sökülürse anlık hava ihtiyacı olmayabilir; makine devam edebilir (bkz. **7.4.4**).

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

**Kontrol:** 6 bar hava mevcut mu. Otomatik dolum su giriş vanası açık mı (7.2.1). Vana bobini ve mekanik hareket.

| Parametre | Değer / Açıklama |
|-----------|------------------|
| Silindir yavaş / takılma | [EKSİK] |
| Valf bobini arıza | [EKSİK] |
