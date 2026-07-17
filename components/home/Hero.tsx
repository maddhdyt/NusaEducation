"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";

// --- ANIMATED NUMBER COMPONENT ---
function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) => prefix + Math.round(latest) + suffix);

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{display}</motion.span>;
}

// --- INTERACTIVE GRID COMPONENT ---
function GridCell({ trailColor }: { trailColor: string }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '80px',
        height: '40px',
        backgroundColor: trailColor,
        opacity: isHovered ? 1 : 0,
        transition: isHovered ? 'opacity 0s' : 'opacity 0.8s ease-out',
      }}
      className="box-border shrink-0 cursor-default"
    />
  );
}

function CursorIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24"
      fill="#0A192F" stroke="white" strokeWidth="1.5" strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M2 2L9 22L12 14L20 11L2 2Z" />
    </svg>
  );
}

function InteractiveGrid({ baseColor, lineColor, trailColor, maskPath }: { baseColor: string, lineColor: string, trailColor: string, maskPath: string }) {
  // Approximate cells needed to fill wide screen
  const cols = 60;
  const rows = 15;
  const squares = Array.from({ length: cols * rows }, (_, i) => i);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden transition-colors duration-1000"
      style={{
        backgroundColor: baseColor,
        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 600' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='${maskPath}' fill='black' /%3E%3C/svg%3E")`,
        WebkitMaskSize: '100% 100%',
        WebkitMaskRepeat: 'no-repeat'
      }}
    >
      {/* Grid Lines Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-60"
        style={{
          backgroundImage: `linear-gradient(${lineColor} 2px, transparent 2px), linear-gradient(90deg, ${lineColor} 2px, transparent 2px)`,
          backgroundSize: '80px 40px'
        }}
      ></div>

      {/* Hover Cells */}
      <div className="absolute inset-0 z-20 flex flex-wrap" style={{ alignContent: 'flex-start', width: '2400px' }}>
        {squares.map((sq) => (
          <GridCell key={sq} trailColor={trailColor} />
        ))}
      </div>
    </div>
  );
}

