/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          canvas: '#060608',
          bg: '#090a0f',
          surface: '#0d0e14',
          card: 'rgba(15, 16, 22, 0.75)',
          'card-hover': 'rgba(22, 24, 34, 0.85)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(212, 175, 55, 0.45)',
          muted: '#8e96a8',
          subtle: '#64748b',
          text: '#f1f5f9',
        },
        gold: {
          300: '#fae188',
          400: '#eec960',
          500: '#d4af37',
          600: '#b89326',
          700: '#8c6e18',
          glow: 'rgba(212, 175, 55, 0.35)',
        },
        cream: {
          50: '#faf8f5',
          100: '#f5f2eb',
          200: '#ede8df',
          300: '#dfd7c7',
          800: '#23211e',
          900: '#141416',
        },
        obsidian: {
          950: '#060608',
          900: '#0a0a0d',
          850: '#0f1015',
          800: '#16171e',
          700: '#23242e',
        },
        cyber: {
          cyan: '#d4af37',
          blue: '#c59b27',
          emerald: '#e5c158',
          purple: '#fae188',
          violet: '#d4af37',
          amber: '#eec960',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Outfit"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', '"Bodoni Moda"', 'Cinzel', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Bodoni Moda"', '"Syne"', 'serif'],
        editorial: ['"Bodoni Moda"', '"Playfair Display"', 'serif'],
        syne: ['"Syne"', 'sans-serif'],
        bodoni: ['"Bodoni Moda"', '"Playfair Display"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        cinzelDeco: ['"Cinzel Decorative"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-gold': '0 0 35px -5px rgba(212, 175, 55, 0.35)',
        'glow-cyan': '0 0 35px -5px rgba(212, 175, 55, 0.35)',
        'glow-purple': '0 0 35px -5px rgba(212, 175, 55, 0.25)',
        'glow-emerald': '0 0 35px -5px rgba(212, 175, 55, 0.25)',
        'card': '0 12px 36px -8px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.07)',
        'card-hover': '0 20px 48px -12px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(212, 175, 55, 0.45)',
        'inner-bevel': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-glow': 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
        'cyber-gradient': 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(250, 225, 136, 0.15) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'border-beam': 'border-beam 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'border-beam': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        }
      }
    },
  },
  plugins: [],
}
