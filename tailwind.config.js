/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      tan: "#DDAF94",
      deepTan: "#ab594b",
      green: "#a8b29e",
      lightGreen: "#f4fcf4",
      black: "#4F4846",
      white: "#ffffff",
      offWhite: "#f5f4f3",
      blue: "#9ba6c8",
      yellow: "#e0b35a",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
