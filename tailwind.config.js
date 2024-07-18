/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/javaScript/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        'blue': '#1fb6ff'
      },
      fontFamily: {
        sans: ["Roboto"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
