/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1609px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: `1700px` },
    },

    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        ubuntu: ["Ubuntu Mono", "monospace"],
      },
      backdropBlur: {
        xs: "1px",
      },
      colors: {
        "primary-orange": "#FF5722",
      },
    },
  },
  plugins: [],
};