// --- SLIDE DATA ---
const slides = [
  {
    id: 1,
    gridBaseColor: "#FDE68A", // Pale Amber/Yellow
    gridLineColor: "#0A192F",
    gridTrailColor: "#FFFFFF",
    maskPath: "M0,600 H1440 V400 H1120 V240 H880 V80 H560 V200 H320 V360 H0 Z",
    image: "https://ik.imagekit.io/yqhp1cmbp/person.webp",
    shapes: (
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[900px] h-full z-0 pointer-events-none">
        {/* 4-Point Sparkle Star */}
        <div className="absolute right-[15%] bottom-[20%] hidden md:block">
          <svg viewBox="0 0 100 100" className="w-40 h-40 fill-[#F59E0B]">
            <path d="M50 0 C50 25 75 50 100 50 C75 50 50 75 50 100 C50 75 25 50 0 50 C25 50 50 25 50 0 Z" />
          </svg>
        </div>
        {/* Back-to-back D's */}
        <div className="absolute left-[15%] top-[25%] flex gap-2 text-[#2563EB] hidden md:flex">
          <div className="w-16 h-32 bg-current rounded-l-full"></div>
          <div className="w-16 h-32 bg-current rounded-r-full"></div>
        </div>
        {/* Leaf Shape (Single rounded corner) */}
        <div className="absolute right-[25%] top-[10%] w-24 h-24 bg-[#10B981] rounded-tl-full hidden md:block rotate-12"></div>
        {/* Checkerboard Cross */}
        <div className="absolute left-[25%] bottom-[15%] grid grid-cols-3 grid-rows-3 w-32 h-32 gap-0 text-[#059669] hidden md:grid">
          <div></div><div className="bg-current"></div><div></div>
          <div className="bg-current"></div><div className="bg-current"></div><div className="bg-current"></div>
          <div></div><div className="bg-current"></div><div></div>
        </div>
      </div>
    ),
    card1: {
      title: "Bergabunglah dengan 540+ klien yang telah sukses bersama kami",
      desc: "",
      iconBg: "#FF9F1C",
      iconColor: "#0A192F",
      textColor: "#0A192F",
      bg: "white",
      position: "right-2 sm:right-auto sm:left-4 md:left-[5%] top-[15%] sm:top-[40%] max-w-[220px] sm:max-w-[340px] z-40"
    },
    card2: {
      value: 11,
      prefix: "",
      suffix: "x",
      desc: "Pertumbuhan",
      bgMain: "#FF9F1C", // Orange
      bgSub: "#0A192F", // Dark Blue
      textColor: "#FFF3E0",
      position: "right-4 md:right-[15%] top-[45%]"
    }
  },
  {
    id: 2,
    gridBaseColor: "#A7F3D0", // Mint Green
    gridLineColor: "#0F172A",
    gridTrailColor: "#FFFFFF",
    maskPath: "M0,600 H1440 V480 H1200 V320 H960 V120 H480 V240 H240 V400 H0 Z",
    image: "https://ik.imagekit.io/yqhp1cmbp/person.png",
    shapes: (
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[900px] h-full z-0 pointer-events-none">
        {/* 8-Petal Flower */}
        <div className="absolute left-[15%] bottom-[20%] w-32 h-32 text-[#4F46E5] hidden md:block">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-32 bg-current rounded-full"></div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-8 bg-current rounded-full"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-32 bg-current rounded-full rotate-45"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-32 bg-current rounded-full -rotate-45"></div>
        </div>
        {/* Sunburst */}
        <div className="absolute right-[15%] top-[20%] w-40 h-40 flex items-center justify-center text-[#F97316] hidden md:flex">
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map(deg => (
            <div key={deg} className="absolute w-5 h-40 bg-current" style={{ transform: `rotate(${deg}deg)` }}></div>
          ))}
          <div className="absolute w-24 h-24 bg-current rounded-full"></div>
        </div>
        {/* Diagonal Stepped Stairs */}
        <div className="absolute left-[25%] top-[15%] w-32 h-32 text-[#06B6D4] hidden md:block">
          <div className="absolute bottom-0 left-0 w-8 h-8 bg-current"></div>
          <div className="absolute bottom-8 left-8 w-8 h-8 bg-current"></div>
          <div className="absolute bottom-16 left-16 w-8 h-8 bg-current"></div>
          <div className="absolute bottom-24 left-24 w-8 h-8 bg-current"></div>
        </div>
      </div>
    ),
    card1: {
      title: "Raih 100% otomatisasi untuk proses bisnis yang mulus tanpa kendala",
      desc: "",
      iconBg: "#3B82F6",
      iconColor: "white",
      textColor: "#0F172A",
      bg: "white",
      position: "right-2 sm:right-auto sm:left-[8%] top-[15%] sm:top-[25%] max-w-[220px] sm:max-w-[340px] z-40"
    },
    card2: {
      value: 300,
      prefix: "",
      suffix: "%",
      desc: "Produktivitas",
      bgMain: "#3B82F6", // Blue
      bgSub: "#0F172A", // Dark Slate
      textColor: "#E0F2FE",
      position: "right-4 md:right-[10%] top-[50%]"
    }
  },
  {
    id: 3,
    gridBaseColor: "#FECDD3", // Rose Red
    gridLineColor: "#E71D36",
    gridTrailColor: "#FFFFFF",
    maskPath: "M0,600 H1440 V360 H1040 V160 H720 V60 H560 V160 H400 V320 H160 V480 H0 Z",
    image: "https://ik.imagekit.io/yqhp1cmbp/person%202%20(1).png",
    shapes: (
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[900px] h-full z-0 pointer-events-none">
        {/* Square with 4-point star cutout */}
        <div className="absolute right-[20%] top-[25%] w-32 h-32 bg-[#A855F7] flex items-center justify-center hidden md:flex">
          <svg viewBox="0 0 100 100" className="w-24 h-24 fill-[#FFFFFF]">
            <path d="M50 0 C50 25 75 50 100 50 C75 50 50 75 50 100 C50 75 25 50 0 50 C25 50 50 25 50 0 Z" />
          </svg>
        </div>
        {/* Half Sunburst */}
        <div className="absolute left-[18%] bottom-[20%] w-40 h-20 overflow-hidden text-[#F59E0B] hidden md:block">
          <div className="absolute bottom-0 left-0 w-40 h-40 flex items-center justify-center">
            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map(deg => (
              <div key={deg} className="absolute w-5 h-40 bg-current" style={{ transform: `rotate(${deg}deg)` }}></div>
            ))}
            <div className="absolute w-24 h-24 bg-current rounded-full"></div>
          </div>
        </div>
        {/* Parallel Diagonal Bars */}
        <div className="absolute left-[28%] top-[20%] flex flex-col gap-2 rotate-[-30deg] hidden md:flex">
          <div className="w-32 h-6 bg-[#14B8A6] skew-x-[-30deg]"></div>
          <div className="w-32 h-6 bg-[#14B8A6] skew-x-[-30deg]"></div>
          <div className="w-32 h-6 bg-[#14B8A6] skew-x-[-30deg]"></div>
        </div>
      </div>
    ),
    card1: {
      title: "Rebut ranking #1 di pencarian Google dan mulailah mendominasi pasar",
      desc: "",
      iconBg: "#E71D36",
      iconColor: "white",
      textColor: "#112240",
      bg: "white",
      position: "right-2 sm:right-auto sm:left-[5%] top-[15%] sm:top-[50%] max-w-[220px] sm:max-w-[340px] z-40"
    },
    card2: {
      value: 50,
      prefix: "+",
      suffix: "",
      desc: "Kampanye",
      bgMain: "#E71D36", // Red
      bgSub: "#3B1F19", // Dark Brown/Maroon
      textColor: "#FFE4E6",
      position: "right-4 md:right-[18%] top-[40%]"
    }
  }
];

