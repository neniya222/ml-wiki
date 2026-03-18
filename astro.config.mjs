// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'MiLight Server Wiki',

			favicon: '/favicon.png',

			customCss: [
				'./src/custom.css',
			],

			components: {
        PageTitle: './src/components/PageTitleWithAd.astro',
        Footer: './src/components/FooterWithAd.astro',
        Sidebar: './src/components/SidebarWithAd.astro',
	    },

			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '🛡️ 利用規約',
					link: '/rules',
				},
				{
					label: '🚪 参加方法',
					link: '/join',
				},
				{
					label: '✨ 独自機能',
					items: [
						{ label: '🚀 テレポート機能', link: '/features/tp' },
						{ label: '🛡️ 土地保護', link: '/features/claims' },
						{ label: '🏆 スキル機能', link: '/features/skills' },
						{ label: '🥚 エッグキャッチャー', link: '/features/eggc' },
					],
				},
			],
		}),
	],
});
