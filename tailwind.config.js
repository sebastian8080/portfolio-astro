import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};
