/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkElement: "hsl(209, 23%, 22%)",
        darkBg: "hsl(207, 26%, 17%)",
        lightText: "hsl(200, 15%, 8%)",
        lightInput: "hsl(0, 0%, 45%)",
        darkInput: "hsl(0, 0%, 70%)",
        lightBg: "hsl(0, 0%, 98%)",
        darkTextLightElement: "hsl(0, 0%, 100%)",
      },
    },
    screens: {
      xxs: "500px",
      // => @media (min-width: 376px) { ... }

      xs: "532px",
      // => @media (min-width: 532px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1792px",
      // => @media (min-width: 1792px) { ... }
    },
  },
  plugins: [],
};
