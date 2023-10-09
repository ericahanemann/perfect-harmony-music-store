/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        secondarylight: "var(--color-secondary-light)",
        textcolor: "var(--color-text)",
        highlights: "var(--color-highlights)",
      },
      dropShadow: {
        "3xl": "0 15px 15px rgb(0 0 0 / 0.3)",
        "5xl": "-35px 35px 65px rgb(255 255 255  / 0.4)"
      },
    },
  },
  plugins: [],
};
