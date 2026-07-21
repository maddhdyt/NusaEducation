import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

import HeroSection from '@/components/journal-publication/HeroSection';
import TargetAudienceSection from '@/components/journal-publication/TargetAudienceSection';
import BenefitsSection from '@/components/journal-publication/BenefitsSection';
import IndexingSection from '@/components/journal-publication/IndexingSection';
import PricingSection from '@/components/journal-publication/PricingSection';
import FAQSection from '@/components/journal-publication/FAQSection';

const journalNavItems = [
  { label: 'Target', href: '#target' },
  { label: 'Benefit', href: '#benefits' },
  { label: 'Indeksasi', href: '#indexing' },
  { label: 'Harga', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: 'https://blog.nusaeducation.com' },
];

export const metadata = {
  title: "Publikasi Jurnal | Nusa Education",
  description: "Layanan Publikasi Jurnal dari Nusa Education. Tingkatkan visibilitas akademik Anda bersama tim profesional.",
};

export default function JournalPublicationPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans selection:bg-[#1A3263]/20 selection:text-[#1A3263]">
      <Navbar 
        navItems={journalNavItems}
        contactWaMessage="Halo NusaEducation, saya tertarik dengan layanan Publikasi Jurnal. Bisakah kita menjadwalkan sesi diskusi?"
      />
      
      <main>
        <HeroSection />
        <TargetAudienceSection />
        <BenefitsSection />
        <IndexingSection />
        <PricingSection />
        <FAQSection />
        <CTA 
          title="Fokus Meneliti, Biarkan Kami Urus Publikasinya" 
          description="Tingkatkan visibilitas akademik Anda bersama tim profesional. Dari formatting, cek plagiasi, hingga jaminan terbit di jurnal nasional dan internasional bereputasi." 
          buttonText="Hubungi Tim Publikasi"
          buttonLink="https://wa.me/62881022376684?text=Halo%20NusaEducation%2C%20saya%20tertarik%20dengan%20layanan%20pendampingan%20Publikasi%20Jurnal.%20Bisa%20berikan%20info%20lebih%20lanjut%3F"
        />
      </main>

      <Footer />
    </div>
  );
}
