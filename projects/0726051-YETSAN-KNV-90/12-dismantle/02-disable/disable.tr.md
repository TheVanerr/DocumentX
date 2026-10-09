# 12.2 Devre dışı bırakma

Makine geçici (planlı duruş, hafta sonu, bakım arası) veya kalıcı (hurda, tesis kapatma) olarak devre dışı bırakılabilir. Her iki durumda da enerji izolasyonu ve — süreye bağlı olarak — tank boşaltma gereksinimleri farklıdır. DATA'da proje için ayrı prosedür tanımlanmamıştır; aşağıdaki akış makine tipinin standart uygulamasıdır.

---

## 12.2.1 Kalıcı devre dışı bırakma

| Parametre | Gereksinim |
| :--- | :--- |
| Kalıcı devre dışı bırakma | Tam demontaj ve enerji hatlarının güvenli körlenmesi |

Kalıcı hizmet dışı bırakma, makinenin bir daha devreye alınmayacağı durumlarda uygulanır.

**Kalıcı devre dışı bırakma prosedürü**

1. **Bölüm 12.1** demontaj prosedürünü tam uygulayın.
2. Ana şalteri kapatın ve **LOTO** kilidi bırakın veya tesis besleme hattını fiziksel olarak ayırın; pano giriş kablosunu sökün ve uçlarını izole edin.
3. Elektrik, hava ve su tesisat bağlantılarını güvenli şekilde sökün; açık boru uçlarını körlayın; egzoz kanalını kapatın.
4. Emniyet rölelerini, kontaktörleri ve inverteri devre dışı bırakın; gerekirse üretici servisi ile koordinasyon (**Bölüm 1.3**).
5. Tanklarda, hortumlarda ve yağ ayırıcı ünitesinde sıvı kalmadığını doğrulayın.
6. Makineyi veya parçaları **Bölüm 12.3** hurda/geri dönüşüm prosedürüne göre bertaraf edin.
7. Tesis kayıtlarında makine seri numarasını (**0726051**) hizmet dışı olarak işaretleyin; kılavuzu ve elektrik şemasını arşivleyin.

**Beklenen sonuç:** Enerji hatları körlenmiş; makine yeniden enerjilendirilemez durumda; bertaraf süreci başlatılmış.

---

## 12.2.2 Geçici devre dışı bırakma

| Parametre | Gereksinim |
| :--- | :--- |
| Geçici devre dışı bırakma | Normal stop + (süreye göre) tank boşaltma + ana şalter OFF |

Geçici durdurma; hafta sonu, planlı bakım, hat revizyonu veya kısa süreli üretim duruşu için uygulanır.

**Kısa süreli geçici duruş (birkaç saat — bir vardiya)**

1. **Bölüm 7.3.1** normal stop prosedürünü uygulayın.
2. Tank boşaltma **gerekmez**; ısıtıcı anahtarları kapatılabilir veya termostat kontrolünde açık bırakılabilir.
3. Yeniden devreye alma: **Bölüm 7.2** başlatma prosedürü.

**Uzun süreli geçici duruş (hafta sonu / planlı bakım / > 24 saat)**

1. **Bölüm 7.3.1** ile makineyi durdurun.
2. **Tankları boşaltın ve temizleyin** — bkz. **Bölüm 7.3.4**, **10.1.5**.
3. Ana şalteri **OFF** konumuna alın (**Bölüm 7.3.3**).
4. Bakım personeli müdahalesi varsa **LOTO** uygulayın (**Bölüm 2.4**).
5. Tesis hava ve su vanalarını kapatın.
6. Depolama koşullarına uygun koruma sağlayın — bkz. **Bölüm 4.2**.
7. Yeniden devreye alma:
   - Tesis hava/su vanaları açık; regülatör 6 bar
   - Tankları **Bölüm 7.2.1**'e göre doldurun
   - Ana şalter ON; RESET
   - **Bölüm 7.2.2** fonksiyon açılış sırası
   - Duruş süresi uzunsa güvenlik fonksiyon testi (**Bölüm 5.4**) ve periyodik bakım maddeleri (**Bölüm 9.1.3**)

**DİKKAT — Korozyon/koku:** Tanklar dolu bırakılırsa koku, mikrobiyel büyüme, yağ tabakasının sertleşmesi ve rezistans üzerinde tortu birikimi riski artar.
