'use strict';

// ! task 6
{
  const backendLoad = (callback) => {
    const URL = 'https://24.javascript.pages.academy/code-and-magick/data';

    const onLoad = (answer) => {
      console.log(answer);
      callback(answer);
    };

    const onError = (error) => {
      console.log(error);
      callback(error);
    };

    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.open('GET', URL);
    xhr.send();
  };

  backendLoad((response) => {
    console.log(typeof response);

    if (typeof response === 'string') {
      userDialog.querySelector('.setup-similar').classList.add('hidden');
      return console.log('Загрузка не удалась');
    }

    const newWizards = response;
    console.log(newWizards);

    const randomNumber = (myArray, bigArray) => {
      let checkNumber = true;
      do {
        end: for (let i = 0; i < 4; i++) {
          myArray[i] = Math.floor(Math.random() * (bigArray.length - 1 - 0 + 1) + 0);

          if (i === 3) {
            checkNumber = true;
            for (let j = 0; j < 4; j++) {
              for (let k = j + 1; k < 4; k++) {
                if (myArray[j] === myArray[k]) {
                  checkNumber = false;
                  break end;
                }
              }
            }
          }
        }
      } while (checkNumber === false);
    };

    const newWizardsMinArray = [];
    randomNumber(newWizardsMinArray, newWizards);

    const renderWizard = function (value) {
      let wizardElement = wizardsTemplate.cloneNode(true);
      console.log(value);

      wizardElement.querySelector('.setup-similar-label').textContent = value.name;
      wizardElement.querySelector('.wizard-coat').style.fill = value.colorCoat;
      wizardElement.querySelector('.wizard-eyes').style.fill = value.colorEyes;

      return wizardElement;
    };

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(newWizards[newWizardsMinArray[i]]));
    }
    wizardsContent.appendChild(fragment);
  });

  // !

  const backendSave = (data, onLoad, onError) => {
    const URL = 'https://24.javascript.pages.academy/code-and-magick';

    onLoad = (answer) => {
      console.log(answer);
      userDialog.classList.add('hidden');
    };

    onError = (error) => {
      console.log(error);
    };

    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.open('POST', URL);
    xhr.send(data);
  };

  userForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log(evt);

    const formData = new FormData(userForm);
    console.log(formData);
    for (let [key, value] of formData) {
      console.log(`${key} - ${value}`);
    }
    backendSave(formData);
  });
}
