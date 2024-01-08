import "/src/js/components/productCard/productCard.css";
import { getNavigationLink } from "/src/js/components/navigationLink/navigationLink.js";
import { router } from "/src/js/main.js";
import { getCountBasket } from "/src/js/components/countBasket/countBasket.js";

// Создаём карточку товара
export function getProductCard(
  title,
  price,
  desc,
  img,
  id,
  countBasketBoolean
) {
  const item = document.createElement("li");
  item.classList.add("product-list__item");

  const image = document.createElement("img");
  image.classList.add("image");
  image.src = img;
  image.addEventListener("click", function (event) {
    event.preventDefault();
    router.navigate(`/product/${id}`);
  });

  const productTitle = document.createElement("h2");
  productTitle.classList.add("product-list__title");

  let productLink = getNavigationLink(`/product/${id}`, title);
  productLink.classList.remove("navigation-link");
  productLink.classList.add("product-card__product-link");

  productTitle.append(productLink);

  const productPrice = document.createElement("strong");
  productPrice.classList.add("product-list__price");
  productPrice.textContent = `${price} руб`;

  const divForTitlePrice = document.createElement("div");
  divForTitlePrice.classList.add("div-for-title-price");
  divForTitlePrice.append(productTitle, productPrice);

  const addBasket = document.createElement("button");
  addBasket.classList.add("btn", "btn__product-card");
  addBasket.textContent = "В корзину";
  addBasket.addEventListener("click", function () {
    if (JSON.parse(localStorage.getItem("basket")) != null) {
      const basket = JSON.parse(localStorage.getItem("basket"));

      let valueBasket = true;
      for (let i of basket) {
        if (i.name === title) {
          valueBasket = false;
          i.value = i.value + 1;
        }
      }

      if (valueBasket === true) {
        basket.push({
          name: title,
          value: 1,
        });
      }

      localStorage.removeItem("basket");
      localStorage.setItem("basket", JSON.stringify(basket));
      countBasket.changeCountInLocal();
    } else {
      const basket = [];
      basket.push({
        name: title,
        value: 1,
      });
      localStorage.setItem("basket", JSON.stringify(basket));
      countBasket.changeCountInLocal();
    }

    addBasket.classList.add("none");
    countBasket.countBasket.classList.remove("none");
  });

  const countBasket = getCountBasket(title, addBasket, price, productPrice);
  if (countBasketBoolean === true) {
    countBasket.countBasket.classList.remove("none");
    addBasket.classList.add("none");
  } else {
    countBasket.countBasket.classList.add("none");
  }

  const idProduct = document.createElement("p");
  idProduct.classList.add("none");
  idProduct.textContent = id;

  item.append(image, divForTitlePrice, countBasket.countBasket, addBasket);

  return item;
}
