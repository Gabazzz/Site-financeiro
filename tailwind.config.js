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
        background: 'rgb(var(--bg-color) / <alpha-value>)',
        surface: 'rgb(var(--surface-color) / <alpha-value>)',
        elevated: 'rgb(var(--surface-elevated) / <alpha-value>)',
        borda: 'rgb(var(--border-color) / <alpha-value>)',
        
        primary: {
          DEFAULT: 'rgb(var(--primary-color) / <alpha-value>)',
          light: 'rgb(var(--primary-color) / <alpha-value>)',
          dark: 'rgb(var(--primary-color) / <alpha-value>)',
        },
        entrada: 'rgb(var(--success-color) / <alpha-value>)',
        saida: 'rgb(var(--error-color) / <alpha-value>)',
        reserva: 'rgb(var(--primary-color) / <alpha-value>)',
        sucesso: 'rgb(var(--success-color) / <alpha-value>)',
        erro: 'rgb(var(--error-color) / <alpha-value>)',
        aviso: 'rgb(var(--warning-color) / <alpha-value>)',

        tx: {
          main: 'rgb(var(--text-main) / <alpha-value>)',
          sec: 'rgb(var(--text-secondary) / <alpha-value>)',
          mut: 'rgb(var(--text-muted) / <alpha-value>)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
