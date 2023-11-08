'use strict';

const ARRAY_ENGLISH = [
  'Help me please1',
  'Close the door1',
  'Close this door1',
  'Close that door1',
  'I could buy this think1',
  'Help me please2',
  'Close the door2',
  'Close this door2',
  'Close that door2',
  'I could buy this think2',
  'Help me please3',
  'Close the door3',
  'Close this door3',
  'Close that door3',
  'I could buy this think3',
];
const ARRAY_RUSSIAN = [
  'Помоги мне, пожалуйста1',
  'Закрой дверь1',
  'Закрой эту дверь1',
  'Закрой ту дверь1',
  'Я мог бы купить эту вещь1',
  'Помоги мне, пожалуйста2',
  'Закрой дверь2',
  'Закрой эту дверь2',
  'Закрой ту дверь2',
  'Я мог бы купить эту вещь2',
  'Помоги мне, пожалуйста3',
  'Закрой дверь3',
  'Закрой эту дверь3',
  'Закрой ту дверь3',
  'Я мог бы купить эту вещь3',
];

const template = document.querySelector('#template-one').content.querySelector('.testing__item');
const questionContent = document.querySelector('.testing__items');
const btn = document.querySelector('#testing__btn');
const result = document.querySelector('.result');

const start = document.querySelector('#testing__start');

function getResult() {
  var check = questionContent.querySelectorAll('.check');
  var str;
  var re;
  let j = 0;
  let newCheck = [];
  let resultNumber = choice.value;
  for (let i = 0; i < choice.value; i++) {
    str = input[i].value;
    re = ARRAY_RUSSIAN[newArray[i]];
    if (str == null || str.length == 0) {
      j++;
      newCheck.push(i);
    }
  }
  if (j > 0) {
    do {
      j--;
      input[newCheck[j]].classList.add('empty');
      input[newCheck[j]].placeholder = 'Поле пустое, введите значение';
    } while (j);
    return newCheck;
  }
  for (let i = 0; i < choice.value; i++) {
    str = input[i].value;
    re = ARRAY_RUSSIAN[newArray[i]];
    if (re === str) {
      input[i].classList.add('correctly');
      check[i].textContent = 'Это правильно';
    }
    if (re !== str) {
      input[i].classList.add('mistake');
      check[i].textContent = 'Неправильно, вот как нужно было: ' + ARRAY_RUSSIAN[newArray[i]];
      resultNumber--;
    }
  }
  result.textContent = 'Ваш результат: ' + resultNumber + ' из ' + choice.value;
}

const renderQuestions = function (english) {
  var questionElement = template.cloneNode(true);

  questionElement.querySelector('.testing__span').textContent = english;

  return questionElement;
};

let span;
let input;
let choice;

const renderStart = (value) => {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < value; i++) {
    fragment.appendChild(renderQuestions(ARRAY_ENGLISH[newArray[i]]));
  }
  questionContent.appendChild(fragment);
};

// ! Генерация случайных элементов массива

let newArray = [];

var randomNumber = (bigArray, value) => {
  var checkNumber = true;
  do {
    end: for (var i = 0; i < value; i++) {
      newArray[i] = Math.floor(Math.random() * (bigArray.length - 1 - 0 + 1) + 0);

      if (i === value - 1) {
        checkNumber = true;
        for (var j = 0; j < value; j++) {
          for (var k = j + 1; k < value; k++) {
            if (newArray[j] === newArray[k]) {
              checkNumber = false;
              break end;
            }
          }
        }
      }
    }
  } while (checkNumber === false);
  return console.log(newArray);
};

// !

start.addEventListener('click', () => {
  choice = document.querySelector('.testing__choice:checked');
  randomNumber(ARRAY_ENGLISH, choice.value);
  renderStart(choice.value);
  start.classList.add('visually-hidden');

  span = questionContent.querySelectorAll('.testing__span');
  input = questionContent.querySelectorAll('.testing__input');
  return choice;
});

btn.addEventListener('click', () => {
  getResult();
});
