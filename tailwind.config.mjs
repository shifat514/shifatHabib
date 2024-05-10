/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		// fontFamily: {
		// 	'mono': ['Consolas'],
		// },
		extend: {
			fontFamily: {
				ubuntu: ['ubuntu'],
				ubuntu_light: ['ubuntu-light'],
				ubuntu_bold:['ubuntu-bold']
			}
		},
	},
	plugins: [],
}

