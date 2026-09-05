import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        "soft-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.45)" },
          "50%": { boxShadow: "0 0 0 10px rgba(34, 197, 94, 0)" },
        },
      },
      animation: {
        "soft-pulse": "soft-pulse 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [typography],
};
