'use strict';

const accordion = () => {
    let acc = document.querySelectorAll('.panel-heading');
    let panelCollapse = document.querySelectorAll('.panel-collapse');    

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", () => {
           let target = event.target;
        if (target.matches(".panel-heading")) {
          let panel = target.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
          console.log(target);
        }
      });
    }

};

export default accordion;