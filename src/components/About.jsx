import { StickyScroll } from "./ui/StickyScrollReveal";

const cardBox =
  "w-full max-w-sm rounded-xl border border-slate-700/50 bg-[#151e2e] p-5 shadow-lg";

const Panel = ({ children }) => (
  <div className="flex h-full w-full items-center justify-center bg-[#0f172a] p-6">
    {children}
  </div>
);

const TagGroup = ({ label, items }) => (
  <div>
    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
      {label}
    </p>
    <ul className="flex list-none flex-wrap gap-2 p-0">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium text-indigo-300"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const AboutCard = () => (
  <Panel>
    <div className={`${cardBox} space-y-5`}>
      <TagGroup
        label="Backend"
        items={["FastAPI", "Laravel", "Spring Boot", "Node.js", "Docker"]}
      />
      <TagGroup
        label="QA & Testing"
        items={["Selenium", "Pytest", "JUnit", "Postman"]}
      />
    </div>
  </Panel>
);

const EducationCard = () => (
  <Panel>
    <div className={`${cardBox} flex items-center gap-4`}>
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
          aria-hidden="true"
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
          Bachelor of Information Systems · GPA 3.73 / 4.00
        </p>
        <p className="mt-1 text-xs text-indigo-300">Aug 2022 – Dec 2025</p>
      </div>
    </div>
  </Panel>
);

const BeyondCard = () => (
  <Panel>
    <div className={`${cardBox} space-y-5`}>
      <TagGroup
        label="Creative"
        items={["Video editing", "Image editing", "Photoshop", "Canva", "Figma"]}
      />
    </div>
  </Panel>
);

const content = [
  {
    title: "About Me",
    description:
      "Information Systems graduate from Universitas Riau, focused on backend development and software quality assurance. I build web services, design REST APIs, and automate test pipelines with FastAPI, Laravel, Spring Boot, Node.js, and Docker.",
    content: <AboutCard />,
  },
  {
    title: "Education",
    description:
      "My studies focused on practical software engineering and applied AI. For my undergraduate thesis, I evaluated machine learning ensemble models for air quality forecasting in Pekanbaru.",
    content: <EducationCard />,
  },
  {
    title: "Beyond the Code",
    description:
      "I also enjoy video and image editing. It's a handy complement to my technical work whenever a project needs visual content.",
    content: <BeyondCard />,
  },
];

export default function About() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}