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
        lg: "1200px",
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
        feature: "#f1f0ff",
        blueBold: "#151875",
        subtext1: "#7E81A2",
        navbartext: "#0D0E43",
      },
      content: {
        lamp: "url('./assets/eclipse60.png')",
        bg2: "url('./assets/eclipse61.png')",
      },
    },
    plugins: [
      require("@tailwindcss/container-queries"),
      require("@tailwindcss/forms"),
    ],
  },
};
