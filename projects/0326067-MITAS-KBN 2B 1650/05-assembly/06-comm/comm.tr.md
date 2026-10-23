# 5.6 İletişim

## 5.6.1 Kumanda sistemi içi iletişim

Makinenin kumanda sistemi elektrik panosundaki PLC'ye ({{KONTROLLER:PLC marka / model}}) bağlı aşağıdaki birimlerden oluşur:

Tablo: Kumanda sistemi bağlantıları

| Bağlantı | Birimler | Açıklama |
|---|---|---|
| PLC — operatör paneli | {{KONTROLLER:PLC marka / model}} — {{KONTROLLER:HMI marka / model}} | Reçeteler, ayarlar, durum ve alarm bilgileri; bağlantı tipi {{ILETISIM:Fieldbus / protokol (Profinet / EtherCAT / Modbus / vb.)}} |
| Operatör paneli — sepet motoru sürücüsü | {{KONTROLLER:HMI marka / model}} — {{KONTROLLER:Sepet motoru sürücüsü}} | Sepet hızı operatör paneli üzerinden sürücüye iletilir; bu bağlantı kesilirse sepet hızı ayarlanamaz |
| PLC — termokupl giriş ünitesi | {{KONTROLLER:PLC marka / model}} — CP1W-TS003 | Genişleme bağlantısı; tank ve kurutma sıcaklıkları |
| PLC — ek I/O ünitesi | {{KONTROLLER:PLC marka / model}} | Genişleme bağlantısı; ek giriş ve çıkışlar |

İletişim kablolarını sökmeyin ve yerlerini değiştirmeyin. Operatör panelinde değerler güncellenmiyor veya sepet hızı değişmiyorsa **Bkz. Bölüm 11.3.7**.

## 5.6.2 Üst sistem bağlantısı

Makine bir üst sisteme (MES, SCADA) bağlı değildir: {{ILETISIM:Üst sistem (MES / SCADA) bağlantısı}}. PLC ve operatör panelinde Ethernet portu bulunur. Bu portlar üzerinden işletme ağına bağlantı, üreticinin onayı ve işletmenin bilgi güvenliği kurallarına göre yapılır; yetkisiz ağ bağlantısı PLC programının değiştirilmesine yol açabilir.

## 5.6.3 Program yedekleri

PLC programının ve operatör paneli projesinin yedekleri üreticide saklanır. İşletmede bulunması gereken yedekler:

- PLC programı: {{DOKUMANLAR:PLC program yedek dosya adı}}.
- Operatör paneli projesi: {{DOKUMANLAR:HMI proje yedek dosya adı}}.
- Sepet motoru sürücüsü parametre listesi: devreye almada kaydedilir.

Reçete değerleri operatör panelinin hafızasındadır. Reçete değerlerini reçete kayıt formuna yazarak yedekleyin (**Bkz. Bölüm 14.1**); panel değiştirildiğinde reçeteler bu formdan yeniden girilir.

PLC programı, operatör paneli projesi ve sürücü parametreleri yalnızca üretici tarafından değiştirilir (**Bkz. Bölüm 2.1.5**).
