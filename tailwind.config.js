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
          canvas: '#060709',
          bg: '#08090d',
          surface: '#0d0f15',
          card: 'rgba(15, 18, 26, 0.75)',
          'card-hover': 'rgba(20, 24, 36, 0.85)',
          border: 'rgba(255, 255, 255, 0.07)',
          'border-hover': 'rgba(56, 189, 248, 0.35)',
          muted: '#8e96a8',
          subtle: '#64748b',
          text: '#f1f5f9',
        },
        cyber: {
          cyan: '#38bdf8', // refined electric cyan/sky
          blue: '#2563eb',
          emerald: '#10b981',
          purple: '#8b5cf6',
          violet: '#6366f1',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif']
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(56, 189, 248, 0.2)',
        'glow-purple': '0 0 35px -5px rgba(139, 92, 246, 0.2)',
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.2)',
        'card': '0 12px 36px -8px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.07)',
        'card-hover': '0 20px 48px -12px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(56, 189, 248, 0.35)',
        'inner-bevel': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-glow': 'radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
        'cyber-gradient': 'linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(99, 102, 241, 0.12) 100%)',
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
