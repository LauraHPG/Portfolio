
				import createSSRHandler from './home/laura/Documents/Portfolio/.netlify/build/entry.mjs';
				export default createSSRHandler({"cacheOnDemandPages":false});
				export const config = {
					includedFiles: ['**/*'],
					name: 'Astro SSR',
					nodeBundler: 'none',
					generator: '@astrojs/netlify@5.4.0',
					path: '/*',
					preferStatic: true,
				};
			