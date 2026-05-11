/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "orange" },
        },
      },
      animation: {
        typewriter: "typewriter 3s steps(25) 1s infinite alternate",
        blink: "blink 1s steps(2) infinite",
      },
    },
  },
  plugins: [],
};
