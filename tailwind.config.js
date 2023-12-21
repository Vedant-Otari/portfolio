/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'rgb(229, 231, 235)',
        secondary:'rgb(34, 47, 56)',
        tertiary:'#308B8E',
      }
    },
  },
  plugins: [],
};
