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
        textcolor: "var(--color-text)",
        highlights: "var(--color-highlights)",
      },
      dropShadow: {
        "3xl": "0 25px 25px rgb(0 0 0 / 0.5)",
      },
    },
  },
  plugins: [],
};
