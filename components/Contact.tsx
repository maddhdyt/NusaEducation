import React from 'react';
import { Mail, Phone, ArrowUpRight, Clock } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Contact() {
  return (
    <section className="w-full py-24 bg-slate-50 overflow-hidden relative" id="kontak">
      {/* Title Area */}
      <div className="max-w-2xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3263] tracking-tight mb-4">
          Mari Mulai Kolaborasi.
        </h2>
        <p className="text-slate-500 text-lg">
          Kunjungi markas kami atau hubungi tim representatif Nusa Education untuk diskusi lebih lanjut.
        </p>
      </div>

      {/* THE BENTO BOX GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* BOX 1: THE HQ MAP */}
        <div className="lg:col-span-8 relative bg-slate-200 rounded-[2.5rem] overflow-hidden min-h-[500px] lg:min-h-full h-full group shadow-sm border border-slate-200/60">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5905206973347!2d107.7719602!3d-6.93945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c4a45a3311bf%3A0xf511d73a7d45f78b!2sPerumahan%20Janati%20Park!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
            className="absolute inset-0 w-full h-full border-0" 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            style={{ filter: 'grayscale(100%) contrast(120%) opacity(80%)' }}
            title="Nusa Education Headquarters"
          ></iframe>
          
          {/* Floating Glass Panel */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-[360px] bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-white/40 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
            <h5 className="text-[#FAB958] font-bold text-[10px] tracking-widest uppercase mb-2">
              Headquarters
            </h5>
            <h3 className="text-[#1A3263] font-bold text-xl mb-3">
              Nusa Education
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Perumahan Janati Park, Ruko 1-C, Cibeusi, Jatinangor, Sumedang, Jawa Barat 45363
            </p>
            <a 
              href="https://maps.app.goo.gl/B9K28623zYpU7uS97" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1A3263] hover:text-[#FAB958] transition-colors"
            >
              Buka di Google Maps <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN WRAPPER */}
        <div className="lg:col-span-4 flex flex-col gap-6 h-full">
          
          {/* BOX 2: DIRECT LINES */}
          <div className="h-fit w-full bg-[#1A3263] rounded-[2rem] p-7 md:p-8 flex flex-col relative shadow-xl overflow-hidden">
            <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-[#FAB958] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
            
            <h5 className="text-white/50 font-bold text-xs tracking-widest uppercase mb-5 relative z-10">
              Direct Contact
            </h5>
            
            <div className="flex flex-col gap-5 relative z-10">
              <a href="mailto:admin@nusaagency.com" className="group flex items-center gap-4 hover:translate-x-2 transition-transform w-fit">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-[#FAB958] group-hover:bg-[#FAB958] group-hover:text-[#1A3263] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-white font-medium text-base">admin@nusaagency.com</span>
              </a>
              
              <div className="group flex items-center gap-4 hover:translate-x-2 transition-transform w-fit cursor-pointer">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-[#FAB958] group-hover:bg-[#FAB958] group-hover:text-[#1A3263] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-white font-medium text-base">+62 812-3456-7890</span>
              </div>
              
              <div className="group flex items-center gap-4 hover:translate-x-2 transition-transform w-fit cursor-pointer">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-[#FAB958] group-hover:bg-[#FAB958] group-hover:text-[#1A3263] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-white font-medium text-base">+62 898-7654-3210</span>
              </div>
            </div>
          </div>

          {/* BOX 2.5: OPERATIONAL HOURS */}
          <div className="h-fit w-full bg-[#FAB958]/10 rounded-[2rem] p-7 md:p-8 flex items-center justify-between border border-[#FAB958]/20 shadow-sm relative overflow-hidden group">
            <Clock className="absolute -right-4 -bottom-4 w-32 h-32 text-[#FAB958] opacity-5 pointer-events-none" />
            <div className="flex flex-col z-10">
              <span className="text-[#FAB958] font-bold text-xs tracking-widest uppercase mb-2">Jam Operasional</span>
              <span className="text-[#1A3263] font-extrabold text-lg">Senin - Jumat</span>
              <span className="text-slate-600 font-medium text-sm mt-1">08:00 - 17:00 WIB</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#FAB958] shadow-sm z-10 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          {/* BOX 3: SOCIAL VIBES */}
          <div className="h-fit w-full bg-white rounded-[2rem] p-7 md:p-8 flex flex-col border border-slate-100 shadow-sm">
            <h5 className="text-slate-400 font-bold text-xs tracking-widest uppercase mb-5">
              Digital Presence
            </h5>
            
            <div className="flex items-center gap-4">
              <a href="#" className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1A3263] hover:bg-[#FAB958] hover:text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <InstagramIcon />
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1A3263] hover:bg-[#FAB958] hover:text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <FacebookIcon />
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1A3263] hover:bg-[#FAB958] hover:text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <LinkedinIcon />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
