//https://ui.aceternity.com/components/expandable-card

"use client";
import React, { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const experiences = [
  {
    title: "Magang Divisi Teknik & Pengolahan",
    company: "PT. Perkebunan Nusantara IV Persero",
    date: "Jan 2025 - Feb 2025",
    description: "Mengerjakan rekapitulasi data harian dan tugas teknis integrasi sistem pemantauan IoT.",
    content: "Menjalani masa magang di bawah bimbingan mentor pada Divisi Teknik dan Pengolahan Kantor Regional PT. Perkebunan Nusantara IV Persero, Riau. Tanggung jawab harian mencakup rekapitulasi data operasional secara rutin. Selain itu, saya juga menyelesaikan tugas teknis khusus yang meliputi konfigurasi perangkat pengukur daya, menghubungkannya ke panel Haiwell SCADA, dan menyiarkan data menggunakan protokol MQTT. Aliran data tersebut kemudian ditangkap oleh komputer lokal, disimpan ke dalam basis data, dan divisualisasikan ke dalam bentuk dasbor situs web.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Staf Dirjen Agraria",
    company: "BEM Kementerian Agraria dan Lingkungan Hidup (2025)",
    date: "Feb 2025 - Des 2025",
    description: "Meningkatkan kesadaran mahasiswa terhadap isu agraria dan lingkungan hidup.",
    content: "The Ministry of Agrarian Affairs and Environment Kemenagraria-LH is the ministry responsible for increasing students' awareness, knowledge, and understanding of their role in addressing agrarian and environmental issues, both on campus, regionally, and nationally, through relevant studies and concrete actions. In carrying out its duties and responsibilities, the Ministry of Agrarian Affairs and Environment consistently coordinates with the Student President and Vice President.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop" // Gambar tema lingkungan alam
  },
  // {
  //   title: "Full Stack Developer",
  //   company: "Phourto Project",
  //   date: "Dec 2025 - Present",
  //   description: "Membangun sistem reservasi ruangan studio foto interaktif.",
  //   content: "Mengembangkan Phourto yakni sebuah platform manajemen dan reservasi studio foto. Sistem ini dilengkapi dengan fitur integrasi Google Calendar untuk sinkronisasi jadwal secara otomatis dan notifikasi WhatsApp untuk mengingatkan pelanggan. Infrastruktur di balik layarnya dibangun menggunakan kerangka kerja Laravel 12.25.0 untuk performa maksimal.",
  //   image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop"
  // },
  {
    title: "Data & AI Researcher",
    company: "Universitas Riau",
    date: "Sep 2025 - Feb 2026",
    description: "Penelitian prediksi kualitas udara wilayah Pekanbaru.",
    content: "Melakukan penelitian mendalam mengenai prediksi kualitas udara di wilayah Pekanbaru. Proyek ini membandingkan berbagai algoritma tingkat lanjut dan mengeksplorasi potensi Quantum Machine Learning guna meningkatkan akurasi sistem prediksi demi memberikan dampak komputasional yang positif bagi lingkungan.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Web Developer",
    company: "Homey Project",
    date: "2025",
    description: "Menyelesaikan pengembangan platform digital Homey.",
    content: "Terlibat penuh dalam merancang dan mengembangkan proyek Homey hingga selesai pada bulan November 2025. Berfokus pada pengubahan ide kompleks menjadi solusi antarmuka digital yang rapi, elegan, dan sangat fungsional bagi para pengguna.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function ExpandableCards() {
  const [active, setActive] = useState(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <div className="py-20 bg-[#050505] w-full px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Experience</h2>
        
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm h-full w-full z-10"
              onClick={() => setActive(null)}
            />
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100] px-4">
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                className="w-full max-w-2xl bg-[#151e2e] rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 flex flex-col"
              >
                <div className="relative">
                  <motion.img
                    layoutId={`image-${active.title}-${id}`}
                    src={active.image}
                    alt={active.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setActive(null)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-6 flex-1">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-2xl text-white"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`company-${active.company}-${id}`}
                        className="text-blue-400 text-lg"
                      >
                        {active.company}
                      </motion.p>
                    </div>
                    {/* Tombol Show di dalam kartu yang membesar */}
                    <motion.button
                      layoutId={`button-${active.title}-${id}`}
                      className="px-6 py-2 text-sm rounded-full font-bold bg-white text-black hover:bg-slate-200 w-full sm:w-auto mt-4 sm:mt-0"
                    >
                      Show
                    </motion.button>
                  </div>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-slate-300 text-base leading-relaxed mt-4"
                  >
                    {active.content}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        <ul className="grid grid-cols-1 gap-6">
          {experiences.map((card) => (
            <motion.li
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              className="bg-[#0f172a] p-4 rounded-xl flex flex-col sm:flex-row justify-between items-center hover:bg-[#1e293b] transition-colors cursor-pointer border border-slate-800 shadow-lg"
            >
              <div className="flex gap-4 flex-col sm:flex-row items-center sm:items-start text-center sm:text-left w-full">
                <motion.img
                  layoutId={`image-${card.title}-${id}`}
                  src={card.image}
                  alt={card.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex flex-col justify-center">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-bold text-white text-lg"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`company-${card.company}-${id}`}
                    className="text-slate-400 text-sm mt-1"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              
              {/* Tombol Show di sisi kanan kartu list */}
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-5 py-2 text-sm rounded-full font-bold bg-white text-black hover:bg-slate-200 mt-4 sm:mt-0 flex-shrink-0"
              >
                Show
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}