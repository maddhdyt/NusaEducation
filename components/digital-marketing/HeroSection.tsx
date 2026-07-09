"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative w-full pt-28 md:pt-32 pb-16 md:pb-32 overflow-hidden flex items-center min-h-[85vh]"
      style={{ backgroundColor: '#040b17' }} // Deep dark navy, almost black
    >
      <div className="max-w-[1380px] mx-auto px-6 w-full relative z-20 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-[60%] flex flex-col items-start text-left z-20 relative pt-10 md:pt-0">
          
          {/* Eyebrow Badge (Extremely thin padding) */}
          <div className="inline-block px-1.5 py-0.5 mb-4 text-[12px] md:text-[13px] font-bold tracking-wide text-[#040b17] bg-[#D0E5FF] animate-fade-in-up font-mono">
            Digital Marketing
          </div>

          {/* Big Serif Headline (3 lines, thick font) */}
          <h1 className="text-[36px] sm:text-[42px] md:text-[60px] lg:text-[70px] leading-[1.1] md:leading-[1.05] font-serif font-bold text-white tracking-tight mb-5 animate-fade-in-up delay-100 w-full max-w-[850px]">
            Tingkatkan visibilitas <br className="hidden md:block" />
            dan konversi secara <br className="hidden md:block" />
            terukur dan berdampak
          </h1>
          
          {/* Sub-headline (Smaller, tight leading, bold) */}
          <p className="text-slate-200 text-[14px] md:text-[15px] leading-snug max-w-[440px] mb-8 animate-fade-in-up delay-200 font-sans font-semibold">
            Ubah data analitik dan wawasan audiens menjadi kampanye digital marketing yang tepat sasaran dan berdampak tinggi.
          </p>

          {/* Action Button */}
          <div className="flex animate-fade-in-up delay-400">
            <a 
              href="https://wa.me/6285121117589?text=Halo%20NusaEducation%2C%20saya%20tertarik%20untuk%20meningkatkan%20konversi%20dan%20strategi%20Digital%20Marketing%20institusi%20saya.%20Bisa%20bantu%20jadwalkan%20konsultasi%3F" target="_blank" rel="noopener noreferrer"
              className="inline-flex px-6 py-3.5 bg-white text-[#040b17] font-bold tracking-wide text-[15px] hover:bg-gray-200 transition-colors"
            >
              Mulai Kampanye
            </a>
          </div>
        </div>
      </div>

      {/* Right Side: Blended Image with Duotone/Halftone effect */}
      <div className="absolute right-0 top-0 w-full md:w-[65%] h-full z-0 opacity-40 md:opacity-100 pointer-events-none overflow-hidden">
        
        {/* Gradients to fade the image seamlessly into the dark background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040b17] via-[#040b17]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040b17] via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040b17] via-[#040b17]/20 to-transparent z-10" />
        
        {/* The image: Custom generated audience graphic */}
        <Image 
          src="/digital_audience.png" 
          alt="Digital Audience"
          fill
          priority
          unoptimized
          sizes="(max-width: 768px) 100vw, 65vw"
          className="object-cover object-right opacity-80 mix-blend-screen"
        />
        
        {/* Blue tint overlay to colorize the grayscale image (Duotone effect) */}
        <div className="absolute inset-0 bg-[#3B82F6] mix-blend-multiply opacity-50 z-0" />
        
        {/* Halftone Dotted Effect Overlay */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none opacity-80 mix-blend-overlay" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #040b17 1px, transparent 1px)', 
            backgroundSize: '3px 3px' 
          }}
        />
        <div 
          className="absolute inset-0 z-20 pointer-events-none opacity-40" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #040b17 1.5px, transparent 1.5px)', 
            backgroundSize: '4px 4px' 
          }}
        />
      </div>
    </section>
  );
}
