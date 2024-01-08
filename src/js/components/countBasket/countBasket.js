import "/src/js/components/countBasket/countBasket.css";

function countingPrice(startPrice, countProduct, placeForResult) {
  let resultPrice = (
    Number(startPrice.split(" ").join("")) * Number(countProduct)
  )
    .toString()
    .split("");
  if (resultPrice.length == 4) {
    const remainder = resultPrice.splice(1, 3).join("");
    placeForResult.textContent = resultPrice.join("") + " " + remainder + " р";
  } else if (resultPrice.length == 5) {
    const remainder = resultPrice.splice(2, 3).join("");
    placeForResult.textContent = resultPrice.join("") + " " + remainder + " р";
  } else if (resultPrice.length == 6) {
    const remainder = resultPrice.splice(3, 3).join("");
    placeForResult.textContent = resultPrice.join("") + " " + remainder + " р";
  } else if (resultPrice.length == 7) {
    const remainder1 = resultPrice.splice(1, 6);
    const remainder2 = remainder1.splice(3, 3).join("");
    placeForResult.textContent =
      resultPrice.join("") +
      " " +
      remainder1.join("") +
      " " +
      remainder2 +
      " р";
  }
}

export function getCountBasket(dataBasket, btnBuy, price, placePrice) {
  const countBasket = document.createElement("div");
  countBasket.classList.add("count-basket");

  const btnMinus = document.createElement("button");
  btnMinus.classList.add("count-basket__btn-minus");
  btnMinus.textContent = "-";
  btnMinus.addEventListener("click", function () {
    const basket = JSON.parse(localStorage.getItem("basket"));

    for (let i of basket) {
      if (i.name == dataBasket) {
        i.value = i.value - 1;
        inputCount.value = i.value;
        if (i.value == 0) {
          basket.splice(basket.indexOf(i), 1);
          if (btnBuy != null) {
            btnBuy.classList.remove("none");
          }

          const cards = JSON.parse(localStorage.getItem("cards"));
          if (cards != null) {
            for (let x in cards) {
              if (dataBasket == cards[x].name) {
                cards[x].countBasketBoolean = false;
              }
            }
            localStorage.removeItem("cards");
            localStorage.setItem("cards", JSON.stringify(cards));
          }
        } else if (i.value != 0) {
          changeCountInLocal();
        }
      }
    }

    localStorage.removeItem("basket");
    localStorage.setItem("basket", JSON.stringify(basket));

    if (inputCount.value == 0) {
      countBasket.classList.add("none");
    } else {
      countingPrice(price, inputCount.value, placePrice);
    }
  });

  const inputCount = document.createElement("input");
  inputCount.classList.add("count-basket__input");
  inputCount.type = "number";
  inputCount.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
      const basket = JSON.parse(localStorage.getItem("basket"));

      for (let i of basket) {
        if (i.name == dataBasket) {
          i.value = inputCount.value;
          inputCount.value = i.value;
          inputCount.blur();
          if (i.value == 0) {
            placePrice.textContent = price;
            basket.splice(basket.indexOf(i), 1);
            if (btnBuy != null) {
              btnBuy.classList.remove("none");
            }

            countBasket.classList.add("none");

            const cards = JSON.parse(localStorage.getItem("cards"));
            if (cards != null) {
              for (let x in cards) {
                if (dataBasket == cards[x].name) {
                  cards[x].countBasketBoolean = false;
                }
              }
              localStorage.removeItem("cards");
              localStorage.setItem("cards", JSON.stringify(cards));
            }
          } else {
            countingPrice(price, inputCount.value, placePrice);
          }
        }
      }

      localStorage.removeItem("basket");
      localStorage.setItem("basket", JSON.stringify(basket));
    }
  });

  if (btnBuy != null) {
    btnBuy.addEventListener("click", getValueInputCount);
  }
  function getValueInputCount() {
    const basket = JSON.parse(localStorage.getItem("basket"));
    if (basket != null) {
      for (let i of basket) {
        if (i.name == dataBasket) {
          inputCount.value = i.value;
        }
      }
    }
  }
  getValueInputCount();
  countingPrice(price, inputCount.value, placePrice);

  const btnPlus = document.createElement("button");
  btnPlus.classList.add("count-basket__btn-plus");
  btnPlus.textContent = "+";
  btnPlus.addEventListener("click", function () {
    const basket = JSON.parse(localStorage.getItem("basket"));

    for (let i of basket) {
      if (i.name == dataBasket) {
        i.value = Number(i.value) + 1;
        inputCount.value = i.value;
        if (i.value == 0) {
          basket.splice(basket.indexOf(i), 1);
          btnBuy.classList.remove("none");

          const cards = JSON.parse(localStorage.getItem("cards"));
          if (cards != null) {
            for (let x in cards) {
              if (dataBasket == cards[x].name) {
                cards[x].countBasketBoolean = false;
              }
            }
            localStorage.removeItem("cards");
            localStorage.setItem("cards", JSON.stringify(cards));
          }
        }
      }
    }

    localStorage.removeItem("basket");
    localStorage.setItem("basket", JSON.stringify(basket));
    changeCountInLocal();
    countingPrice(price, inputCount.value, placePrice);
  });

  countBasket.append(btnMinus, inputCount, btnPlus);

  function changeCountInLocal() {
    const cards = JSON.parse(localStorage.getItem("cards"));
    if (cards != null) {
      for (let x in cards) {
        if (dataBasket == cards[x].name) {
          cards[x].countBasketBoolean = true;
        }
      }
      localStorage.removeItem("cards");
      localStorage.setItem("cards", JSON.stringify(cards));
    }
  }

  return { countBasket: countBasket, changeCountInLocal: changeCountInLocal };
}
