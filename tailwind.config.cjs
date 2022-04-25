module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true
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
	plugins: []
};
