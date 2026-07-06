import React from 'react';

export default function BenefitsSection() {
  const steps = [
    {
      number: "01",
      title: "Persiapan",
      bgColor: "bg-[#FFF2B2]", // Yellow pastel
      hoverBg: "hover:bg-[#F2E59D]",
      titleColor: "text-[#735F00]",
      desc: "Evaluasi naskah awal dan pencocokan dengan scope jurnal tujuan untuk memastikan probabilitas terbit yang tinggi."
    },
    {
      number: "02",
      title: "Proofreading",
      bgColor: "bg-[#D1F4E0]", // Green pastel
      hoverBg: "hover:bg-[#BAE8CE]",
      titleColor: "text-[#0D6634]",
      desc: "Penyempurnaan tata bahasa akademik (native proofreading) dan penyesuaian format selingkung secara presisi."
    },
    {
      number: "03",
      title: "Submit",
      bgColor: "bg-[#D6EDFF]", // Blue pastel
      hoverBg: "hover:bg-[#BFE0F7]",
      titleColor: "text-[#0F528C]",
      desc: "Proses pengiriman naskah dilakukan transparan bersama pendamping khusus hingga berstatus Under Review."
    },
    {
      number: "04",
      title: "Revisi",
      bgColor: "bg-[#FFE2DB]", // Peach pastel
      hoverBg: "hover:bg-[#F2D1C9]",
      titleColor: "text-[#8C321C]",
      desc: "Pendampingan penuh merespons komentar reviewer (rebuttal letter) secara komprehensif, cepat, dan profesional."
    },
    {
      number: "05",
      title: "Terbit",
      bgColor: "bg-[#E5E0FF]", // Purple pastel
      hoverBg: "hover:bg-[#D4CEF2]",
      titleColor: "text-[#402C99]",
      desc: "Pengawalan tahap akhir hingga mendapatkan Letter of Acceptance (LoA) dan naskah resmi terindeks Scopus/SINTA."
    }
  ];

  return (
    <section id="benefits" className="relative w-full bg-white py-16 lg:py-24 overflow-hidden scroll-mt-20">
      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1380px] mx-auto px-6 flex flex-col items-center">

        {/* Typography Heading Section */}
        <div className="max-w-3xl text-center mb-10">
          {/* Overline */}
          <div className="mb-6 inline-block">
            <span className="bg-[#FCE7F3] text-[#0A192F] font-mono text-[12px] md:text-[14px] tracking-wide font-bold px-4 py-1.5">
              Alur Publikasi Terpadu
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[32px] sm:text-4xl md:text-5xl font-serif font-normal text-[#0A192F] leading-[1.1] tracking-normal mb-5" style={{ WebkitTextStroke: "1.3px currentColor" }}>
            Built to run publication <br className="hidden sm:block" /> as a system
          </h2>

          {/* Description */}
          <p className="text-[#0A192F] text-[14px] md:text-[15px] leading-[1.6] max-w-[600px] mx-auto font-sans font-medium mb-2">
            Setiap naskah ditangani secara terspesialisasi di setiap tahapannya—mulai dari evaluasi awal, <i className="font-serif">proofreading</i>, hingga revisi. Daripada sekadar mengirim draf dan menunggu tanpa kepastian, Nusa Education memberikan sistem pendampingan yang terkoordinasi penuh.
          </p>

          <div className="font-sans font-bold text-[#0A192F] text-[14px] md:text-[15px]">
            Pendampingan Nusa Education dipetakan langsung ke Alur Publikasi:
          </div>
        </div>

        {/* 5-Column Cards Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${step.bgColor} ${step.hoverBg} h-full min-h-[200px] ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              {/* Header Title */}
              <div className="px-2 lg:px-3 pt-3 pb-3 border-b border-[#0A192F]/15">
                <h3 className={`font-serif text-[16px] md:text-[24px] ${step.titleColor} font-normal tracking-normal leading-[1.1]`} style={{ WebkitTextStroke: "0.8px currentColor" }}>
                  {step.number}. {step.title}
                </h3>
              </div>

              {/* Content Description */}
              <div className="px-3 lg:px-5 py-4 flex-grow">
                <p className="text-[12px] md:text-[14px] font-sans text-[#0A192F] leading-[1.4] font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
