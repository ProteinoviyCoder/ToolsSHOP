import "/src/js/components/btnBackHistory/btnBackHistory.css";
import leftArrow from "/src/assets/img/arrowLeft.png";

export function getBtnBackHistoryWindow() {
  const btnBackHistory = document.createElement("button");
  btnBackHistory.classList.add("btn-back-history");
  btnBackHistory.addEventListener("click", function () {
    window.history.back();
  });

  const arrowLeft = document.createElement("img");
  arrowLeft.classList.add("btn-back__string-left");
  arrowLeft.src = leftArrow;

  btnBackHistory.append(arrowLeft);

  return btnBackHistory;
}
