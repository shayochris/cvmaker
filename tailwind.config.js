/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002D62",
        secondary: "#ff6f3c",
      },
      fontFamily: {
        Poppins: ["Poppins", "Sans-serif"]
      }
    },
  },
  plugins: [],
}