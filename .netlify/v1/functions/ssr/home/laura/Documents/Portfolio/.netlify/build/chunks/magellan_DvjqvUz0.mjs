import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DmtTWcqB.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Magellan is a mockup developed at HackUPC 2024 for the challenge proposed by Travelperk. It is a social media application that enhances users’ experiences while traveling around the world by proposing different challenges for certain landmarks in a city.</p>\n<p>It also computes travel plans to help people coincide at certain places and informs users about nearby people, providing a platform to meet new people.</p>\n<p>You can see a more in depth description of the project <a href=\"https://jaumeros.me/projects/magellan/\">here</a>.</p>";

				const frontmatter = {"title":"Magellan","description":"Project developed for the Bitsxlamarato Hackathon in 2021","pubDate":"May 5 2024","heroImage":"/magellan.png","coauthors":"Lucas Aguiño, Jaume Ros, Malika Uteuliyeva"};
				const file = "/home/laura/Documents/Portfolio/src/content/project/magellan.md";
				const url = undefined;
				function rawContent() {
					return "Magellan is a mockup developed at HackUPC 2024 for the challenge proposed by Travelperk. It is a social media application that enhances users' experiences while traveling around the world by proposing different challenges for certain landmarks in a city.\n\nIt also computes travel plans to help people coincide at certain places and informs users about nearby people, providing a platform to meet new people.\n\nYou can see a more in depth description of the project [here](https://jaumeros.me/projects/magellan/).\n";
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
