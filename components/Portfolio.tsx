"use client";
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { ArrowLeft, ArrowRight, ArrowRight as ArrowIcon, Server, TrendingUp, Archive, BookOpen, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  console.log("Portfolio rendering");

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: 'start', skipSnaps: false, dragFree: true },
    [WheelGesturesPlugin()]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  
  // MODAL STATE
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCategory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedCategory]);

  const portfolioItems = [
    {
      id: 1,
      title: "Sistem Jurnal OJS",
      desc: "Migrasi server dan kustomisasi tema OJS 3.x standar internasional.",
      Icon: Server,
      projects: [
        "Migrasi OJS 2 ke OJS 3 untuk Jurnal Teknologi Universitas Nusantara.",
        "Setup Dedicated Server untuk 15 Jurnal Internal Politeknik Mandiri.",
        "Kustomisasi Tema OJS Standar Internasional untuk Jurnal Kedokteran.",
        "Integrasi sistem DOI otomatis dengan Crossref API."
      ]
    },
    {
      id: 2,
      title: "Indeksasi & Strategi",
      desc: "Pendampingan submit naskah untuk target SINTA dan Scopus.",
      Icon: TrendingUp,
      projects: [
        "Pendampingan Akreditasi SINTA 4 ke SINTA 2 dalam 1 tahun.",
        "Review dan Penyesuaian Standar Naskah untuk Indeksasi Scopus Q3.",
        "Manajemen Alur Editorial Internasional untuk Jurnal Ekonomi Bisnis.",
        "Strategi Optimalisasi Sitasi dan Google Scholar Profiling."
      ]
    },
    {
      id: 3,
      title: "Tata Kelola Berkala",
      desc: "Digitalisasi arsip jurnal lama untuk institusi akademik.",
      Icon: Archive,
      projects: [
        "Digitalisasi 10.000 halaman arsip jurnal fisik ke format PDF/A.",
        "Standardisasi Alur Kerja Redaksi dan Penunjukan Dewan Ahli.",
        "Input Metadata Retrospektif untuk Edisi Publikasi 2010-2020.",
        "Audit Kepatuhan Publikasi Etik COPE (Committee on Publication Ethics)."
      ]
    },
    {
      id: 4,
      title: "Penerbitan Akademik",
      desc: "Kurasi desain sampul, ISBN, hingga distribusi buku ajar.",
      Icon: BookOpen,
      projects: [
        "Penerbitan 50+ Judul Buku Ajar Ber-ISBN di Tahun 2023.",
        "Publikasi Prosiding Konferensi Internasional Terindeks DOAJ.",
        "Desain Sampul Premium dan Tata Letak (Layout) Buku Ilmiah.",
        "Distribusi Digital ke Perpustakaan Nasional dan Jaringan Kampus."
      ]
    }
  ];

  return (
    <section className="w-full relative overflow-hidden flex flex-col" id="portofolio">
      {/* HEADER SECTION */}
      <div className="max-w-3xl mx-auto text-center px-4 mb-16 relative z-10">
        <h5 className="text-[#FAB958] font-bold text-xs tracking-widest uppercase mb-4">Portofolio</h5>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3263] tracking-tight mb-6">
          Rekam Jejak Kolaborasi.
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed">
          Kami mendampingi universitas dan lembaga riset menuntaskan tantangan manajemen jurnal, migrasi sistem, hingga percepatan indeksasi dengan strategi yang terukur.
        </p>
      </div>

      {/* EMBLA CAROUSEL */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full overflow-hidden cursor-grab active:cursor-grabbing pb-4 relative z-10" ref={emblaRef}>
        <div className="flex gap-6 md:gap-8">
          {portfolioItems.map((item) => {
            const IconComponent = item.Icon;
            return (
              <div 
                key={item.id} 
                className="w-[300px] md:w-[400px] flex-shrink-0 bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1A3263] mb-8 group-hover:bg-[#FAB958] group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-[#1A3263] mb-3">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                  {item.desc}
                </p>
                
                <button 
                  onClick={() => setSelectedCategory(item)}
                  className="flex items-center gap-2 text-sm font-bold text-[#FAB958] hover:text-[#1A3263] transition-colors w-fit cursor-pointer"
                >
                  Lihat Detail <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* NAVIGATION CONTROLS */}
      <div className="flex items-center justify-center gap-6 mt-12 mb-8 relative z-10">
        <button 
          onClick={scrollPrev} 
          disabled={prevBtnDisabled} 
          className="p-3 rounded-full border border-slate-200 text-[#1A3263] hover:bg-[#FAB958] hover:text-white hover:border-[#FAB958] transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-5 h-5"/>
        </button>
        
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`${index === selectedIndex ? 'w-8 h-2 bg-[#FAB958]' : 'w-2 h-2 bg-slate-200 hover:bg-slate-300'} rounded-full transition-all duration-300 cursor-pointer`}
              aria-label={`Scroll to snap ${index + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={scrollNext} 
          disabled={nextBtnDisabled} 
          className="p-3 rounded-full border border-slate-200 text-[#1A3263] hover:bg-[#FAB958] hover:text-white hover:border-[#FAB958] transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ArrowRight className="w-5 h-5"/>
        </button>
      </div>

      {/* THE MODAL (Framer Motion) */}
      <AnimatePresence>
        {selectedCategory && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCategory(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] cursor-pointer"
            />
            
            {/* MODAL CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl bg-white rounded-[2.5rem] shadow-2xl z-[101] overflow-hidden flex flex-col"
            >
              {/* MODAL HEADER */}
              <div className="bg-[#F4F7F9] px-8 py-8 flex justify-between items-start">
                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#FAB958]">
                    <selectedCategory.Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-[#FAB958] font-bold text-xs tracking-widest uppercase mb-1">Portofolio Kategori</h4>
                    <h3 className="text-2xl font-extrabold text-[#1A3263]">{selectedCategory.title}</h3>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-[#1A3263] hover:bg-slate-100 transition-colors shadow-sm cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* MODAL BODY (Scrollable List) */}
              <div className="p-8 max-h-[60vh] overflow-y-auto">
                <p className="text-slate-500 mb-8 leading-relaxed">
                  {selectedCategory.desc} Berikut adalah daftar proyek unggulan yang telah kami selesaikan dalam kategori ini:
                </p>
                <div className="flex flex-col gap-4">
                  {selectedCategory.projects.map((project: string, idx: number) => (
                    <div 
                      key={idx} 
                      className="group flex gap-4 p-4 rounded-2xl border border-slate-100 bg-white hover:bg-[#F4F7F9] hover:border-[#F4F7F9] transition-all duration-300"
                    >
                      <div className="mt-1 flex-shrink-0 text-[#FAB958] group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed group-hover:text-[#1A3263] transition-colors">
                        {project}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* MODAL FOOTER */}
              <div className="bg-slate-50 px-8 py-6 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="px-6 py-2.5 rounded-full bg-[#1A3263] text-white font-bold text-sm hover:bg-[#FAB958] transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
