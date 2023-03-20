/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          main: "#D34457",
          dark: "#E4484E",
        },
        secondary: "#222935",
        light: "#2196F3",
        googleBlue: "#4c8bf5",
        googleDark: "#0648f9",

        dark: "#343434",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  corePlugins: {
    preflight: false,
  },
};
