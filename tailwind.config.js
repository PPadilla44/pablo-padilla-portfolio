

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "60-light": '#E9E8E8',
        "30-light": '#FFFFFF',
        "10-light": '#BD1616',
        "btn": "rgba(0, 0, 0, 0.5);",
        "darkish": "rgba(0, 0, 0, 0.1);"
      },
      boxShadow: {
        "around": '0px 0px 10px 1px rgba(0, 0, 0, 0.5);'
      },
      backgroundImage: {
        'hero': "url('/public/images/hero.png')",
      },
      backgroundPosition: {
        'hero-pos': 'left 10% top 40%'
      },
      fontFamily: {
        'spartan': ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
}
