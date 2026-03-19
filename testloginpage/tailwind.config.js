/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aden-orange': '#FF6B00',
        'aden-dark-blue': '#0A2463',
        'aden-digital-blue': '#247BA0',
        'aden-dark-grey': '#333333',
        'aden-mid-grey': '#666666',
        'aden-light-grey': '#E5E5E5',
        'aden-white': '#FFFFFF',
        brand: {
          500: '#667eea',  // Whimsical 主色（可根据实际调整）
          600: '#5568d3',
        }
      },
      fontFamily: {
        title: ['Figtree', 'sans-serif'],
        body: ['Catamaran', 'sans-serif'],
        cn: ['OPPOSans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 20px 60px rgba(0,0,0,0.15)'  // 柔和阴影
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true
  }
}