"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

const features = [
  {
    id: 0,
    title: "Manajemen Jurnal (OJS) Tanpa Hambatan",
    desc: "Tinggalkan kerumitan administrasi manual. Platform OJS kami disesuaikan untuk mempercepat proses peer-review hingga publikasi naskah dengan pengalaman pengguna yang modern dan intuitif.",
    linkText: "Eksplorasi Fitur OJS →",
    linkHref: "#",
    badge: "CORE",
    themeColor: "#FF9F1C", // Orange
    bgLight: "#FFF7ED", // orange-50
    borderColor: "#FFDCC2",
    image: "https://ik.imagekit.io/yqhp1cmbp/image1115.webp" // Placeholder for SS Jurnal/OJS
  },
  {
    id: 1,
    title: "Arsitektur Custom & Keamanan Tinggi",
    desc: "Dibangun oleh developer ahli dengan standar clean code dan enkripsi mutakhir. Platform Anda siap menangani lonjakan pengunjung dan ancaman siber tanpa mengorbankan kecepatan.",
    linkText: "Lihat Spesifikasi Teknis →",
    linkHref: "#",
    themeColor: "#3B82F6", // Blue
    bgLight: "#EFF6FF", // blue-50
    borderColor: "#BFDBFE",
    image: "https://ik.imagekit.io/yqhp1cmbp/image1118.webp" // Placeholder for SS Coding
  },
  {
    id: 2,
    title: "Kampanye Iklan & Analitik Terukur",
    desc: "Jangan menebak-nebak strategi Anda. Dasbor analitik kami menyajikan data real-time dari kampanye pemasaran digital untuk memastikan setiap anggaran yang dikeluarkan memberikan ROI maksimal.",
    linkText: "Pelajari Layanan Digital Ads →",
    linkHref: "#",
    themeColor: "#10B981", // Emerald
    bgLight: "#ECFDF5", // emerald-50
    borderColor: "#A7F3D0",
    image: "https://ik.imagekit.io/yqhp1cmbp/image1116.webp" // Placeholder for SS Dashboard Iklan
  },
  {
    id: 3,
    title: "Desain UI/UX & Rebranding Visual",
    desc: "Tingkatkan kredibilitas institusi Anda dengan desain antarmuka modern yang memukau. Dari website portal hingga sistem akademik, kami merancang pengalaman pengguna yang estetis dan intuitif.",
    linkText: "Lihat Portofolio Desain →",
    linkHref: "#",
    themeColor: "#E71D36", // Red
    bgLight: "#FEF2F2", // red-50
    borderColor: "#FECACA",
    image: "https://ik.imagekit.io/yqhp1cmbp/image1118.webp"
  },
  {
    id: 4,
    title: "Integrasi Sistem Akademik & API",
    desc: "Hubungkan berbagai platform kampus Anda secara mulus. Kami memfasilitasi integrasi data tersentralisasi antara portal penerimaan mahasiswa, sistem akademik, dan manajemen keuangan.",
    linkText: "Pelajari Solusi Integrasi →",
    linkHref: "#",
    themeColor: "#8B5CF6", // Purple
    bgLight: "#F5F3FF", // purple-50
    borderColor: "#DDD6FE",
    image: "https://ik.imagekit.io/yqhp1cmbp/image1115.webp"
  }
];

