import "/src/js/components/logo/logo.css";
import logoImg from "/src/assets/img/logo.png";
import { router } from "/src/js/main.js";

export function getLogo() {
  const logo = document.createElement("img");
  logo.classList.add("logo");
  logo.src = logoImg;
  logo.addEventListener("click", function (event) {
    logo.classList.toggle("logo-rotate");
    event.preventDefault();
    router.navigate("/");
  });

  return logo;
}
