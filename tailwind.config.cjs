const forms = require('@tailwindcss/forms');

const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],

	theme: {
		extend: {}
	},

	plugins: [forms, ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],
	darkMode: 'class'
};

module.exports = config;
