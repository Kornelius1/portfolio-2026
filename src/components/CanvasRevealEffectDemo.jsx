"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

// Impor logo-logo dari react-icons/si (Simple Icons)
import {
  SiPostgresql,
  SiLaravel,
  SiReact,
  SiVuedotjs,
  SiFigma,
  SiCanva,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript
} from "react-icons/si";

import { DiPhotoshop} from "react-icons/di"

// 1. Array Data Skillset - Tambahkan skill barumu di sini dengan mudah!
const skillsData = [
  {
    category: "Frontend Development",
    items: [
      { title: "React", icon: <SiReact className="text-5xl text-[#61DAFB]" />, color: [[97, 218, 251]] },
      { title: "Vue", icon: <SiVuedotjs className="text-5xl text-[#4FC08D]" />, color: [[79, 192, 141]] },
      { title: "Tailwind", icon: <SiTailwindcss className="text-5xl text-[#06B6D4]" />, color: [[6, 182, 212]] },
      { title: "JavaScript", icon: <SiJavascript className="text-5xl text-[#F7DF1E]" />, color: [[247, 223, 30]] },
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { title: "Laravel", icon: <SiLaravel className="text-5xl text-[#FF2D20]" />, color: [[255, 45, 32]] },
      { title: "PostgreSQL", icon: <SiPostgresql className="text-5xl text-[#4169E1]" />, color: [[65, 105, 225]] },
      { title: "Node.js", icon: <SiNodedotjs className="text-5xl text-[#339933]" />, color: [[51, 153, 51]] },
    ]
  },
  {
    category: "Design & Tools",
    items: [
      { title: "Figma", icon: <SiFigma className="text-5xl text-[#F24E1E]" />, color: [[242, 78, 30], [162, 89, 255]] },
      { title: "Photoshop", icon: <DiPhotoshop className="text-5xl text-[#31A8FF]" />, color: [[49, 168, 255]] },
      { title: "Canva", icon: <SiCanva className="text-5xl text-[#00C4CC]" />, color: [[0, 196, 204]] },
    ]
  }
];

export default function CanvasRevealEffectDemo() {
  return (
    <div className="py-20 bg-[#050505] w-full min-h-screen px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Tech Stack & Skills</h2>
        
        {/* Mapping Kategori */}
        {skillsData.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6 border-b border-white/10 pb-3">
              {section.category}
            </h3>
            {/* Grid Kartu yang sudah dikecilkan */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {section.items.map((skill, skillIdx) => (
                <Card key={skillIdx} title={skill.title} icon={skill.icon}>
                  <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-black"
                    colors={skill.color}
                    dotSize={2}
                  />
                  {/* Efek gradasi hitam agar teks tetap terbaca */}
                  <div className="absolute inset-0 bg-black/50" />
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. Komponen Card yang sudah diubah ukurannya
const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // Tinggi diubah dari h-[30rem] menjadi h-40, dengan border lebih tipis
      className="border border-white/[0.1] group/canvas-card flex flex-col items-center justify-center w-full mx-auto p-4 relative h-40 rounded-xl overflow-hidden cursor-pointer hover:border-white/[0.3] transition-colors"
    >
      <Icon className="absolute h-4 w-4 -top-2 -left-2 text-white/30" />
      <Icon className="absolute h-4 w-4 -bottom-2 -left-2 text-white/30" />
      <Icon className="absolute h-4 w-4 -top-2 -right-2 text-white/30" />
      <Icon className="absolute h-4 w-4 -bottom-2 -right-2 text-white/30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="text-center group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:opacity-0 transition duration-200">
          {icon}
        </div>
        <h2 className="text-white text-lg opacity-0 group-hover/canvas-card:opacity-100 absolute mt-4 font-bold transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};