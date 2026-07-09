"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  navItems?: NavItem[];
  contactWaMessage?: string;
}

const defaultNavItems: NavItem[] = [
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'FAQ', href: '#faq' },
];

const hoverColors = ['bg-[#D1F4E0]', 'bg-[#D0E5FF]', 'bg-[#FDE2E4]', 'bg-[#EBFDCC]', 'bg-[#FFE8CC]'];

export default function Navbar({ 
  navItems = defaultNavItems,
  contactWaMessage = "Halo NusaEducation, saya tertarik untuk berdiskusi mengenai layanan yang ditawarkan. Bisakah kita menjadwalkan konsultasi?"
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Navbar Container with higher z-index than the dropdown */}
      <div className="w-full px-4 md:px-6 flex h-20 items-center justify-between bg-white relative z-50">
        {/* Left: Logo */}
        <Link href="/" className="flex cursor-pointer items-center transition-all duration-300 ease-in-out hover:opacity-80">
          <Image src="https://ik.imagekit.io/yqhp1cmbp/logo%20nusa%20education.png" alt="Nusa Education" width={200} height={56} className="h-10 md:h-14 w-auto object-contain" priority />
        </Link>

        {/* Center: Links */}
        <nav className="hidden items-center gap-1 md:flex">
          <div className="relative group py-4">
            <button className="relative group/nav px-2.5 py-2 overflow-hidden flex items-center gap-1 cursor-pointer">
              <div className="absolute inset-0 bg-[#FFE8CC] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
              <span className="relative z-10 text-[15px] text-[#0A192F] font-medium transition-colors flex items-center gap-1">Layanan Kami <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" /></span>
            </button>
            <div className="absolute top-[80%] left-1/2 -translate-x-1/3 w-[750px] bg-white border border-slate-200 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 p-6 z-50">
              <div className="grid grid-cols-3 gap-6">
                
                {/* Card 1 */}
                <Link href="/services/web-dev-ojs" className="flex flex-col bg-white hover:bg-slate-50 transition-all duration-300 group">
                   {/* Top Graphic */}
                   <div className="w-full h-[140px] bg-[#FFE8CC] group-hover:bg-[#FFD6A5] transition-colors relative border-b-2 border-transparent flex items-center justify-center overflow-hidden"
                      style={{ backgroundImage: 'linear-gradient(to right, rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(249, 115, 22, 0.3) 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
                      <svg width="240" height="240" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
                        <rect x="44" y="54" width="55" height="75" fill="#F97316" />
                        <rect x="40" y="50" width="55" height="75" fill="#FFE8CC" stroke="#5C2E0E" strokeWidth="3" />
                        <rect x="40" y="50" width="55" height="15" fill="#5C2E0E" />
                        <line x1="50" y1="75" x2="80" y2="75" stroke="#5C2E0E" strokeWidth="3" />
                        <line x1="50" y1="85" x2="80" y2="85" stroke="#5C2E0E" strokeWidth="3" />
                        <line x1="50" y1="95" x2="70" y2="95" stroke="#5C2E0E" strokeWidth="3" />
                        <rect x="104" y="44" width="60" height="75" fill="#F97316" />
                        <rect x="100" y="40" width="60" height="75" fill="#FFE8CC" stroke="#5C2E0E" strokeWidth="3" />
                        <rect x="100" y="40" width="60" height="15" fill="#5C2E0E" />
                        <circle cx="130" cy="75" r="14" fill="#FFE8CC" stroke="#5C2E0E" strokeWidth="3" />
                        <circle cx="125" cy="71" r="2" fill="#5C2E0E" />
                        <path d="M 125 78 Q 130 82 135 78" stroke="#5C2E0E" strokeWidth="2" fill="none" strokeLinecap="round" />
                        <rect x="104" y="134" width="70" height="25" fill="#F97316" />
                        <rect x="100" y="130" width="70" height="25" fill="#FFE8CC" stroke="#5C2E0E" strokeWidth="3" />
                        <line x1="108" y1="140" x2="140" y2="140" stroke="#5C2E0E" strokeWidth="3" />
                        <line x1="108" y1="148" x2="155" y2="148" stroke="#5C2E0E" strokeWidth="3" />
                        <path d="M 50 145 L 60 135 L 65 145 L 75 145 L 70 155 L 75 165 L 65 160 L 55 170 L 60 155 Z" fill="#FFE8CC" stroke="#5C2E0E" strokeWidth="3" />
                        <path d="M 160 100 L 165 95 L 165 105 L 175 105 L 165 110 L 170 120 L 160 110 L 150 115 L 155 105 Z" fill="#FFE8CC" stroke="#5C2E0E" strokeWidth="2" />
                        <path d="M 15 80 L 45 70 L 30 85 L 40 100 L 30 105 L 20 90 L 15 80 Z" fill="#EA580C" />
                        <path d="M 130 150 L 160 140 L 145 155 L 155 170 L 145 175 L 135 160 L 130 150 Z" fill="#EA580C" />
                      </svg>
                   </div>
                   {/* Bottom Text */}
                   <div className="pt-4">
                     <h4 className="font-serif text-[#0A192F] text-[20px] mb-1.5 flex items-center justify-between" style={{ WebkitTextStroke: "0.5px currentColor" }}>
                       Web Dev & OJS <span className="text-slate-400 group-hover:text-[#0A192F] transition-colors text-xl leading-none">›</span>
                     </h4>
                     <p className="text-[13px] text-slate-600 leading-snug">Pengembangan website & platform OJS berstandar.</p>
                   </div>
                </Link>

                {/* Card 2 */}
                <Link href="/services/journal-publication" className="flex flex-col bg-white hover:bg-slate-50 transition-all duration-300 group">
                   {/* Top Graphic */}
                   <div className="w-full h-[140px] bg-[#D1F4E0] group-hover:bg-[#A7E8C3] transition-colors relative border-b-2 border-transparent flex items-center justify-center overflow-hidden"
                      style={{ backgroundImage: 'linear-gradient(to right, rgba(34, 197, 94, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 197, 94, 0.3) 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
                      <svg width="240" height="240" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
                        <rect x="34" y="64" width="60" height="40" fill="#22C55E" />
                        <rect x="30" y="60" width="60" height="40" fill="#D1F4E0" stroke="#0A401A" strokeWidth="3" />
                        <rect x="30" y="60" width="15" height="15" fill="#0A401A" />
                        <line x1="55" y1="75" x2="80" y2="75" stroke="#0A401A" strokeWidth="3" />
                        <line x1="55" y1="85" x2="70" y2="85" stroke="#0A401A" strokeWidth="3" />
                        <path d="M 90 80 L 120 80 L 120 120 L 140 120" stroke="#0A401A" strokeWidth="3" fill="none" />
                        <path d="M 135 110 L 150 120 L 135 130 Z" fill="#22C55E" stroke="#0A401A" strokeWidth="3" />
                        <rect x="144" y="114" width="40" height="30" fill="#22C55E" />
                        <rect x="140" y="110" width="40" height="30" fill="#D1F4E0" stroke="#0A401A" strokeWidth="3" />
                        <rect x="140" y="110" width="10" height="10" fill="#0A401A" />
                        <line x1="155" y1="120" x2="170" y2="120" stroke="#0A401A" strokeWidth="3" />
                        <path d="M 100 150 L 120 120 L 80 120 Z" fill="#22C55E" stroke="#0A401A" strokeWidth="3" />
                        <circle cx="50" cy="140" r="10" fill="none" stroke="#0A401A" strokeWidth="3" />
                        <path d="M 130 50 L 135 40 L 140 50 L 150 55 L 140 60 L 135 70 L 130 60 L 120 55 Z" fill="#D1F4E0" stroke="#0A401A" strokeWidth="2" />
                      </svg>
                   </div>
                   {/* Bottom Text */}
                   <div className="pt-4">
                     <h4 className="font-serif text-[#0A192F] text-[20px] mb-1.5 flex items-center justify-between" style={{ WebkitTextStroke: "0.5px currentColor" }}>
                       Publikasi Jurnal <span className="text-slate-400 group-hover:text-[#0A192F] transition-colors text-xl leading-none">›</span>
                     </h4>
                     <p className="text-[13px] text-slate-600 leading-snug">Alur sistematis naskah ilmiah hingga terbit.</p>
                   </div>
                </Link>

                {/* Card 3 */}
                <Link href="/services/digital-marketing" className="flex flex-col bg-white hover:bg-slate-50 transition-all duration-300 group">
                   {/* Top Graphic */}
                   <div className="w-full h-[140px] bg-[#D0E5FF] group-hover:bg-[#9ECAFF] transition-colors relative border-b-2 border-transparent flex items-center justify-center overflow-hidden"
                      style={{ backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
                      <svg width="240" height="240" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
                        <ellipse cx="100" cy="100" rx="55" ry="15" transform="rotate(30 100 100)" fill="#D0E5FF" stroke="#0A245C" strokeWidth="3" />
                        <ellipse cx="100" cy="100" rx="55" ry="15" transform="rotate(-30 100 100)" fill="#D0E5FF" stroke="#0A245C" strokeWidth="3" />
                        <ellipse cx="100" cy="100" rx="55" ry="15" transform="rotate(90 100 100)" fill="#D0E5FF" stroke="#0A245C" strokeWidth="3" />
                        <circle cx="103" cy="103" r="14" fill="#3B82F6" />
                        <circle cx="100" cy="100" r="14" fill="#D0E5FF" stroke="#0A245C" strokeWidth="3" />
                        <circle cx="100" cy="100" r="6" fill="#0A245C" />
                        <rect x="135" y="65" width="12" height="12" transform="rotate(15 135 65)" fill="#3B82F6" stroke="#0A245C" strokeWidth="2" />
                        <circle cx="65" cy="135" r="6" fill="#3B82F6" stroke="#0A245C" strokeWidth="2" />
                        <path d="M 40 80 L 55 65 L 65 80 Z" fill="#3B82F6" stroke="#0A245C" strokeWidth="3" />
                        <path d="M 140 140 L 155 130 L 165 150 L 145 160 Z" fill="#D0E5FF" stroke="#0A245C" strokeWidth="2" />
                      </svg>
                   </div>
                   {/* Bottom Text */}
                   <div className="pt-4">
                     <h4 className="font-serif text-[#0A192F] text-[20px] mb-1.5 flex items-center justify-between" style={{ WebkitTextStroke: "0.5px currentColor" }}>
                       Digital Marketing <span className="text-slate-400 group-hover:text-[#0A192F] transition-colors text-xl leading-none">›</span>
                     </h4>
                     <p className="text-[13px] text-slate-600 leading-snug">Jaga kualitas & visibilitas institusi Anda.</p>
                   </div>
                </Link>
              </div>
            </div>
          </div>
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="relative group/nav px-2.5 py-2 overflow-hidden flex items-center cursor-pointer">
              <div className={`absolute inset-0 ${hoverColors[index % hoverColors.length]} origin-left scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 ease-out z-0`}></div>
              <span className="relative z-10 text-[15px] text-[#0A192F] font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right: Desktop Buttons */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/customer-care" className="cursor-pointer items-center text-[15px] font-medium text-[#0A192F] transition-colors hover:text-[#FF9F1C] flex">
            Customer Care
          </Link>
          <a href={`https://wa.me/6285121117589?text=${encodeURIComponent(contactWaMessage)}`} target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center justify-center bg-[#FF9F1C] px-8 py-3 text-[17px] font-semibold text-white transition-all hover:bg-[#E68A00]">
            Contact Us
          </a>
        </div>

        {/* Right: Mobile Trigger */}
        <div className="flex md:hidden items-center gap-5">
          <Link href="/customer-care" className="text-[15px] font-medium text-[#0A192F]">Customer Care</Link>
          <button type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#0A192F] transition-transform duration-300">
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" strokeWidth={2.5} />
            ) : (
              <Menu className="w-7 h-7" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay (Drops down from below navbar) */}
      <div className={`fixed top-20 inset-x-0 bottom-0 z-40 overflow-hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Dark overlay backdrop (optional, for aesthetics) */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMobileMenuOpen(false)}></div>
        
        {/* Menu Content */}
        <div className={`absolute inset-x-0 top-0 bottom-0 bg-white transition-transform duration-700 ease-[0.16,1,0.3,1] flex flex-col ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          
          {/* Mobile Links */}
          <div className="flex-1 overflow-y-auto px-6 py-8 pb-32">
          <div className="flex flex-col gap-6">
            
            {/* Layanan Kami with Accordion */}
            <div className="flex flex-col border-b border-slate-100 pb-6">
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenMobileDropdown(openMobileDropdown === 'layanan' ? null : 'layanan');
                }}
                className="flex w-full items-center justify-between text-[#0A192F] font-serif text-[32px] font-medium tracking-tight text-left"
              >
                Layanan Kami
                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openMobileDropdown === 'layanan' ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ 
                  maxHeight: openMobileDropdown === 'layanan' ? '400px' : '0px', 
                  opacity: openMobileDropdown === 'layanan' ? 1 : 0,
                  marginTop: openMobileDropdown === 'layanan' ? '1.5rem' : '0px'
                }}
              >
                <div className="flex flex-col gap-4">
                  <Link href="/services/web-dev-ojs" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-[#0A192F] text-[18px] font-medium hover:text-[#FF9F1C] py-2">
                    Web Dev & OJS
                  </Link>
                  <Link href="/services/journal-publication" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-[#0A192F] text-[18px] font-medium hover:text-[#FF9F1C] py-2">
                    Publikasi Jurnal
                  </Link>
                  <Link href="/services/digital-marketing" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-[#0A192F] text-[18px] font-medium hover:text-[#FF9F1C] py-2">
                    Digital Marketing
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Nav Links */}
            {navItems.map((item, index) => (
              <Link key={index} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-[#0A192F] font-serif text-[32px] font-medium tracking-tight border-b border-slate-100 py-4">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Bottom Action Button */}
          <div className="mt-10">
            <a href={`https://wa.me/6285121117589?text=${encodeURIComponent(contactWaMessage)}`} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="flex w-full items-center justify-center bg-[#FF9F1C] px-8 py-4 text-[18px] font-semibold text-white transition-all hover:bg-[#E68A00]">
              Contact Us
            </a>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}
