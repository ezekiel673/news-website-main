// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00001A",
        accent: "#F15E50",
        grayishBlue: "#C5C6CE",
        darkGrayishBlue: "#5D5F79",
      },
    },
  },
  plugins: [],
}

