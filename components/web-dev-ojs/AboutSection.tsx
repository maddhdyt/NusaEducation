'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '100px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    // Fallback: ensure visibility if observer doesn't trigger (e.g. already in viewport)
    const fallback = setTimeout(() => setIsVisible(true), 500);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const resultItems = [
    { label: "Lolos Indeksasi", color: "bg-[#A855F7]" },
    { label: "Scopus Ready", color: "bg-[#4ADE80]" },
    { label: "Auto-Assign DOI", color: "bg-[#FACC15]" },
    { label: "SEO / AEO / GEO", color: "bg-[#F87171]" },
    { label: "Bebas Spam & Error", color: "bg-[#60A5FA]" },
    { label: "Analytics Mudah", color: "bg-[#A855F7]" },
    { label: "Tampilan Custom", color: "bg-[#4ADE80]" },
    { label: "Multi-Bahasa", color: "bg-[#FACC15]" },
    { label: "Auto Sitemap", color: "bg-[#F87171]" },
    { label: "DOAJ Ready", color: "bg-[#60A5FA]" },
  ];

  const scrollItems = [...resultItems, ...resultItems];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden font-sans border-t border-gray-100">
      {/* Header */}
      <div className="container mx-auto px-4 max-w-4xl mb-16 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-[3.75rem] font-serif text-[#1a1a1a] mb-6 tracking-tight leading-[1.15]" style={{ WebkitTextStroke: "1px currentColor" }}>
          Standar OJS baru dari <br />
          <span className="text-[#FF9F1C]">
            Nusa Education
          </span>
        </h2>
        <p className="text-[#1a1a1a] font-medium text-[15px] lg:text-[17px] max-w-3xl mx-auto leading-snug mt-8">
          Kami mendefinisikan ulang bagaimana OJS seharusnya dibangun. Dari optimasi server hingga kepatuhan indeksasi global, semuanya dirancang dalam satu alur sistematis. <strong className="text-[#1a1a1a]">Bukan sekadar website, melainkan mesin publikasi yang siap beroperasi.</strong>
        </p>
      </div>

      {/* Diagram Area */}
      <div ref={sectionRef} className="w-full max-w-6xl mx-auto px-6 relative mt-16 lg:mt-24">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-16 lg:gap-12 relative z-10">

          {/* COLUMN 1: Context Layer */}
          <div className={`w-full lg:w-[26%] relative transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0ms' }}>
            <div className="lg:h-[200px] flex flex-col justify-start">
              <div className="inline-block bg-[#FF9F1C] text-white text-[14px] font-medium uppercase tracking-tight mb-2 self-start leading-tight px-0.5">
                FOUNDATION LAYER
              </div>
              <h3 className="text-[2.5rem] font-serif text-[#1a1a1a] mb-4 tracking-tight leading-none" style={{ WebkitTextStroke: "1.2px currentColor" }}>OJS Core</h3>
              <p className="text-[#1a1a1a] font-medium text-[13px] leading-snug mb-0 lg:pr-8">
                Semuanya berawal dari instalasi yang bersih dan kokoh. Kami mengoptimalkan database dan keamanan server sejak hari pertama agar jurnal Anda <strong className="font-bold">bebas lag, aman, dan stabil.</strong>
              </p>
            </div>

            {/* Segmented Rainbow Bar — seamless loop using repeating-linear-gradient */}
            <div className="w-full h-5 border-[1.5px] border-[#1a1a1a] mb-6 relative overflow-hidden">
              <div
                className="absolute inset-0 animate-rainbow-shift"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      to right,
                      #3B82F6 0px, #3B82F6 40px,
                      #8B5CF6 40px, #8B5CF6 80px,
                      #F43F5E 80px, #F43F5E 120px,
                      #F59E0B 120px, #F59E0B 160px,
                      #10B981 160px, #10B981 200px
                    )
                  `,
                  backgroundSize: '200px 100%',
                  width: 'calc(100% + 200px)',
                }}
              />
            </div>

            {/* Animated Dashed Connecting Line from Rainbow Bar to Center Box */}
            <div className="hidden lg:block absolute right-[-48px] top-[210px] -translate-y-1/2 w-[48px] h-[3px] z-10">
              <svg width="48" height="3" className="overflow-visible">
                <line x1="0" y1="1.5" x2="48" y2="1.5" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="14 14" className="animate-flow" />
              </svg>
            </div>

            {/* Blocky Tags */}
            <div className="flex flex-col gap-1.5 items-start mt-2">
              <span className="bg-[#93C5FD] text-[#0a192f] font-mono font-semibold text-[16px] tracking-wide px-3 py-1 w-max cursor-default">Standar SINTA</span>
              <span className="bg-[#3B82F6] text-white font-mono font-semibold text-[16px] tracking-wide px-3 py-1 w-max cursor-default">Keamanan SSL</span>
              <span className="bg-[#2563EB] text-white font-mono font-semibold text-[16px] tracking-wide px-3 py-1 w-max cursor-default">Optimasi DB</span>
              <span className="bg-[#1D4ED8] text-white font-mono font-semibold text-[16px] tracking-wide px-3 py-1 w-max cursor-default">LiteSpeed</span>
            </div>
          </div>

          {/* COLUMN 2: Content Pipeline */}
          <div className={`w-full lg:w-max lg:max-w-[380px] relative mt-8 lg:mt-0 p-6 lg:px-6 lg:py-5 overflow-visible transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            {/* Bracket-style dashed border — animated flowing dashes */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              {/* Left vertical line (Splits outward from 210px) */}
              <svg className="absolute left-0 top-0 w-[3px] h-full overflow-visible" preserveAspectRatio="none">
                <line x1="1.5" y1="210" x2="1.5" y2="0" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="14 14" className="animate-flow-vertical" />
                <line x1="1.5" y1="210" x2="1.5" y2="100%" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="14 14" className="animate-flow-vertical" />
              </svg>
              {/* Right vertical line (Converges inward to 210px) */}
              <svg className="absolute right-0 top-0 w-[3px] h-full overflow-visible" preserveAspectRatio="none">
                <line x1="1.5" y1="0" x2="1.5" y2="210" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="14 14" className="animate-flow-vertical" />
                <line x1="1.5" y1="100%" x2="1.5" y2="210" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="14 14" className="animate-flow-vertical" />
              </svg>
              {/* Top-left corner tick */}
              <svg className="absolute top-0 left-0 w-5 h-[3px] overflow-visible">
                <line x1="0" y1="1.5" x2="20" y2="1.5" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="14 14" className="animate-flow" />
              </svg>
              {/* Top-right corner tick */}
              <svg className="absolute top-0 right-0 w-5 h-[3px] overflow-visible">
                <line x1="0" y1="1.5" x2="20" y2="1.5" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="14 14" className="animate-flow" />
              </svg>
              {/* Bottom-left corner tick */}
              <svg className="absolute bottom-0 left-0 w-5 h-[3px] overflow-visible">
                <line x1="0" y1="1.5" x2="20" y2="1.5" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="14 14" className="animate-flow" />
              </svg>
              {/* Bottom-right corner tick */}
              <svg className="absolute bottom-0 right-0 w-5 h-[3px] overflow-visible">
                <line x1="0" y1="1.5" x2="20" y2="1.5" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="14 14" className="animate-flow" />
              </svg>
            </div>

            {/* Flowing Dots Effect — data flowing from center to results */}
            <div className="hidden lg:block absolute right-[-48px] top-[210px] -translate-y-1/2 w-[48px] h-[120px] z-0 overflow-visible">
              {/* Horizontal dashed line with Smooth Black Dot */}
              <svg width="48" height="3" className="absolute top-1/2 -translate-y-1/2 overflow-visible">
                {/* Base Dashed Track */}
                <line x1="0" y1="1.5" x2="48" y2="1.5" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="14 14" className="animate-flow" />

                {/* Smooth Traveling Black Dot */}
                <circle cx="0" cy="1.5" r="3" fill="#1a1a1a">
                  <animate attributeName="cx" from="0" to="48" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.15; 0.85; 1" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>

            </div>

            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-4xl lg:text-[2.5rem] font-serif text-[#1a1a1a] mb-4 tracking-tight leading-none text-left" style={{ WebkitTextStroke: "1.2px currentColor" }}>
                Alur Eksekusi
              </h3>
              <p className="text-[#1a1a1a] font-medium text-[13px] leading-snug mb-8 text-left lg:max-w-[280px]">
                Mulai dari kustomisasi tampilan hingga integrasi plugin krusial. Setiap tahapan dieksekusi secara presisi untuk memastikan jurnal Anda memenuhi standar akreditasi tanpa kerumitan teknis.
              </p>

              {/* Stacked Solid Blocks */}
              <div className="space-y-3 lg:space-y-4 flex-grow flex flex-col items-start mt-4 relative z-10">

                {/* 1. Theme */}
                <div className="group flex items-start cursor-pointer w-max">
                  <div className="bg-[#F04438] w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center shrink-0 relative z-20 transition-transform duration-300 group-hover:scale-[1.15]">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="flex flex-col justify-start">
                    {/* State 1: Big Text (Collapses) */}
                    <div className="grid transition-all duration-300 ease-in-out grid-rows-[1fr] group-hover:grid-rows-[0fr]">
                      <div className="min-h-0 overflow-visible">
                        <div className="bg-[#FFD2CC] px-3 lg:px-4 py-0 flex items-center transform scale-x-[0.8] origin-left transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                          <span className="font-serif text-[4rem] md:text-[4.75rem] lg:text-[5.5rem] text-[#1a1a1a] leading-[0.85] font-normal" style={{ WebkitTextStroke: "0.4px currentColor", fontStretch: "ultra-condensed" }}>Theme</span>
                        </div>
                      </div>
                    </div>
                    {/* State 2: Detail Box (Expands) */}
                    <div className="grid transition-all duration-300 ease-in-out grid-rows-[0fr] group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <div className="bg-[#FFF5F4] px-4 py-3 w-[260px] transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex flex-col">
                          <p className="text-[#0a192f] font-medium text-[13.5px] leading-snug mb-2">
                            Membangun identitas visual jurnal Anda dengan desain profesional, responsif, dan standar akademis global.
                          </p>
                          <a href="#" className="text-[#F04438] font-medium text-[13.5px] flex items-center gap-1 hover:underline w-max">
                            Kustomisasi Theme <span className="font-normal">&rarr;</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Plugin */}
                <div className="group flex items-start cursor-pointer w-max">
                  <div className="bg-[#A6A928] w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center shrink-0 relative z-20 transition-transform duration-300 group-hover:scale-[1.15]">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div className="flex flex-col justify-start">
                    {/* State 1: Big Text (Collapses) */}
                    <div className="grid transition-all duration-300 ease-in-out grid-rows-[1fr] group-hover:grid-rows-[0fr]">
                      <div className="min-h-0 overflow-visible">
                        <div className="bg-[#FDF07B] px-3 lg:px-4 py-0 flex items-center transform scale-x-[0.8] origin-left transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                          <span className="font-serif text-[4rem] md:text-[4.75rem] lg:text-[5.5rem] text-[#1a1a1a] leading-[0.85] font-normal" style={{ WebkitTextStroke: "0.4px currentColor", fontStretch: "ultra-condensed" }}>Plugin</span>
                        </div>
                      </div>
                    </div>
                    {/* State 2: Detail Box (Expands) */}
                    <div className="grid transition-all duration-300 ease-in-out grid-rows-[0fr] group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <div className="bg-[#FEFCE8] px-4 py-3 w-[260px] transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex flex-col">
                          <p className="text-[#0a192f] font-medium text-[13.5px] leading-snug mb-2">
                            Integrasi fitur krusial seperti statistik, antispam, dan tools editorial otomatis untuk efisiensi workflow.
                          </p>
                          <a href="#" className="text-[#A6A928] font-medium text-[13.5px] flex items-center gap-1 hover:underline w-max">
                            Eksplorasi Plugin <span className="font-normal">&rarr;</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Crossref */}
                <div className="group flex items-start cursor-pointer w-max">
                  <div className="bg-[#338A2E] w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center shrink-0 relative z-20 transition-transform duration-300 group-hover:scale-[1.15]">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div className="flex flex-col justify-start">
                    {/* State 1: Big Text (Collapses) */}
                    <div className="grid transition-all duration-300 ease-in-out grid-rows-[1fr] group-hover:grid-rows-[0fr]">
                      <div className="min-h-0 overflow-visible">
                        <div className="bg-[#CDEAC9] px-3 lg:px-4 py-0 flex items-center transform scale-x-[0.8] origin-left transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                          <span className="font-serif text-[4rem] md:text-[4.75rem] lg:text-[5.5rem] text-[#1a1a1a] leading-[0.85] font-normal" style={{ WebkitTextStroke: "0.4px currentColor", fontStretch: "ultra-condensed" }}>Crossref</span>
                        </div>
                      </div>
                    </div>
                    {/* State 2: Detail Box (Expands) */}
                    <div className="grid transition-all duration-300 ease-in-out grid-rows-[0fr] group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <div className="bg-[#F0FDF4] px-4 py-3 w-[260px] transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex flex-col">
                          <p className="text-[#0a192f] font-medium text-[13.5px] leading-snug mb-2">
                            Sistem automasi DOI dan metadata deposition yang menjamin setiap artikel terhubung secara permanen.
                          </p>
                          <a href="#" className="text-[#338A2E] font-medium text-[13.5px] flex items-center gap-1 hover:underline w-max">
                            Lihat Integrasi <span className="font-normal">&rarr;</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Indeks */}
                <div className="group flex items-start cursor-pointer w-max">
                  <div className="bg-[#1565C0] w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center shrink-0 relative z-20 transition-transform duration-300 group-hover:scale-[1.15]">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div className="flex flex-col justify-start">
                    {/* State 1: Big Text (Collapses) */}
                    <div className="grid transition-all duration-300 ease-in-out grid-rows-[1fr] group-hover:grid-rows-[0fr]">
                      <div className="overflow-hidden">
                        <div className="bg-[#A8D7FA] px-3 lg:px-4 py-0 flex items-center transform scale-x-[0.8] origin-left transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                          <span className="font-serif text-[4rem] md:text-[4.75rem] lg:text-[5.5rem] text-[#1a1a1a] leading-[0.85] font-normal" style={{ WebkitTextStroke: "0.4px currentColor", fontStretch: "ultra-condensed" }}>Indeks</span>
                        </div>
                      </div>
                    </div>
                    {/* State 2: Detail Box (Expands) */}
                    <div className="grid transition-all duration-300 ease-in-out grid-rows-[0fr] group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <div className="bg-[#EFF6FF] px-4 py-3 w-[260px] transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex flex-col">
                          <p className="text-[#0a192f] font-medium text-[13.5px] leading-snug mb-2">
                            Kepatuhan penuh pada standar metadata untuk meloloskan jurnal ke Google Scholar, DOAJ, hingga Scopus.
                          </p>
                          <a href="#" className="text-[#1565C0] font-medium text-[13.5px] flex items-center gap-1 hover:underline w-max">
                            Pelajari Indeksasi <span className="font-normal">&rarr;</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* COLUMN 3: Results */}
          <div className={`w-full lg:w-[30%] mt-8 lg:mt-0 flex flex-col justify-start transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            <div className="inline-block bg-[#FF9F1C] text-white text-[14px] font-medium uppercase tracking-tight mb-2 self-start leading-tight px-0.5">
              RESULTS
            </div>
            <h3 className="text-[2.5rem] font-serif text-[#1a1a1a] mb-3 tracking-tight leading-none" style={{ WebkitTextStroke: "1.2px currentColor" }}>Siap Rilis</h3>
            <p className="text-[#1a1a1a] font-medium text-[13px] leading-snug mb-8">
              Hasil akhirnya? Jurnal profesional yang siap menerima naskah, lolos indeksasi awal, dan memberikan impresi terbaik bagi para author Anda.
            </p>

            <div className="w-full h-px bg-gray-300" />

            {/* Infinite Vertical Scroll List */}
            <div className="relative h-[360px] overflow-hidden pl-1 pt-4">
              <div className="animate-scroll-down">
                {scrollItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 text-[#0a192f] font-mono font-medium text-[17px] tracking-[0.03em] py-2 pl-1"
                    style={{ WebkitTextStroke: "0.3px currentColor" }}
                  >
                    <div className={`w-[17px] h-[17px] ${item.color} rotate-45 flex-shrink-0 border-[1.9px] border-[#0a192f]`} />
                    {item.label}
                  </div>
                ))}
              </div>
              {/* Fade overlays */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none z-10" />
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes flow {
          to { stroke-dashoffset: -28; }
        }
        .animate-flow {
          animation: flow 0.8s linear infinite;
        }
        @keyframes flow-vertical {
          to { stroke-dashoffset: -28; }
        }
        .animate-flow-vertical {
          animation: flow-vertical 1.2s linear infinite;
        }
        @keyframes data-flow {
          0% { transform: translateX(0) scale(0.5); opacity: 0; }
          20% { transform: translateX(10px) scale(1); opacity: 1; }
          80% { transform: translateX(38px) scale(1); opacity: 1; }
          100% { transform: translateX(48px) scale(0.5); opacity: 0; }
        }
        .dot-flow {
          position: absolute;
          width: 5px;
          height: 5px;
          background: #1a1a1a;
          border-radius: 50%;
          animation: dot-travel 2.4s ease-in-out infinite;
        }
        .dot-1 { animation-delay: 0s; }
        .dot-2 { animation-delay: 0.8s; }
        .dot-3 { animation-delay: 1.6s; }
        @keyframes rainbow-shift {
          0% { transform: translateX(-200px); }
          100% { transform: translateX(0); }
        }
        .animate-rainbow-shift {
          animation: rainbow-shift 8s linear infinite;
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-down {
          animation: scroll-down 25s linear infinite;
        }
      `}} />
    </section>
  );
}
