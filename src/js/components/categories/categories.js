import "/src/js/components/categories/categories.css";
import { getSemiTitle } from "/src/js/components/semiTitle/semiTitle.js";
import { router } from "/src/js/main.js";

export function getCategories() {
  const categoriesModule = document.createElement("div");
  categoriesModule.classList.add("categories-module");

  const contentCategories = document.createElement("div");
  contentCategories.classList.add("categories__content-categories");

  const titleCategories = getSemiTitle("Категории");
  titleCategories.classList.add("title-categories");

  const listCategories = document.createElement("ul");
  listCategories.classList.add("list-categories");

  function createItemCategories(text, textENG) {
    const itemCategories = document.createElement("li");
    itemCategories.classList.add("item-categories");
    itemCategories.textContent = text;

    const itemCategoriesEN = document.createElement("p");
    itemCategoriesEN.classList.add("none");
    itemCategoriesEN.textContent = textENG;
    itemCategories.append(itemCategoriesEN);

    itemCategories.addEventListener("click", function (event) {
      if (event.target.classList.contains("item-categories")) {
        if (textENG === "" || textENG === undefined) {
          router.navigate(`/catalog`);
        } else {
          router.navigate(`/catalog/${textENG}`);
        }
      }
    });

    listCategories.append(itemCategories);
  }

  createItemCategories("Все");
  createItemCategories("Пилы электрические", "pila-electro");
  createItemCategories("Пылесосы строительные", "stroy-pilesos");
  createItemCategories("Шлифовальные машины", "shlif-mash");
  createItemCategories("Миксеры строительные", "stroy-mixer");
  createItemCategories("Электролобзики", "lobziki-electro");
  createItemCategories("Дрели и шуруповерты", "dreli-shrupoverti");
  createItemCategories("Фрезеры", "frezeri");
  createItemCategories("Столярные инструменты", "stolyirnie-instrumenti");
  createItemCategories("Болгарки (УШМ)", "bolgarki");
  createItemCategories("Пояса, ремни, сумки", "remni");
  createItemCategories("Пилы и лобзики", "pila-lobziki");
  createItemCategories("Зарядные устройства и аккумуляторы", "zaryidki-akb");
  createItemCategories("Пистолеты монтажные", "montazh-pistol");
  createItemCategories("Перфораторы", "perforator");
  createItemCategories("Фены строительные", "stroy-fen");
  createItemCategories("Станки", "stanok");
  createItemCategories("Лазерные уровни и нивелиры", "lazer-uroven-niveliri");
  createItemCategories("Отбойные молотки", "otboyni-molotki");
  createItemCategories("Другое", "drugoe");

  contentCategories.append(titleCategories, listCategories);

  categoriesModule.append(contentCategories);

  let flagBlockCategoru = false;
  document.addEventListener("scroll", function () {
    if (
      categoriesModule.getBoundingClientRect().top < 0 &&
      flagBlockCategoru === false
    ) {
      contentCategories.classList.add("fixed-block");
      categoriesModule.classList.add("categories-module-fixed");

      flagBlockCategoru = true;
    } else if (categoriesModule.getBoundingClientRect().top > 0) {
      contentCategories.classList.remove("fixed-block");
      categoriesModule.classList.remove("categories-module-fixed");

      flagBlockCategoru = false;
    }
  });

  return categoriesModule;
}
