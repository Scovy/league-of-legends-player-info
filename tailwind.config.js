/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-bg':'#070720',
        'secondary-bg': '#191937',
        'tertiary-bg' : '#11112A'
      }
    },
  },
  plugins: [],
}
