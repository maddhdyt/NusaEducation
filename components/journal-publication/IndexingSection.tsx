import React from 'react';
import Image from 'next/image';

export default function IndexingSection() {
  return (
    <section id="indexing" className="w-full bg-white py-20 lg:py-32 overflow-hidden relative scroll-mt-20">
      
      {/* Marquee Ticker (Tilted Neon Green) */}
      <div className="absolute top-12 left-[-2%] w-[105%] overflow-hidden bg-[#9BFF2E] py-3 z-20 rotate-[-2deg] border-y border-[#0A192F]/10">
        <div className="whitespace-nowrap animate-marquee flex items-center">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-[#0A192F] font-mono font-bold text-[18px] md:text-[22px] mx-4 uppercase tracking-widest">
              ★ JAMINAN SINTA ★ REPUTASI SCOPUS ★ TERINDEKS GLOBAL 
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1380px] mx-auto px-6 mt-24 lg:mt-32 flex flex-col items-center">
        
        {/* Headline */}
        <h2 className="text-[32px] sm:text-4xl md:text-5xl font-serif font-normal text-[#0A192F] leading-[1.1] tracking-normal mb-16 text-center max-w-4xl" style={{ WebkitTextStroke: "1.3px currentColor" }}>
          Jaringan indeksasi global untuk visibilitas maksimal.
        </h2>

        {/* Flat Asymmetrical Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5 w-full max-w-[1000px]">
          
          {/* Scopus (Large Block) */}
          <div className="relative overflow-hidden col-span-2 md:col-span-2 h-[160px] md:h-[220px] transition-transform hover:-translate-y-2 duration-300">
            <Image src="https://ik.imagekit.io/yqhp1cmbp/scopus.png" alt="Scopus" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          
          {/* Sinta */}
          <div className="relative overflow-hidden col-span-1 md:col-span-1 h-[160px] md:h-[220px] transition-transform hover:-translate-y-2 duration-300">
            <Image src="https://ik.imagekit.io/yqhp1cmbp/sinta.png" alt="Sinta" fill loading="lazy" sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
          </div>
          
          {/* DOAJ */}
          <div className="relative overflow-hidden col-span-1 md:col-span-1 h-[160px] md:h-[220px] transition-transform hover:-translate-y-2 duration-300">
            <Image src="https://ik.imagekit.io/yqhp1cmbp/doaj.png" alt="DOAJ" fill loading="lazy" sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
          </div>
          
          {/* Web of Science */}
          <div className="relative overflow-hidden col-span-2 md:col-span-1 h-[160px] md:h-[220px] transition-transform hover:-translate-y-2 duration-300">
            <Image src="https://ik.imagekit.io/yqhp1cmbp/wos.png" alt="Web of Science" fill loading="lazy" sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
          </div>

          {/* Index Copernicus (Wide Block) */}
          <div className="relative overflow-hidden col-span-2 md:col-span-2 h-[160px] md:h-[220px] transition-transform hover:-translate-y-2 duration-300">
            <Image src="https://ik.imagekit.io/yqhp1cmbp/copernicus.png" alt="Index Copernicus" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>

          {/* Google Scholar */}
          <div className="relative overflow-hidden col-span-2 md:col-span-1 h-[160px] md:h-[220px] transition-transform hover:-translate-y-2 duration-300">
            <Image src="https://ik.imagekit.io/yqhp1cmbp/google%20scholar.png" alt="Google Scholar" fill loading="lazy" sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
          </div>

        </div>
      </div>

      {/* Marquee CSS Keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
