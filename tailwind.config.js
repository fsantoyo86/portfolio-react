module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        project1:
          "url('./img/books.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
