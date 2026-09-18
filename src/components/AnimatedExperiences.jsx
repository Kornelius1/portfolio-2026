import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";


const experiences = [
  {
    quote:
      "Managed daily operational data recapitulation at PT Perkebunan Nusantara IV. Configured power meters, integrated them with Haiwell SCADA panels, and broadcasted real-time data via MQTT to a local database and web dashboard.",
    name: "Technical & Processing Division Intern",
    designation: "PT Perkebunan Nusantara IV Persero | Jan 2025 - Feb 2025",
    src: "/project-images/Experience2.jpeg",
  },
  {
    quote:
      "Coordinated initiatives to increase student awareness of agrarian and environmental challenges through research studies, policy discussions, and direct community action.",
    name: "Agrarian Affairs Staff Member",
    designation:
      "BEM Ministry of Agrarian & Environmental Affairs | Feb 2025 - Dec 2025",
    src: "/project-images/Experience_1.jpg",
  },
  {
    quote:
      "Researched air quality forecasting in Pekanbaru by evaluating advanced machine learning ensemble models and exploring Quantum Machine Learning to enhance predictive accuracy.",
    name: "Data & AI Researcher",
    designation: "Universitas Riau | Sep 2025 - Feb 2026",
    src: "/project-images/Experience3.jpeg",
  },
  {
    quote:
      "Engineered and delivered the Homey web platform, translating user requirements into a clean, functional digital experience.",
    name: "Web Developer",
    designation: "Homey Project | 2025",
    src: "/project-images/Experience4.jpeg",
  },
];

export const AnimatedExperiences = () => {
  return (
    <section className="py-20 bg-[#242436] text-white w-full">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center tracking-tight">
          Experience & Journey 
        </h2>

        <AnimatedTestimonials testimonials={experiences} />
      </div>
    </section>
  );
};