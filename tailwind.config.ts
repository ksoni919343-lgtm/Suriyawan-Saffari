module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: '#F5F5DC',
        warmBrown: '#8B4513',
        tan: '#D2B48C',
        wheat: '#F5DEB3',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
