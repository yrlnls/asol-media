module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#5e6436',
          light: '#8a9150',
          dark: '#3b3f1f'
        }
      },
      fontFamily: {
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
