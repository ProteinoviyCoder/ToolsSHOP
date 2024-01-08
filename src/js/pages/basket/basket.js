import "/src/js/pages/basket/basket.css";
import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js";
import { router } from "/src/js/main";
import { getCountBasket } from "/src/js/components/countBasket/countBasket.js";
import { router } from "/src/js/main.js";

// Страница корзина
export function getBasketPage() {
  const page = document.createElement("div");
  page.classList.add("page", "basket-page", "container");

  const mainTitle = getMainTitle("Корзина");
  mainTitle.classList.add("basket__main-title");

  const descBasket = document.createElement("div");
  descBasket.classList.add("basket__desc");
  descBasket.textContent = `Вы можете оставить свои контакты и отправить заказ менеджеру. Позже с Вами свяжутся`;

  const listBasket = document.createElement("ul");
  listBasket.classList.add("basket__list-basket");
  if (
    localStorage.getItem("basket") == null ||
    JSON.parse(localStorage.getItem("basket")).length == 0
  ) {
    listBasket.textContent = "КОРЗИНА ПУСТА";
  }

  const basket = JSON.parse(localStorage.getItem("basket"));
  if (basket != null) {
    const cards = JSON.parse(localStorage.getItem("cards"));
    for (let i of basket) {
      i.remain = false;
      localStorage.setItem("basket", JSON.stringify(basket));
      for (let x in cards) {
        if (i.name == cards[x].name) {
          const product = document.createElement("li");
          product.classList.add("basket__item-basket");

          const titleProduct = document.createElement("p");
          titleProduct.classList.add("basket__title-product");
          titleProduct.textContent = cards[x].name;
          titleProduct.addEventListener("click", function () {
            router.navigate(`/product/${cards[x].id}`);
          });

          const imgProduct = document.createElement("img");
          imgProduct.classList.add("basket__img-product");
          imgProduct.src = cards[x].imgSmall;
          imgProduct.addEventListener("click", function () {
            router.navigate(`/product/${cards[x].id}`);
          });

          const priceProduct = document.createElement("p");
          priceProduct.classList.add("basket__price-product");

          const countProduct = getCountBasket(
            cards[x].name,
            null,
            cards[x].price,
            priceProduct
          );
          const inputProduct = countProduct.countBasket.querySelector(
            ".count-basket__input"
          );

          // countingPrice(cards[x].price, inputProduct.value, priceProduct);

          product.append(
            imgProduct,
            titleProduct,
            priceProduct,
            countProduct.countBasket
          );

          const btnMinus = product.querySelector(".count-basket__btn-minus");
          const input = product.querySelector(".count-basket__input");
          btnMinus.addEventListener("click", function () {
            if (input.value == 0) {
              product.remove();
            }
            if (
              localStorage.getItem("basket") == null ||
              JSON.parse(localStorage.getItem("basket")).length == 0
            ) {
              listBasket.textContent = "КОРЗИНА ПУСТА";
            }
          });
          input.addEventListener("keyup", function (event) {
            if (event.keyCode == 13) {
              if (input.value == 0) {
                product.remove();
              }
            }
            if (
              localStorage.getItem("basket") == null ||
              JSON.parse(localStorage.getItem("basket")).length == 0
            ) {
              listBasket.textContent = "КОРЗИНА ПУСТА";
            }
          });
          listBasket.append(product);

          i.remain = true;
          localStorage.setItem("basket", JSON.stringify(basket));
        }
      }
    }
  }

  const basketRules = document.createElement("ul");
  basketRules.classList.add("basket__rules");
  basketRules.textContent = "Правила покупки";

  function createRuleOfBasket(textRule) {
    const rule = document.createElement("li");
    rule.classList.add("basket__rule");
    rule.insertAdjacentHTML("beforeend", textRule);

    basketRules.append(rule);
  }
  createRuleOfBasket(
    `Заказ можно забронировать и забрать самовывозом по адресу "Варшавское шоссе 145 к7" с оплатой на месте.`
  );
  createRuleOfBasket(
    `Мы можем отправить Вам заказ транспортными компаниями (СДЭК, ПЭК, Деловые линии), только по полной предоплате.`
  );
  createRuleOfBasket(
    `Предоплата принимается переводом на банковскую карту, по номеру телефона.`
  );
  createRuleOfBasket(
    `Также Вы можете заказать интересующие Вас товары через наш 
    <a class="basket__link" target="_blank" href="https://www.ozon.ru/seller/apara-1009443/products/?miniapp=seller_1009443">Ozon</a>,
    <a class="basket__link" target="_blank" href="https://megamarket.ru/shop/tvoy-instrument/">Сбер Мега Маркет</a>`
  );

  // Ссылка оформления заказа
  let linkOrder = document.createElement("a");
  linkOrder.classList.add("basket__btn-order");
  linkOrder.href = "/order";
  linkOrder.textContent = "Оформление заказа";
  linkOrder.addEventListener("click", function (event) {
    event.preventDefault();
    router.navigate("/order");
  });

  page.append(mainTitle, descBasket, listBasket, basketRules, linkOrder);

  return page;
}
