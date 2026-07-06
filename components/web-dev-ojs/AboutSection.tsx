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
      <div className="container mx-auto px-4 max-w-4xl mb-24 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-serif text-[#1a1a1a] mb-4 tracking-tight leading-[1.1]">
          Pendekatan unik <br />
          <span className="inline-block bg-[#FF5722] text-white px-5 pb-1 pt-2 -rotate-2 mt-2 transform hover:scale-105 transition-transform cursor-default font-serif italic tracking-wider">
            NusaEducation
          </span>
        </h2>
        <p className="text-[#1a1a1a] font-medium text-[15px] lg:text-[17px] max-w-3xl mx-auto leading-relaxed mt-8">
          Pipeline OJS kami menghidupkan ekosistem publikasi Anda. Kami menghubungkan alur editorial, keamanan, dan indeksasi menjadi satu aliran yang cerdas — <strong className="text-[#1a1a1a]">mengubah cara karya Anda disebarkan ke dunia.</strong>
        </p>
        <p className="mt-8 font-bold text-[#1a1a1a] text-[15px]">
          Setiap instalasi diberdayakan oleh ekosistem kapabilitas kami:
        </p>
      </div>

      {/* Diagram Area */}
      <div ref={sectionRef} className="container mx-auto px-4 max-w-6xl relative">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-16 lg:gap-20 relative z-10">
          
          {/* COLUMN 1: Context Layer */}
          <div className={`w-full lg:w-[26%] relative transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0ms' }}>
            <div className="inline-block bg-[#FF5722] text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-widest mb-2 border border-orange-700/50">
              FOUNDATION LAYER
            </div>
            <h3 className="text-[2.5rem] font-serif text-[#1a1a1a] mb-4 tracking-tight leading-none">OJS Core</h3>
            <p className="text-[#1a1a1a] font-medium text-[13px] leading-relaxed mb-6">
              Sistem dasar dipadukan dengan standar jurnal unik Anda—menerapkan keahlian teknis khusus untuk memastikan setiap jurnal berjalan cepat, relevan, dan <strong className="font-bold">sesuai standar.</strong>
            </p>
            
            {/* Segmented Rainbow Bar — animated color shift */}
            <div className="flex w-full h-5 border-[1.5px] border-[#1a1a1a] mb-6 relative overflow-hidden">
              <div className="animate-rainbow-shift flex w-[200%] h-full">
                <div className="flex-1 bg-[#F472B6]"></div>
                <div className="flex-1 bg-[#FACC15]"></div>
                <div className="flex-1 bg-[#4ADE80]"></div>
                <div className="flex-1 bg-[#3B82F6]"></div>
                <div className="flex-1 bg-[#A855F7]"></div>
                <div className="flex-1 bg-[#F472B6]"></div>
                <div className="flex-1 bg-[#FACC15]"></div>
                <div className="flex-1 bg-[#4ADE80]"></div>
                <div className="flex-1 bg-[#3B82F6]"></div>
                <div className="flex-1 bg-[#A855F7]"></div>
              </div>
            </div>

            {/* Animated Dashed Connecting Line from Rainbow Bar to Center Box */}
            <div className="hidden lg:block absolute right-[-80px] top-[300px] w-[80px] h-[2px] z-10">
              <svg width="80" height="2" className="overflow-visible">
                <line x1="0" y1="1" x2="80" y2="1" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="6 6" className="animate-flow" />
              </svg>
            </div>
            
            {/* Blocky Tags */}
            <div className="flex flex-col gap-1.5 items-start">
              <span className="bg-[#93C5FD] text-[#1a1a1a] font-bold text-xs px-2 py-1 shadow-sm flex items-center justify-between w-full">Standar SINTA <span className="font-normal">&rarr;</span></span>
              <span className="bg-[#3B82F6] text-white font-bold text-xs px-2 py-1 shadow-sm flex items-center justify-between w-full">Keamanan SSL <span className="font-normal">&rarr;</span></span>
              <span className="bg-[#2563EB] text-white font-bold text-xs px-2 py-1 shadow-sm flex items-center justify-between w-full">Optimasi DB <span className="font-normal">&rarr;</span></span>
              <span className="bg-[#1D4ED8] text-white font-bold text-xs px-2 py-1 shadow-sm flex items-center justify-between w-full">LiteSpeed <span className="font-normal">&rarr;</span></span>
            </div>
          </div>

          {/* COLUMN 2: Content Pipeline */}
          <div className={`w-full lg:w-[44%] relative mt-8 lg:mt-0 p-6 lg:p-8 overflow-visible transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            {/* Bracket-style dashed border — animated flowing dashes */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              {/* Left vertical line */}
              <svg className="absolute left-0 top-0 w-[2px] h-full" preserveAspectRatio="none">
                <line x1="1" y1="0" x2="1" y2="100%" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="8 6" className="animate-flow-vertical" />
              </svg>
              {/* Right vertical line */}
              <svg className="absolute right-0 top-0 w-[2px] h-full" preserveAspectRatio="none">
                <line x1="1" y1="0" x2="1" y2="100%" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="8 6" className="animate-flow-vertical" />
              </svg>
              {/* Top-left corner tick */}
              <svg className="absolute top-0 left-0 w-5 h-[2px]">
                <line x1="0" y1="1" x2="20" y2="1" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="8 6" className="animate-flow" />
              </svg>
              {/* Top-right corner tick */}
              <svg className="absolute top-0 right-0 w-5 h-[2px]">
                <line x1="0" y1="1" x2="20" y2="1" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="8 6" className="animate-flow" />
              </svg>
              {/* Bottom-left corner tick */}
              <svg className="absolute bottom-0 left-0 w-5 h-[2px]">
                <line x1="0" y1="1" x2="20" y2="1" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="8 6" className="animate-flow" />
              </svg>
              {/* Bottom-right corner tick */}
              <svg className="absolute bottom-0 right-0 w-5 h-[2px]">
                <line x1="0" y1="1" x2="20" y2="1" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="8 6" className="animate-flow" />
              </svg>
            </div>

            {/* Flowing Dots Effect — data flowing from center to results */}
            <div className="hidden lg:block absolute right-[-80px] top-[300px] -translate-y-1/2 w-[80px] h-[120px] z-0 overflow-visible">
              {/* Horizontal dashed line */}
              <svg width="80" height="2" className="absolute top-1/2 -translate-y-1/2">
                <line x1="0" y1="1" x2="80" y2="1" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="6 5" className="animate-flow" />
              </svg>
              {/* Flowing dots */}
              <div className="absolute inset-0 flex items-center">
                <div className="dot-flow dot-1"></div>
                <div className="dot-flow dot-2"></div>
                <div className="dot-flow dot-3"></div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-4xl lg:text-[2.5rem] font-serif text-[#1a1a1a] mb-4 tracking-tight leading-none text-left">
                Proses Setup
              </h3>
              <p className="text-[#1a1a1a] font-medium text-[13px] leading-relaxed mb-8 text-left">
                Pipeline yang menghubungkan alat teknis untuk mengeksekusi—meningkatkan skala publikasi tanpa kehilangan kendali atau kualitas.
              </p>

              {/* Stacked Solid Blocks */}
              <div className="space-y-3 flex-grow">
                <div className="bg-[#FFA8A8] w-full py-1.5 relative flex items-center justify-center overflow-hidden cursor-default">
                  <div className="absolute top-1.5 left-2 text-[#1a1a1a]/30">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="font-serif text-[3.5rem] text-[#1a1a1a] tracking-tighter leading-none py-2">Theme</span>
                </div>
                
                <div className="bg-[#FDF07B] w-full py-1.5 relative flex items-center justify-center overflow-hidden cursor-default">
                  <div className="absolute top-1.5 left-2 text-[#1a1a1a]/30">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <span className="font-serif text-[4rem] text-[#1a1a1a] tracking-tight leading-none py-2">Plugin</span>
                </div>
                
                <div className="bg-[#B8F2CC] w-full py-1.5 relative flex items-center justify-center overflow-hidden cursor-default">
                  <div className="absolute top-1.5 left-2 text-[#1a1a1a]/30">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <span className="font-serif text-[3.8rem] text-[#1a1a1a] tracking-tight leading-none py-2">Crossref</span>
                </div>
                
                <div className="bg-[#A5D8FF] w-full py-1.5 relative flex items-center justify-center overflow-hidden cursor-default">
                  <div className="absolute top-1.5 left-2 text-[#1a1a1a]/30">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <span className="font-serif text-[4rem] text-[#1a1a1a] tracking-tighter leading-none py-2">Indeks</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 3: Results */}
          <div className={`w-full lg:w-[26%] mt-8 lg:mt-0 flex flex-col justify-start transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            <div className="inline-block bg-[#FF5722] text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-widest mb-2 border border-orange-700/50 self-start">
              RESULTS
            </div>
            <h3 className="text-[2.5rem] font-serif text-[#1a1a1a] mb-3 tracking-tight leading-none">Jurnal Dunia</h3>
            <p className="text-[#1a1a1a] font-medium text-[13px] leading-relaxed mb-8">
              Hasilkan lebih banyak—dan lebih baik—karya ilmiah dalam waktu singkat, dengan kekacauan 0%.
            </p>

            <div className="w-full h-px bg-gray-300 mb-4" />

            {/* Infinite Vertical Scroll List */}
            <div className="relative h-[220px] overflow-hidden pl-1">
              <div className="animate-scroll-up">
                {scrollItems.map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 text-[#1a1a1a] font-mono font-bold text-[13px] tracking-wide py-2 pl-1"
                  >
                    <div className={`w-3.5 h-3.5 ${item.color} rotate-45 flex-shrink-0 border-[1.5px] border-[#1a1a1a]`} />
                    {item.label}
                  </div>
                ))}
              </div>
              {/* Fade overlays */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-10" />
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flow {
          to { stroke-dashoffset: -22; }
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
        @keyframes dot-travel {
          0% { left: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 72px; opacity: 0; }
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
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-rainbow-shift {
          animation: rainbow-shift 8s linear infinite;
        }
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-up {
          animation: scroll-up 20s linear infinite;
        }
      `}} />
    </section>
  );
}
