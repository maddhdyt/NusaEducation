"use client";
import React, { useState } from 'react';

function InteractiveGridBackground() {
  const cols = 90;
  const rows = 80;
  const squares = Array.from({ length: cols * rows }, (_, i) => i);

  return (
    <div className="absolute inset-0 z-0 bg-white pointer-events-auto">
      <style dangerouslySetInnerHTML={{__html: `
        .interactive-grid-cell {
          width: 24px;
          height: 18px;
          background-color: #FFFFFF;
          opacity: 0;
          transition: opacity 0.8s ease-out;
          box-sizing: border-box;
          flex-shrink: 0;
          border: 0.5px solid transparent;
        }
        .interactive-grid-cell:hover {
          opacity: 1;
          transition: opacity 0s;
        }
      `}} />
      <div
        className="w-full h-full relative overflow-hidden bg-blue-50"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 150px, black calc(100% - 150px), transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 150px, black calc(100% - 150px), transparent)'
        }}
      >
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#FFFFFF 1.5px, transparent 1.5px), linear-gradient(90deg, #FFFFFF 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 18px'
          }}
        ></div>

        <div className="absolute inset-0 z-20 flex flex-wrap" style={{ alignContent: 'flex-start', width: '2160px' }}>
          {squares.map((sq) => (
            <div key={sq} className="interactive-grid-cell" />
          ))}
        </div>
      </div>
    </div>
  );
}

import { Search, MousePointerClick, Globe, Smartphone, Share2, Megaphone } from 'lucide-react';

