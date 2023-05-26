/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jose: ["Josefin Sans", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
      colors: {
        pink: "#fb2e86",
        
      }
    },
  },
  plugins: [],
};