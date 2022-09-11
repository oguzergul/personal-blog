/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        xs: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
