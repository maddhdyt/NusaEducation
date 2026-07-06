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
      id="target"
      className="relative w-full bg-white font-sans pb-20 scroll-mt-20"
      style={{ overflowX: 'clip' }}
    >
      {/* 
        THE ROCK-SOLID FOUNDATION:
        A standard flex-row layout inside the 1380px container.
        No absolute text boxes. No full-width hacks.
      */}
      <div className="max-w-[1380px] mx-auto px-0 md:px-10 relative flex flex-col-reverse lg:flex-row items-start">

        {/* 1. LEFT COLUMN: Blue Blob Anchor */}
        {/* This column serves as the mathematical anchor for the absolute blue blob */}
        <div className="w-full lg:w-[50%] relative min-h-[400px] lg:h-auto pointer-events-none mt-20 lg:mt-0">

          {/* 
                Blue Blob Wrapper
                Anchored EXACTLY at top: 0 and right: -2px of the left column on desktop.
                On mobile, centered and scaled to 100% of screen width.
              */}
          <div className="absolute top-0 left-0 lg:left-auto lg:right-[-2px] w-full lg:w-[900px] lg:max-w-[55vw] z-20">

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

              {/* 1. Dosen / Peneliti (RED/ORANGE) */}
              <div className="absolute top-[25%] md:top-[35%] left-[18%] md:left-[25%] z-30 pointer-events-auto">
                <div className="w-[100px] md:w-[140px] lg:w-[160px] h-[120px] md:h-[160px] lg:h-[200px] bg-[#FF4D2D] relative shadow-lg">
                  <img src="https://ik.imagekit.io/yqhp1cmbp/dosen%20akademik.png" alt="Dosen" className="w-full h-full object-cover object-bottom" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-100 text-[#0A192F] shadow-sm text-[8px] md:text-[9px] lg:text-[11px] font-bold px-1.5 py-0.5 whitespace-nowrap border border-orange-200">
                    Dosen Akademik
                  </div>
                </div>
                {/* Tooltip (Above on mobile to avoid covering Guru, Top-Left on desktop) */}
                <div className="absolute bottom-[105%] md:bottom-[75%] left-[-15px] md:left-auto md:right-[60%] mb-2 md:mb-4 bg-white rounded-sm shadow-xl p-1 md:p-1.5 w-[130px] md:w-[150px] lg:w-[200px] flex items-start gap-1 md:gap-2 z-40 border border-gray-100">
                  <div className="w-3 h-3 lg:w-5 lg:h-5 rounded-full bg-[#FF4D2D] shrink-0 text-white flex items-center justify-center text-[8px] lg:text-[12px] font-serif italic mt-0.5">j</div>
                  <p className="text-[10px] md:text-[12px] lg:text-[18px] font-serif tracking-tight leading-[1.2] text-[#0A192F]">Perlu pendampingan<br></br> revisi agar tembus<br></br>LoA SINTA 2.</p>
                </div>
              </div>

              {/* 2. Mahasiswa Pascasarjana (GREEN) */}
              <div className="absolute top-[15%] md:top-[15%] left-[58%] md:left-[50%] z-30 pointer-events-auto">
                <div className="w-[100px] md:w-[140px] lg:w-[160px] h-[120px] md:h-[160px] lg:h-[200px] bg-[#9BFF2E] relative shadow-lg">
                  <img src="https://ik.imagekit.io/yqhp1cmbp/mahasiswa.png" alt="Mahasiswa" className="w-full h-full object-cover object-bottom" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-lime-100 text-[#0A192F] shadow-sm text-[8px] md:text-[9px] lg:text-[11px] font-bold px-1.5 py-0.5 whitespace-nowrap border border-lime-200">
                    Mahasiswa S2/S3
                  </div>
                </div>
                {/* Tooltip (Above on mobile, Right on desktop) */}
                <div className="absolute bottom-[105%] md:bottom-auto top-auto md:top-[20%] right-[-15px] md:right-auto md:left-[75%] mb-2 md:mb-0 md:ml-4 bg-white rounded-sm shadow-xl p-1 md:p-1.5 w-[130px] md:w-[150px] lg:w-[200px] flex items-start gap-1 md:gap-2 z-40 border border-gray-100">
                  <div className="w-3 h-3 lg:w-5 lg:h-5 rounded-full bg-[#FF4D2D] shrink-0 text-white flex items-center justify-center text-[8px] lg:text-[12px] font-serif italic mt-0.5">j</div>
                  <p className="text-[10px] md:text-[12px] lg:text-[18px] font-serif tracking-tight leading-[1.2] text-[#0A192F]">Bantu submit jurnal<br></br> internasional untuk<br></br> syarat sidang.</p>
                </div>
              </div>

              {/* 3. Guru & ASN (PINK) */}
              <div className="absolute top-[65%] md:top-[63%] left-[22%] md:left-[32%] z-30 pointer-events-auto">
                <div className="w-[100px] md:w-[140px] lg:w-[160px] h-[120px] md:h-[160px] lg:h-[200px] bg-[#FF2E93] relative shadow-lg">
                  <img src="https://ik.imagekit.io/yqhp1cmbp/guru.png" alt="Guru" className="w-full h-full object-cover object-bottom" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-pink-100 text-[#0A192F] shadow-sm text-[8px] md:text-[9px] lg:text-[11px] font-bold px-1.5 py-0.5 whitespace-nowrap border border-pink-200">
                    Guru & ASN
                  </div>
                </div>
                {/* Tooltip (Below on mobile, Left on desktop) */}
                <div className="absolute top-[105%] md:top-auto md:bottom-[60%] left-[-15px] md:left-auto md:right-[75%] mt-2 md:mt-0 md:mr-4 bg-white rounded-sm shadow-xl p-1 md:p-1.5 w-[130px] md:w-[160px] lg:w-[200px] flex items-start gap-1 md:gap-2 z-40 border border-gray-100">
                  <div className="w-3 h-3 lg:w-5 lg:h-5 rounded-full bg-[#FF4D2D] shrink-0 text-white flex items-center justify-center text-[8px] lg:text-[12px] font-serif italic mt-0.5">j</div>
                  <p className="text-[10px] md:text-[15px] lg:text-[18px] font-serif tracking-tight leading-[1.2] text-[#0A192F]">Pastikan naskah<br></br> sesuai format<br></br> selingkung.</p>
                </div>
              </div>

              {/* 4. Peneliti Institusi (BLUE) */}
              <div className="absolute top-[55%] md:top-[45%] left-[62%] md:left-[57%] z-30 pointer-events-auto">
                <div className="w-[100px] md:w-[140px] lg:w-[160px] h-[120px] md:h-[160px] lg:h-[200px] bg-[#2EA2FF] relative shadow-lg">
                  <img src="https://ik.imagekit.io/yqhp1cmbp/akademisi.png" alt="Akademisi" className="w-full h-full object-cover object-bottom" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-100 text-[#0A192F] shadow-sm text-[8px] md:text-[9px] lg:text-[11px] font-bold px-1.5 py-0.5 whitespace-nowrap border border-blue-200">
                    Akademisi
                  </div>
                </div>
                {/* Tooltip (Below on mobile, Right on desktop) */}
                <div className="absolute top-[105%] md:top-[20%] right-[-15px] md:right-auto md:left-[75%] mt-2 md:mt-0 md:ml-4 bg-white rounded-sm shadow-xl p-1 md:p-1.5 w-[130px] md:w-[160px] lg:w-[200px] flex items-start gap-1 md:gap-2 z-40 border border-gray-100">
                  <div className="w-3 h-3 lg:w-5 lg:h-5 rounded-full bg-[#FF4D2D] shrink-0 text-white flex items-center justify-center text-[8px] lg:text-[12px] font-serif italic mt-0.5">j</div>
                  <p className="text-[10px] md:text-[15px] lg:text-[18px] font-serif tracking-tight leading-[1.2] text-[#0A192F]">Tingkatkan reputasi<br></br> kampus via<br></br> Scopus.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer to push section height down equivalent to the blob's visible height below Y=0 */}
          <div className="w-full h-[380px] sm:h-[450px] lg:h-[650px]"></div>
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
