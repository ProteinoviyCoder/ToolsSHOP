function e(e,t,n,c){Object.defineProperty(e,t,{get:n,set:c,enumerable:!0,configurable:!0})}var t=globalThis.parcelRequire8cce,n=t.register;n("hZDmK",function(n,c){e(n.exports,"getNotFoundPage",()=>s);var a=t("70qrb"),l=t("6grhs");function s(){let e=document.createElement("div");e.classList.add("page","catalog-page","container");let t=(0,a.getMainTitle)("Страница не найдена"),n=(0,l.getDesk)("404");return e.append(t,n),e}}),n("70qrb",function(t,n){e(t.exports,"getMainTitle",()=>c);function c(e){let t=document.createElement("h1");return t.classList.add("main-title"),t.textContent=e,t}}),n("6grhs",function(t,n){e(t.exports,"getDesk",()=>c);function c(e,t,n,c,a){let l=document.createElement("div");function s(e,t){let n=document.createElement("div");n.classList.add("desc__string");let c=document.createElement("p");c.classList.add("desc__naming-string"),c.textContent=e;let a=document.createElement("p");a.classList.add("desc__content-string"),a.insertAdjacentHTML("beforeend",t),n.append(c,a);let s=document.createElement("hr");s.classList.add("desc__hr"),l.append(n,s)}if(l.classList.add("desk"),s("Название:",e),null!=t&&s("Категория:",t),null!=n&&s("Описание:",n),null!=c&&s("Комплектация:",c),null!=a){//разделяем описание на отступы
let e=a.split("\n").join("<br />");s("Характеристики:",e)}return l}});//# sourceMappingURL=404.19e3d314.js.map

//# sourceMappingURL=404.19e3d314.js.map
