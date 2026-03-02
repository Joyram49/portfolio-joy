"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Summary from "./Summary";
import AttributeCards from "./AttributeCards";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-accent3 text-sm">01.</span>
            <h2 className="font-display font-bold text-bright text-4xl md:text-5xl">
              about_me
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Story */}
          <Summary isInView={isInView} />
          {/* Right — Attribute cards */}
          <AttributeCards isInView={isInView} />
        </div>
      </div>
    </section>
  );
}
