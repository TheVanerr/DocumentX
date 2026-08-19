# -*- coding: utf-8 -*-
"""Fill BAKIM_PERIYOT in DATA and update main-inst.tr.md section 9.1.3."""
from pathlib import Path

ROOT = Path(r"c:\Users\fatih.gural\Desktop\FULL DATABASE\PROG\DocumentX\projects\1726050-ALPER-KNV-30")
DATA = ROOT / "1726050-ALPER-KNV 30 DATA"
MAIN = ROOT / "09-maintenance/01-main-inst/main-inst.tr.md"

BAKIM_OLD = """[BAKIM_PERIYOT]
Günlük bakım maddeleri:
Haftalık bakım maddeleri:
Aylık bakım maddeleri:
250 saat bakım maddeleri:
500 saat bakım maddeleri:
1000 saat bakım maddeleri:
Yıllık bakım maddeleri:"""

BAKIM_NEW = """[BAKIM_PERIYOT]
Günlük bakım maddeleri:
- Genel görsel kontrol — sızıntı, anormal ses, alarm/tepe lambası durumu
- Yıkama tankı ön filtre temizliği — Bkz. Bölüm 10.1.3
- HMI alarm geçmişi kontrolü; aktif alarm varsa giderilmesi — Bkz. Bölüm 11
- Su ve hava basıncı durumu kontrolü (HMI manuel sayfa) — Bkz. Bölüm 7.2
- Çıkış konveyöründe sıkışma veya parça birikintisi kontrolü

Haftalık bakım maddeleri:
- Tank iç filtreleri temizliği — Bkz. Bölüm 10.1.4
- Pompa çıkışı torba filtre temizliği veya değişimi — Bkz. Bölüm 10.1.4
- Yağ sıyırıcı ve tank yüzeyi kontrolü — aşırı yağ tabakası
- Konveyör zincir/kayış gerginliği ve hizası gözle kontrol
- RFID / kapak emniyet fonksiyonu kısa test — Bkz. Bölüm 2.3, 5.4.2
- Acil stop butonları görsel kontrol (hasar, sıkışma yok) — Bkz. Bölüm 2.5

Aylık bakım maddeleri:
- Acil stop fonksiyon testi — bas, makine dursun, reset — Bkz. Bölüm 6.2.3
- Konveyör 4 yağlama noktası gresleme — Bkz. Bölüm 9.1.4
- Seviye sensörleri ve sızıntı tavası temizlik/kontrol
- Pano filtre/ventilasyon delikleri toz kontrolü
- Pompa ve fan birimlerinde anormal titreşim/ses kontrolü

250 saat bakım maddeleri:
- Otomatik dolum vanaları ve aktarma vanası çalışma kontrolü
- Isıtıcı termokupl ve rezistans bağlantı kontrolü (LOTO sonrası)
- Proximity sensör temizlik ve montaj sıkılık kontrolü
- Egzost fan ve kurutma fan kanat/gövde toz birikimi temizliği

500 saat bakım maddeleri:
- Yağ sıyırıcı redüktör yağ keçesi / teflon kontrol ve gerekirse değişim — Bkz. Bölüm 13.3
- Konveyör redüktör yağ seviyesi / sızıntı kontrolü
- Tank ve kapak contaları kontrol
- Pnömatik regülatör ve bağlantı noktaları kaçak kontrolü — Bkz. Bölüm 6.5

1000 saat bakım maddeleri:
- Pompa emiş filtresi komple kontrol / değişim — Bkz. Bölüm 13.3
- Nozzle tıkanma/aşınma kontrolü — Bkz. Bölüm 13.3
- Servo/konveyör tahrik grubu mekanik ve elektrik kontrolü
- Tank su kalitesi değerlendirmesi; gerekirse tam boşaltma ve iç temizlik — Bkz. Bölüm 10

Yıllık bakım maddeleri:
- Tüm emniyet fonksiyonları test raporu (RFID, acil stop, kaçak akım) — Bkz. Bölüm 2, 5.4
- Isıtıcı rezistans ve termokupl fonksiyon kontrolü
- Redüktör yağ değişimi — Bkz. Bölüm 9.1.4
- Elektrik bağlantıları sıkılık kontrolü (LOTO, yetkili elektrikçi)
- Uzun duruş planlanıyorsa tank boşaltma ve koruyucu temizlik — Bkz. Bölüm 7.3"""

