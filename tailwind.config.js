/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-top': '0px -1px 10px 0px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
