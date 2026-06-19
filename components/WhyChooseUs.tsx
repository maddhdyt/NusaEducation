import React from 'react';
import { LineChart, Palette, Layers, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      Num: "01",
      Title: "Teruji oleh Data, Bukan Asumsi",
      Desc: "Strategi digital dan periklanan kami difokuskan pada metrik nyata. Kami mengoptimalkan konversi, menekan Cost Per Lead (CPL), dan memaksimalkan ROAS untuk skala bisnis Anda.",
      ColSpan: "md:col-span-2",
      Bg: "bg-[#1A3263]",
      Text: "text-white",
      Watermark: "text-white/5",
      Icon: LineChart
    },
    {
      Num: "02",
      Title: "Estetika yang Mengonversi",
      Desc: "Desain UI/UX dan aset visual yang tidak hanya memanjakan mata, tapi dirancang dengan psikologi konsumen untuk mendorong aksi.",
      ColSpan: "md:col-span-1",
      Bg: "bg-[#E8E2DB]",
      Text: "text-[#1A3263]",
      Watermark: "text-[#1A3263]/5",
      Icon: Palette
    },
    {
      Num: "03",
      Title: "Solusi Holistik Satu Pintu",
      Desc: "Dari legalitas, web, jurnal, hingga iklan digital. Ekosistem terintegrasi tanpa perlu banyak vendor.",
      ColSpan: "md:col-span-1",
      Bg: "bg-[#547792]",
      Text: "text-white",
      Watermark: "text-white/10",
      Icon: Layers
    },
    {
      Num: "04",
      Title: "Eksekusi Presisi, Tanpa Drama",
      Desc: "Manajemen proyek transparan dengan timeline pasti. Kami menghargai waktu Anda sama seperti kami menghargai kualitas.",
      ColSpan: "md:col-span-2",
      Bg: "bg-[#FAB958]",
      Text: "text-[#1A3263]",
      Watermark: "text-[#1A3263]/10",
      Icon: Clock
    }
  ];

  return (
    <div className="w-full" id="keunggulan">
      {/* SECTION HEADER */}
      <div className="max-w-3xl mx-auto text-center px-4 mb-16">
        <h3 className="text-[#FAB958] font-bold tracking-wider uppercase text-sm mb-3">KEUNGGULAN KAMI</h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3263] leading-tight mb-6">Pendekatan Kami Berbeda.</h2>
        <p className="text-slate-500 text-lg">
          Kami tidak sekadar mengeksekusi proyek. Kami merancang ekosistem digital yang berorientasi pada hasil dan pertumbuhan jangka panjang.
        </p>
      </div>

      {/* BENTO GRID ARCHITECTURE (Asymmetric) */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {reasons.map((item, index) => {
          const IconComponent = item.Icon;
          return (
            <div key={index} className={`relative overflow-hidden rounded-[2.5rem] p-8 md:p-10 group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${item.ColSpan} ${item.Bg} ${item.Text}`}>
              {/* The Watermark Reveal */}
              <span className={`absolute -bottom-10 -right-4 text-[12rem] font-black leading-none transition-all duration-700 group-hover:scale-150 group-hover:opacity-0 ${item.Watermark}`}>
                {item.Num}
              </span>
              
              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col h-full justify-start min-h-[200px]">
                <IconComponent size={32} className="mb-6 opacity-90" />
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {item.Title}
                </h3>
                <p className="text-base md:text-lg opacity-90 max-w-lg group-hover:translate-x-2 transition-transform duration-500 delay-75">
                  {item.Desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
