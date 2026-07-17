"use client";
import React from 'react';
import Image from 'next/image';

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
      className="relative w-full bg-white font-sans pb-16 md:pb-20 lg:pb-24 scroll-mt-20"
      style={{ overflowX: 'clip' }}
    >
      {/* 
        THE ROCK-SOLID FOUNDATION:
        A standard flex-row layout inside the 1380px container.
        No absolute text boxes. No full-width hacks.
      */}
      <div className="max-w-[1380px] mx-auto px-0 md:px-10 relative flex flex-col-reverse lg:flex-row items-start">

        {/* 1. LEFT COLUMN: Green Blob Anchor */}
        {/* This column serves as the mathematical anchor for the absolute blob */}
        <div className="w-full lg:w-[50%] relative min-h-[400px] lg:h-auto pointer-events-none mt-6 lg:mt-0">

          {/* 
                Blob Wrapper
                Anchored EXACTLY at top: 0 and right: -2px of the left column on desktop.
                On mobile, centered and gently scaled to 125vw.
              */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-[-2px] w-[125vw] sm:w-[115vw] md:w-full lg:w-[900px] lg:max-w-[55vw] z-20">

            <div
              className="w-full relative"
              style={{
                aspectRatio: '2138/1984'
              }}
            >
              <div className="absolute inset-0 w-full h-full" style={{ clipPath: pixelMask }}>
                {/* Base solid green background */}
                <div className="absolute inset-0 bg-[#0B3A1C]"></div>

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

                {/* Solid Green "Glitch" Blocks */}
                <div className="absolute bg-[#0B3A1C]" style={{ left: '0%', top: 'calc(5 * 100% / 11)', width: 'calc(100% / 12)', height: 'calc(100% / 11)' }}></div>
                <div className="absolute bg-[#0B3A1C]" style={{ left: 'calc(5 * 100% / 12)', top: '0%', width: 'calc(100% / 12)', height: 'calc(100% / 11)' }}></div>
                <div className="absolute bg-[#0B3A1C]" style={{ left: 'calc(11 * 100% / 12)', top: 'calc(2 * 100% / 11)', width: 'calc(100% / 12)', height: 'calc(2 * 100% / 11)' }}></div>
                <div className="absolute bg-[#0B3A1C]" style={{ left: 'calc(11 * 100% / 12)', top: 'calc(4 * 100% / 11)', width: 'calc(100% / 12)', height: 'calc(100% / 11)' }}></div>
                <div className="absolute bg-[#0B3A1C]" style={{ left: 'calc(8 * 100% / 12)', top: 'calc(9 * 100% / 11)', width: 'calc(100% / 12)', height: 'calc(100% / 11)' }}></div>
                <div className="absolute bg-[#0B3A1C]" style={{ left: 'calc(1 * 100% / 12)', top: 'calc(7 * 100% / 11)', width: 'calc(100% / 12)', height: 'calc(100% / 11)' }}></div>
                <div className="absolute bg-[#0B3A1C]" style={{ left: 'calc(3 * 100% / 12)', top: 'calc(10 * 100% / 11)', width: 'calc(4 * 100% / 12)', height: 'calc(100% / 11)' }}></div>
              </div>

              {/* 1. Kampus & PT (RED/ORANGE) */}
              <div className="absolute top-[25%] md:top-[35%] left-[18%] md:left-[25%] z-30 pointer-events-auto">
                <div className="w-[130px] md:w-[140px] lg:w-[160px] h-[160px] md:h-[180px] lg:h-[200px] bg-[#FF4D2D] relative shadow-lg">
                  <Image src="https://ik.imagekit.io/yqhp1cmbp/akademisi.png" alt="Kampus & PT" fill loading="lazy" sizes="(max-width: 768px) 100px, 160px" className="object-cover object-bottom" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-100 text-[#0A192F] shadow-sm text-[11px] md:text-[11px] lg:text-[12px] font-bold px-2 py-0.5 whitespace-nowrap border border-orange-200">
                    Kampus & PT
                  </div>
                </div>
                {/* Tooltip (Above on mobile, Top-Left on desktop) */}
                <div className="absolute bottom-[105%] md:bottom-[75%] left-[-25px] md:left-auto md:right-[60%] mb-2 md:mb-4 bg-white rounded-sm shadow-xl p-2.5 md:p-1.5 w-[180px] md:w-[150px] lg:w-[200px] flex items-start gap-1.5 md:gap-2 z-40 border border-gray-100">
                  <div className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 rounded-full bg-[#FF4D2D] shrink-0 text-white flex items-center justify-center text-[11px] lg:text-[12px] font-serif italic mt-0.5">j</div>
                  <p className="text-[13px] md:text-[13px] lg:text-[18px] font-serif tracking-tight leading-[1.3] text-[#0A192F]">Butuh portal OJS<br></br> terpusat untuk puluhan<br></br> program studi.</p>
                </div>
              </div>

              {/* 2. Lembaga Riset (GREEN) */}
              <div className="absolute top-[15%] md:top-[15%] left-[58%] md:left-[50%] z-30 pointer-events-auto">
                <div className="w-[130px] md:w-[140px] lg:w-[160px] h-[160px] md:h-[180px] lg:h-[200px] bg-[#9BFF2E] relative shadow-lg">
                  <Image src="https://ik.imagekit.io/yqhp1cmbp/guru.png" alt="Lembaga Riset" fill loading="lazy" sizes="(max-width: 768px) 100px, 160px" className="object-cover object-bottom" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-lime-100 text-[#0A192F] shadow-sm text-[11px] md:text-[11px] lg:text-[12px] font-bold px-2 py-0.5 whitespace-nowrap border border-lime-200">
                    Lembaga Riset
                  </div>
                </div>
                {/* Tooltip (Above on mobile, Right on desktop) */}
                <div className="absolute bottom-[105%] md:bottom-auto top-auto md:top-[20%] right-[-25px] md:right-auto md:left-[75%] mb-2 md:mb-0 md:ml-4 bg-white rounded-sm shadow-xl p-2.5 md:p-1.5 w-[180px] md:w-[150px] lg:w-[200px] flex items-start gap-1.5 md:gap-2 z-40 border border-gray-100">
                  <div className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 rounded-full bg-[#FF4D2D] shrink-0 text-white flex items-center justify-center text-[11px] lg:text-[12px] font-serif italic mt-0.5">j</div>
                  <p className="text-[13px] md:text-[13px] lg:text-[18px] font-serif tracking-tight leading-[1.3] text-[#0A192F]">Wadah publikasi<br></br> hasil riset dan prosiding<br></br> antar anggota.</p>
                </div>
              </div>

              {/* 3. Editor Jurnal (PINK) */}
              <div className="absolute top-[65%] md:top-[63%] left-[22%] md:left-[32%] z-30 pointer-events-auto">
                <div className="w-[130px] md:w-[140px] lg:w-[160px] h-[160px] md:h-[180px] lg:h-[200px] bg-[#FF2E93] relative shadow-lg">
                  <Image src="https://ik.imagekit.io/yqhp1cmbp/dosen%20akademik.png" alt="Editor Jurnal" fill loading="lazy" sizes="(max-width: 768px) 100px, 160px" className="object-cover object-bottom" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-pink-100 text-[#0A192F] shadow-sm text-[11px] md:text-[11px] lg:text-[12px] font-bold px-2 py-0.5 whitespace-nowrap border border-pink-200">
                    Editor Jurnal
                  </div>
                </div>
                {/* Tooltip (Below on mobile, Left on desktop) */}
                <div className="absolute top-[105%] md:top-auto md:bottom-[60%] left-[-25px] md:left-auto md:right-[75%] mt-2 md:mt-0 md:mr-4 bg-white rounded-sm shadow-xl p-2.5 md:p-1.5 w-[180px] md:w-[160px] lg:w-[200px] flex items-start gap-1.5 md:gap-2 z-40 border border-gray-100">
                  <div className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 rounded-full bg-[#FF4D2D] shrink-0 text-white flex items-center justify-center text-[11px] lg:text-[12px] font-serif italic mt-0.5">j</div>
                  <p className="text-[13px] md:text-[15px] lg:text-[18px] font-serif tracking-tight leading-[1.3] text-[#0A192F]">Upgrade dari OJS 2<br></br> ke OJS 3 tanpa risiko<br></br> kehilangan data.</p>
                </div>
              </div>

              {/* 4. Penerbit Akademik (BLUE) */}
              <div className="absolute top-[55%] md:top-[45%] left-[62%] md:left-[57%] z-30 pointer-events-auto">
                <div className="w-[130px] md:w-[140px] lg:w-[160px] h-[160px] md:h-[180px] lg:h-[200px] bg-[#2EA2FF] relative shadow-lg">
                  <Image src="https://ik.imagekit.io/yqhp1cmbp/mahasiswa%20(3).png" alt="Penerbit Akademik" fill loading="lazy" sizes="(max-width: 768px) 100px, 160px" className="object-cover object-bottom" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-100 text-[#0A192F] shadow-sm text-[11px] md:text-[11px] lg:text-[12px] font-bold px-2 py-0.5 whitespace-nowrap border border-blue-200">
                    Penerbit Akademik
                  </div>
                </div>
                {/* Tooltip (Below on mobile, Right on desktop) */}
                <div className="absolute top-[105%] md:top-[20%] right-[-25px] md:right-auto md:left-[75%] mt-2 md:mt-0 md:ml-4 bg-white rounded-sm shadow-xl p-2.5 md:p-1.5 w-[180px] md:w-[160px] lg:w-[200px] flex items-start gap-1.5 md:gap-2 z-40 border border-gray-100">
                  <div className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 rounded-full bg-[#FF4D2D] shrink-0 text-white flex items-center justify-center text-[11px] lg:text-[12px] font-serif italic mt-0.5">j</div>
                  <p className="text-[13px] md:text-[15px] lg:text-[18px] font-serif tracking-tight leading-[1.3] text-[#0A192F]">Infrastruktur server<br></br> kokoh untuk menampung<br></br> ribuan akses rutin.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer to push section height down exactly mathematically equivalent to the scaled blob's height */}
          <div className="w-full h-[116vw] md:h-[93vw] lg:h-[550px] xl:h-[700px]"></div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
            @media (min-width: 1024px) {
              .notch-aligned-mt {
                margin-top: min(151.85px, 9.2797vw) !important;
              }
            }
          `
        }} />

        {/* 2. RIGHT COLUMN: Standard Flex Text Box */}
        {/* Safely inside the document flow, no absolute positioning needed! */}
        <div className="w-full lg:w-[50%] bg-[#E6F0FF] relative z-10 px-8 lg:px-[60px] pt-10 pb-10 flex flex-col justify-start pointer-events-auto notch-aligned-mt">
          <h2 className="font-serif text-[40px] xl:text-[44px] leading-[1.1] text-[#000033] mb-8 tracking-normal" style={{ WebkitTextStroke: "1.2px currentColor" }}>
            Pendekatan <span className="italic">berbeda</span> untuk <br className="hidden lg:block" /> infrastruktur jurnal Anda.
          </h2>
          <p className="font-sans text-[#0A192F] leading-normal mb-2 text-base">
            Kebanyakan jasa pembuatan web hanya melakukan instalasi OJS mentah. Anda menerima website kosong, dan mereka lepas tangan.
          </p>
          <p className="font-sans text-[#0A192F] font-bold leading-normal mb-2 text-base">
            Nusa Education mengambil pendekatan yang secara fundamental berbeda.
          </p>
          <p className="font-sans text-[#0A192F] leading-normal mb-2 text-base">
            Setiap instalasi jurnal kami:
          </p>
          <ul className="list-disc pl-5 font-sans text-[#0A192F] leading-none space-y-1 mb-6 text-base">
            <li className="pl-1"><strong>Disesuaikan dengan identitas</strong> visual institusi atau kampus Anda.</li>
            <li className="pl-1"><strong>Dioptimalkan keamanannya</strong> untuk mencegah serangan <em>malware</em> atau <em>deface</em>.</li>
            <li className="pl-1"><strong>Dikawal penuh</strong> dengan standar metadata yang siap untuk indeksasi SINTA & Scopus.</li>
          </ul>
          <p className="font-sans text-[#0A192F] leading-normal text-base">
            Hasilnya bukan sekadar website jurnal yang hidup. Ini adalah gerbang akademik profesional yang bisa Anda andalkan.
          </p>
        </div>

      </div>
    </section>
  );
}
