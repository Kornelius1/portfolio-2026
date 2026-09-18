"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (isOpen) {
      setHidden(false);
      return;
    }

    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setHidden(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        className="header"
        animate={{
          y: hidden ? -140 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <div className="header-content">
          <button
            className="mobile-toggle"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div className="icon-container">
              <motion.svg
                className="icon-svg"
                animate={{
                  opacity: isOpen ? 0 : 1,
                  scale: isOpen ? 0.7 : 1,
                }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </motion.svg>

              <motion.svg
                className="icon-svg"
                animate={{
                  opacity: isOpen ? 1 : 0,
                  scale: isOpen ? 1 : 0.7,
                }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </motion.svg>
            </div>
          </button>

          <nav className="desktop-nav">
            <a href="/#beranda">Beranda</a>
            <a href="/#about">About</a>
            <a href="/#projects">Projects</a>
            <a href="/qa">QA Portfolio</a>
          </nav>

          <div className="logo">
            <h2>PORTFOLIO</h2>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ clipPath: "circle(0% at 28px 42px)" }}
            animate={{ clipPath: "circle(150% at 28px 42px)" }}
            exit={{ clipPath: "circle(0% at 28px 42px)" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mobile-menu-content">
              <a href="/#beranda" onClick={closeMenu}>Beranda</a>
              <a href="/#about" onClick={closeMenu}>About</a>
              <a href="/#projects" onClick={closeMenu}>Projects</a>
              <a href="/qa" onClick={closeMenu}>QA Portfolio</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <StyleSheet />
    </>
  );
}

function StyleSheet() {
  return (
    <style>{`
      @import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap");

      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding-top: 20px;
        background: rgba(5, 5, 5, 0.8);
        border-bottom: 1px solid #1d2628;
        z-index: 200;
        pointer-events: auto;
        backdrop-filter: blur(12px);
      }

      .header-content {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 40px;
        box-sizing: border-box;
        font-family: "Caveat", cursive;
      }

      .logo {
        display: flex;
        align-items: center;
        color: #f5f5f5;
        position: relative;
        z-index: 202;
      }

      .logo h2 {
        margin: 0;
        font-family: "Caveat", cursive;
        font-size: 1.8rem;
        font-weight: 700;
        letter-spacing: 0.5px;
      }

      .desktop-nav {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 40px;
        z-index: 202;
      }

      .desktop-nav a {
        color: #f5f5f5;
        text-decoration: none;
        font-family: "Caveat", cursive;
        font-size: 1.35rem;
        font-weight: 600;
        opacity: 0.75;
        transition: opacity 0.2s ease, transform 0.2s ease;
      }

      .desktop-nav a:hover {
        opacity: 1;
        transform: translateY(-2px);
      }

      .mobile-toggle {
        display: none;
        background: none;
        border: none;
        padding: 0;
        width: 32px;
        height: 32px;
        position: relative;
        z-index: 300;
        cursor: pointer;
        pointer-events: auto;
      }

      .icon-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        pointer-events: none;
      }

      .icon-svg {
        position: absolute;
        top: 4px;
        left: 4px;
        pointer-events: none;
      }

      .mobile-menu-overlay {
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100dvh;
        background: #e7e5ee;
        z-index: 150;
        overflow: hidden;
        font-family: "Caveat", cursive;
      }

      .mobile-menu-content {
        position: absolute;
        left: 30px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }

      .mobile-menu-content a {
        color: #12121a;
        text-decoration: none;
        font-family: "Caveat", cursive;
        font-size: 3rem;
        line-height: 1;
        font-weight: 600;
        letter-spacing: 0.5px;
        opacity: 0.9;
        cursor: pointer;
      }

      @media (max-width: 768px) {
        .header {
          padding-top: 14px;
        }

        .header-content {
          height: 56px;
          padding: 0 20px;
        }

        .mobile-toggle {
          display: block;
          order: 1;
        }

        .desktop-nav {
          display: none;
        }

        .logo {
          order: 2;
          transform: translateX(-30px);
        }

        .mobile-menu-content {
          left: 30px;
          gap: 18px;
        }

        .mobile-menu-content a {
          font-size: 3.2rem;
        }
      }
    `}</style>
  );
}