//https://ui.aceternity.com/components/sticky-scroll-reveal

import React from "react";
// import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { StickyScroll } from "./ui/StickyScrollReveal";

// 1. Ini adalah komponen kartu tiruan persis seperti gambarmu
const EducationCard = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0f172a] p-6">
      <div className="flex w-full max-w-sm items-center gap-4 rounded-xl border border-slate-700/50 bg-[#151e2e] p-5 shadow-lg">
        {/* Lingkaran Ikon Topi Toga */}
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-slate-600 bg-slate-800/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.599 9.084a1 1 0 0 0-.019 1.838l8.57 3.904a2 2 0 0 0 1.66 0z" />
            <path d="M22 10v6" />
            <path d="M6 12.5V16a6 6 0 0 0 12 0v-3.5" />
          </svg>
        </div>

        
        <div className="flex flex-col">
          <h3 className="text-lg font-bold leading-tight text-white">
            Universitas Riau
          </h3>
          <p className="mt-1 text-sm text-slate-300">
            Bachelor of Computer Science GPA-3.7
          </p>
          <p className="mt-1 text-xs text-blue-300">
            Aug 2022 - Dec 2025
          </p>
        </div>
      </div>
    </div>
  );
};

// 2. Data konten untuk Sticky Scroll
const content = [
  {
    title: "About Me",
    description:
      "Saya adalah pengembang web yang bersemangat membangun antarmuka interaktif dan fungsional. Saat ini saya berfokus mengembangkan model algoritma prediksi kualitas udara di Pekanbaru. Sebelumnya saya juga telah sukses menyelesaikan proyek Homey. Saya selalu antusias mengubah ide kompleks menjadi solusi digital yang rapi dan elegan.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-cyan-500 to-emerald-500 text-3xl font-bold text-white shadow-2xl">
        Web Developer
      </div>
    ),
  },
  {
    title: "Education",
    description:
      "Pendidikan saya sangat berfokus pada penerapan teknologi untuk memecahkan masalah dunia nyata. Saat ini saya sedang tahap menyusun skripsi mengenai prediksi kualitas udara di Pekanbaru. Penelitian ini menuntut saya mendalami pengolahan data dan algoritma tingkat lanjut guna memberikan dampak komputasi yang positif bagi lingkungan.",
    content: <EducationCard />, // Memanggil kartu pendidikan di sini
  },
  {
    title: "Beyond the Code",
    description:
      "Di luar rutinitas menulis kode web standar, saya memiliki ketertarikan besar pada eksplorasi teknologi komputasi masa depan. Saya rutin mempelajari implementasi perbandingan algoritma dan mulai mengeksplorasi potensi quantum machine learning untuk meningkatkan akurasi sistem prediksi pada penelitian yang saya kerjakan.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-yellow-500 text-3xl font-bold text-white shadow-2xl">
        Quantum ML
      </div>
    ),
  },
];

// 3. Ekspor bawaan (default) agar tidak ada layar putih lagi
export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full bg-[#050505] py-4">
      <StickyScroll content={content} />
    </div>
  );
}