import "/src/js/components/brands/brands.css";
import { getProductCard } from "/src/js/components/productCard/productCard.js";

export function getBrands(categoryNavigo, place) {
  //создаём список брендов
  const listBrand = document.createElement("ul");
  listBrand.classList.add("list-brand");

  //создаём бренды
  function createBrand(nameBrand) {
    const brand = document.createElement("button");
    brand.classList.add("brand");
    brand.textContent = nameBrand.toUpperCase();
    if (brand.textContent == "ВСЕ") {
      brand.classList.add("active-brand");
    }

    brand.addEventListener("click", async function () {
      //Отмечаем нажатую кнопку как активную
      const allBtnBrands = document.querySelectorAll(".brand");
      for (let i of allBtnBrands) {
        i.classList.remove("active-brand");
      }
      brand.classList.add("active-brand");

      //делаем запрос на сервер
      const result = JSON.parse(localStorage.getItem("cards"));

      //очищаем место для данных
      place.innerHTML = "";

      //делаем перебор по данным, для данных отвечающим критериям поиска создаём карточку и добавляем в место для данных
      for (let i in result) {
        if (categoryNavigo != "Все") {
          // если категория НЕ "все" И бренд конкретный
          if (brand.textContent != "ВСЕ") {
            if (result[i].brand != undefined) {
              if (
                result[i].brand.toUpperCase() === brand.textContent &&
                result[i].categoryENG === categoryNavigo
              ) {
                const product = getProductCard(
                  result[i].name,
                  result[i].price,
                  result[i].desc,
                  result[i].imgSmall,
                  result[i].id,
                  result[i].countBasketBoolean
                );

                place.append(product);
              }
            }
            // если категория НЕ "все" И все бренды
          } else if (brand.textContent == "ВСЕ") {
            if (result[i].categoryENG === categoryNavigo) {
              const product = getProductCard(
                result[i].name,
                result[i].price,
                result[i].desc,
                result[i].imgSmall,
                result[i].id,
                result[i].countBasketBoolean
              );

              place.append(product);
            }
          }
        } else if (categoryNavigo == "Все") {
          // если категория ВСЕ И конкретный бренд
          if (brand.textContent != "ВСЕ") {
            if (result[i].brand != undefined) {
              if (result[i].brand.toUpperCase() === brand.textContent) {
                const product = getProductCard(
                  result[i].name,
                  result[i].price,
                  result[i].desc,
                  result[i].imgSmall,
                  result[i].id,
                  result[i].countBasketBoolean
                );

                place.append(product);
              }
            }
            // если категория ВСЕ И все бренды
          } else if (brand.textContent == "ВСЕ") {
            const product = getProductCard(
              result[i].name,
              result[i].price,
              result[i].desc,
              result[i].imgSmall,
              result[i].id,
              result[i].countBasketBoolean
            );

            place.append(product);
          }
        }
      }

      if (place.innerHTML == "" || place.innerHTML == null) {
        const notFoundText = document.createElement("p");
        notFoundText.classList.add("brand__not-found-text");
        notFoundText.textContent =
          "Похоже такого у нас нет, попробуйте поискать другой бренд :)";
        place.append(notFoundText);
      }
    });

    listBrand.append(brand);
  }
  createBrand("Все");
  createBrand("DeWalt");
  createBrand("Makita");
  createBrand("Metabo");
  createBrand("Festool");
  createBrand("Karcher");
  createBrand("Milwaukee");
  createBrand("Bosch");
  createBrand("Husqvarna");
  createBrand("Leica");
  createBrand("Mac Allister");

  const allBtnBrands = listBrand.querySelectorAll(".brand");
  for (let i of allBtnBrands) {
    if (i.textContent == "Все") {
      i.classList.add("active-brand");
    }
  }

  return listBrand;
}
