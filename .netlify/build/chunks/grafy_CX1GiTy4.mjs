import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DmtTWcqB.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>One of my favorite things to do is listen to music, and I’m always looking for new artists and tracks. I also have a big passion for graphs and how they can visually represent data and relationships. So, after finishing my bachelor’s thesis, I decided to combine these interests into a project.</p>\n<p>Grafy is a web app that helps you discover new artists in a fun, interactive and visual way. I’ve built it using React, a technology that I’ve been wanting to learn for a long time. For the visualizations, I chose VisJs, thanks to the experience I gained from my thesis. The app pulls data from the Spotify API, which offers a lot of cool features.</p>\n<p>Grafy is still a work in progress, but if you’re interested in being a tester, I’d love to hear from you! Just drop me a message with the email linked to your Spotify account.</p>";

				const frontmatter = {"title":"Grafy","description":"Project combining the Spotify API and VisJs","pubDate":"Aug 1 2024","heroImage":"/grafy.png"};
				const file = "/home/laura/Documents/Portfolio/src/content/project/grafy.md";
				const url = undefined;
				function rawContent() {
					return "One of my favorite things to do is listen to music, and I’m always looking for new artists and tracks. I also have a big passion for graphs and how they can visually represent data and relationships. So, after finishing my bachelor’s thesis, I decided to combine these interests into a project.\n\nGrafy is a web app that helps you discover new artists in a fun, interactive and visual way. I’ve built it using React, a technology that I've been wanting to learn for a long time. For the visualizations, I chose VisJs, thanks to the experience I gained from my thesis. The app pulls data from the Spotify API, which offers a lot of cool features.\n\nGrafy is still a work in progress, but if you're interested in being a tester, I’d love to hear from you! Just drop me a message with the email linked to your Spotify account.\n";
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
