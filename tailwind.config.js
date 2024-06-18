/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "bg-sky-800",
    "text-sky-200",
    "bg-rose-800",
    "text-rose-200",
    "bg-emerald-800",
    "text-emerald-200",
  ],
};
