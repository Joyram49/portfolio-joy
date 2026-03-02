"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import ProjectCard from "./ProjectCard";

export const projects = [
  {
    title: "Khuda Lagche",
    subtitle: "Food Ordering Platform",
    description:
      "A dynamic food ordering platform with full e-commerce flow. Features menu browsing, cart management, secure Stripe checkout, admin dashboard with real-time analytics, and multi-provider auth.",
    stack: [
      "Next.js",
      "React.js",
      "MongoDB",
      "Stripe API",
      "NextAuth.js",
      "ShadCN UI",
      "Tailwind CSS",
      "Leaflet",
      "Zod",
      "Sonner",
    ],
    github: "https://github.com/Joyram49/khuda-lagche",
    live: "https://khuda-lagche-lbld.vercel.app/",
    featured: true,
    color: "#00d4ff",
    gradient: "from-[#00d4ff]/10 to-transparent",
    badge: "Featured",
    lines: [
      "// khuda-lagche/app/checkout/page.tsx",
      "const order = await createOrder({",
      "  items: cart.items,",
      "  payment: stripe.intent,",
      "  delivery: user.location",
      "});",
    ],
  },
  {
    title: "Rentyard",
    subtitle: "Rental Platform",
    description:
      "Full-stack rental platform connecting landlords and tenants. Real-time chat, geolocation search, drag-and-drop listings, tenant applications, and comprehensive dashboards.",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Socket.IO",
      "Leaflet",
      "Stripe",
      "Redux",
      "TanStack Query",
    ],
    github: "https://github.com/Joyram49",
    live: "https://rentyard.com/",
    featured: true,
    color: "#7928ca",
    gradient: "from-[#7928ca]/10 to-transparent",
    badge: "Work Project",
    lines: [
      "// rentyard/features/chat/socket.ts",
      "io.on('connection', (socket) => {",
      "  socket.join(roomId);",
      "  socket.emit('history', msgs);",
      "  socket.on('msg', handleMsg);",
      "});",
    ],
  },
  {
    title: "SaaS Admin Dashboard",
    subtitle: "Enterprise Platform",
    description:
      "Enterprise-grade multi-tenant admin dashboard with RBAC, Power BI integration, subscription management, and type-safe APIs built with tRPC and Drizzle ORM.",
    stack: [
      "Next.js",
      "tRPC",
      "Drizzle ORM",
      "Supabase",
      "NextAuth",
      "Power BI",
      "Stripe",
      "TypeScript",
    ],
    github: "https://github.com/Joyram49/powerbi-admin-dashboard",
    live: "https://powerbi-admin-dashboard-nextjs.vercel.app/",
    featured: false,
    color: "#ff4d6d",
    gradient: "from-[#ff4d6d]/10 to-transparent",
    badge: "Work Project",
    lines: [
      "// saas/server/routers/admin.ts",
      "export const adminRouter = router({",
      "  getUsers: protectedProc",
      "    .input(paginationSchema)",
      "    .query(fetchUsers),",
      "});",
    ],
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-accent3 text-sm">04.</span>
            <h2 className="font-display font-bold text-bright text-4xl md:text-5xl">
              {"projects<>"}
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted font-mono text-sm mt-4">
            // things I&apos;ve built and shipped to production
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/Joyram49"
            target="_blank"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted border border-border px-6 py-3 rounded hover:border-accent hover:text-accent transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            data-hover
          >
            <Github size={16} />
            view all repositories on GitHub
            <ExternalLink size={12} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
