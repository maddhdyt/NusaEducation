"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative w-full pt-12 md:pt-20 overflow-hidden"
      style={{ backgroundColor: '#FFFDF9' }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-20 relative">
        
        {/* Eyebrow Badge */}
        <div className="inline-block px-3 py-1 mb-4 text-[13px] md:text-sm font-bold tracking-wider uppercase text-[#E68A00] bg-[#FF9F1C]/10 border border-[#FF9F1C]/20">
          Jasa Web Dev & Setup OJS
        </div>

        {/* Big Serif Headline */}
        <h1 className="text-[36px] leading-[1.15] sm:text-4xl md:text-6xl font-serif text-[#0A192F] tracking-tight md:tracking-normal md:leading-[1.1] max-w-5xl mx-auto mb-8 [-webkit-text-stroke:0.5px_currentColor] md:[-webkit-text-stroke:1.2px_currentColor]">
          Platform OJS yang mengangkat jurnal Anda dari biasa menjadi luar biasa.
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center w-full max-w-[320px] sm:max-w-none mx-auto">
          <Link 
            href="#portfolio" 
            className="w-full sm:w-auto px-8 py-3.5 bg-[#FFFDF9] relative z-20 text-[#0A192F] font-semibold tracking-wide text-[15px] border border-[#0A192F]/20 hover:bg-[#0A192F] hover:text-white transition-colors text-center"
          >
            Lihat Portofolio
          </Link>
          <Link 
            href="#pricing" 
            className="w-full sm:w-auto px-8 py-3.5 bg-[#FF9F1C] text-white font-semibold tracking-wide text-[15px] hover:bg-[#E68A00] border border-[#FF9F1C] transition-all hover:-translate-y-0.5 text-center"
          >
            Buat OJS
          </Link>
        </div>

      </div>

      {/* PREMIUM GRAPHIC AREA */}
      <div className="w-full mx-auto mt-10 md:mt-16 relative h-[420px] sm:h-[500px] md:h-[650px] flex items-center justify-center z-10">
        
        {/* Massive Geometric SVG (Grid Bleeding Effect) */}
        <div className="absolute top-0 bottom-[-50px] left-[-20%] w-[140%] pointer-events-none opacity-5 flex items-center justify-center">
           <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(90deg, #0A192F 1.5px, transparent 1.5px), linear-gradient(#0A192F 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />
        </div>

        {/* Central Composition */}
        <div className="relative w-full h-full max-w-[1200px] flex items-end justify-center">
          
          {/* Masked Group for Geometric Block and Person */}
          <div className="absolute inset-0 z-10 pointer-events-none flex justify-center">
            {/* The Pixelated Geometric Block (Strict stepped edges) */}
            <div 
              className="absolute bottom-0 w-[90vw] max-w-[480px] h-[350px] sm:h-[450px] md:h-[560px] bg-[#0A192F] z-10 overflow-hidden shadow-[0_0_0_8px_rgba(255,253,249,1)]"
              style={{
                clipPath: 'polygon(0% 30px, 30px 30px, 30px 0%, calc(100% - 30px) 0%, calc(100% - 30px) 30px, 100% 30px, 100% 100%, 0% 100%)'
              }}
            >
              {/* Box Inner Glow & Pattern */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              
              {/* Geometric accents inside the block */}
              <div className="absolute top-0 right-0 w-[60px] h-[60px] bg-white opacity-5 rounded-none" />
              <div className="absolute top-[60px] right-0 w-[30px] h-[30px] bg-white opacity-5 rounded-none" />
              <div className="absolute top-0 right-[60px] w-[30px] h-[30px] bg-white opacity-5 rounded-none" />
            </div>

            {/* GAMBAR ORANG */}
            <div className="absolute bottom-0 w-[105vw] sm:w-[500px] md:w-[600px] max-w-[600px] z-20 pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              <img 
                src="https://ik.imagekit.io/yqhp1cmbp/image1114.webp" 
                alt="Web Dev Expert" 
                className="w-full h-auto object-contain object-bottom"
              />
            </div>
          </div>

          {/* FLOATING WIDGET 1: DOI & Crossref */}
          <div className="absolute left-[-2%] sm:left-[2%] lg:left-[8%] top-[5%] md:top-[25%] w-[250px] scale-[0.65] sm:scale-90 md:scale-100 origin-top-left md:origin-left bg-white/80 backdrop-blur-xl border border-[#0A192F]/10 rounded-none p-5 shadow-[20px_20px_0px_-5px_rgba(10,25,47,0.05)] z-30 animate-float-1">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-blue-900/5 border border-blue-900/10 flex items-center justify-center text-blue-900 shadow-inner">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <span className="font-bold text-sm text-[#0A192F]">DOI Crossref</span>
              </div>
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#FF9F1C] opacity-40"></span>
                <span className="relative inline-flex rounded-none h-3 w-3 bg-[#FF9F1C]"></span>
              </span>
            </div>
            <div className="space-y-2.5">
              <div className="flex justify-between text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <span>Auto-assigning</span>
                <span className="text-[#0A192F]">100%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-none h-3 overflow-hidden border border-gray-200/50">
                <div className="bg-[#0A192F] h-full rounded-none w-full relative">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4zKSIvPjwvc3ZnPg==')] opacity-30" />
                </div>
              </div>
            </div>
          </div>

          {/* FLOATING WIDGET 2: SINTA */}
          <div className="absolute right-[-2%] sm:right-[2%] lg:right-[10%] top-[-2%] md:top-[15%] w-[240px] scale-[0.65] sm:scale-90 md:scale-100 origin-top-right md:origin-right bg-white/80 backdrop-blur-xl border border-[#0A192F]/10 rounded-none p-4 shadow-[20px_20px_0px_-5px_rgba(10,25,47,0.05)] z-30 animate-float-2">
            <div className="flex flex-col gap-3">
              <div className="h-20 rounded-none bg-white border border-[#BAE6FD]/50 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/yqhp1cmbp/sinta%20(1).png" 
                  alt="SINTA Logo" 
                  className="h-12 w-auto object-contain relative z-10"
                />
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0A192F 2px, transparent 2px)', backgroundSize: '12px 12px' }} />
              </div>
              <div className="flex items-center justify-between px-1">
                <span className="font-bold text-[13px] text-[#0A192F]">Akreditasi Jurnal</span>
                <span className="px-2 py-1 bg-[#FF9F1C] text-white rounded-none text-[10px] font-extrabold tracking-wider border border-[#FF9F1C]">SIAP</span>
              </div>
            </div>
          </div>

          {/* FLOATING WIDGET 3: Custom Theme */}
          <div className="absolute right-[-2%] sm:right-[5%] lg:right-[12%] bottom-[5%] md:bottom-[15%] w-[280px] scale-[0.65] sm:scale-90 md:scale-100 origin-bottom-right md:origin-right bg-white/80 backdrop-blur-xl border border-[#0A192F]/10 rounded-none p-5 shadow-[20px_20px_0px_-5px_rgba(10,25,47,0.05)] z-30 animate-float-3">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-none bg-[#FF9F1C] flex items-center justify-center text-white border border-[#FF9F1C]/20">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[15px] text-[#0A192F] mb-0.5">Custom Theme OJS</h4>
                <p className="text-[12px] text-[#0A192F]/50 font-medium">UI/UX Modern & Responsif</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="h-2.5 bg-[#FF9F1C] rounded-none col-span-1" />
              <div className="h-2.5 bg-gray-200 rounded-none col-span-2" />
              <div className="h-2.5 bg-[#0A192F] rounded-none col-span-1" />
              <div className="h-2.5 bg-gray-200 rounded-none col-span-2" />
              <div className="h-2.5 bg-gray-200 rounded-none col-span-2" />
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
