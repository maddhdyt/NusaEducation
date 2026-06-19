"use client";
import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Berapa lama estimasi proses indeksasi Scopus / SINTA?",
      answer: "Waktu estimasi sangat bergantung pada kondisi awal jurnal Anda dan respons dari pihak pengindeks. Untuk SINTA biasanya memakan waktu 1-3 bulan setelah submission, sedangkan Scopus membutuhkan proses evaluasi yang lebih ketat sekitar 3-6 bulan hingga keputusan akhir dikeluarkan."
    },
    {
      question: "Apakah Nusa Education menjamin jurnal pasti tembus indeksasi?",
      answer: "Nusa Education memberikan jaminan pendampingan penuh hingga sistem dan standar editorial Anda memenuhi kualifikasi pengindeks (Scopus/SINTA). Namun, keputusan mutlak penerimaan sepenuhnya berada di tangan dewan kurator (CSAB Scopus / Arjuna Kemdikbud)."
    },
    {
      question: "Bagaimana sistem pembayaran untuk layanan pendampingan?",
      answer: "Kami menerapkan sistem termin (cicilan) berdasarkan milestone atau pencapaian target. Hal ini untuk memastikan transparansi dan memberikan rasa aman bagi kedua belah pihak. Rincian persentase termin dapat disesuaikan saat penyusunan kontrak kerjasama."
    },
    {
      question: "Apakah migrasi OJS 2 ke OJS 3 akan menyebabkan downtime (situs mati)?",
      answer: "Tim IT kami menggunakan metode staging dan sinkronisasi database paralel. Ini berarti situs jurnal lama Anda akan tetap hidup (zero downtime) selama masa pengembangan. Transisi ke OJS 3 baru akan dilakukan saat malam hari dengan waktu propagasi minimal."
    },
    {
      question: "Apakah layanan ini mencakup proofreading bahasa Inggris native?",
      answer: "Ya, kami bekerja sama dengan lembaga proofreader tersertifikasi dan native speaker untuk memastikan kualitas terjemahan dan tata bahasa artikel ilmiah Anda memenuhi standar internasional yang disyaratkan oleh publisher ternama seperti Elsevier dan Springer."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 bg-white relative" id="faq">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* LEFT COLUMN (The Sticky Header) */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-32">
            <h5 className="text-[#FAB958] font-bold text-xs tracking-widest uppercase mb-4">
              FAQ
            </h5>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3263] tracking-tight mb-6 leading-tight">
              Pertanyaan Umum.
            </h2>
            <p className="text-slate-500 text-lg mb-8">
              Temukan jawaban cepat untuk pertanyaan yang sering diajukan oleh klien akademis kami.
            </p>
            
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-6">
              <h4 className="text-[#1A3263] font-bold mb-2">Masih punya pertanyaan?</h4>
              <p className="text-slate-500 text-sm mb-4">Tim representatif kami siap membantu Anda 24/7.</p>
              <a href="#contact" className="text-[#FAB958] font-bold text-sm hover:underline flex items-center gap-1 w-fit">
                Hubungi Tim Kami <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (The Accordion List) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`bg-white border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-[#FAB958]/50 shadow-md rounded-[2rem]' 
                    : 'border-slate-200 rounded-[1.5rem] hover:border-slate-300'
                }`}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full px-6 py-5 md:px-8 md:py-6 text-left cursor-pointer group outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg font-bold transition-colors pr-6 ${
                    isOpen ? 'text-[#FAB958]' : 'text-[#1A3263] group-hover:text-[#FAB958]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-[#FAB958]/10 text-[#FAB958] rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-[#FAB958]/10 group-hover:text-[#FAB958]'
                  }`}>
                    <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 md:px-8 pb-5 md:pb-6 text-slate-500 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
