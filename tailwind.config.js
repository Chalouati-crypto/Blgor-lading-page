module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      desktop: "75em",
      "big-desktop": "90em",
    },
    colors: {
      "light-red-cta-text": "hsl(356, 100%, 66%)",
      "very-light-red-cta-hover-bg": "hsl(355, 100%, 74%)",
      "very-dark-blue-headings": "hsl(208, 49%, 24%)",
      white: "#fff",
      "grayish-blue-footer-text": "hsl(240, 2%, 79%)",
      "nav-gray": "hsla(240, 2%, 79%,40%)",
      "very-dark-grayish-blue-body-copy": "hsl(207, 13%, 34%)",
      "very-dark-black-blue-footer-bg": "hsl(240, 10%, 16%)",

      "gradient-hero-very-light-red": "hsl(13, 100%, 72%)",
      "gradient-hero-light-red": "hsl(353, 100%, 62%)",
      "gradient-body-dark-blue": "hsl(237, 17%, 21%)",
      "gradient-body-desaturated-dark-blue": "hsl(237, 23%, 32%)",
    },
    fontFamily: {
      overpass: "'Overpass', sans-serif",
      ubuntu: "'Ubuntu', sans-serif",
    },
    extend: {
      fontsize: {
        "body-copy": "1rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
