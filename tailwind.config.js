/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tech: {
          dark: "#020617",
          primary: "#2563EB",
          secondary: "#1E40AF",
          light: "#3B82F6",
          card: "#0F172A",
        },
      },
    },
  },
  plugins: [],
};
