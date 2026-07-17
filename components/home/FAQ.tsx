"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "Bagaimana cara NusaEducation mengelola sistem informasi akademik?",
    answer: "NusaEducation menawarkan sistem terpusat yang mencakup manajemen data mahasiswa, jadwal perkuliahan, hingga sistem penilaian otomatis. Seluruh fitur ini saling terintegrasi dalam satu platform dashboard yang mudah digunakan, baik oleh admin, dosen, maupun mahasiswa."
  },
  {
    question: "Apakah platform ini cocok untuk mengelola jurnal kampus?",
    answer: "Tentu saja! NusaEducation dilengkapi dengan modul khusus e-Journal yang memfasilitasi proses publikasi jurnal secara mandiri dan aman. Sistem kami mendukung alur peer-review, manajemen edisi, hingga distribusi jurnal secara digital sesuai standar akreditasi."
  },
  {
    question: "Apakah NusaEducation memiliki modul untuk Penerimaan Mahasiswa Baru (PMB)?",
    answer: "Ya, kami menyediakan modul PMB interaktif yang memungkinkan calon mahasiswa mendaftar secara online, mengunggah dokumen persyaratan, dan memantau status kelulusan secara real-time. Modul ini terintegrasi langsung dengan sistem pembayaran tagihan."
  },
  {
    question: "Bisakah sistem ini diintegrasikan dengan software kampus yang sudah ada?",
    answer: "Sangat bisa. Arsitektur sistem kami dirancang dengan konsep API-First, memungkinkan integrasi mulus dengan berbagai sistem warisan (legacy systems) seperti sistem keuangan, perpustakaan, atau HRD yang mungkin sudah berjalan di institusi Anda."
  },
  {
    question: "Apakah ada dukungan teknis jika terjadi kendala?",
    answer: "Kami menyediakan dukungan teknis penuh (SLA 99.9%) melalui sistem ticketing, live chat, dan kunjungan langsung (on-site support) untuk memastikan operasional kampus Anda tidak pernah terganggu."
  }
];

export default function FAQ() {
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
            Frequently asked questions about Nusa Education
          </h3>

        </div>

        {/* Right Column: Accordion */}
        <div className="w-full lg:flex-1">

          {/* The Accordion Container */}
          <div className="bg-[#FFF9F0] border border-[#FF9F1C] flex flex-col">

            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              const isLast = index === faqData.length - 1;

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
                    <div className="w-[30px] h-[30px] shrink-0 flex items-center justify-center border border-[#FF9F1C] text-[#FF9F1C]">
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
