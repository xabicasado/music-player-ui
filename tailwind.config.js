/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      /* https://www.color-hex.com/color-palette/53188 */
      primary: {
        light: '#b3b3b3',
        DEFAULT: '#535353',
        dark: '#212121',
      },
      secondary: '#1db954',
      white: '#ffffff',
    },
  },
  plugins: [],
}
