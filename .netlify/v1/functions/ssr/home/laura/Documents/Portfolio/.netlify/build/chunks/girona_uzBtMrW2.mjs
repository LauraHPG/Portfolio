import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DmtTWcqB.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Girona","description":"Pictures taken in Girona","pubDate":"1 Aug 2024","path":"../src/assets/girona/","bestImages":["IMG_9169_downsampled.JPG","IMG_9176_downsampled.png","IMG_9194_downsampled.JPG"]};
				const file = "/home/laura/Documents/Portfolio/src/content/galleryCollection/girona.md";
				const url = undefined;
				function rawContent() {
					return "";
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
