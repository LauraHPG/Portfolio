import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_DmtTWcqB.mjs';
import { a as getImage } from './_astro_assets_ror4ROfW.mjs';
import 'clsx';

const Astro__Z1kEJHt = new Proxy({"src":"/_astro/1722537530437.Bx2jHANO.png","width":1350,"height":445,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/laura/Documents/Portfolio/src/content/project/image/tfg/1722537530437.png";
							}
							
							return target[name];
						}
					});

const Astro__RazB = new Proxy({"src":"/_astro/1722537768129.ClxQrYsU.png","width":1295,"height":233,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/laura/Documents/Portfolio/src/content/project/image/tfg/1722537768129.png";
							}
							
							return target[name];
						}
					});

const Astro__9R9zy = new Proxy({"src":"/_astro/1722538185713.CJyw6ZpA.png","width":1350,"height":356,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/laura/Documents/Portfolio/src/content/project/image/tfg/1722538185713.png";
							}
							
							return target[name];
						}
					});

const Astro__1kUj8P = new Proxy({"src":"/_astro/1722538658238.NicQmfuA.png","width":1295,"height":489,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/laura/Documents/Portfolio/src/content/project/image/tfg/1722538658238.png";
							}
							
							return target[name];
						}
					});

const Astro__Z5YsQn = new Proxy({"src":"/_astro/1722538690576.BoCOFoiq.png","width":1223,"height":740,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/laura/Documents/Portfolio/src/content/project/image/tfg/1722538690576.png";
							}
							
							return target[name];
						}
					});

