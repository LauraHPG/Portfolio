import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_DmtTWcqB.mjs';
import { a as getImage } from './_astro_assets_ror4ROfW.mjs';
import 'clsx';

const Astro__ZMxtYj = new Proxy({"src":"/_astro/1722417156856.CZsBukuC.png","width":1842,"height":940,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/laura/Documents/Portfolio/src/content/project/image/jedi-project/1722417156856.png";
							}
							
							return target[name];
						}
					});

const Astro__15q5vG = new Proxy({"src":"/_astro/1722417168375.DmrHaxcD.png","width":1842,"height":772,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/laura/Documents/Portfolio/src/content/project/image/jedi-project/1722417168375.png";
							}
							
							return target[name];
						}
					});

const Astro__Z1EDK3K = new Proxy({"src":"/_astro/1722417144974.DHdNg0Xt.png","width":1842,"height":820,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/laura/Documents/Portfolio/src/content/project/image/jedi-project/1722417144974.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image/jedi-project/1722417156856\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image/jedi-project/1722417156856.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZMxtYj, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image/jedi-project/1722417168375\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image/jedi-project/1722417168375.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__15q5vG, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image/jedi-project/1722417144974\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image/jedi-project/1722417144974.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1EDK3K, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<p>The JEDI Academy at UPC offered a course in HTML, CSS and JavaScript, in which I took part in July 2021 and developed this website as the final project.</p>\n<p>Besides the three basic tools for web development, some other ones that I got to learn and use were:</p>\n<ul>\n<li><strong>Heroku</strong>: A web in which you can store and modify JSON public files in order to make accessible from any computer.</li>\n<li><strong>Netlify</strong>: A platform that enabled me to deploy the website to the internet.</li>\n<li><strong>Bootstrap</strong>: A simple framework to get to know how frameworks work.</li>\n</ul>\n<p>The aim of the website was to have a log in and sign up page with users and passwords stored in the Heroku platform (a simple way to start to understand how APIs work, but not really suitable for a real project in which passwords must be well secured). And also a bookshelves place in which the user could store the books that they own, which were also stored in the public JSON file.</p>\n<p>One thing to note is that Heroku deleted my account due to lack of activity, so the database call does not work, which disables the log in and sign up step and also the book information retrieval.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image/jedi-project/1722417156856.png&#x22;,&#x22;alt&#x22;:&#x22;1722417156856&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image/jedi-project/1722417168375.png&#x22;,&#x22;alt&#x22;:&#x22;1722417168375&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image/jedi-project/1722417144974.png&#x22;,&#x22;alt&#x22;:&#x22;1722417144974&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><a href=\"https://github.com/LauraHPG/web-jedi\">Github repo</a> | <a href=\"https://jovial-jepsen-82e02f.netlify.app\">Website</a></p>");
	

				const frontmatter = {"title":"BookShelves","description":"The Jedi Academy at UPC had a course in HTML, CSS and JavaScript in which I developed the following project","pubDate":"Jul 15 2021","heroImage":"/jedi-final-project.png"};
				const file = "/home/laura/Documents/Portfolio/src/content/project/jedi-project.md";
				const url = undefined;
				function rawContent() {
					return "The JEDI Academy at UPC offered a course in HTML, CSS and JavaScript, in which I took part in July 2021 and developed this website as the final project.\n\nBesides the three basic tools for web development, some other ones that I got to learn and use were:\n\n* **Heroku**: A web in which you can store and modify JSON public files in order to make accessible from any computer.\n* **Netlify**: A platform that enabled me to deploy the website to the internet.\n* **Bootstrap**: A simple framework to get to know how frameworks work.\n\nThe aim of the website was to have a log in and sign up page with users and passwords stored in the Heroku platform (a simple way to start to understand how APIs work, but not really suitable for a real project in which passwords must be well secured). And also a bookshelves place in which the user could store the books that they own, which were also stored in the public JSON file.\n\nOne thing to note is that Heroku deleted my account due to lack of activity, so the database call does not work, which disables the log in and sign up step and also the book information retrieval.\n\n\n![1722417156856](image/jedi-project/1722417156856.png)\n\n![1722417168375](image/jedi-project/1722417168375.png)\n\n![1722417144974](image/jedi-project/1722417144974.png)\n\n[Github repo](https://github.com/LauraHPG/web-jedi) | [Website](https://jovial-jepsen-82e02f.netlify.app)\n";
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
