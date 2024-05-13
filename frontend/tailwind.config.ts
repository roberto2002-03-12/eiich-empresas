import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				nunito: ["var(--font-nunito)"],
				poppins: ["var(--font-poppins)"],
			},
			colors: {
				"jacksons-purple": {
					"50": "#ecf1ff",
					"100": "#dce4ff",
					"200": "#bfcbff",
					"300": "#99aaff",
					"400": "#707bff",
					"500": "#4f4fff",
					"600": "#402ffc",
					"700": "#3523df",
					"800": "#2d20b3", //
					"900": "#262084",
					"950": "#191452",
				},
				"chetwode-blue": {
					"50": "#f4f4fe",
					"100": "#ebebfc",
					"200": "#dadafa",
					"300": "#bebcf6",
					"400": "#9d95f0",
					"500": "#8f80eb", //
					"600": "#684bdc",
					"700": "#5939c8",
					"800": "#4a2fa8",
					"900": "#3e288a",
					"950": "#25185d",
				},
				"picton-blue": {
					"50": "#effaff",
					"100": "#def3ff",
					"200": "#b6eaff",
					"300": "#75dbff",
					"400": "#2ccaff",
					"500": "#00b9fe", //
					"600": "#0090d4",
					"700": "#0073ab",
					"800": "#00608d",
					"900": "#065074",
					"950": "#04334d",
				},
			},
		},
	},
	plugins: [],
}
export default config
