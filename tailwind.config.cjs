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
        pfp: "url('src/assets/imgs/profilepic.png')",
      },
      fontFamily: {
        bold: ["Poppins", "sans-serif"],
        handwritten: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
