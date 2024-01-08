import { router } from "/src/js/main.js";
import "/src/js/components/navigationLink/navigationLink.css";

// Создаем ссылку (кнопку) для навигации по сайту
export function getNavigationLink(path, title = "") {
  let link = document.createElement("a");
  link.href = path;
  link.classList.add("navigation-link");
  link.textContent = title;
  link.setAttribute("data-navigo", true);
  link.addEventListener("click", function (event) {
    event.preventDefault();
    router.navigate(path);
  });

  return link;
}
