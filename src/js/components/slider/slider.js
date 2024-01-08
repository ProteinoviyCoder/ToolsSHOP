import "/src/js/components/slider/slider.css";

export function getSlider(img1, img2, img3, img4, img5, img6, img7) {
  //слайдер
  const slider = document.createElement("div");
  slider.classList.add("slider");

  //место для хранения фото
  const arrayImmage = [];
  let arrayImageValue = 0;

  //Создаём кнопку для перемотки в лево
  const btnLeft = document.createElement("button");
  btnLeft.classList.add("slider__button-left");
  btnLeft.addEventListener("click", function () {
    if (arrayImageValue > 0) {
      arrayImageValue = arrayImageValue - 1;
      divImage.innerHTML = "";
      divImage.append(arrayImmage[arrayImageValue]);
      console.log(arrayImageValue);
    }
  });
  const iconLeft = document.createElement("div");
  iconLeft.classList.add("slider__icon-left");

  btnLeft.append(iconLeft);

  //Создаём кнопку для перемотки в право
  const btnRight = document.createElement("button");
  btnRight.classList.add("slider__button-right");
  btnRight.addEventListener("click", function () {
    if (arrayImageValue < arrayImmage.length - 1) {
      arrayImageValue = arrayImageValue + 1;
      divImage.innerHTML = "";
      divImage.append(arrayImmage[arrayImageValue]);
    }
  });
  const iconRight = document.createElement("div");
  iconRight.classList.add("slider__icon-right");

  btnRight.append(iconRight);

  //создаем изображения с путём переданным в функцию
  function createImg(img) {
    if (img != "" && img != undefined) {
      const image = document.createElement("img");
      image.classList.add("slider__image");
      image.src = img;
      arrayImmage.push(image);
    }
  }
  createImg(img1);
  createImg(img2);
  createImg(img3);
  createImg(img4);
  createImg(img5);
  createImg(img6);
  createImg(img7);

  //создаём место для отображения картинок
  const divImage = document.createElement("div");
  divImage.classList.add("slider__div-image");

  //по дефолту отображаем первую картинку из массива
  divImage.append(arrayImmage[arrayImageValue]);

  slider.append(btnLeft, divImage, btnRight);

  return slider;
}
