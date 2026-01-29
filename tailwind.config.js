/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D9488', // Teal-600
        'primary-hover': '#0F766E', // Teal-700
        'primary-500': '#14B8A6', // Teal-500
        'secondary-500': '#F59E0B', // Amber-500 (Sun)
        'soft-blue': '#E0F2F1', // Teal-50 (Very light teal)
        'soft-teal': '#E0F2F1', // Teal-100
        'dark-blue': '#134E4A', // Teal-900
        'lagoon-blue': '#22D3EE', // Cyan-400
        'ocean-depths': '#164E63', // Cyan-900
        'coral-accent': '#F472B6', // Pink/Coral
        "tpa-primary-500": "#14B8A6",
        "tpa-secondary-500": "#F59E0B",
      },
      backgroundImage: {
        "tribal-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239ca3af' fill-opacity='0.07'%3E%3Cpath d='M20 25L0 5h5l15 15L35 5h5L20 25zM20 45L0 25h5l15 15L35 25h5L20 45z'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}