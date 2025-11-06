// tailwind.config.js



module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Tailwind blue-600 for clear visibility
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
