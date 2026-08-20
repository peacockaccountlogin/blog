// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Peacock TV Guide',

			sidebar: [
				{
					label: 'Peacock TV',
					items: [
						{
							label: 'Peacock TV Account Login',
							slug: 'index',
						},
					],
				},
			],
		}),
	],
});