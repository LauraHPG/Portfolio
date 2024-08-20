import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead, d as addAttribute } from '../chunks/astro/server_DmtTWcqB.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_BUoAnZ7Y.mjs';
import { g as getCollection, S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/_astro_content_DnhKEIzl.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_Bqz5vjtM.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("project")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-bmw2ip2z> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-bmw2ip2z": true })}${renderHead()}</head> <body data-astro-cid-bmw2ip2z> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bmw2ip2z": true })} <main data-astro-cid-bmw2ip2z> <section data-astro-cid-bmw2ip2z> <ul data-astro-cid-bmw2ip2z> ${posts.map((post) => renderTemplate`<li data-astro-cid-bmw2ip2z> <a${addAttribute(`/project/${post.slug}/`, "href")} data-astro-cid-bmw2ip2z> <div class="img-container" data-astro-cid-bmw2ip2z> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-bmw2ip2z> </div> <h4 class="title" data-astro-cid-bmw2ip2z>${post.data.title}</h4> <p class="date" data-astro-cid-bmw2ip2z> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-bmw2ip2z": true })} </p> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bmw2ip2z": true })} </body></html>`;
}, "/home/laura/Documents/Portfolio/src/pages/project/index.astro", void 0);

const $$file = "/home/laura/Documents/Portfolio/src/pages/project/index.astro";
const $$url = "/project";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
