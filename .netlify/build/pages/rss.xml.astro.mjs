import rss from '@astrojs/rss';
import { g as getCollection, S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/_astro_content_DnhKEIzl.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
	const posts = await getCollection('project');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/project/${post.slug}/`,
		})),
	});
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
