/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          main: "#D34457",
          dark: "#E4484E",
        },
        secondary: "#222935",
        dark: "#343434",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