// --- VARIANTS FOR FRAMER MOTION ---
const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
  }),
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
  }),
};

const cardVariants: Variants = {
  hidden: (custom: { id: number, x: number, y: number, clickable?: boolean }) => ({
    x: custom.x,
    y: custom.y,
    opacity: 0,
    scale: 0.8
  }),
  visible: (custom: { id: number, x: number, y: number, clickable?: boolean }) => {
    const delay = custom.id * 0.4 + 0.3;
    return {
      x: 0,
      y: 0,
      opacity: 1,
      scale: custom.clickable ? [0.8, 1, 1, 0.96, 1] : 1,
      transition: {
        x: { delay, type: "spring", stiffness: 150, damping: 15, mass: 0.8 },
        y: { delay, type: "spring", stiffness: 150, damping: 15, mass: 0.8 },
        opacity: { delay, duration: 0.4 },
        scale: custom.clickable ? {
          delay,
          duration: 0.85,
          times: [0, 0.7, 0.7, 0.85, 1],
          ease: "easeInOut"
        } : {
          delay,
          type: "spring", stiffness: 150, damping: 15, mass: 0.8
        }
      }
    };
  }
};

const cursorVariants: Variants = {
  hidden: { scaleX: -1, scaleY: 1 },
  visible: (custom: { id: number }) => ({
    scaleX: [-1, -0.85, -1],
    scaleY: [1, 0.85, 1],
    transition: {
      delay: custom.id * 0.4 + 0.3 + 0.6,
      duration: 0.25
    }
  })
};

