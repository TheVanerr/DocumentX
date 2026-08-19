# -*- coding: utf-8 -*-
"""Her standart model icin varyant tablolu DATA dosyasi uretir."""
import pathlib
import re

ROOT = pathlib.Path(r"c:\Users\fatih.gural\Desktop\FULL DATABASE\PROG\DocumentX")
REF = ROOT / "projects" / "1726050-ALPER-KNV-30" / "1726050-ALPER-KNV 30 DATA"

MODELS = {
    "lym": ["LYM 950", "LYM 1150", "LYM 1350", "LYM 1550"],
    "vdl": [
        "VDL 40 2500 1B",
        "VDL 40 3500 2B",
        "VDL 50 4250 2B",
        "VDL 60 5500 2B",
        "VDL 80 6500 2B",
    ],
    "kbn": [
        "KBN 1B 1650",
        "KBN 1B 1850",
        "KBN 1B 2050",
        "KBN 2B 1650",
        "KBN 2B 1850",
        "KBN 2B 2050",
    ],
    "rts": ["RTS 346 2B"],
    "pyt": ["PYT 40", "PYT 90", "PYT 750", "PYT 800"],
    "ult": ["ULT M40", "ULT M60", "ULT M100", "ULT M140", "ULT M200", "ULT M400"],
    "mst": ["MST PRO 02", "MST LVB 60", "MST LVB 100"],
    "knv": ["KNV 40 5500 1B", "KNV 40 6500 2B"],
}

URETICI_BLOCK = """[URETICI]
Üretici firma adı: CNK ELEKTRONİK MAKİNE SANAYİ AŞ
Fabrika adresi: 1.Organize Sanayi Bölgesi Prof. Orhan Işık Caddesi No:8
İlçe: Sincan
Şehir: Ankara
Ülke: Türkiye
Telefon: +90 312 267 30 15
Fax: +90 312 267 30 11
Web sitesi: https://dolfintr.com
E-posta: dolfin@dolfintr.com
Yetkili servis / teknik destek: CNK ELEKTRONİK MAKİNE SANAYİ AŞ — yukarıdaki iletişim kanalları"""

# Bu bloklarda tek satir yerine varyant tablosu kullan
VARIANT_BLOCKS = {
    "BOYUT_AGIRLIK": [
        "Dış genişlik W (mm)",
        "Dış uzunluk L (mm)",
        "Dış yükseklik H — normal (mm)",
        "Boş ağırlık — kuru (kg)",
        "Çalışma ağırlığı — dolu (kg)",
        "Şase tipi (sabit ayak / ayarlanabilir ayak / ankraj)",
    ],
    "KAPASITE_PROSES": [
        "Nominal kapasite (adet/saat veya kg/saat)",
        "Maksimum kapasite (adet/saat)",
        "Minimum kapasite (adet/saat)",
        "Ürün formatı / ambalaj tipi",
        "Ürün boyutu min (mm)",
        "Ürün boyutu max (mm)",
        "Ürün ağırlığı min (g)",
        "Ürün ağırlığı max (g)",
        "Proses adım sayısı",
        "Proses adı 1",
        "Proses adı 2",
        "Proses adı 3",
        "Döngü süresi nominal (sn)",
    ],
    "ELEKTRIK": [
        "Besleme gerilimi (V)",
        "Besleme frekansı (Hz)",
        "Faz sayısı",
        "Toplam kurulu güç (kW)",
        "Toplam kurulu güç — ısıtma dahil (kW)",
        "Maksimum akım çekişi (A)",
        "Güç faktörü (cos φ)",
        "Kısa devre akımı / ICC gereksinimi (kA)",
        "Besleme konfigürasyonu (3P+N+PE / vb.)",
        "Ana şalter tipi / In (A)",
        "Ana şalter marka",
        "Toplam sigorta / devre kesici değeri (A)",
        "UPS / jeneratör gereksinimi (varsa)",
    ],
    "SIKIŞTIRILMIŞ_HAVA_SU": [
        "Basınçlı hava girişi (bar)",
        "Su girişi basıncı (bar)",
        "Su sıcaklığı min / max (°C)",
        "Su kalitesi / filtre gereksinimi",
        "Drain / atık su hattı çap (mm)",
    ],
    "ORTAM_KOSULLARI": [
        "Çalışma sıcaklığı min / max (°C)",
        "Depolama sıcaklığı min / max (°C)",
        "Göreceli nem min / max (%)",
        "Koruma sınıfı (IP)",
        "Gürültü seviyesi (dB(A))",
    ],
    "URUN_KAPASITE": [
        "Nominal kapasite tablosu (ürün × adet/saat)",
        "Test edilen kapasite (adet/saat)",
        "Kapasite test koşulları",
        "Maksimum sürekli çalışma süresi (saat/gün)",
    ],
}

