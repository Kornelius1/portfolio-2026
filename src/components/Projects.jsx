import { useState } from "react";
import { SiGithub } from "react-icons/si";
import {
  FiExternalLink,
  FiX,
  FiCopy,
  FiSearch,
  FiGitBranch,
  FiSettings,
  FiUser,
  FiChevronDown,
  FiChevronRight,
  FiAlertCircle,
  FiAlertTriangle,
} from "react-icons/fi";
import projectsData from "../data/projects.json";

const slug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const fileName = (p) => `${slug(p.title)}.js`;

// Warna sintaks mengikuti tema Dark+ (default VS Code)
const C = {
  kw: "text-[#569cd6]",
  key: "text-[#9cdcfe]",
  str: "text-[#ce9178]",
  punc: "text-[#d4d4d4]",
  link: "text-[#ce9178] underline decoration-[#ce9178]/40 underline-offset-2 hover:decoration-[#ce9178]",
};

function JsIcon() {
  return (
    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[2px] bg-[#cbcb41] font-mono text-[9px] font-bold leading-none text-[#1e1e1e]">
      JS
    </span>
  );
}

function Link({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={C.link}>
      {children}
    </a>
  );
}

function buildLines(p) {
  const lines = [
    <>
      <span className={C.kw}>const</span>{" "}
      <span className={C.key}>project</span> <span className={C.punc}>= {"{"}</span>
    </>,
    <>
      {"  "}
      <span className={C.key}>title</span>
      <span className={C.punc}>:</span> <span className={C.str}>"{p.title}"</span>
      <span className={C.punc}>,</span>
    </>,
    <>
      {"  "}
      <span className={C.key}>description</span>
      <span className={C.punc}>:</span>{" "}
      <span className={C.str}>"{p.description}"</span>
      <span className={C.punc}>,</span>
    </>,
    <>
      {"  "}
      <span className={C.key}>stack</span>
      <span className={C.punc}>: [</span>
    </>,
    ...p.techStack.map((t) => (
      <>
        {"    "}
        <span className={C.str}>"{t}"</span>
        <span className={C.punc}>,</span>
      </>
    )),
    <>
      {"  "}
      <span className={C.punc}>],</span>
    </>,
  ];

  if (p.githubLink && p.githubLink !== "#") {
    lines.push(
      <>
        {"  "}
        <span className={C.key}>source</span>
        <span className={C.punc}>:</span> <span className={C.str}>"</span>
        <Link href={p.githubLink}>{p.githubLink}</Link>
        <span className={C.str}>"</span>
        <span className={C.punc}>,</span>
      </>,
    );
  }

  if (p.liveLink && p.liveLink !== "#") {
    lines.push(
      <>
        {"  "}
        <span className={C.key}>live</span>
        <span className={C.punc}>:</span> <span className={C.str}>"</span>
        <Link href={p.liveLink}>{p.liveLink}</Link>
        <span className={C.str}>"</span>
        <span className={C.punc}>,</span>
      </>,
    );
  }

  lines.push(<span className={C.punc}>{"};"}</span>);
  return lines;
}

const focusRing =
  "focus-visible:outline focus-visible:outline-1 focus-visible:-outline-offset-1 focus-visible:outline-[#007fd4]";

export default function Projects() {
  const [openTabs, setOpenTabs] = useState([0]);
  const [active, setActive] = useState(0);
  const [folderOpen, setFolderOpen] = useState(true);

  const openFile = (i) => {
    setOpenTabs((tabs) => (tabs.includes(i) ? tabs : [...tabs, i]));
    setActive(i);
  };

  const closeTab = (i) => {
    const next = openTabs.filter((t) => t !== i);
    setOpenTabs(next);
    if (active === i) setActive(next.length ? next[next.length - 1] : null);
  };

  const project = active !== null ? projectsData[active] : null;
  const lines = project ? buildLines(project) : [];

  return (
    <section className="w-full bg-[#12121a] px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Featured Projects
        </h2>

        <div className="overflow-hidden rounded-lg border border-[#2b2b2b] bg-[#1e1e1e] text-[#cccccc] shadow-2xl">
          {/* Title bar */}
          <div className="relative flex h-9 items-center bg-[#3c3c3c] px-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="ml-5 hidden gap-4 text-[#cccccc]/80 md:flex">
              <span>File</span>
              <span>Edit</span>
              <span>Selection</span>
              <span>View</span>
              <span>Go</span>
              <span>Run</span>
            </div>
            <span className="pointer-events-none absolute inset-x-0 text-center text-[#cccccc]/70">
              {project ? `${fileName(project)} - projects` : "projects"} - Visual
              Studio Code
            </span>
          </div>

          <div className="flex flex-col md:h-[560px] md:flex-row">
            {/* Activity bar */}
            <div className="hidden w-12 shrink-0 flex-col items-center justify-between bg-[#333333] py-2 md:flex">
              <div className="flex flex-col items-center gap-1 text-[#858585]">
                <span className="relative flex h-12 w-12 items-center justify-center text-white">
                  <span className="absolute left-0 top-0 h-full w-[2px] bg-white" />
                  <FiCopy size={22} />
                </span>
                <span className="flex h-12 w-12 items-center justify-center">
                  <FiSearch size={22} />
                </span>
                <span className="flex h-12 w-12 items-center justify-center">
                  <FiGitBranch size={22} />
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 text-[#858585]">
                <span className="flex h-12 w-12 items-center justify-center">
                  <FiUser size={22} />
                </span>
                <span className="flex h-12 w-12 items-center justify-center">
                  <FiSettings size={22} />
                </span>
              </div>
            </div>

            {/* Explorer */}
            <aside className="shrink-0 bg-[#252526] md:w-60">
              <p className="px-5 py-2.5 text-[11px] font-normal uppercase tracking-wide text-[#bbbbbb]">
                Explorer
              </p>
              <button
                onClick={() => setFolderOpen((o) => !o)}
                className={`flex w-full items-center gap-1 bg-[#37373d]/0 px-1 py-1 text-[11px] font-bold uppercase text-[#cccccc] hover:bg-[#2a2d2e] ${focusRing}`}
              >
                {folderOpen ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
                projects
              </button>
              {folderOpen && (
                <ul className="flex overflow-x-auto md:block md:overflow-visible">
                  {projectsData.map((p, i) => (
                    <li key={p.title} className="shrink-0 md:shrink">
                      <button
                        onClick={() => openFile(i)}
                        className={`flex w-full items-center gap-2 py-[3px] pl-7 pr-3 text-left text-[13px] ${focusRing} ${
                          active === i
                            ? "bg-[#37373d] text-white"
                            : "hover:bg-[#2a2d2e]"
                        }`}
                      >
                        <JsIcon />
                        <span className="truncate">{fileName(p)}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </aside>

            {/* Editor */}
            <div className="flex min-w-0 flex-1 flex-col">
              {/* Tabs */}
              <div className="flex overflow-x-auto bg-[#252526]">
                {openTabs.map((i) => (
                  <div
                    key={projectsData[i].title}
                    className={`group flex shrink-0 items-center gap-2 border-r border-[#252526] pl-3 pr-1.5 text-[13px] ${
                      active === i
                        ? "bg-[#1e1e1e] text-white"
                        : "bg-[#2d2d2d] text-[#969696] hover:text-white"
                    }`}
                  >
                    <JsIcon />
                    <button
                      onClick={() => setActive(i)}
                      className={`py-2 ${focusRing}`}
                    >
                      {fileName(projectsData[i])}
                    </button>
                    <button
                      onClick={() => closeTab(i)}
                      aria-label={`Tutup ${fileName(projectsData[i])}`}
                      className={`rounded p-0.5 hover:bg-white/10 ${focusRing} ${
                        active === i ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      <FiX size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Breadcrumb */}
              {project && (
                <div className="flex items-center gap-1 px-4 py-1 text-[13px] text-[#a9a9a9]">
                  <span>projects</span>
                  <FiChevronRight size={12} />
                  <JsIcon />
                  <span>{fileName(project)}</span>
                </div>
              )}

              {/* Content */}
              <div className="flex-1 overflow-auto">
                {project ? (
                  <div className="grid lg:grid-cols-5">
                    <pre className="overflow-x-auto py-2 font-mono text-[13px] leading-[22px] lg:col-span-3">
                      {lines.map((line, n) => (
                        <div key={n} className="flex whitespace-pre-wrap">
                          <span
                            className={`w-12 shrink-0 select-none pr-6 text-right ${
                              n === 0 ? "text-[#c6c6c6]" : "text-[#858585]"
                            }`}
                          >
                            {n + 1}
                          </span>
                          <code className="min-w-0 flex-1 break-words pr-4 text-[#d4d4d4]">
                            {line}
                          </code>
                        </div>
                      ))}
                    </pre>

                    {/* Preview */}
                    <div className="border-t border-[#2b2b2b] p-4 lg:col-span-2 lg:border-l lg:border-t-0">
                      <p className="mb-2 text-xs text-[#858585]">Preview</p>
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full rounded border border-[#2b2b2b] object-cover"
                      />
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.githubLink && project.githubLink !== "#" && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-sm bg-[#0e639c] px-3 py-1.5 text-[13px] text-white transition-colors hover:bg-[#1177bb]"
                          >
                            <SiGithub /> Source
                          </a>
                        )}
                        {project.liveLink && project.liveLink !== "#" && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-sm bg-[#3a3d41] px-3 py-1.5 text-[13px] text-white transition-colors hover:bg-[#45494e]"
                          >
                            Live View <FiExternalLink />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full min-h-48 items-center justify-center p-8 text-center text-sm text-[#858585]">
                    Pilih file di Explorer untuk membuka project.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between bg-[#007acc] px-3 py-0.5 text-xs text-white">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <FiGitBranch size={13} /> main
              </span>
              <span className="flex items-center gap-1">
                <FiAlertCircle size={13} /> 0
              </span>
              <span className="flex items-center gap-1">
                <FiAlertTriangle size={13} /> 0
              </span>
            </div>
            <div className="flex items-center gap-4">
              {project && <span>Ln {lines.length}, Col 1</span>}
              <span className="hidden sm:inline">UTF-8</span>
              <span>{project ? "JavaScript" : `${projectsData.length} project`}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}