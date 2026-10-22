/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b16",
        panel: "#17172a",
        paper: "#f7f4ff",
        action: "#f2364b",
        electric: "#54d6cf",
        warning: "#ffe85f"
      },
      boxShadow: {
        comic: "6px 6px 0 #f2364b"
      },
      screens: {
        xs: "420px"
      }
    }
  },
  plugins: []
};
