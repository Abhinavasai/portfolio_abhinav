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
        accentMedium: "var(--accent-medium)",
        secondary: "var(--secondary)",
        amber: "var(--amber)",
        glow: "var(--glow)"
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"]
      },
      boxShadow: {
        soft:  "0 20px 80px rgba(10, 20, 40, 0.14)",
        glass: "0 20px 70px rgba(15, 23, 42, 0.18)"
      },
      backgroundImage: {
        grid:   "linear-gradient(to right, rgba(167,139,250,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(167,139,250,0.07) 1px, transparent 1px)",
        aurora: "radial-gradient(circle at top left, rgba(167,139,250,0.28), transparent 30%), radial-gradient(circle at 84% 14%, rgba(103,232,249,0.20), transparent 24%), radial-gradient(circle at 50% 80%, rgba(245,158,11,0.12), transparent 26%)"
      },
      animation: {
        float:         "float 8s ease-in-out infinite",
        pulseSoft:     "pulseSoft 6s ease-in-out infinite",
        blink:         "blink 1s step-end infinite",
        marquee:       "marquee 24s linear infinite",
        shimmerBorder: "shimmerBorder 2.8s linear infinite",
        ping:          "ping 1.2s cubic-bezier(0,0,0.2,1) infinite",
        fadeSlideUp:   "fadeSlideUp 0.6s ease forwards"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-14px)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.65", transform: "scale(1)" },
          "50%":      { opacity: "1",    transform: "scale(1.06)" }
        },
        blink: {
          "0%, 49%":   { opacity: "1" },
          "50%, 100%": { opacity: "0" }
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" }
        },
        shimmerBorder: {
          from: { backgroundPosition: "0% 0%" },
          to:   { backgroundPosition: "200% 0%" }
        },
        ping: {
          "75%, 100%": { transform: "scale(2)", opacity: "0" }
        },
        fadeSlideUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to:   { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
