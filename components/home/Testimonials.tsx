"use client";

import React from "react";
import Link from "next/link";

// Mock data: Transaction proofs
const allProofs = [
  { id: "NS-8921-A", date: "22/06/2026", impact: "TRANSFER: RP 125.000.000", client: "UNIV. BRAWIJAYA", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop" },
  { id: "NS-8922-B", date: "20/06/2026", impact: "KONTRAK OJS TERTANDA", client: "INSTITUT TEKNOLOGI X", image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=600&auto=format&fit=crop" },
  { id: "NS-8923-C", date: "15/06/2026", impact: "INVOICE LUNAS", client: "POLITEKNIK NEGERI Y", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop" },
  { id: "NS-8924-D", date: "10/06/2026", impact: "DEPLOYMENT SELESAI", client: "KAMPUS DIGITAL Z", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop" },
  { id: "NS-8925-E", date: "05/06/2026", impact: "RETAINER FEE: RP 45JT", client: "AKADEMI KESEHATAN", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop" },
  { id: "TX-4410-X", date: "01/06/2026", impact: "PEMBAYARAN DITERIMA", client: "SEKOLAH TINGGI ILMU B", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop" },
  { id: "TX-4411-Y", date: "28/05/2026", impact: "PROJECT HANDOVER", client: "UNIVERSITAS SWASTA", image: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=600&auto=format&fit=crop" },
  { id: "TX-4412-Z", date: "25/05/2026", impact: "MAINTENANCE LUNAS", client: "YAYASAN PENDIDIKAN", image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=600&auto=format&fit=crop" },
  { id: "TX-4413-W", date: "20/05/2026", impact: "SERVER UPGRADE APPROVED", client: "KAMPUS INTERNASIONAL", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
  { id: "TX-4414-V", date: "15/05/2026", impact: "INVOICE #992 PAID", client: "INSTITUT SAINS TERAPAN", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop" },
];

// The Soft Digital Receipt Card
const ReceiptCard = ({ data }: { data: any }) => (
  <div className="w-[280px] md:w-[320px] shrink-0 bg-slate-50 border border-slate-200 flex flex-col p-4 md:p-5 font-mono relative group hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300">

    <div className="flex flex-col flex-1 h-full">
      <div className="mb-4">
        <h4 className="text-[18px] md:text-[20px] font-serif text-[#0A192F] tracking-tight leading-snug mb-1 font-bold">
          {data.impact}
        </h4>
        <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-slate-500 font-bold">
          KLIEN: <span className="text-[#FF9F1C]">{data.client}</span>
        </p>
      </div>

      {/* The Screenshot Thumbnail */}
      <div className="relative w-full aspect-[9/16] border border-slate-200 bg-white overflow-hidden mt-auto shadow-sm">
        <img
          src={data.image}
          alt="Proof"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>

  </div>
);

export default function Testimonials() {
  return (
    <section id="testimoni" className="w-full bg-white py-20 font-sans overflow-hidden relative">

      {/* CSS for Infinite Marquee */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse 40s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-[1380px] mx-auto px-6 md:px-8 relative z-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-[#FF9F1C] font-bold tracking-widest uppercase text-sm mb-3 md:mb-4">Testimonial</span>
          <h2 className="text-[32px] md:text-[54px] font-serif font-medium text-[#0A192F] leading-[1.1] mb-4 md:mb-6 tracking-tight" style={{ WebkitTextStroke: "1px currentColor" }}>
            Kata Mereka Tentang Kami
          </h2>
          <p className="text-[#475569] text-[14px] md:text-[16px] leading-relaxed">
            Kami tidak sekadar berjanji. Berikut adalah tumpukan bukti transaksi dan pencapaian yang telah diverifikasi oleh klien-klien terbaik kami.
          </p>
        </div>
      </div>

      {/* Single Marquee Row */}
      <div className="relative w-full overflow-hidden mb-8 md:mb-12 py-4 md:py-10 mt-6 md:mt-0">
        {/* We duplicate the array to create a seamless infinite loop */}
        <div className="animate-marquee flex items-center gap-6 md:gap-10 px-3 md:px-5">
          {[...allProofs, ...allProofs].map((proof, i) => (
            <ReceiptCard key={i} data={proof} />
          ))}
        </div>
      </div>

      {/* Left/Right Fade Overlays */}
      <div className="absolute top-0 left-0 w-16 md:w-40 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-16 md:w-40 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </section>
  );
}
