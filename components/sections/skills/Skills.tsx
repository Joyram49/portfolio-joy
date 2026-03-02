"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TechStacks from "./TechStacks";
import SkillGrids from "./SkillGrids";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-accent3 text-sm">02.</span>
            <h2 className="font-display font-bold text-bright text-4xl md:text-5xl">
              skills[]
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted font-mono text-sm mt-4 max-w-xl">
            // Tools and technologies I use to build exceptional products
          </p>
        </motion.div>

        {/* Skill bars grid */}
        <SkillGrids isInView={isInView} />

        {/* Tech stack tags */}
        <TechStacks isInView={isInView} />
      </div>
    </section>
  );
}
