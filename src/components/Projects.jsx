//AI

import React from "react";
// Kita memanfaatkan pustaka ikon yang sudah diinstal sebelumnya
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const projectsData = [
  {
    title: "Phourto Web System",
    description: "Sistem reservasi ruangan studio foto pintar. Dilengkapi fitur sinkronisasi jadwal otomatis melalui integrasi Google Calendar dan pengingat pelanggan via notifikasi WhatsApp.",
    techStack: ["Laravel 12.25.0", "React", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    githubLink: "https://github.com/username/phourto",
    liveLink: "https://phourto.com"
  },
  {
    title: "Homey Digital Platform",
    description: "Platform antarmuka digital yang dirancang untuk memberikan solusi fungsional dan elegan bagi para pengguna. Proyek ini diselesaikan dengan fokus pada pengalaman interaksi yang rapi.",
    techStack: ["Vue", "Tailwind CSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    githubLink: "https://github.com/Kornelius1/smart_reservation_system",
    liveLink: "#"
  },
  {
    title: "Air Quality Prediction Model",
    description: "Penelitian terapan komparasi algoritma untuk memprediksi kualitas udara di wilayah Pekanbaru. Eksplorasi mendalam menggunakan pendekatan Quantum Machine Learning.",
    techStack: ["Python", "Quantum ML", "Pandas"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    githubLink: "https://github.com/username/air-quality",
    liveLink: "#"
  }
];

export default function Projects() {
  return (
    <div className="py-20 bg-[#050505] w-full px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#0f172a] rounded-xl overflow-hidden border border-slate-800 shadow-xl hover:shadow-cyan-500/10 hover:border-slate-600 transition-all duration-300 flex flex-col"
            >
              {/* Bagian Gambar */}
              <div className="relative h-48 overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Bagian Konten */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Bagian Teknologi */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bagian Tombol Aksi */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-800/50">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-white bg-[#1e293b] hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    <SiGithub className="text-lg" />
                    Source
                  </a>
                  
                  {/* {project.liveLink !== "#" && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-black bg-white hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors ml-auto"
                    >
                      Live Demo
                      <FiExternalLink className="text-lg" />
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}