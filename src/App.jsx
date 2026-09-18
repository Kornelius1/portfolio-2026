import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StickyScrollRevealDemo from "./components/StickyScrollRevealDemo";
import CanvasRevealEffectDemo from "./components/CanvasRevealEffectDemo";
import { AnimatedExperiences } from "./components/AnimatedExperiences";
import ExpandableCards from "./components/ExpandableCard";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import QAPage from "./components/QAPage";
import "./index.css";

function HomePage() {
  return (
    <main>
      <section id="beranda">
        <Hero />
      </section>

      <section id="about">
        <StickyScrollRevealDemo />
      </section>

      <CanvasRevealEffectDemo />
      {/* <ExpandableCards /> */}
      <AnimatedExperiences />

      <section id="projects">
        <Projects />
      </section>
    </main>
  );
}

function App() {
  return (
    <div
      style={{ backgroundColor: "#12121a", minHeight: "100vh", color: "#2d3748" }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qa" element={<QAPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;