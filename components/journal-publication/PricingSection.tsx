"use client";
import React, { useState } from 'react';

function GridCell() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '24px',
        height: '18px',
        backgroundColor: '#FFFFFF', // Light up to pure white
        opacity: isHovered ? 1 : 0,
        transition: isHovered ? 'opacity 0s' : 'opacity 0.8s ease-out',
      }}
      className="box-border shrink-0 cursor-default border-[0.5px] border-transparent"
    />
  );
}

function InteractiveGridBackground() {
  const cols = 90;
  const rows = 80;
  const squares = Array.from({ length: cols * rows }, (_, i) => i);

  return (
    <div className="absolute inset-0 z-0 bg-white pointer-events-auto">
      <div
        className="w-full h-full relative overflow-hidden bg-blue-50"
        style={{
          // Fade out the grid at the top and bottom so it blends seamlessly
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 150px, black calc(100% - 150px), transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 150px, black calc(100% - 150px), transparent)'
        }}
      >
        {/* Grid Lines Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#FFFFFF 1.5px, transparent 1.5px), linear-gradient(90deg, #FFFFFF 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 18px'
          }}
        ></div>

        {/* Hover Cells Area */}
        <div className="absolute inset-0 z-20 flex flex-wrap" style={{ alignContent: 'flex-start', width: '2160px' }}>
          {squares.map((sq) => (
            <GridCell key={sq} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [category, setCategory] = useState<'nasional' | 'internasional'>('nasional');

  const packages = {
    nasional: [
      {
        name: "National Basic",
        desc: "Langkah awal publikasi untuk jurnal nasional non-SINTA.",
        logo: "https://ik.imagekit.io/yqhp1cmbp/image%201140.png",
        features: ["Evaluasi kelayakan naskah", "Penyesuaian format selingkung", "Cek similarity (Turnitin)", "Pendampingan submit OJS", "Garansi terbit Scholar / Garuda"]
      },
      {
        name: "SINTA Regular",
        desc: "Solusi terpadu untuk jurnal nasional terakreditasi menengah.",
        logo: "https://ik.imagekit.io/yqhp1cmbp/Group%202659.png",
        features: ["Proofreading bahasa standar", "Revisi minor substansi", "Formatting template SINTA", "Korespondensi dengan editor", "Garansi terbit SINTA 3 - 6"]
      },
      {
        name: "SINTA Premium",
        desc: "Pendampingan intensif eksklusif untuk menembus SINTA 2.",
        logo: "https://ik.imagekit.io/yqhp1cmbp/Group%202658.png",
        features: ["Review substansi mendalam", "Professional proofreading", "Rebuttal letter assistance", "Pendampingan revisi intensif", "Garansi terbit SINTA 2"]
      }
    ],
    internasional: [
      {
        name: "DOAJ & Copernicus",
        desc: "Langkah awal menembus publikasi tingkat global.",
        logo: "https://ik.imagekit.io/yqhp1cmbp/image%201128.png",
        features: ["Translate tersumpah", "Native proofreading", "Penyesuaian standar global", "Submit & korespondensi", "Garansi Index Copernicus/DOAJ"]
      },
      {
        name: "Scopus Q3 & Q4",
        desc: "Publikasi jurnal bereputasi tinggi skala internasional.",
        logo: "https://ik.imagekit.io/yqhp1cmbp/image%201141.png",
        features: ["Review kelayakan Q3/Q4", "Native proofreading premium", "Formatting jurnal Scopus", "Rebuttal letter expert", "Pendampingan hingga LoA"]
      },
      {
        name: "Scopus Q1 & Q2",
        desc: "Top-tier journal publication untuk guru besar.",
        logo: "https://ik.imagekit.io/yqhp1cmbp/image%201141.png",
        features: ["Pra-review profesor sebidang", "Editing substansi menyeluruh", "Native advance proofreading", "Strategic journal targeting", "High-priority support"]
      }
    ]
  };

  const currentPackages = packages[category];

  return (
    <section id="pricing" className="relative w-full py-20 lg:py-32 overflow-hidden scroll-mt-20">

      {/* Background Interactive Grid */}
      <InteractiveGridBackground />

      <div className="relative z-30 w-full max-w-[1380px] mx-auto px-6 flex flex-col items-center pointer-events-none">

        {/* Header */}
        <div className="text-center mb-10 pointer-events-none">
          <h2 className="text-[48px] sm:text-[64px] md:text-[74px] font-serif text-[#0A192F] mb-6 leading-[0.95] max-w-6xl mx-auto" style={{ WebkitTextStroke: "1.2px currentColor" }}>
            Pilih paket pendampingan sesuai<br />target jurnal Anda
          </h2>
          <p className="text-[#0A192F] max-w-[500px] mx-auto font-sans font-medium text-[16px] md:text-[18px] leading-snug">
            Konsultasikan naskah Anda, dan tim kami akan menyusun strategi terbaik agar riset Anda terbit tepat waktu.
          </p>
        </div>

        {/* Toggle Button */}
        <div className="flex bg-white mb-16 relative pointer-events-auto shadow-sm">
          <button
            onClick={() => setCategory('nasional')}
            className={`px-3 sm:px-4 py-4 font-sans font-bold text-[15px] sm:text-[16px] transition-colors duration-300 ${category === 'nasional' ? 'bg-[#FF9F1C] text-white' : 'bg-white text-[#0A192F] hover:bg-slate-50'}`}
          >
            Jurnal Nasional
          </button>
          <button
            onClick={() => setCategory('internasional')}
            className={`px-3 sm:px-4 py-4 font-sans font-bold text-[15px] sm:text-[16px] transition-colors duration-300 ${category === 'internasional' ? 'bg-[#FF9F1C] text-white' : 'bg-white text-[#0A192F] hover:bg-slate-50'}`}
          >
            Jurnal Internasional
          </button>
        </div>

        {/* 3-Column Pricing Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pointer-events-none">
          {currentPackages.map((pkg, idx) => (
            <div key={idx} className="bg-white border border-[#0A192F]/5 flex flex-col pointer-events-auto p-6 lg:p-8">

              {/* Top Row: Title + Logo */}
              <div className="flex flex-row items-center justify-between mb-5 gap-3">
                <h3 className="text-[22px] lg:text-[24px] xl:text-[26px] font-serif text-[#0A192F] font-normal tracking-tight leading-[1.1]" style={{ WebkitTextStroke: "0.7px currentColor" }}>{pkg.name}</h3>
                <div className="h-10 lg:h-14 flex shrink-0 items-center justify-end">
                  <img src={pkg.logo} alt="Journal Logo" className="h-full w-auto object-contain max-w-[110px] xl:max-w-[130px]" />
                </div>
              </div>

              {/* Separator */}
              <hr className="border-t border-[#0A192F]/20 mb-5" />

              {/* Description */}
              <p className="text-[14px] lg:text-[15px] text-[#0A192F] font-sans font-medium leading-relaxed mb-6">{pkg.desc}</p>

              {/* CTA Button */}
              <button className="self-start bg-[#FF9F1C] text-white px-4 py-3 font-bold font-sans hover:bg-[#ff9500] transition-colors mb-4 text-[14px] lg:text-[15px]">
                Contact Sales
              </button>

              {/* Includes Header */}
              <div className="text-[14px] text-[#0A192F] font-medium mb-4">Plan includes:</div>

              {/* Features List */}
              <ul className="space-y-2 flex-grow">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start font-medium gap-2.5">
                    <svg className="w-[16px] h-[16px] text-[#FF9F1C] shrink-0 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[14px] text-[#0A192F] leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
