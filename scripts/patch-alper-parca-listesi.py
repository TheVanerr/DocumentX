# -*- coding: utf-8 -*-
"""Patch ALPER DATA with spare parts list."""
from pathlib import Path

DATA = Path(r"c:\Users\fatih.gural\Desktop\FULL DATABASE\PROG\DocumentX\projects\1726050-ALPER-KNV-30\1726050-ALPER-KNV 30 DATA")

BAKIM_OLD = """[BAKIM_YEDEK_PARCA]
Kritik yedek parça listesi:
Önerilen stok miktarları:
Yedek parça sipariş kodu referansı:"""

BAKIM_NEW = """[BAKIM_YEDEK_PARCA]
Kritik yedek parça listesi:Bkz. [PARCA_LISTESI] — Kategori=Kritik ve Tüketim satırları (Bölüm 9.1.5 özeti)
Önerilen stok miktarları:Tablo «Önerilen stok» sütunu — [EKSİK] satırlar kullanıcı tarafından doldurulacak
Yedek parça sipariş kodu referansı:Tablo «Sipariş kodu» sütunu

[BAKIM_YEDEK_PARCA_NOT]
# Bölüm 9.1.5 yalnızca Kritik + Tüketim özetini gösterir. Tam liste SSOT: [PARCA_LISTESI] → Bölüm 13.3"""

PARCA_OLD = """[PARCA_LISTESI]
Mekanik parça listesi referansı:Ayrı evrak olarak teslim edilir
Elektrik parça listesi referansı:Ayrı evrak olarak teslim edilir
Wear part / aşınan parça listesi:Ayrı evrak olarak teslim edilir"""

PARCA_NEW = """[PARCA_LISTESI]
Parça listesi (BOM) konumu:Kılavuz Bölüm 13.3 (gömülü)
Mekanik parça listesi referansı:Bu dosya — aşağıdaki tablo
Elektrik parça listesi referansı:Bu dosya — aşağıdaki tablo
Wear part / aşınan parça listesi:Bu dosya — Kategori=Tüketim satırları

# Format: Sipariş kodu | Parça adı | Kategori | Önerilen stok | Konum / fonksiyon | Gerekçe
# Kategori: Kritik | Önerilen | Tüketim — ön değerler; kullanıcı düzeltebilir
# Önerilen stok: [EKSİK] = kullanıcı dolduracak

07 10214 | ÖN FİLTRE NS KOMPLESİ | Tüketim | [EKSİK] | Yıkama tankı | Günlük temizlik; tüketim
10 02976 | TERMOKUPL ETB30F06-5Ç | Kritik | [EKSİK] | Tank ısıtma | Arızada sıcaklık kontrolü/ısıtma devre dışı
07 15142 | REZİSTANS KOMPLESİ 8000W 50CM DÜZ DİKİŞSİZ | Kritik | [EKSİK] | Tank ısıtma | Arızada proses sıcaklığı sağlanamaz
07 00670 | EMİŞ FİLTRESİ KOMPLESİ (PYM2,KBN,VDL,ULT,KNV) | Tüketim | [EKSİK] | Pompa emiş hattı | Periyodik değişim
07 16791 | SEVİYE SENSÖRÜ ÇAT.TİP VEGASWING 51 DİŞ ÇEKİLMİŞ | Kritik | [EKSİK] | Tank seviye | Arızada dolum/seviye kontrolü bozulur
10 19471 | SENSÖR E2BM12KN08M1B1 OMRON END.PROX.M12 8MM | Önerilen | [EKSİK] | Proximity sensör | Konum algılama
10 17815 | SENSÖR E3FA-DP23 OMRON END.PROX.M18 1000MM | Önerilen | [EKSİK] | Proximity sensör | Konum algılama
10 03088 | NOZZLE 632.724.16.CC | Tüketim | [EKSİK] | Yıkama/durulama nozul | Aşınan parça
07 17295 | SALYANGOZLU FAN ENA 2 0,37 KW HAVA SO.SİLİKONLU | Önerilen | [EKSİK] | Egzost | Arızada egzoz/havalandırma etkilenir
07 03497 | YAĞ SIYIRICI TEFLONU | Tüketim | [EKSİK] | Yağ sıyırıcı | Periyodik değişim
10 00586 | REDÜKTÖR MOTORU 0,09KW 1500D/D B14 SIYIRICI | Kritik | [EKSİK] | Yağ sıyırıcı | Arızada yağ sıyırıcı çalışmaz
10 01002 | REDÜKTÖR EN:30 I:80 B:05 | Önerilen | [EKSİK] | Yağ sıyırıcı tahrik | Motor ile birlikte
10 02526 | YAĞ KEÇESİ 20*42*7 | Tüketim | [EKSİK] | Yağ sıyırıcı redüktör | Bakım tüketimi
10 01017 | RULMAN 6004 2RS ORS | Tüketim | [EKSİK] | Yağ sıyırıcı / genel | Bakım tüketimi
10 05378 | TORBA FİLTRE 200 MİKRON (50CM PASL. TEL ÇERÇEVE) | Tüketim | [EKSİK] | Pompa çıkışı | Haftalık değişim
10 00296 | PASLANMAZ SEVİYE BEKÇİSİ | Kritik | [EKSİK] | Tank seviye | Seviye güvenlik/kontrol
10 19321 | REDÜKTÖR WITTENSTEIN NP035S-MF2-30-1G1-1S | Kritik | [EKSİK] | Konveyör tahrik | Arızada konveyör durur
10 19317 | SERVO MOTOR SIEMENS SIMOTICS 1FL6064-1AC61-2AA1 | Kritik | [EKSİK] | Konveyör | Arızada parça akışı durur
10 19318 | SERVO SÜRÜCÜ SIEMENS 6SL3210-5FE11-5UF0 | Kritik | [EKSİK] | Konveyör | Arızada parça akışı durur
10 07147 | SWITCH F3STGRNLPU21M1J8 OMRON MANYETİK KAPI | Kritik | [EKSİK] | RFID / kapak güvenlik | Arızada güvenlik fonksiyonu etkilenir
07 17478 | KNV 30 3000 2B PRO IDE GOULDS POMPA KOMPLESİ | Kritik | [EKSİK] | Durulama pompası | Arızada durulama prosesi durur
10 06675 | POMPA LOWARA ESHE 40-160/30 380V/50HZ | Kritik | [EKSİK] | Yıkama pompası | Arızada yıkama prosesi durur"""

BOM_OLD = "Parça listesi (BOM) dosya adı / rev:Ayrı evrak olarak teslim edilir"
BOM_NEW = "Parça listesi (BOM) dosya adı / rev:Kılavuz Bölüm 13.3 (gömülü — SSOT: [PARCA_LISTESI])"


def main():
    text = DATA.read_text(encoding="utf-8-sig")
    for old, new, label in [
        (BAKIM_OLD, BAKIM_NEW, "BAKIM_YEDEK_PARCA"),
        (PARCA_OLD, PARCA_NEW, "PARCA_LISTESI"),
        (BOM_OLD, BOM_NEW, "BOM"),
    ]:
        if old not in text:
            raise SystemExit(f"Block not found: {label}")
        text = text.replace(old, new, 1)
    DATA.write_text(text, encoding="utf-8")
    print(f"Updated: {DATA}")


if __name__ == "__main__":
    main()
