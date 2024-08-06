/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body : ["DM Sans", "sans-serif"],
        poppin: ["Poppins", "sans-serif"],
        clash : ['Clash Grotesk'],
        mori : ['PPMori', "sans-serif"]

      },

      lineHeight :{
        "75" : "75px",
      },

      height :{
        "150": "150px"
      },

      // button backgroundSizes
      backgroundSize :{
        "small" : "90px",
        "medium" : "125px",
        "large" : "199px"

      },

      
      screens: {
        'xs': '430px',
        'md': '768px',
        'sm': '640px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

    
      
    },
  },
  plugins: [],
}