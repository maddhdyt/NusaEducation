"use client";
import React, { useState } from 'react';
import Image from 'next/image';

function GridCell() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '24px',
        height: '18px',
        backgroundColor: '#FFFFFF',
        opacity: isHovered ? 1 : 0,
        transition: isHovered ? 'opacity 0s' : 'opacity 0.8s ease-out',
      }}
      className="box-border shrink-0 cursor-default border-[0.5px] border-transparent"
    />
  );
}

function InteractiveSteppedGrid() {
  // 24x18px cells to fill 2160px width
  const cols = 90;
  const rows = 60;
  const squares = Array.from({ length: cols * rows }, (_, i) => i);

  const steppedClipPath = `polygon(
    /* Top-Left: Short vertical, long horizontal */
    0px 72px, 48px 72px, 48px 36px, 240px 36px, 240px 0px,
    
    /* Top-Right: Short horizontal, long vertical */
    calc(100% - 96px) 0px, calc(100% - 96px) 36px, calc(100% - 48px) 36px, calc(100% - 48px) 144px, 100% 144px,
    
    /* Bottom-Right: 3-step irregular stair */
    100% calc(100% - 144px), calc(100% - 48px) calc(100% - 144px), calc(100% - 48px) calc(100% - 72px), calc(100% - 96px) calc(100% - 72px), calc(100% - 96px) calc(100% - 36px), calc(100% - 192px) calc(100% - 36px), calc(100% - 192px) 100%,
    
    /* Bottom-Left: 3-step regular stair */
    144px 100%, 144px calc(100% - 36px), 96px calc(100% - 36px), 96px calc(100% - 72px), 48px calc(100% - 72px), 48px calc(100% - 108px), 0px calc(100% - 108px)
  )`;

  return (
    <div className="absolute inset-0 z-0 bg-[#D1F4E0]">
      <div
        className="w-full h-full relative overflow-hidden bg-[#E8FCEF]"
        style={{ clipPath: steppedClipPath }}
      >
        {/* Grid Lines Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.6) 1px, transparent 1px)`,
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

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white min-h-[700px] xl:min-h-[950px] pb-20 lg:pb-32 flex items-center justify-center overflow-hidden">
      {/* Background Interactive Grid with Stepped Corners */}
      <InteractiveSteppedGrid />

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-[1380px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between h-full pt-10 lg:pt-0 pointer-events-none">

        {/* Left Side: Typography */}
        <div className="w-full lg:w-[55%] flex flex-col items-start text-left z-20 pointer-events-none">

          {/* Overline Text */}
          <div className="mb-2 pointer-events-auto cursor-[text_!important]">
            <span className="bg-white text-[#0A192F] font-mono text-[12px] md:text-[14px] tracking-wide font-semibold">
              Layanan Publikasi Jurnal
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[48px] sm:text-[64px] md:text-[74px] font-serif font-normal text-[#0A192F] leading-[1.1] tracking-normal mb-8 pointer-events-auto cursor-[text_!important]" style={{ WebkitTextStroke: "1.2px currentColor" }}>
            Jaminan naskah <br />
            ilmiah terbit di jurnal <br />
            bereputasi.
          </h1>

          {/* Description */}
          <p className="text-[#0A192F] text-[15px] md:text-[16px] leading-[1.6] mb-10 font-sans max-w-[480px] font-medium pointer-events-auto cursor-[text_!important]">
            Nusa Education mendampingi seluruh tahapan publikasi naskah Anda mulai dari persiapan, <i className="font-serif font-normal">review</i>, hingga terbit di jurnal bereputasi (SINTA, Scopus) secara sistematis dan bergaransi.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pointer-events-auto">
            <a href="#pricing" className="border border-[#0A192F] bg-transparent text-[#0A192F] px-8 py-3 font-semibold text-[16px] hover:bg-[#0A192F] hover:text-white transition-colors text-center min-w-[180px]">
              Lihat Paket Harga
            </a>
            <a href="https://wa.me/6285121117589?text=Halo%20NusaEducation%2C%20saya%20membutuhkan%20pendampingan%20untuk%20mempublikasikan%20naskah%20jurnal%20saya.%20Bisa%20berikan%20info%20lebih%20lanjut%3F" target="_blank" rel="noopener noreferrer" className="conversion [&>*]:pointer-events-none bg-[#FF9F1C] text-white px-8 py-3 font-semibold text-[16px] hover:bg-[#ff9500] transition-colors text-center min-w-[180px]">
              Konsultasi Gratis
            </a>
          </div>
        </div>

        {/* Right Side: Graphics Placeholder */}
        <div className="w-full lg:w-[45%] relative h-[400px] lg:h-full mt-28 md:mt-32 lg:mt-0 pointer-events-none z-10 flex items-center justify-center">

          <style>{`
            @keyframes eightBitJitter {
              0%, 100% { transform: translate(0, 0); }
              25% { transform: translate(1.5px, -1.5px); }
              50% { transform: translate(-1.5px, 1px); }
              75% { transform: translate(1px, 1.5px); }
            }
            .animate-8bit {
              animation: eightBitJitter 3s steps(1) infinite;
            }
          `}</style>

          {/* Central Anchor for Graphics */}
          <div className="relative w-[336px] h-[336px] md:w-[480px] md:h-[480px] lg:w-[528px] lg:h-[528px]">
            {/* 1. The Deep Green Stepped Background Puzzle Piece */}
            <div
              className="absolute inset-0 bg-[#0B3A1C] z-0 transition-all duration-500"
              style={{
                clipPath: `polygon(
                  0px 48px, 48px 48px, 48px 0px,
                  calc(100% - 72px) 0px, calc(100% - 72px) 48px, 100% 48px,
                  100% calc(100% - 48px), calc(100% - 72px) calc(100% - 48px), calc(100% - 72px) 100%,
                  48px 100%, 48px calc(100% - 72px), 0px calc(100% - 72px)
                )`
              }}
            >
              {/* Fine Grid Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.5) 1px, transparent 1px)`,
                  backgroundSize: '16px 16px',
                  backgroundPosition: '0 0'
                }}
              ></div>

              {/* Eraser Blocks to create patchy grid effect (Aligned to 16px grid) */}
              <div className="absolute bg-[#0B3A1C]" style={{ top: '32px', left: '64px', width: '128px', height: '96px' }}></div>
              <div className="absolute bg-[#0B3A1C]" style={{ top: '160px', right: '48px', width: '144px', height: '160px' }}></div>
              <div className="absolute bg-[#0B3A1C]" style={{ bottom: '64px', left: '160px', width: '96px', height: '112px' }}></div>
              <div className="absolute bg-[#0B3A1C]" style={{ top: '256px', left: '32px', width: '80px', height: '80px' }}></div>
              <div className="absolute bg-[#0B3A1C]" style={{ bottom: '16px', right: '160px', width: '64px', height: '64px' }}></div>
            </div>

            {/* 4. Pink Polka Dot Square (8-bit Jitter) */}
            <div className="absolute -bottom-10 -left-10 lg:-bottom-16 lg:-left-16 w-[160px] h-[160px] lg:w-[220px] lg:h-[220px] z-10 rotate-45">
              <div
                className="w-full h-full bg-[#FF66CC] animate-8bit"
                style={{
                  backgroundImage: `radial-gradient(circle, #FF1A8C 10px, transparent 10.5px)`,
                  backgroundSize: '24px 24px',
                  backgroundPosition: '0 0'
                }}
              ></div>
            </div>

            {/* 5. Weird Green Triangle (8-bit Jitter) */}
            <div className="absolute -top-8 -right-8 lg:-top-16 lg:-right-16 w-[140px] h-[180px] lg:w-[200px] lg:h-[260px] z-10 pointer-events-none">
              <div
                className="w-full h-full bg-[#A3E635]/90 animate-8bit"
                style={{
                  clipPath: 'polygon(70% 0%, 0% 90%, 100% 70%)'
                }}
              ></div>
            </div>

            {/* 6. Main Photo Frame Placeholder */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[560px] bg-white border border-[#E71D36]/40">
              {/* User provided hero image */}
              <Image
                src="https://ik.imagekit.io/yqhp1cmbp/hero%20image%20(3).png"
                alt="Hero Image Nusa Education"
                width={560}
                height={560}
                priority
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* 2. Top-Left Floating Cluster (Dosen) */}
          <div className="absolute top-[5%] md:top-[-5%] left-0 lg:left-0 xl:-left-8 z-20 pointer-events-none animate-fade-in-up delay-100">
            <div className="relative">
              {/* Avatar + Label */}
              <div className="absolute -top-14 left-[75%] -translate-x-1/2">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-[#E6007E] z-10 relative flex items-center justify-center shadow-sm">
                  <Image src="https://ik.imagekit.io/yqhp1cmbp/dosen%20(1).png" width={56} height={56} className="w-full h-full object-cover" alt="Avatar Dosen" priority />
                </div>
                <div className="absolute -bottom-2 left-1/2 translate-x-1 bg-[#e39bc3] px-1 text-[16px] font-sans font-bold text-[#0A192F] whitespace-nowrap z-20 shadow-sm">
                  Dosen
                </div>
              </div>

              {/* Big Text */}
              <div className="bg-[#FFC2E2] px-5 py-2">
                <span className="font-serif text-[42px] lg:text-[56px] text-[#E6007E] leading-none tracking-tight" style={{ WebkitTextStroke: "0.5px currentColor" }}>Jafung</span>
              </div>
            </div>
          </div>

          {/* 3. Bottom-Right Floating Cluster (Mahasiswa) */}
          <div className="absolute bottom-[5%] md:bottom-[-5%] right-0 lg:right-0 xl:-right-8 z-20 pointer-events-none animate-fade-in-up delay-200">
            <div className="relative">
              {/* Big Text */}
              <div className="bg-[#66FF33] px-5 py-2">
                <span className="font-serif text-[42px] lg:text-[56px] text-[#1E9900] leading-none tracking-tight" style={{ WebkitTextStroke: "0.5px currentColor" }}>Kelulusan</span>
              </div>

              {/* Avatar + Label */}
              <div className="absolute -bottom-7 left-[25%] -translate-x-1/2">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-[#1E9900] z-10 relative flex items-center justify-center shadow-sm">
                  <Image src="https://ik.imagekit.io/yqhp1cmbp/mahasiswa%20(2).png" width={56} height={56} className="w-full h-full object-cover" alt="Avatar Mahasiswa" priority />
                </div>
                <div className="absolute -bottom-2 left-1/2 translate-x-2 bg-[#bcf8ad] px-1 text-[16px] font-sans font-bold text-[#0A192F] whitespace-nowrap z-20 shadow-sm">
                  Mahasiswa
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
