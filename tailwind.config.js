module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#9510AC",
          dark: "#0F0111",
          gray: "#202020",
          text: "#747474",
          social: "#2D76F9",
        },
        team: {
          header: "#252B42",
          content: "#737373",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
