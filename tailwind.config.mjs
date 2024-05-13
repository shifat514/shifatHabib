/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['selector','[data-mode="dark'],
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
			},
			colors: {
				background:'#E9E9E9',
				primary: '#f8f8f8',
				accent:'#A6EC61',
				terminal:'#1E1F21',
				header:'#373A3E',
				body:'#FAFAFA',
				black: '#222222',
				black200: '#231F20',
				grey0:'#F7F7F7',
				grey1: '#d2d2d2',
				grey2: '#4D4D4D',
				grey3: '#494b4f',
				greenFlag:'#107043',
				success100:'#E6FEEF',
				green200: '#BBF7D0',
				fuchsia200: '#F5D0FE',
				fuchsia: '#C026D3',
				lime200: '#D9F99D',
				orange: '#EA580C',
				orange200: '#FED7AA',
				orange500:'#FF5C00',
				paragraph: '#6D6E71',
				paragraph200: '#BCBEC0',
				purple:'#7F00FF',
				red: '#E11D48',
				red200: '#FECDD3',
				stone200: '#E7E5E4',
				stone: '#57534E',
				teal:'#05CFDC',
				yellow100: '#CA8A04',
				yellow200: '#FEF08A',
				yellow: '#CA8A04',
			},
		},
	},
	plugins: [],
}

