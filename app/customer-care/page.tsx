import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import HeroSection from "@/components/customer-care/HeroSection";
import ContactChannels from "@/components/customer-care/ContactChannels";
import FAQSection from "@/components/customer-care/FAQSection";

export const metadata = {
  title: "Customer Care | NusaEducation",
  description: "Pusat bantuan dan layanan pelanggan NusaEducation. Hubungi kami untuk pertanyaan, konsultasi, atau bantuan teknis.",
};

export default function CustomerCarePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Contact Channels (WA, Email, Maps) */}
      <ContactChannels />

      {/* FAQ Section */}
      <FAQSection />

      {/* Universal CTA */}
      <div className="py-20 md:py-32 bg-white">
        <CTA 
          title="Masih Punya Pertanyaan Lain?" 
          description="Jangan ragu untuk menghubungi kami. Tim ahli kami selalu siap mendengarkan kebutuhan dan memberikan solusi terbaik untuk Anda."
          buttonText="Hubungi Tim Support"
          buttonLink="https://wa.me/6285121117589?text=Halo%20NusaEducation%2C%20saya%20punya%20beberapa%20pertanyaan%20seputar%20layanan%20Anda."
        />
      </div>

      <Footer />
    </main>
  );
}