FIELD_RE = re.compile(r"^([^:#\[\-\n][^:]*?):\s*(.*)$")
SKIP_EMPTY_BLOCKS = {"ARIZA_GENEL"}  # alarm listesi bos sablon


def variant_table(variants, columns):
    lines = ["# Varyant | " + " | ".join(columns)]
    for v in variants:
        lines.append(v + " | " + " | ".join([""] * len(columns)))
    return lines


def variant_table_transposed(variants, rows):
    """Satir=ozellik, sutun=varyant (okunabilir genis tablo)."""
    header = "# Ozellik | " + " | ".join(variants)
    out = [header]
    for row in rows:
        out.append(row + " | " + " | ".join([""] * len(variants)))
    return out


def normalize_line(line: str) -> str:
    if line.startswith("Ortam nemi max (% RH)"):
        return "Ortam nemi max (% RH): "
    m = FIELD_RE.match(line)
    if m:
        return m.group(1).rstrip() + ": "
    return line


def build_model_data(model: str, variants: list[str]) -> str:
    ref_lines = REF.read_text(encoding="utf-8").splitlines()
    out = []
    model_upper = model.upper()
    file_title = f"{model_upper} — MAKİNE VERİ DOSYASI (SSOT)"

    out.append("# =============================================================================")
    out.append(f"# {file_title}")
    out.append("# =============================================================================")
    out.append("# Bu dosya kılavuz yazımının TEK kaynağıdır. Bölüm .md dosyaları buradan üretilir.")
    out.append("# Doldurma: ':' sonrasına yaz. Bilinmiyorsa [EKSİK] bırak. Uydurma yapma.")
    out.append("# Son güncelleme:")
    out.append("# Hazırlayan:")
    out.append("# Onaylayan:")
    out.append("# =============================================================================")
    out.append("")

    i = 0
    while i < len(ref_lines):
        line = ref_lines[i]

        # Atla referans basligini — kendi basligimizi yazdik
        if line.startswith("# =====") and i < 12:
            while i < len(ref_lines) and not ref_lines[i].startswith("[PROJE]"):
                i += 1
            continue

        # PROJE blogu — model ozel
        if line.strip() == "[PROJE]":
            out.append("# =============================================================================")
            out.append("# 0 — MAKİNE VE ÜRETİCİ BİLGİLERİ")
            out.append("# =============================================================================")
            out.append("")
            out.append("[PROJE]")
            out.append("Makine ticari adı: ")
            out.append(f"Makine model kodu: {model_upper}")
            out.append("Üretim yılı: ")
            out.append("İmalat / sevk tarihi: ")
            out.append("")
            for uline in URETICI_BLOCK.splitlines():
                out.append(uline)
            out.append("")
            out.append("[MODEL_VARYANTLARI]")
            out.append("# Bu model ailesindeki tüm varyantlar — kılavuzda kapasite/teknik tablolarda kullanılır")
            for n, v in enumerate(variants, 1):
                out.append(f"Varyant {n} ({v}): ")
            out.append("")
            out.append("# =============================================================================")
            out.append("# 01 — GİRİŞ (introduction)")
            out.append("# =============================================================================")
            out.append("")
            i += 1
            while i < len(ref_lines) and ref_lines[i].strip() != "[GIRIS_GENEL]":
                i += 1
            continue

        block_match = re.match(r"^\[([A-Z_ÇĞİÖŞÜ]+)\]$", line.strip())
        if block_match:
            block = block_match.group(1)
            out.append(line)
            if block in VARIANT_BLOCKS:
                out.extend(variant_table_transposed(variants, VARIANT_BLOCKS[block]))
                out.append("")
                i += 1
                while i < len(ref_lines):
                    nxt = ref_lines[i]
                    if nxt.strip().startswith("[") or (
                        nxt.startswith("# ===") and "—" in nxt
                    ):
                        break
                    if FIELD_RE.match(nxt) or (nxt.startswith("# ---") and i > 0):
                        i += 1
                        continue
                    if nxt.strip().startswith("#") and "—" in nxt:
                        i += 1
                        continue
                    if FIELD_RE.match(nxt):
                        i += 1
                        continue
                    break
                continue

            if block == "MOTOR_SURUCU_LISTESI":
                out.append("# Her varyant icin motor listesi — satir: Ad | Güç (kW) | Devir (rpm) | Marka | Model")
                for v in variants:
                    out.append(f"## {v}")
                    out.append("Motor 1: ")
                    out.append("Motor 2: ")
                    out.append("Motor 3: ")
                    out.append("")
                i += 1
                while i < len(ref_lines) and not (
                    ref_lines[i].strip().startswith("[")
                    or (ref_lines[i].startswith("# ===") and "—" in ref_lines[i])
                ):
                    i += 1
                continue

            if block in SKIP_EMPTY_BLOCKS:
                out.append("# Alarm kod listesi — her satir: - Error-XXX Açıklama")
                out.append("- Error-: ")
                out.append("- Error-: ")
                out.append("- Error-: ")
                out.append("HMI alarm metinleri dili: ")
                out.append("Servis çağrısı kriterleri: ")
                out.append("")
                i += 1
                while i < len(ref_lines) and not ref_lines[i].strip().startswith("["):
                    i += 1
                continue

            if block == "ARIZA_TABLO":
                out.append("# Format: Belirti | Olası neden | Kontrol | Çözüm")
                for n in range(1, 4):
                    out.append(f"Arıza {n} belirti: ")
                    out.append(f"Arıza {n} neden: ")
                    out.append(f"Arıza {n} çözüm: ")
                out.append("")
                i += 1
                while i < len(ref_lines) and not ref_lines[i].strip().startswith("["):
                    i += 1
                continue

            if block == "MONTAJ_ADIMLARI":
                out.append("# Her adım: Sıra | Açıklama | Tork / tolerans | Not")
                for n in range(1, 9):
                    out.append(f"Adım {n}: ")
                out.append("")
                i += 1
                while i < len(ref_lines) and not ref_lines[i].strip().startswith("["):
                    i += 1
                continue

            if block == "OZEL_KURULUM":
                out.append("# Varyant bazli urun parametreleri")
                header = "# Varyant | Ürün A | Ürün B | Ürün C | Reçete no listesi"
                out.append(header)
                for v in variants:
                    out.append(f"{v} | | | | ")
                out.append("")
                i += 1
                while i < len(ref_lines) and not ref_lines[i].strip().startswith("["):
                    i += 1
                continue

            if block == "BAKIM_YEDEK_PARCA":
                out.append("# Varyant | Kritik yedek parça | Önerilen stok | Sipariş kodu")
                for v in variants:
                    out.append(f"{v} | | | ")
                out.append("")
                i += 1
                while i < len(ref_lines) and not ref_lines[i].strip().startswith("["):
                    i += 1
                continue

            # Diger bloklar: satirlari bosalt
            i += 1
            while i < len(ref_lines):
                nxt = ref_lines[i]
                if nxt.strip().startswith("[") or (
                    nxt.startswith("# ===") and i > 0 and "—" in nxt and "===" in nxt
                ):
                    break
                if nxt.strip().startswith("# ---"):
                    out.append(nxt)
                elif nxt.strip().startswith("#") and not FIELD_RE.match(nxt):
                    out.append(nxt)
                elif FIELD_RE.match(nxt):
                    out.append(normalize_line(nxt))
                elif nxt.strip().startswith("- Error-"):
                    pass  # atla proje ozel alarmlar
                elif nxt.strip():
                    out.append(nxt)
                else:
                    out.append("")
                i += 1
            out.append("")
            continue

        # Bolum basliklari ve yorumlar
        if line.startswith("# ===") or line.startswith("# ---"):
            out.append(line.replace("1726050-ALPER-KNV 30", model_upper))
        elif line.strip().startswith("#"):
            out.append(line)
        elif not line.strip():
            if out and out[-1] != "":
                out.append("")
        else:
            m = FIELD_RE.match(line)
            if m:
                out.append(normalize_line(line))
            else:
                out.append(line)
        i += 1

    out.append("# =============================================================================")
    out.append("# SON — DOSYA SONU")
    out.append("# =============================================================================")
    return "\n".join(out) + "\n"


def main():
    for model, variants in MODELS.items():
        proj = ROOT / "projects" / model
        proj.mkdir(parents=True, exist_ok=True)
        dest = proj / f"{model.upper()} DATA"
        dest.write_text(build_model_data(model, variants), encoding="utf-8")
        print(f"OK {dest.relative_to(ROOT)} ({len(variants)} varyant)")


if __name__ == "__main__":
    main()
