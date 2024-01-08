import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js";
import { getDesk } from "/src/js/components/desc/desc.js";

// Страница каталога
export function getNotFoundPage() {
  const page = document.createElement("div");
  page.classList.add("page", "catalog-page", "container");

  const mainTitle = getMainTitle("Страница не найдена");
  const desc = getDesk("404");

  page.append(mainTitle, desc);

  return page;
}
