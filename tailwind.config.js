/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1536px',
      },
      colors: {
        light1: '#FFFFFF',
        light2: '#F5F0EC',
        light3: '#DCC1AB',
        greenColor: '#1B5B31',
        blackColor: '#111111',
      },
      letterSpacing: {
        spacing1: '0.01em',
        spacing2: '0.02em',
        spacing3: '0.03em',
        spacing5: '0.05em',
      },
      dropShadow: {
        heading1: '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        sweepX: 'sweepX 2.5s ease-in-out infinite',
        sweepY: 'sweepY 2.5s ease-in-out infinite',
      },
      keyframes: {
        sweepX: {
          '0%': { opacity: 0, transform: 'translateX(-10px)' },
          '50%': { opacity: 1, transform: 'translateX(0)' },
          '100%': { opacity: 0, transform: 'translateX(20px)' },
        },
        sweepY: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '50%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(20px)' },
        },
      },
    },
  },
  plugins: [],
};
