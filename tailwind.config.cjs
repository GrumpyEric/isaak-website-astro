const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      screens: {
        mobile: {'max': '1279px'},
        desktop: '1280px',
      },

      height: {
        '1/10': '10%',
      },

      width: {
        '1/10': '10%',
      },

      padding: {
        '1/4': '25%',
        '1/8': '12.5%',
        '1/16': '6.25%',
      },

      spacing: {
        '5/8': '62.5%',
        '6/10': '60%',
        '55/100': '55%',
      },

      colors: {
        primary: '#D6CBBA',
        text: '#0F1516',
        accent: '#0F6567',
      },

      keyframes: {
        'slideUp': {
          '0%': { transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(0)' }
        },

        'slideRight': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },

        'slideRightShake': {
          '0%': { transform: 'translateX(-100%)' },
          '40%': { transform: 'translateX(40%)' },
          '55%': { transform: 'translateX(-30%)' },
          '70%': { transform: 'translateX(15%)' },
          '85%': { transform: 'translateX(-5%)' },
          '100%': { transform: 'translateX(0)' }
        },

        'grow': {
          '0%': { transform: 'scale(0%)' },
          '100%': { transform: 'scale(100%)' }
        },
      },

      animation: {
        'slideInUp': 'slideUp 0.75s',
        'slideInRight': 'slideRight 0.75s ease-out',
        'growZeroToFull': 'grow 0.75s',
      },

      fontFamily: {
        osaka: ["Osaka", ...defaultTheme.fontFamily.sans],
      },    

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
	plugins: [],
}
