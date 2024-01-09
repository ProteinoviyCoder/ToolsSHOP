import "/src/js/pages/order/order.css";
import photo from "/src/assets/img/noPhoto.png";
import { getBtnBackHistoryWindow } from "/src/js/components/btnBackHistory/btnBackHistory.js";

// Страница каталога
export function getOrderPage() {
  const page = document.createElement("div");
  page.classList.add("page", "order-page", "container");

  // const mainTitle = getMainTitle("Оформление");

  const contentForm = document.createElement("div");
  contentForm.classList.add("order__content-form");

  const imgFormBlock = document.createElement("div");
  imgFormBlock.classList.add("order__img-form-block");

  const btnBack = getBtnBackHistoryWindow();
  btnBack.classList.add("order__btn-back");

  const imgForm = document.createElement("img");
  imgForm.classList.add("order__img-form");
  imgForm.src = photo;

  const formOrder = document.createElement("form");
  formOrder.classList.add("order__form-order");

  //div для inputName и его имени
  const contentInputName = document.createElement("div");
  contentInputName.classList.add("order__content-input");
  contentInputName.id = "order__contetn-input-name";

  const nameInput = document.createElement("p");
  nameInput.classList.add("order__name-input");
  nameInput.textContent = "Ваше имя";

  const inputName = document.createElement("input");
  inputName.classList.add("order__input");
  inputName.name = "naming";
  inputName.placeholder = "Минимум 2 символа";
  inputName.type = "text";
  inputName.addEventListener("input", function () {
    inputName.value = inputName.value.replace(/\d/g, "");

    if (inputPhone.value.length < 16 || inputName.value.length < 2) {
      submit.disabled = true;
      submit.classList.add("disable");
    } else {
      submit.disabled = false;
      submit.classList.remove("disable");
    }
  });

  contentInputName.append(nameInput, inputName);

  //div для inputPhone и его имени
  const contentInputPhone = document.createElement("div");
  contentInputPhone.classList.add("order__content-input");

  const nameInputPhone = document.createElement("p");
  nameInputPhone.classList.add("order__name-input");
  nameInputPhone.textContent = "Ваш телефон";

  const inputPhone = document.createElement("input");
  inputPhone.classList.add("order__input");
  inputPhone.type = "text";
  inputPhone.name = "phone";
  inputPhone.placeholder = "Минимум 10 символов";
  inputPhone.minLength = "10";
  inputPhone.maxLength = "18";
  inputPhone.title = "Минимум 10 символов";
  inputPhone.addEventListener("input", function () {
    if (inputPhone.value.length < 16 || inputName.value.length < 2) {
      submit.disabled = true;
      submit.classList.add("disable");
    } else {
      submit.disabled = false;
      submit.classList.remove("disable");
    }

    const cleaned = inputPhone.value.replace(/\D/g, "");

    let formatted = "+7";

    if (cleaned.length > 0) {
      formatted += " " + cleaned.substring(1, 4);
    }
    if (cleaned.length > 3) {
      formatted += " " + cleaned.substring(4, 7);
    }
    if (cleaned.length > 6) {
      formatted += "-" + cleaned.substring(7, 9);
    }
    if (cleaned.length > 8) {
      formatted += "-" + cleaned.substring(9, 11);
    }

    inputPhone.value = formatted;
  });

  contentInputPhone.append(nameInputPhone, inputPhone);

  const placeProducts = document.createElement("p");
  placeProducts.classList.add("order__place-product");
  placeProducts.id = "products";
  const dataProducts = JSON.parse(localStorage.getItem("basket"));
  let productsArray = [];
  for (let i of dataProducts) {
    if (i.remain === true) {
      let data = `<p class="order__product">${i.name} - <span class="order__span-products">${i.value}шт</span> </p>`;
      productsArray.push(data);
    }
  }
  for (let z of productsArray) {
    placeProducts.insertAdjacentHTML("beforeend", z);
  }

  const submit = document.createElement("input");
  submit.classList.add("order__submit");
  submit.type = "submit";
  submit.value = "Отправить заказ";
  if (inputPhone.value.length < 16 || inputName.value.length < 2) {
    submit.disabled = true;
    submit.classList.add("disable");
  } else {
    submit.disabled = false;
    submit.classList.remove("disable");
  }

  const textInfo = document.createElement("p");
  textInfo.classList.add("text-info");
  textInfo.textContent =
    "Это образец формы, ваши данные не собираются и не сохраняются";

  formOrder.append(
    contentInputName,
    contentInputPhone,
    placeProducts,
    submit,
    textInfo
  );

  imgFormBlock.append(btnBack, imgForm, formOrder);

  contentForm.append(imgFormBlock);

  page.append(contentForm);

  return page;
}
