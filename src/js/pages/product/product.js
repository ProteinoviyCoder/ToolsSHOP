import "/src/js/pages/product/product.css";
import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js";
import { getDesk } from "/src/js/components/desc/desc.js";
import { getSlider } from "/src/js/components/slider/slider.js";
import { getBtnBackHistoryWindow } from "/src/js/components/btnBackHistory/btnBackHistory.js";
import { getCountBasket } from "/src/js/components/countBasket/countBasket.js";

// Страница товара
export async function getProductPage(idCard) {
  //делаем запрос в локал стоража, получаем данные карточки по её id
  let result;
  const cardsLocal = JSON.parse(localStorage.getItem("cards"));
  for (let i in cardsLocal) {
    if (cardsLocal[i].id == idCard) {
      console.log(cardsLocal[i]);
      result = cardsLocal[i];
    }
  }

  //создаём страницу в которой разместим весь контент
  const page = document.createElement("div");
  page.classList.add("page", "product-page", "container");

  //создаём стрелку назад, для перемещения по истории браузера - назад
  const btnBack = getBtnBackHistoryWindow();
  btnBack.classList.add("product__btn-back");

  //создаём контейнер для стрелки назад и названия и и объеденяем
  const contentSliderTitleCost = document.createElement("div");
  contentSliderTitleCost.classList.add("content-slider-title-cost");

  //создаём слайдер
  const slider = getSlider(
    result.imgBig1,
    result.imgBig2,
    result.imgBig3,
    result.imgBig4,
    result.imgBig5
  );
  slider.classList.add("product__slider");

  const contentTitleCost = document.createElement("div");
  contentTitleCost.classList.add("product__content-title-cost");

  //создаём название страницы
  const mainTitle = getMainTitle(result.name);
  mainTitle.classList.add("product__main-title");

  //создаём контейнер для кнопки заказа и цены
  const divForBtnOrderCost = document.createElement("div");
  divForBtnOrderCost.classList.add("product__div-for-btn-order-cost");

  //создаём цену
  const cost = document.createElement("strong");
  cost.classList.add("product__price");
  cost.textContent = result.price + " " + "р";

  //создаём кнопку для добавления товара в заказ
  const btnOrder = document.createElement("button");
  btnOrder.classList.add("product__button-order");
  btnOrder.textContent = "Добавить в заказ";
  btnOrder.addEventListener("click", function () {
    btnOrder.classList.add("none");
    countBasket.countBasket.classList.remove("none");
    if (JSON.parse(localStorage.getItem("basket")) != null) {
      const basket = JSON.parse(localStorage.getItem("basket"));

      let valueBasket = true;
      for (let i of basket) {
        if (i.name === result.name) {
          valueBasket = false;
          i.value = i.value + 1;
        }
      }

      if (valueBasket === true) {
        basket.push({
          name: result.name,
          value: 1,
        });
      }

      localStorage.removeItem("basket");
      localStorage.setItem("basket", JSON.stringify(basket));
      countBasket.changeCountInLocal();
    } else {
      const basket = [];
      basket.push({
        name: result.name,
        value: 1,
      });
      localStorage.setItem("basket", JSON.stringify(basket));
      countBasket.changeCountInLocal();
    }
  });

  const countBasket = getCountBasket(result.name, btnOrder, result.price, cost);
  if (result.countBasketBoolean === true) {
    countBasket.countBasket.classList.remove("none");
    btnOrder.classList.add("none");
  } else {
    countBasket.countBasket.classList.add("none");
  }

  //объеденяем в один контейнер цену и кнопку для заказа
  divForBtnOrderCost.append(cost, btnOrder, countBasket.countBasket);

  contentTitleCost.append(mainTitle, divForBtnOrderCost);

  contentSliderTitleCost.append(btnBack, slider, contentTitleCost);

  //cсоздаём описание
  const desc = getDesk(
    result.name,
    result.category,
    result.desc,
    result.equipment,
    result.characteristics
  );
  desc.classList.add("product__desc");

  //собираем страницу
  page.append(contentSliderTitleCost, desc);

  return page;
}
