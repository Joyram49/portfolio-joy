"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border py-12 mt-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-accent text-sm">
              <span className="text-muted">&lt;</span>JRD
              <span className="text-muted">/&gt;</span>
            </span>
            <span className="font-mono text-xs text-muted">
              // Joy Ram Das — {year}
            </span>
          </div>

          {/* Center text */}
          <div className="font-mono text-xs text-muted flex items-center gap-2">
            Built with <Heart size={12} className="text-accent3 fill-accent3" />{" "}
            using <span className="text-accent">Next.js</span> ·{" "}
            <span className="text-accent">Framer Motion</span> ·{" "}
            <span className="text-accent">Tailwind CSS</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              {
                href: "https://github.com/Joyram49",
                icon: <Github size={16} />,
              },
              {
                href: "https://www.linkedin.com/in/joy-ram-das-a89893a-a89893a2/",
                icon: <Linkedin size={16} />,
              },
              {
                href: "https://mail.google.com/mail/?view=cm&to=joyram2015@gmail.com",
                icon: <Mail size={16} />,
              },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                className="text-muted hover:text-accent transition-colors"
                whileHover={{ y: -2, scale: 1.1 }}
                data-hover
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Decorative bottom line */}
        <div className="mt-8 flex items-center justify-center">
          <div className="font-mono text-[10px] text-muted/40 text-center">
            &lt;!-- Thank you for visiting. Let&apos;s ship something great
            together. --&gt;
          </div>
        </div>
      </div>
    </footer>
  );
}
