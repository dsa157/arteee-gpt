/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#0f172a',
        },
        card: {
          DEFAULT: '#f8fafc',
          dark: '#1e293b',
        },
      },
    },
  },
  plugins: [],
}
