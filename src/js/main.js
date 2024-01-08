import Navigo from "navigo";
import { getHeader } from "/src/js/components/header/header.js";
import { getPageContainer } from "/src/js/components/pageContainer/pageContainer.js";
import { getProductList } from "/src/js/components/productList/productList.js";

export const router = new Navigo("/");
async function renderPge() {
  await getProductList().dataBase();
  const app = document.getElementById("app");

  const header = getHeader();
  const pageContainer = getPageContainer();

  //главная страница
  router.on("/", async () => {
    pageContainer.innerHTML = "";
    const moduleMain = await import("/src/js/pages/main/main.js");
    const mainPage = moduleMain.getMainPage();
    pageContainer.append(mainPage);
    header.highLight("/");
  });

  //страница каталога
  router.on("/catalog/", async () => {
    pageContainer.innerHTML = "";
    const moduleCatalog = await import("/src/js/pages/catalog/catalog.js");
    const catalogPage = moduleCatalog.getCatalogPage("Все");
    pageContainer.append(catalogPage);
    header.highLight("/catalog");
  });

  //страница каталога с категорией
  router.on(`/catalog/:textENG`, async (data) => {
    pageContainer.innerHTML = "";
    const moduleCatalog = await import("/src/js/pages/catalog/catalog.js");
    const catalogPage = moduleCatalog.getCatalogPage(data.data.textENG);
    pageContainer.append(catalogPage);
    header.highLight("/catalog");
  });

  //страница корзины
  router.on("/basket", async () => {
    pageContainer.innerHTML = "";
    const moduleBasket = await import("/src/js/pages/basket/basket.js");
    const basketPage = moduleBasket.getBasketPage();
    pageContainer.append(basketPage);
    header.highLight("/basket");
  });

  //страница товара
  router.on(`/product/:id`, async ({ data }) => {
    pageContainer.innerHTML = "";
    const moduleProduct = await import("/src/js/pages/product/product.js");
    const productPage = await moduleProduct.getProductPage(data.id);
    pageContainer.append(productPage);
  });

  //страница оформления
  router.on(`/order`, async () => {
    if (
      localStorage.getItem("basket") === null ||
      JSON.parse(localStorage.getItem("basket")).length == 0
    ) {
      router.navigate("/catalog");
      // return;
    } else {
      pageContainer.innerHTML = "";
      const moduleOrder = await import("/src/js/pages/order/order.js");
      const orderPage = moduleOrder.getOrderPage();
      pageContainer.append(orderPage);
    }
  });

  // Страница не найдена
  router.notFound(async () => {
    pageContainer.innerHTML = "";
    const notFoundModule = await import("/src/js/pages/404.js");
    const pageNotFound = notFoundModule.getNotFoundPage();
    pageContainer.append(pageNotFound);
  });

  router.resolve();

  app.append(header.header, pageContainer);
}
renderPge();
