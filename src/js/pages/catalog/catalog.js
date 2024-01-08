import "/src/js/pages/catalog/catalog.css";
import { getCategories } from "/src/js/components/categories/categories.js";
import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js";
import { getProductList } from "/src/js/components/productList/productList.js";
import { getProductCard } from "/src/js/components/productCard/productCard.js";
import { getBrands } from "/src/js/components/brands/brands.js";
import { getSearch } from "/src/js/components/search/search.js";

// Страница каталога
export function getCatalogPage(categoryNavigo) {
  //делаем страницу
  const page = document.createElement("div");
  page.classList.add("page", "catalog-page", "container");

  //создаём контейнер для загаловка, поиска, брендов и места отоброжения карточек товара
  const divForTitleProductList = document.createElement("div");
  divForTitleProductList.classList.add("div-for__title__product-list");

  //создаём заголовок
  const mainTitle = getMainTitle("Каталог");
  //создаём поиск
  const search = getSearch();
  search.classList.add("catalog__search");

  //создаём контейнер для заголовка и поиска
  const divSearchMainTitle = document.createElement("div");
  divSearchMainTitle.classList.add("div-search-main-title");

  //объеденяем заголовок и поиск
  divSearchMainTitle.append(mainTitle, search);

  //создаём список для карточек товара
  const data = getProductList();
  //создаём бренды и передаём туда 1-местонахождение в категории; 2-место куда вставлять карточки товара/бренды
  const brands = getBrands(categoryNavigo, data.list);
  //создаём категории
  const categories = getCategories();

  //создаём карточки товара и вставляем в место для карточек
  async function createCatalogList() {
    const result = JSON.parse(localStorage.getItem("cards"));

    if (categoryNavigo == "Все") {
      const allItemCategories = categories.querySelectorAll(".item-categories");
      for (let i of allItemCategories) {
        i.classList.remove("active");
        if (i.childNodes[1].textContent === "") {
          i.classList.add("active");
        }
      }

      for (let i in result) {
        const product = getProductCard(
          result[i].name,
          result[i].price,
          result[i].desc,
          result[i].imgSmall,
          result[i].id,
          result[i].countBasketBoolean
        );
        data.list.append(product);
      }
    } else if (categoryNavigo != "") {
      const allItemCategories = categories.querySelectorAll(".item-categories");
      for (let i of allItemCategories) {
        i.classList.remove("active");
        if (i.childNodes[1].textContent === categoryNavigo) {
          i.classList.add("active");
        }
      }

      for (let i in result) {
        if (categoryNavigo === result[i].categoryENG) {
          const product = getProductCard(
            result[i].name,
            result[i].price,
            result[i].desc,
            result[i].imgSmall,
            result[i].id,
            result[i].countBasketBoolean
          );
          data.list.append(product);
        }
      }
    }
  }
  createCatalogList();

  if (data.list.childNodes.length > 29) {
    const products = data.list.querySelectorAll(".product-list__item");

    let flagProduct = -1;
    for (let i of products) {
      flagProduct = flagProduct + 1;

      if (flagProduct > 29) {
        i.classList.add("catalog__none");
      }
    }

    const btnElse = document.createElement("button");
    btnElse.classList.add("catalog__btn-else");
    btnElse.textContent = "Показать ещё";
    btnElse.addEventListener("click", function () {
      const productss = data.list.querySelectorAll(".product-list__item");
      const products = data.list.querySelectorAll(
        ".product-list__item.catalog__none"
      );
      const countProduct = productss.length - products.length + 30;

      productFlag = 0;
      for (let i of productss) {
        productFlag = productFlag + 1;
        if (productFlag <= countProduct) {
          i.classList.remove("catalog__none");
        }
      }

      if (
        data.list.querySelectorAll(".product-list__item.catalog__none")
          .length === 0
      ) {
        btnElse.classList.add("catalog__none");
      }
    });

    data.list.append(btnElse);
  }

  //объеденяем загаловок, поиск, бренды и место отоброжения для карточек товара
  divForTitleProductList.append(divSearchMainTitle, brands, data.list);

  //собираем страницу
  page.append(categories, divForTitleProductList);

  return page;
}
