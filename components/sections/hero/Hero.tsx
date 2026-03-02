"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import TypeWriter from "./TypeWriter";
import CodeOrbit from "./CodeOrbit";
import FloatingCode from "./FloatingCode";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left — Text */}
          <div className="space-y-6 z-10">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 border border-border bg-surface/60 backdrop-blur-sm rounded-full px-4 py-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#27c93f] animate-pulse" />
              <span className="font-mono text-xs text-muted">
                available for opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="font-mono text-accent text-sm tracking-widest uppercase"
            >
              &gt;_ Hello, World! I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display font-bold text-bright leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Joy Ram Das
            </motion.h1>

            {/* Role Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-2xl md:text-3xl font-display"
            >
              <TypeWriter />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-muted text-lg leading-relaxed max-w-xl"
            >
              Crafting scalable web applications with modern JavaScript
              ecosystems. Passionate about clean architecture, performant UIs,
              and developer experience. Based in{" "}
              <span className="text-accent font-mono text-sm">
                Narsingdi, Dhaka
              </span>{" "}
              🇧🇩
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex gap-8 py-4 border-y border-border"
            >
              {[
                { value: "1+", label: "Years Exp" },
                { value: "10+", label: "Projects" },
                { value: "2", label: "Companies" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-bold text-2xl gradient-text">
                    {s.value}
                  </div>
                  <div className="font-mono text-xs text-muted mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                className="group relative font-mono text-sm bg-accent text-bg px-6 py-3 rounded overflow-hidden font-bold"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                data-hover
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ExternalLink size={14} />
                </span>
                <motion.div
                  className="absolute inset-0 bg-accent2"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#contact"
                className="font-mono text-sm border border-accent/50 text-accent px-6 py-3 rounded hover:border-accent hover:bg-accent/5 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                data-hover
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex items-center gap-4"
            >
              {[
                {
                  href: "https://github.com/Joyram49",
                  icon: <Github size={18} />,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/joy-ram-das-a89893a-a89893a2/",
                  icon: <Linkedin size={18} />,
                  label: "LinkedIn",
                },
                {
                  href: "https://mail.google.com/mail/?view=cm&to=joyram2015@gmail.com",
                  icon: <Mail size={18} />,
                  label: "Email",
                },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors p-2 border border-transparent hover:border-border rounded"
                  whileHover={{ y: -3, scale: 1.1 }}
                  data-hover
                >
                  {s.icon}
                </motion.a>
              ))}
              <div className="h-px w-16 bg-border" />
              <span className="font-mono text-xs text-muted">
                joyram2015@gmail.com
              </span>
            </motion.div>
          </div>

          {/* Right — Visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <CodeOrbit />
            <div className="relative z-10">
              <FloatingCode />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-muted">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={16} className="text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
