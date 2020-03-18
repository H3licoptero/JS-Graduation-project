'use strict';

const changeBody = () => {
    const constructor = document.querySelector(".constructor"),
     panelHeading = constructor.querySelectorAll(".panel-heading"),
     panelCollapse = constructor.querySelectorAll(".panel-collapse"),
     buttons = constructor.querySelectorAll(".construct-btn");

    panelHeading.forEach((caption, captionIndex) => {
      panelCollapse.forEach((content, contentIndex) => {
        caption.addEventListener("click", event => {
          event.preventDefault();
          if (captionIndex === contentIndex) {
            content.style.display = "block";
          } else {
            content.style.display = "none";
          }
        });
      });
    });

    buttons.forEach((button, index) => {
      if (index !== buttons.length - 1) {
        button.addEventListener("click", event => {
          event.preventDefault();
          button.parentNode.parentNode.style.display = "none";
          button.parentNode.parentNode.parentNode.nextElementSibling.childNodes[3].style.display = "block";
        });
      }
    });

};

export default changeBody;


