import React from 'react';

export default function FeaturesSection() {
  const features = [
    {
      num: "01",
      title: "Upgrade OJS Aman",
      desc: "Peralihan dari sistem lama ke versi terbaru tanpa risiko kehilangan data. Artikel lama, akun penulis, dan riwayat naskah Bapak/Ibu dijamin tetap utuh.",
      color: "group-hover:text-[#FF9F1C]",
      bgHover: "hover:bg-[#FFF0E6]/50"
    },
    {
      num: "02",
      title: "Pencadangan Data",
      desc: "Sistem dilengkapi pengamanan khusus dari virus dan peretas. Kami juga mencadangkan (backup) seluruh data jurnal Bapak/Ibu setiap hari secara otomatis.",
      color: "group-hover:text-[#0A192F]",
      bgHover: "hover:bg-slate-50"
    },
    {
      num: "03",
      title: "Website Cepat & Stabil",
      desc: "Menggunakan server berkecepatan tinggi. Website jurnal akan tetap lancar dan tidak error meskipun diakses oleh ratusan mahasiswa secara bersamaan.",
      color: "group-hover:text-[#3B82F6]",
      bgHover: "hover:bg-blue-50/50"
    },
    {
      num: "04",
      title: "Mudah Terindeks",
      desc: "Sistem sudah kami atur agar naskah artikel Bapak/Ibu otomatis mudah terbaca dan ditemukan di pencarian Google Scholar, DOAJ, serta sistem Crossref.",
      color: "group-hover:text-[#10B981]",
      bgHover: "hover:bg-green-50/50"
    },
    {
      num: "05",
      title: "Tampilan Profesional",
      desc: "Kami mendesain wajah jurnal Bapak/Ibu agar terlihat sangat resmi, elegan, profesional, dan tetap mudah dibaca walau dibuka lewat layar handphone.",
      color: "group-hover:text-[#FF2E93]",
      bgHover: "hover:bg-pink-50/50"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-20 lg:py-24 bg-white relative font-sans">
      <div className="container mx-auto px-6 max-w-[1380px]">
        
        {/* Header - Clean Editorial Style */}
        <div className="max-w-4xl mb-8 lg:mb-16 relative z-10">
          <h2 className="text-[#FF9F1C] font-serif italic text-xl tracking-tight mb-4">Layanan Pembuatan OJS</h2>
          <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-serif text-[#0A192F] leading-[1.05] tracking-tight mb-6" style={{ WebkitTextStroke: "1px currentColor" }}>
            Lancar diakses. Bebas masalah.<br className="hidden lg:block" /> Siap untuk akreditasi.
          </h3>
          <p className="text-[#475569] text-[15px] lg:text-lg leading-relaxed max-w-3xl">
            Kami memahami bahwa mengelola jurnal sering terkendala masalah teknis seperti website lambat, error, atau bahkan terkena virus. Kami hadir untuk membereskan semua urusan teknis tersebut, sehingga Bapak/Ibu bisa fokus sepenuhnya pada kualitas naskah.
          </p>
        </div>

        {/* The Feature List - Elegant Horizontal Bands */}
        <div className="w-full flex flex-col">
          {features.map((feat, idx) => (
            <div key={idx} className={`group flex flex-col lg:flex-row lg:items-center justify-between py-8 lg:py-16 border-b border-slate-200 transition-colors duration-500 cursor-default ${feat.bgHover} px-4 lg:px-8 -mx-4 lg:-mx-8`}>
              
              {/* Number */}
              <div className="w-full lg:w-2/12 mb-2 lg:mb-0">
                <span className={`text-4xl lg:text-5xl font-mono text-slate-300 transition-colors duration-500 ${feat.color}`}>
                  {feat.num}
                  <span className="text-xl text-slate-200 ml-1">/</span>
                </span>
              </div>
              
              {/* Title */}
              <div className="w-full lg:w-5/12 mb-3 lg:mb-0">
                <h4 className="text-3xl lg:text-[3.25rem] font-serif text-[#0A192F] tracking-tight group-hover:translate-x-6 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                  {feat.title}
                </h4>
              </div>
              
              {/* Description */}
              <div className="w-full lg:w-4/12">
                <p className="text-[#475569] text-base lg:text-lg leading-relaxed group-hover:text-[#0A192F] transition-colors duration-500">
                  {feat.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
