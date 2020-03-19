'use strict';

const changeBody = () => {
    const constructor = document.querySelector(".constructor"),
     panelHeading = constructor.querySelectorAll(".panel-heading"),
     panelCollapse = constructor.querySelectorAll(".panel-collapse"),
     buttons = constructor.querySelectorAll(".construct-btn");

    panelHeading.forEach((header, headerIndex) => {
      panelCollapse.forEach((content, contentIndex) => {
        header.addEventListener("click", event => {
          event.preventDefault();
          if (headerIndex === contentIndex) {
            content.style.display = "block";
          } else {
            content.style.display = "none";
          }
        });
      });
    });

    buttons.forEach((elems, index) => {
      if (index !== buttons.length - 1) {
        elems.addEventListener("click", event => {
          event.preventDefault();
          elems.parentNode.parentNode.style.display = "none";
          elems.parentNode.parentNode.parentNode.nextElementSibling.childNodes[3].style.display = "block";
        });
      }
    });

};

export default changeBody;


