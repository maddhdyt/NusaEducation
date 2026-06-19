import React from 'react';
import { Star, Heart, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function PublikasiJurnalHero() {
  const dummyLogos = [
    "https://ik.imagekit.io/yqhp1cmbp/image782.webp",
    "https://ik.imagekit.io/yqhp1cmbp/group1308.webp",
    "https://ik.imagekit.io/yqhp1cmbp/image403.webp",
    "https://ik.imagekit.io/yqhp1cmbp/image399.webp",
    "https://ik.imagekit.io/yqhp1cmbp/image778.webp",
  ];

  return (
    <section className="relative pt-20 md:pt-28 pb-24 px-6 overflow-hidden">
      
      {/* Glow Background (Subtle) */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-third/10 via-first/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-first leading-[1.1] tracking-tight max-w-4xl mx-auto text-center mb-6">
          Naskah Ditolak Terus? Selamatkan <br className="hidden md:block" />
          <span className="inline-block bg-third px-5 py-2 rounded-2xl mt-3 text-first">Syarat Wisuda & Poin KUM.</span>
        </h1>
        
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto text-center mb-10 leading-relaxed font-medium">
          Jangan pertaruhkan kelulusan atau kenaikan jabatan pada publisher lambat. Ambil kendali atas naskah Anda hari ini dengan pendampingan yang transparan dan terstruktur.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 relative z-20">
          <a href="#konsultasi" className="inline-flex justify-center items-center px-8 py-3.5 bg-first text-white rounded-full font-bold text-sm hover:bg-third hover:text-first transition-colors duration-300">
            Mulai Konsultasi Anda
          </a>
        </div>

        {/* 3. PHONE MOCKUP & FLOATING CARDS */}
        <div className="relative w-full max-w-[900px] h-[500px] md:h-[600px] flex justify-center mt-4">
          
          {/* The Phone */}
          <div className="relative w-[280px] md:w-[320px] h-[550px] md:h-[600px] bg-first rounded-[3rem] border-[8px] md:border-[12px] border-first shadow-[0_30px_60px_rgba(26,50,99,0.15)] overflow-hidden z-20 shrink-0">
            {/* Dynamic Island Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-first rounded-b-3xl z-30"></div>
            {/* Screen Content */}
            <div className="w-full h-full bg-slate-50 relative">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Dashboard Jurnal" className="w-full h-full object-cover opacity-90 grayscale-[20%]" />
              
              {/* Fake App Header Inside Phone */}
              <div className="absolute top-10 left-4 right-4 flex justify-between items-center bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-third flex justify-center items-center text-first text-xs font-bold">N</div>
                    <span className="text-sm font-bold text-first">Status Naskah</span>
                  </div>
                  <div className="bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full animate-pulse">
                    Diterima
                  </div>
              </div>
            </div>
          </div>

          {/* FLOATING CARD 1: SINTA 2 BADGE (Top Left) */}
          <div className="absolute top-10 md:top-20 left-4 md:left-12 bg-white p-4 rounded-3xl shadow-xl z-30 w-40 md:w-48 transform -rotate-6 hover:rotate-0 transition-transform duration-300 border border-slate-100">
            <div className="w-full h-24 bg-first rounded-2xl mb-3 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="text-white font-black text-2xl relative z-10 tracking-widest">SINTA 2</div>
            </div>
            <p className="text-slate-500 text-xs font-bold text-center mt-1 uppercase tracking-wider">Terakreditasi</p>
          </div>

          {/* FLOATING CARD 2: ACCEPTANCE RATE (Middle Left) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-8 bg-third p-5 rounded-[2rem] shadow-xl z-30 flex items-center gap-4 transform -translate-x-4 md:-translate-x-10">
            <div className="flex items-end gap-1.5 h-10">
              <div className="w-2.5 h-5 bg-first rounded-sm"></div>
              <div className="w-2.5 h-7 bg-first rounded-sm"></div>
              <div className="w-2.5 h-10 bg-first rounded-sm"></div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-first/70 uppercase tracking-widest mb-1">Acceptance Rate</div>
              <div className="text-3xl font-black text-first leading-none flex items-center gap-2">
                98% <CheckCircle2 className="w-5 h-5 text-first" />
              </div>
            </div>
          </div>

          {/* FLOATING CARD 3: REVIEWS (Bottom Left) */}
          <div className="absolute bottom-24 md:bottom-32 left-8 md:left-20 bg-white px-5 py-3.5 rounded-full shadow-lg z-30 flex gap-1 border border-slate-100">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-third text-third" />)}
          </div>

          {/* FLOATING CARD 4: GREEN STATS (Top Right) */}
          <div className="absolute top-8 md:top-16 right-4 md:right-12 bg-first p-6 rounded-3xl shadow-xl z-30 w-48 transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-baseline gap-1 text-third">
              <span className="text-5xl font-black">12</span>
              <span className="text-sm font-bold">Hari</span>
            </div>
            <p className="text-white/80 text-xs mt-2 mb-4 leading-relaxed font-medium">Rata-rata waktu hingga LoA terbit</p>
            <div className="inline-block bg-third text-first text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
              Guaranteed
            </div>
          </div>

          {/* FLOATING CARD 5: SOCIAL NOTIF (Bottom Right) */}
          <div className="absolute bottom-16 md:bottom-24 right-0 md:right-8 bg-white p-4 rounded-3xl shadow-xl z-30 w-48 border border-slate-100">
            <div className="w-full h-24 bg-slate-100 rounded-2xl mb-3 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover grayscale-[30%]" alt="Student" />
            </div>
            <div className="absolute -top-3 -left-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-md border-2 border-white">
              Publikasi Berhasil!
            </div>
            <div className="flex justify-between items-center px-1">
              <div className="flex gap-2">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <MessageSquare className="w-4 h-4 text-slate-400" />
              </div>
              <span className="text-[10px] font-bold text-slate-400">1m ago</span>
            </div>
          </div>

        </div>

        {/* 4. LOGO STRIP (Below phone) */}
        <div className="w-full max-w-5xl mx-auto mt-24 md:mt-32 pt-12 border-t border-slate-100 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {dummyLogos.map((logo, idx) => (
            <img key={idx} src={logo} alt="Publisher Logo" className="h-8 md:h-10 w-auto object-contain" />
          ))}
        </div>

      </div>
    </section>
  );
}
