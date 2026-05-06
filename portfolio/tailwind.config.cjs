module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        soft: '0 20px 50px rgba(0,0,0,0.35)',
      },
      colors: {
        accent: {
          DEFAULT: '#60a5fa',
        },
      },
    },
  },
  plugins: [],
}

