import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SkillBar = ({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-mono text-sm text-text">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
