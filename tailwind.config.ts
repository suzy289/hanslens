import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0c0c0f",
          muted: "#12121a",
          card: "#16161f",
        },
        accent: {
          DEFAULT: "#e8a54b",
          dim: "#c4893a",
          glow: "rgba(232, 165, 75, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #0c0c0f), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(232, 165, 75, 0.22), transparent)",
        "brand-ig":
          "linear-gradient(135deg, #ffd600 0%, #ff7a00 38%, #ff0069 72%, #c13584 100%)",
        "brand-ig-soft":
          "linear-gradient(135deg, rgba(255,214,0,0.2) 0%, rgba(255,0,105,0.15) 100%)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
      keyframes: {
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-x-rev": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "marquee-x": "marquee-x 85s linear infinite",
        "marquee-x-rev": "marquee-x-rev 92s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
