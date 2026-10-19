/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury / Editorial Design Tokens
        alabaster: '#F9F8F6',
        charcoal: '#1A1A1A',
        taupe: '#EBE5DE',
        warmgrey: '#6C6863',
        gold: {
          DEFAULT: '#D4AF37',
          hover: '#C5A028',
          light: '#F4E8C1',
        },
        brand: {
          50: '#F9F8F6',
          100: '#EBE5DE',
          200: '#dec2ab',
          300: '#cca283',
          400: '#bd8460',
          500: '#D4AF37',
          600: '#A77B1E',
          700: '#6C6863',
          800: '#3D3A37',
          900: '#1A1A1A',
          950: '#111111',
        },
        forest: {
          50: '#f3f6f4',
          600: '#405948',
          800: '#2b3d31',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      letterSpacing: {
        'widest-luxury': '0.25em',
        'extra-luxury': '0.3em',
      }
    },
  },
  plugins: [],
}
