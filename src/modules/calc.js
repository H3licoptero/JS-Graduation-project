"use strict";

//Калькулятор
const calculate = () => {
  //получаем наши элементы переключателя
  let firstSwitch = document.querySelector("#myonoffswitch");

  //поле для вывода результата подсчёта
  let aproximateCost = document.querySelector("#calc-result");

  //  тут блок заголовка для наших select
  let firstSelectTitle = document.querySelector(".first-title-text");
  //тут все наши select для однокамерного колодца
  let firstBoxSelect = document.querySelector(".first-select"),
   firstSelectRings = document.querySelector(".first-select-rings");

  // тут блок заголовка для наших select
  let secondSelectTitle = document.querySelector(".second-title-text");
  //тут все наши select для двухкамерного колодца
  let secondBoxSelect = document.querySelector(".second-select"),
   secondSelectRings = document.querySelector(".second-select-rings");

  // тут второй переключатель, для выбора дна
  let secondSwitch = document.querySelector("#myonoffswitch-two"),
   distanceInput = document.querySelector(".distance-from-home");

  let firstBoxPrice = 10000;
  let secondBoxPrice = 15000;

  let changeCamera = () => {
    // устанваливаем изначальное отображение только первого элемента(колодца)
    secondBoxSelect.style.display = "none";
    secondSelectTitle.style.display = "none";
    secondSelectRings.style.display = "none";

    aproximateCost.value = firstBoxPrice;

    //обрабатываем событие переключая наши елементы
    firstSwitch.addEventListener("change", () => {
      let target = event.target;
      if (target.checked) {
        // тут все наши select для двухкамерного колодца
        secondBoxSelect.style.display = "none";
        secondSelectTitle.style.display = "none";
        secondSelectRings.style.display = "none";
        // тут для однокамерного
        firstBoxSelect.style.display = "inline-block";
        firstSelectTitle.style.display = "block";
        firstSelectRings.style.display = "inline-block";
        //результат в инпуте
        aproximateCost.value = firstBoxPrice;
      } else {
        secondBoxSelect.style.display = "inline-block";
        secondSelectRings.style.display = "inline-block";
        secondSelectTitle.style.display = "block";

        firstSelectRings.style.display = "inline-block";

        aproximateCost.value = secondBoxPrice;
      }
    });
  };

  changeCamera();

  let withBottom = 1000;

  secondSwitch.addEventListener("change", event => {
    let target = event.target;
    if (target.checked) {
      aproximateCost.value = firstBoxPrice + withBottom;
    } else {
      aproximateCost.value = firstBoxPrice;
    }
  });

  let countCost = () => {
    let formSelect = document.querySelectorAll(".form-control");

    let values = {
      firstBoxPrice: 10000,
      secondBoxPrice: 15000,
      firstBoxValue: (firstBoxPrice * 20) / 100,
      secondBoxValue: (firstBoxPrice * 30) / 100,
      thirdBoxValue: (firstBoxPrice * 50) / 100,
      firstBoxValueTwo: (secondBoxPrice * 20) / 100,
      secondBoxValueTwo: (secondBoxPrice * 20) / 100,
      thirdBoxValueTwo: (secondBoxPrice * 20) / 100,
      withBottom: 1000,
      doubleBottom: 2000,
      result: 0
    };

    console.log(values);

    formSelect.forEach(elems => {
      elems.addEventListener("change", event => {
        let target = event.target;
        let changeValue = elems.options[elems.selectedIndex].value;
        // тут select-ы, чтоб их
        let firstBox = elems.closest(".first-select");
        let secondBox = elems.closest(".first-select-rings");
        let thirdBox = elems.closest(".second-select");
        let fourthBox = elems.closest(".second-select-rings");

        if (elems.closest(".first-select")) {
          values.result = values.firstBoxPrice + values.firstBoxValue;
          aproximateCost.value = values.result;
          console.log(changeValue);
        }

        if (elems.closest(".first-select-rings")) {
          values.result = values.firstBoxPrice + values.secondBoxValue;
          aproximateCost.value = values.result;
          console.log(changeValue);
        }

        if (elems.closest(".second-select")) {
          values.result = values.firstBoxPrice + values.thirdBoxValue;
          aproximateCost.value = values.result;
          console.log(changeValue);
        }

        if (elems.closest(".second-select-rings")) {
          values.result = values.firstBoxPrice + values.secondBoxValue;
          aproximateCost.value = values.result;
          console.log(changeValue);
        }
      });
    });
  };

  countCost();
};

export default calculate;
