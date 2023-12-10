'use strict';

const cryptographer = (word, arrKeys, numbers) => {
  let valueOne = word.split('');
  let valueTwo = [];

  valueOne.forEach((el) => {
    valueTwo.push(el.codePointAt());
  });

  console.log('cryptographer ' + valueTwo);

  valueOne = [];
  valueTwo.forEach((el) => {
    valueOne.push(el.toString(2));
  });

  console.log('18 ' + valueOne + ' ' + valueOne.length);

  if (numbers === true) {
    return (valueOne = valueOne.join(''));
  }

  valueTwo = [];
  for (let i = 0; i < valueOne.length; i++) {
    let currentValue = parseInt(valueOne[i], 2);
    valueTwo.push(currentValue);
  }

  console.log('26 ' + valueTwo);

  valueOne = valueTwo.join('').split('');

  console.log('30 ' + valueOne);

  valueTwo = [];

  valueOne.forEach((el) => {
    valueTwo.push(arrKeys[el]);
  });

  valueOne = valueTwo.join('');

  console.log('40 ' + valueOne);

  return valueOne;
};

const decryption = (word, arrKeys) => {
  let valueOne = word.split('');
  let valueTwo = [];

  console.log('decryption 47: ' + valueOne);

  valueOne.forEach((el) => {
    let index = arrKeys.findIndex((currentValue) => currentValue == el);
    valueTwo.push(index);
  });

  console.log('56: ' + valueTwo);

  valueOne = [];
  let i = 0;
  do {
    let str = '';
    if (valueTwo[i] != 1) {
      str = `${valueTwo[i]}${valueTwo[i + 1]}`;
      i += 2;
    } else {
      str = `${valueTwo[i]}${valueTwo[i + 1]}${valueTwo[i + 2]}`;
      i += 3;
    }
    valueOne.push(str);
  } while (i < valueTwo.length);

  console.log('72: ' + valueOne);

  valueTwo = [];

  for (let i = 0; i < valueOne.length; i++) {
    let currentValue = Number(valueOne[i]).toString(2);
    valueTwo.push(currentValue);
  }

  console.log('81: ' + valueTwo);

  valueOne = [];

  valueTwo.forEach((el) => {
    valueOne.push(parseInt(el, 2));
  });

  console.log('89: ' + valueOne);

  valueTwo = [];

  valueOne.forEach((el) => {
    valueTwo.push(String.fromCharCode(el));
  });

  valueOne = valueTwo.join('');

  return valueOne;
};

let various = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и'];

let input = document.querySelector('.input');
let button = document.querySelector('.check');
let spanCode = document.querySelector('.code');
let spanNumber = document.querySelector('.number');
let spanAgain = document.querySelector('.again');

button.addEventListener('click', () => {
  input = document.querySelector('.input');

  if (input.value) {
    let checkOne = input.value.split('');
    let checkTwo = checkOne.filter((item) => !/^[a-zA-Z]+$/.test(item));

    if (checkTwo.length !== 0) {
      return alert('Без русских букв');
    }

    let code = cryptographer(input.value, various, false);
    let newStr = decryption(code, various);

    spanCode.textContent = code;
    spanNumber.textContent = cryptographer(input.value, various, true);
    spanAgain.textContent = newStr;
  }
});
