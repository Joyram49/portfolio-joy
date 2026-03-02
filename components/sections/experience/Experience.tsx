"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    id: 0,
    role: "Junior Frontend Developer",
    company: "Rentyard",
    url: "#",
    location: "Remote",
    period: "July 2025 – Present",
    type: "Full-time",
    color: "#00d4ff",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Socket.IO",
      "Stripe",
      "TanStack Query",
      "Redux",
      "Leaflet",
      "Google Maps API",
      "Radix UI",
    ],
    achievements: [
      "Architected a full-stack rental platform connecting landlords and tenants with verified listings and secure Stripe payment processing.",
      "Built interactive property management with drag-and-drop media uploads and real-time chat via Socket.IO.",
      "Implemented comprehensive user workflows for landlord listings, tenant applications, scheduling, and status tracking using React Hook Form + Zod.",
      "Optimized platform performance with TanStack Query for data caching and Redux Toolkit for state management.",
    ],
  },
  {
    id: 1,
    role: "Frontend Developer (Next.js)",
    company: "Devcore Technology",
    url: "#",
    location: "Remote",
    period: "Jan 2025 – July 2025",
    type: "Full-time",
    color: "#7928ca",
    stack: [
      "Next.js 15",
      "TypeScript",
      "tRPC",
      "NextAuth",
      "Supabase",
      "Drizzle ORM",
      "Prisma",
      "Power BI",
      "Framer Motion",
      "Radix UI",
    ],
    achievements: [
      "Architected full-stack T3 applications using Next.js 15, TypeScript, and tRPC for fully type-safe API development.",
      "Implemented role-based authentication using NextAuth and Supabase Auth across multiple SaaS platforms.",
      "Built enterprise-grade admin dashboards with multi-tenant RBAC systems, Power BI integration, and Stripe subscription management.",
      "Optimized performance using TanStack Query, Prisma ORM, and responsive UI with Tailwind CSS + Framer Motion.",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const exp = experiences[active];

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-accent3 text-sm">03.</span>
            <h2 className="font-display font-bold text-bright text-4xl md:text-5xl">
              experience{"{}"}
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted font-mono text-sm mt-4">
            // where I&apos;ve contributed and what I&apos;ve built
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px,1fr] gap-8">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex lg:flex-col gap-2 border-b lg:border-b-0 lg:border-l border-border pb-4 lg:pb-0 lg:pl-0 overflow-x-auto lg:overflow-visible"
          >
            {experiences.map((e, i) => (
              <button
                key={e.id}
                onClick={() => setActive(i)}
                className={`relative text-left px-4 py-3 font-mono text-sm transition-all duration-300 whitespace-nowrap rounded-lg lg:rounded-none lg:border-l-2 ${
                  active === i
                    ? "text-accent bg-accent/5 lg:bg-transparent lg:border-accent"
                    : "text-muted hover:text-text hover:bg-surface lg:border-transparent"
                }`}
                data-hover
              >
                <div className="font-bold">{e.company}</div>
                <div className="text-xs opacity-70 mt-0.5">
                  {e.period.split(" – ")[0]}
                </div>
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Role header */}
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="font-display font-bold text-bright text-2xl">
                    {exp.role}
                    <span
                      className="font-mono text-sm ml-3"
                      style={{ color: exp.color }}
                    >
                      @ {exp.company}
                    </span>
                  </h3>
                </div>
                <span
                  className="font-mono text-xs border rounded-full px-3 py-1"
                  style={{ color: exp.color, borderColor: exp.color + "44" }}
                >
                  {exp.type}
                </span>
              </div>

              <div className="flex items-center gap-6 text-muted font-mono text-xs">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              {exp.achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-3"
                >
                  <span
                    className="font-mono text-sm mt-0.5 flex-shrink-0"
                    style={{ color: exp.color }}
                  >
                    ▸
                  </span>
                  <p className="text-muted leading-relaxed">{a}</p>
                </motion.div>
              ))}
            </div>

            {/* Stack */}
            <div>
              <span className="font-mono text-xs text-muted mb-3 block">
                // tech_stack
              </span>
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 rounded border text-text"
                    style={{
                      borderColor: exp.color + "33",
                      background: exp.color + "08",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
