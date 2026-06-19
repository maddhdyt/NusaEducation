import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#1A3263]">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        {/* Subtle geometric circles */}
        <div className="absolute w-[800px] h-[800px] rounded-full border-[1.5px] border-white/30 scale-150" />
        <div className="absolute w-[600px] h-[600px] rounded-full border-[1.5px] border-white/30 scale-150" />
        <div className="absolute w-[400px] h-[400px] rounded-full border-[1.5px] border-white/30 scale-150" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#1A3263_100%)]" />
      </div>

      {/* Inner Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Pre-Heading */}
        <span className="text-[#FAB958] font-black tracking-[0.2em] uppercase text-sm mb-4">
          KONSULTASI GRATIS 15 MENIT
        </span>
        
        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Siap Mendigitalisasi Institusi Anda?
        </h2>
        
        {/* Sub-headline/Value Prop */}
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10">
          Dapatkan audit sistem OJS atau rencana strategi publikasi untuk universitas Anda bersama tim ahli kami. Tanpa komitmen.
        </p>

        {/* Action Wrapper */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary Button */}
          <button className="w-full sm:w-auto px-8 py-4 bg-[#FAB958] hover:bg-white text-[#1A3263] font-bold rounded-full text-lg shadow-[0_0_20px_rgba(250,185,88,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
            Jadwalkan Konsultasi
            <ArrowRight className="w-5 h-5" />
          </button>
          
          {/* Secondary Button */}
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-400 text-white hover:border-white hover:bg-white/5 rounded-full text-lg font-semibold transition-all duration-300">
            Lihat Pricing Kami
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
          <div className="text-slate-400 text-sm flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#FAB958]" />
            <span>Respon dalam 1x24 Jam</span>
          </div>
          <span className="text-slate-600 hidden sm:block">•</span>
          <div className="text-slate-400 text-sm flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#FAB958]" />
            <span>100% Rahasia</span>
          </div>
        </div>

      </div>
    </section>
  );
}
