/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      fontFamily: {
        roboto: ["roboto", "sans-sarif"],
        poppins: ["poppins", "sans-sarif"],
        monstt: ["Montserrat", "sans-sarif"],
      },
    },
  },
  plugins: [],
};
