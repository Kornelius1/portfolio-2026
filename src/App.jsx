import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import QAPage from "./components/QAPage";
import "./index.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const StickyScrollRevealDemo = lazy(
  () => import("./components/StickyScrollRevealDemo"),
);
const CanvasRevealEffectDemo = lazy(
  () => import("./components/CanvasRevealEffectDemo"),
);
const AnimatedExperiences = lazy(() =>
  import("./components/AnimatedExperiences").then((m) => ({
    default: m.AnimatedExperiences,
  })),
);
const Projects = lazy(() => import("./components/Projects"));

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function SectionFallback() {
  return <div style={{ minHeight: "100vh" }} />;
}

function HomePage() {
  return (
    <main>
      <SideNav />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <Suspense fallback={<SectionFallback />}>
          <StickyScrollRevealDemo />
        </Suspense>
      </section>

      <section id="projects">
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
      </section>

      <section id="experience">
        <Suspense fallback={<SectionFallback />}>
          <AnimatedExperiences />
        </Suspense>
      </section>

      <section id="skills">
        <Suspense fallback={<SectionFallback />}>
          <CanvasRevealEffectDemo />
        </Suspense>
      </section>
    </main>
  );
}

function App() {
  return (
    <div
      style={{
        backgroundColor: "#12121a",
        minHeight: "100vh",
        color: "#2d3748",
      }}
    >
      <Navbar />
      <ScrollManager />
      <Suspense fallback={<SectionFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/qa" element={<QAPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
