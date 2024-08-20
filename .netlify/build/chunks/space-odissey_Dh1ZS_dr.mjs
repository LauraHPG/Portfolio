import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_DmtTWcqB.mjs';
import { a as getImage } from './_astro_assets_ror4ROfW.mjs';
import 'clsx';

const Astro__Zt4X5V = new Proxy({"src":"/_astro/1722437008351.Dw5DFSU0.png","width":397,"height":700,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/laura/Documents/Portfolio/src/content/project/image/space-odissey/1722437008351.png";
							}
							
							return target[name];
						}
					});

const Astro__WY3kw = new Proxy({"src":"/_astro/1722436899641.CXBOAKvk.png","width":397,"height":700,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/laura/Documents/Portfolio/src/content/project/image/space-odissey/1722436899641.png";
							}
							
							return target[name];
						}
					});

const Astro__1CTyIf = new Proxy({"src":"/_astro/1722436916689.Di2yBUHN.png","width":397,"height":700,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/laura/Documents/Portfolio/src/content/project/image/space-odissey/1722436916689.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image/space-odissey/1722437008351\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image/space-odissey/1722437008351.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Zt4X5V, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image/space-odissey/1722436899641\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image/space-odissey/1722436899641.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__WY3kw, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image/space-odissey/1722436916689\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image/space-odissey/1722436916689.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1CTyIf, ...props});
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
			const html = await updateImageReferences("<p>This project was developed at the HackUPC 2022 Hackathon. It was a bigger hackathon than the previous one, with many more competitors, and we felt more pressure. However, we were able to create a project we are really proud of.</p>\n<p>It was the time in which wordle was on its peak, so one of the challenges was to create a mobile game.</p>\n<p>Space Odissey is a web mobile game in which the main goal is to make the spaceship land on the purple portal. To achieve it, there are certain universal elements with different properties that the user has to move around to attract or repell the spaceship and create a route that makes the spaceship land correctly.</p>\n<p>Here you can see the menu page:</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image/space-odissey/1722437008351.png&#x22;,&#x22;alt&#x22;:&#x22;1722437008351&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>And some levels:</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image/space-odissey/1722436899641.png&#x22;,&#x22;alt&#x22;:&#x22;1722436899641&#x22;,&#x22;index&#x22;:0}\"><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image/space-odissey/1722436916689.png&#x22;,&#x22;alt&#x22;:&#x22;1722436916689&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><a href=\"https://github.com/perecarrillo/SpaceOdyssey\">Github repo</a> | <a href=\"space-odyssey-hackupc.netlify.app\">Website</a></p>");
	

				const frontmatter = {"title":"Space Odyssey","description":"Web browser game developed for mobile devices.","pubDate":"May 14 2022","heroImage":"/space-odissey.png","coauthors":"Pere Carrillo, Sergio Blanco, Pol Vila"};
				const file = "/home/laura/Documents/Portfolio/src/content/project/space-odissey.md";
				const url = undefined;
				function rawContent() {
					return "This project was developed at the HackUPC 2022 Hackathon. It was a bigger hackathon than the previous one, with many more competitors, and we felt more pressure. However, we were able to create a project we are really proud of.\n\nIt was the time in which wordle was on its peak, so one of the challenges was to create a mobile game.\n\nSpace Odissey is a web mobile game in which the main goal is to make the spaceship land on the purple portal. To achieve it, there are certain universal elements with different properties that the user has to move around to attract or repell the spaceship and create a route that makes the spaceship land correctly.\n\nHere you can see the menu page:\n\n![1722437008351](image/space-odissey/1722437008351.png)\n\nAnd some levels:\n\n![1722436899641](image/space-odissey/1722436899641.png)![1722436916689](image/space-odissey/1722436916689.png)\n\n[Github repo](https://github.com/perecarrillo/SpaceOdyssey) | [Website](space-odyssey-hackupc.netlify.app)\n";
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
