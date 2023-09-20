/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				coffee: '#0C0805',
				coffeeLight: '#302014',
				coffeeLighter: '#594C42',
				bogoBlack: '#0a0a0a',
			},
			transform: {},
			animation: {
				'bogo-fade': 'fadeIn 1.5s cubic-bezier(.36,.19,.28,.97) forwards',
				'bogo-fade-slow': 'fadeInSlow 3s cubic-bezier(.36,.19,.28,.97) forwards',
				'bogo-bg': 'newBgColor 0.25s ease-in-out forwards',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0.4 },
					'100%': { opacity: 1 },
				},
				fadeInSlow: {
					'0%, 66%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				newBgColor: {
					from: { backgroundColor: '#0C0805' },
					to: { backgroundColor: '#302014' },
				},
			},
		},
	},
	plugins: ['prettier-plugin-tailwindcss'],
};
