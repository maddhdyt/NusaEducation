"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "Berapa lama proses pembuatan OJS dari awal hingga siap digunakan?",
    answer: "Proses setup standar biasanya memakan waktu 7 hingga 14 hari kerja. Namun, durasi ini bisa bervariasi bergantung pada tingkat kerumitan kustomisasi tampilan dan besarnya data yang harus dimigrasi (jika ada)."
  },
  {
    question: "Apakah jurnal kami aman dari serangan peretas (hacker) atau deface?",
    answer: "Pasti. Kami menerapkan standar keamanan tingkat lanjut seperti firewall khusus, perlindungan anti-DDoS, pencegahan injeksi malware, dan sistem pencadangan (backup) database otomatis setiap hari untuk menjamin aset digital Anda 100% aman."
  },
  {
    question: "Jika kami sudah punya OJS versi lama, apakah datanya bisa dipindahkan tanpa hilang?",
    answer: "Sangat bisa. Kami berpengalaman memigrasi sistem dari OJS 2 ke OJS 3 secara aman. Artikel, metadata, akun penulis, hingga riwayat proses review Bapak/Ibu dijamin tetap utuh tanpa ada yang terhapus."
  },
  {
    question: "Setelah website jurnal selesai, apakah tim pengelola akan diajari cara menggunakannya?",
    answer: "Tentu saja. Setiap paket pembuatan dan migrasi kami sudah dilengkapi dengan sesi pelatihan (training) eksklusif untuk jajaran Admin, Editor, dan Reviewer, lengkap beserta modul panduan penggunaannya."
  },
  {
    question: "Apakah tampilan jurnal bisa disesuaikan dengan warna dan identitas kampus kami?",
    answer: "Tentu. Pada paket Premium dan Enterprise, tim desain kami akan merombak total tampilan dasar OJS yang kaku, menyesuaikannya dengan logo, warna, dan pedoman identitas visual (brand guidelines) kampus atau instansi Anda agar tampak modern dan profesional."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white py-16 md:py-20 lg:py-24 font-sans selection:bg-[#FF4500]/20 selection:text-[#0A192F] scroll-mt-20">
      <div className="max-w-[1380px] mx-auto px-6 flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between">

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
            Pertanyaan seputar Web Jurnal OJS
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
