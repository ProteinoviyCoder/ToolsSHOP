import basketPNG from "/src/assets/img/basket.png";
import "/src/js/components/basketBtn/basketBtn.css";
import { router } from "/src/js/main.js";

export function getBasketBtn() {
  const basketBtn = document.createElement("a");
  basketBtn.href = "/basket";
  basketBtn.classList.add("basket-btn");
  basketBtn.addEventListener("click", function (event) {
    event.preventDefault();
    router.navigate("/basket");
  });

  const imgBasketBtn = document.createElement("img");
  imgBasketBtn.classList.add("img-basket-btn");
  imgBasketBtn.src = basketPNG;

  basketBtn.append(imgBasketBtn);

  return basketBtn;
}
