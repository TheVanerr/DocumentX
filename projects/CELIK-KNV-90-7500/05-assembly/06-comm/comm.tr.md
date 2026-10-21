# 5.6 İletişim ve otomasyon arayüzü

**KNV 90 7500 2B** makinesinin kumandası elektrik panosundaki **PLC** ile yapılır; makinede **HMI** ve **üst sistem (MES / SCADA) bağlantısı bulunmamaktadır**. Operatör makineyi operatör paneli anahtarları üzerinden yönetir; PLC bu komutları ve proses kilitlemelerini işler (**Bkz. Bölüm 3.4**). PLC programı üretici tarafından yüklenmiş ve fabrikada test edilmiş olarak teslim edilir; kurulumda program yükleme veya parametre değişikliği yapılmaz. Bu bölüm, kurulumda PLC kumandasının doğru çalıştığının ve otomasyon dokümanlarının teslim edildiğinin doğrulanmasını tanımlar.

---

## 5.6.1 PLC ve haberleşme

| Parametre | Değer |
| :--- | :--- |
| PLC marka / model | [EKSİK] |
| PLC CPU modeli | [EKSİK] |
| Fieldbus / protokol (Profinet / EtherCAT / Modbus vb.) | [EKSİK] |
| HMI | Yok |
| Uzaktan erişim | Hayır |

PLC'nin güvenlik fonksiyonu yoktur. Acil stop ve bakım kapağı zincirleri, PLC'den bağımsız iki emniyet rölesi ile değerlendirilir (**Bkz. Bölüm 2.1.3**); PLC'ye bilgisayar bağlanması, program değiştirilmesi veya PLC'nin STOP konumuna alınması bu zincirleri devre dışı bırakmaz ve enerji izolasyonu yerine geçmez (**Bkz. Bölüm 2.4**).

---

## 5.6.2 Üst sistem bağlantısı

| Parametre | Değer |
| :--- | :--- |
| Üst sistem (MES / SCADA) bağlantısı | Yok — makine bağımsız çalışır |

Makineden üst sisteme sinyal alınması isteniyorsa (ör. çalışma durumu, arıza kontağı), bu değişiklik yalnızca üretici onayı ile elektrik panosunda ve PLC programında yapılabilir (**Bkz. Bölüm 1.3**).

---

## 5.6.3 I/O listesi ve dokümantasyon

| Doküman | Durum |
| :--- | :--- |
| Elektrik şeması | Teslim paketi — pano, PLC giriş/çıkış bağlantıları, motor, ısıtıcı ve emniyet devresi referansı (**Bkz. Bölüm 13.1**) |
| I/O listesi | [EKSİK] |
| PLC program yedeği | [EKSİK] |

---

## 5.6.4 Kontrol listesi

| # | Kontrol | Durum |
| :---: | :--- | :---: |
| 1 | Operatör paneli anahtarları PLC üzerinden ilgili birimleri çalıştırıyor (**Bölüm 5.5.2**) | ☐ |
| 2 | Tank seviye kilitlemesi çalışıyor — tank seviyesi yetersizken ilgili ısıtıcı ve pompa devreye girmiyor (**Bölüm 3.4.6**, **5.5.4**) | ☐ |
| 3 | Egzoz fanı CONVEYOR anahtarı ile birlikte devreye giriyor ve duruyor (**Bölüm 3.4.3**) | ☐ |
| 4 | Üst sistem bağlantısı gereksinimi olmadığı teyit edildi | ☐ |
| 5 | Elektrik şeması teslim paketinde mevcut; I/O listesi ve PLC program yedeğinin teslim durumu kaydedildi (**Bölüm 13.1**) | ☐ |

**Tarih:** _______________ **Kontrol eden:** _______________

---

Operatör paneli yapısı için bkz. **Bölüm 3.4**; ayarlar için bkz. **Bölüm 6**.
