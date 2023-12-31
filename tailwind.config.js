/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  
  plugins: [
   
      require('flowbite/plugin')
  
  ],
}
