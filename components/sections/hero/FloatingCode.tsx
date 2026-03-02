import { motion } from "framer-motion";

function FloatingCode() {
  const lines = [
    { code: "const dev = new Developer();", delay: 0 },
    { code: "dev.skills = ['React', 'Next.js'];", delay: 0.5 },
    { code: "await dev.build(greatProducts);", delay: 1 },
    { code: "return dev.passion; // ∞", delay: 1.5 },
  ];

  return (
    <motion.div
      className="terminal max-w-md w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <div className="terminal-header">
        <div className="dot bg-[#ff5f56]" />
        <div className="dot bg-[#ffbd2e]" />
        <div className="dot bg-[#27c93f]" />
        <span className="ml-3 text-muted text-xs font-mono">
          ~/joy-ram-das/index.ts
        </span>
      </div>
      <div className="p-5 font-mono text-sm space-y-2">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 + line.delay, duration: 0.4 }}
            className="flex gap-4"
          >
            <span className="text-muted select-none">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={
                i === 0
                  ? "text-accent"
                  : i === 1
                    ? "text-text"
                    : i === 2
                      ? "text-[#7928ca]"
                      : "text-accent3"
              }
            >
              {line.code}
            </span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="flex gap-4 mt-2"
        >
          <span className="text-muted select-none">05</span>
          <span className="text-[#27c93f]">// ✓ Compiled successfully</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FloatingCode;