// Reusable Grid Background Component
const VisualGridBackground = ({ color }: { color: string }) => (
  <div
    className="absolute inset-0 z-0 opacity-20 pointer-events-none"
    style={{
      backgroundImage: `linear-gradient(${color} 2px, transparent 2px), linear-gradient(90deg, ${color} 2px, transparent 2px)`,
      backgroundSize: '40px 40px'
    }}
  />
);

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Variasi animasi untuk container gambar sebelah kanan
  const visualVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <section id="keunggulan" className="w-full bg-white font-sans overflow-visible py-20">
      <div className="max-w-[1380px] mx-auto px-6 md:px-10 relative">

        {/* Absolute Vertical Grid Lines (Full Height of right column) */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-10 right-10 pointer-events-none z-10">
          <div className="w-full h-full flex justify-end">
            <div className="w-1/2 flex">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1/5 h-full border-l border-slate-200 transition-colors duration-500"
                  style={{ borderColor: `${features[activeIndex].themeColor}40` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Mockup (Absolute over right column) */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-10 right-10 pointer-events-none z-20">
          <div className="w-full h-full flex items-start justify-end">

            {/* Sticky Mockup Window */}
            <div className="pointer-events-auto sticky top-32 w-1/2 pl-8 flex flex-col group hover:-translate-y-2 transition-transform duration-500 pt-8">
              <div className="w-full aspect-16/11 bg-[#0A192F] rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-800 overflow-hidden flex flex-col ring-1 ring-white/10">

                {/* Sleek Dark Browser Top Bar */}
                <div className="w-full h-10 md:h-12 bg-[#0A192F] border-b border-slate-800 flex items-center px-4 shrink-0 relative">
                  <div className="flex gap-2 shrink-0 z-10">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  {/* Address bar */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-1/2 md:w-3/5 h-6 md:h-7 bg-slate-800/50 border border-slate-700/50 rounded-md flex items-center px-3 justify-center text-[11px] text-slate-400 font-mono truncate">
                      nusa.ed/{features[activeIndex].title.split(" ")[0].toLowerCase()}
                    </div>
                  </div>
                </div>

                {/* Browser Content */}
                <div className="flex-1 relative bg-slate-100 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeIndex}
                      src={features[activeIndex].image}
                      alt={features[activeIndex].title}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* --- Main Content Layer (z-0) --- */}
        <div className="relative z-0">

          {/* Header Section */}
          <div className="w-full lg:w-1/2 lg:pr-10 mb-12 md:mb-16">
            <h2 className="text-[36px] md:text-[44px] font-serif font-normal text-[#0A192F] leading-[1.1] mb-6 tracking-normal" style={{ WebkitTextStroke: "1.3px currentColor" }}>
              Why modern academic teams choose Nusa Education
            </h2>
            <p className="text-[#475569] text-sm md:text-base leading-relaxed max-w-lg">
              Berikan tim Anda infrastruktur untuk bergerak lebih cepat, tetap relevan, dan mempublikasikan karya di tingkat global.
            </p>
          </div>

          {/* The Grid Rows Area */}
          <div
            className="relative w-full border-t transition-colors duration-500"
            style={{ borderColor: `${features[activeIndex].themeColor}40` }}
          >
            {features.map((feature, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={feature.id}
                  className={`w-full border-b transition-colors duration-500 ${!isActive ? 'hover:bg-slate-50/30' : ''}`}
                  style={{
                    backgroundColor: isActive ? feature.bgLight : 'transparent',
                    borderColor: `${features[activeIndex].themeColor}40`
                  }}
                >
                  <div
                    className={`w-full lg:w-1/2 lg:pr-12 cursor-pointer transition-all duration-500 ${isActive ? 'py-5 pl-4 md:pl-6' : 'py-3 pl-0'}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <h3 className={`text-lg md:text-xl font-serif tracking-normal transition-colors text-[#0A192F] font-medium`} style={{ WebkitTextStroke: "0.8px currentColor" }}>
                      {feature.title}
                    </h3>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-[#444444] text-sm leading-relaxed mb-4 mt-2 max-w-md">
                            {feature.desc}
                          </p>
                          <Link
                            href={feature.linkHref}
                            className="inline-flex items-center text-[13px] md:text-sm font-bold transition-all rounded-sm hover:brightness-95"
                            style={{
                              color: feature.themeColor,
                              backgroundColor: `${feature.themeColor}26` // 15% opacity for a thin background
                            }}
                          >
                            {feature.linkText}
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

        {/* Mobile Mockup (Shown below grid on small screens) */}
        <div className="block lg:hidden w-full mt-10 relative z-20">
          <div className="w-full aspect-4/3 bg-[#0A192F] rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-800 overflow-hidden flex flex-col ring-1 ring-white/10">
            <div className="w-full h-10 bg-[#0A192F] border-b border-slate-800 flex items-center px-4 shrink-0 relative">
              <div className="flex gap-2 shrink-0 z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-2/3 h-6 bg-slate-800/50 border border-slate-700/50 rounded-md flex items-center px-3 justify-center text-[10px] text-slate-400 font-mono truncate">
                  nusa.ed/{features[activeIndex].title.split(" ")[0].toLowerCase()}
                </div>
              </div>
            </div>
            <div className="flex-1 relative bg-slate-100 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
