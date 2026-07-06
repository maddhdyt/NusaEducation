"use client";

import React from "react";
import Link from "next/link";

// 1 = grey square + dark green circle, 0 = empty
const arrowPattern = [
  [0, 0, 0, 1, 0, 0, 0, 0], // Row 0
  [0, 0, 1, 1, 0, 0, 0, 0], // Row 1
  [0, 0, 1, 1, 0, 0, 0, 0], // Row 2
  [0, 1, 1, 1, 0, 0, 0, 0], // Row 3
  [0, 1, 1, 1, 0, 0, 0, 0], // Row 4
  [1, 1, 1, 1, 1, 1, 1, 1], // Row 5 (Spine extending to the right)
  [0, 0, 1, 1, 1, 1, 0, 0], // Row 6
  [0, 0, 0, 1, 0, 0, 0, 0], // Row 7
];

// 2D mask pattern (28 rows) for the exact random pixelated look requested
// 1 = white square, 0 = transparent.
const steppedMaskPattern = [
  [1, 1, 0, 1],          // Row 0
  [1, 1, 1],             // Row 1
  [1, 1, 0, 1],          // Row 2
  [1, 1, 1, 1],          // Row 3
  [1, 1, 0, 1],          // Row 4
  [1, 1],                // Row 5
  [1, 1, 1],             // Row 6
  [0, 1],                // Row 7: Gap on the left edge (floating pixel)
  [1, 1, 1, 1],          // Row 8
  [1, 1, 1, 1, 1],       // Row 9
  [1, 1, 1],             // Row 10
  [1, 1],                // Row 11
  [1, 0, 1],             // Row 12: Hole in the middle
  [1, 1],                // Row 13
  [1],                   // Row 14
  [0, 1],                // Row 15: Gap on left edge
  [],                    // Row 16: Clean
  [],                    // Row 17: Clean
  [],                    // Row 18: Clean
  [],                    // Row 19: Clean
  [],                    // Row 20: Clean
  [],                    // Row 21: Clean
  [],                    // Row 22: Clean
  [],                    // Row 23: Clean
  [],                    // Row 24: Clean
  [],                    // Row 25: Clean
  [],                    // Row 26: Clean
  []                     // Row 27: Clean
];

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTA({
  title = "Solusi Cerdas untuk Skalabilitas Pendidikan",
  description = "Optimalkan manajemen dan visibilitas institusi Anda. Dengan dukungan sistem berbasis web yang andal dan strategi digital marketing yang terukur.",
  buttonText = "Mulai Konsultasi Gratis",
  buttonLink = "#kontak",
}: CTAProps) {
  return (
    <section className="relative w-full bg-white pt-10 pb-20 overflow-hidden font-sans lg:min-h-[600px] xl:min-h-[750px]">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-between relative max-w-[1500px]">

        {/* Left Side: Graphic & Text */}
        <div className="w-full lg:w-[55%] xl:w-[50%] flex flex-col items-start relative z-10 px-6 md:px-12 lg:px-0 pb-12 lg:pb-0 lg:min-h-[600px] xl:min-h-[750px]">

          {/* Exact Replica of Jasper Graphic */}
          {/* Only shown on desktop/large tablet (lg+) */}
          <div className="hidden lg:block absolute left-[-200px] xl:left-[-250px] top-0 pointer-events-none z-0">
            <svg className="w-[600px] h-[600px] xl:w-[750px] xl:h-[750px]" viewBox="0 0 880 880" fill="none" xmlns="http://www.w3.org/2000/svg">
              {arrowPattern.map((row, rowIndex) =>
                row.map((cell, colIndex) => {
                  if (cell === 0) return null;

                  // Render the light grey background square ONLY if cell === 1
                  const rect = cell === 1 ? (
                    <rect
                      key={`rect-${rowIndex}-${colIndex}`}
                      x={colIndex * 110}
                      y={rowIndex * 110}
                      width="110"
                      height="110"
                      fill="#F1F5F9" // Light grey slate-100
                    />
                  ) : null;

                  // Render the circle ONLY if cell === 1
                  const circle = cell === 1 ? (
                    <circle
                      key={`circle-${rowIndex}-${colIndex}`}
                      cx={colIndex * 110 + 55}
                      cy={rowIndex * 110 + 55}
                      r="52" // Leaves a 3px gap from the edge of the 110x110 square
                      fill="#0B3A1C" // Deep Jasper Green
                    />
                  ) : null;

                  return (
                    <g key={`group-${rowIndex}-${colIndex}`}>
                      {rect}
                      {circle}
                    </g>
                  );
                })
              )}
            </svg>
          </div>

          {/* Text Content - Fits completely inside the armpit on desktop, stacked neatly on mobile */}
          <div className="flex flex-col items-start text-left mt-4 lg:mt-0 max-w-[550px] relative z-20 lg:ml-[120px] xl:ml-[160px] lg:pt-[20px]">
            <h2 className="text-[36px] sm:text-[48px] md:text-[54px] lg:text-[60px] font-serif font-normal text-[#000033] leading-[1.1] tracking-tight mb-4" style={{ WebkitTextStroke: "0.8px currentColor" }}>
              {title}
            </h2>
            <p className="text-[#475569] text-sm md:text-[16px] leading-relaxed mb-8 font-sans font-medium max-w-[480px]">
              {description}
            </p>
            <Link href={buttonLink} className="bg-[#FF9F1C] text-white px-8 py-3.5 font-semibold text-[15px] md:text-[16px] hover:bg-[#ff9500] transition-colors inline-block tracking-wide">
              {buttonText}
            </Link>
          </div>

        </div>

        {/* Right Side: Masked Image - Contained inside the layout */}
        <div className="w-full lg:w-[45%] xl:w-[50%] h-[350px] sm:h-[500px] lg:h-[600px] xl:h-[750px] relative shrink-0 z-0">

          {/* The actual photo */}
          <img
            src="https://ik.imagekit.io/yqhp1cmbp/handsome-asian-student-explaining-something-university-mates-holding-economic-graphs%201.png"
            alt="Team working"
            className="w-full h-full object-cover object-left-top lg:object-center"
          />

          {/* The Stepped/Pixelated Mask Overlay */}
          {/* Hidden on mobile/small tablets, only shows on lg+ */}
          <div className="hidden lg:flex absolute top-0 left-[-2px] h-full flex-col pointer-events-none">
            {steppedMaskPattern.map((row, rowIndex) => (
              <div key={rowIndex} className="flex-1 flex">
                {row.map((cell, colIndex) => (
                  <div
                    key={colIndex}
                    className={`h-full aspect-square ${cell === 1 ? 'bg-white' : 'bg-transparent'}`}
                  />
                ))}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
