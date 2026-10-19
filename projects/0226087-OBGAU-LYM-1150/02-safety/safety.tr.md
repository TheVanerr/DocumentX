# 2. GÜVENLİK

**LYM 1150** (sipariş no **0226087**) döner sepetli endüstriyel parça yıkama makinesi; 70 °C'ye kadar ısıtılan proses suyu, tank içindeki elektrikli rezistans, sepet redüktörü ile döndürülen yıkama sepeti, proses suyunu basınçla püskürten yıkama pompası, 380 V üç fazlı elektrik beslemesi ve alkali yıkama kimyasalı maruziyeti kaynaklı riskler içerir. Bu bölüm, makinenin kurulum, devreye alma, işletim, bakım ve servis aşamalarında uyulması gereken güvenlik kurallarını tanımlar. Talimatlar EN ISO 12100 ve EN ISO 20607 ilkelerine uygun hazırlanmıştır.

Güvenlik gereksinimlerinin ihlali; yaralanma, ekipman hasarı, çevresel etki ve garanti kapsamının sona ermesi riski doğurur. Makineyi işleten kurum (işveren), personel görevlendirmesinden, eğitimden ve kılavuzun erişilebilirliğinden sorumludur (**Bkz. Bölüm 1.1.3**).

Bu makinede PLC veya HMI bulunmadığından güvenlik fonksiyonları tamamen **donanımsaldır**: elektrik panosu üzerindeki acil stop butonu, yıkama hücresi kapağındaki kapak kapalı switchi, tanktaki seviye bekçisi ve motorların termik röleleri, röle tabanlı bir emniyet devresi üzerinden çalışır. Emniyet devresi açıldığında güvenli duruma dönüş yalnızca panodaki mavi **RESET** butonu ile onaylanır (**Bkz. Bölüm 3.4.6**). Bu mimari yazılımsal baypas imkânı bırakmaz; ancak switch köprüleme veya kablo sökme gibi fiziksel müdahaleler güvenlik fonksiyonunu tamamen devre dışı bırakır ve **kesinlikle yasaktır**.

| Alt bölüm | Konu |
| :--- | :--- |
| **2.1** | Güvenliğe giriş, işletme sorumlulukları, amacına uygun kullanım çerçevesi, güvenlik donanımı özeti |
| **2.2** | Kalıntı riskler, makine üzerindeki uyarı etiketleri |
| **2.3** | Genel operasyonel güvenlik kuralları |
| **2.4** | Tehlikeli enerji kontrolü — LOTO (tek kaynak) |
| **2.5** | Acil durdurma ve reset (tek kaynak) |
| **2.6** | Kişisel koruyucu donanım (KKD) matrisi (tek kaynak) |

Amaçlanan kullanım sınırları **Bölüm 3.2**'de tanımlanır. Teknik ve tesisat değerleri **Bölüm 3.3**'te, kumanda elemanları **Bölüm 3.4**'te verilir; bu bölümde tekrarlanmaz.
