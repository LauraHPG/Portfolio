import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead, d as addAttribute } from '../chunks/astro/server_DmtTWcqB.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_BUoAnZ7Y.mjs';
import { g as getCollection, S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/_astro_content_DnhKEIzl.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_Bqz5vjtM.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("galleryCollection")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-avfgzb42> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-avfgzb42": true })}${renderHead()}</head> <body data-astro-cid-avfgzb42> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-avfgzb42": true })} <main data-astro-cid-avfgzb42> <section data-astro-cid-avfgzb42> <ul data-astro-cid-avfgzb42> ${posts.map((post) => renderTemplate`<li data-astro-cid-avfgzb42> <a class="container"${addAttribute(`/gallery/${post.slug}/`, "href")} data-astro-cid-avfgzb42> <p class="title-date" data-astro-cid-avfgzb42></p><h1 data-astro-cid-avfgzb42>${post.data.title}</h1> <p class="date" data-astro-cid-avfgzb42> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-avfgzb42": true })} </p>  <p class="best-images" data-astro-cid-avfgzb42> <img${addAttribute(post.data.path + post.data.bestImages[0], "src")} data-astro-cid-avfgzb42> <img${addAttribute(post.data.path + post.data.bestImages[1], "src")} data-astro-cid-avfgzb42> <img${addAttribute(post.data.path + post.data.bestImages[2], "src")} data-astro-cid-avfgzb42> </p> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-avfgzb42": true })} </body></html>`;
}, "/home/laura/Documents/Portfolio/src/pages/gallery/index.astro", void 0);

const $$file = "/home/laura/Documents/Portfolio/src/pages/gallery/index.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
