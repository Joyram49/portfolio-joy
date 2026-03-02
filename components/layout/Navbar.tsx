"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "about()", num: "01" },
  { href: "#skills", label: "skills[]", num: "02" },
  { href: "#experience", label: "experience{}", num: "03" },
  { href: "#projects", label: "projects<>", num: "04" },
  { href: "#contact", label: "contact(me)", num: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-mono text-accent font-bold text-lg flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            data-hover
          >
            <span className="text-muted">&lt;</span>
            <span className="gradient-text">JRD</span>
            <span className="text-muted">/&gt;</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="relative font-mono text-sm text-muted hover:text-accent transition-colors duration-300 group"
                data-hover
              >
                <span className="text-accent3 text-xs mr-1">{link.num}.</span>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.a
              href="/resume/joyram0401.pdf"
              download="Joy_Ram_Das_Resume.pdf"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="font-mono text-sm border border-accent text-accent px-4 py-2 rounded hover:bg-accent/10 transition-all duration-300"
              data-hover
            >
              resume.pdf
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-accent font-mono text-sm border border-border p-2 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "[×]" : "[≡]"}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                className="font-mono text-2xl text-text hover:text-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-accent3 text-lg mr-2">{link.num}.</span>
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
