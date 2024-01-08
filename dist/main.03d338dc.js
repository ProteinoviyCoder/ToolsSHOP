// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hYqvC":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "536f282003d338dc";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"4vpCS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Главная страница
parcelHelpers.export(exports, "getMainPage", ()=>getMainPage);
var _mainCss = require("/src/js/pages/main/main.css");
var _logoPng = require("/src/assets/img/logo.png");
var _logoPngDefault = parcelHelpers.interopDefault(_logoPng);
var _dewaltPng = require("/src/assets/img/dewalt.png");
var _dewaltPngDefault = parcelHelpers.interopDefault(_dewaltPng);
var _makitaPng = require("/src/assets/img/makita.png");
var _makitaPngDefault = parcelHelpers.interopDefault(_makitaPng);
var _metaboPng = require("/src/assets/img/metabo.png");
var _metaboPngDefault = parcelHelpers.interopDefault(_metaboPng);
var _karcherPng = require("/src/assets/img/karcher.png");
var _karcherPngDefault = parcelHelpers.interopDefault(_karcherPng);
var _boschPng = require("/src/assets/img/bosch.png");
var _boschPngDefault = parcelHelpers.interopDefault(_boschPng);
var _festoolPng = require("/src/assets/img/festool.png");
var _festoolPngDefault = parcelHelpers.interopDefault(_festoolPng);
var _milwaukeePng = require("/src/assets/img/milwaukee.png");
var _milwaukeePngDefault = parcelHelpers.interopDefault(_milwaukeePng);
var _handsJpg = require("/src/assets/img/hands.jpg");
var _handsJpgDefault = parcelHelpers.interopDefault(_handsJpg);
var _litleStarPng = require("/src/assets/img/litleStar.png");
var _litleStarPngDefault = parcelHelpers.interopDefault(_litleStarPng);
var _avitoJpeg = require("/src/assets/img/avito.jpeg");
var _avitoJpegDefault = parcelHelpers.interopDefault(_avitoJpeg);
var _ozonJpg = require("/src/assets/img/ozon.jpg");
var _ozonJpgDefault = parcelHelpers.interopDefault(_ozonJpg);
var _sberJpg = require("/src/assets/img/sber.jpg");
var _sberJpgDefault = parcelHelpers.interopDefault(_sberJpg);
var _yandexJpg = require("/src/assets/img/yandex.jpg");
var _yandexJpgDefault = parcelHelpers.interopDefault(_yandexJpg);
var _addressJpeg = require("/src/assets/img/address.jpeg");
var _addressJpegDefault = parcelHelpers.interopDefault(_addressJpeg);
var _mainTitleJs = require("/src/js/components/mainTitle/mainTitle.js");
var _semiTitleJs = require("/src/js/components/semiTitle/semiTitle.js");
var _sliderJs = require("/src/js/components/slider/slider.js");
var _textJs = require("/src/assets/text/text.js");
function getMainPage() {
    const page = document.createElement("div");
    page.classList.add("page", "main-page", "container");
    //делаем контент логотипом и описанием компании
    const containerContent1 = document.createElement("div");
    containerContent1.classList.add("main__container-content");
    const corelogo = document.createElement("img");
    corelogo.classList.add("main__logo");
    corelogo.src = (0, _logoPngDefault.default);
    const titleAndDesc = document.createElement("div");
    titleAndDesc.classList.add("main__title-and-desc");
    const title = (0, _mainTitleJs.getMainTitle)("\u041F\u043B\u0430\u043D\u0435\u0442\u0430 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430");
    title.classList.add("main__title");
    const desc = document.createElement("p");
    desc.classList.add("main__desc");
    desc.textContent = `\u{417}\u{430} \u{434}\u{43E}\u{43B}\u{433}\u{43E}\u{435} \u{432}\u{440}\u{435}\u{43C}\u{44F} \u{43D}\u{430} \u{440}\u{44B}\u{43D}\u{43A}\u{435}, \u{437}\u{430}\u{440}\u{435}\u{43A}\u{43E}\u{43C}\u{435}\u{43D}\u{434}\u{43E}\u{432}\u{430}\u{43B}\u{438} \u{441}\u{435}\u{431}\u{44F} \u{43A}\u{430}\u{43A} \u{43D}\u{430}\u{434}\u{451}\u{436}\u{43D}\u{43E}\u{433}\u{43E} \u{43F}\u{440}\u{43E}\u{434}\u{430}\u{432}\u{446}\u{430}- \u{43D}\u{43E}\u{432}\u{43E}\u{433}\u{43E}, \u{43E}\u{440}\u{438}\u{433}\u{438}\u{43D}\u{430}\u{43B}\u{44C}\u{43D}\u{43E}\u{433}\u{43E} \u{438} \u{43A}\u{430}\u{447}\u{435}\u{441}\u{442}\u{432}\u{435}\u{43D}\u{43D}\u{43E}\u{433}\u{43E} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{430}.
     \u{41A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{44F} \u{43E}\u{431}\u{43B}\u{430}\u{434}\u{430}\u{44E}\u{449}\u{430}\u{44F} \u{43E}\u{433}\u{440}\u{43E}\u{43C}\u{43D}\u{44B}\u{43C} \u{43A}\u{43E}\u{43B}\u{438}\u{447}\u{435}\u{441}\u{442}\u{432}\u{43E}\u{43C} \u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{44B}\u{445} \u{43E}\u{442}\u{437}\u{44B}\u{432}\u{43E}\u{432}, \u{43F}\u{43E}\u{441}\u{442}\u{43E}\u{44F}\u{43D}\u{43D}\u{44B}\u{445} \u{43A}\u{43B}\u{438}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{438} \u{432}\u{44B}\u{441}\u{43E}\u{43A}\u{43E}\u{433}\u{43E} \u{441}\u{43F}\u{440}\u{43E}\u{441}\u{430}`;
    titleAndDesc.append(title, desc);
    containerContent1.append(corelogo, titleAndDesc);
    //делаем контент с брендами
    const containerContent2 = document.createElement("div");
    containerContent2.classList.add("main__container-content", "main__content2");
    const semiTitle = (0, _semiTitleJs.getSemiTitle)("\u0423 \u043D\u0430\u0441 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 \u044D\u0442\u0438 \u0431\u0440\u0435\u043D\u0434\u044B");
    semiTitle.classList.add("main__semi-title");
    const brandImages = document.createElement("div");
    brandImages.classList.add("main__brand-images");
    function createImgBrand(imgPath) {
        const img = document.createElement("img");
        img.classList.add("main__img-brand");
        img.src = imgPath;
        brandImages.append(img);
    }
    createImgBrand((0, _dewaltPngDefault.default));
    createImgBrand((0, _makitaPngDefault.default));
    createImgBrand((0, _metaboPngDefault.default));
    createImgBrand((0, _karcherPngDefault.default));
    createImgBrand((0, _boschPngDefault.default));
    createImgBrand((0, _festoolPngDefault.default));
    createImgBrand((0, _milwaukeePngDefault.default));
    const contentSliderDesc = document.createElement("div");
    contentSliderDesc.classList.add("main__content-slider-desc");
    const mainSlider = (0, _sliderJs.getSlider)((0, _dewaltPngDefault.default), (0, _makitaPngDefault.default), (0, _festoolPngDefault.default), (0, _karcherPngDefault.default), (0, _metaboPngDefault.default), (0, _boschPngDefault.default), (0, _milwaukeePngDefault.default));
    mainSlider.classList.add("main__slider", "main-elements-right", "main-elements");
    const dataDescBrand = (0, _textJs.descBrand);
    const sliderDesc = document.createElement("p");
    sliderDesc.classList.add("main__slider-desc", "main-elements-left", "main-elements");
    sliderDesc.textContent = dataDescBrand.brand.desc;
    const btnLeft = mainSlider.querySelector(".slider__button-left");
    btnLeft.addEventListener("click", searchText);
    const btnRight = mainSlider.querySelector(".slider__button-right");
    btnRight.addEventListener("click", searchText);
    function searchText() {
        const slidInnerSlider = mainSlider.querySelector(".slider__div-image");
        sliderDesc.textContent = "";
        for(let i in dataDescBrand)if (dataDescBrand[i].img == slidInnerSlider.firstChild.src) sliderDesc.textContent = dataDescBrand[i].desc;
    }
    contentSliderDesc.append(mainSlider, sliderDesc);
    const hr1 = document.createElement("hr");
    hr1.classList.add("main__hr");
    containerContent2.append(semiTitle, brandImages, contentSliderDesc, hr1);
    // ----------------ОТДЕЛ №3-------------------------
    //делаем 3 отдел о дружной команде и отзывах
    const containerContent3 = document.createElement("div");
    containerContent3.classList.add("main__container-content", "main__content3");
    const imgHands = document.createElement("img");
    imgHands.classList.add("main__img-hands");
    imgHands.src = (0, _handsJpgDefault.default);
    const aboutTeam = document.createElement("ul");
    aboutTeam.classList.add("main__list__about-team");
    function createItemTeamList(textItemAboutTeam) {
        const itemAboutTeam = document.createElement("li");
        itemAboutTeam.classList.add("main__item__about-team");
        itemAboutTeam.textContent = textItemAboutTeam;
        aboutTeam.append(itemAboutTeam);
    }
    createItemTeamList(`\u{41A}\u{43E}\u{43C}\u{430}\u{43D}\u{434}\u{430} \u{431}\u{43E}\u{43B}\u{435}\u{435} \u{447}\u{435}\u{43C} \u{438}\u{437} 10 \u{447}\u{435}\u{43B}\u{43E}\u{432}\u{435}\u{43A} \u{435}\u{436}\u{435}\u{434}\u{43D}\u{435}\u{432}\u{43D}\u{43E} \u{442}\u{440}\u{443}\u{434}\u{438}\u{442}\u{441}\u{44F}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43F}\u{440}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{412}\u{430}\u{43C} \u{43B}\u{443}\u{447}\u{448}\u{438}\u{439} \u{441}\u{435}\u{440}\u{432}\u{438}\u{441} \u{438} \u{43E}\u{43F}\u{442}\u{438}\u{43C}\u{430}\u{43B}\u{44C}\u{43D}\u{44B}\u{435} \u{446}\u{435}\u{43D}\u{44B}`);
    createItemTeamList(`\u{411}\u{43E}\u{43B}\u{435}\u{435} 100 \u{43F}\u{440}\u{43E}\u{434}\u{430}\u{436} \u{438} \u{434}\u{43E}\u{432}\u{43E}\u{43B}\u{44C}\u{43D}\u{44B}\u{445} \u{43A}\u{43B}\u{438}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{435}\u{436}\u{435}\u{434}\u{43D}\u{435}\u{432}\u{43D}\u{43E} \u{43F}\u{43E} \u{432}\u{441}\u{435}\u{439} \u{420}\u{43E}\u{441}\u{441}\u{438}\u{438}`);
    createItemTeamList(`\u{414}\u{43E}\u{432}\u{435}\u{440}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{43E}\u{435} \u{43E}\u{442}\u{43D}\u{43E}\u{448}\u{435}\u{43D}\u{438}\u{435} \u{441} \u{43A} \u{43B}\u{438}\u{435}\u{43D}\u{442}\u{430}\u{43C}\u{438} - \u{437}\u{430}\u{43B}\u{43E}\u{433} \u{43D}\u{430}\u{448}\u{435}\u{433}\u{43E} \u{443}\u{441}\u{43F}\u{435}\u{445}\u{430}. 
  \u{423} \u{43D}\u{430}\u{441} \u{435}\u{441}\u{442}\u{44C} \u{43F}\u{43E}\u{441}\u{442}\u{43E}\u{44F}\u{43D}\u{43D}\u{44B}\u{435} \u{43A}\u{43B}\u{438}\u{435}\u{43D}\u{442}\u{44B}, \u{430} \u{442}\u{430}\u{43A} \u{436}\u{435} \u{431}\u{43E}\u{43B}\u{44C}\u{448}\u{43E}\u{435} \u{43A}\u{43E}\u{43B}\u{438}\u{447}\u{435}\u{441}\u{442}\u{432}\u{43E} \u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{44B}\u{445} \u{43E}\u{442}\u{437}\u{44B}\u{432}\u{43E}\u{432} \u{441} \u{440}\u{430}\u{437}\u{43D}\u{44B}\u{445} \u{43F}\u{43B}\u{43E}\u{449}\u{430}\u{434}\u{43E}\u{43A}`);
    containerContent3.append(imgHands, aboutTeam);
    // ---------------------Отдел №4 ОТЗЫВЫ---------------------
    const containerContent4 = document.createElement("div");
    containerContent4.classList.add("main__container-content", "main__content4");
    function createFeedback(feedTitle, feedText) {
        const divTileTextFeedback = document.createElement("div");
        divTileTextFeedback.classList.add("main__div-tile-text-feedback");
        const starTitle = document.createElement("div");
        starTitle.classList.add("main__stars-title");
        const titleFeedback = document.createElement("p");
        titleFeedback.classList.add("main__teitle-feedback");
        titleFeedback.textContent = feedTitle;
        starTitle.append(titleFeedback);
        function createStarImg() {
            const star = document.createElement("img");
            star.classList.add("main__star-img");
            star.src = (0, _litleStarPngDefault.default);
            starTitle.append(star);
        }
        createStarImg();
        createStarImg();
        createStarImg();
        createStarImg();
        createStarImg();
        const textFeedback = document.createElement("p");
        textFeedback.classList.add("main__text-feedback");
        textFeedback.textContent = feedText;
        divTileTextFeedback.append(starTitle, textFeedback);
        return divTileTextFeedback;
    }
    const feedback1 = createFeedback("\u041F\u0438\u0441\u0430\u0440\u0435\u0432\u0430 \u041C\u0430\u0440\u0438\u043D\u0430", "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u043E\u0433\u0440\u043E\u043C\u043D\u043E\u0435! \u0417\u0430\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0430\u0432\u0435\u0446! \u0412\u0441\u0435\u0433\u0434\u0430 \u043D\u0430 \u0441\u0432\u044F\u0437\u0438, \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0432\u043E\u0432\u0440\u0435\u043C\u044F.\u0422\u043E\u0432\u0430\u0440 \u0448\u0438\u043A\u0430\u0440\u043D\u044B\u0439! \u0412\u0441\u0435\u043C \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E!");
    feedback1.classList.add("main-elements-left", "main-elements");
    const feedback2 = createFeedback("\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u0421\u0435\u043D\u044C\u043A\u0438\u043D", "\u041E\u0442\u043B\u0438\u0447\u043D\u044B\u0435 \u0440\u0435\u0431\u044F\u0442\u0430! \u041F\u0440\u0438\u0435\u0445\u0430\u043B \u043A \u043D\u0438\u043C \u043D\u0430 \u0441\u043A\u043B\u0430\u0434. \u041E\u043D\u0438 \u043F\u043E\u043A\u0430\u0437\u0430\u043B\u0438 \u0432\u0435\u0441\u044C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0449\u0438\u0439 \u043C\u0435\u043D\u044F \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442, \u0432\u0441\u0435 \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u043B\u0438 \u0438 \u0434\u0430\u043B\u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C, \u043A\u0430\u043A \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0432 \u0440\u0443\u043A\u0435 \u043B\u0435\u0436\u0438\u0442. \u041A\u043E\u0440\u043E\u0447\u0435 \u043A\u0440\u0430\u0441\u0430\u0432\u0446\u044B!");
    feedback2.classList.add("main__feedback-right", "main-elements-right", "main-elements");
    const feedback3 = createFeedback("\u0410\u0440\u0442\u0443\u0440", "\u041E\u0433\u0440\u043E\u043C\u043D\u043E\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u0438\u043B\u0443!!! \u041B\u0443\u0447\u0448\u0430\u044F \u0446\u0435\u043D\u0430!) \u041C\u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u0432\u0430\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u0437\u0430\u0431\u0440\u0430\u0442\u044C \u0435\u0435 \u0432 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F, \u0437\u0430\u0431\u0440\u0430\u043B \u043A\u0430\u043A \u0438 \u0434\u043E\u0433\u043E\u0432\u0430\u0440\u0438\u0432\u0430\u043B\u0438\u0441\u044C! \u0412\u0441\u0435 \u043E\u0442\u043A\u0440\u044B\u043B\u0438 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u043B\u0438, \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u043B\u0438! \u0414\u043E\u0431\u0440\u044B\u0439 \u0438 \u043F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0430\u0432\u0435\u0446) \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E \u043C\u0438\u043B\u043B\u0438\u043E\u043D % )))");
    feedback3.classList.add("main-elements-left", "main-elements");
    const feedback4 = createFeedback("\u0410\u0440\u0442\u0451\u043C", "\u041E\u0442\u0432\u0435\u0447\u0430\u043B\u0438 \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u043E, \u0432\u0441\u0435 \u043E\u0431\u0435\u0449\u0430\u043D\u0438\u044F \u043F\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u0442\u043E\u0432\u0430\u0440\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u043B\u0438, \u043F\u043E\u043A\u0443\u043F\u0430\u043B \u043F\u043E\u0433\u0440\u0443\u0436\u043D\u0443\u044E \u043F\u0438\u043B\u0443, \u043F\u0440\u0438\u0448\u043B\u0430, \u0432\u0441\u0451 \u043E\u043A, \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E");
    feedback4.classList.add("main__feedback-right", "main-elements-right", "main-elements");
    const feedback5 = createFeedback("\u0410\u043B\u0435\u043A\u0441\u0435\u0439", "\u0410\u0431\u0440\u0430-\u043A\u0430\u0434\u0430\u0431\u0440\u0430, \u0447\u0443\u0434\u043E-\u043C\u0430\u0433\u0430\u0437\u0438\u043D");
    feedback5.classList.add("main-elements-left", "main-elements");
    containerContent4.append(feedback1, feedback2, feedback3, feedback4, feedback5);
    // ---------------------Отдел №5 МАРКЕТПЛЕЙСЫ И ФИЗ АДРЕС---------------------
    // МАРКЕТПЛЕЙСЫ
    const containerContent5 = document.createElement("div");
    containerContent5.classList.add("main__container-content", "main__content5");
    const titleMarketplace = document.createElement("p");
    titleMarketplace.classList.add("main__title-marketplace");
    titleMarketplace.textContent = "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0441 \u043D\u0430\u0439\u0442\u0438";
    const listMarketplace = document.createElement("ul");
    listMarketplace.classList.add("main__list-marketplace");
    function createItemMarketplace(marketLink, marketImg) {
        const itemMarketPlace = document.createElement("li");
        itemMarketPlace.classList.add("main__item-marketplace");
        const linkMarketplace = document.createElement("a");
        linkMarketplace.classList.add("main__link-marketplace");
        linkMarketplace.href = marketLink;
        linkMarketplace.target = "_blank";
        const imgMarketplace = document.createElement("img");
        imgMarketplace.classList.add("main__img-marketplace");
        imgMarketplace.src = marketImg;
        linkMarketplace.append(imgMarketplace);
        itemMarketPlace.append(linkMarketplace);
        listMarketplace.append(itemMarketPlace);
    }
    // createItemMarketplace(
    //   "https://www.avito.ru/brands/planet/all?gdlkerfdnwq=101&shopId=1783655&iid=2169891718&page_from=from_item_header&sellerId=099ce0f52a772327cc365967495a884c",
    //   avitoImg
    // );
    createItemMarketplace("https://www.ozon.ru/seller/apara-1009443/products/?miniapp=seller_1009443", (0, _ozonJpgDefault.default));
    createItemMarketplace("https://megamarket.ru/shop/tvoy-instrument/", (0, _sberJpgDefault.default));
    // createItemMarketplace(
    //   "https://market.yandex.ru/business--tvoi-instrument/7717514",
    //   yandexImg
    // );
    const hr2 = document.createElement("hr");
    hr2.classList.add("main__hr");
    //ФИЗ АДРЕС
    const contentAddress = document.createElement("div");
    contentAddress.classList.add("main__content-addres");
    const linkAddress = document.createElement("a");
    linkAddress.classList.add("main__name-address", "main-elements-left", "main-elements");
    linkAddress.textContent = "\u0412\u0430\u0440\u0448\u0430\u0432\u0441\u043A\u043E\u0435 \u0448\u043E\u0441\u0441\u0435 145\u043A7";
    linkAddress.href = "https://yandex.ru/maps/213/moscow/house/varshavskoye_shosse_145k7/Z04YcAdiQUcFQFtvfXl2eH9jYw==/?ll=37.602822%2C55.579307&z=17";
    linkAddress.target = "_blank";
    const imgAddress = document.createElement("img");
    imgAddress.classList.add("main__img-address", "main-elements-right", "main-elements");
    imgAddress.src = (0, _addressJpegDefault.default);
    contentAddress.append(linkAddress, imgAddress);
    const hr3 = document.createElement("hr");
    hr3.classList.add("main__hr");
    containerContent5.append(titleMarketplace, listMarketplace, hr2, contentAddress, hr3);
    // ---------------------Отдел №6 частые вопросы---------------------
    const containerContent6 = document.createElement("div");
    containerContent6.classList.add("main__container-content", "main__content6");
    const titleQuestions = document.createElement("p");
    titleQuestions.classList.add("main__title-questions");
    titleQuestions.textContent = "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B";
    const listQuestions = document.createElement("ul");
    listQuestions.classList.add("main__list-questions");
    function createItemQuestions(questionTitleData, questionTextData) {
        const itemQuestions = document.createElement("li");
        itemQuestions.classList.add("main__item-questions");
        itemQuestions.addEventListener("click", function() {
            textItemQuestions.classList.toggle("main__none");
            arrowDown.classList.toggle("main__arrow-up");
            itemQuestions.classList.toggle("main__item-questions-active");
            titleItemQuestions.classList.toggle("main__content-title-questions-active");
        });
        const contentTitleQuestions = document.createElement("div");
        contentTitleQuestions.classList.add("main__content-title-questions");
        const titleItemQuestions = document.createElement("p");
        titleItemQuestions.classList.add("main__item-title-questions");
        titleItemQuestions.textContent = questionTitleData;
        const arrowDown = document.createElement("div");
        arrowDown.classList.add("main__arrow-down");
        contentTitleQuestions.append(titleItemQuestions, arrowDown);
        const textItemQuestions = document.createElement("p");
        textItemQuestions.textContent = questionTextData;
        textItemQuestions.classList.add("main__text-questions");
        textItemQuestions.classList.add("main__none");
        itemQuestions.append(contentTitleQuestions, textItemQuestions);
        listQuestions.append(itemQuestions);
    }
    createItemQuestions(`\u{423} \u{412}\u{430}\u{441} \u{43E}\u{440}\u{438}\u{433}\u{438}\u{43D}\u{430}\u{43B}\u{44C}\u{43D}\u{44B}\u{439} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}?`, `\u{414}\u{430}, \u{443} \u{43D}\u{430}\u{441} \u{43F}\u{43E}\u{43B}\u{43D}\u{43E}\u{441}\u{442}\u{44C}\u{44E} \u{43E}\u{440}\u{438}\u{433}\u{438}\u{43D}\u{430}\u{43B}\u{44C}\u{43D}\u{44B}\u{439} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}!`);
    createItemQuestions(`\u{41C}\u{43E}\u{436}\u{43D}\u{43E} \u{43B}\u{438} \u{43F}\u{440}\u{438}\u{435}\u{445}\u{430}\u{442}\u{44C} \u{43F}\u{43E}\u{441}\u{43C}\u{43E}\u{442}\u{440}\u{435}\u{442}\u{44C}?`, `\u{414}\u{430}, \u{412}\u{44B} \u{43C}\u{43E}\u{436}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{438}\u{435}\u{445}\u{430}\u{442}\u{44C} \u{43F}\u{43E} \u{430}\u{434}\u{440}\u{435}\u{441}\u{443} "\u{412}\u{430}\u{440}\u{448}\u{430}\u{432}\u{441}\u{43A}\u{43E}\u{435} \u{448}\u{43E}\u{441}\u{441}\u{435} 145\u{43A}7", \u{442}\u{430}\u{43C} \u{43D}\u{430}\u{445}\u{43E}\u{434}\u{438}\u{442}\u{441}\u{44F} \u{43D}\u{430}\u{448} \u{441}\u{43A}\u{43B}\u{430}\u{434}. 
    \u{412}\u{44B} \u{43C}\u{43E}\u{436}\u{435}\u{442}\u{435} \u{437}\u{430}\u{439}\u{442}\u{438}, \u{43F}\u{43E}\u{441}\u{43C}\u{43E}\u{442}\u{440}\u{435}\u{442}\u{44C} \u{432}\u{435}\u{441}\u{44C} \u{430}\u{441}\u{441}\u{43E}\u{440}\u{442}\u{438}\u{43C}\u{435}\u{43D}\u{442}, \u{43F}\u{43E}\u{442}\u{440}\u{43E}\u{433}\u{430}\u{442}\u{44C}, \u{43F}\u{440}\u{43E}\u{432}\u{435}\u{440}\u{438}\u{442}\u{44C} \u{440}\u{430}\u{431}\u{43E}\u{442}\u{43E}\u{441}\u{43F}\u{43E}\u{441}\u{43E}\u{431}\u{43D}\u{43E}\u{441}\u{442}\u{44C}.`);
    containerContent6.append(titleQuestions, listQuestions);
    page.append(containerContent1, containerContent2, containerContent3, containerContent4, containerContent5, containerContent6);
    setTimeout(function() {
        corelogo.classList.add("main-elements-show");
        titleAndDesc.classList.add("main-elements-show");
        semiTitle.classList.add("main-elements-show");
        const allImagesBrand = brandImages.querySelectorAll(".main__img-brand");
        for (let i of allImagesBrand)i.classList.add("main-elements-show");
    }, 10);
    document.addEventListener("scroll", checkElem);
    const elements = page.querySelectorAll(".main-elements");
    checkElem();
    function checkElem() {
        const triggerBottom = window.innerHeight / 5 * 4;
        for (let element of elements){
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) element.classList.add("main-elements-show");
            else element.classList.remove("main-elements-show");
        }
    }
    return page;
}

},{"/src/js/pages/main/main.css":"eR2fh","/src/assets/img/logo.png":"akRM1","/src/assets/img/dewalt.png":"6iRsS","/src/assets/img/makita.png":"7XT6Z","/src/assets/img/metabo.png":"hmxyr","/src/assets/img/karcher.png":"4HOFe","/src/assets/img/bosch.png":"hyFy1","/src/assets/img/festool.png":"ckfuM","/src/assets/img/milwaukee.png":"htq6z","/src/assets/img/hands.jpg":"9TvhF","/src/assets/img/litleStar.png":"crZmj","/src/assets/img/avito.jpeg":"bAvvr","/src/assets/img/ozon.jpg":"dGNHn","/src/assets/img/sber.jpg":"kKILK","/src/assets/img/yandex.jpg":"c72TP","/src/assets/img/address.jpeg":"7isi8","/src/js/components/mainTitle/mainTitle.js":"ki5if","/src/js/components/semiTitle/semiTitle.js":"5vYXl","/src/js/components/slider/slider.js":"awVQX","/src/assets/text/text.js":"iBFKL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eR2fh":[function() {},{}],"akRM1":[function(require,module,exports) {
module.exports = require("7c856cbf92430d06").getBundleURL("7a7kP") + "logo.7c849107.png" + "?" + Date.now();

},{"7c856cbf92430d06":"lgJ39"}],"6iRsS":[function(require,module,exports) {
module.exports = require("506696c33283888d").getBundleURL("7a7kP") + "dewalt.1cbb5d6f.png" + "?" + Date.now();

},{"506696c33283888d":"lgJ39"}],"7XT6Z":[function(require,module,exports) {
module.exports = require("c9d1cbb3be4165b3").getBundleURL("7a7kP") + "makita.dcd45c9a.png" + "?" + Date.now();

},{"c9d1cbb3be4165b3":"lgJ39"}],"hmxyr":[function(require,module,exports) {
module.exports = require("c3f28785df946079").getBundleURL("7a7kP") + "metabo.de6b83b2.png" + "?" + Date.now();

},{"c3f28785df946079":"lgJ39"}],"4HOFe":[function(require,module,exports) {
module.exports = require("e025b1d7ea606c1e").getBundleURL("7a7kP") + "karcher.630b0215.png" + "?" + Date.now();

},{"e025b1d7ea606c1e":"lgJ39"}],"hyFy1":[function(require,module,exports) {
module.exports = require("626a21ed5238d955").getBundleURL("7a7kP") + "bosch.22ccc180.png" + "?" + Date.now();

},{"626a21ed5238d955":"lgJ39"}],"ckfuM":[function(require,module,exports) {
module.exports = require("cb190949e0796bf0").getBundleURL("7a7kP") + "festool.876af760.png" + "?" + Date.now();

},{"cb190949e0796bf0":"lgJ39"}],"htq6z":[function(require,module,exports) {
module.exports = require("e33bb8d3f35a08ed").getBundleURL("7a7kP") + "milwaukee.0a3667e5.png" + "?" + Date.now();

},{"e33bb8d3f35a08ed":"lgJ39"}],"9TvhF":[function(require,module,exports) {
module.exports = require("d6d68f8c77475b69").getBundleURL("7a7kP") + "hands.c16d2639.jpg" + "?" + Date.now();

},{"d6d68f8c77475b69":"lgJ39"}],"crZmj":[function(require,module,exports) {
module.exports = require("cf5d0b44959c634f").getBundleURL("7a7kP") + "litleStar.e67419f8.png" + "?" + Date.now();

},{"cf5d0b44959c634f":"lgJ39"}],"bAvvr":[function(require,module,exports) {
module.exports = require("2aa022c42d47d224").getBundleURL("7a7kP") + "avito.a80d397b.jpeg" + "?" + Date.now();

},{"2aa022c42d47d224":"lgJ39"}],"dGNHn":[function(require,module,exports) {
module.exports = require("44c421b6574716c9").getBundleURL("7a7kP") + "ozon.a4d01165.jpg" + "?" + Date.now();

},{"44c421b6574716c9":"lgJ39"}],"kKILK":[function(require,module,exports) {
module.exports = require("48f771a19c01c1b0").getBundleURL("7a7kP") + "sber.1da971fa.jpg" + "?" + Date.now();

},{"48f771a19c01c1b0":"lgJ39"}],"c72TP":[function(require,module,exports) {
module.exports = require("13f910a10e1e6b59").getBundleURL("7a7kP") + "yandex.b83f39bd.jpg" + "?" + Date.now();

},{"13f910a10e1e6b59":"lgJ39"}],"7isi8":[function(require,module,exports) {
module.exports = require("807e93b4747922b1").getBundleURL("7a7kP") + "address.6d359a6a.jpeg" + "?" + Date.now();

},{"807e93b4747922b1":"lgJ39"}],"ki5if":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Создаёт главный заголовок
parcelHelpers.export(exports, "getMainTitle", ()=>getMainTitle);
var _mainTitleCss = require("/src/js/components/mainTitle/mainTitle.css");
function getMainTitle(text) {
    const title = document.createElement("h1");
    title.classList.add("main-title");
    title.textContent = text;
    return title;
}

},{"/src/js/components/mainTitle/mainTitle.css":"8xezA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8xezA":[function() {},{}],"5vYXl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Создаёт главный заголовок
parcelHelpers.export(exports, "getSemiTitle", ()=>getSemiTitle);
var _semiTitleCss = require("/src/js/components/semiTitle/semiTitle.css");
function getSemiTitle(text) {
    const title = document.createElement("h3");
    title.classList.add("semi-title");
    title.textContent = text;
    return title;
}

},{"/src/js/components/semiTitle/semiTitle.css":"7Bj18","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Bj18":[function() {},{}],"awVQX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSlider", ()=>getSlider);
var _sliderCss = require("/src/js/components/slider/slider.css");
function getSlider(img1, img2, img3, img4, img5, img6, img7) {
    //слайдер
    const slider = document.createElement("div");
    slider.classList.add("slider");
    //место для хранения фото
    const arrayImmage = [];
    let arrayImageValue = 0;
    //Создаём кнопку для перемотки в лево
    const btnLeft = document.createElement("button");
    btnLeft.classList.add("slider__button-left");
    btnLeft.addEventListener("click", function() {
        if (arrayImageValue > 0) {
            arrayImageValue = arrayImageValue - 1;
            divImage.innerHTML = "";
            divImage.append(arrayImmage[arrayImageValue]);
            console.log(arrayImageValue);
        }
    });
    const iconLeft = document.createElement("div");
    iconLeft.classList.add("slider__icon-left");
    btnLeft.append(iconLeft);
    //Создаём кнопку для перемотки в право
    const btnRight = document.createElement("button");
    btnRight.classList.add("slider__button-right");
    btnRight.addEventListener("click", function() {
        if (arrayImageValue < arrayImmage.length - 1) {
            arrayImageValue = arrayImageValue + 1;
            divImage.innerHTML = "";
            divImage.append(arrayImmage[arrayImageValue]);
        }
    });
    const iconRight = document.createElement("div");
    iconRight.classList.add("slider__icon-right");
    btnRight.append(iconRight);
    //создаем изображения с путём переданным в функцию
    function createImg(img) {
        if (img != "" && img != undefined) {
            const image = document.createElement("img");
            image.classList.add("slider__image");
            image.src = img;
            arrayImmage.push(image);
        }
    }
    createImg(img1);
    createImg(img2);
    createImg(img3);
    createImg(img4);
    createImg(img5);
    createImg(img6);
    createImg(img7);
    //создаём место для отображения картинок
    const divImage = document.createElement("div");
    divImage.classList.add("slider__div-image");
    //по дефолту отображаем первую картинку из массива
    divImage.append(arrayImmage[arrayImageValue]);
    slider.append(btnLeft, divImage, btnRight);
    return slider;
}

},{"/src/js/components/slider/slider.css":"ixnlV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ixnlV":[function() {},{}],"iBFKL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "descBrand", ()=>descBrand);
var _dewaltPng = require("/src/assets/img/dewalt.png");
var _dewaltPngDefault = parcelHelpers.interopDefault(_dewaltPng);
var _makitaPng = require("/src/assets/img/makita.png");
var _makitaPngDefault = parcelHelpers.interopDefault(_makitaPng);
var _metaboPng = require("/src/assets/img/metabo.png");
var _metaboPngDefault = parcelHelpers.interopDefault(_metaboPng);
var _karcherPng = require("/src/assets/img/karcher.png");
var _karcherPngDefault = parcelHelpers.interopDefault(_karcherPng);
var _boschPng = require("/src/assets/img/bosch.png");
var _boschPngDefault = parcelHelpers.interopDefault(_boschPng);
var _festoolPng = require("/src/assets/img/festool.png");
var _festoolPngDefault = parcelHelpers.interopDefault(_festoolPng);
var _milwaukeePng = require("/src/assets/img/milwaukee.png");
var _milwaukeePngDefault = parcelHelpers.interopDefault(_milwaukeePng);
const descBrand = {
    brand: {
        name: "dewalt",
        desc: `
      \u{412} XXI \u{432}\u{435}\u{43A}\u{435} \u{440}\u{430}\u{437}\u{432}\u{438}\u{442}\u{438}\u{435} DeWalt \u{43F}\u{440}\u{43E}\u{434}\u{43E}\u{43B}\u{436}\u{430}\u{435}\u{442}\u{441}\u{44F} - \u{443}\u{432}\u{435}\u{43B}\u{438}\u{447}\u{438}\u{432}\u{430}\u{435}\u{442}\u{441}\u{44F} 
      \u{430}\u{441}\u{441}\u{43E}\u{440}\u{442}\u{438}\u{43C}\u{435}\u{43D}\u{442} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432}, \u{440}\u{430}\u{441}\u{448}\u{438}\u{440}\u{44F}\u{435}\u{442}\u{441}\u{44F} \u{43C}\u{43E}\u{434}\u{435}\u{43B}\u{44C}\u{43D}\u{44B}\u{439} \u{440}\u{44F}\u{434}, \u{443}\u{43B}\u{443}\u{447}\u{448}\u{430}\u{44E}\u{442}\u{441}\u{44F} 
      \u{445}\u{430}\u{440}\u{430}\u{43A}\u{442}\u{435}\u{440}\u{438}\u{441}\u{442}\u{438}\u{43A}\u{438}. \u{410}\u{43A}\u{43A}\u{443}\u{43C}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440}\u{43D}\u{44B}\u{435} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{44B} \u{43F}\u{435}\u{440}\u{435}\u{441}\u{442}\u{430}\u{44E}\u{442} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{43E}\u{432}\u{438}\u{43D}\u{43A}\u{43E}\u{439}. 
      \u{411}\u{430}\u{442}\u{430}\u{440}\u{435}\u{44F} \u{441}\u{442}\u{430}\u{43D}\u{43E}\u{432}\u{438}\u{442}\u{441}\u{44F} \u{432}\u{441}\u{435} \u{43C}\u{43E}\u{449}\u{43D}\u{435}\u{435}. \u{41A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{44F} \u{43F}\u{440}\u{43E}\u{438}\u{437}\u{432}\u{43E}\u{434}\u{438}\u{442} \u{43F}\u{435}\u{440}\u{432}\u{44B}\u{435} \u{432} \u{43C}\u{438}\u{440}\u{435} 
      \u{430}\u{43A}\u{43A}\u{443}\u{43C}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440}\u{43D}\u{44B}\u{435} \u{43F}\u{43E}\u{433}\u{440}\u{443}\u{436}\u{43D}\u{44B}\u{435} \u{43F}\u{438}\u{43B}\u{44B}, \u{434}\u{43E}\u{431}\u{430}\u{432}\u{43B}\u{44F}\u{435}\u{442} \u{43D}\u{430} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442} \u{43F}\u{43E}\u{434}\u{441}\u{432}\u{435}\u{442}\u{43A}\u{443} 
      \u{440}\u{430}\u{431}\u{43E}\u{447}\u{435}\u{439} \u{437}\u{43E}\u{43D}\u{44B}. \u{412} 2012 \u{433}\u{43E}\u{434}\u{443} \u{432}\u{44B}\u{43F}\u{443}\u{441}\u{43A}\u{430}\u{44E}\u{442}\u{441}\u{44F} \u{43F}\u{435}\u{440}\u{432}\u{44B}\u{435} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{44B} \u{441} 
      \u{431}\u{435}\u{441}\u{449}\u{435}\u{442}\u{43E}\u{447}\u{43D}\u{44B}\u{43C} \u{43C}\u{435}\u{445}\u{430}\u{43D}\u{438}\u{437}\u{43C}\u{43E}\u{43C}. \u{412} 2016 \u{433}\u{43E}\u{434}\u{443} \u{2013} 
      \u{441}\u{438}\u{441}\u{442}\u{435}\u{43C}\u{430} FLEXVOLT`,
        img: (0, _dewaltPngDefault.default)
    },
    brand2: {
        name: "makita",
        desc: `
      \u{41A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{44F} Makita \u{43D}\u{430} \u{43F}\u{440}\u{43E}\u{442}\u{44F}\u{436}\u{435}\u{43D}\u{438}\u{438} 100 \u{43B}\u{435}\u{442} \u{440}\u{430}\u{434}\u{443}\u{435}\u{442} \u{43D}\u{430}\u{441} \u{43A}\u{430}\u{447}\u{435}\u{441}\u{442}\u{432}\u{43E}\u{43C} 
      \u{441}\u{432}\u{43E}\u{438}\u{445} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{43E}\u{432}. \u{41E}\u{43D}\u{438} \u{431}\u{44B}\u{43B}\u{438} \u{43F}\u{435}\u{440}\u{432}\u{44B}\u{43C}\u{438}, \u{43A}\u{442}\u{43E} \u{438}\u{437}\u{43E}\u{431}\u{440}\u{435}\u{43B} \u{438} \u{437}\u{430}\u{43F}\u{430}\u{442}\u{435}\u{43D}\u{442}\u{43E}\u{432}\u{430}\u{43B} \u{43D}\u{435}\u{43A}\u{43E}\u{442}\u{43E}\u{440}\u{44B}\u{435} 
      \u{432}\u{430}\u{436}\u{43D}\u{44B}\u{435} \u{444}\u{443}\u{43D}\u{43A}\u{446}\u{438}\u{438} \u{438} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{44B} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432}, \u{43A}\u{43E}\u{442}\u{43E}\u{440}\u{44B}\u{435} \u{437}\u{43D}\u{430}\u{447}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{43E} \u{43E}\u{431}\u{43B}\u{435}\u{433}\u{447}\u{430}\u{44E}\u{442} 
      \u{440}\u{430}\u{431}\u{43E}\u{442}\u{443} \u{438} \u{443}\u{432}\u{435}\u{43B}\u{438}\u{447}\u{438}\u{432}\u{430}\u{44E}\u{442} \u{441}\u{440}\u{43E}\u{43A} \u{43F}\u{43E}\u{43B}\u{44C}\u{437}\u{43E}\u{432}\u{430}\u{43D}\u{438}\u{44F}.

      AVT - \u{430}\u{43D}\u{442}\u{438}\u{432}\u{438}\u{431}\u{440}\u{430}\u{446}\u{438}\u{43E}\u{43D}\u{43D}\u{430}\u{44F} \u{441}\u{438}\u{441}\u{442}\u{435}\u{43C}\u{430}.
      Makstar \u{2013} \u{44D}\u{442}\u{43E} \u{442}\u{435}\u{445}\u{43D}\u{43E}\u{43B}\u{43E}\u{433}\u{438}\u{44F} \u{437}\u{430}\u{440}\u{44F}\u{434}\u{43A}\u{438} \u{43B}\u{438}\u{442}\u{438}\u{439}-\u{438}\u{43E}\u{43D}\u{43D}\u{44B}\u{445} \u{430}\u{43A}\u{43A}\u{443}\u{43C}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440}\u{43E}\u{432} \u{441} 
      \u{43E}\u{431}\u{43C}\u{435}\u{43D}\u{43E}\u{43C} \u{446}\u{438}\u{444}\u{440}\u{43E}\u{432}\u{43E}\u{439} \u{438}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{438}\u{435}\u{439} \u{43C}\u{435}\u{436}\u{434}\u{443} \u{430}\u{43A}\u{43A}\u{443}\u{43C}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440}\u{43E}\u{43C} \u{438} \u{437}\u{430}\u{440}\u{44F}\u{434}\u{43D}\u{44B}\u{43C} 
      \u{443}\u{441}\u{442}\u{440}\u{43E}\u{439}\u{441}\u{442}\u{432}\u{43E}\u{43C}.`,
        img: (0, _makitaPngDefault.default)
    },
    brand3: {
        name: "festool",
        desc: `
      \u{41A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{44F} Festool \u{431}\u{44B}\u{43B}\u{430} \u{441}\u{43E}\u{437}\u{434}\u{430}\u{43D}\u{430} \u{432} 2000 \u{433}\u{43E}\u{434}\u{443} \u{43F}\u{443}\u{442}\u{451}\u{43C} \u{432}\u{44B}\u{434}\u{435}\u{43B}\u{435}\u{43D}\u{438}\u{44F} 
      \u{43B}\u{438}\u{43D}\u{438}\u{438} \u{43F}\u{43E} \u{43F}\u{440}\u{43E}\u{438}\u{437}\u{432}\u{43E}\u{434}\u{441}\u{442}\u{432}\u{443} \u{44D}\u{43B}\u{435}\u{43A}\u{442}\u{440}\u{43E}\u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{438}\u{437} \u{43A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{438} Festo. 

      \u{41F}\u{43E}\u{434} \u{431}\u{440}\u{435}\u{43D}\u{434}\u{43E}\u{43C} Festool \u{43D}\u{44B}\u{43D}\u{435} \u{440}\u{435}\u{430}\u{43B}\u{438}\u{437}\u{443}\u{44E}\u{442}\u{441}\u{44F} \u{434}\u{440}\u{435}\u{43B}\u{438}-\u{448}\u{443}\u{440}\u{443}\u{43F}\u{43E}\u{432}\u{451}\u{440}\u{442}\u{44B}, 
      \u{44D}\u{43B}\u{435}\u{43A}\u{442}\u{440}\u{438}\u{447}\u{435}\u{441}\u{43A}\u{438}\u{435} \u{43B}\u{43E}\u{431}\u{437}\u{438}\u{43A}\u{438}, \u{434}\u{438}\u{441}\u{43A}\u{43E}\u{432}\u{44B}\u{435}, \u{442}\u{43E}\u{440}\u{446}\u{43E}\u{432}\u{43E}-\u{443}\u{441}\u{43E}\u{432}\u{43E}\u{447}\u{43D}\u{44B}\u{435}, \u{441}\u{442}\u{440}\u{43E}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{44B}\u{435} 
      \u{438} \u{43C}\u{43E}\u{43D}\u{442}\u{430}\u{436}\u{43D}\u{44B}\u{435} \u{434}\u{438}\u{441}\u{43A}\u{43E}\u{432}\u{44B}\u{435} \u{43F}\u{438}\u{43B}\u{44B}, \u{432}\u{435}\u{440}\u{442}\u{438}\u{43A}\u{430}\u{43B}\u{44C}\u{43D}\u{44B}\u{435}, \u{43E}\u{43A}\u{43E}\u{43D}\u{43D}\u{44B}\u{435}, \u{434}\u{438}\u{441}\u{43A}\u{43E}\u{432}\u{44B}\u{435}, 
      \u{434}\u{44E}\u{431}\u{435}\u{43B}\u{44C}\u{43D}\u{44B}\u{435}, \u{43A}\u{440}\u{43E}\u{43C}\u{43E}\u{447}\u{43D}\u{44B}\u{435} \u{444}\u{440}\u{435}\u{437}\u{435}\u{440}\u{44B}, \u{43C}\u{43D}\u{43E}\u{433}\u{43E}\u{444}\u{443}\u{43D}\u{43A}\u{446}\u{438}\u{43E}\u{43D}\u{430}\u{43B}\u{44C}\u{43D}\u{44B}\u{435} \u{441}\u{442}\u{43E}\u{43B}\u{44B} (\u{432}\u{435}\u{440}\u{441}\u{442}\u{430}\u{43A}\u{438}).`,
        img: (0, _festoolPngDefault.default)
    },
    brand4: {
        name: "karcher",
        desc: `
      Karcher - \u{44D}\u{442}\u{43E} \u{43D}\u{435}\u{43C}\u{435}\u{446}\u{43A}\u{430}\u{44F} \u{43A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{44F}, \u{441}\u{43F}\u{435}\u{446}\u{438}\u{430}\u{43B}\u{438}\u{437}\u{438}\u{440}\u{443}\u{44E}\u{449}\u{430}\u{44F}\u{441}\u{44F} \u{43D}\u{430} \u{43F}\u{440}\u{43E}\u{438}\u{437}\u{432}\u{43E}\u{434}\u{441}\u{442}\u{432}\u{435} 
      \u{432}\u{44B}\u{441}\u{43E}\u{43A}\u{43E}\u{43A}\u{430}\u{447}\u{435}\u{441}\u{442}\u{432}\u{435}\u{43D}\u{43D}\u{44B}\u{445} \u{443}\u{441}\u{442}\u{440}\u{43E}\u{439}\u{441}\u{442}\u{432} \u{434}\u{43B}\u{44F} \u{43E}\u{447}\u{438}\u{441}\u{442}\u{43A}\u{438} \u{438} \u{443}\u{445}\u{43E}\u{434}\u{430} \u{437}\u{430} \u{43F}\u{43E}\u{432}\u{435}\u{440}\u{445}\u{43D}\u{43E}\u{441}\u{442}\u{44F}\u{43C}\u{438}. 
      \u{41E}\u{43D}\u{430} \u{448}\u{438}\u{440}\u{43E}\u{43A}\u{43E} \u{438}\u{437}\u{432}\u{435}\u{441}\u{442}\u{43D}\u{430} \u{441}\u{432}\u{43E}\u{438}\u{43C}\u{438} \u{432}\u{44B}\u{441}\u{43E}\u{43A}\u{43E}\u{434}\u{430}\u{432}\u{43B}\u{435}\u{43A}\u{438}\u{43C}\u{438} \u{43C}\u{43E}\u{435}\u{447}\u{43D}\u{44B}\u{43C}\u{438} \u{430}\u{43F}\u{43F}\u{430}\u{440}\u{430}\u{442}\u{430}\u{43C}\u{438},
      \u{43F}\u{430}\u{440}\u{43E}\u{43E}\u{447}\u{438}\u{441}\u{442}\u{438}\u{442}\u{435}\u{43B}\u{44F}\u{43C}\u{438} \u{438} \u{434}\u{440}\u{443}\u{433}\u{438}\u{43C}\u{438} \u{438}\u{43D}\u{43D}\u{43E}\u{432}\u{430}\u{446}\u{438}\u{43E}\u{43D}\u{43D}\u{44B}\u{43C}\u{438} \u{441}\u{440}\u{435}\u{434}\u{441}\u{442}\u{432}\u{430}\u{43C}\u{438} \u{434}\u{43B}\u{44F} \u{447}\u{438}\u{441}\u{442}\u{43A}\u{438}
      \u{430}\u{432}\u{442}\u{43E}\u{43C}\u{43E}\u{431}\u{438}\u{43B}\u{435}\u{439}, \u{434}\u{43E}\u{43C}\u{43E}\u{432}, \u{441}\u{430}\u{434}\u{43E}\u{432} \u{438} \u{43F}\u{440}\u{43E}\u{43C}\u{44B}\u{448}\u{43B}\u{435}\u{43D}\u{43D}\u{44B}\u{445} \u{43E}\u{431}\u{44A}\u{435}\u{43A}\u{442}\u{43E}\u{432}. \u{41A}\u{430}\u{447}\u{435}\u{441}\u{442}\u{432}\u{43E} \u{438}
      \u{43D}\u{430}\u{434}\u{435}\u{436}\u{43D}\u{43E}\u{441}\u{442}\u{44C} \u{43F}\u{440}\u{43E}\u{434}\u{443}\u{43A}\u{446}\u{438}\u{438} Karcher \u{441}\u{434}\u{435}\u{43B}\u{430}\u{43B}\u{438} \u{435}\u{435} \u{43E}\u{434}\u{43D}\u{438}\u{43C} \u{438}\u{437} \u{432}\u{435}\u{434}\u{443}\u{449}\u{438}\u{445} \u{431}\u{440}\u{435}\u{43D}\u{434}\u{43E}\u{432}
      \u{432} \u{43E}\u{431}\u{43B}\u{430}\u{441}\u{442}\u{438} \u{443}\u{431}\u{43E}\u{440}\u{43A}\u{438} \u{438} \u{43E}\u{431}\u{441}\u{43B}\u{443}\u{436}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{44F} \u{43F}\u{43E}\u{432}\u{435}\u{440}\u{445}\u{43D}\u{43E}\u{441}\u{442}\u{435}\u{439} \u{43F}\u{43E} \u{432}\u{441}\u{435}\u{43C}\u{443} \u{43C}\u{438}\u{440}\u{443}.`,
        img: (0, _karcherPngDefault.default)
    },
    brand5: {
        name: "metabo",
        desc: `
      Metabo - \u{44D}\u{442}\u{43E} \u{43D}\u{435}\u{43C}\u{435}\u{446}\u{43A}\u{430}\u{44F} \u{43A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{44F}, \u{43A}\u{43E}\u{442}\u{43E}\u{440}\u{430}\u{44F} \u{441}\u{43F}\u{435}\u{446}\u{438}\u{430}\u{43B}\u{438}\u{437}\u{438}\u{440}\u{443}\u{435}\u{442}\u{441}\u{44F} \u{43D}\u{430} 
      \u{43F}\u{440}\u{43E}\u{438}\u{437}\u{432}\u{43E}\u{434}\u{441}\u{442}\u{432}\u{435} \u{44D}\u{43B}\u{435}\u{43A}\u{442}\u{440}\u{43E}\u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{438} \u{43E}\u{431}\u{43E}\u{440}\u{443}\u{434}\u{43E}\u{432}\u{430}\u{43D}\u{438}\u{44F} \u{434}\u{43B}\u{44F} \u{441}\u{442}\u{440}\u{43E}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{441}\u{442}\u{432}\u{430},
      \u{440}\u{435}\u{43C}\u{43E}\u{43D}\u{442}\u{430} \u{438} \u{43C}\u{435}\u{442}\u{430}\u{43B}\u{43B}\u{43E}\u{43E}\u{431}\u{440}\u{430}\u{431}\u{43E}\u{442}\u{43A}\u{438}. \u{41E}\u{43D}\u{430} \u{438}\u{437}\u{432}\u{435}\u{441}\u{442}\u{43D}\u{430} \u{441}\u{432}\u{43E}\u{435}\u{439} \u{432}\u{44B}\u{441}\u{43E}\u{43A}\u{43E}\u{439} \u{441}\u{442}\u{435}\u{43F}\u{435}\u{43D}\u{44C}\u{44E}
      \u{43A}\u{430}\u{447}\u{435}\u{441}\u{442}\u{432}\u{430}, \u{43D}\u{430}\u{434}\u{435}\u{436}\u{43D}\u{43E}\u{441}\u{442}\u{438} \u{438} \u{438}\u{43D}\u{43D}\u{43E}\u{432}\u{430}\u{446}\u{438}\u{439}. Metabo \u{43F}\u{440}\u{435}\u{434}\u{43B}\u{430}\u{433}\u{430}\u{435}\u{442} \u{448}\u{438}\u{440}\u{43E}\u{43A}\u{438}\u{439}
      \u{430}\u{441}\u{441}\u{43E}\u{440}\u{442}\u{438}\u{43C}\u{435}\u{43D}\u{442} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432}, \u{432}\u{43A}\u{43B}\u{44E}\u{447}\u{430}\u{44F} \u{431}\u{443}\u{440}, \u{434}\u{440}\u{435}\u{43B}\u{438}
      \u{438} \u{434}\u{440}., \u{438} \u{441}\u{43B}\u{430}\u{432}\u{438}\u{442}\u{441}\u{44F} \u{441}\u{432}\u{43E}\u{435}\u{439} \u{43F}\u{440}\u{43E}\u{447}\u{43D}\u{43E}\u{441}\u{442}\u{44C}\u{44E} \u{438} \u{434}\u{43E}\u{43B}\u{433}\u{43E}\u{432}\u{435}\u{447}\u{43D}\u{43E}\u{441}\u{442}\u{44C}\u{44E}
      \u{43F}\u{440}\u{43E}\u{434}\u{443}\u{43A}\u{446}\u{438}\u{438}, \u{447}\u{442}\u{43E} \u{434}\u{435}\u{43B}\u{430}\u{435}\u{442} \u{435}\u{435} \u{43F}\u{43E}\u{43F}\u{443}\u{43B}\u{44F}\u{440}\u{43D}\u{44B}\u{43C} \u{432}\u{44B}\u{431}\u{43E}\u{440}\u{43E}\u{43C} \u{441}\u{440}\u{435}\u{434}\u{438} \u{43F}\u{440}\u{43E}\u{444}\u{435}\u{441}\u{441}\u{438}\u{43E}\u{43D}\u{430}\u{43B}\u{43E}\u{432} 
      \u{438} \u{43B}\u{44E}\u{431}\u{438}\u{442}\u{435}\u{43B}\u{435}\u{439} \u{432}\u{43E} \u{432}\u{441}\u{435}\u{43C} \u{43C}\u{438}\u{440}\u{435}.`,
        img: (0, _metaboPngDefault.default)
    },
    brand6: {
        name: "bosch",
        desc: `
      Bosch - \u{44D}\u{442}\u{43E} \u{43D}\u{435}\u{43C}\u{435}\u{446}\u{43A}\u{430}\u{44F} \u{43C}\u{43D}\u{43E}\u{433}\u{43E}\u{43E}\u{442}\u{440}\u{430}\u{441}\u{43B}\u{435}\u{432}\u{430}\u{44F} \u{43A}\u{43E}\u{440}\u{43F}\u{43E}\u{440}\u{430}\u{446}\u{438}\u{44F}, \u{438}\u{437}\u{432}\u{435}\u{441}\u{442}\u{43D}\u{430}\u{44F} \u{441}\u{432}\u{43E}\u{438}\u{43C}\u{438} \u{43F}\u{440}\u{43E}\u{434}\u{443}\u{43A}\u{442}\u{430}\u{43C}\u{438} 
      \u{438} \u{443}\u{441}\u{43B}\u{443}\u{433}\u{430}\u{43C}\u{438} \u{432} \u{43E}\u{431}\u{43B}\u{430}\u{441}\u{442}\u{438} \u{44D}\u{43B}\u{435}\u{43A}\u{442}\u{440}\u{43E}\u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432}, \u{431}\u{44B}\u{442}\u{43E}\u{432}\u{43E}\u{439} \u{442}\u{435}\u{445}\u{43D}\u{438}\u{43A}\u{438}, \u{430}\u{432}\u{442}\u{43E}\u{43C}\u{43E}\u{431}\u{438}\u{43B}\u{44C}\u{43D}\u{44B}\u{445} 
      \u{43A}\u{43E}\u{43C}\u{43F}\u{43E}\u{43D}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{438} \u{442}\u{435}\u{445}\u{43D}\u{43E}\u{43B}\u{43E}\u{433}\u{438}\u{439}, \u{430} \u{442}\u{430}\u{43A}\u{436}\u{435} \u{441}\u{438}\u{441}\u{442}\u{435}\u{43C} \u{431}\u{435}\u{437}\u{43E}\u{43F}\u{430}\u{441}\u{43D}\u{43E}\u{441}\u{442}\u{438} \u{438} \u{43F}\u{440}\u{43E}\u{43C}\u{44B}\u{448}\u{43B}\u{435}\u{43D}\u{43D}\u{43E}\u{439} \u{442}\u{435}\u{445}\u{43D}\u{438}\u{43A}\u{438}. 
      \u{41E}\u{43D}\u{430} \u{44F}\u{432}\u{43B}\u{44F}\u{435}\u{442}\u{441}\u{44F} \u{43E}\u{434}\u{43D}\u{438}\u{43C} \u{438}\u{437} \u{43A}\u{440}\u{443}\u{43F}\u{43D}\u{435}\u{439}\u{448}\u{438}\u{445} \u{43F}\u{440}\u{43E}\u{438}\u{437}\u{432}\u{43E}\u{434}\u{438}\u{442}\u{435}\u{43B}\u{435}\u{439} \u{44D}\u{43B}\u{435}\u{43A}\u{442}\u{440}\u{43E}\u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{432} \u{43C}\u{438}\u{440}\u{435} \u{438} 
      \u{441}\u{43B}\u{430}\u{432}\u{438}\u{442}\u{441}\u{44F} \u{432}\u{44B}\u{441}\u{43E}\u{43A}\u{438}\u{43C} \u{43A}\u{430}\u{447}\u{435}\u{441}\u{442}\u{432}\u{43E}\u{43C} \u{438} \u{438}\u{43D}\u{43D}\u{43E}\u{432}\u{430}\u{446}\u{438}\u{44F}\u{43C}\u{438} \u{432} \u{441}\u{432}\u{43E}\u{438}\u{445} \u{43F}\u{440}\u{43E}\u{434}\u{443}\u{43A}\u{442}\u{430}\u{445}. Bosch \u{442}\u{430}\u{43A}\u{436}\u{435} \u{430}\u{43A}\u{442}\u{438}\u{432}\u{43D}\u{43E} 
      \u{440}\u{430}\u{431}\u{43E}\u{442}\u{430}\u{435}\u{442} \u{432} \u{43E}\u{431}\u{43B}\u{430}\u{441}\u{442}\u{438} \u{44D}\u{43A}\u{43E}\u{43B}\u{43E}\u{433}\u{438}\u{438} \u{438} \u{443}\u{441}\u{442}\u{43E}\u{439}\u{447}\u{438}\u{432}\u{43E}\u{441}\u{442}\u{438}, \u{440}\u{430}\u{437}\u{440}\u{430}\u{431}\u{430}\u{442}\u{44B}\u{432}\u{430}\u{44F} \u{44D}\u{43D}\u{435}\u{440}\u{433}\u{43E}\u{44D}\u{444}\u{444}\u{435}\u{43A}\u{442}\u{438}\u{432}\u{43D}\u{44B}\u{435} \u{438} 
      \u{44D}\u{43A}\u{43E}\u{43B}\u{43E}\u{433}\u{438}\u{447}\u{435}\u{441}\u{43A}\u{438} \u{447}\u{438}\u{441}\u{442}\u{44B}\u{435} \u{440}\u{435}\u{448}\u{435}\u{43D}\u{438}\u{44F}.`,
        img: (0, _boschPngDefault.default)
    },
    brand7: {
        name: "milwaukee",
        desc: `
      Milwaukee Electric Tool Corporation, \u{438}\u{43B}\u{438} \u{43F}\u{440}\u{43E}\u{441}\u{442}\u{43E} Milwaukee, \u{44D}\u{442}\u{43E} \u{430}\u{43C}\u{435}\u{440}\u{438}\u{43A}\u{430}\u{43D}\u{441}\u{43A}\u{430}\u{44F} 
      \u{43A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{44F}, \u{441}\u{43F}\u{435}\u{446}\u{438}\u{430}\u{43B}\u{438}\u{437}\u{438}\u{440}\u{443}\u{44E}\u{449}\u{430}\u{44F}\u{441}\u{44F} \u{43D}\u{430} \u{43F}\u{440}\u{43E}\u{438}\u{437}\u{432}\u{43E}\u{434}\u{441}\u{442}\u{432}\u{435} \u{43F}\u{440}\u{43E}\u{444}\u{435}\u{441}\u{441}\u{438}\u{43E}\u{43D}\u{430}\u{43B}\u{44C}\u{43D}\u{44B}\u{445} 
      \u{44D}\u{43B}\u{435}\u{43A}\u{442}\u{440}\u{43E}\u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{438} \u{43E}\u{431}\u{43E}\u{440}\u{443}\u{434}\u{43E}\u{432}\u{430}\u{43D}\u{438}\u{44F} \u{434}\u{43B}\u{44F} \u{441}\u{442}\u{440}\u{43E}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{44B}\u{445}, \u{43F}\u{440}\u{43E}\u{43C}\u{44B}\u{448}\u{43B}\u{435}\u{43D}\u{43D}\u{44B}\u{445} \u{438} \u{440}\u{435}\u{43C}\u{43E}\u{43D}\u{442}\u{43D}\u{44B}\u{445} 
      \u{440}\u{430}\u{431}\u{43E}\u{442}. \u{41E}\u{43D}\u{430} \u{438}\u{437}\u{432}\u{435}\u{441}\u{442}\u{43D}\u{430} \u{441}\u{432}\u{43E}\u{438}\u{43C}\u{438} \u{43C}\u{43E}\u{449}\u{43D}\u{44B}\u{43C}\u{438} \u{438} \u{43D}\u{430}\u{434}\u{435}\u{436}\u{43D}\u{44B}\u{43C}\u{438} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{43C}\u{438}, \u{442}\u{430}\u{43A}\u{438}\u{43C}\u{438} \u{43A}\u{430}\u{43A} \u{431}\u{443}\u{440}, 
      \u{448}\u{43B}\u{438}\u{444}\u{43E}\u{432}\u{430}\u{43B}\u{44C}\u{43D}\u{44B}\u{435} \u{43C}\u{430}\u{448}\u{438}\u{43D}\u{44B}, \u{434}\u{440}\u{435}\u{43B}\u{438}, \u{43F}\u{438}\u{43B}\u{44B} \u{438} \u{43C}\u{43D}\u{43E}\u{433}\u{438}\u{435} \u{434}\u{440}\u{443}\u{433}\u{438}\u{435}. \u{42D}\u{442}\u{43E}\u{442} \u{431}\u{440}\u{435}\u{43D}\u{434} \u{448}\u{438}\u{440}\u{43E}\u{43A}\u{43E} \u{43F}\u{440}\u{438}\u{437}\u{43D}\u{430}\u{43D} \u{432} 
      \u{441}\u{444}\u{435}\u{440}\u{435} \u{441}\u{442}\u{440}\u{43E}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{441}\u{442}\u{432}\u{430} \u{438} \u{440}\u{435}\u{43C}\u{43E}\u{43D}\u{442}\u{430} \u{437}\u{430} \u{441}\u{432}\u{43E}\u{439} \u{43A}\u{430}\u{447}\u{435}\u{441}\u{442}\u{432}\u{435}\u{43D}\u{43D}\u{44B}\u{439} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}.`,
        img: (0, _milwaukeePngDefault.default)
    }
};

},{"/src/assets/img/dewalt.png":"6iRsS","/src/assets/img/makita.png":"7XT6Z","/src/assets/img/metabo.png":"hmxyr","/src/assets/img/karcher.png":"4HOFe","/src/assets/img/bosch.png":"hyFy1","/src/assets/img/festool.png":"ckfuM","/src/assets/img/milwaukee.png":"htq6z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hYqvC"], null, "parcelRequire8cce")

//# sourceMappingURL=main.03d338dc.js.map
