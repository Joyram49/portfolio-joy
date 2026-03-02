import { motion } from "framer-motion";
import { Code2, Server, Zap, BookOpen } from "lucide-react";
const stats = [
  {
    label: "Frontend",
    icon: <Code2 size={20} />,
    value: "React / Next.js",
    color: "#00d4ff",
  },
  {
    label: "Backend",
    icon: <Server size={20} />,
    value: "Node / Express",
    color: "#7928ca",
  },
  {
    label: "Performance",
    icon: <Zap size={20} />,
    value: "Optimization",
    color: "#ff4d6d",
  },
  {
    label: "Learning",
    icon: <BookOpen size={20} />,
    value: "Always growing",
    color: "#27c93f",
  },
];

const AttributeCards = ({ isInView }: { isInView: boolean }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="gradient-border p-6 group cursor-default"
          data-hover
        >
          <div className="mb-4" style={{ color: s.color }}>
            {s.icon}
          </div>
          <div className="font-display font-bold text-bright text-lg mb-1">
            {s.label}
          </div>
          <div className="font-mono text-xs text-muted">{s.value}</div>
        </motion.div>
      ))}

      {/* Profile image placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="col-span-2 gradient-border overflow-hidden"
      >
        <div className="relative p-8 flex items-center justify-center min-h-[200px] bg-gradient-to-br from-surface to-bg">
          {/* SVG Avatar / Abstract coder visual */}
          <svg viewBox="0 0 400 200" className="w-full max-w-sm opacity-80">
            {/* Monitor */}
            <rect
              x="80"
              y="20"
              width="240"
              height="140"
              rx="8"
              fill="none"
              stroke="#1e2a38"
              strokeWidth="2"
            />
            <rect
              x="88"
              y="28"
              width="224"
              height="110"
              rx="4"
              fill="#0d1117"
            />
            {/* Code lines */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.rect
                key={i}
                x={100}
                y={38 + i * 16}
                width={Math.random() * 60 + 80}
                height="6"
                rx="3"
                fill={
                  i % 3 === 0 ? "#00d4ff" : i % 3 === 1 ? "#7928ca" : "#8892a4"
                }
                opacity={0.6}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
              />
            ))}
            {/* Stand */}
            <rect
              x="185"
              y="160"
              width="30"
              height="16"
              rx="4"
              fill="#1e2a38"
            />
            <rect
              x="150"
              y="174"
              width="100"
              height="6"
              rx="3"
              fill="#1e2a38"
            />
            {/* Glow */}
            <ellipse
              cx="200"
              cy="140"
              rx="80"
              ry="15"
              fill="#00d4ff"
              opacity="0.05"
            />
          </svg>
          <div className="absolute bottom-4 right-6 font-mono text-xs text-muted">
            <span className="text-accent">@</span>joyram49
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AttributeCards;
