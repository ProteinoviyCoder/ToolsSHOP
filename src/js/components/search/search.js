import "/src/js/components/search/search.css";
import { router } from "/src/js/main.js";

export function getSearch() {
  //создаём контейнер для поисковика и блока с подсказками
  const searchBlock = document.createElement("div");
  searchBlock.classList.add("search-block");

  //создаём поисковую строку
  const search = document.createElement("input");
  search.classList.add("search");
  search.type = "text";
  search.placeholder = "Что ищете?";

  //создаём блок с подсказками при поиске
  const helpList = document.createElement("ul");
  helpList.classList.add("help-list");
  helpList.classList.add("search__none");
  const firstItem = document.createElement("p");
  firstItem.classList.add("first-item");
  firstItem.classList.add("search__none");
  firstItem.textContent = "Ничего не найдено";
  helpList.append(firstItem);

  const dataCard = JSON.parse(localStorage.getItem("cards"));

  for (let i in dataCard) {
    const helpItem = document.createElement("li");
    helpItem.classList.add("help-item");
    helpItem.classList.add("search__none");
    helpItem.textContent = dataCard[i].name.toUpperCase();
    helpItem.addEventListener("click", function () {
      router.navigate(`/product/${dataCard[i].id}`);
    });

    helpList.append(helpItem);
  }

  searchBlock.append(search, helpList);

  search.addEventListener("input", function (event) {
    if (event.target.value == "") {
      helpList.classList.add("search__none");
    } else {
      helpList.classList.remove("search__none");
    }

    let arraySearch = event.target.value.split(" ");

    const allHelpItem = helpList.querySelectorAll(".help-item");

    for (let i of allHelpItem) {
      let valueSearch = true;
      for (let x of arraySearch) {
        if (i.textContent.search(x.toUpperCase()) == -1) {
          valueSearch = false;
        }
        if (valueSearch === true) {
          i.classList.remove("search__none");
        } else if (valueSearch === false) {
          i.classList.add("search__none");
        }
      }
    }

    let valueFerstItem = true;
    for (let i of allHelpItem) {
      if (!i.classList.contains("search__none")) {
        valueFerstItem = false;
      }
    }

    if (valueFerstItem === true) {
      firstItem.classList.remove("search__none");
    } else {
      firstItem.classList.add("search__none");
    }
  });

  document.addEventListener("click", function (e) {
    const close = e.composedPath().includes("help-list");

    if (!close) {
      const helpList = document.querySelector(".help-list");
      if (helpList != undefined) {
        helpList.classList.add("search__none");
      }
    }
  });

  return searchBlock;
}
