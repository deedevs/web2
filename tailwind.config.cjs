/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-main": " rgb(9, 9, 36)",
        "hero-pattern": "url('../assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
