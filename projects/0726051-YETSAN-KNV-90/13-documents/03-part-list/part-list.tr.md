# 13.3 Parça listesi

Makine **yedek parça listesi (BOM)** bu kılavuza gömülüdür; ayrı evrak olarak **teslim edilmez**. Tam liste **13.3.1** tablosunda verilmiştir — başka bölümlerde yalnızca özet veya çapraz referans bulunur. Kaynak: **KNV 90 7500 ÜRÜN AĞACI.xlsm** (proje kökü) ve pano malzeme listesi; SSOT kopyası **0726051-YETSAN-KNV 90 PARCA LISTESI** dosyasıdır.

Ürün ağacında yer alan **10 18815 DOZAJ POMPASI DOSATRON** ve **10 04305 TEPE LAMBASI** kalemleri bu makinede **kullanılmamaktadır** ve listeye alınmamıştır.

---

## 13.3.1 Yedek parça tablosu (40 kalem)

**Kategori tanımları**

| Kategori | Anlam | Stok önerisi |
| :--- | :--- | :--- |
| **Kritik** | Arızada proses veya güvenlik durur; acil değişim gerekir | 0 = siparişle; ≥1 = sahada bulundur |
| **Önerilen** | Arızada performans düşer; planlı stok önerilir | Sahada 0–2 adet |
| **Tüketim** | Periyodik bakım/temizlikte tüketilir | Periyot ve tüketim hızına göre |

**Sipariş prosedürü**

1. **13.3.1** tablosundan **sipariş kodu** ve **parça adını** alın. "—" ile işaretli pano elemanlarında Schneider tip kodunu kullanın.
2. Siparişte model (**KNV-90**), seri no (**0726051**) ve adet belirtin — bkz. **1.3.4**.
3. Orijinal parça kullanın; muadil parça garanti ve güvenlik riski oluşturur.
4. [EKSİK] işaretli stok miktarları sipariş öncesi kullanıcı/onay tarafından doldurulur.

---

**Mekanik / proses (ürün ağacı)**

| Sipariş kodu | Parça adı | Kategori | Önerilen stok | Konum / fonksiyon | Gerekçe |
| :--- | :--- | :--- | :---: | :--- | :--- |
| 10 13529 | REDÜKTÖR MOTORLU XXC40/75 P63/B14 I LD TORK LİMİT (konveyör) | Kritik | 0 | Konveyör tahrik | Arızada parça akışı durur |
| 07 17686 | KNV 90 7500 2B POMPA KOMPLESİ | Kritik | 0 | Yıkama/durulama pompası | Arızada proses durur |
| 07 17683 | SALYANGOZLU FAN ENA 4 1,1 kW HAVA SOĞ. SİLİKONLU | Kritik | 0 | Egzoz / havalandırma | Arızada egzoz etkilenir |
| 07 04649 | YAĞ SIYIRICI KOMPLESİ TİP 3 MONTAJ | Kritik | 0 | TANK 1 yağ sıyırıcı | Arızada yağ sıyırıcı çalışmaz |
| 07 03635 | YAĞ AYIRICI ÜNİTESİ | Önerilen | 0 | Yağ ayırıcı | Proses kalitesi |
| 07 17682 | KNV 90 7500 2B HASSAS FİLTRE KOMPLESİ | Tüketim | 1 | Pompa çıkışı hassas (torba) filtre | Periyodik değişim |
| 07 10214 | ÖN FİLTRE NS KOMPLESİ | Tüketim | 2 | Tank ön filtre (6 ad montaj) | Günlük temizlik tüketimi |
| 07 00670 | EMİŞ FİLTRESİ KOMPLESİ (PYM2,KBN,VDL,ULT,KNV) | Tüketim | 1 | Pompa emiş | Periyodik değişim |
| 07 08732 | EMİŞ FİLTRESİ KOMPLESİ 2" 1/2 | Tüketim | 1 | Emiş hattı | Periyodik değişim |
| 07 15142 | REZİSTANS KOMPLESİ 8000 W 50 cm DÜZ DİKİŞSİZ | Kritik | 2 | Tank ısıtma (7 ad) | Arızada sıcaklık sağlanamaz |
| 07 16791 | SEVİYE SENSÖRÜ ÇAT.TİP VEGASWING 51 DİŞ ÇEKİLMİŞ | Kritik | 1 | Tank seviye (2 ad) | Arızada seviye güvenliği bozulur |
| 10 00296 | PASLANMAZ SEVİYE BEKÇİSİ | Kritik | 0 | Tank seviye güvenlik | [EKSİK] — ürün ağacında ayrı satır yok; saha montajına göre |
| 10 02976 | TERMOKUPL ETB30F06-5Ç | Kritik | 1 | Isıtma kontrol | Arızada ısıtma devre dışı |
| 10 02634 | TERMOKUPL ETB30F06-4Ç | Kritik | 1 | Isıtma kontrol | Arızada ısıtma devre dışı |
| 07 00669 | TERMOSTAT ADAPTÖRÜ KOMPLESİ | Önerilen | 1 | Tank termostat montajı | Bakım |
| 10 01079 | NOZZLE 650.724.1C.CC | Tüketim | 20 | Yıkama/durulama nozul (160 ad) | Aşınan parça |
| 10 17538 | TEL BANT 850 mm (konveyör zinciri) | Tüketim | 0 | Konveyör | Aşınma — stok [EKSİK] |
| 07 17689 | KNV 90 7500 2B KURUTMA KOMPLESİ | Kritik | 0 | Kurutma hücresi | Arızada kurutma yok |
| 07 17687 | KNV 90 7500 2B SIZINTI TAVASI MONTAJ KOMPLESİ | Önerilen | 0 | Alt sızıntı tavası | Sızıntı algılama |

