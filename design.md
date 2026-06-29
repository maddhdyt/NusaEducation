# NusaEducation Design System

Dokumen ini merangkum *design system* dan pedoman visual (*visual guidelines*) yang telah diterapkan secara komprehensif pada pembuatan *Home Page*. Semua pengembangan halaman baru (Layanan, Portfolio, Tentang Kami, dsb) **wajib** mengacu pada panduan ini demi menjaga konsistensi estetika "Modern Premium" dan "Soft Brutalism" yang terinspirasi dari standar desain Jasper.ai.

## 1. Core Aesthetic (Estetika Utama)
- **Vibe**: Profesional, berani (*bold*), bersih (*clean*), namun memiliki sentuhan agresif dan dinamis.
- **Spaciousness (Ruang Nafas)**: Jangan pelit *padding*! Gunakan jarak vertikal yang masif antar *section* (contoh: `py-16 md:py-24 lg:py-32`) agar tata letak tidak terasa sesak.
- **Scale (Skala)**: Berani menggunakan elemen dengan ukuran raksasa di *desktop* (misal: tinggi elemen pahlawan/grafik mencapai `750px` hingga `850px`) untuk memberi kesan mendominasi layar.

## 2. Typography (Tipografi)
- **Headings (H1, H2, H3)**:
  - Wajib menggunakan `font-serif`.
  - Spasi huruf rapat: `tracking-tight`.
  - Jarak baris padat: `leading-[1.0]` atau maksimal `leading-[1.1]`.
  - Warna: Sangat gelap, seperti `#000033` atau `#0A192F`.
  - *Secret Weapon*: Untuk judul-judul berukuran masif (seperti `text-[64px]` atau `text-[68px]`), tambahkan `style={{ WebkitTextStroke: "0.8px currentColor" }}` untuk memberikan ilusi ketebalan (*boldness*) ekstra yang sangat tajam dan presisi.
- **Body Text (p, span)**:
  - Wajib menggunakan `font-sans`.
  - Warna: Abu-abu elegan seperti `#475569` atau `#334155`.
  - Jarak baris rileks: `leading-relaxed`.

## 3. Color Palette (Palet Warna)
- **Backgrounds**: `#FFFFFF` (Putih bersih) dan `#F8F9FA` atau `#F1F5F9` (Abu-abu terang) yang dipasang selang-seling antar *section* untuk memecah kebosanan.
- **Primary Text**: `#000033` (Navy sangat gelap, nyaris hitam).
- **Brand Accents**:
  - **Vibrant Orange**: `#FF9F1C` (Digunakan mutlak untuk elemen CTA / tombol. *Hover*: `#ff9500`).
  - **Deep Green**: `#0B3A1C` (Digunakan mutlak untuk elemen grafis SVG / lingkaran raksasa).

## 4. Distinctive Visual Elements (Elemen Visual Khas)
- **Pixelated Masks (Topeng Piksel)**: Gambar tidak boleh dibiarkan berbentuk kotak polos biasa. Gunakan teknik *masking* 2D (seperti matriks `[1,1,0]` dalam React) untuk membuat tepian gambar berbentuk tangga/piksel raksasa yang asimetris.
- **Massive Geometric SVGs**: Gunakan elemen grafis berbasis SVG (misal susunan lingkaran berdiameter `100px+`) yang bertindak sebagai *layouter* utama.
- **Screen Bleeding (Menembus Layar)**: Elemen grafis diperbolehkan (dan disarankan) untuk sengaja ditarik keluar batas layar (contoh: `left-[-250px]`) agar terpotong oleh tepi *browser*, menciptakan ilusi ruang yang lebih luas.
- **Perfect Alignment**: Elemen grafis yang bersisian secara horizontal (misalnya blok teks/SVG di kiri, dan foto di kanan) **harus** memiliki rata atas (`top-0`) dan/atau rata bawah yang sempurna matematis.

## 5. Components (Komponen)
- **Buttons (Tombol)**: 
  - Bersudut tajam atau sangat sedikit membulat.
  - Padding tebal: `px-8 py-3.5`.
  - Teks tebal: `font-semibold tracking-wide`.
  - *No drop-shadows*, cukup transisi warna *hover* yang tegas.
- **Custom Cursor**: Semua halaman wajib diapit oleh komponen `<CustomCursor />` (titik hitam dengan lingkaran cincin interaktif) untuk memperkuat kesan *modern premium SaaS*.

## 6. Responsiveness (Adaptasi Layar)
- **Mobile-First Padding**: Teks pada *mobile* harus selalu memiliki ruang aman (misal `px-6`).
- **Stacking**: Pada *mobile*, gambar/grafik harus rela ditumpuk (mengecil) atau disembunyikan sama sekali (`hidden lg:block`) jika merusak keterbacaan tipografi.
- **Text Scaling**: Gunakan lonjakan ukuran teks yang dramatis. Contoh: dari `text-[36px]` di *mobile* langsung melompat ke `text-[68px]` di *desktop*. Jangan menggunakan ukuran tanggung.

---
*Catatan: Dokumen ini adalah "kitab suci" desain untuk pengembangan rute dan fitur NusaEducation berikutnya. Pastikan setiap komponen baru terasa sebagai satu keluarga yang sama dengan Home Page.*
