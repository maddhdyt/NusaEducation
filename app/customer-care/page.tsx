import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/customer-care/FAQSection";
import Image from "next/image";

export const metadata = {
  title: "Customer Care | Nusa Education",
  description: "Pusat bantuan dan layanan pelanggan Nusa Education. Hubungi kami untuk pertanyaan, konsultasi, atau bantuan teknis melalui WhatsApp.",
};

export default function CustomerCarePage() {
  return (
    <main className="min-h-screen font-sans selection:bg-[#FF9F1C]/20 selection:text-[#0A192F] flex flex-col bg-[#5bb4f8]">
      <Navbar />
      
      {/* Premium Brutalist/Modern Hero Section */}
      <section className="relative w-full min-h-[85vh] md:min-h-[900px] flex items-center justify-center overflow-hidden py-20">
        
        {/* Full-width Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay" 
          style={{ 
            backgroundImage: 'linear-gradient(white 1.5px, transparent 1.5px), linear-gradient(90deg, white 1.5px, transparent 1.5px)', 
            backgroundSize: '48px 48px',
            backgroundPosition: 'center top'
          }} 
        />

        {/* Abstract Pixelated Geometric Shapes behind the card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] pointer-events-none flex items-center justify-center z-0">
          
          {/* Main Dark Blue Stepped Shape */}
          <div 
            className="absolute right-0 md:-right-10 top-[10%] w-[350px] md:w-[450px] h-[450px] md:h-[550px] bg-[#000033]"
            style={{
              clipPath: 'polygon(20% 0, 80% 0, 80% 10%, 100% 10%, 100% 70%, 90% 70%, 90% 80%, 80% 80%, 80% 100%, 20% 100%, 20% 90%, 10% 90%, 10% 80%, 0 80%, 0 20%, 10% 20%, 10% 10%, 20% 10%)'
            }}
          >
             <div className="absolute inset-0 opacity-20 mix-blend-screen" style={{ backgroundImage: 'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          </div>

          {/* Massive Green Circle/Accent */}
          <div className="absolute right-[5%] md:right-0 top-[35%] w-[150px] h-[400px] bg-[#3BCA5A] rotate-[20deg] mix-blend-multiply flex flex-col justify-between p-4">
             <div className="w-24 h-24 rounded-full bg-[#000033] opacity-90" />
             <div className="w-24 h-24 rounded-full bg-[#000033] opacity-90" />
             <div className="w-24 h-24 rounded-full bg-[#000033] opacity-90" />
          </div>
          
          {/* Orange Stepped Accent (Left) */}
          <div 
            className="absolute left-[5%] bottom-[30%] w-[180px] h-[120px] bg-[#FF9F1C] rotate-[-25deg]"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 33%, 75% 33%, 75% 66%, 50% 66%, 50% 100%, 0 100%)'
            }}
          />
        </div>

        {/* Floating Pointers/Widgets (Simulating Multiplayer Cursors) */}
        <div className="absolute left-1 md:left-[15%] top-0 md:top-[30%] flex items-center gap-1 shadow-md animate-float-1 z-20 scale-75 md:scale-100 origin-top-left">
          <div className="w-6 h-6 rounded-full border-2 border-white bg-[#FF9F1C] flex items-center justify-center text-white text-[10px] font-bold">T</div>
          <div className="bg-[#FF9F1C] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm shadow-sm">Tim Teknis OJS</div>
        </div>
        
        <div className="absolute right-1 md:right-[20%] top-6 md:top-[40%] flex items-center gap-1 shadow-md animate-float-2 z-20 scale-75 md:scale-100 origin-top-right">
          <div className="bg-[#3BCA5A] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm shadow-sm">Digital Ads Support</div>
          <div className="w-6 h-6 rounded-full border-2 border-white bg-[#3BCA5A] flex items-center justify-center text-white text-[10px] font-bold">D</div>
        </div>
        
        <div className="absolute right-4 md:right-[25%] bottom-[-20px] md:bottom-[15%] flex items-center gap-1 shadow-md animate-float-3 z-20 scale-75 md:scale-100 origin-bottom-right">
          <div className="bg-[#E71D36] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm shadow-sm">Konsultan Jurnal</div>
          <div className="w-6 h-6 rounded-full border-2 border-white bg-[#E71D36] flex items-center justify-center text-white text-[10px] font-bold">N</div>
        </div>

        {/* The Central White Card */}
        <div className="relative z-10 w-[92%] max-w-[760px] bg-[#F4F4F5] rounded-lg overflow-hidden shadow-[0_30px_100px_rgba(0,0,30,0.3)] flex flex-col mt-10 md:mt-0">
          {/* Top Bar of the card */}
          <div className="w-full h-12 bg-white border-b border-slate-200 flex items-center justify-between px-4">
             <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-[4px] overflow-hidden flex items-center justify-center bg-transparent">
                  <Image src="https://ik.imagekit.io/yqhp1cmbp/Logo%20Nusa%203%20(1).png" alt="Nusa Logo" width={32} height={32} className="object-contain" />
               </div>
             </div>
             <div className="flex items-center gap-3">
               <span className="text-[11px] font-medium text-slate-500 px-3 py-1 bg-slate-100 rounded-[4px] border border-slate-200 uppercase tracking-wider">Customer Care Center</span>
             </div>
          </div>
          
          {/* Content inside card */}
          <div className="px-8 py-16 md:px-20 md:py-24 flex flex-col items-center text-center">
            <h1 className="text-[52px] md:text-[76px] font-serif text-[#0A192F] leading-[0.95] tracking-tight mb-12" style={{ WebkitTextStroke: "1px currentColor" }}>
              Butuh bantuan dengan Nusa hari ini?
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
               <a href="/" className="w-full sm:w-auto px-8 py-3.5 border border-[#0A192F] bg-transparent text-[#0A192F] font-medium text-sm md:text-base hover:bg-slate-200 transition-colors">
                 Eksplorasi Layanan
               </a>
               <a 
                 href="https://wa.me/628132212022?text=Halo%20NusaEducation%2C%20saya%20butuh%20bantuan." 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="w-full sm:w-auto px-10 py-3.5 bg-[#FF9F1C] text-white font-bold text-sm md:text-base hover:bg-[#E68A00] transition-colors shadow-lg"
               >
                 Chat via WhatsApp
               </a>
            </div>
          </div>
        </div>

      </section>

      {/* FAQ Section */}
      <div className="bg-[#F8F9FA] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] border-t border-slate-200">
        <FAQ />
      </div>

      <Footer />
    </main>
  );
}
