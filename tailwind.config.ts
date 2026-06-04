import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#0E0E0E",
        panel: "#151515",
        text: "#F5F5F5",
        muted: "#A3A3A3",
        accent: "#0066FF"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 50px rgba(0, 102, 255, .28)"
      }
    }
  },
  plugins: []
};

export default config;
