import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_vt3vYn3T.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { c as createComponent, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_DmtTWcqB.mjs';
import 'kleur/colors';

const SITE_TITLE = "HPG";
const SITE_DESCRIPTION = "Welcome to my website!";

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://example.com", "SSR": true}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/education/gottingen.md": () => import('./gottingen_BmrGbEzD.mjs'),"/src/content/education/jedi.md": () => import('./jedi_D9oq6fQC.mjs'),"/src/content/education/upc.md": () => import('./upc_BenW7pcW.mjs'),"/src/content/experience/virvig-vhir.md": () => import('./virvig-vhir_CXg2aOBJ.mjs'),"/src/content/galleryCollection/asturies.md": () => import('./asturies_TR5o-bys.mjs'),"/src/content/galleryCollection/ghana.md": () => import('./ghana_vS1sVQLj.mjs'),"/src/content/galleryCollection/girona.md": () => import('./girona_BTyg5OD_.mjs'),"/src/content/project/bits-2021.md": () => import('./bits-2021_DsjKP204.mjs'),"/src/content/project/grafy.md": () => import('./grafy_DsgU8RUD.mjs'),"/src/content/project/jedi-project.md": () => import('./jedi-project_BF35vX9F.mjs'),"/src/content/project/magellan.md": () => import('./magellan_BDT1ZZiO.mjs'),"/src/content/project/nasco-2024.md": () => import('./nasco-2024_D4Y9fppp.mjs'),"/src/content/project/personal-website.md": () => import('./personal-website_BrciBUI_.mjs'),"/src/content/project/space-odissey.md": () => import('./space-odissey_Mz50i_Ux.mjs'),"/src/content/project/tfg.md": () => import('./tfg_r0YtxXmR.mjs'),"/src/content/project/vuelin.md": () => import('./vuelin_DviEHrYk.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"education":{"type":"content","entries":{"gottingen":"/src/content/education/gottingen.md","jedi":"/src/content/education/jedi.md","upc":"/src/content/education/upc.md"}},"galleryCollection":{"type":"content","entries":{"asturies":"/src/content/galleryCollection/asturies.md","ghana":"/src/content/galleryCollection/ghana.md","girona":"/src/content/galleryCollection/girona.md"}},"experience":{"type":"content","entries":{"virvig-vhir":"/src/content/experience/virvig-vhir.md"}},"project":{"type":"content","entries":{"bits-2021":"/src/content/project/bits-2021.md","jedi-project":"/src/content/project/jedi-project.md","grafy":"/src/content/project/grafy.md","magellan":"/src/content/project/magellan.md","nasco-2024":"/src/content/project/nasco-2024.md","space-odissey":"/src/content/project/space-odissey.md","personal-website":"/src/content/project/personal-website.md","tfg":"/src/content/project/tfg.md","vuelin":"/src/content/project/vuelin.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/education/gottingen.md": () => import('./gottingen_Bb9Un-S9.mjs'),"/src/content/education/jedi.md": () => import('./jedi_DKZ4A8DN.mjs'),"/src/content/education/upc.md": () => import('./upc_BBvvcBnO.mjs'),"/src/content/experience/virvig-vhir.md": () => import('./virvig-vhir_D4smajid.mjs'),"/src/content/galleryCollection/asturies.md": () => import('./asturies_CnqEa0nN.mjs'),"/src/content/galleryCollection/ghana.md": () => import('./ghana_B_3p93sZ.mjs'),"/src/content/galleryCollection/girona.md": () => import('./girona_DYO8egPL.mjs'),"/src/content/project/bits-2021.md": () => import('./bits-2021_B5TPhZHj.mjs'),"/src/content/project/grafy.md": () => import('./grafy_5EpS6BzP.mjs'),"/src/content/project/jedi-project.md": () => import('./jedi-project_oyCHXof-.mjs'),"/src/content/project/magellan.md": () => import('./magellan_x2EE1IX6.mjs'),"/src/content/project/nasco-2024.md": () => import('./nasco-2024_BtW6qgmc.mjs'),"/src/content/project/personal-website.md": () => import('./personal-website_DkvgM-T8.mjs'),"/src/content/project/space-odissey.md": () => import('./space-odissey_B2NMa8mo.mjs'),"/src/content/project/tfg.md": () => import('./tfg_CCegMdW8.mjs'),"/src/content/project/vuelin.md": () => import('./vuelin_CVCsUazx.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { SITE_TITLE as S, SITE_DESCRIPTION as a, getCollection as g };
