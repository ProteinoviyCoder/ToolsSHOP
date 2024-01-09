import "/src/js/pages/main/main.css";
import logo from "/src/assets/img/logo.png";
import dewalt from "/src/assets/img/dewalt.png";
import makita from "/src/assets/img/makita.png";
import metabo from "/src/assets/img/metabo.png";
import karcher from "/src/assets/img/karcher.png";
import bosch from "/src/assets/img/bosch.png";
import festool from "/src/assets/img/festool.png";
import milwaukee from "/src/assets/img/milwaukee.png";
import hands from "/src/assets/img/hands.jpg";
import litleStar from "/src/assets/img/litleStar.png";
import avitoImg from "/src/assets/img/avito.jpeg";
import ozonImg from "/src/assets/img/ozon.jpg";
import sberImg from "/src/assets/img/sber.jpg";
import yandexImg from "/src/assets/img/yandex.jpg";
import addressImg from "/src/assets/img/address.jpg";
import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js";
import { getSemiTitle } from "/src/js/components/semiTitle/semiTitle.js";
import { getSlider } from "/src/js/components/slider/slider.js";
import { descBrand } from "/src/assets/text/text.js";

// Главная страница
export function getMainPage() {
  const page = document.createElement("div");
  page.classList.add("page", "main-page", "container");

  //делаем контент логотипом и описанием компании
  const containerContent1 = document.createElement("div");
  containerContent1.classList.add("main__container-content");

  const corelogo = document.createElement("img");
  corelogo.classList.add("main__logo");
  corelogo.src = logo;

  const titleAndDesc = document.createElement("div");
  titleAndDesc.classList.add("main__title-and-desc");

  const title = getMainTitle("Планета инструмента");
  title.classList.add("main__title");

  const desc = document.createElement("p");
  desc.classList.add("main__desc");
  desc.textContent = `За долгое время на рынке, зарекомендовали себя как надёжного продавца- нового, оригинального и качественного инструмента.
     Компания обладающая огромным количеством положительных отзывов, постоянных клиентов и высокого спроса`;

  titleAndDesc.append(title, desc);

  containerContent1.append(corelogo, titleAndDesc);

  //делаем контент с брендами
  const containerContent2 = document.createElement("div");
  containerContent2.classList.add("main__container-content", "main__content2");

  const semiTitle = getSemiTitle("У нас Вы можете найти эти бренды");
  semiTitle.classList.add("main__semi-title");

  const brandImages = document.createElement("div");
  brandImages.classList.add("main__brand-images");

  function createImgBrand(imgPath) {
    const img = document.createElement("img");
    img.classList.add("main__img-brand");
    img.src = imgPath;

    brandImages.append(img);
  }
  createImgBrand(dewalt);
  createImgBrand(makita);
  createImgBrand(metabo);
  createImgBrand(karcher);
  createImgBrand(bosch);
  createImgBrand(festool);
  createImgBrand(milwaukee);

  const contentSliderDesc = document.createElement("div");
  contentSliderDesc.classList.add("main__content-slider-desc");

  const mainSlider = getSlider(
    dewalt,
    makita,
    festool,
    karcher,
    metabo,
    bosch,
    milwaukee
  );
  mainSlider.classList.add(
    "main__slider",
    "main-elements-right",
    "main-elements"
  );

  const dataDescBrand = descBrand;

  const sliderDesc = document.createElement("p");
  sliderDesc.classList.add(
    "main__slider-desc",
    "main-elements-left",
    "main-elements"
  );
  sliderDesc.textContent = dataDescBrand.brand.desc;

  const btnLeft = mainSlider.querySelector(".slider__button-left");
  btnLeft.addEventListener("click", searchText);
  const btnRight = mainSlider.querySelector(".slider__button-right");
  btnRight.addEventListener("click", searchText);

  function searchText() {
    const slidInnerSlider = mainSlider.querySelector(".slider__div-image");

    sliderDesc.textContent = "";
    for (let i in dataDescBrand) {
      if (dataDescBrand[i].img == slidInnerSlider.firstChild.src) {
        sliderDesc.textContent = dataDescBrand[i].desc;
      }
    }
  }

  contentSliderDesc.append(mainSlider, sliderDesc);

  const hr1 = document.createElement("hr");
  hr1.classList.add("main__hr");

  containerContent2.append(semiTitle, brandImages, contentSliderDesc, hr1);

  // ----------------ОТДЕЛ №3-------------------------
  //делаем 3 отдел о дружной команде и отзывах
  const containerContent3 = document.createElement("div");
  containerContent3.classList.add("main__container-content", "main__content3");

  const imgHands = document.createElement("img");
  imgHands.classList.add("main__img-hands");
  imgHands.src = hands;

  const aboutTeam = document.createElement("ul");
  aboutTeam.classList.add("main__list__about-team");

  function createItemTeamList(textItemAboutTeam) {
    const itemAboutTeam = document.createElement("li");
    itemAboutTeam.classList.add("main__item__about-team");
    itemAboutTeam.textContent = textItemAboutTeam;
    aboutTeam.append(itemAboutTeam);
  }
  createItemTeamList(
    `Команда более чем из 10 человек ежедневно трудится, чтобы предоставить Вам лучший сервис и оптимальные цены`
  );
  createItemTeamList(
    `Более 100 продаж и довольных клиентов ежедневно по всей России`
  );
  createItemTeamList(`Доверительное отношение с клиентами - залог нашего успеха. 
  У нас есть постоянные клиенты, а так же большое количество положительных отзывов с разных площадок`);

  containerContent3.append(imgHands, aboutTeam);

  // ---------------------Отдел №4 ОТЗЫВЫ---------------------
  const containerContent4 = document.createElement("div");
  containerContent4.classList.add("main__container-content", "main__content4");

  function createFeedback(feedTitle, feedText) {
    const divTileTextFeedback = document.createElement("div");
    divTileTextFeedback.classList.add("main__div-tile-text-feedback");

    const starTitle = document.createElement("div");
    starTitle.classList.add("main__stars-title");

    const titleFeedback = document.createElement("p");
    titleFeedback.classList.add("main__teitle-feedback");
    titleFeedback.textContent = feedTitle;

    starTitle.append(titleFeedback);

    const divStar = document.createElement("div");
    divStar.classList.add("div-star");

    function createStarImg() {
      const star = document.createElement("img");
      star.classList.add("main__star-img");
      star.src = litleStar;

      divStar.append(star);
    }
    createStarImg();
    createStarImg();
    createStarImg();
    createStarImg();
    createStarImg();

    starTitle.append(divStar);

    const textFeedback = document.createElement("p");
    textFeedback.classList.add("main__text-feedback");
    textFeedback.textContent = feedText;

    divTileTextFeedback.append(starTitle, textFeedback);

    return divTileTextFeedback;
  }
  const feedback1 = createFeedback(
    "Писарева Марина",
    "Спасибо огромное! Замечательный продавец! Всегда на связи, отправка вовремя.Товар шикарный! Всем рекомендую!"
  );
  feedback1.classList.add("main-elements-left", "main-elements");
  const feedback2 = createFeedback(
    "Дмитрий Сенькин",
    "Отличные ребята! Приехал к ним на склад. Они показали весь интересующий меня ассортимент, все рассказали и дали попробовать, как инструмент в руке лежит. Короче красавцы!"
  );
  feedback2.classList.add(
    "main__feedback-right",
    "main-elements-right",
    "main-elements"
  );
  const feedback3 = createFeedback(
    "Артур",
    "Огромное человеческое спасибо за пилу!!! Лучшая цена!) Мне очень важно было забрать ее в определенное время, забрал как и договаривались! Все открыли посмотрели, проверили! Добрый и позитивный продавец) Рекомендую миллион % )))"
  );
  feedback3.classList.add("main-elements-left", "main-elements");
  const feedback4 = createFeedback(
    "Артём",
    "Отвечали на вопросы круглосуточно, все обещания по отправке товара выполнили, покупал погружную пилу, пришла, всё ок, рекомендую"
  );
  feedback4.classList.add(
    "main__feedback-right",
    "main-elements-right",
    "main-elements"
  );
  const feedback5 = createFeedback("Алексей", "Абра-кадабра, чудо-магазин");
  feedback5.classList.add("main-elements-left", "main-elements");

  containerContent4.append(
    feedback1,
    feedback2,
    feedback3,
    feedback4,
    feedback5
  );

  // ---------------------Отдел №5 МАРКЕТПЛЕЙСЫ И ФИЗ АДРЕС---------------------
  // МАРКЕТПЛЕЙСЫ
  const containerContent5 = document.createElement("div");
  containerContent5.classList.add("main__container-content", "main__content5");

  const titleMarketplace = document.createElement("p");
  titleMarketplace.classList.add("main__title-marketplace");
  titleMarketplace.textContent = "Вы можете нас найти";

  const listMarketplace = document.createElement("ul");
  listMarketplace.classList.add("main__list-marketplace");

  function createItemMarketplace(marketLink, marketImg) {
    const itemMarketPlace = document.createElement("li");
    itemMarketPlace.classList.add("main__item-marketplace");

    const linkMarketplace = document.createElement("a");
    linkMarketplace.classList.add("main__link-marketplace");
    linkMarketplace.href = marketLink;
    linkMarketplace.target = "_blank";

    const imgMarketplace = document.createElement("img");
    imgMarketplace.classList.add("main__img-marketplace");
    imgMarketplace.src = marketImg;

    linkMarketplace.append(imgMarketplace);
    itemMarketPlace.append(linkMarketplace);

    listMarketplace.append(itemMarketPlace);
  }

  createItemMarketplace("https://www.avito.ru/", avitoImg);
  createItemMarketplace("https://www.ozon.ru/", ozonImg);
  createItemMarketplace("https://megamarket.ru/", sberImg);
  createItemMarketplace("https://market.yandex.ru/", yandexImg);

  const hr2 = document.createElement("hr");
  hr2.classList.add("main__hr");

  //ФИЗ АДРЕС
  const contentAddress = document.createElement("div");
  contentAddress.classList.add("main__content-addres");

  const linkAddress = document.createElement("a");
  linkAddress.classList.add(
    "main__name-address",
    "main-elements-left",
    "main-elements"
  );
  linkAddress.textContent = "Москва, Москва";
  linkAddress.href =
    "https://yandex.ru/maps/geo/moskva/53000094/?ll=37.385439%2C55.584227&z=9.5";
  linkAddress.target = "_blank";

  const imgAddress = document.createElement("img");
  imgAddress.classList.add(
    "main__img-address",
    "main-elements-right",
    "main-elements"
  );
  imgAddress.src = addressImg;
  imgAddress.addEventListener("click", function () {
    window.open(
      "https://yandex.ru/maps/geo/moskva/53000094/?ll=37.385439%2C55.584227&z=9.5",
      "_blank"
    );
  });

  contentAddress.append(linkAddress, imgAddress);

  const hr3 = document.createElement("hr");
  hr3.classList.add("main__hr");

  containerContent5.append(
    titleMarketplace,
    listMarketplace,
    hr2,
    contentAddress,
    hr3
  );

  // ---------------------Отдел №6 частые вопросы---------------------
  const containerContent6 = document.createElement("div");
  containerContent6.classList.add("main__container-content", "main__content6");

  const titleQuestions = document.createElement("p");
  titleQuestions.classList.add("main__title-questions");
  titleQuestions.textContent = "Частые вопросы";

  const listQuestions = document.createElement("ul");
  listQuestions.classList.add("main__list-questions");

  function createItemQuestions(questionTitleData, questionTextData) {
    const itemQuestions = document.createElement("li");
    itemQuestions.classList.add("main__item-questions");
    itemQuestions.addEventListener("click", function () {
      textItemQuestions.classList.toggle("main__none");
      arrowDown.classList.toggle("main__arrow-up");
      itemQuestions.classList.toggle("main__item-questions-active");
      titleItemQuestions.classList.toggle(
        "main__content-title-questions-active"
      );
      window.scrollTo({
        top: 100000,
        left: 0,
      });
    });

    const contentTitleQuestions = document.createElement("div");
    contentTitleQuestions.classList.add("main__content-title-questions");

    const titleItemQuestions = document.createElement("p");
    titleItemQuestions.classList.add("main__item-title-questions");
    titleItemQuestions.textContent = questionTitleData;

    const arrowDown = document.createElement("div");
    arrowDown.classList.add("main__arrow-down");

    contentTitleQuestions.append(titleItemQuestions, arrowDown);

    const textItemQuestions = document.createElement("p");
    textItemQuestions.textContent = questionTextData;
    textItemQuestions.classList.add("main__text-questions");
    textItemQuestions.classList.add("main__none");

    itemQuestions.append(contentTitleQuestions, textItemQuestions);

    listQuestions.append(itemQuestions);
  }

  createItemQuestions(
    `У Вас оригинальный инструмент?`,
    `Да, у нас полностью оригинальный инструмент!`
  );
  createItemQuestions(
    `Можно ли приехать посмотреть?`,
    `Да, Вы можете приехать к нам, посмотреть весь ассортимент, проверить работоспособность.`
  );

  containerContent6.append(titleQuestions, listQuestions);

  page.append(
    containerContent1,
    containerContent2,
    containerContent3,
    containerContent4,
    containerContent5,
    containerContent6
  );

  setTimeout(function () {
    corelogo.classList.add("main-elements-show");
    titleAndDesc.classList.add("main-elements-show");
    semiTitle.classList.add("main-elements-show");

    const allImagesBrand = brandImages.querySelectorAll(".main__img-brand");

    for (let i of allImagesBrand) {
      i.classList.add("main-elements-show");
    }
  }, 10);

  document.addEventListener("scroll", checkElem);

  const elements = page.querySelectorAll(".main-elements");
  checkElem();
  function checkElem() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    for (let element of elements) {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        element.classList.add("main-elements-show");
      } else {
        element.classList.remove("main-elements-show");
      }
    }
  }

  return page;
}
