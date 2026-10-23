# 13.2 Çizimler ve elektrik şeması

## 13.2.1 Çizim listesi

{{TABLO:CIZIMLER}}

## 13.2.2 Elektrik şemasının içeriği

Elektrik şeması EPLAN ile hazırlanmış, 15 sayfalık bir şemadır. Şema aynı model ailesindeki bir makine için hazırlanmış referans şemadır; bu makineye göre farkları Bölüm 13.2.5'te verilmiştir.

Tablo: Elektrik şeması sayfa listesi

| Sayfa | İçerik |
|---:|---|
| 1 | Şebeke beslemesi, ana şalter, faz koruma rölesi, F1 kaçak akım rölesi, kumanda devresi sigortaları (F6–F9), 24 V DC güç kaynağı |
| 2 | Sepet motoru sürücüsü (F5, frekans invertörü, sepet motoru M1), yıkama pompası (Q1, K1, M2) |
| 3 | Durulama pompası (Q2, K2, M3), kurutma fanı (Q3, K3, M4), egzoz fanı (Q4, K4, M5) |
| 4 | Yıkama ısıtıcıları 1 ve 2 (F2 kaçak akım, F10, F11, K5, K6) |
| 5 | Durulama ısıtıcıları 1 ve 2 (F3 kaçak akım, F12, F13, K7, K8), kurutma ısıtıcısı (F4 kaçak akım, F14, K9) |
| 6 | PLC, termokupl giriş ünitesi ve operatör paneli bağlantıları |
| 7 | PLC çıkışları Q0.0–Q0.7 ve ara röleler R1–R8 |
| 8 | PLC çıkışları Q1.0–Q1.7 ve ara röleler R9–R16 |
| 9 | PLC çıkışları Q2.0–Q2.3 ve ara röleler R17–R20 |
| 10 | Kontaktör bobinleri K1–K9 (220 V AC) |
| 11 | Tahliye vanası valfleri, kule lambası ve kapı valfi kumandası (24 V DC) |
| 12 | PLC girişleri I0.0–I1.2 |
| 13 | PLC girişleri I1.3–I2.1 |
| 14 | Termokupl bağlantıları (J tipi; yıkama, durulama, kurutma) |
| 15 | Acil durdurma devresi ve güvenlik rölesi (RESET butonu ve reset lambası) |

## 13.2.3 PLC giriş listesi

{{TABLO:PLC_GIRISLER}}

## 13.2.4 PLC çıkış listesi

{{TABLO:PLC_CIKISLAR}}

## 13.2.5 Referans şema ile bu makine arasındaki farklar

Bu makinede referans elektrik şemasında bulunmayan veya farklı olan aşağıdaki donanımlar vardır. Elektrik panosunda çalışmadan önce bu farkları dikkate alın; bu makineye özel elektrik şeması için üreticiye başvurun.

- **Drenaj pompası:** Makinede drenaj pompası ve motor koruma şalteri vardır (operatör panelinde **Drenaj Pompa Termik**, Error-106); referans şemada yoktur.
- **Yağ sıyırıcı motor koruması:** Operatör panelinde **Sıyırıcı Termik** sinyali ve Error-130 vardır; referans şemada yağ sıyırıcı çıkışı (Q0.5) opsiyonel olarak gösterilmiş, motor koruma girişi gösterilmemiştir.
- **Motor koruma şalterleri:** Panoda Q1–Q6 olmak üzere altı motor koruma şalteri vardır; referans şemada Q1–Q4 gösterilmiştir.
- **Kabin lambası:** Operatör panelinden kumanda edilen kabin lambası referans şemada gösterilmemiştir.
- **Isıtıcı güçleri:** Tank ısıtıcıları ürün ağacında 8000 W, referans şemada 8250 W'tır (**Bkz. Bölüm 3.3.6**).
- **Kurutma fanı gücü:** Ürün ağacında 0,37 kW, referans şemada 0,75 kW'tır (**Bkz. Bölüm 3.3.5**).
- **Seri numarası:** Referans şemanın antetinde başka bir makinenin seri numarası yazılıdır.
