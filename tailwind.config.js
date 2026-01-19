/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37", // Metallic Gold
        "background-light": "#F5F5F0",
        "background-dark": "#05070A",
        midnight: "#0A0E14",
        stellar: "#1B2430"
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
}
