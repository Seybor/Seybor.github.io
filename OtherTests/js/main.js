'use strict';

const header = document.querySelector('.header');

const headerLinks = header.querySelectorAll('.menu__link');

const tests = document.querySelectorAll('.tests');

const testStart = document.querySelector('.tests__start');

const template = document.querySelector('#template-math').content.querySelector('.tests__item');

const testsContent = document.querySelector('.tests__items');

const testsTimer = document.querySelector('.tests__timer span');






const randomOne = (min = 10, max = 99) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomTwo = (min = 10, max = 99) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomMistake = (min = -10, max = 10) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomNumbers = (min, max, count, currentValue) => {
  if (max - min + 1 < count) {
    throw new Error('Невозможно сгенерировать указанное количество уникальных чисел');
  }

  const numbers = [];
  while (numbers.length < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min + currentValue;
    if (randomNumber === currentValue) {
      continue;
    }
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
};

const render = function (complexity) {
  let min = 10;
  let max = 99;
  let numberMin = -5;
  let numberMax = 5;
  const numberCount = 3;

  let element = template.cloneNode(true);
  let labels = element.querySelectorAll('.tests__item-label');

  let numberOne = randomOne(min, max);
  let numberTwo = randomTwo(min, max);
  let number;

  switch (complexity) {
    case 1:
      element.querySelector('.tests__item-question').textContent = `${numberOne} + ${numberTwo} = ?`;
      number = numberOne + numberTwo;
      console.log(number);
      break;
    case 2:
      element.querySelector('.tests__item-question').textContent = `${numberOne} - ${numberTwo} = ?`;
      number = numberOne - numberTwo;
      console.log(number);
      break;
    case 3:
      element.querySelector('.tests__item-question').textContent = `${numberOne} * ${numberTwo} = ?`;
      number = numberOne * numberTwo;
      console.log(number);
      break;
    default:
      element.querySelector('.tests__item-question').textContent = `${numberOne} + ${numberTwo} = ?`;
      number = numberOne + numberTwo;
      console.log(number);
  }

  let mistakes = generateRandomNumbers(numberMin, numberMax, numberCount, number);
  mistakes.push(number);
  mistakes.sort((a, b) => a - b);
  console.log(mistakes);

  labels.forEach((el, id) => {
    el.querySelector('span').textContent = mistakes[id];
    el.querySelector('.tests__item-input').value = mistakes[id];
  });

  currentValue = number;

  return element;
};

const renderTasks = (value) => {
  testsContent.textContent = '';
  let fragment = document.createDocumentFragment();
  if (value === '1') {
    console.log(1);
    fragment.append(render(1));
  }
  if (value === '2') {
    console.log(2);
    fragment.append(render(2));
  }
  if (value === '3') {
    console.log(3);
    fragment.append(render(3));
  }
  testsContent.append(fragment);

  yourChoice(value);
};

let intervalID = 0;

const timerStart = () => {
  clearInterval(intervalID);
  const TIME_INTERVAL = 1000;
  let time = 60;
  testsTimer.style.backgroundColor = 'green';
  testsTimer.textContent = time;

  const timer = () => {
    time--;
    testsTimer.textContent = time;
    if (time >= 40) {
      testsTimer.style.backgroundColor = 'green';
    } else if (time >= 20) {
      testsTimer.style.backgroundColor = 'yellow';
    } else {
      testsTimer.style.backgroundColor = 'red';
    }
    if (time <= 0) {
      clearInterval(intervalID);
      testsContent.style.display = 'none';
    }
  };

  intervalID = setInterval(timer, TIME_INTERVAL);
};

headerLinks.forEach(function (el) {
  el.addEventListener('click', function (evt) {
    evt.preventDefault();
    headerLinks.forEach((el) => {
      el.style = '';
    });
    el.style.color = 'green';
    tests.forEach((el) => {
      el.classList.remove('active');
    });
    testsContent.textContent = '';
    document.getElementById(this.dataset.item).classList.add('active');
    document.querySelector('.tests__timer').style.display = 'none';
    document.querySelector('.tests__scores').style.display = 'none';
    document.querySelector('.tests__fieldset').style.display = 'block';
    testStart.style.display = 'block';
  });
});

let score = 0;
let currentValue = 0;

const yourChoice = (difficult) => {
  console.log(difficult);
  let testsSpans;
  testsSpans = testsContent.querySelectorAll('.tests__item-label span');

  testsSpans.forEach((el) => {
    el.addEventListener('click', () => {
      if (el.textContent == currentValue) {
        score++;
        document.querySelector('.tests__scores span').textContent = score;
      } else if (score !== 0) {
        score--;
        document.querySelector('.tests__scores span').textContent = score;
      } else if (score == 0) {
        document.querySelector('.tests__scores span').textContent = score;
      }
      renderTasks(difficult);
    });
  });
};

testStart.addEventListener('click', (evt) => {
  evt.preventDefault();

  const testsDifficult = document.querySelector('.tests__difficult:checked');

  renderTasks(testsDifficult.value);

  document.querySelector('.tests__timer').style.display = 'block';
  document.querySelector('.tests__scores').style.display = 'block';
  document.querySelector('.tests__fieldset').style.display = 'none';
  testStart.style.display = 'none';

  timerStart();
});

