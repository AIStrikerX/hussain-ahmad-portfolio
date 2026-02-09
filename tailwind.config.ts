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
        darkblue: '#003366',
        royalblue: '#4169E1',
        skyblue: '#87CEEB',
        navyblue: '#002366',
        teal: '#008080',
        emerald: '#009B77',
        crimson: '#DC143C',
        gold: '#FFD700',
        lightblue: '#ADD8E6',
        sectionbg: '#F0F8FF',
      },
    },
  },
  plugins: [],
}
export default config
