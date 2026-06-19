"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PublikasiJurnalHero from '@/components/PublikasiJurnalHero';

export default function PublikasiJurnalLanding() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-first/20 selection:text-first relative">
      <Navbar />
      <main>
        <PublikasiJurnalHero />
      </main>
      <Footer />
    </div>
  );
}
