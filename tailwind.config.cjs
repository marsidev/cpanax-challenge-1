/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/line-clamp')
	],
	safelist: [
		'grid-cols-1',
		'grid-cols-2',
		'grid-cols-3',
		'grid-cols-4',
		'grid-cols-5',
		'grid-cols-6',
		'grid-cols-7',
		'grid-cols-8',
		'line-clamp-1',
		'line-clamp-2',
		'line-clamp-3',
		'line-clamp-4',
		'line-clamp-5',
		'line-clamp-6',
		'line-clamp-7',
		'line-clamp-8'
	]
}
