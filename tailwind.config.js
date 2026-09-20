/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050B18",
          900: "#081226",
          800: "#0B1B33",
          700: "#0F2A4D",
          600: "#123863",
        },
        blue: {
          accent: "#2F8CFF",
          bright: "#3B9BFF",
          soft: "#EAF3FF",
        },
        cyan: {
          glow: "#5FD4F4",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(9, 20, 40, 0.06), 0 8px 24px rgba(9, 20, 40, 0.06)",
        "card-hover": "0 8px 16px rgba(9, 20, 40, 0.08), 0 16px 40px rgba(9, 20, 40, 0.12)",
        glow: "0 0 0 1px rgba(59, 155, 255, 0.35), 0 12px 32px rgba(47, 140, 255, 0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
