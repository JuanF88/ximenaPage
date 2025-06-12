/** @type {import('tailwindcss').Config} */
import aspectRatio from '@tailwindcss/aspect-ratio' // ✅ Importa el plugin

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [aspectRatio], // ✅ Agrega el plugin aquí
}
