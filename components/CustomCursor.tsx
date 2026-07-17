"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MousePointer2 } from "lucide-react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTextHover, setIsTextHover] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Instant coordinates for the custom arrow pointer (ZERO delay)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth, fluid physics for the trailing aura ring
  const springConfig = { damping: 25, stiffness: 250, mass: 0.2 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Gunakan timeout kecil agar tidak ada hydration mismatch
    const initTimer = setTimeout(() => {
      // Cek apakah device benar-benar mobile tanpa mouse
      if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
        setIsTouchDevice(true);
      } else {
        setIsTouchDevice(false);
        setIsVisible(true);
      }
    }, 100);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      try {
        const target = e.target as HTMLElement;
        if (!target) return;
        
        if (target.closest && target.closest("a, button, [role='button'], input, select, textarea, [data-cursor='hover']")) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }

        if (window.getComputedStyle(target).cursor === 'text') {
          setIsTextHover(true);
        } else {
          setIsTextHover(false);
        }
      } catch (err) {
        // Abaikan error pada elemen SVG atau document saat dev mode
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* 1. THE AURA RING (Trailing & Expanding) */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{ opacity: 0 }}
        animate={{
          width: 36,
          height: 36,
          borderWidth: isHovering ? 0 : 2,
          borderColor: "#0F172A", // Dark Slate ring
          backgroundColor: isHovering ? "rgba(245, 158, 11, 0.15)" : "rgba(0,0,0,0)", // Soft Amber aura on hover
          opacity: isVisible && !isTextHover ? 1 : 0,
          scale: isHovering ? 1.8 : 1, // Expands dramatically
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      {/* 2. THE CUSTOM ARROW (Instant tracking, ZERO delay) */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none drop-shadow-md"
        style={{
          x: cursorX,
          y: cursorY,
          marginLeft: "-5px", // Offset to align Lucide icon tip with true mouse point
          marginTop: "-5px"
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible && !isTextHover ? 1 : 0,
          scale: isHovering ? 0 : 1, // Arrow shrinks and disappears when hovering
        }}
        transition={{ duration: 0.15 }}
      >
        <MousePointer2 
          size={28} 
          className="text-[#0F172A] fill-[#0F172A] drop-shadow-[0px_0px_1px_rgba(255,255,255,1)]"
          strokeWidth={1.5}
          stroke="#FFFFFF" 
        />
      </motion.div>
      
      {/* 3. HOVER FOCUS DOT (Replaces the arrow inside the ring when hovering) */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-[#F59E0B]" // Solid Amber dot
        style={{
          x: cursorX, // Instant tracking for precision
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{ opacity: 0 }}
        animate={{
          width: isHovering ? 8 : 0,
          height: isHovering ? 8 : 0,
          opacity: isHovering && isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
