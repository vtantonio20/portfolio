module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
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
