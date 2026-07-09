"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowRight as ArrowRightSmall } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Sistem Jurnal Terpadu Universitas Ternate",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    desc: "Transformasi digital dari manuskrip manual ke OJS modern dengan alur kerja (workflow) yang sepenuhnya otomatis.",
    themeColor: "#FF9F1C",
  },
  {
    id: 2,
    title: "Portal Akademik & LMS Kampus Digital",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    desc: "Arsitektur kustom tahan banting untuk menangani puluhan ribu interaksi mahasiswa secara bersamaan tanpa kendala.",
    themeColor: "#3B82F6",
  },
  {
    id: 3,
    title: "Kampanye Penerimaan Mahasiswa Baru",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    desc: "Strategi periklanan digital presisi berbasis data yang memberikan ROI maksimal pada anggaran pemasaran kampus.",
    themeColor: "#10B981",
  },
  {
    id: 4,
    title: "Indeksasi & Agregator Jurnal Internasional",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop",
    desc: "Kustomisasi tema tingkat lanjut dan integrasi API yang memenuhi kriteria ketat jurnal akademik berstandar global.",
    themeColor: "#E71D36",
  },
  {
    id: 5,
    title: "Redesign Sistem Informasi Keuangan Kampus",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
    desc: "Pengembangan antarmuka intuitif untuk mempermudah pemantauan arus kas, pembayaran SPP, dan pelaporan keuangan.",
    themeColor: "#8B5CF6",
  },
  {
    id: 6,
    title: "Aplikasi Mobile Smart Campus Tracker",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
    desc: "Aplikasi mobile native terintegrasi untuk melacak jadwal, nilai, dan absensi mahasiswa secara real-time.",
    themeColor: "#F43F5E",
  },
  {
    id: 7,
    title: "Dashboard Analitik Penerimaan Mahasiswa Baru",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    desc: "Sistem pelaporan cerdas untuk memvisualisasikan data demografi dan konversi pendaftar dari tahun ke tahun.",
    themeColor: "#14B8A6",
  },
  {
    id: 8,
    title: "Otomatisasi Penerbitan Sertifikat Digital",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    desc: "Pembuatan sertifikat kompetensi blockchain yang aman, terverifikasi otomatis, dan tidak dapat dipalsukan.",
    themeColor: "#F59E0B",
  }
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [spacerWidth, setSpacerWidth] = useState(24); // Fallback mobile padding

  useEffect(() => {
    const updateSpacer = () => {
      // Mengukur dari Teks Judul di desktop, tapi gunakan padding standar di mobile
      if (window.innerWidth < 768) {
        setSpacerWidth(24); // Sesuai px-6
      } else {
        const titleEl = document.getElementById('portfolio-title');
        if (titleEl) {
          setSpacerWidth(titleEl.getBoundingClientRect().left);
        }
      }
    };

    // Initial calculation after mount
    updateSpacer();

    // Recalculate on window resize
    window.addEventListener('resize', updateSpacer);
    return () => window.removeEventListener('resize', updateSpacer);
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="portofolio" className="w-full bg-white py-20 font-sans overflow-hidden">

      {/* Header Container */}
      <div id="portfolio-header" className="max-w-[1380px] mx-auto px-6 md:px-10 mb-8 md:mb-16 flex flex-col items-center md:flex-row md:items-end justify-between gap-6 md:gap-8">
        
        <div id="portfolio-title" className="flex flex-col items-center md:items-start w-full md:w-auto text-center md:text-left">
          <h2 className="font-serif leading-[0.85] tracking-tight flex flex-col items-center md:items-start relative z-20">
            <span className="inline-block tracking-tight text-[#133466] bg-[#cbdfff] px-3 md:px-4 py-1 md:py-2 text-[48px] sm:text-[56px] md:text-[64px] lg:text-[76px] relative z-0">
              Project &
            </span>
            <span className="inline-block tracking-tight text-white bg-[#133466] px-3 md:px-4 py-1 md:py-2 text-[48px] sm:text-[56px] md:text-[64px] lg:text-[76px] relative z-10 -mt-1 md:-mt-2 left-0 md:left-2 top-1 md:top-3 -rotate-2 origin-center md:origin-top-left shadow-xl">
              Portfolio
            </span>
          </h2>
        </div>
        
        {/* Navigation Arrows (Desktop Only) */}
        <div className="hidden md:flex gap-1 md:-mb-2">
          <button
            onClick={scrollLeft}
            className="flex items-center justify-center text-slate-400 hover:text-[#0A192F] transition-colors p-1"
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
          </button>
          <button
            onClick={scrollRight}
            className="flex items-center justify-center text-slate-400 hover:text-[#0A192F] transition-colors p-1"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
          </button>
        </div>

      </div>

      {/* Horizontal Carousel (Full Bleed) */}
      <div className="w-full relative">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar relative pb-8"
        >
          {/* Exact Pixel Spacer for Alignment */}
          <div
            className="flex-shrink-0 invisible"
            style={{ width: `${spacerWidth}px` }}
          />

          {projects.map((project) => (
            <div key={project.id} className="w-[85vw] sm:w-[300px] md:w-[320px] lg:w-[340px] flex-shrink-0 snap-start group cursor-pointer flex flex-col mr-4">

              {/* Flat Card Design */}
              <div className="w-full flex flex-col h-full bg-[#E0F2FE] transition-transform duration-300 group-hover:-translate-y-2">

                {/* Top Block (Image) - No colorful overlay */}
                <div className="w-full aspect-[16/10] relative overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 340px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Bottom Block (Content) */}
                <div className="p-2 md:p-3 flex flex-col flex-grow relative">
                  <h3 className="text-xl md:text-[22px] font-serif font-normal text-[#0A192F] leading-[1.15] mb-3 tracking-tight" style={{ WebkitTextStroke: "0.6px currentColor" }}>
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-[13px] md:text-sm leading-relaxed mb-6 flex-grow">
                    {project.desc}
                  </p>

                  <Link href={`/portfolio/${project.id}`} className="text-[#0A192F] text-[13px] font-medium flex items-center gap-2 mt-auto group-hover:gap-3 transition-all">
                    View Case Study <ArrowRightSmall className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Arrows (Below Carousel) */}
      <div className="flex md:hidden justify-center gap-6 mt-8">
        <button
          onClick={scrollLeft}
          className="flex items-center justify-center text-slate-400 hover:text-[#0A192F] transition-colors p-2"
          aria-label="Scroll left"
        >
          <ArrowLeft className="w-8 h-8" strokeWidth={2.5} />
        </button>
        <button
          onClick={scrollRight}
          className="flex items-center justify-center text-slate-400 hover:text-[#0A192F] transition-colors p-2"
          aria-label="Scroll right"
        >
          <ArrowRight className="w-8 h-8" strokeWidth={2.5} />
        </button>
      </div>

      {/* CSS untuk menyembunyikan scrollbar native tapi tetap bisa discroll */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .carousel-spacer {
          flex-shrink: 0;
          width: 24px;
        }
        @media (min-width: 768px) {
          .carousel-spacer {
            width: max(40px, calc((100vw - 1380px) / 2 + 40px));
          }
        }
      `}} />
    </section>
  );
}
