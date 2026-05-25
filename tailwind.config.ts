import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "no-black": "#0A0A0A",
        "no-charcoal": "#111111",
        "no-dark": "#0D0D0D",
        "no-gray": {
          100: "#F5F5F5",
          200: "#E0E0E0",
          300: "#BDBDBD",
          400: "#9E9E9E",
          500: "#757575",
          600: "#616161",
          700: "#424242",
          800: "#1A1A1A",
          900: "#141414",
        },
        "no-blue": "#00D4FF",
        "no-violet": "#9D4EDD",
        "no-cyan": "#00E5FF",
        "no-silver": "#C0C0C0",
      },
      fontFamily: {
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        display: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "hero-xl": ["clamp(3rem, 8vw, 8rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "hero-lg": ["clamp(2.5rem, 6vw, 6rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "hero-md": ["clamp(2rem, 4vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "section-title": ["clamp(1.75rem, 3.5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "body-lg": ["1.25rem", { lineHeight: "1.7" }],
        "body-md": ["1.0625rem", { lineHeight: "1.7" }],
        "caption": ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.08em" }],
      },
      spacing: {
        "section": "clamp(6rem, 12vw, 12rem)",
        "section-sm": "clamp(4rem, 8vw, 8rem)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "fade-in": "fade-in 1s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
        "border-glow": "border-glow 3s ease-in-out infinite",
        "particle-float": "particle-float 20s linear infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(0, 212, 255, 0.2)" },
          "50%": { borderColor: "rgba(0, 212, 255, 0.5)" },
        },
        "particle-float": {
          "0%": { transform: "translateY(100vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh) rotate(720deg)", opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "glow-gradient": "radial-gradient(circle at center, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
        "hero-gradient": "radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.08) 0%, transparent 50%)",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(0, 212, 255, 0.1)",
        "glow-md": "0 0 40px rgba(0, 212, 255, 0.15)",
        "glow-lg": "0 0 80px rgba(0, 212, 255, 0.2)",
        "glow-violet": "0 0 40px rgba(157, 78, 221, 0.15)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.3)",
        "glass-lg": "0 16px 64px rgba(0, 0, 0, 0.4)",
        "inner-glow": "inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
