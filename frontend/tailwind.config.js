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
        red: "#FB2448",
        blue: "#1A0B5B",
        blues: "#2F1AC4",
        violet: "#7E33E0",
        primary: "#F2F0FF",
        secondary: "#F6F7FB",
        bgcard: "#F7F7F7",
        subtext: "#bab6ce",
        lightblue: "#00C1FE",
        mint: "#05E6B7",
        sand: "#FFEAC1",
      },
      content: {
        lamp: "url('./assets/eclipse60.png')",
        bg2: "url('./assets/eclipse61.png')",
      },
    },
    plugins: [],
  },
};
