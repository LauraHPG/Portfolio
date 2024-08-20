import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DmtTWcqB.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Bitsxlamarato is a hackathon organised by the UPC in collaboration with La Marató from TV3. It is a solidary program held each year centered in different medical and health topics.</p>\n<p>In 2021, the main topic was mental health, and we joined the challenge proposed by Programa Meet-up i Associació Sindrome d’Asperger de Catalunya centered in ASD (Autistic Spectrum Disorder), which asked for a program to help neurodivergent autistic people to help them to study and make a planning of their tasks.</p>\n<p>We developed a simple web application (which did not really work because of lack of knowledge at that time), which had the aim of create a schedule for the person. Their only task was to add the different activities with the corresponding name, the deadline and the type (exam, project, group project, exercises). Our application would do the scheduling, dividing certain tasks into different days, and prioritising certain tasks depending on the deadline and the type.</p>\n<p>Overall, although we were not able to finish the project, it was a really good experience in which I discovered how fun hackathons are, solidified my interest in health issues, and moreover, I got to know some of people who have become really important in my life.</p>\n<p><a href=\"https://github.com/LauraHPG/Bitsxlamarato\">Github repo</a> | <a href=\"https://fervent-heisenberg-2bd695.netlify.app/\">Website</a></p>";

				const frontmatter = {"title":"Organitza't","description":"Project developed for the Bitsxlamarato Hackathon in 2021","pubDate":"Dec 12 2021","heroImage":"/bitsxmarato-2021.png","coauthors":"Pere Carrillo, Sergio Blanco, Ignasi Juez"};
				const file = "/home/laura/Documents/Portfolio/src/content/project/bits-2021.md";
				const url = undefined;
				function rawContent() {
					return "Bitsxlamarato is a hackathon organised by the UPC in collaboration with La Marató from TV3. It is a solidary program held each year centered in different medical and health topics.\n\nIn 2021, the main topic was mental health, and we joined the challenge proposed by Programa Meet-up i Associació Sindrome d'Asperger de Catalunya centered in ASD (Autistic Spectrum Disorder), which asked for a program to help neurodivergent autistic people to help them to study and make a planning of their tasks.\n\nWe developed a simple web application (which did not really work because of lack of knowledge at that time), which had the aim of create a schedule for the person. Their only task was to add the different activities with the corresponding name, the deadline and the type (exam, project, group project, exercises). Our application would do the scheduling, dividing certain tasks into different days, and prioritising certain tasks depending on the deadline and the type.\n\nOverall, although we were not able to finish the project, it was a really good experience in which I discovered how fun hackathons are, solidified my interest in health issues, and moreover, I got to know some of people who have become really important in my life.\n\n[Github repo](https://github.com/LauraHPG/Bitsxlamarato) | [Website](https://fervent-heisenberg-2bd695.netlify.app/)\n";
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
