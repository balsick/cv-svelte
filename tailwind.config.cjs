const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '960px'
    },
    extend: {
      colors: {
        primary: '#673AB7',
        secondary: '#FF5722'
      }
    },
  },

  plugins: [],
};

module.exports = config;
