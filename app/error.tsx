"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="terminal max-w-xl w-full"
      >
        {/* Header */}
        <div className="terminal-header">
          <div className="dot bg-[#ff5f56]" />
          <div className="dot bg-[#ffbd2e]" />
          <div className="dot bg-[#27c93f]" />
          <span className="ml-3 text-xs font-mono text-muted">
            runtime-error.ts
          </span>
        </div>

        {/* Content */}
        <div className="p-8 text-center space-y-6">
          <AlertTriangle size={48} className="mx-auto text-[#ff5f56]" />

          <h1 className="font-display text-3xl font-bold text-bright">
            Something went wrong
          </h1>

          <p className="font-mono text-muted text-sm">
            {"// Unexpected_Runtime_Exception"}
          </p>

          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-3 rounded-lg font-mono text-sm hover:bg-accent/90 transition"
          >
            <RotateCcw size={16} />
            retry()
          </button>
        </div>
      </motion.div>
    </div>
  );
}
