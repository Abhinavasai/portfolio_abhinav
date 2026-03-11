import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        surfaceStrong: "var(--surface-strong)",
        text: "var(--text)",
        muted: "var(--muted)",
        line: "var(--line)",
        accent: "var(--accent)",
        accentSoft: "var(--accent-soft)",
        secondary: "var(--secondary)",
        glow: "var(--glow)"
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 80px rgba(10, 20, 40, 0.14)",
        glass: "0 20px 70px rgba(15, 23, 42, 0.18)"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(120, 131, 160, 0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(120, 131, 160, 0.14) 1px, transparent 1px)",
        aurora: "radial-gradient(circle at top left, rgba(90, 170, 255, 0.32), transparent 28%), radial-gradient(circle at 85% 15%, rgba(79, 209, 197, 0.24), transparent 22%), radial-gradient(circle at 50% 80%, rgba(245, 158, 11, 0.16), transparent 25%)"
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        pulseSoft: "pulseSoft 6s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.65", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
