import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Princey Glass Brand Colors
        olive: {
          DEFAULT: "#6B7C32",
          50: "#f7f8f3",
          100: "#eef1e7",
          200: "#dde3d0",
          300: "#c5d0a8",
          400: "#a8b87a",
          500: "#8ca252",
          600: "#6B7C32", // Primary olive green
          700: "#5a6630",
          800: "#4a522c",
          900: "#3f4528",
        },
        beige: {
          DEFAULT: "#F5F5DC",
          50: "#fefefe",
          100: "#fdfcf9",
          200: "#faf8f0",
          300: "#F5F5DC", // Primary light beige
          400: "#e8e4c8",
          500: "#d8d1a8",
          600: "#c4b980",
          700: "#a99d5f",
          800: "#8c7f4e",
          900: "#736842",
        },
        princey: {
          black: "#000000",
          white: "#FFFFFF",
          olive: "#6B7C32",
          beige: "#F5F5DC",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
