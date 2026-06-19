import React from 'react';
import { ArrowRight } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#EBF2F8] relative overflow-hidden pt-32 md:pt-40 pb-8 md:pb-12">
      
      {/* THE GIANT WATERMARK */}
      <div className="absolute top-6 md:top-10 left-0 right-0 flex justify-center items-start z-0 select-none pointer-events-none overflow-hidden">
        <h1 className="text-[11.5vw] font-black leading-none tracking-tighter whitespace-nowrap">
          <span className="text-[#1A3263]/[0.08]">NUSA </span>
          <span className="text-[#FAB958]/[0.25]">EDUCATION</span>
        </h1>
      </div>

      {/* THE FLOATING INNER CARD */}
      <div className="relative z-10 w-[92%] max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-12 lg:p-16 flex flex-col">
        
        {/* THE MAIN GRID */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* COLUMN 1: BRANDING */}
          <div className="lg:col-span-4">
            <a href="/" className="flex items-center gap-3 w-fit hover:opacity-80 transition-opacity mb-6">
              <img src="https://ik.imagekit.io/yqhp1cmbp/nusa%20brand%20new.png" alt="Nusa Education Logo" className="w-8 md:w-10 h-auto object-contain" />
              <span className="text-2xl font-extrabold tracking-tight text-[#1A3263]">Nusa Education</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed pr-8 mb-8">
              Ekosistem publikasi digital, manajemen jurnal bereputasi, dan pengembangan OJS untuk institusi akademik di seluruh Indonesia.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#1A3263] hover:bg-[#1A3263] hover:text-white transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#1A3263] hover:bg-[#1A3263] hover:text-white transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#1A3263] hover:bg-[#1A3263] hover:text-white transition-colors">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h5 className="text-[#1A3263] font-extrabold text-sm tracking-widest uppercase mb-6">Navigasi</h5>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-slate-500 font-medium hover:text-[#FAB958] text-sm transition-colors cursor-pointer w-fit">Layanan Kami</a>
              <a href="#" className="text-slate-500 font-medium hover:text-[#FAB958] text-sm transition-colors cursor-pointer w-fit">Produk</a>
              <a href="#" className="text-slate-500 font-medium hover:text-[#FAB958] text-sm transition-colors cursor-pointer w-fit">Portofolio</a>
              <a href="#" className="text-slate-500 font-medium hover:text-[#FAB958] text-sm transition-colors cursor-pointer w-fit">Testimonial</a>
            </div>
          </div>

          {/* COLUMN 3: LEGAL & RESOURCES */}
          <div className="lg:col-span-2">
            <h5 className="text-[#1A3263] font-extrabold text-sm tracking-widest uppercase mb-6">Pusat Bantuan</h5>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-slate-500 font-medium hover:text-[#FAB958] text-sm transition-colors cursor-pointer w-fit">FAQ</a>
              <a href="#" className="text-slate-500 font-medium hover:text-[#FAB958] text-sm transition-colors cursor-pointer w-fit">Kebijakan Privasi</a>
              <a href="#" className="text-slate-500 font-medium hover:text-[#FAB958] text-sm transition-colors cursor-pointer w-fit">Syarat & Ketentuan</a>
              <a href="#" className="text-slate-500 font-medium hover:text-[#FAB958] text-sm transition-colors cursor-pointer w-fit">Panduan Submit</a>
            </div>
          </div>

          {/* COLUMN 4: THE FINAL CTA */}
          <div className="lg:col-span-3">
            <h5 className="text-[#1A3263] font-extrabold text-sm tracking-widest uppercase mb-6">Mulai Sekarang</h5>
            <p className="text-slate-500 text-sm mb-6">
              Tingkatkan akreditasi jurnal dan efisiensi institusi Anda hari ini.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1A3263] text-white rounded-full font-bold text-sm hover:bg-[#FAB958] hover:text-[#1A3263] transition-all w-fit">
              Hubungi Kami <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-center items-center border-t border-slate-100 mt-12 pt-8 gap-2">
          <span className="text-slate-400 text-sm font-medium text-center">
            Copyright © 2026 Nusa Education | All rights reserved
          </span>
        </div>

      </div>

    </footer>
  );
}
