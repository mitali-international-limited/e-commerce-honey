/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        128: "75vh",
      },
    },
    colors: {
      white: "#FFF",
      primary: "#FAF3ED",
      secondary: "#638c28",
      tertiary: "#BE0EE2",
      "primary-red": "#F44141",
      black: "#000000",
      gray: "#a0aec0",
      honey: "#f9c901",
    },
  },
  plugins: [],
};
