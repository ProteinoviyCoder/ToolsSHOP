import "/src/js/components/productList/productList.css";

export function getProductList() {
  const list = document.createElement("ul");
  list.classList.add("product-list");

  const dataBase = async function getDataFromBase() {
    try {
      const request = await fetch(
        `https://toolshop-610e8-default-rtdb.firebaseio.com/tools.json`
      );
      const rep = await request.json();

      const result = {};

      for (let i in rep) {
        for (let x in rep[i]) {
          if (rep[i][x] == null) {
            let y = 0;
          } else {
            result[rep[i][x].id] = rep[i][x];
          }
        }
      }

      if (JSON.parse(localStorage.getItem("basket")) != null) {
        const basket = JSON.parse(localStorage.getItem("basket"));

        for (let i in result) {
          for (let x of basket) {
            if (result[i].name == x.name) {
              result[i].countBasketBoolean = true;
            }
          }
        }
      }

      localStorage.setItem("cards", JSON.stringify(result));

      return result;
    } catch (error) {
      console.log("Сервер недоступен");
    }
  };

  return { list, dataBase };
}
