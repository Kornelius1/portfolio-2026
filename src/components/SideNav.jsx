import { useEffect, useState } from "react";
import { FiHome, FiUser, FiFolder, FiBriefcase, FiCpu } from "react-icons/fi";

const items = [
  { id: "home", label: "Home", Icon: FiHome },
  { id: "about", label: "About", Icon: FiUser },
  { id: "projects", label: "Projects", Icon: FiFolder },
  { id: "experience", label: "Experience", Icon: FiBriefcase },
  { id: "skills", label: "Skills", Icon: FiCpu },
];

export default function SideNav() {
  const [active, setActive] = useState(items[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Navigasi section"
      className="side-nav fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-1/2 z-[210] -translate-x-1/2 md:bottom-auto md:left-4 md:top-1/2 md:translate-x-0 md:-translate-y-1/2"
    >
      <ul className="flex flex-row gap-1 rounded-full bg-white/10 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150 md:flex-col md:p-2">
        {items.map((item) => {
          const { id, label } = item;
          const Icon = item.Icon;
          const isActive = active === id;
          return (
            <li key={id} className="group relative">
              <button
                onClick={() => goTo(id)}
                aria-label={label}
                aria-current={isActive ? "true" : undefined}
                className={`flex h-11 w-11 items-center justify-center rounded-full text-xl transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 md:h-10 md:w-10 ${
                  isActive
                    ? "bg-white/20 text-cyan-300"
                    : "text-white/70 hover:bg-white/15 hover:text-white"
                }`}
              >
                <Icon />
              </button>
              <span className="pointer-events-none absolute left-full top-1/2 ml-3 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-white/10 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg backdrop-blur-xl transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 md:block">
                {label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}