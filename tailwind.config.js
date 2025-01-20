/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            'primary': '#6366f1',
            'primary-dark': '#4338ca',
            'secondary': '#f0abfc',
            'secondary-dark': '#d8b4fe',
            'light': '#f3f4f6',
            'dark': '#1f2937',
            'dark-gray': '#4b5563',
            'light-gray': '#d1d5db',
          },
        },
      },
      plugins: [],
    }
