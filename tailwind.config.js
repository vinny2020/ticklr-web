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
      },
      colors: {
        bg: '#fafaf7',
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
      },
      borderColor: {
        ink: '#0a0a0a',
        soft: 'rgba(10,10,10,0.10)',
      },
    },
  },
  plugins: [],
}
