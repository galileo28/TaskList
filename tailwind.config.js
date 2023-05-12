/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      ripple: (theme) => ({
        colors: theme('colors'),
        darken: 0.2,
        modifierTransition: 'background 0.9s',
        activeTransition: 'background 0s'
      })
    }
  },
  plugins: [
    require('tailwindcss-ripple')()
  ]
}
