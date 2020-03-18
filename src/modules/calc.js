"use strict";

//Калькулятор
const calculate = () => {
  //получаем наши элементы переключателя
  const constructor = document.querySelector('.constructor');
  const firstSwitch = constructor.querySelector("#myonoffswitch");

  //поле для вывода результата подсчёта
  const aproximateCost = constructor.querySelector("#calc-result");

  //тут select для всех колодцев
  const diametrSelect = constructor.querySelectorAll(".diametr-select"),
    ringsSelect = constructor.querySelectorAll(".rings-select");

  // тут второй переключатель, для выбора дна
  const secondSwitch = constructor.querySelector("#myonoffswitch-two"),
    distanceInput = constructor.querySelector(".distance-from-home");

  const firstWell = constructor.querySelector(".first-well");
  const secondWell = constructor.querySelector(".second-well");

  // console.log(diametrSelect);
  // console.log(ringsSelect);
  

  let data = {
   price: 10000,
   type: true,
   diametr: ['1.4 метра'],
   rings: ['1 штука'],
   bottom: true,
   distance: 0 
  };

  let getInformation = () => {

    secondWell.style.display = 'none';
    secondSwitch.checked = data.bottom;

    firstSwitch.addEventListener("change", () => {

      if (firstSwitch.checked) {
        secondWell.style.display = "none";
        firstWell.style.display = "block";
        data.price = 10000;
        data.type = true;

        aproximateCost.value = data.firstPrice;

        if(data.diametr.length > 1) {
          data.diametr.pop();
        }

        if(data.rings.length > 1) {
          data.diametr.pop();
        }

      } else {
        secondWell.style.display = "block";
        data.type = false;
        data.price = 15000;
        data.diametr.push("1.4 метра");
        data.rings.push("1 штука");
      }

    });

    diametrSelect.forEach((elems, i) => {
      elems.addEventListener('change', event => {
        data.diametr[i] = elems.value;
      });
    });

    ringsSelect.forEach((elems, i) => {
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
      diametrChange = 1,
      ringsChange = 1;

    if (data.type) {
      startPrice = 10000;
    } else {
      startPrice = 15000;
    }

    diametrSelect.forEach(elems => {
      if (elems.value === "2 метра") {
        diametrChange *= 1.2;
      }
    });

    ringsSelect.forEach(elems => {
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

    data.price = Math.floor(startPrice * diametrChange * ringsChange + lastPrice);

  };


  constructor.addEventListener("change", event => {
    let target = event.target;

    if (target === firstSwitch || target === secondSwitch) {
      countCost(data);
      aproximateCost.value = data.price;
    }

    diametrSelect.forEach(el => {
      if (target === el) {
        countCost(data);
        aproximateCost.value = data.price;
      }
    });

    ringsSelect.forEach(el => {
      if (target === el) {
        countCost(data);
        aproximateCost.value = data.price;
      }
    });
  });

 return data;
};

const object = calculate();

export {
  calculate, 
  object
};
