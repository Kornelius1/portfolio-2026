import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    title: "Technical & Processing Division Intern",
    company: "PT Perkebunan Nusantara IV Persero",
    date: "Jan 2025 - Feb 2025",
    description: "Handled daily data recapitulation and technical IoT system integration.",
    content: "Managed daily operational data recapitulation at PT Perkebunan Nusantara IV. Configured power meters, integrated them with Haiwell SCADA panels, and broadcasted real-time data via MQTT to a local database and web dashboard.",
    image: "/project-images/Experience2.jpeg"
  },
  {
    title: "Agrarian Affairs Staff Member",
    company: "BEM Ministry of Agrarian & Environmental Affairs",
    date: "Feb 2025 - Dec 2025",
    description: "Raised student awareness on agrarian and environmental issues through studies and action.",
    content: "Coordinated initiatives to increase student awareness of agrarian and environmental challenges through research studies, policy discussions, and direct community action.",
    image: "/project-images/Experience_1.jpg"
  },
  {
    title: "Data & AI Researcher",
    company: "Universitas Riau",
    date: "Sep 2025 - Feb 2026",
    description: "Researched air quality forecasting models for the Pekanbaru region.",
    content: "Researched air quality forecasting in Pekanbaru by evaluating advanced machine learning ensemble models and exploring Quantum Machine Learning to enhance predictive accuracy.",
    image: "/project-images/Experience3.jpeg"
  },
  {
    title: "Web Developer",
    company: "Homey Project",
    date: "2025",
    description: "Engineered and delivered the Homey digital platform.",
    content: "Engineered and delivered the Homey web platform, translating user requirements into a clean, functional digital experience.",
    image: "/project-images/Experience4.jpeg"
  }
];

export const AnimatedExperiences = () => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % experiences.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const current = experiences[active];

  return (
    <section className="py-20 bg-[#242436] text-white px-6 w-full">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">
          Experience & Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Kontainer Gambar dengan Efek Transisi */}
          <div className="relative h-80 w-full rounded-2xl overflow-hidden border border-[#262636] shadow-2xl bg-[#1f1f2e]">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={current.image}
                alt={current.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Kontainer Teks dan Kontrol Navigasi */}
          <div className="flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#1f1f2e] text-[#38bdf8] border border-[#262636] mb-4">
                  {current.date}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {current.title}
                </h3>
                <p className="text-sm font-medium text-neutral-400 mt-1">
                  {current.company}
                </p>
                <p className="text-neutral-300 mt-6 leading-relaxed text-sm">
                  {current.content}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Tombol Navigasi Kiri Kanan */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-[#1f1f2e] border border-[#262636] hover:bg-[#262636] transition text-white cursor-pointer"
                aria-label="Previous Experience"
              >
                &larr;
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-[#1f1f2e] border border-[#262636] hover:bg-[#262636] transition text-white cursor-pointer"
                aria-label="Next Experience"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};