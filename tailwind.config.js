/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./global/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006e44",
        // primaryLight: "#818cf8",
        // primaryDark: "#3730a3",
        primaryExtraLight:'#fcf6ed',
        primaryLight: "#fce2c2",
        primaryDark: "#bc6d0f",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1300px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "850px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "800px" },
      // => @media (max-width: 639px) { ... }
      mb: { max: "600px" },
      xmb: { max: "470px" },
    },
  },
  plugins: [],
};
