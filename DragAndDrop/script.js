'use strict';

const responseField = document.querySelector('#responseField');
const btnResult = document.querySelector('#btn-result');
const template = document.querySelector('#template').content.querySelector('p');
const content = document.querySelector('#items');
const question = document.querySelector('#question');

function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData('text', e.target.id);
}

let value = [];

function drop(e) {
  e.preventDefault();
  let data = e.dataTransfer.getData('text');
  let currentValue = document.getElementById(data);

  value.push(currentValue.textContent);
  console.log(value);

  e.currentTarget.append(currentValue);

  currentValue.draggable = false;
}

const ARRAY = [
  {
    ru: 'Что ты имеешь в виду?',
    en: 'What do you mean?',
  },
  {
    ru: 'Ты говоришь по английски прекрасно',
    en: 'You speak English perfectly',
  },
];

const MISTAKES = {
  ru: ['Да', 'Нет', 'Как'],
  en: ['how', 'your', 'wtf'],
};

const renderOffer = (words, id) => {
  let currentElement = template.cloneNode(true);

  currentElement.textContent = words;
  currentElement.id = `word${id}`;

  return currentElement;
};

const renderOfferStart = () => {
  let fragment = document.createDocumentFragment();
  let offer = ARRAY[0].ru.split(' ');

  for (let i = offer.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = offer[i];
    offer[i] = offer[j];
    offer[j] = t;
  }

  MISTAKES.ru.forEach((el) => {
    offer.push(el);
  });

  console.log(offer + ' ' + offer.length);

  for (let i = 0; i < offer.length; i++) {
    fragment.append(renderOffer(offer[i], i));
  }

  content.append(fragment);

  question.textContent = ARRAY[0].en;
};

renderOfferStart();

const words = document.querySelectorAll('.word-text');

words.forEach(function (el) {
  el.addEventListener('click', function (evt) {
    evt.preventDefault();
    content.append(el);
    el.draggable = true;
    console.log(el.textContent);

    const index = value.indexOf(el.textContent);
    if (index > -1) {
      value.splice(index, 1);
    }
    console.log(value);
  });
});

btnResult.addEventListener('click', (evt) => {
  evt.preventDefault();

  const result = value.join(' ');
  console.log(result);

  if (result === ARRAY[0].ru) {
    console.log('ДА');
    responseField.style.backgroundColor = 'green';
  } else {
    console.log('НЕТ');
    responseField.style.backgroundColor = 'red';
  }
});
