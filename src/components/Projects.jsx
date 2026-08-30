import React from "react";
import { SiGithub } from "react-icons/si";
import projectsData from "../data/projects.json";
import { FiExternalLink } from "react-icons/fi";

// tempat data project diinisiasikan
export default function Projects() {
  return (
    <div className="py-20 bg-[#050505] w-full px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-[#0f172a] rounded-xl overflow-hidden border border-slate-800 shadow-xl hover:shadow-cyan-500/10 hover:border-slate-600 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

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

                  {project.liveLink !== "#" &&(
                    <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-black bg-white hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors ml-auto"
                    >
                      Live View
                      <FiExternalLink className="text-lg" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}