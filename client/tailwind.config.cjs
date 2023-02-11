/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10a37f",
      },
      boxShadow: {
        suttle: "0 0 5rem .5px rgba(0,0,0,.09)",
      },
    },
  },
  plugins: [],
};
