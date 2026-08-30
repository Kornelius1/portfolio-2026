import React from "react";
import { StickyScroll } from "./ui/StickyScrollReveal";

const EducationCard = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0f172a] p-6">
      <div className="flex w-full max-w-sm items-center gap-4 rounded-xl border border-slate-700/50 bg-[#151e2e] p-5 shadow-lg">
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
          <h3 className="text-xl font-bold leading-tight text-white">
            Universitas Riau
          </h3>
          <p className="mt-1 text-base text-slate-300">
            Bachelor of Information Systems • GPA 3.73
          </p>
          <p className="mt-1 text-xs text-blue-300">
            Aug 2022 - Dec 2025
          </p>
        </div>
      </div>
    </div>
  );
};

const content = [
  {
    title: "About Me",
    description:
      "Information Systems graduate from Universitas Riau passionate about backend development and software quality assurance. Experienced in building web services, designing REST APIs, and automating test pipelines using PHP Laravel, Java Spring Boot, Node.js, and Docker.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-cyan-500 to-emerald-500 text-2xl font-bold text-white shadow-2xl text-center p-4">
        Backend & QA
      </div>
    ),
  },
  {
    title: "Education",
    description:
      "Focused on practical software engineering and applied AI research. My undergraduate thesis evaluated machine learning ensemble models for air quality forecasting in Pekanbaru, integrating computational methods to solve environmental challenges.",
    content: <EducationCard />,
  },
  {
    title: "Beyond the Code",
    description:
      "Dedicated to clean architecture, automated testing, and open-source contributions. I continuously explore test frameworks, containerized environments, and data pipelines to deliver reliable digital solutions.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-yellow-500 text-2xl font-bold text-white shadow-2xl text-center p-4">
        Testing & Research
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full bg-[#050505] py-4">
      <StickyScroll content={content} />
    </div>
  );
}