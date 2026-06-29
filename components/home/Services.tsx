"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <section id="layanan" className="relative w-full bg-white py-10 md:py-20 font-sans overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-6 md:px-8">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto mb-16 md:mb-24">
          <div className="bg-[#dcedfd] text-[#001134] px-4 py-1.5 text-[13px] md:text-[14px] font-bold tracking-widest mb-6 uppercase">
            Product & Service
          </div>
          <h2 className="text-4xl md:text-[48px] font-serif font-medium text-[#0A192F] leading-[1.3] md:leading-[1.1] mb-6" style={{ WebkitTextStroke: "1.3px currentColor" }}>
            Sustainable, timely and relevant digital solutions
          </h2>
          <p className="text-base md:text-[16px] text-slate-800 font-normal leading-relaxed max-w-3xl">
            Nusa Education adalah partner strategis yang dibangun untuk tim akademik dan institusi modern. Dengan pendekatan <i>end-to-end</i> yang tersistem—kami mengubah visi inovatif Anda menjadi realita, memperkuat jejak digital, dan mendorong pertumbuhan yang terukur di setiap skala.
          </p>
          <Link href="#contact" className="mt-8 bg-[#0A192F] text-white px-8 py-3.5 font-semibold text-[16px] hover:bg-[#112a4f] transition-colors tracking-wide">
            Konsultasi Layanan
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">

          {/* Card 1: Web Dev & OJS (Orange Theme) */}
          <Link href="#contact" className="flex flex-col bg-[#FFE8CC] hover:bg-[#FFD6A5] cursor-pointer group transition-all duration-300">
            {/* Top Text */}
            <div className="px-3 pt-3 pb-6">
              <h3 className="text-[34px] md:text-[38px] font-serif text-[#0A192F] leading-none font-normal" style={{ WebkitTextStroke: "0.8px currentColor" }}>Web Dev & OJS</h3>
            </div>

            {/* Middle Graphic */}
            <div className="w-full h-[200px] relative border-y border-[#FDBA74] flex items-center justify-center overflow-hidden"
              style={{ backgroundImage: 'linear-gradient(to right, rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(249, 115, 22, 0.3) 1px, transparent 1px)', backgroundSize: '14px 14px' }}>
              <svg width="240" height="240" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover transition-all duration-500">

                {/* Window 1 - Shadow & Main */}
                <rect x="44" y="54" width="55" height="75" fill="#F97316" />
                <rect x="40" y="50" width="55" height="75" fill="#FFE8CC" stroke="#5C2E0E" strokeWidth="3" />
                <rect x="40" y="50" width="55" height="15" fill="#5C2E0E" />
                <line x1="50" y1="75" x2="80" y2="75" stroke="#5C2E0E" strokeWidth="3" />
                <line x1="50" y1="85" x2="80" y2="85" stroke="#5C2E0E" strokeWidth="3" />
                <line x1="50" y1="95" x2="70" y2="95" stroke="#5C2E0E" strokeWidth="3" />

                {/* OJS Highlight Badge / Window 2 */}
                <rect x="104" y="44" width="60" height="75" fill="#F97316" />
                <rect x="100" y="40" width="60" height="75" fill="#FFE8CC" stroke="#5C2E0E" strokeWidth="3" />
                <rect x="100" y="40" width="60" height="15" fill="#5C2E0E" />

                {/* Profile avatar outline inside Window 2 */}
                <circle cx="130" cy="75" r="14" fill="#FFE8CC" stroke="#5C2E0E" strokeWidth="3" />
                <circle cx="125" cy="71" r="2" fill="#5C2E0E" />
                <path d="M 125 78 Q 130 82 135 78" stroke="#5C2E0E" strokeWidth="2" fill="none" strokeLinecap="round" />

                {/* Floating Window 3 (Bottom) */}
                <rect x="104" y="134" width="70" height="25" fill="#F97316" />
                <rect x="100" y="130" width="70" height="25" fill="#FFE8CC" stroke="#5C2E0E" strokeWidth="3" />
                <line x1="108" y1="140" x2="140" y2="140" stroke="#5C2E0E" strokeWidth="3" />
                <line x1="108" y1="148" x2="155" y2="148" stroke="#5C2E0E" strokeWidth="3" />

                {/* Sparkle Left */}
                <path d="M 50 145 L 60 135 L 65 145 L 75 145 L 70 155 L 75 165 L 65 160 L 55 170 L 60 155 Z" fill="#FFE8CC" stroke="#5C2E0E" strokeWidth="3" />
                {/* Small Sparkle Right */}
                <path d="M 160 100 L 165 95 L 165 105 L 175 105 L 165 110 L 170 120 L 160 110 L 150 115 L 155 105 Z" fill="#FFE8CC" stroke="#5C2E0E" strokeWidth="2" />

                {/* Cursor Arrows (Neon Fill) */}
                <path d="M 15 80 L 45 70 L 30 85 L 40 100 L 30 105 L 20 90 L 15 80 Z" fill="#EA580C" />
                <path d="M 130 150 L 160 140 L 145 155 L 155 170 L 145 175 L 135 160 L 130 150 Z" fill="#EA580C" />
              </svg>
            </div>

            {/* Bottom Text & Arrow */}
            <div className="px-3 pt-6 pb-3 flex items-end justify-between flex-grow gap-4">
              <p className="text-[#0A192F] font-medium text-[17px] leading-snug max-w-[85%]">
                Pengembangan website profesional dan platform Open Journal Systems (OJS).
              </p>
              <ArrowRight className="w-6 h-6 text-[#0A192F] stroke-[2.5px] shrink-0 transition-all duration-300" />
            </div>
          </Link>

          {/* Card 2: Publikasi Jurnal (Green Theme) */}
          <Link href="/services/journal-publication" className="flex flex-col bg-[#D1F4E0] hover:bg-[#A7E8C3] cursor-pointer group transition-all duration-300">
            {/* Top Text */}
            <div className="px-3 pt-3 pb-6">
              <h3 className="text-[34px] md:text-[38px] font-serif text-[#0A192F] leading-none font-normal" style={{ WebkitTextStroke: "0.8px currentColor" }}>Publikasi Jurnal</h3>
            </div>

            {/* Middle Graphic */}
            <div className="w-full h-[200px] relative border-y border-[#86EFAC] flex items-center justify-center overflow-hidden"
              style={{ backgroundImage: 'linear-gradient(to right, rgba(34, 197, 94, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 197, 94, 0.3) 1px, transparent 1px)', backgroundSize: '14px 14px' }}>
              <svg width="240" height="240" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover transition-all duration-500">

                {/* Connection workflow nodes */}
                <rect x="34" y="64" width="60" height="40" fill="#22C55E" />
                <rect x="30" y="60" width="60" height="40" fill="#D1F4E0" stroke="#0A401A" strokeWidth="3" />
                <rect x="30" y="60" width="15" height="15" fill="#0A401A" />
                <line x1="55" y1="75" x2="80" y2="75" stroke="#0A401A" strokeWidth="3" />
                <line x1="55" y1="85" x2="70" y2="85" stroke="#0A401A" strokeWidth="3" />

                {/* Connecting lines */}
                <path d="M 90 80 L 120 80 L 120 120 L 140 120" stroke="#0A401A" strokeWidth="3" fill="none" />
                <path d="M 135 110 L 150 120 L 135 130 Z" fill="#22C55E" stroke="#0A401A" strokeWidth="3" />

                {/* Node 2 */}
                <rect x="144" y="114" width="40" height="30" fill="#22C55E" />
                <rect x="140" y="110" width="40" height="30" fill="#D1F4E0" stroke="#0A401A" strokeWidth="3" />
                <rect x="140" y="110" width="10" height="10" fill="#0A401A" />
                <line x1="155" y1="120" x2="170" y2="120" stroke="#0A401A" strokeWidth="3" />

                {/* Center Floating Triangle */}
                <path d="M 100 150 L 120 120 L 80 120 Z" fill="#22C55E" stroke="#0A401A" strokeWidth="3" />

                {/* Small visual decorations */}
                <circle cx="50" cy="140" r="10" fill="none" stroke="#0A401A" strokeWidth="3" />
                <path d="M 130 50 L 135 40 L 140 50 L 150 55 L 140 60 L 135 70 L 130 60 L 120 55 Z" fill="#D1F4E0" stroke="#0A401A" strokeWidth="2" />
              </svg>
            </div>

            {/* Bottom Text & Arrow */}
            <div className="px-3 pt-6 pb-3 flex items-end justify-between flex-grow gap-4">
              <p className="text-[#0A192F] font-medium text-[17px] leading-snug max-w-[85%]">
                Alur kerja sistematis yang memindahkan naskah ilmiah Anda dari ide hingga terbit.
              </p>
              <ArrowRight className="w-6 h-6 text-[#0A192F] stroke-[2.5px] shrink-0 transition-all duration-300" />
            </div>
          </Link>

          {/* Card 3: Digital Marketing (Blue Theme) */}
          <Link href="#contact" className="flex flex-col bg-[#D0E5FF] hover:bg-[#9ECAFF] cursor-pointer group transition-all duration-300">
            {/* Top Text */}
            <div className="px-3 pt-3 pb-6">
              <h3 className="text-[34px] md:text-[38px] font-serif text-[#0A192F] leading-none font-normal" style={{ WebkitTextStroke: "0.8px currentColor" }}>Digital Marketing</h3>
            </div>

            {/* Middle Graphic */}
            <div className="w-full h-[200px] relative border-y border-[#93C5FD] flex items-center justify-center overflow-hidden"
              style={{ backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)', backgroundSize: '14px 14px' }}>
              <svg width="240" height="240" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover transition-all duration-500">

                {/* Abstract Atom / Network Structure */}
                <ellipse cx="100" cy="100" rx="55" ry="15" transform="rotate(30 100 100)" fill="#D0E5FF" stroke="#0A245C" strokeWidth="3" />
                <ellipse cx="100" cy="100" rx="55" ry="15" transform="rotate(-30 100 100)" fill="#D0E5FF" stroke="#0A245C" strokeWidth="3" />
                <ellipse cx="100" cy="100" rx="55" ry="15" transform="rotate(90 100 100)" fill="#D0E5FF" stroke="#0A245C" strokeWidth="3" />

                {/* Atom Core shadow & core */}
                <circle cx="103" cy="103" r="14" fill="#3B82F6" />
                <circle cx="100" cy="100" r="14" fill="#D0E5FF" stroke="#0A245C" strokeWidth="3" />
                <circle cx="100" cy="100" r="6" fill="#0A245C" />

                {/* Orbiting particles */}
                <rect x="135" y="65" width="12" height="12" transform="rotate(15 135 65)" fill="#3B82F6" stroke="#0A245C" strokeWidth="2" />
                <circle cx="65" cy="135" r="6" fill="#3B82F6" stroke="#0A245C" strokeWidth="2" />

                {/* Floating polygon */}
                <path d="M 40 80 L 55 65 L 65 80 Z" fill="#3B82F6" stroke="#0A245C" strokeWidth="3" />
                <path d="M 140 140 L 155 130 L 165 150 L 145 160 Z" fill="#D0E5FF" stroke="#0A245C" strokeWidth="2" />

              </svg>
            </div>

            {/* Bottom Text & Arrow */}
            <div className="px-3 pt-6 pb-3 flex items-end justify-between flex-grow gap-4">
              <p className="text-[#0A192F] font-medium text-[17px] leading-snug max-w-[85%]">
                Jaga kualitas & visibilitas institusi Anda melalui strategi pemasaran digital terpadu.
              </p>
              <ArrowRight className="w-6 h-6 text-[#0A192F] stroke-[2.5px] shrink-0 transition-all duration-300" />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
