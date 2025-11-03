/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js,css}',
        './*.{html,js,css}',
    ],
    plugins: [
		require('@tailwindcss/typography'),
	],
}