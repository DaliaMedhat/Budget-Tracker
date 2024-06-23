/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      red: {
        light: "rgb(220 38 38)",
        dark: "rgb(153 27 27)",
      },

      green: {
        light: "rgb(34 197 94)",
        dark: "rgb(21 128 61)",
      },
    },
    fontFamily: {
      playful: ["Comic Sans MS", "Comic Sans", "cursive"],
    },
  },
};
export const plugins = [];
