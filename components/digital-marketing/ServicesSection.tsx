import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Search Engine Optimization",
      bgColor: "bg-[#FFF2B2]", // Yellow pastel
      hoverBg: "hover:bg-[#F2E59D]",
      titleColor: "text-[#735F00]",
      desc: "Dominasi hasil pencarian Google. Tingkatkan visibilitas organik institusi Anda untuk menarik calon mahasiswa yang aktif mencari program studi."
    },
    {
      number: "02",
      title: "Performance Ads",
      bgColor: "bg-[#D1F4E0]", // Green pastel
      hoverBg: "hover:bg-[#BAE8CE]",
      titleColor: "text-[#0D6634]",
      desc: "Kampanye iklan berbayar (PPC) super akurat di Google & Meta yang terfokus pada konversi, pendaftaran, dan Cost Per Acquisition (CPA) terendah."
    },
    {
      number: "03",
      title: "Social Media",
      bgColor: "bg-[#D6EDFF]", // Blue pastel
      hoverBg: "hover:bg-[#BFE0F7]",
      titleColor: "text-[#0F528C]",
      desc: "Bangun interaksi komunitas yang autentik dan tingkatkan *brand awareness* melalui manajemen konten media sosial yang konsisten."
    },
    {
      number: "04",
      title: "Content Marketing",
      bgColor: "bg-[#FFE2DB]", // Peach pastel
      hoverBg: "hover:bg-[#F2D1C9]",
      titleColor: "text-[#8C321C]",
      desc: "Otomatisasi *nurturing leads* melalui email marketing dan publikasi artikel untuk mempertahankan minat pendaftar hingga tahap akhir."
    }
  ];

  return (
    <section id="services" className="relative w-full bg-[#F8F9FA] py-16 lg:py-24 overflow-hidden scroll-mt-20">
      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1380px] mx-auto px-6 flex flex-col items-center">

        {/* Typography Heading Section */}
        <div className="max-w-3xl text-center mb-10">
          {/* Overline */}
          <div className="mb-6 inline-block">
            <span className="bg-[#D0E5FF] text-[#0A192F] font-mono text-[12px] md:text-[14px] tracking-wide font-bold px-4 py-1.5">
              Layanan Terintegrasi
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[32px] sm:text-4xl md:text-5xl font-serif font-normal text-[#0A192F] leading-[1.1] tracking-normal mb-5" style={{ WebkitTextStroke: "1.3px currentColor" }}>
            Ekosistem pemasaran digital <br className="hidden sm:block" /> yang terpadu
          </h2>

          {/* Description */}
          <p className="text-[#0A192F] text-[14px] md:text-[15px] leading-[1.6] max-w-[600px] mx-auto font-sans font-medium mb-2">
            Tidak perlu mencari spesialis yang berbeda-beda. Kami menyediakan seluruh instrumen *digital marketing* yang dibutuhkan institusi pendidikan Anda di bawah satu atap.
          </p>
        </div>

        {/* 4-Column Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 mt-4">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${svc.bgColor} ${svc.hoverBg} h-full min-h-[220px] transition-colors duration-300`}
            >
              {/* Header Title */}
              <div className="px-3 lg:px-4 pt-4 pb-3 border-b border-[#0A192F]/15">
                <h3 className={`font-serif text-[18px] md:text-[22px] ${svc.titleColor} font-normal tracking-normal leading-[1.1]`} style={{ WebkitTextStroke: "0.8px currentColor" }}>
                  {svc.number}. {svc.title}
                </h3>
              </div>

              {/* Content Description */}
              <div className="px-3 lg:px-4 py-5 flex-grow">
                <p className="text-[13px] md:text-[14px] font-sans text-[#0A192F] leading-[1.5] font-medium">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
