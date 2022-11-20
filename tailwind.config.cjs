/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: { sm: "480px", md: "768px", lg: "976px" },
    extend: {
      colors: {
        deepViolet: "hsl(269, 100%, 50%)",
        iceWhite: "hsl(197, 100%, 95%)",
        softGray: "hsl(197, 0%, 95%)",
        contrastGray: "hsl(197, 0%, 79%)",
      },
      backgroundImage: {
        hero: "url('https://images.unsplash.com/photo-1618556450991-2f1af64e8191')",

        techHTML: "url('src/assets/imgs/techs/html5.svg')",
        techCSS: "url('src/assets/imgs/techs/css3.svg')",
        techJS: "url('src/assets/imgs/techs/javascript.svg')",
        techVSC: "url('src/assets/imgs/techs/visualstudiocode.svg')",
        techReact: "url('src/assets/imgs/techs/react.svg')",
        techWebpack: "url('src/assets/imgs/techs/webpack.svg')",
        techVue: "url('src/assets/imgs/techs/vuedotjs.svg')",
        techVite: "url('src/assets/imgs/techs/vite.svg')",
        techFirebase: "url('src/assets/imgs/techs/firebase.svg')",
        techTailwind: "url('src/assets/imgs/techs/tailwindcss.svg')",
        techBulma: "url('src/assets/imgs/techs/bulma.svg')",
      },
      fontFamily: {
        bold: ["Poppins", "sans-serif"],
        handwritten: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
