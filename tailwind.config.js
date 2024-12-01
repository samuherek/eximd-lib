/** @type {import('tailwindcss').Config} */
// import { defaultTheme } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    content: ["./src/**/*.{html,tsx}", "./index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
