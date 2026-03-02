import { useRef } from "react";
import { projects } from "./Projects";
import { useInView, motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      className="group relative gradient-border overflow-hidden"
      whileHover={{ y: -4 }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative p-6 md:p-8">
        {/* Top row */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span
                className="font-mono text-xs border rounded-full px-2.5 py-0.5"
                style={{
                  color: project.color,
                  borderColor: project.color + "44",
                }}
              >
                {project.badge}
              </span>
            </div>
            <h3 className="font-display font-bold text-bright text-xl mt-2">
              {project.title}
            </h3>
            <p className="font-mono text-sm" style={{ color: project.color }}>
              {project.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              className="text-muted hover:text-accent p-2 border border-transparent hover:border-border rounded transition-all"
              whileHover={{ scale: 1.15 }}
              data-hover
            >
              <Github size={16} />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              className="text-muted hover:text-accent p-2 border border-transparent hover:border-border rounded transition-all"
              whileHover={{ scale: 1.15 }}
              data-hover
            >
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr,220px] gap-6">
          {/* Left */}
          <div className="space-y-4">
            <p className="text-muted leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2 py-1 bg-surface border border-border rounded text-muted hover:text-accent hover:border-accent/30 transition-colors duration-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Code preview */}
          <div className="terminal hidden md:block">
            <div className="terminal-header">
              <div className="dot bg-[#ff5f56]" />
              <div className="dot bg-[#ffbd2e]" />
              <div className="dot bg-[#27c93f]" />
            </div>
            <div className="p-3 font-mono text-[10px] space-y-1">
              {project.lines.map((line, i) => (
                <div
                  key={i}
                  className={
                    i === 0
                      ? "text-muted"
                      : i % 3 === 0
                        ? "text-text"
                        : i % 3 === 1
                          ? "text-accent"
                          : "text-[#7928ca]"
                  }
                  style={line.startsWith("  ") ? { paddingLeft: "1rem" } : {}}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
