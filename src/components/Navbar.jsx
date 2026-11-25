"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";

import { useState, useEffect } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.dataset.menuOpen = isOpen ? "true" : "false";
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [isOpen]);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (isOpen) {
      setHidden(false);
      return;
    }

    setHidden(current > previous && current > 150);
  });

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setHidden(false);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.header
        className="header"
        animate={{ y: hidden ? -140 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
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
            <Link to="/#home">Home</Link>
            <Link to="/qa">QA Portfolio</Link>
          </nav>

          <div className="logo">
            <h2>PORTFOLIO</h2>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <div className="mobile-menu-overlay">
            <motion.div
              className="mobile-menu-circle"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              }}
              exit={{ scale: 0, transition: { duration: 0.3, ease: "easeIn" } }}
            />
            <motion.nav
              className="mobile-menu-content"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.3, delay: 0.15 },
              }}
              exit={{ opacity: 0, transition: { duration: 0.12 } }}
            >
              <Link to="/#home" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/qa" onClick={closeMenu}>
                QA Portfolio
              </Link>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
