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
        'tertiary-bg' : '#11112A',
        'history-card-win' : '#1D2754',
        'history-card-loss': '#311F39',
        'item-win': '#2A4796',
        'item-loss' : '#53263E',
      }
    },
  },
  plugins: [],
}
