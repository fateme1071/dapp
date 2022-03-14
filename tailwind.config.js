const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      zIndex: {
        1000: 1000
      },
      transitionDuration: {
        0: "0ms",
        250: "250ms",
        350: "350ms"
      },
      transitionDelay: {
        0: "0ms"
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-select": {
          "-webkit-tap-highlight-color": "transparent",
          "-webkit-touch-callout": "none",
          "-webkit-user-select": "none",
          "-khtml-user-select": "none",
          "-moz-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none"
        }
      });
    })
  ]
};
