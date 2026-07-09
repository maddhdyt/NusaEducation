import React from 'react';
import { Check } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Kampanye spesifik, bukan sekadar template",
      description: "Sampaikan pesan yang terpersonalisasi untuk calon mahasiswa atau penulis jurnal berdasarkan data demografi dan minat spesifik."
    },
    {
      title: "Skalabilitas cepat dengan efisiensi anggaran",
      description: "Fokus pada channel (saluran) yang terbukti menghasilkan konversi tertinggi, menghindari eksperimen pemasaran yang mahal dan tidak terukur."
    },
    {
      title: "Konsistensi reputasi di setiap titik kontak",
      description: "Pastikan setiap materi iklan, landing page, dan interaksi digital tetap menjaga wibawa dan standar akademis institusi Anda."
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-32 bg-white w-full scroll-mt-20">
      <div className="max-w-[1380px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Heading and Context */}
        <div className="flex flex-col items-start max-w-[550px]">
          {/* Eyebrow Label */}
          <div className="inline-block px-1.5 py-0.5 mb-3 text-[12px] font-bold tracking-wide text-[#0A192F] bg-[#D0E5FF] font-mono">
            Growth & ROI (Efisiensi)
          </div>
          
          {/* Main Title (Slightly thickened with stroke) */}
          <h2 className="text-[34px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-serif text-[#0A192F] leading-[1.05] md:leading-[0.95] tracking-tight md:tracking-tighter mb-5" style={{ WebkitTextStroke: "0.6px currentColor" }}>
            Tingkatkan pendaftaran <br className="hidden md:block" />
            tanpa menguras <br className="hidden md:block" />
            tenaga dan anggaran
          </h2>
          
          {/* Description (Shortened to ~2 lines) */}
          <p className="text-[#0A192F] text-[14px] md:text-[15px] font-medium leading-snug max-w-[480px]">
            Hentikan pemborosan pada kampanye yang terlalu umum. Capai interaksi dan konversi lebih tinggi melalui strategi pemasaran berbasis data.
          </p>
        </div>

        {/* Right Column: Benefits List */}
        <div className="flex flex-col gap-8 md:gap-10 lg:pt-1">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Check Icon Container (Square, No rounded) */}
              <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-none bg-[#D0E5FF] text-[#0A192F] flex items-center justify-center">
                <Check className="w-3.5 h-3.5" strokeWidth={2} />
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-[17px] md:text-[19px] font-bold text-[#0A192F] mb-1.5 leading-tight tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-[#475569] text-[14px] leading-relaxed max-w-[480px]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
