/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('../../public/rebranding/image_01.jpg')",
        'about': "url('../../public/backgroundabout.jpg')",
        'services': "url('../../public/rebranding/Bg_02.jpg')",
      },
      colors: {
        'green' : '#aab28b',
        'dark-green' : '#494c3f',
        'light' : '#fff8e9',
        'dark' : '#191919'
      }
    },
  },
  plugins: [],
}
