'use strict';

//popup
let popup = () => {
  const callBtn = document.querySelectorAll(".call-btn"),
       popupCall = document.querySelector(".popup-call");
  
  callBtn.forEach(elems => {
     elems.addEventListener("click", event => {
       let target = event.target;
       if (target) {
         popupCall.style.display = "block";
       }       
     });
});

    popupCall.addEventListener("click", event => {
      let target = event.target;
      if(target.matches('.call-btn')) {
        popupCall.style.display = "block";
      }

      if (target.matches(".popup-close") || target.matches('.popup-call')) {
        popupCall.style.display = "none";
      }
    });
  
};

export default popup;
