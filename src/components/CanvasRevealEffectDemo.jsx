"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import skillsData from "../data/skills.json";
import { GrOracle } from "react-icons/gr";
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
import { DiPhotoshop } from "react-icons/di";

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

export default function CanvasRevealEffectDemo() {
  return (
    <div className="py-16 bg-[#12121a] w-full px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Tech Stack & Skills
        </h2>

        {skillsData.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h3 className="text-xl font-semibold text-white mb-5 border-b border-white/10 pb-3">
              {section.category}
            </h3>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {section.items.map((skill, skillIdx) => {
                const SkillIcon = iconMap[skill.icon];
                const iconColor = `rgb(${skill.color[0].join(", ")})`;

                return (
                  <Card
                    key={skillIdx}
                    title={skill.title}
                    icon={
                      <SkillIcon
                        className="text-3xl"
                        style={{ color: iconColor }}
                      />
                    }
                  >
                    <CanvasRevealEffect
                      animationSpeed={3}
                      containerClassName="bg-black"
                      colors={skill.color}
                      dotSize={2}
                    />

                    <div className="absolute inset-0 bg-black/50" />
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.1] group/canvas-card flex flex-col items-center justify-center w-full mx-auto p-2 relative h-24 rounded-lg overflow-hidden cursor-pointer hover:border-white/[0.3] transition-colors"
    >
      <Icon className="absolute h-3 w-3 -top-1.5 -left-1.5 text-white/30" />
      <Icon className="absolute h-3 w-3 -bottom-1.5 -left-1.5 text-white/30" />
      <Icon className="absolute h-3 w-3 -top-1.5 -right-1.5 text-white/30" />
      <Icon className="absolute h-3 w-3 -bottom-1.5 -right-1.5 text-white/30" />

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

      <div className="relative z-20 flex w-full flex-col items-center justify-center">
        <div className="text-center group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:opacity-0 transition duration-200">
          {icon}
        </div>
        <h2 className="absolute inset-x-0 px-1 text-center text-sm font-bold text-white opacity-0 group-hover/canvas-card:opacity-100 transition duration-200">
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