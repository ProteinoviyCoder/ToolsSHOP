import "/src/js/components/desc/desc.css";

// Создаёт описание
export function getDesk(
  dataName,
  dataCategory,
  datadesc,
  dataEquipment,
  dataCharacteristics
) {
  const desc = document.createElement("div");
  desc.classList.add("desk");

  function createStringOfDesc(nameString, valueString) {
    const descString = document.createElement("div");
    descString.classList.add("desc__string");

    const namingString = document.createElement("p");
    namingString.classList.add("desc__naming-string");
    namingString.textContent = nameString;

    const contentString = document.createElement("p");
    contentString.classList.add("desc__content-string");
    contentString.insertAdjacentHTML("beforeend", valueString);

    descString.append(namingString, contentString);

    const hr = document.createElement("hr");
    hr.classList.add("desc__hr");

    desc.append(descString, hr);
  }

  createStringOfDesc("Название:", dataName);
  if (dataCategory != null) {
    createStringOfDesc("Категория:", dataCategory);
  }

  if (datadesc != null) {
    createStringOfDesc("Описание:", datadesc);
  }

  if (dataEquipment != null) {
    createStringOfDesc("Комплектация:", dataEquipment);
  }

  if (dataCharacteristics != null) {
    //разделяем описание на отступы
    const resultCharacteristics = dataCharacteristics
      .split("\n")
      .join("<br />");
    createStringOfDesc("Характеристики:", resultCharacteristics);
  }

  return desc;
}
