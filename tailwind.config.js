/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['var(--font-poppins)'],
                inria: ['var(--font-inria)'],
            },
            maxWidth: {
                '8xl': '90rem', // 1440px or set your desired value
            },
        },
    },
    plugins: [],
};
