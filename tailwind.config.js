/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: true,
  },
};
