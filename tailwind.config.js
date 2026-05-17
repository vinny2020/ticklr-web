/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        bebas: ['var(--font-bebas)', 'cursive'],
      },
      colors: {
        bg: '#ffffff',
        ink: {
          DEFAULT: '#0a0a0a',
          2: '#1a1a1a',
          3: '#4a4a4a',
          4: '#8a8a8a',
        },
        amber: {
          DEFAULT: '#F5C842',
          ink: '#1a1a1a',
        },
        paper: {
          DEFAULT: '#EFEAE0',
          surface: '#F4EFE3',
          surface2: '#EFE9DB',
          card: '#FAF5E8',
          cardAlt: '#FAF4E2',
          highlight: '#FBF7EE',
        },
        warmink: {
          DEFAULT: '#1A1F2A',
          2: '#28241D',
          3: '#3D4753',
          4: '#6B5F4F',
          5: '#9A8E7C',
          6: '#B5A98E',
        },
        mustard: '#A7791C',
        burgundy: '#9C3F3C',
        muteblue: '#3F5C7A',
        forest: '#4F6B47',
        terracotta: '#B26342',
      },
      borderColor: {
        ink: '#0a0a0a',
        soft: 'rgba(10,10,10,0.10)',
        warm: 'rgba(60,42,20,0.10)',
        warmStrong: 'rgba(60,42,20,0.18)',
      },
    },
  },
  plugins: [],
}
