"use client";
import React from 'react';

export default function HeroSection() {
  const gridStyle = {
    backgroundImage: `linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)`,
    backgroundSize: '30px 30px',
    backgroundColor: '#ffffff',
  };

  return (
    <section className="relative w-full overflow-hidden" style={gridStyle}>
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF9F1C]/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="w-full max-w-[1380px] mx-auto px-6 relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#0A192F] text-[12px] font-bold tracking-wide uppercase mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#FF9F1C] animate-pulse"></span>
            Customer Care
          </div>
          
          <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-serif font-normal text-[#0A192F] leading-[1.05] tracking-tight mb-8 animate-fade-in-up delay-100" style={{ WebkitTextStroke: "1px currentColor" }}>
            Bagaimana kami bisa membantu Anda?
          </h1>
          
          <p className="text-[#475569] text-[16px] md:text-[20px] leading-relaxed max-w-2xl font-medium animate-fade-in-up delay-200">
            Dari pertanyaan umum hingga dukungan teknis lanjutan. Tim profesional kami siap memberikan solusi terbaik untuk memastikan kesuksesan digital Anda.
          </p>
          
        </div>
      </div>
    </section>
  );
}
