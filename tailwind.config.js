module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        mono: {
          charcoal: "#152029",
          dark: "#0f191d",
          darker: "#181818",
          light: "#e0f6ff",
          sky: "#e0f6ff",
          white: "#FFFFFF",
          aqua: "#038373"
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
