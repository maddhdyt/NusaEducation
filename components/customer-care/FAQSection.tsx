"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white py-12 md:py-24 font-sans selection:bg-[#FF9F1C]/20 selection:text-[#0A192F]">
      <div className="max-w-[1380px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between">

        {/* Left Column: Heading */}
        <div className="w-full lg:w-[30%] flex flex-col items-start shrink-0">

          {/* Tilted FAQs Badge */}
          <div
            className="inline-block bg-[#FF9F1C] text-[#0A192F] px-2 py-0.5 shadow-[4px_4px_0px_#0A192F] border border-[#0A192F] mt-4 md:mt-12 mb-4 md:mb-5 -rotate-6 origin-bottom-left translate-x-2"
            style={{ transform: "rotate(-10deg)" }}
          >
            <h2 className="text-[36px] md:text-[54px] leading-none font-serif font-medium tracking-tight">
              FAQs
            </h2>
          </div>

          <h3 className="text-[28px] md:text-[38px] font-serif font-medium text-[#001134] leading-[1.1] md:leading-[1.05] tracking-tight md:tracking-normal max-w-[360px] mb-8 lg:mb-0" style={{ WebkitTextStroke: "1px currentColor" }}>
            Pertanyaan Umum seputar layanan Customer Care
          </h3>

        </div>

        {/* Right Column: Accordion */}
        <div className="w-full lg:flex-1">

          {/* The Accordion Container */}
          <div className="bg-[#FFF9F0] border border-[#FF9F1C] flex flex-col">

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const isLast = index === faqs.length - 1;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${!isLast ? "border-b border-[#FF9F1C]" : ""}`}
                >

                  {/* Question Row */}
                  <div
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center py-4 px-4 md:px-6 cursor-pointer select-none group"
                  >
                    <h4 className="text-[20px] md:text-[22px] font-serif font-normal text-[#001134] pr-6 group-hover:text-[#F24E1E] transition-colors duration-200" style={{ WebkitTextStroke: "0.5px currentColor" }}>
                      {faq.question}
                    </h4>

                    {/* Caret Box */}
                    <div className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center border border-[#FF9F1C] text-[#FF9F1C]">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>

                  {/* Answer Row (Animated) */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 md:px-6 pb-8 pt-1">
                          <p className="text-[15px] md:text-[16px] text-slate-800 leading-relaxed font-sans font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
