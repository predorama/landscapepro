/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-green': '#124a2f',
        green: '#2a7d2e',
        'light-green': '#DDF6ED',
        'light-gray': '#EDEDED',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        '2xl': '1440px',
        mdx: '932px',
      },
    },
    plugins: [],
  },
};
