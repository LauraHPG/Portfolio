import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DmtTWcqB.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Now that I have finished my studies, I wanted to create a web page to share my projects, pictures and other milestones.</p>\n<p>I used <a href=\"https://astro.build/\">Astro</a> to create the web page.</p>\n<p><a href=\"https://github.com/LauraHPG/Portfolio\">Github repo</a></p>";

				const frontmatter = {"title":"Personal Website","description":"Personal web portfolio","pubDate":"August 1 2024","heroImage":"/personal-website.png"};
				const file = "/home/laura/Documents/Portfolio/src/content/project/personal-website.md";
				const url = undefined;
				function rawContent() {
					return "Now that I have finished my studies, I wanted to create a web page to share my projects, pictures and other milestones.\n\nI used [Astro](https://astro.build/) to create the web page.\n\n[Github repo](https://github.com/LauraHPG/Portfolio)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