SECTION_913 = """## 9.1.3 Periyodik bakım

Makine **7/24 robot hattında** çalışır; aşağıdaki maddeler **bakım personeli** tarafından planlı olarak uygulanır. Bakım öncesi makine durdurulmalı, gerekli işlemlerde **LOTO** uygulanmalıdır (bkz. Bölüm **2.4**). Temizlik adımları Bölüm **10**'da tanımlıdır — burada yalnızca referans verilir.

Saat bazlı periyotlar, makine **toplam çalışma saati** üzerinden takip edilir. Sayaç yoksa yaklaşık takvim karşılığı kullanılabilir (250 saat ≈ 3–4 hafta sürekli çalışma).

| Periyot | Özet |
|---------|------|
| Günlük | Görsel kontrol, ön filtre, alarm/basınç, çıkış konveyörü |
| Haftalık | Tank/torba filtre, yağ sıyırıcı, konveyör, emniyet |
| Aylık | Acil stop testi, yağlama, sensör/pano, pompa-fan |
| 250 saat | Vanalar, ısıtıcı, sensör, fan temizliği |
| 500 saat | Sıyırıcı redüktör, contalar, pnömatik kaçak |
| 1000 saat | Emiş filtresi, nozzle, servo/konveyör, tank temizliği |
| Yıllık | Emniyet raporu, ısıtıcı, redüktör yağı, elektrik, uzun duruş |

**Günlük bakım**

1. Genel görsel kontrol yapın — sızıntı, anormal ses, alarm/tepe lambası durumu.
2. Yıkama tankı ön filtrelerini temizleyin — bkz. Bölüm **10.1.3**.
3. HMI alarm geçmişini kontrol edin; aktif alarm varsa giderin — bkz. Bölüm **11**.
4. Su ve hava basıncı durumunu kontrol edin (HMI manuel sayfa) — bkz. Bölüm **7.2**.
5. Çıkış konveyöründe sıkışma veya parça birikintisi olup olmadığını kontrol edin.

**Haftalık bakım**

1. Tank iç filtrelerini temizleyin — bkz. Bölüm **10.1.4**.
2. Pompa çıkışı torba filtrelerini temizleyin veya değiştirin — bkz. Bölüm **10.1.4**.
3. Yağ sıyırıcı ve tank yüzeyini kontrol edin — aşırı yağ tabakası.
4. Konveyör zincir/kayış gerginliği ve hizasını gözle kontrol edin.
5. RFID / kapak emniyet fonksiyonunu kısa test edin — bkz. Bölüm **2.3**, **5.4.2**.
6. Acil stop butonlarını görsel kontrol edin (hasar, sıkışma yok) — bkz. Bölüm **2.5**.

**Aylık bakım**

1. Acil stop fonksiyon testi yapın — basın, makine dursun, resetleyin — bkz. Bölüm **6.2.3**.
2. Konveyör **4 yağlama noktasını** gresleyin — bkz. Bölüm **9.1.4**.
3. Seviye sensörlerini ve sızıntı tavasını temizleyin/kontrol edin.
4. Pano filtre/ventilasyon deliklerinde toz kontrolü yapın.
5. Pompa ve fan birimlerinde anormal titreşim/ses kontrol edin.

**250 saat bakım**

1. Otomatik dolum vanalarını ve aktarma vanasını test edin.
2. Isıtıcı termokupl ve rezistans bağlantılarını kontrol edin (LOTO sonrası).
3. Proximity sensörleri temizleyin; montaj sıkılığını kontrol edin.
4. Egzost fan ve kurutma fan kanat/gövde toz birikimini temizleyin.

**500 saat bakım**

1. Yağ sıyırıcı redüktör yağ keçesi / teflonu kontrol edin; gerekirse değiştirin — bkz. Bölüm **13.3**.
2. Konveyör redüktör yağ seviyesi ve sızıntısını kontrol edin.
3. Tank ve kapak contalarını kontrol edin.
4. Pnömatik regülatör ve bağlantı noktalarında kaçak kontrol edin — bkz. Bölüm **6.5**.

**1000 saat bakım**

1. Pompa emiş filtresini kontrol edin / değiştirin — bkz. Bölüm **13.3**.
2. Nozzle tıkanma/aşınmasını kontrol edin — bkz. Bölüm **13.3**.
3. Servo/konveyör tahrik grubunun mekanik ve elektrik kontrolünü yaptırın.
4. Tank su kalitesini değerlendirin; gerekirse tam boşaltma ve iç temizlik yapın — bkz. Bölüm **10**.

**Yıllık bakım**

1. Tüm emniyet fonksiyonları için test raporu düzenleyin (RFID, acil stop, kaçak akım) — bkz. Bölüm **2**, **5.4**.
2. Isıtıcı rezistans ve termokupl fonksiyon kontrolü yaptırın.
3. Redüktör yağ değişimini yapın — bkz. Bölüm **9.1.4**.
4. Elektrik bağlantı sıkılık kontrolü yaptırın (LOTO, yetkili elektrikçi).
5. Uzun duruş planlanıyorsa tankları boşaltın ve koruyucu temizlik uygulayın — bkz. Bölüm **7.3**.

"""


def replace_section(content: str, start: str, end: str, body: str) -> str:
    i = content.find(start)
    j = content.find(end, i + 1)
    if i < 0 or j < 0:
        raise SystemExit(f"Markers not found: {start!r} -> {end!r}")
    return content[:i] + body + content[j:]


def main():
    data = DATA.read_text(encoding="utf-8-sig")
    if BAKIM_OLD not in data:
        raise SystemExit("BAKIM_PERIYOT block not found or already updated")
    data = data.replace(BAKIM_OLD, BAKIM_NEW, 1)
    DATA.write_text(data, encoding="utf-8")
    print("Updated DATA BAKIM_PERIYOT")

    main_text = MAIN.read_text(encoding="utf-8-sig")
    main_text = replace_section(main_text, "## 9.1.3 Periyodik bakım", "## 9.1.4 Yağlama", SECTION_913 + "\n---\n\n")
    MAIN.write_text(main_text, encoding="utf-8")
    print("Updated main-inst.tr.md 9.1.3")


if __name__ == "__main__":
    main()
