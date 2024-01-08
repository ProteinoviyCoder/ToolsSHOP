import "/src/js/components/header/header.css";
import { getNavigationLink } from "/src/js/components/navigationLink/navigationLink.js";
import { getLogo } from "/src/js/components/logo/logo.js";
import { getBasketBtn } from "/src/js/components/basketBtn/basketBtn.js";

// Создать шапку
export function getHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const container = document.createElement("div");
  container.classList.add("container", "header__container");

  const logo = getLogo();
  const basketBtn = getBasketBtn();

  const nav = document.createElement("nav");
  nav.classList.add("header__navigation");

  let link1 = getNavigationLink("/", "Главная страница");
  let link2 = getNavigationLink("/catalog", "Каталог");

  nav.append(link1, link2);
  container.append(logo, nav, basketBtn);

  function highLight(param) {
    link1.classList.remove("active-header-link");
    link2.classList.remove("active-header-link");
    basketBtn.classList.remove("active-header-link-btn");
    switch (param) {
      case "/":
        link1.classList.add("active-header-link");
        break;
      case "/catalog":
        link2.classList.add("active-header-link");
        break;
      case "/basket":
        basketBtn.classList.add("active-header-link-btn");
        break;
      default:
        link2.classList.add("active-header-link");
    }
  }

  header.append(container);
  return { header: header, highLight: highLight };
}
