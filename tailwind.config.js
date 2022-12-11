/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    colors: {
      black: "#121212",
      white: "#FFFFFF",
      pink: "#F5F8FF",
      coral: "#FFB8B8",
      lemon: "#F5FFB8",
      green: "#CAFFB8",
      lightBlue: "#B8F2FF",
      blue: "#B8D4FF",
      yellow: "#FFF500",
    },
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
