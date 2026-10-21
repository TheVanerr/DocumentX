# 2. GÜVENLİK

**KNV 90 7500 2B** (seri no **[EKSİK]**) konveyörlü endüstriyel parça yıkama makinesi; +70 °C'ye kadar ısıtılan proses sıvısı, 8 kW ve 12 kW elektrikli rezistanslar, hareketli zincirli konveyör, döner pompa ve fan mekanizmaları, 6 bar basınçlı hava, 380 V / 110 kW elektrik ve kimyasal maruziyet riskleri içerir. Bu bölüm, makinenin kurulum, devreye alma, işletim, bakım ve servis aşamalarında uyulması gereken güvenlik kurallarını tanımlar. Talimatlar EN ISO 12100 ve EN ISO 20607 ilkelerine uygun hazırlanmıştır.

Güvenlik gereksinimlerinin ihlali; yaralanma, ekipman hasarı, çevresel etki ve garanti kapsamının sona ermesi riski doğurur. Makineyi işleten kurum (işveren), personel görevlendirmesinden, eğitimden ve kılavuzun erişilebilirliğinden sorumludur (**Bkz. Bölüm 1.1.3**).

Makinenin kumandası PLC ile yapılır; ancak güvenlik fonksiyonları PLC programından bağımsız ve tamamen **donanımsaldır**: 7 acil stop butonu, 7 bakım kapağında seri bağlı manyetik emniyet switch'leri ve iki ayrı Omron G9SB-2002-A emniyet rölesi (biri acil stop zinciri, biri bakım kapağı zinciri için — **Bkz. Bölüm 2.1.3**). Güvenli duruma dönüş yalnızca operatör panelindeki **RESET** butonu ile onaylanır. PLC'deki bir arıza veya program değişikliği bu fonksiyonları devre dışı bırakamaz; bu mimari yazılımsal bypass imkânı bırakmaz; ancak switch köprüleme veya mıknatıs ile kandırma gibi fiziksel müdahaleler güvenlik fonksiyonunu tamamen devre dışı bırakır ve **kesinlikle yasaktır**.

| Alt bölüm | Konu |
| :--- | :--- |
| **2.1** | Güvenliğe giriş, sorumluluklar, amacına uygun kullanım çerçevesi, güvenlik donanımı özeti |
| **2.2** | Kalıntı riskler, makine etiketleri |
| **2.3** | Operasyonel güvenlik kuralları |
| **2.4** | Tehlikeli enerji kontrolü — LOTO (kilitleme ve etiketleme) |
| **2.5** | Acil durdurma (E-Stop) ve reset |
| **2.6** | Kişisel koruyucu donanım (KKD) matrisi |

Amaçlanan kullanım sınırları **Bölüm 3.2**'de tanımlanır. Teknik tesisat değerleri **Bölüm 3.3**'te, kontrol elemanları **Bölüm 3.4**'te verilir; bu bölümde tekrarlanmaz.
