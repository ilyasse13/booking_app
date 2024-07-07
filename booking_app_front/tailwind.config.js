/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        sansBody: ['Open Sans', 'sans-serif'],
        sansTitle: ['Poppins',, 'sans-serif']
      },
      colors: {
        customBlue: '#0077B6',
        Lion:'#C1946A',
        beige:"#F3FAE1",
        night:'#0C0C0C'

      }
    },
  },
  plugins: [],
}

