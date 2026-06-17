"use client";
import React, { useState, useRef } from 'react';
import { ArrowUpRight, X, Code, BookOpen, Library, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelectProject = (item: any) => {
    setSelectedProject(item);
    setCurrentPage(1);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setCurrentPage(1);
  };

  const carouselRef = useRef<HTMLDivElement>(null);

  const portfolioItems = [
    {
      Category: "OJS Development",
      Icon: Code,
      Title: "Portal Jurnal Universitas Terkemuka",
      Desc: "Instalasi, kustomisasi tema eksklusif, dan migrasi server Open Journal Systems (OJS) 3.x dengan standar keamanan tinggi.",
      Image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      projects: [
        {
          client: "Universitas Indonesia",
          title: "Migrasi OJS 3 & Kustomisasi Tema",
          desc: "Pemindahan database jurnal dari server lama ke sistem cloud baru, upgrade ke OJS versi terbaru, dan desain tema eksklusif yang responsif.",
          img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop"
        },
        {
          client: "Politeknik Negeri Jakarta",
          title: "Setup & Optimalisasi Keamanan Jurnal",
          desc: "Pemasangan SSL, perlindungan firewall, serta konfigurasi backup otomatis untuk melindungi arsip jurnal dari serangan siber.",
          img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
        }
      ]
    },
    {
      Category: "Publikasi Ilmiah",
      Icon: BookOpen,
      Title: "Indeksasi Jurnal Bereputasi",
      Desc: "Pendampingan submit, penyuntingan naskah, hingga manajemen tata letak untuk target indeksasi SINTA dan jurnal internasional.",
      Image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",
      projects: [
        {
          client: "Universitas Airlangga",
          title: "Pendampingan Akreditasi SINTA 2",
          desc: "Audit sistem OJS, perbaikan metadata artikel, layouting sesuai standar DOAJ, dan pendampingan hingga jurnal berhasil terindeks SINTA 2.",
          img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
        },
        {
          client: "Institut Teknologi Bandung",
          title: "Persiapan Indeksasi Scopus",
          desc: "Penyuntingan bahasa Inggris (proofreading), perbaikan referensi dengan Mendeley, dan pemenuhan standar kriteria internasional.",
          img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
        },
        {
          client: "Universitas Brawijaya",
          title: "Setup & Indeksasi DOAJ",
          desc: "Penyelarasan kebijakan jurnal, open access policy, dan lisensi Creative Commons untuk memenuhi persyaratan ketat DOAJ.",
          img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop"
        },
        {
          client: "Politeknik Negeri Malang",
          title: "Manajemen OJS & DOI Crossref",
          desc: "Aktivasi layanan DOI dari Crossref, perbaikan XML export, dan manajemen terbitan berkala untuk 4 jurnal fakultas.",
          img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop"
        },
        {
          client: "Universitas Padjadjaran",
          title: "Penyuntingan Naskah Multidisiplin",
          desc: "Copyediting komprehensif, uji plagiasi Turnitin, dan tata letak PDF standar penerbitan untuk 50+ manuskrip.",
          img: "https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=800&auto=format&fit=crop"
        },
        {
          client: "Universitas Gadjah Mada",
          title: "Pendampingan Re-Akreditasi SINTA 1",
          desc: "Evaluasi asesor internal, perbaikan sitasi, dan optimalisasi keragaman penulis internasional untuk upgrade SINTA.",
          img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop"
        },
        {
          client: "UIN Syarif Hidayatullah",
          title: "Integrasi Garuda & Google Scholar",
          desc: "Troubleshooting OAI-PMH, memastikan metadata jurnal tersedot sempurna ke portal Garuda dan Google Scholar.",
          img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
        },
        {
          client: "Universitas Diponegoro",
          title: "Desain Sampul & Identitas Jurnal",
          desc: "Pembuatan pedoman gaya selingkung (author guidelines), template artikel MS Word, dan redesain sampul jurnal.",
          img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
        },
        {
          client: "Universitas Sebelas Maret",
          title: "Pelatihan Editor Jurnal OJS 3",
          desc: "Workshop intensif 2 hari untuk para chief editor dan section editor dalam mengelola alur editorial di OJS 3.",
          img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
        },
        {
          client: "Politeknik Perkapalan Surabaya",
          title: "Indeksasi EBSCO & Copernicus",
          desc: "Pendaftaran dan pemenuhan evaluasi berkala untuk database pengindeks global Index Copernicus International (ICI).",
          img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
        },
        {
          client: "Universitas Hasanuddin",
          title: "Standarisasi Peer Review Process",
          desc: "Implementasi double-blind peer review form, panduan etika publikasi (COPE), dan manajemen reviewer database.",
          img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
        },
        {
          client: "Universitas Telkom",
          title: "Migrasi OJS 2 ke OJS 3",
          desc: "Pemutakhiran sistem dengan menjaga URL lama tetap aktif (redirect), tidak ada data author dan artikel yang hilang.",
          img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
        }
      ]
    },
    {
      Category: "Manajemen Jurnal",
      Icon: Library,
      Title: "Digitalisasi & Tata Kelola Berkala",
      Desc: "Digitalisasi arsip jurnal lama (back issue) dan manajemen penerbitan berkala untuk institusi akademik di seluruh Indonesia.",
      Image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop",
      projects: [
        {
          client: "Fakultas Hukum Universitas Airlangga",
          title: "Digitalisasi Back Issue 2010-2020",
          desc: "Proses pemindaian dokumen fisik, ekstraksi metadata, pemisahan bab artikel, dan pengunggahan ke repositori OJS.",
          img: "https://images.unsplash.com/photo-1522881113591-b52f71f4b16a?q=80&w=800&auto=format&fit=crop"
        },
        {
          client: "Asosiasi Profesi Pendidik",
          title: "Manajemen Penerbitan Berkala",
          desc: "Pengelolaan submission penulis, koordinasi dengan reviewer, hingga proses copyediting dan penerbitan nomor berkala tepat waktu.",
          img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
        }
      ]
    },
    {
      Category: "Penerbitan Akademik",
      Icon: FileText,
      Title: "Penerbitan Buku Ajar & Monograf",
      Desc: "Kurasi naskah, desain sampul eksklusif, tata letak standar penerbitan, dan pengurusan ISBN untuk luaran penelitian.",
      Image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
      projects: [
        {
          client: "Dr. Budi Santoso, M.Pd.",
          title: "Buku Ajar Metodologi Riset",
          desc: "Penyuntingan naskah, pembuatan ilustrasi vektor, permohonan HAKI & ISBN, dan pencetakan 500 eksemplar buku berstandar.",
          img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop"
        },
        {
          client: "Kementerian Riset dan Teknologi",
          title: "Monograf Kajian Energi Terbarukan",
          desc: "Kolaborasi penerbitan hasil riset unggulan dengan layout yang mematuhi standar monograf DIKTI, didistribusikan secara digital dan cetak.",
          img: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop"
        }
      ]
    }
  ];

  const ITEMS_PER_PAGE = 8;
  const totalPages = selectedProject ? Math.ceil(selectedProject.projects.length / ITEMS_PER_PAGE) : 0;
  const currentProjects = selectedProject ? selectedProject.projects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE) : [];

  return (
    <div className="w-full">
      {/* SECTION HEADER */}
      <div className="max-w-3xl mx-auto text-center px-4 mb-16">
        <h3 className="text-[#FAB958] font-bold tracking-wider uppercase text-sm mb-3">KARYA KAMI</h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3263] leading-tight mb-6">Bukti Nyata. Dampak Nyata.</h2>
        <p className="text-slate-500 text-lg">
          Lihat bagaimana kami membantu institusi akademik dan peneliti bertransformasi melalui ekosistem publikasi digital yang dirancang dengan presisi.
        </p>
      </div>

      {/* PORTFOLIO CAROUSEL */}
      <div ref={carouselRef} className="max-w-7xl mx-auto px-4 overflow-hidden pb-12 cursor-grab active:cursor-grabbing">
        <motion.div 
          className="flex gap-6 w-max"
          drag="x"
          dragConstraints={carouselRef}
          whileTap={{ cursor: "grabbing" }}
        >
          {portfolioItems.map((item, index) => {
            const IconComponent = item.Icon;
            return (
              <motion.div 
                key={index} 
                onClick={() => handleSelectProject(item)} 
                className="group bg-white border border-slate-100 rounded-3xl p-8 hover:border-[#FAB958]/30 transition-all duration-300 flex flex-col items-center text-center cursor-pointer min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] shrink-0 hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#FAB958]/10 transition-transform duration-300">
                  <IconComponent className="text-[#1A3263] group-hover:text-[#FAB958] w-8 h-8 transition-colors duration-300" />
                </div>
                <span className="inline-block px-4 py-1.5 bg-[#E8E2DB]/60 text-[#1A3263] text-xs font-bold rounded-full mb-4">
                  {item.Category}
                </span>
                <h3 className="text-xl font-extrabold text-[#1A3263] mb-2 leading-tight">
                  {item.Title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-3">
                  {item.Desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* CATEGORY FOLDER MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-[#1A3263]/80 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl max-h-[85vh] flex flex-col bg-slate-50 overflow-hidden rounded-[2.5rem] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header (Sticky) */}
              <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm p-6 md:p-8 flex items-start justify-between shrink-0">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#FAB958]/20 text-[#FAB958] text-sm font-bold uppercase tracking-wider rounded-md mb-2">
                    {selectedProject.Category}
                  </span>
                  <h3 className="text-3xl font-extrabold text-[#1A3263] leading-tight">
                    Daftar Proyek Selesai
                  </h3>
                </div>
                <button 
                  className="p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-500 hover:text-slate-800 transition-colors shrink-0 ml-4"
                  onClick={handleCloseModal}
                >
                  <X className="w-6 h-6"/>
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="overflow-y-auto p-6 md:p-8 flex-grow [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full scrollbar-thin scrollbar-thumb-slate-300">
                <div className="min-h-[50vh] flex flex-col justify-between">
                  {/* Inner Projects Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentProjects.map((proj: any, idx: number) => (
                      <div key={idx} className="group bg-white rounded-3xl p-4 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 w-full max-w-[280px] flex flex-col">
                        <div className="w-full aspect-square rounded-2xl overflow-hidden relative">
                          <img src={proj.img} alt={proj.title} className="group-hover:scale-105 transition-transform duration-700 object-cover w-full h-full" />
                        </div>
                        <div className="pt-4 pb-2 px-1 flex flex-col flex-grow">
                          <span className="inline-block px-2 py-1 bg-[#FAB958]/10 text-[#FAB958] text-[10px] font-bold uppercase tracking-wider rounded-md mb-2 break-words leading-tight">
                            {proj.client}
                          </span>
                          <h4 className="text-base font-bold text-[#1A3263] mt-2 mb-1 leading-tight">{proj.title}</h4>
                          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{proj.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-10 pt-6 border-t border-slate-200/60 shrink-0">
                      <button 
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${currentPage === 1 ? 'bg-slate-100 text-slate-400 opacity-50 cursor-not-allowed' : 'bg-[#1A3263] hover:bg-[#1A3263]/90 text-white'}`}
                      >
                        Sebelumnya
                      </button>
                      <span className="text-sm font-bold text-slate-600">
                        Halaman {currentPage} dari {totalPages}
                      </span>
                      <button 
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${currentPage === totalPages ? 'bg-slate-100 text-slate-400 opacity-50 cursor-not-allowed' : 'bg-[#1A3263] hover:bg-[#1A3263]/90 text-white'}`}
                      >
                        Selanjutnya
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