export default function Hero() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      // Prevent Framer Motion bug: pause carousel if the user switches tabs
      if (document.hidden) return;

      setDirection(1);
      setPage((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[page];

  const paginate = (newDirection: number, newPage: number) => {
    setDirection(newDirection);
    setPage(newPage);
  };

  return (
    <section className="relative w-full bg-[#F2F2F3] font-sans overflow-hidden">

      {/* Top: Centered Text Section */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl px-4 md:px-8 flex-col items-center pt-8 md:pt-14 text-center">

        {/* Badge */}
        <div className="group animate-fade-in-up flex items-center justify-center gap-2 bg-white px-3 py-1.5 shadow-sm mb-6 sm:mb-8 cursor-pointer border border-transparent hover:border-[#FF9F1C] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto rounded-none sm:rounded-md">
          <span className="bg-[#E8E2DB] px-2 py-0.5 text-[11px] sm:text-[13px] font-bold text-[#14A800] tracking-wide group-hover:bg-[#FF9F1C] group-hover:text-white transition-colors duration-300 rounded-sm uppercase">New!</span>
          <span className="text-[12px] sm:text-[14px] font-medium text-[#0A192F] flex items-center">
            Diskon 20% untuk Pembuatan Website Bisnis.
            <span className="text-[#0A192F] font-semibold ml-1 flex items-center underline underline-offset-2">
              Klaim Sekarang <span className="transform transition-transform duration-300 group-hover:translate-x-1 ml-0.5">→</span>
            </span>
          </span>
        </div>

        {/* Heading */}
        <h1
          className="animate-fade-in-up delay-100 max-w-5xl text-[38px] sm:text-5xl font-serif tracking-normal text-[#0A192F] md:text-[78px] leading-[1.1] md:leading-[1.1] px-2"
          style={{ WebkitTextStroke: "0.5px currentColor" }}
        >
          Scale and grow up your<br /> business now!
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up delay-200 mt-5 md:mt-6 text-[15px] sm:text-base md:text-[18px] text-[#475569] max-w-[580px] mx-auto leading-relaxed md:leading-snug font-normal tracking-tight px-2">
          Wujudkan visi Anda menjadi realita melalui perpaduan strategi, inovasi teknologi, dan desain digital yang terukur.
        </p>

        {/* Buttons - Side by Side on Mobile */}
        <div className="animate-fade-in-up delay-400 mt-8 flex flex-row items-center justify-center gap-3 md:gap-4 w-full">
          <Link href="#layanan" className="conversion [&>*]:pointer-events-none text-[14px] sm:text-[16px] md:text-[18px] flex items-center justify-center gap-2 px-5 py-3 sm:px-7 md:py-3 font-semibold text-[#0A192F] border border-[#0A192F] bg-transparent hover:bg-slate-50 transition-colors min-w-[140px]">
            Explore ↓
          </Link>
          <a href="https://wa.me/6285121117589?text=Halo%20NusaEducation%2C%20saya%20tertarik%20dengan%20layanan%20Anda%20dan%20ingin%20menjadwalkan%20konsultasi%20awal%20secara%20gratis." target="_blank" rel="noopener noreferrer" className="conversion [&>*]:pointer-events-none text-[14px] sm:text-[16px] md:text-[18px] flex items-center justify-center px-5 py-3 sm:px-7 md:py-3 font-semibold text-white bg-[#FF9F1C] border border-transparent hover:bg-[#E68A00] transition-all min-w-[140px]">
            Start Now
          </a>
        </div>
      </div>

      {/* Visual Collage Area - Framer Motion Carousel */}
      <div className="animate-fade-in-up delay-400 relative mt-8 md:mt-8 w-full h-[400px] md:h-[600px] overflow-hidden">

        {/* Pagination Dots Removed */}

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", ease: "easeInOut", duration: 0.8 }
            }}
            className="absolute inset-0 flex items-end justify-center"
          >
            {/* Geometric Background Shapes & Grid */}
            <InteractiveGrid baseColor={activeSlide.gridBaseColor} lineColor={activeSlide.gridLineColor} trailColor={activeSlide.gridTrailColor} maskPath={activeSlide.maskPath} />

            <div className="relative w-full max-w-6xl mx-auto h-full flex items-end justify-center pointer-events-none">
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                {activeSlide.shapes}

                {/* Floating Stat Card 1 */}
                <motion.div
                  custom={{ id: 1, x: -150, y: 150, clickable: true }}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className={`absolute p-3 md:p-5 rounded-xl shadow-2xl border-[3px] border-[#E0E7FF] transition-transform duration-500 ease-out group-hover:-translate-y-4 group-hover:-rotate-3 ${activeSlide.card1.position}`}
                  style={{ backgroundColor: activeSlide.card1.bg }}
                >
                  <motion.div
                    custom={{ id: 1 }}
                    variants={cursorVariants}
                    className="absolute -top-3 -left-3 md:-top-4 md:-left-4 z-40 w-6 md:w-8 h-auto"
                  >
                    <CursorIcon className="drop-shadow-md w-full h-full" />
                  </motion.div>
                  <div className="flex flex-col">
                    <h4 className="text-[18px] md:text-[28px] font-serif font-bold leading-tight md:leading-[1.1] tracking-tight" style={{ color: activeSlide.card1.textColor }}>{activeSlide.card1.title}</h4>
                    {activeSlide.card1.desc && <p className="text-[11px] md:text-[14px] text-slate-500 font-medium mt-1 md:mt-2 leading-snug">{activeSlide.card1.desc}</p>}
                  </div>
                </motion.div>

                {/* Floating Stat Card 2 */}
                <motion.div
                  custom={{ id: 2, x: 150, y: 150 }}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className={`absolute z-30 hidden sm:block ${activeSlide.card2.position}`}
                >
                  <div className="relative w-fit group/card cursor-default">
                    {/* Shadow / Offset box (Behind) */}
                    <div
                      className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-full h-full z-0 transition-transform duration-500 group-hover/card:-translate-x-1 group-hover/card:translate-y-1"
                      style={{ backgroundColor: activeSlide.card2.bgSub }}
                    ></div>

                    {/* Main box (Top) */}
                    <div
                      className="relative z-10 px-6 py-4 md:px-8 md:py-6 flex flex-col items-start justify-center transition-transform duration-500 group-hover/card:-translate-y-2 group-hover/card:translate-x-2"
                      style={{ backgroundColor: activeSlide.card2.bgMain }}
                    >
                      <span className="text-5xl md:text-7xl leading-none font-serif tracking-tighter" style={{ color: activeSlide.card2.textColor }}>
                        <AnimatedNumber value={activeSlide.card2.value} prefix={activeSlide.card2.prefix} suffix={activeSlide.card2.suffix} />
                      </span>
                      <span className="text-sm md:text-lg font-medium tracking-wide mt-1 md:mt-2" style={{ color: activeSlide.card2.textColor }}>
                        {activeSlide.card2.desc}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Main Person Image */}
              <Image src={activeSlide.image} alt="Creative Digital Partner" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-contain object-bottom drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] transition-transform duration-700 ease-out pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CLIENT LOGO MARQUEE */}
      <div className="pt-12 md:pt-18 pb-12 md:pb-18 w-full flex flex-col items-center bg-white relative z-20">
        <h3 className="text-center text-[#0A192F] font-serif font-normal text-[24px] mb-8 md:mb-12" style={{ WebkitTextStroke: "0.8px currentColor" }}>
          Dipercaya oleh 540+ Institusi Akademik & Pengelola Jurnal Terkemuka
        </h3>

        <div className="relative w-full overflow-hidden flex items-center py-4 max-w-7xl mx-auto px-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

          {/* ANIMATED TRACK */}
          <style>{`
            @keyframes infinite-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <div className="flex w-fit animate-[infinite-scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0 items-center justify-around">
                {[
                  "https://ik.imagekit.io/yqhp1cmbp/image782.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/group1308.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/image403.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/image399.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/image778.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/whatsapp_image_2024-06-16_at_1.37.38_pm-removebg-preview(1)1.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/3(1)1.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/image404.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/image407.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/image780.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/image425.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/image781.webp"
                ].map((logo, idx) => (
                  <div key={idx} className="relative group flex items-center justify-center">
                    {/* The Logo */}
                    <Image
                      src={logo}
                      alt="Client Logo"
                      width={120}
                      height={48}
                      loading="lazy"
                      className="h-10 md:h-12 w-auto object-contain mx-8 md:mx-12 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out cursor-pointer drop-shadow-[0_0_0px_rgba(255,159,28,0)] group-hover:drop-shadow-[0_0_10px_rgba(255,159,28,0.8)]"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section >
  );
}
