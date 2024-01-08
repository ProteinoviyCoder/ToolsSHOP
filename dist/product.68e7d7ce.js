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
})({"dxArK":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c741619a68e7d7ce";
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

},{}],"ewuMC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Страница товара
parcelHelpers.export(exports, "getProductPage", ()=>getProductPage);
var _productCss = require("/src/js/pages/product/product.css");
var _mainTitleJs = require("/src/js/components/mainTitle/mainTitle.js");
var _descJs = require("/src/js/components/desc/desc.js");
var _sliderJs = require("/src/js/components/slider/slider.js");
var _btnBackHistoryJs = require("/src/js/components/btnBackHistory/btnBackHistory.js");
var _countBasketJs = require("/src/js/components/countBasket/countBasket.js");
async function getProductPage(idCard) {
    //делаем запрос в локал стоража, получаем данные карточки по её id
    let result;
    const cardsLocal = JSON.parse(localStorage.getItem("cards"));
    for(let i in cardsLocal)if (cardsLocal[i].id == idCard) {
        console.log(cardsLocal[i]);
        result = cardsLocal[i];
    }
    //создаём страницу в которой разместим весь контент
    const page = document.createElement("div");
    page.classList.add("page", "product-page", "container");
    //создаём стрелку назад, для перемещения по истории браузера - назад
    const btnBack = (0, _btnBackHistoryJs.getBtnBackHistoryWindow)();
    btnBack.classList.add("product__btn-back");
    //создаём контейнер для стрелки назад и названия и и объеденяем
    const contentSliderTitleCost = document.createElement("div");
    contentSliderTitleCost.classList.add("content-slider-title-cost");
    //создаём слайдер
    const slider = (0, _sliderJs.getSlider)(result.imgBig1, result.imgBig2, result.imgBig3, result.imgBig4, result.imgBig5);
    slider.classList.add("product__slider");
    const contentTitleCost = document.createElement("div");
    contentTitleCost.classList.add("product__content-title-cost");
    //создаём название страницы
    const mainTitle = (0, _mainTitleJs.getMainTitle)(result.name);
    mainTitle.classList.add("product__main-title");
    //создаём контейнер для кнопки заказа и цены
    const divForBtnOrderCost = document.createElement("div");
    divForBtnOrderCost.classList.add("product__div-for-btn-order-cost");
    //создаём цену
    const cost = document.createElement("strong");
    cost.classList.add("product__price");
    cost.textContent = result.price + " " + "\u0440";
    //создаём кнопку для добавления товара в заказ
    const btnOrder = document.createElement("button");
    btnOrder.classList.add("product__button-order");
    btnOrder.textContent = "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0437\u0430\u043A\u0430\u0437";
    btnOrder.addEventListener("click", function() {
        btnOrder.classList.add("none");
        countBasket.countBasket.classList.remove("none");
        if (JSON.parse(localStorage.getItem("basket")) != null) {
            const basket = JSON.parse(localStorage.getItem("basket"));
            let valueBasket = true;
            for (let i of basket)if (i.name === result.name) {
                valueBasket = false;
                i.value = i.value + 1;
            }
            if (valueBasket === true) basket.push({
                name: result.name,
                value: 1
            });
            localStorage.removeItem("basket");
            localStorage.setItem("basket", JSON.stringify(basket));
            countBasket.changeCountInLocal();
        } else {
            const basket = [];
            basket.push({
                name: result.name,
                value: 1
            });
            localStorage.setItem("basket", JSON.stringify(basket));
            countBasket.changeCountInLocal();
        }
    });
    const countBasket = (0, _countBasketJs.getCountBasket)(result.name, btnOrder, result.price, cost);
    if (result.countBasketBoolean === true) {
        countBasket.countBasket.classList.remove("none");
        btnOrder.classList.add("none");
    } else countBasket.countBasket.classList.add("none");
    //объеденяем в один контейнер цену и кнопку для заказа
    divForBtnOrderCost.append(cost, btnOrder, countBasket.countBasket);
    contentTitleCost.append(mainTitle, divForBtnOrderCost);
    contentSliderTitleCost.append(btnBack, slider, contentTitleCost);
    //cсоздаём описание
    const desc = (0, _descJs.getDesk)(result.name, result.category, result.desc, result.equipment, result.characteristics);
    desc.classList.add("product__desc");
    //собираем страницу
    page.append(contentSliderTitleCost, desc);
    return page;
}

},{"/src/js/pages/product/product.css":"kuLxl","/src/js/components/mainTitle/mainTitle.js":"ki5if","/src/js/components/desc/desc.js":"2aBBT","/src/js/components/slider/slider.js":"awVQX","/src/js/components/btnBackHistory/btnBackHistory.js":"g4i62","/src/js/components/countBasket/countBasket.js":"aYsRB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kuLxl":[function() {},{}],"ki5if":[function(require,module,exports) {
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

},{"/src/js/components/mainTitle/mainTitle.css":"8xezA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8xezA":[function() {},{}],"2aBBT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Создаёт описание
parcelHelpers.export(exports, "getDesk", ()=>getDesk);
var _descCss = require("/src/js/components/desc/desc.css");
function getDesk(dataName, dataCategory, datadesc, dataEquipment, dataCharacteristics) {
    const desc = document.createElement("div");
    desc.classList.add("desk");
    function createStringOfDesc(nameString, valueString) {
        const descString = document.createElement("div");
        descString.classList.add("desc__string");
        const namingString = document.createElement("p");
        namingString.classList.add("desc__naming-string");
        namingString.textContent = nameString;
        const contentString = document.createElement("p");
        contentString.classList.add("desc__content-string");
        contentString.insertAdjacentHTML("beforeend", valueString);
        descString.append(namingString, contentString);
        const hr = document.createElement("hr");
        hr.classList.add("desc__hr");
        desc.append(descString, hr);
    }
    createStringOfDesc("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:", dataName);
    if (dataCategory != null) createStringOfDesc("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:", dataCategory);
    if (datadesc != null) createStringOfDesc("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435:", datadesc);
    if (dataEquipment != null) createStringOfDesc("\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u044F:", dataEquipment);
    if (dataCharacteristics != null) {
        //разделяем описание на отступы
        const resultCharacteristics = dataCharacteristics.split("\n").join("<br />");
        createStringOfDesc("\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438:", resultCharacteristics);
    }
    return desc;
}

},{"/src/js/components/desc/desc.css":"kfYoF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kfYoF":[function() {},{}],"awVQX":[function(require,module,exports) {
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

},{"/src/js/components/slider/slider.css":"ixnlV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ixnlV":[function() {},{}],"g4i62":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBtnBackHistoryWindow", ()=>getBtnBackHistoryWindow);
var _btnBackHistoryCss = require("/src/js/components/btnBackHistory/btnBackHistory.css");
var _arrowLeftPng = require("/src/assets/img/arrowLeft.png");
var _arrowLeftPngDefault = parcelHelpers.interopDefault(_arrowLeftPng);
function getBtnBackHistoryWindow() {
    const btnBackHistory = document.createElement("button");
    btnBackHistory.classList.add("btn-back-history");
    btnBackHistory.addEventListener("click", function() {
        window.history.back();
    });
    const arrowLeft = document.createElement("img");
    arrowLeft.classList.add("btn-back__string-left");
    arrowLeft.src = (0, _arrowLeftPngDefault.default);
    btnBackHistory.append(arrowLeft);
    return btnBackHistory;
}

},{"/src/js/components/btnBackHistory/btnBackHistory.css":"hbjLu","/src/assets/img/arrowLeft.png":"3S8nu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbjLu":[function() {},{}],"3S8nu":[function(require,module,exports) {
module.exports = require("914eb4dc883f2283").getBundleURL("h6DaC") + "arrowLeft.846d34f0.png" + "?" + Date.now();

},{"914eb4dc883f2283":"lgJ39"}],"aYsRB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCountBasket", ()=>getCountBasket);
var _countBasketCss = require("/src/js/components/countBasket/countBasket.css");
function countingPrice(startPrice, countProduct, placeForResult) {
    let resultPrice = (Number(startPrice.split(" ").join("")) * Number(countProduct)).toString().split("");
    if (resultPrice.length == 4) {
        const remainder = resultPrice.splice(1, 3).join("");
        placeForResult.textContent = resultPrice.join("") + " " + remainder + " \u0440";
    } else if (resultPrice.length == 5) {
        const remainder = resultPrice.splice(2, 3).join("");
        placeForResult.textContent = resultPrice.join("") + " " + remainder + " \u0440";
    } else if (resultPrice.length == 6) {
        const remainder = resultPrice.splice(3, 3).join("");
        placeForResult.textContent = resultPrice.join("") + " " + remainder + " \u0440";
    } else if (resultPrice.length == 7) {
        const remainder1 = resultPrice.splice(1, 6);
        const remainder2 = remainder1.splice(3, 3).join("");
        placeForResult.textContent = resultPrice.join("") + " " + remainder1.join("") + " " + remainder2 + " \u0440";
    }
}
function getCountBasket(dataBasket, btnBuy, price, placePrice) {
    const countBasket = document.createElement("div");
    countBasket.classList.add("count-basket");
    const btnMinus = document.createElement("button");
    btnMinus.classList.add("count-basket__btn-minus");
    btnMinus.textContent = "-";
    btnMinus.addEventListener("click", function() {
        const basket = JSON.parse(localStorage.getItem("basket"));
        for (let i of basket)if (i.name == dataBasket) {
            i.value = i.value - 1;
            inputCount.value = i.value;
            if (i.value == 0) {
                basket.splice(basket.indexOf(i), 1);
                if (btnBuy != null) btnBuy.classList.remove("none");
                const cards = JSON.parse(localStorage.getItem("cards"));
                if (cards != null) {
                    for(let x in cards)if (dataBasket == cards[x].name) cards[x].countBasketBoolean = false;
                    localStorage.removeItem("cards");
                    localStorage.setItem("cards", JSON.stringify(cards));
                }
            } else if (i.value != 0) changeCountInLocal();
        }
        localStorage.removeItem("basket");
        localStorage.setItem("basket", JSON.stringify(basket));
        if (inputCount.value == 0) countBasket.classList.add("none");
        else countingPrice(price, inputCount.value, placePrice);
    });
    const inputCount = document.createElement("input");
    inputCount.classList.add("count-basket__input");
    inputCount.type = "number";
    inputCount.addEventListener("keyup", function(event) {
        if (event.keyCode == 13) {
            const basket = JSON.parse(localStorage.getItem("basket"));
            for (let i of basket)if (i.name == dataBasket) {
                i.value = inputCount.value;
                inputCount.value = i.value;
                inputCount.blur();
                if (i.value == 0) {
                    placePrice.textContent = price;
                    basket.splice(basket.indexOf(i), 1);
                    if (btnBuy != null) btnBuy.classList.remove("none");
                    countBasket.classList.add("none");
                    const cards = JSON.parse(localStorage.getItem("cards"));
                    if (cards != null) {
                        for(let x in cards)if (dataBasket == cards[x].name) cards[x].countBasketBoolean = false;
                        localStorage.removeItem("cards");
                        localStorage.setItem("cards", JSON.stringify(cards));
                    }
                } else countingPrice(price, inputCount.value, placePrice);
            }
            localStorage.removeItem("basket");
            localStorage.setItem("basket", JSON.stringify(basket));
        }
    });
    if (btnBuy != null) btnBuy.addEventListener("click", getValueInputCount);
    function getValueInputCount() {
        const basket = JSON.parse(localStorage.getItem("basket"));
        if (basket != null) {
            for (let i of basket)if (i.name == dataBasket) inputCount.value = i.value;
        }
    }
    getValueInputCount();
    countingPrice(price, inputCount.value, placePrice);
    const btnPlus = document.createElement("button");
    btnPlus.classList.add("count-basket__btn-plus");
    btnPlus.textContent = "+";
    btnPlus.addEventListener("click", function() {
        const basket = JSON.parse(localStorage.getItem("basket"));
        for (let i of basket)if (i.name == dataBasket) {
            i.value = Number(i.value) + 1;
            inputCount.value = i.value;
            if (i.value == 0) {
                basket.splice(basket.indexOf(i), 1);
                btnBuy.classList.remove("none");
                const cards = JSON.parse(localStorage.getItem("cards"));
                if (cards != null) {
                    for(let x in cards)if (dataBasket == cards[x].name) cards[x].countBasketBoolean = false;
                    localStorage.removeItem("cards");
                    localStorage.setItem("cards", JSON.stringify(cards));
                }
            }
        }
        localStorage.removeItem("basket");
        localStorage.setItem("basket", JSON.stringify(basket));
        changeCountInLocal();
        countingPrice(price, inputCount.value, placePrice);
    });
    countBasket.append(btnMinus, inputCount, btnPlus);
    function changeCountInLocal() {
        const cards = JSON.parse(localStorage.getItem("cards"));
        if (cards != null) {
            for(let x in cards)if (dataBasket == cards[x].name) cards[x].countBasketBoolean = true;
            localStorage.removeItem("cards");
            localStorage.setItem("cards", JSON.stringify(cards));
        }
    }
    return {
        countBasket: countBasket,
        changeCountInLocal: changeCountInLocal
    };
}

},{"/src/js/components/countBasket/countBasket.css":"ix9RU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ix9RU":[function() {},{}]},["dxArK"], null, "parcelRequire8cce")

//# sourceMappingURL=product.68e7d7ce.js.map