const Astro__Z1YdAN8 = new Proxy({"src":"/_astro/1722538695394.C9OC5ff9.png","width":534,"height":750,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/laura/Documents/Portfolio/src/content/project/image/tfg/1722538695394.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image/tfg/1722537530437\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image/tfg/1722537530437.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1kEJHt, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image/tfg/1722537768129\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image/tfg/1722537768129.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__RazB, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image/tfg/1722538185713\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image/tfg/1722538185713.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__9R9zy, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image/tfg/1722538658238\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image/tfg/1722538658238.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1kUj8P, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image/tfg/1722538690576\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image/tfg/1722538690576.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z5YsQn, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image/tfg/1722538695394\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image/tfg/1722538695394.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1YdAN8, ...props});
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
			const html = await updateImageReferences("<p>Drawing Metabolic Pathways and Networks in my Bachelor’s thesis for the Informatics Engineer degree specialising in Computer Science at Universitat Politècnica de Catalunya.</p>\n<h3 id=\"motivation\">Motivation</h3>\n<p>Traditionally, metabolic pathways have been depicted manually or semiautomatically, a process that is often time-consuming and requires substantial manual adjustments. This thesis presents the development of an automated tool designed\nto draw and visualise metabolic pathways and networks, providing researchers with an interactive and efficient means to analyse complex biochemical data.</p>\n<h3 id=\"representation-of-the-information\">Representation of the information</h3>\n<p>Metabolic pathways can be easily described as hypergraphs. A hypergraph is a generalisation of a graph, in which an edge can join any number of vertices.</p>\n<p>However, itn this thesis, we will use an algorithm designed for directed graphs. While our project focuses on exploring hypergraphs, they can be easily transformed and depicted as graphs. As we can see in the following image, i this transformation, hyperedges are represented as nodes, each with their respective incoming and outgoing edges.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image/tfg/1722537530437.png&#x22;,&#x22;alt&#x22;:&#x22;1722537530437&#x22;,&#x22;index&#x22;:0}\"></p>\n<h3 id=\"drawing-algorithm\">Drawing algorithm</h3>\n<p>We decided tackle the problem using Sugiyama’s algorithm, that places the nodes of a graph into horizontal layers such that the edges, modeling the relationships, point in a uniform direction. There are two main reasons:</p>\n<ul>\n<li>The reasoning behind this decision is that in having the pathway arranged in this fashion, there is a clear flow of the reactions. Metabolic pathways often have a defined directionality, representing the flow of biochemical reactions from substrates to products. A hierarchical layout naturally aligns with this flow, making it easier to follow the sequence of reactions and understand the overall pathway.</li>\n<li>Given the nature of the data, these graphs are always bipartite (compounds are always connected to reactions and never to another component, and similarly with the reactions) the hierarchical structure divides these two types of nodes into compound-layers and reaction-layers, making it easier to distinguish between different types of entities and their roles within the metabolic network.</li>\n</ul>\n<p>We used the <a href=\"https://github.com/bdcht/grandalf\">grandalf</a> package for python to execute the algorithm. However, as we can see in the following example, using simply Sugiyama’s algorithm will not lead us to a good representation.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image/tfg/1722537768129.png&#x22;,&#x22;alt&#x22;:&#x22;1722537768129&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>So we needed to process the data, before and after using the algorithm.</p>\n<h3 id=\"data-processing\">Data processing</h3>\n<p>Metabolic networks belong to the class of scale-free networks, meaning that small number of compounds are involved in many reactions, whereas the majority of the other compounds are involved in only few reactions.</p>\n<p>Taking this information into consideration, the most common strategies have been either duplicating nodes or deleting nodes. Although deletion of nodes is one of the easiest ways to decrease edges, and hence, edge crossings, it is also important to take into account the lost information in the process. Thus, for this thesis, we decided to discard the option of deleting nodes and only duplicating them.</p>\n<p>We have taken two types of criteria in order to determine whether a node should be duplicated or not:</p>\n<ul>\n<li>Given a threshold, duplicating all the nodes with degree higher than the specified.</li>\n<li>Presence of a node in cycles. All the elementary circuits are computed, and the node that appears in most circuits is the candidate to be duplicated. As a result, we decrease the number of cycles.</li>\n</ul>\n<h3 id=\"graph-fragmentation-index-gfi\">Graph Fragmentation Index (GFI)</h3>\n<p>We propose a metric to determine the threshold for each of the pathways, and split the compounds that exceed this threshold.</p>\n<p>The duplication operation results in graphs with more nodes while leaving the edges the same way as before, this leads to an increase in connected components. For instance, given a graph G with three nodes A, B, C, and there is an edge from the compound A to the B and another from B to C, when duplicating B, the resulting graph ends up with two connected components.</p>\n<p>The Graph Fragmentation Index (GFI) takes this characteristic and computes the limit threshold in which the original graph results in more than one connected component.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image/tfg/1722538185713.png&#x22;,&#x22;alt&#x22;:&#x22;1722538185713&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>With the combination of the GFI and the cycle removal, we are able to preprocess all the graphs depending on their sizes, apply Sugiyama’s algorithm and finally some minor tweaks to the output of the grandalf algorithm.</p>\n<h3 id=\"results\">Results</h3>\n<p>To visualise the results I also developed a web application using Django. Here are some examples of connected components of different pathways.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image/tfg/1722538658238.png&#x22;,&#x22;alt&#x22;:&#x22;1722538658238&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image/tfg/1722538690576.png&#x22;,&#x22;alt&#x22;:&#x22;1722538690576&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image/tfg/1722538695394.png&#x22;,&#x22;alt&#x22;:&#x22;1722538695394&#x22;,&#x22;index&#x22;:0}\"></p>\n<h3 id=\"future-research-directions\">Future research directions</h3>\n<p>After finishing this thesis, some improvements that could be made are the following:</p>\n<ul>\n<li>Creating a more precise mode to duplicate the compounds, in order to minimise the number of isolated reactions, for instance by having edges with weights depending the contribution on how much information they give about the general graph.</li>\n<li>Visualise the set of metabolic pathways in a more coherent way in relation with reality, such as clustering the pathways that are near each other.</li>\n<li>Getting user feedback in order to improve both the algorithm and the web application, as well as improving the user interface and through his or her experience to enhance usability and accessibility.</li>\n</ul>\n<p>Memoir | <a href=\"https://github.com/LauraHPG/TFG-Drawing-oriented-metabolic-pathways-and-networks\">Github repo</a></p>");
	

				const frontmatter = {"title":"Drawing Metabolic Pathways and Networks","description":"Project developed for the Bitsxlamarato Hackathon in 2021","pubDate":"Jun 27 2024","heroImage":"/tfg.png"};
				const file = "/home/laura/Documents/Portfolio/src/content/project/tfg.md";
				const url = undefined;
				function rawContent() {
					return "Drawing Metabolic Pathways and Networks in my Bachelor's thesis for the Informatics Engineer degree specialising in Computer Science at Universitat Politècnica de Catalunya.\n\n### Motivation\n\nTraditionally, metabolic pathways have been depicted manually or semiautomatically, a process that is often time-consuming and requires substantial manual adjustments. This thesis presents the development of an automated tool designed\nto draw and visualise metabolic pathways and networks, providing researchers with an interactive and efficient means to analyse complex biochemical data.\n\n### Representation of the information\n\nMetabolic pathways can be easily described as hypergraphs. A hypergraph is a generalisation of a graph, in which an edge can join any number of vertices.\n\nHowever, itn this thesis, we will use an algorithm designed for directed graphs. While our project focuses on exploring hypergraphs, they can be easily transformed and depicted as graphs. As we can see in the following image, i this transformation, hyperedges are represented as nodes, each with their respective incoming and outgoing edges.\n\n![1722537530437](image/tfg/1722537530437.png)\n\n### Drawing algorithm\n\nWe decided tackle the problem using Sugiyama's algorithm, that places the nodes of a graph into horizontal layers such that the edges, modeling the relationships, point in a uniform direction. There are two main reasons:\n\n* The reasoning behind this decision is that in having the pathway arranged in this fashion, there is a clear flow of the reactions. Metabolic pathways often have a defined directionality, representing the flow of biochemical reactions from substrates to products. A hierarchical layout naturally aligns with this flow, making it easier to follow the sequence of reactions and understand the overall pathway.\n* Given the nature of the data, these graphs are always bipartite (compounds are always connected to reactions and never to another component, and similarly with the reactions) the hierarchical structure divides these two types of nodes into compound-layers and reaction-layers, making it easier to distinguish between different types of entities and their roles within the metabolic network.\n\nWe used the [grandalf](https://github.com/bdcht/grandalf) package for python to execute the algorithm. However, as we can see in the following example, using simply Sugiyama's algorithm will not lead us to a good representation.\n\n![1722537768129](image/tfg/1722537768129.png)\n\nSo we needed to process the data, before and after using the algorithm.\n\n### Data processing\n\nMetabolic networks belong to the class of scale-free networks, meaning that small number of compounds are involved in many reactions, whereas the majority of the other compounds are involved in only few reactions.\n\nTaking this information into consideration, the most common strategies have been either duplicating nodes or deleting nodes. Although deletion of nodes is one of the easiest ways to decrease edges, and hence, edge crossings, it is also important to take into account the lost information in the process. Thus, for this thesis, we decided to discard the option of deleting nodes and only duplicating them.\n\nWe have taken two types of criteria in order to determine whether a node should be duplicated or not:\n\n* Given a threshold, duplicating all the nodes with degree higher than the specified.\n* Presence of a node in cycles. All the elementary circuits are computed, and the node that appears in most circuits is the candidate to be duplicated. As a result, we decrease the number of cycles.\n\n### Graph Fragmentation Index (GFI)\n\nWe propose a metric to determine the threshold for each of the pathways, and split the compounds that exceed this threshold.\n\nThe duplication operation results in graphs with more nodes while leaving the edges the same way as before, this leads to an increase in connected components. For instance, given a graph G with three nodes A, B, C, and there is an edge from the compound A to the B and another from B to C, when duplicating B, the resulting graph ends up with two connected components.\n\nThe Graph Fragmentation Index (GFI) takes this characteristic and computes the limit threshold in which the original graph results in more than one connected component.\n\n![1722538185713](image/tfg/1722538185713.png)\n\nWith the combination of the GFI and the cycle removal, we are able to preprocess all the graphs depending on their sizes, apply Sugiyama's algorithm and finally some minor tweaks to the output of the grandalf algorithm.\n\n### Results\n\nTo visualise the results I also developed a web application using Django. Here are some examples of connected components of different pathways.\n\n![1722538658238](image/tfg/1722538658238.png)\n\n![1722538690576](image/tfg/1722538690576.png)\n\n![1722538695394](image/tfg/1722538695394.png)\n\n### Future research directions\n\nAfter finishing this thesis, some improvements that could be made are the following:\n\n* Creating a more precise mode to duplicate the compounds, in order to minimise the number of isolated reactions, for instance by having edges with weights depending the contribution on how much information they give about the general graph.\n* Visualise the set of metabolic pathways in a more coherent way in relation with reality, such as clustering the pathways that are near each other.\n* Getting user feedback in order to improve both the algorithm and the web application, as well as improving the user interface and through his or her experience to enhance usability and accessibility.\n\nMemoir | [Github repo](https://github.com/LauraHPG/TFG-Drawing-oriented-metabolic-pathways-and-networks)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"motivation","text":"Motivation"},{"depth":3,"slug":"representation-of-the-information","text":"Representation of the information"},{"depth":3,"slug":"drawing-algorithm","text":"Drawing algorithm"},{"depth":3,"slug":"data-processing","text":"Data processing"},{"depth":3,"slug":"graph-fragmentation-index-gfi","text":"Graph Fragmentation Index (GFI)"},{"depth":3,"slug":"results","text":"Results"},{"depth":3,"slug":"future-research-directions","text":"Future research directions"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
