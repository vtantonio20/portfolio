module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screen: {
        'xs': '375px',
        // => @media (min-width: 375px) { ... }

      },
      colors: {
        mono: {
          charcoal: "#152029",
          dark: "#0f191d",
          darker: "#181818",
          light: "#e0f6ff",
          sky: "#e0f6ff",
          white: "#FFFFFF",
          aqua: "#038373",
          aqualight: "#00CC8E",
          navy: "#001829",
        }
      },
      fontFamily: {
        body: ['Oswald']
      },
      animation:{
        blob: "blob 5s infinite "
      },
      keyframes: {

        blob: {
          "0%": {
            transform: " scale(1)", opacity: 1
          },
          "50%": {
            transform: " scale(1.05)", opacity: 0,

          },
          "100%": {
            transform: " scale(1)", opacity: 1,
          }
        }
      },

    },
  },
  plugins: [],
}
