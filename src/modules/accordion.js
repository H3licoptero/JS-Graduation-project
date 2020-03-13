'use strict';

const accordion = () => {
    const accordion = document.querySelectorAll('.panel-heading'),
    panelCollapse = document.querySelectorAll('.panel-collapse');
    let panelBody = document.querySelectorAll('.panel-body');
    console.log(panelCollapse);
    console.log(panelBody);
    console.log(accordion);




    accordion.forEach((elem, item) => {
        elem.addEventListener('click', (event) => {
            let target = event.target;
            if(target.closest('panel-heading')){
              panelBody[item].classList.add('active');
            }
            console.log(target);
            
        });
    });
};

export default accordion;