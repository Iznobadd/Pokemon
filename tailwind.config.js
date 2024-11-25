/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgba(4, 6, 20, 0.85)",
        button: "#e54162",
      },
      borderColor: {
        primary: "rgba(255, 255, 255, 0.203)",
      },
      boxShadow: {
        background: "0 8px 32px 0 rgba(6, 8, 28, 0.37)",
      },
      colors: {
        primary: "#e54162",
      },
    },
  },
  plugins: [],
};
