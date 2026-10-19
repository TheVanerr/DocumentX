# Kılavuz yazım kuralları (projects/)

> Bu dosya yalnızca `projects/` altında çalışırken yüklenir. Sadece kullanıcının adını verdiği projeyi ve bölümü aç; diğer projelere bakma.

## Proje yapısı

- Model şablonları: `knv, vdl, kbn, lym, mst, pyt, rts, ult` (yaml'da `sablon: true`). Müşteri projeleri: `<siparişno>-<MÜŞTERİ>-<MODEL>-<no>`.
- İçerik: `01-introduction` … `14-index` / `<NN-alt-bolum>/<dosya>.<dil>.md`; bölüm girişi `<bölüm>/<dosya>.<dil>.md`.
- `* DATA` (uzantısız) — makinenin **tek veri kaynağı (SSOT)**: `[BLOK]` başlıkları, `Anahtar: değer` satırları.
- `project.yaml` / `<proje>.yaml` — `proje_adi`, `model`, `diller`, `kapak` (baslik, rev, tarih, firma, hazirlayan), `cikti`, `revizyonlar`. Uygulama bu alanlara yazar; elle de düzenlenebilir.
- `assets/<bölüm-no>/` — görseller; `<görsel>.marks.json` = görsel üzerindeki numaralı işaretler. `sozluk.yaml` = projeye özel terimler.

## İş akışı

1. DATA'da yalnız ilgili `[BLOK]`u oku (`grep -n '^\[' "<DATA>"` → satır aralığı).
2. Hedef `.tr.md` dosyasını oku. **TR ana dildir**; EN/DE, TR ile **1:1** (aynı başlık, tablo, liste, görsel yapısı).
3. Yaz → aynı değişikliği `diller` listesindeki diğer dillere uygula.
4. Bölüm numarası için şablona değil projedeki mevcut başlıklara bak.

## Veri kuralları

- Değerler DATA'dan gelir; **uydurma yok**. Bilinmeyen → `[EKSİK]`. DATA ile `.md` çelişirse DATA esas, kullanıcıya bildir.
- **DATA'yı yer tutucuyla kullan** (değeri kopyalama): `{{ELEKTRIK:Besleme gerilimi (V)}}`; sütun: `{{MOTOR_SURUCU_LISTESI:Konveyör Redüktörü motoru#1}}`; blok tablosu kendi satırında: `{{TABLO:MOTOR_SURUCU_LISTESI}}` veya `{{TABLO:ELEKTRIK|Anahtar 1, Anahtar 2}}`.
- Sayısal değeri bölümler arasında tekrarlama; SSOT bölümüne referans ver. SSOT: LOTO, acil stop, KKD → **Bölüm 2**; tanım, teknik/tesisat tabloları, motor listesi, kontroller → **Bölüm 3**; bakım/yağlama → **Bölüm 9**; yedek parça BOM → **13.3**.

## Yazım stili (ISO 20607)

- **Prosedür:** emir kipi, aktif ses, numaralı adım, adım başına tek işlem. Alt adım = 3 boşluk girintili madde (1. → a.). Gruplar `**Kalın satır**` ile, numara kesintisiz.
- **Açıklayıcı metin:** tam paragraf — ne / neden / ne zaman / yapılmazsa ne olur.
- "Uygun / yeterli / gerekli" yok → somut değer. SI birim. Aynı parça için tek terim (`templates/sozluk.yaml`).
- Temel mühendislik eğitimi verme; kılavuz kapsamında kal.

## Başlıklar (zorunlu)

| Seviye | Markdown | Yazım | Örnek |
|---|---|---|---|
| Ana bölüm `X.` | `#` (bölüm giriş dosyası) | TAMAMI BÜYÜK | `# 2. GÜVENLİK` |
| Alt bölüm `X.Y` | `#` (alt bölüm dosyasının ilk başlığı) | Cümle başı | `# 2.4 Tehlikeli enerji kontrolü — LOTO` |
| `X.Y.Z` | `##` | Cümle başı | `## 2.4.1 Kapsam ve enerji kaynakları` |

- `X.Y.Z.W`, `###`, `####` **yasak** → kalın satır veya numaralı liste.

## Biçim kalıpları (renderer tanır — bozma)

- Uyarı: `**UYARI — <tehlike türü>:** <olası yaralanma>. <önleme>.` → renkli kutu. TR `TEHLİKE/UYARI/DİKKAT`, EN `DANGER/WARNING/CAUTION`, DE `GEFAHR/WARNUNG/VORSICHT`; not: `**NOT:**`. Yalnız o adıma özgü tehlikede; kopyalama.
- Çapraz referans: TR `**Bkz. Bölüm 2.4**`, EN `**See Chapter 2.4**`, DE `**Siehe Kapitel 2.4**` (numara projedeki başlıkla eşleşmeli; PDF'te sayfa no eklenir).
- Görsel: `![Açıklama](../../assets/<bölüm-no>/<dosya>.png)` — yol dosyanın derinliğine göre göreli. ISO 7010: `:W012:`.
- Tablo: standart Markdown; hücreler ortalı, `---:` sağa hizalar. Tablodan hemen önceki `Tablo: <başlık>` satırı numaralı başlık olur.
- Bölüm geçişlerinde `---`.

## Komutlar

- Yeni proje: `node scripts/new-project.js "1730000-XYZ-KNV 40" knv tr,en,de`.
- Eksik dil iskeleti: `node scripts/scaffold-lang.js en de` (`--force` yeniden yazar).
- Otomatik çeviri: `node scripts/translate-lang.js en --only 02-safety [--dry|--status]`.
- Başlık düzeltme: `scripts/fix-headings.py` (`ROOT` ALPER'e sabit — değiştir). Doğrulama: `node scripts/verify.js`.
- Toplu çıktı: `cd codes && npm run export -- "<proje>" tr,en pdf,html,docx,web`.
