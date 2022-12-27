import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			// adapterFallback: 'index.html',
			base: '/',
			scope: '/',
			/* enable sw on development */
			devOptions: {
				enabled: process.env.SW_DEV === 'true'
			},
			includeAssets: [
				'favicon.ico',
				'favicon.svg',
				'favicon-16x16.png',
				'favicon-32x32.png',
				'apple-touch-icon.png',
				'safari-pinned-tab.svg'
			],
			manifest: {
				name: 'Svelte Starter Kit',
				short_name: 'svelte-starter-kit',
				description: 'Svelte starter template project',
				lang: 'en',
				scope: '/',
				start_url: '/',
				display: 'standalone',
				theme_color: '#ffffff',
				background_color: '#ffffff',
				icons: [
					{
						src: '/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					},
					{
						src: '/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable'
					}
				]
			},
			workbox: {
				// globPatterns: ['posts.json', '**/*.{js,css,ico,png,svg,webp,avif,woff,woff2,html}'],
				// globIgnores: ["**/node_modules/**/*", '**/sw*', '**/workbox-*']
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
