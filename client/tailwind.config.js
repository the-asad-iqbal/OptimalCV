/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            poppins: ["Poppins", "sans-serif"],
         },

         colors: {
            black: "#272729",
            almostBlack: "#191919",
            lightGray: "#F8F8F8",
            darkGray: "#3A3A3A",
            gray: "#4F4F4F",
            purple: "#7535FE",  
            charcoal: "#232627",
            darkCharcoal: "#141718",
         },
      },
   },
   plugins: [],
};
