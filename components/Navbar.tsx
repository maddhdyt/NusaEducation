import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-lg border-b border-slate-100/50">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Left: Logo */}
        <Link href="/" className="flex cursor-pointer items-center gap-3 transition-all duration-300 ease-in-out hover:opacity-80">
          <img src="https://ik.imagekit.io/yqhp1cmbp/nusa%20brand%20new.png" alt="Nusa Education Logo" className="w-7 md:w-8 h-auto object-contain" />
          <span className="text-xl font-extrabold tracking-tight text-[#1A3263]">Nusa Education</span>
        </Link>
        
        {/* Center: Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#layanan" className="flex cursor-pointer items-center gap-1.5 text-sm font-medium text-[#1A3263] transition-colors">
            <span className="text-xl leading-none">&bull;</span> Layanan Kami
          </Link>
          <Link href="#produk" className="cursor-pointer text-sm font-medium text-slate-500 transition-colors hover:text-[#1A3263]">
            Produk
          </Link>
          <Link href="#portofolio" className="cursor-pointer text-sm font-medium text-slate-500 transition-colors hover:text-[#1A3263]">
            Portofolio
          </Link>
          <Link href="#kontak" className="cursor-pointer text-sm font-medium text-slate-500 transition-colors hover:text-[#1A3263]">
            Kontak
          </Link>
        </nav>
        
        {/* Right: Buttons */}
        <div className="flex items-center gap-6">
          <Link href="#masuk" className="hidden cursor-pointer items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-[#1A3263] md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Masuk
          </Link>
          <button className="flex cursor-pointer items-center gap-2 rounded-full border border-[#1A3263] px-6 py-2.5 text-sm font-bold text-[#1A3263] transition-all hover:bg-[#1A3263] hover:text-white">
            Hubungi Kami
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16l4-4-4-4" />
              <path d="M8 12h8" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
