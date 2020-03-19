"use strict";

//Калькулятор
const calculate = () => {
  //получаем наши элементы переключателя
  const constructor = document.querySelector('.constructor');
  const firstSwitch = constructor.querySelector("#myonoffswitch");

  //поле для вывода результата подсчёта
  const aproximateCost = constructor.querySelector("#calc-result");

  //тут select для всех колодцев
  const diameterSelect = constructor.querySelectorAll(".diametr-select"),
    ringSelect = constructor.querySelectorAll(".rings-select");

  // тут второй переключатель, для выбора дна
  const secondSwitch = constructor.querySelector("#myonoffswitch-two"),
    distanceInput = constructor.querySelector(".distance-from-home");

  const firstDrawWell = constructor.querySelector(".first-well");
  const secondDrawWell = constructor.querySelector(".second-well");

  distanceInput.addEventListener('input', event => {
    distanceInput.value = distanceInput.value.replace(/\D/g, '');
  });
  
  let data = {
   price: 10000,
   type: true,
   diameter: ['1.4 метра'],
   rings: ['1 штука'],
   bottom: true,
   distance: 0 
  };

  let getInformation = () => {

    secondDrawWell.style.display = "none";
    secondSwitch.checked = data.bottom;

    firstSwitch.addEventListener("change", () => {

      if (firstSwitch.checked) {
        secondDrawWell.style.display = "none";
        firstDrawWell.style.display = "block";
        data.price = 10000;
        data.type = true;

        aproximateCost.value = data.firstPrice;

        if(data.diameter.length > 1) {
          data.diameter.pop();
        }

        if(data.rings.length > 1) {
          data.diameter.pop();
        }

      } else {
        secondDrawWell.style.display = "block";
        data.type = false;
        data.price = 15000;
        data.diameter.push("1.4 метра");
        data.rings.push("1 штука");
      }

    });

    diameterSelect.forEach((elems, i) => {
      elems.addEventListener("change", event => {
        data.diameter[i] = elems.value;
      });
    });

    ringSelect.forEach((elems, i) => {
      elems.addEventListener('change', event => {
        data.rings[i] = elems.value; 
      });
    }); 


    secondSwitch.addEventListener('change', event => {
      if(secondSwitch.checked) {
        data.bottom = true; 
      } else {
        data.bottom = false;
      }
    });

    distanceInput.addEventListener('input', event => {
      data.distance = distanceInput.value;
    });

  };

  getInformation();

  let countCost = data => {

    let startPrice = 0,
      lastPrice = 0,
      diameterChange = 1,
      ringsChange = 1;

    if (data.type) {
      startPrice = 10000;
    } else {
      startPrice = 15000;
    }

    diameterSelect.forEach(elems => {
      if (elems.value === "2 метра") {
        diameterChange *= 1.2;
      }
    });

    ringSelect.forEach(elems => {
      if (elems.value === "2 штуки") {
        ringsChange *= 1.3;
      } else if (elems.value === "3 штуки") {
        ringsChange *= 1.5;
      }
    });

    if (data.bottom && data.type) {
      lastPrice = 1000;
    } else if (data.bottom && !data.type) {
      lastPrice = 2000;
    }

    data.price = Math.floor(startPrice * diameterChange * ringsChange + lastPrice);

  };


  constructor.addEventListener("change", event => {
    let target = event.target;

    if (target === firstSwitch || target === secondSwitch) {
      countCost(data);
      aproximateCost.value = data.price;
    }

    diameterSelect.forEach(el => {
      if (target === el) {
        countCost(data);
        aproximateCost.value = data.price;
      }
    });

    ringSelect.forEach(el => {
      if (target === el) {
        countCost(data);
        aproximateCost.value = data.price;
      }
    });
  });

 return data;
};

const object = calculate();
const obj = calculate();

export {
  calculate, 
  object, 
  obj
};
