"use client";
import React from 'react';

export default function ContactChannels() {
  const channels = [
    {
      id: "whatsapp",
      title: "WhatsApp / Chat",
      desc: "Layanan prioritas untuk respon instan. Konsultasi langsung dengan tim kami via WhatsApp.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.388 0 12.037c0 2.124.553 4.195 1.604 6.012L.15 23.473l5.58-1.464a11.967 11.967 0 006.3 1.776h.005c6.645 0 12.036-5.39 12.036-12.037 0-3.222-1.254-6.252-3.535-8.533C18.256 1.255 15.225 0 12.031 0zm0 21.758h-.004a9.98 9.98 0 01-5.088-1.39l-.364-.216-3.784.992.996-3.69-.236-.376A9.957 9.957 0 012.04 12.037c0-5.506 4.482-9.988 9.995-9.988 2.668 0 5.176 1.04 7.063 2.928a9.962 9.962 0 012.927 7.06 10.003 10.003 0 01-9.994 9.995v-.274zm5.483-7.513c-.3-.15-1.776-.877-2.052-.978-.276-.101-.477-.15-.678.151-.202.302-.777.978-.953 1.178-.176.2-.352.226-.653.076-1.507-.756-2.73-1.637-3.753-3.344-.202-.34.202-.315.79-.884.1-.101.15-.202.251-.352.1-.15.05-.276 0-.426-.05-.15-.678-1.631-.928-2.234-.241-.586-.486-.507-.678-.517h-.578c-.2 0-.527.076-.803.377s-1.054 1.03-1.054 2.511c0 1.482 1.08 2.914 1.23 3.115.15.201 2.124 3.242 5.143 4.545 1.93.834 2.664.9 3.525.758.948-.155 2.894-1.182 3.3-2.327.404-1.144.404-2.124.283-2.326-.12-.202-.426-.327-.727-.478z"/></svg>
      ),
      cta: "Mulai Chat",
      link: "https://wa.me/6285121117589?text=Halo%20NusaEducation%2C%20saya%20butuh%20bantuan.",
      bg: "bg-[#25D366]",
      textColor: "text-white"
    },
    {
      id: "email",
      title: "Email Support",
      desc: "Kirimkan proposal, dokumen, atau pertanyaan detail. Kami akan merespon dalam waktu maksimal 24 jam kerja.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      cta: "Kirim Email",
      link: "mailto:support@nusaeducation.com",
      bg: "bg-[#0A192F]",
      textColor: "text-white"
    },
    {
      id: "location",
      title: "Kunjungan & Alamat",
      desc: "Ingin berdiskusi tatap muka secara langsung? Tim kami siap menyambut Anda di kantor operasional kami.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      cta: "Lihat di Maps",
      link: "https://maps.google.com",
      bg: "bg-[#F8F9FA]",
      textColor: "text-[#0A192F]"
    }
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-20 lg:py-28 relative z-20">
      <div className="w-full max-w-[1380px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {channels.map((chan, idx) => (
            <a 
              key={idx} 
              href={chan.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group flex flex-col p-8 md:p-10 ${chan.bg} ${chan.textColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] border ${chan.bg === 'bg-[#F8F9FA]' ? 'border-slate-200 hover:border-slate-300' : 'border-transparent'}`}
            >
              <div className="mb-8">
                {chan.icon}
              </div>
              <h3 className="text-[28px] md:text-[32px] font-serif tracking-tight leading-tight mb-4" style={{ WebkitTextStroke: chan.bg === 'bg-[#F8F9FA]' ? "0.8px currentColor" : "0" }}>
                {chan.title}
              </h3>
              <p className={`text-[15px] md:text-[16px] leading-relaxed mb-10 flex-grow font-sans ${chan.bg === 'bg-[#F8F9FA]' ? 'text-slate-600' : 'text-white/80'}`}>
                {chan.desc}
              </p>
              
              <div className="flex items-center gap-2 font-bold tracking-wide text-[14px] uppercase mt-auto">
                {chan.cta}
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
