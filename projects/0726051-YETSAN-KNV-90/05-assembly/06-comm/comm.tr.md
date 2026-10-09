# 5.6 İletişim ve otomasyon arayüzü

**KNV 90 7500 2B** makinesinde **PLC, HMI, fieldbus veya üst sistem bağlantısı bulunmamaktadır**. Kontrol tamamen röle–kontaktör mantığı ile operatör paneli anahtarları üzerinden yapılır (**Bkz. Bölüm 3.4**). Bu nedenle kurulumda ağ yapılandırması, adresleme veya haberleşme testi uygulanmaz.

---

## 5.6.1 Fieldbus ve protokol

| Parametre | Değer |
| :--- | :--- |
| Fieldbus / protokol (Profinet / EtherCAT / Modbus vb.) | Yok |
| PLC | Yok |
| HMI | Yok |
| Uzaktan erişim | Hayır |

---

## 5.6.2 Üst sistem bağlantısı

| Parametre | Değer |
| :--- | :--- |
| Üst sistem (MES / SCADA) bağlantısı | Yok — makine bağımsız çalışır |

Makineden üst sisteme sinyal alınması isteniyorsa (ör. çalışma durumu, arıza kontağı), bu değişiklik yalnızca üretici onayı ile elektrik panosunda yapılabilir (**Bkz. Bölüm 1.3**).

---

## 5.6.3 I/O listesi ve dokümantasyon

| Doküman | Durum |
| :--- | :--- |
| I/O listesi | Uygulanmaz — PLC yok; sinyal bağlantıları elektrik şemasında (**Bkz. Bölüm 13.1**) |
| Elektrik şeması | Teslim paketi — pano, motor, ısıtıcı, emniyet devresi referansı |

---

## 5.6.4 Kontrol listesi

| # | Kontrol | Durum |
| :---: | :--- | :---: |
| 1 | Fieldbus / üst sistem gereksinimi olmadığı teyit edildi | ☐ |
| 2 | Elektrik şeması teslim paketinde mevcut | ☐ |
| 3 | Operatör paneli anahtar fonksiyonları doğrulandı (**Bölüm 5.5.2**) | ☐ |

**Tarih:** _______________ **Kontrol eden:** _______________

---

Operatör paneli yapısı için bkz. **Bölüm 3.4**; ayarlar için bkz. **Bölüm 6**.
