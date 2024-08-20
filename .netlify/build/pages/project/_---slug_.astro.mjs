import { e as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead, d as addAttribute, f as renderSlot } from '../../chunks/astro/server_DmtTWcqB.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_DnhKEIzl.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../../chunks/Footer_BUoAnZ7Y.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_Bqz5vjtM.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage, coauthors } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })} <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`<img${addAttribute(1020, "width")}${addAttribute(510, "height")}${addAttribute(heroImage, "src")} alt="" data-astro-cid-bvzihdzo>`} </div> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </div> <h1 data-astro-cid-bvzihdzo>${title}</h1> <hr data-astro-cid-bvzihdzo> ${coauthors && renderTemplate`<div id="coauthors" data-astro-cid-bvzihdzo> <h5 data-astro-cid-bvzihdzo>Co-authors</h5> <ul data-astro-cid-bvzihdzo> ${coauthors.split(",").map((name, index) => renderTemplate`<li${addAttribute(index, "key")} data-astro-cid-bvzihdzo>${name.trim()}</li>`)} </ul> </div>`} </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} </body></html>`;
}, "/home/laura/Documents/Portfolio/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const posts = await getCollection("project");
  const { slug } = Astro2.params;
  const post = posts.find((page) => page.slug === slug);
  if (!post) return Astro2.redirect("/404");
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/home/laura/Documents/Portfolio/src/pages/project/[...slug].astro", void 0);

const $$file = "/home/laura/Documents/Portfolio/src/pages/project/[...slug].astro";
const $$url = "/project/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
