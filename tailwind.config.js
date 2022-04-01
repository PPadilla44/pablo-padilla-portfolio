

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "burg": '#A36768',
        "dom": '#BD1616',
        "btn": "rgba(0, 0, 0, 0.5);",
        "darkish": "rgba(0, 0, 0, 0.1);"
      },
      boxShadow: {
        "around": '0px 0px 10px 1px rgba(0, 0, 0, 0.5);'
      },
      backgroundImage: {
        'hero': "url('/public/images/hero.png')",
        "skills-grad": "linear-gradient(180deg, rgba(255, 255, 255, 0) 10%, rgba(163, 103, 104, 1) 100%)",
      },
      backgroundPosition: {
        'hero-pos': 'left 10% top 40%'
      },
      fontFamily: {
        'spartan': ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [
  ],
}
