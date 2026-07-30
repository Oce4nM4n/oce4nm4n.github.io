/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          ai: '#7c3aed',
          physics: '#059669',
          math: '#d97706',
          programming: '#2563eb',
          general: '#64748b',
        },
      },
    },
  },
  plugins: [],
};
