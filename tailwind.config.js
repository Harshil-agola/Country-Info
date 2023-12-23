/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "inputShadow": "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;"
      }
    },
  },
  plugins: [],
}

