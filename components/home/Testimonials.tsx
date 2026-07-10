"use client";

import React from "react";

const stories = [
  { 
    client: "Universitas Brawijaya", 
    person: "Prof. Dr. Hendra Gunawan",
    role: "Wakil Rektor I",
    story: "NusaEducation membantu kami merevolusi sistem pendaftaran mahasiswa baru. Proses yang tadinya memakan waktu berminggu-minggu kini selesai dalam hitungan hari. Platform yang disediakan sangat stabil.",
    metricValue: "1 Hari",
    metricDesc: "vs. berminggu-minggu untuk proses pendaftaran awal",
    darkColor: "bg-[#F47C68]", // Darker Coral
    lightColor: "bg-[#FFBCAE]" // Lighter Coral
  },
  { 
    client: "Institut Teknologi Sepuluh Nopember", 
    person: "Dr. Budi Santoso",
    role: "Kepala LPPM",
    story: "Kami berhasil meningkatkan jumlah publikasi jurnal bereputasi dengan platform OJS yang dirancang khusus oleh Nusa. Sangat intuitif, aman, dan langsung memenuhi standar pedoman akreditasi.",
    metricValue: "3x",
    metricDesc: "Peningkatan jumlah publikasi terindeks per tahun",
    darkColor: "bg-[#9AC2F4]", // Darker Blue
    lightColor: "bg-[#D4E4FF]" // Lighter Blue
  },
  { 
    client: "Politeknik Negeri Malang", 
    person: "Rina Mulyani, M.T.",
    role: "Direktur Admisi",
    story: "Kampanye digital marketing yang dijalankan tim Nusa memberikan dampak luar biasa pada konversi mahasiswa baru. Target penerimaan tercapai bahkan sebelum gelombang pendaftaran terakhir ditutup.",
    metricValue: "37.5%",
    metricDesc: "Peningkatan rasio pendaftaran mahasiswa baru YoY",
    darkColor: "bg-[#7BEB9C]", // Darker Green
    lightColor: "bg-[#B5F5C6]" // Lighter Green
  },
  { 
    client: "Universitas Telkom", 
    person: "Ir. Dimas Anggara",
    role: "Direktur TIK",
    story: "Migrasi sistem akademik warisan (legacy) kami berjalan tanpa hambatan. Tim teknis sangat responsif, mengawal proses end-to-end, dan memahami betul kompleksitas pendidikan tinggi.",
    metricValue: "10k+",
    metricDesc: "Jam kerja admin yang dihemat secara otomatis",
    darkColor: "bg-[#FFBE68]", // Darker Orange
    lightColor: "bg-[#FFE4B5]" // Lighter Orange
  },
  { 
    client: "Akademi Keperawatan Pelni", 
    person: "Drg. Siti Aisyah",
    role: "Ketua Senat Akademik",
    story: "Pendampingan akreditasi jurnal kami sangat terbantu dengan sistem yang terintegrasi. NusaEducation tidak hanya sekadar vendor IT, tapi partner ahli yang peduli pada ekosistem riset.",
    metricValue: "3 Bln",
    metricDesc: "Lebih cepat dari target rilis jurnal dan akreditasi",
    darkColor: "bg-[#D9D9D9]", // Darker Gray
    lightColor: "bg-[#F4F4F5]" // Lighter Gray
  },
  { 
    client: "STIE YKPN", 
    person: "Ahmad Reza, M.B.A.",
    role: "Kepala Divisi Marketing",
    story: "Dengan Nusa, kami bisa mempertahankan skala promosi sambil bermitra erat dengan tim sales untuk memperdalam koneksi dengan audiens mahasiswa, serta meletakkan fondasi masa depan digital.",
    metricValue: "9x",
    metricDesc: "Pertumbuhan traffic website organik",
    darkColor: "bg-[#3A9EF2]", // Darker Bright Blue
    lightColor: "bg-[#8BC6F7]" // Lighter Bright Blue
  }
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="w-full bg-[#F8F9FA] py-20 md:py-32 font-sans relative">
      <div className="max-w-[1380px] mx-auto px-6 md:px-8 relative z-20">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[#FF9F1C] font-bold tracking-widest uppercase text-sm mb-3 md:mb-4">Testimonial & Kisah Sukses</span>
          <h2 className="text-[36px] md:text-[54px] font-serif font-medium text-[#0A192F] leading-[1.1] mb-4 md:mb-6 tracking-tight" style={{ WebkitTextStroke: "1px currentColor" }}>
            Kata Mereka Tentang Kami
          </h2>
          <p className="text-[#475569] text-[15px] md:text-[17px] leading-relaxed">
            Kami tidak sekadar berjanji. Berikut adalah kisah sukses dan pencapaian nyata yang telah diraih oleh klien-klien terbaik kami.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {stories.map((item, index) => (
            <div 
              key={index} 
              className="bg-white flex flex-col group cursor-pointer"
            >
              {/* Card Header & Content */}
              <div className="p-5 flex-1 flex flex-col">
                
                {/* Client & Person Details */}
                <div className="flex flex-col justify-start pb-3 mb-3 border-b border-slate-200">
                  <h4 className="font-sans font-bold text-slate-800 text-[14px] tracking-tight mb-1">{item.client}</h4>
                  <p className="font-sans text-[12px] text-slate-500 font-medium leading-snug">
                    <span className="text-slate-700 font-semibold">{item.person}</span> — {item.role}
                  </p>
                </div>
                
                {/* Story Text */}
                <p className="text-slate-600 text-[13px] md:text-[14px] leading-[1.6] font-medium pr-2">
                  {item.story}
                </p>
              </div>

              {/* Card Footer Metric Block (Two-Toned) */}
              <div className="w-full flex flex-row mt-auto">
                {/* Left Metric Value (Darker) */}
                <div className={`px-4 py-4 flex items-center justify-center w-auto min-w-[100px] md:min-w-[110px] shrink-0 ${item.darkColor}`}>
                  <span className="font-serif font-bold text-[#0A192F] text-[34px] md:text-[38px] leading-none tracking-tight whitespace-nowrap">
                    {item.metricValue}
                  </span>
                </div>
                
                {/* Right Metric Desc (Lighter) */}
                <div className={`px-4 py-4 flex items-center flex-1 ${item.lightColor}`}>
                  <span className="text-[12px] font-bold text-[#0A192F] leading-snug pr-2">
                    {item.metricDesc}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
