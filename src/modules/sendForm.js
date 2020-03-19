'use strict';

import{
  object 
} from './calc';

const sendForm = () => {
  const userName = document.querySelectorAll("[name=user_name]"),
    userPhone = document.querySelectorAll("[name=user_phone]"),
    userQuest = document.querySelector("[name=user_quest]"),
    forms = document.querySelectorAll("form");
    
    
  userName.forEach(elems =>
    elems.addEventListener('input', (event) => {
        let target = event.target;
        target.value = target.value.replace(/[^а-яА-ЯЁё ]$/gi, "");
        event.preventDefault();
    })
  );

  userPhone.forEach(elems => 
    elems.addEventListener('input', (event) => {
        let target = event.target;
        target.value = target.value.replace(/[^+\d]/g, "");
    })
  );

  userQuest.addEventListener('input', event => {
      let target = event.target;
      target.value = target.value.replace(/[^а-яА-ЯЁё.,\?\!\+\-;:() ]$/gi, "");
  });
  
  const loadMessage = 'Идёт отправка...',
    errorMessage = 'Ошибка!',
    successMessage = 'Отправлено!';

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = "font-size: 18px";

  const postData = body => {
    return fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
  };

  forms.forEach(elems => {
  elems.addEventListener('submit', (event) => {
    let target = event.target;

    event.preventDefault();
    elems.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;

    const formData = new FormData(elems);
    let body = {};

    formData.forEach((value, key) => {
        body[key] = value;
    });

    if(forms) {
      body = Object.assign({}, object, body);
    }
    
    postData(body)
      .finally(() => {
        setTimeout(() => (statusMessage.textContent = ""), 5000);
      })
      .then(response => {
        if (response.status === 400) {
          throw new Error("Data is not found");
        }

        if (response.status !== 200) {
          throw new Error("Status network not 200");
        }

        statusMessage.textContent = successMessage;
        elems.reset();
      })
      .catch(error => {
        statusMessage.textContent = errorMessage;
        console.error(error);
      });
    });
  });
};

export default sendForm;