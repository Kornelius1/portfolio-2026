import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StickyScrollRevealDemo from "./components/StickyScrollRevealDemo";
import CanvasRevealEffectDemo from "./components/CanvasRevealEffectDemo";
import ExpandableCards from "./components/ExpandableCard";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{ backgroundColor: "#000", minHeight: "100vh", color: "white" }}
    >
      <Navbar />
      <main>
        <section id="beranda">
          <Hero />
        </section>

        <section id="about">
          <StickyScrollRevealDemo />
        </section>

        <CanvasRevealEffectDemo />
        <ExpandableCards />

        <section id="projects">
          <Projects />
        </section>
        
        <Footer />
      </main>
    </div>
  );
}

export default App;
