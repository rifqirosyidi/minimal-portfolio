module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Jost", "sans-serif"],
        mono: ["PT Mono", "monospace"],
      },
    },
  },
  plugins: [],
};