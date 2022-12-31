/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: { sm: "480px", md: "768px", lg: "976px" },
    extend: {
      colors: {
        darkMidnight: "hsl(208, 30%, 19%)",
        mossGreen: "hsl(151, 40%, 39%)",
        alpineEmerald: "hsl(151, 36%, 33%)",
        lichenTeal: "hsl(140, 42%, 56%)",
        wildflowerGreen: "hsl(90, 64%, 57%)",
      },
      backgroundImage: {
        hero: "url('https://images.unsplash.com/photo-1618556450991-2f1af64e8191')",
        pfp: "url('../imgs/profilepic.png')",
        floridaResort: "url('../imgs/oceanview.png')",
        lightNews: "url('../imgs/lightnews.png')",
        allieSite: "url('../imgs/alexalliewuollet.png')",
      },
      fontFamily: {
        bold: ["Poppins", "sans-serif"],
        handwritten: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
