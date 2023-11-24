'use strict';

// ! task 6 inst
{
  const backendLoad = (callback) => {
    const URL = 'https://24.javascript.pages.academy/kekstagram/data';

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

  // ! backendLoad()

  backendLoad((response) => {
    console.log(typeof response);

    if (typeof response === 'string') {
      return console.log('Загрузка не удалась');
    }

    const newPhoto = response;
    console.log(newPhoto);
  });

  // ! form handler
}