![Yıkama hücresi — nozul kolektörleri (10 01079 nozul)](../../assets/13.3/nozul-borulari.jpg)

**Elektrik / güvenlik (ürün ağacı + pano)**

| Sipariş kodu | Parça adı | Kategori | Önerilen stok | Konum / fonksiyon | Gerekçe |
| :--- | :--- | :--- | :---: | :--- | :--- |
| 10 07147 | SWITCH F3STGRNLPU21M1J8 OMRON MANYETİK KAPI | Kritik | 2 | 7 bakım kapağı (ağaçta 5 ad) | Güvenlik zinciri; arızada stop |
| 10 02896 | BUTON ACİL P1EC400E40K SARI-SİYAH PL.KUTU | Kritik | 2 | Saha acil stop | Güvenlik |
| 10 00220 | EMNİYET RÖLESİ G9SB2002AACDC241 OMRON G9SX | Kritik | 1 | Acil stop zinciri | Bypass edilemez |
| 10 11531 | EMNİYET RÖLESİ G9SB2002AACDC241 OMRON G9SX (kapak) | Kritik | 1 | Kapak switch zinciri | Bypass edilemez |
| 10 16319 | İNVERTÖR Delta VFD004EL21W-1 0,4 kW (konveyör) | Kritik | 0 | Konveyör | Arızada konveyör durur |
| 10 00305 | SIGORTA KAÇAK AKIMLI A9N19642 4P | Önerilen | 0 | Motor grubu / kurutma RCCB | Koruma |
| 10 00304 | SIGORTA KAÇAK AKIMLI A9N19643 4P | Önerilen | 0 | Tank rezistans RCCB | Koruma |
| 10 00258 | FAZ KORUMA RÖLESİ MKR-01 | Kritik | 1 | Pano giriş | Faz hatası koruması |
| 10 11089 | TERMOSTAT GEMO DTH2 (ısıtma) | Önerilen | 1 | Yıkama/durulama/kurutma | Sıcaklık ayarı |
| 10 00272 | RESET BUTONU BL901M + mavi lamba | Önerilen | 1 | Operatör paneli | Reset fonksiyonu |

**Pano koruma elemanları (MKŞ / kontaktör / sigorta — yedek set önerisi)**

| Sipariş kodu | Parça adı | Kategori | Önerilen stok | Konum / fonksiyon | Gerekçe |
| :--- | :--- | :--- | :---: | :--- | :--- |
| 10 01421 | Sigorta A9F74106 1×6 (konveyör/inverter besleme) | Önerilen | 2 | Pano | Koruma |
| — | MKŞ Schneider GV2ME16 (9–14 A) — yıkama pompası | Önerilen | 1 | Q1 — PE02 | Motor koruma |
| — | MKŞ Schneider GV2ME14 (6–10 A) — durulama / blower | Önerilen | 2 | Q2, Q7–Q10 — PE04 / FE04–07 | Motor koruma |
| — | MKŞ Schneider GV2ME07 (1,6–2,5 A) — fan | Önerilen | 2 | Q4–Q6 — FE01–FE03 | Motor koruma |
| — | MKŞ Schneider GV2ME04 (0,4–0,63 A) — yağ sıyırıcı | Önerilen | 1 | Q3 — GE06 | Motor koruma |
| — | Kontaktör LC1K1610M7 (16 A 220 V) | Önerilen | 2 | Pompalar / blower / tank ısıtıcı | Yedek |
| — | Kontaktör LC1K0610M7 (6 A 220 V) | Önerilen | 2 | Fan / yağ sıyırıcı | Yedek |
| — | Kontaktör LC1D25M7 (25 A 220 V) | Önerilen | 1 | Kurutma ısıtıcı | Yedek |
| — | Sigorta A9F74316 (16 A) — tank ısıtıcı | Önerilen | 3 | R01–R07 | Koruma |
| — | Sigorta A9F74325 (25 A) — kurutma ısıtıcı | Önerilen | 2 | R21–R22 | Koruma |
| — | TMŞ LV521091 (CVS250F 250 A) + kapı kolu LV521101 | Kritik | 0 | Ana güç | Arızada tüm pano |

---

## 13.3.2 Kılavuz çapraz referansları

| Konu | Referans |
| :--- | :--- |
| Kritik parçalar (operasyonel özet) | **9.1.5** |
| Tüketim / önerilen yedek parça | **9.1.6** |
| Tam BOM | Bu bölüm — **13.3.1** |
| Periyodik bakım / filtre periyotları | **9.1.3**, **10.1** |
| Temizlikte kullanılan filtreler | **10.1.3**, **10.1.4** |
| Arıza — MKŞ / kontaktör / RCCB | **11.1.3**, **11.3** |
| Arıza — rezistans / termokupl / termostat | **11.3.3**, **11.7.3** |
| Arıza — kapak switch'i / seviye sensörü | **11.7.1**, **11.7.2** |
| Yedek parça siparişi | **1.3.4** |

**Aşınan parça:** kategori = **Tüketim** satırları (filtreler, nozul, tel bant) aşınan/tüketilen parçaları kapsar.
