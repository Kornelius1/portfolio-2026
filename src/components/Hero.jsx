//https://uiverse.io/sahilxkhadka/rotten-grasshopper-44

import "../css/Hero.css";
import Button from "./Button";
import Lanyard from "./Lanyard/Lanyard";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero-container">
      {/* Kolom Kiri: Teks Portofolio */}
      <div className="hero-text">
        <h1>
          <span className="desktop-title">
            Hello World!!, I'M
            <br />
            Kornelius Jonathan
          </span>

          <span className="mobile-title">
            Hello World!!
            <br />
            I'M
            <br />
            Kornelius
            <br />
            Jonathan
          </span>
        </h1>
        <p>You can download my CV here.</p>

        <div className="hero-actions">
          <div className="cv-button-wrapper">
            {/* Arrow Desktop */}
            <svg
              className="cv-arrow cv-arrow-desktop"
              viewBox="0 0 300 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="
          M270 20
          C210 5, 155 15, 135 55
          C115 95, 105 135, 65 155
        "
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="7 7"
                strokeLinecap="round"
                fill="none"
              />

              <path
                d="M65 155L70 140M65 155L80 158"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Arrow Mobile */}
            <svg
              className="cv-arrow-mobile"
              viewBox="0 0 40 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M20 5V82"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="7 7"
                strokeLinecap="round"
              />

              <path
                d="M12 74L20 84L28 74"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Button />
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Kornelius1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="Profil GitHub"
            >
              <FaGithub className="text-3xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/kornelius-jonathan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#0A66C2] hover:scale-110 transition-all duration-300"
              aria-label="Profil LinkedIn"
            >
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Kolom Kanan: Profile Card dari React Bits */}
      <div className="hero-lanyard">
        <Lanyard
          position={[0, 0, 15]}
          gravity={[0, -40, 0]}
          fov={20}
          frontImage="/project-images/FotoProfil.png"
          backImage="/project-images/FotoProfil.png"
          imageFit="cover"
        />
      </div>
    </section>
  );
}

export default Hero;
