import { motion } from "framer-motion";
import SkillBar from "./SkillBar";
const skillCategories = [
  {
    title: "Frontend",
    color: "#00d4ff",
    icon: "⚡",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 82 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 75 },
      { name: "Redux Toolkit", level: 80 },
    ],
  },
  {
    title: "Backend",
    color: "#7928ca",
    icon: "🔧",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 72 },
      { name: "MongoDB", level: 70 },
      { name: "Prisma ORM", level: 74 },
      { name: "Drizzle ORM", level: 68 },
      { name: "Supabase", level: 72 },
    ],
  },
  {
    title: "Tools & Others",
    color: "#ff4d6d",
    icon: "🛠️",
    skills: [
      { name: "TanStack Query", level: 85 },
      { name: "tRPC", level: 72 },
      { name: "Stripe API", level: 78 },
      { name: "Socket.IO", level: 70 },
      { name: "NextAuth.js", level: 83 },
      { name: "Git / GitHub", level: 88 },
    ],
  },
];

const SkillGrids = ({ isInView }: { isInView: boolean }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {skillCategories.map((cat, catI) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 + catI * 0.15, duration: 0.6 }}
          className="terminal"
        >
          <div className="terminal-header">
            <div className="dot bg-[#ff5f56]" />
            <div className="dot bg-[#ffbd2e]" />
            <div className="dot bg-[#27c93f]" />
            <span
              className="ml-3 text-xs font-mono"
              style={{ color: cat.color }}
            >
              {cat.icon} {cat.title.toLowerCase()}.ts
            </span>
          </div>
          <div className="p-6 space-y-5">
            {cat.skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={cat.color}
                delay={0.3 + catI * 0.1 + i * 0.08}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillGrids;
