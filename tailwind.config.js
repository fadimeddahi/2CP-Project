/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    prefix: '',
    theme: {
        extend: {
            keyframes: {
                fadeInOut: {
                    '0%, 100%': { opacity: '0' },
                    '10%, 90%': { opacity: '1' }
                }
            },
            animation: {
                'fade-in-out': 'fadeInOut 2s ease-in-out'
            }
        },
        textColor: {
            DEFAULT: 'white'
        }
    },
    plugins: [],
} 

export default config