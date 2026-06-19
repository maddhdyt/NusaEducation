"use client";
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: 'start', skipSnaps: false, dragFree: true },
    [WheelGesturesPlugin()]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

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

  useEffect(() => {
    if (!emblaApi) return;
    
    const viewportNode = emblaApi.rootNode();
    const onWheel = (e: WheelEvent) => {
      // If user is scrolling horizontally (trackpad) or using Shift+Scroll
      const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey;
      
      if (isHorizontalScroll) {
        e.preventDefault(); // Prevent page from jumping/scrolling
        if (e.deltaX > 0 || (e.shiftKey && e.deltaY > 0)) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollPrev();
        }
      }
    };

    viewportNode.addEventListener('wheel', onWheel, { passive: false });
    return () => viewportNode.removeEventListener('wheel', onWheel);
  }, [emblaApi]);

  const testimonials = [
    {
      Client: "Dr. Aisyah, Dekan Universitas X",
      Metric: "300% Kenaikan Submisi",
      Story: "Migrasi OJS 3 kami selesai dalam 2 minggu. Sekarang sistem kami jauh lebih stabil dan jumlah submit jurnal meningkat drastis.",
      Image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
    },
    {
      Client: "Budi Santoso, Editor Jurnal Y",
      Metric: "Indeksasi SINTA 2",
      Story: "Nusa Education bukan cuma teknis, tapi mereka paham standar editorial. Sangat membantu dalam proses akreditasi.",
      Image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
    },
    {
      Client: "Universitas Z",
      Metric: "LMS Integrasi",
      Story: "Sistem LMS yang dibangun sangat membantu efisiensi tenaga pengajar kami. Sangat responsif dan intuitif.",
      Image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
    },
    {
      Client: "Prof. Dr. Haryono, Direktur Pascasarjana",
      Metric: "Indeksasi Scopus Tembus",
      Story: "Tim Nusa Education memberikan pendampingan yang luar biasa dari hulu ke hilir hingga jurnal kami diakui secara global di Scopus.",
      Image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
    },
    {
      Client: "Siti Rahmawati, M.Pd., Kepala LPPM",
      Metric: "1200+ Penulis Aktif",
      Story: "Pelatihan manajerial jurnal dari Nusa Education sukses menggerakkan ratusan dosen kami untuk lebih aktif mempublikasikan paper mereka.",
      Image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full" id="testimoni">
      {/* SECTION HEADER */}
      <div className="max-w-3xl mx-auto text-center px-4 mb-16">
        <h3 className="text-[#FAB958] font-bold tracking-wider uppercase text-sm mb-3">TESTIMONIAL</h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3263] mb-6">Diceritakan oleh Klien Kami.</h2>
        <p className="text-slate-500 text-lg">
          Lihat bagaimana solusi kami menciptakan dampak nyata bagi universitas dan peneliti di seluruh Indonesia.
        </p>
      </div>

      {/* EDITORIAL CAROUSEL */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex gap-6 md:gap-8 pr-4 md:pr-0">
          {testimonials.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-[2.5rem] w-[300px] h-[540px] flex-shrink-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              
              <img 
                src={item.Image} 
                alt={item.Client} 
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out pointer-events-none" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none"></div>

              <div className="absolute bottom-4 left-4 right-4 p-4 md:p-5 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex flex-col translate-y-2 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
                <span className="text-[#FAB958] font-black text-[10px] uppercase tracking-[0.2em] mb-1 drop-shadow-md">
                  {item.Metric}
                </span>
                <h4 className="text-white font-extrabold text-lg md:text-xl leading-tight drop-shadow-lg">
                  {item.Client}
                </h4>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* NAVIGATION CONTROLS */}
      <div className="flex items-center justify-center gap-6 mt-12 mb-8">
        <button 
          onClick={scrollPrev} 
          disabled={prevBtnDisabled} 
          className="p-3 rounded-full border border-slate-200 text-[#1A3263] hover:bg-[#FAB958] hover:text-white hover:border-[#FAB958] transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
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
        >
          <ArrowRight className="w-5 h-5"/>
        </button>
      </div>

    </div>
  );
}
