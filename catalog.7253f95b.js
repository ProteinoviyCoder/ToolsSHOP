function e(e,t,a,l){Object.defineProperty(e,t,{get:a,set:l,enumerable:!0,configurable:!0})}var t=globalThis.parcelRequire8cce,a=t.register;a("6ELIT",function(a,l){e(a.exports,"getCatalogPage",()=>d);var n=t("5umNy"),s=t("70qrb"),o=t("eb9MZ"),c=t("b0mMS"),i=t("hgWzp"),r=t("l0scm");function d(e){//делаем страницу
let t=document.createElement("div");t.classList.add("page","catalog-page","container");//создаём контейнер для загаловка, поиска, брендов и места отоброжения карточек товара
let a=document.createElement("div");a.classList.add("div-for__title__product-list");//создаём заголовок
let l=(0,s.getMainTitle)("Каталог");l.classList.add("catalog__main-title");//создаём поиск
let d=(0,r.getSearch)();d.classList.add("catalog__search");//создаём контейнер для заголовка и поиска
let u=document.createElement("div");u.classList.add("div-search-main-title"),//объеденяем заголовок и поиск
u.append(l,d);//создаём список для карточек товара
let m=(0,o.getProductList)(),g=(0,i.getBrands)(e,m.list),p=(0,n.getCategories)();if(//создаём карточки товара и вставляем в место для карточек
async function(){let t=JSON.parse(localStorage.getItem("cards"));if("Все"==e){let e=p.querySelectorAll(".item-categories");for(let t of e)t.classList.remove("active"),""===t.childNodes[1].textContent&&t.classList.add("active");for(let e in t){let a=(0,c.getProductCard)(t[e].name,t[e].price,t[e].desc,t[e].imgSmall,t[e].id,t[e].countBasketBoolean);m.list.append(a)}}else if(""!=e){let a=p.querySelectorAll(".item-categories");for(let t of a)t.classList.remove("active"),t.childNodes[1].textContent===e&&t.classList.add("active");for(let a in t)if(e===t[a].categoryENG){let e=(0,c.getProductCard)(t[a].name,t[a].price,t[a].desc,t[a].imgSmall,t[a].id,t[a].countBasketBoolean);m.list.append(e)}}}(),m.list.childNodes.length>29){let e=m.list.querySelectorAll(".product-list__item"),t=-1;for(let a of e)(t+=1)>29&&a.classList.add("catalog__none");let a=document.createElement("button");a.classList.add("catalog__btn-else"),a.textContent="Показать ещё",a.addEventListener("click",function(){let e=m.list.querySelectorAll(".product-list__item"),t=m.list.querySelectorAll(".product-list__item.catalog__none"),l=e.length-t.length+30;for(let t of(productFlag=0,e))(productFlag+=1)<=l&&t.classList.remove("catalog__none");0===m.list.querySelectorAll(".product-list__item.catalog__none").length&&a.classList.add("catalog__none")}),m.list.append(a)}return(//объеденяем загаловок, поиск, бренды и место отоброжения для карточек товара
a.append(u,g,m.list),//собираем страницу
t.append(p,a),t)}}),a("5umNy",function(a,l){e(a.exports,"getCategories",()=>o);var n=t("3bKSZ"),s=t("7gSKI");function o(){let e=document.createElement("div");e.classList.add("categories-module");let t=document.createElement("div");t.classList.add("categories__content-categories");let a=(0,n.getSemiTitle)("Категории");a.classList.add("title-categories");let l=document.createElement("ul");function o(e,t){let a=document.createElement("li");a.classList.add("item-categories"),a.textContent=e;let n=document.createElement("p");n.classList.add("none"),n.textContent=t,a.append(n),a.addEventListener("click",function(e){e.target.classList.contains("item-categories")&&(""===t||void 0===t?(0,s.router).navigate("/catalog"):(0,s.router).navigate(`/catalog/${t}`),window.scrollTo(0,0))}),l.append(a)}l.classList.add("list-categories"),o("Все"),o("Пилы электрические","pila-electro"),o("Пылесосы строительные","stroy-pilesos"),o("Шлифовальные машины","shlif-mash"),o("Дрели и шуруповерты","dreli-shrupoverti"),o("Фрезеры","frezeri"),o("Столярные инструменты","stolyirnie-instrumenti"),o("Пояса, ремни, сумки","remni"),o("Зарядные устройства и аккумуляторы","zaryidki-akb"),o("Станки","stanok"),o("Лазерные уровни и нивелиры","lazer-uroven-niveliri"),o("Другое","drugoe"),t.append(a,l),e.append(t);let c=!1;return document.addEventListener("scroll",function(){e.getBoundingClientRect().top<0&&!1===c?(t.classList.add("fixed-block"),e.classList.add("categories-module-fixed"),c=!0):e.getBoundingClientRect().top>0&&(t.classList.remove("fixed-block"),e.classList.remove("categories-module-fixed"),c=!1)}),e}}),a("3bKSZ",function(t,a){e(t.exports,"getSemiTitle",()=>l);function l(e){let t=document.createElement("h3");return t.classList.add("semi-title"),t.textContent=e,t}}),a("70qrb",function(t,a){e(t.exports,"getMainTitle",()=>l);function l(e){let t=document.createElement("h1");return t.classList.add("main-title"),t.textContent=e,t}}),a("b0mMS",function(a,l){e(a.exports,"getProductCard",()=>c);var n=t("ktF9J"),s=t("7gSKI"),o=t("iVIF5");function c(e,t,a,l,c,i){let r=document.createElement("li");r.classList.add("product-list__item");let d=document.createElement("img");d.classList.add("image"),d.src=l,d.addEventListener("click",function(e){e.preventDefault(),(0,s.router).navigate(`/product/${c}`)});let u=document.createElement("h2");u.classList.add("product-list__title");let m=(0,n.getNavigationLink)(`/product/${c}`,e);m.classList.remove("navigation-link"),m.classList.add("product-card__product-link"),u.append(m);let g=document.createElement("strong");g.classList.add("product-list__price"),g.textContent=`${t} \u{440}\u{443}\u{431}`;let p=document.createElement("div");p.classList.add("div-for-title-price"),p.append(u,g);let f=document.createElement("button");f.classList.add("btn","btn__product-card"),f.textContent="В корзину",f.addEventListener("click",function(){if(null!=JSON.parse(localStorage.getItem("basket"))){let t=JSON.parse(localStorage.getItem("basket")),a=!0;for(let l of t)l.name===e&&(a=!1,l.value=l.value+1);!0===a&&t.push({name:e,value:1}),localStorage.removeItem("basket"),localStorage.setItem("basket",JSON.stringify(t)),v.changeCountInLocal()}else{let t=[];t.push({name:e,value:1}),localStorage.setItem("basket",JSON.stringify(t)),v.changeCountInLocal()}f.classList.add("none"),v.countBasket.classList.remove("none")});let v=(0,o.getCountBasket)(e,f,t,g);!0===i?(v.countBasket.classList.remove("none"),f.classList.add("none")):v.countBasket.classList.add("none");let L=document.createElement("p");return L.classList.add("none"),L.textContent=c,r.append(d,p,v.countBasket,f),r}}),a("iVIF5",function(t,a){function l(e,t,a){let l=(Number(e.split(" ").join(""))*Number(t)).toString().split("");if(4==l.length){let e=l.splice(1,3).join("");a.textContent=l.join("")+" "+e+" р"}else if(5==l.length){let e=l.splice(2,3).join("");a.textContent=l.join("")+" "+e+" р"}else if(6==l.length){let e=l.splice(3,3).join("");a.textContent=l.join("")+" "+e+" р"}else if(7==l.length){let e=l.splice(1,6),t=e.splice(3,3).join("");a.textContent=l.join("")+" "+e.join("")+" "+t+" р"}}function n(e,t,a,n){let s=document.createElement("div");s.classList.add("count-basket");let o=document.createElement("button");o.classList.add("count-basket__btn-minus"),o.textContent="-",o.addEventListener("click",function(){let o=JSON.parse(localStorage.getItem("basket"));for(let a of o)if(a.name==e){if(a.value=a.value-1,c.value=a.value,0==a.value){o.splice(o.indexOf(a),1),null!=t&&t.classList.remove("none");let l=JSON.parse(localStorage.getItem("cards"));if(null!=l){for(let t in l)e==l[t].name&&(l[t].countBasketBoolean=!1);localStorage.removeItem("cards"),localStorage.setItem("cards",JSON.stringify(l))}}else 0!=a.value&&d()}localStorage.removeItem("basket"),localStorage.setItem("basket",JSON.stringify(o)),0==c.value?s.classList.add("none"):l(a,c.value,n)});let c=document.createElement("input");function i(){let t=JSON.parse(localStorage.getItem("basket"));if(null!=t)for(let a of t)a.name==e&&(c.value=a.value)}c.classList.add("count-basket__input"),c.type="number",c.addEventListener("keyup",function(o){if(13==o.keyCode){let o=JSON.parse(localStorage.getItem("basket"));for(let i of o)if(i.name==e){if(i.value=c.value,c.value=i.value,c.blur(),0==i.value){n.textContent=a,o.splice(o.indexOf(i),1),null!=t&&t.classList.remove("none"),s.classList.add("none");let l=JSON.parse(localStorage.getItem("cards"));if(null!=l){for(let t in l)e==l[t].name&&(l[t].countBasketBoolean=!1);localStorage.removeItem("cards"),localStorage.setItem("cards",JSON.stringify(l))}}else l(a,c.value,n)}localStorage.removeItem("basket"),localStorage.setItem("basket",JSON.stringify(o))}}),null!=t&&t.addEventListener("click",i),i(),l(a,c.value,n);let r=document.createElement("button");function d(){let t=JSON.parse(localStorage.getItem("cards"));if(null!=t){for(let a in t)e==t[a].name&&(t[a].countBasketBoolean=!0);localStorage.removeItem("cards"),localStorage.setItem("cards",JSON.stringify(t))}}return r.classList.add("count-basket__btn-plus"),r.textContent="+",r.addEventListener("click",function(){let s=JSON.parse(localStorage.getItem("basket"));for(let a of s)if(a.name==e&&(a.value=Number(a.value)+1,c.value=a.value,0==a.value)){s.splice(s.indexOf(a),1),t.classList.remove("none");let l=JSON.parse(localStorage.getItem("cards"));if(null!=l){for(let t in l)e==l[t].name&&(l[t].countBasketBoolean=!1);localStorage.removeItem("cards"),localStorage.setItem("cards",JSON.stringify(l))}}localStorage.removeItem("basket"),localStorage.setItem("basket",JSON.stringify(s)),d(),l(a,c.value,n)}),s.append(o,c,r),{countBasket:s,changeCountInLocal:d}}e(t.exports,"getCountBasket",()=>n)}),a("hgWzp",function(a,l){e(a.exports,"getBrands",()=>s);var n=t("b0mMS");function s(e,t){//создаём список брендов
let a=document.createElement("ul");//создаём бренды
function l(l){let s=document.createElement("button");s.classList.add("brand"),s.textContent=l.toUpperCase(),"ВСЕ"==s.textContent&&s.classList.add("active-brand"),s.addEventListener("click",async function(){//Отмечаем нажатую кнопку как активную
let a=document.querySelectorAll(".brand");for(let e of a)e.classList.remove("active-brand");s.classList.add("active-brand");//делаем запрос на сервер
let l=JSON.parse(localStorage.getItem("cards"));//делаем перебор по данным, для данных отвечающим критериям поиска создаём карточку и добавляем в место для данных
for(let a in //очищаем место для данных
t.innerHTML="",l)if("Все"!=e){// если категория НЕ "все" И бренд конкретный
if("ВСЕ"!=s.textContent){if(void 0!=l[a].brand&&l[a].brand.toUpperCase()===s.textContent&&l[a].categoryENG===e){let e=(0,n.getProductCard)(l[a].name,l[a].price,l[a].desc,l[a].imgSmall,l[a].id,l[a].countBasketBoolean);t.append(e)}}else if("ВСЕ"==s.textContent&&l[a].categoryENG===e){let e=(0,n.getProductCard)(l[a].name,l[a].price,l[a].desc,l[a].imgSmall,l[a].id,l[a].countBasketBoolean);t.append(e)}}else if("Все"==e){// если категория ВСЕ И конкретный бренд
if("ВСЕ"!=s.textContent){if(void 0!=l[a].brand&&l[a].brand.toUpperCase()===s.textContent){let e=(0,n.getProductCard)(l[a].name,l[a].price,l[a].desc,l[a].imgSmall,l[a].id,l[a].countBasketBoolean);t.append(e)}}else if("ВСЕ"==s.textContent){let e=(0,n.getProductCard)(l[a].name,l[a].price,l[a].desc,l[a].imgSmall,l[a].id,l[a].countBasketBoolean);t.append(e)}}if(""==t.innerHTML||null==t.innerHTML){let e=document.createElement("p");e.classList.add("brand__not-found-text"),e.textContent="Похоже такого у нас нет, попробуйте поискать другой бренд :)",t.append(e)}}),a.append(s)}a.classList.add("list-brand"),l("Все"),l("DeWalt"),l("Makita"),l("Metabo"),l("Festool"),l("Karcher"),l("Milwaukee"),l("Bosch"),l("Husqvarna"),l("Leica"),l("Mac Allister");let s=a.querySelectorAll(".brand");for(let e of s)"Все"==e.textContent&&e.classList.add("active-brand");return a}}),a("l0scm",function(a,l){e(a.exports,"getSearch",()=>s);var n=t("7gSKI");function s(){//создаём контейнер для поисковика и блока с подсказками
let e=document.createElement("div");e.classList.add("search-block");//создаём поисковую строку
let t=document.createElement("input");t.classList.add("search"),t.type="text",t.placeholder="Что ищете?";//создаём блок с подсказками при поиске
let a=document.createElement("ul");a.classList.add("help-list"),a.classList.add("search__none");let l=document.createElement("p");l.classList.add("first-item"),l.classList.add("search__none"),l.textContent="Ничего не найдено",a.append(l);let s=JSON.parse(localStorage.getItem("cards"));for(let e in s){let t=document.createElement("li");t.classList.add("help-item"),t.classList.add("search__none"),t.textContent=s[e].name.toUpperCase(),t.addEventListener("click",function(){(0,n.router).navigate(`/product/${s[e].id}`)}),a.append(t)}return e.append(t,a),t.addEventListener("input",function(e){""==e.target.value?a.classList.add("search__none"):a.classList.remove("search__none");let t=e.target.value.split(" "),n=a.querySelectorAll(".help-item");for(let e of n){let a=!0;for(let l of t)-1==e.textContent.search(l.toUpperCase())&&(a=!1),!0===a?e.classList.remove("search__none"):!1===a&&e.classList.add("search__none")}let s=!0;for(let e of n)e.classList.contains("search__none")||(s=!1);!0===s?l.classList.remove("search__none"):l.classList.add("search__none")}),document.addEventListener("click",function(e){let t=e.composedPath().includes("help-list");if(!t){let e=document.querySelector(".help-list");void 0!=e&&e.classList.add("search__none")}}),e}});//# sourceMappingURL=catalog.7253f95b.js.map

//# sourceMappingURL=catalog.7253f95b.js.map