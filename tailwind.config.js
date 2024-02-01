/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#003398",
        darkprimary: "#002264",
        verydarkprimary: "#001030",
        lightprimary: "#DAE6FF",
        yellow: "#FCF903",
        secondary: "#DE8C0B",
        lightgray: "#9E9E9E",
        verylightgray: "#E8E8E8"
      },
      boxShadow: {
        'custom-3xl': '0px 8px 16px 0px rgba(0, 0, 0, 0.08), 0px 0px 4px 0px rgba(0, 0, 0, 0.04);'
      }
    },
  },
  plugins: [],
}
