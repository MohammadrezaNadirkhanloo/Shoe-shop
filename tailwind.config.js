/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/javaScript/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
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
