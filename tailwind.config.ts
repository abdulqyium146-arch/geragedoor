import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F3A',
          blue: '#1A4B8C',
          sky: '#2E7DD1',
          amber: '#F59E0B',
          amberHover: '#D97706',
          cream: '#FAFAF8',
          steel: '#64748B',
          slate: '#1E293B',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)',
        cta: '0 4px 20px rgba(245,158,11,0.35)',
        nav: '0 2px 12px rgba(11,31,58,0.15)',
      },
    },
  },
  plugins: [],
}

export default config
