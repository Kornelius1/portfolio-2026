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
  const [isHoveringNavbar, setIsHoveringNavbar] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (current > previous && current > 150 && !isOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header
        className="header"
        style={{
          zIndex: isHoveringNavbar ? 200 : 100,
        }}
        animate={{
          y: hidden ? -140 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        onMouseEnter={() => setIsHoveringNavbar(true)}
        onMouseLeave={() => setIsHoveringNavbar(false)}
        onTouchStart={() => setIsHoveringNavbar(true)}
      >
        <div className="header-content">
          {/* =========================
              LOGO
          ========================= */}
          <div className="logo">
            <h2
              style={{
                margin: 0,
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              PORTFOLIO
            </h2>
          </div>

          {/* =========================
              DESKTOP NAVIGATION
          ========================= */}
          <nav className="desktop-nav">
            <a href="#beranda">Beranda</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </nav>

          {/* =========================
              MOBILE TOGGLE
          ========================= */}
          <button
            className="mobile-toggle"
            onClick={() => {
              setIsOpen((prev) => !prev);
              setIsHoveringNavbar(true);
            }}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <motion.div
              className="icon-container"
              animate={{
                rotate: isOpen ? 180 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              {/* BURGER */}
              <motion.svg
                className="icon-svg"
                animate={{
                  opacity: isOpen ? 0 : 1,
                }}
                transition={{
                  duration: 0.3,
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

              {/* CLOSE */}
              <motion.svg
                className="icon-svg cross-icon"
                animate={{
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
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
            </motion.div>
          </button>
        </div>

        {/* =========================
            MOBILE NAVIGATION
        ========================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-nav"
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <a
                href="#beranda"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </a>

              <a
                href="#about"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>

              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <StyleSheet />
    </>
  );
}

function StyleSheet() {
  return (
    <style>{`
      /* =====================================================
         HEADER
      ===================================================== */

      .header {
        position: fixed;

        top: 0;
        left: 0;
        right: 0;

        padding-top: 20px;

        background: rgba(5, 5, 5, 0.8);

        border-bottom: 1px solid #1d2628;

        z-index: 100;

        pointer-events: auto;

        backdrop-filter: blur(12px);

        transition: z-index 0s;
      }

      /* =====================================================
         HEADER CONTENT
      ===================================================== */

      .header-content {
        max-width: 1200px;

        margin: 0 auto;

        height: 60px;

        display: flex;

        align-items: center;

        justify-content: space-between;

        padding: 0 40px;
      }

      /* =====================================================
         LOGO
      ===================================================== */

      .logo {
        display: flex;

        align-items: center;

        color: #f5f5f5;
      }

      /* =====================================================
         DESKTOP NAV
      ===================================================== */

      .desktop-nav {
        display: flex;

        gap: 32px;
      }

      .desktop-nav a {
        color: #f5f5f5;

        text-decoration: none;

        font-size: 14px;

        opacity: 0.7;

        transition:
          opacity 0.2s ease,
          transform 0.2s ease;
      }

      .desktop-nav a:hover {
        opacity: 1;

        transform: translateY(-1px);
      }

      /* =====================================================
         MOBILE TOGGLE
      ===================================================== */

      .mobile-toggle {
        display: none;

        background: none;

        border: none;

        cursor: pointer;

        padding: 0;

        width: 32px;
        height: 32px;

        position: relative;

        z-index: 1;

        pointer-events: auto;
      }

      .icon-container {
        width: 100%;
        height: 100%;

        display: flex;

        align-items: center;

        justify-content: center;

        position: relative;
      }

      .icon-svg {
        position: absolute;

        top: 4px;
        left: 4px;
      }

      /* =====================================================
         MOBILE NAV
      ===================================================== */

      .mobile-nav {
        display: none;
      }

      /* =====================================================
         MOBILE
      ===================================================== */

      @media (max-width: 768px) {

        .header {
          padding-top: 14px;
        }

        .header-content {
          height: 56px;

          padding: 0 20px;

          /*
           * Burger kiri
           * Portfolio kanan
           */
          justify-content: space-between;
        }

        /* -----------------------------------------------
           LOGO -> KANAN
        ----------------------------------------------- */

        .logo {
          order: 2;
          transform: translateX(-30px);
        }

        /* -----------------------------------------------
           BURGER -> KIRI
        ----------------------------------------------- */

        .mobile-toggle {
          display: block;

          order: 1;
        }

        /* -----------------------------------------------
           HIDE DESKTOP NAV
        ----------------------------------------------- */

        .desktop-nav {
          display: none;
        }

        /* -----------------------------------------------
           MOBILE NAV
        ----------------------------------------------- */

        .mobile-nav {
          display: flex;

          flex-direction: column;

          background: rgba(5, 5, 5, 0.95);

          border-top: 1px solid #1d2628;

          border-bottom: 1px solid #1d2628;

          padding: 20px;

          gap: 20px;

          align-items: center;

          backdrop-filter: blur(12px);
        }

        .mobile-nav a {
          color: #f5f5f5;

          text-decoration: none;

          font-size: 15px;

          font-weight: 500;

          opacity: 0.8;

          transition:
            opacity 0.2s ease,
            transform 0.2s ease;

          width: 100%;

          text-align: center;

          padding: 10px 0;
        }

        .mobile-nav a:hover {
          opacity: 1;

          transform: translateY(-1px);
        }
      }

      /* =====================================================
         VERY SMALL MOBILE
      ===================================================== */

      @media (max-width: 400px) {

        .header-content {
          padding: 0 16px;
        }

        .logo h2 {
          font-size: 1.35rem !important;
        }

      }
    `}</style>
  );
}