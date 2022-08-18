/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero' : "url('../src/img_sources/campus.png')",
      },
    },
  },
  plugins: [],
}
