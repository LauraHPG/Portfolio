import { renderers } from './renderers.mjs';
import { manifest } from './manifest_w1qGXZp4.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/gallery.astro.mjs');
const _page2 = () => import('./pages/gallery/_---slug_.astro.mjs');
const _page3 = () => import('./pages/project.astro.mjs');
const _page4 = () => import('./pages/project/_---slug_.astro.mjs');
const _page5 = () => import('./pages/rss.xml.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/gallery/index.astro", _page1],
    ["src/pages/gallery/[...slug].astro", _page2],
    ["src/pages/project/index.astro", _page3],
    ["src/pages/project/[...slug].astro", _page4],
    ["src/pages/rss.xml.js", _page5],
    ["src/pages/index.astro", _page6]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "34a4875f-857a-4f5d-914f-a69005fa78da"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
