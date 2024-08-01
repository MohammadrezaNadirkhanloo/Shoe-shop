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
        'blue': {
          light: '#7C7EA1',
          DEFAULT: '#4A4C6C'
        },
        "sludge":{
          light: '#9FA16D',
          DEFAULT: '#77794E'
        }
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
