import { motion } from "framer-motion";

const Summary = ({ isInView }: { isInView: boolean }) => {
  return (
    <div className="space-y-8">
      {/* Big quote card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="relative pl-6 border-l-2 border-accent"
      >
        <p className="font-display text-xl text-bright leading-relaxed">
          I don&apos;t just write code —
          <span className="gradient-text font-bold">
            {" "}
            I architect experiences{" "}
          </span>
          that users love and developers admire.
        </p>
      </motion.div>

      {[
        `Frontend Software Engineer with 1+ year of real-world experience, currently leveling up as a Full-Stack developer. My journey started with React and has grown into a deep understanding of the entire web stack — from pixel-perfect UIs to scalable backend architectures.`,
        `At Rentyard, I'm building a full-stack rental platform with Next.js 15, React 19, TypeScript, real-time features with Socket.IO, and payment integrations with Stripe. Before that, at Devcore Technology, I architected type-safe T3 applications with multi-tenant RBAC systems and enterprise dashboards.`,
        `My approach: write clean, maintainable code with a performance-first mindset. Whether it's optimizing TanStack Query caches, designing Prisma schemas, or crafting accessible UI components — I care deeply about the craft.`,
      ].map((para, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
          className="text-muted leading-relaxed"
        >
          {para}
        </motion.p>
      ))}

      {/* Fun facts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7 }}
        className="terminal"
      >
        <div className="terminal-header">
          <div className="dot bg-[#ff5f56]" />
          <div className="dot bg-[#ffbd2e]" />
          <div className="dot bg-[#27c93f]" />
          <span className="ml-3 text-muted text-xs font-mono">
            fun-facts.json
          </span>
        </div>
        <div className="p-4 font-mono text-sm">
          <span className="text-[#7928ca]">{"{"}</span>
          {[
            { key: "location", value: "Narsingdi, Dhaka, Bangladesh" },
            {
              key: "education",
              value: "B.Sc. CSE — Asian University of Bangladesh",
            },
            { key: "languages", value: ["Bengali", "English"] },
            { key: "passion", value: "Building things that scale" },
            { key: "goal", value: "Senior Full-Stack Engineer" },
          ].map((item, i) => (
            <div key={i} className="ml-4 my-1">
              <span className="text-accent3">&quot;{item.key}&quot;</span>
              <span className="text-text">: </span>
              {Array.isArray(item.value) ? (
                <span className="text-[#27c93f]">
                  [&quot;{item.value.join('", "')}&quot;]
                </span>
              ) : (
                <span className="text-accent">&quot;{item.value}&quot;</span>
              )}
              {i < 4 && <span className="text-muted">,</span>}
            </div>
          ))}
          <span className="text-[#7928ca]">{"}"}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Summary;
