import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DmtTWcqB.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Asturias","description":"Pictures taken in Oviedo, Gijon and Teverga","pubDate":"7 Aug 2024","path":"../src/assets/asturies/","bestImages":["IMG_9204_downsampled.png","IMG_9329_downsampled.png","IMG_9493_downsampled.png"]};
				const file = "/home/laura/Documents/Portfolio/src/content/galleryCollection/asturies.md";
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
