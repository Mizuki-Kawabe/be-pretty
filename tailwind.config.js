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
        tan: "#DDAF94",
        deepTan: "#ab594b",
        green: "#a8b29e",
        lightGreen: "#f4fcf4",
        black: "#393a36",
        white: "#ffffff",
        offWhite: "#f5f4f3",
        beige: "#ededeb",
        blue: "#9ba6c8",
        purple: "#5a6999",
        yellow: "#e0b35a",
        lightPink: "#f4ecec",
      },
    },
  },
  plugins: [require("daisyui")],
};
