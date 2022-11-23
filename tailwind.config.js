/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#58e294",

          "secondary": "#cda8f7",

          "accent": "#5dfc75",

          "neutral": "#1B161D",

          "base-100": "#0d0735",

          "info": "#4375D0",

          "success": "#1DE276",

          "warning": "#CC7314",

          "error": "#EE203F",
          "textColour" : "#EEB1FC"
        },
      }
    ]
  },
  theme: {
    extend: {

    },
  },
  plugins: [require("daisyui")],
}