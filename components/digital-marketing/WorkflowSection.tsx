import React from 'react';

export default function WorkflowSection() {
  const cards = [
    {
      cardBg: "bg-[#EBFCDF]", // Light green
      titleBg: "bg-[#257513]", // Dark green
      titleColor: "text-white",
      title: "Strategi pemasaran berbasis data",
      desc: "Keputusan kampanye tidak didasarkan pada asumsi, melainkan analisis mendalam terhadap perilaku audiens akademik dan tren penerimaan."
    },
    {
      cardBg: "bg-[#DDEBFF]", // Light blue
      titleBg: "bg-[#0621A6]", // Dark blue
      titleColor: "text-white",
      title: "Optimalisasi anggaran transparan",
      desc: "Alokasikan dana pemasaran Anda secara efisien ke saluran yang terbukti menghasilkan ROI tinggi dan biaya akuisisi (CPA) terendah."
    },
    {
      cardBg: "bg-[#FFDFD6]", // Light pink/peach
      titleBg: "bg-[#FA745E]", // Coral/Salmon
      titleColor: "text-[#0A192F]", // Very dark navy
      title: "Peningkatan pendaftaran terukur",
      desc: "Dari metrik sekadar impresi beralih ke hasil nyata. Fokus utama kami adalah meningkatkan rasio konversi hingga audiens benar-benar mendaftar."
    }
  ];

  return (
    <section id="keunggulan" className="py-16 md:py-32 bg-white relative overflow-hidden scroll-mt-20">
      <div className="max-w-[1380px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Top Centered Header */}
        <div className="flex flex-col items-center text-center max-w-[700px] mb-16">
          <div className="inline-block px-2 py-0.5 mb-6 text-[13px] font-bold tracking-wide text-[#0A192F] bg-[#FFF2B2] font-mono">
            Keunggulan Kami
          </div>
          <h2 className="text-[32px] sm:text-[38px] md:text-[56px] font-serif font-normal text-[#0A192F] leading-[1.1] md:leading-[1.05] tracking-tight mb-6" style={{ WebkitTextStroke: "0.5px currentColor" }}>
            Agensi digital spesialisasi <br className="hidden md:block" /> pendidikan & publikasi
          </h2>
        </div>

        {/* 3-Column Use Cases Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className={`flex flex-col ${card.cardBg} p-6 md:p-8 h-full transition-transform duration-300 hover:-translate-y-2`}>
              
              {/* Solid Color Title Block (Flush edges) */}
              <div className={`w-full ${card.titleBg} px-1 pt-1 pb-1 md:pb-2 mb-6`}>
                <h3 
                  className={`font-serif ${card.titleColor} text-[34px] md:text-[40px] leading-[0.95] tracking-tighter font-normal`}
                  style={{ WebkitTextStroke: "0.3px currentColor" }}
                >
                  {card.title}
                </h3>
              </div>
              
              {/* Description Text */}
              <p className="text-[#0A192F] text-[15px] md:text-[16px] leading-relaxed font-medium">
                {card.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
