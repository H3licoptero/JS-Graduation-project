'use strict';

//popup
let popup = () => {
  const callBtn = document.querySelectorAll(".call-btn"),
       popupCall = document.querySelector(".popup-call"),
       discountBtn = document.querySelectorAll('.discount-btn'),
       popupDiscount = document.querySelector('.popup-discount'),
       checkListBtn = document.querySelector('.gauging-button'),
       popupCheck = document.querySelector('.popup-check'),
       consutationBtn = document.querySelector('.consultation-btn'),
       popupConsultation = document.querySelector('.popup-consultation');    
  
    callBtn.forEach(elems => {
      elems.addEventListener("click", event => {
        let target = event.target;
        if (target) {
          popupCall.style.display = "block";
        }       
      });

      popupCall.addEventListener("click", event => {
        let target = event.target;

        if (target.matches(".popup-close") || target.matches(".popup-call")) {
          popupCall.style.display = "none";
        }
      });
    });

    popupCall.addEventListener("click", event => {
      let target = event.target;

      if (target.matches(".popup-close") || target.matches('.popup-call')) {
        popupCall.style.display = "none";
      }
    });

    discountBtn.forEach(elems => {
      elems.addEventListener("click", event => {
        let target = event.target;
        if (target) {
          popupDiscount.style.display = "block";
        }

      });
    
      popupDiscount.addEventListener("click", event => {
        let target = event.target;

        if (target.matches(".popup-close") || target.matches(".popup-discount")) {
          popupDiscount.style.display = "none";
        }
      });
    });


    checkListBtn.addEventListener('click', event => {
      let target = event.target;
      popupCheck.style.display = 'block';
    });

    popupCheck.addEventListener('click', event => {
      let target = event.target;
      if(target.matches('.popup-close') || target.matches('.popup-check')){
        popupCheck.style.display = "none";
      }
    });

    consutationBtn.addEventListener("click", event => {
      let target = event.target;
      popupConsultation.style.display = "block";
    });

    popupConsultation.addEventListener("click", event => {
      let target = event.target;
      if (target.matches(".popup-close") || target.matches(".popup-consultation")) {
        popupConsultation.style.display = "none";
      }
    });
};

export default popup;
