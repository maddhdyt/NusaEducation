import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import HeroSection from '@/components/digital-marketing/HeroSection';
import BenefitsSection from '@/components/digital-marketing/BenefitsSection';
import ServicesSection from '@/components/digital-marketing/ServicesSection';
import WorkflowSection from '@/components/digital-marketing/WorkflowSection';
import PricingSection from '@/components/digital-marketing/PricingSection';
import FAQSection from '@/components/digital-marketing/FAQSection';

const digitalMarketingNavItems = [
  { label: 'Efisiensi', href: '#benefits' },
  { label: 'Layanan', href: '#services' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Model Kerjasama', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const metadata = {
  title: "Digital Marketing | Nusa Education",
  description: "Layanan Digital Marketing dari Nusa Education. Ubah pengunjung menjadi pelanggan setia.",
};

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans selection:bg-[#FF9F1C]/20 selection:text-[#0A192F]">
      <Navbar 
        navItems={digitalMarketingNavItems} 
        contactWaMessage="Halo NusaEducation, saya tertarik dengan layanan Digital Marketing. Bisa bantu saya menjadwalkan konsultasi?"
      />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ServicesSection />
        <WorkflowSection />
        <PricingSection />
        <FAQSection />
        <CTA 
          title="Siap Mendominasi Ekosistem Digital?" 
          description="Ubah pengunjung menjadi pelanggan setia. Dari optimasi mesin pencari organik hingga kampanye iklan berbayar yang agresif, kami siap merancang cetak biru untuk melipatgandakan skala bisnis Anda." 
          buttonText="Mulai Konsultasi Gratis"
          buttonLink="https://wa.me/6285121117589?text=Halo%20NusaEducation%2C%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20layanan%20Digital%20Marketing%20bisnis%20saya."
        />
      </main>
      <Footer />
    </div>
  );
}
