module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '100%',
				md: '100%',
				lg: '100%',
				xl: '1500px',
				'2xl': '1500px',
				'3xl': '1500px'
			}
		},
		extend: {
			borderWidth: {
				screen: '500px'
			},
			screens: {
				'3xl': '2000px'
			}
		}
	},
	plugins: [require('@tailwindcss/container-queries')]
};
