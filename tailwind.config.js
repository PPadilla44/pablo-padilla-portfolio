/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-hover": "var(--color-surface-hover)",
        primary: "var(--color-primary)",
        "primary-fg": "var(--color-primary-fg)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        line: "var(--color-border)",
        vivid: "var(--color-vivid)",
        sec: "var(--color-sec)",
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', '"Archivo"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"ui-monospace"', "monospace"],
      },
      boxShadow: {
        hard: "6px 6px 0px 0px var(--color-shadow)",
        "hard-sm": "3px 3px 0px 0px var(--color-shadow)",
        "hard-lg": "10px 10px 0px 0px var(--color-shadow)",
        "hard-hover": "2px 2px 0px 0px var(--color-shadow)",
        "hard-vivid": "6px 6px 0px 0px var(--color-vivid)",
        "hard-sec": "6px 6px 0px 0px var(--color-sec)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-slow": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        marquee: "marquee 18s linear infinite",
        "marquee-slow": "marquee-slow 35s linear infinite",
        "float-y": "float-y 4s ease-in-out infinite",
        wiggle: "wiggle 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
