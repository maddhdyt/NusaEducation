export default function Hero() {
  return (
    <section className="relative w-full bg-white pb-20">
      {/* Background Orbs */}
      <div className="absolute -top-32 left-0 md:-left-10 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#FAB958] rounded-full mix-blend-multiply filter blur-[150px] opacity-40 pointer-events-none -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#547792] rounded-full mix-blend-multiply filter blur-[120px] opacity-50 z-0 pointer-events-none"></div>

      {/* Top: Centered Stack */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl px-6 md:px-8 flex-col items-center pt-20 text-center">
        <h1 className="animate-fade-in-up max-w-4xl text-5xl font-extrabold tracking-tight text-[#1A3263] md:text-7xl">
          Digitalisasi Bisnis Anda <br className="hidden md:block" />
          <span className="relative inline-block px-4 py-1 mt-2 bg-gradient-to-r from-[#FAB958] to-[#FAB958]/40 text-[#1A3263] rounded-lg rotate-[-1deg]">Bersama Kami!</span>
        </h1>
        
        <p className="animate-fade-in-up delay-100 mt-6 text-lg text-[#547792] max-w-3xl mx-auto leading-relaxed">
          Kami adalah Nusa Education, creative digital partner yang membantu bisnis, lembaga, <br className="hidden md:block" /> dan komunitas tumbuh melalui teknologi, desain, dan strategi digital yang relevan.
        </p>
        
        <button className="animate-fade-in-up delay-200 mt-8 cursor-pointer px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#1A3263] via-[#547792] to-[#FAB958] bg-[length:200%_auto] hover:bg-right transition-all duration-700 ease-out shadow-lg hover:shadow-xl hover:shadow-[#FAB958]/30 hover:-translate-y-1">
          Mulai Proyek Anda
        </button>

        {/* The Overlapping Image */}
        <div className="animate-fade-in-up delay-200 relative w-full max-w-4xl mx-auto mt-4 h-[400px] md:h-[580px] flex items-end justify-center z-0">
          <img src="/hero-person-1.png" alt="Creative Digital Partner 1" className="relative z-20 h-full w-auto object-contain object-bottom drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]" />
          <img src="/hero-person-2.png" alt="Creative Digital Partner 2" className="relative z-10 h-[85%] md:h-[90%] w-auto object-contain object-bottom drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] -ml-16 md:-ml-32" />
        </div>
      </div>

      {/* The Overlapping Stats Container */}
      <div className="animate-fade-in-up delay-400 relative z-20 mx-auto -mt-32 w-full max-w-7xl px-6 md:px-8 rounded-[2.5rem] bg-[#1A3263] p-4 shadow-2xl md:-mt-48 md:p-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {/* Card 1 */}
          <div className="group relative flex min-h-[160px] cursor-pointer flex-col justify-end overflow-hidden rounded-3xl bg-[#547792] p-6 text-white lg:col-span-2">
            <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#547792] transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L16.2 7.8M17 17V7H7"/>
              </svg>
            </div>
            <h3 className="text-5xl font-extrabold tracking-tight">540+</h3>
            <p className="mt-1 text-sm font-medium opacity-90">Klien Telah Bergabung</p>
          </div>
          
          {/* Card 2 */}
          <div className="flex min-h-[160px] flex-col items-center justify-center rounded-3xl bg-[#E8E2DB] p-6 text-[#1A3263] transition-transform duration-300 hover:-translate-y-1 lg:col-span-1">
            <h3 className="text-4xl font-extrabold tracking-tight">750+</h3>
            <p className="mt-2 text-center text-xs font-semibold">Pembuatan Jurnal</p>
          </div>

          {/* Card 3 */}
          <div className="flex min-h-[160px] flex-col items-center justify-center rounded-3xl bg-white/10 p-6 text-white transition-transform duration-300 hover:-translate-y-1 lg:col-span-1">
            <h3 className="text-4xl font-extrabold tracking-tight">270+</h3>
            <p className="mt-2 text-center text-xs font-medium opacity-90">Website Kami Buat</p>
          </div>

          {/* Card 4 */}
          <div className="flex min-h-[160px] flex-col items-center justify-center rounded-3xl bg-[#FAB958] p-6 text-[#1A3263] shadow-lg shadow-[#FAB958]/20 transition-transform duration-300 hover:-translate-y-1 lg:col-span-1">
            <h3 className="text-4xl font-extrabold tracking-tight">60+</h3>
            <p className="mt-2 text-center text-xs font-semibold">Projek Selesai</p>
          </div>
        </div>
      </div>

      {/* CLIENT LOGO MARQUEE */}
      <div className="mt-20 md:mt-24 w-full flex flex-col items-center">
        <h3 className="text-center text-slate-500 font-medium text-sm md:text-base tracking-wide mb-8">
          Dipercaya oleh lebih dari 540+ Institusi Akademik & Pengelola Jurnal Nasional
        </h3>
        
        <div className="relative w-full overflow-hidden flex items-center py-4 max-w-7xl mx-auto px-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          
          {/* ANIMATED TRACK */}
          <style>{`
            @keyframes infinite-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <div className="flex w-fit animate-[infinite-scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0 items-center justify-around">
                {[
                  "https://ik.imagekit.io/yqhp1cmbp/image782.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/group1308.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/image403.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/image399.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/image778.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/whatsapp_image_2024-06-16_at_1.37.38_pm-removebg-preview(1)1.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/3(1)1.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/image404.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/image407.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/image780.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/image425.webp",
                  "https://ik.imagekit.io/yqhp1cmbp/image781.webp"
                ].map((logo, idx) => (
                  <div key={idx} className="relative group flex items-center justify-center">
                    {/* The Logo */}
                    <img 
                      src={logo} 
                      alt="Client Logo" 
                      className="h-10 md:h-12 w-auto object-contain mx-8 md:mx-12 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out cursor-pointer drop-shadow-[0_0_0px_rgba(250,185,88,0)] group-hover:drop-shadow-[0_0_10px_rgba(250,185,88,0.8)]" 
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
