import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'VIOLET',
			customCss: ['./src/styles/tailwind.css'],
			logo: {
				src: './src/assets/thumbnail.webp',
			},
			favicon: '/thumbnail.ico',
			sidebar: [
				{
					label: 'Article',
					autogenerate: { directory: 'article' },
				},
				{
					label: 'Short',
					autogenerate: { directory: 'short' },
				},
			],
			editLink: {
				baseUrl: 'https://github.com/withastro/starlight/edit/main/',
			},
			social: {
				github: 'https://github.com/lnbiuc',
				'x.com': 'https://x.com/@ZZSLL_53387',
			},
			pagination: false,
		}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
