/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#EEF1F5",
        panel: "#FFFFFF",
        input: "#F2F4F7",
        line: "#E4E7EC",
        navy: "#0F1B2E",
        navy2: "#17283F",
        sidebar: "#0F1B2E",
        orange: "#F2731E",
        orange2: "#FF8B3D",
        accent: "#F2731E",
        accent2: "#FF8B3D",
        ink: "#1A2233",
        muted: "#6B7280",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "14px",
      },
    },
  },
  plugins: [],
};
