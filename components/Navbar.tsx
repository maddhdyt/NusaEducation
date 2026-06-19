import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-lg border-b border-slate-100/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full flex h-20 items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex cursor-pointer items-center gap-3 transition-all duration-300 ease-in-out hover:opacity-80">
          <img src="https://ik.imagekit.io/yqhp1cmbp/nusa%20brand%20new.png" alt="Nusa Education Logo" className="w-7 md:w-8 h-auto object-contain" />
          <span className="text-xl font-extrabold tracking-tight text-[#1A3263]">Nusa Education</span>
        </Link>
        
        {/* Center: Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <div className="relative group py-4">
            <button className="flex items-center gap-1 text-sm text-[#1A3263] font-medium hover:text-[#FAB958] transition-colors cursor-pointer">
              Layanan Kami <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 mt-0 w-[480px] bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 p-4 z-50">
              <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                <Link href="/layanan/ojs" className="px-3 py-2.5 text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#1A3263] rounded-xl font-medium transition-colors">Open Journal Systems</Link>
                <Link href="/layanan/web-development" className="px-3 py-2.5 text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#1A3263] rounded-xl font-medium transition-colors">Website Development</Link>
                <Link href="/layanan/iklan-digital" className="px-3 py-2.5 text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#1A3263] rounded-xl font-medium transition-colors">Jasa Iklan Digital</Link>
                <Link href="/layanan/publikasi-jurnal" className="px-3 py-2.5 text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#1A3263] rounded-xl font-medium transition-colors">Publikasi Jurnal</Link>
                <Link href="/layanan/penerbitan-buku" className="px-3 py-2.5 text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#1A3263] rounded-xl font-medium transition-colors">Penerbitan Buku</Link>
                <Link href="/layanan/pelatihan-lkp" className="px-3 py-2.5 text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#1A3263] rounded-xl font-medium transition-colors">Pelatihan Kompetensi LKP</Link>
                <Link href="/layanan/pelatihan-kerja" className="px-3 py-2.5 text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#1A3263] rounded-xl font-medium transition-colors">Program Pelatihan Kerja</Link>
                <Link href="/layanan/virtual-office" className="px-3 py-2.5 text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#1A3263] rounded-xl font-medium transition-colors">Virtual Office</Link>
                <Link href="/layanan/legalitas" className="px-3 py-2.5 text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#1A3263] rounded-xl font-medium transition-colors">Legalitas Usaha</Link>
              </div>
            </div>
          </div>
          <Link href="#keunggulan" className="text-sm text-[#1A3263] font-medium hover:text-[#FAB958] transition-colors">Keunggulan</Link>
          <Link href="#portofolio" className="text-sm text-[#1A3263] font-medium hover:text-[#FAB958] transition-colors">Portofolio</Link>
          <Link href="#testimoni" className="text-sm text-[#1A3263] font-medium hover:text-[#FAB958] transition-colors">Testimoni</Link>
          <Link href="#faq" className="text-sm text-[#1A3263] font-medium hover:text-[#FAB958] transition-colors">FAQ</Link>
        </nav>
        
        {/* Right: Buttons */}
        <div className="flex items-center gap-6">
          <Link href="#masuk" className="hidden cursor-pointer items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-[#1A3263] md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Masuk
          </Link>
          <Link href="#kontak" className="flex cursor-pointer items-center gap-2 rounded-full border border-[#1A3263] px-6 py-2.5 text-sm font-bold text-[#1A3263] transition-all hover:bg-[#1A3263] hover:text-white">
            Hubungi Kami
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16l4-4-4-4" />
              <path d="M8 12h8" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
