/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    './loop1/step1/index.html',
    './loop1/step2/index.html', './styles.css'],
  theme: {
    extend: {
      backgroundColor: ["hover"],
    },
  },
  plugins: [],
};


