import React from 'react';

export default function TargetAudienceSection() {
  /**
   * 100% Mathematically Exact Trace of the User's Image RULER!
   * Mapped on a perfect 12 (width) x 11 (height) Grid.
   */
  const pixelMask = `polygon(
    /* Top edge */
    calc(3 * 100% / 12) calc(0 * 100% / 11),
    calc(11 * 100% / 12) calc(0 * 100% / 11),
    
    /* Top right step (Y=2) */
    calc(11 * 100% / 12) calc(2 * 100% / 11),
    calc(12 * 100% / 12) calc(2 * 100% / 11),
    
    /* Right edge */
    calc(12 * 100% / 12) calc(8 * 100% / 11),
    
    /* Bottom right */
    calc(11 * 100% / 12) calc(8 * 100% / 11),
    calc(11 * 100% / 12) calc(9 * 100% / 11),
    calc(10 * 100% / 12) calc(9 * 100% / 11),
    calc(10 * 100% / 12) calc(11 * 100% / 11),
    
    /* Bottom edge */
    calc(2 * 100% / 12) calc(11 * 100% / 11),
    
    /* Bottom left */
    calc(2 * 100% / 12) calc(9 * 100% / 11),
    calc(1 * 100% / 12) calc(9 * 100% / 11),
    calc(1 * 100% / 12) calc(6 * 100% / 11),
    
    /* Gap trace (entering the gap from bottom-right) */
    calc(2 * 100% / 12) calc(6 * 100% / 11),
    calc(2 * 100% / 12) calc(5 * 100% / 11),
    calc(1 * 100% / 12) calc(5 * 100% / 11),
    
    /* Island trace (tracing the detached block) */
    calc(1 * 100% / 12) calc(6 * 100% / 11),
    calc(0 * 100% / 12) calc(6 * 100% / 11),
    calc(0 * 100% / 12) calc(5 * 100% / 11),
    calc(1 * 100% / 12) calc(5 * 100% / 11),
    
    /* Left edge (continuing up) */
    calc(1 * 100% / 12) calc(3 * 100% / 11),
    calc(2 * 100% / 12) calc(3 * 100% / 11),
    calc(2 * 100% / 12) calc(1 * 100% / 11),
    calc(3 * 100% / 12) calc(1 * 100% / 11)
  )`;

  return (
    <section
      className="relative w-full bg-white font-sans pb-20"
      style={{ overflowX: 'clip' }}
    >
      {/* 
        THE ROCK-SOLID FOUNDATION:
        A standard flex-row layout inside the 1380px container.
        No absolute text boxes. No full-width hacks.
      */}
      <div className="max-w-[1380px] mx-auto px-6 md:px-10 relative flex flex-col lg:flex-row items-start">

        {/* 1. LEFT COLUMN: Blue Blob Anchor */}
        {/* This column serves as the mathematical anchor for the absolute blue blob */}
        <div className="w-full lg:w-[50%] relative min-h-[400px] lg:h-auto pointer-events-none">

          {/* 
                Blue Blob Wrapper
                Anchored EXACTLY at top: 0 and right: -2px of the left column.
              */}
          <div className="absolute top-0 right-0 lg:right-[-2px] w-[96vw] lg:w-[900px] lg:max-w-[55vw] z-20">

            {/* 
                    THE MATHEMATICAL SHIFT:
                    Instead of guessing pixels, we pull the blob UP by EXACTLY 2/11 of its dynamic height.
                    This guarantees the Y=2 notch ALWAYS lands perfectly at 0px, no matter the screen size or zoom!
                  */}
            <div
              className="w-full relative"
              style={{
                aspectRatio: '2138/1984',
                transform: 'translateY(calc(-2 * 100% / 11))'
              }}
            >
              <div className="absolute inset-0 w-full h-full" style={{ clipPath: pixelMask }}>
                {/* Base solid blue background */}
                <div className="absolute inset-0 bg-[#0052FF]"></div>

                {/* Dense Blueprint Grid (60x55 small cells) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `
                              linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)
                            `,
                    backgroundSize: 'calc(100% / 60) calc(100% / 55)'
                  }}
                ></div>

                {/* Solid Blue "Glitch" Blocks */}
                <div className="absolute bg-[#0052FF]" style={{ left: '0%', top: 'calc(5 * 100% / 11)', width: 'calc(100% / 12)', height: 'calc(100% / 11)' }}></div>
                <div className="absolute bg-[#0052FF]" style={{ left: 'calc(5 * 100% / 12)', top: '0%', width: 'calc(100% / 12)', height: 'calc(100% / 11)' }}></div>
                <div className="absolute bg-[#0052FF]" style={{ left: 'calc(11 * 100% / 12)', top: 'calc(2 * 100% / 11)', width: 'calc(100% / 12)', height: 'calc(2 * 100% / 11)' }}></div>
                <div className="absolute bg-[#0052FF]" style={{ left: 'calc(11 * 100% / 12)', top: 'calc(4 * 100% / 11)', width: 'calc(100% / 12)', height: 'calc(100% / 11)' }}></div>
                <div className="absolute bg-[#0052FF]" style={{ left: 'calc(8 * 100% / 12)', top: 'calc(9 * 100% / 11)', width: 'calc(100% / 12)', height: 'calc(100% / 11)' }}></div>
                <div className="absolute bg-[#0052FF]" style={{ left: 'calc(1 * 100% / 12)', top: 'calc(7 * 100% / 11)', width: 'calc(100% / 12)', height: 'calc(100% / 11)' }}></div>
                <div className="absolute bg-[#0052FF]" style={{ left: 'calc(3 * 100% / 12)', top: 'calc(10 * 100% / 11)', width: 'calc(4 * 100% / 12)', height: 'calc(100% / 11)' }}></div>
              </div>

              {/* --- FLOATING PERSONAS (Outside ClipPath so they can bleed out) --- */}
              
              {/* 1. Dosen / Peneliti (RED) */}
              <div className="absolute top-[20%] lg:top-[20%] left-[15%] lg:left-[25%] z-30 pointer-events-auto group">
                <div className="w-[130px] lg:w-[170px] h-[160px] lg:h-[210px] bg-[#FF5A43] relative transition-transform group-hover:-translate-y-1">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="Dosen" className="w-full h-full object-cover object-top" />
                  <div className="absolute -bottom-2 -left-2 bg-[#FFC4BA] text-[#000000] text-[9px] lg:text-[11px] font-medium px-1.5 py-0.5 whitespace-nowrap">
                    Dosen Akademik
                  </div>
                </div>
                {/* Tooltip (Top-Left) */}
                <div className="absolute bottom-[80%] right-[85%] mb-4 bg-white rounded-sm shadow-2xl p-2 lg:p-3 w-[160px] lg:w-[200px] flex items-start gap-2 z-40">
                  <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#FF5A43] shrink-0 text-white flex items-center justify-center text-[10px] lg:text-[12px] font-serif italic mt-0.5">j</div>
                  <p className="text-[13px] lg:text-[16px] font-serif tracking-tight leading-[1.1] text-[#0A192F]">Perlu pendampingan revisi agar tembus LoA SINTA 2.</p>
                </div>
              </div>

              {/* 2. Mahasiswa Pascasarjana (GREEN) */}
              <div className="absolute top-[8%] lg:top-[10%] left-[45%] lg:left-[48%] z-30 pointer-events-auto group">
                <div className="w-[120px] lg:w-[160px] h-[150px] lg:h-[200px] bg-[#66FF33] relative transition-transform group-hover:-translate-y-1">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" alt="Mahasiswa" className="w-full h-full object-cover object-top" />
                  <div className="absolute -bottom-2 -left-2 bg-[#E0FFCC] text-[#000000] text-[9px] lg:text-[11px] font-medium px-1.5 py-0.5 whitespace-nowrap">
                    Mahasiswa S2/S3
                  </div>
                </div>
                {/* Tooltip (Right) */}
                <div className="absolute top-[20%] left-[90%] ml-4 bg-white rounded-sm shadow-2xl p-2 lg:p-3 w-[160px] lg:w-[200px] flex items-start gap-2 z-40">
                  <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#FF5A43] shrink-0 text-white flex items-center justify-center text-[10px] lg:text-[12px] font-serif italic mt-0.5">j</div>
                  <p className="text-[13px] lg:text-[16px] font-serif tracking-tight leading-[1.1] text-[#0A192F]">Bantu submit jurnal internasional untuk syarat sidang.</p>
                </div>
              </div>

              {/* 3. Guru & ASN (PINK) */}
              <div className="absolute top-[50%] lg:top-[50%] left-[25%] lg:left-[35%] z-30 pointer-events-auto group hidden md:block">
                <div className="w-[140px] lg:w-[180px] h-[170px] lg:h-[220px] bg-[#FF85D4] relative transition-transform group-hover:-translate-y-1">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" alt="Guru" className="w-full h-full object-cover object-top" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#FFE6F2] text-[#000000] text-[9px] lg:text-[11px] font-medium px-1.5 py-0.5 whitespace-nowrap shadow-sm">
                    Guru & ASN
                  </div>
                </div>
                {/* Tooltip (Left) */}
                <div className="absolute bottom-[60%] right-[90%] mr-4 bg-white rounded-sm shadow-2xl p-2 lg:p-3 w-[160px] lg:w-[200px] flex items-start gap-2 z-40">
                  <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#FF5A43] shrink-0 text-white flex items-center justify-center text-[10px] lg:text-[12px] font-serif italic mt-0.5">j</div>
                  <p className="text-[13px] lg:text-[16px] font-serif tracking-tight leading-[1.1] text-[#0A192F]">Pastikan naskah sesuai format selingkung.</p>
                </div>
              </div>

              {/* 4. Peneliti Institusi (BLUE) */}
              <div className="absolute top-[40%] lg:top-[40%] left-[55%] lg:left-[62%] z-30 pointer-events-auto group hidden sm:block">
                <div className="w-[150px] lg:w-[190px] h-[180px] lg:h-[230px] bg-[#2E99FF] relative transition-transform group-hover:-translate-y-1">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" alt="Peneliti" className="w-full h-full object-cover object-top" />
                  <div className="absolute -bottom-2 -left-2 bg-[#E6F2FF] text-[#000000] text-[9px] lg:text-[11px] font-medium px-1.5 py-0.5 whitespace-nowrap">
                    Akademisi
                  </div>
                </div>
                {/* Tooltip (Right) */}
                <div className="absolute top-[20%] left-[90%] ml-4 bg-white rounded-sm shadow-2xl p-2 lg:p-3 w-[160px] lg:w-[200px] flex items-start gap-2 z-40">
                  <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#FF5A43] shrink-0 text-white flex items-center justify-center text-[10px] lg:text-[12px] font-serif italic mt-0.5">j</div>
                  <p className="text-[13px] lg:text-[16px] font-serif tracking-tight leading-[1.1] text-[#0A192F]">Tingkatkan reputasi kampus via Scopus.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer to push section height down equivalent to the blob's visible height below Y=0 */}
          <div className="w-full h-[150px] lg:h-[650px]"></div>
        </div>

        {/* 2. RIGHT COLUMN: Standard Flex Text Box */}
        {/* Safely inside the document flow, no absolute positioning needed! */}
        <div className="w-full lg:w-[50%] bg-[#E6F0FF] relative z-10 px-8 lg:px-[60px] pt-10 pb-10 flex flex-col justify-start pointer-events-auto">
          <h2 className="font-serif text-[40px] xl:text-[44px] leading-[1.1] text-[#000033] mb-8 tracking-normal" style={{ WebkitTextStroke: "1.2px currentColor" }}>
            Pendekatan <span className="italic">berbeda</span> untuk <br className="hidden lg:block" /> target akademik Anda.
          </h2>
          <p className="font-sans text-[#0A192F] leading-normal mb-2 text-base">
            Kebanyakan layanan publikasi memperlakukan semua naskah dengan cara yang sama. Anda mengirim draf, dan mereka memprosesnya secara massal.
          </p>
          <p className="font-sans text-[#0A192F] font-bold leading-normal mb-2 text-base">
            Nusa Education mengambil pendekatan yang secara fundamental berbeda.
          </p>
          <p className="font-sans text-[#0A192F] leading-normal mb-2 text-base">
            Setiap pendampingan publikasi kami:
          </p>
          <ul className="list-disc pl-5 font-sans text-[#0A192F] leading-none space-y-1 mb-6 text-base">
            <li className="pl-1"><strong>Disesuaikan dengan urgensi</strong> (tenggat waktu kelulusan, BKD, atau PAK).</li>
            <li className="pl-1"><strong>Didampingi oleh spesialis</strong> yang paham standar SINTA & Scopus.</li>
            <li className="pl-1"><strong>Dikawal penuh</strong> mulai dari <em>proofreading</em>, <em>submit</em>, revisi, hingga LoA.</li>
          </ul>
          <p className="font-sans text-[#0A192F] leading-normal text-base">
            Hasilnya bukan sekadar naskah yang terbit. Ini adalah pencapaian target akademik yang bisa Anda andalkan.
          </p>
        </div>

      </div>
    </section>
  );
}
