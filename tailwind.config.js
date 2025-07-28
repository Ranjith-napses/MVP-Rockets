

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
    fadeInImage: {
      '0%': { opacity: '0', transform: 'translateY(40px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
  },
  animation: {
    fadeInImage: 'fadeInImage 1s ease-out forwards',
  },
       colors: {
        
          pgown:"#3A0E6D",
          pinko:"#E74177",
          gr:"#7A7A7A"
        
      },
         fontFamily: {
      pop: ['Poppins', 'sans-serif'],
    },
     keyframes: {
      fadeInImage: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
    animation: {
      fadeInImage: "fadeInImage 1.8s ease-in forwards",
    },



        slideInLeftCenter: {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      
      animation: {
        slideInLeftCenter: "slideInLeftCenter 0.8s ease-out forwards",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],



}