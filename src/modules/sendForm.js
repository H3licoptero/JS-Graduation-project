'use strict';

const sendForm = () => {
    const userName = document.querySelectorAll('[name=user_name]'),
    userPhone = document.querySelectorAll('[name=user_phone]'),
    forms = document.querySelectorAll('form');

    userName.forEach(elems =>
        elems.addEventListener('input', (event) => {
            let target = event.target;
            target.value = target.value.replace(/[^а-яА-ЯЁё ]$/gi, "");
        })
    );

    userPhone.forEach(elems => 
        elems.addEventListener('input', (event) => {
            let target = event.target;
            target.value = target.value.replace(/[^+\d]/g, "");
        })
    );
    
    const loadMessage = 'Идёт отправка...',
      errorMessage = 'Ошибка!',
      successMessage = 'Отправлено!';

    const statusMesage = document.createElement('div');
    statusMesage.style.cssText = "font-size: 18px";

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
            elems.appendChild(statusMesage);
            statusMesage.textContent = loadMessage;

            const formData = new FormData(elems);
            let body = {};

            formData.forEach((value, key) => {
                body[key] = value;
            });

            postData(body)
            .then(response => {
                if(response.status === 400) {
                    throw new Error('Data is not found');
                }

                if(response.status !== 200) {
                    throw new Error('Status network not 200');
                }

                statusMesage.textContent = successMessage;
                setTimeout(() => (statusMesage.textContent = ""), 5000);
                elems.reset();
            })
            .catch(error => {
                statusMesage.textContent = errorMessage;
                setTimeout(() => (statusMesage.textContent = ""), 5000);
                console.error(error);
            });
        });
    });

};

export default sendForm;