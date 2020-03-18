"use strict";

//accordion
const accordion = () => {
  let acc = document.querySelectorAll(".panel-heading"),
    panelHeading = document.querySelectorAll(".panel-heading"),
    panelCollapse = document.querySelectorAll(".collapse");

  let contentChange = index => {
    for (let i = 0; i < panelCollapse.length; i++) {
      if (index === i) {
        panelCollapse[i].style.display = "block";
      } else {
        panelCollapse[i].style.display = "none";
      }
    }  
  };

  acc.forEach(el => {
    el.addEventListener("click", event => {
      let target = event.target;
      target = target.closest(".panel-heading");

      if (target) {
        panelHeading.forEach((item, i) => {
          if (item === target) {
            contentChange(i);
          }
        });
      }

      event.preventDefault();
    });
  });

};

export default accordion;
