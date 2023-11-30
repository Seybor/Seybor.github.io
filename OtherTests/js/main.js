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

const randomMistake = (min = -10, max = 10) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomNumbers = (min, max, count, arr, currentValue) => {
  if (max - min + 1 < count) {
    throw new Error('Невозможно сгенерировать указанное количество уникальных чисел');
  }

  const numbers = [];
  while (numbers.length < count) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    randomNumber = +arr[randomNumber] + currentValue;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
};

const render = function (complexity, score, type) {
  console.log('type ' + type);
  let min = 10;
  let max = 99;
  const MISTAKES_ARRAY = ['10', '20', '30', '40', '50', '-10', '-20', '-30', '-40', '-50'];

  let element = template.cloneNode(true);
  let labels = element.querySelectorAll('.tests__item-label');

  let numberOne = randomOne(min, max);
  let numberTwo = randomOne(min, max);
  let numberThree = randomOne(min, max);
  let numberFour = randomOne(min, max);
  let number;

  if (type == 2 || type == 3) {
    document.querySelector('.tests__lifes').style.display = 'block';
  }
  switch (complexity) {
    case '1':
      if (score >= 0) {
        element.querySelector('.tests__item-question').textContent = `${numberOne} + ${numberTwo} = ?`;
        number = numberOne + numberTwo;
      }
      if (score >= 5) {
        element.querySelector('.tests__item-question').textContent = `${numberOne} + ${numberTwo} + ${numberThree} = ?`;
        number = numberOne + numberTwo + numberThree;
      }
      if (score >= 10) {
        element.querySelector('.tests__item-question').textContent = `${numberOne} + ${numberTwo} - ${numberThree} = ?`;
        number = numberOne + numberTwo - numberThree;
      }
      if (score >= 15) {
        element.querySelector('.tests__item-question').textContent = `${numberOne} - ${numberTwo} - ${numberThree} = ?`;
        number = numberOne - numberTwo - numberThree;
      }
      if (score >= 20) {
        element.querySelector('.tests__item-question').textContent = `(${numberOne} + ${numberTwo}) -
        (${numberThree} - ${numberFour}) = ?`;
        number = numberOne + numberTwo - (numberThree - numberFour);
      }
      console.log('number' + ' ' + number);
      break;
    case '2':
      if (score >= 0) {
        element.querySelector('.tests__item-question').textContent = `${numberOne} - ${numberTwo} = ?`;
        number = numberOne - numberTwo;
      }
      if (score >= 5) {
        element.querySelector('.tests__item-question').textContent = `${numberOne} - ${numberTwo} - ${numberThree} = ?`;
        number = numberOne - numberTwo - numberThree;
      }
      if (score >= 10) {
        element.querySelector(
          '.tests__item-question'
        ).textContent = `${numberOne} - ${numberTwo} - ${numberThree} - ${numberFour} = ?`;
        number = numberOne - numberTwo - numberThree - numberFour;
      }
      if (score >= 15) {
        element.querySelector(
          '.tests__item-question'
        ).textContent = `${numberOne} + ${numberTwo} - ${numberThree} + ${numberFour} = ?`;
        number = numberOne + numberTwo - numberThree + numberFour;
      }
      if (score >= 20) {
        element.querySelector('.tests__item-question').textContent = `(${numberOne} - ${numberTwo}) -
        (${numberThree} + ${numberFour}) = ?`;
        number = numberOne - numberTwo - (numberThree + numberFour);
      }
      console.log('number' + ' ' + number);
      break;
    case '3':
      if (score >= 0) {
        element.querySelector('.tests__item-question').textContent = `${numberOne} * ${numberTwo} = ?`;
        number = numberOne * numberTwo;
      }
      if (score >= 5) {
        element.querySelector('.tests__item-question').textContent = `${numberOne} * ${numberTwo} - ${numberThree} = ?`;
        number = numberOne * numberTwo - numberThree;
      }
      if (score >= 10) {
        element.querySelector(
          '.tests__item-question'
        ).textContent = `${numberOne} * ${numberTwo} - ${numberThree} * ${numberFour} = ?`;
        number = numberOne * numberTwo - numberThree * numberFour;
      }
      if (score >= 15) {
        element.querySelector(
          '.tests__item-question'
        ).textContent = `(${numberOne} + ${numberTwo}) * ${numberThree} + ${numberFour} = ?`;
        number = (numberOne + numberTwo) * numberThree + numberFour;
      }
      if (score >= 20) {
        element.querySelector('.tests__item-question').textContent = `${numberOne} - ${numberTwo} *
        ${numberThree} + ${numberFour} = ?`;
        number = numberOne - numberTwo * numberThree + numberFour;
      }
      console.log('number' + ' ' + number);
      break;
    default:
      element.querySelector('.tests__item-question').textContent = `${numberOne} + ${numberTwo} = ?`;
      number = numberOne + numberTwo;
      console.log('number' + ' ' + number);
  }

  let mistakes = generateRandomNumbers(0, MISTAKES_ARRAY.length - 1, 4, MISTAKES_ARRAY, number);

  mistakes.push(number);

  for (let i = mistakes.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = mistakes[i];
    mistakes[i] = mistakes[j];
    mistakes[j] = t;
  }

  labels.forEach((el, id) => {
    el.querySelector('span').textContent = mistakes[id];
    el.querySelector('.tests__item-input').value = mistakes[id];
  });

  currentValue = number;

  return element;
};

