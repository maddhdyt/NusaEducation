import React from 'react';
import Link from 'next/link';
import { BookOpen, Globe, Megaphone, Newspaper, BookMarked, GraduationCap, Briefcase, Building2, Scale, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      title: "Open Journal Systems",
      desc: "Instalasi, kustomisasi, dan pelatihan OJS atau website institusi yang profesional.",
      icon: BookOpen
    },
    {
      title: "Website Development",
      desc: "Pembuatan website modern, responsif, dan SEO-ready untuk mendukung pertumbuhan digital bisnis Anda.",
      icon: Globe
    },
    {
      title: "Jasa Iklan Digital",
      desc: "Strategi periklanan berbasis data di Google Ads, Meta Ads, dan platform digital lainnya.",
      icon: Megaphone
    },
    {
      title: "Publikasi Jurnal",
      desc: "Pendampingan submit, layout, hingga strategi indeksasi untuk jurnal ilmiah.",
      icon: Newspaper
    },
    {
      title: "Penerbitan Buku",
      desc: "Kurasi naskah, ISBN, desain sampul & tata letak, percetakan, hingga distribusi.",
      icon: BookMarked
    },
    {
      title: "Pelatihan Kompetensi LKP",
      desc: "Kursus keterampilan untuk mendukung peningkatan kompetensi individu dan tenaga kerja.",
      icon: GraduationCap
    },
    {
      title: "Program Pelatihan Kerja",
      desc: "Program pelatihan kerja terstruktur bagi pencari kerja maupun pengembangan SDM perusahaan.",
      icon: Briefcase
    },
    {
      title: "Virtual Office",
      desc: "Layanan kantor virtual profesional dengan alamat bisnis resmi, penerimaan surat, hingga dukungan administrasi.",
      icon: Building2
    },
    {
      title: "Legalitas Usaha",
      desc: "Pendampingan pengurusan perizinan, badan hukum, hingga sertifikasi usaha.",
      icon: Scale
    }
  ];

  return (
    <section className="w-full">
      {/* HEADER (Back to Center & Full Width) */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h3 className="text-[#FAB958] font-bold tracking-wider uppercase text-sm mb-3">PRODUK & LAYANAN</h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3263] leading-tight mb-6">Solusi Digital & Edukasi Terintegrasi</h2>
        <p className="text-slate-500 text-lg">
          Solusi digital berkelanjutan, tepat waktu, dan relevan dengan perkembangan teknologi terkini untuk institusi dan bisnis Anda.
        </p>
      </div>

      {/* MAIN GRID (Full Width, 3 Columns) */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesList.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link key={index} href="/layanan/indeksasi" className="group cursor-pointer bg-white border border-slate-100/80 rounded-3xl p-6 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(26,50,99,0.08)] transition-all duration-500 flex flex-col h-full">
              <div className="flex gap-4 items-start mb-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-slate-50 text-[#1A3263] flex items-center justify-center group-hover:bg-[#FAB958] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon size={24} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-[#1A3263] mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm font-bold text-[#1A3263] group-hover:text-[#FAB958] transition-colors">Lihat Detail</span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#FAB958] group-hover:text-white text-[#1A3263] transition-all duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