export default function PricingSection() {
  const [category, setCategory] = useState<'search' | 'social'>('search');

  const packages = {
    search: [
      {
        name: "SEO Organic",
        desc: "Optimasi mesin pencari untuk trafik organik jangka panjang tanpa biaya klik.",
        icon: <Search className="w-10 lg:w-12 h-10 lg:h-12 text-[#FF9F1C]" strokeWidth={1.5} />,
        features: ["Audit SEO Menyeluruh", "Riset Keyword Akademik", "On-Page & Off-Page SEO", "Pembuatan Artikel Rutin", "Laporan Peringkat Bulanan"]
      },
      {
        name: "Google Ads (PPC)",
        desc: "Kampanye iklan berbayar di Google untuk menjaring calon mahasiswa berintensi tinggi.",
        icon: <MousePointerClick className="w-10 lg:w-12 h-10 lg:h-12 text-[#FF9F1C]" strokeWidth={1.5} />,
        features: ["Setup Google Search Ads", "Optimasi Landing Page", "A/B Testing Copywriting", "Manajemen Bidding & Budget", "Laporan CPA Transparan"]
      },
      {
        name: "Search Dominance",
        desc: "Kombinasi SEO dan Ads untuk mendominasi seluruh halaman pertama hasil pencarian.",
        icon: <Globe className="w-10 lg:w-12 h-10 lg:h-12 text-[#FF9F1C]" strokeWidth={1.5} />,
        features: ["Semua Fitur SEO Organic", "Semua Fitur Google Ads", "Sinergi Keyword Efisien", "Strategi Retargeting Web", "Dedicated Account Manager"]
      }
    ],
    social: [
      {
        name: "Social Management",
        desc: "Kelola identitas visual dan interaksi harian di platform media sosial institusi Anda.",
        icon: <Smartphone className="w-10 lg:w-12 h-10 lg:h-12 text-[#FF9F1C]" strokeWidth={1.5} />,
        features: ["Perencanaan Content Plan", "Desain Visual & Copywriting", "Penjadwalan Publikasi", "Manajemen Interaksi & DM", "Laporan Engagement Bulanan"]
      },
      {
        name: "Meta & TikTok Ads",
        desc: "Kampanye iklan visual untuk membangun awareness dan menjaring pendaftaran massal.",
        icon: <Share2 className="w-10 lg:w-12 h-10 lg:h-12 text-[#FF9F1C]" strokeWidth={1.5} />,
        features: ["Setup Meta & TikTok Ads", "Pengembangan Aset Kreatif", "Penargetan Demografi Akurat", "Optimasi Video & Carousel", "Laporan Cost Per Lead (CPL)"]
      },
      {
        name: "Social Ecosystem",
        desc: "Integrasi manajemen organik dan iklan berbayar untuk dominasi audiens Gen-Z.",
        icon: <Megaphone className="w-10 lg:w-12 h-10 lg:h-12 text-[#FF9F1C]" strokeWidth={1.5} />,
        features: ["Semua Fitur Management", "Semua Fitur Social Ads", "Kampanye Viral & Interaktif", "Bantuan Produksi Video/Reels", "Dedicated Account Manager"]
      }
    ]
  };

  const currentPackages = packages[category];

  return (
    <section id="pricing" className="relative w-full py-16 lg:py-32 overflow-hidden scroll-mt-20">

      {/* Background Interactive Grid */}
      <InteractiveGridBackground />

      <div className="relative z-30 w-full max-w-[1380px] mx-auto px-6 flex flex-col items-center pointer-events-none">

        {/* Header */}
        <div className="text-center mb-10 pointer-events-none">
          <div className="inline-block px-1.5 py-0.5 mb-6 text-[12px] md:text-[13px] font-bold tracking-wide text-[#0A192F] bg-[#D0E5FF] font-mono uppercase">
            Model Kerjasama
          </div>
          <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[74px] font-serif text-[#0A192F] mb-6 leading-[1.05] md:leading-[0.95] tracking-tight max-w-6xl mx-auto" style={{ WebkitTextStroke: "1px currentColor" }}>
            Investasi fleksibel sesuai<br />fokus saluran pemasaran
          </h2>
          <p className="text-[#0A192F] max-w-[550px] mx-auto font-sans font-medium text-[16px] md:text-[18px] leading-snug">
            Setiap institusi unik. Pilih fokus pemasaran Anda, dan kami akan menyesuaikan strategi kampanye untuk menekan biaya akuisisi mahasiswa serendah mungkin.
          </p>
        </div>

        {/* Toggle Button */}
        <div className="flex bg-white mb-16 relative pointer-events-auto">
          <button
            onClick={() => setCategory('search')}
            className={`px-3 sm:px-4 py-4 font-sans font-bold text-[15px] sm:text-[16px] transition-colors duration-300 ${category === 'search' ? 'bg-[#FF9F1C] text-white' : 'bg-white text-[#0A192F] hover:bg-slate-50'}`}
          >
            Search Marketing
          </button>
          <button
            onClick={() => setCategory('social')}
            className={`px-3 sm:px-4 py-4 font-sans font-bold text-[15px] sm:text-[16px] transition-colors duration-300 ${category === 'social' ? 'bg-[#FF9F1C] text-white' : 'bg-white text-[#0A192F] hover:bg-slate-50'}`}
          >
            Social Media Ads
          </button>
        </div>

        {/* 3-Column Pricing Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pointer-events-none">
          {currentPackages.map((pkg, idx) => (
            <div key={idx} className="bg-white border border-[#0A192F]/5 flex flex-col pointer-events-auto p-6 lg:p-8">

              {/* Top Row: Title + Logo */}
              <div className="flex flex-row items-center justify-between mb-5 gap-3">
                <h3 className="text-[24px] lg:text-[26px] xl:text-[28px] font-serif text-[#0A192F] font-normal tracking-tight leading-[1.1]" style={{ WebkitTextStroke: "0.7px currentColor" }}>{pkg.name}</h3>
                <div className="h-10 lg:h-14 flex shrink-0 items-center justify-end">
                  {pkg.icon}
                </div>
              </div>

              {/* Separator */}
              <hr className="border-t border-[#0A192F]/20 mb-5" />

              {/* Description */}
              <p className="text-[14px] lg:text-[15px] text-[#0A192F] font-sans font-medium leading-relaxed mb-6 h-[60px]">{pkg.desc}</p>

              {/* CTA Button */}
              <a 
                href={`https://wa.me/6285121117589?text=${encodeURIComponent(`Halo NusaEducation, saya tertarik untuk mengetahui lebih lanjut mengenai Model Kerjasama Digital Marketing: ${pkg.name}. Bisa berikan informasi detailnya?`)}`}
                target="_blank" rel="noopener noreferrer"
                className="conversion [&>*]:pointer-events-none self-start bg-[#FF9F1C] text-white px-5 py-3 font-bold font-sans hover:bg-[#ff9500] transition-colors mb-6 text-[14px] lg:text-[15px]"
              >
                Konsultasi Gratis
              </a>

              {/* Includes Header */}
              <div className="text-[14px] text-[#0A192F] font-medium mb-4">Layanan mencakup:</div>

              {/* Features List */}
              <ul className="space-y-2.5 flex-grow">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start font-medium gap-2.5">
                    <svg className="w-[18px] h-[18px] text-[#FF9F1C] shrink-0 mt-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
