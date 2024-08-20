import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DmtTWcqB.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"VIRVIG","description":"Working in the VIRViG-UPC research group, on a project with La Vall d'Hebron Hospital related with biomedical image visualization and analysis.","startDate":"Nov 23 2022","endDate":"Sep 13 2024","logoCompany":"/virvig-logo.png"};
				const file = "/home/laura/Documents/Portfolio/src/content/experience/virvig-vhir.md";
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
