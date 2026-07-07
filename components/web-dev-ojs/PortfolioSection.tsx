import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioSection() {
  const portfolios = [
    {
      name: "Jurnal Riset Teknologi & Sains",
      institution: "Universitas Negeri Contoh",
      work: "Migrasi OJS 3 & Kustomisasi UI",
      status: "Terindeks SINTA 2",
      gradient: "from-blue-900 to-[#0A192F]",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Jurnal Medika Nusantara",
      institution: "Lembaga Kesehatan Indonesia",
      work: "Maintenance Server & Keamanan",
      status: "Persiapan DOAJ",
      gradient: "from-[#FF9F1C] to-orange-800",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Jurnal Ekonomi & Bisnis",
      institution: "Institut Manajemen Asia",
      work: "Pembuatan OJS dari Nol",
      status: "Terindeks SINTA 3",
      gradient: "from-emerald-900 to-green-900",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Jurnal Ilmu Sosial Humaniora",
      institution: "Fakultas Ilmu Budaya",
      work: "Setup Indeksasi & Desain Editorial",
      status: "Terindeks SINTA 4",
      gradient: "from-purple-900 to-[#0A192F]",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white relative font-sans">
      <div className="container mx-auto px-6 max-w-[1380px]">
        
        {/* Header - Clean Editorial Centered */}
        <div className="max-w-4xl mx-auto mb-16 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-[#FF9F1C] font-serif italic text-xl tracking-tight mb-4">Studi Kasus OJS</h2>
          <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-serif text-[#0A192F] leading-[1.05] tracking-tight mb-6" style={{ WebkitTextStroke: "1px currentColor" }}>
            Dipercaya oleh institusi<br className="hidden md:block" /> terkemuka.
          </h3>
          <p className="text-[#475569] text-[15px] lg:text-lg leading-relaxed max-w-3xl font-medium mx-auto">
            Dari perguruan tinggi negeri hingga lembaga riset independen. Berikut adalah portofolio jurnal yang telah kami kembangkan untuk menembus indeksasi nasional maupun global.
          </p>
        </div>

        {/* Portfolio Grid - Strict Editorial Blueprint */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-slate-200">
          {portfolios.map((item, idx) => (
            <div key={idx} className="group relative border-r border-b border-slate-200 bg-white overflow-hidden flex flex-col hover:bg-slate-50 transition-colors duration-500 cursor-pointer">
              
              {/* Image / Placeholder Area */}
              <div className="w-full aspect-[16/10] relative overflow-hidden bg-slate-100">
                
                {item.image ? (
                  /* Tampilan Jika Ada Gambar Asli */
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]" 
                  />
                ) : (
                  /* Fallback Placeholder (Tampil jika image: "") */
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90 group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]`}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                  </div>
                )}
                
                {/* CTA Button (shows on hover) */}
                <a href="#pricing" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <div className="bg-white text-[#0A192F] font-mono text-xs md:text-sm px-6 py-3 tracking-[0.2em] uppercase flex items-center gap-2 shadow-xl border border-slate-100 hover:bg-[#FF9F1C] hover:text-white transition-colors duration-300">
                    BUAT SEPERTI INI <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
              </div>

              {/* Metadata / Blueprint details */}
              <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-[10px] md:text-xs font-mono tracking-wider text-[#FF9F1C] border border-[#FF9F1C]/30 px-2 py-1 uppercase bg-[#FF9F1C]/5">
                      {item.work}
                    </span>
                    <span className="text-[10px] md:text-xs font-mono tracking-wider text-slate-500 border border-slate-200 px-2 py-1 uppercase bg-slate-50">
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-serif text-[#0A192F] mb-3 tracking-tight group-hover:text-[#FF9F1C] transition-colors duration-300" style={{ WebkitTextStroke: "0.5px currentColor" }}>
                    {item.name}
                  </h4>
                  <p className="text-slate-500 text-sm md:text-base font-medium">
                    {item.institution}
                  </p>
                </div>
                
                {/* Decorative architectural crosshairs at bottom right */}
                <div className="absolute bottom-6 right-6 text-slate-300 font-mono text-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  +
                </div>
              </div>

            </div>
          ))}
        </div>



      </div>
    </section>
  );
}
