import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import skillsData from "../data/skills.json";
import { GrOracle } from "react-icons/gr";
import { DiPhotoshop } from "react-icons/di";
import {
  SiPostgresql,
  SiLaravel,
  SiReact,
  SiVuedotjs,
  SiFigma,
  SiCanva,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
  SiSpringboot,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPrisma,
  SiPostman,
  SiPhp,
  SiJunit5,
  SiDocker,
  SiGit,
  SiGithub,
  SiTypescript,
  SiFastapi,
  SiSelenium,
  SiJira,
  SiPytest,
  SiSwagger,
  SiTrello,
} from "react-icons/si";

const iconMap = {
  SiPostgresql,
  SiLaravel,
  SiReact,
  SiVuedotjs,
  SiFigma,
  SiCanva,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
  SiSpringboot,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPrisma,
  SiPostman,
  SiPhp,
  SiJunit5,
  SiDocker,
  SiGit,
  SiGithub,
  SiTypescript,
  SiFastapi,
  SiSelenium,
  SiJira,
  SiPytest,
  SiSwagger,
  DiPhotoshop,
  SiTrello,
  GrOracle,
};

function CornerMark({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
}

function SkillCard({ skill }) {
  const [hovered, setHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  const SkillIcon = iconMap[skill.icon];
  const rgb = skill.color?.[0];
  const iconColor = rgb ? `rgb(${rgb.join(", ")})` : "#94a3b8";

  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex h-24 list-none items-center justify-center overflow-hidden rounded-lg border border-white/10 p-2 transition-colors hover:border-white/30"
    >
      <CornerMark className="absolute -left-1.5 -top-1.5 h-3 w-3 text-white/30" />
      <CornerMark className="absolute -bottom-1.5 -left-1.5 h-3 w-3 text-white/30" />
      <CornerMark className="absolute -right-1.5 -top-1.5 h-3 w-3 text-white/30" />
      <CornerMark className="absolute -bottom-1.5 -right-1.5 h-3 w-3 text-white/30" />

      <AnimatePresence>
        {hovered && !reduceMotion && skill.color && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={skill.color}
              dotSize={2}
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center gap-2">
        {SkillIcon && (
          <SkillIcon
            className="text-3xl"
            style={{ color: iconColor }}
            aria-hidden="true"
          />
        )}
        <span className="text-center text-xs font-medium text-slate-200">
          {skill.title}
        </span>
      </div>
    </li>
  );
}

export default function Skills() {
  return (
    <div className="w-full px-6 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Tech Stack &amp; Skills
          </h2>
          <p className="mt-4 text-slate-400">
            Tools and technologies I use to build and test software.
          </p>
        </header>

        {skillsData.map((section) => (
          <div key={section.category} className="mb-10">
            <h3 className="mb-6 border-b border-white/10 pb-3 text-xl font-semibold text-white">
              {section.category}
            </h3>
            <ul className="grid grid-cols-3 gap-3 p-0 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {section.items.map((skill) => (
                <SkillCard key={skill.title} skill={skill} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
