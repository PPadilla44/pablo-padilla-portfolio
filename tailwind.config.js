

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dom": '#99B3D6',
        "accent": '#00335F',
        "btn": "rgba(0, 0, 0, 0.5);",
        "darkish": "rgba(0, 0, 0, 0.1);"
      },
      boxShadow: {
        "around": '0px 0px 10px 1px rgba(0, 0, 0, 0.5);'
      },
      backgroundImage: {
        'hero': "url('/public/images/hero.jpeg')"
      },
      backgroundPosition: {
        'hero-pos': 'left 50% top 35%'
      },
      fontFamily: {
        'spartan': ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [
  ],
}
