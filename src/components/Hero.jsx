//https://uiverse.io/sahilxkhadka/rotten-grasshopper-44

import "./Hero.css";
import ProfileCard from "./ProfileCard";
import Button from "./Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero-container">
      {/* Kolom Kiri: Teks Portofolio */}
      <div className="hero-text">
        <h1>
          HALO, SAYA
          <br />
          Kornelius Jonathan
        </h1>
        <p>
          Selamat datang di portofolio saya. Saya merupakan lulusann S1 Sistem Informasi Universitas Riau dengan IPK 3,73/4,00 yang memiliki 
          pengalaman magang di PT Perkebunan Nusantara IV serta pengalaman mengembangkan 
          aplikasi web menggunakan Laravel, Vue.js, dan REST API. Berpengalaman membangun sistem 
          reservasi dengan integrasi DOKU Payment Gateway, aplikasi Android, serta penelitian machine 
          learning menggunakan LightGBM dan Quantum Support Vector Regression (QSVR) untuk 
          prediksi konsentrasi PM2.5. Memiliki minat berkarier sebagai Backend Developer, Software 
          Engineer, atau Web Developer.
        </p>

        <div className="flex items-center gap-6 mt-8">
          <div className="flex items-center justify-center">
            <Button />
          </div>

          <div className="flex items-center gap-5 border-l border-slate-700 pl-6">
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
      <div className="hero-card scale-90">
        <ProfileCard
          name="Kornelius J. M."
          title="Backend Developer"
          handle="kornelius_j"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/project-images/FotoProfil.png"
          miniAvatarUrl="/project-images/FotoProfil2.png"
          onContactClick={() => {
            const email = "korneliusjonathan31@gmail.com";
            const subject = "Tanya Project";
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;
            window.open(gmailUrl, "_blank");
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
