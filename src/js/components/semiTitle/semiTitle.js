import "/src/js/components/semiTitle/semiTitle.css";

// Создаёт главный заголовок
export function getSemiTitle(text) {
  const title = document.createElement("h3");
  title.classList.add("semi-title");
  title.textContent = text;
  return title;
}
