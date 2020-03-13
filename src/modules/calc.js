'use strict';

//Калькулятор-аккордеон
const calculate = () => {
  const btnCollapsed = document.querySelectorAll(".collapsed"),
    panels = document.querySelectorAll(".panel-body"),
    panelHeading = document.querySelectorAll(".panel-heading");
  console.log(btnCollapsed);

  console.log(panels);
  // console.log(panelHeading);

  btnCollapsed.forEach((elems, items) => {
    elems.addEventListener("click", event => {
      let target = event.target;

      console.log(items);

      if (event.target === true) {
        panels.style.display = "block";
      } else if (event.target === true) {
        panels.style.display = "none";
      }
      console.log(target);
    });
  });

  // console.log(btnCollapsed);
};

calculate();


