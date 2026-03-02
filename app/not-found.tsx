"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="terminal max-w-xl w-full"
      >
        {/* Header */}
        <div className="terminal-header">
          <div className="dot bg-[#ff5f56]" />
          <div className="dot bg-[#ffbd2e]" />
          <div className="dot bg-[#27c93f]" />
          <span className="ml-3 text-xs font-mono text-muted">
            route-error.ts
          </span>
        </div>

        {/* Content */}
        <div className="p-8 text-center space-y-6">
          <Terminal className="mx-auto text-accent" size={48} />

          <h1 className="font-display text-5xl text-bright font-bold">404</h1>

          <p className="font-mono text-muted">{"// Error: Page_Not_Found"}</p>

          <p className="text-sm text-muted font-mono">
            The route you are looking for does not exist.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-3 rounded-lg font-mono text-sm hover:bg-accent/90 transition"
          >
            <ArrowLeft size={16} />
            returnHome()
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
