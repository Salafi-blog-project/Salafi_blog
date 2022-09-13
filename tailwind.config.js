

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  screens: {
    'sm': '480px',
    // => @media (min-width: 640px) { ... }

    'xm': '400px',
    // => @media (min-width: 640px) { ... }

    'md': '880px',
    // => @media (min-width: 640px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }
  },
  plugins: [],
};
