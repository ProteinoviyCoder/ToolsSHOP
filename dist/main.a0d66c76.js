function u(u){return u&&u.__esModule?u.default:u}function e(u,e,t,n){Object.defineProperty(u,e,{get:t,set:n,enumerable:!0,configurable:!0})}var t=globalThis.parcelRequire8cce,n=t.register;n("bKJQj",function(n,a){e(n.exports,"getMainPage",()=>b);var E=t("cfmq5"),i=t("kBvUi"),s=t("7YGko"),l=t("2p8DO"),d=t("3em7p"),c=t("da1th"),m=t("af1s1"),o=t("CECt8"),r=t("8jq1F"),D=t("gGEQj"),B=t("kDVEx"),C=t("bYlL9"),F=t("1Gznb"),_=t("aKub4"),p=t("brLbN"),A=t("70qrb"),g=t("3bKSZ"),L=t("aqWqo"),f=t("1BXZc");function b(){let e=document.createElement("div");e.classList.add("page","main-page","container");//делаем контент логотипом и описанием компании
let t=document.createElement("div");t.classList.add("main__container-content");let n=document.createElement("img");n.classList.add("main__logo"),n.src=/*@__PURE__*/u(E);let a=document.createElement("div");a.classList.add("main__title-and-desc");let b=(0,A.getMainTitle)("Планета инструмента");b.classList.add("main__title");let h=document.createElement("p");h.classList.add("main__desc"),h.textContent=`\u{417}\u{430} \u{434}\u{43E}\u{43B}\u{433}\u{43E}\u{435} \u{432}\u{440}\u{435}\u{43C}\u{44F} \u{43D}\u{430} \u{440}\u{44B}\u{43D}\u{43A}\u{435}, \u{437}\u{430}\u{440}\u{435}\u{43A}\u{43E}\u{43C}\u{435}\u{43D}\u{434}\u{43E}\u{432}\u{430}\u{43B}\u{438} \u{441}\u{435}\u{431}\u{44F} \u{43A}\u{430}\u{43A} \u{43D}\u{430}\u{434}\u{451}\u{436}\u{43D}\u{43E}\u{433}\u{43E} \u{43F}\u{440}\u{43E}\u{434}\u{430}\u{432}\u{446}\u{430}- \u{43D}\u{43E}\u{432}\u{43E}\u{433}\u{43E}, \u{43E}\u{440}\u{438}\u{433}\u{438}\u{43D}\u{430}\u{43B}\u{44C}\u{43D}\u{43E}\u{433}\u{43E} \u{438} \u{43A}\u{430}\u{447}\u{435}\u{441}\u{442}\u{432}\u{435}\u{43D}\u{43D}\u{43E}\u{433}\u{43E} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{430}.
     \u{41A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{44F} \u{43E}\u{431}\u{43B}\u{430}\u{434}\u{430}\u{44E}\u{449}\u{430}\u{44F} \u{43E}\u{433}\u{440}\u{43E}\u{43C}\u{43D}\u{44B}\u{43C} \u{43A}\u{43E}\u{43B}\u{438}\u{447}\u{435}\u{441}\u{442}\u{432}\u{43E}\u{43C} \u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{44B}\u{445} \u{43E}\u{442}\u{437}\u{44B}\u{432}\u{43E}\u{432}, \u{43F}\u{43E}\u{441}\u{442}\u{43E}\u{44F}\u{43D}\u{43D}\u{44B}\u{445} \u{43A}\u{43B}\u{438}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{438} \u{432}\u{44B}\u{441}\u{43E}\u{43A}\u{43E}\u{433}\u{43E} \u{441}\u{43F}\u{440}\u{43E}\u{441}\u{430}`,a.append(b,h),t.append(n,a);//делаем контент с брендами
let v=document.createElement("div");v.classList.add("main__container-content","main__content2");let x=(0,g.getSemiTitle)("У нас Вы можете найти эти бренды");x.classList.add("main__semi-title");let k=document.createElement("div");function w(u){let e=document.createElement("img");e.classList.add("main__img-brand"),e.src=u,k.append(e)}k.classList.add("main__brand-images"),w(/*@__PURE__*/u(i)),w(/*@__PURE__*/u(s)),w(/*@__PURE__*/u(l)),w(/*@__PURE__*/u(d)),w(/*@__PURE__*/u(c)),w(/*@__PURE__*/u(m)),w(/*@__PURE__*/u(o));let S=document.createElement("div");S.classList.add("main__content-slider-desc");let H=(0,L.getSlider)(/*@__PURE__*/u(i),/*@__PURE__*/u(s),/*@__PURE__*/u(m),/*@__PURE__*/u(d),/*@__PURE__*/u(l),/*@__PURE__*/u(c),/*@__PURE__*/u(o));H.classList.add("main__slider","main-elements-right","main-elements");let R=f.descBrand,q=document.createElement("p");q.classList.add("main__slider-desc","main-elements-left","main-elements"),q.textContent=R.brand.desc;let U=H.querySelector(".slider__button-left");U.addEventListener("click",M);let j=H.querySelector(".slider__button-right");function M(){let u=H.querySelector(".slider__div-image");for(let e in q.textContent="",R)R[e].img==u.firstChild.src&&(q.textContent=R[e].desc)}j.addEventListener("click",M),S.append(H,q);let T=document.createElement("hr");T.classList.add("main__hr"),v.append(x,k,S,T);// ----------------ОТДЕЛ №3-------------------------
//делаем 3 отдел о дружной команде и отзывах
let y=document.createElement("div");y.classList.add("main__container-content","main__content3");let G=document.createElement("img");G.classList.add("main__img-hands"),G.src=/*@__PURE__*/u(r);let K=document.createElement("ul");function z(u){let e=document.createElement("li");e.classList.add("main__item__about-team"),e.textContent=u,K.append(e)}K.classList.add("main__list__about-team"),z(`\u{41A}\u{43E}\u{43C}\u{430}\u{43D}\u{434}\u{430} \u{431}\u{43E}\u{43B}\u{435}\u{435} \u{447}\u{435}\u{43C} \u{438}\u{437} 10 \u{447}\u{435}\u{43B}\u{43E}\u{432}\u{435}\u{43A} \u{435}\u{436}\u{435}\u{434}\u{43D}\u{435}\u{432}\u{43D}\u{43E} \u{442}\u{440}\u{443}\u{434}\u{438}\u{442}\u{441}\u{44F}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43F}\u{440}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{412}\u{430}\u{43C} \u{43B}\u{443}\u{447}\u{448}\u{438}\u{439} \u{441}\u{435}\u{440}\u{432}\u{438}\u{441} \u{438} \u{43E}\u{43F}\u{442}\u{438}\u{43C}\u{430}\u{43B}\u{44C}\u{43D}\u{44B}\u{435} \u{446}\u{435}\u{43D}\u{44B}`),z(`\u{411}\u{43E}\u{43B}\u{435}\u{435} 100 \u{43F}\u{440}\u{43E}\u{434}\u{430}\u{436} \u{438} \u{434}\u{43E}\u{432}\u{43E}\u{43B}\u{44C}\u{43D}\u{44B}\u{445} \u{43A}\u{43B}\u{438}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{435}\u{436}\u{435}\u{434}\u{43D}\u{435}\u{432}\u{43D}\u{43E} \u{43F}\u{43E} \u{432}\u{441}\u{435}\u{439} \u{420}\u{43E}\u{441}\u{441}\u{438}\u{438}`),z(`\u{414}\u{43E}\u{432}\u{435}\u{440}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{43E}\u{435} \u{43E}\u{442}\u{43D}\u{43E}\u{448}\u{435}\u{43D}\u{438}\u{435} \u{441} \u{43A}\u{43B}\u{438}\u{435}\u{43D}\u{442}\u{430}\u{43C}\u{438} - \u{437}\u{430}\u{43B}\u{43E}\u{433} \u{43D}\u{430}\u{448}\u{435}\u{433}\u{43E} \u{443}\u{441}\u{43F}\u{435}\u{445}\u{430}. 
  \u{423} \u{43D}\u{430}\u{441} \u{435}\u{441}\u{442}\u{44C} \u{43F}\u{43E}\u{441}\u{442}\u{43E}\u{44F}\u{43D}\u{43D}\u{44B}\u{435} \u{43A}\u{43B}\u{438}\u{435}\u{43D}\u{442}\u{44B}, \u{430} \u{442}\u{430}\u{43A} \u{436}\u{435} \u{431}\u{43E}\u{43B}\u{44C}\u{448}\u{43E}\u{435} \u{43A}\u{43E}\u{43B}\u{438}\u{447}\u{435}\u{441}\u{442}\u{432}\u{43E} \u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{44B}\u{445} \u{43E}\u{442}\u{437}\u{44B}\u{432}\u{43E}\u{432} \u{441} \u{440}\u{430}\u{437}\u{43D}\u{44B}\u{445} \u{43F}\u{43B}\u{43E}\u{449}\u{430}\u{434}\u{43E}\u{43A}`),y.append(G,K);// ---------------------Отдел №4 ОТЗЫВЫ---------------------
let O=document.createElement("div");function X(e,t){let n=document.createElement("div");n.classList.add("main__div-tile-text-feedback");let a=document.createElement("div");a.classList.add("main__stars-title");let E=document.createElement("p");E.classList.add("main__teitle-feedback"),E.textContent=e,a.append(E);let i=document.createElement("div");function s(){let e=document.createElement("img");e.classList.add("main__star-img"),e.src=/*@__PURE__*/u(D),i.append(e)}i.classList.add("div-star"),s(),s(),s(),s(),s(),a.append(i);let l=document.createElement("p");return l.classList.add("main__text-feedback"),l.textContent=t,n.append(a,l),n}O.classList.add("main__container-content","main__content4");let Y=X("Писарева Марина","Спасибо огромное! Замечательный продавец! Всегда на связи, отправка вовремя.Товар шикарный! Всем рекомендую!");Y.classList.add("main-elements-left","main-elements");let V=X("Дмитрий Сенькин","Отличные ребята! Приехал к ним на склад. Они показали весь интересующий меня ассортимент, все рассказали и дали попробовать, как инструмент в руке лежит. Короче красавцы!");V.classList.add("main__feedback-right","main-elements-right","main-elements");let Z=X("Артур","Огромное человеческое спасибо за пилу!!! Лучшая цена!) Мне очень важно было забрать ее в определенное время, забрал как и договаривались! Все открыли посмотрели, проверили! Добрый и позитивный продавец) Рекомендую миллион % )))");Z.classList.add("main-elements-left","main-elements");let Q=X("Артём","Отвечали на вопросы круглосуточно, все обещания по отправке товара выполнили, покупал погружную пилу, пришла, всё ок, рекомендую");Q.classList.add("main__feedback-right","main-elements-right","main-elements");let W=X("Алексей","Абра-кадабра, чудо-магазин");W.classList.add("main-elements-left","main-elements"),O.append(Y,V,Z,Q,W);// ---------------------Отдел №5 МАРКЕТПЛЕЙСЫ И ФИЗ АДРЕС---------------------
// МАРКЕТПЛЕЙСЫ
let N=document.createElement("div");N.classList.add("main__container-content","main__content5");let P=document.createElement("p");P.classList.add("main__title-marketplace"),P.textContent="Вы можете нас найти";let I=document.createElement("ul");function J(u,e){let t=document.createElement("li");t.classList.add("main__item-marketplace");let n=document.createElement("a");n.classList.add("main__link-marketplace"),n.href=u,n.target="_blank";let a=document.createElement("img");a.classList.add("main__img-marketplace"),a.src=e,n.append(a),t.append(n),I.append(t)}I.classList.add("main__list-marketplace"),J("https://www.avito.ru/",/*@__PURE__*/u(B)),J("https://www.ozon.ru/",/*@__PURE__*/u(C)),J("https://megamarket.ru/",/*@__PURE__*/u(F)),J("https://market.yandex.ru/",/*@__PURE__*/u(_));let $=document.createElement("hr");$.classList.add("main__hr");//ФИЗ АДРЕС
let uu=document.createElement("div");uu.classList.add("main__content-addres");let ue=document.createElement("a");ue.classList.add("main__name-address","main-elements-left","main-elements"),ue.textContent="Москва, Москва",ue.href="https://yandex.ru/maps/geo/moskva/53000094/?ll=37.385439%2C55.584227&z=9.5",ue.target="_blank";let ut=document.createElement("img");ut.classList.add("main__img-address","main-elements-right","main-elements"),ut.src=/*@__PURE__*/u(p),ut.addEventListener("click",function(){window.open("https://yandex.ru/maps/geo/moskva/53000094/?ll=37.385439%2C55.584227&z=9.5","_blank")}),uu.append(ue,ut);let un=document.createElement("hr");un.classList.add("main__hr"),N.append(P,I,$,uu,un);// ---------------------Отдел №6 частые вопросы---------------------
let ua=document.createElement("div");ua.classList.add("main__container-content","main__content6");let uE=document.createElement("p");uE.classList.add("main__title-questions"),uE.textContent="Частые вопросы";let ui=document.createElement("ul");function us(u,e){let t=document.createElement("li");t.classList.add("main__item-questions"),t.addEventListener("click",function(){i.classList.toggle("main__none"),E.classList.toggle("main__arrow-up"),t.classList.toggle("main__item-questions-active"),a.classList.toggle("main__content-title-questions-active"),window.scrollTo({top:1e5,left:0})});let n=document.createElement("div");n.classList.add("main__content-title-questions");let a=document.createElement("p");a.classList.add("main__item-title-questions"),a.textContent=u;let E=document.createElement("div");E.classList.add("main__arrow-down"),n.append(a,E);let i=document.createElement("p");i.textContent=e,i.classList.add("main__text-questions"),i.classList.add("main__none"),t.append(n,i),ui.append(t)}ui.classList.add("main__list-questions"),us(`\u{423} \u{412}\u{430}\u{441} \u{43E}\u{440}\u{438}\u{433}\u{438}\u{43D}\u{430}\u{43B}\u{44C}\u{43D}\u{44B}\u{439} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}?`,`\u{414}\u{430}, \u{443} \u{43D}\u{430}\u{441} \u{43F}\u{43E}\u{43B}\u{43D}\u{43E}\u{441}\u{442}\u{44C}\u{44E} \u{43E}\u{440}\u{438}\u{433}\u{438}\u{43D}\u{430}\u{43B}\u{44C}\u{43D}\u{44B}\u{439} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}!`),us(`\u{41C}\u{43E}\u{436}\u{43D}\u{43E} \u{43B}\u{438} \u{43F}\u{440}\u{438}\u{435}\u{445}\u{430}\u{442}\u{44C} \u{43F}\u{43E}\u{441}\u{43C}\u{43E}\u{442}\u{440}\u{435}\u{442}\u{44C}?`,`\u{414}\u{430}, \u{412}\u{44B} \u{43C}\u{43E}\u{436}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{438}\u{435}\u{445}\u{430}\u{442}\u{44C} \u{43A} \u{43D}\u{430}\u{43C}, \u{43F}\u{43E}\u{441}\u{43C}\u{43E}\u{442}\u{440}\u{435}\u{442}\u{44C} \u{432}\u{435}\u{441}\u{44C} \u{430}\u{441}\u{441}\u{43E}\u{440}\u{442}\u{438}\u{43C}\u{435}\u{43D}\u{442}, \u{43F}\u{440}\u{43E}\u{432}\u{435}\u{440}\u{438}\u{442}\u{44C} \u{440}\u{430}\u{431}\u{43E}\u{442}\u{43E}\u{441}\u{43F}\u{43E}\u{441}\u{43E}\u{431}\u{43D}\u{43E}\u{441}\u{442}\u{44C}.`),ua.append(uE,ui),e.append(t,v,y,O,N,ua),setTimeout(function(){n.classList.add("main-elements-show"),a.classList.add("main-elements-show"),x.classList.add("main-elements-show");let u=k.querySelectorAll(".main__img-brand");for(let e of u)e.classList.add("main-elements-show")},10),document.addEventListener("scroll",ud);let ul=e.querySelectorAll(".main-elements");function ud(){let u=window.innerHeight/5*4;for(let e of ul){let t=e.getBoundingClientRect().top;t<u?e.classList.add("main-elements-show"):e.classList.remove("main-elements-show")}}return ud(),e}}),n("cfmq5",function(u,e){u.exports=new URL("logo.eef08ec0.png",import.meta.url).toString()}),n("kBvUi",function(u,e){u.exports=new URL("dewalt.f550054c.png",import.meta.url).toString()}),n("7YGko",function(u,e){u.exports=new URL("makita.028921d8.png",import.meta.url).toString()}),n("2p8DO",function(u,e){u.exports=new URL("metabo.33af1e6e.png",import.meta.url).toString()}),n("3em7p",function(u,e){u.exports=new URL("karcher.b6adabab.png",import.meta.url).toString()}),n("da1th",function(u,e){u.exports=new URL("bosch.467605b5.png",import.meta.url).toString()}),n("af1s1",function(u,e){u.exports=new URL("festool.d42b01d1.png",import.meta.url).toString()}),n("CECt8",function(u,e){u.exports=new URL("milwaukee.a3f2eb4d.png",import.meta.url).toString()}),n("8jq1F",function(u,e){u.exports=new URL("hands.37135ba8.jpg",import.meta.url).toString()}),n("gGEQj",function(u,e){u.exports=new URL("litleStar.54e94864.png",import.meta.url).toString()}),n("kDVEx",function(u,e){u.exports=new URL("avito.b9c4f80a.jpeg",import.meta.url).toString()}),n("bYlL9",function(u,e){u.exports=new URL("ozon.3701ad31.jpg",import.meta.url).toString()}),n("1Gznb",function(u,e){u.exports=new URL("sber.4509791d.jpg",import.meta.url).toString()}),n("aKub4",function(u,e){u.exports=new URL("yandex.1dca552b.jpg",import.meta.url).toString()}),n("brLbN",function(u,e){u.exports=new URL("address.3bde9f52.jpg",import.meta.url).toString()}),n("70qrb",function(u,t){e(u.exports,"getMainTitle",()=>n);function n(u){let e=document.createElement("h1");return e.classList.add("main-title"),e.textContent=u,e}}),n("3bKSZ",function(u,t){e(u.exports,"getSemiTitle",()=>n);function n(u){let e=document.createElement("h3");return e.classList.add("semi-title"),e.textContent=u,e}}),n("aqWqo",function(u,t){e(u.exports,"getSlider",()=>n);function n(u,e,t,n,a,E,i){//слайдер
let s=document.createElement("div");s.classList.add("slider");//место для хранения фото
let l=[],d=0,c=document.createElement("button");c.classList.add("slider__button-left"),c.addEventListener("click",function(){d>0&&(d-=1,B.innerHTML="",B.append(l[d]),console.log(d))});let m=document.createElement("div");m.classList.add("slider__icon-left"),c.append(m);//Создаём кнопку для перемотки в право
let o=document.createElement("button");o.classList.add("slider__button-right"),o.addEventListener("click",function(){d<l.length-1&&(d+=1,B.innerHTML="",B.append(l[d]))});let r=document.createElement("div");//создаем изображения с путём переданным в функцию
function D(u){if(""!=u&&void 0!=u){let e=document.createElement("img");e.classList.add("slider__image"),e.src=u,l.push(e)}}r.classList.add("slider__icon-right"),o.append(r),D(u),D(e),D(t),D(n),D(a),D(E),D(i);//создаём место для отображения картинок
let B=document.createElement("div");return B.classList.add("slider__div-image"),//по дефолту отображаем первую картинку из массива
B.append(l[d]),s.append(c,B,o),s}}),n("1BXZc",function(n,a){e(n.exports,"descBrand",()=>o);var E=t("kBvUi"),i=t("7YGko"),s=t("2p8DO"),l=t("3em7p"),d=t("da1th"),c=t("af1s1"),m=t("CECt8");let o={brand:{name:"dewalt",desc:`
      \u{412} XXI \u{432}\u{435}\u{43A}\u{435} \u{440}\u{430}\u{437}\u{432}\u{438}\u{442}\u{438}\u{435} DeWalt \u{43F}\u{440}\u{43E}\u{434}\u{43E}\u{43B}\u{436}\u{430}\u{435}\u{442}\u{441}\u{44F} - \u{443}\u{432}\u{435}\u{43B}\u{438}\u{447}\u{438}\u{432}\u{430}\u{435}\u{442}\u{441}\u{44F} 
      \u{430}\u{441}\u{441}\u{43E}\u{440}\u{442}\u{438}\u{43C}\u{435}\u{43D}\u{442} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432}, \u{440}\u{430}\u{441}\u{448}\u{438}\u{440}\u{44F}\u{435}\u{442}\u{441}\u{44F} \u{43C}\u{43E}\u{434}\u{435}\u{43B}\u{44C}\u{43D}\u{44B}\u{439} \u{440}\u{44F}\u{434}, \u{443}\u{43B}\u{443}\u{447}\u{448}\u{430}\u{44E}\u{442}\u{441}\u{44F} 
      \u{445}\u{430}\u{440}\u{430}\u{43A}\u{442}\u{435}\u{440}\u{438}\u{441}\u{442}\u{438}\u{43A}\u{438}. \u{410}\u{43A}\u{43A}\u{443}\u{43C}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440}\u{43D}\u{44B}\u{435} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{44B} \u{43F}\u{435}\u{440}\u{435}\u{441}\u{442}\u{430}\u{44E}\u{442} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{43E}\u{432}\u{438}\u{43D}\u{43A}\u{43E}\u{439}. 
      \u{411}\u{430}\u{442}\u{430}\u{440}\u{435}\u{44F} \u{441}\u{442}\u{430}\u{43D}\u{43E}\u{432}\u{438}\u{442}\u{441}\u{44F} \u{432}\u{441}\u{435} \u{43C}\u{43E}\u{449}\u{43D}\u{435}\u{435}. \u{41A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{44F} \u{43F}\u{440}\u{43E}\u{438}\u{437}\u{432}\u{43E}\u{434}\u{438}\u{442} \u{43F}\u{435}\u{440}\u{432}\u{44B}\u{435} \u{432} \u{43C}\u{438}\u{440}\u{435} 
      \u{430}\u{43A}\u{43A}\u{443}\u{43C}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440}\u{43D}\u{44B}\u{435} \u{43F}\u{43E}\u{433}\u{440}\u{443}\u{436}\u{43D}\u{44B}\u{435} \u{43F}\u{438}\u{43B}\u{44B}, \u{434}\u{43E}\u{431}\u{430}\u{432}\u{43B}\u{44F}\u{435}\u{442} \u{43D}\u{430} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442} \u{43F}\u{43E}\u{434}\u{441}\u{432}\u{435}\u{442}\u{43A}\u{443} 
      \u{440}\u{430}\u{431}\u{43E}\u{447}\u{435}\u{439} \u{437}\u{43E}\u{43D}\u{44B}. \u{412} 2012 \u{433}\u{43E}\u{434}\u{443} \u{432}\u{44B}\u{43F}\u{443}\u{441}\u{43A}\u{430}\u{44E}\u{442}\u{441}\u{44F} \u{43F}\u{435}\u{440}\u{432}\u{44B}\u{435} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{44B} \u{441} 
      \u{431}\u{435}\u{441}\u{449}\u{435}\u{442}\u{43E}\u{447}\u{43D}\u{44B}\u{43C} \u{43C}\u{435}\u{445}\u{430}\u{43D}\u{438}\u{437}\u{43C}\u{43E}\u{43C}. \u{412} 2016 \u{433}\u{43E}\u{434}\u{443} \u{2013} 
      \u{441}\u{438}\u{441}\u{442}\u{435}\u{43C}\u{430} FLEXVOLT`,img:/*@__PURE__*/u(E)},brand2:{name:"makita",desc:`
      \u{41A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{44F} Makita \u{43D}\u{430} \u{43F}\u{440}\u{43E}\u{442}\u{44F}\u{436}\u{435}\u{43D}\u{438}\u{438} 100 \u{43B}\u{435}\u{442} \u{440}\u{430}\u{434}\u{443}\u{435}\u{442} \u{43D}\u{430}\u{441} \u{43A}\u{430}\u{447}\u{435}\u{441}\u{442}\u{432}\u{43E}\u{43C} 
      \u{441}\u{432}\u{43E}\u{438}\u{445} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{43E}\u{432}. \u{41E}\u{43D}\u{438} \u{431}\u{44B}\u{43B}\u{438} \u{43F}\u{435}\u{440}\u{432}\u{44B}\u{43C}\u{438}, \u{43A}\u{442}\u{43E} \u{438}\u{437}\u{43E}\u{431}\u{440}\u{435}\u{43B} \u{438} \u{437}\u{430}\u{43F}\u{430}\u{442}\u{435}\u{43D}\u{442}\u{43E}\u{432}\u{430}\u{43B} \u{43D}\u{435}\u{43A}\u{43E}\u{442}\u{43E}\u{440}\u{44B}\u{435} 
      \u{432}\u{430}\u{436}\u{43D}\u{44B}\u{435} \u{444}\u{443}\u{43D}\u{43A}\u{446}\u{438}\u{438} \u{438} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{44B} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432}, \u{43A}\u{43E}\u{442}\u{43E}\u{440}\u{44B}\u{435} \u{437}\u{43D}\u{430}\u{447}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{43E} \u{43E}\u{431}\u{43B}\u{435}\u{433}\u{447}\u{430}\u{44E}\u{442} 
      \u{440}\u{430}\u{431}\u{43E}\u{442}\u{443} \u{438} \u{443}\u{432}\u{435}\u{43B}\u{438}\u{447}\u{438}\u{432}\u{430}\u{44E}\u{442} \u{441}\u{440}\u{43E}\u{43A} \u{43F}\u{43E}\u{43B}\u{44C}\u{437}\u{43E}\u{432}\u{430}\u{43D}\u{438}\u{44F}.

      AVT - \u{430}\u{43D}\u{442}\u{438}\u{432}\u{438}\u{431}\u{440}\u{430}\u{446}\u{438}\u{43E}\u{43D}\u{43D}\u{430}\u{44F} \u{441}\u{438}\u{441}\u{442}\u{435}\u{43C}\u{430}.
      Makstar \u{2013} \u{44D}\u{442}\u{43E} \u{442}\u{435}\u{445}\u{43D}\u{43E}\u{43B}\u{43E}\u{433}\u{438}\u{44F} \u{437}\u{430}\u{440}\u{44F}\u{434}\u{43A}\u{438} \u{43B}\u{438}\u{442}\u{438}\u{439}-\u{438}\u{43E}\u{43D}\u{43D}\u{44B}\u{445} \u{430}\u{43A}\u{43A}\u{443}\u{43C}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440}\u{43E}\u{432} \u{441} 
      \u{43E}\u{431}\u{43C}\u{435}\u{43D}\u{43E}\u{43C} \u{446}\u{438}\u{444}\u{440}\u{43E}\u{432}\u{43E}\u{439} \u{438}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{438}\u{435}\u{439} \u{43C}\u{435}\u{436}\u{434}\u{443} \u{430}\u{43A}\u{43A}\u{443}\u{43C}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440}\u{43E}\u{43C} \u{438} \u{437}\u{430}\u{440}\u{44F}\u{434}\u{43D}\u{44B}\u{43C} 
      \u{443}\u{441}\u{442}\u{440}\u{43E}\u{439}\u{441}\u{442}\u{432}\u{43E}\u{43C}.`,img:/*@__PURE__*/u(i)},brand3:{name:"festool",desc:`
      \u{41A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{44F} Festool \u{431}\u{44B}\u{43B}\u{430} \u{441}\u{43E}\u{437}\u{434}\u{430}\u{43D}\u{430} \u{432} 2000 \u{433}\u{43E}\u{434}\u{443} \u{43F}\u{443}\u{442}\u{451}\u{43C} \u{432}\u{44B}\u{434}\u{435}\u{43B}\u{435}\u{43D}\u{438}\u{44F} 
      \u{43B}\u{438}\u{43D}\u{438}\u{438} \u{43F}\u{43E} \u{43F}\u{440}\u{43E}\u{438}\u{437}\u{432}\u{43E}\u{434}\u{441}\u{442}\u{432}\u{443} \u{44D}\u{43B}\u{435}\u{43A}\u{442}\u{440}\u{43E}\u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{438}\u{437} \u{43A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{438} Festo. 

      \u{41F}\u{43E}\u{434} \u{431}\u{440}\u{435}\u{43D}\u{434}\u{43E}\u{43C} Festool \u{43D}\u{44B}\u{43D}\u{435} \u{440}\u{435}\u{430}\u{43B}\u{438}\u{437}\u{443}\u{44E}\u{442}\u{441}\u{44F} \u{434}\u{440}\u{435}\u{43B}\u{438}-\u{448}\u{443}\u{440}\u{443}\u{43F}\u{43E}\u{432}\u{451}\u{440}\u{442}\u{44B}, 
      \u{44D}\u{43B}\u{435}\u{43A}\u{442}\u{440}\u{438}\u{447}\u{435}\u{441}\u{43A}\u{438}\u{435} \u{43B}\u{43E}\u{431}\u{437}\u{438}\u{43A}\u{438}, \u{434}\u{438}\u{441}\u{43A}\u{43E}\u{432}\u{44B}\u{435}, \u{442}\u{43E}\u{440}\u{446}\u{43E}\u{432}\u{43E}-\u{443}\u{441}\u{43E}\u{432}\u{43E}\u{447}\u{43D}\u{44B}\u{435}, \u{441}\u{442}\u{440}\u{43E}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{44B}\u{435} 
      \u{438} \u{43C}\u{43E}\u{43D}\u{442}\u{430}\u{436}\u{43D}\u{44B}\u{435} \u{434}\u{438}\u{441}\u{43A}\u{43E}\u{432}\u{44B}\u{435} \u{43F}\u{438}\u{43B}\u{44B}, \u{432}\u{435}\u{440}\u{442}\u{438}\u{43A}\u{430}\u{43B}\u{44C}\u{43D}\u{44B}\u{435}, \u{43E}\u{43A}\u{43E}\u{43D}\u{43D}\u{44B}\u{435}, \u{434}\u{438}\u{441}\u{43A}\u{43E}\u{432}\u{44B}\u{435}, 
      \u{434}\u{44E}\u{431}\u{435}\u{43B}\u{44C}\u{43D}\u{44B}\u{435}, \u{43A}\u{440}\u{43E}\u{43C}\u{43E}\u{447}\u{43D}\u{44B}\u{435} \u{444}\u{440}\u{435}\u{437}\u{435}\u{440}\u{44B}, \u{43C}\u{43D}\u{43E}\u{433}\u{43E}\u{444}\u{443}\u{43D}\u{43A}\u{446}\u{438}\u{43E}\u{43D}\u{430}\u{43B}\u{44C}\u{43D}\u{44B}\u{435} \u{441}\u{442}\u{43E}\u{43B}\u{44B} (\u{432}\u{435}\u{440}\u{441}\u{442}\u{430}\u{43A}\u{438}).`,img:/*@__PURE__*/u(c)},brand4:{name:"karcher",desc:`
      Karcher - \u{44D}\u{442}\u{43E} \u{43D}\u{435}\u{43C}\u{435}\u{446}\u{43A}\u{430}\u{44F} \u{43A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{44F}, \u{441}\u{43F}\u{435}\u{446}\u{438}\u{430}\u{43B}\u{438}\u{437}\u{438}\u{440}\u{443}\u{44E}\u{449}\u{430}\u{44F}\u{441}\u{44F} \u{43D}\u{430} \u{43F}\u{440}\u{43E}\u{438}\u{437}\u{432}\u{43E}\u{434}\u{441}\u{442}\u{432}\u{435} 
      \u{432}\u{44B}\u{441}\u{43E}\u{43A}\u{43E}\u{43A}\u{430}\u{447}\u{435}\u{441}\u{442}\u{432}\u{435}\u{43D}\u{43D}\u{44B}\u{445} \u{443}\u{441}\u{442}\u{440}\u{43E}\u{439}\u{441}\u{442}\u{432} \u{434}\u{43B}\u{44F} \u{43E}\u{447}\u{438}\u{441}\u{442}\u{43A}\u{438} \u{438} \u{443}\u{445}\u{43E}\u{434}\u{430} \u{437}\u{430} \u{43F}\u{43E}\u{432}\u{435}\u{440}\u{445}\u{43D}\u{43E}\u{441}\u{442}\u{44F}\u{43C}\u{438}. 
      \u{41E}\u{43D}\u{430} \u{448}\u{438}\u{440}\u{43E}\u{43A}\u{43E} \u{438}\u{437}\u{432}\u{435}\u{441}\u{442}\u{43D}\u{430} \u{441}\u{432}\u{43E}\u{438}\u{43C}\u{438} \u{432}\u{44B}\u{441}\u{43E}\u{43A}\u{43E}\u{434}\u{430}\u{432}\u{43B}\u{435}\u{43A}\u{438}\u{43C}\u{438} \u{43C}\u{43E}\u{435}\u{447}\u{43D}\u{44B}\u{43C}\u{438} \u{430}\u{43F}\u{43F}\u{430}\u{440}\u{430}\u{442}\u{430}\u{43C}\u{438},
      \u{43F}\u{430}\u{440}\u{43E}\u{43E}\u{447}\u{438}\u{441}\u{442}\u{438}\u{442}\u{435}\u{43B}\u{44F}\u{43C}\u{438} \u{438} \u{434}\u{440}\u{443}\u{433}\u{438}\u{43C}\u{438} \u{438}\u{43D}\u{43D}\u{43E}\u{432}\u{430}\u{446}\u{438}\u{43E}\u{43D}\u{43D}\u{44B}\u{43C}\u{438} \u{441}\u{440}\u{435}\u{434}\u{441}\u{442}\u{432}\u{430}\u{43C}\u{438} \u{434}\u{43B}\u{44F} \u{447}\u{438}\u{441}\u{442}\u{43A}\u{438}
      \u{430}\u{432}\u{442}\u{43E}\u{43C}\u{43E}\u{431}\u{438}\u{43B}\u{435}\u{439}, \u{434}\u{43E}\u{43C}\u{43E}\u{432}, \u{441}\u{430}\u{434}\u{43E}\u{432} \u{438} \u{43F}\u{440}\u{43E}\u{43C}\u{44B}\u{448}\u{43B}\u{435}\u{43D}\u{43D}\u{44B}\u{445} \u{43E}\u{431}\u{44A}\u{435}\u{43A}\u{442}\u{43E}\u{432}. \u{41A}\u{430}\u{447}\u{435}\u{441}\u{442}\u{432}\u{43E} \u{438}
      \u{43D}\u{430}\u{434}\u{435}\u{436}\u{43D}\u{43E}\u{441}\u{442}\u{44C} \u{43F}\u{440}\u{43E}\u{434}\u{443}\u{43A}\u{446}\u{438}\u{438} Karcher \u{441}\u{434}\u{435}\u{43B}\u{430}\u{43B}\u{438} \u{435}\u{435} \u{43E}\u{434}\u{43D}\u{438}\u{43C} \u{438}\u{437} \u{432}\u{435}\u{434}\u{443}\u{449}\u{438}\u{445} \u{431}\u{440}\u{435}\u{43D}\u{434}\u{43E}\u{432}
      \u{432} \u{43E}\u{431}\u{43B}\u{430}\u{441}\u{442}\u{438} \u{443}\u{431}\u{43E}\u{440}\u{43A}\u{438} \u{438} \u{43E}\u{431}\u{441}\u{43B}\u{443}\u{436}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{44F} \u{43F}\u{43E}\u{432}\u{435}\u{440}\u{445}\u{43D}\u{43E}\u{441}\u{442}\u{435}\u{439} \u{43F}\u{43E} \u{432}\u{441}\u{435}\u{43C}\u{443} \u{43C}\u{438}\u{440}\u{443}.`,img:/*@__PURE__*/u(l)},brand5:{name:"metabo",desc:`
      Metabo - \u{44D}\u{442}\u{43E} \u{43D}\u{435}\u{43C}\u{435}\u{446}\u{43A}\u{430}\u{44F} \u{43A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{44F}, \u{43A}\u{43E}\u{442}\u{43E}\u{440}\u{430}\u{44F} \u{441}\u{43F}\u{435}\u{446}\u{438}\u{430}\u{43B}\u{438}\u{437}\u{438}\u{440}\u{443}\u{435}\u{442}\u{441}\u{44F} \u{43D}\u{430} 
      \u{43F}\u{440}\u{43E}\u{438}\u{437}\u{432}\u{43E}\u{434}\u{441}\u{442}\u{432}\u{435} \u{44D}\u{43B}\u{435}\u{43A}\u{442}\u{440}\u{43E}\u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{438} \u{43E}\u{431}\u{43E}\u{440}\u{443}\u{434}\u{43E}\u{432}\u{430}\u{43D}\u{438}\u{44F} \u{434}\u{43B}\u{44F} \u{441}\u{442}\u{440}\u{43E}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{441}\u{442}\u{432}\u{430},
      \u{440}\u{435}\u{43C}\u{43E}\u{43D}\u{442}\u{430} \u{438} \u{43C}\u{435}\u{442}\u{430}\u{43B}\u{43B}\u{43E}\u{43E}\u{431}\u{440}\u{430}\u{431}\u{43E}\u{442}\u{43A}\u{438}. \u{41E}\u{43D}\u{430} \u{438}\u{437}\u{432}\u{435}\u{441}\u{442}\u{43D}\u{430} \u{441}\u{432}\u{43E}\u{435}\u{439} \u{432}\u{44B}\u{441}\u{43E}\u{43A}\u{43E}\u{439} \u{441}\u{442}\u{435}\u{43F}\u{435}\u{43D}\u{44C}\u{44E}
      \u{43A}\u{430}\u{447}\u{435}\u{441}\u{442}\u{432}\u{430}, \u{43D}\u{430}\u{434}\u{435}\u{436}\u{43D}\u{43E}\u{441}\u{442}\u{438} \u{438} \u{438}\u{43D}\u{43D}\u{43E}\u{432}\u{430}\u{446}\u{438}\u{439}. Metabo \u{43F}\u{440}\u{435}\u{434}\u{43B}\u{430}\u{433}\u{430}\u{435}\u{442} \u{448}\u{438}\u{440}\u{43E}\u{43A}\u{438}\u{439}
      \u{430}\u{441}\u{441}\u{43E}\u{440}\u{442}\u{438}\u{43C}\u{435}\u{43D}\u{442} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432}, \u{432}\u{43A}\u{43B}\u{44E}\u{447}\u{430}\u{44F} \u{431}\u{443}\u{440}, \u{434}\u{440}\u{435}\u{43B}\u{438}
      \u{438} \u{434}\u{440}., \u{438} \u{441}\u{43B}\u{430}\u{432}\u{438}\u{442}\u{441}\u{44F} \u{441}\u{432}\u{43E}\u{435}\u{439} \u{43F}\u{440}\u{43E}\u{447}\u{43D}\u{43E}\u{441}\u{442}\u{44C}\u{44E} \u{438} \u{434}\u{43E}\u{43B}\u{433}\u{43E}\u{432}\u{435}\u{447}\u{43D}\u{43E}\u{441}\u{442}\u{44C}\u{44E}
      \u{43F}\u{440}\u{43E}\u{434}\u{443}\u{43A}\u{446}\u{438}\u{438}, \u{447}\u{442}\u{43E} \u{434}\u{435}\u{43B}\u{430}\u{435}\u{442} \u{435}\u{435} \u{43F}\u{43E}\u{43F}\u{443}\u{43B}\u{44F}\u{440}\u{43D}\u{44B}\u{43C} \u{432}\u{44B}\u{431}\u{43E}\u{440}\u{43E}\u{43C} \u{441}\u{440}\u{435}\u{434}\u{438} \u{43F}\u{440}\u{43E}\u{444}\u{435}\u{441}\u{441}\u{438}\u{43E}\u{43D}\u{430}\u{43B}\u{43E}\u{432} 
      \u{438} \u{43B}\u{44E}\u{431}\u{438}\u{442}\u{435}\u{43B}\u{435}\u{439} \u{432}\u{43E} \u{432}\u{441}\u{435}\u{43C} \u{43C}\u{438}\u{440}\u{435}.`,img:/*@__PURE__*/u(s)},brand6:{name:"bosch",desc:`
      Bosch - \u{44D}\u{442}\u{43E} \u{43D}\u{435}\u{43C}\u{435}\u{446}\u{43A}\u{430}\u{44F} \u{43C}\u{43D}\u{43E}\u{433}\u{43E}\u{43E}\u{442}\u{440}\u{430}\u{441}\u{43B}\u{435}\u{432}\u{430}\u{44F} \u{43A}\u{43E}\u{440}\u{43F}\u{43E}\u{440}\u{430}\u{446}\u{438}\u{44F}, \u{438}\u{437}\u{432}\u{435}\u{441}\u{442}\u{43D}\u{430}\u{44F} \u{441}\u{432}\u{43E}\u{438}\u{43C}\u{438} \u{43F}\u{440}\u{43E}\u{434}\u{443}\u{43A}\u{442}\u{430}\u{43C}\u{438} 
      \u{438} \u{443}\u{441}\u{43B}\u{443}\u{433}\u{430}\u{43C}\u{438} \u{432} \u{43E}\u{431}\u{43B}\u{430}\u{441}\u{442}\u{438} \u{44D}\u{43B}\u{435}\u{43A}\u{442}\u{440}\u{43E}\u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432}, \u{431}\u{44B}\u{442}\u{43E}\u{432}\u{43E}\u{439} \u{442}\u{435}\u{445}\u{43D}\u{438}\u{43A}\u{438}, \u{430}\u{432}\u{442}\u{43E}\u{43C}\u{43E}\u{431}\u{438}\u{43B}\u{44C}\u{43D}\u{44B}\u{445} 
      \u{43A}\u{43E}\u{43C}\u{43F}\u{43E}\u{43D}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{438} \u{442}\u{435}\u{445}\u{43D}\u{43E}\u{43B}\u{43E}\u{433}\u{438}\u{439}, \u{430} \u{442}\u{430}\u{43A}\u{436}\u{435} \u{441}\u{438}\u{441}\u{442}\u{435}\u{43C} \u{431}\u{435}\u{437}\u{43E}\u{43F}\u{430}\u{441}\u{43D}\u{43E}\u{441}\u{442}\u{438} \u{438} \u{43F}\u{440}\u{43E}\u{43C}\u{44B}\u{448}\u{43B}\u{435}\u{43D}\u{43D}\u{43E}\u{439} \u{442}\u{435}\u{445}\u{43D}\u{438}\u{43A}\u{438}. 
      \u{41E}\u{43D}\u{430} \u{44F}\u{432}\u{43B}\u{44F}\u{435}\u{442}\u{441}\u{44F} \u{43E}\u{434}\u{43D}\u{438}\u{43C} \u{438}\u{437} \u{43A}\u{440}\u{443}\u{43F}\u{43D}\u{435}\u{439}\u{448}\u{438}\u{445} \u{43F}\u{440}\u{43E}\u{438}\u{437}\u{432}\u{43E}\u{434}\u{438}\u{442}\u{435}\u{43B}\u{435}\u{439} \u{44D}\u{43B}\u{435}\u{43A}\u{442}\u{440}\u{43E}\u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{432} \u{43C}\u{438}\u{440}\u{435} \u{438} 
      \u{441}\u{43B}\u{430}\u{432}\u{438}\u{442}\u{441}\u{44F} \u{432}\u{44B}\u{441}\u{43E}\u{43A}\u{438}\u{43C} \u{43A}\u{430}\u{447}\u{435}\u{441}\u{442}\u{432}\u{43E}\u{43C} \u{438} \u{438}\u{43D}\u{43D}\u{43E}\u{432}\u{430}\u{446}\u{438}\u{44F}\u{43C}\u{438} \u{432} \u{441}\u{432}\u{43E}\u{438}\u{445} \u{43F}\u{440}\u{43E}\u{434}\u{443}\u{43A}\u{442}\u{430}\u{445}. Bosch \u{442}\u{430}\u{43A}\u{436}\u{435} \u{430}\u{43A}\u{442}\u{438}\u{432}\u{43D}\u{43E} 
      \u{440}\u{430}\u{431}\u{43E}\u{442}\u{430}\u{435}\u{442} \u{432} \u{43E}\u{431}\u{43B}\u{430}\u{441}\u{442}\u{438} \u{44D}\u{43A}\u{43E}\u{43B}\u{43E}\u{433}\u{438}\u{438} \u{438} \u{443}\u{441}\u{442}\u{43E}\u{439}\u{447}\u{438}\u{432}\u{43E}\u{441}\u{442}\u{438}, \u{440}\u{430}\u{437}\u{440}\u{430}\u{431}\u{430}\u{442}\u{44B}\u{432}\u{430}\u{44F} \u{44D}\u{43D}\u{435}\u{440}\u{433}\u{43E}\u{44D}\u{444}\u{444}\u{435}\u{43A}\u{442}\u{438}\u{432}\u{43D}\u{44B}\u{435} \u{438} 
      \u{44D}\u{43A}\u{43E}\u{43B}\u{43E}\u{433}\u{438}\u{447}\u{435}\u{441}\u{43A}\u{438} \u{447}\u{438}\u{441}\u{442}\u{44B}\u{435} \u{440}\u{435}\u{448}\u{435}\u{43D}\u{438}\u{44F}.`,img:/*@__PURE__*/u(d)},brand7:{name:"milwaukee",desc:`
      Milwaukee Electric Tool Corporation, \u{438}\u{43B}\u{438} \u{43F}\u{440}\u{43E}\u{441}\u{442}\u{43E} Milwaukee, \u{44D}\u{442}\u{43E} \u{430}\u{43C}\u{435}\u{440}\u{438}\u{43A}\u{430}\u{43D}\u{441}\u{43A}\u{430}\u{44F} 
      \u{43A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{44F}, \u{441}\u{43F}\u{435}\u{446}\u{438}\u{430}\u{43B}\u{438}\u{437}\u{438}\u{440}\u{443}\u{44E}\u{449}\u{430}\u{44F}\u{441}\u{44F} \u{43D}\u{430} \u{43F}\u{440}\u{43E}\u{438}\u{437}\u{432}\u{43E}\u{434}\u{441}\u{442}\u{432}\u{435} \u{43F}\u{440}\u{43E}\u{444}\u{435}\u{441}\u{441}\u{438}\u{43E}\u{43D}\u{430}\u{43B}\u{44C}\u{43D}\u{44B}\u{445} 
      \u{44D}\u{43B}\u{435}\u{43A}\u{442}\u{440}\u{43E}\u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{438} \u{43E}\u{431}\u{43E}\u{440}\u{443}\u{434}\u{43E}\u{432}\u{430}\u{43D}\u{438}\u{44F} \u{434}\u{43B}\u{44F} \u{441}\u{442}\u{440}\u{43E}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{44B}\u{445}, \u{43F}\u{440}\u{43E}\u{43C}\u{44B}\u{448}\u{43B}\u{435}\u{43D}\u{43D}\u{44B}\u{445} \u{438} \u{440}\u{435}\u{43C}\u{43E}\u{43D}\u{442}\u{43D}\u{44B}\u{445} 
      \u{440}\u{430}\u{431}\u{43E}\u{442}. \u{41E}\u{43D}\u{430} \u{438}\u{437}\u{432}\u{435}\u{441}\u{442}\u{43D}\u{430} \u{441}\u{432}\u{43E}\u{438}\u{43C}\u{438} \u{43C}\u{43E}\u{449}\u{43D}\u{44B}\u{43C}\u{438} \u{438} \u{43D}\u{430}\u{434}\u{435}\u{436}\u{43D}\u{44B}\u{43C}\u{438} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{43C}\u{438}, \u{442}\u{430}\u{43A}\u{438}\u{43C}\u{438} \u{43A}\u{430}\u{43A} \u{431}\u{443}\u{440}, 
      \u{448}\u{43B}\u{438}\u{444}\u{43E}\u{432}\u{430}\u{43B}\u{44C}\u{43D}\u{44B}\u{435} \u{43C}\u{430}\u{448}\u{438}\u{43D}\u{44B}, \u{434}\u{440}\u{435}\u{43B}\u{438}, \u{43F}\u{438}\u{43B}\u{44B} \u{438} \u{43C}\u{43D}\u{43E}\u{433}\u{438}\u{435} \u{434}\u{440}\u{443}\u{433}\u{438}\u{435}. \u{42D}\u{442}\u{43E}\u{442} \u{431}\u{440}\u{435}\u{43D}\u{434} \u{448}\u{438}\u{440}\u{43E}\u{43A}\u{43E} \u{43F}\u{440}\u{438}\u{437}\u{43D}\u{430}\u{43D} \u{432} 
      \u{441}\u{444}\u{435}\u{440}\u{435} \u{441}\u{442}\u{440}\u{43E}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{441}\u{442}\u{432}\u{430} \u{438} \u{440}\u{435}\u{43C}\u{43E}\u{43D}\u{442}\u{430} \u{437}\u{430} \u{441}\u{432}\u{43E}\u{439} \u{43A}\u{430}\u{447}\u{435}\u{441}\u{442}\u{432}\u{435}\u{43D}\u{43D}\u{44B}\u{439} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}.`,img:/*@__PURE__*/u(m)}}});//# sourceMappingURL=main.a0d66c76.js.map

//# sourceMappingURL=main.a0d66c76.js.map
