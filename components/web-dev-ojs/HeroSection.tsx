"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative w-full pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden"
      style={{ backgroundColor: '#FFFDF9' }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-20 relative">
        
        {/* Eyebrow Badge */}
        <div className="inline-block px-1 mb-3 text-sm font-semibold text-[#E68A00] bg-[#FF9F1C]/10">
          Jasa Web Dev & Setup OJS
        </div>

        {/* Big Serif Headline */}
        <h1 className="text-4xl md:text-6xl font-serif text-[#0A192F] tracking-normal leading-[1.1] max-w-5xl mx-auto mb-8" style={{ WebkitTextStroke: "1.2px currentColor" }}>
          Platform OJS yang mengangkat jurnal Anda dari biasa menjadi luar biasa.
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <Link 
            href="#portfolio" 
            className="w-full sm:w-auto px-6 py-3 bg-[#FFFDF9] relative z-20 text-[#0A192F] font-medium text-[16px] border border-[#0A192F]/20 hover:bg-[#0A192F] hover:text-white transition-colors"
          >
            Lihat Portofolio
          </Link>
          <Link 
            href="#pricing" 
            className="w-full sm:w-auto px-6 py-3 bg-[#FF9F1C] text-white font-medium text-[16px] hover:bg-[#E68A00] border border-[#FF9F1C] transition-all hover:-translate-y-0.5"
          >
            Buat OJS
          </Link>
        </div>

      </div>

      {/* PREMIUM GRAPHIC AREA */}
      <div className="w-full max-w-6xl mx-auto mt-16 relative h-[650px] flex items-center justify-center z-10">
        
        {/* Background Ambient Glows & Wireframes (Masked to fade smoothly at edges) */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none"
          style={{ maskImage: 'radial-gradient(closest-side, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(closest-side, black 40%, transparent 100%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] border border-[#0A192F]/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-[#0A192F]/20 rounded-full border-dashed" />
        </div>

        {/* Central Composition */}
        <div className="relative w-full h-full max-w-[1200px] flex items-center justify-center">
          
          {/* Masked Group for Arch and Person */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)' }}
          >
            {/* The Arch (Background behind person) */}
            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[460px] h-[580px] rounded-t-full bg-gradient-to-br from-[#0A192F] to-[#112240] shadow-[0_30px_60px_-15px_rgba(10,25,47,0.5)] border-[6px] border-white z-10 overflow-hidden pointer-events-auto">
              {/* Arch Inner Glow & Pattern */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-white rounded-full blur-[100px] opacity-15" />
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            </div>

            {/* GAMBAR ORANG */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] z-20 pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              <img 
                src="https://ik.imagekit.io/yqhp1cmbp/image1114.webp" 
                alt="Web Dev Expert" 
                className="w-full h-auto object-contain object-bottom"
              />
            </div>
          </div>

          {/* FLOATING WIDGET 1: DOI & Crossref */}
          <div className="absolute left-[2%] lg:left-[8%] top-[25%] w-[250px] bg-white/80 backdrop-blur-xl border border-white rounded-2xl p-5 shadow-[0_20px_50px_-10px_rgba(30,58,138,0.15)] z-30 animate-float-1">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-900/5 border border-blue-900/10 flex items-center justify-center text-blue-900 shadow-inner">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <span className="font-bold text-sm text-blue-900">DOI Crossref</span>
              </div>
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-900"></span>
              </span>
            </div>
            <div className="space-y-2.5">
              <div className="flex justify-between text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <span>Auto-assigning</span>
                <span className="text-blue-900">100%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden border border-gray-200/50">
                <div className="bg-gradient-to-r from-blue-700 to-blue-900 h-full rounded-full w-full relative">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4zKSIvPjwvc3ZnPg==')] opacity-30" />
                </div>
              </div>
            </div>
          </div>

          {/* FLOATING WIDGET 2: SINTA */}
          <div className="absolute right-[2%] lg:right-[10%] top-[15%] w-[240px] bg-white/80 backdrop-blur-xl border border-white rounded-2xl p-4 shadow-[0_20px_50px_-10px_rgba(14,165,233,0.15)] z-30 animate-float-2">
            <div className="flex flex-col gap-3">
              <div className="h-20 rounded-xl bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] border border-[#BAE6FD]/50 flex items-center justify-center relative overflow-hidden shadow-inner">
                <img 
                  src="https://ik.imagekit.io/yqhp1cmbp/sinta%20(1).png" 
                  alt="SINTA Logo" 
                  className="h-12 w-auto object-contain relative z-10 drop-shadow-sm"
                />
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0ea5e9 2px, transparent 2px)', backgroundSize: '12px 12px' }} />
                <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-[#0ea5e9] rounded-full blur-xl opacity-20" />
              </div>
              <div className="flex items-center justify-between px-1">
                <span className="font-bold text-[13px] text-[#0A192F]">Akreditasi Jurnal</span>
                <span className="px-2.5 py-1 bg-cyan-100/80 text-cyan-700 rounded-md text-[10px] font-extrabold tracking-wider border border-cyan-200/50">SIAP</span>
              </div>
            </div>
          </div>

          {/* FLOATING WIDGET 3: Custom Theme */}
          <div className="absolute right-[5%] lg:right-[12%] bottom-[12%] w-[280px] bg-white/80 backdrop-blur-xl border border-white rounded-2xl p-5 shadow-[0_20px_50px_-10px_rgba(255,159,28,0.15)] z-30 animate-float-3">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF9F1C] to-[#E68A00] flex items-center justify-center text-white shadow-[0_8px_16px_-6px_rgba(255,159,28,0.5)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[15px] text-[#0A192F] mb-0.5">Custom Theme OJS</h4>
                <p className="text-[12px] text-gray-500 font-medium">UI/UX Modern & Responsif</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="h-2.5 bg-orange-500 rounded-full col-span-1" />
              <div className="h-2.5 bg-gray-200 rounded-full col-span-2" />
              <div className="h-2.5 bg-orange-100 rounded-full col-span-1" />
              <div className="h-2.5 bg-gray-200 rounded-full col-span-2" />
              <div className="h-2.5 bg-gray-200 rounded-full col-span-2" />
            </div>
          </div>

        </div>
      </div>

      {/* Global Styles for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-12px) rotate(-1deg); }
        }
        @keyframes float-med {
          0%, 100% { transform: translateY(0px) rotate(4deg); }
          50% { transform: translateY(-15px) rotate(6deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(-4deg); }
          50% { transform: translateY(-10px) rotate(-6deg); }
        }
        .animate-float-1 { animation: float-slow 5s ease-in-out infinite; }
        .animate-float-2 { animation: float-med 6s ease-in-out infinite; }
        .animate-float-3 { animation: float-fast 4.5s ease-in-out infinite; }
      `}} />
    </section>
  );
}
