"use strict";

//accordion
const accordion = () => {
  const acc = document.querySelector("#accordion-two"),
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

    acc.addEventListener("click", event => {
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
};

export default accordion;
