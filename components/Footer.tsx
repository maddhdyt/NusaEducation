
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const gridStyle = {
    // Very subtle, extremely dark grid lines
    backgroundImage: `linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)`,
    backgroundSize: '24px 24px',
    backgroundColor: '#0A0A0A', // Near-black background
  };

  return (
    <footer className="relative w-full font-sans" style={gridStyle}>
      <div className="max-w-[1380px] mx-auto px-6 md:px-10 pt-24 pb-12">
        
        {/* Top Section: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-12 mb-24">
          
          {/* Column 1: Deskripsi & Lokasi */}
          <div className="flex flex-col pr-0 lg:pr-8 lg:col-span-2">
            <div className="flex justify-between items-baseline border-b border-white pb-3 mb-8">
              <h3 className="font-serif text-[28px] text-white tracking-tight leading-none">Tentang Kami</h3>
              <span className="text-white text-[16px] font-sans">↗</span>
            </div>
            
            <div className="mb-8">
              <h4 className="font-bold text-[14px] text-white mb-4">MITRA TEKNOLOGI KAMPUS ↗</h4>
              <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6">
                Kami membantu individu, lembaga, dan perusahaan untuk berkarya, berkembang, dan bersaing di era digital melalui layanan publikasi, pelatihan, dan pengembangan platform online yang profesional.
              </p>
              
              <h4 className="font-bold text-[14px] text-white mb-3">LOKASI KANTOR</h4>
              <p className="text-[#A1A1AA] text-[15px] leading-relaxed">
                Perumahan Janati Park, Jl. Raya<br/>
                Cirebon - Bandung Ruko 1-C, Cibeusi,<br/>
                Kec. Jatinangor, Kabupaten Sumedang,<br/>
                Jawa Barat 45363
              </p>
            </div>
          </div>

          {/* Column 2: Layanan Kami */}
          <div className="flex flex-col">
            <div className="flex justify-between items-baseline border-b border-white pb-3 mb-8">
              <h3 className="font-serif text-[28px] text-white tracking-tight leading-none">Layanan Kami</h3>
              <span className="text-white text-[16px] font-sans">↗</span>
            </div>
            
            <div className="mb-8">
              <h4 className="font-bold text-[14px] text-white mb-4">SOLUSI DIGITAL ↗</h4>
              <ul className="space-y-3">
                <li><Link href="/services/web-dev-ojs" className="text-[#A1A1AA] hover:text-white text-[15px] transition-colors">Web Dev & OJS</Link></li>
                <li><Link href="/services/journal-publication" className="text-[#A1A1AA] hover:text-white text-[15px] transition-colors">Publikasi Jurnal</Link></li>
                <li><Link href="#contact" className="text-[#A1A1AA] hover:text-white text-[15px] transition-colors">Digital Marketing</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Perusahaan */}
          <div className="flex flex-col">
            <div className="flex justify-between items-baseline border-b border-white pb-3 mb-8">
              <h3 className="font-serif text-[28px] text-white tracking-tight leading-none">Jelajahi</h3>
              <span className="text-white text-[16px] font-sans">↗</span>
            </div>
            
            <div className="mb-8">
              <h4 className="font-bold text-[14px] text-white mb-4">HALAMAN UTAMA ↗</h4>
              <ul className="space-y-3">
                <li><Link href="#keunggulan" className="text-[#A1A1AA] hover:text-white text-[15px] transition-colors">Keunggulan Layanan</Link></li>
                <li><Link href="#portofolio" className="text-[#A1A1AA] hover:text-white text-[15px] transition-colors">Portofolio Klien</Link></li>
                <li><Link href="#testimoni" className="text-[#A1A1AA] hover:text-white text-[15px] transition-colors">Testimoni</Link></li>
                <li><Link href="#faq" className="text-[#A1A1AA] hover:text-white text-[15px] transition-colors">FAQ & Bantuan</Link></li>
                <li><Link href="/customer-care" className="text-[#A1A1AA] hover:text-white transition-colors text-[15px]">Customer Care</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Hubungi Kami */}
          <div className="flex flex-col">
            <div className="flex justify-between items-baseline border-b border-white pb-3 mb-8">
              <h3 className="font-serif text-[28px] text-white tracking-tight leading-none">Hubungi Kami</h3>
              <span className="text-white text-[16px] font-sans">↗</span>
            </div>
            
            <div className="mb-8">
              <h4 className="font-bold text-[14px] text-white mb-4">KONTAK LANGSUNG ↗</h4>
              <ul className="space-y-3 mb-8">
                <li><span className="text-[#A1A1AA] text-[15px] block font-medium">Email:</span> <a href="mailto:admin@nusaeducation.com" className="text-white hover:text-[#FF9F1C] text-[15px] transition-colors">admin@nusaeducation.com</a></li>
                <li><span className="text-[#A1A1AA] text-[15px] block font-medium">Telepon / WhatsApp:</span> <a href="#" className="text-white hover:text-[#FF9F1C] text-[15px] transition-colors">0881-0223-76684</a></li>
              </ul>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <a href="https://wa.me/6285121117589?text=Halo%20NusaEducation%2C%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20layanan%20yang%20ditawarkan.%20Bisakah%20kita%20menjadwalkan%20konsultasi%3F" target="_blank" rel="noopener noreferrer" className="conversion [&>*]:pointer-events-none w-full bg-[#FF9F1C] hover:bg-[#E68A00] text-white font-semibold text-[15px] py-3 px-6 text-center transition-colors block">
                  Contact Us
                </a>
                <a href="https://wa.me/6285121117589?text=Halo%20NusaEducation%2C%20saya%20membutuhkan%20bantuan%20layanan%20pelanggan%20(Customer%20Care)." target="_blank" rel="noopener noreferrer" className="conversion [&>*]:pointer-events-none w-full bg-transparent border border-[#333] hover:border-white text-white font-semibold text-[15px] py-3 px-6 text-center transition-colors block">
                  Customer Care
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Logo, Socials, Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-8 border-t border-[#333]">
          
          {/* Giant Logo */}
          <div>
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Image 
                src="https://ik.imagekit.io/yqhp1cmbp/Mask%20group%20(2).png" 
                alt="Nusa Education Logo" 
                width={200}
                height={64}
                className="h-12 md:h-16 w-auto object-contain opacity-90 mix-blend-screen"
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
          </div>

          {/* Right Side: Social & Legal */}
          <div className="flex flex-col items-start md:items-end gap-6">
            
            {/* Social Icons Placeholder (Text based for now) */}
            <div className="flex gap-6 text-white">
              <Link href="#" className="hover:text-[#FF9F1C] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
              <Link href="#" className="hover:text-[#FF9F1C] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </Link>
              <Link href="#" className="hover:text-[#FF9F1C] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </Link>
              <Link href="#" className="hover:text-[#FF9F1C] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </Link>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-4 text-[13px] text-[#A1A1AA]">
              <span>© Copyright 2025 NusaEducation. All rights reserved</span>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
