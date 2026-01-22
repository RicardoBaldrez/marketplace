/** @type {import('tailwindcss').Config} */
const { colors, fontSize } = require("./src/styles");

module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontSize,
      heigth: {
        button: 57
      }
    },
  },
  plugins: [],
}