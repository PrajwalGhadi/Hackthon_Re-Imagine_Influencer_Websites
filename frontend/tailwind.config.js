/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#1a1a1a",
        text: "#592b1d",
        background: "#fef4ec",
        button: "#bc8f8f",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "playfair-display": ["Playfair Display", "serif"],
        "square-peg": ["Square Peg", "cursive"],
      },
    },
  },
  plugins: [],
};
