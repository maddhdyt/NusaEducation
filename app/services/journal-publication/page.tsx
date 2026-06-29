import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

import HeroSection from '@/components/journal-publication/HeroSection';
import TargetAudienceSection from '@/components/journal-publication/TargetAudienceSection';
import BenefitsSection from '@/components/journal-publication/BenefitsSection';
import IndexingSection from '@/components/journal-publication/IndexingSection';
import ProcessSection from '@/components/journal-publication/ProcessSection';
import PricingSection from '@/components/journal-publication/PricingSection';
import FAQSection from '@/components/journal-publication/FAQSection';

export default function JournalPublicationPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans selection:bg-[#1A3263]/20 selection:text-[#1A3263]">
      <Navbar />
      
      <main>
        <HeroSection />
        <TargetAudienceSection />
        <BenefitsSection />
        <IndexingSection />
        <ProcessSection />
        <PricingSection />
        <FAQSection />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
