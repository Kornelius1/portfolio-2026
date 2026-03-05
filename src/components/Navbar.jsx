// dapat dari motion.dev component: Scroll Direction: Hide Header

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header
        className="header"
        animate={{
          y: hidden ? -140 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="header-content">
          <div className="logo">
            {/* Kamu bisa mengganti MotionLogo ini dengan teks nama proyekmu */}
            <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>
              PORTFOLIO
            </h2>
          </div>
          <nav>
            <a href="#beranda">Beranda</a>
            <a href="#about">Tentang</a>
            <a href="#projects">Proyek</a>
          </nav>
        </div>
      </motion.header>

      <StyleSheet />
    </>
  );
}

function StyleSheet() {
  return (
    <style>{`
      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding-top: 20px;
        background: rgba(5, 5, 5, 0.8);
        border-bottom: 1px solid #1d2628;
        z-index: 100;
        backdrop-filter: blur(12px);
      }

      .header-content {
        max-width: 1200px;
        margin: 0 auto;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 40px;
      }

      .logo {
        display: flex;
        align-items: center;
        color: #f5f5f5;
      }

      nav {
        display: flex;
        gap: 32px;
      }

      nav a {
        color: #f5f5f5;
        text-decoration: none;
        font-size: 14px;
        opacity: 0.7;
        transition: opacity 0.2s;
      }

      nav a:hover {
        opacity: 1;
      }

      @media (max-width: 768px) {
        .header-content {
          padding: 0 20px;
        }
        nav {
          gap: 20px;
        }
        nav a {
          font-size: 13px;
        }
      }
    `}</style>
  );
}
