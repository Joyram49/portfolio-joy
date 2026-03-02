import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        bg: "#080c10",
        surface: "#0d1117",
        border: "#1e2a38",
        accent: "#00d4ff",
        accent2: "#7928ca",
        accent3: "#ff4d6d",
        muted: "#8892a4",
        text: "#cdd6e0",
        bright: "#e8f4fd",
      },
      animation: {
        "cursor-blink": "blink 1s step-end infinite",
        "scan-line": "scanline 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glowpulse 3s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowpulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,212,255,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0,212,255,0.7)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
