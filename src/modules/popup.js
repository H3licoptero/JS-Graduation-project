'use strict';

//popup
let popup = () => {
  const callBtn = document.querySelectorAll(".call-btn"),
       popupCall = document.querySelector(".popup-call"),
       popupDiscount = document.querySelector('.popup-discount'),
       popupCheck = document.querySelector('.popup-check'),
       popupConsultation = document.querySelector('.popup-consultation'),
       popup = document.querySelectorAll('.popup'),
       buttons = document.querySelectorAll('.button');

      callBtn.forEach(elem => {
        elem.addEventListener('click', (event) => {
          let target = event.target;
          if(target) {
            popupCall.style.display = 'block';
          }
          event.preventDefault();
          console.log(target);
        });
      });

      for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', event => {
          let target = event.target;

          if (target.matches(".call-btn")) {
            popupCall.style.display = "block";
          }

          if(target.matches('.discount-btn')) {
            popupDiscount.style.display = 'block';
          }

          if(target.matches('.gauging-button')) {
            popupCheck.style.display = "block";
          }

          if (target.matches(".consultation-btn")) {
            popupConsultation.style.display = "block";
          }
        });
      }

       for (let i = 0; i < popup.length; i++) {
         popup[i].addEventListener("click", event => {
           let target = event.target;
           if (target.matches(".popup-close") || target.matches(".popup")) {
             popup[i].style.display = "none";
           }
         });
       }

};

export default popup;