const renderTasks = (value, score, type) => {
  testsContent.textContent = '';
  let fragment = document.createDocumentFragment();

  fragment.append(render(value, score, type));
  testsContent.append(fragment);

  yourChoice(value);
};

let intervalID = 0;

const timerStart = (type) => {
  clearInterval(intervalID);
  const TIME_INTERVAL = 1000;
  let time = 60;
  let modifier = 40;
  if (type == 1) {
    time = 60;
    modifier = 40;
  } else if (type == 2) {
    time = 20;
    modifier = 16;
  } else if (type == 3) {
    time = 25;
    modifier = 20;
  }

  testsTimer.style.backgroundColor = 'green';
  testsTimer.textContent = time;

  const timer = () => {
    time--;
    testsTimer.textContent = time;
    if (time >= modifier) {
      testsTimer.style.backgroundColor = 'green';
    } else if (time >= modifier / 2) {
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

let score = 0;
let lifes = 0;
let currentValue = 0;
let testsType;

const yourChoice = (difficult) => {
  console.log(difficult);
  let testsSpans;
  testsSpans = testsContent.querySelectorAll('.tests__item-label span');

  testsSpans.forEach((el) => {
    el.addEventListener('click', () => {
      testsType = document.querySelector('.tests__type-input:checked');
      if (el.textContent == currentValue) {
        score++;
        document.querySelector('.tests__scores span').textContent = score;
      } else if (score !== 0) {
        score--;
        document.querySelector('.tests__scores span').textContent = score;
      } else if (score == 0) {
        document.querySelector('.tests__scores span').textContent = score;
      }
      if (testsType.value == 2 || testsType.value == 3) {
        timerStart(testsType.value);
        if (el.textContent != currentValue) {
          if (lifes >= 2) {
            lifes--;
            document.querySelector('.tests__lifes span').textContent = lifes;
          } else {
            console.log(lifes);
            lifes = 0;
            console.log(lifes);
            document.querySelector('.tests__lifes span').textContent = lifes;
            document.querySelector('.tests__timer').style.display = 'none';
            testsContent.style.display = 'none';
          }
        }
      }

      renderTasks(difficult, score, testsType.value);
    });
  });
};

testStart.addEventListener('click', (evt) => {
  evt.preventDefault();

  const testsDifficult = document.querySelector('.tests__difficult:checked');
  testsType = document.querySelector('.tests__type-input:checked');

  renderTasks(testsDifficult.value, score, testsType.value);

  document.querySelector('.tests__timer').style.display = 'block';
  document.querySelector('.tests__scores').style.display = 'block';

  document.querySelector('.tests__fieldset').style.display = 'none';
  document.querySelector('.tests__type').style.display = 'none';

  if (testsType.value != 1) {
    if (testsType.value == 2) {
      lifes = 3;
    }
    if (testsType.value == 3) {
      lifes = 1;
    }
    document.querySelector('.tests__lifes').style.display = 'block';
    document.querySelector('.tests__lifes span').textContent = lifes;
  }

  testStart.style.display = 'none';

  testsContent.style.display = 'block';

  timerStart(testsType.value);
});


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

    document.querySelector('.tests__lifes').style.display = 'none';

    document.querySelector('.tests__fieldset').style.display = 'block';

    document.querySelector('.tests__type').style.display = 'block';



    testStart.style.display = 'block';



    score = 0;

    lifes = 3;

    document.querySelector('.tests__scores span').textContent = score;

  });

});


