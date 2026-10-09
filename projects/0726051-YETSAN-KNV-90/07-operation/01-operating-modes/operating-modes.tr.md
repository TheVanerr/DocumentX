# 7.1 Çalışma modları

KNV 90 7500 2B, **tek çalışma biçimine** sahiptir: operatör panelindeki fonksiyon anahtarları ile her proses birimi bağımsız açılıp kapatılır. Ayrı bir otomatik, manuel, step veya bakım modu seçici **yoktur**; mod geçiş koşulu tanımlı değildir. Bu bölümde kılavuz şablonundaki mod başlıkları makineye göre açıklanır.

Bu yapının sonucu şudur: makine, tek bir start komutu ile kendiliğinden hazırlanıp çalışmaz. Operatör; tankları doldurur, ısıtıcıları açar, su ısınınca pompaları, ihtiyaç duyulan blower/kurutma fonksiyonlarını ve son olarak konveyörü açar (**Bkz. Bölüm 7.2**). Interlock'lar (tank seviyesi, kapak emniyeti, acil stop, faz koruma) donanımsal olarak her zaman devrededir ve anahtar konumundan bağımsız olarak çıkışı keser (**Bkz. Bölüm 3.4.6**).

---

## 7.1.1 Manuel mod — makinenin tek çalışma biçimi

| Parametre | Değer |
| :--- | :--- |
| Manuel mod | **Makinenin tek çalışma biçimi** — merkezi otomatik sekans yok |

Operatör panelindeki her fonksiyon ayrı aç/kapa anahtarı ile yönetilir. Anahtar ON konumuna alındığında ilgili kontaktör çeker ve run lambası yanar; OFF konumunda çıkış kesilir. Fonksiyonlar birbirinden bağımsızdır; ancak proses mantığı ve ekipman koruması için **Bölüm 7.2.2** açılış sırası önerilir.

---

## 7.1.2 Otomatik mod

| Parametre | Değer |
| :--- | :--- |
| Otomatik mod | **Yok** — tek start ile tüm hat otomatik koşmaz |

Makinede PLC bulunmadığından otomatik hazırlık (dolum + ısıtma) veya otomatik sekans yoktur. Tank dolumu elle yapılır; ısıtma, operatörün ısıtıcı anahtarını açmasıyla başlar ve termostat set değerinde kendiliğinden kesilir. Bu "yarı otomatik" davranış yalnızca sıcaklık kontrolü için geçerlidir.

---

## 7.1.3 Bakım / setup modu

| Parametre | Değer |
| :--- | :--- |
| Bakım / setup modu | **Yok** — bakımda ana şalter kapatılır ve LOTO uygulanır (**Bkz. Bölüm 2.4**) |

Bakım kapakları yalnızca güvenli durumda (ana şalter OFF, LOTO uygulanmış) açılır. Kapak switch'leri bakım için baypas edilmez. Tek fonksiyon test çalıştırması (ör. yalnızca pompa) için ayrı mod gerekmez; ilgili anahtar RESET lambası yanıkken açılır.

---

## 7.1.4 Step / tek adım modu

| Parametre | Değer |
| :--- | :--- |
| Step / tek adım modu | **Yok** |

---

## 7.1.5 Mod geçiş koşulları

| Parametre | Değer |
| :--- | :--- |
| Mod geçiş koşulları | **Uygulanmaz** — operatör istediği fonksiyonları interlock'lara uyarak bağımsız açar/kapatır |

---

## 7.1.6 Fonksiyon anahtarları özeti

| Anahtar | İşlev | Operatör notu |
| :--- | :--- | :--- |
| TANK 1 HEATER | Yıkama tankı ısıtma (termostat kontrollü) | Tankta su olmalı; ısınma süresi su miktarına bağlı |
| TANK 1 PUMP | Yıkama pompası — yıkama hücresi nozulları | Tankta su olmalı; pompa vanaları açık |
| TANK 1 OIL SKIMMER | Yağ sıyırıcı | Yıkama sırasında veya yıkama sonrası yağ toplama |
| TANK 2 HEATER | Durulama tankı ısıtma | Tankta su olmalı |
| TANK 2 PUMP | Durulama pompası — durulama hücresi nozulları | Tankta su olmalı |
| BLOWER 1 / BLOWER 2 | Su sıyırma blower grupları | Parça kurutulacaksa açın |
| DRYING 1 FAN / DRYING 2 FAN | Kurutma fanları | Kurutma ısıtıcılarından önce açın |
| DRYING 1 HEATER / DRYING 2 HEATER | Kurutma ısıtıcıları (termostat kontrollü) | İlgili fan açıkken açın |
| Etiketsiz anahtar | Yağ ayırıcı ünitesi (diyaframlı pompa) | 6 bar hava bağlı olmalı |
| CONVEYOR | Konveyör — hız potansiyometre ile (20–60 Hz) | En son açın; hat boş ve RESET lambası yanık |

Fonksiyonlar proses ihtiyacına göre bağımsız açılıp kapatılabilir; hangi kombinasyonun kullanılacağı kullanıcı proses tasarımına bağlıdır (**Bkz. Bölüm 8.2**). Termostat set değerleri **Bölüm 6.3.3**'te tanımlıdır.

---

Başlatma prosedürü için bkz. **Bölüm 7.2**.
