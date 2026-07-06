import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

// Placeholder Imports
import HeroSection from '@/components/web-dev-ojs/HeroSection';
import AboutSection from '@/components/web-dev-ojs/AboutSection';
import TargetAudienceSection from '@/components/web-dev-ojs/TargetAudienceSection';
import FeaturesSection from '@/components/web-dev-ojs/FeaturesSection';
import PortfolioSection from '@/components/web-dev-ojs/PortfolioSection';
import PricingSection from '@/components/web-dev-ojs/PricingSection';
import FAQSection from '@/components/web-dev-ojs/FAQSection';

const ojsNavItems = [
  { label: 'Tentang', href: '#about' },
  { label: 'Target', href: '#target' },
  { label: 'Fitur', href: '#features' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Harga', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function WebDevOjsPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans selection:bg-[#1A3263]/20 selection:text-[#1A3263]">
      <Navbar navItems={ojsNavItems} />
      
      <main>
        {/* Canvas Kosong untuk setiap Section */}
        <HeroSection />
        <AboutSection />
        <TargetAudienceSection />
        <FeaturesSection />
        <PortfolioSection />
        <PricingSection />
        <FAQSection />
        
        <CTA 
          title="Siap Mengelola Jurnal OJS yang Profesional?" 
          description="Tinggalkan kendala teknis dan fokus pada substansi jurnal Anda. Kami siap membantu instalasi, kustomisasi, hingga pemeliharaan." 
          buttonText="Konsultasi Gratis"
        />
      </main>

      <Footer />
    </div>
  );
}
