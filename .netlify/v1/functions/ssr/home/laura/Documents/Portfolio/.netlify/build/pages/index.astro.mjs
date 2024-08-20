import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead, d as addAttribute } from '../chunks/astro/server_DmtTWcqB.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_BUoAnZ7Y.mjs';
import { g as getCollection, S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/_astro_content_DnhKEIzl.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_ror4ROfW.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_Bqz5vjtM.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const photoLaura = new Proxy({"src":"/_astro/fotoWeb.C5nA967F.jpg","width":3202,"height":3873,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/laura/Documents/Portfolio/imgs/fotoWeb.jpg";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("project")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const experience = (await getCollection("experience")).sort(
    (a, b) => b.data.startDate.valueOf() - a.data.endDate.valueOf()
  );
  const education = (await getCollection("education")).sort(
    (a, b) => b.data.startDate.valueOf() - a.data.endDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} <main data-astro-cid-j7pv25f6> <div id="main-banner" data-astro-cid-j7pv25f6> <h4 data-astro-cid-j7pv25f6>Hi 👋, I'm Laura Hui Pérez</h4> <h1 data-astro-cid-j7pv25f6>Computer Scientist</h1> <div id="intro" data-astro-cid-j7pv25f6> <div id="about-me" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Welcome to my website!</p> <p data-astro-cid-j7pv25f6>I'm a Computer Scientist, recently graduated from the Universitat Politècnica de Catalunya. My passion lies at the intersection of technology and biology. I'm particularly interested in how theoretical computer science and data science can be applied to solve complex biological and medical problems.</p> <p data-astro-cid-j7pv25f6>Other activities that I really enjoy are drawing and photography.</p> </div> <div id="pothoContainer" data-astro-cid-j7pv25f6> ${renderComponent($$result, "Image", $$Image, { "id": "photo", "width": 500, "src": photoLaura, "alt": "", "data-astro-cid-j7pv25f6": true })} </div> </div> </div> <section data-astro-cid-j7pv25f6> <div id="feature" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Feature Projects</h2> </div> <ul data-astro-cid-j7pv25f6> ${[
    posts[0],
    posts[3],
    posts[6],
    posts[8]
  ].map((post) => renderTemplate`<li data-astro-cid-j7pv25f6> <a${addAttribute(`/project/${post.slug}/`, "href")} data-astro-cid-j7pv25f6> <div class="img-container" data-astro-cid-j7pv25f6> <img${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-j7pv25f6> </div> <h4 class="title" data-astro-cid-j7pv25f6>${post.data.title}</h4> <p class="date" data-astro-cid-j7pv25f6> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-j7pv25f6": true })} </p> </a> </li>`)} </ul> </section> <section data-astro-cid-j7pv25f6> <div class="title-info" data-astro-cid-j7pv25f6> <div class="common-title" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Experience</h2> </div> <div class="common-info" data-astro-cid-j7pv25f6> ${experience.map((post) => renderTemplate`<div class="logo-name" data-astro-cid-j7pv25f6> <img${addAttribute(75, "width")}${addAttribute(75, "height")}${addAttribute(post.data.logoCompany, "src")} alt="" data-astro-cid-j7pv25f6> <h5 data-astro-cid-j7pv25f6>${post.data.title}</h5> </div>
								<p data-astro-cid-j7pv25f6>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.startDate, "data-astro-cid-j7pv25f6": true })} - ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.endDate, "data-astro-cid-j7pv25f6": true })} </p>
								<p data-astro-cid-j7pv25f6>${post.data.description}</p>`)} </div> </div> </section> <section data-astro-cid-j7pv25f6> <div class="title-info" data-astro-cid-j7pv25f6> <div class="common-title" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Education</h2> </div> <div class="common-info" data-astro-cid-j7pv25f6> ${education.map((post) => renderTemplate`<div class="logo-name" data-astro-cid-j7pv25f6> <img${addAttribute(75, "width")}${addAttribute(75, "height")}${addAttribute(post.data.logoCompany, "src")} alt="" data-astro-cid-j7pv25f6> <h5 data-astro-cid-j7pv25f6>${post.data.title}</h5> </div>
								<p data-astro-cid-j7pv25f6>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.startDate, "data-astro-cid-j7pv25f6": true })} - ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.endDate, "data-astro-cid-j7pv25f6": true })} </p>
								<p data-astro-cid-j7pv25f6>${post.data.description}</p>`)} </div> </div> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </body></html>`;
}, "/home/laura/Documents/Portfolio/src/pages/index.astro", void 0);

const $$file = "/home/laura/Documents/Portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
