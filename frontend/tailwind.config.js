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
        deeppink: "#be185d",
        deepestblue: "#0D0E43",
        deeperblue: "#2F1AC4",
        violet: "#7E33E0",
        primary: "#F2F0FF",
        lightblue: "#00C1FE",
        mint: "#05E6B7",
        sand: "#FFEAC1",
      },
    },
    plugins: [],
  },
};
