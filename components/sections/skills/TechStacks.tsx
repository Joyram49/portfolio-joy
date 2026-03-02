import { motion } from "framer-motion";
const techStack = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Prisma",
  "Drizzle",
  "Supabase",
  "Stripe",
  "Socket.IO",
  "TanStack Query",
  "Redux",
  "Tailwind CSS",
  "ShadCN UI",
  "Framer Motion",
  "tRPC",
  "NextAuth",
  "React Hook Form",
  "Zod",
  "Radix UI",
  "Leaflet",
  "REST API",
];

const TechStacks = ({ isInView }: { isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.8 }}
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-muted text-sm">// full stack</span>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.9 + i * 0.03 }}
            whileHover={{
              scale: 1.08,
              borderColor: "#00d4ff",
              color: "#00d4ff",
            }}
            className="font-mono text-xs text-muted border border-border px-3 py-1.5 rounded-md cursor-default transition-colors duration-200"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStacks;
