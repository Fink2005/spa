/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blurBlack : '#6b625e',
        customGreen:'#88C273',
        customGreen2: 'rgb(8,42,35)',
        customBlue: '#18132e'
      },
      margin: {
        'custom': '30rem  '
      },
      translate: {
        '72': '18rem', // Adjust the value to your needs
        'custom': '18rem', // You can add more custom values
        'custom2': '20rem', // You can add more custom values
        'custom3': '20rem', // You can add more custom values
      },
      borderRadius: {
        'custom-large': '100px',
        'custom-medium': '60px'
      },
    },
  },
  plugins: [],
}

