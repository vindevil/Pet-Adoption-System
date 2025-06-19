/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        amatic: ["Verdant"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#f97316",

          secondary: "#c2410c",

          accent: "#fbbf24",

          neutral: "#e7e5e4",

          "base-100": "#1f2937",

          info: "#6791E0",

          success: "#51DB8B",

          warning: "#E18E19",

          error: "#F0667D",

        }
      },
      {
        light: {
          primary: "#f97316",

          secondary: "#c2410c",

          accent: "#170075",

          neutral: "#1C161D",

          "base-100": "#e7e5e4",

          info: "#6791E0",

          success: "#51DB8B",

          warning: "#E18E19",

          error: "#F0667D",

        }
      }
    ]
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
