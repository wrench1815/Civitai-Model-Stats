import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', ...fontFamily.sans],
      serif: ['Poppins', ...fontFamily.serif]
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
} satisfies Config
