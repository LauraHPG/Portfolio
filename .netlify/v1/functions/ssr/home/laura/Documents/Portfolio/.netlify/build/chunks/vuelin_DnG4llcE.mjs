import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DmtTWcqB.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>This project was developed at the HackUPC 2023 Hackathon for the challenge proposed by Vueling, which consisted in creating a game that could be played in a plane without internet.</p>\n<p>We developed a drawing game inpired in Gartic Phone and Pinturillo that was divided into 3 steps:</p>\n<ol>\n<li>The first one prompted the user with a word related to the destination of the flight, and with that, the user had to had to write a sentence.</li>\n<li>The sentences were sent to random players, and each of them had to draw the sentence received.</li>\n<li>Finally, all the sentences with the corresponding drawings were shown to everybody.</li>\n</ol>\n<p>The main challenges were the new technologies used by every member of the group. Marc had to learn how to work with the html canvas, Pere had to learn how to connect the different endpoints via bluetooth (host-players), and finally myself, where I had to implement the Django server where the information would be sent and received.</p>";

				const frontmatter = {"title":"Vuelín","description":"Project developed for the Bitsxlamarato Hackathon in 2021","pubDate":"May 14 2023","heroImage":"/vuelin.png","coauthors":"Pere Carrillo, Paula Grau, Marc Ordóñez"};
				const file = "/home/laura/Documents/Portfolio/src/content/project/vuelin.md";
				const url = undefined;
				function rawContent() {
					return "This project was developed at the HackUPC 2023 Hackathon for the challenge proposed by Vueling, which consisted in creating a game that could be played in a plane without internet.\n\nWe developed a drawing game inpired in Gartic Phone and Pinturillo that was divided into 3 steps:\n\n1. The first one prompted the user with a word related to the destination of the flight, and with that, the user had to had to write a sentence.\n2. The sentences were sent to random players, and each of them had to draw the sentence received.\n3. Finally, all the sentences with the corresponding drawings were shown to everybody.\n\nThe main challenges were the new technologies used by every member of the group. Marc had to learn how to work with the html canvas, Pere had to learn how to connect the different endpoints via bluetooth (host-players), and finally myself, where I had to implement the Django server where the information would be sent and received.\n";
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
