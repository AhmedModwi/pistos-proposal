/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                pistos: {
                    black: '#1a1a1a',     /* Charcoal Black */
                    red: '#A02B2E',       /* Deep Crimson */
                    bg: '#FAFAFA',        /* Alabaster */
                    surface: '#FFFFFF',   /* Pure White */
                    border: '#E5E7EB',    /* Light border */
                    muted: '#6B7280'      /* Muted text */
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
                'ar-heading': ['Tajawal', 'sans-serif'],
            },
            borderRadius: {
                DEFAULT: '0.25rem',
                md: '0.375rem',
                lg: '0.5rem',
            }
        }
    },
    plugins: [],
}
