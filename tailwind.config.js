module.exports = {
  purge: [
    './node_modules'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'very-dark-magenta': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
        'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
        'light-grayish-magenta': 'hsl(300, 24%, 96%)'
      }
    },
    screens: {
      'sm': '375px',
      'lg': '1440px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
