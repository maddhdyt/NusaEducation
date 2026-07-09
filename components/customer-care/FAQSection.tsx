"use client";
import React, { useState, useRef } from 'react';

const faqs = [
  {
    question: "Bagaimana alur pengerjaan dan pembayarannya?",
    answer: "Proses dimulai dari diskusi awal untuk menentukan kebutuhan Anda. Setelah sepakat, kami akan mengirimkan invoice DP (Down Payment) sebesar 50%. Setelah DP diterima, tim kami akan mulai bekerja. Sisa pembayaran dilakukan setelah proyek selesai dan Anda menyetujui hasil akhir sebelum serah terima aset."
  },
  {
    question: "Berapa lama estimasi pengerjaan untuk setiap layanan?",
    answer: "Waktu pengerjaan sangat bervariasi. Untuk Pembuatan Website OJS standar biasanya membutuhkan 3-7 hari kerja. Namun, untuk manajemen jurnal kompleks atau optimasi spesifik (seperti pengajuan Scopus), prosesnya bisa memakan waktu berbulan-bulan tergantung responsivitas reviewer dan kesiapan dokumen Anda."
  },
  {
    question: "Apakah ada garansi jika hasil tidak sesuai?",
    answer: "Ya, kami memberikan garansi revisi sesuai dengan paket yang Anda pilih. Kami memastikan hasil akhir sesuai dengan brief awal yang disepakati. Jika ada kendala teknis setelah serah terima (seperti server down dari pihak kami), tim support siap membantu tanpa biaya tambahan selama masa garansi."
  },
  {
    question: "Apakah saya bisa request layanan yang tidak ada di daftar paket?",
    answer: "Tentu! Kami sangat terbuka untuk kebutuhan kustom. Silakan hubungi kami via WhatsApp atau Email untuk menjelaskan kebutuhan spesifik Anda. Tim kami akan menyusun solusi khusus dan memberikan penawaran harga yang disesuaikan."
  },
  {
    question: "Apakah data dan kerahasiaan institusi kami aman?",
    answer: "Kami menjamin 100% kerahasiaan data (Non-Disclosure). Setiap credential server, dokumen manuskrip, dan data pengguna akan diperlakukan dengan standar keamanan ketat. Kami juga dapat menandatangani NDA (Non-Disclosure Agreement) formal jika institusi Anda mensyaratkannya."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-24 lg:py-32">
      <div className="w-full max-w-[1000px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[40px] md:text-[54px] font-serif font-normal text-[#0A192F] tracking-tight leading-[1.1] mb-6" style={{ WebkitTextStroke: "0.8px currentColor" }}>
            Pertanyaan Umum
          </h2>
          <p className="text-[#475569] text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto font-medium">
            Temukan jawaban instan untuk pertanyaan yang paling sering diajukan oleh klien kami.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border transition-colors duration-300 ${isActive ? 'border-slate-300 bg-slate-50' : 'border-slate-200 bg-white hover:border-slate-300'}`}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex justify-between items-center focus:outline-none"
                >
                  <span className={`text-[16px] md:text-[18px] font-bold font-sans pr-8 transition-colors ${isActive ? 'text-[#FF9F1C]' : 'text-[#0A192F]'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? 'border-[#FF9F1C] bg-[#FF9F1C] text-white rotate-180' : 'border-slate-300 text-slate-400'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className="overflow-hidden transition-all duration-500 ease-[0.16,1,0.3,1]"
                  style={{ maxHeight: isActive ? '500px' : '0', opacity: isActive ? 1 : 0 }}
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                    <p className="text-[#475569] text-[15px] md:text-[16px] leading-relaxed font-sans font-medium">
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
