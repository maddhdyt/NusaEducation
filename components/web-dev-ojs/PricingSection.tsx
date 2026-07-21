"use client";
import React, { useState } from 'react';
import Image from 'next/image';

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

export default function PricingSection() {
  const [category, setCategory] = useState<'baru' | 'migrasi'>('baru');

  const packages = {
    baru: [
      {
        name: "OJS Basic Start",
        desc: "Solusi cepat untuk peluncuran jurnal standar.",
        logo: "https://ik.imagekit.io/yqhp1cmbp/ojslogo.jpg",
        features: [
          "Hosting 1GB & Domain 1 Tahun", 
          "Instalasi & Kustomisasi 1 Jurnal", 
          "Bantuan Pendaftaran E-ISSN", 
          "Sertifikat SSL & Backup Bulanan", 
          "Modul & Video Panduan OJS", 
          "Maintenance 2 Bulan (2x Revisi)"
        ]
      },
      {
        name: "OJS Elite Prime",
        desc: "Paket lengkap dengan aktivasi DOI dan indeksasi dasar.",
        logo: "https://ik.imagekit.io/yqhp1cmbp/ojslogo.jpg",
        features: [
          "Semua fitur Basic, ditambah:", 
          "Unlimited Hosting & Domain Kampus", 
          "Aktivasi & Pendaftaran DOI", 
          "Indeksasi Scholar & Dimensions", 
          "Pelatihan OJS via Zoom", 
          "Desain Logo Jurnal Eksklusif", 
          "Maintenance 4 Bulan (3x Revisi)"
        ]
      },
      {
        name: "OJS Royale All-In",
        desc: "Sistem premium persiapan akreditasi SINTA & Copernicus.",
        logo: "https://ik.imagekit.io/yqhp1cmbp/ojslogo.jpg",
        features: [
          "Semua fitur Elite, ditambah:", 
          "Pendampingan Akreditasi SINTA", 
          "Indeksasi Copernicus & Garuda", 
          "Bonus Web Publisher / Organisasi", 
          "Pelatihan Strategi Pemasaran", 
          "Template Artikel Kustom", 
          "Maintenance 6 Bulan (4x Revisi)"
        ]
      }
    ],
    migrasi: [
      {
        name: "Migrasi Basic",
        desc: "Pindah dari OJS versi lama (OJS 2) ke versi 3 dengan aman.",
        logo: "https://ik.imagekit.io/yqhp1cmbp/ojslogo.jpg",
        features: ["Backup Seluruh Database", "Migrasi Data Artikel", "Migrasi Akun Pengguna", "Pengecekan Kompatibilitas", "Setup Ulang Plugin Standar"]
      },
      {
        name: "Migrasi Premium",
        desc: "Migrasi sistem sekaligus perombakan tampilan total.",
        logo: "https://ik.imagekit.io/yqhp1cmbp/ojslogo.jpg",
        features: ["Semua Fitur Migrasi Basic", "Perombakan Tema (Custom UI)", "Cleanup & Optimasi Database", "Perbaikan Link Error (404)", "Setup Ulang Indeksasi"]
      },
      {
        name: "Maintenance",
        desc: "Dukungan teknis bulanan untuk menjaga jurnal tetap prima.",
        logo: "https://ik.imagekit.io/yqhp1cmbp/ojslogo.jpg",
        features: ["Backup Database Harian", "Update Versi Keamanan", "Pemantauan Server 24/7", "Bantuan Teknis Prioritas", "Laporan Performa Bulanan"]
      }
    ]
  };

  const currentPackages = packages[category];

  return (
    <section id="pricing" className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden scroll-mt-20">

      <InteractiveGridBackground />

      <div className="relative z-30 w-full max-w-[1380px] mx-auto px-6 flex flex-col items-center pointer-events-none">

        <div className="text-center mb-10 pointer-events-none">
          <h2 className="text-[38px] sm:text-5xl md:text-[78px] font-serif text-[#0A192F] mb-6 leading-[1.05] md:leading-[0.95] max-w-6xl mx-auto" style={{ WebkitTextStroke: "1px currentColor" }}>
            Pilih paket infrastruktur sesuai<br className="hidden md:block" /> kebutuhan instansi Anda
          </h2>
          <p className="text-[#0A192F] max-w-[500px] mx-auto font-sans font-medium text-[16px] md:text-[18px] leading-snug">
            Sistem transparan tanpa biaya tersembunyi. Konsultasikan kebutuhan web jurnal Anda dengan tim ahli kami.
          </p>
        </div>

        <div className="flex bg-white mb-16 relative pointer-events-auto">
          <button
            onClick={() => setCategory('baru')}
            className={`px-3 sm:px-4 py-4 font-sans font-bold text-[15px] sm:text-[16px] transition-colors duration-300 ${category === 'baru' ? 'bg-[#FF9F1C] text-white' : 'bg-white text-[#0A192F] hover:bg-slate-50'}`}
          >
            Setup Jurnal Baru
          </button>
          <button
            onClick={() => setCategory('migrasi')}
            className={`px-3 sm:px-4 py-4 font-sans font-bold text-[15px] sm:text-[16px] transition-colors duration-300 ${category === 'migrasi' ? 'bg-[#FF9F1C] text-white' : 'bg-white text-[#0A192F] hover:bg-slate-50'}`}
          >
            Migrasi & Maintenance
          </button>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pointer-events-none">
          {currentPackages.map((pkg, idx) => (
            <div key={idx} className="bg-white border border-[#0A192F]/5 flex flex-col pointer-events-auto p-6 lg:p-8">

              <div className="flex flex-row items-center justify-between mb-5 gap-3">
                <h3 className="text-[22px] lg:text-[24px] xl:text-[26px] font-serif text-[#0A192F] font-normal tracking-tight leading-[1.1]" style={{ WebkitTextStroke: "0.7px currentColor" }}>{pkg.name}</h3>
                <div className="h-10 lg:h-14 flex shrink-0 items-center justify-end relative">
                  <Image src={pkg.logo} alt="Plan Logo" width={130} height={56} className="h-full w-auto object-contain max-w-[110px] xl:max-w-[130px]" style={{ width: "auto", height: "auto" }} />
                </div>
              </div>

              <hr className="border-t border-[#0A192F]/20 mb-5" />

              <p className="text-[14px] lg:text-[15px] text-[#0A192F] font-sans font-medium leading-relaxed mb-6">{pkg.desc}</p>

              <a 
                href={`https://wa.me/62881022376684?text=${encodeURIComponent(`Halo NusaEducation, saya tertarik dengan paket pengembangan website / OJS: ${pkg.name}. Bisa berikan detail harganya?`)}`}
                target="_blank" rel="noopener noreferrer"
                className="conversion [&>*]:pointer-events-none self-start bg-[#FF9F1C] text-white px-4 py-3 font-bold font-sans hover:bg-[#ff9500] transition-colors mb-4 text-[14px] lg:text-[15px]"
              >
                Contact Sales
              </a>

              <div className="text-[14px] text-[#0A192F] font-medium mb-4">Plan includes:</div>

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
